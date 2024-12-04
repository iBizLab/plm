export declare class SheetUtil {
    /**
     * @description 获取Luckysheet对象
     * @static
     * @return {*}  {*}
     * @memberof SheetUtil
     */
    static getLuckySheet(): IParams;
    /**
     * 动态加载脚本
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static loadScript(url: string): Promise<unknown>;
    /**
     * 动态加载样式
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static loadStyle(url: string): Promise<unknown>;
    /**
     * 加载LuckySheet
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static loadLuckySheet(): Promise<void>;
    /**
     * 更新Luckysheet
     *
     * @static
     * @memberof SheetUtil
     */
    static updateSheet(): void;
    /**
     * @description 获取Luckysheet当前工作表
     * @return {*}
     * @memberof SheetUtil
     */
    static getSheet(): IParams;
    /**
     * @description 创建luckysheet
     * @static
     * @param {*} options luckysheet配置
     * @memberof SheetUtil
     */
    static create(options: IParams): void;
    /**
     * 初始化分页器
     *
     * @static
     * @param {*} config
     * @memberof SheetUtil
     */
    static pagerInit(config: IParams): void;
    /**
     * 退出编辑模式
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static exitEditMode(): any;
    /**
     * @description 销毁
     * @static
     * @memberof SheetUtil
     */
    static destroy(): void;
    /**
     * @description 刷新
     * @static
     * @memberof SheetUtil
     */
    static refresh(): void;
    /**
     * @description 撤销
     * @static
     * @memberof SheetUtil
     */
    static undo(): void;
    /**
     * @description 获取报表数据
     * @static
     * @memberof SheetUtil
     */
    static getSheetData(): any;
    /**
     * @description 获取报表索引
     * @static
     * @memberof SheetUtil
     */
    static getSheetIndex(_index: number): IParams | undefined;
    /**
     * @description 获取报表索引
     * @static
     * @memberof SheetUtil
     */
    static transToCellData(data: IData): any;
    /**
     * 获取表格数据
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static getGridData(): IData[][];
    /**
     * @description 设置工作表配置
     * @param {*} config
     * @memberof SheetUtil
     */
    static setConfig(config: IParams, isMerge?: boolean): void;
    /**
     * @description 获取当前工作表配置
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static getConfig(): any;
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
    static setCellValue(row: number, col: number, value: IParams, isRefresh?: boolean): void;
    /**
     * @description 指定工作表选区是否高亮
     * @static
     * @param {*} range 选区
     * @param {*} [opt] 配置 { show: boolean, order: number, success: Function }
     * @memberof SheetUtil
     */
    static setRangeShow(range: IParams, opt?: IParams): void;
    /**
     * @description 获取列宽度
     * @static
     * @param {IParams[]} columnInfo 列下标数组
     * @param {*} [opt]
     * @memberof SheetUtil
     */
    static getColumnWidth(columnInfo: IParams[], opt?: IParams): any;
    /**
     * @description 获取行高度
     * @static
     * @param {IParams[]} rowInfo 行下标数组
     * @param {*} [opt]
     * @memberof SheetUtil
     */
    static getRowHeight(rowInfo: IParams[], opt?: IParams): any;
    /**
     * @description 获取默认行高
     * @static
     * @memberof SheetUtil
     */
    static getDefaultRowHeight(): number;
    /**
     * @description 清空所有
     * @static
     * @memberof SheetUtil
     */
    static clearAll(): void;
    /**
     * @description 获取元素
     * @static
     * @param {string} tag 元素标识
     * @return {*}
     * @memberof SheetUtil
     */
    static getElement(tag: string): any;
    /**
     * 设置列
     *
     * @param {IParams} sheetOps
     * @param {IParams} columnOpt
     * @memberof SheetUtil
     */
    static setColumn(sheetOps: IParams, columnOpt: IParams): void;
    /**
     * 设置头部单元格数据
     *
     * @param {IParams} sheetOps
     * @param {IParams[]} headers
     * @memberof SheetUtil
     */
    static setHeaderCell(sheetOps: IParams, headers: IParams[]): void;
    /**
     * 添加钩子
     *
     * @static
     * @param {*} config
     * @param {*} hook
     * @memberof SheetUtil
     */
    static addHook(config: IParams, hook: IParams): void;
    /**
     * 添加自定义事件
     *
     * @static
     * @param {string} tag
     * @param {string} action
     * @param {*} callback
     * @memberof SheetUtil
     */
    static addCustomEvent(tag: string, action: string, callback: EventListenerOrEventListenerObject): void;
    /**
     * 获取总列数
     *
     * @static
     * @memberof SheetUtil
     */
    static getTotalColumn(): number;
    /**
     * 获取总行数
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static getTotalRow(): number;
    /**
     * 获取对应类型数据
     *
     * @static
     * @param {*} value
     * @param {string} type
     * @memberof SheetUtil
     */
    static getValueByType(value: IParams, type: string): string | number | boolean | IParams;
    /**
     * 设置筛选范围
     *
     * @static
     * @memberof SheetUtil
     */
    static setRangeFilter(totalRow: number, totalColumn: number): void;
    /**
     * 获取sheet文件
     *
     * @static
     * @return {*}
     * @memberof SheetUtil
     */
    static getLuckysheetFile(): any;
    /**
     * @description 插入行
     * @static
     * @param {number} index
     * @return {*}
     * @memberof SheetUtil
     */
    static insertRow(index: number): any;
    /**
     * @description 删除行
     * @static
     * @param {number} start
     * @param {number} end
     * @memberof SheetUtil
     */
    static deleteRow(start: number, end: number): any;
    /**
     * @description 设置行背景
     * @static
     * @memberof SheetUtil
     */
    static setRangeBg(range: IParams, color: string): void;
}
