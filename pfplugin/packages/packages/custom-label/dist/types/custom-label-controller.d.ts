import { ChartController } from '@ibiz-template/runtime';
import { EChartsType } from 'echarts';
export declare class CustomLabelController extends ChartController {
    /**
     * 根据数据计算最终的options
     * 并刷新echarts
     * @author lxm
     * @date 2023-06-07 09:58:00
     * @param {IData[]} [data=this.state.items]
     */
    calcOptions(data?: IData[]): Promise<void>;
    /**
     * 自定义label
     * @param options 图表数据
     * @param totalMap 分组数据
     */
    customLabel(options: IData, totalMap: IData): void;
    /**
     * 计算分组后的数据
     * @param options
     * @returns
     */
    handleTotalData(options: IData): IParams;
    /**
     * 重写初始化方法，增加监听点击图例的方法
     * @date 2023-06-07 09:37:05
     * @param {HTMLElement} dom
     */
    initChart(chart: EChartsType): void;
}
