export declare const VirtualDraggable: import("vue").DefineComponent<{
    items: {
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
    count: {
        type: NumberConstructor;
        default: number;
    };
    itemSize: {
        type: NumberConstructor;
        default: number;
    };
}, {
    draggableRef: import("vue").Ref<any>;
    scrollbarRef: import("vue").Ref<any>;
    virtualData: import("vue").ComputedRef<IData[]>;
    handleScroll: ({ scrollTop }: {
        scrollTop: number;
    }) => void;
    onChange: (evt: IData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
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
    count: {
        type: NumberConstructor;
        default: number;
    };
    itemSize: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    count: number;
    itemSize: number;
}, {}>;
export default VirtualDraggable;
