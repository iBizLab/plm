import {
  GridController,
  GridFieldColumnController,
  IGridColumnProvider,
} from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';

/**
 * 表格列适配器
 *
 * @export
 * @class GridPersonalInfoColumnProvider
 * @implements {IGridColumnProvider}
 */
export class GridPersonalInfoColumnProvider implements IGridColumnProvider {
  component: string = 'IBizGridPersonalInfoColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridFieldColumnController> {
    const c = new GridFieldColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
