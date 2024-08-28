export declare const IBizShowModeToolbarItem: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    item: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEToolbarItem>;
        required: true;
    };
    controller: {
        type: typeof import("@ibiz-template/runtime").ToolbarController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    items: ({
        icon: {
            htmlStr: string;
        };
        text: string;
        value: string;
    } | {
        icon: import("@ibiz/model-core").ISysImage;
        text: string;
        value: string;
    })[];
    activeItem: import("vue").Ref<string>;
    onClick: (e: MouseEvent, item: {
        icon: {
            htmlStr: string;
        };
        text: string;
        value: string;
    } | {
        icon: import("@ibiz/model-core").ISysImage;
        text: string;
        value: string;
    }) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEToolbarItem>;
        required: true;
    };
    controller: {
        type: typeof import("@ibiz-template/runtime").ToolbarController;
        required: true;
    };
}>>, {}, {}>>;
export default IBizShowModeToolbarItem;
