import { INodeController } from '../interface/node-interface';
export declare class CustomNodeFactory {
    /**
     * 自定义节点
     *
     * @static
     * @type {IData}
     * @memberof CustomNodeFactory
     */
    static customNodeMap: Map<string, INodeController>;
    /**
     * 预置注册表
     *
     * @type {Map<string, any>}
     * @memberof CustomNodeFactory
     */
    static registerMap: Map<string, any>;
    /**
     * 预置注册节点
     *
     * @static
     * @memberof CustomNodeFactory
     */
    static presetNodes: string[];
    /**
     * 初始化
     *
     * @static
     * @memberof CustomNodeFactory
     */
    static init(uuid: string): void;
    /**
     * 注册节点适配器
     *
     * @public
     * @memberof CustomNodeFactory
     */
    static registerPlugin(data: IData): any;
    /**
     * 根据uuid获取注册插件
     *
     * @static
     * @param {string} id
     * @return {*}
     * @memberof CustomNodeFactory
     */
    static getPluginsById(id: string): INodeController[];
    /**
     * @description 获取控制器
     * @static
     * @param {string} id
     * @param {string} type
     * @return {*}
     * @memberof CustomNodeFactory
     */
    static getControllerById(id: string, type: string): INodeController | undefined;
    /**
     * 卸载节点适配器
     *
     * @public
     * @memberof CustomNodeFactory
     */
    static unregisterPlugin(data: IData): void;
    /**
     * 初始化
     *
     * @static
     * @memberof CustomNodeFactory
     */
    static destroy(uuid: string): void;
}
