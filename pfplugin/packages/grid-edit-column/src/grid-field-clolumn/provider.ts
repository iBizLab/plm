import {
  GridController,
  GridFieldEditColumnController,
  IGridColumnProvider,
} from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';

export class GridEditColumnProvider implements IGridColumnProvider {
  component: string = 'GridEditColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridFieldEditColumnController> {
    const c = new GridFieldEditColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
