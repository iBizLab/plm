import { GridController } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare function useRowEditPopover(tableRef: Ref<IData | undefined>, c: GridController): {
    renderPopover: () => JSX.Element[];
};
