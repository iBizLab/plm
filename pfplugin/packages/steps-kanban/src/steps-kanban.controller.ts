/* eslint-disable no-nested-ternary */
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
import { RuntimeModelError, clone, toNumberOrNil } from '@ibiz-template/core';
import {
  ControlVO,
  IDragChangeInfo,
  IKanbanGroupState,
  KanbanController,
  calcDeCodeNameById,
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
   * @description 可视化数据长度
   * @type {number}
   * @memberof StepsKanbanController
   */
  public visiableLength: number = 10;

  /**
   * @description 分组项高度（计算虚拟列表时使用）
   * @type {number}
   * @memberof StepsKanbanController
   */
  public groupItemSize: number = 160;

  protected async onCreated(): Promise<void> {
    await super.onCreated();
    this.visiableLength =
      toNumberOrNil(this.controlParams.visiablecount) || this.visiableLength;
    this.groupItemSize =
      toNumberOrNil(this.controlParams.groupitemsize) || this.groupItemSize;
  }

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

  /**
   * 拖拽变更事件处理回调
   * @author lxm
   * @date 2023-09-11 04:12:58
   * @param {IDragChangeInfo} info
   * @return {*}  {Promise<void>}
   */
  async onDragChange(
    info: IDragChangeInfo,
    split?: string | number,
  ): Promise<void> {
    if (!this.enableEditGroup) {
      if (info.from !== info.to) {
        ibiz.message.warning(
          ibiz.i18n.t('runtime.controller.control.kanban.adjustmentsGroup'),
        );
        return;
      }
    }
    const { from, to, fromIndex, toIndex } = info;
    const groupField = this.model.groupAppDEFieldId!;
    const sortField = this.model.minorSortAppDEFieldId!;
    let fromGroup = this.state.groups.find(x => x.key === from)!;
    let toGroup = this.state.groups.find(x => x.key === to)!;

    // 分割分组
    if (!fromGroup) {
      fromGroup = this.splitMap.get(from);
    }
    if (!toGroup) {
      toGroup = this.splitMap.get(to);
    }

    if (!this.enableEditOrder) {
      if (info.from === info.to) {
        ibiz.message.warning(
          ibiz.i18n.t('runtime.controller.control.kanban.noAllowReorder'),
        );
        return;
      }

      // 只修改分组不管排序
      const draggedItem = fromGroup.children[fromIndex];
      draggedItem[groupField] = info.to; // 变更分组
      this.filterGroupField([draggedItem], groupField);
      return this.updateChangedItems([draggedItem] as ControlVO[]);
    }

    const originArr = [...toGroup.children];
    const moveAction = (this.model as IData).moveControlAction?.appDEMethodId;
    if (!moveAction) {
      throw new RuntimeModelError(
        this.model,
        ibiz.i18n.t('runtime.controller.common.md.noMoveDataCconfig'),
      );
    }
    this.state.updating = true;
    // 计算移动数据,目标分组指定位置存在数据，则添加到目标分组指定位置之前，若没有，则添加到当前分组数据排序值最大的后面
    const computeMoveData = (
      _fromIndex: number,
      _toIndex: number,
      _draggedItem: IData,
      targetArray: IData[],
      isCrossGroup: boolean,
    ): IData => {
      let moveData = {};
      const targetItem = targetArray[_toIndex];
      if (!targetItem) {
        let tempArray: IData[] = [];
        if (targetArray.length > 0) {
          tempArray = targetArray;
        }
        if (tempArray.length > 0) {
          const maxItem = tempArray.reduce((prev, curr) => {
            const sortCondition = prev[sortField] > curr[sortField];
            if (
              sortCondition &&
              prev[this.dataEntity.keyAppDEFieldId!] !== _draggedItem.srfkey
            ) {
              return prev;
            }
            if (
              !sortCondition &&
              curr[this.dataEntity.keyAppDEFieldId!] !== _draggedItem.srfkey
            ) {
              return curr;
            }
            return prev;
          });
          if (
            maxItem &&
            maxItem[this.dataEntity.keyAppDEFieldId!] !== _draggedItem.srfkey
          ) {
            moveData = {
              srftargetkey: maxItem.srfkey,
              srfmovetype: 'MOVEAFTER',
            };
          }
        }
      } else {
        moveData = {
          srftargetkey: targetItem.srfkey,
          srfmovetype:
            _toIndex < targetArray.length - 1
              ? 'MOVEBEFORE'
              : isCrossGroup
                ? 'MOVEBEFORE'
                : 'MOVEAFTER',
        };
      }
      return moveData;
    };

    // 拖拽数据
    const draggedItem = clone(fromGroup.children[fromIndex]);
    if (info.from !== info.to) {
      let key = info.to;
      if (split) {
        key = (info.to as string).split('_')[0];
      }
      draggedItem[groupField] = key; // 变更分组
    }

    // 前台先改值
    const removeItems = fromGroup.children.splice(fromIndex, 1);
    toGroup.children.splice(toIndex, 0, ...removeItems);

    if (info.from !== info.to) {
      // 变更分组
      draggedItem[groupField] = info.to;
      // 存在移动数据行为，先变更分组再变更排序
      const app = ibiz.hub.getApp(this.model.appId);
      const deName = calcDeCodeNameById(this.model.appDataEntityId!);
      const tempContext = this.context.clone();
      tempContext[deName] = draggedItem.srfkey;
      this.filterGroupField([draggedItem], groupField);
      try {
        await app.deService.exec(
          this.model.appDataEntityId!,
          'update',
          tempContext,
          draggedItem,
        );
        const index = this.state.items.findIndex(
          x => x.srfkey === draggedItem[this.dataEntity.keyAppDEFieldId!],
        );
        if (index !== -1) {
          this.state.items.splice(index, 1, draggedItem);
        }
      } catch (error) {
        this.state.updating = false;
        throw new RuntimeModelError(
          this.model,
          ibiz.i18n.t('runtime.controller.common.md.changeGroupError'),
        );
      }
    }
    // 移动排序
    const params = computeMoveData(
      fromIndex,
      toIndex,
      draggedItem,
      originArr,
      info.from !== info.to,
    );
    try {
      const { ok, result } = await (this as IData).moveOrderItem(
        draggedItem,
        params,
      );
      if (ok) {
        // 返回空数组不做处理，非空数组同步界面数据,无数据界面重刷新
        if (Array.isArray(result) && result.length > 0) {
          result.forEach(item => {
            const index = this.state.items.findIndex(
              x => x.srfkey === item[this.dataEntity.keyAppDEFieldId!],
            );
            if (index !== -1) {
              this.state.items[index][sortField] = item[sortField];
            }
          });
        } else {
          await this.refresh();
        }
      }
    } catch (error) {
      this.state.updating = false;
      this.actionNotification(`MOVEERROR`, {
        error: error as Error,
      });
    } finally {
      await this.afterLoad({}, this.state.items);
      this.state.updating = false;
    }
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
