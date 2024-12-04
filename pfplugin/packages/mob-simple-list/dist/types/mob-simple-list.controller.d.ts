import { ListController, TreeController } from '@ibiz-template/runtime';
export declare class MobSimpleListController extends ListController {
    get pickupTree(): TreeController;
    /**
     * 删除项
     *
     * @param {IData} item
     * @memberof MobSimpleListController
     */
    handleRemove(item: IData): void;
    /**
     * 设置选中数据
     *
     * @param {IData[]} items
     * @memberof MobSimpleListController
     */
    setData(items: IData[]): void;
}
