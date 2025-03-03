/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-destructuring */
import $, { DomElement } from '../../utils/dom-core';
import DropListMenu from './DropListMenu';
import { EMPTY_FN } from '../../utils/constants';

const RANDOM_NUM = 38;

export type DropListItem = {
  $elem: DomElement;
  value: string;
};

export type DropListConf = {
  title: string;
  list: DropListItem[];
  /** 下拉选项样式 list 列表形式（如“预设”菜单）  block 块状形式（如“操作符”菜单） 默认： block */
  type?: string;
  clickHandler?: (value: DropListItem['value']) => void;
  /** 下拉框宽度，默认232 */
  width?: number;
};

class DropList {
  private menu: DropListMenu;

  private conf: DropListConf;

  private $container: DomElement;

  private rendered: boolean;

  private _show: boolean;

  public hideTimeoutId: number;

  constructor(menu: DropListMenu, conf: DropListConf) {
    this.hideTimeoutId = 0;
    this.menu = menu;
    this.conf = conf;

    const {
      height: editorHeight,
      menuHeight,
      zIndex = 0,
    } = this.menu.editor.config;

    // 标题
    const $title = $(`<p>${conf.title}</p>`).addClass('me-dp-title');

    // 容器
    const $container = $('<div class="me-droplist"></div>')
      .append($title)
      .css('z-index', zIndex + 1);

    // 列表和类型
    const list = conf.list || [];
    const type = conf.type || 'block';
    // item 的点击事件
    const clickHandler = conf.clickHandler || EMPTY_FN;

    // 加入 DOM 并绑定事件
    const $list = $(
      `<ul class="${type === 'list' ? 'me-list' : 'me-block'}"></ul>`,
    )
      .css('max-height', `${editorHeight - menuHeight - RANDOM_NUM}px`)
      .css('overflow-y', 'auto');

    list.forEach(item => {
      const $elem = item.$elem;
      const value = item.value;
      const $li = $('<li class="me-item"></li>');

      if ($elem) {
        $li.append($elem);
        $list.append($li);
        $li.on('click', (e: Event) => {
          clickHandler(value);

          // 阻止冒泡
          e.stopPropagation();

          // item 点击之后，隐藏 list
          this.hideTimeoutId = window.setTimeout(() => {
            this.hide();
          });
        });
      }
    });
    $container.append($list);

    // 绑定隐藏事件
    $container.on('mouseleave', () => {
      this.hideTimeoutId = window.setTimeout(() => {
        this.hide();
      });
    });

    // 记录属性
    this.$container = $container;
    this.rendered = false;
    this._show = false;
  }

  /**
   * 显示 DropList
   */
  public show() {
    if (this.hideTimeoutId) {
      // 清除之前的定时隐藏
      clearTimeout(this.hideTimeoutId);
    }

    const menu = this.menu;
    const $menuELem = menu.$elem;
    const $container = this.$container;
    if (this._show) {
      return;
    }
    if (this.rendered) {
      // 显示
      $container.show();
    } else {
      // 加入 DOM 之前先定位位置
      // const { menuHeight } = this.menu.editor.config;
      const width = this.conf.width || 232;
      $container.css('width', `${width}px`);

      // 加入到 DOM
      $menuELem.append($container);
      this.rendered = true;

      // 渲染公式
      $menuELem.renderFormula();
    }

    // 修改属性
    this._show = true;
  }

  /**
   * 隐藏 DropList
   */
  public hide() {
    const $container = this.$container;
    if (!this._show) {
      return;
    }
    // 隐藏并需改属性
    $container.hide();
    this._show = false;
  }

  public get isShow() {
    return this._show;
  }
}

export default DropList;
