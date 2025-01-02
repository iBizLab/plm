import './style.css';
var N = Object.defineProperty;
var P = (a, t, e) => t in a ? N(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var d = (a, t, e) => (P(a, typeof t != "symbol" ? t + "" : t, e), e);
import { calcDeCodeNameById as I, registerPanelItemProvider as x } from "@ibiz-template/runtime";
import { defineComponent as B, createVNode as o, createTextVNode as V, ref as S, watch as D, onUnmounted as R, h as k, resolveComponent as b, isVNode as K } from "vue";
import { useNamespace as g, getNestedRoutePath as p, NavPosState as O, NavPosController as z, route2routePath as A } from "@ibiz-template/vue3-util";
import { useRouter as E, useRoute as M } from "vue-router";
import { IBizContext as v } from "@ibiz-template/core";
const _ = /* @__PURE__ */ B({
  name: "IBizBreadcrumb",
  props: {
    items: {
      type: Array,
      required: !0
    }
  },
  emits: {
    click: (a) => !0
  },
  setup(a, {
    emit: t
  }) {
    return {
      ns: g("breadcrumb"),
      handleClick: (s, c) => {
        s.stopPropagation(), c !== a.items.length - 1 && t("click", a.items[c]);
      }
    };
  },
  render() {
    return o("div", {
      class: this.ns.b()
    }, [this.items.map((a, t) => o("div", {
      class: [this.ns.e("item"), this.ns.is("active", t === this.items.length - 1)]
    }, [o("div", {
      class: this.ns.e("item-content"),
      onClick: (e) => {
        this.handleClick(e, t);
      }
    }, [o("div", {
      class: this.ns.em("item", "text")
    }, [a.caption || ""])]), t !== this.items.length - 1 && o("div", {
      class: this.ns.em("item", "separator")
    }, [V("/")])]))]);
  }
});
function j(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !K(a);
}
const w = /* @__PURE__ */ B({
  name: "IBizBreadcrumbNavPos",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Object,
      required: !0
    }
  },
  setup(a) {
    const t = a.controller, e = g("breadcrumb-nav-pos"), r = (n) => {
      t.onViewCreated(n);
    }, s = E(), c = M(), i = S(!1);
    if (t.setRouter(s), t.routeDepth) {
      const n = p(c, t.routeDepth);
      D(() => c.fullPath, () => {
        const u = p(c, t.routeDepth);
        if (n === u && c.matched.length > t.routeDepth) {
          if (c.matched.length === t.routeDepth + 1 && (i.value = !!c.name, i.value))
            return;
          t.onRouteChange(c);
        }
      }, {
        immediate: !0
      });
    }
    return R(() => {
      t.clearBreadcrumb();
    }), {
      ns: e,
      c: t,
      isPresetView: i,
      onViewCreated: r
    };
  },
  render() {
    const {
      state: a
    } = this.c, {
      currentKey: t,
      cacheKeys: e,
      navViewMsgs: r,
      cache: s,
      breadcrumb: c
    } = a, i = t && r[t] ? k(b("IBizViewShell"), {
      key: t,
      class: this.ns.e("view-pos"),
      context: r[t].context,
      params: r[t].params,
      viewId: r[t].viewId,
      onCreated: this.onViewCreated
    }) : null;
    return o("div", {
      class: [this.ns.b(), this.ns.m(this.modelData.id), ...this.controller.containerClass, this.ns.is("show-breadcrumb", this.controller.state.showBreadcrumd)]
    }, [this.controller.state.showBreadcrumd && o("div", {
      class: this.ns.e("header")
    }, [o("div", {
      class: this.ns.em("header", "left")
    }, [o(_, {
      items: c,
      onClick: (n) => this.c.handleBreadcrumbSkip(n)
    }, null)]), o("div", {
      class: this.ns.em("header", "right")
    }, [o("div", {
      id: "breadcrumb-nav-pos-searchbar"
    }, null), o("div", {
      id: "breadcrumb-nav-pos-toolbar"
    }, null)])]), s ? o(b("keepAlive"), {
      include: e,
      max: 30,
      isKey: !0
    }, j(i) ? i : {
      default: () => [i]
    }) : i]);
  }
});
class q extends O {
  constructor() {
    super(...arguments);
    /**
     * 面包屑数据
     *
     * @type {IBreadcrumb[]}
     * @memberof BreadcrumbNavPosState
     */
    d(this, "breadcrumb", []);
    /**
     * 显示面包屑
     *
     * @type {boolean}
     * @memberof BreadcrumbNavPosState
     */
    d(this, "showBreadcrumd", !0);
  }
}
var f;
class U extends z {
  constructor() {
    super(...arguments);
    /**
     * 缓存识别码
     *
     * @protected
     * @type {string}
     * @memberof BreadcrumbNavPosController
     */
    d(this, "localStorageKey", "".concat((f = this.panel.view.model.codeName) == null ? void 0 : f.toLowerCase(), "@breadcrumb-nav-pos"));
  }
  /**
   * 创建导航占位状态对象
   *
   * @protected
   * @return {*}  {BreadcrumbNavPosState}
   * @memberof BreadcrumbNavPosController
   */
  createState() {
    var e;
    return new q((e = this.parent) == null ? void 0 : e.state);
  }
  /**
   * 查找指定面包屑
   *
   * @param {string} key 缓存key
   * @return {*}  {(IBreadcrumb | undefined)}
   * @memberof BreadcrumbNavPosController
   */
  findBreadcrumb(e) {
    return this.state.breadcrumb.find((r) => this.calcCacheKey(r) === e);
  }
  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof BreadcrumbNavPosController
   */
  async onInit() {
    await super.onInit(), this.rawItemParams.show_breadcrumb === "false" && (this.state.showBreadcrumd = !1), this.state.breadcrumb = this.getBreadcrumb();
  }
  /**
   * 根据路由计算面包屑数据
   *
   * @protected
   * @param {Route} route
   * @return {*}  {Promise<void>}
   * @memberof BreadcrumbNavPosController
   */
  async calcBreadcrumbByRoute(e) {
    let { pathNodes: r } = A(e);
    r = r.slice(this.routeDepth), this.state.breadcrumb = await Promise.all(
      r.map(async (s, c) => {
        var m;
        const { context: i, params: n, viewName: u } = s, l = await ibiz.hub.config.view.get(u);
        let h = "undefined";
        if (l.appDataEntityId) {
          const C = I(l.appDataEntityId);
          h = (m = s.context) == null ? void 0 : m[C.toLowerCase()];
        }
        const y = this.calcCacheKey({
          key: h,
          viewId: u
        });
        return this.findBreadcrumb(y) || {
          key: h,
          params: n,
          context: v.create(
            {
              ...i,
              srfdefaulttoroutedepth: this.routeDepth + 2 + c
            },
            this.panel.context
          ),
          viewId: u
        };
      })
    );
  }
  /**
   * 处理面包屑跳转
   *
   * @param {IBreadcrumb} item
   * @memberof BreadcrumbNavPosController
   */
  handleBreadcrumbSkip(e) {
    e.fullPath && this.router.push(e.fullPath);
  }
  /**
   * 路由变化
   *
   * @param {Route} route
   * @memberof BreadcrumbNavPosController
   */
  async onRouteChange(e) {
    await this.calcBreadcrumbByRoute(e), this.state.breadcrumb.forEach((r) => {
      const s = this.calcCacheKey(r);
      this.state.navViewMsgs[s] = r;
    }), this.curNavViewMsg = this.state.breadcrumb[this.state.breadcrumb.length - 1], super.onRouteChange(e);
  }
  /**
   * 打开视图
   *
   * @param {INavViewMsg} openViewMsg
   * @memberof BreadcrumbNavPosController
   */
  openView(e) {
    e.viewId && super.openView(e);
  }
  /**
   * 视图创建
   *
   * @param {EventBase} event
   * @memberof BreadcrumbNavPosController
   */
  onViewCreated(e) {
    super.onViewCreated(e), this.curNavViewMsg.caption = e.view.model.caption, e.view.evt.on("onViewInfoChange", ({ dataInfo: r }) => {
      this.curNavViewMsg.caption = r;
    }), this.saveBreadcrumb();
  }
  /**
   * 保存面包屑
   *
   * @memberof BreadcrumbNavPosController
   */
  saveBreadcrumb() {
    const e = [];
    this.state.breadcrumb.forEach((r) => {
      var c;
      const s = { ...r };
      s.context = (c = r.context) == null ? void 0 : c.getOwnContext(), e.push(s);
    }), localStorage.setItem(this.localStorageKey, JSON.stringify(e));
  }
  /**
   * 获取面包屑
   *
   * @return {*}  {IBreadcrumb[]}
   * @memberof BreadcrumbNavPosController
   */
  getBreadcrumb() {
    const e = localStorage.getItem(this.localStorageKey);
    try {
      if (e) {
        const r = JSON.parse(e);
        return Array.isArray(r) ? (r.forEach((s) => {
          s.context = v.create(s.context, this.panel.context);
        }), r) : [];
      }
    } catch (r) {
      ibiz.log.error(r);
    }
    return [];
  }
  /**
   * 清除面包屑
   *
   * @memberof BreadcrumbNavPosController
   */
  clearBreadcrumb() {
    localStorage.removeItem(this.localStorageKey);
  }
}
class J {
  constructor() {
    d(this, "component", "IBizBreadcrumbNavPos");
  }
  /**
   * 创建控制器
   *
   * @param {IPanelItem} panelItem
   * @param {PanelController} panel
   * @param {(PanelItemController | undefined)} parent
   * @return {*}  {Promise<IPanelItemNavPosController>}
   * @memberof BreadcrumbNavPosProvider
   */
  async createController(t, e, r) {
    const s = new U(t, e, r);
    return await s.init(), s;
  }
}
const W = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(a) {
    a.component(w.name, w), x(
      "CUSTOM_BREADCRUMB_NAV_POS",
      () => new J()
    );
  }
};
export {
  W as default
};
