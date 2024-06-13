import { Ref } from 'vue';
import { AutoRulesController } from './auto-rules.controller';
export declare const AutoRules: import("vue").DefineComponent<{
    value: (StringConstructor | NumberConstructor | ObjectConstructor | ArrayConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<AutoRulesController>, undefined, undefined>;
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
    c: AutoRulesController;
    items: Ref<IData[]>;
    showSelect: Ref<boolean>;
    showChildSelect: Ref<boolean>;
    isLoading: Ref<boolean>;
    curValue: import("vue").WritableComputedRef<string>;
    showCodeRulesSelect: Ref<boolean>;
    renderFieldSelect: () => JSX.Element;
    renderRulesSelect: () => JSX.Element;
    renderCodeRulesSelect: () => JSX.Element;
    renderRuleTypesSelect: () => JSX.Element;
    onVisibleChange: (visible: boolean) => Promise<void>;
    getCodeListItemByValue: (value: string | number) => IData | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (StringConstructor | NumberConstructor | ObjectConstructor | ArrayConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<AutoRulesController>, undefined, undefined>;
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
