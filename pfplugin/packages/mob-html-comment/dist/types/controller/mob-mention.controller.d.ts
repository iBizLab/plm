import { IAppViewLogic, IEditor, IViewLogic } from '@ibiz/model-core';
/**
 * 评论提及控制器
 *
 * @export
 * @class CommentMentionController
 * @extends {EditorController}
 */
export declare class CommentMentionController {
    /**
     *云系统操作者Map
     *
     * @memberof MenTionController
     */
    operatorMap: Map<any, any>;
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    model: IEditor;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    editorParams: IData | undefined;
    /**
     * 上下文
     *
     * @type {IContext}
     */
    context: IContext;
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    params: IParams;
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    userUrl: string;
    /**
     * 人员UI转化
     */
    userFieldMap: IData;
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMentionController
     */
    userMethod: 'post' | 'get';
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMentionController
     */
    query: string;
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    curPage: number;
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMentionController
     */
    size: number;
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMentionController
     */
    appViewLogics: IAppViewLogic[];
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof CommentMentionController
     */
    constructor(editorParams: IData, option: IData);
    /**
     * 获取云系统操作者
     *
     * @memberof MenTionController
     */
    getOperatorUserList(): Promise<void>;
    /**
     * 转换ui数据
     *
     * @param {IData[]} data
     * @return {*}  {IData[]}
     * @memberof CommentMentionController
     */
    toUIData(data: IData[]): IData[];
    /**
     * 获取用户信息
     *
     * @param {IData} data
     * @return {*}  {Promise<IData[]>}
     * @memberof CommentMentionController
     */
    getUsers(args?: IData): Promise<IData[]>;
    /**
     * @description 转换html
     * @param {string} value
     * @param {IData} data
     * @return {*}  {string}
     * @memberof CommentMentionController
     */
    transformHtml(value: string): string;
    /**
     * @description 转换为delta
     * @param {string} value
     * @return {*}  {string}
     * @memberof CommentMentionController
     */
    transformDelta(value: string): string;
    /**
     * @description 获取提及节点信息
     * @param {IData} data
     * @return {*}
     * @memberof CommentMentionController
     */
    getNodeInfo(data: IData): string;
    /**
     * @description 获取提及人员逻辑
     * @return {*}
     * @memberof CommentMentionController
     */
    getMentionLogic(): IViewLogic | undefined;
}
