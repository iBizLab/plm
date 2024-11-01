import {
  ITreeNodeData,
  MDCtrlLoadParams,
  TreeController,
} from '@ibiz-template/runtime';

export interface IMobTreeViewExNodeData extends ITreeNodeData {
  /**
   * 节点展开
   * @type {boolean}
   */
  _defaultExpand: boolean;
}

/**
 * 移动端人员选择树控制器
 *
 * @export
 * @class MobTreeViewExController
 * @implements {IControlProvider}
 */
export class MobTreeViewExController extends TreeController {
  /**
   * 回显映射
   */
  public echoMap: IData = {
    valueField: 'id',
    textField: 'name',
  };

  protected async onMounted(): Promise<void> {
    await super.onMounted();
  }

  /**
   * 处理回显选中
   * @description 第一次load加载成功后执行,后续节点加载不会执行
   * @memberof ControlController
   */
  handleDefaultSelect(): void {
    const { selectedData, selecteddata } = this.params;

    const selects =
      selectedData ||
      selecteddata ||
      this.view.params.selectedData ||
      this.view.params.selecteddata;
    const selection = selects ? JSON.parse(selects) : [];
    if (selection && selection.length > 0) {
      this.state.selectedData.push(...selection);
      this._evt.emit('onSelectionChange', {
        data: this.state.selectedData,
      });
    }
  }

  /**
   * 部件参数解析
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.echomap) {
      this.echoMap = JSON.parse(this.controlParams.echomap);
    }
  }

  /**
   * 树部件加载，从根节点开始重新加载
   */
  async load(args: MDCtrlLoadParams = {}): Promise<ITreeNodeData[]> {
    // 适配查询loading效果
    ibiz.loading.showRedirect();
    const nodes = await super.load(args);
    ibiz.loading.hideRedirect();
    return nodes;
  }
}
