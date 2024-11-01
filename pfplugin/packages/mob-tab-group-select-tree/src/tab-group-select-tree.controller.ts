/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  calcDeCodeNameById,
  ITreeNodeData,
  ScriptFactory,
  TreeController,
} from '@ibiz-template/runtime';
import { isString } from 'lodash-es';

const ScriptValueRegex = /\$\{[^}]*\}/; // 匹配${xxx}格式字符串

export class TabGroupSelectTreeController extends TreeController {
  /**
   * @description 深度计算searchConds
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof TabGroupSelectTreeController
   */
  deepCalcSearchConds(data: IData[]): IData[] {
    data.forEach(searchcond => {
      const { value, searchconds = [] } = searchcond;
      if (searchconds.length > 0) {
        searchcond.searchconds = this.deepCalcSearchConds(
          searchconds as IData[],
        );
      }
      if (isString(value)) {
        if (ScriptValueRegex.test(value)) {
          searchcond.value = ScriptFactory.execSingleLine(`\`${value}\``, {
            ...this.getEventArgs(),
          });
        }
      }
    });
    return data;
  }

  /**
   * 获取分组节点的theme_model数据
   *
   * @param {ITreeNodeData} target
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof TabGroupSelectTreeController
   */
  public async getNodeThemeModel(
    target: ITreeNodeData,
  ): Promise<IData | undefined> {
    const app = ibiz.hub.getApp(this.model.appId);
    const context = this.context.clone();
    const deName =
      target._deData?.srfdecodename?.toLowerCase() ||
      calcDeCodeNameById(this.model.appDataEntityId!);
    if (deName) {
      context[deName.toLowerCase()] = target._deData?.srfkey;
      if (context[deName.toLowerCase()]) {
        const result = await app.deService.exec(
          deName!,
          'GET',
          context,
          target._deData,
          this.params,
        );
        if (result && result.ok && result.data && result.data.theme_model) {
          const res = JSON.parse(result.data.theme_model);
          const { searchconds = [] } = res;
          if (searchconds.length > 0) {
            res.searchconds = this.deepCalcSearchConds(searchconds);
          }
          return res;
        }
      }
    }
  }

  /**
   * 节点点击
   *
   * @param {ITreeNodeData} nodeData
   * @return {*}  {Promise<void>}
   * @memberof TabGroupSelectTreeController
   */
  public async onNodeClick(nodeData: IData): Promise<void> {
    // 设置导航数据
    this.setNavData(nodeData);

    // 导航的时候，没有导航视图的时候，节点后续点击逻辑都不走，也不选中
    if (this.state.navigational) {
      const nodeModel = this.getNodeModel(nodeData._nodeId);
      if (!nodeModel?.navAppViewId) {
        return;
      }
    }

    // 单选时，单击才会触发选中逻辑,禁止选择的时候不触发
    if (this.state.singleSelect && !nodeData._disableSelect) {
      // 选中相关处理
      const { selectedData } = this.state;
      // 选中里没有则添加，有则删除
      const filterArr = selectedData.filter(item => item._id !== nodeData._id);
      if (filterArr.length === selectedData.length) {
        this.setSelection(
          this.state.singleSelect
            ? [nodeData as ITreeNodeData]
            : selectedData.concat([nodeData as ITreeNodeData]),
        );
      } else {
        this.setSelection(filterArr);
      }
    }

    // 激活
    const nodeParams = this.parseTreeNodeData(nodeData as ITreeNodeData);
    if ((nodeData as IData).srfthememodel) {
      Object.assign(nodeParams.params, {
        srfthememodel: (nodeData as IData).srfthememodel,
      });
    }
    this._evt.emit('onActive', {
      ...nodeParams,
      nodeData: nodeData as ITreeNodeData,
    });
  }

  /**
   * 判断当前节点是否为根节点
   *
   * @memberof TabGroupSelectTreeController
   */
  public isRoot(id: string): boolean {
    const root = this.model.detreeNodes?.find((item: IData) => {
      return item.rootNode === true;
    });
    if (root && root.id === id) {
      return true;
    }
    return false;
  }

  /**
   * 设置激活 -- 重写方法，避免导航栏调用该方法
   *
   * @param {ITreeNodeData} _item
   * @return {*}  {Promise<void>}
   * @memberof TabGroupSelectTreeController
  //  */
  setActive(_item: ITreeNodeData): Promise<void> {
    return Promise.resolve();
  }

  /**
   *  设置选择--重写方法，避免导航栏调用该方法
   *
   * @param {{ _id: string }[]} _selection
   * @memberof TabGroupSelectTreeController
   */
  setSelection(_selection: { _id: string }[]): void {}
}
