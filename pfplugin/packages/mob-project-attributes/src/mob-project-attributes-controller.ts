/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable eqeqeq */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */

import {
  EditFormController,
  EditFormService,
  convertNavData,
  getEntitySchema,
} from '@ibiz-template/runtime';
import { debounce } from 'lodash-es';
import { clone } from 'ramda';
import { Ref, reactive, ref } from 'vue';

export class MobProjectAttributesController extends EditFormController {
  /**
   * jsonschema参数
   *
   * @author zhanghengfeng
   * @date 2024-07-05 15:07:47
   * @type {IParams}
   */
  jsonSchemaParams: IParams = {};

  // 计算表单模型
  public calcFormDetail = (item: IData) => {
    let editorType = 'span';
    if (item.type === 'string') {
      editorType = 'MOBTEXT';
    } else if (item.type === 'number') {
      editorType = 'MOBNUMBER';
    } else if (item.type === 'picker') {
      editorType = 'MOBDROPDOWNLIST';
    } else if (item.type === 'date') {
      editorType = 'MOBDATE';
    }
    const result = {
      allowEmpty: true,
      appDEFieldId: item.key,
      appId: ibiz.env.appId,
      capLanguageRes: { lanResTag: 'DEF.LNAME.ID', appId: ibiz.env.appId },
      caption: item.description,
      codeName: item.key,
      dataType: 25,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      editor: {
        style: {},
        appId: ibiz.env.appId,
        editable: true,
        editorType,
        halign: 'LEFT',
        id: item.key,
        valign: 'MIDDLE',
        valueType: 'SIMPLE',
        wrapMode: 'NOWRAP',
      },
      enableCond: 3,
      id: item.key,
      labelPos: 'LEFT',
      labelWidth: 130,
      layoutPos: { colMD: 24, layout: 'TABLE_24COL', appId: ibiz.env.appId },
      noPrivDisplayMode: 1,
      showCaption: true,
    };
    if (item.type === 'picker') {
      Object.assign(result.editor, {
        appCodeListId: item.codelistId,
        valueItemName: item.key,
      });
      if (item.codelistId) {
        Object.assign(result.editor, {
          appCodeListId: item.codelistId,
        });
      }
    }

    return result;
  };

  /**
   * 初始化方法
   *
   * @author lxm
   * @date 2022-08-22 22:08:16
   * @protected
   * @returns {*}  {Promise<void>}
   */
  protected async onCreated(): Promise<void> {
    const jsonSchemaParams = JSON.parse(
      this.controlParams.jsonschemaparams || '{}',
    );
    this.jsonSchemaParams = convertNavData(
      jsonSchemaParams,
      this.params,
      this.context,
    );
    await this.initByEntitySchema();

    if (this.model.deformPages && this.model.deformPages[0]) {
      this.addAttributesFormDetail.forEach(item => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.model.deformPages![0].deformDetails?.push(item as any);
      });
    }

    await super.onCreated();
    // 实例部件服务
    this.service = new EditFormService(this.model);
    await this.service.init(this.context);

    // 自动保存防抖，只有最后一次执行
    this.autoSave = debounce(this.autoSave.bind(this), 500, {
      trailing: true,
    }) as () => Promise<void>;
  }

  protected async onMounted(): Promise<void> {
    await super.onMounted();

    // 如果外面没有配置默认不加载的话，默认部件自己加载,simple模式不加载
    if (!this.state.isSimple && this.state.loadDefault) {
      this.load();
    }
  }

  // 扩展属性
  public addAttributes: Ref<IData[]> = ref([]);

  // 扩展属性模型
  public addAttributesFormDetail: IData[] = [];

  async calcColumnModelBySchema(
    json: IData,
    c: EditFormController,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    if (!json.properties) {
      return;
    }
    const { properties } = json;
    if (!(Object.keys(properties).length > 0)) {
      return;
    }
    // 属性codeName对应的属性id
    const codeNameToId: { [p: string]: string } = {};
    const dataEntity = await ibiz.hub.getAppDataEntity(
      c.model.appDataEntityId!,
      c.model.appId,
    );
    dataEntity.appDEFields?.forEach(field => {
      codeNameToId[field.codeName!.toLowerCase()] = field.id!;
    });
    const addFields: {
      key: string;
      description: string;
      type: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: any;
      codelistId: string;
    }[] = [];
    Object.keys(properties).forEach((key: string) => {
      if (!codeNameToId[key]) {
        let type: string;
        switch (properties[key].type) {
          case 'string':
            type = 'string';
            if (properties[key].format === 'date-time') {
              type = 'date';
            }
            break;
          case 'integer':
            type = 'integer';
            break;
          case 'number':
            type = 'number';
            break;
          default:
            ibiz.log.error(
              ibiz.i18n.t('runtime.controller.control.grid.unsupported', {
                type: properties[key].type,
              }),
            );
            return;
        }

        addFields.push({
          key,
          description: properties[key].description || properties[key].key,
          type,
          ref: reactive({ isFocus: true }),
          codelistId: properties[key].enumSource
            ? properties[key].enumSource
            : '',
        });
      }
    });

    return addFields;
  }

  /**
   * 根据jsonschema初始化自定义表格列
   * @author lxm
   * @date 2024-01-02 04:41:23
   * @return {*}  {Promise<void>}
   */
  async initByEntitySchema(): Promise<void> {
    const tempParams: IData = clone(this.jsonSchemaParams);
    Object.assign(tempParams, this.params);
    const json = await getEntitySchema(
      this.model.appDataEntityId!,
      this.context,
      tempParams,
    );
    if (!json) {
      return;
    }

    const result = await this.calcColumnModelBySchema(json, this);
    if (result.length) {
      this.addAttributes.value = result;
      // this.addAttributes.value.push({
      //   key: 'testnumber',
      //   description: '测试数值',
      //   type: 'number',
      //   ref: reactive({ isFocus: true }),
      // });
      // this.addAttributes.value.push({
      //   key: 'testpiker',
      //   description: '测试选择',
      //   type: 'picker',
      //   ref: reactive({ isFocus: true }),
      //   codelistId: 'ProjMgmt__scope_type',
      // });
      // this.addAttributes.value.push({
      //   key: 'testdate',
      //   description: '测试日期',
      //   type: 'date',
      //   ref: reactive({ isFocus: true }),
      // });
      this.addAttributes.value.forEach(item => {
        this.addAttributesFormDetail.push(this.calcFormDetail(item));
      });
    }
  }
}
