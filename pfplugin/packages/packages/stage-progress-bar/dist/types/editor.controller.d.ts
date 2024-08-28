import { ISpan, IAppCodeList } from '@ibiz/model-core';
import { CodeListEditorController } from '@ibiz-template/runtime';
/**
 * 标签编辑器控制器
 * @return {*}
 */
export declare class EditorController extends CodeListEditorController<ISpan> {
    /**
     *值项
     */
    valueItem: string;
    /**
     * 发布阶段标识属性
     */
    releaseStageIdField: string;
    /**
     * 点击阶段标识属性
     */
    clickStageIdField: string;
    /**
     * 判断是否为当前发布阶段属性
     */
    isCurrentField: string;
    /**
     * 是否可操作属性
     */
    isOperateField: string;
    /**
     * 内容显示配置
     */
    showConfig: IParams;
    /**
     * 日期显示配置
     */
    dateShowConfig: IParams;
    /**
     * 日期范围配置
     */
    dateRange: IParams;
    /**
     * 显示模式
     */
    showMode: string;
    /**
     * 代码表模型
     * @return {*}
     */
    codeList: IAppCodeList | undefined;
    protected onInit(): Promise<void>;
    /**
     * 初始化编辑器参数
     */
    initEditorParams(): void;
    /**
     * 打开数据链接视图
     */
    openLinkView(data: IData, param: IParams): Promise<IData[] | IParams>;
    /**
     * 日期格式化
     */
    dateFormat(date: string | Date, format: string): string;
}
