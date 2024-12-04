/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { clone } from '@ibiz-template/core';
import {
  ChartController,
  CodeListItem,
  ControllerEvent,
} from '@ibiz-template/runtime';
import { IChartGridEvent } from './i-chart-grid.event';

export class ChartGridController extends ChartController {
  get _evt(): ControllerEvent<IChartGridEvent> {
    return this.evt;
  }

  public cloneOrginSeries: any = null;

  /**
   * 初始化图表
   *
   * @author tony001
   * @date 2024-07-24 16:07:08
   * @param {any} chart
   */
  initChart(chart: any): void {
    this.chart = chart;
  }

  /**
   * 根据数据计算最终的options
   * 并刷新echarts
   * @author lxm
   * @date 2023-06-07 09:58:00
   * @param {IData[]} [data=this.state.items]
   */
  async calcOptions(data: IData[] = this.state.items): Promise<void> {
    let gridHeaders: Array<any> = [];
    let showGridCaption: boolean = false; // 是否显示表格控制
    let groupSerieMode: boolean = false; // 启用特殊的分组序列模式
    let showGridTotal: boolean = false;
    let showGridPrcent: boolean = false;
    const cloneItems = clone(data);
    if (this.generator.chartUserParam) {
      if (this.generator.chartUserParam.showGridCaption) {
        showGridCaption = !!this.generator.chartUserParam.showGridCaption;
      }
      // if (this.generator.chartUserParam.showGridTotal) {
      //   showGridTotal = !!this.generator.chartUserParam.showGridTotal;
      // }
      // if (this.generator.chartUserParam.showGridPrcent) {
      //   showGridPrcent = !!this.generator.chartUserParam.showGridPrcent;
      // }
      if (this.generator.chartUserParam.groupSerieMode) {
        groupSerieMode = !!this.generator.chartUserParam.groupSerieMode;
      }
    }
    // 判断是否全部都是静态序列，是的话就走默认逻辑
    const series = this.generator.seriesGenerators.filter(
      (generator: IData) => {
        return generator.seriesUserParam?.isDynamicChart;
      },
    );
    if (series.length === 0) {
      // 全部是静态序列
      this.options = await this.generator.calcOptionsByData(
        data,
        this.context,
        this.params,
      );
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

        if (!groupSerieMode) {
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
        } else {
          /**
           *  多序列平铺模式 当前模式下特殊处理
           * 先遍历数据，根据标识属性进行分组，然后复制唯一的serie模型，每种类型添加一个序列模型到总模型上
           *
           */
          showGridTotal = true;
          showGridPrcent = true;
          const count = gridHeaders.find((item: any) => {
            return item.id === 'count';
          });
          if (count) {
            count.allowPercent = true;
          }
          const codelistId: string =
            (this.generator.chartUserParam?.codeListTag as string) || '';
          let dataItems: readonly CodeListItem[] = [];
          if (codelistId) {
            const app = await ibiz.hub.getApp(this.context.srfappid);
            dataItems = await app.codeList.get(
              codelistId,
              this.context,
              this.params,
            );
          }

          if (
            (this.generator.seriesGenerators &&
              this.generator.seriesGenerators.length > 0) ||
            this.cloneOrginSeries
          ) {
            // 保存原始序列模型
            if (!this.cloneOrginSeries) {
              this.cloneOrginSeries = clone(this.generator.seriesGenerators[0]);
            }
            const { catalogField, valueField, idField, catalogCodeListId } =
              this.cloneOrginSeries.model;

            // 标识属性分类
            const idFieldGroup = this.state.items.map((item: IData) => {
              return item[idField!];
            });
            // 图表序列分组,有代码表就解析代码表
            const idGroups = Array.from(new Set(idFieldGroup)).map(
              (_id: string) => {
                if (codelistId && dataItems.length > 0) {
                  const code = dataItems.find((_item: any) => {
                    return _item.value === _id;
                  });
                  if (code) {
                    return code.text;
                  }
                }
                return _id;
              },
            );

            // 表格数据里的标识属性也要做一次解析
            if (codelistId && dataItems.length > 0) {
              cloneItems.forEach((_item: IData) => {
                const code = dataItems.find((codeitem: IData) => {
                  return codeitem.value === _item[idField];
                });
                if (code) {
                  _item[idField] = code.text;
                  _item[`${idField}_code`] = code.value;
                }
              });
            }
            // 分类配置代码表时图表数据里同样也要做解析
            if (catalogCodeListId) {
              const codelist =
                this.cloneOrginSeries.chartGenerator.codeListMap.get(
                  catalogCodeListId,
                );
              if (cloneItems && codelist) {
                cloneItems.forEach((_cloneItem: IData) => {
                  const code = codelist.find((_codelist: IData) => {
                    return _codelist.value === _cloneItem[catalogField];
                  });
                  if (code) {
                    _cloneItem[catalogField] = code.text;
                  }
                });
              }
            }
            const serieModels: any = [];
            this.state.items.forEach((item: IData) => {
              // 有代码表的解析一次
              if (codelistId && dataItems.length > 0) {
                // 对标识属性做解析
                const code = dataItems.find((_item: any) => {
                  return _item.value === item[idField];
                });
                if (code) {
                  item[idField] = code.text;
                }
              }
              idGroups.forEach((_id: string) => {
                const type = item[idField!];
                if (type === _id) {
                  item[`${valueField}_${_id}`] = item[valueField!];
                } else {
                  item[`${valueField}_${_id}`] = 0;
                }
              });
            });

            idGroups.forEach((_id: string, index: number) => {
              const tempSerieModel = clone(this.cloneOrginSeries);
              tempSerieModel.valueField = `${valueField}_${_id}`;
              tempSerieModel.seriesName = _id;
              tempSerieModel.staticOptions.name = _id;
              tempSerieModel.model.valueField = `${valueField}_${_id}`;
              tempSerieModel.model.id = `${valueField}_${_id}`;
              tempSerieModel.model.chartDataSetId = `${index}`;
              (tempSerieModel.model.chartSeriesEncode! as any).y = [
                `${valueField}_${_id}`,
              ];
              serieModels.push(tempSerieModel);
            });
            this.generator.seriesGenerators = serieModels;

            this.options = await this.generator.calcOptionsByData(
              data,
              this.context,
              this.params,
            );
            if (this.options) {
              (this.options.series as any).forEach((_serie: IData) => {
                if (!_serie.tooltip) {
                  _serie.tooltip = { show: true };
                }
                Object.assign(_serie.tooltip, {
                  formatter: (params: any) => {
                    const { name, value, marker, seriesName } = params;
                    return `<div> ${name}<br/> ${marker}${seriesName}：  ${value[1]} </div>`;
                  },
                });
              });
            }
          }

          // 对构建的数据进行排序
          cloneItems.sort((a: IData, b: IData) => {
            let an = 0;
            let bn = 0;
            if (Number.isNaN(Number(a[gridHeaders[0].id]))) {
              if (Number.isNaN(Number(a[`${gridHeaders[0].id}_code`]))) {
                an = 10000;
              } else {
                an = Number(a[`${gridHeaders[0].id}_code`]);
              }
            } else {
              an = Number(a[gridHeaders[0].id]);
            }
            if (Number.isNaN(Number(b[gridHeaders[0].id]))) {
              if (Number.isNaN(Number(b[`${gridHeaders[0].id}_code`]))) {
                bn = 10000;
              } else {
                bn = Number(b[`${gridHeaders[0].id}_code`]);
              }
            } else {
              bn = Number(b[gridHeaders[0].id]);
            }
            return an - bn;
          });
        }
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
      showGridPrcent,
      showGridTotal,
      gridHeaders,
    });
    console.log(this.state, 444);

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

  /**
   * @description 导出canvas图片
   * @return {*}  {Promise<void>}
   * @memberof ChartGridController
   */
  public async exportCanvas(): Promise<void> {
    this._evt.emit('onExportCanvas', undefined);
  }

  /**
   * @description 导出excel
   * @return {*}  {Promise<void>}
   * @memberof ChartGridController
   */
  public async exportExcel(): Promise<void> {
    const header = this.state.gridHeaders.map(item => item.name);
    const fields = this.state.gridHeaders.map(item => item.id);
    const cloneData = (this.state as IData).cloneItems.map((item: IData) => {
      return fields.reduce((obj: IData, key) => {
        obj[key] = item[key];
        return obj;
      }, {});
    });
    const table = cloneData.map((x: IData) => Object.values(x));
    const caption = this.view.model.caption!;
    const exportExcel = await ibiz.util.getExcelUtil!();
    exportExcel.exportJsonToExcel({
      header, // 表头内容 数组格式
      data: table, // 具体数据 这是个二维数组
      filename: caption, // 文件名称
      autoWidth: true, // 单元格是否自适应
    });
  }
}
