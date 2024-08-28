import { PropType } from 'vue';
import { IDEDRTab } from '@ibiz/model-core';
import { IControlProvider, EventBase } from '@ibiz-template/runtime';
import { TabNavSelectPanelController } from './controller';
export declare const TabNavSelectPanelControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEDRTab>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: TabNavSelectPanelController;
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    controlRef: import("vue").Ref<any>;
    counterData: IData;
    visibleItems: import("vue").Ref<IData>;
    moreItems: import("vue").Ref<IData>;
    handleTabChange: () => void;
    handleMoreChange: (key: string) => void;
    onCreated: (event: EventBase) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEDRTab>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    singleSelect: boolean;
    noLoadDefault: boolean;
}, {}>;
