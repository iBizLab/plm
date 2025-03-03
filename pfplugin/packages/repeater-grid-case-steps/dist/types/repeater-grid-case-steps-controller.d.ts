import { FormMDCtrlRepeaterController } from '@ibiz-template/runtime';
export declare class RepeaterGridCaseStepsController extends FormMDCtrlRepeaterController {
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    groupField: string;
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    parentField: string;
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    entityKey: string;
    /**
     * 预置添加行为组
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    presetAddAction: IData[];
    /**
     * 预置分组行为
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    presetGroupActions: IData[];
    protected onInit(): Promise<void>;
    save(): Promise<void>;
    /**
     * @description 重写setValue，防止抖动
     * @param {(IData[] | IData | null)} value
     * @memberof RepeaterGridCaseStepsController
     */
    setValue(value: IData[] | IData | null): Promise<void>;
    /**
     * 处理添加行为组
     *
     * @param {string} value
     * @memberof RepeaterGridCaseStepsController
     */
    handleAddAction(value: string): void;
    /**
     * 新建分组数据
     *
     * @memberof RepeaterGridCaseStepsController
     */
    insertValue(item: IData, index?: number): void;
    /**
     * 获取分组行为
     *
     * @param {boolean} isGroup
     * @param {boolean} isChildren
     * @return {*}
     * @memberof RepeaterGridCaseStepsController
     */
    getActionsByType(isGroup: boolean, isChildren: boolean): IData[];
    handleGroupAction(action: IData): void;
    /**
     * 处理拷贝
     *
     * @param {IData} item
     * @memberof RepeaterGridCaseStepsController
     */
    handleCopy(item: IData): void;
    /**
     * 新建行数据（重写）
     *
     * @param {number} [index]
     * @memberof RepeaterGridCaseStepsController
     */
    create(index?: number): void;
    /**
     * 自定义删除
     *
     * @param {number} [index]
     * @return {*}  {void}
     * @memberof RepeaterGridCaseStepsController
     */
    remove(index?: number): void;
    /**
     * 计算新建默认值
     *
     * @param {IData} data
     * @return {*}  {IData}
     * @memberof RepeaterGridCaseStepsController
     */
    calcDefaultValue(data: IData): IData;
    /**
     * 批量操作列数据
     *
     * @param {string} name
     * @param {string} value
     * @memberof RepeaterGridCaseStepsController
     */
    batchSetColumnData(name: string, value: string): void;
}
