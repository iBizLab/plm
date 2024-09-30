/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  PropType,
  ref,
  Ref,
  VNode,
  watch,
} from 'vue';
import { IDEGrid, IDEGridColumn } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { CheckboxGridController } from './controller';
import './checkbox-grid.scss';

export const CheckboxGrid = defineComponent({
  name: 'CheckboxGrid',
  props: {
    modelData: { type: Object as PropType<IDEGrid>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: undefined },
    singleSelect: { type: Boolean, default: undefined },
    rowEditOpen: { type: Boolean, default: undefined },
    isSimple: { type: Boolean, required: false },
    data: { type: Array<IData>, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup() {
    const c = useControlController(
      (...args) => new CheckboxGridController(...args),
    );
    const ns = useNamespace('checkbox-grid');
    const checkList: Ref<string[]> = ref([]);

    watch(
      (): IData[] => c.state.selectedData,
      newValue => {
        checkList.value = newValue.map(item => item.srfkey);
      },
    );

    const onPageChange = (page: number) => {
      if (!page || page === c.state.curPage) {
        return;
      }
      c.state.curPage = page - 1;
      c.load({ isLoadMore: true });
    };

    const onPageSizeChange = (size: number) => {
      if (!size || size === c.state.size) {
        return;
      }
      c.state.size = size;
      if (c.state.curPage === 1) {
        c.load();
      }
    };

    const onPageRefresh = () => {
      c.load();
    };

    const tableData = computed(() => {
      const { state } = c;
      if (c.model.enableGroup) {
        const result: IData[] = [];
        state.groups.forEach(item => {
          if (!item.children.length) {
            return;
          }
          const children = [...item.children];
          const first = children.shift();
          result.push({
            srfkey: first?.srfkey || item.caption,
            isGroupData: true,
            caption: item.caption,
            first,
            children,
          });
        });
        return result;
      }
      return state.rows.map(row => row.data);
    });

    const columns = computed(() => {
      if (c.isMultistageHeader) {
        return c.model.degridColumns || [];
      }
      const _columns: IDEGridColumn[] = [];
      c.state.columnStates.forEach(item => {
        if (item.hidden) {
          return;
        }
        const columnModel =
          c.fieldColumns[item.key]?.model || c.uaColumns[item.key]?.model;
        if (columnModel) {
          _columns.push(columnModel);
        }
      });
      return _columns;
    });

    const renderNoData = (): VNode | false => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      return (
        isLoaded && (
          <iBizNoData
            text={c.model.emptyText}
            emptyTextLanguageRes={c.model.emptyTextLanguageRes}
          ></iBizNoData>
        )
      );
    };

    const renderContent = () => {
      if (tableData.value.length > 0) {
        return (
          <el-checkbox-group
            v-model={checkList.value}
            onChange={(selects: string[]) => c.handleSelection(selects)}
          >
            {tableData.value.map(item => {
              return (
                <el-checkbox label={item.srfkey}>
                  <span
                    class={ns.em('content', 'item')}
                    title={item[columns.value[0].codeName!]}
                  >
                    {item[columns.value[0].codeName!]}
                  </span>
                </el-checkbox>
              );
            })}
          </el-checkbox-group>
        );
      }
      return renderNoData();
    };

    return {
      c,
      ns,
      onPageChange,
      onPageSizeChange,
      onPageRefresh,
      renderNoData,
      renderContent,
    };
  },
  render() {
    if (!this.c.state.isCreated) {
      return;
    }
    const { state } = this.c;
    const { enablePagingBar } = this.c.model;
    return (
      <iBizControlBase
        class={[
          this.ns.is('enable-page', enablePagingBar),
          this.ns.is('enable-group', this.c.model.enableGroup),
          this.ns.b(),
        ]}
        controller={this.c}
      >
        <div class={this.ns.e('content')}>{this.renderContent()}</div>
        {enablePagingBar && (
          <iBizPagination
            total={state.total}
            curPage={state.curPage}
            size={state.size}
            onChange={this.onPageChange}
            onPageSizeChange={this.onPageSizeChange}
            onPageRefresh={this.onPageRefresh}
          ></iBizPagination>
        )}
      </iBizControlBase>
    );
  },
});
