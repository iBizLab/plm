import { PropType } from 'vue';
import { SlateYjs } from '../../../slate-yjs';
/**
 * wangEditor 协同编辑光标处理组件（入口组件）
 * - 用法：用该组件将wangEditor编辑器和工具栏包裹起来
 * - 优点：使用定位的方式将用户光标和选区呈现在界面上，不会影响wangEditor编辑器中的内容
 */
export declare const CursorOverlay: import("vue").DefineComponent<{
    slateYjs: {
        type: PropType<SlateYjs>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    overlayData: import("vue").ComputedRef<import("../../hooks").CursorOverlayData<import("../..").CursorData>[]>;
    containerRef: import("vue").Ref<HTMLElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    slateYjs: {
        type: PropType<SlateYjs>;
        required: true;
    };
}>>, {}, {}>;
