/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import { computed, defineComponent, nextTick, Ref, ref, watch } from 'vue';
import {
  getEditorEmits,
  getRawProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { CommentItemRawItemEditorController } from './comment-item-rawitem-editor.controller';
import './comment-item-rawitem.scss';

export const CommentItemRawItem = defineComponent({
  name: 'CommentItemRawItem',
  props: getRawProps<CommentItemRawItemEditorController>(),
  emits: getEditorEmits(),
  setup(props) {
    const ns = useNamespace('raw');
    const c = props.controller;
    const editorModel = c.model;

    // 传入内容
    const content: Ref<string | number | undefined> = ref('');

    // 预览图片地址
    const previewUrl = ref('');

    // 图片预览ref
    const previewRef = ref();

    // 直接内容ref
    const rawRef = ref();

    // 预览图片集合,此变量用于控制图片模态的显示隐藏,为空时会关闭模态,element图片组件未支持控制是否显示的属性
    const previewSrcList: Ref<string[] | []> = ref([]);

    // 类型
    let type = 'TEXT';
    // handlerBars模版
    let template = '';
    if (editorModel.contentType) {
      type = editorModel.contentType;
    }
    if (editorModel.editorParams?.contenttype) {
      type = editorModel.editorParams?.contenttype;
    }
    if (editorModel.editorParams?.template) {
      template = editorModel.editorParams.template.replaceAll('//n', '\n');
    }
    if (editorModel.editorParams?.TEMPLATE) {
      template = editorModel.editorParams.TEMPLATE.replaceAll('//n', '\n');
    }

    // TODO 等接口有了放开
    // if (editorModel.template) {
    //   template = editorModel.template.replaceAll('//n', '\n');
    // }

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (props.controlParams && props.controlParams.editmode === 'hover') {
        return true;
      }
      return false;
    });

    watch(
      () => props.value,
      async (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (typeof newVal === 'string' || typeof newVal === 'number') {
            content.value = newVal;
          }
          if (template && newVal) {
            let obj = null;
            if (typeof newVal === 'string') {
              try {
                obj = JSON.parse(newVal);
              } catch (error) {
                ibiz.log.error('JSON字符串转换错误');
              }
            }
            content.value = await ibiz.util.hbs.render(
              template,
              (obj || newVal) as IData,
            );
          }
        }
      },
      {
        immediate: true,
      },
    );

    const htmlCode = computed(() => {
      if (c.scriptCode) {
        return props.controller.getPanelItemCustomHtml(c.scriptCode, {
          content: content.value,
        });
      }
      return '';
    });

    // 打开图片预览框
    const openPreview = async (url: string) => {
      previewUrl.value = url;
      // 打开预览图片模态
      previewSrcList.value = [url];
      await nextTick();
      if (previewRef.value) {
        const { container } = previewRef.value.$refs;
        if (container) {
          container.children[0].click();
        }
      }
    };

    const setImgsHook = async () => {
      await nextTick();
      if (rawRef.value) {
        const imgs: IData[] = rawRef.value.querySelectorAll('img');
        imgs.forEach(img => {
          img.onclick = (event: IData) => {
            const el: IData | null = event.target;
            if (el) {
              openPreview(el.src);
            }
          };
        });
      }
    };

    /**
     * 处理绑定或卸载事件
     */
    const handleEventListener = (funcName: string) => {
      if (previewRef.value) {
        const { container } = previewRef.value.$refs;
        if (container) {
          const imgEl = container.querySelector('.el-image-viewer__wrapper');
          // eslint-disable-next-line no-use-before-define
          imgEl?.[funcName]('keydown', handleKeyPress);
        }
      }
    };

    /**
     * 处理键盘事件
     */
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        event.stopPropagation(); // 阻止事件冒泡到其他元素
        event.preventDefault(); // 阻止事件的默认行为
        await nextTick();
        handleEventListener('removeEventListener');
        // 关闭预览图片模态
        previewSrcList.value = [];
      }
    };

    /**
     * 打开图片预览
     */
    const onShow = async () => {
      await nextTick();
      handleEventListener('addEventListener');
    };

    watch(
      () => htmlCode,
      () => {
        setImgsHook();
      },
      { immediate: true },
    );

    return {
      ns,
      c,
      rawRef,
      previewRef,
      content,
      previewUrl,
      type,
      template,
      htmlCode,
      showFormDefaultContent,
      previewSrcList,
      onShow,
      handleKeyPress,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.ns.is('comment-item', true),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
      >
        {this.htmlCode ? (
          <div
            ref='rawRef'
            class={this.ns.e('script')}
            v-html={this.htmlCode}
          ></div>
        ) : (
          this.content && (
            <iBizRawItem
              class={this.ns.b('content')}
              content={this.content}
              type={this.type}
            ></iBizRawItem>
          )
        )}
        <el-image
          class={this.ns.e('preview')}
          ref='previewRef'
          zoom-rate={1.1}
          src={this.previewUrl}
          preview-src-list={this.previewSrcList}
          hide-on-click-modal={true}
          onShow={this.onShow}
          fit='cover'
        />
      </div>
    );
  },
});
