/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-template-curly-in-string */
import { RuntimeError } from '@ibiz-template/core';
import { IAppViewLogic, IEditor } from '@ibiz/model-core';
import { CodeListItem, ScriptFactory } from '@ibiz-template/runtime';

/**
 * 评论提及公工作项控制器
 *
 * @export
 * @class CommentMarkerController
 * @extends {EditorController}
 */
export class CommentMarkerController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof MenTionController
   */
  public model!: IEditor;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof MenTionController
   */
  public editorParams: IData | undefined;

  /**
   * 上下文
   *
   * @type {IContext}
   */
  public context!: IContext;

  /**
   * 视图参数
   *
   * @type {IParams}
   */
  public params!: IParams;

  /**
   * 用户请求url
   *
   * @type {string}
   * @memberof CommentMarkerController
   */
  public quoteUrl: string = '';

  /**
   * 人员UI转化
   */
  public quoteFieldMap: IData = {
    value: 'id',
    name: 'name',
    identifier: 'identifier',
    type: 'owner_subtype',
  };

  /**
   * 代码表map
   *
   * @type {IData}
   * @memberof MarkerController
   */
  public quoteCodelistMap: Map<string, IData> = new Map();

  /**
   * 请求方法
   *
   * @type {('post' | 'get')}
   * @memberof CommentMarkerController
   */
  public quoteMethod: 'post' | 'get' = 'post';

  /**
   * 搜索字段
   *
   * @type {string}
   * @memberof CommentMarkerController
   */
  public query: string = '';

  /**
   * 当前页
   *
   * @type {number}
   * @memberof CommentMarkerController
   */
  public curPage: number = 0;

  /**
   * 分页条数
   *
   * @type {number}
   * @memberof CommentMarkerController
   */
  public size: number = 20;

  /**
   * @description 视图luoj
   * @type {IAppViewLogic[]}
   * @memberof CommentMarkerController
   */
  public appViewLogics: IAppViewLogic[] = [];

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CommentMarkerController
   */
  constructor(editorParams: IData, option: IData) {
    this.editorParams = editorParams;
    this.model = option.model;
    this.context = option.context;
    this.params = option.params;
    this.appViewLogics = option.appViewLogics;
    const {
      QUOTEURL,
      QUOTEFIELDMAP,
      QUOTEMETHOD,
      QUOTESIZE,
      QUOTECODELISTMAP,
    } = editorParams;
    if (QUOTEURL) {
      this.quoteUrl = QUOTEURL;
    }
    if (QUOTEFIELDMAP) {
      this.quoteFieldMap = JSON.parse(QUOTEFIELDMAP);
    }
    if (QUOTEMETHOD) {
      this.quoteMethod = QUOTEMETHOD.toLowerCase();
    }
    if (QUOTESIZE) {
      this.size = Number(QUOTESIZE);
    }
    if (QUOTECODELISTMAP) {
      const codelist = JSON.parse(QUOTECODELISTMAP);
      this.setCodeListMap(codelist);
    }
  }

  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof MarkerController
   */
  async loadCodeList(appCodeListId: string): Promise<IData | undefined> {
    const app = ibiz.hub.getApp(this.context.srfappid);
    const codeList = app.codeList.getCodeList(appCodeListId);
    const codeListItems = await app.codeList.get(
      appCodeListId,
      this.context,
      this.params,
    );
    return { codeList, codeListItems };
  }

  // 设置代码表map
  public async setCodeListMap(items: IData): Promise<void> {
    for (const key in items) {
      const item = await this.loadCodeList(items[key]);
      if (item) {
        this.quoteCodelistMap.set(key, item);
      }
    }
  }

  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof CommentMarkerController
   */
  public toUIData(data: IData[]): IData[] {
    return data.map((item: IData) => {
      const result: IData = {};
      Object.keys(this.quoteFieldMap).forEach((key: string) => {
        result[key] = item[this.quoteFieldMap[key]];
      });
      return result;
    });
  }

  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof CommentMarkerController
   */
  public async getWorkItems(args: IData = {}): Promise<IData[]> {
    if (!this.quoteUrl) {
      throw new RuntimeError('未配置提及用户QUOTEURL编辑器参数！');
    }
    const { data, context, params } = args;
    const isInitialLoad = args.isInitialLoad === true;
    const isLoadMore = args.isLoadMore === true;
    if (isInitialLoad) {
      this.curPage = 0;
    } else if (isLoadMore) {
      this.curPage += 1;
    }
    const url = ScriptFactory.execScriptFn(
      { data, context, params },
      this.quoteUrl,
      {
        singleRowReturn: true,
        isAsync: false,
      },
    ) as string;
    const tempParams: IData = {
      ...params,
      size: this.size,
      page: this.curPage,
    };
    const res = await ibiz.net[this.quoteMethod](url, tempParams);
    if (res.ok) {
      return this.toUIData(res.data as IData[]);
    }
    return [];
  }

  /**
   * @description 转换html
   * @param {string} value
   * @param {IData} data
   * @return {*}  {string}
   * @memberof CommentMarkerController
   */
  public transformHtml(value: string): string {
    const result = value.replaceAll(
      /<mob-marker class="ql-marker" data-identifier="(.+?)" data-name="(.+?)" data-value="(.+?)" data-icon="((.|[\t\r\f\n\s])+?)">(.+?)<\/mob-marker>/g,
      (x, identifier, name, id, icon) => {
        return `#{"id":"${id}","name":"${name}","identifier":"${identifier}","icon":"${icon}"}<span> </span>`;
      },
    );
    return result;
  }

  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}  {string}
   * @memberof CommentMarkerController
   */
  public transformDelta(value: string): string {
    const result = value.replaceAll(
      /#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g,
      (x, id, name, identifier, icon) => {
        return this.getNodeInfo({ id, name, identifier, icon });
      },
    );
    return result;
  }

  /**
   * @description 获取提及节点信息
   * @param {IData} data
   * @return {*}
   * @memberof CommentMarkerController
   */
  public getNodeInfo(data: IData): string {
    return `<mob-marker class="ql-marker" data-identifier="${data.identifier}" data-name="${data.name}" data-value="${data.id}" data-icon="${data.icon}">${data.name}</mob-marker>`;
  }

  /**
   * @description 获取代码表项
   * @param {(CodeListItem[] | undefined)} codelist
   * @param {(string | number)} value
   * @return {*}
   * @memberof CommentMarkerController
   */
  public findCodeListItem(
    codelist: CodeListItem[] | undefined,
    value: string | number,
  ): IData | undefined {
    if (codelist) {
      // eslint-disable-next-line eqeqeq
      const findItem = codelist.find(item => item.value == value);
      if (findItem) {
        return findItem;
      }
      for (let i = 0; i < codelist.length; i++) {
        const childrenItem = this.findCodeListItem(
          codelist[i].children,
          value,
        ) as CodeListItem;
        if (childrenItem) {
          return childrenItem;
        }
      }
    }
  }

  /**
   * @description 获取选中数据
   * @param {IData} data
   * @memberof CommentMarkerController
   */
  public getSelection(data: IData): IData {
    if (this.quoteCodelistMap.has('type') && data.type) {
      const item = this.quoteCodelistMap.get('type')!;
      const findItem = this.findCodeListItem(item.codeListItems, data.type);
      if (findItem && findItem.sysImage) {
        Object.assign(data, {
          icon: findItem.sysImage.rawContent,
        });
      }
    }
    return data;
  }

  /**
   * @description 获取提及工作项逻辑
   * @return {*}
   * @memberof CommentMarkerController
   */
  public getMarkerLogic(): IAppViewLogic | undefined {
    return this.appViewLogics.find(x => x.name === 'MARKER');
  }
}
