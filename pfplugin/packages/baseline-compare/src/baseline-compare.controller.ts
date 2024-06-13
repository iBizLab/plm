/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { RuntimeModelError } from '@ibiz-template/core';
import {
  ControlVO,
  GridController,
  IGridEvent,
  IGridState,
  MDCtrlLoadParams,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { createUUID } from 'qx-util';
import { IDEGrid } from '@ibiz/model-core';

interface IBaselineState extends IGridState {
  /**
   * 比较分组数据-下拉列表的数据
   *
   * @type {IData[]}
   * @memberof IBaselineState
   */
  compareGroup: IData[];

  /**
   * 比较数据-表格的数据
   *
   * @type {IData[]}
   * @memberof IBaselineState
   */
  compareList: IData[];

  /**
   * 基线
   *
   * @type {string}
   * @memberof IBaselineState
   */
  baseline: string;

  /**
   * 比较线
   *
   * @type {string}
   * @memberof IBaselineState
   */
  compareline: string;
}

export class BaselineCompareController extends GridController<
  IDEGrid,
  IBaselineState,
  IGridEvent
> {
  /**
   * 重写初始化state class类
   *
   * @protected
   * @memberof BaselineCompareController
   */
  protected initState(): void {
    super.initState();
    this.state.baseline = 'baseline';
    this.state.compareline = 'comparison_baseline';
    this.state.compareGroup = [];
    this.state.compareList = [];
  }

  protected async onCreated(): Promise<void> {
    await super.onCreated();
    if (this.controlParams) {
      if (this.controlParams.baseline) {
        this.state.baseline = this.controlParams.baseline;
      }
      if (this.controlParams.comparison_baseline) {
        this.state.compareline = this.controlParams.comparison_baseline;
      }
    }
    // 加载对比下拉列表数据，关闭表格的默认加载，初始加载由下拉选择器控制
    await this.loadCompareSelectData();
  }

  /**
   * 转化下拉的映射数据
   *
   * @param {IData[]} items
   * @memberof BaselineCompareController
   */
  public convertList(items: IData[]) {
    if (this.controlParams.responsemap) {
      const tempItems: IData[] = [];
      const tempMap = {
        id: 'id',
        name: 'name',
      };
      try {
        const respMap = JSON.parse(this.controlParams.responsemap);
        Object.assign(tempMap, respMap);
      } catch (error) {
        console.log('转化JSON配置错误');
      }
      items.forEach((item: IData) => {
        tempItems.push(
          Object.assign(item, {
            id: item[tempMap.id],
            name: item[tempMap.name],
          }),
        );
      });
      this.state.compareList = tempItems;
    } else {
      this.state.compareList = items;
    }
  }

  /**
   * 加载对比下拉数据
   *
   * @memberof BaselineCompareController
   */
  public async loadCompareSelectData() {
    // 先解析动态控件参数，得到请求的url
    const url = ScriptFactory.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.requesturl,
      { singleRowReturn: true },
    );
    const owner_id = ScriptFactory.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.n_owner_id_eq,
      { singleRowReturn: true },
    );
    const owner_type = ScriptFactory.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.n_owner_type_eq,
      { singleRowReturn: true },
    );

    const requestConfig = {
      method: this.controlParams.requestmethod || 'post',
      data: {
        n_owner_id_eq: owner_id,
        n_owner_type_eq: owner_type,
      },
    };
    if (url && typeof url === 'string') {
      const res = await ibiz.net.request(url, requestConfig);
      if (res && res.data) {
        if (Array.isArray(res.data)) {
          this.convertList(res.data);
        } else {
          this.convertList([res.data]);
        }
      }
    } else {
      throw new RuntimeModelError(this.model, '请配置数据接口地址');
    }
  }

  /**
   * 部件加载数据行为
   *
   * @author lxm
   * @date 2022-08-19 14:08:50
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

      // 对查询参数做处理，预防比较基线无值时实用主基线的值
      if (!params[this.state.compareline]) {
        params[this.state.compareline] = this.params[this.state.baseline];
      }

      const res = await this.service.fetch(context, params);
      // 更新分页数据总条数
      if (typeof res.total === 'number') {
        this.state.total = res.total;
      }

      if (typeof (res as any).totalPages === 'number') {
        (this.state as any).totalPages = (res as any).totalPages;
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
   * 数据加载完成后对数据进行分组处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<ControlVO[]>}
   * @memberof BaselineCompareController
   */
  async afterLoad(
    args: MDCtrlLoadParams,
    items: ControlVO[],
  ): Promise<ControlVO[]> {
    await super.afterLoad(args, items);
    this.computeCompareGroup(args, items);
    return items;
  }

  /**
   * 计算比对分组数据,根据属性 principal_id 分为两组
   *
   * @memberof BaselineCompareController
   */
  public computeCompareGroup(args: IData, items: ControlVO[]) {
    const currentItems: ControlVO[] = []; // 当前版本的数据
    const compareItems: ControlVO[] = []; // 比对版本的数据
    const baseline =
      args?.viewParam?.[this.state.baseline] ||
      this.params[this.state.baseline]; // 主基线的值
    const comparison_baseline =
      args?.viewParam?.[this.state.compareline] ||
      this.params[this.state.baseline]; // 比对基线的值

    // 左右分割
    const tempLeft: ControlVO[] = [];
    const tempRight: ControlVO[] = [];
    items.forEach((item: ControlVO) => {
      if (baseline === comparison_baseline) {
        if (item.is_latest === '1') {
          tempRight.push(item);
        } else {
          tempLeft.push(item);
        }
      } else if (item.principal_id === baseline) {
        tempLeft.push(item);
      } else {
        tempRight.push(item);
      }
    });

    // 计算左右重合部分
    tempLeft.forEach((item: ControlVO) => {
      const tag = this.diffItms(item.target_id, tempLeft, tempRight);
      if (tag === 'DEL') {
        currentItems.push(Object.assign(item, { actionType: tag }));
        compareItems.push(
          Object.assign({} as ControlVO, {
            actionType: tag,
            tempsrfkey: createUUID(),
            base_version: baseline,
            compare_version: comparison_baseline,
            base_target_version_id: item.target_version_id,
            compare_target_version_id: '',
          }),
        );
      } else {
        const _index = tempRight.findIndex((_item: ControlVO) => {
          return _item.target_id === item.target_id;
        });
        if (!this.compareField(item, tempRight[_index])) {
          currentItems.push(
            Object.assign(item, {
              actionType: `UN${tag}`,
            }),
          );
          compareItems.push(
            Object.assign(tempRight[_index], {
              actionType: `UN${tag}`,
              base_version: baseline,
              compare_version: comparison_baseline,
              base_target_version_id: item.target_version_id,
              compare_target_version_id: tempRight[_index].target_version_id,
            }),
          );
        } else {
          currentItems.push(
            Object.assign(item, {
              actionType: tag,
            }),
          );
          compareItems.push(
            Object.assign(tempRight[_index], {
              actionType: tag,
              base_version: baseline,
              compare_version: comparison_baseline,
              base_target_version_id: item.target_version_id,
              compare_target_version_id: tempRight[_index].target_version_id,
            }),
          );
        }
        tempRight.splice(_index, 1);
      }
    });

    // 剩下部分就都为增加
    tempRight.forEach((_item: ControlVO) => {
      currentItems.push(
        Object.assign({} as ControlVO, {
          actionType: 'ADD',
          tempsrfkey: createUUID(),
        }),
      );
      compareItems.push(
        Object.assign(_item, {
          actionType: 'ADD',
          base_version: baseline,
          compare_version: comparison_baseline,
        }),
      );
    });

    const baseItem = this.state.compareList.find((list: IData) => {
      return list.id === baseline;
    });
    const compareItem = this.state.compareList.find((list: IData) => {
      return list.id === comparison_baseline;
    });
    this.state.compareGroup = [
      {
        name: baseItem?.name,
        id: baseItem?.id,
        data: currentItems,
      },
      {
        name: compareItem?.name,
        id: compareItem?.id,
        data: compareItems,
      },
    ];
  }

  /**
   * 比较不同，有不同返回true,否则返回false
   *
   * @param {IData} item1
   * @param {IData} item2
   * @return {*}
   * @memberof BaselineCompareController
   */
  public compareField(item1: IData, item2: IData) {
    if (item1.target_version_id !== item2.target_version_id) {
      return true;
    }
    return false;
  }

  /**
   * 判断当前项在左右两边是否存在，因为遍历的是左边，所以肯定不会出现左边没有而右边存在的情况，不会返回 [ADD]
   *
   * @param {string} id
   * @param {IData[]} leftItems
   * @param {IData[]} rightItesm
   * @return {*}
   * @memberof BaselineCompareController
   */
  public diffItms(id: string, leftItems: IData[], rightItesm: IData[]) {
    const tmepLeft = leftItems.filter((item: IData) => {
      return item.target_id === id;
    });
    const tempRight = rightItesm.filter((item: IData) => {
      return item.target_id === id;
    });
    if (tmepLeft.length > 0 && tempRight.length > 0) {
      return 'EDIT';
    }
    if (tmepLeft.length > 0) {
      return 'DEL';
    }
  }
}
