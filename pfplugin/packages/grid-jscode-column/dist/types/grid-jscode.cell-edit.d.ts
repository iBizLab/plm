import { GridRowState } from '@ibiz-template/runtime';
import { Ref } from 'vue';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';
export declare function useCellEdit(props: {
    readonly row: GridRowState;
    readonly controller: GridJsCodeColumnController;
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
