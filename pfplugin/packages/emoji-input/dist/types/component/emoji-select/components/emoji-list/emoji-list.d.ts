import { PropType } from 'vue';
export declare const EmojiList: import("vue").DefineComponent<{
    data: {
        type: PropType<IData>;
        required: true;
    };
    emojisByRow: {
        type: NumberConstructor;
        required: true;
    };
    emojiWithBorder: {
        type: BooleanConstructor;
    };
    emojiSize: {
        type: NumberConstructor;
    };
    filter: {
        type: StringConstructor;
        default: string;
    };
    continuousList: {
        type: BooleanConstructor;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    hasSearch: {
        type: BooleanConstructor;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    emojisRef: import("vue").Ref<IData>;
    gridDynamic: import("vue").ComputedRef<{
        gridTemplateColumns: string;
    }>;
    dataFiltered: import("vue").ComputedRef<any>;
    dataFilteredByCategory: import("vue").ComputedRef<IData>;
    onSelect: (emoji: IData) => void;
    setCategoryRef: (categoryName: string, el: Element) => void;
    renderGridEmojis: (params: IData) => "" | JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("data" | "select")[], "data" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<IData>;
        required: true;
    };
    emojisByRow: {
        type: NumberConstructor;
        required: true;
    };
    emojiWithBorder: {
        type: BooleanConstructor;
    };
    emojiSize: {
        type: NumberConstructor;
    };
    filter: {
        type: StringConstructor;
        default: string;
    };
    continuousList: {
        type: BooleanConstructor;
    };
    category: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    hasSearch: {
        type: BooleanConstructor;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onData?: ((...args: any[]) => any) | undefined;
}, {
    filter: string;
    categories: IData;
    category: string;
    emojiWithBorder: boolean;
    continuousList: boolean;
    hasSearch: boolean;
}, {}>;
