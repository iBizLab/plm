import { PropType } from 'vue';
import { CommentMarkerController } from '../../controller/mob-marker.controller';
export declare const MobMarkerItem: import("vue").DefineComponent<{
    controller: {
        type: PropType<CommentMarkerController>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderContent: (type: string, value: string) => string | JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<CommentMarkerController>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
}>>, {}, {}>;
