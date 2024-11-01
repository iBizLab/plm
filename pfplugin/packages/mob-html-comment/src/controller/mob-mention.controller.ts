/* eslint-disable no-template-curly-in-string */
import { RuntimeError } from '@ibiz-template/core';
import { IAppViewLogic, IEditor, IViewLogic } from '@ibiz/model-core';
import { CodeListItem, ScriptFactory } from '@ibiz-template/runtime';

/**
 * 评论提及控制器
 *
 * @export
 * @class CommentMentionController
 * @extends {EditorController}
 */
export class CommentMentionController {
  /**
   *云系统操作者Map
   *
   * @memberof MenTionController
   */
  public operatorMap = new Map();

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
   * @memberof CommentMentionController
   */
  public userUrl: string = '';

  /**
   * 人员UI转化
   */
  public userFieldMap: IData = {
    value: 'user_id',
    name: 'name',
  };

  /**
   * 请求方法
   *
   * @type {('post' | 'get')}
   * @memberof CommentMentionController
   */
  public userMethod: 'post' | 'get' = 'post';

  /**
   * 搜索字段
   *
   * @type {string}
   * @memberof CommentMentionController
   */
  public query: string = '';

  /**
   * 当前页
   *
   * @type {number}
   * @memberof CommentMentionController
   */
  public curPage: number = 0;

  /**
   * 分页条数
   *
   * @type {number}
   * @memberof CommentMentionController
   */
  public size: number = 20;

  /**
   * @description 视图luoj
   * @type {IAppViewLogic[]}
   * @memberof CommentMentionController
   */
  public appViewLogics: IAppViewLogic[] = [];

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CommentMentionController
   */
  constructor(editorParams: IData, option: IData) {
    this.editorParams = editorParams;
    this.model = option.model;
    this.context = option.context;
    this.params = option.params;
    this.appViewLogics = option.appViewLogics;
    const { USERURL, USERFIELDMAP, USERMETHOD, USERSIZE } = editorParams;
    if (USERURL) {
      this.userUrl = USERURL;
    }
    if (USERFIELDMAP) {
      this.userFieldMap = JSON.parse(USERFIELDMAP);
    }
    if (USERMETHOD) {
      this.userMethod = USERMETHOD.toLowerCase();
    }
    if (USERSIZE) {
      this.size = Number(USERSIZE);
    }
    this.getOperatorUserList();
  }

  /**
   * 获取云系统操作者
   *
   * @memberof MenTionController
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

  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof CommentMentionController
   */
  public toUIData(data: IData[]): IData[] {
    return data.map((item: IData) => {
      const result: IData = {};
      Object.keys(this.userFieldMap).forEach((key: string) => {
        result[key] = item[this.userFieldMap[key]];
      });
      return result;
    });
  }

  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof CommentMentionController
   */
  public async getUsers(args: IData = {}): Promise<IData[]> {
    if (!this.userUrl) {
      throw new RuntimeError('未配置提及用户USERURL编辑器参数！');
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
      this.userUrl,
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
    const res = await ibiz.net[this.userMethod](url, tempParams);
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
   * @memberof CommentMentionController
   */
  public transformHtml(value: string): string {
    let result = value;
    result = value.replaceAll(
      /<span class="ql-mention" data-value="(.+?)" data-name="(.+?)">@(.+?)<\/span>/g,
      (x, id, name, text) => {
        if (text === name) {
          return `@{"id":"${id}","name":"${name}"}`;
        }
        // 删除情况
        if (text < name) {
          return '';
        }
        // 新增情况
        const v = text.slice(name.length - text.length);
        return `@{"id":"${id}","name":"${name}"}<span>${v}</span>`;
      },
    );
    return result;
  }

  /**
   * @description 转换为delta
   * @param {string} value
   * @return {*}  {string}
   * @memberof CommentMentionController
   */
  public transformDelta(value: string): string {
    const result = value.replaceAll(
      /@{"id":"(.+?)","name":"(.+?)"}/g,
      (x, id, name) => {
        return this.getNodeInfo({ id, name });
      },
    );
    return result;
  }

  /**
   * @description 获取提及节点信息
   * @param {IData} data
   * @return {*}
   * @memberof CommentMentionController
   */
  public getNodeInfo(data: IData): string {
    return `<span class="ql-mention" data-value="${data.id}" data-name="${data.name}">@${data.name}</span>`;
  }

  /**
   * @description 获取提及人员逻辑
   * @return {*}
   * @memberof CommentMentionController
   */
  public getMentionLogic(): IViewLogic | undefined {
    return this.appViewLogics.find(x => x.name === 'MENTION');
  }
}
