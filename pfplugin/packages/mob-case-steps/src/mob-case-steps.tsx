/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import { computed, defineComponent, reactive, toRaw, watch } from 'vue';
import { useCtx, useNamespace } from '@ibiz-template/vue3-util';
import {
  EditFormController,
  IEditFormController,
} from '@ibiz-template/runtime';
import { IDEFormDetail, IDEFormItem } from '@ibiz/model-core';
import { recursiveIterate } from '@ibiz-template/core';
import { CaseStepsTable } from './case-steps-table/case-steps-table';
import { MobCaseStepsController } from './mob-case-steps.controller';
import './mob-case-steps.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IBizMobCaseSteps: any = defineComponent({
  name: 'IBizMobCaseSteps',
  props: {
    controller: {
      type: MobCaseStepsController,
      required: true,
    },
  },
  emits: {
    change: (_value: IData[]) => true,
  },
  setup(props, { emit }) {
    const ns = useNamespace('mob-case-steps');
    const c = props.controller;
    const formItems: IDEFormItem[] = [];

    const indexMap = computed(() => {
      const result: string[] = [];
      let tempIndex: number = 0;
      let tempSubIndex: number = 0;
      if (c.value) {
        c.value.forEach((data: IData, index: number) => {
          if (data[c.groupField] || !index || !data[c.parentField]) {
            tempIndex++;
            tempSubIndex = 0;
            result.push(`${tempIndex}`);
          } else {
            tempSubIndex++;
            result.push(`${tempIndex}.${tempSubIndex}`);
          }
        });
      }
      return result;
    });
    // 遍历所有的项，如果有逻辑的话加入
    recursiveIterate(
      props.controller.repeatedForm,
      (item: IDEFormDetail) => {
        if (item.detailType === 'FORMITEM') {
          formItems.push(item);
        }
      },
      {
        childrenFields: ['deformPages', 'deformTabPages', 'deformDetails'],
      },
    );

    const ctx = useCtx();

    const getFormControllerIndex = (formC: EditFormController) => {
      const items = props.controller.value || [];
      return items.findIndex(
        (x: IData) => formC.state.data[c.entityKey] === x[c.entityKey],
      );
    };

    const formControllers = reactive<IEditFormController[]>([]);
    const addFormController = async (_index: number, data: IData = {}) => {
      const formC = new EditFormController(
        props.controller.repeatedForm,
        props.controller.context,
        props.controller.params,
        ctx,
      );
      formC.state.isSimple = true;
      await formC.created();
      formC.setSimpleData(data);
      formControllers.splice(_index, 0, formC);
    };

    const getFormController = (item: IData) => {
      const id = item[c.entityKey];
      return formControllers.find(x => x.state.data[c.entityKey] === id);
    };

    watch(
      () => props.controller.value as IData[] | null,
      newVal => {
        if (newVal && newVal.length > 0) {
          newVal.forEach((item, index) => {
            const formC = getFormController(item) as
              | EditFormController
              | undefined;
            if (formC) {
              const changeVal = item || {};
              // 找有没有不一致的属性
              const find = Object.keys(formC.data).find(key => {
                return changeVal[key] !== formC.data[key];
              });
              // 内外部数据不一致时，只能是外部修改了，这是更新数据并重走load
              if (find) {
                formC.setSimpleData(changeVal);
              }
            } else {
              addFormController(index, item);
            }
          });
        }
      },
      { immediate: true, deep: true },
    );

    const renderContent = () => {
      const result: IData = {};
      formItems.forEach(item => {
        if (!item.hidden) {
          result[item.id!] = (opts: IData) => {
            const { row } = opts;
            const formC = toRaw(getFormController(row)) as EditFormController;
            if (!formC || !formC.state.isLoaded) {
              return <div>不存在或加载中</div>;
            }
            const formItemC = formC.formItems.find(x => x.name === item.id)!;
            // if (!formItemC.value) {
            //   return null;
            // }
            if (!formItemC.state.visible) {
              return null;
            }
            const { width } = formItemC.model;
            const style: IData = {};
            if (width) {
              style.width = `${width}px`;
              style.flex = 'none';
            }
            let editor = null;
            if (!formItemC.editorProvider) {
              editor = <not-supported-editor modelData={item.editor} />;
            } else {
              editor = <div>{formItemC.value}</div>;
            }

            return (
              <div
                style={style}
                class={[ns.e('grid-edit-item'), ...formItemC.containerClass]}
              >
                {editor}
              </div>
            );
          };
        }
      });
      return result;
    };

    return {
      ns,
      c,
      formItems,
      indexMap,
      formControllers,
      renderContent,
    };
  },
  render() {
    return (
      <div class={[this.ns.b()]}>
        <CaseStepsTable
          class={[
            this.ns.e('table'),
            this.ns.is(
              'disabled',
              !this.controller.enableCreate && !this.controller.enableDelete,
            ),
          ]}
          model={this.c.model}
          data={(this.controller.value as IData[]) || []}
          columns={this.formItems}
          indexProps={{ width: 66, align: 'center' }}
          onDragChange={(data: IData[]) => this.c.setValue(data)}
        >
          {{
            index: (opts: IData) => {
              const { $index } = opts;
              return <span>{this.indexMap[$index]}</span>;
            },
            ...this.renderContent(),
          }}
        </CaseStepsTable>
      </div>
    );
  },
});

export default IBizMobCaseSteps;
