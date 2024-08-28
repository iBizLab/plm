var K = Object.defineProperty;
var U = (o, l, t) => l in o ? K(o, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[l] = t;
var B = (o, l, t) => (U(o, typeof l != "symbol" ? l + "" : l, t), t);
import { ControlController as F, Srfuf as H, calcItemVisibleByCounter as W, calcItemVisible as X, calcNavParams as J, hasSubRoute as $, CounterService as Q, registerControlProvider as Y } from "@ibiz-template/runtime";
import { route2routePath as D, routePath2string as N, useControlController as Z, useNamespace as tt, getNestedRoutePath as A, onRouteChange as et, withInstall as st } from "@ibiz-template/vue3-util";
import { ref as V, computed as at, watch as M, watchEffect as ot, onUnmounted as O, defineComponent as rt, reactive as it, createVNode as d, resolveComponent as w } from "vue";
import { useRouter as nt, useRoute as T } from "vue-router";
class lt extends F {
  constructor() {
    super(...arguments);
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    B(this, "router");
    /**
     * 存储key前缀
     *
     * @author zhanghengfeng
     * @date 2024-05-22 18:05:13
     * @type {string}
     */
    B(this, "storagePrefix", "DR_BAR_SELECTED_ITEM");
    /**
     * 计数器对象
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:16
     * @type {AppCounter}
     */
    B(this, "counter");
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
    return this.getData()[0].srfuf !== H.UPDATE;
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
          const i = W(r, this.counter);
          i !== void 0 && (r.visible = i);
        }), a.visible = a.children.some((r) => r.visible);
      else {
        const r = W(a, this.counter);
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
    const a = (r = this.getData()) != null && r.length ? this.getData()[0] : void 0, e = await X(
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
          dataAccessAction: u,
          testAppDELogicId: n,
          testScriptCode: C,
          counterId: h,
          counterMode: f
        } = r[0] || {};
        a.push({
          tag: e.id,
          caption: i,
          sysImage: e.sysImage,
          visible: !1,
          enableMode: c,
          dataAccessAction: u,
          testAppDELogicId: n,
          testScriptCode: C,
          counterId: h,
          counterMode: f
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
      const c = D(this.router.currentRoute.value);
      if (this.routeDepth && c.pathNodes[this.routeDepth - 2]) {
        c.pathNodes = c.pathNodes.slice(0, this.routeDepth - 1);
        const n = N(c).split("/");
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
    }, { resultContext: i, resultParams: c } = J(e, r), u = Object.assign(this.context.clone(), i), n = { ...this.params, ...c };
    return { context: u, params: n };
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
      const i = D(this.router.currentRoute.value);
      if (this.routeDepth && i.pathNodes[this.routeDepth - 2]) {
        i.pathNodes = i.pathNodes.slice(0, this.routeDepth - 1);
        const u = N(i).split("/");
        if (u && u.length) {
          const n = localStorage.getItem(
            "".concat(this.storagePrefix, "_").concat(a, "_").concat(u[u.length - 1])
          );
          n && (s = n);
        }
      }
    }
    const e = D(this.router.currentRoute.value);
    if (this.routeDepth && e.pathNodes[this.routeDepth - 1]) {
      const i = e.pathNodes[this.routeDepth - 1];
      i && i.srfnav && (s = i.srfnav);
    }
    if (s) {
      if (this.state.selectedItem && this.state.selectedItem === s)
        return;
      const i = !!this.routeDepth && $(this.routeDepth), { visible: c, defaultVisibleItem: u } = this.getItemVisibleState(s);
      !c && u ? (s = u.tag, this.handleSelectChange(s)) : this.handleSelectChange(s, i), this.state.defaultItem = s;
    }
  }
  /**
   * 路由变更处理回调
   * @param {{ srfnav?: string; path: string }} info 当前系统的路由的从一级到最后一级的所有路径。
   */
  async onRouterChange(t) {
    if (this.state.srfnav !== t.srfnav && t.srfnav) {
      this.state.srfnav = t.srfnav;
      const s = !!this.routeDepth && $(this.routeDepth);
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
      const a = D(this.router.currentRoute.value);
      this.routeDepth && (a.pathNodes = a.pathNodes.slice(0, this.routeDepth - 1));
      const e = N(a);
      this.counter = await Q.getCounterByRef(
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
const y = "ibiz";
function ct(o, l, t) {
  let s = null, a = 0;
  const e = V([]), r = V([]), i = at(() => o.state.drBarItems.find(
    (h) => h.tag === o.state.defaultItem
  )), c = (h, f = {}) => {
    let m = 0;
    const p = document.createElement("div"), v = document.createElement("div");
    return v.innerHTML = h, Object.assign(v.style, f), Object.assign(p.style, {
      width: "auto",
      position: "absolute",
      left: "-9999px"
    }), p.appendChild(v), document.body.appendChild(p), m = p.offsetWidth, document.body.removeChild(p), m;
  }, u = () => {
    const { drBarItems: h, showMore: f, defaultItem: m } = o.state;
    if (!l.value || !f || h.length === 0) {
      e.value = h, r.value = [];
      return;
    }
    let p = !1;
    const g = l.value.$el.offsetWidth;
    let I = 0;
    e.value = [], r.value = [], h.forEach((b, z) => {
      if (b.visible) {
        const _ = b.caption || "", P = b.counterId ? t[b.counterId] : null, x = "var(--".concat(y, "-font-size-header-6)");
        if (P != null && !(!P && P !== 0) && !(b.counterMode === 1 && P <= 0)) {
          const k = {
            marginLeft: "var(--".concat(y, "-spacing-tight)"),
            padding: "0 var(--".concat(y, "-spacing-extra-tight)"),
            minWidth: "20px",
            fontSize: "var(--".concat(y, "-font-size-small)")
          }, q = c(String(P), k);
          I += q;
        }
        const L = c(_, {
          padding: z === 0 ? "0 20px 0 0" : "0 20px",
          fontSize: x
        });
        I += L;
        const G = {
          padding: "0 0 0 20px",
          fontSize: x
        };
        let S = c("^", {
          minWidth: "16px",
          fontSize: x
        });
        S = S > 16 ? S : 16;
        let R = "更多";
        !p && i.value && (R = i.value.caption || R);
        const j = c("".concat(R, " "), G) + S;
        z === h.length - 1 && I < g ? e.value.push(b) : I + j > g ? r.value.push(b) : (e.value.push(b), p || (p = b.tag === m));
      }
    });
  }, n = () => {
    if (window.ResizeObserver) {
      const h = l.value.$el;
      h && (s = new ResizeObserver((f) => {
        const { width: m } = f[0].contentRect;
        m !== a && (u(), a = m);
      }), s.observe(h));
    }
  };
  M(
    () => o.state.drBarItems,
    () => {
      u();
    },
    { deep: !0 }
  ), M(
    () => o.state.defaultItem,
    () => {
      u();
    }
  );
  const C = ot(() => {
    l.value && n();
  });
  return O(() => {
    s && s.disconnect(), C();
  }), { visibleItems: e, moreItems: r };
}
function ht(o) {
  const l = o.view.modal.routeDepth;
  if (l) {
    const t = T();
    let s;
    et(({
      currentKey: a,
      fullPath: e
    }) => {
      if (!s)
        s = a;
      else if (s === a) {
        const r = D(t), {
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
const E = /* @__PURE__ */ rt({
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
    const o = Z((...n) => new lt(...n)), l = tt("control-".concat(o.model.controlType.toLowerCase(), "-ex")), t = nt(), s = V(), a = it({}), {
      visibleItems: e,
      moreItems: r
    } = ct(o, s, a), i = (n) => {
      Object.assign(a, n);
    };
    o.evt.on("onCreated", () => {
      o.counter && o.counter.onChange(i, !0);
    }), O(() => {
      var n;
      (n = o.counter) == null || n.offChange(i);
    }), o.setRouter(t);
    const c = T();
    return ht(o), M(() => t.currentRoute.value, (n, C) => {
      var h, f;
      if (o.routeDepth && o.navPos) {
        const {
          pathNodes: m
        } = D(n), {
          pathNodes: p
        } = D(C), v = A(C, o.routeDepth + 1), g = A(c, o.routeDepth + 1);
        if (v === g)
          return;
        const I = ((h = m[o.routeDepth + 1]) == null ? void 0 : h.viewName) === "route-modal" || ((f = p[o.routeDepth + 1]) == null ? void 0 : f.viewName) === "route-modal";
        g && !I && o.navPos.openView({
          key: g,
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
        var f, m, p;
        if (!o.state.drBarItems.find((v) => v.tag === n))
          return;
        const h = (f = o.model.dedrctrlItems) == null ? void 0 : f.find((v) => v.dedrbarGroupId === n);
        if (h) {
          const g = (m = D(c).pathNodes[o.routeDepth]) == null ? void 0 : m.viewName, I = (p = h.appViewId) == null ? void 0 : p.split(".")[1];
          if (I && g && I === g)
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
    } = this.c.state, s = this.moreItems.find((e) => e.tag === l) || {}, a = d(w("el-dropdown"), {
      trigger: "click",
      class: this.ns.b("more-dropdown"),
      "popper-class": this.ns.b("more-dropdown-popper")
    }, {
      default: () => d("div", {
        class: this.ns.be("more-dropdown", "link"),
        onClick: (e) => e.stopPropagation()
      }, [d("span", null, [s.caption ? "".concat(s.caption, " ") : "更多 "]), d("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em"
      }, [d("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [d("path", {
        d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
      }, null)])])]),
      dropdown: () => d(w("el-dropdown-menu"), null, {
        default: () => this.moreItems.map((e) => d(w("el-dropdown-item"), {
          class: [l === e.tag ? this.ns.be("more-dropdown-popper", "current") : ""],
          onClick: () => this.handleSelect(e.tag)
        }, {
          default: () => [d("span", {
            class: [this.ns.be("more-dropdown-popper", "label")]
          }, [d("span", {
            class: this.ns.bem("more-dropdown-popper", "label", "text"),
            title: e.caption || ""
          }, [e.caption || ""]), e.counterId && this.counterData[e.counterId] != null && d(w("iBizBadge"), {
            class: this.ns.bem("more-dropdown-popper", "label", "counter"),
            value: this.counterData[e.counterId],
            counterMode: e.counterMode
          }, null)])]
        }))
      })
    });
    return d(w("iBizControlBase"), {
      ref: "controlRef",
      controller: this.c,
      class: [this.ns.b(), this.ns.is("more", this.c.state.showMore), this.moreItems.length > 0 ? this.ns.b("more") : ""]
    }, {
      default: () => [o && t && !!l && d(w("el-tabs"), {
        modelValue: l,
        onTabClick: (e, r) => {
          this.handleSelect(e.paneName);
        }
      }, {
        default: () => [this.visibleItems.map((e) => {
          if (e.visible)
            return d(w("el-tab-pane"), {
              label: e.caption,
              name: e.tag
            }, {
              label: () => d("span", {
                class: this.ns.b("pane-label")
              }, [d("span", {
                class: this.ns.be("pane-label", "text")
              }, [e.caption || ""]), e.counterId && this.counterData[e.counterId] != null && d(w("iBizBadge"), {
                class: this.ns.be("pane-label", "counter"),
                value: this.counterData[e.counterId],
                counterMode: e.counterMode
              }, null)])
            });
        }), this.moreItems.length > 0 && d(w("el-tab-pane"), {
          label: "",
          name: s.tag
        }, {
          label: () => a
        })]
      })]
    });
  }
});
class dt {
  constructor() {
    B(this, "component", "IBizDRBarExControl");
  }
}
const ut = st(E, function(o) {
  o.component(E.name, E), Y("CUSTOM_DRBAR_EX", () => new dt());
}), bt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(ut);
  }
};
export {
  lt as DRBarExController,
  ut as IBizDRBarExControl,
  bt as default
};
