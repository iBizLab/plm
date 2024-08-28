export class Util {
  /**
   * 计算选中项绘制个数 多选场景需计算显示人员是否超出
   * @author ljx
   * @date 2024-03-05 02:42:45
   * @param {IData} values 选中项key值集合
   * @returns {number} selRenderNum
   */
  public static calcSelItemRenderNum(values: IData, el: HTMLElement): number {
    let selRenderNum = 0;
    if (el && values?.length > 0) {
      // 总宽度
      const totalWidth = el?.offsetWidth || 0;
      // 获取计算后的样式
      const computedStyle = window.getComputedStyle(el);
      // 获取左边距、右边距、左填充和右填充值
      const leftMargin = parseInt(computedStyle.marginLeft, 10);
      const rightMargin = parseInt(computedStyle.marginRight, 10);
      const leftPadding = parseInt(computedStyle.paddingLeft, 10);
      const rightPadding = parseInt(computedStyle.paddingRight, 10);
      const totalMargin = leftMargin + rightMargin + leftPadding + rightPadding;

      // 选择人员触发 Popover 显示的 HTML 元素显示宽度
      const selectWidth = 30;
      // 单个选中项元素宽度
      const selectItemWidth = 28;
      // 右边距宽度
      const rightWidth = 8;
      // 选中项所需长度
      const selectsWidth = (selectItemWidth + rightWidth) * values.length;
      const computeValue =
        totalWidth - totalMargin - selectWidth - selectsWidth;
      // 判断宽度是否会溢出
      if (computeValue < 0) {
        selRenderNum = Math.floor(
          (totalWidth - totalMargin - selectWidth) /
            (selectItemWidth + rightWidth),
        );
        // 多减去一个, 给点点元素留位置
        selRenderNum -= 1;
      }
    }
    return selRenderNum;
  }
}
