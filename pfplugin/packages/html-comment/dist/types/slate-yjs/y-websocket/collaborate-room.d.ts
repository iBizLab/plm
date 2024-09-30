import * as Y from 'yjs';
import { WebsocketProvider } from './y-websocket';
/**
 * 协同房间
 *
 * @author tony001
 * @date 2024-08-05 18:08:56
 * @export
 * @class CollaborateRoom
 */
export declare class CollaborateRoom {
    /**
     * 唯一标识
     *
     * @author tony001
     * @date 2024-08-05 18:08:19
     * @type {string}
     */
    readonly id: string;
    /**
     * 房间名称
     *
     * @author tony001
     * @date 2024-08-06 10:08:25
     * @type {string}
     */
    readonly name: string;
    /**
     * 文档实例
     *
     * @author tony001
     * @date 2024-08-05 18:08:59
     * @type {Y.Doc}
     */
    readonly doc: Y.Doc;
    /**
     * 上下文
     *
     * @author tony001
     * @date 2024-08-06 10:08:29
     * @type {IContext}
     */
    readonly context: IContext;
    /**
     * 视图参数
     *
     * @author tony001
     * @date 2024-08-06 10:08:34
     * @type {IParams}
     */
    readonly params: IParams;
    /**
     * 连接提供者
     *
     * @author tony001
     * @date 2024-08-05 18:08:04
     * @type {*}
     */
    connectionProvider: WebsocketProvider;
    /**
     * Creates an instance of CollaborateRoom.
     * @author tony001
     * @date 2024-08-05 18:08:36
     * @param {string} id
     * @param {IData} doc
     */
    constructor(context: IContext, params: IParams, id: string, doc: Y.Doc);
    /**
     * 创建当前实例
     *
     * @author tony001
     * @date 2024-08-06 10:08:20
     * @return {*}  {Promise<void>}
     */
    created(): Promise<void>;
    /**
     * 销毁当前实例
     *
     * @author tony001
     * @date 2024-08-06 10:08:08
     * @return {*}  {Promise<void>}
     */
    destroy(): Promise<void>;
}
