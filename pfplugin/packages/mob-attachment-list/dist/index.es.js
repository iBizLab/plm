var n = Object.defineProperty;
var s = (i, t, e) => t in i ? n(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (s(i, typeof t != "symbol" ? t + "" : t, e), e);
import { MDCtrlController as l, registerControlProvider as c } from "@ibiz-template/runtime";
class p extends l {
  /**
   * 添加附件数据
   *
   * @param {IData[]} attach
   * @memberof AttachmentListController
   */
  async addAttachMent(t) {
    const { appDataEntityId: e } = this.model;
    if (e && (await ibiz.hub.getApp(this.context.srfappid).deService.exec(e, "create", this.context, t), await this.load({ isInitialLoad: !1 }), this.view.parentView)) {
      const r = this.view.parentView.getController("form");
      r && r.autoSave();
    }
  }
}
class d {
  constructor() {
    a(this, "component", "IBizMDCtrlControl");
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
  createController(t, e, o, r) {
    return new p(t, e, o, r);
  }
}
function h() {
  c(
    "CUSTOM_MOB_ATTACHMENT_LIST",
    () => new d()
  );
}
const f = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    h();
  }
};
export {
  f as default,
  h as registerAttachmentProvider
};
