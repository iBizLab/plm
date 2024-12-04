/* eslint-disable no-param-reassign */
import { ModelError } from '@ibiz-template/core';
import {
  GanttDataSetNodeData,
  GanttService,
  IGanttNodeData,
  TreeFetchOpts,
  getChildNodeRSs,
  getRootNode,
  getTreeNode,
  handleAllSettled,
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
      // 判断是否为顶级节点
      if (parentNodeData && !parentNodeData._parent) {
        result = await Promise.all(result);
        const allChildrenNodes = await this.fetchAllChildNodes(result, opts);
        result.forEach(async childNode => {
          const subChildrenNodes = await this.fetchCustomChildNodes(
            childNode,
            opts,
            allChildrenNodes || [],
          );
          childNode._children = subChildrenNodes;
        });
      } else {
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
    }

    // TODO 适配甘特底包（滑块没有结束时间，结束时间时会默认赋值为当天 滑块没有开始时间，滑块默认不显示）
    result?.forEach((item: IData) => {
      if (!item._beginDataItemValue) {
        item._beginDataItemValue = item._endDataItemValue;
      }
      if (!item._endDataItemValue) {
        item._endDataItemValue = item._beginDataItemValue;
      }
      if (item._endDataItemValue) {
        item._endDataItemValue = `${item._endDataItemValue} 23:59:59`;
      }
    });

    // 分组排序
    result = this.groupSort(result || [], opts.groupField) as IGanttNodeData[];
    return result;
  }

  /**
   * 获取自定义
   *
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @param {(IGanttNodeData[])} allChildrenNodes
   */
  fetchCustomChildNodes(
    parentNodeData: IGanttNodeData | undefined,
    opts: ResourceGanttFetchOpts,
    allChildrenNodes: IGanttNodeData[],
  ): IGanttNodeData[] {
    let childrenNodes: IGanttNodeData[] = [];
    if (parentNodeData && allChildrenNodes.length > 0) {
      const { hasQuery } = opts;
      const childNodeRSs = getChildNodeRSs(this.model, {
        parentId: parentNodeData._nodeId,
        hasQuery,
      });
      const nodeRS = childNodeRSs[0];
      const { parentFilter } = nodeRS || {};
      allChildrenNodes.forEach((childNode: IGanttNodeData) => {
        if (
          parentFilter &&
          childNode._deData &&
          parentNodeData._value === childNode._deData[parentFilter]
        ) {
          childNode._parent = parentNodeData;
          childrenNodes.push(childNode);
        }
      });
    }
    // TODO 适配甘特底包（滑块没有结束时间，结束时间时会默认赋值为当天 滑块没有开始时间，滑块默认不显示）
    childrenNodes?.forEach((item: IData) => {
      if (!item._beginDataItemValue) {
        item._beginDataItemValue = item._endDataItemValue;
      }
      if (!item._endDataItemValue) {
        item._endDataItemValue = item._beginDataItemValue;
      }
      if (item._endDataItemValue) {
        item._endDataItemValue = `${item._endDataItemValue} 23:59:59`;
      }
    });

    // 分组排序
    childrenNodes = this.groupSort(
      childrenNodes || [],
      opts.groupField,
    ) as IGanttNodeData[];
    return childrenNodes;
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
    const { hasQuery } = opts;

    let childrenNodes: IGanttNodeData[] = [];
    if (!parentNodeData) {
      // 没有父节点的加载根节点数据
      const rootNode = getRootNode(this.model);
      childrenNodes = await this.fetchNodeDatasByType(
        rootNode,
        undefined,
        undefined,
        opts,
      );
    } else {
      // 有父节点的计算节点关系查询对应节点数据并合并
      const childNodeRSs = getChildNodeRSs(this.model, {
        parentId: parentNodeData._nodeId,
        hasQuery,
      });

      if (childNodeRSs.length === 0) {
        return;
      }
      const results = await handleAllSettled(
        childNodeRSs.map(async childNodeRS => {
          const childNode = getTreeNode(
            this.model,
            childNodeRS.childDETreeNodeId!,
          );
          return this.fetchNodeDatasByType(
            childNode,
            childNodeRS,
            parentNodeData,
            opts,
          );
        }),
        false,
      );

      // 判断关系节点是否为根节点

      results.forEach(result => {
        childrenNodes.push(...result);
      });
    }
    return childrenNodes;
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

  /**
   * 获取过滤项集合
   *
   * @param {(IGanttNodeData[])} parentNodeDatas
   */

  getFilterNodes(parentNodeDatas: IGanttNodeData[]): string {
    const navFilters: string[] = [];
    parentNodeDatas.forEach((nodeData: IGanttNodeData) => {
      if (nodeData._value) {
        navFilters.push(nodeData._value);
      }
    });
    return navFilters.join(',');
  }

  /**
   * 获取所有子节点数据
   *
   * @param {(IGanttNodeData[])} parentNodeDatas
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {(Promise<IGanttNodeData[] | undefined>)}
   */
  async fetchAllChildNodes(
    parentNodeDatas: IGanttNodeData[],
    opts: ResourceGanttFetchOpts,
  ): Promise<IGanttNodeData[] | undefined> {
    const { hasQuery } = opts;

    const childrenNodes: IGanttNodeData[] = [];

    const nodeData = { ...parentNodeDatas[0] };

    // 有父节点的计算节点关系查询对应节点数据并合并
    const childNodeRSs = getChildNodeRSs(this.model, {
      parentId: nodeData._nodeId,
      hasQuery,
    });

    if (childNodeRSs.length === 0) {
      return;
    }
    const results = await handleAllSettled(
      childNodeRSs.map(async childNodeRS => {
        const childNode = getTreeNode(
          this.model,
          childNodeRS.childDETreeNodeId!,
        );
        if (childNodeRS.parentFilter) {
          Object.assign(nodeData, {
            _value: this.getFilterNodes(parentNodeDatas),
          });
        }
        const leaf =
          getChildNodeRSs(this.model, {
            parentId: childNode.id,
            hasQuery: opts.hasQuery,
          }).length === 0;
        const tempOpts = { ...opts, leaf };

        return this.getCustomDEGanttNodeDatas(
          childNode,
          childNodeRS,
          nodeData,
          tempOpts,
        );
      }),
      false,
    );
    results.forEach(result => {
      childrenNodes.push(...result);
    });
    return childrenNodes;
  }

  /**
   * 获取实体数据集数据
   *
   * @protected
   * @param {IDETreeDataSetNode} nodeModel
   * @param {(IDETreeNodeRS | undefined)} nodeRS
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {TreeFetchOpts} opts
   * @return {*}  {Promise<IGanttNodeData[]>}
   */
  protected async getCustomDEGanttNodeDatas(
    nodeModel: IDETreeDataSetNode,
    nodeRS: IDETreeNodeRS | undefined,
    parentNodeData: IGanttNodeData | undefined,
    opts: TreeFetchOpts,
  ): Promise<IGanttNodeData[]> {
    const { appDEDataSetId, appDataEntityId } = nodeModel;

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

    // 查询所有子节点
    const navFilter = nodeRS ? nodeRS.parentFilter : '';
    if (navFilter && params[`n_${navFilter.toLowerCase()}_eq`]) {
      // 导航相关参数处理
      Object.assign(params, {
        [`n_${navFilter.toLowerCase()}_in`]:
          params[`n_${navFilter.toLowerCase()}_eq`],
      });
      delete params[`n_${navFilter.toLowerCase()}_eq`];
    }

    // 请求实体数据
    const response = await this.app.deService.exec(
      appDataEntityId!,
      appDEDataSetId!,
      context,
      params,
    );
    if (response.data.length) {
      const nodeDatas = response.data.map((item: IData, index: number) => {
        const defaultExpand = this.calcExpand(nodeModel, index);
        return new GanttDataSetNodeData(this.model, nodeModel, parentNodeData, {
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
