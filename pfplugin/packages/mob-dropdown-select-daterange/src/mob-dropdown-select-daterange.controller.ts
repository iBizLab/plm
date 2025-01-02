import { EditorController } from '@ibiz-template/runtime';
import { IDateRange } from '@ibiz/model-core';

export class DropdownSelectDateRangeController extends EditorController<IDateRange> {
  /**
   * 根据编辑器类型获取格式化
   *
   * @return {*}  {string}
   * @memberof DropdownSelectDateRangeController
   */
  public getFormatByType(): string {
    switch (this.model.editorType) {
      // 时间范围选择器
      case 'MOBDATERANGE':
        return 'YYYY-MM-DD hh:mm:ss';
      // 时间范围选择器（YYYY-MM-DD）
      case 'MOBDATERANGE_NOTIME':
        return 'YYYY-MM-DD';
      default:
        return 'YYYY-MM-DD hh:mm:ss';
    }
  }
}
