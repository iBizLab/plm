import { IDEGrid } from '@ibiz/model-core';
import {
  CodeListItem,
  ControlVO,
  GridController,
  IGridEvent,
  IGridState,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';
import { RuntimeModelError } from '@ibiz-template/core';

export class NumberGridController extends GridController<
  IDEGrid,
  IGridState,
  IGridEvent
> {
  /**
   * 分组代码表数据项
   *
   * @type {readonly}
   * @memberof NumberGridController
   */
  codeListItems?: readonly CodeListItem[];

  /**
   * 是否默认展开所有
   *
   * @type {boolean}
   * @memberof NumberGridController
   */
  public defaultExpandAll: boolean = false;

  /**
   * 初始化方法
   *
   * @memberof NumberGridController
   */
  async onCreated(): Promise<void> {
    await super.onCreated();
    const { ctrlParams = {} } = this.model.controlParam as IData;
    if (ctrlParams.DEFAULTEXPANDALL) {
      this.defaultExpandAll =
        Object.is(ctrlParams.DEFAULTEXPANDALL, 'TRUE') ||
        Object.is(ctrlParams.DEFAULTEXPANDALL, 'true');
    }
  }

  /**
   * 设置排序
   */
  setSort(fieldId?: string, order?: 'asc' | 'desc'): void {
    // 初始化不做赋值处理，加载之前处理排序字段
    if (!fieldId && !order) {
      return;
    }
    let key;
    if (fieldId) {
      key = this.fieldIdNameMap.get(fieldId)!.toLowerCase();
    }
    if (key && order) {
      this.state.sortQuery = `${key},${order}`;
    } else {
      // 排序字段和顺序只要有一个没有就置空
      this.state.sortQuery = '';
    }
    this.setSortCache();
  }

  /**
   * 设置排序缓存
   */
  setSortCache(): void {
    // 设置后更新localStorage里的
    if (this.view) {
      if (this.state.sortQuery) {
        localStorage.setItem(
          `${this.view.model.id}.${this.model.name}.sort`,
          this.state.sortQuery,
        );
      } else {
        localStorage.removeItem(
          `${this.view.model.id}.${this.model.name}.sort`,
        );
      }
    }
  }

  /**
   * 获取请求过滤参数（整合了视图参数，各种过滤条件，排序，分页）
   */
  async getFetchParams(extraParams?: IParams): Promise<IParams> {
    const { curPage, size, sortQuery, noSort } = this.state;
    const resultParams: IParams = {
      ...this.params,
    };
    // 有size才给page和size。size默认值给0就不传分页和大小
    if (size) {
      resultParams.page = curPage - 1;
      resultParams.size = size;
    }

    // 排序条件
    if (!noSort) {
      if (sortQuery) {
        resultParams.sort = sortQuery;
      } else {
        // 设置默认排序(localStorage的优先级高于配置)
        const { minorSortAppDEFieldId, minorSortDir } = this.getSortModel();
        if (
          this.view &&
          localStorage.getItem(`${this.view.model.id}.${this.model.name}.sort`)
        ) {
          this.state.sortQuery = localStorage.getItem(
            `${this.view.model.id}.${this.model.name}.sort`,
          )!;
        } else if (minorSortAppDEFieldId && minorSortDir) {
          const fieldName = this.fieldIdNameMap.get(minorSortAppDEFieldId)!;
          this.state.sortQuery = `${fieldName.toLowerCase()},${minorSortDir.toLowerCase()}`;
        }
        resultParams.sort = this.state.sortQuery;
        this.setSortCache();
      }
    }
    // *请求参数处理
    await this._evt.emit('onBeforeLoad', undefined);
    // 合并搜索条件参数，这些参数在onBeforeLoad监听里由外部填入
    Object.assign(resultParams, {
      ...this.state.searchParams,
    });

    // 额外附加参数
    if (extraParams) {
      Object.assign(resultParams, extraParams);
    }
    return resultParams;
  }

  /**
   * 初始化表格分组
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof NumberGridController
   */
  protected async initGroup(): Promise<void> {
    const { groupCodeListId, groupMode, enableGroup } = this.model;
    if (enableGroup) {
      if (groupMode === 'CODELIST') {
        if (!groupCodeListId) {
          throw new RuntimeModelError(
            this.model,
            '代码表分组模式需要配置代码表',
          );
        }
        const app = ibiz.hub.getApp(this.context.srfappid);
        this.codeListItems = await app.codeList.get(
          groupCodeListId,
          this.context,
          this.params,
        );
      }
    }
  }

  /**
   * 计算分组数据
   *
   * @protected
   * @param {IData[]} items
   * @memberof NumberGridController
   */
  protected calcGroupData(items: IData[]): void {
    const { enableGroup, groupMode, groupAppDEFieldId } = this.model;
    if (enableGroup && groupAppDEFieldId) {
      const groupMap = new Map<string | number, IData[]>();
      const codeListGroup = groupMode === 'CODELIST';
      const groupFiledName = groupAppDEFieldId.toLowerCase();
      if (codeListGroup) {
        this.codeListItems!.forEach(item => {
          groupMap.set(item.value, []);
        });
      }
      items.forEach(item => {
        const groupFieldValue = item[groupFiledName];
        // 非代码表分组时，不存在时根据数据创建分组
        if (!codeListGroup && !groupMap.has(groupFieldValue)) {
          groupMap.set(groupFieldValue, []);
        }
        if (groupMap.has(groupFieldValue)) {
          groupMap.get(groupFieldValue)!.push(item);
        }
      });
      this.state.groups = [];
      groupMap.forEach((value, key) => {
        const codeListItem = this.codeListItems?.find(
          item => item.value === key,
        );
        (this.state.groups as IData).push({
          caption: codeListItem?.text || `${key || '其他'}`,
          groupIcon: codeListItem?.sysImage,
          key,
          children: value,
        });
      });
    }
  }

  async afterLoad(
    args: MDCtrlLoadParams,
    items: ControlVO[],
  ): Promise<ControlVO[]> {
    await super.afterLoad(args, items);
    const isInitialLoad = args.isInitialLoad === true;
    // 初始加载需要重置选中数据
    if (isInitialLoad) {
      this.state.selectedData = [];
    } else {
      const selectedData = this.state.selectedData.filter(select =>
        this.state.items.find(item => select.tempsrfkey === item.tempsrfkey),
      );
      this.state.selectedData = selectedData;
    }
    return items;
  }

  /**
   * 表格行单击
   *
   * @param {IData} data
   * @return {*}  {Promise<void>}
   * @memberof NumberGridController
   */
  async onRowClick(data: IData): Promise<void> {
    // 表格行单击且单选时，选中行
    if (this.state.singleSelect) {
      this.setSelection([data]);
    }

    // 激活事件
    if (this.state.mdctrlActiveMode === 1) {
      await this.setActive(data);
    }
  }
}
