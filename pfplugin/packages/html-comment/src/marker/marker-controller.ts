/* eslint-disable no-template-curly-in-string */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CodeListItem,
  ControllerEvent,
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  OpenAppViewCommand,
  ScriptFactory,
  convertNavData,
} from '@ibiz-template/runtime';
import { IEditor, INavigateParamContainer } from '@ibiz/model-core';
import { VNode, h } from 'vue';
import { Boot, DomEditor, IDomEditor } from '@wangeditor/editor';
import { NOOP, RuntimeError, listenJSEvent } from '@ibiz-template/core';
import { clone } from 'ramda';
import markerModule from './marker-node-module';
import { Marker } from '../component';
import { commentEvent } from '../html-comment.event';

/**
 * 用户列表适配器
 *
 * @export
 * @class MarkerController
 * @extends {EditorController}
 */
export class MarkerController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof MarkerController
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
   * @memberof MarkerController
   */
  public data: IData = {};

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof MarkerController
   */
  public editor!: IDomEditor;

  /**
   * 引用请求url
   *
   * @type {string}
   * @memberof MarkerController
   */
  public quoteUrl: string = '';

  /**
   * 人员UI转化
   */
  public quoteFieldMap: IData = {
    id: 'id',
    name: 'name',
  };

  /**
   * 代码表map
   *
   * @type {IData}
   * @memberof MarkerController
   */
  public quoteCodelistMap: Map<string, IData> = new Map();

  /**
   * 请求方法
   *
   * @type {('post' | 'get')}
   * @memberof MarkerController
   */
  public quoteMethod: 'post' | 'get' = 'post';

  /**
   * 请求参数
   *
   * @type {IData}
   * @memberof MarkerController
   */
  public quoteParams: IData = {};

  /**
   * 转换脚本
   *
   * @type {string}
   * @memberof MenTionController
   */
  public quoteScript: string =
    '`#{id=${data.id},name=${data.name},identifier=${data.identifier},icon=${data.icon}}`';

  /**
   * 逆转换脚本
   *
   * @type {string}
   * @memberof MenTionController
   */
  public quoteInScript: string = `value.replaceAll(/\#\{id=(.+?),name=(.+?),identifier=(.+?),icon=((.|[\\t\\r\\f\\n\\s])+?)\}/g,(x, id, name, identifier, icon) => {return controller.getNodeInfo({ id, name, identifier, icon })})`;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof MarkerController
   */
  public editorParams: IData | undefined;

  /**
   * 用户数据
   *
   * @type {IData[]}
   * @memberof MarkerController
   */
  public items: IData[] = [];

  /**
   * 气泡容器
   *
   * @type {IOverlayPopoverContainer}
   * @memberof MarkerController
   */
  public overlay: IOverlayPopoverContainer | null = null;

  /**
   * 编辑器事件
   *
   * @type {ControllerEvent<commentEvent>}
   * @memberof MarkerController
   */
  public evt!: ControllerEvent<commentEvent>;

  /**
   * 是否正在执行
   *
   * @private
   * @type {boolean}
   * @memberof MarkerController
   */
  public execting: boolean = false;

  /**
   * 搜索字段
   *
   * @type {string}
   * @memberof MarkerController
   */
  public query: string = '';

  /**
   * 当前页
   *
   * @type {number}
   * @memberof MarkerController
   */
  public curPage: number = 0;

  /**
   * 分页条数
   *
   * @type {number}
   * @memberof MarkerController
   */
  public size: number = 20;

  /**
   * 预定义阻止捕获事件code
   *
   * @type {number[]}
   * @memberof MarkerController
   */
  public presetPreventEvents: number[] = [13, 38, 40];

  /**
   * 预定义阻止冒泡事件code
   *
   * @type {number[]}
   * @memberof MarkerController
   */
  public presetPreventPropEvents: number[] = [27];

  /**
   * @description 工作项链接视图id
   * @type {string}
   * @memberof HtmlCommentController
   */
  public linkViewId: string = 'plmweb.recent_redirect_view';

  /**
   * @description 代码表对象
   * @type {IData}
   * @memberof MarkerController
   */
  public codeListMap: IData = {};

  /**
   * 删除回调
   *
   * @type {NOOP}
   * @memberof MarkerController
   */
  public cleanup = NOOP;

  /**
   * 声明'@'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof MarkerController
   */
  public markerPlugin<T extends IDomEditor>(editor: T) {
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

      insertText(t);

      if (t === '#' && !this.execting) {
        setTimeout(() => {
          this.query = '';
          this.showModal();
        }, 0);
      }
    };

    // 重写 isInline
    editor.isInline = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'marker') {
        return true;
      }

      return isInline(elem);
    };

    // 重写 isVoid
    editor.isVoid = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'marker') {
        return true;
      }

      return isVoid(elem);
    };

    return editor;
  }

  /**
   * Creates an instance of MarkerController.
   * @param {IData} option
   * @memberof MarkerController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode() {
    if (!(window as IData).markerIsRegiter) {
      Boot.registerModule(markerModule);
      (window as IData).markerIsRegiter = true;
    }
    Boot.registerPlugin(this.markerPlugin.bind(this));
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
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
      const {
        QUOTEURL,
        QUOTEFIELDMAP,
        QUOTEMETHOD,
        QUOTESCRIPT,
        QUOTEINSCRIPT,
        QUOTEPARAMS,
        QUOTECODELISTMAP,
        LINKVIEWID,
      } = this.editorParams;
      if (QUOTEURL) {
        this.quoteUrl = QUOTEURL;
      }
      if (QUOTEFIELDMAP) {
        this.quoteFieldMap = JSON.parse(QUOTEFIELDMAP);
      }
      if (QUOTEMETHOD) {
        this.quoteMethod = QUOTEMETHOD.toLowerCase();
      }
      if (QUOTEPARAMS) {
        this.quoteParams = JSON.parse(QUOTEPARAMS);
      }
      if (QUOTESCRIPT) {
        this.quoteScript = QUOTESCRIPT;
      }
      if (QUOTEINSCRIPT) {
        this.quoteInScript = QUOTEINSCRIPT;
      }
      if (QUOTECODELISTMAP) {
        const codelist = JSON.parse(QUOTECODELISTMAP);
        await this.setCodeListMap(codelist);
      }
      if (LINKVIEWID) {
        this.linkViewId = LINKVIEWID;
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
    this.evt.on('openPopper', () => {
      this.execting = true;
    });
    this.evt.on('closePopper', () => {
      this.execting = false;
    });
  }

  public onDestroyed() {
    if (this.cleanup !== NOOP) {
      this.cleanup();
    }
    if (this.overlay) {
      this.overlay.dismiss();
    }
  }

  // 设置代码表map
  public async setCodeListMap(items: IData) {
    for (const key in items) {
      const item = await this.loadCodeList(items[key]);
      if (item) {
        this.quoteCodelistMap.set(key, item);
      }
    }
  }

  // 显示弹框
  public showModal() {
    if (!this.quoteUrl) {
      throw new RuntimeError('未配置提及工作项QUOTEURL编辑器参数！');
    }
    // 获取光标位置，定位 modal
    const domSelection = document.getSelection();
    if (!domSelection) {
      return;
    }
    const { focusNode } = domSelection;
    if (focusNode) {
      this.openPopover(focusNode.parentNode as HTMLElement).then(
        (user: IData[]) => {
          if (user.length > 0) {
            this.insertNode(user[0]);
          }
        },
      );
    }
  }

  public findCodeListItem(
    codelist: CodeListItem[] | undefined,
    value: string | number,
  ) {
    if (codelist) {
      // eslint-disable-next-line eqeqeq
      const findItem = codelist.find(item => item.value == value);
      if (findItem) {
        return findItem;
      }
      for (let i = 0; i < codelist.length; i++) {
        const childrenItem = this.findCodeListItem(
          codelist[i].children,
          value,
        ) as CodeListItem;
        if (childrenItem) {
          return childrenItem;
        }
      }
    }
  }

  /**
   * 插入#
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
   */
  public insertNode(data: IData) {
    if (this.quoteCodelistMap.has('type') && data.owner_subtype) {
      const item = this.quoteCodelistMap.get('type')!;
      const findItem = this.findCodeListItem(
        item.codeListItems,
        data.owner_subtype,
      );
      if (findItem && findItem.sysImage) {
        Object.assign(data, {
          icon: findItem.sysImage.rawContent,
        });
      }
    }
    const markerNode: any = {
      type: 'marker',
      script: this.quoteScript,
      data,
      children: [{ text: '' }],
    };

    this.editor.restoreSelection(); // 恢复选区
    this.editor.deleteBackward('character'); // 删除 '#'
    // 删除查询字段
    for (let index = 0; index < this.query.length; index++) {
      this.editor.deleteBackward('character');
    }
    this.editor.insertNode(markerNode); // 插入 marker
    this.editor.move(1); // 移动光标
  }

  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  public getNodeInfo(data: IData) {
    if (!data.icon && this.quoteCodelistMap.has('type') && data.owner_subtype) {
      const item = this.quoteCodelistMap.get('type')!;
      const findItem = this.findCodeListItem(
        item.codeListItems,
        data.owner_subtype,
      );
      if (findItem && findItem.sysImage) {
        Object.assign(data, {
          icon: findItem.sysImage.rawContent,
        });
      }
    }
    Object.assign(data, { script: this.quoteScript });
    return `<span data-w-e-type="marker" data-w-e-is-void data-w-e-is-inline data-value="${encodeURIComponent(
      JSON.stringify(data),
    )}"></span>`;
  }

  /**
   * 解析marker节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MarkerController
   */
  public parseNode(value: string) {
    return ScriptFactory.execScriptFn(
      { value, controller: this },
      this.quoteInScript,
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
   * @memberof MarkerController
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
   * 获取工作项信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MarkerController
   */
  public load(args: IData = {}): Promise<IData> {
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
      this.quoteUrl,
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
      ...this.quoteParams,
    };
    return ibiz.net[this.quoteMethod](url, tempParams);
  }

  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MarkerController
   */
  public toUIData(data: IData[]): IData[] {
    return data.map((item: IData) => {
      const result: IData = {};
      Object.keys(this.quoteFieldMap).forEach((key: string) => {
        result[key] = item[this.quoteFieldMap[key]];
      });
      return result;
    });
  }

  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MarkerController
   */
  public async openPopover(event: HTMLElement) {
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
    this.evt.emit('openPopper', undefined);
    this.execting = true;
    const result: IModalData = await this.overlay.onWillDismiss();
    this.execting = false;
    this.evt.emit('closePopper', undefined);
    return result.data || [];
  }

  public createOverlayView(): (modal: IModal) => VNode {
    return (modal: IModal) => {
      return h(Marker, {
        controller: this,
        modal,
      });
    };
  }

  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof MarkerController
   */
  async loadCodeList(appCodeListId: string): Promise<IData | undefined> {
    const app = ibiz.hub.getApp(this.context.srfappid);
    const codeList = app.codeList.getCodeList(appCodeListId);
    const codeListItems = await app.codeList.get(
      appCodeListId,
      this.context,
      this.params,
    );
    return { codeList, codeListItems };
  }

  /**
   * @description 处理点击事件
   * @param {MouseEvent} event
   * @memberof MarkerController
   */
  handleClick(event: MouseEvent) {
    const { nodeName, dataset } = event.target as HTMLElement;
    // 点击提及工作项
    if (nodeName && nodeName === 'MENTION-ELEM') {
      const value = dataset.value || '';
      const tempContext = this.context.clone();
      const tempParams = clone(this.params);
      const item = JSON.parse(value);
      if (!item.owner_type) {
        return;
      }
      tempContext.srfkey = item.id;
      const ownerSubtype = item.owner_subtype || item.type;
      tempParams.owner_subtype = ownerSubtype;
      if (ownerSubtype === 'page') {
        tempParams.article_page = item.owner_id;
      } else {
        tempParams[ownerSubtype] = item.owner_id;
      }
      tempParams[item.owner_type] = item.recent_parent;
      delete item.script;
      delete item.icon;
      delete item.id;
      Object.assign(tempParams, item);
      if (item && this.linkViewId) {
        ibiz.commands.execute(
          OpenAppViewCommand.TAG,
          this.linkViewId,
          tempContext,
          tempParams,
        );
      }
    }
  }

  /**
   * @description 解析评论节点
   * @param {IData} data
   * @return {*}
   * @memberof CommentItemRawItemEditorController
   */
  public parseCommentTag(data: IData) {
    let { icon } = data;
    const params = JSON.stringify(data);
    if (!data.icon && data.owner_subtype && this.quoteCodelistMap.has('type')) {
      const item = this.quoteCodelistMap.get('type')!;
      const findItem = this.findCodeListItem(
        item.codeListItems,
        data.owner_subtype,
      );
      if (findItem && findItem.sysImage) {
        icon = findItem.sysImage.rawContent || '';
      }
    }
    return `<span markerClick='marker' params='${params}' class='comment-tag is-click'>${icon} ${data.identifier} ${data.name}</span>`;
  }
}
