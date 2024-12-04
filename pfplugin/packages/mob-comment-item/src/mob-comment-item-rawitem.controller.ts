import { EditorController, ScriptFactory } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';

export class MobCommentItemRawItemController extends EditorController<IRaw> {
  /**
   * 绘制器脚本代码
   *
   * @type {string}
   * @memberof MobCommentItemRawItemController
   */
  public scriptCode: string = '';

  protected async onInit(): Promise<void> {
    await super.onInit();
    const { SCRIPTCODE } = this.editorParams;
    if (SCRIPTCODE) {
      this.scriptCode = SCRIPTCODE;
    }
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
      return ScriptFactory.execScriptFn({ data: data || {} }, scriptCode, {
        singleRowReturn: true,
        isAsync: false,
      }) as string;
    }
  }
}
