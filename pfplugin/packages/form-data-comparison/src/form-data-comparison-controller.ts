/* eslint-disable no-dupe-else-if */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */

import {
  ControlVO,
  DataChangeEvent,
  EditFormController,
  FormNotifyState,
  IDataAbilityParams,
  ScriptFactory,
  calcDeCodeNameById,
  hasDeCodeName,
} from '@ibiz-template/runtime';
import { IDEFormDetail, IDEFormItem } from '@ibiz/model-core';
import { clone } from 'lodash-es';

export class FormDataComparisonController extends EditFormController {
  /**
   *   基础数据
   *
   * @author fangZhiHao
   * @date 2024-04-26 17:04:49
   * @type {IData}
   */
  baseResData: IData = [];

  /**
   *   对比数据
   *
   * @author fangZhiHao
   * @date 2024-04-26 17:04:49
   * @type {IData}
   */
  compareResData: IData = [];

  /**
   * 表单旧数据
   *
   * @author zk
   * @date 2023-12-20 11:12:43
   * @protected
   * @type {IData}
   * @memberof FormController
   */
  protected oldData: IData = new ControlVO();

  /**
   * version数据
   *
   * @author fangZhiHao
   * @date 2024-04-26 16:04:37
   * @type {IData[]}
   */
  versionData: IData[] = [];

  /**
   *  对比数据
   *
   * @author fangZhiHao
   * @date 2024-04-26 16:04:37
   * @type {IData[]}
   */
  comparisonArr: IData = {};

  /**
   *  基础表格数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:57
   * @type {IData[]}
   */
  gridData: IData[] = [];

  /**
   *  展示完全数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:04
   * @type {IData[]}
   */
  AllGridData: IData[] = [];

  /**
   *  去除相同数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:15
   * @type {IData[]}
   */
  removeSameGridData: IData[] = [];

  /**
   *  关系界面数据
   *
   * @author fangZhiHao
   * @date 2024-04-30 10:04:33
   * @type {IData}
   */
  AlldruipartData = new Map();

  /**
   *  关系界面数据长度
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:56
   * @type {number}
   */
  druipartDataSize: number = 0;

  /**
   *   关系界面实际数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:13
   * @type {IData}
   */
  newDruipartData: IData = {};

  protected async onMounted(): Promise<void> {
    await super.onMounted();

    // 获取下拉版本数据
    await this.getVersion();

    // 由表单模型计算表格模型
    if (this.model.deformPages && this.model.deformPages[0].deformDetails) {
      this.calcGridData(this.model.deformPages[0].deformDetails);
    }
    // 如果外面没有配置默认不加载的话，默认部件自己加载,simple模式不加载
    if (!this.state.isSimple && this.state.loadDefault) {
      this.load();
    }
  }

  /**
   *   获取版本数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:24
   */
  async getVersion() {
    const { REQUESTMETHOD, REQUESTPARAMS, REQUESTURL, RESPONSEMAP } = this.model
      .controlParam?.ctrlParams as IData;
    const method = REQUESTMETHOD || 'post';
    const owner_id = ScriptFactory.execScriptFn(
      { context: this.context, params: this.params },
      REQUESTPARAMS,
      { singleRowReturn: true },
    );
    const res = await ibiz.net[method as 'post'](REQUESTURL, {
      n_owner_id_eq: owner_id,
    });
    const map = JSON.parse(RESPONSEMAP);
    const data: IData[] = [];
    res.data.forEach((version: IData) => {
      // eslint-disable-next-line guard-for-in
      const mapdata: { [key: string]: string } = {};
      // eslint-disable-next-line guard-for-in
      for (const key in map) {
        mapdata[key] = version[map[key]];
      }
      data.push(mapdata);
    });
    this.versionData = data;
  }

  /**
   *  设置关系界面数据
   *
   * @author fangZhiHao
   * @date 2024-04-30 10:04:15
   * @param {string} version
   * @param {string} name
   * @param {IData} data
   */
  calcAlldruipartData(version: string, name: string, data: IData) {
    this.AlldruipartData.set(`${version}${name}`, data);
  }

  /**
   *  设置关系界面数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:38
   * @param {DataChangeEvent} args
   */
  setdruipartData(args: DataChangeEvent) {
    const key = `${args.context.version}${args.context.versionItemName}`;
    if (this.AlldruipartData.get(key)) {
      this.druipartDataSize += 1;
      const view = this.AlldruipartData.get(key);
      const name = view.model.xdataControlName!;
      const xdata = view.getController(name);
      const { compareItem, compareViewFieldName } = view.context;
      const { version } = args.context;
      let arr = [];

      if (compareItem) {
        const compareItemArr = compareItem.split(',');
        xdata.state.items.forEach((element: IData) => {
          const eleItem: string[] = [];
          compareItemArr.forEach((itmeKey: string) => {
            if (
              element[compareViewFieldName] &&
              element[compareViewFieldName][itmeKey]
            ) {
              eleItem.push(element[compareViewFieldName][itmeKey]);
            }
          });
          eleItem.sort();
          if (eleItem.length > 0) {
            arr.push(eleItem.join('.'));
          }
        });
      } else {
        arr = xdata.state.items;
      }
      arr.sort();
      if (args.context.version === 'base') {
        this.baseResData[args.context.versionItemName] = arr;
      } else {
        this.compareResData[args.context.versionItemName] = arr;
      }
      if (!this.newDruipartData[args.context.versionItemName]) {
        this.newDruipartData[args.context.versionItemName] = {};
        Object.assign(this.newDruipartData[args.context.versionItemName], {
          [version]: arr,
        });
      } else {
        Object.assign(this.newDruipartData[args.context.versionItemName], {
          [version]: arr,
        });
      }
    }
    if (this.druipartDataSize === this.AlldruipartData.size) {
      // 计算关系界面的差异
      const result = this.duripartDifference();
      this.calcCategorduriptData(this.AllGridData, result);
      const cloneremoveSameGridData = clone(this.AllGridData);
      this.removeSameGridData = this.removeSame(cloneremoveSameGridData);
    }
  }

  /**
   * 计算关系界面的差异
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:15
   * @return {*}
   */
  duripartDifference() {
    // 初始化两个新对象用来存放base和compase
    const bases: IData = {};
    const compasses: IData = {};
    // 遍历原始对象
    for (const key in this.newDruipartData) {
      if (Object.prototype.hasOwnProperty.call(this.newDruipartData, key)) {
        // 提取base属性
        bases[key] = this.newDruipartData[key].base;
        // 提取compase属性
        compasses[key] = this.newDruipartData[key].compare;
      }
    }
    return this.diffObjects(bases, compasses);
  }

  /**
   *  计算duriput样式
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  calcCategorduriptData(data: IData[], result: IData) {
    data.forEach(item => {
      if (item.detailType === 'DRUIPART') {
        const x = this.caleduriptCategory(item.name, result);
        item.category = x;
      }
      if (item.detailType === 'GROUPPANEL') {
        if (item.slot.length > 0) {
          this.calcCategorduriptData(item.slot, result);
        }
      }
    });
  }

  /**
   *  计算关系界面差异
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:45
   * @param {string} codeName
   * @param {IData} result
   * @return {*}
   */
  caleduriptCategory(codeName: string, result: IData) {
    if (result.added.includes(codeName)) {
      return 'added';
    }
    if (result.modified.includes(codeName)) {
      return 'modified';
    }
    if (result.deleted.includes(codeName)) {
      return 'deleted';
    }
    return 'samed';
  }

  /**
   *  计算属性类别
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:42
   * @param {string} codeName
   * @return {*}
   */
  caleCategory(codeName: string) {
    if (this.comparisonArr.added.includes(codeName)) {
      return 'added';
    }
    if (this.comparisonArr.modified.includes(codeName)) {
      return 'modified';
    }
    if (this.comparisonArr.deleted.includes(codeName)) {
      return 'deleted';
    }
    return 'samed';
  }

  /**
   *  计算表单分组
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:07
   * @param {IDEFormDetail[]} data
   * @return {*}
   */
  calcGroupPanel(data: IDEFormDetail[]) {
    const arr: IData[] = [];
    data.forEach(item => {
      if ((item as IDEFormItem).hidden === true) {
        return;
      }
      if (item.detailType === 'FORMITEM') {
        arr.push({
          detailType: item.detailType,
          caption: item.caption,
          name: item.codeName,
          oldItem: item,
          newItem: item,
        });
      }
      if (item.detailType === 'DRUIPART') {
        arr.push({
          detailType: item.detailType,
          caption: item.caption,
          name: item.codeName,
          oldItem: item,
          newItem: item,
        });
      }
      if (item.detailType === 'MDCTRL') {
        arr.push({
          detailType: item.detailType,
          caption: item.caption,
          name: item.codeName,
          oldItem: item,
          newItem: item,
        });
      }
    });
    return arr;
  }

  /**
   *  计算表格
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:07
   * @param {IDEFormDetail[]} data
   * @return {*}
   */
  calcGridData(data: IDEFormDetail[]) {
    data.forEach(item => {
      if ((item as IDEFormItem).hidden === true) {
        return;
      }
      if (item.detailType === 'FORMITEM') {
        this.gridData.push({
          detailType: item.detailType,
          caption: item.caption,
          name: item.codeName,
          oldItem: item,
          newItem: item,
        });
      }
      if (item.detailType === 'GROUPPANEL') {
        let slot = null;
        if ((item as IData).deformDetails) {
          slot = this.calcGroupPanel((item as IData).deformDetails);
        }
        this.gridData.push({
          detailType: item.detailType,
          caption: item.caption,
          slot,
        });
      }
      if (item.detailType === 'DRUIPART') {
        this.gridData.push({
          detailType: item.detailType,
          caption: item.caption,
          name: item.codeName,
          oldItem: item,
          newItem: item,
        });
      }
    });
  }

  /**
   *  计算类别样式
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  calcCategoryGridData(data: IData[]) {
    data.forEach(item => {
      if (item.detailType === 'FORMITEM') {
        const x = this.caleCategory(item.name);
        item.category = x;
      }
      if (item.detailType === 'GROUPPANEL') {
        if (item.slot.length > 0) {
          this.calcCategoryGridData(item.slot);
        }
      }
      if (item.detailType === 'MDCTRL') {
        const x = this.caleCategory(item.name);
        item.category = x;
      }
    });
  }

  /**
   *  去除相同项
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  removeSame(data: IData[]) {
    const result: IData[] = [];
    data.forEach(item => {
      if (item.detailType === 'FORMITEM' && item.category !== 'samed') {
        result.push(item);
      }
      if (item.detailType === 'GROUPPANEL') {
        const slot: IData[] = [];
        if (item.slot.length > 0) {
          item.slot.forEach((slotitem: IData) => {
            if (
              slotitem.detailType === 'FORMITEM' &&
              slotitem.category !== 'samed'
            ) {
              slot.push(slotitem);
            } else if (
              slotitem.detailType === 'MDCTRL' &&
              slotitem.category !== 'samed'
            ) {
              slot.push(slotitem);
            } else if (
              slotitem.detailType === 'DRUIPART' &&
              slotitem.category !== 'samed'
            ) {
              slot.push(slotitem);
            }
          });
        }
        if (slot.length > 0) {
          result.push({
            caption: item.caption,
            detailType: item.detailType,
            slot,
          });
        }
      }
    });

    return result;
  }

  isFalseyButNotEmpty(value: string | IData[] | null | undefined) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && value === '') ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }

  compareObjectValues(objA: IData, objB: IData) {
    return JSON.stringify(objA) !== JSON.stringify(objB);
  }

  /**
   *  判断两个对象的差异
   *  新增属性：在新对象中存在属性且属性值不能是falsey值（数字 0，布尔值 false 除外），不为空数组，不为空对象，且该属性在旧对象中不存在或其值为falsey值、空数组、空对象。
   *  修改属性：在新旧对象中都存在，且新旧值均不为falsey值（数字 0，布尔值 false 除外）、空对象、空数组，且值发生了变化。注意，对于引用对象，使用JSON.stringify进行字符串化对比。
   *  删除属性：在旧对象中存在且其值不是falsey值、空数组、空对象，但在新对象中不存在或其值为falsey值、空数组、空对象。
   *
   * @author fangZhiHao
   * @date 2024-04-26 13:04:59
   * @param {IData} oldObj
   * @param {IData} newObj
   * @return {*}
   */
  diffObjects(oldObj: IData, newObj: IData) {
    const addedProps = []; // 存储新增属性名
    const modifiedProps = []; // 存储修改属性名
    const deletedProps = []; // 存储删除属性名

    // 遍历新的对象，检查是否有属性被修改或新增
    // eslint-disable-next-line guard-for-in
    for (const key in newObj) {
      const oldValue = oldObj[key];
      const newValue = newObj[key];
      if (
        this.isFalseyButNotEmpty(oldValue) &&
        !this.isFalseyButNotEmpty(newValue)
      ) {
        // 属性不存在于旧对象中，且新值不是falsey值、空数组或空对象，视为新增
        addedProps.push(key);
      }
    }

    // eslint-disable-next-line guard-for-in
    for (const key in newObj) {
      const oldValue = oldObj[key];
      const newValue = newObj[key];

      if (
        !this.isFalseyButNotEmpty(oldValue) &&
        !this.isFalseyButNotEmpty(newValue) &&
        this.compareObjectValues(oldValue, newValue)
      ) {
        // 属性存在，新旧值均不是falsey值、空数组、空对象，且值发生了变化，视为修改
        modifiedProps.push(key);
      }
    }

    // 遍历旧的对象，检查是否有属性被删除
    for (const key in oldObj) {
      if (
        !Object.prototype.hasOwnProperty.call(newObj, key) ||
        this.isFalseyButNotEmpty(newObj[key])
      ) {
        const oldValue = oldObj[key];
        if (!this.isFalseyButNotEmpty(oldValue)) {
          // 属性存在于旧对象中，且不是falsey值、空数组、空对象，但在新对象中不存在或为falsey值、空数组、空对象，视为删除
          deletedProps.push(key);
        }
      }
    }

    return {
      added: addedProps,
      modified: modifiedProps,
      deleted: deletedProps,
    };
  }

  /**
   * 部件加载数据行为
   *
   * @author lxm
   * @date 2022-08-19 14:08:50
   */
  async load(args?: IDataAbilityParams): Promise<IData> {
    // 复制模式独立处理
    this.druipartDataSize = 0;
    this.newDruipartData = {};
    this.AlldruipartData = new Map();
    const copyMode = this.params.srfcopymode;
    let baseversion = '';
    let compareversion = '';
    const { base_version: baseVersion, compare_version: compareVersion } =
      this.params;

    baseversion =
      (args && args.data && (args.data as IData).baseVersion) || baseVersion;
    compareversion =
      (args && args.data && (args.data as IData).compareVersion) ||
      compareVersion;

    this.state.isLoaded = false;
    if (copyMode) {
      return this.copy();
    }
    const isLoadDraft = !hasDeCodeName(
      this.context,
      calcDeCodeNameById(this.model.appDataEntityId!),
    );
    // 加载草稿单独走一个方法
    if (isLoadDraft) {
      return this.loadDraft();
    }

    const { context, params } = this.handlerAbilityParams(args);

    const queryParams = clone(params);

    let res;
    let compareRes;
    try {
      await this.startLoading();
      await this.evt.emit('onBeforeLoad', { args: queryParams });
      res = await this.service.get(
        context,
        Object.assign(queryParams, { srfversionid: baseversion }),
      );
      compareRes = await this.service.get(
        context,
        Object.assign(queryParams, { srfversionid: compareversion }),
      );
      // diffObjects
      const arr = this.diffObjects(res.data, compareRes.data);
      this.comparisonArr = arr;
    } catch (error) {
      await this.evt.emit('onLoadError', { args: error as IData });
      this.actionNotification('GETERROR', {
        error: error as Error,
      });
      throw error;
    } finally {
      await this.endLoading();
    }

    this.state.modified = false;
    this.state.data = res.data;

    this.baseResData = res.data;
    this.compareResData = compareRes.data;

    // 缓存旧数据
    this.oldData = this.data.clone();
    this.formStateNotify(FormNotifyState.LOAD);

    await this.evt.emit('onLoadSuccess', { args: res.data });
    this.actionNotification('GETSUCCESS');
    this.state.isLoaded = true;

    this.AllGridData = clone(this.gridData);
    this.calcCategoryGridData(this.AllGridData);

    const cloneremoveSameGridData = clone(this.AllGridData);
    this.removeSameGridData = this.removeSame(cloneremoveSameGridData);

    return this.data;
  }
}
