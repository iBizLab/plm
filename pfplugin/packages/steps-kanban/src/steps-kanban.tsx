/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  Ref,
  StyleValue,
  VNode,
} from 'vue';
import draggable from 'vuedraggable';
import {
  IDEKanban,
  ILayoutPanel,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import {
  IKanbanGroupState,
  IDragChangeInfo,
  IControlProvider,
} from '@ibiz-template/runtime';
import { NOOP, listenJSEvent } from '@ibiz-template/core';
import { StepsKanbanController } from './steps-kanban.controller';
import './steps-kanban.scss';

export const StepsKanbanControl = defineComponent({
  name: 'IBizStepsKanbanControl',
  components: {
    draggable,
  },
  props: {
    modelData: { type: Object as PropType<IDEKanban>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: undefined },
    singleSelect: { type: Boolean, default: undefined },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    const c = useControlController(
      (...args) => new StepsKanbanController(...args),
    );
    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const kanban = ref();
    const isFull: Ref<boolean> = ref(false);
    const disabled = computed(() => {
      return !c.state.draggable || c.state.updating;
    });

    const readonly = computed(() => {
      return !!(
        c.context.srfreadonly === true || c.context.srfreadonly === 'true'
      );
    });

    const batchKey = computed(() => {
      return c.state.batching ? c.state.selectGroupKey : '';
    });

    const quickToolbarModel = c.model.controls?.find(item => {
      return (
        item.name === `${c.model.name!}_quicktoolbar` ||
        item.name === `${c.model.name!}_groupquicktoolbar`
      );
    });

    const batchToolbarModel = c.model.controls?.find(item => {
      return item.name === `${c.model.name!}_batchtoolbar`;
    });

    const groupClass = c.model.groupSysCss?.cssName || ''; // 分组样式表

    const collapseMap: Ref<IData> = ref({});

    let cleanup = NOOP;

    // 分组的行内样式
    const groupStyle: StyleValue = {};
    switch (c.model.groupLayout) {
      case 'ROW':
        groupStyle.width = `${c.model.groupWidth || 300}px`;
        groupStyle.height = '100%';
        break;
      case 'COLUMN':
        groupStyle.width = '100%';
        groupStyle.height = `${c.model.groupHeight || 500}px`;
        break;
      default:
    }

    const stopPropagation = (event: MouseEvent) => {
      event.stopPropagation();
    };

    const onCollapse = (group: IKanbanGroupState, event: MouseEvent) => {
      stopPropagation(event);
      const key = String(group.key);
      collapseMap.value[key] = !collapseMap.value[key];
    };

    // 行单击事件
    const onRowClick = (item: IData, event: MouseEvent): Promise<void> => {
      stopPropagation(event);
      return c.onRowClick(item);
    };

    // 行双击事件
    const onDbRowClick = (item: IData, event: MouseEvent): Promise<void> => {
      stopPropagation(event);
      return c.onDbRowClick(item);
    };

    // 新建
    const onClickNew = (event: MouseEvent, group: string | number) => {
      stopPropagation(event);
      return c.onClickNew(event, group);
    };

    const handleCheckAllGroup = (group: IKanbanGroupState, invert: boolean) => {
      const selectedData = group.selectedData || [];
      if (invert) {
        selectedData.forEach((item: IData) => {
          c.onRowClick(item);
        });
      } else {
        const items: IData[] = group.children.filter(
          (item: IData) => !selectedData.includes(item),
        );
        items.forEach(item => {
          c.onRowClick(item);
        });
      }
    };

    const getCodeListItem = (key: string | number) => {
      return c.groupCodeListItems!.find(item => item.value === key)!;
    };

    onMounted(() => {
      cleanup = listenJSEvent(window, 'resize', () => {
        isFull.value = c.getFullscreen();
      });
    });

    // 组件销毁前销毁监听
    onBeforeUnmount(() => {
      if (cleanup !== NOOP) {
        cleanup();
      }
    });

    // 绘制项布局面板
    const renderPanelItemLayout = (
      item: IData,
      modelData: ILayoutPanel,
    ): VNode => {
      const { context, params } = c;
      return (
        <iBizControlShell
          data={item}
          modelData={modelData}
          context={context}
          params={params}
        ></iBizControlShell>
      );
    };

    // 绘制操作项行为
    const renderItemAction = (item: IData, group: IKanbanGroupState): VNode => {
      return (
        <iBizActionToolbar
          class={ns.bem('item', 'bottom', 'actions')}
          action-details={
            c.getOptItemModel()!.deuiactionGroup?.uiactionGroupDetails
          }
          actions-state={c.getOptItemAction(item)}
          onActionClick={(
            detail: IUIActionGroupDetail,
            event: MouseEvent,
          ): Promise<void> => c.onGroupActionClick(detail, item, event, group)}
        ></iBizActionToolbar>
      );
    };

    // 绘制快速工具栏行为
    const renderQuickToolBar = (
      group: IKanbanGroupState,
    ): VNode | undefined => {
      if (!quickToolbarModel) {
        return;
      }
      return (
        <iBizControlShell
          class={ns.e('quicktoolbar')}
          modelData={{
            ...quickToolbarModel,
            name: `${quickToolbarModel.name}_${group.key}`,
          }}
          context={c.context}
          params={c.params}
        ></iBizControlShell>
      );
    };

    const renderBatchToolBar = (
      group: IKanbanGroupState,
    ): VNode | undefined => {
      if (!batchToolbarModel) {
        return;
      }
      return (
        <div class={ns.be('batch', 'toolbar')}>
          <iBizControlShell
            modelData={{
              ...batchToolbarModel,
              name: `${batchToolbarModel.name}_${group.key}`,
            }}
            context={c.context}
            params={c.params}
          ></iBizControlShell>
        </div>
      );
    };

    const renderBatchCheck = (group: IKanbanGroupState) => {
      const selectedData = group.selectedData || [];
      const checkAll = selectedData.length === group.children.length;
      const isIndeterminate =
        selectedData.length > 0 && selectedData.length < group.children.length;
      return (
        <div class={ns.be('batch', 'check')}>
          <el-checkbox
            model-value={checkAll}
            indeterminate={isIndeterminate}
            onChange={() => handleCheckAllGroup(group, checkAll)}
          >
            全选
          </el-checkbox>
          <span class={ns.be('batch', 'info')}>
            已选择<span>{selectedData.length}</span>条数据
          </span>
        </div>
      );
    };

    const renderBatchContainer = (
      group: IKanbanGroupState,
    ): VNode | undefined => {
      if (batchKey.value !== group.key) {
        return;
      }
      return (
        <div class={ns.b('batch')}>
          {renderBatchToolBar(group)}
          {renderBatchCheck(group)}
        </div>
      );
    };

    // 绘制默认项
    const renderDefaultItem = (item: IData, group: IKanbanGroupState) => {
      return [
        <div class={ns.be('item', 'top')}>
          <div class={ns.bem('item', 'top', 'title')}>{item.srfmajortext}</div>
          <div class={ns.bem('item', 'top', 'description')}>{item.content}</div>
        </div>,
        c.getOptItemModel() ? (
          <div class={ns.be('item', 'bottom')}>
            {renderItemAction(item, group)}
          </div>
        ) : null,
      ];
    };

    // 绘制卡片
    const renderCard = (item: IData, group: IKanbanGroupState): VNode => {
      // 是否选中数据
      const findIndex = c.state.selectedData.findIndex(data => {
        return data.srfkey === item.srfkey;
      });
      const cardClass = [
        ns.b('item'),
        ns.is('selected', findIndex !== -1),
        ns.is('disabled', disabled.value),
      ];
      const cardStyle: StyleValue = {};
      if (c.model.cardWidth) {
        cardStyle.width = `${c.model.cardWidth}px`;
      }
      if (c.model.cardHeight) {
        cardStyle.height = `${c.model.cardHeight}px`;
      }

      // 项布局面板
      const panel = props.modelData.itemLayoutPanel;

      return (
        <el-card
          shadow='hover'
          class={cardClass}
          body-style={cardStyle}
          onClick={(event: MouseEvent): Promise<void> =>
            onRowClick(item, event)
          }
          onDblclick={(event: MouseEvent): Promise<void> =>
            onDbRowClick(item, event)
          }
        >
          {panel
            ? renderPanelItemLayout(item, panel)
            : renderDefaultItem(item, group)}
        </el-card>
      );
    };

    /**
     * 绘制无数据
     * @author lxm
     * @date 2023-08-30 03:53:21
     * @return {*}  {(VNode | undefined)}
     */
    const renderNoData = (): VNode | undefined => {
      // 未加载不显示无数据
      if (!c.state.isLoaded) {
        return;
      }
      return (
        <iBizNoData
          text={c.model.emptyText}
          emptyTextLanguageRes={c.model.emptyTextLanguageRes}
        ></iBizNoData>
      );
    };

    let cacheInfo: Partial<IDragChangeInfo> | null = null;
    const onChange = (
      evt: IData,
      group: IKanbanGroupState,
      split?: string | number,
      splitKey?: string,
    ) => {
      const groupKey = splitKey || group.key;
      if (evt.moved) {
        // 排序
        c.onDragChange({
          from: groupKey,
          to: groupKey,
          fromIndex: evt.moved.oldIndex,
          toIndex: evt.moved.newIndex,
        });
      }
      if (evt.added) {
        cacheInfo = {
          to: groupKey,
          toIndex: evt.added.newIndex,
        };
        if (split) {
          const { id } = evt.added.element;
          const item = group.children.find(x => x.id === id)!;
          item.entry_status = split;
        }
      }
      if (evt.removed) {
        if (cacheInfo) {
          cacheInfo.from = groupKey;
          cacheInfo.fromIndex = evt.removed.oldIndex;
          c.onDragChange(cacheInfo as IDragChangeInfo, split);
        }
        cacheInfo = null;
      }
    };

    // 全屏
    const onFullScreen = () => {
      const container = kanban.value.$el;
      isFull.value = c.onFullScreen(container);
    };

    const renderGroupToolbar = (group: IKanbanGroupState) => {
      const showActionBar =
        (c.model.groupUIActionGroup && group.groupActionGroupState) ||
        batchToolbarModel;
      if (batchKey.value === group.key) {
        return (
          <span
            class={ns.be('group', 'header-right')}
            onClick={(event: MouseEvent) => stopPropagation(event)}
          >
            <el-button text onClick={() => c.closeBatch()}>
              完成
            </el-button>
          </span>
        );
      }
      return (
        <span
          class={ns.be('group', 'header-right')}
          onClick={(event: MouseEvent) => stopPropagation(event)}
        >
          {c.enableNew && !readonly.value && (
            <el-button
              class={ns.be('group', 'header-new')}
              text
              circle
              onClick={(event: MouseEvent) => {
                onClickNew(event, group.key);
              }}
            >
              <ion-icon name='add-outline' title='新建'></ion-icon>
            </el-button>
          )}
          {showActionBar && !readonly.value && (
            <el-dropdown
              class={ns.be('group', 'header-actions')}
              trigger='click'
              teleported={false}
            >
              {{
                default: (): VNode => <span>···</span>,
                dropdown: (): VNode => (
                  <div class={ns.be('group', 'actions-dropdown')}>
                    {c.model.groupUIActionGroup &&
                      group.groupActionGroupState && (
                        <iBizActionToolbar
                          actionDetails={
                            c.model.groupUIActionGroup!.uiactionGroupDetails
                          }
                          actionsState={group.groupActionGroupState}
                          onActionClick={(
                            detail: IUIActionGroupDetail,
                            event: MouseEvent,
                          ) => {
                            c.onGroupToolbarClick(detail, event, group);
                          }}
                        ></iBizActionToolbar>
                      )}
                    {batchToolbarModel && (
                      <el-button
                        size='small'
                        onClick={() => {
                          c.openBatch(group.key as string);
                        }}
                      >
                        <ion-icon name='checkmark-sharp'></ion-icon>
                        批量操作
                      </el-button>
                    )}
                  </div>
                ),
              }}
            </el-dropdown>
          )}
        </span>
      );
    };

    const renderSplitGroup = (group: IKanbanGroupState) => {
      if (c.splitGroupKey === group.key) {
        const runing = c.splitMap.get(`${group.key}_runing`);
        const finish = c.splitMap.get(`${group.key}_finish`);
        return (
          <div class={ns.b('split')}>
            <div class={ns.be('split', 'left')}>
              <div class={ns.be('split', 'header')}>进行中</div>
              <draggable
                class={ns.be('group', 'draggable')}
                modelValue={runing.children}
                group={c.model.id}
                itemKey='srfkey'
                disabled={disabled.value || readonly.value}
                onChange={(evt: IData) =>
                  onChange(evt, group, '1', `${group.key}_runing`)
                }
              >
                {{
                  item: ({ element }: { element: IData }) => {
                    return renderCard(element, group);
                  },
                  header: () => {
                    if (runing.children.length) {
                      return null;
                    }
                    return (
                      <div
                        class={[ns.be('group', 'list'), ns.is('empty', true)]}
                      >
                        {renderNoData()}
                      </div>
                    );
                  },
                }}
              </draggable>
              {renderQuickToolBar(group)}
            </div>
            <div class={ns.be('split', 'right')}>
              <div class={ns.be('split', 'header')}>已完成</div>
              <draggable
                class={ns.be('group', 'draggable')}
                modelValue={finish.children}
                group={c.model.id}
                itemKey='srfkey'
                disabled={disabled.value || readonly.value}
                onChange={(evt: IData) =>
                  onChange(evt, group, '2', `${group.key}_finish`)
                }
              >
                {{
                  item: ({ element }: { element: IData }) => {
                    return renderCard(element, group);
                  },
                  header: () => {
                    if (finish.children.length) {
                      return null;
                    }
                    return (
                      <div
                        class={[ns.be('group', 'list'), ns.is('empty', true)]}
                      >
                        {renderNoData()}
                      </div>
                    );
                  },
                }}
              </draggable>
              {renderQuickToolBar(group)}
            </div>
          </div>
        );
      }
      return [
        <draggable
          class={ns.be('group', 'draggable')}
          modelValue={group.children}
          group={c.model.id}
          itemKey='srfkey'
          disabled={disabled.value || readonly.value}
          onChange={(evt: IData) => onChange(evt, group)}
        >
          {{
            item: ({ element }: { element: IData }) => {
              return renderCard(element, group);
            },
            header: () => {
              if (group.children.length) {
                return null;
              }
              return <div class={ns.be('group', 'list')}>{renderNoData()}</div>;
            },
          }}
        </draggable>,
        renderQuickToolBar(group),
      ];
    };

    // 绘制分组
    const renderGroup = (group: IKanbanGroupState) => {
      const codeListItem = getCodeListItem(group.key);
      const collapse = collapseMap.value[String(group.key)];
      const isColumn = c.model.groupLayout === 'COLUMN';
      const tempGroupStyle = { ...groupStyle };
      if (collapse) {
        tempGroupStyle.height = '50px';
      }
      if ((codeListItem.data as any) === 1) {
        const width: string = (groupStyle.width as string).slice(0, -2);
        tempGroupStyle.width = `${Number(width) * 2}px`;
      }
      if (!collapse || isColumn) {
        return (
          <div
            class={[ns.b('group'), ns.is('collapse', collapse), groupClass]}
            style={tempGroupStyle}
          >
            <div
              class={ns.be('group', 'header')}
              style={{ borderTopColor: group.color || 'transparent' }}
              onClick={(event: MouseEvent) => onCollapse(group, event)}
            >
              <div class={ns.be('group', 'header-left')}>
                <ion-icon name='caret-down-sharp'></ion-icon>
                <span
                  class={[
                    ns.be('group', 'header-caption'),
                    ns.is('badge', !!group.color),
                  ]}
                  style={{ backgroundColor: group.color }}
                >
                  {`${group.caption}${
                    group.children.length ? ` · ${group.children.length}` : ''
                  }`}
                </span>
              </div>
              {renderGroupToolbar(group)}
            </div>
            {renderBatchContainer(group)}
            <div
              class={[
                ns.be('group', 'list'),
                ns.is('empty', !group.children.length),
              ]}
            >
              {renderSplitGroup(group)}
            </div>
          </div>
        );
      }
      return (
        <div class={[ns.b('group'), ns.is('collapse', collapse), groupClass]}>
          <div
            class={ns.be('group', 'header')}
            style={{ borderTopColor: group.color || 'transparent' }}
            onClick={(event: MouseEvent) => onCollapse(group, event)}
          >
            <span
              class={[
                ns.be('group', 'header-caption'),
                ns.is('badge', !!group.color),
              ]}
              style={{ backgroundColor: group.color }}
            >
              {`${group.caption}${
                group.children.length ? ` · ${group.children.length}` : ''
              }`}
            </span>
            <ion-icon name='caret-forward-sharp'></ion-icon>
          </div>
        </div>
      );
    };

    return {
      c,
      ns,
      isFull,
      kanban,
      onFullScreen,
      renderGroup,
    };
  },
  render() {
    const { groups, isCreated } = this.c.state;
    if (!isCreated) {
      return null;
    }
    return (
      <iBizControlBase
        ref='kanban'
        controller={this.c}
        class={[
          this.ns.m(this.modelData.groupLayout?.toLowerCase()),
          this.ns.is('full', this.isFull),
          this.ns.is('plugin', true),
        ]}
      >
        <div class={this.ns.b('group-container')}>
          {groups.length > 0 &&
            groups.map(group => {
              return this.renderGroup(group);
            })}
        </div>
        {groups.length > 0 && (
          <div class={this.ns.e('full-btn')} onClick={this.onFullScreen}>
            {this.isFull ? (
              <ion-icon name='contract-outline'></ion-icon>
            ) : (
              <ion-icon name='expand-outline'></ion-icon>
            )}
          </div>
        )}
      </iBizControlBase>
    );
  },
});
