import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridEditColumnController } from './grid-edit-column.controller';
export declare class GridEditColumnProvider implements IGridColumnProvider {
    component: string;
    createController(columnModel: IDEGridFieldColumn, grid: GridController): Promise<GridEditColumnController>;
}
