import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
import { EditorController, IViewConfig } from '@ibiz-template/runtime';
import { IHttpResponse } from '@ibiz-template/core';
export declare class TeamSelectController extends EditorController<IPicker> {
    /**
     * 云系统操作者Map
     *
     * @memberof PersonelSelectController
     */
    operatorMap: Map<any, any>;
    /**
     * 总数
     */
    total: number;
    /**
     * 当前人员数量
     */
    currentNumber: number;
    /**
     * 人员当前页
     */
    page: number;
    /**
     * 部门人员数据页数
     */
    deptpage: number;
    /**
     * 当前部门人员数量
     */
    deptcurrentNumber: number;
    /**
     * 部门人员总数
     */
    depttotal: number;
    /**
     * 每页数量
     */
    size: number;
    /**
     * 是否多选
     */
    multiple: boolean;
    /**
     * 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去
     */
    isAddSymbol: boolean;
    /**
     * 多选时拼接的字符串
     */
    separator: string;
    /**
     *选择视图相关参数
     */
    pickupView: IViewConfig | null;
    /**
     *链接视图相关参数
     */
    linkView: IViewConfig | null;
    /**
     * 人员UI转化
     */
    userFilterMap: IData;
    /**
     * 部门人员UI转化
     */
    deptFilterMap: IData;
    /**
     * 是否显示人员部门分页
     */
    isShowTab: boolean;
    /**
     *值项
     */
    valueItem: string;
    /**
     * 主键属性名称
     */
    keyName: string;
    /**
     * 主文本属性名称
     */
    textName: string;
    /**
     * 数据集codeName
     */
    interfaceName: string;
    /**
     * 自填模式sort排序
     */
    sort: string | undefined;
    /**
     * 不支持AC（根据编辑器类型得）
     */
    noAC: boolean;
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    noButton: boolean;
    /**
     * 实体自填模式模型
     */
    deACMode: IAppDEACMode | undefined;
    /**
     * 自填数据项集合（已排除了value和text)
     */
    dataItems: IDEACModeDataItem[];
    objectIdField: string | undefined;
    objectNameField: string | undefined;
    objectValueField: string | undefined;
    userUrl: string;
    deptUrl: string;
    teamUrl: string;
    teamMemberUrl: string;
    teamValueItem: string;
    copyUserUrl: string;
    copyDeptUrl: string;
    copyTeamUrl: string;
    copyTeamMemberUrl: string;
    userMethod: 'get' | 'post';
    deptMethod: 'get' | 'post';
    teamMethod: 'get' | 'post';
    teamMemberMethod: 'get' | 'post';
    /**
     * 上下文替换正则
     *
     */
    contextReg: RegExp;
    /**
     * 数据替换正则
     *
     */
    dataReg: RegExp;
    /**
     * 参数替换正则
     *
     */
    paramsReg: RegExp;
    /**
     * 是否配置了默认显示当前用户
     */
    defaultSelCurUser: boolean;
    /**
     * 值类型
     */
    valueType: string;
    /**
     * 关注类型属性
     *
     */
    attentionTypeField: string;
    /**
     * 自填充映射
     */
    selfFillMap: {};
    /**
     * 选中后默认关注值
     *
     */
    defaultAttentionValue: string;
    /**
     * 是否显示姓名文字
     */
    showNameText: boolean;
    /**
     * 是否显示姓名提示
     */
    showNameTip: boolean;
    protected onInit(): Promise<void>;
    /**
     * 初始化字段默认属性
     */
    initDefaultAttribute(): void;
    /**
     * 初始化noAc和noButton
     */
    initParams(): void;
    /**
     * 重置状态
     */
    resetState(): void;
    /**
     * 重置全部人员分类的状态
     */
    resetUserState(): void;
    /**
     * 重置部门人员分类的状态
     */
    resetDeptState(): void;
    /**
     * 加载更多
     */
    loadMore(data: IData, tag: 'member' | 'department' | 'team', params?: IData): Promise<IHttpResponse<IData[]> | undefined>;
    getServiceDataTeamMember(id: string, data: IData, query?: IData): Promise<IHttpResponse<IData[]>>;
    /**
     * 团队成员
     */
    loadTeamMember(data: IData, id: string, params?: IData): Promise<IHttpResponse<IData[]> | undefined>;
    /**
     * 填充字符串中的数据
     *
     * @author chitanda
     * @date 2021-04-23 20:04:17
     * @static
     * @param {string} str
     * @param {*} [context]
     * @param {*} [data]
     * @return {*}  {string}
     */
    fill(str?: string, context?: IContext, params?: IParams, data?: IData): string;
    /**
     * 加载实体数据集数据
     *
     * @param {string} tag 当前分类 user || department
     * @param {IData} data 表单数据
     * @param {string} query 模糊匹配字符串
     * @returns {*}  {Promise<IHttpResponse<IData[]>>}
     * @memberof PersonelSelectController
     */
    getServiceData(tag: 'member' | 'department' | 'team', data: IData, query?: IData): Promise<IHttpResponse<IData[]>>;
    /**
     * 获取操作用户列表
     *
     * @memberof PersonelSelectController
     */
    getOperatorUserList(): Promise<void>;
}
