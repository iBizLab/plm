import * as Y from 'yjs';
import { CollaborateRoom } from './collaborate-room';
/**
 * 协同管理器
 *
 * @author tony001
 * @date 2024-08-05 18:08:26
 * @export
 * @class CollaborateManager
 */
export declare class CollaborateManager {
    /**
     * 协同房间缓存实例
     *
     * @author tony001
     * @date 2024-08-06 14:08:38
     * @protected
     * @type {Map<string, Map<string, CollaborateRoom>>}
     */
    protected collaborateMap: Map<string, Map<string, CollaborateRoom>>;
    /**
     * 获取应用标识
     *
     * @author tony001
     * @date 2024-08-06 14:08:27
     * @protected
     * @param {IContext} context
     * @return {*}  {string}
     */
    protected getAppId(context: IContext): string;
    /**
     * 创建协同房间
     *
     * @author tony001
     * @date 2024-08-06 14:08:37
     * @param {IContext} context 上下文
     * @param {IParams} params 视图参数
     * @param {string} id 业务数据主键
     * @param {IData} doc 文档实例对象
     * @return {*}  {Promise<CollaborateRoom>}
     */
    create(context: IContext, params: IParams, id: string, doc: Y.Doc): Promise<CollaborateRoom>;
    /**
     * 获取协同房间
     *
     * @author tony001
     * @date 2024-08-06 10:08:17
     * @param {IContext} context 上下文
     * @param {IParams} params 视图参数
     * @param {string} id 业务数据主键
     * @return {*}  {Promise<CollaborateRoom>}
     */
    get(context: IContext, params: IParams, id: string): Promise<CollaborateRoom>;
    /**
     * 销毁协同房间
     *
     * @author tony001
     * @date 2024-08-06 10:08:08
     * @param {IContext} context 上下文
     * @param {IParams} params 视图参数
     * @param {string} id 业务数据主键
     * @return {*}  {Promise<void>}
     */
    destroy(context: IContext, params: IParams, id: string): Promise<void>;
}
