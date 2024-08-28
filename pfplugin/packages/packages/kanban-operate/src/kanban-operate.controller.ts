import {
  PanelController,
  PanelItemController,
  ViewLayoutPanelController,
} from '@ibiz-template/runtime';
import {IPanelButton} from '@ibiz/model-core';

/**
 * 面板按钮控制器
 *
 * @export
 * @class KanbanOperateController
 * @extends {PanelItemController<IPanelButton>}
 */
export class KanbanOperateController extends PanelItemController<IPanelButton> {
  /**
   * 面板控制器
   *
   * @type {ViewLayoutPanelController}
   * @memberof KanbanOperateController
   */
  declare panel: ViewLayoutPanelController;

  /**
   * 行为模型
   */
  public actionModel: IData = {};

  /**
   * 父容器数据对象数据
   * @author lxm
   * @date 2023-07-15 01:33:58
   * @readonly
   * @type {IData}
   */
  get data(): IData {
    return this.panel.inputData || this.dataParent.data;
  }

  get uaState(): IData {
    const states =
      (this.panel as any).ctx.controllersMap.get('kanban').state.uaState || {};
    if (states) {
      return states[this.data.srfkey];
    }
    return {};
  }

  /**
   * Creates an instance of KanbanOperateController.
   * @param {IPanelButton} model
   * @param {PanelController} panel
   * @param {PanelItemController} [parent]
   * @memberof KanbanOperateController
   */
  constructor(
    model: IPanelButton,
    panel: PanelController,
    parent?: PanelItemController,
  ) {
    super(model, panel, parent);
  }

  /**
   * 初始化
   *
   * @return {*}  {Promise<void>}
   * @memberof KanbanOperateController
   */
  async onInit(): Promise<void> {
    await super.onInit();
    const view = this.panel.view;
    const tag = (this.model as any).userTag || 'OPERATE';
    const kanban = view.getController('kanban');
    if (kanban) {
      const {dedataViewItems = []} = kanban.model as IData;
      this.actionModel = dedataViewItems.find((item: IData) =>
        Object.is(item.name, tag),
      );
    }
  }
}
