/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  GridController,
  ListController,
  PickupViewPanelController,
} from '@ibiz-template/runtime';

/**
 * 多选视图简单列表控制器
 *
 * @export
 * @class SampleListController
 * @extends {ListController}
 */
export class SampleListController extends ListController {
  /**
   * 选择表格
   *
   * @readonly
   * @memberof SampleListController
   */
  get pickupGrid(): GridController {
    return (
      this.view.getController('pickupviewpanel') as PickupViewPanelController
    )?.embedView.getController('grid') as GridController;
  }

  /**
   * 处理删除
   *
   * @param {IData} item
   * @memberof SampleListController
   */
  handleRemove(item: IData) {
    const { items } = this.state;
    const index = items.findIndex(_item => _item.srfkey === item.srfkey);
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.pickupGrid.setSelection([...items]);
  }

  /**
   * 设置表格选中数据
   *
   * @param {IData[]} items
   * @memberof SampleListController
   */
  setData(items: IData[]): void {
    this.state.items = items;
    this.pickupGrid.setSelection([...items]);
  }
}
