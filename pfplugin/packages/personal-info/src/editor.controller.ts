import { ISpan, IAppCodeList } from '@ibiz/model-core';
import {
  CodeListEditorController,
  CodeListItem,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
import { RuntimeError, RuntimeModelError } from '@ibiz-template/core';

/**
 * 标签编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class PersonalInfoEditorController extends CodeListEditorController<ISpan> {
  /**
   *值项
   */
  public valueItem = '';

  /**
   * 代码表模型
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-05-24 10:55:50
   */
  public codeList: IAppCodeList | undefined = undefined;

  /**
   * 是否支持头像
   *
   * @type {boolean}
   * @memberof PersonalInfoEditorController
   */
  public enableAvatar: boolean = false;

  /**
   * 是否显示姓名文字
   *
   * @type {boolean}
   * @memberof PersonalInfoEditorController
   */
  public showNameText: boolean = true;

  /**
   * 云系统操作者Map
   *
   * @type {(Map<string | number, CodeListItem>)}
   * @memberof PersonalInfoEditorController
   */
  public operatorMap: Map<string | number, CodeListItem> = new Map();

  protected async onInit(): Promise<void> {
    super.onInit();
    // span-link临时用editorItems
    if (this.model?.editorItems?.[0]) {
      this.valueItem = this.model.editorItems[0].id!;
    }
    // 初始化代码表
    if (this.model.appCodeListId) {
      const app = await ibiz.hub.getApp(this.context.srfappid);
      this.codeList = app.codeList.getCodeList(this.model.appCodeListId);
    }
    const { ENABLEAVATAR, SHOWNAMETEXT } = this.editorParams;
    if (ENABLEAVATAR) {
      this.enableAvatar = this.toBoolean(ENABLEAVATAR);
    }
    if (SHOWNAMETEXT) {
      this.showNameText = this.toBoolean(SHOWNAMETEXT);
    }
  }

  /**
   * 打开数据链接视图
   */
  public async openLinkView(data: IData): Promise<IData[] | undefined> {
    const tempContext = this.context.clone();
    if (data[this.valueItem]) {
      tempContext.srfkey = data[this.valueItem];
    }
    const { context, params } = this.handlePublicParams(
      data,
      tempContext,
      this.params,
    );
    const { linkAppViewId } = this.model;
    if (!linkAppViewId) {
      throw new RuntimeModelError(this.model, '请配置数据链接视图');
    }
    return ibiz.commands.execute(
      OpenAppViewCommand.TAG,
      linkAppViewId,
      context,
      params,
    );
  }

  /**
   * 判断是否显示姓名文字
   *
   * @return {*}  {boolean}
   * @memberof PersonalInfoEditorController
   */
  public isShowNameText(): boolean {
    return this.showNameText;
  }

  /**
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {*}
   * @memberof PersonalInfoEditorController
   */
  public parseAvatar(avatar: string): string | undefined {
    if (!this.enableAvatar) {
      return undefined;
    }
    try {
      const res = JSON.parse(avatar);
      if (res) {
        const data = Array.isArray(res) ? res[0] : res;
        const urls = ibiz.util.file.calcFileUpDownUrl(
          this.context,
          this.params,
        );
        return urls.downloadUrl.replace('%fileId%', data.id);
      }
    } catch (error) {
      throw new RuntimeError('头像数据解析异常');
    }
  }

  /**
   * 获取操作用户列表
   *
   * @memberof PersonalInfoEditorController
   */
  async getOperatorUserList(): Promise<void> {
    const app = await ibiz.hub.getApp(this.context.srfappid);
    let dataItems: readonly CodeListItem[] = [];
    dataItems = await app.codeList.get(
      'SysOperator',
      this.context,
      this.params,
    );
    // 构建一个map,避免后续匹配数据时循环花时间
    this.operatorMap = new Map(
      dataItems.map((item: CodeListItem) => [item.value, item]),
    );
  }
}
