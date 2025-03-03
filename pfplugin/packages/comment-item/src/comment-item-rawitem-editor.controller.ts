/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CodeListItem,
  EditorController,
  OpenAppViewCommand,
  PanelItemEventName,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { clone } from 'ramda';

/**
 * 直接内容编辑器控制器
 *
 * @export
 * @class CommentItemRawItemEditorController
 * @extends {EditorController}
 */
export class CommentItemRawItemEditorController extends EditorController<IRaw> {
  /**
   * 绘制器脚本代码
   *
   * @type {string}
   * @memberof CommentItemRawItemEditorController
   */
  public scriptCode: string = '';

  /**
   * @description 链接视图id
   * @type {string}
   * @memberof CommentItemRawItemEditorController
   */
  public linkViewId: string = 'plmweb.recent_redirect_view';

  /**
   * @description 图标代码表标识
   * @type {string}
   * @memberof CommentItemRawItemEditorController
   */
  public iconCodeListId: string = 'plmweb.base__recent_visite';

  /**
   * @description 代码表数据
   * @type {readonly}
   * @memberof CommentItemRawItemEditorController
   */
  public codeListItems: readonly CodeListItem[] = [];

  protected async onInit(): Promise<void> {
    await super.onInit();
    const { SCRIPTCODE, LINKVIEWID, ICONCODELISTID } = this.editorParams;
    if (SCRIPTCODE) {
      this.scriptCode = SCRIPTCODE;
    }
    if (LINKVIEWID) {
      this.linkViewId = LINKVIEWID;
    }
    if (ICONCODELISTID) {
      this.iconCodeListId = ICONCODELISTID;
    }
    this.codeListItems = await this.loadCodeList(this.iconCodeListId);
  }

  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<readonly CodeListItem[]>)}
   * @memberof CommentItemRawItemEditorController
   */
  async loadCodeList(appCodeListId: string): Promise<readonly CodeListItem[]> {
    const app = ibiz.hub.getApp(this.context.srfappid);
    const codeListItems = await app.codeList.get(
      appCodeListId,
      this.context,
      this.params,
    );
    return codeListItems;
  }

  /**
   * 获取面板绘制器自定义html
   *
   * @param {string} controlRenders
   * @param {(IData | undefined)} data
   * @return {*}  {(string | undefined)}
   * @memberof CommentItemRawItemEditorController
   */
  getPanelItemCustomHtml(
    scriptCode: string,
    data: IData | undefined,
  ): string | undefined {
    if (scriptCode) {
      return ScriptFactory.execScriptFn(
        { data: data || {}, controller: this },
        scriptCode,
        {
          singleRowReturn: true,
          isAsync: false,
        },
      ) as string;
    }
  }

  public findCodeListItem(
    codelist: readonly CodeListItem[] | undefined,
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
   * @description 解析评论节点
   * @param {IData} data
   * @return {*}
   * @memberof CommentItemRawItemEditorController
   */
  public parseCommentTag(data: IData) {
    let { icon } = data;
    if (!data.icon && data.owner_subtype && this.codeListItems.length) {
      const findItem = this.findCodeListItem(
        this.codeListItems,
        data.owner_subtype,
      );
      if (findItem && findItem.sysImage) {
        icon = findItem.sysImage.rawContent || '';
      }
    }
    return `<span class='comment-tag' data-value='${JSON.stringify(
      data,
    )}'>${icon} ${data.identifier} ${data.name}</span>`;
  }

  /**
   * @description 点击事件
   * @param {MouseEvent} event
   * @memberof CommentItemRawItemEditorController
   */
  onClick(event: MouseEvent): void {
    const { panel } = this.parent as IData;
    if (panel) {
      panel.evt.emit('onPanelItemEvent', {
        panelItemName: this.model.id!,
        panelItemEventName: PanelItemEventName.CLICK,
        event,
      });
    }
  }

  /**
   * @description 处理点击事件
   * @param {MouseEvent} event
   * @return {*}  {void}
   * @memberof CommentItemRawItemEditorController
   */
  handleClick(event: MouseEvent): void {
    const { classList, dataset } = event.target as HTMLElement;
    // 点击提及工作项
    if (classList && classList.contains('comment-tag')) {
      const value = dataset.value || '';
      const tempContext = this.context.clone();
      const tempParams = clone(this.params);
      const item = JSON.parse(value);
      if (!item.owner_type) {
        return;
      }
      tempContext.srfkey = item.id;
      if (item.owner_subtype === 'page') {
        tempParams.article_page = item.owner_id;
      } else {
        tempParams[item.owner_subtype] = item.owner_id;
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
}
