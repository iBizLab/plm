import { Ref, VNode } from 'vue';
import { ILayoutPanel } from '@ibiz/model-core';
import { ManageMPickerController } from './manage-mpicker.controller';
export declare const ManageMPicker: import("vue").DefineComponent<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<ManageMPickerController>, undefined, undefined>;
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
    c: ManageMPickerController;
    selectRef: Ref<any>;
    curValue: Ref<string[]>;
    loading: Ref<boolean>;
    items: Ref<IData[]>;
    valueText: import("vue").ComputedRef<string>;
    isOpenView: Ref<boolean>;
    topLabel: Ref<string>;
    lastLabel: Ref<string>;
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
    renderGroupAction: () => JSX.Element | void;
    renderPanelItemLayout: (item: IData, modelData: ILayoutPanel) => VNode;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<ManageMPickerController>, undefined, undefined>;
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
}, {}>;
