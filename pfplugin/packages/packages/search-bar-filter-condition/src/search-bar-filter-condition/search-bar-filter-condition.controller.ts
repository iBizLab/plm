import {
  CodeListEditorController,
  FormItemController,
  SearchBarFilterController,
} from '@ibiz-template/runtime';
import { ISearchBar } from '@ibiz/model-core';
import { IField } from '../interface';
import { FilterModes } from '../utils';

export class SearchBarFilterConditionController extends CodeListEditorController {
  /**
   * 字段
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:41
   * @type {IField[]}
   */
  fields: IField[] = [];

  /**
   * 字段映射
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:55
   * @type {Map<string, IField>}
   */
  fieldMap: Map<string, IField> = new Map();

  /**
   * 搜索栏过滤项控制器列表
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:38
   * @type {SearchBarFilterController[]}
   */
  filterControllers: SearchBarFilterController[] = [];

  /**
   * 边框模式
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:00
   * @type {('DEFAULT' | 'BORDER')}
   */
  borderMode: 'DEFAULT' | 'BORDER' = 'DEFAULT';

  /**
   * 搜索栏名称
   *
   * @author zhanghengfeng
   * @date 2024-07-24 17:07:35
   * @type {string}
   */
  searchBarName: string = 'searchbar';

  protected async onInit(): Promise<void> {
    await super.onInit();
    this.borderMode =
      this.editorParams?.BORDERMODE === 'BORDER' ? 'BORDER' : 'DEFAULT';
    if (this.editorParams?.SEARCHBARNAME) {
      this.searchBarName = this.editorParams.SEARCHBARNAME;
    }
    await this.initFields();
  }

  /**
   * 初始化字段
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:38
   * @return {*}  {Promise<void>}
   */
  async initFields(): Promise<void> {
    const name = this.searchBarName;
    const formItem = this.parent as FormItemController;
    if (!formItem) {
      return;
    }
    const controls = formItem.form?.view?.layoutPanel?.model?.controls;
    if (!Array.isArray(controls)) {
      return;
    }
    const searchBar = controls.find(item => item.name === name) as ISearchBar;
    if (!searchBar) {
      return;
    }
    if (
      !Array.isArray(searchBar.searchBarFilters) ||
      !searchBar.searchBarFilters.length
    ) {
      return;
    }
    if (!searchBar.appDataEntityId) {
      return;
    }
    const appDataEntity = await ibiz.hub.getAppDataEntity(
      searchBar.appDataEntityId,
      this.context.srfappid,
    )!;
    const filterControllers = searchBar.searchBarFilters.map(item => {
      const filterController = new SearchBarFilterController(
        item,
        appDataEntity,
        this.context,
        this.params,
      );
      return filterController;
    });
    await Promise.all(filterControllers.map(controller => controller.init()));
    const fields: IField[] = [];
    const fieldMap: Map<string, IField> = new Map();
    filterControllers.forEach(item => {
      if (item.hidden) {
        return;
      }
      let field = fields.find(x => x.fieldName === item.fieldName);
      // 没有且不是隐藏的添加进去
      if (!field) {
        field = {
          fieldName: item.fieldName,
          label: item.label,
          valueOPs: [],
        };
        fields.push(field);
      }
      // 添加操作符号(没有配置的给全部)
      if (!item.valueOP) {
        field.valueOPs = FilterModes.map(item => item.valueOP);
      } else {
        field.valueOPs.push(item.valueOP);
      }
    });
    fields.forEach(item => {
      item.valueOPs = [...new Set(item.valueOPs)];
      fieldMap.set(item.fieldName, item);
    });
    this.fields = fields;
    this.fieldMap = fieldMap;
    this.filterControllers = filterControllers.filter(item => !item.hidden);
  }
}
