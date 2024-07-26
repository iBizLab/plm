var G = Object.defineProperty;
var j = (o, l, t) => l in o ? G(o, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[l] = t;
var P = (o, l, t) => (j(o, typeof l != "symbol" ? l + "" : l, t), t);
import { ControlController as k, Srfuf as q, calcItemVisibleByCounter as E, calcItemVisible as K, calcNavParams as U, hasSubRoute as V, CounterService as F, registerControlProvider as H } from "@ibiz-template/runtime";
import { route2routePath as w, routePath2string as x, useControlController as X, useNamespace as J, getNestedRoutePath as M, onRouteChange as Q, withInstall as Y } from "@ibiz-template/vue3-util";
import { ref as N, watch as z, watchEffect as Z, onUnmounted as W, defineComponent as tt, reactive as et, createVNode as h, resolveComponent as b, createTextVNode as st } from "vue";
import { useRouter as at, useRoute as A } from "vue-router";
class ot extends k {
  constructor() {
    super(...arguments);
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    P(this, "router");
    /**
     * 存储key前缀
     *
     * @author zhanghengfeng
     * @date 2024-05-22 18:05:13
     * @type {string}
     */
    P(this, "storagePrefix", "DR_BAR_SELECTED_ITEM");
    /**
     * 计数器对象
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:16
     * @type {AppCounter}
     */
    P(this, "counter");
  }
  /**
   * 导航占位控制器
   *
   * @readonly
   * @memberof DRBarExController
   */
  get navPos() {
    var t;
    return (t = this.view.layoutPanel) == null ? void 0 : t.panelItems.nav_pos;
  }
  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRBarExController
   */
  get form() {
    var t;
    return (t = this.view) == null ? void 0 : t.getController("form");
  }
  /**
   * 是否是新建
   * @author lxm
   * @date 2023-12-11 06:32:04
   * @readonly
   * @type {boolean}
   */
  get isCreate() {
    return this.getData()[0].srfuf !== q.UPDATE;
  }
  /**
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRBarExController
   */
  getData() {
    var t;
    return ((t = this.form) == null ? void 0 : t.getData()) || [{}];
  }
  /**
   * 设置 Router 对象
   *
   * @param {Router} router
   * @memberof DRTabController
   */
  setRouter(t) {
    this.router = t;
  }
  /**
   * 路由层级
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof DRBarExController
   */
  get routeDepth() {
    return this.view.modal.routeDepth;
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRBarExController
   */
  initState() {
    super.initState(), this.state.drBarItems = [], this.state.srfnav = "", this.state.hideEditItem = !!this.model.hideEditItem, this.state.showMore = !1;
  }
  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarExController
   */
  async onCreated() {
    await super.onCreated(), this.initDRBarItems(), await this.initCounter();
  }
  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    super.handleControlParams(), this.controlParams.showmore && (this.state.showMore = this.controlParams.showmore === "true");
  }
  /**
   * 通过计数器数据，计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:21
   * @param {IData} [_data]
   * @param {boolean} [reset=true]
   */
  calcItemStateByCounter(t, s = !0) {
    if (this.state.drBarItems.forEach((a) => {
      var e;
      if ((e = a.children) != null && e.length)
        a.children.forEach((r) => {
          const i = E(r, this.counter);
          i !== void 0 && (r.visible = i);
        }), a.visible = a.children.some((r) => r.visible);
      else {
        const r = E(a, this.counter);
        r !== void 0 && (a.visible = r);
      }
    }), this.state.selectedItem && s) {
      const { visible: a, defaultVisibleItem: e } = this.getItemVisibleState(
        this.state.selectedItem
      );
      !a && e && this.handleSelectChange(e.tag);
    }
  }
  /**
   * 获取对应项的显示状态
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:41
   * @param {string} key
   * @return {*}  {{
   *     visible: boolean;
   *     defaultVisibleItem?: IDRBarItemsState;
   *   }}
   */
  getItemVisibleState(t) {
    let s = !0, a;
    return this.state.drBarItems.forEach((e) => {
      if (e.children) {
        a || (a = e.children.find((i) => i.visible));
        const r = e.children.find((i) => i.tag === t);
        r && (s = !!r.visible);
      } else
        !a && e.visible && (a = e), e.tag === t && (s = !!e.visible);
    }), {
      visible: s,
      defaultVisibleItem: a
    };
  }
  /**
   * 计算关系界面组权限
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:54
   * @param {IDRBarItemsState} item
   * @return {*}  {Promise<void>}
   */
  async calcPermitted(t) {
    var r;
    let s = !0;
    const a = (r = this.getData()) != null && r.length ? this.getData()[0] : void 0, e = await K(
      t,
      this.context,
      this.params,
      this.model.appDataEntityId,
      this.model.appId,
      a
    );
    e !== void 0 && (s = e), t.visible = s;
  }
  /**
   * 计算是否展示
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:59
   * @return {*}  {Promise<void>}
   */
  async calcDrBarItemsState() {
    await Promise.all(
      this.state.drBarItems.map(async (t) => {
        var s;
        (s = t.children) != null && s.length ? (await Promise.all(
          t.children.map(async (a) => {
            await this.calcPermitted(a);
          })
        ), t.visible = t.children.some((a) => a.visible)) : await this.calcPermitted(t);
      })
    ), this.calcItemStateByCounter({}, !1), this.state.isCalculatedPermission = !0;
  }
  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarExController
   */
  async onMounted() {
    await super.onMounted(), this.form ? this.form.evt.on("onLoadSuccess", async (t) => {
      var a;
      const s = (a = t.data) == null ? void 0 : a[0];
      this.view.state.srfactiveviewdata = s, s && s.srfreadonly && (this.view.context.srfreadonly = !0), await this.calcDrBarItemsState(), this.doDefaultSelect();
    }) : await this.calcDrBarItemsState(), this.form.state.isLoaded && this.doDefaultSelect();
  }
  /**
   * 初始化关系项数据
   *
   * @memberof DRBarExController
   */
  initDRBarItems() {
    const { dedrctrlItems: t, dedrbarGroups: s } = this.model, a = [];
    s && t && s.forEach((e) => {
      const r = t.filter(
        (i) => i.dedrbarGroupId === e.id
      );
      if (r.length > 0) {
        let i = e.caption;
        e.capLanguageRes && (i = ibiz.i18n.t(
          e.capLanguageRes.lanResTag,
          e.caption
        ));
        const {
          enableMode: c,
          dataAccessAction: d,
          testAppDELogicId: n,
          testScriptCode: u,
          counterId: m,
          counterMode: p
        } = r[0] || {};
        a.push({
          tag: e.id,
          caption: i,
          sysImage: e.sysImage,
          visible: !1,
          enableMode: c,
          dataAccessAction: d,
          testAppDELogicId: n,
          testScriptCode: u,
          counterId: m,
          counterMode: p
        });
      }
    }), this.state.drBarItems = a;
  }
  /**
   * 处理选中改变
   *
   * @param {string} key
   * @memberof DRBarExController
   */
  handleSelectChange(t, s = !1) {
    var i;
    if (!this.state.drBarItems.find((c) => c.tag === t))
      return;
    const e = (i = this.model.dedrctrlItems) == null ? void 0 : i.find(
      (c) => c.dedrbarGroupId === t
    );
    e ? (this.setVisible("navPos"), this.openNavPosView(e, s)) : (this.setVisible("form"), this.routeDepth && this.router.push(this.state.drBarItems[0].fullPath)), this.state.selectedItem = t, this.state.defaultItem = t;
    const r = this.context.srfuserid;
    if (r) {
      const c = w(this.router.currentRoute.value);
      if (this.routeDepth && c.pathNodes[this.routeDepth - 2]) {
        c.pathNodes = c.pathNodes.slice(0, this.routeDepth - 1);
        const n = x(c).split("/");
        n && n.length && localStorage.setItem(
          "".concat(this.storagePrefix, "_").concat(r, "_").concat(n[n.length - 1]),
          t
        );
      }
    }
  }
  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRBarExController
   */
  setVisible(t) {
    var a;
    if (this.state.hideEditItem)
      return;
    const s = (a = this.view.layoutPanel) == null ? void 0 : a.panelItems.view_form;
    t === "form" ? (s && (s.state.visible = !0, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !1, this.navPos.state.keepAlive = !0)) : (s && (s.state.visible = !1, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !0, this.navPos.state.keepAlive = !0));
  }
  /**
   * 准备参数
   *
   * @param {IDEDRBarItem} drBarItem 关系项
   * @return {*}
   * @memberof DRBarExController
   */
  prepareParams(t) {
    const { navigateContexts: s, navigateParams: a } = t, e = {
      navContexts: s,
      navParams: a
    }, r = {
      context: this.context,
      params: this.params,
      data: this.getData()[0]
    }, { resultContext: i, resultParams: c } = U(e, r), d = Object.assign(this.context.clone(), i), n = { ...this.params, ...c };
    return { context: d, params: n };
  }
  /**
   * 打开导航占位视图
   *
   * @param {IDEDRBarItem} drBarItem 关系项
   * @memberof DRBarExController
   */
  async openNavPosView(t, s = !1) {
    var r;
    const { context: a, params: e } = this.prepareParams(t);
    Object.assign(a, {
      srfdefaulttoroutedepth: this.routeDepth + 1
    }), a.currentSrfNav = t.dedrbarGroupId, this.state.srfnav = t.dedrbarGroupId, (r = this.navPos) == null || r.openView({
      key: t.id,
      context: a,
      params: e,
      viewId: t.appViewId,
      isRoutePushed: s
    });
  }
  /**
   * 处理第一次的默认选中
   * @author lxm
   * @date 2023-12-11 05:38:30
   * @return {*}  {void}
   */
  doDefaultSelect() {
    var r;
    if (!this.state.hideEditItem && !this.state.srfnav)
      return;
    if (this.isCreate) {
      this.state.defaultItem = this.model.uniqueTag;
      return;
    }
    const { drBarItems: t } = this.state;
    let s = ((r = t[0].children) == null ? void 0 : r[0].tag) || t[0].tag;
    const a = this.context.srfuserid;
    if (a) {
      const i = w(this.router.currentRoute.value);
      if (this.routeDepth && i.pathNodes[this.routeDepth - 2]) {
        i.pathNodes = i.pathNodes.slice(0, this.routeDepth - 1);
        const d = x(i).split("/");
        if (d && d.length) {
          const n = localStorage.getItem(
            "".concat(this.storagePrefix, "_").concat(a, "_").concat(d[d.length - 1])
          );
          n && (s = n);
        }
      }
    }
    const e = w(this.router.currentRoute.value);
    if (this.routeDepth && e.pathNodes[this.routeDepth - 1]) {
      const i = e.pathNodes[this.routeDepth - 1];
      i && i.srfnav && (s = i.srfnav);
    }
    if (s) {
      const i = !!this.routeDepth && V(this.routeDepth), { visible: c, defaultVisibleItem: d } = this.getItemVisibleState(s);
      !c && d ? (s = d.tag, this.handleSelectChange(s)) : this.handleSelectChange(s, i), this.state.defaultItem = s;
    }
  }
  /**
   * 路由变更处理回调
   * @param {{ srfnav?: string; path: string }} info 当前系统的路由的从一级到最后一级的所有路径。
   */
  async onRouterChange(t) {
    if (this.state.srfnav !== t.srfnav && t.srfnav) {
      this.state.srfnav = t.srfnav;
      const s = !!this.routeDepth && V(this.routeDepth);
      this.handleSelectChange(t.srfnav, s), this.force(() => {
        this.state.defaultItem = t.srfnav;
      });
    }
  }
  /**
   * 初始化计数器
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:28
   * @protected
   * @return {*}  {Promise<void>}
   */
  async initCounter() {
    const { appCounterRefs: t } = this.model, s = t == null ? void 0 : t[0];
    if (s) {
      const a = w(this.router.currentRoute.value);
      this.routeDepth && (a.pathNodes = a.pathNodes.slice(0, this.routeDepth - 1));
      const e = x(a);
      this.counter = await F.getCounterByRef(
        s,
        this.context,
        e ? { srfcustomtag: e, ...this.params } : { ...this.params }
      ), this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this), this.counter.onChange(this.calcItemStateByCounter);
    }
  }
  /**
   * 监听组件销毁
   *
   * @author zhanghengfeng
   * @date 2024-05-20 11:05:37
   * @protected
   * @return {*}  {Promise<void>}
   */
  async onDestroyed() {
    await super.onDestroyed(), this.counter && (this.counter.offChange(this.calcItemStateByCounter), this.counter.destroy());
  }
}
const S = "ibiz";
function rt(o, l, t) {
  let s = null, a = 0;
  const e = N([]), r = N([]), i = (u, m = {}) => {
    let p = 0;
    const v = document.createElement("div"), g = document.createElement("div");
    return g.innerHTML = u, Object.assign(g.style, m), Object.assign(v.style, {
      width: "auto",
      position: "absolute",
      left: "-9999px"
    }), v.appendChild(g), document.body.appendChild(v), p = v.offsetWidth, document.body.removeChild(v), p;
  }, c = () => {
    const { drBarItems: u, showMore: m } = o.state;
    if (!l.value || !m || u.length === 0) {
      e.value = u, r.value = [];
      return;
    }
    const v = l.value.$el.offsetWidth;
    let g = 0;
    e.value = [], r.value = [], u.forEach((f, I) => {
      if (f.visible) {
        const D = f.caption || "", C = f.counterId ? t[f.counterId] : null, y = "var(--".concat(S, "-font-size-header-6)");
        if (C != null && !(!C && C !== 0) && !(f.counterMode === 1 && C <= 0)) {
          const L = {
            marginLeft: "var(--".concat(S, "-spacing-tight)"),
            padding: "0 var(--".concat(S, "-spacing-extra-tight)"),
            minWidth: "20px",
            fontSize: "var(--".concat(S, "-font-size-small)")
          }, T = i(String(C), L);
          g += T;
        }
        const O = i(D, {
          padding: I === 0 ? "0 20px 0 0" : "0 20px",
          fontSize: y
        });
        g += O;
        const $ = {
          padding: "0 0 0 20px",
          fontSize: y
        };
        let B = i("^", {
          minWidth: "16px",
          fontSize: y
        });
        B = B > 16 ? B : 16;
        const _ = i("更多 ", $) + B;
        g + _ > v ? r.value.push(f) : e.value.push(f);
      }
    });
  }, d = () => {
    if (window.ResizeObserver) {
      const u = l.value.$el;
      u && (s = new ResizeObserver((m) => {
        const { width: p } = m[0].contentRect;
        p !== a && (c(), a = p);
      }), s.observe(u));
    }
  };
  z(
    () => o.state.drBarItems,
    () => {
      c();
    },
    { deep: !0 }
  );
  const n = Z(() => {
    l.value && d();
  });
  return W(() => {
    s && s.disconnect(), n();
  }), { visibleItems: e, moreItems: r };
}
function it(o) {
  const l = o.view.modal.routeDepth;
  if (l) {
    const t = A();
    let s;
    Q(({
      currentKey: a,
      fullPath: e
    }) => {
      if (!s)
        s = a;
      else if (s === a) {
        const r = w(t), {
          srfnav: i
        } = r.pathNodes[l - 1];
        o.onRouterChange({
          srfnav: i || "",
          path: e
        });
      }
    }, l);
  }
}
const R = /* @__PURE__ */ tt({
  name: "IBizDRBarExControl",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    context: {
      type: Object,
      required: !0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    provider: {
      type: Object
    },
    srfnav: {
      type: String,
      required: !1
    },
    showMode: {
      type: String,
      default: "vertical"
    },
    hideEditItem: {
      type: Boolean,
      default: void 0
    }
  },
  setup() {
    const o = X((...n) => new ot(...n)), l = J("control-".concat(o.model.controlType.toLowerCase(), "-ex")), t = at(), s = N(), a = et({}), {
      visibleItems: e,
      moreItems: r
    } = rt(o, s, a), i = (n) => {
      Object.assign(a, n);
    };
    o.evt.on("onCreated", () => {
      o.counter && o.counter.onChange(i, !0);
    }), W(() => {
      var n;
      (n = o.counter) == null || n.offChange(i);
    }), o.setRouter(t);
    const c = A();
    return it(o), z(() => t.currentRoute.value, (n, u) => {
      var m, p;
      if (o.routeDepth && o.navPos) {
        const {
          pathNodes: v
        } = w(n), {
          pathNodes: g
        } = w(u), f = M(u, o.routeDepth + 1), I = M(c, o.routeDepth + 1);
        if (f === I)
          return;
        const D = ((m = v[o.routeDepth + 1]) == null ? void 0 : m.viewName) === "route-modal" || ((p = g[o.routeDepth + 1]) == null ? void 0 : p.viewName) === "route-modal";
        I && !D && o.navPos.openView({
          key: I,
          isRoutePushed: !1,
          context: o.context.clone(),
          params: {
            ...o.params
          }
        });
      }
    }), {
      c: o,
      ns: l,
      moreItems: r,
      controlRef: s,
      visibleItems: e,
      counterData: a,
      handleSelect: (n) => {
        var p, v, g;
        if (!o.state.drBarItems.find((f) => f.tag === n))
          return;
        const m = (p = o.model.dedrctrlItems) == null ? void 0 : p.find((f) => f.dedrbarGroupId === n);
        if (m) {
          const I = (v = w(c).pathNodes[o.routeDepth]) == null ? void 0 : v.viewName, D = (g = m.appViewId) == null ? void 0 : g.split(".")[1];
          if (D && I && D === I)
            return;
        }
        o.handleSelectChange(n);
      }
    };
  },
  render() {
    const {
      isCreated: o,
      defaultItem: l,
      isCalculatedPermission: t
    } = this.c.state, s = this.moreItems.find((e) => e.tag === l) || {}, a = h(b("el-dropdown"), {
      trigger: "click",
      class: this.ns.b("more-dropdown"),
      "popper-class": this.ns.b("more-dropdown-popper")
    }, {
      default: () => h("div", {
        class: this.ns.be("more-dropdown", "link"),
        onClick: (e) => e.stopPropagation()
      }, [h("span", null, [st("更多 ")]), h("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em"
      }, [h("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [h("path", {
        d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
      }, null)])])]),
      dropdown: () => h(b("el-dropdown-menu"), null, {
        default: () => this.moreItems.map((e) => h(b("el-dropdown-item"), {
          class: [l === e.tag ? this.ns.be("more-dropdown-popper", "current") : ""],
          onClick: () => this.handleSelect(e.tag)
        }, {
          default: () => [h("span", {
            class: [this.ns.be("more-dropdown-popper", "label")]
          }, [h("span", {
            class: this.ns.bem("more-dropdown-popper", "label", "text"),
            title: e.caption || ""
          }, [e.caption || ""]), e.counterId && this.counterData[e.counterId] != null && h(b("iBizBadge"), {
            class: this.ns.bem("more-dropdown-popper", "label", "counter"),
            value: this.counterData[e.counterId],
            counterMode: e.counterMode
          }, null)])]
        }))
      })
    });
    return h(b("iBizControlBase"), {
      ref: "controlRef",
      controller: this.c,
      class: [this.ns.b(), this.moreItems.length > 0 ? this.ns.b("more") : ""]
    }, {
      default: () => [o && t && !!l && h(b("el-tabs"), {
        modelValue: l,
        onTabClick: (e, r) => {
          this.handleSelect(e.paneName);
        }
      }, {
        default: () => [this.visibleItems.map((e) => {
          if (e.visible)
            return h(b("el-tab-pane"), {
              label: e.caption,
              name: e.tag
            }, {
              label: () => h("span", {
                class: this.ns.b("pane-label")
              }, [h("span", {
                class: this.ns.be("pane-label", "text")
              }, [e.caption || ""]), e.counterId && this.counterData[e.counterId] != null && h(b("iBizBadge"), {
                class: this.ns.be("pane-label", "counter"),
                value: this.counterData[e.counterId],
                counterMode: e.counterMode
              }, null)])
            });
        }), this.moreItems.length > 0 && h(b("el-tab-pane"), {
          label: "",
          name: s.tag
        }, {
          label: () => a
        })]
      })]
    });
  }
});
class nt {
  constructor() {
    P(this, "component", "IBizDRBarExControl");
  }
}
const lt = Y(
  R,
  function(o) {
    o.component(R.name, R), H("CUSTOM_DRBAR_EX", () => new nt());
  }
), mt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(lt);
  }
};
export {
  ot as DRBarExController,
  lt as IBizDRBarExControl,
  mt as default
};
