import { ComputedRef, Ref } from 'vue';
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
export declare function useIViewUpload(props: IParams, valueChange: (_value: string | null) => void, c: AvatarUploadController): {
    uploadUrl: Ref<string>;
    downloadUrl: Ref<string>;
    headers: Ref<IData>;
    files: Ref<{
        id: string;
        name: string;
        url?: string | undefined;
    }[]>;
    limit: ComputedRef<1 | 9999>;
    onDownload: (file: IData) => void;
    onError: (...args: IData[]) => never;
    onRemove: (file: IData) => void;
    onSuccess: (response: IData) => void;
    beforeUpload: () => void;
};
