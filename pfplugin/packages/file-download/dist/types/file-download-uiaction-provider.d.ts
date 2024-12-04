import { IAppDEUIAction } from '@ibiz/model-core';
import { IUIActionResult, IUILogicParams, FrontUIActionProvider } from '@ibiz-template/runtime';
/**
 * 文件下载行为适配器
 *
 * @export
 * @class FileDownloadUIActionProvider
 * @extends {FrontUIActionProvider}
 */
export declare class FileDownloadUIActionProvider extends FrontUIActionProvider {
    /**
     * 文件下载路径
     *
     * @type {string}
     * @memberof FileDownloadUIActionProvider
     */
    downloadUrl: string;
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
    /**
     * 请求url获取文件流，并用JS触发文件下载
     *
     * @author lxm
     * @date 2022-11-17 14:11:09
     * @param {string} url
     * @param {IData} file
     */
    fileDownload(file: {
        url: string;
        name: string;
    }): void;
    /**
     * 适配钉钉文件下载，钉钉移动端下载需跳转到浏览器
     *
     * @param {string} url
     * @param {IData} file
     */
    downloadFileFromBlob(file: {
        url: string;
        name: string;
    }): void;
}
