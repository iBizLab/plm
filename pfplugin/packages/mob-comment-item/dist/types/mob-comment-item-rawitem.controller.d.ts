import { EditorController } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
export declare class MobCommentItemRawItemController extends EditorController<IRaw> {
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof MobCommentItemRawItemController
     */
    scriptCode: string;
    protected onInit(): Promise<void>;
    /**
     * 获取面板绘制器自定义html
     *
     * @param {string} controlRenders
     * @param {(IData | undefined)} data
     * @return {*}  {(string | undefined)}
     * @memberof MobCommentItemRawItemController
     */
    getPanelItemCustomHtml(scriptCode: string, data: IData | undefined): string | undefined;
}
