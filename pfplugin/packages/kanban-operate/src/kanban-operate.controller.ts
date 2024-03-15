import {
  PanelController,
  PanelItemController,
  PanelNotifyState,
  UIActionButtonState,
  ViewLayoutPanelController,
} from '@ibiz-template/runtime';
import { IPanelButton } from '@ibiz/model-core';
import { KanbanOperateState } from './kanban-operate.state';

/**
 * 面板按钮控制器
 *
 * @export
 * @class KanbanOperateController
 * @extends {PanelItemController<IPanelButton>}
 */
export class KanbanOperateController extends PanelItemController<IPanelButton> {
  declare state: KanbanOperateState;

  protected createState(): KanbanOperateState {
    return new KanbanOperateState(this.parent?.state);
  }

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
    return this.dataParent.data;
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
    this.state.uiActionState = this.createUIActionState();
  }

  /**
   * 初始化
   *
   * @return {*}  {Promise<void>}
   * @memberof KanbanOperateController
   */
  async onInit(): Promise<void> {
    await super.onInit();
    this.updateButtonState();
    const { view } = this.panel;
    const tag = (this.model as IParams).userTag || 'OPERATE';
    const kanban = view.getController('kanban');
    if (kanban) {
      const { dedataViewItems = [] } = kanban.model as IData;
      this.actionModel = dedataViewItems.find((item: IData) =>
        Object.is(item.name, tag),
      );
    }
  }

  /**
   * 创建界面行为状态对象
   *
   * @protected
   * @return {*}  {KanbanOperateState}
   * @memberof KanbanOperateController
   */
  protected createUIActionState(): UIActionButtonState {
    const { uiactionId, name } = this.model;
    return new UIActionButtonState(
      name!,
      this.panel.context.srfappid!,
      uiactionId,
    );
  }

  /**
   * 面板数据变更通知(由面板控制器调用)
   *
   * @param {string[]} names
   * @memberof KanbanOperateController
   */
  async dataChangeNotify(names: string[]): Promise<void> {
    await this.updateButtonState();
    super.dataChangeNotify(names);
  }

  /**
   * 面板状态变更通知
   *
   * @param {PanelNotifyState} _state
   * @memberof KanbanOperateController
   */
  async panelStateNotify(_state: PanelNotifyState): Promise<void> {
    await this.updateButtonState();
    super.panelStateNotify(_state);
  }

  /**
   * 更新按钮权限状态
   *
   * @memberof KanbanOperateController
   */
  async updateButtonState(): Promise<void> {
    await this.state.uiActionState.update(
      this.data,
      this.panel.model.appDataEntityId,
    );
  }

  /**
   * 行为点击
   *
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof KanbanOperateController
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onActionClick(event: MouseEvent): Promise<void> {
    // const { uiactionId, actionType } = this.model;
    // if (actionType === 'NONE') {
    //   return;
    // }
    // await UIActionUtil.execAndResolved(
    //   uiactionId!,
    //   {
    //     context: this.panel.context,
    //     params: this.panel.params,
    //     data: [this.data],
    //     view: this.panel.view,
    //     event,
    //     noWaitRoute: true,
    //   },
    //   this.model.appId,
    // );
  }

  calcItemVisible(data: IData): void {
    // 权限不显示时就一定不显示
    if (this.state.uiActionState.visible === false) {
      this.state.visible = false;
      return;
    }
    super.calcItemVisible(data);
  }

  calcItemDisabled(data: IData): void {
    // 权限不显示时就一定禁用
    if (this.state.uiActionState.disabled === true) {
      this.state.disabled = true;
      return;
    }
    super.calcItemDisabled(data);
  }
}
