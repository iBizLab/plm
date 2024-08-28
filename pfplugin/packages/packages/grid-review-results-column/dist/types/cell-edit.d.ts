import { GridRowState, GridFieldEditColumnController } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare function useCellEdit(props: {
    readonly row: GridRowState;
    readonly controller: GridFieldEditColumnController;
}, componentRef: Ref<any>): {
    gridEditItemProps: {
        showEditMask: boolean;
        stopPropagation: boolean;
        onMaskClick: () => void;
    };
    editorProps: {
        autoFocus: boolean;
        disabled: boolean;
        readonly: boolean;
        onBlur: () => void;
        onFocus: () => void;
    };
};
