import { IRaw } from '@ibiz/model-core';
import { EditorController, IOverlayContainer } from '@ibiz-template/runtime';
/**
 * 直接内容(活动)编辑器控制器
 *
 * @export
 * @class RawActivityEditorController
 * @extends {EditorController}
 */
export declare class RawActivityEditorController extends EditorController<IRaw> {
    /**
     * 模态容器
     *
     * @type {(IOverlayContainer | null)}
     * @memberof RawActivityEditorController
     */
    modal: IOverlayContainer | null;
    /**
     * 打开对照模态
     *
     * @param {{ name: string, newValue: string, oldValue: string }} item
     * @return {*}
     * @memberof RawActivityEditorController
     */
    openContrastModal(item: {
        name: string;
        newValue: string;
        oldValue: string;
    }): Promise<IData[]>;
}
