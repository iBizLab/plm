/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import {
  FormMDCtrlRepeaterController,
  getDefaultValue,
} from '@ibiz-template/runtime';
import { IDEFormItem } from '@ibiz/model-core';
import { createUUID } from 'qx-util';

export class RepeaterGridCaseStepsController extends FormMDCtrlRepeaterController {
  /**
   * 分组判断标识
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public groupField = 'is_group';

  /**
   * 分组父标识
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public parentField = 'group_id';

  /**
   * 实体主键
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public entityKey = 'id';

  /**
   * 预置添加行为组
   *
   * @type {IData[]}
   * @memberof RepeaterGridCaseStepsController
   */
  public presetAddAction: IData[] = [
    { text: '添加步骤', value: 'addSteps', icon: 'add-outline' },
    { text: '添加分组', value: 'addGroup', icon: 'menu-outline' },
  ];

  /**
   * 预置分组行为
   *
   * @type {IData[]}
   * @memberof RepeaterGridCaseStepsController
   */
  public presetGroupActions: IData[] = [
    {
      text: '向上添加步骤',
      value: 'addTopStep',
      icon: 'arrow-up-outline',
      allow: ['children'],
    },
    {
      text: '向下添加步骤',
      value: 'addBottomStep',
      icon: 'arrow-down-outline',
      allow: ['children'],
    },
    {
      text: '添加子步骤',
      value: 'addChildrenStep',
      icon: 'copy-outline',
      allow: ['group'],
    },
    {
      text: '复制',
      value: 'copy',
      icon: 'copy-outline',
      allow: ['group', 'children'],
    },
    {
      text: '转换为分组',
      value: 'transform',
      icon: 'shuffle-outline',
      allow: [],
    },
  ];

  /**
   * 处理添加行为组
   *
   * @param {string} value
   * @memberof RepeaterGridCaseStepsController
   */
  public handleAddAction(value: string) {
    switch (value) {
      case 'addSteps':
        this.create();
        break;
      case 'addGroup':
        const id = createUUID();
        this.insertValue({
          [this.groupField]: 1,
          [this.entityKey]: id,
        });
        this.insertValue({
          [this.parentField]: id,
          [this.entityKey]: createUUID(),
        });
        break;
    }
  }

  /**
   * 新建分组数据
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public insertValue(item: IData, index?: number) {
    let tempValue = this.value as IData[] | null;
    tempValue = tempValue ? [...tempValue] : [];
    if (index !== undefined) {
      tempValue.splice(index, 0, item);
    } else {
      tempValue.push(item);
    }
    this.setValue(tempValue);
  }

  /**
   * 获取分组行为
   *
   * @param {boolean} isGroup
   * @param {boolean} isChildren
   * @return {*}
   * @memberof RepeaterGridCaseStepsController
   */
  public getActionsByType(isGroup: boolean, isChildren: boolean) {
    if (isGroup) {
      return this.presetGroupActions.filter((action: IData) => {
        return action.allow.includes('group');
      });
    }
    if (isChildren) {
      return this.presetGroupActions.filter((action: IData) => {
        return action.allow.includes('children');
      });
    }
    return this.presetGroupActions;
  }

  public handleGroupAction(action: IData) {
    const { actionType, index, row } = action;
    switch (actionType) {
      case 'addTopStep':
        this.insertValue(
          {
            [this.parentField]: row[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: createUUID(),
          },
          index,
        );
        break;
      case 'addBottomStep':
        this.insertValue(
          {
            [this.parentField]: row[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: createUUID(),
          },
          index + 1,
        );
        break;
      case 'addChildrenStep':
        this.insertValue(
          {
            [this.parentField]: row[this.entityKey],
            [this.groupField]: 0,
            [this.entityKey]: createUUID(),
          },
          index + 1,
        );
        break;
      case 'copy':
        this.handleCopy(action);
        break;
      case 'transform':
        const uuid = createUUID();
        const arrData = [...(this.value as IData[])];
        arrData[index][this.groupField] = 1;
        arrData[index][this.entityKey] = uuid;
        arrData[index].name = arrData[index].description;
        delete arrData[index].description;
        arrData.splice(index + 1, 0, {
          [this.parentField]: arrData[index][this.entityKey],
          [this.groupField]: 0,
          [this.entityKey]: createUUID(),
        });
        this.setValue(arrData);
        break;
    }
  }

  /**
   * 处理拷贝
   *
   * @param {IData} item
   * @memberof RepeaterGridCaseStepsController
   */
  public handleCopy(item: IData) {
    const { index, row } = item;
    const uuid = createUUID();
    if (row[this.groupField]) {
      const id = row[this.entityKey];
      const tempValue = [...(this.value as IData[])];
      const copyData = tempValue
        .filter((_item: IData) => Object.is(_item[this.parentField], id))
        .map((_item: IData) => {
          return {
            ..._item,
            [this.parentField]: uuid,
            [this.entityKey]: createUUID(),
          };
        });
      tempValue.splice(
        index + 1 + copyData.length,
        0,
        { ...row, [this.entityKey]: uuid },
        ...copyData,
      );
      this.setValue(tempValue);
    } else {
      this.insertValue({ ...row, [this.entityKey]: uuid }, index + 1);
    }
  }

  /**
   * 新建行数据（重写）
   *
   * @param {number} [index]
   * @memberof RepeaterGridCaseStepsController
   */
  create(index?: number): void {
    const defaultData = this.calcDefaultValue({});
    if (this.isSingleData) {
      this.setValue(defaultData);
    } else {
      // 多数据，拷贝数组再添加新对象
      let tempValue = this.value as IData[] | null;
      tempValue = tempValue ? [...tempValue] : [];
      if (index !== undefined) {
        tempValue.splice(index, 0, defaultData);
      } else {
        tempValue.push(defaultData);
      }
      this.setValue(tempValue);
    }
  }

  /**
   * 自定义删除
   *
   * @param {number} [index]
   * @return {*}  {void}
   * @memberof RepeaterGridCaseStepsController
   */
  remove(index?: number): void {
    if (this.isSingleData) {
      // 单项数据的时候删除就是清空
      this.setValue(null);
      return;
    }
    const tempValue = [...(this.value as IData[])];
    const removeData: IData = tempValue[index!];
    if (removeData[this.groupField] == 1) {
      const children = tempValue.filter((_item: IData) =>
        Object.is(_item[this.parentField], removeData[this.entityKey]),
      );
      tempValue.splice(index!, children.length + 1);
      this.setValue(tempValue);
    } else {
      const newArr = (this.value! as IData[]).filter((_, i) => {
        return index !== i;
      });

      this.setValue(newArr);
    }
  }

  /**
   * 计算新建默认值
   *
   * @param {IData} data
   * @return {*}  {IData}
   * @memberof RepeaterGridCaseStepsController
   */
  public calcDefaultValue(data: IData): IData {
    const result: IData = {};
    const deformDetails: IDEFormItem[] = this.model.deformDetails || [];
    Object.values(deformDetails).forEach(detail => {
      const { createDV, createDVT } = detail;
      const defaultVal = getDefaultValue(
        {
          name: '',
          valueType: createDVT,
          defaultValue: createDV,
          valueFormat: detail.valueFormat,
        },
        { data, context: this.context, params: this.params },
      );
      if (defaultVal !== undefined) {
        result[detail.codeName!] = defaultVal;
      }
    });
    return result;
  }

  /**
   * 批量操作列数据
   *
   * @param {string} name
   * @param {string} value
   * @memberof RepeaterGridCaseStepsController
   */
  public batchSetColumnData(name: string, value: string) {
    const arrData = [...(this.value as IData[])];
    this.setValue(
      arrData.map(item => {
        return Object.assign(item, { [name]: value });
      }),
    );
  }
}
