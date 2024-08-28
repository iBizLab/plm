import { computed, defineComponent, Ref, ref, watch } from 'vue';
import {
  getEditorEmits,
  getRawProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { isArray } from 'lodash-es';
import { RawActivityEditorController } from './raw-activity.controller';
import './raw-activity.scss';

export const RawActivity = defineComponent({
  name: 'RawActivity',
  props: getRawProps<RawActivityEditorController>(),
  emits: getEditorEmits(),
  setup(props) {
    const ns = useNamespace('raw');
    const ns2 = useNamespace('raw-activity');
    const c = props.controller;
    const editorModel = c.model;

    // 传入内容
    const content: Ref<string | number | undefined> = ref('');

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
            let obj: IData[] = [];
            if (typeof newVal === 'string') {
              try {
                obj = JSON.parse(newVal);
                obj.forEach(o => {
                  if (o.dataauditdetailname === 'TAGS') {
                    if (o.newvalue) {
                      const newvalue = JSON.parse(o.newvalue);
                      if (isArray(newvalue)) {
                        o.newvalue = newvalue.map(v => v.name).join(',');
                      }
                    }
                    if (o.oldvalue) {
                      const oldvalue = JSON.parse(o.oldvalue);
                      if (isArray(oldvalue)) {
                        o.oldvalue = oldvalue.map(v => v.name).join(',');
                      }
                    }
                  }
                });
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

    const handleClick = async (e: MouseEvent): Promise<void | null> => {
      const clickValue = (e.target as HTMLElement).getAttribute('click');
      if (!clickValue) {
        return;
      }
      try {
        // eslint-disable-next-line no-eval
        eval(clickValue);
      } catch (error) {
        ibiz.log.error(`${clickValue} 脚本执行错误`);
      }
    };

    const renderContent = (): JSX.Element => {
      return type === 'HTML' ? (
        <div
          class={ns2.e('paragraph')}
          v-html={content.value}
          onClick={(e: MouseEvent) => {
            handleClick(e);
          }}
        ></div>
      ) : (
        <span class={ns2.e('text')}>{content.value}</span>
      );
    };

    const onContrast = (name: string): void => {
      try {
        const array: IData[] = JSON.parse(props.value as string);
        if (array) {
          const steps = array.find(a => a.dataauditdetailname === name);
          if (steps) {
            const step = {
              name,
              oldValue: steps.oldvalue,
              newValue: steps.newvalue,
            };
            c.openContrastModal(step);
          }
        }
      } catch (error) {
        ibiz.log.error('JSON字符串转换错误');
      }
    };

    return {
      ns,
      ns2,
      onContrast,
      renderContent,
      showFormDefaultContent,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.ns2.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
      >
        {this.renderContent()}
      </div>
    );
  },
});
