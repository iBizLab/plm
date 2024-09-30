/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IClientOptions, MqttClient } from 'mqtt';
import { createUUID, QXEvent } from 'qx-util';

export class CollaborateService {
  /**
   * 发送消息
   *
   * @author tony001
   * @date 2024-08-06 11:08:00
   * @protected
   */
  protected collaborateUrl = '/portal/collaborate';

  /**
   * 连接状态
   *
   * @author tony001
   * @date 2024-08-06 11:08:20
   * @protected
   * @type {number}
   */
  protected readyState: number;

  /**
   * 事件对象
   *
   * @author tony001
   * @date 2024-08-05 19:08:09
   */
  readonly evt: QXEvent<{
    message: (msg: Uint8Array) => void;
    connect: () => void;
    error: (error: Error) => void;
    reconnect: () => void;
    close: () => void;
  }> = new QXEvent();

  /**
   * mqtt 连接实例
   *
   * @author tony001
   * @date 2024-08-05 19:08:52
   * @type {MqttClient}
   */
  client?: MqttClient;

  /**
   * 连接选项
   *
   * @author tony001
   * @date 2024-08-05 19:08:06
   * @protected
   * @type {IClientOptions}
   */
  protected options: IClientOptions = {
    // 超时时间
    connectTimeout: 6000,
    // 认证信息
    clientId: createUUID(),
    username: '',
    password: '',
    // 心跳时间
    keepalive: 60,
    clean: true,
  };

  /**
   * Creates an instance of CollaborateService.
   * @author tony001
   * @date 2024-08-06 11:08:59
   * @param {string} id
   * @param {string} mqttTopic
   * @param {string} token
   * @param {string} appId
   */
  constructor(
    protected id: string,
    protected mqttTopic: string,
    protected token: string,
    protected appId: string,
  ) {
    this.options.username = mqttTopic;
    this.options.password = token;
    this.readyState = 0;
  }

  /**
   * 发送消息
   *
   * @author tony001
   * @date 2024-08-06 11:08:40
   * @param {(string | ArrayBufferLike | Blob | ArrayBufferView)} data
   */
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    ibiz.net.post(`${this.collaborateUrl}/ROOM/${this.id}`, { data });
  }

  /**
   * mqtt 连接
   *
   * @author tony001
   * @date 2024-08-05 19:08:17
   * @return {*}  {Promise<void>}
   */
  async connect(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const module = await import('mqtt/dist/mqtt.min');
    const mqtt = module.default ? module.default : module;
    const { location } = window;
    this.client = mqtt.connect(
      `ws://${location.host}${ibiz.env.baseUrl}/${this.appId}${ibiz.env.mqttUrl}`,
      this.options,
    ) as MqttClient;
    this.client.on('connect', () => {
      this.client!.subscribe(this.mqttTopic);
      this.readyState = 1;
      this.evt.emit('connect');
      ibiz.log.debug('collaborate connect');
    });
    this.client.on('error', error => {
      this.readyState = 3;
      this.evt.emit('error', error);
      ibiz.log.debug('collaborate error');
    });
    this.client.on('message', (topic, payload) => {
      const message = JSON.parse(payload.toString());
      if (
        message &&
        message.data &&
        message.data.data &&
        message.data.data.data
      ) {
        this.evt.emit(
          'message',
          new Uint8Array(Object.values(message.data.data.data)),
        );
      }
      ibiz.log.debug('collaborate message');
    });
    this.client.on('reconnect', () => {
      this.readyState = 0;
      this.evt.emit('reconnect');
    });
    this.client.on('close', () => {
      this.readyState = 3;
      this.evt.emit('close');
      ibiz.log.debug('collaborate close');
    });
  }

  /**
   * 结束 mqtt 连接
   *
   * @author tony001
   * @date 2024-08-05 19:08:02
   */
  close(): void {
    this.client?.end();
    this.evt.reset();
  }
}
