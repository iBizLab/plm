export interface IField {
    /**
     * 字段
     *
     * @author zhanghengfeng
     * @date 2024-07-24 18:07:05
     * @type {string}
     */
    fieldName: string;
    /**
     * 字段文本
     *
     * @author zhanghengfeng
     * @date 2024-07-24 18:07:17
     * @type {string}
     */
    label: string;
    /**
     * 操作符
     *
     * @author zhanghengfeng
     * @date 2024-07-24 18:07:35
     * @type {string[]}
     */
    valueOPs: string[];
}
export interface ISearchBarFilterCondition {
    /**
     * 标识
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:08
     * @type {string}
     */
    key: string;
    /**
     * 逻辑连接符
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:25
     * @type {string}
     */
    connection: string;
    /**
     * 属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:41
     * @type {string}
     */
    field: string;
    /**
     * 操作符
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:58
     * @type {string}
     */
    valueOP: string;
    /**
     * 值
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:07
     * @type {unknown}
     */
    value?: unknown;
    /**
     * 值项
     *
     * @author zhanghengfeng
     * @date 2024-07-24 18:07:49
     * @type {unknown}
     */
    valueItem?: unknown;
}
