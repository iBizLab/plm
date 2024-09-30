import { ControllerEvent, EditorController, EventBase, IAppDEService } from '@ibiz-template/runtime';
import { IAppDEACMode, IHtml } from '@ibiz/model-core';
import { IDomEditor } from '@wangeditor/editor';
import { Ref } from 'vue';
import { commentEvent } from './html-comment.event';
/**
 * html框编辑器控制器
 *
 * @export
 * @class HtmlCommentController
 * @extends {EditorController}
 */
export declare class HtmlCommentController extends EditorController<IHtml> {
    /**
     * 用户头像数据
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    userAvatar: string;
    /**
     * 上传参数
     */
    uploadParams?: IParams;
    /**
     * 下载参数
     */
    exportParams?: IParams;
    /**
     * 最小高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    minHeight: number;
    /**
     * 最大高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    maxHeight: number;
    /**
     * 是否折叠
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    collapsed: Ref<boolean>;
    /**
     * 是否隐藏
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    hidden: Ref<boolean>;
    /**
     * 回复
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    reply: Ref<string>;
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    replyScript: string;
    /**
     * 编辑器模式
     *
     * @type {('comment' | 'default')}
     * @memberof HtmlCommentController
     */
    mode: 'comment' | 'default';
    /**
     * 插入工具栏项
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    insertKeys: IData[];
    /**
     * 绘制模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    renderMode: 'HTML' | 'JSON';
    /**
     * 保存间隔
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    saveInterval: number;
    /**
     * 抛值模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    emitMode: 'BUTTON' | 'AUTOMATIC';
    /**
     * 唯一标识
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    uuid: string;
    /**
     * 实时编辑（协同编辑）
     */
    enableRealtime: boolean;
    /**
     * 编辑器实例
     */
    editor: IDomEditor;
    /**
     * 自动保存间隔
     * - 默认30秒
     * @private
     * @type {number}
     * @memberof HtmlCommentController
     */
    private autoSaveInterval;
    /**
     * 定时器
     *
     * @private
     * @type {(NodeJS.Timeout | null)}
     * @memberof HtmlCommentController
     */
    private timer;
    /**
     * 应用实体服务
     *
     * @type {IAppDEService}
     * @memberof HtmlCommentController
     */
    deService?: IAppDEService;
    /**
     * 自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:52
     * @type {IAppDEACMode}
     */
    deACMode?: IAppDEACMode;
    /**
     * AI 聊天自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:37
     * @type {boolean}
     */
    chatCompletion: boolean;
    evt: ControllerEvent<commentEvent>;
    protected getEventArgs(): Omit<EventBase, 'eventName'>;
    protected onInit(): Promise<void>;
    /**
     * 注册自定义元素
     *
     * @private
     * @memberof HtmlCommentController
     */
    private registerCustomElem;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof HtmlCommentController
     */
    onCreated(editor: IDomEditor, data: IData, toolbarConfig: IData): void;
    /**
     * 组件销毁
     *
     * @memberof HtmlCollapseController
     */
    onDestroyed(): void;
    /**
     * 处理视图销毁
     *
     * @memberof HtmlCommentController
     */
    listenViewDestroyed(): void;
    /**
     * 解析所有注册节点
     *
     * @param {string} value
     * @return {*}
     * @memberof HtmlCommentController
     */
    parseNode(value: string): string;
    /**
     * 设置html
     *
     * @param {string} value
     * @memberof HtmlCommentController
     */
    setValue(value: string): Promise<void>;
    /**
     * 设置回复,data: {name: string, content: string}
     *
     * @param {IData} data
     * @memberof HtmlCommentController
     */
    setReply(data: IData): void;
    /**
     * 删除回复
     *
     * @memberof HtmlCommentController
     */
    removeReply(): void;
    /**
     * 清空
     *
     * @memberof HtmlCommentController
     */
    clear(): void;
    /**
     * 请求url获取文件流，并用JS触发文件下载
     *
     * @author lxm
     * @date 2022-11-17 14:11:09
     * @param {string} url
     * @param {IData} file
     */
    fileDownload(file: {
        url: string;
        name: string;
    }): void;
    /**
     * 切换折叠
     *
     * @memberof HtmlCommentController
     */
    toggleCollapse(open?: boolean): void;
    /**
     * 绘制模式为json时，需要将返回数据的json内容转html
     *
     * @author ljx
     * @date 2024-03-09 15:11:09
     * @param {string} url
     * @param {IData} file
     */
    jsonToHtml(value: string): string;
    /**
     * 绘制模式为json时，处理抛值数据
     *
     * @author ljx
     * @date 2024-03-09 15:11:09
     * @param {string} url
     * @param {IData} file
     */
    toJson(value?: IData[]): string;
    /**
     * 获取当前用户头像
     *
     * @memberof HtmlCommentController
     */
    getCurrentUserAvatar(): Promise<void>;
    /**
     * 获取当前视图
     *
     * @return {*}
     * @memberof HtmlCommentController
     */
    getView(): any;
}
