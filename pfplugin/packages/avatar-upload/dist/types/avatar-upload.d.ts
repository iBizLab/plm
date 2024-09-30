import { Ref } from 'vue';
import { AvatarUploadController } from './avatar-upload-controller';
export declare const AvatarUpload: import("vue").DefineComponent<{
    value: StringConstructor;
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<AvatarUploadController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<IData>, undefined, undefined>;
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowMode: {
        type: StringConstructor;
    };
    controlParams: {
        type: ObjectConstructor;
        required: boolean;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: AvatarUploadController;
    size: Ref<number>;
    uploadUrl: Ref<string>;
    headers: Ref<IData>;
    files: Ref<{
        id: string;
        name: string;
        url?: string | undefined;
    }[]>;
    limit: import("vue").ComputedRef<1 | 9999>;
    dialogVisible: Ref<boolean>;
    tempFiles: Ref<{
        id: string;
        name: string;
        url?: string | undefined;
    }[]>;
    uploadTag: Ref<boolean>;
    defaultAvatar: string;
    previewImgContainer: Ref<any>;
    upload1: Ref<any>;
    upload2: Ref<any>;
    topImgRef: Ref<any>;
    croparea: Ref<any>;
    bottomImgRef: Ref<any>;
    cropImgPreviewUrl: Ref<string>;
    largePreviewImgref: Ref<any>;
    smallPreviewImgref: Ref<any>;
    smallPreviewImgContainer: Ref<any>;
    largePreviewImgContainer: Ref<any>;
    overturn: () => void;
    onDownload: (file: IData) => void;
    onError: (...args: IData[]) => never;
    onRemove: (file: IData) => void;
    onSuccess: (response: IData) => void;
    beforeUpload: () => void;
    openDialog: (response: IData) => void;
    renderFooter: () => JSX.Element;
    overlimit: (_files: IData[], uploadFiles: IData[], isupload?: boolean) => void;
    onTempSuccess: (response: IData) => void;
    mouseMove: (event: MouseEvent) => void;
    mouseUp: () => void;
    mouseDown: (event: MouseEvent) => void;
    mouseOut: () => void;
    imgload: () => Promise<void>;
    onChange: (file: any) => void;
    onDelete: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: StringConstructor;
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<AvatarUploadController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<IData>, undefined, undefined>;
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowMode: {
        type: StringConstructor;
    };
    controlParams: {
        type: ObjectConstructor;
        required: boolean;
    };
}>> & {
    onChange?: ((_value: unknown, _name?: string | undefined) => any) | undefined;
    onBlur?: ((_event?: IData | undefined) => any) | undefined;
    onFocus?: ((_event?: IData | undefined) => any) | undefined;
    onEnter?: ((_event?: IData | undefined) => any) | undefined;
    onInfoTextChange?: ((_text: string) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
