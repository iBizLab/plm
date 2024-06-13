/* eslint-disable no-param-reassign */
import { ModelError } from '@ibiz-template/core';
import {
  GanttService,
  IGanttNodeData,
  TreeFetchOpts,
  getChildNodeRSs,
} from '@ibiz-template/runtime';
import {
  IDETreeCodeListNode,
  IDETreeDataSetNode,
  IDETreeNode,
  IDETreeNodeRS,
} from '@ibiz/model-core';

interface ResourceGanttFetchOpts extends TreeFetchOpts {
  /**
   * 分组属性
   *
   * @type {string}
   * @memberof ResourceGanttFetchOpts
   */
  groupField: string;
}

/**
 * 资源甘特图服务
 *
 * @author tony001
 * @date 2023-12-11 16:12:57
 * @export
 * @class GanttService
 * @extends {TreeService}
 */
export class ResourceGanttService extends GanttService {
  /**
   * 通过节点类型加载节点数据
   *
   * @author tony001
   * @date 2023-12-11 18:12:35
   * @protected
   * @param {IDETreeNode} nodeModel
   * @param {(IDETreeNodeRS | undefined)} nodeRS
   * @param {(ITreeNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {Promise<IGanttNodeData[]>}
   */
  protected async fetchNodeDatasByType(
    nodeModel: IDETreeNode,
    nodeRS: IDETreeNodeRS | undefined,
    parentNodeData: IGanttNodeData | undefined,
    opts: ResourceGanttFetchOpts,
  ): Promise<IGanttNodeData[]> {
    // 有没有下级
    const leaf =
      getChildNodeRSs(this.model, {
        parentId: nodeModel.id,
        hasQuery: opts.hasQuery,
      }).length === 0;
    const tempOpts = { ...opts, leaf };

    // 根据类型查询节点数据
    let result: IGanttNodeData[] = [];
    // 根节点且不显示根时，直接获取静态根节点数据
    if (!parentNodeData && !this.model.rootVisible) {
      const nodeData = await this.getStaticGanttNodeData(
        nodeModel,
        nodeRS,
        parentNodeData,
        tempOpts,
      );
      result = [nodeData];
    } else {
      switch (nodeModel.treeNodeType) {
        case 'STATIC':
          {
            const nodeData = await this.getStaticGanttNodeData(
              nodeModel,
              nodeRS,
              parentNodeData,
              tempOpts,
            );
            result = [nodeData];
          }
          break;
        case 'DE':
          result = await this.getDEGanttNodeDatas(
            nodeModel as IDETreeDataSetNode,
            nodeRS,
            parentNodeData,
            tempOpts,
          );
          break;
        case 'CODELIST':
          result = await this.getCodeListGanttNodeDatas(
            nodeModel as IDETreeCodeListNode,
            nodeRS,
            parentNodeData,
            tempOpts,
          );
          break;
        default:
          throw new ModelError(
            nodeModel,
            ibiz.i18n.t('runtime.controller.control.gantt.noSupport', {
              treeNodeType: nodeModel.treeNodeType,
            }),
          );
      }
    }
    // *查询回来之后,如果有子节点，看默认展开相关配置有时每个节点数据走一遍展开逻辑
    const { expandFirstOnly, expanded, rootNode } = nodeModel;
    const isExpandedRoot = rootNode && !this.model.rootVisible; // root节点不显示的时候默认展开其子节点
    if (!leaf) {
      await Promise.all(
        result.map(async (childNode, index) => {
          if (
            (expanded && // 全展开合只展开首节点expanded都为true
              (!expandFirstOnly || (expandFirstOnly && index === 0))) ||
            isExpandedRoot
          ) {
            const subChildrenNodes = await this.fetchChildNodes(
              childNode,
              opts,
            );
            childNode._children = subChildrenNodes;
          }
        }),
      );
    }

    // TODO 适配甘特底包（滑块没有结束时间，结束时间时会默认赋值为当天 滑块没有开始时间，滑块默认不显示）
    result?.forEach((item: IData) => {
      if (!item._beginDataItemValue) {
        item._beginDataItemValue = item._endDataItemValue;
      }
      if (!item._endDataItemValue) {
        item._endDataItemValue = item._beginDataItemValue;
      }
    });

    // 分组排序
    result = this.groupSort(result || [], opts.groupField) as IGanttNodeData[];
    return result;
  }

  /**
   * 获取子节点数据
   *
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {(Promise<IGanttNodeData[] | undefined>)}
   */
  async fetchChildNodes(
    parentNodeData: IGanttNodeData | undefined,
    opts: ResourceGanttFetchOpts,
  ): Promise<IGanttNodeData[] | undefined> {
    return super.fetchChildNodes(parentNodeData, opts);
  }

  /**
   * 分组排序
   *
   * @param {(IGanttNodeData[] | undefined)} parentNodeData
   * @param {string} groupField
   */
  groupSort(nodes: IGanttNodeData[], groupField: string): IGanttNodeData[] {
    // 使用字典来记录project_id第一次出现的顺序
    const projectOrder = {} as IData;
    let order = 0;

    nodes.forEach((item: IGanttNodeData) => {
      const projectId =
        item._deData && item._deData[groupField]
          ? item._deData[groupField]
          : '';
      if (!(projectId in projectOrder)) {
        projectOrder[projectId] = order;
        order += 1;
      }
    });

    // 按照project_id第一次出现的顺序进行排序
    nodes.sort((a: IData, b: IData) => {
      const orderA =
        a._deData && a._deData[groupField]
          ? projectOrder[a._deData[groupField]]
          : -1;
      const orderB =
        b._deData && b._deData[groupField]
          ? projectOrder[b._deData[groupField]]
          : -1;
      return orderA - orderB;
    });

    return nodes;
  }
}
