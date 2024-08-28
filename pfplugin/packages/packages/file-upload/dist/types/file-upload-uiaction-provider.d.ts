import { IAppDEUIAction } from '@ibiz/model-core';
import { IUIActionResult, IUILogicParams, FrontUIActionProvider } from '@ibiz-template/runtime';
/**
 * 文件上传行为适配器
 *
 * @export
 * @class FileUploadUIActionProvider
 * @extends {FrontUIActionProvider}
 */
export declare class FileUploadUIActionProvider extends FrontUIActionProvider {
    /**
     * 文件上传路径
     *
     * @type {string}
     * @memberof FileUploadUIActionProvider
     */
    uploadUrl: string;
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
}
