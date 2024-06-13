import { DataChangeEvent, EditFormController, IDataAbilityParams } from '@ibiz-template/runtime';
import { IDEFormDetail } from '@ibiz/model-core';
export declare class FormDataComparisonController extends EditFormController {
    /**
     *   基础数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 17:04:49
     * @type {IData}
     */
    baseResData: IData;
    /**
     *   对比数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 17:04:49
     * @type {IData}
     */
    compareResData: IData;
    /**
     * 表单旧数据
     *
     * @author zk
     * @date 2023-12-20 11:12:43
     * @protected
     * @type {IData}
     * @memberof FormController
     */
    protected oldData: IData;
    /**
     * version数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 16:04:37
     * @type {IData[]}
     */
    versionData: IData[];
    /**
     *  对比数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 16:04:37
     * @type {IData[]}
     */
    comparisonArr: IData;
    /**
     *  基础表格数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:57
     * @type {IData[]}
     */
    gridData: IData[];
    /**
     *  展示完全数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:04
     * @type {IData[]}
     */
    AllGridData: IData[];
    /**
     *  去除相同数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:15
     * @type {IData[]}
     */
    removeSameGridData: IData[];
    /**
     *  关系界面数据
     *
     * @author fangZhiHao
     * @date 2024-04-30 10:04:33
     * @type {IData}
     */
    AlldruipartData: Map<any, any>;
    /**
     *  关系界面数据长度
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:56
     * @type {number}
     */
    druipartDataSize: number;
    /**
     *   关系界面实际数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:13
     * @type {IData}
     */
    newDruipartData: IData;
    protected onMounted(): Promise<void>;
    /**
     *   获取版本数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:24
     */
    getVersion(): Promise<void>;
    /**
     *  设置关系界面数据
     *
     * @author fangZhiHao
     * @date 2024-04-30 10:04:15
     * @param {string} version
     * @param {string} name
     * @param {IData} data
     */
    calcAlldruipartData(version: string, name: string, data: IData): void;
    /**
     *  设置关系界面数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:38
     * @param {DataChangeEvent} args
     */
    setdruipartData(args: DataChangeEvent): void;
    /**
     * 计算关系界面的差异
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:15
     * @return {*}
     */
    duripartDifference(): {
        added: string[];
        modified: string[];
        deleted: string[];
    };
    /**
     *  计算duriput样式
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:56
     * @param {IData[]} data
     */
    calcCategorduriptData(data: IData[], result: IData): void;
    /**
     *  计算关系界面差异
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:45
     * @param {string} codeName
     * @param {IData} result
     * @return {*}
     */
    caleduriptCategory(codeName: string, result: IData): "added" | "modified" | "deleted" | "samed";
    /**
     *  计算属性类别
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:42
     * @param {string} codeName
     * @return {*}
     */
    caleCategory(codeName: string): "added" | "modified" | "deleted" | "samed";
    /**
     *  计算表单分组
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:07
     * @param {IDEFormDetail[]} data
     * @return {*}
     */
    calcGroupPanel(data: IDEFormDetail[]): IData[];
    /**
     *  计算表格
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:07
     * @param {IDEFormDetail[]} data
     * @return {*}
     */
    calcGridData(data: IDEFormDetail[]): void;
    /**
     *  计算类别样式
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:56
     * @param {IData[]} data
     */
    calcCategoryGridData(data: IData[]): void;
    /**
     *  去除相同项
     *
     * @author fangZhiHao
     * @date 2024-04-26 18:04:56
     * @param {IData[]} data
     */
    removeSame(data: IData[]): IData[];
    isFalseyButNotEmpty(value: string | IData[] | null | undefined): boolean;
    compareObjectValues(objA: IData, objB: IData): boolean;
    /**
     *  判断两个对象的差异
     *  新增属性：在新对象中存在属性且属性值不能是falsey值（数字 0，布尔值 false 除外），不为空数组，不为空对象，且该属性在旧对象中不存在或其值为falsey值、空数组、空对象。
     *  修改属性：在新旧对象中都存在，且新旧值均不为falsey值（数字 0，布尔值 false 除外）、空对象、空数组，且值发生了变化。注意，对于引用对象，使用JSON.stringify进行字符串化对比。
     *  删除属性：在旧对象中存在且其值不是falsey值、空数组、空对象，但在新对象中不存在或其值为falsey值、空数组、空对象。
     *
     * @author fangZhiHao
     * @date 2024-04-26 13:04:59
     * @param {IData} oldObj
     * @param {IData} newObj
     * @return {*}
     */
    diffObjects(oldObj: IData, newObj: IData): {
        added: string[];
        modified: string[];
        deleted: string[];
    };
    /**
     * 部件加载数据行为
     *
     * @author lxm
     * @date 2022-08-19 14:08:50
     */
    load(args?: IDataAbilityParams): Promise<IData>;
}
