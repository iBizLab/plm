/* eslint-disable no-param-reassign */
import {
  awaitTimeout,
  mergeDefaultInLeft,
  RuntimeError,
} from '@ibiz-template/core';
import {
  calcDeCodeNameById,
  ControlVO,
  GridNotifyState,
  GridRowState,
  MDCtrlLoadParams,
  Srfuf,
  TreeGridController,
} from '@ibiz-template/runtime';
import { IDETreeGrid } from '@ibiz/model-core';
import { INumberTreeGridEvent, INumberTreeGridState } from './interface';

export class NumberTreeGridController extends TreeGridController<
  IDETreeGrid,
  INumberTreeGridState,
  INumberTreeGridEvent
> {
  get overflowMode(): 'wrap' | 'ellipsis' {
    return 'ellipsis';
  }

  /**
   * 是否默认展开所有
   *
   * @type {boolean}
   * @memberof NumberTreeGridController
   */
  public defaultExpandAll: boolean = false;

  /**
   * 指定展开列下标
   *
   * @type {boolean}
   * @memberof NumberGridController
   */
  public expandColumnIndex!: number;

  protected initState(): void {
    super.initState();
    this.state.nodeLoadedMap = new Map();
    const key = `SHOW_MODE_${this.context.project}_${this.view.model.codeName}`;
    const showMode = localStorage.getItem(key);
    if (showMode === 'tree') {
      this.state.showTreeGrid = true;
    } else if (showMode === 'grid') {
      this.state.showTreeGrid = false;
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
    await this.evt.emit('onBeforeLoad', undefined);
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
   * 切换显示模式
   *
   * @param {IData} param
   * @memberof NumberTreeGridController
   */
  async switchShowMode(param: IData): Promise<void> {
    const { showMode } = param;
    if (showMode) {
      if (showMode === 'tree') {
        this.state.showTreeGrid = true;
      } else if (showMode === 'grid') {
        this.state.showTreeGrid = false;
      }
      // 切换显示时重置节点加载map
      this.state.nodeLoadedMap.clear();
      await this.load();
    }
  }

  /**
   * 初始化方法
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  protected async onCreated(): Promise<void> {
    await super.onCreated();
    const { ctrlParams = {} } = this.model.controlParam as IData;
    if (ctrlParams.DEFAULTEXPANDALL) {
      this.defaultExpandAll =
        Object.is(ctrlParams.DEFAULTEXPANDALL, 'TRUE') ||
        Object.is(ctrlParams.DEFAULTEXPANDALL, 'true');
    }
    if (ctrlParams.GRIDROWACTIVEMODE) {
      this.state.mdctrlActiveMode = JSON.parse(ctrlParams.GRIDROWACTIVEMODE);
    }
    if (ctrlParams.EXPANDCOLUMNINDEX) {
      this.expandColumnIndex = ctrlParams.EXPANDCOLUMNINDEX;
    }
  }

  /**
   * 获取变化的数据
   *
   * @param {IData[]} originalArray
   * @param {IData[]} updatedArray
   * @return {*}  {{ added: IData[]; removed: IData[] }}
   * @memberof NumberTreeGridController
   */
  findChanges(
    originalArray: IData[],
    updatedArray: IData[],
  ): { added: IData[]; removed: IData[]; changed: IData[] } {
    const added: IData[] = [];
    const removed: IData[] = [];
    const changed: IData[] = [];

    // 创建一个 Map 以便快速查找
    const originalMap = new Map<string, IData>();
    originalArray.forEach(item => originalMap.set(item.srfkey, item));

    // 找到新增的元素
    updatedArray.forEach(item => {
      if (!originalMap.has(item.srfkey)) {
        added.push(item);
      }
    });

    // 找到被删除的元素
    const updatedMap = new Map<string, IData>();
    updatedArray.forEach(item => updatedMap.set(item.srfkey, item));

    originalArray.forEach(item => {
      if (!updatedMap.has(item.srfkey)) {
        removed.push(item);
      }
    });

    // 找到变更父节点的元素
    originalArray.forEach(oldItem => {
      const newItem = updatedArray.find(up => up.srfkey === oldItem.srfkey);
      if (
        oldItem &&
        newItem &&
        oldItem[this.treeGridParentField] !== newItem[this.treeGridParentField]
      ) {
        changed.push(oldItem);
        changed.push(newItem);
      }
    });
    return { added, removed, changed };
  }

  /**
   * 刷新
   *
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async refresh(isInitialLoad = false): Promise<void> {
    const oldNodes: IData[] = [...this.state.items];
    await this.load({ isInitialLoad });
    const { added, removed, changed } = this.findChanges(
      oldNodes,
      this.state.items,
    );
    [...added, ...removed, ...changed].forEach(data => {
      const parentNode = this.state.items.find(
        node =>
          data[this.treeGridParentField] &&
          node[this.treeGridValueField] === data[this.treeGridParentField],
      );
      // 父已经加载过的节点需要重载
      if (parentNode && this.state.nodeLoadedMap.has(parentNode.tempsrfkey)) {
        this.evt.emit('onReloadParentNode', {
          node: data,
        });
      }
    });
  }

  /**
   * 部件加载数据行为
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[]>}
   * @memberof NumberTreeGridController
   */
  async load(args: MDCtrlLoadParams = {}): Promise<IData[]> {
    if (this.state.isSimple) {
      return [];
    }
    const silent = args.silent === true;
    if (!silent) {
      await this.startLoading();
    }
    try {
      // *初始加载需要重置分页
      const isInitialLoad = args.isInitialLoad === true;
      const isLoadMore = args.isLoadMore === true;
      if (isInitialLoad) {
        this.state.curPage = 1;
      } else if (isLoadMore) {
        this.state.curPage += 1;
      }

      // *查询参数处理
      const { context } = this.handlerAbilityParams(args);
      const params = await this.getFetchParams(args?.viewParam);

      // eslint-disable-next-line no-prototype-builtins
      if (!params?.hasOwnProperty('srfshowmode')) {
        // 如果显示模式为tree 将 srfshowmode 合入上下文中
        if (this.state.showTreeGrid) {
          Object.assign(params, {
            srfshowmode: 'tree',
          });
        }
      }

      const res = await this.service.fetch(context, params);
      // 更新分页数据总条数
      if (typeof res.total === 'number') {
        this.state.total = res.total;
      }

      if (typeof res.totalPages === 'number') {
        this.state.totalPages = res.totalPages;
      }

      if (isLoadMore) {
        this.state.items.push(...res.data);
      } else {
        this.state.items = res.data;
      }

      await this.afterLoad(args, res.data);

      this.state.isLoaded = true;
      await this.evt.emit('onLoadSuccess', {
        isInitialLoad,
      });
    } catch (error) {
      await this.evt.emit('onLoadError', undefined);
      this.actionNotification('FETCHERROR', {
        error: error as Error,
      });
      throw error;
    } finally {
      if (!silent) {
        await this.endLoading();
      }
    }

    this.state.items.forEach((item, index) => {
      item.srfserialnum = index + 1;
    });

    this.actionNotification('FETCHSUCCESS');
    return this.state.items;
  }

  /**
   * 部件加载后处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<ControlVO[]>}
   * @memberof NumberTreeGridController
   */
  async afterLoad(
    args: MDCtrlLoadParams,
    items: ControlVO[],
  ): Promise<ControlVO[]> {
    await super.afterLoad(args, items);
    const isInitialLoad = args.isInitialLoad === true;
    // 初始加载需要重置选中数据和展开数据
    if (isInitialLoad) {
      this.state.selectedData = [];
    } else {
      // 不是初始化需重新计算选中数据
      const selectedData = this.state.selectedData.filter(select =>
        this.state.items.find(item => select.tempsrfkey === item.tempsrfkey),
      );
      this.state.selectedData = selectedData;
    }
    return items;
  }

  /**
   * 保存
   *
   * @param {ControlVO} data
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async save(data: ControlVO): Promise<void> {
    if (this.state.isSimple) {
      return;
    }

    const isCreate = data.srfuf === Srfuf.CREATE;

    const rowState = this.findRowState(data);
    if (!rowState) {
      throw new RuntimeError('行数据不存在');
    }
    if (!rowState.modified) {
      ibiz.log.debug('值没有发生改变');
      return;
    }

    // 如果数据正在处理中，则延迟保存
    if (rowState.processing) {
      await awaitTimeout(500, this.save.bind(this), [data]);
      return;
    }

    const isValid = await this.validate(rowState);
    if (!isValid) {
      throw new RuntimeError('行数据校验不通过，保存取消');
    }
    let res;
    const deName = calcDeCodeNameById(this.model.appDataEntityId!);
    const tempContext = this.context.clone();
    tempContext[deName] = data.srfkey;
    try {
      res = isCreate
        ? await this.service.create(tempContext, data)
        : await this.service.update(tempContext, data);
    } catch (error) {
      // 新建失败界面回滚
      if (isCreate) {
        await this.remove({ data: [data], silent: true });
      }
      await this.evt.emit('onSaveError', undefined);
      this.actionNotification(`${isCreate ? 'CREATE' : 'UPDATE'}ERROR`, {
        error: error as Error,
        data: rowState.data,
      });
      throw error;
    }
    // 后续处理
    const index = this.findRowStateIndex(data);
    this.state.items.splice(index, 1, res.data);
    rowState.data = res.data;
    rowState.oldData = res.data.clone();
    rowState.modified = false;
    // 如果时新建数据需重载父节点，因为tempsrfkey发生改变
    if (isCreate) {
      this.evt.emit('onReloadParentNode', { node: res.data });
    }
    this.gridStateNotify(rowState, GridNotifyState.SAVE);
    await this.updateRows(this.state.rows);
    await this.evt.emit('onSaveSuccess', undefined);
  }

  afterRemove(data: IData): void {
    // 删除items里的数据
    const index1 = this.state.items.findIndex(
      item => item.srfkey === data.srfkey,
    );
    if (index1 !== -1) {
      this.state.items.splice(index1, 1);
    }

    // 删除this.state.rows里的表格行数据
    const index = this.findRowStateIndex(data);
    this.state.rows.splice(index, 1);

    // 删除分组里的那条数据
    this.state.groups.forEach(item => {
      if (item.children.length) {
        const findIndex = item.children.findIndex(
          item2 => item2.srfkey === data.srfkey,
        );
        if (findIndex !== -1) {
          item.children.splice(findIndex, 1);
        }
      }
    });
    this.evt.emit('onReloadParentNode', { node: data });
  }

  /**
   * 新建行
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async newRow(args: MDCtrlLoadParams = {}): Promise<void> {
    const { data } = args;
    const { editShowMode } = ibiz.config.grid;
    let parent: IData = {};
    if (data) {
      parent = Array.isArray(data) ? data[0] : data;
    }

    if (editShowMode === 'row') {
      const editingRow = this.state.rows.find(item => item.showRowEdit);
      if (editingRow) {
        throw new RuntimeError('请先完成当前行编辑中的行的操作');
      }
    }

    const queryParams = { ...this.params };
    const defaultData = this.calcDefaultValue(parent || {}, true); // 新建默认值
    if (parent.srfDefaultData) {
      Object.assign(defaultData, parent.srfDefaultData);
    }
    Object.assign(queryParams, defaultData);

    let res;
    try {
      res = await this.service.getDraft(this.context, queryParams);
    } catch (error) {
      this.actionNotification('GETDRAFTERROR', {
        error: error as Error,
      });
      throw error;
    }

    const draftData = res.data;
    // 处理后台导致的新建默认值丢失
    mergeDefaultInLeft(draftData, defaultData);

    // 存在父数据就将父数据赋到子数据的父属性名称上
    draftData[this.treeGridParentField] = parent[this.treeGridValueField];
    if (parent.srfUserData) {
      draftData.srfUserData = parent.srfUserData;
    }

    // 加载完后续处理 新建行在最后
    this.state.items.push(draftData);
    const newRow = new GridRowState(draftData, this);
    this.state.rows.push(newRow);
    this.gridStateNotify(newRow, GridNotifyState.DRAFT);

    if (editShowMode === 'row') {
      this.switchRowEdit(newRow, true);
    }
    this.evt.emit('onReloadParentNode', { node: draftData });
    this.actionNotification('GETDRAFTSUCCESS', { data: draftData });
  }

  /**
   * 行单击事件
   *
   * @param {IData} data
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
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
