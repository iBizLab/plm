import { computed, defineComponent, Ref, ref, watch } from 'vue';
import {
  getEditorEmits,
  getRawProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { RawEditorController } from './controller';
import { AnchoHtmlNavBar } from './component';

export const AnchoHtml = defineComponent({
  name: 'AnchoHtml',
  props: getRawProps<RawEditorController>(),
  emits: getEditorEmits(),
  setup(props) {
    const ns = useNamespace('raw');
    const c = props.controller;
    const editorModel = c.model;

    // 传入内容
    const content: Ref<string | number | undefined> = ref('');

    const title = ref('');

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
    if (editorModel.editorParams?.TITLE) {
      title.value = props.data[editorModel.editorParams.TITLE];
    }
    // TODO 等接口有了放开
    // if (editorModel.template) {
    //   template = editorModel.template.replaceAll('//n', '\n');
    // }

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (
        (props as IParams).controlParams &&
        (props as IParams).controlParams.editmode === 'hover'
      ) {
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

    return {
      ns,
      content,
      type,
      template,
      title,
      showFormDefaultContent,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
      >
        {this.content && (
          <AnchoHtmlNavBar
            class={this.ns.b('content')}
            content={this.content}
            type={this.type}
            title={this.title}
          ></AnchoHtmlNavBar>
        )}
      </div>
    );
  },
});
