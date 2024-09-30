import { IPanelRawItem } from '@ibiz/model-core';
import { PropType } from 'vue';
import { Controller } from './controller';
export declare const ResourceDropdownList: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof Controller;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    c: Controller;
    curValue: import("vue").Ref<IData>;
    items: import("vue").Ref<IData[]>;
    classArr: import("vue").ComputedRef<(string | false)[]>;
    tempStyle: import("vue").Ref<string>;
    handleItemClick: (select: IParams) => void;
    renderContent: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof Controller;
        required: true;
    };
}>>, {}, {}>;
