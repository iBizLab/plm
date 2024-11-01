import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { computed, defineComponent, PropType, VNode } from 'vue';
import { IDETree, IDETreeNode } from '@ibiz/model-core';
import { ITreeNodeData } from '@ibiz-template/runtime';
import { createUUID } from 'qx-util';
import { isArray, debounce } from 'lodash-es';
import './mob-tree-view-ex.scss';
import {
  IMobTreeViewExNodeData,
  MobTreeViewExController,
} from './mob-tree-view-ex.controller';
import { checkIcon, expandIcon, rightIcon } from './icon';

// 获取标识属性
const getIdAppDEFieldId = (nodeModel: IDETreeNode | undefined): string => {
  return nodeModel ? (nodeModel as IData).idAppDEFieldId : '';
};

// 获取文本属性
const getTextAppDEFieldId = (nodeModel: IDETreeNode | undefined): string => {
  return nodeModel ? (nodeModel as IData).textAppDEFieldId : '';
};

// 判断是否选中
const isCheck = (
  item: IMobTreeViewExNodeData,
  nodeModel: IDETreeNode | undefined,
  c: MobTreeViewExController,
): number => {
  const idAppDEFieldId = getIdAppDEFieldId(nodeModel);
  // 当前节点标识属性值
  const fieldKey = (item as IData)[idAppDEFieldId];
  return c.state.selectedData.findIndex((selected: IData) => {
    // 过滤属于回显值的数据
    if (!selected._nodeId) {
      // 树节点配置的标识属性不确定是那一个字段(id | user_id)
      return fieldKey === selected.srfkey;
    }

    const selectIdAppDEFieldId = getIdAppDEFieldId(
      c.getNodeModel(selected._nodeId),
    );

    // 选中数据的标识属性值
    const selectedKey = selected[selectIdAppDEFieldId];

    // 判断标识属性值是否相等或者选中的uuid是否相等
    return fieldKey === selectedKey || item._uuid === selected._uuid;
  });
};

export const MobTreeViewEx = defineComponent({
  name: 'IBizMobTreeViewEx',
  props: {
    modelData: { type: Object as PropType<IDETree>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: { type: Number, default: 2 },

    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: { type: Boolean, default: true },
  },
  setup() {
    const c: MobTreeViewExController =
      useControlController<MobTreeViewExController>(
        (...args) => new MobTreeViewExController(...args),
      );
    const ns = useNamespace(`mob-tree-view-ex`);

    // 默认选中项
    const checkedKeys = computed(() => {
      return c.state.selectedData.map(item => item.srfkey);
    });

    const uuid = createUUID();

    /** 树展示数据 */
    const treeData = computed(() => {
      if (!c.state.isLoaded) {
        return [];
      }
      return c.model.rootVisible
        ? c.state.rootNodes
        : c.state.rootNodes.reduce<ITreeNodeData[]>((result, nodeData) => {
            if (nodeData._children) {
              return result.concat(nodeData._children);
            }
            return result;
          }, []);
    });

    /**
     * 计算回显
     * @description 懒加载后将选中回显数据替换为节点数据
     */
    const calcSelectedData = (nodes: ITreeNodeData[]) => {
      nodes?.forEach((item2: ITreeNodeData) => {
        const nodeModel = c.getNodeModel(item2._nodeId);
        const index = isCheck(item2 as IMobTreeViewExNodeData, nodeModel, c);
        if (index !== -1) {
          c.state.selectedData.splice(index, 1, item2);
        }
      });
    };

    /**
     * 触发节点加载数据
     * @author zk
     * @date 2023-05-29 09:16:07
     * @param {IData} item
     */
    const loadData = async (item: IData): Promise<void> => {
      // 没加载前拦截
      if (!c.state.isLoaded) {
        return;
      }
      // 加载时拦截点击事件
      const nodeData = c.getNodeData(item?._uuid)!;
      // 有搜索值为搜索框搜索,必须请求后台数据过滤
      if (nodeData && nodeData._children && !c.state.query) {
        ibiz.log.debug('节点展开加载-本地', nodeData);
      } else {
        ibiz.log.debug('节点展开加载-远程', nodeData);
        ibiz.loading.showRedirect();
        const nodes = await c.loadNodes(nodeData);
        ibiz.loading.hideRedirect();
        if (nodes) {
          calcSelectedData(nodes);
        }
      }
    };

    // 判断该节点是否是禁用
    const isDisableSelect = (nodeModel: IDETreeNode | undefined): boolean => {
      return !!(nodeModel && nodeModel.disableSelect);
    };

    /**
     * 多选时选中节点变更
     *
     * @param {ITreeNodeData} nodeData
     */
    const onNodeCheck = (event: MouseEvent, opts: IData): void => {
      const { originData } = opts;
      c.onTreeNodeClick(originData, event);
    };

    /**
     * 树节点点击事件
     */
    const onNodeClick = (
      event: MouseEvent,
      item: IMobTreeViewExNodeData,
      nodeModel: IDETreeNode | undefined,
    ): void => {
      event.stopPropagation();
      if (isDisableSelect(nodeModel)) {
        return;
      }
      const idAppDEFieldId = getIdAppDEFieldId(nodeModel);
      const textAppDEFieldId = getTextAppDEFieldId(nodeModel);
      // 当前节点标识及文本属性值
      const fieldId = (item as IData)[idAppDEFieldId];
      const text = (item as IData)[textAppDEFieldId];
      // 判断抛值时有无回显指定字段值,没有时合并节点标识及文本属性值
      if (!(item as IData)[c.echoMap.valueField]) {
        Object.assign(item, { [c.echoMap.valueField]: fieldId });
      }
      if (!(item as IData)[c.echoMap.textField]) {
        Object.assign(item, { [c.echoMap.textField]: text });
      }

      c.onTreeNodeClick(item, event);
    };

    // 处理展开收起
    const onExpand = (
      event: MouseEvent,
      item: IMobTreeViewExNodeData,
    ): void => {
      event.stopPropagation();
      event.preventDefault();
      if (!item._defaultExpand) {
        loadData(item);
      }
      // eslint-disable-next-line no-param-reassign
      item._defaultExpand = !item._defaultExpand;
    };

    // 搜索
    const debounceSearch = debounce(async () => {
      await c.load();
    }, 500);

    const onInput = async (value: string): Promise<void> => {
      c.state.query = value;
      debounceSearch();
    };

    // 模拟onMounted生命周期，第一次load加载成功后适配顶级节点默认选中
    c.evt.on('onLoadSuccess', (): void => {
      c.handleDefaultSelect();
      calcSelectedData(treeData.value);
    });

    // 绘制无数据
    const renderNoData = (): VNode | undefined => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      if (!isLoaded) {
        return;
      }
      return (
        isLoaded && (
          <iBizNoData
            text={c.model.emptyText}
            emptyTextLanguageRes={c.model.emptyTextLanguageRes}
          ></iBizNoData>
        )
      );
    };

    // 绘制展开
    const renderExpand = (item: IMobTreeViewExNodeData): JSX.Element | null => {
      return (
        <div class={ns.e('expand')} onClick={e => onExpand(e, item)}>
          {item._defaultExpand ? expandIcon() : rightIcon()}
        </div>
      );
    };

    // 绘制节点项
    const renderNodeItem = (
      item: IMobTreeViewExNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element => {
      const isShowCheck = isCheck(item, nodeModel, c) !== -1;
      return (
        <div
          class={[ns.e('node-item'), ns.is('check', isShowCheck)]}
          onClick={e => onNodeClick(e, item, nodeModel)}
        >
          {item._icon && (
            <span class={ns.em('node-item', 'icon')}>
              <iBizIcon icon={item._icon} />
            </span>
          )}
          <span class={ns.em('node-item', 'text')}>{item._text}</span>
          {isShowCheck && (
            <span class={ns.em('node-item', 'check-icon')}>{checkIcon()}</span>
          )}
        </div>
      );
    };

    // 绘制树节点
    const renderNode = (
      item: IMobTreeViewExNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element => {
      return (
        <div class={[ns.e('node')]}>{renderNodeItem(item, nodeModel)}</div>
      );
    };

    // 绘制节点内容
    const renderNodeContent = (item: IMobTreeViewExNodeData): JSX.Element => {
      const nodeModel = c.getNodeModel(item._nodeId);
      if (!item._leaf) {
        const isChildren = item._children && item._children.length > 0;
        const groupTitle = (
          <div
            class={[
              ns.em('group', 'title'),
              ns.is('no-children', !isChildren && isArray(item._children)),
            ]}
          >
            {!item._leaf && renderExpand(item)}
            {renderNodeItem(item, nodeModel)}
          </div>
        );
        if (!item._defaultExpand || !isChildren) {
          return groupTitle;
        }
        return (
          <div class={ns.e('group')}>
            {groupTitle}
            <div class={ns.em('group', 'content')}>
              {item._children?.map((item2: IData) => {
                return renderNodeContent(item2 as IMobTreeViewExNodeData);
              })}
            </div>
          </div>
        );
      }
      return renderNode(item, nodeModel);
    };

    // 绘制树
    const renderTree = (items: IMobTreeViewExNodeData[]): JSX.Element => {
      const isReserveSeat = items.some(
        (item: IMobTreeViewExNodeData) => !item._leaf,
      );
      return (
        <div class={[ns.e('tree'), ns.is('reserve-seat', isReserveSeat)]}>
          {items!.map((item2: IData) => {
            return renderNodeContent(item2 as IMobTreeViewExNodeData);
          })}
        </div>
      );
    };

    return {
      c,
      ns,
      treeData,
      checkedKeys,
      uuid,
      onNodeCheck,
      onNodeClick,
      onInput,
      loadData,
      renderTree,
      renderNoData,
    };
  },
  render() {
    const slots: IData = {
      searchbar: () => {
        if (!this.c.enableQuickSearch) {
          return null;
        }
        return (
          <van-search
            modelValue={this.c.state.query}
            class={this.ns.b('quick-search')}
            clearable={true}
            placeholder={this.c.state.placeHolder}
            onUpdate:model-value={this.onInput}
          ></van-search>
        );
      },
    };
    const key = this.c.controlPanel ? 'tree' : 'default';
    slots[key] = (): JSX.Element | VNode | undefined => {
      if (this.treeData.length === 0) {
        return this.renderNoData();
      }
      return this.renderTree(
        this.treeData as unknown as IMobTreeViewExNodeData[],
      );
    };
    return (
      <iBizControlBase class={this.ns.b('content')} controller={this.c}>
        {slots}
      </iBizControlBase>
    );
  },
});

export default MobTreeViewEx;
