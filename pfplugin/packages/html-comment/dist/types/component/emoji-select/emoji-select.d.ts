import { PropType } from 'vue';
import { Emoji, ICategory, IEmoji } from './interface';
export declare const IBizEmojiSelect: import("vue").DefineComponent<{
    customEmojis: {
        type: PropType<IEmoji[]>;
        required: true;
        default: () => IEmoji[];
    };
    customCategories: {
        type: PropType<ICategory[]>;
        required: true;
        default: () => never[];
    };
    limitFrequently: {
        type: NumberConstructor;
        default: number;
    };
    emojisByRow: {
        type: NumberConstructor;
        default: number;
    };
    continuousList: {
        type: BooleanConstructor;
        default: boolean;
    };
    emojiSize: {
        type: NumberConstructor;
        default: number;
    };
    emojiWithBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCategories: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialCategory: {
        type: StringConstructor;
        default: string;
    };
    exceptCategories: {
        type: PropType<ICategory[]>;
        default: () => never[];
    };
    exceptEmojis: {
        type: PropType<Emoji[]>;
        default: () => never[];
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    mapEmojis: import("vue").Ref<IData>;
    filterEmoji: import("vue").Ref<string>;
    mapCategories: import("vue").Ref<IData>;
    currentCategory: import("vue").Ref<string>;
    categoriesFiltered: import("vue").ComputedRef<IData[]>;
    onSearch: (term: string) => Promise<void>;
    onSelectEmoji: (emoji: IData) => Promise<void>;
    changeCategory: (category: IData) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "changeCategory" | "customEmojis")[], "select" | "changeCategory" | "customEmojis", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    customEmojis: {
        type: PropType<IEmoji[]>;
        required: true;
        default: () => IEmoji[];
    };
    customCategories: {
        type: PropType<ICategory[]>;
        required: true;
        default: () => never[];
    };
    limitFrequently: {
        type: NumberConstructor;
        default: number;
    };
    emojisByRow: {
        type: NumberConstructor;
        default: number;
    };
    continuousList: {
        type: BooleanConstructor;
        default: boolean;
    };
    emojiSize: {
        type: NumberConstructor;
        default: number;
    };
    emojiWithBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCategories: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialCategory: {
        type: StringConstructor;
        default: string;
    };
    exceptCategories: {
        type: PropType<ICategory[]>;
        default: () => never[];
    };
    exceptEmojis: {
        type: PropType<Emoji[]>;
        default: () => never[];
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onChangeCategory?: ((...args: any[]) => any) | undefined;
    onCustomEmojis?: ((...args: any[]) => any) | undefined;
}, {
    emojisByRow: number;
    emojiWithBorder: boolean;
    emojiSize: number;
    continuousList: boolean;
    customEmojis: IEmoji[];
    customCategories: ICategory[];
    limitFrequently: number;
    showSearch: boolean;
    showCategories: boolean;
    dark: boolean;
    initialCategory: string;
    exceptCategories: ICategory[];
    exceptEmojis: Emoji[];
}, {}>;
