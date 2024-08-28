import { TreeGridExNodeColumnController, TreeGridExRowState } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare function useAllEdit(props: {
    readonly row: TreeGridExRowState;
    readonly controller: TreeGridExNodeColumnController;
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
