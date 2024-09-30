import { Ref } from 'vue';
export declare const Audio: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    realAudioTime: Ref<string>;
    totalAudioTime: Ref<string>;
    isPlay: Ref<boolean>;
    audioRef: Ref<any>;
    bar: Ref<any>;
    slid: Ref<any>;
    percentage: Ref<number>;
    fileName: Ref<string>;
    fileSizeText: import("vue").ComputedRef<string>;
    audioSrc: Ref<string>;
    play: () => void;
    renderStop: () => JSX.Element;
    renderArrowSvg: () => JSX.Element;
    renderAudioSvg: () => JSX.Element;
    onSliderChange: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>>, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
