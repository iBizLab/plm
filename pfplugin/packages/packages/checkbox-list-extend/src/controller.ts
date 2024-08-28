/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { clone } from 'ramda';
import { IAppCodeList, IListBox } from '@ibiz/model-core';
import {
  CodeListEditorController,
  CodeListItem,
  ScriptFactory,
} from '@ibiz-template/runtime';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import dayjs from 'dayjs';

dayjs.extend(quarterOfYear);
dayjs.extend(weekOfYear);

/**
 * 树型列表框
 *
 * @export
 * @class CheckboxListExtendController
 * @extends {EditorController}
 */
export class CheckboxListExtendController extends CodeListEditorController<IListBox> {
  /**
   * 分组模式
   *
   * @type {('YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'CODELIST' | 'FIELD' | 'NOGROUP')}
   * @memberof CheckboxListExtendController
   */
  public groupModel:
    | 'YEAR'
    | 'QUARTER'
    | 'MONTH'
    | 'WEEK'
    | 'DAY'
    | 'CODELIST'
    | 'FIELD'
    | 'NOGROUP' = 'NOGROUP';

  /**
   * 分组属性
   *
   * @type {string}
   * @memberof CheckboxListExtendController
   */
  public groupField: string = 'value';

  /**
   * 分组代码表
   *
   * @type {IData[]}
   * @memberof CheckboxListExtendController
   */
  public groupCodeList: IData[] = [];

  /**
   * 空值文本
   *
   * @type {string}
   * @memberof CheckboxListExtendController
   */
  public emptyValue: string = '';

  /**
   * 加载之后
   *
   * @type {string}
   * @memberof CheckboxListExtendController
   */
  public loadAfter: string = '';

  /**
   * 设置默认选中
   *
   * @type {string}
   * @memberof CheckboxListExtendController
   */
  public setDefaultSelect: string = '';

  /**
   * 排序
   *
   * @type {string}
   * @memberof CheckboxListExtendController
   */
  public dateSort: string = '';

  /**
   * 绘制模式
   *
   * @type {('TREE' | 'BUTTON')}
   * @memberof CheckboxListExtendController
   */
  public renderMode: 'TREE' | 'BUTTON' = 'TREE';

  /**
   * 模式
   *
   * @type {('horizontal' | 'vertical')}
   * @memberof CheckboxListExtendController
   */
  public mode: 'horizontal' | 'vertical' = 'vertical';

  /**
   * 单项选择
   *
   * @type {boolean}
   * @memberof CheckboxListExtendController
   */
  public singleSelect: boolean = false;

  /**
   * 代码表模型
   *
   * @type {(IAppCodeList | undefined)}
   * @memberof CheckboxListExtendController
   */
  codeList: IAppCodeList | undefined = undefined;

  protected async onInit(): Promise<void> {
    super.onInit();
    if (this.model.appCodeListId) {
      const app = await ibiz.hub.getApp(this.context.srfappid);
      this.codeList = app.codeList.getCodeList(this.model.appCodeListId);
    }
    this.initEditorParams();
  }

  /**
   * 初始化编辑器参数
   *
   * @protected
   * @memberof CheckboxListExtendController
   */
  protected initEditorParams() {
    const { editorParams } = this.model;
    if (editorParams) {
      this.groupModel = editorParams.GROUPMODEL || 'NOGROUP';
      if (editorParams.GROUPFIELD) {
        this.groupField = editorParams.GROUPFIELD.toLowerCase();
      }
      if (editorParams.GROUPCODELIST) {
        this.groupCodeList = JSON.parse(editorParams.GROUPCODELIST);
      }
      if (editorParams.EMPTYVALUE) {
        this.emptyValue = editorParams.EMPTYVALUE.toLowerCase();
      }
      if (editorParams.RENDERMODE) {
        this.renderMode = editorParams.RENDERMODE;
      }
      if (editorParams.MODE) {
        this.mode = editorParams.MODE;
      }
      if (editorParams.DATESORT) {
        this.dateSort = editorParams.DATESORT;
      }
      if (editorParams.LOADAFTER) {
        this.loadAfter = editorParams.LOADAFTER;
      }
      if (editorParams.SETDEFAULTSELECT) {
        this.setDefaultSelect = editorParams.SETDEFAULTSELECT;
      }
      if (editorParams.SINGLESELECT) {
        this.singleSelect = editorParams.SINGLESELECT === 'true';
      }
    }
  }

  /**
   * 处理代码表数据
   *
   * @param {readonly} items
   * @param {*} CodeListItem
   * @param {*} []
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public handleCodeListData(items: readonly CodeListItem[], data: IData) {
    let result: IData[] = clone(items);
    if (this.dateSort) {
      result = this.handleSort(result);
    }
    switch (this.groupModel) {
      case 'YEAR':
        result = this.calcYearData(result);
        break;
      case 'QUARTER':
        result = this.calcQuarterData(result);
        break;
      case 'WEEK':
        result = this.calcWeekData(result);
        break;
      case 'MONTH':
        result = this.calcMonthData(result);
        break;
      case 'DAY':
        result = this.calcDayData(result);
        break;
      case 'CODELIST':
        result = this.calcGroupCodelistData(result);
        break;
      case 'FIELD':
        result = this.calcFieldData(result);
        break;
    }
    if (this.loadAfter) {
      result = ScriptFactory.execScriptFn(
        {
          items: result,
          context: this.context,
          params: this.params,
          data,
        },
        this.loadAfter,
        { isAsync: false },
      ) as IData[];
    }
    return result;
  }

  /**
   * 处理排序
   *
   * @param {IData[]} result
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public handleSort(result: IData[]) {
    if (Object.is(this.dateSort, 'DESC')) {
      return result.sort((pre, cur) => {
        return dayjs(cur.value).unix() - dayjs(pre.value).unix();
      });
    }
    return result.sort((pre, cur) => {
      return dayjs(pre.value).unix() - dayjs(cur.value).unix();
    });
  }

  /**
   * 计算年分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcYearData(items: IData[]) {
    const result: IData[] = [];
    const yearDict: { [key: string]: IData } = {};
    items.forEach(item => {
      const date = dayjs(item.value);
      const year = date.format('YYYY');
      if (!yearDict[year]) {
        yearDict[year] = {
          text: year,
          value: year,
          group: true,
          children: [],
        };
        result.push(yearDict[year]);
      }
      const yearItem = yearDict[year];
      yearItem.children.push(item);
    });
    return result;
  }

  /**
   * 计算季度分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcQuarterData(items: IData[]) {
    const result: IData[] = [];
    const yearDict: { [key: string]: IData } = {};
    items.forEach(item => {
      const date = dayjs(item.value);
      const year = date.format('YYYY');
      const quarter = this.getQuarterDetail(date.quarter(), year);
      if (!yearDict[year]) {
        yearDict[year] = {
          text: year,
          value: year,
          group: true,
          children: [],
        };
        result.push(yearDict[year]);
      }
      const yearItem = yearDict[year];
      const quarterItem = yearItem.children.find(
        (_item: IData) => _item.value === quarter,
      );
      if (quarterItem) {
        quarterItem.children.push(item);
      } else {
        yearItem.children.push({
          text: quarter,
          value: quarter,
          group: true,
          children: [item],
        });
      }
    });
    return result;
  }

  /**
   * 计算年周分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcWeekData(items: IData[]) {
    const result: IData[] = [];
    const yearDict: { [key: string]: IData } = {};
    items.forEach(item => {
      const date = dayjs(item.value);
      const year = date.format('YYYY');
      const week = `${year}-${date.week()}`;
      if (!yearDict[year]) {
        yearDict[year] = {
          text: year,
          value: year,
          group: true,
          children: [],
        };
        result.push(yearDict[year]);
      }
      const yearItem = yearDict[year];
      const weekItem = yearItem.children.find(
        (_item: IData) => _item.value === week,
      );
      if (weekItem) {
        weekItem.children.push(item);
      } else {
        yearItem.children.push({
          text: week,
          value: week,
          group: true,
          children: [item],
        });
      }
    });
    return result;
  }

  /**
   * 计算月分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcMonthData(items: IData[]) {
    const result: IData[] = [];
    const yearDict: { [key: string]: IData } = {};
    items.forEach(item => {
      const date = dayjs(item.value);
      const year = date.format('YYYY');
      const month = date.format('YYYY-MM');
      if (!yearDict[year]) {
        yearDict[year] = {
          text: year,
          value: year,
          group: true,
          children: [],
        };
        result.push(yearDict[year]);
      }
      const yearItem = yearDict[year];
      const monthItem = yearItem.children.find(
        (_item: IData) => _item.value === month,
      );
      if (monthItem) {
        monthItem.children.push(item);
      } else {
        yearItem.children.push({
          text: month,
          value: month,
          group: true,
          children: [item],
        });
      }
    });
    return result;
  }

  /**
   * 计算天分组数据
   *
   * @param {IData[]} items
   * @memberof CheckboxListExtendController
   */
  public calcDayData(items: IData[]) {
    return items;
  }

  /**
   * 计算代码表分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcGroupCodelistData(items: IData[]) {
    const result: IData[] = [];
    if (this.groupCodeList) {
      const groupData: { [key: string]: IData } = {};
      items.forEach(item => {
        const groupValue = item[this.groupField];
        if (!groupData[groupValue]) {
          const codeListItem = this.groupCodeList.find(_codeListItem =>
            Object.is(_codeListItem.value, groupValue),
          );
          if (codeListItem) {
            groupData[groupValue] = {
              text: codeListItem.text,
              value: codeListItem.value,
              group: true,
              children: [],
            };
          } else {
            groupData[groupValue] = {
              text: item.text,
              value: item.value,
              group: true,
              children: [],
            };
          }
          result.push(groupData[groupValue]);
        }
        groupData[groupValue].children.push(item);
      });
    } else {
      ibiz.message.warning('分组失败，未配置分组代码表数据！');
    }
    return result;
  }

  /**
   * 计算属性分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public calcFieldData(items: IData[]) {
    const result: IData[] = [];
    const groupData: { [key: string]: IData } = {};
    items.forEach(item => {
      const groupValue = item[this.groupField];
      if (!groupData[groupValue]) {
        groupData[groupValue] = {
          text: groupValue,
          value: groupValue,
          group: true,
          children: [],
        };
        result.push(groupData[groupValue]);
      }
      groupData[groupValue].children.push(item);
    });
    return result;
  }

  /**
   * 获取季度细节
   *
   * @param {number} quarter
   * @param {string} year
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  public getQuarterDetail(quarter: number, year: string) {
    switch (quarter) {
      case 1:
        return `${year}-01~${year}-03`;
      case 2:
        return `${year}-04~${year}-06`;
      case 3:
        return `${year}-07~${year}-09`;
      case 4:
        return `${year}-10~${year}-12`;
    }
  }

  /**
   * 设置默认选中
   *
   * @param {IData} items
   * @param {IData} data
   * @memberof CheckboxListExtendController
   */
  public getDefaultSelect = (items: IData, data: IData) => {
    let result: string[] = [];
    if (this.setDefaultSelect) {
      result = ScriptFactory.execScriptFn(
        {
          items,
          context: this.context,
          params: this.params,
          data,
        },
        this.setDefaultSelect,
        { isAsync: false },
      ) as string[];
    }
    return result;
  };
}
