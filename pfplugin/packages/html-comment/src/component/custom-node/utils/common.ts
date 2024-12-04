import { PropType } from 'vue';

/**
 * 获取自定义节点通用props
 *
 * @export
 * @returns {*}
 */
export function getCustomNodeProps(): IParams {
  return {
    data: { type: Object as PropType<IData>, required: true },
    change: { type: Function, required: true },
    nodeKey: { type: String, default: '' },
    isFocus: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
  };
}

/**
 * 销毁自定义元素销毁后未销毁的节点及元素。
 * @param key - 要检索的Vue.js应用程序关联的键。
 * @export
 * @returns {*}
 */
export const removeNode = (key: string): void => {
  const elements =
    (document.getElementsByClassName(key) as unknown as Array<Element>) || [];
  elements.forEach(element => {
    element.remove();
  });
};
