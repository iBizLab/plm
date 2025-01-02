import { EventBase, IChartEvent } from '@ibiz-template/runtime';
/**
 * 图表部件事件
 *
 * @author lxm
 * @date 2022-08-30 16:08:43
 * @export
 * @interface IMDControlEvent
 */
export interface IChartGridEvent extends IChartEvent {
    /**
     * @description 导出canvas图片
     * @type {{
     *     event: EventBase;
     *     emitArgs: undefined;
     *   }}
     * @memberof IChartGridEvent
     */
    onExportCanvas: {
        event: EventBase;
        emitArgs: undefined;
    };
}
