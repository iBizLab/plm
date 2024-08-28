// import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import { IHttpResponse, RuntimeModelError } from '@ibiz-template/core';
import {
  GridFieldEditColumnController,
  IEditorContainerController,
  getDeACMode,
} from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem } from '@ibiz/model-core';
import { mergeDeepLeft } from 'ramda';

/**
 * 表格属性列(开启行编辑)控制器
 * @return {*}
 */
export class GridChangeVersionColumnController
  extends GridFieldEditColumnController
  implements IEditorContainerController
{
  /**
   * 左侧绘制映射属性
   */
  public leftMapField: string = 'from';

  /**
   * 右侧绘制映射属性
   */
  public rightMapField: string = 'to';

  /**
   * listMap属性
   */
  public listMapField = 'srflistmapfield';

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
   * 编辑器模型
   */
  public editorModel: IParams = {};

  /**
   * 编辑器只读
   */
  public editorReadonly: boolean = false;

  /**
   * 初始化方法，生成表格编辑项控制器
   *
   * @protected
   * @returns {*}  {Promise<void>}
   */
  protected async onInit(): Promise<void> {
    await super.onInit();

    const { enableRowEdit } = this.model;
    if (!enableRowEdit) {
      return;
    }

    this.editorModel = this.editItem.editor || {};
    this.initParams();
    if (this.editorModel.appDataEntityId) {
      if (this.editorModel.appDEDataSetId) {
        this.interfaceName = this.editorModel.appDEDataSetId;
      }
      if (this.editorModel.appDEACModeId) {
        this.deACMode = await getDeACMode(
          this.editorModel.appDEACModeId,
          this.editorModel.appDataEntityId,
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
  }

  /**
   * 初始化编辑器参数
   *
   * @protected
   * @returns {*}  {void}
   */
  public initParams(): void {
    if (this.editorModel.editorParams) {
      if (this.editorModel.editorParams.readonly) {
        this.editorReadonly = Object.is(
          'true',
          this.editorModel.editorParams.readonly,
        );
      }
    }
  }

  /**
   * 加载实体数据集数据
   *
   * @param {IData} data 表单数据
   * @param {IParams} tempParam 临时视图参数
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   */
  async getServiceData(
    data: IData,
    tempParam: IParams,
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
    if (tempParam) {
      Object.assign(fixedParams, tempParam);
    }
    Object.assign(fixedParams, {
      size: 1000,
    });
    // 合并计算出来的参数和固定参数，以计算参数为准
    const tempParams = mergeDeepLeft(params, fixedParams);
    if (this.interfaceName) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      const res = await app.deService.exec(
        this.editorModel.appDataEntityId!,
        this.interfaceName,
        context,
        tempParams,
      );
      return res as IHttpResponse<IData[]>;
    }
    throw new RuntimeModelError(this.model, '请配置实体和实体数据集');
  }
}
