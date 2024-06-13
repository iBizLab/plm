import { PropType } from 'vue';
import { IDEToolbarItem } from '@ibiz/model-core';
import { ToolbarController } from '@ibiz-template/runtime';
export declare const ShowModeToolbarItem: import("vue").DefineComponent<{
    item: {
        type: PropType<IDEToolbarItem>;
        required: true;
    };
    controller: {
        type: typeof ToolbarController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    items: ({
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        text: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        text: string;
        value: string;
    })[];
    activeItem: import("vue").Ref<string>;
    onClick: (e: MouseEvent, item: {
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        text: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        text: string;
        value: string;
    }) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<IDEToolbarItem>;
        required: true;
    };
    controller: {
        type: typeof ToolbarController;
        required: true;
    };
}>>, {}, {}>;
