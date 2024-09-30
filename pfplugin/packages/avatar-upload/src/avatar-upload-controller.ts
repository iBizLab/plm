/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
import { RuntimeModelError } from '@ibiz-template/core';
import { EditorController } from '@ibiz-template/runtime';
import { IFileUploader } from '@ibiz/model-core';
import html2canvas from 'html2canvas';

export class AvatarUploadController extends EditorController<IFileUploader> {
  /**
   * 是否支持拖拽
   */
  public isDrag: boolean = false;

  /**
   * 是否多选
   */
  public multiple: boolean = false;

  /**
   * 接受上传的文件类型
   */
  public accept: string = 'images/*';

  /**
   * 上传参数
   */
  public uploadParams?: IParams;

  /**
   * 下载参数
   */
  public exportParams?: IParams;

  /**
   * 截取形状，默认为圆形，IDRECT为证件矩形
   *
   * @type {('DEFAULT' | 'IDRECT')}
   * @memberof AvatarUploadController
   */
  public cutShape: 'DEFAULT' | 'IDRECT' = 'DEFAULT';

  protected async onInit(): Promise<void> {
    await super.onInit();

    if (this.editorParams) {
      const { isDrag, accept, uploadParams, exportParams, cutShape } =
        this.editorParams;
      if (cutShape) {
        this.cutShape = cutShape;
      }
      if (isDrag) {
        this.isDrag = Boolean(isDrag);
      }
      if (accept) {
        this.accept = accept;
      }
      if (uploadParams) {
        try {
          this.uploadParams = JSON.parse(uploadParams);
        } catch (error) {
          throw new RuntimeModelError(
            uploadParams,
            `配置uploadParams没有按标准JSON格式`,
          );
        }
      }
      if (exportParams) {
        try {
          this.exportParams = JSON.parse(exportParams);
        } catch (error) {
          throw new RuntimeModelError(
            exportParams,
            `配置exportParams没有按标准JSON格式`,
          );
        }
      }
    }
  }

  /**
   * 创建指定区域的截图并转为URL
   *
   * @param {HTMLElement} croparea
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @return {*}
   * @memberof AvatarUploadController
   */
  async createCropImageUrl(
    croparea: HTMLElement,
    x: number,
    y: number,
    radius: number,
  ) {
    // 计算要截取的区域的左上角坐标和宽度高度
    let left, top, width, height;
    if (this.cutShape === 'DEFAULT') {
      left = x - radius; // 区域左上角 x 坐标
      top = y - radius; // 区域左上角 y 坐标
      width = radius * 2; // 区域宽度
      height = radius * 2; // 区域高度
    } else {
      left = x - radius; // 区域左上角 x 坐标
      top = 0; // 区域左上角 y 坐标
      width = radius * 2; // 区域宽度
      height = 300; // 区域高度
    }

    const cropcanvas = await html2canvas(croparea, {
      x: left, // 指定截取区域的左上角 x 坐标
      y: top, // 指定截取区域的左上角 y 坐标
      width, // 指定截取区域的宽度
      height, // 指定截取区域的高度
    });
    if (cropcanvas) {
      if (this.cutShape === 'IDRECT') {
        return cropcanvas.toDataURL('image/png');
      }
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      if (ctx) {
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, Math.PI * 2);
        ctx.closePath();

        // 应用剪切路径
        ctx.clip();

        ctx.drawImage(cropcanvas, 0, 0);
        return canvas.toDataURL('image/png');
      }
    }
  }

  /**
   *将数据 URL 转换为 Blob 对象
   *
   * @param {string} dataURL
   * @return {*}
   * @memberof AvatarUploadController
   */
  public dataURLtoBlob(dataURL: string) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }
}
