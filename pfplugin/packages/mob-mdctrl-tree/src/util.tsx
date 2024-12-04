/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import { Namespace } from '@ibiz-template/core';
import {
  ListController,
  MDCtrlController,
  ControlVO,
  GridController,
  GridRowState,
  IMDControlController,
} from '@ibiz-template/runtime';
import { ILayoutPanel } from '@ibiz/model-core';
import { VNode } from 'vue';
import { chunk } from 'lodash-es';
import { INodeData } from './mob-md-ctrl-tree.state';

/**
 * 使用分页组件
 *
 * @author lxm
 * @date 2022-09-06 17:09:09
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export function usePagination(c: IMDControlController): {
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onPageRefresh: () => void;
} {
  // 初始化表格项
  const initGridItems = () => {
    const controller = c as GridController;
    if (Array.isArray(controller.state.simpleData)) {
      controller.state.items =
        chunk(controller.state.simpleData, controller.state.size)[
          controller.state.curPage - 1
        ] || [];
      controller.state.rows = controller.state.items.map(item => {
        const row = new GridRowState(new ControlVO(item), controller);
        return row;
      });
    }
  };

  function onPageChange(page: number): void {
    if (!page || page === c.state.curPage) {
      return;
    }
    c.state.curPage = page;
    if (c.context && c.context.srfrunmode === 'DESIGN') {
      initGridItems();
      return;
    }
    c.load();
  }

  function onPageSizeChange(size: number): void {
    if (!size || size === c.state.size) {
      return;
    }
    c.state.size = size;
    if (c.context && c.context.srfrunmode === 'DESIGN') {
      initGridItems();
      return;
    }
    // 当page为第一页的时候切换size不会触发pageChange，需要自己触发加载
    if (c.state.curPage === 1) {
      c.load();
    }
  }

  function onPageRefresh(): void {
    c.load();
  }
  return { onPageChange, onPageSizeChange, onPageRefresh };
}

/**
 * 列表绘制工具
 *
 * @author zk
 * @date 2023-12-06 03:12:00
 * @export
 * @param {IData} props
 * @param {(IMobMDCtrlController | IListController)} c
 * @param {Namespace} ns
 * @return {*}  {({
 *   renderItem: (row: IData) => VNode | undefined;
 *   render: () => VNode | null;
 *   renderNoData: () => VNode | undefined;
 * })}
 */
export function useListRender(
  props: IData,
  c: MDCtrlController | ListController,
  ns: Namespace,
): {
  renderItem: (row: IData) => VNode | undefined;
  renderNoData: () => VNode | undefined;
  renderLoadMore: () => JSX.Element | null;
} {
  const isSelect = (row: IData) => {
    const findIndex = c.state.selectedData.findIndex(data => {
      return data.srfkey === row.srfkey;
    });
    return findIndex !== -1;
  };

  const calcItemClass = (row: IData) => {
    const select = isSelect(row);
    const itemClass = [ns.b('item'), ns.is('active', select)];
    return itemClass;
  };

  const renderRightSlot = (row: IData) => {
    const select = isSelect(row);
    return <van-checkbox class={ns.bm('item', 'right')} checked={select} />;
  };

  const renderIcon = (row: IData) => {
    return <img class={ns.b('image')} src={row.image} alt='' />;
  };

  // 绘制项内容
  const renderItemContent = (row: IData): VNode => {
    const slotOption = {};
    if (Object.prototype.hasOwnProperty.call(row, 'image')) {
      Object.assign(slotOption, { icon: renderIcon(row) });
    }
    if (props.mode === 'SELECT') {
      Object.assign(slotOption, { 'right-icon': renderRightSlot(row) });
    }
    return (
      <van-cell
        is-link
        title={row.srfmajortext || ''}
        onClick={() => c.onRowClick(row)}
      >
        {slotOption}
      </van-cell>
    );
  };

  // 绘制项布局面板
  const renderPanelItem = (item: IData, modelData: ILayoutPanel): VNode => {
    const { context, params } = c;
    const content = (
      <iBizControlShell
        data={item}
        modelData={modelData}
        context={context}
        params={params}
        onClick={() => c.onRowClick(item)}
      ></iBizControlShell>
    );

    if (props.mode === 'SELECT') {
      return (
        <div class={ns.b('select-item')}>
          <van-checkbox
            checked={isSelect(item)}
            onClick={() => c.onRowClick(item)}
          ></van-checkbox>
          {content}
        </div>
      );
    }

    return content;
  };

  // 绘制默认列表项
  const renderItem = (row: INodeData): VNode | undefined => {
    const panel = c.model.itemLayoutPanel;
    const itemClass = calcItemClass(row);
    const _leaf = row._leaf !== false;
    return (
      <div class={itemClass}>
        <div class={ns.be('item', 'expand-icon')}>
          {!_leaf ? (
            row._expand ? (
              <ion-icon
                name='chevron-down-circle'
                onClick={() => (row._expand = !row._expand)}
              ></ion-icon>
            ) : (
              <ion-icon
                name='chevron-forward-circle'
                onClick={() => (row._expand = !row._expand)}
              ></ion-icon>
            )
          ) : null}
        </div>
        <div class={ns.be('item', 'content')}>
          {props.modelData.name !== 'simplelist' && panel
            ? renderPanelItem(row, panel)
            : renderItemContent(row)}
        </div>
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
          text={c.model.emptyText}
          emptyTextLanguageRes={c.model.emptyTextLanguageRes}
        ></iBizNoData>
      )
    );
  };

  // 加载更多
  const loadMoreIcon = () => {
    return (
      <div class={ns.b('load-more')} onClick={() => c.loadMore()}>
        <span>{ibiz.i18n.t('control.common.loadMore')}</span>
      </div>
    );
  };

  // 分页模式为点击加载时并且当前数量小于总数
  const renderLoadMore = () => {
    let icon = null;
    const loadMore =
      c.state.items.length < c.state.total && c.state.total > c.state.size;
    if (loadMore) {
      icon = loadMoreIcon();
    }
    return icon;
  };

  return { renderNoData, renderItem, renderLoadMore };
}
