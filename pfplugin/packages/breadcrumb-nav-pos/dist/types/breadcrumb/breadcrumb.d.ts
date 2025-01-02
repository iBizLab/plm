import { PropType } from 'vue';
import { IBreadcrumb } from '../interface';
export declare const Breadcrumb: import("vue").DefineComponent<{
    items: {
        type: PropType<IBreadcrumb[]>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    handleClick: (e: MouseEvent, index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (_item: IBreadcrumb) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IBreadcrumb[]>;
        required: true;
    };
}>> & {
    onClick?: ((_item: IBreadcrumb) => any) | undefined;
}, {}, {}>;
