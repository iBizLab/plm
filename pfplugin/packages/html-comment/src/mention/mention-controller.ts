/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ControllerEvent,
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  ScriptFactory,
  convertNavData,
} from '@ibiz-template/runtime';
import { IEditor, INavigateParamContainer } from '@ibiz/model-core';
import { VNode, h } from 'vue';
import { Boot, DomEditor, IDomEditor } from '@wangeditor/editor';
import { NOOP, RuntimeError, listenJSEvent } from '@ibiz-template/core';
import mentionModule from './mention-node-module';
import { MenTion } from '../component';
import { commentEvent } from '../html-comment.event';

/**
 * 用户列表适配器
 *
 * @export
 * @class MenTionController
 * @extends {EditorController}
 */
export class MenTionController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof MenTionController
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
   * @memberof MenTionController
   */
  public data: IData = {};

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof MenTionController
   */
  public editor!: IDomEditor;

  /**
   * 用户请求url
   *
   * @type {string}
   * @memberof MenTionController
   */
  public userUrl: string = '';

  /**
   * 人员UI转化
   */
  public userFieldMap: IData = {
    id: 'id',
    name: 'name',
  };

  /**
   * 请求方法
   *
   * @type {('post' | 'get')}
   * @memberof MenTionController
   */
  public userMethod: 'post' | 'get' = 'post';

  /**
   * 转换脚本
   *
   * @type {string}
   * @memberof MenTionController
   */
  public userScript: string = '`@{userid=${data.id},name=${data.name}}`';

  /**
   * 逆转换脚本
   *
   * @type {string}
   * @memberof MenTionController
   */
  public userInScript: string = `value.replaceAll(/\@\{userid=(.+?),name=(.+?)\}/g,(x, id, name) => {return controller.getNodeInfo({ id, name })})`;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof MenTionController
   */
  public editorParams: IData | undefined;

  /**
   * 用户数据
   *
   * @type {IData[]}
   * @memberof MenTionController
   */
  public items: IData[] = [];

  /**
   * 气泡容器
   *
   * @type {IOverlayPopoverContainer}
   * @memberof MenTionController
   */
  public overlay: IOverlayPopoverContainer | null = null;

  /**
   * 编辑器事件
   *
   * @type {ControllerEvent<commentEvent>}
   * @memberof MenTionController
   */
  public evt!: ControllerEvent<commentEvent>;

  /**
   * 是否正在执行
   *
   * @private
   * @type {boolean}
   * @memberof MenTionController
   */
  public execting: boolean = false;

  /**
   * 搜索字段
   *
   * @type {string}
   * @memberof MenTionController
   */
  public query: string = '';

  /**
   * 当前页
   *
   * @type {number}
   * @memberof MenTionController
   */
  public curPage: number = 0;

  /**
   * 分页条数
   *
   * @type {number}
   * @memberof MenTionController
   */
  public size: number = 20;

  /**
   * 预定义阻止捕获事件code
   *
   * @type {number[]}
   * @memberof MenTionController
   */
  public presetPreventEvents: number[] = [13, 38, 40];

  /**
   * 预定义阻止冒泡事件code
   *
   * @type {number[]}
   * @memberof MenTionController
   */
  public presetPreventPropEvents: number[] = [27];

  /**
   * 删除回调
   *
   * @type {NOOP}
   * @memberof MenTionController
   */
  public cleanup = NOOP;

  /**
   * 声明'@'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof MenTionController
   */
  public mentionPlugin<T extends IDomEditor>(editor: T) {
    const { insertText, isInline, isVoid } = editor;

    // 重写 insertText
    editor.insertText = t => {
      // 默认富文本编辑器走默认逻辑
      if (!this.editor) {
        insertText(t);
        return;
      }
      if (!this.editor.isFocused()) {
        insertText(t);
        return;
      }
      // 选中了 void 元素
      const elems = DomEditor.getSelectedElems(editor);
      const isSelectedVoidElem = elems.some(elem => editor.isVoid(elem));
      if (isSelectedVoidElem) {
        insertText(t);
        return;
      }

      if (t === '@' && !this.execting) {
        this.query = '';
        this.showModal();
      }

      // 非 '@' 则执行默认行为
      insertText(t);
    };

    // 重写 isInline
    editor.isInline = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'mention') {
        return true;
      }

      return isInline(elem);
    };

    // 重写 isVoid
    editor.isVoid = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'mention') {
        return true;
      }

      return isVoid(elem);
    };

    return editor;
  }

  /**
   * Creates an instance of MenTionController.
   * @param {IData} option
   * @memberof MenTionController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode() {
    if (!(window as IData).mentionIsRegiter) {
      Boot.registerModule(mentionModule);
      (window as IData).mentionIsRegiter = true;
    }
    Boot.registerPlugin(this.mentionPlugin.bind(this));
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MenTionController
   */
  public async init(editor: IDomEditor, option: IData) {
    this.model = option.model;
    this.context = option.context;
    this.params = option.params;
    this.evt = option.evt;
    this.data = option.data;
    this.editor = editor;
    this.editorParams = this.model.editorParams;
    if (this.editorParams) {
      const { USERURL, USERFIELDMAP, USERMETHOD, USERSCRIPT, USERINSCRIPT } =
        this.editorParams;
      if (USERURL) {
        this.userUrl = USERURL;
      }
      if (USERFIELDMAP) {
        this.userFieldMap = JSON.parse(USERFIELDMAP);
      }
      if (USERMETHOD) {
        this.userMethod = USERMETHOD.toLowerCase();
      }
      if (USERSCRIPT) {
        this.userScript = USERSCRIPT;
      }
      if (USERINSCRIPT) {
        this.userInScript = USERINSCRIPT;
      }
    }
    const container = this.editor.getEditableContainer();
    if (container) {
      this.cleanup = listenJSEvent(container, 'keydown', event => {
        if (this.execting && this.presetPreventEvents.includes(event.keyCode)) {
          event.preventDefault();
        }
        // 监听esc按键，销毁弹框
        if (
          this.execting &&
          this.presetPreventPropEvents.includes(event.keyCode)
        ) {
          event.stopPropagation();
          this.overlay?.dismiss();
        }
      });
    }
  }

  public onDestroyed() {
    if (this.cleanup !== NOOP) {
      this.cleanup();
    }
    if (this.overlay) {
      this.overlay.dismiss();
    }
  }

  // 显示弹框
  public showModal() {
    if (!this.userUrl) {
      throw new RuntimeError('未配置提及用户USERURL编辑器参数！');
    }
    // 获取光标位置，定位 modal
    const domSelection = document.getSelection();
    if (!domSelection) {
      return;
    }
    const { focusNode } = domSelection;
    if (focusNode) {
      this.openUserPopover(focusNode.parentNode as HTMLElement).then(
        (user: IData[]) => {
          if (user.length > 0) {
            this.insertNode(user[0]);
          }
        },
      );
    }
  }

  /**
   * 插入@
   *
   * @param {IDomEditor} editor
   * @memberof MenTionController
   */
  public insertNode(data: IData) {
    const mentionNode: any = {
      type: 'mention',
      script: this.userScript,
      data,
      children: [{ text: '' }],
    };

    this.editor.restoreSelection(); // 恢复选区
    this.editor.deleteBackward('character'); // 删除 '@'
    // 删除查询字段
    for (let index = 0; index < this.query.length; index++) {
      this.editor.deleteBackward('character');
    }
    this.editor.insertNode(mentionNode); // 插入 mention
    this.editor.move(1); // 移动光标
  }

  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  public getNodeInfo(data: IData) {
    Object.assign(data, { script: this.userScript });
    return `<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="${encodeURIComponent(
      JSON.stringify(data),
    )}"></span>`;
  }

  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MenTionController
   */
  public parseNode(value: string) {
    return ScriptFactory.execScriptFn(
      { value, controller: this },
      this.userInScript,
      {
        singleRowReturn: true,
        isAsync: false,
      },
    ) as string;
  }

  /**
   * 处理公共参数
   *
   * @param {IData} data
   * @param {IContext} context
   * @param {IParams} params
   * @return {*}  {{ context: IContext; params: IParams }}
   * @memberof MenTionController
   */
  public handlePublicParams(
    data: IData,
    context: IContext,
    params: IParams,
  ): { context: IContext; params: IParams } {
    const { navigateContexts, navigateParams } = this
      .model as INavigateParamContainer;
    let selfContext = {};
    if (navigateContexts && data) {
      selfContext = convertNavData(navigateContexts!, data, params, context);
    }
    const _context = Object.assign(context.clone(), selfContext);

    let selfParams = {};
    if (navigateParams && data) {
      selfParams = convertNavData(navigateParams!, data, params, context);
    }
    return { context: _context, params: selfParams };
  }

  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MenTionController
   */
  public getUsers(args: IData = {}): Promise<IData> {
    const { context, params } = this.handlePublicParams(
      this.data,
      this.context,
      this.params,
    );
    const isInitialLoad = args.isInitialLoad === true;
    const isLoadMore = args.isLoadMore === true;
    if (isInitialLoad) {
      this.curPage = 0;
    } else if (isLoadMore) {
      this.curPage += 1;
    }
    const url = ScriptFactory.execScriptFn(
      { data: this.data, context, params },
      this.userUrl,
      {
        singleRowReturn: true,
        isAsync: false,
      },
    ) as string;
    const tempParams: IData = {
      ...params,
      query: this.query,
      size: this.size,
      page: this.curPage,
    };
    return ibiz.net[this.userMethod](url, tempParams);
  }

  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MenTionController
   */
  public toUIData(data: IData[]): IData[] {
    return data.map((item: IData) => {
      const result: IData = {};
      Object.keys(this.userFieldMap).forEach((key: string) => {
        result[key] = item[this.userFieldMap[key]];
      });
      return result;
    });
  }

  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MenTionController
   */
  public async openUserPopover(event: HTMLElement) {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      undefined,
      {
        placement: 'bottom-start',
        autoClose: true,
        width: '300px',
        noArrow: true,
      },
    );
    await this.overlay.present(event);
    this.execting = true;
    const result: IModalData = await this.overlay.onWillDismiss();
    this.execting = false;
    return result.data || [];
  }

  public createOverlayView(): (modal: IModal) => VNode {
    return (modal: IModal) => {
      return h(MenTion, {
        controller: this,
        modal,
      });
    };
  }
}
