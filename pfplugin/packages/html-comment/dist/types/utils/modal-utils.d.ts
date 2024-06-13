export declare class ModalUtil {
    /**
     * 模态实例
     * @memberof ModalUtil
     */
    private modalOrPanel;
    /**
     * 富文本Ref
     * @memberof ModalUtil
     */
    private htmlRef;
    constructor(modalOrPanel: IParams, htmlRef: IParams);
    /**
     * 计算模态定位
     * @memberof ModalUtil
     */
    calcModalPosition(): void;
    /**
     * 监听窗口变化
     * @memberof ModalUtil
     */
    handleResize(): void;
    /**
     * 销毁
     * @memberof ModalUtil
     */
    destroy(): void;
}
