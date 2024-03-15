import {
  GridController,
  IGridColumnProvider,
  GridFieldEditColumnController,
} from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';

/**
 * 表格列适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class GridFieldColumnProvider
 * @implements {IconGridColumnProvider}
 */
export class IconGridColumnProvider implements IGridColumnProvider {
  component: string = 'IBizIconGridColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridFieldEditColumnController> {
    const c = new GridFieldEditColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
