import { ControllerEvent, EventBase, IComponentEvent } from '@ibiz-template/runtime';
import { X6NodeController } from '../x6-node-controller/x6-node-controller';
import { X6LinkController } from '../x6-link-controller/x6-link-controller';
import { MindMapData } from '../../interface';
interface IComponentEventP extends IComponentEvent {
    /**
     * 自身的准备工作完成(如模型加载，各种初始化，init结束)
     *
     * @author lxm
     * @date 2022-09-21 16:09:28
     */
    onNodeBlur: {
        event: EventBase;
        emitArgs: undefined;
    };
}
/**
 * 负责对x6的图形进行操作
 *
 * @export
 * @class X6Controller
 */
export declare class X6Controller {
    /**
     * 事件触发器
     * @author lxm
     * @date 2023-04-25 09:36:31
     * @type {ControllerEvent}
     */
    evt: ControllerEvent<IComponentEventP>;
    /**
     * 当前x6图形实例
     *
     * @type {IParams}
     */
    readonly g: IParams;
    /**
     * 节点控制器
     *
     * @type {X6NodeController}
     */
    readonly node: X6NodeController;
    /**
     * 连线适控制器
     *
     * @type {X6LinkController}
     */
    readonly link: X6LinkController;
    /**
     * 默认配置参数
     */
    protected defaultParams: IParams;
    protected backupData: IData[];
    selection: IData[];
    /**
     * 初始化聚焦
     */
    internalFocus: boolean;
    defaultData: IData[];
    /**
     * x6图形配置
     *
     * @protected
     * @type {IParams}
     */
    protected graphOptions: IParams;
    /**
     * Creates an instance of X6Controller.
     * @param {IPanelController} panel
     * @param {HTMLElement} dom
     * @param {X6Options} [defaultParams={}]
     */
    constructor(dom: HTMLElement, graphOptions?: IParams, defaultParams?: IParams);
    /**
     * 获取事件的基础参数
     * @author lxm
     * @date 2023-04-25 11:03:44
     * @return {*}  {Omit<EventBase, 'eventName'>}
     */
    getEventArgs(): Omit<EventBase, 'eventName'>;
    /**
     * 初始化
     */
    protected init(): void;
    /**
     * 初始化事件
     */
    protected initEvents(): void;
    /**
     * 清除选中
     */
    clearSelection(): void;
    /**
     * 新增子节点
     */
    addChildNode(id: string): MindMapData | void | null;
    /**
     * 更新节点
     */
    updateNode(id: string, newText: string): boolean;
    findItem(defaultData: IData[], id: string): {
        parent: MindMapData | null;
        node: MindMapData | null;
    } | null;
    /**
     * 删除节点
     */
    removeNode(id: string): boolean;
    /**
     * 改变是否可平移状态
     */
    togglePanning(): void;
    /**
     * 禁用平移
     */
    disablePanning(): void;
    /**
     * 初始化
     */
    getData(): IData;
    /**
     * 加载
     */
    load(): Promise<void>;
    /**
     * 刷新
     */
    refresh(): Promise<void>;
    /**
     * 销毁
     */
    destroy(): void;
}
export {};
