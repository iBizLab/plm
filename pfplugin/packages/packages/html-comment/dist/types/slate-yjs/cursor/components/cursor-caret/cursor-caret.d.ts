import { PropType } from 'vue';
import { CaretPosition, CursorData } from '../../types';
/**
 * 光标组件
 * - 用于绘制绘制用户光标
 */
export declare const CursorCaret: import("vue").DefineComponent<{
    data: {
        type: PropType<CursorData>;
        required: true;
    };
    caretPosition: PropType<CaretPosition>;
}, {
    ns: import("@ibiz-template/core").Namespace;
    caretStyle: import("vue").ComputedRef<{
        background: string;
        top?: string | undefined;
        left?: string | undefined;
        height?: string | undefined;
    }>;
    labelStyle: import("vue").ComputedRef<{
        transform: string;
        background: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<CursorData>;
        required: true;
    };
    caretPosition: PropType<CaretPosition>;
}>>, {}, {}>;
