/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ListController,
  PickupViewPanelController,
  TreeController,
} from '@ibiz-template/runtime';

export class MobSimpleListController extends ListController {
  get pickupTree(): TreeController {
    return (
      this.view.getController('pickupviewpanel') as PickupViewPanelController
    )?.embedView.getController('tree') as TreeController;
  }

  /**
   * 删除项
   *
   * @param {IData} item
   * @memberof MobSimpleListController
   */
  handleRemove(item: IData): void {
    const { items } = this.state;
    const index = items.findIndex(_item => _item.srfkey === item.srfkey);
    if (index !== -1) {
      items.splice(index, 1);
    }
    const tempItems = items.map((_item: IData) => {
      return {
        ..._item,
        _id: _item._id || _item.srfkey,
      };
    });
    this.pickupTree.setSelection([...tempItems]);
  }

  /**
   * 设置选中数据
   *
   * @param {IData[]} items
   * @memberof MobSimpleListController
   */
  setData(items: IData[]): void {
    this.state.items = items;
    const tempItems = items.map((_item: any) => {
      return {
        ..._item,
        _id: _item._id || _item.srfkey,
      };
    });
    this.pickupTree.state.selectedData = tempItems;
  }
}
