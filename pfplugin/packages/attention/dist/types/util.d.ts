/**
 * 关注工具方法
 * @author ljx
 * @date 2024-03-05 02:42:45
 */
export declare class Util {
    /**
     * 计算选中项绘制个数 多选场景需计算显示人员是否超出
     * @author ljx
     * @date 2024-03-05 02:42:45
     * @param {IData} values 选中项key值集合
     * @returns {number} selRenderNum
     */
    static calcSelItemRenderNum(values: IData, el: HTMLElement): number;
}
