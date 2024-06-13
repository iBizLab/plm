import { ISpan, IAppCodeList } from '@ibiz/model-core';
import { CodeListEditorController, CodeListItem } from '@ibiz-template/runtime';
/**
 * 标签编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class PersonalInfoEditorController extends CodeListEditorController<ISpan> {
    /**
     *值项
     */
    valueItem: string;
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    codeList: IAppCodeList | undefined;
    /**
     * 是否支持头像
     *
     * @type {boolean}
     * @memberof PersonalInfoEditorController
     */
    enableAvatar: boolean;
    /**
     * 是否显示姓名文字
     *
     * @type {boolean}
     * @memberof PersonalInfoEditorController
     */
    showNameText: boolean;
    /**
     * 云系统操作者Map
     *
     * @type {(Map<string | number, CodeListItem>)}
     * @memberof PersonalInfoEditorController
     */
    operatorMap: Map<string | number, CodeListItem>;
    protected onInit(): Promise<void>;
    /**
     * 打开数据链接视图
     */
    openLinkView(data: IData): Promise<IData[] | undefined>;
    /**
     * 判断是否显示姓名文字
     *
     * @return {*}  {boolean}
     * @memberof PersonalInfoEditorController
     */
    isShowNameText(): boolean;
    /**
     * 解析头像数据
     *
     * @param {string} avatar
     * @return {*}
     * @memberof PersonalInfoEditorController
     */
    parseAvatar(avatar: string): string | undefined;
    /**
     * 获取操作用户列表
     *
     * @memberof PersonalInfoEditorController
     */
    getOperatorUserList(): Promise<void>;
}
