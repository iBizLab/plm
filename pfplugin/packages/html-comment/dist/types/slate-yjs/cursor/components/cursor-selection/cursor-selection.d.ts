import { PropType } from 'vue';
import { CaretPosition, CursorData, SelectionRect } from '../../types';
/**
 * 光标选区组件
 * - 用于绘制一个用户的光标选区和光标
 */
export declare const CursorSelection: import("vue").DefineComponent<{
    data: PropType<CursorData>;
    selectionRects: PropType<SelectionRect[]>;
    caretPosition: PropType<CaretPosition | null>;
}, {
    ns: import("@ibiz-template/core").Namespace;
    selectionStyle: import("vue").ComputedRef<{
        backgroundColor: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: PropType<CursorData>;
    selectionRects: PropType<SelectionRect[]>;
    caretPosition: PropType<CaretPosition | null>;
}>>, {}, {}>;
