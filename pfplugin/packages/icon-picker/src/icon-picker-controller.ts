import { EditorController } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { RuntimeModelError } from '@ibiz-template/core';
import awesome from './awesome.json';

export class IconPickerControlller extends EditorController<ITextBox> {
  /**
   * 图标列表
   */
  public iconList: IData[] = [];

  /**
   * 初始化图标列表
   */
  public initIconList(): void {
    if (!awesome) {
      throw new RuntimeModelError(this.model, '请配置实体和实体数据集');
    }
    const { icons } = awesome;
    if (icons && icons.length > 0) {
      const iconset: IData[] = [];
      icons.forEach((item: IData) => {
        item.categories.forEach((type: string) => {
          const index = iconset.findIndex((icon: IData) =>
            Object.is(icon.type, type),
          );
          if (index === -1) {
            iconset.push({
              type,
              children: [item],
            });
          } else {
            const children: IData[] = iconset[index].children || [];
            children.push(item);
          }
        });
      });
      this.iconList = iconset;
    }
  }
}
