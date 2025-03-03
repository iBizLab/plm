/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RuntimeError } from '@ibiz-template/core';
import {
  IControlProvider,
  ITreeController,
  ITreeNodeData,
  TreeController,
} from '@ibiz-template/runtime';
import { IDETree } from '@ibiz/model-core';
import { ElTree } from 'element-plus';
import { createUUID } from 'qx-util';
import { NodeDropType } from 'element-plus/es/components/tree/src/tree.type';
import { cloneDeep, debounce } from 'lodash-es';
import { Ref, watch } from 'vue';

/**
 * 树props接口
 *
 * @export
 * @interface IGridProps
 */
export interface ITreeProps {
  // 模型
  modelData: IDETree;
  // 上下文
  context: IContext;
  // 视图参数
  params: IParams;
  // 适配器
  provider?: IControlProvider;
  // 部件行数据默认激活模式
  mdctrlActiveMode?: number;
  // 是否单选
  singleSelect?: boolean;
  // 是否是导航的
  navigational?: boolean;
  // 默认展开节点
  defaultExpandedKeys?: string[];
  // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法
  checkStrictly?: boolean;
  // 是否是本地数据模式
  isSimple?: boolean;
  // 本地数据模式data
  data?: Array<ITreeNodeData>;
  // 默认加载
  loadDefault: boolean;
}

/**
 * 根据id查找树节点数据对象
 * @author lxm
 * @date 2023-09-28 03:45:35
 * @export
 * @param {string} key (数据的_uuid 或者 _id)
 * @param {ITreeController} c
 * @return {*}  {(ITreeNodeData | undefined)}
 */
export function findNodeData(
  key: string,
  c: ITreeController,
): ITreeNodeData | undefined {
  const find = c.state.items.find(item => item._id === key);
  if (find) {
    return find;
  }
  return c.state.items.find(item => item._uuid === key);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useElTreeUtil(
  treeRef: Ref<InstanceType<typeof ElTree> | null>,
  c: ITreeController,
) {
  const getTreeInstance = () => {
    const elTree = treeRef.value;
    if (!elTree) {
      throw new RuntimeError(ibiz.i18n.t('control.tree.noFoundInstance'));
    }
    return elTree;
  };

  const _updateUI = () => {
    const elTree = treeRef.value;
    if (!elTree) {
      setTimeout(() => {
        _updateUI();
      }, 200);
      return;
    }
    // 设置节点展开
    Object.values(elTree.store.nodesMap).forEach(node => {
      const shouldExpanded = c.state.expandedKeys.includes(node.data._id);
      if (shouldExpanded !== node.expanded) {
        if (shouldExpanded) {
          node.expand();
        } else {
          node.collapse();
        }
      }
    });
    // 设置选中状态。
    if (c.state.singleSelect) {
      treeRef.value!.setCurrentKey(c.state.selectedData[0]?._id || undefined);
    } else {
      // el-tree，会把没选中的反选，且不触发check事件
      elTree.setCheckedKeys(c.state.selectedData.map(item => item._id));
    }
  };

  /**
   * 更新树的UI状态，如选中状态和展开状态。
   * 在树组件的loadData和调用updateKeyChildren之后去更新
   * 加了防抖，所以尽可能多的调用，确保状态 todo
   * @author lxm
   * @date 2023-09-28 03:36:44
   */
  const updateUI = debounce(_updateUI, 500) as typeof _updateUI;

  /**
   * 切换节点的展开
   * @author lxm
   * @date 2023-11-08 03:57:27
   * @param {string} id
   */
  const triggerNodeExpand = (id: string): boolean | undefined => {
    const elTree = getTreeInstance();
    const target = elTree.store.nodesMap[id];
    if (target) {
      if (target.expanded) {
        target.collapse();
        return false;
      }
      target.expand();
      return true;
    }
  };

  return { getTreeInstance, updateUI, triggerNodeExpand };
}

/**
 * 格式化dropType
 * @author lxm
 * @date 2023-12-14 02:13:10
 * @export
 * @param {NodeDropType} dropType
 * @return {*}  {('inner' | 'prev' | 'next')}
 */
export function formatNodeDropType(
  dropType: NodeDropType,
): 'inner' | 'prev' | 'next' {
  switch (dropType) {
    case 'inner':
      return 'inner';
    case 'before':
      return 'prev';
    case 'after':
      return 'next';
    default:
      throw new RuntimeError(
        ibiz.i18n.t('control.tree.noSupported', { dropType }),
      );
  }
}

/**
 * 初始化树数据
 *
 * @export
 * @param {TreeController} c
 * @param {ITreeProps} props
 */
export function useAppTreeBase(c: TreeController, props: ITreeProps): void {
  // 设置默认展开
  if (props.defaultExpandedKeys) {
    c.state.defaultExpandedKeys = props.defaultExpandedKeys;
  }

  // 初始化数据
  const initSimpleData = (): void => {
    if (!props.data) {
      return;
    }
    const root = props.data.find((item: ITreeNodeData) => {
      return (item as IData).isRoot === true;
    });
    if (root) {
      c.state.rootNodes = props.data;
      c.state.items = props.data;
    }
  };

  c.evt.on('onCreated', async () => {
    if (props.isSimple) {
      initSimpleData();
      c.state.isLoaded = true;
    }
  });

  watch(
    () => props.data,
    () => {
      if (props.isSimple) {
        initSimpleData();
      }
    },
    {
      deep: true,
    },
  );
}

/**
 * 根据关系获取当前项的子节点
 *
 * @export
 * @param {TreeController} c
 * @param {IData} modelData
 * @param {IData} curItem
 */
export function findChildItems(
  c: TreeController,
  modelData: IData,
  curItem: IData,
): IData[] {
  const { detreeNodeRSs } = modelData;
  const children: IData[] = [];
  if (!detreeNodeRSs || detreeNodeRSs.length === 0) {
    return children;
  }
  const rss = detreeNodeRSs.filter((_rss: IData) => {
    const temp = c.state.items.find((_item: IData) => {
      return _item._uuid === curItem.data._uuid;
    });

    if (temp) {
      return _rss.parentDETreeNodeId === temp._nodeId?.toLowerCase();
    }
    return false;
  });
  rss.sort((a: IData, b: IData) => {
    return a.ordervalue - b.ordervalue;
  });
  rss.forEach((_rss: IData) => {
    const child = c.state.items.find((_item: IData) => {
      return _item._nodeId?.toLowerCase() === _rss.childDETreeNodeId;
    });
    if (child) {
      const temp = cloneDeep(child);
      temp._id = createUUID();
      children.push(temp);
    }
  });
  return children;
}

/**
 * 判断字符串是否同时存在英文和中文
 * @param str
 * @returns
 */
export const hasChineseAndEnglish = (str: string): boolean => {
  const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
  return regex.test(str);
};

/**
 * 判断是不是汉字
 * @param char
 * @returns
 */
export const isChineseCharacter = (char: string): boolean => {
  return /[\u4E00-\u9FA5]/.test(char);
};

/**
 *  获取主题色
 * @returns
 */
export const getThemeVar = (): string | null => {
  const root = document.documentElement;
  if (!root) {
    return null;
  }
  const style = getComputedStyle(root);

  const primary = style.getPropertyValue('--ibiz-color-primary');
  return primary;
};

/**
 * 绘制文本标志头
 * @param text
 * @returns
 */
export const renderTextPhoto = (text: string): string | undefined => {
  if (text && text.toString().length < 2) {
    return text;
  }
  if (text && text.toString().length >= 2) {
    // 大于两个字符
    const tag = hasChineseAndEnglish(text);
    // 存在中英文混合情况，按顺序取第一个英文与第一个中文
    if (tag) {
      const engChar: string =
        text.split('').find((char: string) => {
          return /[a-zA-Z]/.test(char);
        }) || '';
      const chineseStr: string =
        text.split('').find((char: string) => {
          return /[\u4E00-\u9FA5]/.test(char);
        }) || '';
      return `${engChar}${chineseStr}`.toLowerCase();
    }
    // 只存在英文，取前两个
    const engTag = /[a-zA-Z]/.test(text);
    if (engTag) {
      return text
        .split('')
        .filter((char: string) => {
          return /[a-zA-Z]/.test(char);
        })
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    // 只存在中文，取最后两个
    const chineseTag = /[\u4E00-\u9FA5]/.test(text);
    if (chineseTag) {
      return text
        .split('')
        .filter((char: string) => {
          return /[\u4E00-\u9FA5]/.test(char);
        })
        .slice(-2)
        .join('');
    }
    return text.replaceAll(' ', '').substring(0, 2);
  }
};

/**
 * 字符串转16进制颜色
 * @param text
 * @returns
 */
export const stringToHexColor = (text: string): string => {
  if (!text) return '';
  // 计算字符串的哈希值
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    if (isChineseCharacter(text)) {
      // eslint-disable-next-line no-bitwise
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
      // eslint-disable-next-line operator-assignment, no-bitwise
      hash = hash & hash;
    } else {
      const charCode = text.charCodeAt(i);
      hash += charCode.toString(16) as unknown as number;
    }
  }

  // 将哈希值转换为16进制颜色代码
  const trimmedHash = String(hash).substring(0, 6);

  let r = parseInt(trimmedHash.substring(0, 2), 16);
  let g = parseInt(trimmedHash.substring(2, 4), 16);
  let b = parseInt(trimmedHash.substring(4, 6), 16);
  if (r < 0) {
    r = 10;
  }
  if (g < 0) {
    g = 10;
  }
  if (b < 0) {
    b = 10;
  }

  const colorCode = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  if (colorCode === '#FFFFFF') {
    return getThemeVar() || colorCode;
  }
  return colorCode;
};
