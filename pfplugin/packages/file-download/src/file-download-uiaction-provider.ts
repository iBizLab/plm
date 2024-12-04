/* eslint-disable no-await-in-loop */
import { IAppDEUIAction } from '@ibiz/model-core';
import {
  IUIActionResult,
  IUILogicParams,
  FrontUIActionProvider,
  getPlatformType,
  PlatformType,
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
      ibiz.log.error('未配置文件id');
      return {};
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
    // 如果是钉钉内环境，需跳转外部浏览器实现下载
    if (getPlatformType() === PlatformType.DINGTALK) {
      this.downloadFileFromBlob(file);
      return;
    }
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

  /**
   * 适配钉钉文件下载，钉钉移动端下载需跳转到浏览器
   *
   * @param {string} url
   * @param {IData} file
   */
  downloadFileFromBlob(file: { url: string; name: string }): void {
    // 第一种，验证结果 安卓正常，ios失败
    const link = document.createElement('a');
    link.href = `${file.url}`;
    link.target = '_blank';
    link.download = 'download';
    link.style.display = 'inline';
    // 添加a元素到当前网页
    document.body.appendChild(link);
    link.click();
    // 从当前网页移除a元素
    document.body.removeChild(link);
  }
}
