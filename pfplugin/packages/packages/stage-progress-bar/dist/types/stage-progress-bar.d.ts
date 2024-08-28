import { PropType } from 'vue';
import { EditorController } from './editor.controller';
export declare const StageProgressBar: import("vue").DefineComponent<{
    value: PropType<IData[]>;
    controller: import("@ibiz-template/vue3-util").RequiredProp<PropType<EditorController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<PropType<IData>, undefined, undefined>;
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
        /**
         * 判断左侧阶段是否可操作
         */
        required: boolean;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: EditorController;
    items: import("vue").Ref<IData[]>;
    renderContent: () => JSX.Element[];
    isLeftOperate: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: PropType<IData[]>;
    controller: import("@ibiz-template/vue3-util").RequiredProp<PropType<EditorController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<PropType<IData>, undefined, undefined>;
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
        /**
         * 判断左侧阶段是否可操作
         */
        required: boolean;
    };
}>>, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
