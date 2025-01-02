/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CodeListItem,
  EditorController,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { clone } from 'ramda';

/**
 * 直接内容编辑器控制器
 *
 * @export
 * @class RawEditorController
 * @extends {EditorController}
 */
export class RawEditorController extends EditorController<IRaw> {
  /**
   * @description 链接视图id
   * @type {string}
   * @memberof RawEditorController
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
    const { LINKVIEWID, ICONCODELISTID } = this.editorParams;
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
    const params = JSON.stringify(data);
    if (!data.icon && data.owner_subtype && this.codeListItems.length) {
      const findItem = this.findCodeListItem(
        this.codeListItems,
        data.owner_subtype,
      );
      if (findItem && findItem.sysImage) {
        icon = findItem.sysImage.rawContent || '';
      }
    }
    return `<span markerClick='marker' params='${params}' class='comment-tag is-click'>${icon} ${data.identifier} ${data.name}</span>`;
  }

  /**
   * @description 处理点击事件
   * @param {MouseEvent} event
   * @param {IData} item
   * @return {*}  {void}
   * @memberof RawEditorController
   */
  handleClick(event: MouseEvent, item: IData): void {
    if (!item.owner_type) {
      return;
    }
    const tempContext = this.context.clone();
    const tempParams = clone(this.params);
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
