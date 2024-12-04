import { App } from 'vue';
export declare const IBizBreadcrumbExp: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("@ibiz-template/runtime").PanelItemController;
        required: true;
    };
}, {
    c: import("@ibiz-template/runtime").PanelItemController<import("@ibiz/model-core").IPanelItem>;
    ns: import("@ibiz-template/core").Namespace;
    items: import("vue").Ref<{
        _uuid: string;
        _nodeType?: string | undefined;
        _nodeId: string;
        _id: string;
        srfnodeid: string;
        _value?: string | undefined;
        _text: string;
        _leaf: boolean;
        _context?: IParams | undefined;
        _params?: IParams | undefined;
        _children?: any[] | undefined;
        _parent?: any | undefined;
        _deData?: IData | undefined;
        _oldDeData?: IData | undefined;
        _changedOnly: boolean;
        _icon?: {
            cssClass?: string | undefined;
            imagePath?: string | undefined;
            htmlStr?: string | undefined;
        } | undefined;
        _textHtml?: string | undefined;
        _disableSelect?: boolean | undefined;
        srfkey?: string | undefined;
        srfmajortext?: string | undefined;
        getDiffData: () => IData | undefined;
    }[]>;
    handleClick: (item: import("@ibiz-template/runtime").ITreeNodeData, e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("@ibiz-template/runtime").PanelItemController;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
