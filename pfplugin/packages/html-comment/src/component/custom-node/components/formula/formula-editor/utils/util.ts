import { HIGHLIGHT_COLOR } from './constants';

/**
 * 获取随机字符
 * @param prefix 前缀
 */
export function getRandom(prefix: string = ''): string {
  return prefix + Math.random().toString().slice(2);
}

/**
 * 替换 html 特殊字符
 * @param html html 字符串
 */
export function replaceHtmlSymbol(html: string) {
  return html
    .replace(/</gm, '&lt;')
    .replace(/>/gm, '&gt;')
    .replace(/"/gm, '&quot;')
    .replace(/(\r\n|\r|\n)/g, '<br/>');
}

export function replaceSpecialSymbol(value: string) {
  return value
    .replace(/&lt;/gm, '<')
    .replace(/&gt;/gm, '>')
    .replace(/&quot;/gm, '"');
}

/**
 * 遍历类数组
 * @param fakeArr 类数组
 * @param fn 回调函数
 */
export function arrForEach<
  T extends { length: number; [key: number]: unknown },
>(
  fakeArr: T,
  fn: (this: T, item: T[number], index: number) => boolean | unknown,
): void {
  let i;
  let item;
  let result;
  const length = fakeArr.length || 0;
  for (i = 0; i < length; i++) {
    item = fakeArr[i];
    result = fn.call(fakeArr, item, i);
    if (result === false) {
      break;
    }
  }
}

/**
 * 节流
 * @param fn 函数
 * @param interval 间隔时间，毫秒
 */

export function throttle<C, T extends unknown[]>(
  fn: (this: C, ...args: T) => unknown,
  interval: number = 200,
) {
  let flag = false;
  return function (this: C, ...args: T): void {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        fn.call(this, ...args); // this 报语法错误，先用 null
      }, interval);
    }
  };
}

/**
 * 防抖
 * @param fn 函数
 * @param delay 间隔时间，毫秒
 */
export function debounce<C, T extends unknown[]>(
  fn: (this: C, ...args: T) => void,
  delay: number = 200,
): (this: C, ...args: T) => void {
  let lastFn = 0;
  return function (...args: T) {
    if (lastFn) {
      window.clearTimeout(lastFn);
    }
    lastFn = window.setTimeout(() => {
      lastFn = 0;
      fn.call(this, ...args); // this 报语法错误，先用 null
    }, delay);
  };
}

/**
 * isFunction 是否是函数
 * @param fn 函数
 */
export function isFunction(fn: any): fn is Function {
  return typeof fn === 'function';
}

/**
 * 引用与非引用值 深拷贝方法
 * @param data
 */
export function deepClone<T>(data: T): T {
  if (typeof data !== 'object' || typeof data === 'function' || data === null) {
    return data;
  }

  const item: any = Array.isArray(data) ? [] : {};

  for (const i in data) {
    if (Object.prototype.hasOwnProperty.call(data, i)) {
      item[i] = deepClone(data[i]);
    }
  }

  return item;
}

/**
 * 将可遍历的对象转换为数组
 * @param data 可遍历的对象
 */
export function toArray<T>(data: T) {
  return Array.prototype.slice.call(data);
}

/**
 * 唯一id生成
 * @param length 随机数长度
 */
export function getRandomCode() {
  return Math.random().toString(36).slice(-5);
}

/**
 * 输入非数字或字母自动创建空元素
 * @param str 字符串
 */
export function createEmptyElem(str: string): string {
  return `<span style="color: ${HIGHLIGHT_COLOR}">${
    str !== ' ' ? str : '&nbsp;'
  }</span>`;
}

/**
 * 字符串转高亮HTML字符串
 * @param str 字符串
 */
export function hightlightHtml(str: string): string {
  const reg = /[A-Za-z0-9]+/g;
  str = str.replace(
    reg,
    (target: string) =>
      `<span style="color: ${HIGHLIGHT_COLOR}">${target}</span>`,
  );
  return `<span>${str}</span>&nbsp;`;
}

/**
 * 创建菜单按钮
 * @param icon 字符串
 */
export function createMemuElem(icon: string) {
  return `<div class="me-menu-item"><span class="icon">$${icon}$</span></div>`;
}

/**
 * 是否空文本
 * @param str 字符串
 */
export function isNullText(str: string): boolean {
  str = str.replace(/(&nbsp;)|( )/g, '');
  return !str;
}

/**
 * @description 工具函数集合
 */
class NavUA {
  public _ua: string;

  // 是否为旧版 Edge
  public isOldEdge: boolean;

  // 是否为 Firefox
  public isFirefox: boolean;

  constructor() {
    this._ua = navigator.userAgent;

    const math = this._ua.match(/(Edge?)\/(\d+)/);
    this.isOldEdge = !!(math && math[1] === 'Edge' && parseInt(math[2]) < 19);

    this.isFirefox = !!(
      /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua)
    );
  }

  /** 是否为 IE */
  public isIE() {
    return 'ActiveXObject' in window;
  }

  /** 是否为 webkit */
  public isWebkit() {
    return /webkit/i.test(this._ua);
  }
}

/* 和 UA 相关的属性 */
export const UA = new NavUA();
