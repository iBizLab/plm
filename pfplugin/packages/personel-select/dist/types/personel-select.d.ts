import { Ref } from 'vue';
import { PersonelSelectController } from './personel-select-controller';
export declare const PersonelSelect: import("vue").DefineComponent<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<PersonelSelectController>, undefined, undefined>;
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
    ns2: import("@ibiz-template/core").Namespace;
    c: PersonelSelectController;
    refValue: Ref<string>;
    curValue: Ref<string | null>;
    valueText: import("vue").ComputedRef<string>;
    loading: Ref<boolean>;
    items: Ref<IData[]>;
    personelSelRef: Ref<any>;
    onClear: (e: Event) => void;
    load: (tag?: boolean) => Promise<void>;
    isEditable: Ref<boolean>;
    popoverRef: Ref<any>;
    setEditable: (flag: boolean) => void;
    renderDropModal: () => JSX.Element;
    renderNoSelectValue: () => JSX.Element;
    renderSelectInput: () => JSX.Element;
    renderReadState: () => JSX.Element;
    onPopShow: () => Promise<void>;
    onPageHide: () => void;
    handleClick: (e: MouseEvent) => void;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
    modelVisible: Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<PersonelSelectController>, undefined, undefined>;
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
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
