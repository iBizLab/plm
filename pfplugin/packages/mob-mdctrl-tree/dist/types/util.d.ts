import { Namespace } from '@ibiz-template/core';
import { ListController, MDCtrlController, IMDControlController } from '@ibiz-template/runtime';
import { VNode } from 'vue';
/**
 * 使用分页组件
 *
 * @author lxm
 * @date 2022-09-06 17:09:09
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export declare function usePagination(c: IMDControlController): {
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onPageRefresh: () => void;
};
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
export declare function useListRender(props: IData, c: MDCtrlController | ListController, ns: Namespace): {
    renderItem: (row: IData) => VNode | undefined;
    renderNoData: () => VNode | undefined;
    renderLoadMore: () => JSX.Element | null;
};
