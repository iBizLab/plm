import { EditorController } from '@ibiz-template/runtime';
import { IFileUploader } from '@ibiz/model-core';
export declare class AvatarUploadController extends EditorController<IFileUploader> {
    /**
     * 是否支持拖拽
     */
    isDrag: boolean;
    /**
     * 是否多选
     */
    multiple: boolean;
    /**
     * 接受上传的文件类型
     */
    accept: string;
    /**
     * 上传参数
     */
    uploadParams?: IParams;
    /**
     * 下载参数
     */
    exportParams?: IParams;
    /**
     * 截取形状，默认为圆形，IDRECT为证件矩形
     *
     * @type {('DEFAULT' | 'IDRECT')}
     * @memberof AvatarUploadController
     */
    cutShape: 'DEFAULT' | 'IDRECT';
    protected onInit(): Promise<void>;
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
    createCropImageUrl(croparea: HTMLElement, x: number, y: number, radius: number): Promise<string | undefined>;
    /**
     *将数据 URL 转换为 Blob 对象
     *
     * @param {string} dataURL
     * @return {*}
     * @memberof AvatarUploadController
     */
    dataURLtoBlob(dataURL: string): Blob;
}
