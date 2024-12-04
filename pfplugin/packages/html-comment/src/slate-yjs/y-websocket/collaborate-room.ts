/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Y from 'yjs';
import { getToken } from '@ibiz-template/core';
import { CollaborateService } from './collaborate.service';
import { WebsocketProvider } from './y-websocket';

/**
 * 协同房间
 *
 * @author tony001
 * @date 2024-08-05 18:08:56
 * @export
 * @class CollaborateRoom
 */
export class CollaborateRoom {
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
  connectionProvider!: WebsocketProvider;

  /**
   * Creates an instance of CollaborateRoom.
   * @author tony001
   * @date 2024-08-05 18:08:36
   * @param {string} id
   * @param {IData} doc
   */
  constructor(context: IContext, params: IParams, id: string, doc: Y.Doc) {
    this.context = context;
    this.params = params;
    this.id = id;
    this.doc = doc;
    const mqttTopicids = ibiz.appData!.mqtttopic.split('/');
    this.name = `/${mqttTopicids[1]}/collaborate/ROOM/${this.id}`;
  }

  /**
   * 创建当前实例
   *
   * @author tony001
   * @date 2024-08-06 10:08:20
   * @return {*}  {Promise<void>}
   */
  async created(): Promise<void> {
    const app = ibiz.hub.getApp(this.context.srfappid);
    const appId = app.model.appId || ibiz.env.appId;
    const serviceUrl = `ws://${window.location.host}${ibiz.env.baseUrl}/${appId}${ibiz.env.mqttUrl}`;
    const collaborate = new CollaborateService(
      this.id,
      this.name,
      getToken()!,
      appId,
    );
    await collaborate.connect();
    this.connectionProvider = new WebsocketProvider(
      serviceUrl,
      this.name,
      this.doc as any,
      { WebSocketPolyfill: collaborate as any, resyncInterval: 5000 },
    );
  }

  /**
   * 销毁当前实例
   *
   * @author tony001
   * @date 2024-08-06 10:08:08
   * @return {*}  {Promise<void>}
   */
  async destroy(): Promise<void> {
    this.connectionProvider?.destroy();
  }
}
