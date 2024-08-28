import { GridFieldEditColumnController, GridRowState } from '@ibiz-template/runtime';
/**
 * 表格编辑列控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class GridJsCodeColumnController extends GridFieldEditColumnController {
    /**
     * 初始化脚本代码
     *
     * @type {string}
     * @memberof GridJsCodeColumnController
     */
    initScriptCode: string;
    /**
     * 值改变脚本代码
     *
     * @type {string}
     * @memberof GridJsCodeColumnController
     */
    changeScriptCode: string;
    /**
     * 是否允许保存
     *
     * @type {boolean}
     * @memberof GridJsCodeColumnController
     */
    enableSave: boolean;
    /**
     * 初始化方法，生成表格编辑项控制器
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof GridJsCodeColumnController
     */
    protected onInit(): Promise<void>;
    /**
     * 执行初始化脚本
     *
     * @public
     * @return {*}  {Promise<void>}
     * @memberof GridJsCodeColumnController
     */
    execInitScriptFn(row: GridRowState): Promise<void>;
    /**
     * 执行数据改变脚本
     *
     * @param {GridRowState} row
     * @param {string} name
     * @param {unknown} value
     * @return {*}  {Promise<void>}
     * @memberof GridJsCodeColumnController
     */
    execChangeScriptFn(row: GridRowState, name: string, value: unknown): Promise<void>;
    /**
     * 重写setRowValue
     *
     * @param {GridRowState} row
     * @param {unknown} value
     * @param {string} [name]
     * @return {*}  {Promise<void>}
     * @memberof GridJsCodeColumnController
     */
    setRowValue(row: GridRowState, value: unknown, name?: string): Promise<void>;
}
