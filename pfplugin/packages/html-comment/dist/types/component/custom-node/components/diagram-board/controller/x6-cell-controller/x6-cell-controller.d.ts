import { IPortalMessage } from '@ibiz-template/core';
import { HierarchyResult } from '../../interface';
/**
 * X6图形控制器
 *
 * @author chitanda
 * @date 2023-11-16 18:11:12
 * @export
 * @class X6CellController
 */
export declare abstract class X6CellController {
    /**
     * 当前x6图形实例
     *
     * @author chitanda
     * @date 2023-11-09 18:11:46
     * @type {Graph}
     */
    protected readonly g: IParams;
    constructor(g: IParams);
    /**
     * 由外部调用进行初始化(不可以重写)
     *
     * @return {*}  {Promise<void>}
     */
    init(): void;
    /**
     * 初始化(子类重写)
     *
     * @protected
     * @return {*}  {void}
     */
    protected onInit(): void;
    /**
     * 监听消息变更
     *
     * @protected
     * @param {IPortalMessage} msg
     * @return {*}  {void}
     */
    protected onMessageChange(msg: IPortalMessage): void;
    /**
     * 销毁
     *
     * @return {*}  {void}
     */
    destroy(): void;
    /**
     * 加载图形数据
     *
     * @return {*}  {Promise<void>}
     */
    protected load(): void;
    /**
     * 初始化数据
     */
    initData(items: IData[]): IData[];
    /**
     * 获取思维导图
     */
    getMindMap(item: IData): HierarchyResult;
}
