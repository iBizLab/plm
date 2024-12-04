import { PropType } from 'vue';
import { ICaptionBar } from '@ibiz/model-core';
import { MobIdentifierTitleController } from './mob-identifier-title.controller';
export declare const MobIdentifierTitle: import("vue").DefineComponent<{
    modelData: {
        type: PropType<ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof MobIdentifierTitleController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof MobIdentifierTitleController;
        required: true;
    };
}>>, {}, {}>;
