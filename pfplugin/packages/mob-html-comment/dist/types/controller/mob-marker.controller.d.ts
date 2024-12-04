import { IAppViewLogic, IEditor } from '@ibiz/model-core';
import { CodeListItem } from '@ibiz-template/runtime';
/**
 * 评论提及公工作项控制器
 *
 * @export
 * @class CommentMarkerController
 * @extends {EditorController}
 */
export declare class CommentMarkerController {
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
     * @memberof CommentMarkerController
     */
    quoteUrl: string;
    /**
     * 人员UI转化
     */
    quoteFieldMap: IData;
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    quoteCodelistMap: Map<string, IData>;
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof CommentMarkerController
     */
    quoteMethod: 'post' | 'get';
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof CommentMarkerController
     */
    query: string;
    /**
     * 当前页
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    curPage: number;
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CommentMarkerController
     */
    size: number;
    /**
     * @description 视图luoj
     * @type {IAppViewLogic[]}
     * @memberof CommentMarkerController
     */
    appViewLogics: IAppViewLogic[];
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof CommentMarkerController
     */
    constructor(editorParams: IData, option: IData);
    /**
     * 加载代码表
     *
     * @param {string} appCodeListId
     * @return {*}  {(Promise<IData | undefined>)}
     * @memberof MarkerController
     */
    loadCodeList(appCodeListId: string): Promise<IData | undefined>;
    setCodeListMap(items: IData): Promise<void>;
    /**
     * 转换ui数据
     *
     * @param {IData[]} data
     * @return {*}  {IData[]}
     * @memberof CommentMarkerController
     */
    toUIData(data: IData[]): IData[];
    /**
     * 获取用户信息
     *
     * @param {IData} data
     * @return {*}  {Promise<IData[]>}
     * @memberof CommentMarkerController
     */
    getWorkItems(args?: IData): Promise<IData[]>;
    /**
     * @description 转换html
     * @param {string} value
     * @param {IData} data
     * @return {*}  {string}
     * @memberof CommentMarkerController
     */
    transformHtml(value: string): string;
    /**
     * @description 转换为delta
     * @param {string} value
     * @return {*}  {string}
     * @memberof CommentMarkerController
     */
    transformDelta(value: string): string;
    /**
     * @description 获取提及节点信息
     * @param {IData} data
     * @return {*}
     * @memberof CommentMarkerController
     */
    getNodeInfo(data: IData): string;
    /**
     * @description 获取代码表项
     * @param {(CodeListItem[] | undefined)} codelist
     * @param {(string | number)} value
     * @return {*}
     * @memberof CommentMarkerController
     */
    findCodeListItem(codelist: CodeListItem[] | undefined, value: string | number): IData | undefined;
    /**
     * @description 获取选中数据
     * @param {IData} data
     * @memberof CommentMarkerController
     */
    getSelection(data: IData): IData;
    /**
     * @description 获取提及工作项逻辑
     * @return {*}
     * @memberof CommentMarkerController
     */
    getMarkerLogic(): IAppViewLogic | undefined;
}
