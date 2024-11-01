import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { computed, defineComponent, PropType, ref, VNode } from 'vue';
import { IDETree, IDETreeNode } from '@ibiz/model-core';
import { CodeListItem, ITreeNodeData } from '@ibiz-template/runtime';
import { createUUID } from 'qx-util';
import { isArray, debounce } from 'lodash-es';
import { Avatar } from './avatar/avatar';
import './mob-personal-picker-tree.scss';
import {
  IMobPersonalPickerTreeNodeData,
  MobPersonalPickerTreeController,
} from './mob-personal-picker-tree.controller';
import { expandIcon, rightIcon, checkIcon, groupIcon, nodeIcon } from './icon';

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
  item: IMobPersonalPickerTreeNodeData,
  nodeModel: IDETreeNode | undefined,
  c: MobPersonalPickerTreeController,
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

export const MobPersonalPickerTree = defineComponent({
  name: 'IBizMobPersonalPickerTree',
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
    const c: MobPersonalPickerTreeController =
      useControlController<MobPersonalPickerTreeController>(
        (...args) => new MobPersonalPickerTreeController(...args),
      );
    const ns = useNamespace(`mob-personal-picker-tree`);

    // 绑定的搜索值
    const searchValue = ref('');

    const currentPage = ref(0);

    // 默认选中项
    const checkedKeys = computed(() => {
      return c.state.selectedData.map(item => item.srfkey);
    });

    const uuid = createUUID();

    // 节点单击

    /** 树展示数据 */
    const treeData = computed(() => {
      if (!c.state.isLoaded) {
        return [];
      }
      return c.state.rootNodes.reduce<ITreeNodeData[]>((result, nodeData) => {
        if (nodeData._children) {
          return result.concat(nodeData._children);
        }
        return result;
      }, []);
    });

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
      const nodeData = c.getNodeData(item._uuid)!;
      // 有搜索值为搜索框搜索,必须请求后台数据过滤
      if (nodeData && nodeData._children && !c.state.query) {
        ibiz.log.debug('节点展开加载-本地', nodeData);
      } else {
        ibiz.log.debug('节点展开加载-远程', nodeData);
        ibiz.loading.showRedirect();
        const nodes = await c.loadNodes(nodeData);
        ibiz.loading.hideRedirect();
        // 懒加载后将选中回显数据替换为节点数据
        if (nodes) {
          nodes.forEach((item2: ITreeNodeData) => {
            const nodeModel = c.getNodeModel(item2._nodeId);
            const index = isCheck(
              item2 as IMobPersonalPickerTreeNodeData,
              nodeModel,
              c,
            );
            if (index !== -1) {
              c.state.selectedData.splice(index, 1, item2);
            }
          });
        }
      }
    };

    // 搜索
    const debounceSearch = debounce(async () => {
      await c.load();
    }, 500);
    const onInput = async (value: string): Promise<void> => {
      searchValue.value = value;
      c.state.query = value;
      // 只需要适配成员搜索
      const activated = treeData.value[0];
      (c.state as IParams).mobExpandedKey = activated._uuid || '';
      debounceSearch();
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
      item: IMobPersonalPickerTreeNodeData,
      nodeModel: IDETreeNode | undefined,
    ): void => {
      event.stopPropagation();
      if (!item._leaf || isDisableSelect(nodeModel)) {
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
      item: IMobPersonalPickerTreeNodeData,
    ): void => {
      event.stopPropagation();
      event.preventDefault();
      if (!item._defaultExpand) {
        loadData(item);
      }
      // eslint-disable-next-line no-param-reassign
      item._defaultExpand = !item._defaultExpand;
    };

    // 模拟onMounted生命周期，第一次load加载成功后适配顶级节点默认选中
    c.evt.on('onLoadSuccess', async (): Promise<void> => {
      c.handleDefaultSelect();
      let index: number = treeData.value.findIndex((item: ITreeNodeData) => {
        const nodeModel = c.getNodeModel(item._nodeId);
        // 配置启用选择后可控制初始化时默认选中项
        return nodeModel && nodeModel.enableCheck && nodeModel.selected;
      });
      index = index === -1 ? 0 : index;
      currentPage.value = index;
      const activated = treeData.value[index];
      if (!activated) return;
      await loadData(activated);
    });

    // 切换
    const onTabChange = (index: number): void => {
      c.state.query = index === 0 ? searchValue.value : '';
      const activated = treeData.value[index];
      (c.state as IParams).mobExpandedKey = '';
      loadData(activated);
    };

    // 获取人员头像icon
    const getUsrAvatar = (item: CodeListItem): undefined | string => {
      if (item && item.data?.iconurl) {
        return item.data.iconurl;
      }
    };

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

    // 绘制人员头像
    const renderUserAvatar = (
      item: IMobPersonalPickerTreeNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element | string => {
      let userImg = '';
      const idAppDEFieldId = getIdAppDEFieldId(nodeModel);
      // 当前节点标识属性值
      const userId = (item as IData)[idAppDEFieldId];
      if (userId) {
        const userItem = c.operatorMap.get(userId);
        const avatar = getUsrAvatar(userItem);
        if (avatar) {
          const icon = JSON.parse(avatar!);
          const { downloadUrl } = c.urls;
          const avatarUrl = downloadUrl.replace('%fileId%', icon[0].id);
          userImg = avatarUrl || '';
        }
      }
      return (
        <Avatar
          class={ns.e('avatar')}
          label={item.srfmajortext || ''}
          img={userImg}
        />
      );
    };

    // 绘制展开
    const renderExpand = (
      item: IMobPersonalPickerTreeNodeData,
    ): JSX.Element | null => {
      if (item._children && item._children.length === 0) {
        return null;
      }
      return (
        <div class={ns.e('expand')} onClick={e => onExpand(e, item)}>
          {item._defaultExpand ? expandIcon() : rightIcon()}
        </div>
      );
    };

    // 计算图片下载路径
    const calcDownloadUrl = (val: string): string => {
      let url = '';
      const regex = /^\[\{(?=.*"name":)(?=.*"id":).*\}\]$/;
      if (regex.test(val)) {
        const icon = JSON.parse(val);
        const downloadUrl = c.urls.downloadUrl || '';
        url = downloadUrl.replace('%fileId%', icon[0].id);
      }
      return url;
    };

    // 绘制节点图标
    const renderNodeIcon = (
      item: IMobPersonalPickerTreeNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element | string => {
      if (item._leaf && !isDisableSelect(nodeModel)) {
        return renderUserAvatar(item, nodeModel);
      }
      const defaultIcon: JSX.Element = item._leaf ? nodeIcon() : groupIcon();
      if (!item._icon) {
        return defaultIcon;
      }
      const icon: IData = { ...item._icon! };
      if (icon.imagePath) {
        const url = calcDownloadUrl(icon.imagePath);
        return <img class={ns.e('img')} src={url}></img>;
      }

      return <iBizIcon icon={icon} />;
    };

    // 绘制节点项
    const renderNodeItem = (
      item: IMobPersonalPickerTreeNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element => {
      return (
        <div class={ns.e('node-item')}>
          <span class={ns.em('node-item', 'icon')}>
            {renderNodeIcon(item, nodeModel)}
          </span>
          <span class={ns.em('node-item', 'text')}>{item._text}</span>
        </div>
      );
    };

    // 绘制树节点
    const renderNode = (
      item: IMobPersonalPickerTreeNodeData,
      nodeModel: IDETreeNode | undefined,
    ): JSX.Element => {
      const isShowCheck = item._leaf && isCheck(item, nodeModel, c) !== -1;
      return (
        <div
          class={[ns.e('node'), ns.is('check', isShowCheck)]}
          onClick={e => onNodeClick(e, item, nodeModel)}
        >
          {renderNodeItem(item, nodeModel)}
          {isShowCheck && checkIcon()}
        </div>
      );
    };

    // 绘制节点内容
    const renderNodeContent = (
      item: IMobPersonalPickerTreeNodeData,
    ): JSX.Element => {
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
                return renderNodeContent(
                  item2 as IMobPersonalPickerTreeNodeData,
                );
              })}
            </div>
          </div>
        );
      }
      return renderNode(item, nodeModel);
    };

    // 绘制树
    const renderTree = (
      item: IMobPersonalPickerTreeNodeData,
      index: number,
    ): Array<JSX.Element | null> => {
      let search = null;
      if (index === 0) {
        search = (
          <van-search
            modelValue={searchValue.value}
            class={ns.b('quick-search')}
            clearable={true}
            placeholder={c.state.placeHolder}
            onUpdate:model-value={onInput}
          ></van-search>
        );
      }
      return [
        search,
        <div class={ns.e('tree')}>
          {item._children!.map((item2: IData) => {
            return renderNodeContent(item2 as IMobPersonalPickerTreeNodeData);
          })}
        </div>,
      ];
    };

    return {
      c,
      ns,
      treeData,
      checkedKeys,
      uuid,
      currentPage,
      onNodeCheck,
      onNodeClick,
      onTabChange,
      loadData,
      renderTree,
      renderNoData,
    };
  },
  render() {
    return (
      <iBizControlBase class={this.ns.b('content')} controller={this.c}>
        {{
          default: () => {
            return (
              <div class={this.ns.b('container')}>
                {this.treeData.length === 0 ? (
                  this.renderNoData()
                ) : (
                  <van-tabs
                    class={this.ns.b()}
                    active={this.currentPage}
                    onChange={this.onTabChange}
                  >
                    {{
                      default: () => {
                        return this.treeData.map(
                          (item: ITreeNodeData, index: number) => {
                            return (
                              <van-tab
                                class={this.ns.b('tab-item')}
                                name={index}
                              >
                                {{
                                  default: () =>
                                    item._children
                                      ? this.renderTree(
                                          item as IMobPersonalPickerTreeNodeData,
                                          index,
                                        )
                                      : this.renderNoData(),
                                  title: () => {
                                    return <span>{item._text}</span>;
                                  },
                                }}
                              </van-tab>
                            );
                          },
                        );
                      },
                    }}
                  </van-tabs>
                )}
                {this.treeData.length !== 0 && !this.singleSelect && (
                  <span class={this.ns.b('select-total')}>
                    已选({this.c.state.selectedData.length})
                  </span>
                )}
              </div>
            );
          },
        }}
      </iBizControlBase>
    );
  },
});

export default MobPersonalPickerTree;
