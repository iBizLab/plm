import { UploadFile, UploadRawFile } from 'element-plus';
import { ComputedRef, Ref } from 'vue';
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
export declare function useUpload(props: IParams): {
    uploadUrl: Ref<string>;
    headers: Ref<IData>;
    files: Ref<{
        id: string;
        name: string;
        url?: string | undefined;
    }[]>;
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
};
