/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  GridController,
  IGridState,
  IListController,
} from '@ibiz-template/runtime';

interface ICheckboxGrid extends IGridState {
  /**
   * 启用全选
   */
  enableSelectAll: boolean;
}

/**
 * 多选视图表格插件（多选框）控制器
 *
 * @export
 * @class CheckboxGridController
 * @extends {GridController}
 */
export class CheckboxGridController extends GridController {
  /**
   * 简单列表控制器
   *
   * @readonly
   * @type {IListController}
   * @memberof CheckboxGridController
   */
  get simpleList(): IListController {
    return this.view.parentView?.getController('simplelist') as IListController;
  }

  /**
   * 状态对象
   *
   * @type {ICheckboxGrid}
   * @memberof CheckboxGridController
   */
  declare state: ICheckboxGrid;

  protected initState(): void {
    super.initState();
    this.state.enableSelectAll = false;
  }

  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.enableselectall) {
      this.state.enableSelectAll =
        this.controlParams.enableselectall === 'true';
    }
  }

  /**
   * 处理选中数据
   *
   * @param {string[]} selects 选中数据
   * @memberof CheckboxGridController
   */
  handleSelection(selects: string[]) {
    const { items, selectedData } = this.state;
    // 先取出当前页面没有的选中数据
    const selection: IData[] = selectedData.filter(
      select => !items.find(item => item.srfkey === select.srfkey),
    );
    // 再设置当前页面的选中数据
    const curSelection: IData[] = items.filter(item =>
      selects.includes(item.srfkey),
    );
    selection.push(...curSelection);
    this.setSelection(selection);
    this.handlePushSimpleListItems();
  }

  /**
   * 处理添加简单列表数据
   *
   * @protected
   * @memberof CheckboxGridController
   */
  protected handlePushSimpleListItems(): void {
    const { selectedData } = this.state;
    const items = [...selectedData];
    this.simpleList?.setData(items);
  }
}
