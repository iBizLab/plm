import { IPanelButton } from '@ibiz/model-core';
import { PropType } from 'vue';
import { SwitchShowModeController } from './switch-show-mode.controller';
export declare const SwitchShowMode: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof SwitchShowModeController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    items: ({
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        title: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        title: string;
        value: string;
    })[];
    indicatorStyle: import("vue").Ref<{
        transition: string;
        width: string;
        transform: string;
    }>;
    activeItem: import("vue").Ref<string>;
    content: import("vue").Ref<HTMLElement | undefined>;
    onClick: (e: MouseEvent, item: {
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        title: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        title: string;
        value: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof SwitchShowModeController;
        required: true;
    };
}>>, {}, {}>;
export default SwitchShowMode;
