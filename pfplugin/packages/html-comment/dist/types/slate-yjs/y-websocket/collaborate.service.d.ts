import { IClientOptions, MqttClient } from 'mqtt';
import { QXEvent } from 'qx-util';
export declare class CollaborateService {
    protected id: string;
    protected mqttTopic: string;
    protected token: string;
    protected appId: string;
    /**
     * 发送消息
     *
     * @author tony001
     * @date 2024-08-06 11:08:00
     * @protected
     */
    protected collaborateUrl: string;
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
    }>;
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
    protected options: IClientOptions;
    /**
     * Creates an instance of CollaborateService.
     * @author tony001
     * @date 2024-08-06 11:08:59
     * @param {string} id
     * @param {string} mqttTopic
     * @param {string} token
     * @param {string} appId
     */
    constructor(id: string, mqttTopic: string, token: string, appId: string);
    /**
     * 发送消息
     *
     * @author tony001
     * @date 2024-08-06 11:08:40
     * @param {(string | ArrayBufferLike | Blob | ArrayBufferView)} data
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    /**
     * mqtt 连接
     *
     * @author tony001
     * @date 2024-08-05 19:08:17
     * @return {*}  {Promise<void>}
     */
    connect(): Promise<void>;
    /**
     * 结束 mqtt 连接
     *
     * @author tony001
     * @date 2024-08-05 19:08:02
     */
    close(): void;
}
