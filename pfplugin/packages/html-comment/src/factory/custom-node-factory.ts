/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AttachmentsController } from '../attachments';
import { CodeSnippetController } from '../code-snippet';
import { INodeController } from '../interface/node-interface';
import { MarkerController } from '../marker';
import { MenTionController } from '../mention';
import { PageController } from '../page';
import { EmojiController } from '../emoji';
import { InsertController } from '../insert';

export class CustomNodeFactory {
  /**
   * 自定义节点
   *
   * @static
   * @type {IData}
   * @memberof CustomNodeFactory
   */
  public static customNodeMap: Map<string, INodeController> = new Map();

  /**
   * 预置注册表
   *
   * @type {Map<string, any>}
   * @memberof CustomNodeFactory
   */
  public static registerMap: Map<string, any> = new Map();

  /**
   * 预置注册节点
   *
   * @static
   * @memberof CustomNodeFactory
   */
  public static presetNodes = [
    'mention',
    'marker',
    'attachments',
    'codesnippet',
    'page',
    'emoji',
    'insert',
  ];

  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  public static init(uuid: string) {
    this.registerMap.set('mention', MenTionController);
    this.registerMap.set('marker', MarkerController);
    this.registerMap.set('attachments', AttachmentsController);
    this.registerMap.set('codesnippet', CodeSnippetController);
    this.registerMap.set('page', PageController);
    this.registerMap.set('emoji', EmojiController);
    this.registerMap.set('insert', InsertController);
    this.presetNodes.forEach(type => {
      this.registerPlugin({
        type,
        id: `${type}${uuid}`,
      });
    });
  }

  /**
   * 注册节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  public static registerPlugin(data: IData) {
    const { type, id } = data;
    if (this.customNodeMap.has(id)) {
      return this.customNodeMap.get(id)!;
    }
    const NewController = this.registerMap.get(type);
    if (NewController) {
      const controller = new NewController();
      this.customNodeMap.set(id, controller);
      return controller;
    }
  }

  /**
   * 根据uuid获取注册插件
   *
   * @static
   * @param {string} id
   * @return {*}
   * @memberof CustomNodeFactory
   */
  public static getPluginsById(id: string) {
    const controllers: INodeController[] = [];
    this.presetNodes.forEach(type => {
      if (this.customNodeMap.has(`${type}${id}`)) {
        controllers.push(this.customNodeMap.get(`${type}${id}`)!);
      }
    });
    return controllers;
  }

  /**
   * @description 获取控制器
   * @static
   * @param {string} id
   * @param {string} type
   * @return {*}
   * @memberof CustomNodeFactory
   */
  public static getControllerById(id: string, type: string) {
    return this.customNodeMap.get(`${type}${id}`);
  }

  /**
   * 卸载节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  public static unregisterPlugin(data: IData) {
    const { id } = data;
    if (this.customNodeMap.has(id)) {
      this.customNodeMap.delete(id)!;
    }
  }

  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  public static destroy(uuid: string) {
    this.presetNodes.forEach(type => {
      this.unregisterPlugin({
        id: `${type}${uuid}`,
      });
    });
    this.registerMap.delete('mention');
    this.registerMap.delete('marker');
    this.registerMap.delete('attachments');
    this.registerMap.delete('codesnippet');
    this.registerMap.delete('page');
    this.registerMap.delete('emoji');
    this.registerMap.delete('insert');
  }
}
