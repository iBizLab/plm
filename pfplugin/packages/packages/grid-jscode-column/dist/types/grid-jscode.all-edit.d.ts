import { GridRowState } from '@ibiz-template/runtime';
import { Ref } from 'vue';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';
export declare function useAllEdit(props: {
    readonly row: GridRowState;
    readonly controller: GridJsCodeColumnController;
}, _componentRef: Ref<any>): {
    gridEditItemProps: {
        stopPropagation: boolean;
    };
    editorProps: {
        disabled: boolean;
        readonly: boolean;
        onBlur: () => void;
    };
};
