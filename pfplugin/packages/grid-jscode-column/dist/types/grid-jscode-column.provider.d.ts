import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';
export declare class GridJsCodeColumnProvider implements IGridColumnProvider {
    component: string;
    createController(columnModel: IDEGridFieldColumn, grid: GridController): Promise<GridJsCodeColumnController>;
}
