/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-await-in-loop */
import { IAppDEUIAction } from '@ibiz/model-core';
import {
  IUIActionResult,
  IUILogicParams,
  FrontUIActionProvider,
} from '@ibiz-template/runtime';
import { HttpResponse } from '@ibiz-template/core';
import { createUUID } from 'qx-util';

/**
 * 文件上传行为适配器
 *
 * @export
 * @class FileUploadUIActionProvider
 * @extends {FrontUIActionProvider}
 */
export class FileUploadUIActionProvider extends FrontUIActionProvider {
  /**
   * 文件上传路径
   *
   * @type {string}
   * @memberof FileUploadUIActionProvider
   */
  public uploadUrl: string = ibiz.env.uploadFileUrl;

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
    const urls = (ibiz.util as IParams).file.calcFileUpDownUrl(
      resultContext,
      resultParams,
      resultData,
    );
    this.uploadUrl = urls.uploadUrl;
    return new Promise(resolve => {
      this.createFileInput((item: IData) => {
        Object.assign(data, item.data);
        resolve(item);
      });
    });
  }

  /**
   * 选择文件改变
   *
   * @params
   * @memberof NetDiskTree
   */
  uploadFiles = (e: IData, resolve: Function) => {
    this.handleUploadFile(e.target.files, resolve);
  };

  /**
   * 处理上传文件事件
   *
   * @memberof NetDiskTree
   */
  handleUploadFile = async (files: FileList, resolve: Function) => {
    const promises: IData[] = [];
    for (let i = 0; i < files.length; i++) {
      const promise = await this.uploadRequest(files[i]);
      promises.push(promise);
    }
    const result = await Promise.all(promises);
    if (result) {
      resolve({
        data: result.map(item => {
          return {
            uuid: createUUID(),
            ...item.data,
          };
        }),
      });
    }
  };

  public uploadRequest = async (file: File): Promise<HttpResponse> => {
    const data = new FormData();
    data.append('file', file);
    const res = await ibiz.net.request(this.uploadUrl, {
      method: 'post',
      baseURL: '',
      data,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  };

  createFileInput(resolve: Function) {
    // 创建 input 元素
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.webkitdirectory = false;
    // 添加事件监听器，处理文件上传逻辑
    inputElement.addEventListener('change', (e: IData) => {
      this.uploadFiles(e, resolve);
    });

    // 将 input 元素添加到页面中
    document.body.appendChild(inputElement);

    // 执行文件上传操作
    inputElement.click();

    // 方法结束后销毁 input 元素
    document.body.removeChild(inputElement);
  }
}
