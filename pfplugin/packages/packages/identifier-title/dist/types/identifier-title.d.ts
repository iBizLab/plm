import { PropType, Ref } from 'vue';
import { ICaptionBar } from '@ibiz/model-core';
import { IdentifierTitleController } from './identifier-title-controller';
export declare const IdentifierTitle: import("vue").DefineComponent<{
    modelData: {
        type: PropType<ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof IdentifierTitleController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    copyIdSuccess: Ref<boolean>;
    copyUrlSuccess: Ref<boolean>;
    copy: (value: string, tag: string) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof IdentifierTitleController;
        required: true;
    };
}>>, {}, {}>;
