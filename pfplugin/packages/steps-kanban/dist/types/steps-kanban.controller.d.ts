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
