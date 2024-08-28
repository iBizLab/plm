import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
import {
  CodeListItem,
  EditorController,
  getDeACMode,
} from '@ibiz-template/runtime';
import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import { mergeDeepLeft } from 'ramda';

export class TeamPickerController extends EditorController<IPicker> {
  /**
   * 当前应用是否拥有ORG_M统一资源权限,有则数据集添加组织，没有则不添加
   *
   * @memberof TeamPickerController
   */
  public hasORG_M: boolean = false;

  /**
   * 是否显示个人
   *
   * @type {boolean}
   * @memberof TeamPickerController
   */
  public showPerson: boolean = false;

  /**
   * 所属类型代码表映射
   *
   * @type {IData}
   * @memberof TeamPickerController
   */
  public fillMap: IData = {
    user: 'user',
    user_group: 'user_group',
    organization: 'organization',
  };

  /**
   *自填模式sort排序
   *
   * @type {(string | undefined)}
   * @memberof TeamPickerController
   */
  public sort: string | undefined = '';

  /**
   * 数据集codeName
   */
  public interfaceName: string = '';

  /**
   *值项
   */
  public valueItem = '';

  /*
   * 实体自填模式模型
   */
  public deACMode: IAppDEACMode | undefined = undefined;

  /**
   * 主键属性名称
   */
  public keyName: string = 'srfkey';

  /**
   * 主文本属性名称
   */
  public textName: string = 'srfmajortext';

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

  // 用户列表
  public operatorMap = new Map();

  protected async onInit(): Promise<void> {
    super.onInit();
    this.valueItem = this.model.valueItemName?.toLowerCase() || '';
    const app = await ibiz.hub.getApp(this.context.srfappid);
    this.hasORG_M = app.authority.calcByResCode('ORG_M');

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
    this.objectIdField = this.model.objectIdField?.toLowerCase();
    this.objectNameField = this.model.objectNameField?.toLowerCase();
    this.objectValueField = this.model.objectValueField?.toLowerCase();
    if (this.editorParams && this.editorParams.enablePerson) {
      this.showPerson = this.editorParams.enablePerson === 'true';
    }
    if (this.editorParams && this.editorParams.fillMap) {
      try {
        this.fillMap = JSON.parse(this.editorParams.fillMap);
      } catch {
        this.fillMap = {
          user: 'user',
          user_group: 'user_group',
          organization: 'organization',
        };
      }
    }
    await this.getOperatorUserList();
  }

  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof TeamPickerController
   */
  public async getServiceData(
    query: string,
    data: IData,
    reader: string | null,
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
    if (reader) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      const res = await app.deService.exec(
        this.model.appDataEntityId!,
        reader,
        context,
        tempParams,
      );
      return res as IHttpResponse<IData[]>;
    }
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
