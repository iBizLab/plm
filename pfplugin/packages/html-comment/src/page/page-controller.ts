/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ControllerEvent } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { Boot, IDomEditor } from '@wangeditor/editor';
import PageModule from './page-node-module';
import { commentEvent } from '../html-comment.event';

/**
 * 代码段控制器
 *
 * @export
 * @class PageController
 * @extends {EditorController}
 */
export class PageController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof PageController
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
   * @memberof PageController
   */
  public data: IData = {};

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof PageController
   */
  public editor!: IDomEditor;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof PageController
   */
  public editorParams: IData | undefined;

  /**
   * 用户数据
   *
   * @type {IData[]}
   * @memberof PageController
   */
  public items: IData[] = [];

  /**
   * 编辑器事件
   *
   * @type {ControllerEvent<commentEvent>}
   * @memberof PageController
   */
  public evt!: ControllerEvent<commentEvent>;

  /**
   * 是否正在执行
   *
   * @private
   * @type {boolean}
   * @memberof PageController
   */
  public execting: boolean = false;

  /**
   * Creates an instance of PageController.
   * @param {IData} option
   * @memberof PageController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode() {
    if (!(window as IData).pageIsRegiter) {
      Boot.registerModule(PageModule);
      (window as IData).pageIsRegiter = true;
    }
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof PageController
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
   * @memberof PageController
   */
  public onDestroyed() {
    // todo
  }

  /**
   * 插入节点
   *
   * @param {IDomEditor} editor
   * @memberof PageController
   */
  public insertNode(data: IData) {
    // todo
  }

  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof PageController
   */
  public parseNode(value: string) {
    return value;
  }
}
