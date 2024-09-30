import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import {
  EditorController,
  OpenAppViewCommand,
  getDeACMode,
  IViewConfig,
  IModalData,
  UIActionUtil,
  CodeListItem,
} from '@ibiz-template/runtime';
import {
  IAppDEACMode,
  IDEACModeDataItem,
  IPicker,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { clone, mergeDeepLeft } from 'ramda';
import { notNilEmpty } from 'qx-util';

/**
 * 数据选择编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export class AttentionController extends EditorController<IPicker> {
  /**
   * 云系统操作者Map
   *
   * @memberof AttentionController
   */
  public operatorMap = new Map();

  /**
   * 总数
   */
  public total: number = 0;

  /**
   * 当前人员数量
   */
  public currentNumber: number = -1;

  /**
   * 人员当前页
   */
  public page: number = 0;

  /**
   * 部门人员数据页数
   */
  public deptpage: number = 0;

  /**
   * 当前部门人员数量
   */
  public deptcurrentNumber: number = -1;

  /**
   * 部门人员总数
   */
  public depttotal: number = 0;

  /**
   * 每页数量
   */
  public size: number = 20;

  /**
   * 是否多选
   */
  public multiple: boolean = true;

  /**
   * 多选时拼接的字符串
   */
  public separator: string = ',';

  /**
   *选择视图相关参数
   */
  public pickupView: IViewConfig | null = null;

  /**
   *链接视图相关参数
   */
  public linkView: IViewConfig | null = null;

  /**
   * 人员UI转化
   */
  public userFilterMap: IData = {
    id: 'id',
    name: 'name',
  };

  /**
   * 部门人员UI转化
   */
  deptFilterMap: IData = {
    id: 'id',
    name: 'name',
  };

  /**
   *值项
   */
  public valueItem = '';

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
   * 不支持AC（根据编辑器类型得）
   */
  public noAC: boolean = false;

  /**
   * 不支持按钮（根据编辑器类型得）
   */
  public noButton: boolean = false;

  /**
   * 实体自填模式模型
   */
  public deACMode: IAppDEACMode | undefined = undefined;

  /**
   * 自填数据项集合（已排除了value和text)
   */
  public dataItems: IDEACModeDataItem[] = [];

  // 对象标识属性
  public objectIdField: string | undefined = '';

  // 对象名称属性
  public objectNameField: string | undefined = '';

  // 对象值属性
  public objectValueField: string | undefined = '';

  // 人员请求地址
  public userUrl: string = '';

  // 部门请求地址
  public deptUrl: string = '';

  // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
  public copyUserUrl: string = '';

  // 复制部门人员请求url
  public copyDeptUrl: string = '';

  // 人员请求方式
  public userMethod: 'get' | 'post' = 'post';

  // 部门人员请求方式
  public deptMethod: 'get' | 'post' = 'post';

  /**
   * 上下文替换正则
   *
   */
  public contextReg = /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;

  /**
   * 数据替换正则
   *
   */
  public dataReg = /\$\{data.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;

  /**
   * 参数替换正则
   *
   */
  public paramsReg = /\$\{params.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;

  /**
   * 值类型
   */
  public valueType = 'OBJECTS';

  /**
   * 代码表的代码标识
   *
   */
  public codeListId = '';

  /**
   * 代码表值映射
   *
   */
  public codeListMap!: IParams;

  /**
   * 关注类型属性
   *
   */
  public attentionTypeField = 'type';

  /**
   * 自填充映射
   */
  public selfFillMap = {
    user_id: 'user_id',
    user_name: 'name',
  };

  /**
   * 默认选中项
   *
   */
  public defaultSelected = '';

  /**
   * 选中后默认关注值
   *
   */
  public defaultAttentionValue = '';

  protected async onInit(): Promise<void> {
    super.onInit();
    this.initParams();
    await this.getOperatorUserList();
    this.valueItem = this.model.valueItemName?.toLowerCase() || '';
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
        }
      }
    }
    // 这三种嵌入选择视图的需要预先加载视图模型用于绘制
    const embedViewEditors = [
      'PICKEREX_DROPDOWNVIEW',
      'PICKEREX_DROPDOWNVIEW_LINK',
      'PICKUPVIEW',
    ];
    if (
      this.model.editorType &&
      embedViewEditors.includes(this.model.editorType)
    ) {
      this.initPickupViewParams();
    }

    this.objectIdField = this.model?.objectIdField?.toLowerCase();
    this.objectNameField = this.model?.objectNameField?.toLowerCase();
    this.objectValueField = this.model?.objectValueField?.toLowerCase();
  }

  /**
   * 初始化noAc和noButton
   */
  public initParams(): void {
    switch (this.model.editorType) {
      case 'PICKEREX_NOAC':
      case 'PICKEREX_NOAC_LINK':
        this.noAC = true;
        break;
      case 'PICKEREX_NOBUTTON':
        this.noButton = true;
        break;
      default:
        this.noButton = false;
        this.noAC = false;
    }
    this.userUrl = this.editorParams.URL;
    this.deptUrl = this.editorParams.DEPTURL;
    this.userMethod = this.editorParams.USERMETHOD || 'post';
    this.deptMethod = this.editorParams.DEPTMETHOD || 'post';

    this.separator = this.editorParams.SEPARATOR || ',';
    if (this.editorParams?.CODELISTID) {
      this.codeListId = this.editorParams?.CODELISTID;
    }
    if (this.editorParams?.DEFAULTATNVALUE) {
      this.defaultAttentionValue = this.editorParams?.DEFAULTATNVALUE;
    }
    if (this.editorParams?.VALUETYPE) {
      this.valueType = this.editorParams?.VALUETYPE;
    }

    // 代码列表映射
    if (
      this.editorParams &&
      Object.prototype.hasOwnProperty.call(this.editorParams, 'CODELISTMAP')
    ) {
      try {
        const tempCodeListMap = JSON.parse(this.editorParams?.CODELISTMAP);
        Object.assign(this.codeListMap, tempCodeListMap);
      } catch (error) {
        this.codeListMap = { FOLLOWED: [20, 30, 40], NOTFOLLOWING: [10] };
      }
    }

    // 自填充映射
    if (
      this.editorParams &&
      Object.prototype.hasOwnProperty.call(this.editorParams, 'SELFFILLMAP')
    ) {
      try {
        const tempSelfFillMap = JSON.parse(this.editorParams?.SELFFILLMAP);
        Object.assign(this.selfFillMap, tempSelfFillMap);
      } catch (error) {
        this.selfFillMap = {
          user_id: 'user_id',
          user_name: 'name',
        };
      }
    }

    // 解析user和deptuser的UI转化
    if (
      this.editorParams &&
      Object.prototype.hasOwnProperty.call(this.editorParams, 'USERMAP')
    ) {
      try {
        const tempUserMap = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, tempUserMap);
      } catch (error) {
        this.userFilterMap = {
          id: 'id',
          name: 'name',
        };
      }
    }

    if (
      this.editorParams &&
      Object.prototype.hasOwnProperty.call(this.editorParams, 'DEPTMAP')
    ) {
      try {
        const tempUserMap = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, tempUserMap);
      } catch (error) {
        this.deptFilterMap = {
          id: 'id',
          name: 'name',
        };
      }
    }
  }

  /**
   * 初始化选择视图相关参数
   */
  public async initPickupViewParams(): Promise<void> {
    if (this.model.pickupAppViewId) {
      this.pickupView = await ibiz.hub.config.view.get(
        this.model.pickupAppViewId,
      );
    }
  }

  /**
   * 初始化链接视图相关参数
   */
  public async initLinkViewParams(): Promise<void> {
    if (this.model.linkAppViewId) {
      this.linkView = await ibiz.hub.config.view.get(this.model.linkAppViewId);
    }
  }

  /**
   * 重置状态
   */
  public resetState(): void {
    this.total = 0;
    this.currentNumber = -1;
    this.page = 0;
    this.deptpage = 0;
    this.depttotal = 0;
    this.deptcurrentNumber = -1;
    this.copyDeptUrl = '';
    this.copyUserUrl = '';
  }

  /**
   * 加载更多
   */
  public async loadMore(
    data: IData,
    tag: 'user' | 'department',
    params: IData = {},
  ): Promise<IHttpResponse<IData[]> | undefined> {
    if (tag === 'user' && this.currentNumber < this.total) {
      const res = await this.getServiceData(tag, data, params);
      if (res) {
        this.page += 1;
        if (this.currentNumber < 0) {
          this.currentNumber += 1;
        }
        this.currentNumber += this.size;
        this.total = res.total
          ? Number(res.total)
          : Number(res.headers['x-total']);
        res.data.forEach((item: IParams) => {
          Object.keys(this.userFilterMap).forEach((key: string) => {
            // eslint-disable-next-line no-param-reassign
            item[key] = item[this.userFilterMap[key]];
          });
        });
        return res;
      }
    } else if (
      tag === 'department' &&
      this.deptcurrentNumber < this.depttotal
    ) {
      const res = await this.getServiceData(tag, data, params);
      if (res) {
        this.deptpage += 1;
        if (this.deptcurrentNumber < 0) {
          this.deptcurrentNumber += 1;
        }
        this.deptcurrentNumber += this.size;
        this.depttotal = res.total
          ? Number(res.total)
          : Number(res.headers['x-total']);
        res.data.forEach((item: IData) => {
          Object.keys(this.deptFilterMap).forEach((key: string) => {
            // eslint-disable-next-line no-param-reassign
            item[key] = item[this.deptFilterMap[key]];
          });
        });
        return res;
      }
    }
  }

  /**
   * 触发界面行为组点击事件
   *
   * @param {IUIActionGroupDetail} detail
   * @param {GridRowState} row
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof GridFieldColumnController
   */
  async onActionClick(
    detail: IUIActionGroupDetail,
    data: IData[],
    event: MouseEvent,
  ): Promise<void> {
    const actionId = detail.uiactionId;
    await UIActionUtil.execAndResolved(
      actionId!,
      {
        context: this.context,
        params: this.params,
        data,
        view: (this.parent as IParams).form.ctx.view,
        event,
      },
      detail.appId,
    );
  }

  /**
   * 填充字符串中的数据
   *
   * @author chitanda
   * @date 2021-04-23 20:04:17
   * @static
   * @param {string} str
   * @param {*} [context]
   * @param {*} [data]
   * @return {*}  {string}
   */
  public fill(
    str: string,
    context?: IContext,
    params?: IParams,
    data?: IData,
  ): string {
    if (notNilEmpty(str)) {
      if (notNilEmpty(context)) {
        const strArr = str.match(this.contextReg);
        strArr?.forEach(_key => {
          const key = _key.slice(10, _key.length - 1);
          // eslint-disable-next-line no-param-reassign
          str = str.replace(`\${context.${key}}`, context![key] || '');
        });
      }
      if (notNilEmpty(params)) {
        const strArr = str.match(this.paramsReg);
        strArr?.forEach(_key => {
          const key = _key.slice(9, _key.length - 1);
          // eslint-disable-next-line no-param-reassign
          str = str.replace(`\${params.${key}}`, params![key] || '');
        });
      }
      if (notNilEmpty(data)) {
        const strArr = str.match(this.dataReg);
        strArr?.forEach(_key => {
          const key = _key.slice(7, _key.length - 1);
          // eslint-disable-next-line no-param-reassign
          str = str.replace(`\${data.${key}}`, data![key] || '');
        });
      }
    }
    return str;
  }

  /**
   * 加载实体数据集数据
   *
   * @param {string} tag 当前分类 user || department
   * @param {IData} data 表单数据
   * @param {string} query 模糊匹配字符串
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PersonelSelectController
   */
  public async getServiceData(
    tag: 'user' | 'department',
    data: IData,
    query?: IData,
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
    Object.assign(fixedParams, { size: this.size });
    if (query) {
      Object.assign(fixedParams, query);
    }
    // 合并计算出来的参数和固定参数，以计算参数为准
    const tempParams = mergeDeepLeft(params, fixedParams);
    let url = '';
    const _url = this.fill(this.userUrl, context, params, data).replaceAll(
      '//',
      '/',
    );
    const _depturl = this.fill(this.deptUrl, context, params, data).replaceAll(
      '//',
      '/',
    );
    this.copyUserUrl = _url;
    this.copyDeptUrl = _depturl;
    let postway = 'post';
    const allParams = {};
    if (tag === 'user') {
      url = _url;
      postway = this.userMethod.toLowerCase();
      Object.assign(allParams, { method: postway, data: tempParams });
    } else {
      url = _depturl;
      postway = this.deptMethod.toLowerCase();
      Object.assign(allParams, { method: postway, params: tempParams });
    }
    if (url) {
      const res = await ibiz.net.request(url, allParams);
      return res as IHttpResponse<IData[]>;
    }
    throw new RuntimeModelError(this.model, '请配置数据接口地址');
  }

  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PersonelSelectController
   */
  public async openPickUpView(
    data: IData,
    selectedData?: string,
  ): Promise<IData[] | undefined> {
    await this.initPickupViewParams();
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    if (selectedData) {
      params.selectedData = selectedData;
    }
    if (!this.pickupView) {
      throw new RuntimeModelError(this.model, '请配置数据选择视图');
    }
    // 模态打开视图
    const res = await ibiz.commands.execute<IModalData>(
      OpenAppViewCommand.TAG,
      this.pickupView.id,
      context,
      params,
      { openMode: 'POPUPMODAL' },
    );
    if (res && res.ok && res.data) {
      return res.data;
    }
    ibiz.log.debug('模态取消或关闭异常', res);
  }

  /**
   * 打开数据链接视图
   */
  public async openLinkView(data: IData): Promise<IData[] | undefined> {
    const tempContext = this.context.clone();
    if (data[this.valueItem]) {
      tempContext.srfkey = data[this.valueItem];
    }
    const { context, params } = this.handlePublicParams(
      data,
      tempContext,
      this.params,
    );

    const { linkAppViewId } = this.model;
    if (!linkAppViewId) {
      throw new RuntimeModelError(this.model, '请配置数据链接视图');
    }
    return ibiz.commands.execute(
      OpenAppViewCommand.TAG,
      linkAppViewId,
      context,
      params,
    );
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
    data: IData[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<Array<{ id: string; value: any }>> {
    if (this.deACMode) {
      if (this.dataItems.length === 0) {
        return [];
      }
      const result = await Promise.all(
        this.dataItems.map(item => {
          const tmepResult = data.map((_data: IData) => {
            return _data[item.appDEFieldId!];
          });
          const value = tmepResult.join(this.separator);
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
   * 处理对象数据类型抛值
   * @param {IData} select
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-08-22 15:58:56
   */
  handleObjectParams(select: IData): IData {
    const object: IData = {};
    if (this.objectIdField) {
      Object.assign(object, {
        [this.objectIdField]: select[this.keyName],
      });
    }
    if (this.objectNameField) {
      Object.assign(object, {
        [this.objectNameField]: select[this.textName],
      });
    }
    if (this.objectValueField) {
      Object.assign(object, {
        [this.objectValueField]: clone(select),
      });
    }
    return object;
  }

  /**
   * 获取操作用户列表
   *
   * @return {*}  {Promise<void>}
   * @memberof AttentionController
   */
  async getOperatorUserList(): Promise<void> {
    const app = await ibiz.hub.getApp(this.context.srfappid);
    let dataItems: readonly CodeListItem[] = [];
    dataItems = await app.codeList.get(
      'SysOperator',
      this.context,
      this.params,
    );
    // 构建一个map,避免后续匹配数据时循环花时间
    this.operatorMap = new Map(
      dataItems.map((item: CodeListItem) => [item.value, item]),
    );
  }
}
