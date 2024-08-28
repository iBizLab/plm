import { App } from 'vue';
export declare const IBizCommentItemRawItem: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    value: (ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./comment-item-rawitem-editor.controller").CommentItemRawItemEditorController>, undefined, undefined>;
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
    c: import("./comment-item-rawitem-editor.controller").CommentItemRawItemEditorController;
    rawRef: import("vue").Ref<any>;
    previewRef: import("vue").Ref<any>;
    content: import("vue").Ref<string | number | undefined>;
    previewUrl: import("vue").Ref<string>;
    type: string;
    template: string;
    htmlCode: import("vue").ComputedRef<string | undefined>;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
    previewSrcList: import("vue").Ref<string[] | []>;
    onShow: () => Promise<void>;
    handleKeyPress: (event: KeyboardEvent) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./comment-item-rawitem-editor.controller").CommentItemRawItemEditorController>, undefined, undefined>;
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
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
