import { Ref } from 'vue';
import { CodeListItem } from '@ibiz-template/runtime';
export declare const IBizCopy: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        default: null;
    };
    codeListItems: {
        type: {
            (arrayLength: number): CodeListItem[];
            (...items: CodeListItem[]): CodeListItem[];
            new (arrayLength: number): CodeListItem[];
            new (...items: CodeListItem[]): CodeListItem[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    timer: Ref<unknown>;
    text: import("vue").ComputedRef<string>;
    copy: (value: string, event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: null;
    };
    codeListItems: {
        type: {
            (arrayLength: number): CodeListItem[];
            (...items: CodeListItem[]): CodeListItem[];
            new (arrayLength: number): CodeListItem[];
            new (...items: CodeListItem[]): CodeListItem[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
    };
}>>, {
    value: string;
}, {}>;
