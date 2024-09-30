/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-globals */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChartController } from '@ibiz-template/runtime';
import { EChartsType } from 'echarts';

export class CustomLabelController extends ChartController {
  /**
   * 根据数据计算最终的options
   * 并刷新echarts
   * @author lxm
   * @date 2023-06-07 09:58:00
   * @param {IData[]} [data=this.state.items]
   */
  async calcOptions(data: IData[] = this.state.items): Promise<void> {
    this.options = await this.generator.calcOptionsByData(
      data,
      this.context,
      this.params,
    );
    const totalMap = this.handleTotalData(this.options);
    this.customLabel(this.options, totalMap);
    this.updateChart();
  }

  /**
   * 自定义label
   * @param options 图表数据
   * @param totalMap 分组数据
   */
  customLabel(options: IData, totalMap: IData): void {
    if (options && Array.isArray(options.xAxis) && options.xAxis.length > 0) {
      if (!options.xAxis[0].axisLabel) {
        options.xAxis[0].axisLabel = {};
      }
      Object.assign(options.xAxis[0].axisLabel, {
        formatter: function (value: string, index: number) {
          const number = totalMap[value] || 0;
          return `${value}(${number})`;
        },
      });
    }
  }

  /**
   * 计算分组后的数据
   * @param options
   * @returns
   */
  handleTotalData(options: IData): IParams {
    const map: { [name: string]: number } = {};
    if (options && options.series) {
      options.series.forEach((serie: IData) => {
        const actionName = serie.name;
        if (serie.data && serie.type === 'bar') {
          serie.data.forEach((_data: IData) => {
            const name = _data[0];
            const option = this.chart?.getOption();
            let selected: IData = {};
            if (
              option &&
              option.legend &&
              Array.isArray(option.legend) &&
              option.legend.length > 0
            ) {
              selected = option.legend[0].selected;
            }

            if (
              Object.prototype.hasOwnProperty.call(selected, actionName) &&
              selected[actionName] === false
            ) {
              return;
            }
            let number = _data[1];
            if (isNaN(number)) {
              number = 0;
            }
            if (map[name] || map[name] === 0) {
              map[name] += number;
            } else {
              map[name] = number;
            }
          });
        }
      });
    }
    return map;
  }

  /**
   * 重写初始化方法，增加监听点击图例的方法
   * @date 2023-06-07 09:37:05
   * @param {HTMLElement} dom
   */
  initChart(chart: EChartsType): void {
    super.initChart(chart);
    const that = this;
    this.chart?.on('legendselectchanged', function (res: any) {
      const totalMap = that.handleTotalData(that.options || {});
      that.customLabel(that.options || {}, totalMap);
      that.chart?.setOption(that.options || {});
    });
  }
}
