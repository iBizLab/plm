import { ISpan, IAppCodeList } from '@ibiz/model-core';
import {
  CodeListEditorController,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
import { RuntimeModelError } from '@ibiz-template/core';

/**
 * 标签编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class SpanEditorController extends CodeListEditorController<ISpan> {
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
}
