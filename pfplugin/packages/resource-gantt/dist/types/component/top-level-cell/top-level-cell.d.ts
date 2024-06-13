import { PropType } from 'vue';
export declare const TopLevelCell: import("vue").DefineComponent<{
    cellData: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
    showText: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    capacityConfig: {
        type: PropType<IParams>;
        default: () => void;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderContent: () => "" | JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "cellClick"[], "cellClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cellData: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
    showText: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    capacityConfig: {
        type: PropType<IParams>;
        default: () => void;
    };
}>> & {
    onCellClick?: ((...args: any[]) => any) | undefined;
}, {
    cellData: Record<string, any>;
    capacityConfig: IParams;
}, {}>;
