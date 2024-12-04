/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ref, watch, defineComponent, onMounted } from 'vue';
import {
  getInputProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { createUUID } from 'qx-util';
import { JsonSchemaController } from './json-schema.controller';
import './json-schema.scss';

export const JsonSchema = defineComponent({
  name: 'JsonSchema',
  props: getInputProps<JsonSchemaController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('json-schema');

    const c: JsonSchemaController = props.controller!;

    const editorRef = ref();

    const uuid = `json-schema${createUUID()}`;

    let amisScoped: IData | null = null;

    const initJsonSchema = (state: boolean) => {
      const amis = (window as IData).amisRequire('amis/embed');
      amisScoped = amis.embed(
        `#${uuid}`,
        {
          type: 'page',
          name: 'page',
          body: {
            type: 'form',
            name: 'form',
            title: 'json-schema-editor',
            mode: 'horizontal',
            actions: [
              {
                type: 'submit',
                label: '确定',
                disabled: state,
              },
            ],
            body: [
              {
                type: 'json-schema-editor',
                name: 'schema',
                label: false,
                disabled: state,
                enableAdvancedSetting: c.enableAdvancedSetting,
                advancedSettings: {
                  string: [
                    {
                      type: 'select',
                      name: 'enumsource',
                      label: '字典',
                      autoComplete: '/msg_packages/dicts?query=$term',
                    },
                    {
                      type: 'select',
                      name: 'format',
                      label: '格式化',
                      options: [
                        {
                          label: 'yyyy-MM-dd',
                          value: 'yyyy-MM-dd',
                        },
                        {
                          label: 'yyyy-MM-dd HH:mm:ss',
                          value: 'yyyy-MM-dd HH:mm:ss',
                        },
                      ],
                    },
                    {
                      type: 'input-text',
                      name: 'minlength',
                      label: '最小长度',
                    },
                    {
                      type: 'input-text',
                      name: 'maxlength',
                      label: '最大长度',
                    },
                    {
                      type: 'input-text',
                      name: 'pattern',
                      label: '正则表达式',
                    },
                    {
                      name: 'uniqueitems',
                      type: 'switch',
                      label: '唯一标识',
                      trueValue: 1,
                      falseValue: 0,
                    },
                  ],
                  number: [
                    {
                      type: 'select',
                      name: 'enumsource',
                      label: '字典',
                      autoComplete: '/msg_packages/dicts?query=$term',
                    },
                    {
                      type: 'input-text',
                      name: 'format',
                      label: '格式化',
                    },
                    {
                      type: 'input-number',
                      name: 'minimum',
                      label: '最小值',
                    },
                    {
                      type: 'input-number',
                      name: 'maximum',
                      label: '最大值',
                    },
                    {
                      type: 'input-text',
                      name: 'pattern',
                      label: '正则表达式',
                    },
                    {
                      name: 'uniqueitems',
                      type: 'switch',
                      label: '唯一标识',
                      trueValue: 1,
                      falseValue: 0,
                    },
                  ],
                  integer: [
                    {
                      type: 'select',
                      name: 'enumsource',
                      label: '字典',
                      autoComplete: '/msg_packages/dicts?query=$term',
                    },
                    {
                      type: 'input-text',
                      name: 'format',
                      label: '格式化',
                    },
                    {
                      type: 'input-number',
                      name: 'minimum',
                      label: '最小值',
                    },
                    {
                      type: 'input-number',
                      name: 'maximum',
                      label: '最大值',
                    },
                    {
                      type: 'input-text',
                      name: 'pattern',
                      label: '正则表达式',
                    },
                    {
                      name: 'uniqueitems',
                      type: 'switch',
                      label: '唯一标识',
                      trueValue: 1,
                      falseValue: 0,
                    },
                  ],
                  object: [
                    {
                      type: 'select',
                      name: 'refschema',
                      label: '引用',
                      autoComplete:
                        '/msg_packages/schemas?query=$term&n_id_eq=$value',
                    },
                  ],
                },
              },
            ],
          },
        },
        {},
        {
          fetcher: (config: {
            url: string; // 接口地址
            method: string; // 请求方法 get、post、put、delete
            data: any; // 请求数据
            responseType: any;
            config: any; // 其他配置
            headers: any; // 请求头
          }) => {
            return (ibiz.net as any)[config.method](
              config.url,
              config.data,
              config.config,
            );
          },
          tracker: (eventTrack: any, event: any) => {
            const { eventType } = eventTrack;
            if (eventType === 'submit') {
              // 抛出数据
              if (event && event.data && event.data.schema) {
                const obj = event.data.schema;
                if (obj && !state) {
                  emit('change', obj);
                }
              }
            }
          },
        },
      );
    };

    const setJsonData = () => {
      if (amisScoped && amisScoped.getComponentByName) {
        const tempcom = amisScoped.getComponentByName('page.form');
        const { value } = props;
        if (tempcom) {
          if (typeof value === 'object' && value !== null) {
            tempcom.setData({ schema: value });
          } else {
            tempcom.setData({ schema: { type: 'object' } });
          }
        }
      }
    };

    onMounted(() => {
      const state = c.disabled || c.readonly;
      initJsonSchema(state);
      setTimeout(() => {
        setJsonData();
      }, 500);
    });

    watch(
      () => props.value,
      newVal => {
        if (amisScoped) {
          const tempcom = amisScoped.getComponentByName('page.form');
          if (tempcom) {
            if (typeof newVal === 'object' && newVal !== null) {
              tempcom.setData({ schema: newVal });
            } else {
              tempcom.setData({ schema: { type: 'object' } });
            }
          }
        }
      },
      { immediate: true },
    );

    return {
      ns,
      c,
      uuid,
      editorRef,
    };
  },
  render() {
    return <div ref='editorRef' id={this.uuid} class={[this.ns.b()]}></div>;
  },
});
