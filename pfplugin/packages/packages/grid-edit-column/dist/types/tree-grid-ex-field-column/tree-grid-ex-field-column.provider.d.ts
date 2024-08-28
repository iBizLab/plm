import { TreeGridExController, TreeGridExFieldColumnController, ITreeGridExColumnProvider } from '@ibiz-template/runtime';
import { IDETreeDEFColumn } from '@ibiz/model-core';
/**
 * 树表格（增强）属性编辑列适配器
 *
 * @export
 * @class TreeGridExFieldEditColumnProvider
 * @implements {ITreeGridExColumnProvider}
 */
export declare class TreeGridExFieldEditColumnProvider implements ITreeGridExColumnProvider {
    component: string;
    createController(columnModel: IDETreeDEFColumn, grid: TreeGridExController): Promise<TreeGridExFieldColumnController>;
}
