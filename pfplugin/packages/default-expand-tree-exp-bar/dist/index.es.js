var f = Object.defineProperty;
var p = (r, n, t) => n in r ? f(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var l = (r, n, t) => (p(r, typeof n != "symbol" ? n + "" : n, t), t);
import { ExpBarControlController as u, registerControlProvider as x } from "@ibiz-template/runtime";
import { RuntimeModelError as v, RuntimeError as m } from "@ibiz-template/core";
import { notNilEmpty as c } from "qx-util";
class C extends u {
  constructor() {
    super(...arguments);
    l(this, "defaultExpandedKeys");
    /**
     * 默认展开
     * 解析控件动态参数DEFAULT_EXPAND后的字符串
     * @type {string}
     * @memberof DefaultExpandTreeExpBarController
     */
    l(this, "defaultExpand");
    /**
     * 导航栈
     * - 重写防止主项目核心包没有更新导致报错
     * @type {IData[]}
     * @memberof DefaultExpandTreeExpBarController
     */
    l(this, "navStack", []);
    /**
     * 导航栏key
     *
     * @author zk
     * @date 2023-07-10 03:07:11
     * @memberof TreeExpBarController
     */
    l(this, "navKeyName", "_id");
    /**
     * 有导航视图的节点模型标识集合
     * @author lxm
     * @date 2023-08-10 06:33:14
     * @type {string[]}
     */
    l(this, "navNodeModelIds", []);
  }
  get xDataController() {
    const t = this.view.getController(this.model.xdataControlName);
    if (!t)
      throw new v(
        this.model,
        "无法获取多数据部件[".concat(this.model.xdataControlName, "]控制器")
      );
    return t;
  }
  /**
   * 组件挂载
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof DefaultExpandTreeExpBarController
   */
  async onMounted() {
    super.onMounted(), this.xDataController && this.xDataController.evt.on("onAfterRefreshParent", (t) => {
      this.navDataByStack();
    });
  }
  /**
   * 根据栈数据导航数据
   *
   * @memberof DefaultExpandTreeExpBarController
   */
  navDataByStack() {
    const { items: t } = this.xDataController.state, e = this.navStack.find(
      (a) => t.find((s) => a[this.navKeyName] === s[this.navKeyName])
    );
    if (e) {
      const a = t.find(
        (s) => e[this.navKeyName] === s[this.navKeyName]
      );
      this.xDataController.setActive(a), this.xDataController.setSelection([a]);
    } else {
      const a = t.find((s) => !this.xDataController.model.rootVisible && this.xDataController.state.rootNodes.includes(s) ? !1 : this.defaultExpand ? s._id === this.defaultExpand : this.state.noNeedNavView ? !0 : this.navNodeModelIds.includes(s._nodeId));
      a ? (this.xDataController.setActive(a), this.xDataController.setSelection([a])) : (this.navStack = [], this.xDataController.setSelection([]), this.state.srfnav = "", this._evt.emit("onNavViewChange", {
        navViewMsg: {
          key: "",
          isCache: this.isCache
        }
      }));
    }
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
    return e && e.forEach((s) => {
      s.id === t && (a = s);
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
    const s = t._id, d = t._deData || t, o = this.getNodeModel(t._nodeId);
    if (!o)
      throw new m("找不到".concat(t._nodeId, "的节点模型"));
    const i = this.prepareParams(o, d, e, a);
    return i.context.currentSrfNav = s, this.state.srfnav = s, {
      key: s,
      viewId: o.navAppViewId,
      isCache: this.isCache,
      ...i
    };
  }
  navByFirstItem() {
    const t = this.xDataController.state.items.find((e) => !this.xDataController.model.rootVisible && this.xDataController.state.rootNodes.includes(e) ? !1 : this.defaultExpand ? e._id === this.defaultExpand : this.state.noNeedNavView ? !0 : this.navNodeModelIds.includes(e._nodeId));
    t && (this.xDataController.setActive(t), this.xDataController.setSelection([t]));
  }
  async onCreated() {
    var e, a;
    if (await super.onCreated(), (a = (e = this.model.controlParam) == null ? void 0 : e.ctrlParams) != null && a.DEFAULT_EXPAND) {
      const s = this.model.controlParam.ctrlParams.DEFAULT_EXPAND;
      this.defaultExpand = this.stringFill(s, this.context, this.params);
    }
    const { detreeNodes: t } = this.XDataModel;
    t == null || t.forEach((s) => {
      s.navAppViewId && this.navNodeModelIds.push(s.id);
    }), this.defaultExpand && (this.defaultExpandedKeys = this.calcExpandKeys(this.defaultExpand, !1)), this.state.srfnav && (this.defaultExpandedKeys = this.calcExpandKeys(this.state.srfnav));
  }
  calcExpandKeys(t, e = !0) {
    const a = [];
    return t.split(":").forEach((s, d) => {
      d === 0 ? a.push(s) : a.push("".concat(a[d - 1], ":").concat(s));
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
    const s = /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g, d = /\$\{param.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;
    if (c(t)) {
      if (c(e)) {
        const o = t.match(s);
        o == null || o.forEach((i) => {
          const h = i.slice(10, i.length - 1);
          t = t.replace("${context.".concat(h, "}"), e[h] || "");
        });
      }
      if (c(a)) {
        const o = t.match(d);
        o == null || o.forEach((i) => {
          const h = i.slice(8, i.length - 1);
          t = t.replace("${param.".concat(h, "}"), a[h] || "");
        });
      }
    }
    return t;
  }
}
class E {
  constructor() {
    l(this, "component", "IBizTreeExpBarControl");
  }
  createController(n, t, e, a) {
    return new C(n, t, e, a);
  }
}
const D = () => {
  x(
    "CUSTOM_TREEEXPBAR_DEFAULT_EXPAND",
    () => new E()
  );
}, _ = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(r) {
    D();
  }
};
export {
  _ as default,
  D as register
};
