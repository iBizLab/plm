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
    const result = await (ibiz.util.file as IData).chooseFileAndUpload(
      resultContext,
      resultParams,
      resultData,
    );
    if (result) {
      const items = result.map((item: IData) => {
        return {
          uuid: createUUID(),
          ...item,
        };
      });
      Object.assign(data, items);
    }
    return { data: result };
  }
}
