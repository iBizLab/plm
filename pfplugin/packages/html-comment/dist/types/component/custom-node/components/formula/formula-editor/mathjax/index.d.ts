export declare class MathJax {
    /**
     * @description 获取Luckysheet对象
     * @static
     * @return {*}  {*}
     * @memberof MathJax
     */
    static getMathJax(): IParams;
    /**
     * 动态加载脚本
     *
     * @static
     * @return {*}
     * @memberof MathJax
     */
    static loadScript(url: string): Promise<unknown>;
    /**
     * 配置全局 MathJax
     * @param {FnType} callback Mathjax 加载完成的回调
     */
    static initMathJax(callback?: FnType<void>): void;
    /**
     * 手动渲染公式
     * @param {HTMLElement} el 需要触发渲染的节点
     * @returns Promise
     */
    static renderFormula(el?: HTMLElement | HTMLElement[]): Promise<any>;
    /**
     * 加载MathJax
     *
     * @static
     * @return {*}
     * @memberof MathJax
     */
    static loadMathJax(): Promise<unknown>;
}
