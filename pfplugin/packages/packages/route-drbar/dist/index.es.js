import './style.css';
var H = Object.defineProperty;
var Q = (a, l, t) => l in a ? H(a, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[l] = t;
var I = (a, l, t) => (Q(a, typeof l != "symbol" ? l + "" : l, t), t);
import { ControlController as x, Srfuf as V, calcItemVisibleByCounter as N, calcItemVisible as E, OpenAppViewCommand as T, calcNavParams as k, hasSubRoute as D, CounterService as A, registerControlProvider as M } from "@ibiz-template/runtime";
import { getNestedRoutePath as P, route2routePath as C, routePath2string as O, useControlController as _, useNamespace as z, withInstall as j } from "@ibiz-template/vue3-util";
import { createVNode as f, defineComponent as L, reactive as q, onUnmounted as F, watch as y, resolveComponent as b, createTextVNode as W, isVNode as U } from "vue";
import { useRouter as K, useRoute as G } from "vue-router";
import { isNil as X } from "ramda";
class Z extends x {
  constructor() {
    super(...arguments);
    /**
     * 计数器对象
     * @author lxm
     * @date 2024-01-18 05:12:35
     * @type {AppCounter}
     */
    I(this, "counter");
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    I(this, "router");
    /**
     * 路由跳转项
     *
     * @protected
     * @memberof DRBarController
     */
    I(this, "routeItems", []);
    /**
     * 是否启用返回按钮
     *
     * @protected
     * @memberof DRBarController
     */
    I(this, "enableBack", !1);
    /**
     * 返回的视图id
     *
     * @author zhanghengfeng
     * @date 2024-05-11 17:05:05
     * @type {string}
     */
    I(this, "viewId", "");
  }
  /**
   * 导航占位控制器
   *
   * @readonly
   * @memberof DRBarController
   */
  get navPos() {
    var t;
    return (t = this.view.layoutPanel) == null ? void 0 : t.panelItems.nav_pos;
  }
  /**
   * 导航视图容器控制器
   * @return {*}
   * @author: zhujiamin
   * @Date: 2024-01-25 16:03:00
   */
  get viewNavPos() {
    var t;
    return (t = this.view.layoutPanel) == null ? void 0 : t.panelItems.view_nav_pos;
  }
  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRBarController
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
    return this.getData()[0].srfuf !== V.UPDATE;
  }
  /**
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRBarController
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
   * @memberof DRBarController
   */
  get routeDepth() {
    return this.view.modal.routeDepth;
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRBarController
   */
  initState() {
    super.initState(), this.state.drBarItems = [], this.state.srfnav = "", this.state.hideEditItem = !!this.model.hideEditItem;
  }
  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarController
   */
  async onCreated() {
    await super.onCreated(), this.initDRBarItems(), this.controlParams.route_items && (this.routeItems = JSON.parse(this.controlParams.route_items)), this.controlParams.enable_back && (this.enableBack = !!JSON.parse(this.controlParams.enable_back)), this.controlParams.view_id && (this.viewId = this.controlParams.view_id), await this.initCounter();
  }
  /**
   * 通过计数器数据，计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 18:05:14
   * @param {IData} [_data]
   * @param {boolean} [reset=true]
   */
  calcItemStateByCounter(t, s = !0) {
    if (this.state.drBarItems.forEach((e) => {
      var o;
      if ((o = e.children) != null && o.length)
        e.children.forEach((i) => {
          const n = N(i, this.counter);
          n !== void 0 && (i.visible = n);
        }), e.visible = e.children.some((i) => i.visible);
      else {
        const i = N(e, this.counter);
        i !== void 0 && (e.visible = i);
      }
    }), this.state.selectedItem && s) {
      const { visible: e, defaultVisibleItem: o } = this.getItemVisibleState(
        this.state.selectedItem
      );
      !e && o && this.handleSelectChange(o.tag);
    }
  }
  /**
   * 获取对应项的显示状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:15
   * @param {string} key
   * @return {*}  {{
   *     visible: boolean;
   *     defaultVisibleItem?: IDRBarItemsState;
   *   }}
   */
  getItemVisibleState(t) {
    let s = !0, e;
    return this.state.drBarItems.forEach((o) => {
      if (o.children) {
        e || (e = o.children.find((n) => n.visible));
        const i = o.children.find((n) => n.tag === t);
        i && (s = !!i.visible);
      } else
        !e && o.visible && (e = o), o.tag === t && (s = !!o.visible);
    }), {
      visible: s,
      defaultVisibleItem: e
    };
  }
  /**
   * 计算关系界面组权限
   *
   * @param {IDRBarItemsState} item 关系组成员
   * @memberof DRBarController
   */
  async calcPermitted(t) {
    var i;
    let s = !0;
    const e = (i = this.getData()) != null && i.length ? this.getData()[0] : void 0, o = await E(
      t,
      this.context,
      this.params,
      this.model.appDataEntityId,
      this.model.appId,
      e
    );
    o !== void 0 && (s = o), t.visible = s;
  }
  /**
   * 计算是否展示
   *
   * @param {IData} item 关系组成员
   * @memberof DRBarController
   */
  async calcDrBarItemsState() {
    await Promise.all(
      this.state.drBarItems.map(async (t) => {
        var s;
        (s = t.children) != null && s.length ? (await Promise.all(
          t.children.map(async (e) => {
            await this.calcPermitted(e);
          })
        ), t.visible = t.children.some((e) => e.visible)) : await this.calcPermitted(t);
      })
    ), this.calcItemStateByCounter({}, !1), this.state.isCalculatedPermission = !0;
  }
  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarController
   */
  async onMounted() {
    var t;
    await super.onMounted(), this.form ? (this.form.evt.on("onLoadSuccess", async (s) => {
      var o;
      const e = (o = s.data) == null ? void 0 : o[0];
      this.view.state.srfactiveviewdata = e, e && e.srfreadonly && (this.view.context.srfreadonly = !0), await this.calcDrBarItemsState(), this.doDefaultSelect();
    }), this.form.evt.on("onLoadDraftSuccess", async () => {
      await this.calcDrBarItemsState(), this.doDefaultSelect();
    })) : (await this.calcDrBarItemsState(), this.doDefaultSelect()), (t = this.form) != null && t.state.isLoaded && this.doDefaultSelect();
  }
  /**
   * 处理表单数据变更
   *
   * @memberof DRBarController
   */
  handleFormChange() {
    const t = this.isCreate;
    this.setDRBarItemsState(this.state.drBarItems, t);
  }
  /**
   * 设置关系项状态
   *
   * @param {IDRBarItemsState[]} drBarItems 关系项
   * @param {boolean} disabled 禁用状态
   * @memberof DRBarController
   */
  setDRBarItemsState(t, s) {
    t.forEach((e) => {
      e.tag !== this.model.uniqueTag && (e.disabled = s), e.children && this.setDRBarItemsState(e.children, s);
    });
  }
  /**
   * 初始化关系项数据
   *
   * @memberof DRBarController
   */
  initDRBarItems() {
    const { dedrctrlItems: t, dedrbarGroups: s } = this.model, e = [];
    if (!this.state.hideEditItem) {
      const {
        editItemCaption: i,
        editItemCapLanguageRes: n,
        editItemSysImage: h,
        uniqueTag: c
      } = this.model;
      let u = i;
      n && (u = ibiz.i18n.t(
        n.lanResTag,
        i
      )), e.push({
        tag: c,
        caption: u,
        disabled: !1,
        sysImage: h,
        fullPath: this.router.currentRoute.value.fullPath
      }), this.state.defaultItem = c;
    }
    const o = (i) => {
      let n = i.caption;
      i.capLanguageRes && (n = ibiz.i18n.t(i.capLanguageRes.lanResTag, i.caption));
      const { enableMode: h, testAppDELogicId: c, testScriptCode: u, counterMode: r } = i;
      return {
        tag: i.id,
        caption: n,
        sysImage: i.sysImage,
        disabled: !1,
        counterId: i.counterId,
        visible: !1,
        // 默认不显示
        dataAccessAction: i.dataAccessAction || void 0,
        enableMode: h,
        testAppDELogicId: c,
        testScriptCode: u,
        counterMode: r
      };
    };
    s && t && (s.length === 1 ? t.forEach((i) => {
      e.push(o(i));
    }) : s.forEach((i) => {
      var h;
      const n = t.filter(
        (c) => c.dedrbarGroupId === i.id
      );
      if (n.length > 1 || ((h = this.controlParams) == null ? void 0 : h.singleitemgroup) === "true" && n.length === 1) {
        let c = i.caption;
        i.capLanguageRes && (c = ibiz.i18n.t(
          i.capLanguageRes.lanResTag,
          i.caption
        )), e.push({
          tag: i.id,
          caption: c,
          sysImage: i.sysImage,
          visible: !1,
          // 默认不显示
          children: n.map((u) => o(u))
        });
      } else
        n.length === 1 && e.push(o(n[0]));
    })), this.state.drBarItems = e;
  }
  /**
   * 处理返回按钮点击
   *
   * @param {string} key
   * @memberof DRBarController
   */
  handleBack() {
    if (!this.viewId)
      return;
    const t = this.context.clone(), s = { ...this.params };
    ibiz.commands.execute(T.TAG, this.viewId, t, s);
  }
  /**
   * 处理选中改变
   *
   * @param {string} key
   * @memberof DRBarController
   */
  handleSelectChange(t = this.state.defaultItem, s = !1) {
    var o;
    if (this.state.selectedItem === t)
      return;
    const e = (o = this.model.dedrctrlItems) == null ? void 0 : o.find((i) => i.id === t);
    if (e && this.routeItems.includes(t)) {
      const { context: i, params: n } = this.prepareParams(e);
      Object.assign(i, {
        srfdefaulttoroutedepth: this.routeDepth
      }), ibiz.commands.execute(
        T.TAG,
        e.appViewId,
        i,
        n
      );
      return;
    }
    if (e)
      this.setVisible("navPos"), this.openNavPosView(e, s);
    else if (this.setVisible("form"), this.routeDepth) {
      const i = P(
        this.router.currentRoute.value,
        this.routeDepth
      );
      this.router.push(i);
    }
    this.state.selectedItem = t;
  }
  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRBarController
   */
  setVisible(t) {
    var e;
    if (this.state.hideEditItem)
      return;
    const s = (e = this.view.layoutPanel) == null ? void 0 : e.panelItems.view_form;
    t === "form" ? (s && (s.state.visible = !0, s.state.keepAlive = !0), this.viewNavPos && (this.viewNavPos.state.visible = !1, this.viewNavPos.state.keepAlive = !0)) : (s && (s.state.visible = !1, s.state.keepAlive = !0), this.viewNavPos && (this.viewNavPos.state.visible = !0, this.viewNavPos.state.keepAlive = !0));
  }
  /**
   * 准备参数
   *
   * @param {IDEDRBarItem} drBarItem 关系项
   * @return {*}
   * @memberof DRBarController
   */
  prepareParams(t) {
    const { navigateContexts: s, navigateParams: e } = t, o = {
      navContexts: s,
      navParams: e
    }, i = {
      context: this.context,
      params: this.params,
      data: this.getData()[0]
    }, { resultContext: n, resultParams: h } = k(o, i), c = Object.assign(this.context.clone(), n), u = { ...this.params, ...h };
    return { context: c, params: u };
  }
  /**
   * 打开导航占位视图
   *
   * @param {IDEDRBarItem} drBarItem 关系项
   * @memberof DRBarController
   */
  async openNavPosView(t, s = !1) {
    var i;
    const { context: e, params: o } = this.prepareParams(t);
    e.currentSrfNav = t.id, this.state.srfnav = t.id, (i = this.navPos) == null || i.openView({
      key: t.id,
      context: e,
      params: o,
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
    var o, i;
    const t = (o = this.view.layoutPanel) == null ? void 0 : o.panelItems.view_form;
    if (t && (t.state.visible = !1, t.state.keepAlive = !1), !this.state.hideEditItem && !this.state.srfnav) {
      this.setVisible("form");
      return;
    }
    if (this.isCreate && !this.state.hideEditItem) {
      this.state.defaultItem = this.model.uniqueTag;
      return;
    }
    const { drBarItems: s } = this.state;
    let e = ((i = s[0].children) == null ? void 0 : i[0].tag) || s[0].tag;
    if (this.routeDepth && this.state.srfnav && (e = this.state.srfnav), e) {
      const n = !!this.routeDepth && D(this.routeDepth), { visible: h, defaultVisibleItem: c } = this.getItemVisibleState(e);
      !h && c ? (e = c.tag, this.handleSelectChange(e)) : this.handleSelectChange(e, n);
    }
  }
  /**
   * 初始化计数器
   * @author lxm
   * @date 2024-01-18 05:12:02
   * @protected
   * @return {*}  {Promise<void>}
   */
  async initCounter() {
    const { appCounterRefs: t } = this.model, s = t == null ? void 0 : t[0];
    if (s) {
      const e = C(this.router.currentRoute.value);
      this.routeDepth && (e.pathNodes = e.pathNodes.slice(0, this.routeDepth - 1));
      const o = O(e);
      this.counter = await A.getCounterByRef(
        s,
        this.context,
        o ? { srfcustomtag: o, ...this.params } : { ...this.params }
      ), this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this), this.counter.onChange(this.calcItemStateByCounter);
    }
  }
  /**
   * 监听组件销毁
   *
   * @author zhanghengfeng
   * @date 2024-04-10 19:04:43
   * @protected
   * @return {*}  {Promise<void>}
   */
  async onDestroyed() {
    await super.onDestroyed(), this.counter && (this.counter.offChange(this.calcItemStateByCounter), this.counter.destroy());
  }
}
const tt = () => f("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  preserveAspectRatio: "xMidYMid meet",
  focusable: "false",
  style: "fill: currentColor;"
}, [f("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [f("path", {
  d: "M7.4 4.15L4.438 7.315a.6.6 0 0 1-.876-.82l3.97-4.243a.598.598 0 0 1 .93-.057l3.97 4.323a.6.6 0 1 1-.885.812L8.6 4.118v9.149c0 .404-.269.733-.6.733-.332 0-.6-.329-.6-.733V4.15z",
  transform: "rotate(-90 7.995 8)"
}, null)])]);
function et(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !U(a);
}
const R = /* @__PURE__ */ L({
  name: "IBizRouteDrBarControl",
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
  setup(a) {
    const l = _((...r) => new Z(...r)), t = z("route-drbar-control"), s = K(), e = q({}), o = (r) => {
      Object.assign(e, r);
    };
    l.evt.on("onCreated", () => {
      l.counter && l.counter.onChange(o, !0);
    }), F(() => {
      var r;
      (r = l.counter) == null || r.offChange(o);
    }), l.setRouter(s);
    const i = (r) => {
      l.handleSelectChange(r);
    }, n = G();
    let h = "";
    const c = [];
    y(() => l.state.isCreated, (r, g) => {
      if (a.showMode !== "horizontal") {
        const {
          drBarItems: m
        } = l.state;
        m.forEach((p) => {
          c.push(p.tag);
        });
      }
    }), l.routeDepth && (h = P(n, l.routeDepth)), y(() => n.fullPath, (r, g) => {
      if (r !== g) {
        const m = l.routeDepth;
        if (m && P(n, l.routeDepth) === h) {
          const d = C(n), {
            srfnav: v
          } = d.pathNodes[m - 1];
          l.handleSelectChange(v);
        }
      }
    }, {
      immediate: !0
    });
    const u = (r) => {
      if (r.visible) {
        if (r.children) {
          let g = "";
          if (a.showMode === "horizontal" && r.tag !== l.state.selectedItem) {
            const m = r.children.find((p) => p.tag === l.state.selectedItem);
            m && (g = "-".concat(m.caption));
          }
          return f(b("el-sub-menu"), {
            class: t.b("group"),
            index: r.tag,
            disabled: r.disabled
          }, {
            default: () => r.children.map((m) => u(m)),
            title: () => [f(b("iBizIcon"), {
              class: t.e("icon"),
              icon: r.sysImage
            }, null), f("span", null, [r.caption, g])]
          });
        }
        return f(b("el-menu-item"), {
          class: t.e("item"),
          index: r.tag,
          disabled: r.disabled
        }, {
          default: () => [f(b("iBizIcon"), {
            class: t.e("icon"),
            icon: r.sysImage
          }, null), f("span", null, [r.caption]), r.counterId && e[r.counterId] != null && f(b("iBizBadge"), {
            class: t.e("counter"),
            value: e[r.counterId],
            counterMode: r.counterMode
          }, null)]
        });
      }
    };
    return {
      c: l,
      ns: t,
      handleSelect: i,
      renderMenuItems: u,
      opens: c
    };
  },
  render() {
    let a;
    const {
      isCreated: l,
      drBarItems: t,
      selectedItem: s,
      defaultItem: e,
      isCalculatedPermission: o
    } = this.c.state;
    return f(b("iBizControlBase"), {
      controller: this.c,
      class: this.ns.b()
    }, {
      default: () => {
        var i, n;
        return [l && o && [this.c.enableBack && this.c.viewId && f("div", {
          class: this.ns.b("back-btn"),
          onClick: this.c.handleBack.bind(this.c)
        }, [f("div", {
          class: this.ns.be("back-btn", "icon")
        }, [tt()]), f("div", {
          class: this.ns.be("back-btn", "text")
        }, [W("返回")])]), f(b("el-menu"), {
          class: [this.ns.e("menu"), !((n = (i = t[0]) == null ? void 0 : i.children) != null && n.length) && this.ns.em("menu", "signal")],
          mode: this.showMode,
          "default-active": s || e,
          onSelect: this.handleSelect,
          "default-openeds": this.opens
        }, et(a = t.map((h) => this.renderMenuItems(h))) ? a : {
          default: () => [a]
        })]];
      }
    });
  }
});
class st {
  constructor() {
    I(this, "component", "IBizRouteDrBarControl");
  }
}
const at = j(R, function(a) {
  a.component(R.name, R), M("CUSTOM_ROUTE_DRBAR", () => new st());
});
class it extends x {
  constructor() {
    super(...arguments);
    /**
     * 计数器对象
     * @author lxm
     * @date 2024-01-18 05:12:35
     * @type {AppCounter}
     */
    I(this, "counter");
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    I(this, "router");
  }
  /**
   * 导航占位控制器
   *
   * @readonly
   * @memberof DRTabController
   */
  get navPos() {
    var t;
    return (t = this.view.layoutPanel) == null ? void 0 : t.panelItems.nav_pos;
  }
  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRTabController
   */
  get form() {
    var t;
    return (t = this.view) == null ? void 0 : t.getController("form");
  }
  /**
   * 路由层级
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof DRTabController
   */
  get routeDepth() {
    return this.view.modal.routeDepth;
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
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRTabController
   */
  getData() {
    var t;
    return ((t = this.form) == null ? void 0 : t.getData()) || [{}];
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRTabController
   */
  initState() {
    super.initState(), this.state.drTabPages = [];
  }
  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRTabController
   */
  async onCreated() {
    await super.onCreated(), await this.initCounter();
  }
  /**
   * 通过计数器数据，计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:01
   */
  calcItemStateByCounter() {
    if (this.state.drTabPages.forEach((t) => {
      const s = N(t, this.counter);
      s !== void 0 && (t.hidden = !s);
    }), this.state.activeName) {
      const { visible: t, defaultVisibleItem: s } = this.getItemVisibleState(
        this.state.activeName
      );
      !t && s && (this.state.activeName = s.tag, this.handleTabChange());
    }
  }
  /**
   * 获取对应项的显示状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:18
   * @param {string} key
   * @return {*}  {{
   *     visible: boolean;
   *     defaultVisibleItem?: IDRTabPagesState;
   *   }}
   */
  getItemVisibleState(t) {
    let s = !0, e;
    return this.state.drTabPages.forEach((o) => {
      !e && !o.hidden && (e = o), o.tag === t && (s = !o.hidden);
    }), {
      visible: s,
      defaultVisibleItem: e
    };
  }
  /**
   * 计算项权限
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:40
   * @param {IDRTabPagesState} item
   * @return {*}  {Promise<void>}
   */
  async calcPermitted(t) {
    var i;
    let s = !0;
    const e = (i = this.getData()) != null && i.length ? this.getData()[0] : void 0, o = await E(
      t,
      this.context,
      this.params,
      this.model.appDataEntityId,
      this.model.appId,
      e
    );
    o !== void 0 && (s = o), t.hidden = !s;
  }
  /**
   * 计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:05
   * @return {*}  {Promise<void>}
   */
  async calcDrTabPagesState() {
    await Promise.all(
      this.state.drTabPages.map(async (t) => {
        await this.calcPermitted(t);
      })
    ), this.calcItemStateByCounter(), this.state.isCalculatedPermission = !0;
  }
  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRTabController
   */
  async onMounted() {
    await super.onMounted(), this.form && (this.form.evt.on("onLoadSuccess", async (t) => {
      var e;
      const s = (e = t.data) == null ? void 0 : e[0];
      this.view.state.srfactiveviewdata = s, s && s.srfreadonly && (this.view.context.srfreadonly = !0), await this.calcDrTabPagesState(), this.handleFormChange();
    }), this.form.evt.on("onLoadDraftSuccess", () => {
      this.handleFormChange();
    }), this.form.evt.on("onSaveSuccess", () => {
      this.handleFormChange();
    })), this.initDRTabPages(), this.form || await this.calcDrTabPagesState();
  }
  /**
   * 处理表单数据变更
   *
   * @memberof DRTabController
   */
  handleFormChange() {
    const t = this.getData()[0].srfuf !== V.UPDATE;
    this.setDRTabPagesState(this.state.drTabPages, t);
  }
  /**
   * 设置关系分页状态
   *
   * @param {IDRTabPagesState[]} drTabPages 关系分页
   * @param {boolean} disabled 禁用状态
   * @memberof DRTabController
   */
  setDRTabPagesState(t, s) {
    t.forEach((e) => {
      e.tag !== this.model.uniqueTag && (e.disabled = s);
    });
  }
  /**
   * 初始化关系分页数据
   *
   * @memberof DRTabController
   */
  initDRTabPages() {
    var g, m, p;
    const {
      editItemCaption: t,
      editItemCapLanguageRes: s,
      hideEditItem: e,
      editItemSysImage: o,
      uniqueTag: i,
      dedrtabPages: n
    } = this.model, h = [];
    let c = t;
    s && (c = ibiz.i18n.t(s.lanResTag, t)), e ? this.state.defaultName = (n == null ? void 0 : n[0].id) || "" : (h.push({
      tag: i,
      caption: c,
      hidden: !!e,
      disabled: !1,
      sysImage: o,
      fullPath: this.routeDepth ? P(this.router.currentRoute.value, this.routeDepth) : ""
    }), this.state.defaultName = ""), n == null || n.forEach((d) => {
      let v = d.caption;
      d.capLanguageRes && (v = ibiz.i18n.t(d.capLanguageRes.lanResTag, d.caption));
      const {
        enableMode: w,
        dataAccessAction: S,
        testAppDELogicId: J,
        testScriptCode: $,
        counterMode: Y
      } = d;
      h.push({
        tag: d.id,
        caption: v,
        sysImage: d.sysImage,
        hidden: !1,
        disabled: !1,
        counterId: d.counterId,
        dataAccessAction: S,
        enableMode: w,
        testAppDELogicId: J,
        testScriptCode: $,
        counterMode: Y
      });
    }), this.state.drTabPages = h, this.view.state.srfnav ? this.state.activeName = this.view.state.srfnav : this.state.activeName = h[0].tag;
    const u = !!this.routeDepth && D(this.routeDepth), r = (g = this.model.dedrtabPages) == null ? void 0 : g.find(
      (d) => d.id === this.state.activeName
    );
    if (r) {
      const v = (m = C(this.router.currentRoute.value).pathNodes[this.routeDepth]) == null ? void 0 : m.viewName, w = (p = r.appViewId) == null ? void 0 : p.split(".")[1];
      if (w && v && w !== v) {
        const S = P(
          this.router.currentRoute.value,
          this.routeDepth + 1
        );
        this.handleTabChange(u, S);
        return;
      }
    }
    this.handleTabChange(u);
  }
  /**
   * 处理分页改变
   *
   * @author lxm
   * @date 2023-12-21 05:31:59
   * @param {boolean} [isRoutePushed=false] 是否是路由已经跳转过了
   */
  handleTabChange(t = !1, s) {
    var i;
    const { activeName: e } = this.state, o = (i = this.model.dedrtabPages) == null ? void 0 : i.find(
      (n) => n.id === e
    );
    o ? (this.setVisible("navPos"), this.openNavPosView(o, t, s)) : (this.setVisible("form"), this.routeDepth && this.state.drTabPages[0] && this.router.push(this.state.drTabPages[0].fullPath));
  }
  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRTabController
   */
  setVisible(t) {
    var e;
    const s = (e = this.view.layoutPanel) == null ? void 0 : e.panelItems.view_form;
    t === "form" ? (s && (s.state.visible = !0, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !1, this.navPos.state.keepAlive = !0)) : (s && (s.state.visible = !1, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !0, this.navPos.state.keepAlive = !0));
  }
  /**
   * 准备参数
   *
   * @param {IDEDRCtrlItem} drTabPages 关系分页
   * @return {*}
   * @memberof DRTabController
   */
  prepareParams(t) {
    const { navigateContexts: s, navigateParams: e } = t, o = {
      navContexts: s,
      navParams: e
    }, i = {
      context: this.context,
      params: this.params,
      data: this.getData()[0]
    }, { resultContext: n, resultParams: h } = k(o, i), c = Object.assign(this.context.clone(), n, {
      currentSrfNav: t.id
    }), u = { ...this.params, ...h };
    return { context: c, params: u };
  }
  /**
   * 打开导航占位视图
   *
   * @author lxm
   * @date 2023-12-21 05:40:07
   * @param {IDEDRCtrlItem} drTabPages
   * @param {boolean} [isRoutePushed=false]
   * @return {*}  {Promise<void>}
   */
  async openNavPosView(t, s = !1, e) {
    var n;
    const { context: o, params: i } = this.prepareParams(t);
    (n = this.navPos) == null || n.openView({
      key: e || t.id,
      context: o,
      params: i,
      viewId: t.appViewId,
      isRoutePushed: s
    });
  }
  /**
   * 初始化计数器
   * @author lxm
   * @date 2024-01-18 05:12:02
   * @protected
   * @return {*}  {Promise<void>}
   */
  async initCounter() {
    const { appCounterRefs: t } = this.model, s = t == null ? void 0 : t[0];
    if (s) {
      const e = C(this.router.currentRoute.value);
      this.routeDepth && (e.pathNodes = e.pathNodes.slice(0, this.routeDepth - 1));
      const o = O(e);
      this.counter = await A.getCounterByRef(
        s,
        this.context,
        o ? { srfcustomtag: o, ...this.params } : { ...this.params }
      ), this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this), this.counter.onChange(this.calcItemStateByCounter);
    }
  }
  /**
   * 监听组件销毁
   *
   * @author zhanghengfeng
   * @date 2024-04-10 19:04:40
   * @protected
   * @return {*}  {Promise<void>}
   */
  async onDestroyed() {
    await super.onDestroyed(), this.counter && (this.counter.offChange(this.calcItemStateByCounter), this.counter.destroy());
  }
}
function ot(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !U(a);
}
const B = /* @__PURE__ */ L({
  name: "IBizRouteDrTabControl",
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
    }
  },
  setup() {
    const a = _((...c) => new it(...c)), l = z("route-drtab-control"), t = K(), s = q({}), e = (c) => {
      Object.assign(s, c);
    };
    a.evt.on("onCreated", () => {
      a.counter && a.counter.onChange(e, !0);
    }), F(() => {
      var c;
      (c = a.counter) == null || c.offChange(e);
    }), a.setRouter(t);
    const o = () => {
      a.handleTabChange();
    }, i = (c) => {
      var r, g, m;
      const u = (r = a.model.dedrtabPages) == null ? void 0 : r.find((p) => p.id === c.paneName);
      if (u) {
        const d = (g = C(n).pathNodes[a.routeDepth]) == null ? void 0 : g.viewName, v = (m = u.appViewId) == null ? void 0 : m.split(".")[1];
        if (v && d && v === d)
          return;
      }
      a.state.activeName = c.paneName, a.handleTabChange();
    }, n = G();
    let h = "";
    return a.routeDepth && (h = P(n, a.routeDepth)), y(() => t.currentRoute.value, (c, u) => {
      var r, g;
      if (a.routeDepth && a.navPos) {
        const {
          pathNodes: m
        } = C(c), {
          pathNodes: p
        } = C(u), d = P(u, a.routeDepth + 1), v = P(n, a.routeDepth + 1);
        if (d === v)
          return;
        const w = ((r = m[a.routeDepth + 1]) == null ? void 0 : r.viewName) === "route-modal" || ((g = p[a.routeDepth + 1]) == null ? void 0 : g.viewName) === "route-modal";
        v && !w && a.navPos.openView({
          key: v,
          isRoutePushed: !0,
          context: a.context.clone(),
          params: {
            ...a.params
          }
        });
      }
    }), y(() => n.fullPath, (c, u) => {
      if (c !== u) {
        const r = a.routeDepth;
        if (r && P(n, a.routeDepth) === h) {
          const m = C(n), {
            srfnav: p
          } = m.pathNodes[r - 1], d = !!a.routeDepth && D(a.routeDepth);
          if (p && a.state.activeName && a.state.activeName !== p)
            a.state.activeName = p, a.handleTabChange(d);
          else if (!p) {
            const v = !!a.routeDepth && !D(a.routeDepth);
            (a.state.activeName !== a.state.defaultName || v) && (a.state.activeName = a.state.defaultName, a.handleTabChange(d));
          }
        }
      }
    }, {
      immediate: !0
    }), {
      c: a,
      ns: l,
      counterData: s,
      handleTabChange: o,
      handleTabClick: i
    };
  },
  render() {
    let a;
    const {
      isCreated: l,
      drTabPages: t,
      isCalculatedPermission: s
    } = this.c.state;
    return f(b("iBizControlBase"), {
      controller: this.c,
      class: this.ns.b()
    }, {
      default: () => [l && s && f(b("el-tabs"), {
        modelValue: this.c.state.activeName,
        onTabClick: this.handleTabClick
      }, ot(a = t.map((e) => {
        const o = e.counterId ? this.counterData[e.counterId] : void 0;
        return e.hidden ? null : f(b("el-tab-pane"), {
          class: this.ns.e("tab-item"),
          label: e.caption + o,
          disabled: e.disabled,
          name: e.tag
        }, {
          label: () => f("span", {
            class: this.ns.b("label")
          }, [f("span", {
            class: this.ns.be("label", "text")
          }, [e.caption]), !X(o) && f(b("iBizBadge"), {
            class: this.ns.e("counter"),
            value: o,
            counterMode: e.counterMode
          }, null)])
        });
      })) ? a : {
        default: () => [a]
      })]
    });
  }
});
class nt {
  constructor() {
    I(this, "component", "IBizRouteDrTabControl");
  }
}
const rt = j(B, function(a) {
  a.component(B.name, B), M("CUSTOM_ROUTE_DRTAB", () => new nt());
}), mt = {
  install(a) {
    a.use(at), a.use(rt);
  }
};
export {
  mt as default
};
