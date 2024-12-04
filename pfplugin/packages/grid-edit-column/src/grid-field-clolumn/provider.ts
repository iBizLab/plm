import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridEditColumnController } from './grid-edit-column.controller';

export class GridEditColumnProvider implements IGridColumnProvider {
  component: string = 'GridEditColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridEditColumnController> {
    const c = new GridEditColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
