import { PropType } from 'vue';
import { IPanelRawItem } from '@ibiz/model-core';
import { CustomUserInfoController } from './custom-user-info.controller';
export declare const CustomUserInfo: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof CustomUserInfoController;
        required: true;
    };
}, {
    c: CustomUserInfoController;
    ns: import("@ibiz-template/core").Namespace;
    userInfo: import("vue").Ref<{}>;
    onOpenUserInfoPopover: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof CustomUserInfoController;
        required: true;
    };
}>>, {}, {}>;
