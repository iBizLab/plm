import { ListController } from '@ibiz-template/runtime';
export declare class ReviewListController extends ListController {
    /**
     * 云系统操作者Map
     *
     * @memberof ReviewListController
     */
    operatorMap: Map<any, any>;
    /**
     * 头像属性
     *
     * @type {string}
     * @memberof ReviewListController
     */
    avatarField: string;
    /**
     * 用户id属性
     */
    userIdField: string;
    /**
     * 评审人类型属性
     */
    revTypeField: string;
    /**
     * 由评审人发起自由指定的状态值
     */
    customRevType: string[];
    /**
     * 用户信息
     *
     * @public
     * @type {IData}
     * @memberof ReviewListController
     */
    userInfo: IData;
    protected onCreated(): Promise<void>;
    /**
     * 初始化部件控件参数
     *
     * @memberof ReviewListController
     */
    initCtrlParams(): void;
    /**
     * 解析头像数据
     *
     * @param {string} avatar
     * @return {string | undefined}
     * @memberof ReviewListController
     */
    parseAvatar(avatar: string): string | void;
    /**
     * 获取操作用户列表
     *
     * @memberof ReviewListController
     */
    getOperatorUserList(): Promise<void>;
}
