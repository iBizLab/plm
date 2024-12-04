/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import {
  EditorController,
  getDeACMode,
  IButtonContainerState,
  ButtonContainerState,
  UIActionButtonState,
  UIActionUtil,
  calcDeCodeNameById,
} from '@ibiz-template/runtime';
import { parseRouteViewData } from '@ibiz-template/vue3-util';
import {
  IAppDEACMode,
  IDEACModeDataItem,
  ILayoutPanel,
  IPicker,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { mergeDeepLeft } from 'ramda';
import { RouteLocationNormalizedLoaded } from 'vue-router';

/**
 * 数据选择编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class RoutePickerController extends EditorController<IPicker> {
  /**
   * 主键属性名称
   */
  public keyName: string = 'srfkey';

  /**
   * 主文本属性名称
   */
  public textName: string = 'srfmajortext';

  /**
   * 数据集codeName
   */
  public interfaceName: string = '';

  /**
   * 自填模式sort排序
   */
  public sort: string | undefined = '';

  /**
   * 实体自填模式模型
   */
  public deACMode: IAppDEACMode | undefined = undefined;

  /**
   * 自填数据项集合（已排除了value和text)
   */
  public dataItems: IDEACModeDataItem[] = [];

  /**
   * 分组行为状态
   *
   * @type {IButtonContainerState}
   * @memberof RoutePickerController
   */
  public groupActionState: IButtonContainerState = new ButtonContainerState();

  /**
   * 后缀图标
   *
   * @type {string}
   * @memberof RoutePickerController
   */
  public suffix: string = '';

  /**
   * 允许搜索
   *
   * @type {boolean}
   * @memberof RoutePickerController
   */
  public enablesearch: boolean = false;

  /**
   * 允许缓存
   *
   * @type {boolean}
   * @memberof RoutePickerController
   */
  public enableCache: boolean = false;

  /**
   * 路由属性标识
   *
   * @type {string}
   * @memberof RoutePickerController
   */
  public routeKey: string = '';

  /**
   * 值变更模式
   *
   * @type {'ROUTECHANGE' | 'CONTEXTCHANGE'}
   * @memberof RoutePickerController
   */
  public valueMode: 'ROUTECHANGE' | 'CONTEXTCHANGE' = 'ROUTECHANGE';

  // 项布局面板
  public itemLayoutPanel: ILayoutPanel | undefined = undefined;

  /**
   * 当前视图
   *
   * @readonly
   * @type {(number)}
   * @memberof RoutePickerController
   */
  get currentView(): IData {
    return (this.parent as IData).panel.view;
  }

  /**
   * 当前路由视图的层级
   *
   * @readonly
   * @type {(number)}
   * @memberof RoutePickerController
   */
  get routeDepth(): number {
    return (this.parent as IData).panel.view.modal.routeDepth;
  }

  /**
   * 当前视图重定向引用
   * @readonly
   * @type {(IData | undefined)}
   * @memberof RoutePickerController
   */
  get RedirectViewModel(): IData | undefined {
    return (this.parent as IData).panel.model.appViewRefs?.find(
      (viewRef: IData) => {
        return viewRef.name === 'REDIRECT';
      },
    );
  }

  protected async onInit(): Promise<void> {
    super.onInit();
    if (this.model.appDataEntityId) {
      if (this.model.appDEDataSetId) {
        this.interfaceName = this.model.appDEDataSetId;
      }
      if (this.model.appDEACModeId) {
        this.deACMode = await getDeACMode(
          this.model.appDEACModeId,
          this.model.appDataEntityId,
          this.context.srfappid,
        );
        if (this.deACMode) {
          // 自填模式相关
          const { minorSortAppDEFieldId, minorSortDir } = this.deACMode;
          if (minorSortAppDEFieldId && minorSortDir) {
            this.sort = `${minorSortAppDEFieldId.toLowerCase()},${minorSortDir.toLowerCase()}`;
          }
          if (this.deACMode.textAppDEFieldId) {
            this.textName = this.deACMode.textAppDEFieldId;
          }
          if (this.deACMode.valueAppDEFieldId) {
            this.keyName = this.deACMode.valueAppDEFieldId;
          }
          if (this.deACMode.deacmodeDataItems) {
            this.dataItems = [];
            this.deACMode.deacmodeDataItems.forEach(
              (dataItem: IDEACModeDataItem) => {
                if (dataItem.id !== 'value' && dataItem.id !== 'text') {
                  this.dataItems.push(dataItem);
                }
              },
            );
          }
          if ((this.deACMode as IData).itemLayoutPanel) {
            this.itemLayoutPanel = (this.deACMode as IData).itemLayoutPanel;
          }
        }
      }
      this.routeKey = calcDeCodeNameById(this.model.appDataEntityId!);
    }
    if (this.model.uiactionGroup) {
      const uiactionGroupDetails =
        this.model.uiactionGroup.uiactionGroupDetails || [];
      if (uiactionGroupDetails.length > 0) {
        uiactionGroupDetails.forEach(detail => {
          const actionid = detail.uiactionId;
          if (actionid) {
            const buttonState = new UIActionButtonState(
              detail.id!,
              this.context.srfappid!,
              actionid,
            );
            this.groupActionState.addState(detail.id!, buttonState);
          }
        });
        await this.groupActionState.update(
          this.context,
          undefined,
          this.model.appDataEntityId,
        );
      }
    }
    const { editorParams } = this.model;
    if (editorParams) {
      if (editorParams.ROUTEKEY) {
        this.routeKey = editorParams.ROUTEKEY;
      }
      if (editorParams.SUFFIX) {
        this.suffix = editorParams.SUFFIX;
      }
      if (editorParams.MODE) {
        this.valueMode = editorParams.MODE;
      }
      if (editorParams.ENABLESEARCH) {
        this.enablesearch =
          Object.is(editorParams.ENABLESEARCH, 'true') ||
          Object.is(editorParams.ENABLESEARCH, 'TRUE');
      }
      if (editorParams.ENABLECACHE) {
        this.enableCache =
          Object.is(editorParams.ENABLECACHE, 'true') ||
          Object.is(editorParams.ENABLECACHE, 'TRUE');
      }
    }
  }

  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof RoutePickerController
   */
  public async getServiceData(
    query: string,
    data: IData,
  ): Promise<IHttpResponse<IData[]>> {
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    // 固定参数
    const fixedParams = {};
    if (this.sort && !Object.is(this.sort, '')) {
      Object.assign(fixedParams, { sort: this.sort });
    }
    if (query) {
      Object.assign(fixedParams, { query });
    }
    Object.assign(fixedParams, { size: 1000 });
    // 合并计算出来的参数和固定参数，以计算参数为准
    const tempParams = mergeDeepLeft(params, fixedParams);
    if (this.interfaceName) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      const res = await app.deService.exec(
        this.model.appDataEntityId!,
        this.interfaceName,
        context,
        tempParams,
      );
      return res as IHttpResponse<IData[]>;
    }
    throw new RuntimeModelError(this.model, '请配置实体和实体数据集');
  }

  /**
   * 计算回填数据
   *
   * @author lxm
   * @date 2022-10-24 16:10:24
   * @param {IData} data 选中数据
   * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
   */
  async calcFillDataItems(
    data: IData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<Array<{ id: string; value: any }>> {
    if (this.deACMode) {
      if (this.dataItems.length === 0) {
        return [];
      }
      const result = await Promise.all(
        this.dataItems.map(item => {
          const value = data[item.appDEFieldId!];
          if (item.format) {
            // todo 值格式化
          } else if (item.convertToCodeItemText && item.codeListId) {
            // todo 代码表转换为文本值
          } else if (item.customCode) {
            // todo 脚本代码
          }
          return { id: item.id!, value };
        }),
      );
      return result;
    }
    return [];
  }

  /**
   * 分组行为项点击
   *
   * @param {IUIActionGroupDetail} detail
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof RoutePickerController
   */
  async onActionClick(
    detail: IUIActionGroupDetail,
    event: MouseEvent,
  ): Promise<void> {
    const actionId = detail.uiactionId;
    Object.assign(this.context, {
      srfdefaulttoroutedepth: (this.parent as any).panel.view.modal.routeDepth,
    });
    await UIActionUtil.execAndResolved(
      actionId!,
      {
        context: this.context,
        params: this.params,
        data: [],
        view: (this.parent as any).panel.view,
        event,
      },
      detail.appId,
    );
  }

  /**
   * 获取路由主信息
   *
   * @param {RouteLocationNormalizedLoaded} route
   * @return {*}
   * @memberof RoutePickerController
   */
  public async getRouteKey(
    route: RouteLocationNormalizedLoaded,
    items: IData[],
    isinit: boolean = false,
  ): Promise<string> {
    const _viewData: IData = await parseRouteViewData(route, this.routeDepth);
    let resourceKey = _viewData.context[this.routeKey];
    if (!resourceKey && isinit) {
      resourceKey = items[0].srfkey;
    }
    return resourceKey;
  }
}
