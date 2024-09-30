import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';

export class GridJsCodeColumnProvider implements IGridColumnProvider {
  component: string = 'IBizGridJsCodeColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridJsCodeColumnController> {
    const c = new GridJsCodeColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
