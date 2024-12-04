import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridChangeVersionColumnController } from './grid-change-version-column.controller';

/**
 * 表格属性列(开启行编辑)适配器
 *
 * @export
 * @class GridChangeVersionColumnProvider
 * @implements {IGridColumnProvider}
 */
export class GridChangeVersionColumnProvider implements IGridColumnProvider {
  component: string = 'IBizGridChangeVersionColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridChangeVersionColumnController> {
    const c = new GridChangeVersionColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
