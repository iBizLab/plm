import { IDomEditor, IButtonMenu, IModuleConf } from '@wangeditor/editor';
type EmptyText = {
    text: '';
};
export type CodeSnippetElement = {
    type: 'codesnippet';
    script: string;
    data: IData;
    children: EmptyText[];
};
export declare class CodeSnippetMenu implements IButtonMenu {
    readonly title = "\u4EE3\u7801\u6BB5";
    readonly tag = "button";
    readonly iconSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"36px\" height=\"36px\" viewBox=\"0 0 36 36\" version=\"1.1\">\n  <title>\u4EE3\u7801\u6BB5</title>\n  <g id=\"\u4EE3\u7801\u6BB5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"icon\u5907\u4EFD\">\n          <rect id=\"\u77E9\u5F62\" stroke=\"#EEEEEE\" fill=\"#FFFFFF\" x=\"0.5\" y=\"0.5\" width=\"35\" height=\"35\" rx=\"4\"/>\n          <path d=\"M24.6642225,18.8794824 L27.6075695,18.8794824 C27.9389404,18.8794824 28.2075695,19.1481115 28.2075695,19.4794824 C28.2075695,19.8108532 27.9389404,20.0794824 27.6075695,20.0794824 L24.6642225,20.0794824 C24.3328516,20.0794824 24.0642225,19.8108532 24.0642225,19.4794824 C24.0642225,19.1481115 24.3328516,18.8794824 24.6642225,18.8794824 Z\" id=\"\u77E9\u5F62\u5907\u4EFD-74\" fill=\"#73D897\"/>\n          <path d=\"M24.6642225,13.2927173 L30.4,13.2927173 C30.7313708,13.2927173 31,13.5613465 31,13.8927173 C31,14.2240882 30.7313708,14.4927173 30.4,14.4927173 L24.6642225,14.4927173 C24.3328516,14.4927173 24.0642225,14.2240882 24.0642225,13.8927173 C24.0642225,13.5613465 24.3328516,13.2927173 24.6642225,13.2927173 Z\" id=\"\u77E9\u5F62\u5907\u4EFD-75\" fill=\"#6698FF\"/>\n          <path d=\"M24.6642225,24.4662475 L30.4,24.4662475 C30.7313708,24.4662475 31,24.7348766 31,25.0662475 C31,25.3976183 30.7313708,25.6662475 30.4,25.6662475 L24.6642225,25.6662475 C24.3328516,25.6662475 24.0642225,25.3976183 24.0642225,25.0662475 C24.0642225,24.7348766 24.3328516,24.4662475 24.6642225,24.4662475 Z\" id=\"\u77E9\u5F62\u5907\u4EFD-77\" fill=\"#FF7575\"/>\n          <g id=\"1.Base\u57FA\u7840/1.icon\u56FE\u6807/11.editor/header-1\" transform=\"translate(5.000000, 11.000000)\" fill=\"#DDDDDD\">\n              <path d=\"M4.68266589,2.39258039 L1.51032474,7.44797324 L5.01586095,12.7216272 L4.05994646,13.3212428 L0.126424153,7.40475416 L3.68603474,1.72997946 L4.68266589,2.39258039 Z M11.3173341,12.6697762 L14.4896753,7.61438339 L10.984139,2.34072939 L11.9400535,1.7411138 L15.8735758,7.65760247 L12.3139653,13.3323772 L11.3173341,12.6697762 Z M8.86596086,1.31248434 L10.0376294,1.55020137 L7.19605832,13.6243456 L6.0243898,13.3866286 L8.86596086,1.31248434 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n          </g>\n      </g>\n  </g>\n</svg>";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
declare const module: Partial<IModuleConf>;
export default module;
