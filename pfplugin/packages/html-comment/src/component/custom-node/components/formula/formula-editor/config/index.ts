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
export const defaultConfig: ConfigType = {
  width: 620,
  height: 272,
  menuHeight: 38,
  mathJaxUrl:
    'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-svg.min.js',
};
