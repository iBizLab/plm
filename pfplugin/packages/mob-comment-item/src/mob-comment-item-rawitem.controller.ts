/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  CodeListItem,
  EditorController,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';

export class MobCommentItemRawItemController extends EditorController<IRaw> {
  /**
   * 绘制器脚本代码
   *
   * @type {string}
   * @memberof MobCommentItemRawItemController
   */
  public scriptCode: string = '';

  /**
   * @description 图标代码表标识
   * @type {string}
   * @memberof MobCommentItemRawItemController
   */
  public iconCodeListId: string = 'plmmob.base__recent_visite';

  /**
   * @description 代码表数据
   * @type {readonly}
   * @memberof MobCommentItemRawItemController
   */
  public codeListItems: readonly CodeListItem[] = [];

  protected async onInit(): Promise<void> {
    await super.onInit();

    const { SCRIPTCODE, ICONCODELISTID } = this.editorParams;
    if (ICONCODELISTID) {
      this.iconCodeListId = ICONCODELISTID;
    }
    if (SCRIPTCODE) {
      this.scriptCode = SCRIPTCODE;
    }
    this.codeListItems = await this.loadCodeList(this.iconCodeListId);
  }

  /**
   *  寻找代码表
   * @param codelist
   * @param value
   * @returns
   */
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
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<readonly CodeListItem[]>)}
   * @memberof MobCommentItemRawItemController
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
   *  解析节点
   * @param data
   * @returns
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
   * 获取面板绘制器自定义html
   *
   * @param {string} controlRenders
   * @param {(IData | undefined)} data
   * @return {*}  {(string | undefined)}
   * @memberof MobCommentItemRawItemController
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
}
