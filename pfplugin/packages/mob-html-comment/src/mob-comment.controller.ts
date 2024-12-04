/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ControllerEvent,
  EditorController,
  EventBase,
  FormItemController,
  getUIActionById,
  getViewLogics,
  GridFieldEditColumnController,
  IModalData,
  IViewController,
  OpenAppViewCommand,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { IAppViewLogic, IHtml } from '@ibiz/model-core';
import Quill from 'quill';
import { MarkerBlot, MentionBlot } from './blot';
import { CommentMentionController } from './controller/mob-mention.controller';
import { CommentMarkerController } from './controller/mob-marker.controller';
import { MarkerElem } from './custom-elem';
import { HtmlUtil } from './utils';
import { mobCommentEvent } from './html-comment.event';

/**
 * html框编辑器控制器
 *
 * @export
 * @class MobCommentController
 * @extends {EditorController}
 */
export class MobCommentController extends EditorController<IHtml> {
  /**
   * 上传参数
   */
  public uploadParams?: IParams;

  /**
   * 下载参数
   */
  public exportParams?: IParams;

  /**
   * @description 是否显示工具栏
   * @type {boolean}
   * @memberof MobCommentController
   */
  public showToolbar: boolean = true;

  /**
   * @description 值模式(暂时只支持html模式，text模式存在问题)
   * @type {('text' | 'html')}
   * @memberof MobCommentController
   */
  public valueMode: 'text' | 'html' = 'html';

  /**
   * @description 图片模式
   * @type {('base64' | 'file')}
   * @memberof MobCommentController
   */
  public imageMode: 'base64' | 'file' = 'file';

  /**
   * @description 提及控制器
   * @type {CommentMentionController}
   * @memberof MobCommentController
   */
  public mention!: CommentMentionController;

  /**
   * @description 提及工作项控制器
   * @type {CommentMarkerController}
   * @memberof MobCommentController
   */
  public marker!: CommentMarkerController;

  /**
   * @description quill配置
   * @type {IData}
   * @memberof MobCommentController
   */
  public modules: IData = {
    toolbar: [],
  };

  /**
   * @description 视图
   * @private
   * @return {*}  {IViewController}
   * @memberof MobCommentController
   */
  get view(): IViewController {
    if ((this.parent as IData).panel) {
      return (this.parent as IData).panel.view;
    }
    if ((this.parent as FormItemController).form) {
      return (this.parent as FormItemController).form.view;
    }
    return (this.parent as GridFieldEditColumnController).grid.view;
  }

  /**
   * @description 视图逻辑
   * @type {IAppViewLogic[]}
   * @memberof MobCommentController
   */
  public appViewLogics: IAppViewLogic[] = [];

  /**
   * 回复脚本
   *
   * @type {string}
   * @memberof MobCommentController
   */
  public replyScript: string = '';

  /**
   * @description 回复
   * @type {string}
   * @memberof MobCommentController
   */
  public reply: string = '';

  evt: ControllerEvent<mobCommentEvent> = new ControllerEvent<mobCommentEvent>(
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

  private initBlot() {
    Quill.register({ 'formats/mention': MentionBlot });
    Quill.register({ 'formats/marker': MarkerBlot });
  }

  private registerCustomElem() {
    if (!window.customElements.get('mob-marker')) {
      window.customElements.define('mob-marker', MarkerElem);
    }
  }

  /**
   * @description 获取控制器参数
   * @protected
   * @return {*}
   * @memberof MobCommentController
   */
  protected getControllerParams(): IData {
    return {
      model: this.model,
      context: this.context,
      params: this.params,
      appViewLogics: this.appViewLogics,
    };
  }

  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobCommentController
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
    this.appViewLogics = getViewLogics(this.view.model);
    this.registerCustomElem();
    if (this.editorParams) {
      const {
        uploadParams,
        exportParams,
        SHOWTOOLBAR,
        VALUEMODE,
        IMAGEMODE,
        MODULES,
        REPLYSCRIPT,
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
      if (SHOWTOOLBAR) {
        this.showToolbar = this.toBoolean(SHOWTOOLBAR);
      }
      if (VALUEMODE) {
        this.valueMode = VALUEMODE.toLowerCase();
      }
      if (IMAGEMODE) {
        this.imageMode = IMAGEMODE.toLowerCase();
      }
      if (MODULES) {
        this.modules = ScriptFactory.execScriptFn(
          { controller: this },
          MODULES,
        ) as IData;
      }
      if (REPLYSCRIPT) {
        this.replyScript = REPLYSCRIPT;
      }
    }
    this.initBlot();
    this.mention = new CommentMentionController(
      this.editorParams,
      this.getControllerParams(),
    );
    this.marker = new CommentMarkerController(
      this.editorParams,
      this.getControllerParams(),
    );
  }

  /**
   * @description 获取用户数据
   * @return {*}  {Promise<IData[]>}
   * @memberof MobCommentController
   */
  async getMentions(data: IData): Promise<IData[]> {
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    return this.mention.getUsers({
      data,
      context,
      params,
    });
  }

  /**
   * @description 获取工作项数据
   * @return {*}  {Promise<IData[]>}
   * @memberof MobCommentController
   */
  async getMarkers(data: IData): Promise<IData[]> {
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    return this.marker.getWorkItems({
      data,
      context,
      params,
    });
  }

  /**
   * @description 转换为html
   * @param {string} value
   * @return {*}  {string}
   * @memberof MobCommentController
   */
  public transformHtml(value: string): string {
    let result = value;
    result = this.mention.transformHtml(result);
    result = this.marker.transformHtml(result);
    return result;
  }

  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}
   * @memberof MobCommentController
   */
  public transformDelta(value: string): string {
    let result = value;
    result = this.mention.transformDelta(result);
    result = this.marker.transformDelta(result);
    return result;
  }

  /**
   * @description 打开选择视图
   * @param {IData} data
   * @param {string} viewId
   * @return {*}  {(Promise<IData[] | undefined>)}
   * @memberof MobCommentController
   */
  public async openPickUpView(
    data: IData,
    logic: IAppViewLogic,
  ): Promise<IData[] | undefined> {
    if (!logic.appDEUIActionId) {
      ibiz.message.error('未配置MENTION视图自定义逻辑');
      return;
    }
    const action = await getUIActionById(logic.appDEUIActionId!, logic.appId);
    if (!action || !action.frontAppViewId) {
      ibiz.message.error('请配置界面行为打开视图');
      return;
    }
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    // 模态打开视图
    const appView = await ibiz.hub.config.view.get(action.frontAppViewId);
    const { openMode = 'POPUPMODAL' } = appView;
    const res = await ibiz.commands.execute<IModalData>(
      OpenAppViewCommand.TAG,
      action.frontAppViewId,
      context,
      params,
      { openMode },
    );
    if (res && res.ok && res.data) {
      return res.data;
    }
    ibiz.log.debug('模态取消或关闭异常', res);
  }

  /**
   * 设置回复,data: {name: string, content: string}
   *
   * @param {IData} data
   * @memberof MobCommentController
   */
  public setReply(data: IData) {
    const reply = HtmlUtil.getEmojiCustomHtml(`${data.name}: ${data.content}`);
    this.evt.emit('onSetReply', {
      eventArg: reply,
    });
  }

  /**
   * @description 清空评论
   * @memberof MobCommentController
   */
  public clearReply() {
    this.evt.emit('onRemoveReply', {
      eventArg: '',
    });
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
