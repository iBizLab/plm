export type Presets = {
    label: string;
    value: string;
}[];
export type MenuType = {
    menus: string[];
    presets: FnType<Presets, FnType<string, string>>;
    operators: string[];
    greekLetters: string[];
    inequation: string[];
    AdvancedMath: string[];
    LinearAlgebra: string[];
    arrows: string[];
    trigonometric: string[];
};
/** 编辑器按钮配置 */
export declare const menusConfig: MenuType;
