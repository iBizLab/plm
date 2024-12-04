import { SearchBarFilterConditionController } from './search-bar-filter-condition.controller';
import { ISearchBarFilterCondition } from '../interface';
export declare const IBizSearchBarFilterCondition: import("vue").DefineComponent<{
    value: (StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<SearchBarFilterConditionController>, undefined, undefined>;
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
    c: SearchBarFilterConditionController;
    items: import("vue").Ref<{
        key: string;
        connection: string;
        field: string;
        valueOP: string;
        value?: unknown;
        valueItem?: unknown;
    }[]>;
    connectionItems: import("vue").Ref<{
        text: string;
        value: string;
    }[]>;
    connectionMap: Map<string, string>;
    filterModeMap: Map<string, string>;
    handleAdd: () => void;
    handleRemove: (index: number) => void;
    renderEditor: (item: ISearchBarFilterCondition) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    handleConnectionChange: (item: ISearchBarFilterCondition) => void;
    handleFieldChange: (item: ISearchBarFilterCondition) => Promise<void>;
    handleValueOPChange: (item: ISearchBarFilterCondition) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<SearchBarFilterConditionController>, undefined, undefined>;
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
