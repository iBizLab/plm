import { PropType, Ref } from 'vue';
import { IModal } from '@ibiz-template/runtime';
import { MarkerController } from '../../marker';
export declare const Marker: import("vue").DefineComponent<{
    controller: {
        type: PropType<MarkerController>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    items: Ref<IData[]>;
    loading: Ref<boolean>;
    isLodeMoreDisabled: import("vue").ComputedRef<boolean>;
    renderItem: (item: IData) => JSX.Element;
    loadMore: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<MarkerController>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
}>>, {}, {}>;
