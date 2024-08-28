import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
export declare const StepContrast: import("vue").DefineComponent<{
    item: {
        type: PropType<{
            name: string;
            oldValue: string;
            newValue: string;
        }>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderContainer: (valueType: 'oldValue' | 'newValue') => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<{
            name: string;
            oldValue: string;
            newValue: string;
        }>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
}>>, {}, {}>;
