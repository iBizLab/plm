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
export class CollaborateManager {
  /**
   * 协同房间缓存实例
   *
   * @author tony001
   * @date 2024-08-06 14:08:38
   * @protected
   * @type {Map<string, Map<string, CollaborateRoom>>}
   */
  protected collaborateMap: Map<string, Map<string, CollaborateRoom>> =
    new Map();

  /**
   * 获取应用标识
   *
   * @author tony001
   * @date 2024-08-06 14:08:27
   * @protected
   * @param {IContext} context
   * @return {*}  {string}
   */
  protected getAppId(context: IContext): string {
    const app = ibiz.hub.getApp(context.srfappid);
    return app.model.appId || ibiz.env.appId;
  }

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
  async create(
    context: IContext,
    params: IParams,
    id: string,
    doc: Y.Doc,
  ): Promise<CollaborateRoom> {
    const room = new CollaborateRoom(context, params, id, doc);
    await room.created();
    const appId = this.getAppId(context);
    if (!this.collaborateMap.has(appId)) {
      this.collaborateMap.set(appId, new Map());
    }
    const currentAppCollaborateMap = this.collaborateMap.get(appId);
    currentAppCollaborateMap!.set(room.id, room);
    return room;
  }

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
  async get(
    context: IContext,
    params: IParams,
    id: string,
  ): Promise<CollaborateRoom> {
    const appId = this.getAppId(context);
    if (!this.collaborateMap.has(appId)) {
      throw new Error(
        ibiz.i18n.t('runtime.utils.collaborateManager.invalidCollaborateRoom', {
          id,
        }),
      );
    }
    const currentAppCollaborateMap = this.collaborateMap.get(appId);
    if (currentAppCollaborateMap && currentAppCollaborateMap.has(id)) {
      return currentAppCollaborateMap.get(id)!;
    }
    throw new Error(
      ibiz.i18n.t('runtime.utils.collaborateManager.invalidCollaborateRoom', {
        id,
      }),
    );
  }

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
  async destroy(context: IContext, params: IParams, id: string): Promise<void> {
    const appId = this.getAppId(context);
    if (this.collaborateMap.has(appId)) {
      const currentAppCollaborateMap = this.collaborateMap.get(appId);
      if (currentAppCollaborateMap && currentAppCollaborateMap.has(id)) {
        currentAppCollaborateMap.get(id)!.destroy();
        currentAppCollaborateMap.delete(id);
      }
    }
  }
}
