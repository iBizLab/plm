var p = Object.defineProperty;
var f = (n, r, t) => r in n ? p(n, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[r] = t;
var d = (n, r, t) => (f(n, typeof r != "symbol" ? r + "" : r, t), t);
import { ExpBarControlController as u, registerControlProvider as x } from "@ibiz-template/runtime";
import { RuntimeModelError as E, RuntimeError as m } from "@ibiz-template/core";
import { notNilEmpty as h } from "qx-util";
class C extends u {
  constructor() {
    super(...arguments);
    d(this, "defaultExpandedKeys");
    /**
     * 默认展开
     * 解析控件动态参数DEFAULT_EXPAND后的字符串
     * @type {string}
     * @memberof DefaultExpandTreeExpBarController
     */
    d(this, "defaultExpand");
    /**
     * 导航栏key
     *
     * @author zk
     * @date 2023-07-10 03:07:11
     * @memberof TreeExpBarController
     */
    d(this, "navKeyName", "_id");
    /**
     * 有导航视图的节点模型标识集合
     * @author lxm
     * @date 2023-08-10 06:33:14
     * @type {string[]}
     */
    d(this, "navNodeModelIds", []);
  }
  get xDataController() {
    const t = this.view.getController(this.model.xdataControlName);
    if (!t)
      throw new E(
        this.model,
        "无法获取多数据部件[".concat(this.model.xdataControlName, "]控制器")
      );
    return t;
  }
  /**
   * 获取指定节点模型
   *
   * @param {string} nodeId
   * @return {*}  {(IDETreeNode | undefined)}
   * @memberof TreeExpBarController
   */
  getNodeModel(t) {
    const { detreeNodes: e } = this.XDataModel;
    let a;
    return e && e.forEach((o) => {
      o.id === t && (a = o);
    }), a;
  }
  /**
   * 多数据激活
   *
   * @author zk
   * @date 2023-05-29 03:05:36
   * @memberof ExpBarControlController
   */
  xDataActive(t) {
    const { nodeData: e } = t;
    super.xDataActive({ ...t, data: [e] });
  }
  /**
   *  获取导航视图
   *
   * @author zk
   * @date 2023-06-29 03:06:41
   * @param {IDETabViewPanel} tabViewPanel
   * @return {*}  {Promise<INavViewMsg>}
   * @memberof TabExpPanelController
   */
  getNavViewMsg(t, e, a) {
    const o = t._id, i = t._deData || t, s = this.getNodeModel(t._nodeId);
    if (!s)
      throw new m("找不到".concat(t._nodeId, "的节点模型"));
    const l = this.prepareParams(s, i, e, a);
    return l.context.currentSrfNav = o, this.state.srfnav = o, {
      key: o,
      viewId: s.navAppViewId,
      isCache: this.isCache,
      ...l
    };
  }
  navByFirstItem() {
    const t = this.xDataController.state.items.find((e) => !this.xDataController.model.rootVisible && this.xDataController.state.rootNodes.includes(e) ? !1 : this.defaultExpand ? e._id === this.defaultExpand : this.state.noNeedNavView ? !0 : this.navNodeModelIds.includes(e._nodeId));
    t && (this.xDataController.setActive(t), this.xDataController.setSelection([t]));
  }
  async onCreated() {
    var e, a;
    if (await super.onCreated(), (a = (e = this.model.controlParam) == null ? void 0 : e.ctrlParams) != null && a.DEFAULT_EXPAND) {
      const o = this.model.controlParam.ctrlParams.DEFAULT_EXPAND;
      this.defaultExpand = this.stringFill(o, this.context, this.params);
    }
    const { detreeNodes: t } = this.XDataModel;
    t == null || t.forEach((o) => {
      o.navAppViewId && this.navNodeModelIds.push(o.id);
    }), this.defaultExpand && (this.defaultExpandedKeys = this.calcExpandKeys(this.defaultExpand, !1)), this.state.srfnav && (this.defaultExpandedKeys = this.calcExpandKeys(this.state.srfnav));
  }
  calcExpandKeys(t, e = !0) {
    const a = [];
    return t.split(":").forEach((o, i) => {
      i === 0 ? a.push(o) : a.push("".concat(a[i - 1], ":").concat(o));
    }), e && a.pop(), a;
  }
  async onRouterChange(t) {
    if (this.state.srfnav !== t.srfnav) {
      const e = this.calcExpandKeys(t.srfnav);
      await this.xDataController.expandNodeByKey(e);
    }
    await super.onRouterChange(t);
  }
  /**
   * 是否显示部件头部
   * @author lxm
   * @date 2023-08-02 07:54:18
   * @protected
   * @return {*}  {boolean}
   */
  calcControlHeaderVisible() {
    const t = !!this.toolbarController;
    if (!t && this.layoutPanel) {
      const e = this.layoutPanel.panelItems.control_toolbar;
      e && (e.state.visible = !1);
    }
    return t || !!(this.model.showTitleBar && this.model.title);
  }
  /**
   * 填充字符串
   *
   * @protected
   * @param {string} str
   * @param {IContext} [context]
   * @param {IParams} [param]
   * @return {*}  {string}
   * @memberof DefaultExpandTreeExpBarController
   */
  stringFill(t, e, a) {
    const o = /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g, i = /\$\{param.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;
    if (h(t)) {
      if (h(e)) {
        const s = t.match(o);
        s == null || s.forEach((l) => {
          const c = l.slice(10, l.length - 1);
          t = t.replace("${context.".concat(c, "}"), e[c] || "");
        });
      }
      if (h(a)) {
        const s = t.match(i);
        s == null || s.forEach((l) => {
          const c = l.slice(8, l.length - 1);
          t = t.replace("${param.".concat(c, "}"), a[c] || "");
        });
      }
    }
    return t;
  }
}
class v {
  constructor() {
    d(this, "component", "IBizTreeExpBarControl");
  }
  createController(r, t, e, a) {
    return new C(r, t, e, a);
  }
}
const D = () => {
  x(
    "CUSTOM_TREEEXPBAR_DEFAULT_EXPAND",
    () => new v()
  );
}, _ = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(n) {
    D();
  }
};
export {
  _ as default,
  D as register
};
