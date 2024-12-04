import Editor from '../editor/index';
import Menu from './menu-constructors/Menu';
declare class Menus {
    editor: Editor;
    menuList: Menu[];
    constructorList: Record<string, any>;
    constructor(editor: Editor);
    /**
     * 自定义添加菜单
     * @param key 菜单 key ，和 editor.menusConfig.menus 对应
     * @param Menu 菜单构造函数
     */
    extend(key: string, Menu: any): void;
    init(): void;
    /**
     * 创建 menu 实例，并放到 menuList 中
     * @param menuKey 菜单 key ，和 editor.menusConfig.menus 对应
     * @param MenuConstructor 菜单构造函数
     */
    private _initMenuList;
    private _addToToolbar;
    /**
     * 获取菜单对象
     * @param 菜单名称 小写
     * @return Menus 菜单对象
     */
    menuFind(key: string): Menu;
}
export default Menus;
