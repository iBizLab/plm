import { GridRowState } from '@ibiz-template/runtime';
import { Ref } from 'vue';
import { GridEditColumnController } from './grid-edit-column.controller';
export declare function useCellEdit(props: {
    readonly row: GridRowState;
    readonly controller: GridEditColumnController;
}, componentRef: Ref<any>): {
    gridEditItemProps: {
        showEditMask: boolean;
        stopPropagation: boolean;
    };
    editorProps: {
        autoFocus: boolean;
        disabled: boolean;
        readonly: boolean;
        cellEditable: boolean;
        onFocus: () => void;
        onBlur: () => void;
        onEnter: () => Promise<void>;
        onKeydown: (event: IParams) => void;
    };
    onMaskClick: () => void;
};
