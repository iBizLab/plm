declare type FnType<T = void, V = unknown> = (...arg: V[]) => T;

declare interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MathJax: any;
}

declare type TimeoutId = ReturnType<typeof global.setTimeout>;

// 记录代理事件绑定
declare type listener = (e: Event) => void;
