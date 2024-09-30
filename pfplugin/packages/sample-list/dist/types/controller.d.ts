import { GridController, ListController } from '@ibiz-template/runtime';
/**
 * 多选视图简单列表控制器
 *
 * @export
 * @class SampleListController
 * @extends {ListController}
 */
export declare class SampleListController extends ListController {
    /**
     * 选择表格
     *
     * @readonly
     * @memberof SampleListController
     */
    get pickupGrid(): GridController;
    /**
     * 处理删除
     *
     * @param {IData} item
     * @memberof SampleListController
     */
    handleRemove(item: IData): void;
    /**
     * 设置表格选中数据
     *
     * @param {IData[]} items
     * @memberof SampleListController
     */
    setData(items: IData[]): void;
}
