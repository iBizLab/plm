import { Router } from 'vue-router';
import { IModalData, PanelItemController } from '@ibiz-template/runtime';
/**
 * 用户信息控制器
 *
 * @export
 * @class CustomUserInfoController
 * @extends {PanelItemController}
 */
export declare class CustomUserInfoController extends PanelItemController {
    /**
     * 弹框内导航视图名称
     *
     * @private
     * @memberof CustomUserInfoController
     */
    private navViewName;
    /**
     * 头像属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    avatarField: string;
    /**
     * 标题属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    titlField: string;
    /**
     * 子标题属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    subTitleField: string;
    /**
     * 路由
     *
     * @private
     * @memberof CustomUserInfoController
     */
    private router;
    /**
     * 气泡弹窗容器
     *
     * @private
     * @type {(IOverlayPopoverContainer | null)}
     * @memberof CustomUserInfoController
     */
    private overlay;
    /**
     * ctx
     *
     * @memberof CustomUserInfoController
     */
    private ctx;
    /**
     * 用户信息视图
     *
     * @private
     * @type {IViewConfig}
     * @memberof CustomUserInfoController
     */
    private userInfoView?;
    /**
     * 用户信息
     *
     * @public
     * @type {IData}
     * @memberof CustomUserInfoController
     */
    userInfo: IData;
    /**
     * 监听函数
     *
     * @memberof CustomUserInfoController
     */
    cleanup: () => void;
    /**
     * 是否折叠
     *
     * @readonly
     * @memberof CustomUserInfoController
     */
    get isCollapse(): boolean;
    /**
     * 菜单方向
     *
     * @readonly
     * @memberof CustomUserInfoController
     */
    get menuAlign(): string;
    /**
     * 初始化
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof CustomUserInfoController
     */
    protected onInit(): Promise<void>;
    /**
     * 解析头像数据
     *
     * @param {string} avatar
     * @return {*}
     * @memberof CustomUserInfoController
     */
    parseAvatar(avatar: string): string | undefined;
    /**
     * 初始化面板项高级参数
     *
     * @memberof CustomUserInfoController
     */
    initRawItemParams(): void;
    /**
     * 设置路由对象
     *
     * @param {Router} router
     * @memberof CustomUserInfoController
     */
    setRouter(router: Router): void;
    /**
     * 登出
     *
     * @memberof CustomUserInfoController
     */
    onLogOut(): Promise<void>;
    /**
     * 打开用户信息Popover
     *
     * @param {EventTarget} target
     * @memberof CustomUserInfoController
     */
    openUserInfoPopover(target: HTMLElement): Promise<IModalData>;
    onDestroyed(): void;
}
