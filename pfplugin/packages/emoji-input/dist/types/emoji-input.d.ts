import { Ref } from 'vue';
import { EmojiInputEditorController } from './editor.controller';
export declare const EmojiInput: import("vue").DefineComponent<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<EmojiInputEditorController>, undefined, undefined>;
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
    c: EmojiInputEditorController;
    emoji: Ref<string>;
    curValue: Ref<string | null>;
    valueText: import("vue").ComputedRef<string>;
    loading: Ref<boolean>;
    items: Ref<IData[]>;
    visible: Ref<boolean>;
    onOpenChange: (isOpen: boolean) => void;
    onClear: () => void;
    onEmojiSelect: (val: IData) => void;
    renderEmojiSelect: () => JSX.Element;
    onSearch: (query: string) => Promise<void>;
    onFocus: (e: IData) => void;
    onBlur: (event: IData) => void;
    onClick: () => void;
    handleInputChange: (val: string | number) => void;
    handleKeyUp: (e: KeyboardEvent) => void;
    editorRef: Ref<any>;
    isEditable: Ref<boolean>;
    setEditable: (flag: boolean) => void;
    renderReference: () => JSX.Element;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<EmojiInputEditorController>, undefined, undefined>;
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
