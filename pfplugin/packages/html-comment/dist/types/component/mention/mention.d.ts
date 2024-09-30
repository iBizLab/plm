import { PropType, Ref } from 'vue';
import { IModal } from '@ibiz-template/runtime';
import { MenTionController } from '../../mention';
export declare const MenTion: import("vue").DefineComponent<{
    controller: {
        type: PropType<MenTionController>;
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
    renderItem: (user: IData) => JSX.Element;
    loadMore: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<MenTionController>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
}>>, {}, {}>;
