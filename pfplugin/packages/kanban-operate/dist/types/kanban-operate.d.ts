import { IPanelButton } from '@ibiz/model-core';
import { PropType } from 'vue';
import { KanbanOperateController } from './kanban-operate.controller';
export declare const KanbanOperate: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof KanbanOperateController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    isText: boolean;
    captionText: import("vue").ComputedRef<any>;
    buttonType: import("vue").ComputedRef<"primary" | "success" | "info" | "warning" | "danger" | null>;
    showCaption: boolean | undefined;
    sysImage: import("@ibiz/model-core").ISysImage | undefined;
    codeName: string | undefined;
    tooltip: string | undefined;
    handleButtonClick: (event: MouseEvent) => Promise<void>;
    buttonCssStyle: string | undefined;
    tempStyle: import("vue").Ref<string>;
    itemStyle: string | undefined;
    buttonRef: import("vue").Ref<any>;
    popoverRef: import("vue").Ref<any>;
    popoverRefVisible: import("vue").Ref<boolean>;
    renderPoperContent: () => JSX.Element;
    renderBtn: () => JSX.Element;
    stopEvent: (event: Event) => void;
    processing: import("vue").Ref<boolean>;
    isVisible: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof KanbanOperateController;
        required: true;
    };
}>>, {}, {}>;
export default KanbanOperate;
