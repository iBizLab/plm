/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, defineComponent, ref, watch, computed } from 'vue';
import { IDETBUIActionItem, IUIActionGroupDetail } from '@ibiz/model-core';
import { ITreeNodeData } from '@ibiz-template/runtime';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CloseSvg, ExpandSvg, RetractSvg, SearchSvg } from '../../icons';
import { ResourceGanttController } from '../../resource-gantt.controller';
import './resource-gantt-column-head.scss';

export const ResourceGanttColumnHead = defineComponent({
  name: 'ResourceGanttColumnHead',
  props: {
    controller: {
      type: ResourceGanttController,
      required: true,
      default: () => {},
    },
    model: {
      type: Object as PropType<IModel>,
      required: true,
      default: () => {},
    },
    expandAll: {
      type: Boolean,
      required: true,
      default: false,
    },
    titleData: {
      type: Object as PropType<IData>,
      required: true,
      default: () => {},
    },
  },
  emits: ['expandAllChange', 'headSearch'],
  setup(props, { emit }) {
    const c = props.controller;
    const ns = useNamespace('resource-gantt-column-head');
    const expand = ref(false);
    const isHeadSearch = ref(false);
    const searchFilterValue = ref('');
    const label = computed(() => {
      return props.titleData.label;
    });

    watch(
      () => props.expandAll,
      val => {
        expand.value = val;
      },
      { immediate: true },
    );
    const onExpandAllChange = () => {
      expand.value = !expand.value;
      emit('expandAllChange', expand.value);
    };

    const onHeadSearch = () => {
      emit('headSearch', searchFilterValue.value);
    };

    const onCloseHeadSearch = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isHeadSearch.value = false;
      emit('headSearch', '');
    };

    const onCustomActionClick = (tag: string, e: MouseEvent) => {
      e.stopPropagation();
      isHeadSearch.value = true;
    };

    /**
     * 列界面行为组点击
     */
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      await props.controller.doUIAction(
        detail.uiactionId!,
        {} as ITreeNodeData,
        event,
        detail.appId,
      );
    };

    /**
     * 处理头部点击
     */
    const onColumnHeadClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const renderHeadSearch = () => {
      return (
        <el-input
          v-model={searchFilterValue.value}
          class={ns.b('search')}
          onInput={onHeadSearch}
          placeholder='搜索成员'
        >
          {{
            prefix: () => <SearchSvg />,
            suffix: () => (
              <el-button
                class={ns.be('search', 'suffix')}
                onClick={onCloseHeadSearch}
              >
                <CloseSvg />
              </el-button>
            ),
          }}
        </el-input>
      );
    };

    const renderContextMenu = () => {
      const nodeModel = c.getNodeModel('root');
      const nodeData = c.state.selectedData;
      if (!nodeModel?.decontextMenu?.detoolbarItems?.length) {
        return;
      }
      // 只有一个界面行为项时，且是点击触发的界面行为时，不绘制。。。
      const menuInfo = c.contextMenuInfos[nodeModel.id!];
      if (menuInfo.clickTBUIActionItem && menuInfo.onlyOneActionItem) {
        return null;
      }

      return (
        <iBizContextMenuControl
          modelData={nodeModel.decontextMenu}
          groupLevelKeys={[50]}
          nodeModel={nodeModel}
          nodeData={nodeData}
          context={c.context}
          onActionClick={(detail: IDETBUIActionItem, e: MouseEvent) =>
            onActionClick(detail, e)
          }
        ></iBizContextMenuControl>
      );
    };

    const renderContent = () => {
      if (isHeadSearch.value) {
        return renderHeadSearch();
      }
      return (
        <div class={ns.b('box')}>
          <div class={ns.be('box', 'left')}>
            <el-button
              class={ns.bem('box', 'left', 'icon')}
              title={expand.value ? '全部收起' : '全部展开'}
              onClick={onExpandAllChange}
            >
              {expand.value ? <RetractSvg /> : <ExpandSvg />}
            </el-button>
            <div class={ns.bem('box', 'left', 'caption')}>{label.value}</div>
          </div>
          <div class={ns.be('box', 'right')}>
            <el-button
              size='small'
              title='搜索成员'
              class={[ns.e('item')]}
              onClick={(e: MouseEvent) =>
                onCustomActionClick('search_personal', e)
              }
            >
              {{
                icon: () => <div class={ns.e('icon')}>{<SearchSvg />}</div>,
              }}
            </el-button>
            {renderContextMenu()}
          </div>
        </div>
      );
    };

    return {
      c,
      ns,
      label,
      isHeadSearch,
      expand,
      renderHeadSearch,
      onColumnHeadClick,
      onExpandAllChange,
      renderContent,
    };
  },
  render() {
    return <div class={this.ns.b()}>{this.renderContent()}</div>;
  },
});
