import { TreeGridExNodeColumnController, TreeGridExRowState } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare function useCellEdit(props: {
    readonly row: TreeGridExRowState;
    readonly controller: TreeGridExNodeColumnController;
}, componentRef: Ref<any>): {
    gridEditItemProps: {
        showEditMask: boolean;
        stopPropagation: boolean;
    };
    editorProps: {
        autoFocus: boolean;
        disabled: boolean;
        readonly: boolean;
        onBlur: () => void;
        onFocus: () => void;
        onEnter: () => Promise<void>;
        onKeydown: (event: IParams) => void;
    };
};
