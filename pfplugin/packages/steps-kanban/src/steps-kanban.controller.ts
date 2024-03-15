/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import {
  ControlVO,
  IDragChangeInfo,
  IKanbanGroupState,
  KanbanController,
} from '@ibiz-template/runtime';

export class StepsKanbanController extends KanbanController {
  /**
   *
   *
   * @memberof StepsKanbanController
   */
  public splitMap = new Map();

  /**
   * 步骤分组标识
   *
   * @type {(string | number)}
   * @memberof StepsKanbanController
   */
  public splitGroupKey: string | number = '';

  /**
   * 处理数据分组
   *
   * @memberof StepsKanbanController
   */
  async handleDataGroup() {
    await super.handleDataGroup();
    if (this.state.groups.length > 0) {
      const group = this.state.groups.find((group: IKanbanGroupState) => {
        const codeListItem = this.groupCodeListItems!.find(
          item => item.value === group.key,
        )!;
        if ((codeListItem.data as any) === 1) {
          this.splitGroupKey = group.key;
          return true;
        }
      });
      if (group) {
        const runing = group.children.filter(
          item => !Object.is(item.entry_status, '2'),
        );
        const finish = group.children.filter(item =>
          Object.is(item.entry_status, '2'),
        );
        this.splitMap.set(`${group.key}_runing`, { children: runing });
        this.splitMap.set(`${group.key}_finish`, { children: finish });
      }
    }
  }

  async onDragChange(
    info: IDragChangeInfo,
    split?: string | number,
  ): Promise<void> {
    if (!this.enableEditGroup) {
      if (info.from !== info.to) {
        ibiz.message.warning('当前看板不允许调整分组！');
        return;
      }
    }

    const isAsc = this.model.minorSortDir === 'ASC';
    const { from, to, fromIndex, toIndex } = info;
    const groupField = this.model.groupAppDEFieldId!;
    const sortField = this.model.minorSortAppDEFieldId!;
    const modifiedItems: IData[] = [];
    let fromGroup = this.state.groups.find(x => x.key === from)!;
    let toGroup = this.state.groups.find(x => x.key === to)!;
    let isCustom = false;
    if (!fromGroup) {
      fromGroup = this.splitMap.get(from);
    }
    if (!toGroup) {
      isCustom = true;
      toGroup = this.splitMap.get(to);
    }

    if (!this.enableEditOrder) {
      if (info.from === info.to) {
        ibiz.message.warning('当前看板不允许调整次序');
        return;
      }

      // 只修改分组不管排序
      const draggedItem = fromGroup.children[fromIndex];
      draggedItem[groupField] = info.to; // 变更分组
      return this.updateChangedItems([draggedItem] as ControlVO[]);
    }

    /**
     * 获取下一个100的倍数
     * @author lxm
     * @date 2023-09-11 10:03:46
     * @param {number} num
     * @return {*}  {number}
     */
    const getNextSort = (num: number): number => {
      return num + (100 - (num % 100));
    };

    const originArr = [...toGroup.children];
    const changedArr = [...toGroup.children];

    // 计算出拖拽前和拖拽后的数组
    const draggedItem = fromGroup.children[fromIndex];
    if (info.from !== info.to) {
      let key = info.to;
      if (split) {
        key = (info.to as string).split('_')[0];
      }
      draggedItem[groupField] = key; // 变更分组
      changedArr.splice(toIndex, 0, draggedItem);
    } else {
      changedArr.splice(fromIndex, 1);
      changedArr.splice(toIndex, 0, draggedItem);
    }

    // 前台先改值
    const removeItems = fromGroup.children.splice(fromIndex, 1);
    toGroup.children.splice(toIndex, 0, ...removeItems);

    // 降序把数组反转,保证两个数组都是从小到大排
    if (!isAsc) {
      originArr.reverse();
      changedArr.reverse();
    }

    let lastSort: number;
    let cacheArr: IData[] = []; // 缓存的不修改数组
    let cacheLastSort: number; // 缓存不修改数组第一个元素上一个排序值
    changedArr.forEach((item, index) => {
      if (lastSort === undefined) {
        // 第一次出现要调整顺序的，如果不是0用原来位置的排序值，否则使用100
        if (item !== originArr[index] || (split && index === fromIndex)) {
          if (!originArr[index]) {
            // 从别的分组挪进来的且处于末尾时使用上一个元素的排序值的后一个100
            lastSort =
              index === 0 ? 100 : getNextSort(originArr[index - 1][sortField]);
          } else {
            lastSort = originArr[index][sortField] || 100; // 如果是0的时候给100否则用原来的
          }
          item[sortField] = lastSort;
          modifiedItems.push(item);
        }
      } else {
        // 如果当前排序值比上一个小，提升它的排序值
        if (lastSort >= item[sortField]) {
          if (cacheArr.length > 0) {
            cacheArr.forEach(cache => {
              cache[sortField] = getNextSort(cacheLastSort);
              modifiedItems.push(cache);
              cacheLastSort = cache[sortField];
            });
            lastSort = cacheLastSort;
            cacheLastSort = 0;
            cacheArr = [];
          }
          item[sortField] = getNextSort(lastSort);
          modifiedItems.push(item);
        } else {
          if (cacheArr.length === 0) {
            cacheLastSort = lastSort;
          }
          cacheArr.push(item);
        }
        lastSort = item[sortField];
      }
    });
    this.filterGroupField(modifiedItems, groupField);
    this.updateChangedItems(modifiedItems as ControlVO[]);
  }

  /**
   * 过滤分组属性
   *
   * @param {IData[]} items
   * @param {string} groupField
   * @memberof StepsKanbanController
   */
  public filterGroupField(items: IData[], groupField: string) {
    items.forEach(item => {
      const group: string = item[groupField];
      if (group.endsWith('_runing')) {
        item.entry_status = '1';
      } else if (group.endsWith('_finish')) {
        item.entry_status = '2';
      }
      item[groupField] = group.replace('_runing', '').replace('_finish', '');
    });
  }
}
