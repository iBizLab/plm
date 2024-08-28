import { Ref } from 'vue';
import { PersonalInfoEditorController } from './editor.controller';
export declare const PersonalInfo: import("vue").DefineComponent<{
    value: (ArrayConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<PersonalInfoEditorController>, undefined, undefined>;
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
    c: PersonalInfoEditorController;
    text: Ref<string>;
    editorRef: Ref<any>;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
    renderContent: () => JSX.Element | string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ArrayConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<PersonalInfoEditorController>, undefined, undefined>;
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
}, {}>;
