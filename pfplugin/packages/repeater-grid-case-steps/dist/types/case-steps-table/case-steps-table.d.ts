import { PropType } from 'vue';
import { IDEFormItem } from '@ibiz/model-core';
import { columnProps } from './case-steps-table-props';
export declare const CaseStepsTable: import("vue").DefineComponent<{
    data: {
        type: {
            (arrayLength: number): IData[];
            (...items: IData[]): IData[];
            new (arrayLength: number): IData[];
            new (...items: IData[]): IData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: true;
    };
    model: {
        type: PropType<IData>;
        required: true;
    };
    columns: {
        type: {
            (arrayLength: number): IDEFormItem[];
            (...items: IDEFormItem[]): IDEFormItem[];
            new (arrayLength: number): IDEFormItem[];
            new (...items: IDEFormItem[]): IDEFormItem[];
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
    indexProps: {
        type: PropType<columnProps>;
    };
    operationsProps: {
        type: PropType<columnProps>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    onChange: (data: IData) => void;
    renderRows: (item: IData, $index: number) => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    dragChange: (data: IData[]) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: {
            (arrayLength: number): IData[];
            (...items: IData[]): IData[];
            new (arrayLength: number): IData[];
            new (...items: IData[]): IData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: true;
    };
    model: {
        type: PropType<IData>;
        required: true;
    };
    columns: {
        type: {
            (arrayLength: number): IDEFormItem[];
            (...items: IDEFormItem[]): IDEFormItem[];
            new (arrayLength: number): IDEFormItem[];
            new (...items: IDEFormItem[]): IDEFormItem[];
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
    indexProps: {
        type: PropType<columnProps>;
    };
    operationsProps: {
        type: PropType<columnProps>;
    };
}>> & {
    onDragChange?: ((data: IData[]) => any) | undefined;
}, {}, {}>;
