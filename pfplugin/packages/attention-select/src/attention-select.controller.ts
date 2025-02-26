import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import {
  EditorController,
  OpenAppViewCommand,
  getDeACMode,
  IViewConfig,
  IModalData,
  getAcItemProvider,
  IAcItemProvider,
  CodeListItem,
} from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
import { mergeDeepLeft } from 'ramda';

export class AttentionSelectController extends EditorController<IPicker> {
  /**
   * 是否多选
   */
  public multiple = false;

  /**
   *选择视图相关参数
   */
  public pickupView: IViewConfig | null = null;

  /**
   *链接视图相关参数
   */
  public linkView: IViewConfig | null = null;

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

  /**
   * 自填从映射
   *
   * @memberof AttentionSelectController
   */
  public selfFillMap = {
    user_id: 'user_id',
    user_name: 'name',
    user_title: 'title',
  };

  /**
   * 自填列表项适配器
   *
   * @author zhanghengfeng
   * @date 2024-05-21 17:05:50
   * @type {IAcItemProvider}
   */
  acItemProvider?: IAcItemProvider;

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
          if (this.deACMode.itemSysPFPluginId) {
            this.acItemProvider = await getAcItemProvider(this.deACMode);
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
    this.objectIdField = this.model.objectIdField?.toLowerCase();
    this.objectNameField = this.model.objectNameField?.toLowerCase();
    this.objectValueField = this.model.objectValueField?.toLowerCase();

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
          user_title: 'title',
        };
      }
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
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PickerEditorController
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
    throw new RuntimeModelError(
      this.model,
      ibiz.i18n.t('editor.common.entityConfigErr'),
    );
  }

  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PickerEditorController
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
      params.selecteddata = selectedData;
    }
    if (!this.pickupView) {
      throw new RuntimeModelError(
        this.model,
        ibiz.i18n.t('editor.common.selectViewConfigErr'),
      );
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
  public async openLinkView(data: IData): Promise<IModalData | undefined> {
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
      throw new RuntimeModelError(
        this.model,
        ibiz.i18n.t('editor.common.linkViewConfigErr'),
      );
    }
    return ibiz.commands.execute<IModalData>(
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
        [this.objectValueField]: {
          ...select,
        },
      });
    }
    if (select.srfnodeid) {
      Object.assign(object, {
        srfnodeid: select.srfnodeid,
      });
    }
    return object;
  }

  public operatorMap = new Map();

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
