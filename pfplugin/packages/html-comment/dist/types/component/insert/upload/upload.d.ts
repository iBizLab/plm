import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
export declare const UploadCustom: import("vue").DefineComponent<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
    context: {
        type: PropType<IData>;
        default: () => void;
    };
    viewParams: {
        type: PropType<IData>;
        default: () => void;
    };
    actionParams: {
        type: PropType<IData>;
        default: () => void;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    files: import("vue").Ref<{
        id: string;
        name: string;
        url?: string | undefined;
    }[]>;
    limit: import("vue").ComputedRef<1 | 9999>;
    uploadUrl: import("vue").Ref<string>;
    headers: import("vue").Ref<IData>;
    onError: (...args: IData[]) => never;
    onRemove: (file: IData) => void;
    onSuccess: (response: IData) => void;
    beforeUpload: (rawFile: import("element-plus").UploadRawFile) => boolean;
    onConfirm: () => void;
    onCancel: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
    context: {
        type: PropType<IData>;
        default: () => void;
    };
    viewParams: {
        type: PropType<IData>;
        default: () => void;
    };
    actionParams: {
        type: PropType<IData>;
        default: () => void;
    };
}>>, {
    context: IData;
    actionParams: IData;
    viewParams: IData;
}, {}>;
