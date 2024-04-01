import {
  awaitTimeout,
  mergeDefaultInLeft,
  RuntimeError,
} from '@ibiz-template/core';
import {
  calcDeCodeNameById,
  ControllerEvent,
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
  protected get _evt(): ControllerEvent<INumberTreeGridEvent> {
    return this.evt;
  }

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

  /**
   * 切换显示模式
   *
   * @param {IData} param
   * @memberof NumberTreeGridController
   */
  switchShowMode(param: IData): void {
    const { showMode } = param;
    if (showMode) {
      if (showMode === 'tree') {
        this.state.showTreeGrid = true;
      } else if (showMode === 'grid') {
        this.state.showTreeGrid = false;
      }
      this.refresh();
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
   * 刷新
   *
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async refresh(): Promise<void> {
    await this.load({ isInitialLoad: false });

    // 重新加载树表格展开节点
    this.state.expandRows.forEach(row => {
      setTimeout(() => {
        this._evt.emit('onReloadNode', { row, isReloadParent: false });
      });
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

      if (isLoadMore) {
        this.state.items.push(...res.data);
      } else {
        this.state.items = res.data;
      }

      await this.afterLoad(args, res.data);

      this.state.isLoaded = true;
      await this._evt.emit('onLoadSuccess', {
        isInitialLoad,
      });
    } catch (error) {
      await this._evt.emit('onLoadError', undefined);
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
      this.state.expandRows = [];
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
      await this._evt.emit('onSaveError', undefined);
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
    rowState.modified = false;

    // 如果是新建行保存完成 之后需要再发一次通知父重新加载 因为tempsrfkey发生改变
    if (isCreate) {
      this._evt.emit('onReloadNode', { row: rowState, isReloadParent: true });
    }

    this.gridStateNotify(rowState, GridNotifyState.SAVE);
    await this._evt.emit('onSaveSuccess', undefined);
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
    const rowState = this.state.rows[index];
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

    // 通知树表父节点重新加载
    this._evt.emit('onReloadNode', {
      row: rowState,
      isReloadParent: true,
      eventName: 'remove',
    });
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
    let parent = null;
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
    if (parent) {
      draftData[this.treeGridParentField] = parent[this.treeGridValueField];
    }
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
    this._evt.emit('onReloadNode', { row: newRow, isReloadParent: true });
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

  /**
   * 设置行展开
   *
   * @param {IData} data
   * @param {boolean} state
   * @memberof NumberTreeGridController
   */
  setRowExpand(data: IData, state: boolean): void {
    const row = this.findRowState(data);
    if (row) {
      const index = this.state.expandRows.findIndex(
        exp => exp.data.tempsrfkey === row?.data.tempsrfkey,
      );
      if (state && index === -1) {
        this.state.expandRows.push(row);
      } else if (!state && index > -1) {
        this.state.expandRows.splice(index, 1);
      }
    }
  }
}
