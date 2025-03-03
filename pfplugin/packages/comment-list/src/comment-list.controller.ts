/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CodeListItem,
  ControllerEvent,
  EditorController,
  EventBase,
  IComponentEvent,
} from '@ibiz-template/runtime';
import { IAppCodeList, ITextBox } from '@ibiz/model-core';

interface commentEvent extends IComponentEvent {
  deleteItem: {
    event: EventBase;
    emitArgs: IData;
  };

  addItem: {
    event: EventBase;
    emitArgs: IData;
  };

  editreply: {
    event: EventBase;
    emitArgs: IData;
  };
}

export class CommentListComtroller extends EditorController<ITextBox> {
  /**
   * 是否走本地模式
   *
   * @type {boolean}
   * @memberof CommentListComtroller
   */
  public isLocal: boolean = false;

  /**
   * 用户列表
   *
   * @memberof CommentListComtroller
   */
  public operatorMap = new Map();

  public evt: ControllerEvent<commentEvent> = new ControllerEvent<commentEvent>(
    (): Omit<EventBase, 'eventName'> => {
      return {
        context: this.context,
        params: this.params,
        data: [],
        eventArg: '',
        targetName: this.model.name!,
        view: (this.parent as IData).view,
      };
    },
  );

  /**
   * 代码表模型
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-05-24 10:55:50
   */
  public codeList: IAppCodeList | undefined = undefined;

  public extraParams: IData = {};

  /**
   * 实体codeName
   * @type {string}
   */
  public deCodeName: string = 'comment';

  protected async onInit(): Promise<void> {
    super.onInit();
    await this.getOperatorUserList();
    if (this.editorParams && this.editorParams.PID) {
      Object.assign(this.extraParams, { pid: this.editorParams.PID });
    }
    if (this.editorParams && this.editorParams.ISLOCAL === 'TRUE') {
      this.isLocal = true;
    }
    if (this.editorParams && this.editorParams.DECODENAME) {
      this.deCodeName = this.editorParams.DECODENAME;
    }
  }

  /**
   * 删除项
   *
   * @param {string} key
   * @memberof CommentListComtroller
   */
  public async deleteItem(id: string): Promise<void> {
    if (this.isLocal) {
      // 去缓存里删除数据
      const service = await this.getLocalTempData();
      if (service) {
        // service.removeTemp(this.context, { id });
        await service.local?.delete(this.context, id);
        const uiDomain = ibiz.uiDomainManager.get(this.context.srfsessionid);
        if (uiDomain) {
          uiDomain.dataChangeCompleted();
        }
      }
    }
    this.evt.emit('deleteItem', {
      eventArg: id,
    });
  }

  public async getLocalTempData(): Promise<IData | undefined> {
    const { form } = this.parent as any;
    if (form) {
      const { srfappid } = this.context;
      const appCodeName = srfappid.split('_').pop();
      const deService = await ibiz.hub.getAppDEService(
        srfappid,
        `${appCodeName}.${this.deCodeName}`,
        this.context,
      );
      return deService;
    }
  }

  /**
   * 添加项
   *
   * @param {IData} item
   * @memberof CommentListComtroller
   */
  public async addItem(item: IData): Promise<void> {
    if (this.isLocal) {
      // 去缓存里添加数据
      const service = await this.getLocalTempData();
      if (service) {
        await service.create(this.context, item);
        const uiDomain = ibiz.uiDomainManager.get(this.context.srfsessionid);
        if (uiDomain) {
          uiDomain.dataChangeCompleted();
        }
      }
    }
    this.evt.emit('addItem', {
      eventArg: item,
    });
  }

  /**
   * 更新项
   *
   * @param {IData} item
   * @return {*}  {Promise<void>}
   * @memberof CommentListComtroller
   */
  public async upadteItem(item: IData): Promise<void> {
    if (this.isLocal) {
      // 去缓存里更新数据
      const service = await this.getLocalTempData();
      if (service) {
        await service.update(this.context, item);
        const uiDomain = ibiz.uiDomainManager.get(this.context.srfsessionid);
        if (uiDomain) {
          uiDomain.dataChangeCompleted();
        }
      }
    }
    this.evt.emit('editreply', {
      eventArg: item,
    });
  }

  /**
   * 重新编辑评论
   *
   * @param {IData} item
   * @memberof CommentListComtroller
   */
  public updateComment(item: IData): void {
    const panel = (this.parent as any).panel;
    const form = (this.parent as any).form;
    if (panel) {
      panel.evt.emit('editreply', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [item],
      });
    } else if (form) {
      form.evt.emit('editreply', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [item],
      });
    }
  }

  /**
   * 删除评论
   *
   * @param {IData} item
   * @memberof CommentListComtroller
   */
  public deleteComment(item: IData): void {
    const panel = (this.parent as any).panel;
    const form = (this.parent as any).form;
    if (panel) {
      panel.evt.emit('deletecomment', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [item],
      });
    } else if (form) {
      // 在表单里
      form.evt.emit('deletecomment', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [item],
      });
    }
  }

  public handleExtraParams(data: IData): IData {
    const tempData: IData = {};
    Object.keys(this.extraParams).forEach((key: string) => {
      if (
        this.extraParams[key].startsWith('%') &&
        this.extraParams[key].endsWith('%')
      ) {
        const tempKey = this.extraParams[key].slice(1, -1);
        if (Object.prototype.hasOwnProperty.call(this.context, tempKey)) {
          Object.assign(tempData, { [key]: this.context[tempKey] });
        } else if (Object.prototype.hasOwnProperty.call(this.params, tempKey)) {
          Object.assign(tempData, { [key]: this.params[tempKey] });
        } else if (Object.prototype.hasOwnProperty.call(data, tempKey)) {
          Object.assign(tempData, { [key]: data[tempKey] });
        } else {
          Object.assign(tempData, { [key]: null });
        }
      } else {
        Object.assign(tempData, { [key]: this.extraParams[key] });
      }
    });
    return tempData;
  }

  /**
   * 发送评论
   *
   * @memberof CommentListComtroller
   */
  public sendComment(value: string, data: IData): void {
    const panel = (this.parent as any).panel;
    const form = (this.parent as any).form;
    if (panel) {
      const tempdata = this.handleExtraParams(panel.inputData);
      Object.assign(tempdata, { value });
      // 在面板里,需要获取父id
      panel.evt.emit('sendcomment', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [tempdata],
      });
    } else if (form) {
      // 在表单里
      const tempdata = this.handleExtraParams(data);
      Object.assign(tempdata, { value });
      form.evt.emit('sendcomment', {
        targetName: 'comments',
        context: this.context,
        params: this.params,
        data: [tempdata],
      });
    }
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
