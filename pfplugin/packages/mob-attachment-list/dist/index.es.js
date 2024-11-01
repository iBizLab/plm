var o = Object.defineProperty;
var s = (i, t, e) => t in i ? o(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var n = (i, t, e) => (s(i, typeof t != "symbol" ? t + "" : t, e), e);
import { MDCtrlController as l, registerControlProvider as c } from "@ibiz-template/runtime";
class d extends l {
  /**
   * 添加附件数据
   *
   * @param {IData[]} attach
   * @memberof AttachmentListController
   */
  async addAttachMent(t) {
    const { appDataEntityId: e } = this.model;
    if (e && (await ibiz.hub.getApp(this.context.srfappid).deService.exec(e, "create", this.context, t), await this.load({ isInitialLoad: !1 }), await this.evt.emit("onSaveSuccess", void 0), this.view.parentView)) {
      const r = this.view.parentView.getController("form");
      r && r.save({ silent: !0 });
    }
  }
}
class p {
  constructor() {
    n(this, "component", "IBizMDCtrlControl");
  }
  /**
   * 创建部件控制器
   *
   * @param {IDEMobMDCtrl} model
   * @param {IContext} context
   * @param {IParams} params
   * @param {CTX} ctx
   * @return {*}  {AttachmentListController}
   * @memberof AttachmentListProvider
   */
  createController(t, e, a, r) {
    return new d(t, e, a, r);
  }
}
function h() {
  c(
    "CUSTOM_MOB_ATTACHMENT_LIST",
    () => new p()
  );
}
const C = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    h();
  }
};
export {
  C as default,
  h as registerAttachmentProvider
};
