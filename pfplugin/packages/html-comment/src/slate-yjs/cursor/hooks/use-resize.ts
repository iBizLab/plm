/* eslint-disable no-shadow */
import { onMounted, onUnmounted, Ref } from 'vue';

/**
 * 监听元素大小变化
 *
 * @export
 * @template T
 * @param {(Ref<T | null>)} ref
 * @param {() => void} onResize
 */
export function useOnResize<T extends HTMLElement>(
  ref: Ref<T | undefined>,
  onResize: () => void,
): void {
  let resizeObserver: ResizeObserver | null = null;

  onMounted(() => {
    if (!ref.value) return;

    resizeObserver = new ResizeObserver(() => {
      onResize();
    });

    resizeObserver.observe(ref.value);
  });

  onUnmounted(() => {
    if (resizeObserver && ref.value) {
      resizeObserver.unobserve(ref.value);
    }
  });
}
