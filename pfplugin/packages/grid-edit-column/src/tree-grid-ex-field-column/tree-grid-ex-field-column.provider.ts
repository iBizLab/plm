import {
  TreeGridExController,
  TreeGridExFieldColumnController,
  ITreeGridExColumnProvider,
} from '@ibiz-template/runtime';
import { IDETreeDEFColumn } from '@ibiz/model-core';

/**
 * 树表格（增强）属性编辑列适配器
 *
 * @export
 * @class TreeGridExFieldEditColumnProvider
 * @implements {ITreeGridExColumnProvider}
 */
export class TreeGridExFieldEditColumnProvider
  implements ITreeGridExColumnProvider
{
  component: string = 'TreeGridExFieldColumn';

  async createController(
    columnModel: IDETreeDEFColumn,
    grid: TreeGridExController,
  ): Promise<TreeGridExFieldColumnController> {
    const c = new TreeGridExFieldColumnController(columnModel, grid);
    await c.init();
    return c;
  }
}
