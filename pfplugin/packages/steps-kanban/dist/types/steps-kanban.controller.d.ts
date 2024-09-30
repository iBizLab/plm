import { IDragChangeInfo, KanbanController } from '@ibiz-template/runtime';
export declare class StepsKanbanController extends KanbanController {
    /**
     *
     *
     * @memberof StepsKanbanController
     */
    splitMap: Map<any, any>;
    /**
     * 步骤分组标识
     *
     * @type {(string | number)}
     * @memberof StepsKanbanController
     */
    splitGroupKey: string | number;
    /**
     * @description 可视化数据长度
     * @type {number}
     * @memberof StepsKanbanController
     */
    visiableLength: number;
    /**
     * @description 分组项高度（计算虚拟列表时使用）
     * @type {number}
     * @memberof StepsKanbanController
     */
    groupItemSize: number;
    protected onCreated(): Promise<void>;
    /**
     * 处理数据分组
     *
     * @memberof StepsKanbanController
     */
    handleDataGroup(): Promise<void>;
    /**
     * 拖拽变更事件处理回调
     * @author lxm
     * @date 2023-09-11 04:12:58
     * @param {IDragChangeInfo} info
     * @return {*}  {Promise<void>}
     */
    onDragChange(info: IDragChangeInfo, split?: string | number): Promise<void>;
    /**
     * 过滤分组属性
     *
     * @param {IData[]} items
     * @param {string} groupField
     * @memberof StepsKanbanController
     */
    filterGroupField(items: IData[], groupField: string): void;
}
