import { ISpan, IAppCodeList } from '@ibiz/model-core';
import { CodeListEditorController } from '@ibiz-template/runtime';
/**
 * 标签编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class SpanEditorController extends CodeListEditorController<ISpan> {
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
    protected onInit(): Promise<void>;
    /**
     * 打开数据链接视图
     */
    openLinkView(data: IData): Promise<IData[] | undefined>;
}
