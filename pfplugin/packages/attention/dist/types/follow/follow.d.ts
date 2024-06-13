import { Ref } from 'vue';
import { AttentionController } from '../attention-controller';
export declare const Follow: import("vue").DefineComponent<{
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    value: {
        type: StringConstructor;
    };
    codeListId: {
        type: StringConstructor;
    };
    codeListMap: {
        type: ObjectConstructor;
    };
    controller: {
        type: typeof AttentionController;
        required: true;
    };
    defaultSelected: {
        type: StringConstructor;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    curValue: import("vue").WritableComputedRef<string | string[] | undefined>;
    items: Ref<readonly IData[]>;
    valueText: import("vue").ComputedRef<string>;
    editorRef: Ref<any>;
    cssVars: import("vue").ComputedRef<{}>;
    isEditable: Ref<boolean>;
    isLoading: Ref<boolean>;
    followState: Ref<boolean>;
    selectd: Ref<string | number | null>;
    showState: Ref<boolean>;
    dropdownRef: Ref<any>;
    setEditable: (flag: boolean) => void;
    getCodeListItem: (text: string) => IData | undefined;
    onShowChange: (visible: boolean) => Promise<void>;
    onItemClick: (item: IParams) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /** 值变更事件 */
    change: (_value: string, _name?: string) => true;
    /** 失焦事件 */
    blur: (_event?: IData) => true;
    /** 聚焦事件 */
    focus: (_event?: IData) => true;
    /** 回车事件 */
    enter: (_event?: IData) => true;
    /** 信息文本变更事件 */
    infoTextChange: (_text: string) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    value: {
        type: StringConstructor;
    };
    codeListId: {
        type: StringConstructor;
    };
    codeListMap: {
        type: ObjectConstructor;
    };
    controller: {
        type: typeof AttentionController;
        required: true;
    };
    defaultSelected: {
        type: StringConstructor;
    };
}>> & {
    onFocus?: ((_event?: IData | undefined) => any) | undefined;
    onBlur?: ((_event?: IData | undefined) => any) | undefined;
    onChange?: ((_value: string, _name?: string | undefined) => any) | undefined;
    onEnter?: ((_event?: IData | undefined) => any) | undefined;
    onInfoTextChange?: ((_text: string) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
}, {}>;
