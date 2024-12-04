import { ControllerEvent, EditorController, EventBase, IViewController } from '@ibiz-template/runtime';
import { IAppViewLogic, IHtml } from '@ibiz/model-core';
import { CommentMentionController } from './controller/mob-mention.controller';
import { CommentMarkerController } from './controller/mob-marker.controller';
import { mobCommentEvent } from './html-comment.event';
/**
 * html框编辑器控制器
 *
 * @export
 * @class MobCommentController
 * @extends {EditorController}
 */
export declare class MobCommentController extends EditorController<IHtml> {
    /**
     * 上传参数
     */
    uploadParams?: IParams;
    /**
     * 下载参数
     */
    exportParams?: IParams;
    /**
     * @description 是否显示工具栏
     * @type {boolean}
     * @memberof MobCommentController
     */
    showToolbar: boolean;
    /**
     * @description 值模式(暂时只支持html模式，text模式存在问题)
     * @type {('text' | 'html')}
     * @memberof MobCommentController
     */
    valueMode: 'text' | 'html';
    /**
     * @description 图片模式
     * @type {('base64' | 'file')}
     * @memberof MobCommentController
     */
    imageMode: 'base64' | 'file';
    /**
     * @description 提及控制器
     * @type {CommentMentionController}
     * @memberof MobCommentController
     */
    mention: CommentMentionController;
    /**
     * @description 提及工作项控制器
     * @type {CommentMarkerController}
     * @memberof MobCommentController
     */
    marker: CommentMarkerController;
    /**
     * @description quill配置
     * @type {IData}
     * @memberof MobCommentController
     */
    modules: IData;
    /**
     * @description 视图
     * @private
     * @return {*}  {IViewController}
     * @memberof MobCommentController
     */
    get view(): IViewController;
    /**
     * @description 视图逻辑
     * @type {IAppViewLogic[]}
     * @memberof MobCommentController
     */
    appViewLogics: IAppViewLogic[];
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof MobCommentController
     */
    replyScript: string;
    /**
     * @description 回复
     * @type {string}
     * @memberof MobCommentController
     */
    reply: string;
    evt: ControllerEvent<mobCommentEvent>;
    protected getEventArgs(): Omit<EventBase, 'eventName'>;
    private initBlot;
    private registerCustomElem;
    /**
     * @description 获取控制器参数
     * @protected
     * @return {*}
     * @memberof MobCommentController
     */
    protected getControllerParams(): IData;
    /**
     * 初始化
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof MobCommentController
     */
    protected onInit(): Promise<void>;
    /**
     * @description 获取用户数据
     * @return {*}  {Promise<IData[]>}
     * @memberof MobCommentController
     */
    getMentions(data: IData): Promise<IData[]>;
    /**
     * @description 获取工作项数据
     * @return {*}  {Promise<IData[]>}
     * @memberof MobCommentController
     */
    getMarkers(data: IData): Promise<IData[]>;
    /**
     * @description 转换为html
     * @param {string} value
     * @return {*}  {string}
     * @memberof MobCommentController
     */
    transformHtml(value: string): string;
    /**
     * @description 转换为delta
     * @param {string} value
     * @return {*}
     * @memberof MobCommentController
     */
    transformDelta(value: string): string;
    /**
     * @description 打开选择视图
     * @param {IData} data
     * @param {string} viewId
     * @return {*}  {(Promise<IData[] | undefined>)}
     * @memberof MobCommentController
     */
    openPickUpView(data: IData, logic: IAppViewLogic): Promise<IData[] | undefined>;
    /**
     * 设置回复,data: {name: string, content: string}
     *
     * @param {IData} data
     * @memberof MobCommentController
     */
    setReply(data: IData): void;
    /**
     * @description 清空评论
     * @memberof MobCommentController
     */
    clearReply(): void;
    /**
     * 获取当前视图
     *
     * @return {*}
     * @memberof HtmlCommentController
     */
    getView(): any;
}
