import { IDomEditor } from '@wangeditor/editor';
export interface INodeController {
    /**
     * 初始化
     *
     * @memberof INodeController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    /**
     * 销毁
     *
     * @memberof INodeController
     */
    onDestroyed(): void;
    /**
     * 注册节点
     *
     * @memberof INodeController
     */
    registerNode(): void;
    /**
     * 显示模态
     *
     * @memberof INodeController
     */
    showModal(): void;
    /**
     * 插入节点
     *
     * @param {IData} data
     * @memberof INodeController
     */
    insertNode(data: IData): void;
    /**
     * 解析节点
     *
     * @param {string} value
     * @return {*}  {string}
     * @memberof INodeController
     */
    parseNode(value: string): string;
}
