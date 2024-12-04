import { App } from 'vue';
export declare const IBizManageMPicker: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./manage-mpicker.controller").ManageMPickerController>, undefined, undefined>;
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
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: import("./manage-mpicker.controller").ManageMPickerController;
    selectRef: import("vue").Ref<any>;
    curValue: import("vue").Ref<string[]>;
    loading: import("vue").Ref<boolean>;
    items: import("vue").Ref<IData[]>;
    valueText: import("vue").ComputedRef<string>;
    isOpenView: import("vue").Ref<boolean>;
    topLabel: import("vue").Ref<string>;
    lastLabel: import("vue").Ref<string>;
    onSearch: (query: string) => Promise<void>;
    onOpenChange: (flag: boolean) => void;
    onSelect: (selects: string[]) => void;
    onRemove: (tag: string) => void;
    openPickUpView: () => Promise<void>;
    onFocus: (e: IData) => void;
    onBlur: (e: IData) => void;
    handleKeyUp: (e: KeyboardEvent) => void;
    handleCancel: () => void;
    onConfirm: () => void;
    renderGroupAction: () => void | JSX.Element;
    renderPanelItemLayout: (item: IData, modelData: import("@ibiz/model-core").IPanel) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<import("./manage-mpicker.controller").ManageMPickerController>, undefined, undefined>;
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
