import { EditorController } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
/**
 * json格式化编辑器控制器
 *
 * @export
 * @class JsonSchemaController
 * @extends {EditorController<ITextBox>}
 */
export declare class JsonSchemaController extends EditorController<ITextBox> {
    enableAdvancedSetting: boolean;
    get disabled(): boolean;
    protected onInit(): Promise<void>;
    /**
     * 加载amis静态资源
     *
     * @return {*}
     * @memberof JsonSchemaController
     */
    loadAmis(): Promise<void>;
    /**
     * 动态加载脚本
     *
     * @return {*}
     * @memberof JsonSchemaController
     */
    loadScript(url: string): Promise<unknown>;
    /**
     * 动态加载样式
     *
     * @return {*}
     * @memberof JsonSchemaController
     */
    loadStyle(url: string): Promise<unknown>;
}
