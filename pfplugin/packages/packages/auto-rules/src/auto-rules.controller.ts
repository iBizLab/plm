import { RuntimeModelError } from '@ibiz-template/core';
import { CodeListEditorController, CodeListItem } from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';

export class AutoRulesController extends CodeListEditorController<IDropDownList> {
  /**
   * [属性确定,文本项,允许空] 自定义仿真数据
   *
   * @static
   * @memberof AutoRulesController
   */
  public allowEmptyText = [
    { text: '从任何到任何', value: JSON.stringify(['', '']) },
    {
      text: '从有值到空值',
      value: JSON.stringify(['', null]),
    },
    {
      text: '从空值到有值',
      value: JSON.stringify([null, '']),
    },
  ];

  protected async onInit(): Promise<void> {
    super.onInit();
  }

  // 加载自定义配置的下拉代码表
  public async loadCustomCodeList(
    tag: string,
    data: IData,
  ): Promise<readonly CodeListItem[]> {
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    if (tag) {
      const app = await ibiz.hub.getApp(this.context.srfappid);
      let dataItems: readonly CodeListItem[] = [];
      dataItems = await app.codeList.get(
        `${app.model.id}.${tag}`,
        context,
        params,
      );
      return dataItems;
    }
    throw new RuntimeModelError(
      this.model,
      ibiz.i18n.t('runtime.controller.common.editor.editorNoConfigured', {
        editorType: this.model.editorType,
      }),
    );
  }
}
