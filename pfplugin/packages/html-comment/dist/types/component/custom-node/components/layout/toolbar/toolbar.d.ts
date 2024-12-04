import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
export declare const LayoutToolBar: import("vue").DefineComponent<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderToolBar: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
}>>, {}, {}>;
