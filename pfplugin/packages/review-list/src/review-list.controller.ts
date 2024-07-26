import { RuntimeError } from '@ibiz-template/core';
import { CodeListItem, ListController } from '@ibiz-template/runtime';
import { isArray } from 'lodash-es';

export class ReviewListController extends ListController {
  /**
   * 云系统操作者Map
   *
   * @memberof ReviewListController
   */
  public operatorMap = new Map();

  /**
   * 头像属性
   *
   * @type {string}
   * @memberof ReviewListController
   */
  public avatarField: string = 'iconurl';

  /**
   * 用户id属性
   */
  public userIdField = 'submitter_id';

  /**
   * 评审人类型属性
   */
  public revTypeField = 'reviewer_type';

  /**
   * 用户信息
   *
   * @public
   * @type {IData}
   * @memberof ReviewListController
   */
  public userInfo!: IData;

  protected async onCreated(): Promise<void> {
    await super.onCreated();

    this.initCtrlParams();

    await this.getOperatorUserList();

    const userId = this.params[this.userIdField];
    // 提交人员存在
    if (this.operatorMap.size > 0 && userId) {
      const tempVal = this.operatorMap.get(userId);
      if (tempVal && tempVal.data && tempVal.data[this.avatarField]) {
        this.userInfo = tempVal.data;
        Object.assign(this.userInfo, {
          avatar: this.parseAvatar(tempVal.data[this.avatarField]),
        });
      }
    }
  }

  /**
   * 初始化部件控件参数
   *
   * @memberof ReviewListController
   */
  initCtrlParams(): void {
    const { ctrlParams = {} } = this.model.controlParam as IData;
    if (ctrlParams.USERIDFIELD) {
      this.userIdField = ctrlParams.USERIDFIELD;
    }
    if (ctrlParams.AVATARFIELD) {
      this.avatarField = ctrlParams.AVATARFIELD;
    }
    if (ctrlParams.REVTYPEFIELD) {
      this.revTypeField = ctrlParams.REVTYPEFIELD;
    }
  }

  /**
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {string | undefined}
   * @memberof ReviewListController
   */
  public parseAvatar(avatar: string): string | void {
    try {
      const res = JSON.parse(avatar);
      if (res) {
        const data = isArray(res) ? res[0] : res;
        const urls = ibiz.util.file.calcFileUpDownUrl(
          this.context,
          this.params,
        );
        return urls.downloadUrl.replace('%fileId%', data.id);
      }
    } catch (error) {
      throw new RuntimeError('头像数据解析异常');
    }
  }

  /**
   * 获取操作用户列表
   *
   * @memberof ReviewListController
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
