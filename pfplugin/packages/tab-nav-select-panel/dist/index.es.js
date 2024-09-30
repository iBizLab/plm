import './style.css';
var _ = Object.defineProperty;
var k = (a, h, e) => h in a ? _(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e;
var D = (a, h, e) => (k(a, typeof h != "symbol" ? h + "" : h, e), e);
import { ControlController as W, calcItemVisibleByCounter as $, calcItemVisible as K, Srfuf as F, hasSubRoute as N, calcNavParams as q, CounterService as U, ViewCallTag as R, registerControlProvider as G } from "@ibiz-template/runtime";
import { getNestedRoutePath as V, useControlController as H, useNamespace as M, route2routePath as J, withInstall as Q } from "@ibiz-template/vue3-util";
import { ref as x, watch as B, watchEffect as X, onUnmounted as L, defineComponent as Y, reactive as Z, createVNode as r, resolveComponent as v, createTextVNode as ee, h as te, isVNode as ae } from "vue";
import { useRouter as se, useRoute as ne } from "vue-router";
import { isNil as oe } from "ramda";
import { showTitle as ie } from "@ibiz-template/core";
class re extends W {
  constructor() {
    super(...arguments);
    /**
     * 嵌入视图控制器
     *
     * @type {IViewController}
     * @memberof TabNavSelectPanelController
     */
    D(this, "embedView");
    /**
     * 计数器对象
     *
     * @type {AppCounter}
     */
    D(this, "counter");
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof TabNavSelectPanelController
     */
    D(this, "router");
  }
  /**
   * 表单部件
   *
   * @readonly
   * @memberof TabNavSelectPanelController
   */
  get form() {
    var e;
    return (e = this.view) == null ? void 0 : e.getController("form");
  }
  /**
   * 路由层级
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof TabNavSelectPanelController
   */
  get routeDepth() {
    return this.view.modal.routeDepth;
  }
  /**
   * 设置 Router 对象
   *
   * @param {Router} router
   * @memberof TabNavSelectPanelController
   */
  setRouter(e) {
    this.router = e;
  }
  /**
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof TabNavSelectPanelController
   */
  getData() {
    var e;
    return ((e = this.form) == null ? void 0 : e.getData()) || [{}];
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof TabNavSelectPanelController
   */
  initState() {
    super.initState(), this.state.drTabPages = [], this.state.showMore = !1, this.state.navViewMsgs = void 0, this.state.cache = !0, this.state.cacheKeys = ["RouterShell"], this.state.currentKey = "";
  }
  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof TabNavSelectPanelController
   */
  async onCreated() {
    await super.onCreated(), await this.initCounter();
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
   * @protected
   * @memberof ControlController
   */
  calcItemStateByCounter() {
    if (this.state.drTabPages.forEach((e) => {
      const t = $(e, this.counter);
      t !== void 0 && (e.hidden = !t);
    }), this.state.activeName) {
      const { visible: e, defaultVisibleItem: t } = this.getItemVisibleState(
        this.state.activeName
      );
      !e && t && (this.state.activeName = t.tag, this.handleTabChange());
    }
  }
  /**
   * 获取对应项的显示状态
   *
   * @param {string} key
   * @return {*}  {{
   *     visible: boolean;
   *     defaultVisibleItem?: IDRTabPagesState;
   *   }}
   */
  getItemVisibleState(e) {
    let t = !0, n;
    return this.state.drTabPages.forEach((o) => {
      !n && !o.hidden && (n = o), o.tag === e && (t = !o.hidden);
    }), {
      visible: t,
      defaultVisibleItem: n
    };
  }
  /**
   * 计算项权限
   *
   * @param {IDRTabPagesState} item
   * @return {*}  {Promise<void>}
   */
  async calcPermitted(e) {
    var s;
    let t = !0;
    const n = (s = this.getData()) != null && s.length ? this.getData()[0] : void 0, o = await K(
      e,
      this.context,
      this.params,
      this.model.appDataEntityId,
      this.model.appId,
      n
    );
    o !== void 0 && (t = o), e.hidden = !t;
  }
  /**
   * 计算项状态
   *
   * @return {*}  {Promise<void>}
   */
  async calcDrTabPagesState() {
    await Promise.all(
      this.state.drTabPages.map(async (e) => {
        await this.calcPermitted(e);
      })
    ), this.calcItemStateByCounter(), this.state.isCalculatedPermission = !0;
  }
  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof TabNavSelectPanelController
   */
  async onMounted() {
    await super.onMounted(), this.form && (this.form.evt.on("onLoadSuccess", async (e) => {
      const t = e.data[0];
      this.view.state.srfactiveviewdata = t, Object.prototype.hasOwnProperty.call(t, "srfreadonly") && (this.view.context.srfreadonly = t.srfreadonly), await this.calcDrTabPagesState(), this.handleFormChange();
    }), this.form.evt.on("onLoadDraftSuccess", () => {
      this.handleFormChange();
    }), this.form.evt.on("onSaveSuccess", () => {
      this.handleFormChange();
    })), this.initDRTabPages(), this.form || await this.calcDrTabPagesState();
  }
  /**
   * 处理表单数据变更
   *
   * @memberof TabNavSelectPanelController
   */
  handleFormChange() {
    const e = this.getData()[0].srfuf !== F.UPDATE;
    this.setDRTabPagesState(this.state.drTabPages, e);
  }
  /**
   * 设置关系分页状态
   *
   * @param {IDRTabPagesState[]} drTabPages 关系分页
   * @param {boolean} disabled 禁用状态
   * @memberof TabNavSelectPanelController
   */
  setDRTabPagesState(e, t) {
    e.forEach((n) => {
      n.tag !== this.model.uniqueTag && (n.disabled = t);
    });
  }
  /**
   * 初始化关系分页数据
   *
   * @memberof TabNavSelectPanelController
   */
  initDRTabPages() {
    const {
      editItemCaption: e,
      editItemCapLanguageRes: t,
      hideEditItem: n,
      editItemSysImage: o,
      uniqueTag: s,
      dedrtabPages: l
    } = this.model, u = [];
    let b = e;
    t && (b = ibiz.i18n.t(t.lanResTag, e)), n ? this.state.defaultName = (l == null ? void 0 : l[0].id) || "" : (u.push({
      tag: s,
      caption: b,
      hidden: !!n,
      disabled: !1,
      sysImage: o,
      fullPath: this.routeDepth ? V(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.router.currentRoute.value,
        this.routeDepth
      ) : ""
    }), this.state.defaultName = ""), l == null || l.forEach((c) => {
      let d = c.caption;
      c.capLanguageRes && (d = ibiz.i18n.t(c.capLanguageRes.lanResTag, c.caption));
      const {
        enableMode: p,
        dataAccessAction: i,
        testAppDELogicId: f,
        testScriptCode: m,
        counterMode: P
      } = c;
      u.push({
        tag: c.id,
        caption: d,
        sysImage: c.sysImage,
        hidden: !1,
        disabled: !1,
        counterId: c.counterId,
        dataAccessAction: i,
        enableMode: p,
        testAppDELogicId: f,
        testScriptCode: m,
        counterMode: P
      });
    }), this.state.drTabPages = u, this.view.state.srfnav ? this.state.activeName = this.view.state.srfnav : this.state.activeName = u[0].tag;
    const w = !!this.routeDepth && N(this.routeDepth);
    this.handleTabChange(w);
  }
  /**
   * 处理分页改变
   *
   * @param {boolean} [isRoutePushed=false] 是否是路由已经跳转过了
   */
  handleTabChange(e = !1) {
    var o;
    const { activeName: t } = this.state, n = (o = this.model.dedrtabPages) == null ? void 0 : o.find(
      (s) => s.id === t
    );
    n ? (this.setVisible("navPos"), this.openNavPosView(n, e)) : (this.setVisible("form"), this.routeDepth && this.state.drTabPages[0] && this.router.push(this.state.drTabPages[0].fullPath));
  }
  /**
   * 切换时清空父多项选择视图简单列表内容
   *
   * @protected
   * @memberof ControlController
   */
  handleClearSelectData() {
    if (this.view.engines) {
      const e = this.view.engines[0];
      e.selectData = [], e.simpleList.setData(e.selectData);
    }
  }
  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof TabNavSelectPanelController
   */
  setVisible(e) {
    var n;
    const t = (n = this.view.layoutPanel) == null ? void 0 : n.panelItems.view_form;
    e === "form" ? t && (t.state.visible = !0, t.state.keepAlive = !0) : t && (t.state.visible = !1, t.state.keepAlive = !0);
  }
  /**
   * 准备参数
   *
   * @param {IDEDRCtrlItem} drTabPages 关系分页
   * @return {*}
   * @memberof TabNavSelectPanelController
   */
  prepareParams(e) {
    const { navigateContexts: t, navigateParams: n } = e, o = {
      navContexts: t,
      navParams: n
    }, s = {
      context: this.context,
      params: this.params,
      data: this.getData()[0]
    }, { resultContext: l, resultParams: u } = q(o, s), b = Object.assign(this.context.clone(), l, {
      currentSrfNav: e.id
    }), w = { ...this.params, ...u };
    return { context: b, params: w };
  }
  /**
   * 打开导航占位视图
   *
   * @param {IDEDRCtrlItem} drTabPages
   * @param {boolean} [isRoutePushed=false]
   * @return {*}  {Promise<void>}
   */
  async openNavPosView(e, t = !1) {
    const { context: n, params: o } = this.prepareParams(e);
    this.state.navViewMsgs = {
      key: e.id,
      context: n,
      params: o,
      viewId: e.appViewId,
      isRoutePushed: t
    }, this.state.currentKey = this.calcCacheKey(this.state.navViewMsgs);
  }
  /**
   * 计算缓存 key 标识
   */
  calcCacheKey(e) {
    return e ? "".concat(e.viewId, "___").concat(e.key) : "";
  }
  /**
   * 设置嵌入视图
   *
   * @param {IViewController} view
   * @memberof TabNavSelectPanelController
   */
  setEmbedView(e) {
    this.embedView = e, this.embedView.evt.on("onSelectionChange", (t) => {
      const n = this.handleEventData(t.data), o = { ...t };
      Object.assign(o, { data: n }), this.evt.emit("onSelectionChange", o);
    }), this.embedView.evt.on("onDataActive", (t) => {
      const n = this.handleEventData(t.data);
      this.evt.emit("onDataActive", {
        data: n
      });
    });
  }
  /**
   * 处理event数据抛值为实体数据
   *
   * @param {IParams} event
   * @return {*}  {IData[]}
   * @memberof TabNavSelectPanelController
   */
  handleEventData(e = []) {
    const t = [];
    return e.length > 0 && e.forEach((n) => {
      const { _deData: o = {} } = n, s = {
        srfkey: o.srfkey,
        srfmajortext: o.srfmajortext
      };
      n._deData && Object.assign(s, o), t.push(s);
    }), t;
  }
  /**
   * 初始化计数器
   *
   * @protected
   * @return {*}  {Promise<void>}
   */
  async initCounter() {
    const { appCounterRefs: e } = this.model, t = e == null ? void 0 : e[0];
    t && (this.counter = await U.getCounterByRef(
      t,
      this.context,
      { ...this.params }
    ), this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this), this.counter.onChange(this.calcItemStateByCounter));
  }
  /**
   * 监听组件销毁
   *
   * @protected
   * @return {*}  {Promise<void>}
   */
  async onDestroyed() {
    await super.onDestroyed(), this.counter && (this.counter.offChange(this.calcItemStateByCounter), this.counter.destroy());
  }
  /**
   * 获取选中数据
   *
   * @return {*}  {Promise<IData[]>}
   * @memberof TabNavSelectPanelController
   */
  async getSelectedData() {
    const e = await this.embedView.call(R.GET_DATA);
    return this.handleEventData(e);
  }
  /**
   * 获取全部数据
   *
   * @return {*}  {Promise<IData[]>}
   * @memberof TabNavSelectPanelController
   */
  async getAllData() {
    const e = await this.embedView.call(R.GET_ALL_DATA);
    return this.handleEventData(e);
  }
}
const y = "ibiz";
function ce(a, h, e) {
  let t = null, n = 0;
  const o = x([]), s = x([]), l = (c, d = {}) => {
    let p = 0;
    const i = document.createElement("span"), f = document.createElement("span");
    return f.innerHTML = c, Object.assign(f.style, d), Object.assign(i.style, {
      width: "auto",
      position: "absolute",
      left: "-9999px"
    }), i.appendChild(f), document.body.appendChild(i), p = i.offsetWidth, document.body.removeChild(i), p;
  };
  function u() {
    const { drTabPages: c, showMore: d } = a.state;
    if (!h.value || !d || c.length === 0) {
      o.value = c, s.value = [];
      return;
    }
    const i = h.value.$el.offsetWidth;
    let f = 0;
    o.value = [], s.value = [], c.forEach((m, P) => {
      if (!m.hidden) {
        const T = m.caption || "", g = m.counterId ? e[m.counterId] : void 0, C = "var(--".concat(y, "-font-size-regular)");
        if (g != null && !(!g && g !== 0) && !(m.counterMode === 1 && g <= 0)) {
          const O = {
            marginLeft: "var(--".concat(y, "-spacing-tight)"),
            minWidth: "20px",
            fontSize: C
          }, j = l(String(g), O);
          f += j;
        }
        const I = {
          padding: P === 0 ? "0 var(--".concat(y, "-spacing-base) 0 0") : "0 var(--".concat(y, "-spacing-base)"),
          fontSize: C
        }, E = l(T, I);
        f += E;
        const A = {
          padding: "0 0 0 var(--".concat(y, "-spacing-base)"),
          fontSize: C
        }, z = l(
          "".concat(ibiz.i18n.t("app.more"), " ^"),
          A
        );
        f + z > i ? s.value.push(m) : o.value.push(m);
      }
    });
  }
  const b = () => {
    if (window.ResizeObserver) {
      const c = h.value.$el;
      c && (t = new ResizeObserver((d) => {
        const { width: p } = d[0].contentRect;
        p !== n && (u(), n = p);
      }), t.observe(c));
    }
  };
  B(
    () => a.state.drTabPages,
    () => {
      u();
    },
    { deep: !0 }
  );
  const w = X(() => {
    h.value && b();
  });
  return L(() => {
    t && t.disconnect(), w();
  }), { visibleItems: o, moreItems: s };
}
function le(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !ae(a);
}
const S = /* @__PURE__ */ Y({
  name: "IBizTabNavSelectPanelControl",
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
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
      type: Boolean,
      default: !0
    },
    noLoadDefault: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    const a = H((...i) => new re(...i)), h = M("control-".concat(a.model.controlType.toLowerCase())), e = M("control-".concat(a.model.controlType.toLowerCase(), "-nav-select-panel")), t = se(), n = x(), o = Z({}), {
      visibleItems: s,
      moreItems: l
    } = ce(a, n, o), u = (i) => {
      Object.assign(o, i);
    };
    a.evt.on("onCreated", () => {
      a.counter && a.counter.onChange(u, !0);
    }), L(() => {
      var i;
      (i = a.counter) == null || i.offChange(u);
    }), a.setRouter(t);
    const b = (i) => {
      a.setEmbedView(i.view);
    }, w = () => {
      a.handleTabChange(), a.handleClearSelectData();
    }, c = (i) => {
      a.state.activeName = i, a.handleTabChange();
    }, d = ne();
    let p = "";
    return a.routeDepth && (p = V(d, a.routeDepth)), B(() => d.fullPath, (i, f) => {
      if (i !== f) {
        const m = a.routeDepth;
        if (m && V(d, a.routeDepth) === p) {
          const T = J(d), {
            srfnav: g
          } = T.pathNodes[m - 1], C = !!a.routeDepth && N(a.routeDepth);
          if (g && a.state.activeName && a.state.activeName !== g)
            a.state.activeName = g, a.handleTabChange(C);
          else if (!g) {
            const I = !!a.routeDepth && !N(a.routeDepth);
            (a.state.activeName !== a.state.defaultName || I) && (a.state.activeName = a.state.defaultName, a.handleTabChange(C));
          }
        }
      }
    }, {
      immediate: !0
    }), {
      c: a,
      ns: h,
      ns2: e,
      controlRef: n,
      counterData: o,
      visibleItems: s,
      moreItems: l,
      handleTabChange: w,
      handleMoreChange: c,
      onCreated: b
    };
  },
  render() {
    const {
      isCreated: a,
      isCalculatedPermission: h,
      currentKey: e
    } = this.c.state, t = this.moreItems.find((s) => s.tag === this.c.state.activeName) || {}, n = r(v("el-dropdown"), {
      trigger: "click",
      class: this.ns.b("more-dropdown"),
      "popper-class": this.ns.b("more-dropdown-popper")
    }, {
      default: () => r("div", {
        class: this.ns.be("more-dropdown", "link"),
        onClick: (s) => s.stopPropagation()
      }, [r("span", null, [ibiz.i18n.t("app.more"), ee(" ")]), r("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em"
      }, [r("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [r("path", {
        d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
      }, null)])])]),
      dropdown: () => r(v("el-dropdown-menu"), null, {
        default: () => this.moreItems.map((s) => r(v("el-dropdown-item"), {
          class: [this.c.state.activeName === s.tag ? this.ns.be("more-dropdown-popper", "active") : ""],
          onClick: () => this.handleMoreChange(s.tag)
        }, {
          default: () => [r("span", {
            class: [this.ns.be("more-dropdown-popper", "label")]
          }, [r("span", {
            class: this.ns.bem("more-dropdown-popper", "label", "text"),
            title: ie(s.caption || "")
          }, [s.caption || ""]), s.counterId && this.counterData[s.counterId] != null && r(v("iBizBadge"), {
            class: this.ns.bem("more-dropdown-popper", "label", "counter"),
            value: this.counterData[s.counterId],
            counterMode: s.counterMode
          }, null)])]
        }))
      })
    });
    let o;
    if (this.c.state.navViewMsgs) {
      const s = te(v("IBizViewShell"), {
        context: this.c.state.navViewMsgs.context,
        params: this.c.state.navViewMsgs.params,
        key: e || void 0,
        viewId: this.c.state.navViewMsgs.viewId,
        state: {
          singleSelect: this.singleSelect,
          noLoadDefault: this.noLoadDefault
        },
        onCreated: this.onCreated
      });
      o = this.c.state.cache ? r(v("keepAlive"), {
        include: this.c.state.cacheKeys,
        max: 30,
        isKey: !0
      }, le(s) ? s : {
        default: () => [s]
      }) : s;
    }
    return r(v("iBizControlBase"), {
      ref: "controlRef",
      controller: this.c,
      class: [this.ns.b(), this.ns2.b(), this.moreItems.length > 0 ? this.ns.b("more") : ""]
    }, {
      default: () => [a && h && r(v("el-tabs"), {
        modelValue: this.c.state.activeName,
        "onUpdate:modelValue": (s) => this.c.state.activeName = s,
        onTabChange: this.handleTabChange
      }, {
        default: () => [this.visibleItems.map((s) => {
          const l = s.counterId ? this.counterData[s.counterId] : void 0;
          return s.hidden ? null : r(v("el-tab-pane"), {
            class: this.ns.e("tab-item"),
            label: s.caption + l,
            disabled: s.disabled,
            name: s.tag
          }, {
            label: () => r("span", {
              class: this.ns.b("label")
            }, [r("span", {
              class: this.ns.be("label", "text")
            }, [s.caption]), !oe(l) && r(v("iBizBadge"), {
              class: this.ns.e("counter"),
              value: l,
              counterMode: s.counterMode
            }, null)])
          });
        }), this.moreItems.length > 0 && r(v("el-tab-pane"), {
          label: "",
          name: t.tag
        }, {
          label: () => n
        })]
      }), r("div", {
        class: this.ns2.b("view-pos")
      }, [this.c.state.navViewMsgs ? o : null])]
    });
  }
});
class he {
  constructor() {
    D(this, "component", "IBizTabNavSelectPanelControl");
  }
}
const be = Q(
  S,
  function(a) {
    a.component(S.name, S), G(
      "CUSTOM_TAB_NAV_SELECT_PANEL",
      () => new he()
    );
  }
);
export {
  be as IBizTabNavSelectPanelControl,
  be as default
};
