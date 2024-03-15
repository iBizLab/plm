/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ControllerEvent } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { Boot, IDomEditor } from '@wangeditor/editor';
import AttachmentsModule from './attachments-node-module';
import { commentEvent } from '../html-comment.event';

/**
 * 附件控制器
 *
 * @export
 * @class AttachmentsController
 * @extends {EditorController}
 */
export class AttachmentsController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof AttachmentsController
   */
  public model!: IEditor;

  /**
   * 上下文
   *
   * @type {IContext}
   */
  public context!: IContext;

  /**
   * 视图参数
   *
   * @type {IParams}
   */
  public params!: IParams;

  /**
   * 表单数据
   *
   * @type {IData}
   * @memberof AttachmentsController
   */
  public data: IData = {};

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof AttachmentsController
   */
  public editor!: IDomEditor;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof AttachmentsController
   */
  public editorParams: IData | undefined;

  /**
   * 用户数据
   *
   * @type {IData[]}
   * @memberof AttachmentsController
   */
  public items: IData[] = [];

  /**
   * 编辑器事件
   *
   * @type {ControllerEvent<commentEvent>}
   * @memberof AttachmentsController
   */
  public evt!: ControllerEvent<commentEvent>;

  /**
   * 是否正在执行
   *
   * @private
   * @type {boolean}
   * @memberof AttachmentsController
   */
  public execting: boolean = false;

  /**
   * Creates an instance of AttachmentsController.
   * @param {IData} option
   * @memberof AttachmentsController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode() {
    if (!(window as IData).attachmentsIsRegiter) {
      Boot.registerModule(AttachmentsModule);
      (window as IData).attachmentsIsRegiter = true;
    }
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof AttachmentsController
   */
  public async init(editor: IDomEditor, option: IData) {
    this.model = option.model;
    this.context = option.context;
    this.params = option.params;
    this.evt = option.evt;
    this.data = option.data;
    this.editor = editor;
    this.editorParams = this.model.editorParams;
  }

  /**
   * 控制器销毁
   *
   * @memberof AttachmentsController
   */
  public onDestroyed() {
    // todo
  }

  /**
   * 插入节点
   *
   * @param {IDomEditor} editor
   * @memberof AttachmentsController
   */
  public insertNode(data: IData) {
    // todo
  }

  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof AttachmentsController
   */
  public parseNode(value: string) {
    return value;
  }
}
