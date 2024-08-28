import { Ref } from 'vue';
import { TeamSelectController } from './team-select.controller';
export declare const TeamSelect: import("vue").DefineComponent<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<TeamSelectController>, undefined, undefined>;
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
    c: TeamSelectController;
    curValue: Ref<string | null>;
    items: Ref<IData[]>;
    dropDownItem: {
        name: string;
        label: string;
    }[];
    numberSvg: () => JSX.Element;
    departmentSvg: () => JSX.Element;
    teamSvg: () => JSX.Element;
    renderItemSvg: (label: string) => JSX.Element | undefined;
    rightArrowSvg: () => JSX.Element;
    deleteSvg: () => JSX.Element;
    renderItemContent: (label: 'department' | 'member' | 'team') => JSX.Element;
    showFormDefaultContent: import("vue").ComputedRef<boolean>;
    searchValue: Ref<string>;
    handleSearch: (value: string | number) => void;
    romateData: Ref<IData[]>;
    renderPersonItem: (item: IData, showSelect?: boolean, showpadding?: boolean) => JSX.Element;
    selectedPersonnel: Ref<IData | null>;
    searchRef: Ref<any>;
    visibleChange: (visible: any) => void;
    dropdownRef: Ref<any>;
    dropdownClick: () => Promise<void>;
    popoverRef: Ref<any>;
    teamMenberItems: Ref<Map<string, IData>>;
    renderPersonnel: () => JSX.Element | null;
    renderTeamItem: (item: IData) => JSX.Element;
    dropDownItemVisible: Ref<{
        member: boolean;
        department: boolean;
        team: boolean;
    }>;
    dropdownItemClick: (e: Event, item: IData) => void;
    romateTeamData: Ref<IData[]>;
    dropdownVisible: Ref<boolean>;
    pxx: Ref<any>;
    dropdownMenu: Ref<any>;
    handleFocus: (_e: KeyboardEvent) => void;
    clearSelect: (_isTeam?: boolean) => void;
    readOnlyItem: () => JSX.Element | "未设置";
    width: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_value: unknown, _name?: string | undefined) => boolean;
    blur: (_event?: IData | undefined) => boolean;
    focus: (_event?: IData | undefined) => boolean;
    enter: (_event?: IData | undefined) => boolean;
    infoTextChange: (_text: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: (ObjectConstructor | NumberConstructor | ArrayConstructor | StringConstructor)[];
    controller: import("@ibiz-template/vue3-util").RequiredProp<import("vue").PropType<TeamSelectController>, undefined, undefined>;
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
    onFocus?: ((_event?: IData | undefined) => any) | undefined;
    onBlur?: ((_event?: IData | undefined) => any) | undefined;
    onChange?: ((_value: unknown, _name?: string | undefined) => any) | undefined;
    onEnter?: ((_event?: IData | undefined) => any) | undefined;
    onInfoTextChange?: ((_text: string) => any) | undefined;
}, {
    disabled: boolean;
    readonly: boolean;
    autoFocus: boolean;
}, {}>;
