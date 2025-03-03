import {
  EditFormController,
  PanelItemController,
  ViewCallTag,
} from '@ibiz-template/runtime';
import {
  IdentifierTitleState,
  IIdentifierTitleState,
} from './identifier-title-state';

export class IdentifierTitleController extends PanelItemController {
  /**
   * 面板项状态
   *
   * @type {IIdentifierTitleState}
   */
  declare state: IIdentifierTitleState;

  /**
   * 编号
   */
  public titleNumnber: string = '';

  protected async onInit(): Promise<void> {
    super.onInit();
    this.state.caption = this.panel.view.state.caption;
    this.panel.view.evt.on(
      'onViewInfoChange',
      ({ caption: _caption, dataInfo }) => {
        // panel 下面直接拿form部件，然后拿里面用户标记指定的数据
        const tag: string = (this.model as IData).userTag || '';
        this.titleNumnber = '';
        const formc: EditFormController = (
          this.panel.view as IData
        ).ctx.controllersMap.get('form');
        if (formc) {
          this.titleNumnber = formc.state.data[tag];
        }
        this.state.caption = `${this.panel.view.state.caption}${
          this.titleNumnber ? `-${this.titleNumnber}` : ''
        }`;
        (ibiz.util as IParams)?.setBrowserTitle(this.state.caption);
      },
    );
  }

  /**
   * 创建面板状态对象
   *
   * @protected
   * @return {*}  {IdentifierTitleState}
   */
  protected createState(): IdentifierTitleState {
    return new IdentifierTitleState(this.parent?.state);
  }

  /**
   * 获取分享路径
   *
   * @return {*}  {boolean}
   * @memberof IdentifierTitleController
   */
  async copyPath(): Promise<boolean> {
    const result = await this.panel.view.call(ViewCallTag.COPY_PATH);
    return result.ok;
  }
}
