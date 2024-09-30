import { IOverlayPopoverContainer } from '@ibiz-template/runtime';
/**
 * 创建飘窗容器
 *
 * @param {JSX.Element | string} component
 * @param {IParams} popoverParams
 * @param {IParams} nodeParams
 * @return {IOverlayPopoverContainer}  {IOverlayPopoverContainer}
 */
declare const onCreatePopover: (component: JSX.Element | string, popoverParams?: {}, nodeParams?: {}) => IOverlayPopoverContainer;
export { onCreatePopover };
