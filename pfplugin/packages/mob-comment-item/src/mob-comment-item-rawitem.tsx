/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import { computed, defineComponent, Ref, ref, watch } from 'vue';
import {
  getEditorEmits,
  getRawProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { MobCommentItemRawItemController } from './mob-comment-item-rawitem.controller';
import './mob-comment-item-rawitem..scss';

export const MobCommentItemRawItem = defineComponent({
  name: 'MobCommentItemRawItem',
  props: getRawProps<MobCommentItemRawItemController>(),
  emits: getEditorEmits(),
  setup(props) {
    const ns = useNamespace('raw');
    const c = props.controller;
    const editorModel = c.model;

    // 传入内容
    const content: Ref<string | number | undefined> = ref('');

    const showImg = ref(false);

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

    /**
     * 解析emoji表情
     *
     * @param {string} value
     * @return {*}  {string}
     */
    const getEmojiCustomHtml = (value: string): string => {
      return value
        .replaceAll(/{"emoji":"(.+?)"}/g, (x, emoji) => {
          const tempVal = decodeURIComponent(atob(emoji));
          return `<span class="emoji-tag">${tempVal}</span>`;
        })
        .replaceAll(
          /<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g,
          (x, emoji) => {
            const tempVal = decodeURIComponent(atob(emoji));
            return `<span data-w-e-type="emoji" class='emoji'>${tempVal}</span>`;
          },
        );
    };

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
          content.value = getEmojiCustomHtml(
            content.value ? `${content.value}` : '',
          );
          content.value = content.value.replaceAll('&quot;', '"');
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

    const onClick = (event: MouseEvent) => {
      event.stopPropagation();
      if ((event.target as HTMLElement)?.tagName === 'IMG') {
        showImg.value = true;
        previewUrl.value = (event.target as HTMLImageElement)?.src;
      }
    };

    return {
      ns,
      c,
      rawRef,
      previewRef,
      content,
      previewUrl,
      type,
      showImg,
      template,
      htmlCode,
      showFormDefaultContent,
      previewSrcList,
      onClick,
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
        onClick={this.onClick}
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
        <van-popup v-model:show={this.showImg} class={this.ns.e('image-popup')}>
          <iBizPreviewImage url={this.previewUrl} />
        </van-popup>
      </div>
    );
  },
});
