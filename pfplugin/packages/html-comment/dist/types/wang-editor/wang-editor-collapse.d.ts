import { Ref } from 'vue';
import { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import type { IDomEditor } from '@wangeditor/editor';
import { HtmlCommentController } from '../html-comment.controller';
declare const IBizHtmlCollapse: import("vue").DefineComponent<{
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
    containerRef: Ref<any>;
    htmlRef: Ref<any>;
    mode: string;
    valueHtml: Ref<string>;
    toolbarConfig: Partial<IToolbarConfig>;
    editorConfig: Partial<IEditorConfig>;
    handleCreated: (editor: IDomEditor) => void;
    handleChange: (editor: IDomEditor) => void;
    handleDestroyed: (_editor: IDomEditor) => void;
    handleFocus: (_editor: IDomEditor) => void;
    handleBlur: (_editor: IDomEditor) => void;
    customAlert: (info: string, type: string) => void;
    customPaste: (editor: IDomEditor, event: ClipboardEvent, callback: (_n: boolean) => void) => void;
    insertText: (str: string) => void;
    printHtml: () => void;
    disable: () => void;
    enable: () => void;
    renderHeaserToolbar: () => JSX.Element | null;
    renderEditorContent: () => JSX.Element;
    renderToggle: () => JSX.Element | null;
    renderFooter: () => JSX.Element | null;
    htmlContent: Ref<any>;
    hasEnableEdit: Ref<boolean>;
    cssVars: Ref<{}>;
    toolbarRef: Ref<any>;
    isFullScreen: Ref<boolean>;
    readonlyState: Ref<boolean>;
    collapse: Ref<boolean>;
    changeFullScreenState: () => void;
    renderPreview: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    onChange?: ((_value: unknown, _name?: string | undefined) => any) | undefined;
    onFocus?: ((_event?: IData | undefined) => any) | undefined;
    onBlur?: ((_event?: IData | undefined) => any) | undefined;
    onEnter?: ((_event?: IData | undefined) => any) | undefined;
    onInfoTextChange?: ((_text: string) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
export default IBizHtmlCollapse;
