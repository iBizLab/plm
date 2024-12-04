/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { CoreConst, HttpError } from '@ibiz-template/core';
import { getCookie } from 'qx-util';
import { computed, ComputedRef, Ref, ref, watch } from 'vue';
// import { UploadEditorController } from '../upload-editor.controller';
import { AvatarUploadController } from './avatar-upload-controller';

/**
 * iview的Upload适配逻辑
 *
 * @author lxm
 * @date 2022-11-17 16:11:12
 * @export
 * @param {IParams} props
 * @param {(_value: string | null) => {}} valueChange
 * @param {AvatarUploadController} c
 * @returns {*}
 */
export function useIViewUpload(
  props: IParams,
  valueChange: (_value: string | null) => void,
  c: AvatarUploadController,
): {
  uploadUrl: Ref<string>;
  downloadUrl: Ref<string>;
  headers: Ref<IData>;
  files: Ref<
    {
      id: string;
      name: string;
      url?: string | undefined;
    }[]
  >;
  limit: ComputedRef<1 | 9999>;
  onDownload: (file: IData) => void;
  onError: (...args: IData[]) => never;
  onRemove: (file: IData) => void;
  onSuccess: (response: IData) => void;
  beforeUpload: () => void;
} {
  // 文件列表
  const files: Ref<
    {
      id: string;
      name: string;
      url?: string;
    }[]
  > = ref([]);

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
    cacheFiles: [], // iview上传过程中不能改default-file-list,所以需要缓存
  };

  // 值响应式变更
  watch(
    () => props.value,
    newVal => {
      files.value = !newVal ? [] : JSON.parse(newVal);
    },
    { immediate: true },
  );

  // data响应式变更基础路径
  watch(
    () => props.data,
    newVal => {
      if (newVal) {
        const urls = ibiz.util.file.calcFileUpDownUrl(
          c.context,
          c.params,
          newVal,
          c.editorParams,
        );
        uploadUrl.value = urls.uploadUrl;
        downloadUrl.value = urls.downloadUrl;
      }
    },
    { immediate: true, deep: true },
  );

  watch(
    files,
    newVal => {
      // 变更后且下载基础路径存在时解析
      if (newVal?.length && downloadUrl.value) {
        newVal.forEach((file: IData) => {
          file.url = file.url || downloadUrl.value.replace('%fileId%', file.id);
        });
      }
    },
    { immediate: true },
  );

  watch(
    downloadUrl,
    newVal => {
      // 变更后且下载基础路径存在时解析
      if (newVal && files.value.length) {
        files.value.forEach((file: IData) => {
          file.url = downloadUrl.value.replace('%fileId%', file.id);
        });
      }
    },
    { immediate: true },
  );

  /**
   * 抛出值变更事件，根据files计算value
   *
   * @author lxm
   * @date 2022-11-17 14:11:54
   */
  const emitValue = () => {
    const _files = [...files.value, ...uploadCache.cacheFiles];
    const value: string | null =
      _files.length > 0
        ? JSON.stringify(_files.map(file => ({ name: file.name, id: file.id })))
        : null;
    uploadCache.cacheFiles = [];
    valueChange(value);
  };

  // 上传前回调
  const beforeUpload = () => {
    uploadCache.count += 1;
  };

  // 上传成功回调
  const onSuccess = (response: IData) => {
    if (!response) {
      return;
    }
    uploadCache.cacheFiles.push({
      name: response.filename,
      id: response.fileid,
    });
    uploadCache.count -= 1;

    // 回调都结束后抛出值变更
    if (uploadCache.count === 0) {
      emitValue();
    }
  };

  // 上传失败回调
  const onError = (...args: IData[]) => {
    const error = args[0];
    uploadCache.count -= 1;
    throw new HttpError({
      response: { data: JSON.parse(error.message), status: error.status },
    } as any);
  };

  // 删除回调
  const onRemove = (file: IData) => {
    if (props.disabled) {
      return;
    }
    const index = files.value.findIndex(item => item.id === file.id);
    if (index !== -1) {
      files.value.splice(index, 1);
    }
    emitValue();
  };

  // 下载文件
  const onDownload = (file: IData) => {
    const url = file.url || downloadUrl.value.replace('%fileId%', file.id);
    ibiz.util.file.fileDownload(url, file.name);
  };

  // 允许上传文件的最大数量
  const limit = computed(() => {
    return c.multiple ? 9999 : 1;
  });

  return {
    uploadUrl,
    downloadUrl,
    headers,
    files,
    limit,
    onDownload,
    onError,
    onRemove,
    onSuccess,
    beforeUpload,
  };
}
