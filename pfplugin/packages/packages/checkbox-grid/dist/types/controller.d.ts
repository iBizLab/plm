import { GridController, IListController } from '@ibiz-template/runtime';
/**
 * 多选视图表格插件（多选框）控制器
 *
 * @export
 * @class CheckboxGridController
 * @extends {GridController}
 */
export declare class CheckboxGridController extends GridController {
    /**
     * 简单列表控制器
     *
     * @readonly
     * @type {IListController}
     * @memberof CheckboxGridController
     */
    get simpleList(): IListController;
    /**
     * 处理选中数据
     *
     * @param {string[]} selects 选中数据
     * @memberof CheckboxGridController
     */
    handleSelection(selects: string[]): void;
    /**
     * 处理添加简单列表数据
     *
     * @protected
     * @memberof CheckboxGridController
     */
    protected handlePushSimpleListItems(): void;
}
