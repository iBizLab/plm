import { App } from 'vue';
export declare const IBizClipBoard: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    value: (StringConstructor | NumberConstructor | ArrayConstructor | ObjectConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./clip-board-span/controller").SpanEditorController>, undefined, undefined>;
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
    c: import("./clip-board-span/controller").SpanEditorController;
    text: import("vue").Ref<string>;
    editorRef: import("vue").Ref<any>;
    items: import("vue").Ref<readonly {
        value: string | number;
        text: string;
        id: string;
        color?: string | undefined;
        children?: any[] | undefined;
        textCls?: string | undefined;
        disableSelect?: boolean | undefined;
        sysImage?: {
            codeName?: string | undefined;
            cssClass?: string | undefined;
            cssClassX?: string | undefined;
            glyph?: string | undefined;
            height?: number | undefined;
            imagePath?: string | undefined;
            imagePathX?: string | undefined;
            rawContent?: string | undefined;
            width?: number | undefined;
            appId: string;
            id?: string | undefined;
            name?: string | undefined;
            userParam?: Record<string, string> | undefined;
            modelId?: string | undefined;
            modelType?: string | undefined;
        } | undefined;
        data?: IData | undefined;
        tooltip?: string | undefined;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (StringConstructor | NumberConstructor | ArrayConstructor | ObjectConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./clip-board-span/controller").SpanEditorController>, undefined, undefined>;
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
}>>, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
