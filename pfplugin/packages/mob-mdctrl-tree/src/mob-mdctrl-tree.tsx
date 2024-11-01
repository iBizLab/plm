import { debounce } from 'lodash-es';
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { computed, defineComponent, PropType, ref } from 'vue';
import { IDEMobMDCtrl, IUIActionGroup } from '@ibiz/model-core';
import { IMobMDCtrlRowState } from '@ibiz-template/runtime';
import { MobMDCtrlTreeController } from './mob-mdctrl-tree.controller';
import { useListRender, usePagination } from './util';
import { INodeData } from './mob-md-ctrl-tree.state';
import './mob-mdctrl-tree.scss';

export const MDCtrlTreeControl = defineComponent({
  name: 'IBizMDCtrlTreeControl',
  props: {
    modelData: { type: Object as PropType<IDEMobMDCtrl>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    mdctrlActiveMode: { type: Number, default: 1 },
    singleSelect: { type: Boolean, default: true },
    selectedData: { type: Object as PropType<IData[]>, required: false },
    mode: { type: String, default: 'LIST' },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    const c = useControlController(
      (...args) => new MobMDCtrlTreeController(...args),
    );
    const ns = useNamespace(`mob-mdctrl-tree`);
    const ns2 = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const { renderItem, renderNoData, renderLoadMore } = useListRender(
      props,
      c,
      ns,
    );

    const isUpdating = ref(false);

    // 不分页 0 分页栏 1 滚动加载 2 加载更多 3
    // 是否可以加载更多
    const isLodeMoreDisabled = computed(() => {
      if (c.model.enablePagingBar === true) {
        return true;
      }
      if (c.model.pagingMode !== 2) {
        return true;
      }
      return (
        c.state.items.length >= c.state.total ||
        c.state.isLoading ||
        c.state.total <= c.state.size
      );
    });

    const { onPageChange } = usePagination(c);

    const delistItems = computed(() => {
      const data: { value: string; label: string }[] = [];
      c.model.delistItems?.forEach((item: IParams) => {
        if (item.enableSort) {
          data.push({
            value: item.id,
            label: ibiz.i18n.t(
              item?.capLanguageRes?.lanResTag || '',
              item.caption || item?.capLanguageRes?.defaultContent,
            ),
          });
        }
      });
      return data;
    });

    const sortVal = computed(() => {
      if (c.state.sortQuery) {
        const [key, order] = c.state.sortQuery.split(',');
        return { key, order };
      }
      return null;
    });

    const onSortChange = (sort: { key: string; order: 'asc' | 'desc' }) => {
      c.setSort(sort.key, sort.order);
      c.load({ isInitialLoad: true });
    };

    const debounceLoadMore = debounce(async () => {
      c.loadMore();
    }, 500);

    const onLoadMore = () => {
      debounceLoadMore();
    };

    c.evt.on('onLoadSuccess', () => {
      isUpdating.value = true;
      window.requestAnimationFrame(() => {
        isUpdating.value = false;
      });
    });

    // 是否显示数据伸缩图标
    // 如果未开启分组，并且加载模式为【加载更多】，并且已经加载过一次更多，则为 true
    const showCollapseOrExpandIcon = computed(() => {
      return !c.model.enableGroup && c.model.pagingMode === 3;
    });

    // 左滑界面行为组
    const leftSlidingActionGroup = c.model.deuiactionGroup;
    // 右滑界面行为组
    const rightSlidingActionGroup = c.model.deuiactionGroup2;

    // 绘制滑动行为组
    const renderSlidingActionGroup = (group: IUIActionGroup, data: IData) => {
      const groupDetails = group.uiactionGroupDetails || [];
      if (!groupDetails || groupDetails.length === 0) {
        return null;
      }
      const row = c.state.rows.find(
        (rowData: IMobMDCtrlRowState) => data.srfkey === rowData.data.srfkey,
      )!;
      const btnContainer = row.uaColStates[group.id!];
      return groupDetails.map(detail => {
        const btn = btnContainer[detail.id!];
        if (btn.visible === false) {
          return null;
        }
        return (
          <van-button
            square
            type='primary'
            text={detail.caption}
            disabled={btn.disabled || btn.loading}
            onClick={(e: MouseEvent) => c.onActionClick(detail, row, e)}
          />
        );
      });
    };

    // 绘制默认列表项
    const renderDefaultItem = (data: INodeData) => {
      const isItemSliding = !!(
        leftSlidingActionGroup || rightSlidingActionGroup
      );
      if (isItemSliding) {
        return (
          <div class={ns.e('node')}>
            <van-swipe-cell key={data.srfkey} class={ns.b('slider-item')}>
              {{
                left: rightSlidingActionGroup
                  ? () =>
                      renderSlidingActionGroup(rightSlidingActionGroup, data)
                  : null,
                right: leftSlidingActionGroup
                  ? () => renderSlidingActionGroup(leftSlidingActionGroup, data)
                  : null,
                default: () => {
                  return renderItem(data);
                },
              }}
            </van-swipe-cell>
            {data._expand &&
              data._children?.map(child => {
                return renderDefaultItem(child);
              })}
          </div>
        );
      }
      return (
        <div class={ns.e('node')}>
          {renderItem(data)}
          {data._expand &&
            data._children?.map(child => {
              return renderDefaultItem(child);
            })}
        </div>
      );
    };

    const renderDefault = () => {
      return c.state.rootNodes.map((item: INodeData) => {
        return renderDefaultItem(item);
      });
    };

    const renderGroup = () => {
      return c.state.groups.map((group: IData) => {
        return (
          <div title={group.caption}>
            <div class={ns.b('group-caption')}> {group.caption}</div>
            {group.children.map((item: IData) => {
              return renderDefaultItem(item.data);
            })}
          </div>
        );
      });
    };

    // 绘制卡片内容
    const renderMDContent = () => {
      return (
        <van-list
          class={[
            ns.e('content'),
            ns.is('show-underLine', c.model.controlStyle !== 'EXTVIEW1'),
          ]}
          finished={
            isLodeMoreDisabled.value || c.state.isLoading || isUpdating.value
          }
          immediate-check={false}
          onLoad={() => onLoadMore()}
        >
          {c.model.groupMode !== 'NONE' ? renderGroup() : renderDefault()}
        </van-list>
      );
    };

    return {
      c,
      ns,
      ns2,
      renderMDContent,
      renderNoData,
      showCollapseOrExpandIcon,
      onPageChange,
      renderLoadMore,
      sortVal,
      delistItems,
      onSortChange,
    };
  },
  render() {
    const enablePagingBar =
      this.c.model.enablePagingBar && this.c.model.pagingMode === 1;
    return (
      <iBizControlBase
        controller={this.c}
        class={[
          this.ns.is(
            'enable-page',
            enablePagingBar || this.showCollapseOrExpandIcon,
          ),
        ]}
      >
        {this.delistItems.length > 0 && (
          <iBizMdCtrlSetting
            class={[this.ns.e('setting'), this.ns2.e('setting')]}
            listItems={this.delistItems}
            sort={this.sortVal}
            onSortChange={this.onSortChange}
          ></iBizMdCtrlSetting>
        )}
        {this.c.state.isCreated &&
          (this.c.state.rows.length > 0
            ? this.renderMDContent()
            : this.renderNoData())}
        {enablePagingBar ? (
          <van-pagination
            class={this.ns.e('pagination')}
            total-items={this.c.state.total}
            model-value={this.c.state.curPage}
            items-per-page={this.c.state.size}
            page-count={this.c.state.totalPages}
            force-ellipses
            onChange={this.onPageChange}
          ></van-pagination>
        ) : null}
        {this.showCollapseOrExpandIcon && this.renderLoadMore()}
      </iBizControlBase>
    );
  },
});
