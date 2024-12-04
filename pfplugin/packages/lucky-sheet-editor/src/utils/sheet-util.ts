import { resource } from './global';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class SheetUtil {
  /**
   * @description 获取Luckysheet对象
   * @static
   * @return {*}  {*}
   * @memberof SheetUtil
   */
  public static getLuckySheet(): IParams {
    return (window as IParams).luckysheet;
  }

  /**
   * 动态加载脚本
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * 动态加载样式
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static loadStyle(url: string) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  /**
   * 加载LuckySheet
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static loadLuckySheet() {
    return new Promise<void>((resolve, reject) => {
      const luckySheet = this.getLuckySheet();
      if (!luckySheet) {
        const loadResource = [
          this.loadStyle(
            resource.dir('assets/luckysheet/plugins/css/pluginsCss.css'),
          ),
          this.loadStyle(resource.dir('assets/luckysheet/plugins/plugins.css')),
          this.loadStyle(resource.dir('assets/luckysheet/css/luckysheet.css')),
          this.loadStyle(
            resource.dir('assets/luckysheet/assets/iconfont/iconfont.css'),
          ),
          this.loadScript(
            resource.dir('assets/luckysheet/plugins/js/plugin.js'),
          ),
          this.loadScript(resource.dir('assets/luckysheet/luckysheet.umd.js')),
        ];
        Promise.all(loadResource)
          .then(() => {
            resolve();
          })
          .catch(() => {
            ibiz.message.error(
              '加载luckySheet静态资源失败,请确认静态资源是否存在！',
            );
            reject();
          });
      } else {
        resolve();
      }
    });
  }

  /**
   * 更新Luckysheet
   *
   * @static
   * @memberof SheetUtil
   */
  public static updateSheet() {
    const luckySheet = this.getLuckySheet();
    const sheetData = this.getSheetData();
    if (luckySheet && sheetData) {
      luckySheet.updataSheet(sheetData);
    }
  }

  /**
   * @description 获取Luckysheet当前工作表
   * @return {*}
   * @memberof SheetUtil
   */
  public static getSheet(): IParams {
    return (window as IParams).luckysheet.getSheet();
  }

  /**
   * @description 创建luckysheet
   * @static
   * @param {*} options luckysheet配置
   * @memberof SheetUtil
   */
  public static create(options: IParams) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet && options) {
      luckySheet.create(options);
    }
  }

  /**
   * 初始化分页器
   *
   * @static
   * @param {*} config
   * @memberof SheetUtil
   */
  public static pagerInit(config: IParams) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.pagerInit(config);
    }
  }

  /**
   * 退出编辑模式
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static exitEditMode() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.exitEditMode();
    }
  }

  /**
   * @description 销毁
   * @static
   * @memberof SheetUtil
   */
  public static destroy() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.destroy();
    }
  }

  /**
   * @description 刷新
   * @static
   * @memberof SheetUtil
   */
  public static refresh() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.refresh();
    }
  }

  /**
   * @description 撤销
   * @static
   * @memberof SheetUtil
   */
  public static undo() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.undo();
    }
  }

  /**
   * @description 获取报表数据
   * @static
   * @memberof SheetUtil
   */
  public static getSheetData() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.getSheetData();
    }
  }

  /**
   * @description 获取报表索引
   * @static
   * @memberof SheetUtil
   */
  public static getSheetIndex(_index: number) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet;
    }
  }

  /**
   * @description 获取报表索引
   * @static
   * @memberof SheetUtil
   */
  public static transToCellData(data: IData) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.transToCellData(data);
    }
  }

  /**
   * 获取表格数据
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static getGridData() {
    let result: IData[][] = [];
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      const sheetData: IData[] = luckySheet.getSheetData();
      result = sheetData.map(data => {
        return data.map((item: IData) => {
          if (item) {
            return item.v;
          }
          return null;
        });
      });
    }
    return result;
  }

  /**
   * @description 设置工作表配置
   * @param {*} config
   * @memberof SheetUtil
   */
  public static setConfig(config: IParams, isMerge: boolean = false) {
    const luckySheet = this.getLuckySheet();
    if (isMerge) {
      const rootConfig = Object.assign(luckySheet.getConfig(), config);
      luckySheet.setConfig(rootConfig);
    } else {
      luckySheet.setConfig(config);
    }
  }

  /**
   * @description 获取当前工作表配置
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static getConfig() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.getConfig();
    }
  }

  /**
   * 设置单元格值
   *
   * @static
   * @param {number} row 行
   * @param {number} col 列
   * @param {*} value 单元格值
   * @param {boolean} [isRefresh=false] 是否刷新界面；默认为true；用于多个单元格赋值时候控制节流，前面单元格赋值的时候应设置为 false，最后一个单元格赋值时设置为true
   * @memberof SheetUtil
   */
  public static setCellValue(
    row: number,
    col: number,
    value: IParams,
    isRefresh: boolean = false,
  ) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.setCellValue(row, col, value, { isRefresh });
    }
  }

  /**
   * @description 指定工作表选区是否高亮
   * @static
   * @param {*} range 选区
   * @param {*} [opt] 配置 { show: boolean, order: number, success: Function }
   * @memberof SheetUtil
   */
  public static setRangeShow(range: IParams, opt?: IParams) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.setRangeShow(range, opt);
    }
  }

  /**
   * @description 获取列宽度
   * @static
   * @param {IParams[]} columnInfo 列下标数组
   * @param {*} [opt]
   * @memberof SheetUtil
   */
  public static getColumnWidth(columnInfo: IParams[], opt?: IParams) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet && columnInfo.length > 0) {
      return luckySheet.getColumnWidth(columnInfo, opt);
    }
  }

  /**
   * @description 获取行高度
   * @static
   * @param {IParams[]} rowInfo 行下标数组
   * @param {*} [opt]
   * @memberof SheetUtil
   */
  public static getRowHeight(rowInfo: IParams[], opt?: IParams) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet && rowInfo.length > 0) {
      return luckySheet.getRowHeight(rowInfo, opt);
    }
  }

  /**
   * @description 获取默认行高
   * @static
   * @memberof SheetUtil
   */
  public static getDefaultRowHeight(): number {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.getDefaultRowHeight() as number;
    }
    return 20;
  }

  /**
   * @description 清空所有
   * @static
   * @memberof SheetUtil
   */
  public static clearAll() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      const totalRow = SheetUtil.getTotalRow();
      const totalColumn = SheetUtil.getTotalColumn();
      luckySheet.clearRange({
        range: { row: [0, totalRow - 1], column: [0, totalColumn - 1] },
      });
    }
  }

  /**
   * @description 获取元素
   * @static
   * @param {string} tag 元素标识
   * @return {*}
   * @memberof SheetUtil
   */
  public static getElement(tag: string) {
    return (window as IParams).$(`${tag}`);
  }

  /**
   * 设置列
   *
   * @param {IParams} sheetOps
   * @param {IParams} columnOpt
   * @memberof SheetUtil
   */
  public static setColumn(sheetOps: IParams, columnOpt: IParams) {
    const sheetConfig = sheetOps.data[0];
    Object.assign(sheetConfig, columnOpt);
  }

  /**
   * 设置头部单元格数据
   *
   * @param {IParams} sheetOps
   * @param {IParams[]} headers
   * @memberof SheetUtil
   */
  public static setHeaderCell(sheetOps: IParams, headers: IParams[]) {
    const { data } = sheetOps.data[0];
    data[0] = headers;
  }

  /**
   * 添加钩子
   *
   * @static
   * @param {*} config
   * @param {*} hook
   * @memberof SheetUtil
   */
  public static addHook(config: IParams, hook: IParams) {
    Object.assign(config.hook, hook);
  }

  /**
   * 添加自定义事件
   *
   * @static
   * @param {string} tag
   * @param {string} action
   * @param {*} callback
   * @memberof SheetUtil
   */
  public static addCustomEvent(
    tag: string,
    action: string,
    callback: EventListenerOrEventListenerObject,
  ) {
    const dom: Element | null = document.querySelector(tag);
    if (dom) {
      dom.addEventListener(action, callback);
    }
  }

  /**
   * 获取总列数
   *
   * @static
   * @memberof SheetUtil
   */
  public static getTotalColumn() {
    let total = 60;
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      const sheetData = luckySheet.getSheetData();
      if (sheetData && sheetData[0]) {
        total = sheetData[0].length;
      }
    }
    return total;
  }

  /**
   * 获取总行数
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static getTotalRow() {
    let total = 85;
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      const sheetData = luckySheet.getSheetData();
      if (sheetData) {
        total = sheetData.length;
      }
    }
    return total;
  }

  /**
   * 获取对应类型数据
   *
   * @static
   * @param {*} value
   * @param {string} type
   * @memberof SheetUtil
   */
  public static getValueByType(value: IParams, type: string) {
    if (!value) {
      return value;
    }
    switch (type) {
      case 'string':
        return value.toString();
      case 'number':
        return Number(value);
      case 'boolean':
        return Boolean(value);
      default:
        return value;
    }
  }

  /**
   * 设置筛选范围
   *
   * @static
   * @memberof SheetUtil
   */
  public static setRangeFilter(totalRow: number, totalColumn: number) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      luckySheet.setRangeFilter('open', {
        range: { row: [0, totalRow], column: [0, totalColumn] },
      });
    }
  }

  /**
   * 获取sheet文件
   *
   * @static
   * @return {*}
   * @memberof SheetUtil
   */
  public static getLuckysheetFile() {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.getLuckysheetfile()[0];
    }
  }

  /**
   * @description 插入行
   * @static
   * @param {number} index
   * @return {*}
   * @memberof SheetUtil
   */
  public static insertRow(index: number) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.insertRow(index);
    }
  }

  /**
   * @description 删除行
   * @static
   * @param {number} start
   * @param {number} end
   * @memberof SheetUtil
   */
  public static deleteRow(start: number, end: number) {
    const luckySheet = this.getLuckySheet();
    if (luckySheet) {
      return luckySheet.deleteRow(start, end);
    }
  }

  /**
   * @description 设置行背景
   * @static
   * @memberof SheetUtil
   */
  public static setRangeBg(range: IParams, color: string) {
    const { row, column } = range;
    const sheetData = this.getSheetData();
    if (sheetData) {
      for (let rowIndex = row[0]; rowIndex <= row[1]; rowIndex++) {
        const item: IParams[] = sheetData[rowIndex];
        item.forEach((arg: IParams, colIndex: number) => {
          if (colIndex >= column[0] && colIndex <= column[1] && arg) {
            Object.assign(arg, { bg: color });
            this.setCellValue(
              rowIndex,
              colIndex,
              arg,
              rowIndex === row[1] && colIndex === column[1],
            );
          }
        });
      }
    }
  }
}
