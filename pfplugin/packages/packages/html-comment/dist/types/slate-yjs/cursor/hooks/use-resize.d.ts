import { Ref } from 'vue';
/**
 * 监听元素大小变化
 *
 * @export
 * @template T
 * @param {(Ref<T | null>)} ref
 * @param {() => void} onResize
 */
export declare function useOnResize<T extends HTMLElement>(ref: Ref<T | undefined>, onResize: () => void): void;
