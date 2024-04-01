/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { clone } from '@ibiz-template/core';
import { ChartController } from '@ibiz-template/runtime';

export class ChartGridController extends ChartController {
  /**
   * 根据数据计算最终的options
   * 并刷新echarts
   * @author lxm
   * @date 2023-06-07 09:58:00
   * @param {IData[]} [data=this.state.items]
   */
  calcOptions(data: IData[] = this.state.items): void {
    let gridHeaders: Array<any> = [];
    let showGridCaption: boolean = false;
    const cloneItems = clone(data);
    if (
      this.generator.chartUserParam &&
      this.generator.chartUserParam.showGridCaption
    ) {
      showGridCaption = !!this.generator.chartUserParam.showGridCaption;
    }
    // 判断是否全部都是静态序列，是的话就走默认逻辑
    const series = this.generator.seriesGenerators.filter(
      (generator: IData) => {
        return generator.seriesUserParam?.isDynamicChart;
      },
    );
    if (series.length === 0) {
      // 全部是静态序列
      this.options = this.generator.calcOptionsByData(data);
      const tempGridComfig =
        (this.generator.chartUserParam?.gridHeaders as Array<any>) || [];
      if (tempGridComfig.length === 0) {
        throw ibiz.message.error('未配置表格');
      } else if (
        tempGridComfig.length === 1 &&
        tempGridComfig[0].id === 'srfgroup'
      ) {
        // 全部是静态序列且header只有一个并且是srfgroup,那么就使用分组作为表格列
        gridHeaders.push({
          id: 'filter_type',
          name: tempGridComfig[0].name,
        });
        this.generator.seriesGenerators.forEach((generator: IData) => {
          gridHeaders.push({
            id: generator.valueField,
            name: generator.seriesName,
          });
        });

        // 表格列构建完成，开始补充数据
        // 从图表的横坐标中获取数据，因为这里的分组数据都是已经算好了的，
        if (
          this.generator.seriesGenerators &&
          this.generator.seriesGenerators.length > 0
        ) {
          const tempGenerator = this.generator.seriesGenerators[0];
          if (
            tempGenerator.groupData &&
            tempGenerator.groupData.$default_group
          ) {
            // 清除所有数据，根据echart得到的数据去重新计算表格需要用到的数据，解决当配置成年，月份之类的分组时，返回的数据格式仍然为具体某一天的情况
            cloneItems.length = 0;
            for (const [key] of tempGenerator.groupData.$default_group) {
              // 获取所有分组，得到options,获取series里面的所有数据，加起来
              const tempSeries = (this.options.series as Array<any>) || [];
              const tempObj: IData = {};
              tempSeries.forEach((item: IData) => {
                if (item.data) {
                  const target = item.data.find((_data: IData) => {
                    return _data[0] === key;
                  });
                  const config = gridHeaders.find((header: IData) => {
                    return header.name === item.name;
                  });
                  if (target && config) {
                    Object.assign(tempObj, { [config.id]: target[1] });
                  }
                }
              });
              cloneItems.push(
                this.createWhiteData(
                  { filter_type: key, ...tempObj },
                  gridHeaders,
                ),
              );
            }
          }
        }

        // 计算完表格数据后根据时间对数据进行排序
        cloneItems.sort((a: any, b: any) => {
          return (
            new Date(a.filter_type).getTime() -
            new Date(b.filter_type).getTime()
          );
        });

        // 控制边距处理标签旋转已达到展示更多标签的目的
        if (
          this.options.xAxis &&
          Array.isArray(this.options.xAxis) &&
          this.options.xAxis[0].axisLabel
        ) {
          if (cloneItems.length > 10) {
            Object.assign(this.options.xAxis[0].axisLabel, { rotate: 45 });
          } else {
            Object.assign(this.options.xAxis[0].axisLabel, { rotate: 0 });
          }
        }
      } else {
        // 普通序列图表
        gridHeaders = tempGridComfig;
        this.generator.seriesGenerators.forEach((serie: IData) => {
          const codeListId = serie.model.catalogCodeListId;
          const codelist = serie.chartGenerator.codeListMap.get(codeListId);
          const { catalogField } = serie;
          if (codelist && cloneItems.length < codelist.length) {
            codelist.forEach((code: IData) => {
              const index = cloneItems.findIndex((item: IData) => {
                return (
                  item[catalogField] === code.value ||
                  item[catalogField] === code.text
                );
              });
              if (index < 0) {
                // 遍历表格列配置，生成一条新数据
                cloneItems.push(
                  this.createWhiteData(
                    { [catalogField]: code.text },
                    gridHeaders,
                  ),
                );
              }
            });
          }
          cloneItems.forEach((item: IData) => {
            if (codelist) {
              const tempCode = codelist.find((_code: IData) => {
                return _code.value === item[catalogField];
              });
              if (tempCode) {
                item[catalogField] = tempCode.text;
              }
            }
          });
        });
      }
    } else {
      // 有动态序列，手动构建options
      const tempPotion = {};
      const tempSeries: Array<any> = [];

      Object.assign(
        tempPotion,
        this.generator.staticOptions,
        this.generator.chartUserParam,
      );
      // 寻找当前对应的动态序列以及所有静态序列
      const groupcond = this.state.searchParams?.groupcond?.toLowerCase();
      const dySeries = this.generator.seriesGenerators.filter(
        (generator: IData) => {
          return (
            generator.model.id?.toLowerCase() === groupcond ||
            !generator.seriesUserParam?.isDynamicChart
          );
        },
      );
      // 遍历所有序列，找到第一个存在表格头配置并且是动态序列的序列，如果不存在，则查找图表配置，如果还是没有，报错
      const gridSerie: IData | undefined = dySeries.find((serie: IData) => {
        return (
          serie.seriesUserParam &&
          serie.seriesUserParam.gridHeaders &&
          serie.seriesUserParam.isDynamicChart
        );
      });
      if (!gridSerie) {
        const tempGridComfig: Array<any> =
          (this.generator.chartUserParam?.gridHeaders as Array<any>) || [];
        if (tempGridComfig.length === 0) {
          throw ibiz.message.error('未配置表格');
        }
        gridHeaders = tempGridComfig;
      } else {
        gridHeaders = gridSerie.seriesUserParam.gridHeaders;
      }

      if (dySeries && dySeries.length > 0) {
        // 开始给序列添加用户配置参数
        dySeries.forEach((serie: IData) => {
          const childSerie = {};
          const childData: Array<any> = [];
          Object.assign(childSerie, serie.staticOptions);

          const codeListId = serie.model.catalogCodeListId;
          const codelist = serie.chartGenerator.codeListMap.get(codeListId);
          const { valueField, catalogField } = serie;

          if (codelist && cloneItems.length < codelist.length) {
            codelist.forEach((code: IData) => {
              const index = cloneItems.findIndex((item: IData) => {
                return (
                  item[catalogField] === code.value ||
                  item[catalogField] === code.text
                );
              });
              if (index < 0) {
                // 根据表格列配置，生成一条空白数据
                cloneItems.push(
                  this.createWhiteData(
                    { [catalogField]: code.text },
                    gridHeaders,
                  ),
                );
              }
            });
          }
          cloneItems.forEach((item: IData) => {
            if (codelist) {
              const tempCode = codelist.find((_code: IData) => {
                return (
                  _code.value === item[catalogField] ||
                  item[catalogField] === _code.text
                );
              });
              if (tempCode) {
                item[catalogField] = tempCode.text;
              }
            }
            if (item[valueField]) {
              if (dySeries.length > 1) {
                childData.push([item[catalogField], item[valueField], item]);
              } else {
                childData.push({
                  name: item[catalogField],
                  value: [item[valueField]],
                });
              }
            }
          });
          Object.assign(childSerie, { data: childData });
          tempSeries.push(childSerie);
        });
      }
      Object.assign(tempPotion, { series: tempSeries });
      this.options = tempPotion;
    }
    this.parseItemsPercent(cloneItems);
    Object.assign(this.state, {
      cloneItems,
      showGridCaption,
      gridHeaders,
    });
    this.updateChart();
  }

  /**
   * 生成一条空白数据
   *
   * @param {IData} defaultObj
   * @param {Array<any>} gridModel
   * @return {*}
   * @memberof ChartGridController
   */
  public createWhiteData(defaultObj: IData, gridModel: Array<any>): IData {
    const tempData = {};
    gridModel.forEach((column: IData) => {
      Object.assign(tempData, { [column.id]: 0 });
    });
    Object.assign(tempData, defaultObj, { srfpercent: '0%' });
    return tempData;
  }

  /**
   * @description 内置处理百分比，仅使用count字段计算百分比
   * @author 姜林君
   * @date 2024/03/18 16:03:55
   * @param {IData[]} items
   * @returns {*}
   * @memberof ExtendGridController
   */
  public parseItemsPercent(items: IData[]): void {
    let total = 0;
    items.forEach((item: IData) => {
      total += Number(item.count);
    });
    items.forEach((item: IData) => {
      let srfpercent: string = '0';
      if (total > 0) {
        srfpercent = ((item.count / total) * 100).toFixed(2);
      }
      Object.assign(item, {
        srfpercent: `${srfpercent}%`,
      });
    });
  }
}
