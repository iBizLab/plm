import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType, computed, VNode } from 'vue';
import { IDEList, ILayoutPanel } from '@ibiz/model-core';
import { isNil } from 'lodash-es';
import { IControlProvider, IMDControlGroupState } from '@ibiz-template/runtime';
import { usePagination } from './review-list-util';
import { Avatar } from './avatar/avatar';
import { ReviewListController } from './review-list.controller';
import './review-list.scss';

const completeIcon = (): JSX.Element => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
    fill='rgb(255, 117, 117)'
  >
    <g stroke-width='1' fill-rule='evenodd'>
      <path d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm6-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6z'></path>
    </g>
  </svg>
);
const submitIcon = (): JSX.Element => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
  >
    <g id='arrtips/play-circle-fill' stroke-width='1' fill-rule='evenodd'>
      <path d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm11.26.432a.5.5 0 0 0 0-.864l-4.508-2.63A.5.5 0 0 0 6 5.372v5.258a.5.5 0 0 0 .752.432l4.508-2.63z'></path>
    </g>
  </svg>
);

export const ReviewListControl = defineComponent({
  name: 'IBizReviewListControl',
  props: {
    modelData: { type: Object as PropType<IDEList>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: { type: Number, default: undefined },

    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: { type: Boolean, default: undefined },
    isSimple: { type: Boolean, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    const c = useControlController(
      (...args) => new ReviewListController(...args),
    );
    const ns = useNamespace(
      `control-review-${c.model.controlType!.toLowerCase()}`,
    );

    const { onPageChange, onPageRefresh, onPageSizeChange } = usePagination(c);

    // 是否可以加载更多
    const isLodeMoreDisabled = computed(() => {
      if (c.model.enablePagingBar === true) {
        return true;
      }
      return (
        c.state.items.length >= c.state.total ||
        c.state.isLoading ||
        c.state.total <= c.state.size
      );
    });

    // 绘制第一个自定义项
    const renderCustomFirstItem = (): JSX.Element => {
      return (
        <div class={ns.b('custom-item')}>
          <div class={ns.be('custom-item', 'icon')}>{submitIcon()}</div>
          <div class={ns.be('custom-item', 'caption')}>提交评审</div>
          <div class={ns.be('custom-item', 'avatar')}>
            {c.userInfo ? (
              <Avatar
                label={c.userInfo.text}
                img={c.userInfo.avatar}
                readOnly={true}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      );
    };

    // 绘制最后一个自定义项
    const renderCustomLastItem = (): JSX.Element => {
      return (
        <div class={[ns.b('custom-item'), ns.is('last-item', true)]}>
          <div class={ns.be('custom-item', 'icon')}>{completeIcon()}</div>
          <div class={ns.be('custom-item', 'caption')}>完成评审</div>
        </div>
      );
    };

    // 绘制下拉箭头
    const renderDropdownArrow = (): JSX.Element => {
      return (
        <div class={ns.b('dropdown-arrow')} style=''>
          <div class={ns.be('dropdown-arrow', 'vertical-line')}></div>
          <div class={ns.be('dropdown-arrow', 'arrow-down')}></div>
        </div>
      );
    };

    // 绘制项布局面板
    const renderPanelItem = (item: IData, modelData: ILayoutPanel): VNode => {
      const { context, params } = c;
      // 是否选中数据
      const findIndex = c.state.selectedData.findIndex(data => {
        return data.srfkey === item.srfkey;
      });
      const itemClass = [ns.b('item'), ns.is('active', findIndex !== -1)];
      return (
        <iBizControlShell
          class={itemClass}
          data={item}
          modelData={modelData}
          context={context}
          params={params}
          onClick={(): Promise<void> => c.onRowClick(item)}
          onDblclick={(): Promise<void> => c.onDbRowClick(item)}
        ></iBizControlShell>
      );
    };

    // 绘制默认列表项
    const renderDefaultItem = (item: IData): VNode => {
      // 是否选中数据
      const findIndex = c.state.selectedData.findIndex(data => {
        return data.srfkey === item.srfkey;
      });
      const itemClass = [ns.b('item'), ns.is('active', findIndex !== -1)];
      return (
        <div
          class={itemClass}
          key={item.srfkey}
          onClick={(): Promise<void> => c.onRowClick(item)}
          onDblclick={(): Promise<void> => c.onDbRowClick(item)}
        >
          {`${isNil(item.srfmajortext) ? '' : item.srfmajortext}`}
        </div>
      );
    };

    // 绘制分组
    const renderGroup = (group: IMDControlGroupState): VNode => {
      const panel = props.modelData.itemLayoutPanel;
      return (
        <el-collapse-item
          title={group.caption}
          class={ns.be('group-content', 'item')}
        >
          {group.children.length > 0 ? (
            group.children.map(item => {
              return panel
                ? renderPanelItem(item, panel)
                : renderDefaultItem(item);
            })
          ) : (
            <div class={ns.bem('group-content', 'item', 'empty')}>
              {ibiz.i18n.t('app.noData')}
            </div>
          )}
        </el-collapse-item>
      );
    };

    // 绘制卡片内容
    const renderListContent = (): VNode => {
      if (c.model.enableGroup && !c.state.isSimple) {
        return (
          <el-collapse class={[ns.b('group-content'), ns.b('content')]}>
            {c.state.groups?.map(group => {
              return (
                <div class={[ns.b('scroll-item')]}>{renderGroup(group)}</div>
              );
            })}
          </el-collapse>
        );
      }
      const panel = props.modelData.itemLayoutPanel;
      return (
        <div
          class={[ns.b('scroll'), ns.b('content')]}
          v-infinite-scroll={(): Promise<void> => c.loadMore()}
          infinite-scroll-distance={10}
          infinite-scroll-disabled={isLodeMoreDisabled.value}
        >
          {renderCustomFirstItem()}
          {renderDropdownArrow()}
          {c.state.items.map((item: IData) => {
            return (
              <div class={[ns.b('scroll-item')]}>
                {panel ? renderPanelItem(item, panel) : renderDefaultItem(item)}
                {renderDropdownArrow()}
              </div>
            );
          })}
          {renderCustomLastItem()}
        </div>
      );
    };

    // 绘制项行为
    const renderQuickToolBar = (): VNode | undefined => {
      const ctrlModel = c.model.controls?.find(item => {
        return item.name === `${c.model.name!}_quicktoolbar`;
      });
      if (!ctrlModel) {
        return;
      }
      return (
        <iBizToolbarControl
          modelData={ctrlModel}
          context={c.context}
          params={c.params}
        ></iBizToolbarControl>
      );
    };

    const renderBatchToolBar = (): VNode | undefined => {
      const ctrlModel = c.model.controls?.find(item => {
        return item.name === `${c.model.name!}_batchtoolbar`;
      });
      if (!ctrlModel) {
        return;
      }
      return (
        <div class={ns.b('batchtoolbar')}>
          <iBizToolbarControl
            modelData={ctrlModel}
            context={c.context}
            params={c.params}
          ></iBizToolbarControl>
        </div>
      );
    };

    const renderNoData = (): VNode | undefined => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      if (!isLoaded) {
        return;
      }
      return (
        isLoaded && (
          <iBizNoData
            class={ns.b('content')}
            text={c.model.emptyText}
            emptyTextLanguageRes={c.model.emptyTextLanguageRes}
          >
            {renderQuickToolBar()}
          </iBizNoData>
        )
      );
    };

    return {
      c,
      ns,
      renderListContent,
      renderNoData,
      renderBatchToolBar,
      onPageChange,
      onPageRefresh,
      onPageSizeChange,
    };
  },
  render() {
    const { enablePagingBar } = this.c.model;

    let content = null;
    if (this.c.state.isCreated) {
      content = [
        this.c.state.items.length > 0
          ? this.renderListContent()
          : this.renderNoData(),
        this.renderBatchToolBar(),
        enablePagingBar ? (
          <iBizPagination
            class={this.ns.e('pagination')}
            total={this.c.state.total}
            curPage={this.c.state.curPage}
            size={this.c.state.size}
            totalPages={this.c.state.totalPages}
            onChange={this.onPageChange}
            onPageSizeChange={this.onPageSizeChange}
            onPageRefresh={this.onPageRefresh}
          ></iBizPagination>
        ) : null,
      ];
    }

    return (
      <iBizControlBase
        class={[this.ns.is('enable-page', !!enablePagingBar)]}
        controller={this.c}
      >
        {content}
      </iBizControlBase>
    );
  },
});
