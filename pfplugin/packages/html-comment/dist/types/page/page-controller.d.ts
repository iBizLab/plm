import { ControllerEvent } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { IDomEditor } from '@wangeditor/editor';
import { commentEvent } from '../html-comment.event';
/**
 * 代码段控制器
 *
 * @export
 * @class PageController
 * @extends {EditorController}
 */
export declare class PageController {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof PageController
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
     * @memberof PageController
     */
    data: IData;
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof PageController
     */
    editor: IDomEditor;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof PageController
     */
    editorParams: IData | undefined;
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof PageController
     */
    items: IData[];
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof PageController
     */
    evt: ControllerEvent<commentEvent>;
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof PageController
     */
    execting: boolean;
    /**
     * Creates an instance of PageController.
     * @param {IData} option
     * @memberof PageController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof PageController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    /**
     * 控制器销毁
     *
     * @memberof PageController
     */
    onDestroyed(): void;
    /**
     * 插入节点
     *
     * @param {IDomEditor} editor
     * @memberof PageController
     */
    insertNode(data: IData): void;
    /**
     * 解析mention节点
     *
     * @param {string} value
     * @return {*}
     * @memberof PageController
     */
    parseNode(value: string): string;
}
