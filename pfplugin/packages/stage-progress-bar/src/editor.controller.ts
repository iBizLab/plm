import { ISpan, IAppCodeList } from '@ibiz/model-core';
import {
  CodeListEditorController,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
import { RuntimeModelError } from '@ibiz-template/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/**
 * 标签编辑器控制器
 * @return {*}
 */
export class EditorController extends CodeListEditorController<ISpan> {
  /**
   *值项
   */
  public valueItem = '';

  /**
   * 发布阶段标识属性
   */
  public releaseStageIdField = 'release_stage';

  /**
   * 点击阶段标识属性
   */
  public clickStageIdField = 'click_stage';

  /**
   * 判断是否为当前发布阶段属性
   */
  public isCurrentField = 'is_current';

  /**
   * 是否可操作属性
   */
  public isOperateField = 'target';

  /**
   * 内容显示配置
   */
  public showConfig: IParams = {
    sort: 'p_sequence',
    typeName: 'pname',
    color: 'p_color',
  };

  /**
   * 日期显示配置
   */
  public dateShowConfig: IParams = {
    fieldName: 'operated_time',
    format: 'YYYY年MM月DD日',
  };

  /**
   * 日期范围配置
   */
  public dateRange: IParams = {
    startField: '',
    endField: '',
  };

  /**
   * 显示模式
   */
  public showMode: string = 'default';

  /**
   * 代码表模型
   * @return {*}
   */
  public codeList: IAppCodeList | undefined = undefined;

  protected async onInit(): Promise<void> {
    super.onInit();
    // span-link临时用editorItems
    if (this.model?.editorItems?.[0]) {
      this.valueItem = this.model.editorItems[0].id!;
    }
    this.initEditorParams();
  }

  /**
   * 初始化编辑器参数
   */
  public initEditorParams(): void {
    const {
      RELEASESTAGEIDFIELD,
      CLICKSTAGEIDFIELD,
      DATESHOWCONFIG,
      ISCURRENTFIELD,
      ISOPERATEFIELD,
      SHOWCONFIG,
      DATERANGE,
      SHOWMODE,
    } = this.editorParams;
    if (RELEASESTAGEIDFIELD) {
      this.releaseStageIdField = RELEASESTAGEIDFIELD;
    }
    if (CLICKSTAGEIDFIELD) {
      this.clickStageIdField = CLICKSTAGEIDFIELD;
    }
    if (ISCURRENTFIELD) {
      this.isCurrentField = ISCURRENTFIELD;
    }
    if (ISOPERATEFIELD) {
      this.isOperateField = ISOPERATEFIELD;
    }
    if (SHOWMODE) {
      this.showMode = SHOWMODE;
    }
    if (DATESHOWCONFIG) {
      try {
        this.dateShowConfig = JSON.parse(DATESHOWCONFIG);
      } catch (error) {
        this.dateShowConfig = {};
      }
    }
    if (SHOWCONFIG) {
      try {
        this.showConfig = JSON.parse(SHOWCONFIG);
      } catch (error) {
        this.showConfig = {};
      }
    }
    if (DATERANGE) {
      try {
        this.dateRange = JSON.parse(DATERANGE);
      } catch (error) {
        this.dateRange = {};
      }
    }
  }

  /**
   * 打开数据链接视图
   */
  public async openLinkView(
    data: IData,
    param: IParams,
  ): Promise<IData[] | IParams> {
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
    const tempParam = {};
    Object.assign(tempParam, params);
    Object.assign(tempParam, param);
    return ibiz.commands.execute(
      OpenAppViewCommand.TAG,
      linkAppViewId,
      context,
      tempParam,
    );
  }

  /**
   * 日期格式化
   */
  public dateFormat(date: string | Date, format: string): string {
    return dayjs(date).format(format);
  }
}
