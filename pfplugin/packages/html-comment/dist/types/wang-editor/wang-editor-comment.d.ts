import { Ref } from 'vue';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import type { IDomEditor } from '@wangeditor/editor';
import { HtmlCommentController } from '../html-comment.controller';
declare const IBizHtmlContent: import("vue").DefineComponent<{
    value: StringConstructor;
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<HtmlCommentController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<IData>, undefined, undefined>;
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowMode: {
        type: StringConstructor;
    };
    controlParams: {
        type: ObjectConstructor;
        required: boolean;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    editorRef: import("vue").ShallowRef<any>;
    previewRef: Ref<any>;
    mode: string;
    valueHtml: Ref<string>;
    toolbarConfig: Partial<IToolbarConfig>;
    editorConfig: Partial<IEditorConfig>;
    handleCreated: (editor: IDomEditor) => void;
    handleChange: (editor: IDomEditor) => void;
    handleDestroyed: (_editor: IDomEditor) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    customAlert: (info: string, type: string) => void;
    customPaste: (editor: IDomEditor, event: ClipboardEvent, callback: (_n: boolean) => void) => void;
    insertText: (str: string) => void;
    printHtml: () => void;
    disable: () => void;
    enable: () => void;
    renderHeaserToolbar: () => JSX.Element | null;
    renderEditorContent: () => JSX.Element | null;
    renderFooter: () => JSX.Element | null;
    htmlContent: Ref<any>;
    hasEnableEdit: Ref<boolean>;
    cssVars: Ref<{}>;
    toolbarRef: Ref<any>;
    htmlRef: Ref<any>;
    isFullScreen: Ref<boolean>;
    readonlyState: Ref<boolean>;
    changeFullScreenState: () => void;
    renderPreview: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "link" | "change" | "enter" | "infoTextChange" | "itemClick")[], "focus" | "blur" | "link" | "change" | "enter" | "infoTextChange" | "itemClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: StringConstructor;
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<HtmlCommentController>, undefined, undefined>;
    data: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<IData>, undefined, undefined>;
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowMode: {
        type: StringConstructor;
    };
    controlParams: {
        type: ObjectConstructor;
        required: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
    onLink?: ((...args: any[]) => any) | undefined;
    onInfoTextChange?: ((...args: any[]) => any) | undefined;
    onItemClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
export default IBizHtmlContent;
