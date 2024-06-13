import { GridRowState, GridFieldEditColumnController } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare function useRowEdit(props: {
    readonly row: GridRowState;
    readonly controller: GridFieldEditColumnController;
}, _componentRef: Ref<any>): {
    gridEditItemProps: {
        stopPropagation: boolean;
    };
    editorProps: {
        disabled: boolean;
        readonly: boolean;
    };
};
