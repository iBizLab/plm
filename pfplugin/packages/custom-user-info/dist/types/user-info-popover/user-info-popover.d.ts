import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
import { CustomUserInfoController } from '../custom-user-info.controller';
export declare const UserInfoPopover: import("vue").DefineComponent<{
    controller: {
        type: PropType<CustomUserInfoController>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    viewId: {
        type: StringConstructor;
    };
    modal: {
        type: PropType<IModal>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderContent: () => JSX.Element | JSX.Element[] | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<CustomUserInfoController>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    viewId: {
        type: StringConstructor;
    };
    modal: {
        type: PropType<IModal>;
    };
}>>, {
    params: IParams;
}, {}>;
