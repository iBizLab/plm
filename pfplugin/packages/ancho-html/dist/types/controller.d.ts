import { CodeListItem, EditorController } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
/**
 * 直接内容编辑器控制器
 *
 * @export
 * @class RawEditorController
 * @extends {EditorController}
 */
export declare class RawEditorController extends EditorController<IRaw> {
    /**
     * @description 链接视图id
     * @type {string}
     * @memberof RawEditorController
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
    findCodeListItem(codelist: readonly CodeListItem[] | undefined, value: string | number): CodeListItem | undefined;
    /**
     * @description 解析评论节点
     * @param {IData} data
     * @return {*}
     * @memberof CommentItemRawItemEditorController
     */
    parseCommentTag(data: IData): string;
    /**
     * @description 处理点击事件
     * @param {MouseEvent} event
     * @param {IData} item
     * @return {*}  {void}
     * @memberof RawEditorController
     */
    handleClick(event: MouseEvent, item: IData): void;
}
