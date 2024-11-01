import {
  EditFormController,
  PanelItemController,
} from '@ibiz-template/runtime';

export class MobIdentifierTitleController extends PanelItemController {
  /**
   * 标题
   */
  public caption: string = this.panel.view.state.caption;

  /**
   * 编号
   */
  public titleNumnber: string = '';

  protected async onInit(): Promise<void> {
    super.onInit();
    this.panel.view.evt.on('onViewInfoChange', ({ caption: _caption }) => {
      // panel 下面直接拿form部件，然后拿里面用户标记指定的数据
      const tag: string = (this.model as IData).userTag || '';
      this.titleNumnber = '';
      const formc: EditFormController = (
        this.panel.view as IData
      ).ctx.controllersMap.get('form');
      if (formc) {
        this.titleNumnber = formc.state.data[tag];
      }
      this.caption = `${this.panel.view.state.caption}${
        this.titleNumnber ? `-${this.titleNumnber}` : ''
      }`;
      (ibiz.util as IParams)?.setBrowserTitle(this.caption);
    });
  }
}
