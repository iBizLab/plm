/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import {
  PropType,
  Ref,
  defineComponent,
  h,
  reactive,
  ref,
  resolveComponent,
  watch,
} from 'vue';
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { IDEEditForm, IDEFormDetail, IDEFormItem } from '@ibiz/model-core';
import {
  DataChangeEvent,
  EventBase,
  IControlProvider,
  calcNavParams,
} from '@ibiz-template/runtime';
import { clone } from 'lodash-es';
import './form-data-comparison.scss';
import { FormDataComparisonController } from './form-data-comparison-controller';

export const FormDataComparison = defineComponent({
  name: 'IBizFormDataComparison',
  props: {
    modelData: {
      type: Object as PropType<IDEEditForm>,
      required: true,
    },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    isSimple: { type: Boolean, required: false },
    data: { type: Object as PropType<IData>, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    const ns = useNamespace('form-data-comparison');
    const formItems: IDEFormItem[] = [];
    const c = useControlController(
      (...args) => new FormDataComparisonController(...args),
      { excludePropsKeys: ['data'] },
    );
    /**
     *   基础版本
     */
    const baseVersion: Ref<string> = ref('');

    /**
     *   对比版本
     */
    const compareVersion: Ref<string> = ref('');

    /**
     *   隐藏相同项开启
     */
    const switchValue = ref(false);

    /**
     *   折叠项
     */
    const activeNames = ref([]);

    /**
     *   绘制表格数据
     */
    const gridData: Ref<IData[]> = ref([]);

    const { base_version: baseversion, compare_version: compareversion } =
      props.params;
    if (baseversion) {
      baseVersion.value = baseversion;
    }
    if (compareversion) {
      compareVersion.value = compareversion;
    }

    watch(
      () => baseVersion.value,
      () => {
        c.load({
          data: {
            baseVersion: baseVersion.value,
            compareVersion: compareVersion.value,
          },
        });
      },
    );

    watch(
      () => compareVersion.value,
      () => {
        c.load({
          data: {
            baseVersion: baseVersion.value,
            compareVersion: compareVersion.value,
          },
        });
      },
    );

    if (props.isSimple) {
      c.evt.on('onMounted', () => {
        // 第一次data直接赋值，后面默认加载会走load
        c.setSimpleData(props.data || {});
      });
      watch(
        () => props.data,
        newVal => {
          const changeVal = newVal || {};
          // 找有没有不一致的属性
          const find = Object.keys(c.data).find(key => {
            return changeVal[key] !== c.data[key];
          });
          // 内外部数据不一致时，只能是外部修改了，这是更新数据并重走load
          if (find) {
            c.setSimpleData(changeVal);
          }
        },
        { deep: true },
      );
    }

    c.evt.on('onCreated', () => {
      // 表单成员state响应式
      const keys = Object.keys(c.details);
      keys.forEach(key => {
        const detail = c.details[key];
        detail.state = reactive(detail.state);
      });
    });

    /**
     *  绘制基础表单项
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:01
     * @param {IDEFormDetail} data
     * @param {IData} formData
     * @return {*}
     */
    const renderEditor = (data: IDEFormDetail, formData: IData) => {
      // 编辑器内容
      const formItemController = c.formItems.find(
        item => item.name === data.codeName,
      );

      let formDataValue = '';
      if (data.codeName) {
        formDataValue = formData[data.codeName];
      }
      let editor = null;
      if (formItemController) {
        const editorProps = {
          value: formDataValue,
          data: c.data,
          controller: formItemController.editor,
          readonly: true,
          disabled: true,
        };

        if (formItemController.editorProvider) {
          const component = resolveComponent(
            formItemController.editorProvider.formEditor,
          );
          editor = h(component, {
            ...editorProps,
          });
        }
      }
      return editor;
    };

    /**
     * 准备参数
     *
     */
    const prepareParams = (
      item: IData,
      data: IData,
      context: IContext,
      params: IParams,
    ): {
      newContext: IContext;
      newParams: IParams;
    } => {
      const { navigateContexts, navigateParams } = item;
      const model = {
        navContexts: navigateContexts,
        navParams: navigateParams,
      };
      const originParams = {
        context,
        params,
        data,
      };
      const { resultContext, resultParams } = calcNavParams(
        model,
        originParams,
      );
      const newContext = Object.assign(context.clone(), resultContext, {
        currentSrfNav: item.id,
      });
      const newParams = { ...params, ...resultParams };
      return { newContext, newParams };
    };

    /**
     * 关系界面创建
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:05
     * @param {EventBase} event
     */
    const onCreated = (event: EventBase): void => {
      c.calcAlldruipartData(
        event.context.version,
        event.context.versionItemName,
        event.view,
      );
    };

    /**
     *  关系界面数据变更
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:49
     * @param {DataChangeEvent} args
     */
    const onDataChange = (args: DataChangeEvent) => {
      c.setdruipartData(args);
    };

    /**
     *  绘制关系界面
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:22
     * @param {IData} item
     * @param {IData} data
     * @param {string} version
     * @return {*}
     */
    const renderDruipart = (item: IData, data: IData, version: string) => {
      if (data[item.codeName] && data[item.codeName].length === 0) {
        return null;
      }
      const context = c.context.clone();
      const cloneData = clone(data);
      Object.assign(context, cloneData);
      const { newContext, newParams } = prepareParams(
        item,
        cloneData,
        context,
        {},
      );
      Object.assign(
        newContext,
        { version },
        { versionItemName: item.codeName },
        { compareItem: item.userTag2 || '' },
        { compareViewFieldName: item.userTag || '' },
      );
      return h(resolveComponent('IBizViewShell'), {
        context: newContext,
        params: newParams,
        key: item.id,
        viewId: item.appViewId,
        onCreated,
        onDataChange,
      });
    };

    /**
     *  绘制多数据部件
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:09
     * @param {IData} item
     * @param {IData} data
     * @return {*}
     */
    const renderMdctrl = (
      item: IData,
      type: string,
      _data: IData,
      componentP: string,
    ) => {
      let controller = null;
      if (type === 'old') {
        controller = c.formMDCtrls.find(ite => item.codeName === ite.name)!;
      } else if (type === 'new') {
        controller = c.formMDCtrls.find(
          ite => `new_${item.codeName}` === ite.name,
        )!;
      }
      const cloneController = clone(controller);
      let component = 'iBizFormMDCtrl';
      if (componentP) {
        component = componentP;
      }
      return h(resolveComponent(component), {
        controller: cloneController,
        modelData: cloneController!.model,
      });
    };

    return {
      baseVersion,
      compareVersion,
      switchValue,
      c,
      ns,
      gridData,
      formItems,
      activeNames,
      renderEditor,
      renderDruipart,
      renderMdctrl,
    };
  },
  render() {
    if (this.c.state.isLoaded) {
      if (!this.switchValue) {
        this.gridData = this.c.AllGridData;
      } else {
        this.gridData = this.c.removeSameGridData;
      }
    } else {
      return null;
    }
    return (
      <div class={[this.ns.b()]}>
        <div class={this.ns.e('top-hidesame-content')}>
          <div class={this.ns.e('top-hidesame-content-left')}>
            隐藏相同项 <el-switch v-model={this.switchValue} />
          </div>
          <div class={this.ns.e('top-hidesame-content-right')}>
            <div class={this.ns.e('top-hidesame-content-right-item')}>
              新增
              <div
                class={this.ns.e('top-hidesame-content-right-item-add')}
              ></div>
            </div>
            <div class={this.ns.e('top-hidesame-content-right-item')}>
              修改
              <div
                class={this.ns.e('top-hidesame-content-right-item-change')}
              ></div>
            </div>
            <div class={this.ns.e('top-hidesame-content-right-item')}>
              删除
              <div
                class={this.ns.e('top-hidesame-content-right-item-delete')}
              ></div>
            </div>
          </div>
        </div>
        <div class={this.ns.e('top-content')}>
          <div class={this.ns.e('top-content-left')}>
            <div class={this.ns.e('top-content-left-attribute')}>属性</div>
            <div class={this.ns.e('top-content-left-version')}>版本号</div>
          </div>
          <div
            class={[
              this.ns.e('top-content-choose'),
              this.baseVersion !== this.compareVersion ? 'modified' : '',
            ]}
          >
            <el-select
              v-model={this.baseVersion}
              size='large'
              class={this.ns.e('top-content-choose-select')}
            >
              {this.c.versionData.map(item => {
                return (
                  <el-option key={item.id} label={item.label} value={item.id} />
                );
              })}
            </el-select>
          </div>
          <div
            class={[
              this.ns.e('top-content-choose'),
              this.baseVersion !== this.compareVersion ? 'modified' : '',
            ]}
          >
            <el-select
              v-model={this.compareVersion}
              size='large'
              class={this.ns.e('top-content-choose-select')}
            >
              {this.c.versionData.map(item => {
                return (
                  <el-option key={item.id} label={item.label} value={item.id} />
                );
              })}
            </el-select>
          </div>
        </div>
        <el-collapse v-model={this.activeNames}>
          {this.gridData.map((item: IData) => {
            if (item.detailType === 'FORMITEM') {
              return (
                <div class={[this.ns.e('mid-content'), item.category]}>
                  <div class={this.ns.e('mid-content-left')}>
                    {item.caption}
                  </div>
                  <div class={this.ns.e('mid-content-item')}>
                    {this.renderEditor(item.oldItem, this.c.baseResData)}
                  </div>
                  <div class={this.ns.e('mid-content-item')}>
                    {this.renderEditor(item.newItem, this.c.compareResData)}
                  </div>
                </div>
              );
            }
            if (item.detailType === 'GROUPPANEL') {
              return (
                <el-collapse-item
                  class={this.ns.e('collapse-item')}
                  title={item.caption}
                >
                  {item.slot &&
                    item.slot.map((itemi: IData) => {
                      return (
                        <div
                          class={[
                            this.ns.e('mid-content'),
                            'slot',
                            itemi.category,
                          ]}
                        >
                          <div class={[this.ns.e('mid-content-left'), 'slot']}>
                            {itemi.caption}
                          </div>
                          <div class={this.ns.e('mid-content-item')}>
                            {itemi.detailType === 'FORMITEM' &&
                              this.renderEditor(
                                itemi.oldItem,
                                this.c.baseResData,
                              )}
                            {itemi.detailType === 'DRUIPART' &&
                              this.renderDruipart(
                                itemi.oldItem,
                                this.c.baseResData,
                                'base',
                              )}
                            {itemi.detailType === 'MDCTRL' &&
                              this.renderMdctrl(
                                itemi.oldItem,
                                'old',
                                this.c.baseResData,
                                itemi.component,
                              )}
                          </div>
                          <div class={this.ns.e('mid-content-item')}>
                            {itemi.detailType === 'FORMITEM' &&
                              this.renderEditor(
                                itemi.newItem,
                                this.c.compareResData,
                              )}
                            {itemi.detailType === 'DRUIPART' &&
                              this.renderDruipart(
                                itemi.newItem,
                                this.c.compareResData,
                                'compare',
                              )}
                            {itemi.detailType === 'MDCTRL' &&
                              this.renderMdctrl(
                                itemi.newItem,
                                'new',
                                this.c.compareResData,
                                itemi.component,
                              )}
                          </div>
                        </div>
                      );
                    })}
                </el-collapse-item>
              );
            }
          })}
        </el-collapse>
      </div>
    );
  },
});

export default FormDataComparison;
