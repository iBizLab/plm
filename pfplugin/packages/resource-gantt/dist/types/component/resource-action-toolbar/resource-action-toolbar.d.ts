import { PropType, Ref } from 'vue';
import { IButtonContainerState } from '@ibiz-template/runtime';
import { IAppDEUIActionGroupDetail } from '@ibiz/model-core';
export declare const IBizResourceActionToolbar: import("vue").DefineComponent<{
    actionDetails: {
        type: {
            (arrayLength: number): IAppDEUIActionGroupDetail[];
            (...items: IAppDEUIActionGroupDetail[]): IAppDEUIActionGroupDetail[];
            new (arrayLength: number): IAppDEUIActionGroupDetail[];
            new (...items: IAppDEUIActionGroupDetail[]): IAppDEUIActionGroupDetail[];
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
    actionsState: {
        type: PropType<IButtonContainerState>;
        required: true;
    };
    caption: StringConstructor;
    mode: {
        type: PropType<"dropdown" | "buttons">;
        default: string;
    };
    groupLevelKeys: {
        type: PropType<number[]>;
        default: number[];
    };
    zIndex: {
        type: NumberConstructor;
    };
    popperClass: StringConstructor;
}, {
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    dropdownRef: Ref<any>;
    popoverIndex: number | undefined;
    expandDetails: Ref<IAppDEUIActionGroupDetail[]>;
    groupDetails: Ref<IAppDEUIActionGroupDetail[]>;
    groupButtonRef: Ref<any>;
    popoverVisible: Ref<boolean>;
    dropdownVisible: Ref<boolean>;
    handleClick: (detail: IAppDEUIActionGroupDetail, e: MouseEvent) => Promise<void>;
    calcActionItemClass: (item: IAppDEUIActionGroupDetail) => string[];
    onVisibleChange: (state: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "actionClick"[], "actionClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    actionDetails: {
        type: {
            (arrayLength: number): IAppDEUIActionGroupDetail[];
            (...items: IAppDEUIActionGroupDetail[]): IAppDEUIActionGroupDetail[];
            new (arrayLength: number): IAppDEUIActionGroupDetail[];
            new (...items: IAppDEUIActionGroupDetail[]): IAppDEUIActionGroupDetail[];
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
    actionsState: {
        type: PropType<IButtonContainerState>;
        required: true;
    };
    caption: StringConstructor;
    mode: {
        type: PropType<"dropdown" | "buttons">;
        default: string;
    };
    groupLevelKeys: {
        type: PropType<number[]>;
        default: number[];
    };
    zIndex: {
        type: NumberConstructor;
    };
    popperClass: StringConstructor;
}>> & {
    onActionClick?: ((...args: any[]) => any) | undefined;
}, {
    mode: "dropdown" | "buttons";
    groupLevelKeys: number[];
}, {}>;
