import { GridFieldColumnController } from '@ibiz-template/runtime';
import { SpanEditorController } from './clip-board-span/controller';
/**
 * 适配器
 *
 * @author ljx
 * @date 2024-02-01 22:09:03
 * @export
 * @class FastCopyProvider
 * @implements {EditorProvider}
 */
export declare class FastCopyProvider {
    formEditor: string;
    gridEditor: string;
    component: string;
    registerType: string | undefined;
    constructor(registerType?: string);
    createController(model: IParams, parentController: IParams): Promise<SpanEditorController | GridFieldColumnController>;
}
