import { PropType, Ref } from 'vue';
import { IRawItemContainer } from '@ibiz/model-core';
export declare const AnchoHtmlNavBar: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
    content: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
    };
    rawItem: {
        type: PropType<IRawItemContainer>;
        required: false;
    };
    title: {
        type: StringConstructor;
    };
    parseScript: {
        type: StringConstructor;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    rawItemText: Ref<string | number | IData>;
    playerParams: Ref<{
        id: string;
        path: string;
        mute: boolean;
        autoplay: boolean;
        replay: boolean;
        showcontrols: boolean;
    }>;
    dividerParams: Ref<{
        contentPosition: string;
        html: string;
    }>;
    alertParams: Ref<{
        type: string;
        title: string;
        closeabled: boolean;
        showIcon: boolean;
    }>;
    rawItemType: Ref<string>;
    rawItemContent: Ref<string | number | IData>;
    htmlContent: Ref<any[]>;
    isCollapse: Ref<boolean>;
    previewSrcList: Ref<string[]>;
    selectAncho: Ref<string>;
    showImg: Ref<boolean>;
    previewImgIndex: Ref<number>;
    showTitle: Ref<boolean>;
    jumpAncho: (id: string) => void;
    changeCollapse: () => void;
    renderHTMLContent: (items: IData[]) => IData[];
    renderAnchoList: (items: IData[]) => IData[];
    closeImgPreview: () => void;
    imgClick: (event: Event) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
    content: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
    };
    rawItem: {
        type: PropType<IRawItemContainer>;
        required: false;
    };
    title: {
        type: StringConstructor;
    };
    parseScript: {
        type: StringConstructor;
    };
}>>, {}, {}>;
