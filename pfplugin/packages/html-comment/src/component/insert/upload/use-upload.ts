/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { CoreConst, HttpError } from '@ibiz-template/core';
import { UploadFile, UploadRawFile } from 'element-plus';
import { getCookie } from 'qx-util';
import { computed, ComputedRef, Ref, ref } from 'vue';

/**
 * iview的Upload适配逻辑
 *
 * @author lxm
 * @date 2022-11-17 16:11:12
 * @export
 * @param {IParams} props
 * @param {UploadEditorController} c
 * @returns {*}
 */
export function useUpload(props: IParams): {
  uploadUrl: Ref<string>;
  headers: Ref<IData>;
  files: Ref<
    {
      id: string;
      name: string;
      url?: string | undefined;
    }[]
  >;
  limit: ComputedRef<1 | 9999>;
  filesCount: ComputedRef<number>;
  uploadRef: Ref<any>;
  onError: (...args: IData[]) => never;
  onRemove: (file: IData) => void;
  onItemRemove: (file: IData) => void;
  onSuccess: (response: IData, uploadFile: UploadFile) => void;
  beforeUpload: (rawFile: UploadRawFile) => boolean;
  onConfirm: () => void;
  onCancel: () => void;
  getUploadMessage: (type: string) => string;
} {
  // 文件列表
  const files: Ref<
    {
      id: string;
      name: string;
      url?: string;
    }[]
  > = ref([]);

  // 定义上传文件提示信息映射关系
  const uploadMessageMap: IData = {
    'audio/*': '音频',
    // 可以根据需求继续添加其他类型
  };

  const getUploadMessage = (type: string): string => {
    const message = uploadMessageMap[type] || '';
    return `点击上传${message}文件`;
  };

  // 请求头
  const headers: Ref<IData> = ref({
    Authorization: `Bearer ${getCookie(CoreConst.TOKEN)}`,
  });

  // 上传文件路径
  const uploadUrl: Ref<string> = ref('');

  // 下载文件路径
  const downloadUrl: Ref<string> = ref('');

  // 文件上传缓存对象
  const uploadCache: IData = {
    count: 0,
    cacheFiles: [] as IData[], // iview上传过程中不能改default-file-list,所以需要缓存
  };

  const filesCount = computed(() => {
    return uploadCache.count;
  });

  if (props.context && props.actionParams) {
    const urls = ibiz.util.file.calcFileUpDownUrl(
      props.context,
      props.viewParams,
      {},
      props.actionParams,
    );
    uploadUrl.value = urls.uploadUrl;
    downloadUrl.value = urls.downloadUrl;
  }

  /**
   * 抛出值变更事件，根据files计算value
   *
   * @author lxm
   * @date 2022-11-17 14:11:54
   */
  const emitValue = (): void => {
    const _files = uploadCache.cacheFiles;
    const value: string | null = _files.length > 0 ? _files : null;
    uploadCache.cacheFiles = [];
    props.modal.dismiss({ ok: true, data: value });
  };

  // 上传前回调
  const beforeUpload = (rawFile: UploadRawFile): boolean => {
    const size = rawFile.size / 1024 / 1024;
    if (props.size && size > props.size) {
      ibiz.message.error(
        `${ibiz.i18n.t('editor.upload.fileSizeErr')} ${props.size}MB!`,
      );
      return false;
    }
    uploadCache.count += 1;
    return true;
  };

  // 上传成功回调
  const onSuccess = (response: IData, uploadFile: UploadFile): void => {
    if (!response) {
      return;
    }
    uploadCache.cacheFiles.push({
      id: response.fileid,
      name: response.filename,
      ext: response.ext,
      folder: response.folder,
      size: response.size,
      type: uploadFile.raw?.type || '',
      url:
        response.rul || downloadUrl.value.replace('%fileId%', response.fileid),
    });
    uploadCache.count -= 1;
  };

  // 上传失败回调
  const onError = (...args: IData[]): never => {
    const error = args[0];
    uploadCache.count -= 1;
    throw new HttpError({
      response: { data: JSON.parse(error.message), status: error.status },
    } as any);
  };

  // 删除回调
  const onRemove = (file: IData): void => {
    if (props.disabled) {
      return;
    }
    if (uploadCache.count === 0) {
      const cacheIndex = uploadCache.cacheFiles.findIndex(
        (item: IData) => file.response && item.id === file.response.id,
      );
      if (cacheIndex !== -1) {
        uploadCache.cacheFiles.splice(cacheIndex, 1);
      }
    }
    const index = files.value.findIndex(item => item.id === file.id);
    if (index !== -1) {
      files.value.splice(index, 1);
    }
  };

  const uploadRef = ref();

  // 项删除点击事件
  const onItemRemove = (file: IData): void => {
    if (uploadRef.value) {
      uploadRef.value.handleRemove(file);
    }
  };

  // 允许上传文件的最大数量
  const limit = computed(() => {
    return props.multiple ? 9999 : 1;
  });

  // 处理取消

  // 按钮确认
  const onConfirm = (): void => {
    emitValue();
  };

  // 按钮取消
  const onCancel = (): void => {
    uploadCache.cacheFiles = [];
    emitValue();
  };

  return {
    uploadUrl,
    headers,
    files,
    limit,
    filesCount,
    uploadRef,
    onError,
    onRemove,
    onItemRemove,
    onSuccess,
    beforeUpload,
    onConfirm,
    onCancel,
    getUploadMessage,
  };
}
