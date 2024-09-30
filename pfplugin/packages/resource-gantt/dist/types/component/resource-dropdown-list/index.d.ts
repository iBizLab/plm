export declare const IBizResourceDropdownList: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("./controller").Controller;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    c: import("./controller").Controller;
    curValue: import("vue").Ref<IData>;
    items: import("vue").Ref<IData[]>;
    classArr: import("vue").ComputedRef<(string | false)[]>;
    tempStyle: import("vue").Ref<string>;
    handleItemClick: (select: IParams) => void;
    renderContent: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("./controller").Controller;
        required: true;
    };
}>>, {}, {}>>;
export default IBizResourceDropdownList;
