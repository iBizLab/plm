/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from '../editor/index';
import Menu from './menu-constructors/Menu';
import MenuConstructorList from './menu-list';

class Menus {
  public editor: Editor;

  public menuList: Menu[];

  public constructorList: Record<string, any>;

  constructor(editor: Editor) {
    this.editor = editor;
    this.menuList = [];
    this.constructorList = MenuConstructorList; // 所有菜单构造函数的列表
  }

  /**
   * 自定义添加菜单
   * @param key 菜单 key ，和 editor.menusConfig.menus 对应
   * @param Menu 菜单构造函数
   */
  public extend(key: string, Menu: any) {
    if (!Menu || typeof Menu !== 'function') return;
    this.constructorList[key] = Menu;
  }

  // 初始化菜单
  public init(): void {
    // 从用户配置的 menus 入手，看需要初始化哪些菜单
    const config = this.editor.menusConfig;

    config.menus.forEach(menuKey => {
      const MenuConstructor = this.constructorList[menuKey];
      this._initMenuList(menuKey, MenuConstructor);
    });

    // 渲染 DOM
    this._addToToolbar();
  }

  /**
   * 创建 menu 实例，并放到 menuList 中
   * @param menuKey 菜单 key ，和 editor.menusConfig.menus 对应
   * @param MenuConstructor 菜单构造函数
   */
  private _initMenuList(menuKey: string, MenuConstructor: any): void {
    // 必须是 class
    if (typeof MenuConstructor !== 'function') return;

    if (this.menuList.some(menu => menu.key === menuKey)) {
      console.warn(`Duplicate menu name:${menuKey}`);
    } else {
      const m = new MenuConstructor(this.editor);
      m.key = menuKey;
      this.menuList.push(m);
    }
  }

  // 添加到菜单栏
  private _addToToolbar(): void {
    const { editor } = this;
    const { $toolbarElem } = editor;
    $toolbarElem.addClass('clearfix');

    // 遍历添加到 DOM
    this.menuList.forEach(menu => {
      const { $elem } = menu;
      if ($elem) {
        $toolbarElem.append($elem);
      }
    });
  }

  /**
   * 获取菜单对象
   * @param 菜单名称 小写
   * @return Menus 菜单对象
   */
  public menuFind(key: string): Menu {
    const { menuList } = this;
    for (let i = 0, l = menuList.length; i < l; i++) {
      if (menuList[i].key === key) return menuList[i];
    }

    return menuList[0];
  }
}

export default Menus;
