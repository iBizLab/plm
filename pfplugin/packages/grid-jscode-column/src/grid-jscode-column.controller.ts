/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  GridFieldEditColumnController,
  GridRowState,
  ScriptFactory,
} from '@ibiz-template/runtime';

/**
 * 表格编辑列控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class GridJsCodeColumnController extends GridFieldEditColumnController {
  /**
   * 初始化脚本代码
   *
   * @type {string}
   * @memberof GridJsCodeColumnController
   */
  public initScriptCode: string = '';

  /**
   * 值改变脚本代码
   *
   * @type {string}
   * @memberof GridJsCodeColumnController
   */
  public changeScriptCode: string = '';

  /**
   * 是否允许保存
   *
   * @type {boolean}
   * @memberof GridJsCodeColumnController
   */
  public enableSave: boolean = true;

  /**
   * 初始化方法，生成表格编辑项控制器
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
    const { editorParams } = this.editor as IData;
    if (editorParams.INITSCRIPTCODE) {
      this.initScriptCode = editorParams.INITSCRIPTCODE;
    }
    if (editorParams.CHANGESCRIPTCODE) {
      this.changeScriptCode = editorParams.CHANGESCRIPTCODE;
    }
    if (editorParams.ENABLESAVE) {
      this.enableSave =
        Object.is(editorParams.ENABLESAVE, 'true') ||
        Object.is(editorParams.ENABLESAVE, 'TRUE');
    }
  }

  /**
   * 执行初始化脚本
   *
   * @public
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  public async execInitScriptFn(row: GridRowState): Promise<void> {
    if (this.initScriptCode) {
      ScriptFactory.execScriptFn({ data: row.data }, this.initScriptCode, {
        singleRowReturn: false,
        isAsync: false,
      }) as string;
    }
  }

  /**
   * 执行数据改变脚本
   *
   * @param {GridRowState} row
   * @param {string} name
   * @param {unknown} value
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  public async execChangeScriptFn(
    row: GridRowState,
    name: string,
    value: unknown,
  ): Promise<void> {
    ScriptFactory.execScriptFn(
      { data: row.data, name, value },
      this.initScriptCode,
      { singleRowReturn: true, isAsync: true },
    ) as string;
  }

  /**
   * 重写setRowValue
   *
   * @param {GridRowState} row
   * @param {unknown} value
   * @param {string} [name]
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  async setRowValue(
    row: GridRowState,
    value: unknown,
    name?: string,
  ): Promise<void> {
    name = name || this.fieldName;
    if (this.changeScriptCode) {
      await this.execChangeScriptFn(row, name, value);
    }
    await this.grid.setRowValue(row, name, value);
  }
}
