import { PropType } from 'vue';
import { IPanelRawItem } from '@ibiz/model-core';
import { EventBase } from '@ibiz-template/runtime';
import { BreadcrumbNavPosController } from '../breadcrumb-nav-pos.controller';
export declare const BreadcrumbNavPos: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: PropType<BreadcrumbNavPosController>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: BreadcrumbNavPosController;
    isPresetView: import("vue").Ref<boolean>;
    onViewCreated: (event: EventBase) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: PropType<BreadcrumbNavPosController>;
        required: true;
    };
}>>, {}, {}>;
