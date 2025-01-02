import { GridController, GridFieldColumnController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
/**
 * 表格列适配器
 *
 * @export
 * @class GridPersonalInfoColumnProvider
 * @implements {IGridColumnProvider}
 */
export declare class GridPersonalInfoColumnProvider implements IGridColumnProvider {
    component: string;
    createController(columnModel: IDEGridFieldColumn, grid: GridController): Promise<GridFieldColumnController>;
}
