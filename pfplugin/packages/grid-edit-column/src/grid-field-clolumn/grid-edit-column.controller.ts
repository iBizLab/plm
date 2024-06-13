/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CodeListItem,
  GridFieldEditColumnController,
  GridRowState,
  Srfuf,
} from '@ibiz-template/runtime';
import { IAppCodeList } from '@ibiz/model-core';

/**
 * 表格编辑列控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class GridEditColumnController extends GridFieldEditColumnController {
  /**
   * 用户代码表
   *
   * @type {(IAppCodeList | undefined)}
   * @memberof GridEditColumnController
   */
  public userCodeList: IAppCodeList | undefined = undefined;

  /**
   * 是否拥有下拉
   *
   * @type {boolean}
   * @memberof GridEditColumnController
   */
  public hasDropdown: boolean = false;

  /**
   * 当前选项id
   *
   * @type {string}
   * @memberof GridEditColumnController
   */
  public curPickerId: string = '';

  /**
   * 加载用户代码表
   *
   * @param {IData} data
   * @return {*}  {Promise<readonly}
   * @memberof GridEditColumnController
   */
  public async loadUserCodeList(data: IData): Promise<readonly CodeListItem[]> {
    if (data.codelistTag) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      const dataItems = await app.codeList.get(
        data.codelistTag,
        this.context,
        this.params,
      );
      this.userCodeList = app.codeList.getCodeList(data.codelistTag);
      const picker = (data.pickerData || '').split(',');
      this.hasDropdown = true;
      return dataItems.filter(item => picker.includes(item.id));
    }
    return [];
  }

  /**
   * 设置选中数据
   *
   * @param {IData} data
   * @return {*}  {Promise<readonly}
   * @memberof GridEditColumnController
   */
  public setPickerValue(row: GridRowState) {
    const { srfuf } = row.data;
    if (srfuf === Srfuf.CREATE) {
      const userData = row.data.srfUserData;
      if (userData && userData.pickerField) {
        row.data[userData.pickerField] = this.curPickerId;
      }
    }
  }
}
