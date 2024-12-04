import { CodeListEditorController, SearchBarFilterController } from '@ibiz-template/runtime';
import { IField } from '../interface';
export declare class SearchBarFilterConditionController extends CodeListEditorController {
    /**
     * 字段
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:41
     * @type {IField[]}
     */
    fields: IField[];
    /**
     * 字段映射
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:55
     * @type {Map<string, IField>}
     */
    fieldMap: Map<string, IField>;
    /**
     * 搜索栏过滤项控制器列表
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:38
     * @type {SearchBarFilterController[]}
     */
    filterControllers: SearchBarFilterController[];
    /**
     * 边框模式
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:00
     * @type {('DEFAULT' | 'BORDER')}
     */
    borderMode: 'DEFAULT' | 'BORDER';
    /**
     * 搜索栏名称
     *
     * @author zhanghengfeng
     * @date 2024-07-24 17:07:35
     * @type {string}
     */
    searchBarName: string;
    protected onInit(): Promise<void>;
    /**
     * 初始化字段
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:38
     * @return {*}  {Promise<void>}
     */
    initFields(): Promise<void>;
}
