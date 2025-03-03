import {
  AppDataEntity,
  ITreeNodeData,
  TreeDataSetNodeData,
  TreeFetchOpts,
  TreeService,
} from '@ibiz-template/runtime';
import { IDETree, IDETreeDataSetNode, IDETreeNodeRS } from '@ibiz/model-core';
/**
 * 跟踪树表格部件服务
 * @export
 * @class TrackTreeGridService
 * @extends {TreeService<IDETree>}
 */
export class TrackTreeGridService<
  T extends IDETree = IDETree,
> extends TreeService<T> {
  /**
   * 获取实体数据集数据
   *
   * @protected
   * @param {TreeNodeRSModel} nodeRS
   * @param {TreeFetchOpts} opts
   * @returns {*}
   * @memberof TreeService
   */
  protected async getDENodeDatas(
    nodeModel: IDETreeDataSetNode,
    nodeRS: IDETreeNodeRS | undefined,
    parentNodeData: ITreeNodeData | undefined,
    opts: TreeFetchOpts,
  ): Promise<TreeDataSetNodeData[]> {
    const { appDEDataSetId, appDataEntityId, appId } = nodeModel;

    // 处理查询参数,没有关系的时候不处理参数了
    const { context, params, navContext, navParams } = nodeRS
      ? this.getNodeRSFilterParams(nodeRS, parentNodeData, opts)
      : {
          context: opts.context,
          params: opts.params,
          navContext: {},
          navParams: {},
        };

    // 设置查询长度
    params.size = nodeModel.maxSize || 1000;
    // 排序属性
    if (nodeModel.sortAppDEFieldId) {
      Object.assign(params, {
        sort: `${nodeModel.sortAppDEFieldId.toLowerCase()},${
          nodeModel.sortDir ? nodeModel.sortDir.toLowerCase() : 'asc'
        }`,
      });
    }
    // 更正应用标识(适配多应用树合并)
    context.srfappid = appId;
    let resData;
    if (
      (nodeModel as IParams).userTag === 'CUSTOM' &&
      nodeModel.treeNodeType === 'DE'
    ) {
      const entityModel = await ibiz.hub.getAppDataEntity(
        appDataEntityId!,
        appId,
      );
      if (entityModel) {
        resData =
          parentNodeData && parentNodeData._deData
            ? parentNodeData._deData[`${nodeModel.id}`].content || []
            : [];
        resData = resData.map((item: IData) => {
          return new AppDataEntity(entityModel, item);
        });
      }
    } else {
      // 请求实体数据
      const response = await this.app.deService.exec(
        appDataEntityId!,
        appDEDataSetId!,
        context,
        params,
      );
      resData = response.data;
    }

    if (resData && resData.length > 0) {
      const nodeDatas = resData.map((item: IData, index: number) => {
        const defaultExpand = this.calcExpand(nodeModel, index);
        return new TreeDataSetNodeData(nodeModel, parentNodeData, {
          data: item,
          leaf: !!opts.leaf,
          navContext,
          navParams,
          defaultExpand,
        });
      });
      return nodeDatas;
    }
    return [];
  }
}
