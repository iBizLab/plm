/* eslint-disable no-await-in-loop */
import { IAppDEUIAction } from '@ibiz/model-core';
import {
  IUIActionResult,
  IUILogicParams,
  FrontUIActionProvider,
} from '@ibiz-template/runtime';
import { RuntimeError, downloadFileFromBlob } from '@ibiz-template/core';

/**
 * 文件下载行为适配器
 *
 * @export
 * @class FileDownloadUIActionProvider
 * @extends {FrontUIActionProvider}
 */
export class FileDownloadUIActionProvider extends FrontUIActionProvider {
  /**
   * 文件下载路径
   *
   * @type {string}
   * @memberof FileDownloadUIActionProvider
   */
  public downloadUrl: string = `${ibiz.env.downloadFileUrl}/%fileId%`;

  async execAction(
    action: IAppDEUIAction,
    args: IUILogicParams,
  ): Promise<IUIActionResult> {
    const { context, params, data } = args;
    const { resultContext, resultParams, resultData } = await this.handleParams(
      action,
      context,
      data,
      params,
    );
    if (!resultParams.fileid) {
      throw new RuntimeError('未配置文件id');
    }
    const urls = (ibiz.util as IParams).file.calcFileUpDownUrl(
      resultContext,
      resultParams,
      resultData,
    );
    this.downloadUrl = urls.downloadUrl;
    const url = this.downloadUrl.replace('%fileId%', resultParams.fileid);
    this.fileDownload({ url, name: resultParams.filename || '下载文件' });
    return {};
  }

  /**
   * 请求url获取文件流，并用JS触发文件下载
   *
   * @author lxm
   * @date 2022-11-17 14:11:09
   * @param {string} url
   * @param {IData} file
   */
  fileDownload(file: { url: string; name: string }): void {
    // 发送get请求
    ibiz.net
      .request(file.url, {
        method: 'get',
        responseType: 'blob',
        baseURL: '', // 已经有baseURL了，这里无需再写
      })
      .then((response: IData) => {
        if (response.status !== 200) {
          throw new RuntimeError('下载文件失败');
        }
        // 请求成功，后台返回的是一个文件流
        if (!response.data) {
          throw new RuntimeError('文件流数据不存在');
        } else {
          // 获取文件名
          const fileName = file.name;
          downloadFileFromBlob(response.data, fileName);
        }
      });
  }
}
