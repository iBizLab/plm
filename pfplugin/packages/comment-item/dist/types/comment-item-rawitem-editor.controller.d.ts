import { EditorController } from '@ibiz-template/runtime';
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
    protected onInit(): Promise<void>;
    /**
     * 获取面板绘制器自定义html
     *
     * @param {string} controlRenders
     * @param {(IData | undefined)} data
     * @return {*}  {(string | undefined)}
     * @memberof CommentItemRawItemEditorController
     */
    getPanelItemCustomHtml(scriptCode: string, data: IData | undefined): string | undefined;
}
