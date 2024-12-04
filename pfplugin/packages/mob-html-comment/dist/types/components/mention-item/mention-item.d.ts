import { PropType, Ref } from 'vue';
import { CommentMentionController } from '../../controller/mob-mention.controller';
export declare const MobMenTionItem: import("vue").DefineComponent<{
    controller: {
        type: PropType<CommentMentionController>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    avatarBg: import("vue").ComputedRef<string>;
    avatarName: import("vue").ComputedRef<string | void>;
    url: import("vue").ComputedRef<string>;
    errorLoadItems: Ref<string[]>;
    avatarLoadError: (value: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<CommentMentionController>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
}>>, {}, {}>;
