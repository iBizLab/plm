import { ChartController, ControllerEvent } from '@ibiz-template/runtime';
import { IChartGridEvent } from './i-chart-grid.event';
export declare class ChartGridController extends ChartController {
    get _evt(): ControllerEvent<IChartGridEvent>;
    cloneOrginSeries: any;
    /**
     * 初始化图表
     *
     * @author tony001
     * @date 2024-07-24 16:07:08
     * @param {any} chart
     */
    initChart(chart: any): void;
    /**
     * 根据数据计算最终的options
     * 并刷新echarts
     * @author lxm
     * @date 2023-06-07 09:58:00
     * @param {IData[]} [data=this.state.items]
     */
    calcOptions(data?: IData[]): Promise<void>;
    /**
     * 生成一条空白数据
     *
     * @param {IData} defaultObj
     * @param {Array<any>} gridModel
     * @return {*}
     * @memberof ChartGridController
     */
    createWhiteData(defaultObj: IData, gridModel: Array<any>): IData;
    /**
     * @description 内置处理百分比，仅使用count字段计算百分比
     * @author 姜林君
     * @date 2024/03/18 16:03:55
     * @param {IData[]} items
     * @returns {*}
     * @memberof ExtendGridController
     */
    parseItemsPercent(items: IData[]): void;
    /**
     * @description 导出canvas图片
     * @return {*}  {Promise<void>}
     * @memberof ChartGridController
     */
    exportCanvas(): Promise<void>;
    /**
     * @description 导出excel
     * @return {*}  {Promise<void>}
     * @memberof ChartGridController
     */
    exportExcel(): Promise<void>;
}
