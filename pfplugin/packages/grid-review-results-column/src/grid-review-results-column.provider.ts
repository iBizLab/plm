import { GridController, IGridColumnProvider } from '@ibiz-template/runtime';
import { IDEGridFieldColumn } from '@ibiz/model-core';
import { GridReviewResultsColumnController } from './grid-review-results-column.controller';

/**
 * 表格属性列(开启行编辑)适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class GridReviewResultsColumnProvider
 * @implements {IGridColumnProvider}
 */
export class GridReviewResultsColumnProvider implements IGridColumnProvider {
  component: string = 'IBizGridReviewResultsColumn';

  async createController(
    columnModel: IDEGridFieldColumn,
    grid: GridController,
  ): Promise<GridReviewResultsColumnController> {
    const c = new GridReviewResultsColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
