import { h, VNode } from 'vue';
import { IModal, IOverlayPopoverContainer } from '@ibiz-template/runtime';

/**
 * 创建飘窗容器
 *
 * @param {JSX.Element | string} component
 * @param {IParams} popoverParams
 * @param {IParams} nodeParams
 * @return {IOverlayPopoverContainer}  {IOverlayPopoverContainer}
 */
const onCreatePopover = (
  component: JSX.Element | string,
  popoverParams = {},
  nodeParams = {},
): IOverlayPopoverContainer => {
  return ibiz.overlay.createPopover(
    (modal: IModal): VNode => {
      return h(component, { modal, ...nodeParams });
    },
    undefined,
    {
      width: 'auto',
      height: 'auto',
      noArrow: true,
      autoClose: true,
      placement: 'bottom-start',
      ...popoverParams,
    },
  );
};

export { onCreatePopover };
