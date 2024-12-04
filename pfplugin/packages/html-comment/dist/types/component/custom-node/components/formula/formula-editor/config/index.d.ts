export type ConfigType = {
    width: number;
    height: number;
    menuHeight: number;
    /** MathJax的加载链接 */
    mathJaxUrl: string;
    /** 挂载节点的z-index值，不传可能回导致下拉菜单遮挡 */
    zIndex?: number;
};
/** 编辑器默认配置 */
export declare const defaultConfig: ConfigType;
