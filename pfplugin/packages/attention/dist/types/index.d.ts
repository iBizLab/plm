import { App } from 'vue';
export declare const IBizAttention: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./attention-controller").AttentionController>, undefined, undefined>;
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
    c: import("./attention-controller").AttentionController;
    refValue: import("vue").Ref<string>;
    curValue: import("vue").Ref<string | null>;
    valueText: import("vue").ComputedRef<string>;
    loading: import("vue").Ref<boolean>;
    items: import("vue").Ref<IData[]>;
    isEditable: import("vue").Ref<boolean>;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
    modelVisible: import("vue").Ref<boolean>;
    curAttentionValue: import("vue").Ref<string>;
    attentionRef: import("vue").Ref<any>;
    readonlyState: import("vue").ComputedRef<boolean>;
    onClear: (e: Event) => void;
    load: (tag?: boolean) => Promise<void>;
    setEditable: (flag: boolean) => void;
    renderDropModal: () => JSX.Element;
    renderNoSelectValue: () => JSX.Element;
    renderSelectInput: () => JSX.Element;
    onPopShow: () => Promise<void>;
    onPageHide: () => void;
    onAttentionChange: (value: string | undefined) => void;
    renderEditContent: () => IData;
    renderReadonlyContent: () => IData | JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./attention-controller").AttentionController>, undefined, undefined>;
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
    onFocus?: ((_event?: IData | undefined) => any) | undefined;
    onBlur?: ((_event?: IData | undefined) => any) | undefined;
    onChange?: ((_value: unknown, _name?: string | undefined) => any) | undefined;
    onEnter?: ((_event?: IData | undefined) => any) | undefined;
    onInfoTextChange?: ((_text: string) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
    autoFocus: boolean;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
