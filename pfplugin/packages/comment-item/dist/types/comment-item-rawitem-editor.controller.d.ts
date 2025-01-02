import { CodeListItem, EditorController } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
/**
 * 直接内容编辑器控制器
 *
 * @export
 * @class CommentItemRawItemEditorController
 * @extends {EditorController}
 */
export declare class CommentItemRawItemEditorController extends EditorController<IRaw> {
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    scriptCode: string;
    /**
     * @description 链接视图id
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    linkViewId: string;
    /**
     * @description 图标代码表标识
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    iconCodeListId: string;
    /**
     * @description 代码表数据
     * @type {readonly}
     * @memberof CommentItemRawItemEditorController
     */
    codeListItems: readonly CodeListItem[];
    protected onInit(): Promise<void>;
    /**
     * 加载代码表
     *
     * @param {string} appCodeListId
     * @return {*}  {(Promise<readonly CodeListItem[]>)}
     * @memberof CommentItemRawItemEditorController
     */
    loadCodeList(appCodeListId: string): Promise<readonly CodeListItem[]>;
    /**
     * 获取面板绘制器自定义html
     *
     * @param {string} controlRenders
     * @param {(IData | undefined)} data
     * @return {*}  {(string | undefined)}
     * @memberof CommentItemRawItemEditorController
     */
    getPanelItemCustomHtml(scriptCode: string, data: IData | undefined): string | undefined;
    findCodeListItem(codelist: readonly CodeListItem[] | undefined, value: string | number): CodeListItem | undefined;
    /**
     * @description 解析评论节点
     * @param {IData} data
     * @return {*}
     * @memberof CommentItemRawItemEditorController
     */
    parseCommentTag(data: IData): string;
    /**
     * @description 点击事件
     * @param {MouseEvent} event
     * @memberof CommentItemRawItemEditorController
     */
    onClick(event: MouseEvent): void;
    /**
     * @description 处理点击事件
     * @param {MouseEvent} event
     * @return {*}  {void}
     * @memberof CommentItemRawItemEditorController
     */
    handleClick(event: MouseEvent): void;
}
