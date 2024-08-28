import { ControllerEvent, EditorController, EventBase, IComponentEvent } from '@ibiz-template/runtime';
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
}
export declare class CommentListComtroller extends EditorController<ITextBox> {
    /**
     * 是否走本地模式
     *
     * @type {boolean}
     * @memberof CommentListComtroller
     */
    isLocal: boolean;
    /**
     * 用户列表
     *
     * @memberof CommentListComtroller
     */
    operatorMap: Map<any, any>;
    evt: ControllerEvent<commentEvent>;
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    codeList: IAppCodeList | undefined;
    extraParams: IData;
    protected onInit(): Promise<void>;
    /**
     * 删除项
     *
     * @param {string} key
     * @memberof CommentListComtroller
     */
    deleteItem(id: string): Promise<void>;
    getLocalTempData(): Promise<IData | undefined>;
    /**
     * 添加项
     *
     * @param {IData} item
     * @memberof CommentListComtroller
     */
    addItem(item: IData): Promise<void>;
    /**
     * 删除评论
     *
     * @param {IData} item
     * @memberof CommentListComtroller
     */
    deleteComment(item: IData): void;
    handleExtraParams(data: IData): IData;
    /**
     * 发送评论
     *
     * @memberof CommentListComtroller
     */
    sendComment(value: string, data: IData): void;
    /**
     * 获取操作用户列表
     *
     * @memberof PersonelSelectController
     */
    getOperatorUserList(): Promise<void>;
}
export {};
