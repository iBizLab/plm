import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
import { UploadFile } from 'element-plus';
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
    accept: {
        type: StringConstructor;
        default: string;
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
    uploadRef: import("vue").Ref<any>;
    getUploadMessage: (type: string) => string;
    onError: (...args: IData[]) => never;
    onRemove: (file: IData) => void;
    onItemRemove: (file: IData) => void;
    onSuccess: (response: IData, uploadFile: UploadFile) => void;
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
    accept: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    context: IData;
    accept: string;
    actionParams: IData;
    viewParams: IData;
}, {}>;
