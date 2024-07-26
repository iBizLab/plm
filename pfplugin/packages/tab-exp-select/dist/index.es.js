import './style.css';
var j = Object.defineProperty;
var L = (a, n, e) => n in a ? j(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e;
var m = (a, n, e) => (L(a, typeof n != "symbol" ? n + "" : n, e), e);
import { ControlController as A, calcItemVisibleByCounter as k, calcItemVisible as z, Srfuf as _, hasSubRoute as x, calcNavParams as F, CounterService as q, registerControlProvider as H } from "@ibiz-template/runtime";
import { getNestedRoutePath as N, useControlController as U, useNamespace as G, route2routePath as X, withInstall as J } from "@ibiz-template/vue3-util";
import { createVNode as h, defineComponent as K, ref as I, reactive as Q, watch as W, resolveComponent as w, isVNode as Y, createTextVNode as V } from "vue";
import { useRouter as Z, useRoute as $ } from "vue-router";
class ee {
  constructor() {
    m(this, "component", "IBizTabExpSelect");
  }
}
class te extends A {
  constructor() {
    super(...arguments);
    /**
     * 分组关系分页数据
     */
    m(this, "groupTabPages", []);
    /**
     * 计数器对象
     * @author lxm
     * @date 2024-01-18 05:12:35
     * @type {AppCounter}
     */
    m(this, "counter");
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    m(this, "router");
  }
  /**
   * 导航占位控制器
   *
   * @readonly
   * @memberof DRTabController
   */
  get navPos() {
    var e;
    return (e = this.view.layoutPanel) == null ? void 0 : e.panelItems.nav_pos;
  }
  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRTabController
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
  setRouter(e) {
    this.router = e;
  }
  /**
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRTabController
   */
  getData() {
    var e;
    return ((e = this.form) == null ? void 0 : e.getData()) || [{}];
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRTabController
   */
  initState() {
    super.initState(), this.state.drTabPages = [], this.state.showMore = !1;
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
   * @date 2024-05-16 17:05:01
   */
  calcItemStateByCounter() {
    if (this.state.drTabPages.forEach((e) => {
      const s = k(e, this.counter);
      s !== void 0 && (e.hidden = !s);
    }), this.state.activeName) {
      const { visible: e, defaultVisibleItem: s } = this.getItemVisibleState(
        this.state.activeName
      );
      !e && s && (this.state.activeName = s.tag, this.handleTabChange());
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
  getItemVisibleState(e) {
    let s = !0, o;
    return this.state.drTabPages.forEach((i) => {
      !o && !i.hidden && (o = i), i.tag === e && (s = !i.hidden);
    }), {
      visible: s,
      defaultVisibleItem: o
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
  async calcPermitted(e) {
    var r;
    let s = !0;
    const o = (r = this.getData()) != null && r.length ? this.getData()[0] : void 0, i = await z(
      e,
      this.context,
      this.params,
      this.model.appDataEntityId,
      this.model.appId,
      o
    );
    i !== void 0 && (s = i), e.hidden = !s;
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
      this.state.drTabPages.map(async (e) => {
        await this.calcPermitted(e);
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
    await super.onMounted(), this.form && (this.form.evt.on("onLoadSuccess", async (e) => {
      const s = e.data[0];
      this.view.state.srfactiveviewdata = s, Object.prototype.hasOwnProperty.call(s, "srfreadonly") && (this.view.context.srfreadonly = s.srfreadonly), await this.calcDrTabPagesState(), this.handleFormChange();
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
    const e = this.getData()[0].srfuf !== _.UPDATE;
    this.setDRTabPagesState(this.state.drTabPages, e);
  }
  /**
   * 设置关系分页状态
   *
   * @param {IDRTabPagesState[]} drTabPages 关系分页
   * @param {boolean} disabled 禁用状态
   * @memberof DRTabController
   */
  setDRTabPagesState(e, s) {
    e.forEach((o) => {
      o.tag !== this.model.uniqueTag && (o.disabled = s);
    });
  }
  /**
   * 初始化关系分页数据
   *
   * @memberof DRTabController
   */
  initDRTabPages() {
    const {
      editItemCaption: e,
      editItemCapLanguageRes: s,
      hideEditItem: o,
      editItemSysImage: i,
      uniqueTag: r,
      dedrtabPages: p
    } = this.model, d = [], u = [];
    let f = e;
    s && (f = ibiz.i18n.t(s.lanResTag, e)), o ? this.state.defaultName = (p == null ? void 0 : p[0].id) || "" : (d.push({
      tag: r,
      caption: f,
      hidden: !!o,
      disabled: !1,
      sysImage: i,
      fullPath: this.routeDepth ? N(this.router.currentRoute.value, this.routeDepth) : ""
    }), this.state.defaultName = ""), p == null || p.forEach((c) => {
      let b = c.caption;
      c.capLanguageRes && (b = ibiz.i18n.t(c.capLanguageRes.lanResTag, c.caption));
      const {
        enableMode: y,
        dataAccessAction: S,
        testAppDELogicId: v,
        testScriptCode: P,
        counterMode: R
      } = c, t = {
        tag: c.id,
        caption: b,
        sysImage: c.sysImage,
        hidden: !1,
        disabled: !1,
        counterId: c.counterId,
        pid: c.group_name,
        dataAccessAction: S,
        enableMode: y,
        testAppDELogicId: v,
        testScriptCode: P,
        counterMode: R
      };
      if (c.itemTag) {
        Object.assign(t, { pid: c.itemTag });
        const l = u.findIndex(
          (g) => g.tag === c.itemTag
        );
        if (l === -1) {
          const g = {
            tag: c.itemTag,
            caption: c.itemTag,
            children: [t]
          };
          u.push(g);
        } else
          u[l].children.push(t);
      } else
        u.push(t);
      d.push(t);
    }), this.state.drTabPages = d, this.groupTabPages = u, this.view.state.srfnav ? this.state.activeName = this.view.state.srfnav : this.state.activeName = d[0].tag;
    const T = !!this.routeDepth && x(this.routeDepth);
    this.handleTabChange(T);
  }
  /**
   * 处理分页改变
   *
   * @author lxm
   * @date 2023-12-21 05:31:59
   * @param {boolean} [isRoutePushed=false] 是否是路由已经跳转过了
   */
  handleTabChange(e = !1) {
    var i;
    const { activeName: s } = this.state, o = (i = this.model.dedrtabPages) == null ? void 0 : i.find(
      (r) => r.id === s
    );
    o ? (this.setVisible("navPos"), this.openNavPosView(o, e)) : (this.setVisible("form"), this.routeDepth && this.state.drTabPages[0] && this.router.push(this.state.drTabPages[0].fullPath));
  }
  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRTabController
   */
  setVisible(e) {
    var o;
    const s = (o = this.view.layoutPanel) == null ? void 0 : o.panelItems.view_form;
    e === "form" ? (s && (s.state.visible = !0, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !1, this.navPos.state.keepAlive = !0)) : (s && (s.state.visible = !1, s.state.keepAlive = !0), this.navPos && (this.navPos.state.visible = !0, this.navPos.state.keepAlive = !0));
  }
  /**
   * 准备参数
   *
   * @param {IDEDRCtrlItem} drTabPages 关系分页
   * @return {*}
   * @memberof DRTabController
   */
  prepareParams(e) {
    const { navigateContexts: s, navigateParams: o } = e, i = {
      navContexts: s,
      navParams: o
    }, r = {
      context: this.context,
      params: this.params,
      data: this.getData()[0]
    }, { resultContext: p, resultParams: d } = F(i, r), u = Object.assign(this.context.clone(), p, {
      currentSrfNav: e.id
    }), f = { ...this.params, ...d };
    return { context: u, params: f };
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
  async openNavPosView(e, s = !1) {
    var r;
    const { context: o, params: i } = this.prepareParams(e);
    (r = this.navPos) == null || r.openView({
      key: e.id,
      context: o,
      params: i,
      viewId: e.appViewId,
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
    const { appCounterRefs: e } = this.model, s = e == null ? void 0 : e[0];
    s && (this.counter = await q.getCounterByRef(
      s,
      this.context,
      { ...this.params }
    ), this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this), this.counter.onChange(this.calcItemStateByCounter));
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
const ae = () => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  height: "1em",
  width: "1em"
}, [h("path", {
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null)]);
function se(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !Y(a);
}
const D = /* @__PURE__ */ K({
  name: "IBizTabExpSelect",
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
    const a = U((...t) => new te(...t)), n = G("tab-exp-select"), e = Z(), s = I(), o = I({}), i = I(!1), r = Q({});
    a.groupTabPages.forEach((t) => {
      Object.assign(r, {
        [t.tag]: !1
      });
    }), a.setRouter(e);
    const p = () => {
      a.groupTabPages.forEach((t) => {
        Object.assign(r, {
          [t.tag]: !1
        });
      });
    }, d = (t) => {
      p();
      const l = setTimeout(() => {
        i.value = !1, o.value = {}, a.state.drTabPages.findIndex((E) => E.tag === t.tag) !== -1 && (a.state.activeName = t.tag, a.handleTabChange()), clearTimeout(l);
      }, 100);
    }, u = $();
    let f = "";
    a.routeDepth && (f = N(u, a.routeDepth));
    const T = (t) => {
      o.value = t;
    }, c = () => {
      o.value = {};
    }, b = (t) => o.value.tag && o.value.tag === t.tag, y = (t) => {
      p(), r[t.tag] = !0, r[t.pid] = !0;
    }, S = (t) => {
      r[t.tag] = !1, r[t.pid] = !1;
    };
    W(() => u.fullPath, (t, l) => {
      if (t !== l) {
        const g = a.routeDepth;
        if (g && N(u, a.routeDepth) === f) {
          const M = X(u), {
            srfnav: C
          } = M.pathNodes[g - 1], B = !!a.routeDepth && x(a.routeDepth);
          if (C && a.state.activeName && a.state.activeName !== C)
            a.state.activeName = C, a.handleTabChange(B);
          else if (!C) {
            const O = !!a.routeDepth && !x(a.routeDepth);
            (a.state.activeName !== a.state.defaultName || O) && (a.state.activeName = a.state.defaultName, a.handleTabChange(B));
          }
        }
      }
    }, {
      immediate: !0
    });
    const v = (t) => {
      const l = t.caption ? String(t.caption).length > 10 : !1;
      return h("div", {
        class: [n.be("popper", "item"), n.is("activated", a.state.activeName === t.tag), n.is("secondary-show", b(t))],
        onClick: () => d(t),
        onMouseenter: () => y(t),
        onMouseleave: () => S(t)
      }, [t.sysImage && h(w("iBizIcon"), {
        class: [n.bem("popper", "item", "icon")],
        icon: t.sysImage
      }, null), t.caption && h("span", {
        title: l ? t.caption : "",
        class: [n.bem("popper", "item", "caption")]
      }, [t.caption]), t.children && h("span", {
        class: [n.bem("popper", "item", "left-arrow")]
      }, [ae()])]);
    }, P = (t) => h(w("el-popover"), {
      trigger: "hover",
      offset: 0,
      "popper-class": [n.b("popper"), n.b("secondary-popper")],
      placement: "right-start",
      "hide-after": 0,
      visible: r[t.tag],
      "onUpdate:visible": (l) => r[t.tag] = l,
      onShow: () => T(t),
      onHide: () => c()
    }, {
      reference: () => v(t),
      default: () => h("div", {
        class: [n.be("popper", "content"), n.be("popper", "secondary-popper")]
      }, [t.children.map((l) => l.children ? P(l) : v(l))])
    });
    return {
      c: a,
      ns: n,
      controlRef: s,
      renderContent: () => h(w("el-popover"), {
        trigger: "click",
        placement: "bottom-start",
        visible: i.value,
        "onUpdate:visible": (t) => i.value = t,
        "popper-class": n.b("popper"),
        onHide: () => p()
      }, {
        reference: () => h("div", {
          class: n.b("content"),
          onClick: () => i.value === !0
        }, [h("span", {
          class: n.be("content", "hashtag")
        }, [V("#")]), h("span", {
          class: n.be("content", "caption")
        }, [V("维度")])]),
        default: () => h("div", {
          class: n.be("popper", "content")
        }, [a.groupTabPages.map((t) => t.children ? P(t) : v(t))])
      })
    };
  },
  render() {
    let a;
    return h(w("iBizControlBase"), {
      ref: "controlRef",
      controller: this.c,
      class: [this.ns.b()]
    }, se(a = this.renderContent()) ? a : {
      default: () => [a]
    });
  }
}), oe = J(
  D,
  function(a) {
    a.component(D.name, D), H(
      "CUSTOM_TAB_EXP_SELECT",
      () => new ee()
    );
  }
), pe = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(a) {
    a.use(oe);
  }
};
export {
  oe as IBizTabExpSelectControl,
  pe as default
};
