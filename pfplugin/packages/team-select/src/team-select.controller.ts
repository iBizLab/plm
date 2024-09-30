import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
import {
  CodeListItem,
  EditorController,
  IViewConfig,
  getDeACMode,
} from '@ibiz-template/runtime';
import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import { mergeDeepLeft } from 'ramda';
import { notNilEmpty } from 'qx-util';

export class TeamSelectController extends EditorController<IPicker> {
  /**
   * 云系统操作者Map
   *
   * @memberof PersonelSelectController
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
  public multiple: boolean = false;

  /**
   * 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去
   */
  public isAddSymbol: boolean = false;

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
  public deptFilterMap: IData = {
    id: 'id',
    name: 'name',
  };

  /**
   * 是否显示人员部门分页
   */
  public isShowTab: boolean = true;

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

  //  团队请求地址
  public teamUrl: string = '';

  //  团队成员请求地址
  public teamMemberUrl: string = '';

  // 团队值项
  public teamValueItem: string = '';

  // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
  public copyUserUrl: string = '';

  // 复制部门人员请求url
  public copyDeptUrl: string = '';

  // 复制团队请求url
  public copyTeamUrl: string = '';

  // 复制团队成员请求url
  public copyTeamMemberUrl: string = '';

  // 人员请求方式
  public userMethod: 'get' | 'post' = 'post';

  // 部门人员请求方式
  public deptMethod: 'get' | 'post' = 'post';

  // 团队请求方式
  public teamMethod: 'get' | 'post' = 'post';

  // 团队人员请求方式
  public teamMemberMethod: 'get' | 'post' = 'post';

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
   * 是否配置了默认显示当前用户
   */
  public defaultSelCurUser: boolean = false;

  /**
   * 值类型
   */
  public valueType = 'OBJECTS';

  /**
   * 关注类型属性
   *
   */
  public attentionTypeField = 'type';

  /**
   * 自填充映射
   */
  public selfFillMap = {};

  /**
   * 选中后默认关注值
   *
   */
  public defaultAttentionValue = '';

  /**
   * 是否显示姓名文字
   */
  public showNameText: boolean = true;

  /**
   * 是否显示姓名提示
   */
  public showNameTip: boolean = false;

  protected async onInit(): Promise<void> {
    super.onInit();
    this.initDefaultAttribute();
    this.valueItem = this.model.valueItemName?.toLowerCase() || '';
    this.initParams();
    await this.getOperatorUserList();
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
      // this.initPickupViewParams();
    }
    this.objectIdField = this.model.objectIdField?.toLowerCase();
    this.objectNameField = this.model.objectNameField?.toLowerCase();
    this.objectValueField = this.model.objectValueField?.toLowerCase();
  }

  /**
   * 初始化字段默认属性
   */
  public initDefaultAttribute(): void {
    if (this.model.valueType) {
      this.valueType = this.model.valueType;
    }
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
    this.teamUrl = this.editorParams.TEAMURL;
    this.teamMemberUrl = this.editorParams.TEAMMEMBERURL;
    this.userMethod = this.editorParams.USERMETHOD || 'post';
    this.deptMethod = this.editorParams.DEPTMETHOD || 'post';
    this.teamMethod = this.editorParams.TEAMMETHOD || 'post';
    this.teamMemberMethod = this.editorParams.TEAMMEMBERURL || 'post';

    this.teamValueItem = this.editorParams?.TEAMTYPEFIELD;

    // 是否启用多选，启用多选时，所有的数据默认会使用","进行拼接，拼接符号可配置
    this.multiple = this.editorParams.MULTIPLE === 'true';
    this.defaultSelCurUser = this.editorParams.DEFAULTSELCURUSER === 'true';
    this.separator = this.editorParams.SEPARATOR || ',';
    this.isAddSymbol = !!(
      this.editorParams.ISADDSYMBOL === 'true' && this.multiple === true
    );
    this.isShowTab = this.editorParams.ISSHOWTAB !== 'false';

    if (this.editorParams?.VALUETYPE) {
      this.valueType = this.editorParams?.VALUETYPE;
    }
    if (this.editorParams?.DEFAULTATNVALUE) {
      this.defaultAttentionValue = this.editorParams?.DEFAULTATNVALUE;
    }
    if (this.editorParams?.VALUEITEMNAME) {
      this.valueItem = this.editorParams?.VALUEITEMNAME;
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
        this.selfFillMap = {};
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

    if (this.editorParams.SHOWNAMETEXT) {
      this.showNameText = this.toBoolean(this.editorParams.SHOWNAMETEXT);
    }
    if (this.editorParams.SHOWNAMETIP) {
      this.showNameTip = this.toBoolean(this.editorParams.SHOWNAMETIP);
    }
  }

  /**
   * 重置状态
   */
  public resetState(): void {
    this.resetUserState();
    this.resetDeptState();
  }

  /**
   * 重置全部人员分类的状态
   */
  public resetUserState(): void {
    this.total = 0;
    this.currentNumber = -1;
    this.page = 0;
    this.copyUserUrl = '';
  }

  /**
   * 重置部门人员分类的状态
   */
  public resetDeptState(): void {
    this.deptpage = 0;
    this.depttotal = 0;
    this.deptcurrentNumber = -1;
    this.copyDeptUrl = '';
  }

  /**
   * 加载更多
   */
  public async loadMore(
    data: IData,
    tag: 'member' | 'department' | 'team',
    params: IData = {},
  ): Promise<IHttpResponse<IData[]> | undefined> {
    if (tag === 'member') {
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
        res.data.forEach((item: IData) => {
          Object.keys(this.userFilterMap).forEach((key: string) => {
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
            item[key] = item[this.deptFilterMap[key]];
          });
        });
        return res;
      }
    } else if (tag === 'team') {
      const res = await this.getServiceData(tag, data, params);
      return res;
    }
  }

  public async getServiceDataTeamMember(
    id: string,
    data: IData,
    query?: IData,
  ): Promise<IHttpResponse<IData[]>> {
    const { context, params } = this.handlePublicParams(
      data,
      this.context,
      this.params,
    );
    // 固定参数
    const fixedParams = {
      n_owner_type_eq: 'GROUP',
      n_owner_id_eq: id,
    };
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
    const _teamMemberUrl = this.fill(
      this.teamMemberUrl,
      context,
      { ...params, teamid: id },
      data,
    ).replaceAll('//', '/');
    this.copyTeamMemberUrl = _teamMemberUrl;
    let postway = 'post';
    const allParams = {};
    url = _teamMemberUrl;
    postway = this.teamMethod.toLowerCase();
    if (postway === 'get') {
      Object.assign(allParams, { method: postway, params: tempParams });
    } else {
      Object.assign(allParams, { method: postway, data: tempParams });
    }
    if (url) {
      const res = await ibiz.net.request(url, allParams);
      return res as IHttpResponse<IData[]>;
    }
    throw new RuntimeModelError(this.model, '请配置数据接口地址');
  }

  /**
   * 团队成员
   */
  public async loadTeamMember(
    data: IData,
    id: string,
    params: IData = {},
  ): Promise<IHttpResponse<IData[]> | undefined> {
    const res = await this.getServiceDataTeamMember(id, data, params);
    if (res) {
      return res;
    }
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
    // eslint-disable-next-line default-param-last
    str: string = '',
    context?: IContext,
    params?: IParams,
    data?: IData,
  ): string {
    if (notNilEmpty(str)) {
      if (notNilEmpty(context)) {
        const strArr = str.match(this.contextReg);
        strArr?.forEach(_key => {
          const key = _key.slice(10, _key.length - 1);
          str = str.replace(`\${context.${key}}`, context![key] || '');
        });
      }
      if (notNilEmpty(params)) {
        const strArr = str.match(this.paramsReg);
        strArr?.forEach(_key => {
          const key = _key.slice(9, _key.length - 1);
          str = str.replace(`\${params.${key}}`, params![key] || '');
        });
      }
      if (notNilEmpty(data)) {
        const strArr = str.match(this.dataReg);
        strArr?.forEach(_key => {
          const key = _key.slice(7, _key.length - 1);
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
    tag: 'member' | 'department' | 'team',
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
    const _teamturl = this.fill(this.teamUrl, context, params, data).replaceAll(
      '//',
      '/',
    );
    this.copyUserUrl = _url;
    this.copyDeptUrl = _depturl;
    this.copyTeamUrl = _teamturl;
    let postway = 'post';
    const allParams = {};
    if (tag === 'member') {
      url = _url;
      postway = this.userMethod.toLowerCase();
      if (postway === 'get') {
        Object.assign(allParams, { method: postway, params: tempParams });
      } else {
        Object.assign(allParams, { method: postway, data: tempParams });
      }
    } else if (tag === 'department') {
      url = _depturl;
      postway = this.deptMethod.toLowerCase();
      if (postway === 'get') {
        Object.assign(allParams, { method: postway, params: tempParams });
      } else {
        Object.assign(allParams, { method: postway, data: tempParams });
      }
    } else if (tag === 'team') {
      url = _teamturl;
      postway = this.teamMethod.toLowerCase();
      if (postway === 'get') {
        Object.assign(allParams, { method: postway, params: tempParams });
      } else {
        Object.assign(allParams, { method: postway, data: tempParams });
      }
    }
    if (url) {
      const res = await ibiz.net.request(url, allParams);
      return res as IHttpResponse<IData[]>;
    }
    throw new RuntimeModelError(this.model, '请配置数据接口地址');
  }

  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
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
