import { ControllerEvent } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { IDomEditor } from '@wangeditor/editor';
import { commentEvent } from '../html-comment.event';
/**
 * 代码段控制器
 *
 * @export
 * @class CodeSnippetController
 * @extends {EditorController}
 */
export declare class CodeSnippetController {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof CodeSnippetController
     */
    model: IEditor;
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
     * 表单数据
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    data: IData;
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof CodeSnippetController
     */
    editor: IDomEditor;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    editorParams: IData | undefined;
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof CodeSnippetController
     */
    items: IData[];
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof CodeSnippetController
     */
    evt: ControllerEvent<commentEvent>;
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof CodeSnippetController
     */
    execting: boolean;
    /**
     * Creates an instance of CodeSnippetController.
     * @param {IData} option
     * @memberof CodeSnippetController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof CodeSnippetController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    /**
     * 控制器销毁
     *
     * @memberof CodeSnippetController
     */
    onDestroyed(): void;
    /**
     * 插入节点
     *
     * @param {IDomEditor} editor
     * @memberof CodeSnippetController
     */
    insertNode(data: IData): void;
    /**
     * 解析mention节点
     *
     * @param {string} value
     * @return {*}
     * @memberof CodeSnippetController
     */
    parseNode(value: string): string;
}
