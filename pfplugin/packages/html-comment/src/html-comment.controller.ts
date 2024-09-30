/* eslint-disable no-lonely-if */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { downloadFileFromBlob, RuntimeError } from '@ibiz-template/core';
import {
  CodeListItem,
  ControllerEvent,
  EditorController,
  EventBase,
  getDeACMode,
  IAppDEService,
} from '@ibiz-template/runtime';
import { IAppDEACMode, IHtml } from '@ibiz/model-core';
import { Boot, IDomEditor, createEditor } from '@wangeditor/editor';
import { nextTick, Ref, ref } from 'vue';
import { createUUID } from 'qx-util';
import { toNumber } from 'lodash-es';
import { CustomNodeFactory } from './factory/custom-node-factory';
import { commentEvent } from './html-comment.event';
import { EmojiElem, MentionElem } from './custom-elem';
import { paintFormatMenu } from './paint-format/paint-format-menu';
import { HtmlUtil } from './utils';
import { AIMenu } from './ai/ai-modules';
import CustomViewLinkModule from './link/link-node-module';

/**
 * html框编辑器控制器
 *
 * @export
 * @class HtmlCommentController
 * @extends {EditorController}
 */
export class HtmlCommentController extends EditorController<IHtml> {
  /**
   * 用户头像数据
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public userAvatar: string = '';

  /**
   * 上传参数
   */
  public uploadParams?: IParams;

  /**
   * 下载参数
   */
  public exportParams?: IParams;

  /**
   * 最小高度
   *
   * @type {number}
   * @memberof HtmlCommentController
   */
  public minHeight: number = 48;

  /**
   * 最大高度
   *
   * @type {number}
   * @memberof HtmlCommentController
   */
  public maxHeight: number = 315;

  /**
   * 是否折叠
   *
   * @type {Ref<boolean>}
   * @memberof HtmlCommentController
   */
  public collapsed: Ref<boolean> = ref(true);

  /**
   * 是否隐藏
   *
   * @type {Ref<boolean>}
   * @memberof HtmlCommentController
   */
  public hidden: Ref<boolean> = ref(false);

  /**
   * 回复
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public reply: Ref<string> = ref('');

  /**
   * 回复脚本
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public replyScript: string = '';

  /**
   * 编辑器模式
   *
   * @type {('comment' | 'default')}
   * @memberof HtmlCommentController
   */
  public mode: 'comment' | 'default' = 'comment';

  /**
   * 插入工具栏项
   *
   * @type {IData[]}
   * @memberof HtmlCommentController
   */
  public insertKeys: IData[] = [];

  /**
   * 绘制模式
   *
   * @type {IData[]}
   * @memberof HtmlCommentController
   */
  public renderMode: 'HTML' | 'JSON' = 'HTML';

  /**
   * 保存间隔
   *
   * @type {IData[]}
   * @memberof HtmlCommentController
   */
  public saveInterval: number = 3000;

  /**
   * 抛值模式
   *
   * @type {IData[]}
   * @memberof HtmlCommentController
   */
  public emitMode: 'BUTTON' | 'AUTOMATIC' = 'BUTTON';

  /**
   * 唯一标识
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public uuid: string = createUUID();

  /**
   * 实时编辑（协同编辑）
   */
  public enableRealtime: boolean = false;

  /**
   * 编辑器实例
   */
  public editor!: IDomEditor;

  /**
   * 自动保存间隔
   * - 默认30秒
   * @private
   * @type {number}
   * @memberof HtmlCommentController
   */
  private autoSaveInterval: number = 30000;

  /**
   * 定时器
   *
   * @private
   * @type {(NodeJS.Timeout | null)}
   * @memberof HtmlCommentController
   */
  private timer: NodeJS.Timeout | null = null;

  /**
   * 应用实体服务
   *
   * @type {IAppDEService}
   * @memberof HtmlCommentController
   */
  deService?: IAppDEService;

  /**
   * 自填模式
   *
   * @author chitanda
   * @date 2023-10-12 10:10:52
   * @type {IAppDEACMode}
   */
  deACMode?: IAppDEACMode;

  /**
   * AI 聊天自填模式
   *
   * @author chitanda
   * @date 2023-10-12 10:10:37
   * @type {boolean}
   */
  chatCompletion: boolean = false;

  evt: ControllerEvent<commentEvent> = new ControllerEvent<commentEvent>(
    this.getEventArgs.bind(this),
  );

  protected getEventArgs(): Omit<EventBase, 'eventName'> {
    return {
      context: this.context,
      params: this.params,
      data: [],
      eventArg: '',
      targetName: this.model.name!,
      view: this.getView(),
    };
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    await this.getCurrentUserAvatar();

    const { model } = this;
    if (model.appDEACModeId) {
      this.deACMode = await getDeACMode(
        model.appDEACModeId,
        model.appDataEntityId!,
        this.context.srfappid,
      );
      if (this.deACMode) {
        if (this.deACMode.actype === 'CHATCOMPLETION') {
          this.deService = await ibiz.hub
            .getApp(model.appId)
            .deService.getService(this.context, model.appDataEntityId!);
          this.chatCompletion = true;
        }
      }
    }

    this.registerCustomElem();
    if (this.editorParams) {
      const {
        uploadParams,
        exportParams,
        MINHEIGHT,
        MAXHEIGHT,
        REPLYSCRIPT,
        MODE,
        INSERTKEYS,
        RENDERMODE,
        SAVEINTERVAL,
        EMITMODE,
        DEFAULTCOLLAPSE,
        ENABLEREALTIME,
      } = this.editorParams;

      if (uploadParams) {
        try {
          this.uploadParams = JSON.parse(uploadParams);
        } catch (error) {
          ibiz.log.error(
            `编辑器[${ibiz.log.error(
              error,
            )}]编辑器参数 uploadParams 非 json 格式`,
          );
        }
      }
      if (exportParams) {
        try {
          this.exportParams = JSON.parse(exportParams);
        } catch (error) {
          ibiz.log.error(
            `编辑器[${ibiz.log.error(
              error,
            )}]编辑器参数 exportParams 非 json 格式`,
          );
        }
      }
      if (MINHEIGHT) {
        this.minHeight = Number(MINHEIGHT);
      }
      if (MAXHEIGHT) {
        this.maxHeight = Number(MAXHEIGHT);
      }
      if (REPLYSCRIPT) {
        this.replyScript = REPLYSCRIPT;
      }
      if (MODE) {
        this.mode = MODE.toLowerCase();
      }
      if (INSERTKEYS) {
        this.insertKeys = JSON.parse(INSERTKEYS);
      }
      if (RENDERMODE) {
        this.renderMode = RENDERMODE;
      }
      if (SAVEINTERVAL) {
        this.saveInterval = toNumber(SAVEINTERVAL);
      }
      if (EMITMODE) {
        this.emitMode = EMITMODE;
      }
      if (DEFAULTCOLLAPSE) {
        this.collapsed.value =
          !Object.is(DEFAULTCOLLAPSE, 'TRUE') &&
          !Object.is(DEFAULTCOLLAPSE, 'true');
      }
      if (ENABLEREALTIME) {
        this.enableRealtime =
          Object.is(ENABLEREALTIME, 'TRUE') ||
          Object.is(ENABLEREALTIME, 'true');
      }
    }

    CustomNodeFactory.init(this.uuid);
    this.evt.on('onChange', () => {
      // 当前执行界面域
      if ((this.parent as any).form) {
        return;
      }
      const uiDomain = ibiz.uiDomainManager.get(this.context.srfsessionid);
      if (uiDomain) {
        uiDomain.dataChange();
      }
    });
    // this.initMarkOpenData();
    this.listenViewDestroyed();
  }

  /**
   * 注册自定义元素
   *
   * @private
   * @memberof HtmlCommentController
   */
  private registerCustomElem() {
    if (!window.customElements.get('mention-elem')) {
      window.customElements.define('mention-elem', MentionElem);
    }
    if (!window.customElements.get('emoji-elem')) {
      window.customElements.define('emoji-elem', EmojiElem);
    }
    if (!(window as IData).paintFormatIsRegiter) {
      Boot.registerMenu(paintFormatMenu);
      (window as IData).paintFormatIsRegiter = true;
    }
    if (!(window as IData).aichartRegister) {
      Boot.registerMenu({
        key: 'aichart',
        factory() {
          return new AIMenu();
        },
      });
      (window as IData).aichartRegister = true;
    }
    if (!(window as IData).customLinkIsRegiter) {
      Boot.registerModule(CustomViewLinkModule);
      (window as IData).customLinkIsRegiter = true;
    }
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof HtmlCommentController
   */
  public onCreated(editor: IDomEditor, data: IData, toolbarConfig: IData) {
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      controller.init(editor, {
        model: this.model,
        data,
        toolbarConfig,
        context: this.context,
        params: this.params,
        evt: this.evt,
      });
    });
  }

  /**
   * 组件销毁
   *
   * @memberof HtmlCollapseController
   */
  public onDestroyed() {
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      controller.onDestroyed();
    });
    CustomNodeFactory.destroy(this.uuid);
  }

  /**
   * 处理视图销毁
   *
   * @memberof HtmlCommentController
   */
  public listenViewDestroyed() {
    const view = this.getView();
    if (view) {
      view.evt.on('onDestroyed', () => {
        this.onDestroyed();
      });
    }
  }

  /**
   * 解析所有注册节点
   *
   * @param {string} value
   * @return {*}
   * @memberof HtmlCommentController
   */
  public parseNode(value: string) {
    let result: string = value;
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      result = controller.parseNode(result);
    });
    return result;
  }

  /**
   * 设置html
   *
   * @param {string} value
   * @memberof HtmlCommentController
   */
  public async setValue(value: string) {
    this.collapsed.value = false;
    // 先提前销毁，防止回显异常
    this.hidden.value = true;
    await nextTick();
    this.hidden.value = false;
    await nextTick();
    const html = this.parseNode(value);
    this.evt.emit('setHtml', {
      eventArg: html,
    });
  }

  /**
   * 设置回复,data: {name: string, content: string}
   *
   * @param {IData} data
   * @memberof HtmlCommentController
   */
  public setReply(data: IData) {
    this.reply.value = HtmlUtil.getEmojiCustomHtml(
      `${data.name}: ${data.content}`,
    );
    this.evt.emit('onSetReply', {
      eventArg: this.reply.value,
    });
  }

  /**
   * 删除回复
   *
   * @memberof HtmlCommentController
   */
  public removeReply() {
    this.reply.value = '';
    this.evt.emit('onRemoveReply', {
      eventArg: this.reply.value,
    });
  }

  /**
   * 清空
   *
   * @memberof HtmlCommentController
   */
  public clear() {
    this.reply.value = '';
    this.evt.emit('onRemoveReply', {
      eventArg: this.reply.value,
    });
    this.evt.emit('clear', {
      eventArg: '',
    });
    this.collapsed.value = true;
  }

  /**
   * 请求url获取文件流，并用JS触发文件下载
   *
   * @author lxm
   * @date 2022-11-17 14:11:09
   * @param {string} url
   * @param {IData} file
   */
  fileDownload(file: { url: string; name: string }): void {
    // 发送get请求
    ibiz.net
      .request(file.url, {
        method: 'get',
        responseType: 'blob',
        baseURL: '', // 已经有baseURL了，这里无需再写
      })
      .then((response: IData) => {
        if (response.status !== 200) {
          throw new RuntimeError('下载文件失败');
        }
        // 请求成功，后台返回的是一个文件流
        if (!response.data) {
          throw new RuntimeError('文件流数据不存在');
        } else {
          // 获取文件名
          const fileName = file.name;
          downloadFileFromBlob(response.data, fileName);
        }
      });
  }

  /**
   * 切换折叠
   *
   * @memberof HtmlCommentController
   */
  public toggleCollapse(open?: boolean) {
    this.collapsed.value = !open && !this.collapsed.value;
  }

  /**
   * 绘制模式为json时，需要将返回数据的json内容转html
   *
   * @author ljx
   * @date 2024-03-09 15:11:09
   * @param {string} url
   * @param {IData} file
   */
  public jsonToHtml(value: string): string {
    let html = '';
    try {
      const content = JSON.parse(value);
      // 创建编辑器实例
      const editor = createEditor({
        content,
      });
      html = editor.getHtml();
    } catch (error) {
      html = value;
      ibiz.log.error('JSON字符串转换错误', error);
    }
    return html;
  }

  /**
   * 绘制模式为json时，处理抛值数据
   *
   * @author ljx
   * @date 2024-03-09 15:11:09
   * @param {string} url
   * @param {IData} file
   */
  public toJson(value: IData[] = []): string {
    let json = '';
    try {
      json = JSON.stringify(value);
    } catch (error) {
      ibiz.log.error('JSON字符串转换错误');
    }
    return json;
  }

  /**
   * 获取当前用户头像
   *
   * @memberof HtmlCommentController
   */
  public async getCurrentUserAvatar() {
    const app = await ibiz.hub.getApp(this.context.srfappid);
    let dataItems: readonly CodeListItem[] = [];
    dataItems = await app.codeList.get(
      'SysOperator',
      this.context,
      this.params,
    );
    if (this.context.srfuserid) {
      const tempItem = dataItems.filter((itme: CodeListItem) => {
        return itme.value === this.context.srfuserid;
      });
      if (tempItem && tempItem.length > 0) {
        this.userAvatar = tempItem[0]?.data?.iconurl || '';
      }
    }
  }

  /**
   * 获取当前视图
   *
   * @return {*}
   * @memberof HtmlCommentController
   */
  public getView() {
    const ctrl =
      (this.parent as IData).form ||
      (this.parent as IData).grid ||
      (this.parent as IData).panel;
    if (ctrl) {
      return ctrl.view;
    }
  }
}
