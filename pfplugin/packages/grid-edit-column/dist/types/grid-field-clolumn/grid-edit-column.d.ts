import { Ref } from 'vue';
import { GridRowState } from '@ibiz-template/runtime';
import { IUIActionGroupDetail } from '@ibiz/model-core';
import { GridEditColumnController } from './grid-edit-column.controller';
export declare const GridEditColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof GridEditColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    picking: boolean;
    componentRef: Ref<any>;
    actionToolbarRef: Ref<any>;
    fieldName: string;
    gridEditItemProps: IData;
    rowDataChange: (val: unknown, name?: string) => Promise<void>;
    editorProps: IData;
    onCellClick: (event: MouseEvent) => void;
    onTextClick: (event: MouseEvent) => void;
    onInfoTextChange: (text: string) => void;
    onActionClick: (detail: IUIActionGroupDetail, event: MouseEvent) => Promise<void>;
    renderActions: () => IData[];
    CustomHtml: import("vue").ComputedRef<string | undefined>;
    fieldValue: import("vue").ComputedRef<any>;
    formatValue: import("vue").ComputedRef<string>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    renderPicker: () => JSX.Element | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof GridEditColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
}>>, {}, {}>;
