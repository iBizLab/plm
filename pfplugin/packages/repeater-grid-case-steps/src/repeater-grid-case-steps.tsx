/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import {
  VNode,
  computed,
  defineComponent,
  h,
  reactive,
  resolveComponent,
  toRaw,
  watch,
} from 'vue';
import {
  EditFormController,
  EventBase,
  FormItemController,
  IEditFormController,
} from '@ibiz-template/runtime';
import { useCtx, useNamespace } from '@ibiz-template/vue3-util';
import { recursiveIterate } from '@ibiz-template/core';
import { IDEFormDetail, IDEFormItem } from '@ibiz/model-core';
import { RepeaterGridCaseStepsController } from './repeater-grid-case-steps-controller';
import { CaseStepsTable } from './case-steps-table/case-steps-table';
import './repeater-grid-case-steps.scss';

export const RepeaterGridCaseSteps = defineComponent({
  name: 'IBizRepeaterGridCaseSteps',
  props: {
    controller: {
      type: RepeaterGridCaseStepsController,
      required: true,
    },
  },
  emits: {
    change: (_value: IData[]) => true,
  },
  setup(props) {
    const ns = useNamespace('repeater-grid');
    const formItems: IDEFormItem[] = [];
    const c = props.controller;

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

    const onSingleValueChange = (value: IData, index: number) => {
      const arrData = [...(props.controller.value as IData[])];
      arrData[index] = value;
      c.setValue(arrData);
    };

    const ctx = useCtx();
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
      formC.evt.on('onFormDataChange', (event: EventBase) => {
        // 隔离抛出不一样的对象
        const formData = { ...event.data[0] };
        const index = getFormControllerIndex(formC);
        onSingleValueChange(formData, index);
      });
    };

    const getFormController = (item: IData) => {
      const id = item[c.entityKey];
      return formControllers.find(x => x.state.data[c.entityKey] === id);
    };

    const getFormControllerIndex = (formC: EditFormController) => {
      const items = props.controller.value || [];
      return items.findIndex(
        (x: IData) => formC.state.data[c.entityKey] === x[c.entityKey],
      );
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

    const renderRemoveBtn = (index: number) => {
      if (!props.controller.enableDelete) {
        return null;
      }
      if (ibiz.config.form.mdCtrlConfirmBeforeRemove) {
        return (
          <el-popconfirm
            title='是否删除选中项'
            confirm-button-text='确认'
            cancel-button-text='取消'
            onConfirm={() => props.controller.remove(index)}
          >
            {{
              reference: () => {
                return (
                  <el-button text class={[ns.be('index', 'remove')]}>
                    <ion-icon name='trash-outline'></ion-icon>
                  </el-button>
                );
              },
            }}
          </el-popconfirm>
        );
      }
      return (
        <el-button
          text
          class={[ns.be('index', 'remove')]}
          onClick={() => props.controller.remove(index)}
        >
          <ion-icon name='trash-outline'></ion-icon>
        </el-button>
      );
    };

    const renderAddRow = () => {
      if (!c.enableCreate) {
        return null;
      }
      return (
        <div class={ns.e('add-row')}>
          <ion-icon class={ns.e('add-icon')} name='add-outline'></ion-icon>
          <el-dropdown
            popper-class={ns.e('add-dropdown')}
            trigger='click'
            split-button
            type='text'
            onCommand={(type: string) => {
              c.handleAddAction(type);
            }}
            onClick={() => {
              c.create();
            }}
          >
            {{
              default: (): VNode => {
                return (
                  <el-button class={ns.e('add-btn')} text>
                    添加步骤
                  </el-button>
                );
              },
              dropdown: (): VNode => {
                return (
                  <el-dropdown-menu>
                    {c.presetAddAction.map((action: IData) => {
                      return (
                        <el-dropdown-item command={action.value}>
                          <ion-icon
                            class={ns.e('add-dropdown-icon')}
                            name={action.icon}
                          ></ion-icon>
                          {action.text}
                        </el-dropdown-item>
                      );
                    })}
                  </el-dropdown-menu>
                );
              },
            }}
          </el-dropdown>
        </div>
      );
    };

    const renderActions = (opts: IData) => {
      if (!c.enableCreate) {
        return null;
      }
      const { row, $index } = opts;
      const isGroup = row[c.groupField] == 1;
      const isChildren = Boolean(row[c.parentField]);
      const actions: IData[] = c.getActionsByType(isGroup, isChildren) || [];
      return (
        <el-dropdown
          popper-class={ns.be('action', 'group')}
          trigger='click'
          type='text'
          onCommand={(data: IData) => {
            c.handleGroupAction(data);
          }}
        >
          {{
            default: (): VNode => {
              return (
                <el-button text>
                  <ion-icon name='ellipsis-vertical-sharp'></ion-icon>
                </el-button>
              );
            },
            dropdown: (): VNode => {
              return (
                <el-dropdown-menu>
                  {actions.map((action: IData) => {
                    return (
                      <el-dropdown-item
                        command={{
                          actionType: action.value,
                          index: $index,
                          row,
                        }}
                      >
                        <ion-icon
                          class={ns.e('add-dropdown-icon')}
                          name={action.icon}
                        ></ion-icon>
                        {action.text}
                      </el-dropdown-item>
                    );
                  })}
                </el-dropdown-menu>
              );
            },
          }}
        </el-dropdown>
      );
    };

    /**
     * 绘制自适应高度输入框
     *
     * @param {FormItemController} formItemC
     * @return {*}
     */
    const renderAutoInput = (formItemC: FormItemController) => {
      const { editor } = formItemC;
      return (
        <el-input
          clearable={true}
          model-value={formItemC.value}
          placeholder={editor?.model.placeHolder}
          type={'textarea'}
          resize='none'
          autosize
          onInput={(val: unknown): void => {
            formItemC.setDataValue(val);
          }}
          class={ns.b('input')}
          disabled={formItemC.state.disabled}
        ></el-input>
      );
    };

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
            if (!formItemC.state.visible) {
              return null;
            }
            let editor = null;
            if (!formItemC.editorProvider) {
              editor = <not-supported-editor modelData={item.editor} />;
            } else if (item.editor && item.editor.editorType === 'TEXTBOX') {
              editor = renderAutoInput(formItemC);
            } else {
              const component = resolveComponent(
                formItemC.editorProvider.formEditor,
              );
              editor = h(component, {
                value: formItemC.value,
                data: formItemC.data,
                controller: formItemC.editor,
                disabled: formItemC.state.disabled,
                readonly: formItemC.model.editor!.readOnly,
                onChange: (val: unknown, name?: string): void => {
                  formItemC.setDataValue(val, name);
                },
              });
            }

            return (
              <iBizGridEditItem
                class={[...formItemC.containerClass]}
                error={formItemC.state.error}
                required={formItemC.state.required}
              >
                {editor}
              </iBizGridEditItem>
            );
          };
        }
      });
      return result;
    };

    return {
      c,
      ns,
      formItems,
      formControllers,
      indexMap,
      renderRemoveBtn,
      renderAddRow,
      renderActions,
      renderContent,
    };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.ns.is('case-steps', true)]}>
        <CaseStepsTable
          class={[
            this.ns.e('table'),
            this.ns.is(
              'disabled',
              !this.controller.enableCreate && !this.controller.enableDelete,
            ),
          ]}
          model={this.c.model}
          data={this.controller.value as IData[]}
          columns={this.formItems}
          indexProps={{ width: 66, align: 'center' }}
          operationsProps={{ width: 120, align: 'center' }}
          onDragChange={(data: IData[]) => this.c.setValue(data)}
        >
          {{
            index: (opts: IData) => {
              const { $index } = opts;
              return <span>{this.indexMap[$index]}</span>;
            },
            operations: (opts: IData) => {
              if (
                !this.controller.enableCreate &&
                !this.controller.enableDelete
              ) {
                return null;
              }
              const { $index } = opts;
              return [this.renderRemoveBtn($index), this.renderActions(opts)];
            },
            ...this.renderContent(),
          }}
        </CaseStepsTable>
        {this.renderAddRow()}
      </div>
    );
  },
});

export default RepeaterGridCaseSteps;
