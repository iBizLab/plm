import './style.css';
var w = Object.defineProperty;
var E = (n, t, e) => t in n ? w(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var D = (n, t, e) => (E(n, typeof t != "symbol" ? t + "" : t, e), e);
import { useControlController as N, useNamespace as T, withInstall as O } from "@ibiz-template/vue3-util";
import { MDCtrlController as _, GridRowState as F, ControlVO as R, registerControlProvider as B } from "@ibiz-template/runtime";
import { createVNode as i, resolveComponent as m, isVNode as j, defineComponent as z, computed as P, createTextVNode as G } from "vue";
import { chunk as A } from "lodash-es";
class V extends _ {
  constructor() {
    super(...arguments);
    /**
     * 值属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    D(this, "valueField");
    /**
     * 父属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    D(this, "parentField");
  }
  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof MobMDCtrlTreeController
   */
  initState() {
    super.initState(), this.state.rootNodes = [];
  }
  /**
   * 生命周期-创建完成
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobMDCtrlTreeController
   */
  async onCreated() {
    var r, l, o, d;
    await super.onCreated();
    const { controlParam: e } = this.model;
    this.valueField = (l = (r = e == null ? void 0 : e.ctrlParams) == null ? void 0 : r.VALUEFIELD) == null ? void 0 : l.toLowerCase(), this.parentField = (d = (o = e == null ? void 0 : e.ctrlParams) == null ? void 0 : o.PARENTFIELD) == null ? void 0 : d.toLowerCase();
  }
  /**
   * 部件加载数据行为 重写
   * - 默认合并 srfshowmode 参数
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[]>}
   * @memberof MobMDCtrlTreeController
   */
  async load(e = {}) {
    if (this.state.isSimple)
      return [];
    const r = e.silent === !0;
    r || await this.startLoading();
    try {
      const l = e.isInitialLoad === !0, o = e.isLoadMore === !0;
      l ? this.state.curPage = 1 : o && (this.state.curPage += 1);
      const { context: d } = this.handlerAbilityParams(e), h = await this.getFetchParams(e == null ? void 0 : e.viewParam);
      Object.assign(h, {
        srfshowmode: "tree"
      });
      const u = await this.service.fetch(d, h);
      typeof u.total == "number" && (this.state.total = u.total), typeof u.totalx == "number" && (this.state.totalx = u.totalx), typeof u.totalPages == "number" && (this.state.totalPages = u.totalPages), o ? this.state.items.push(...u.data) : this.state.items = u.data, await this.afterLoad(e, u.data), this.state.isLoaded = !0, await this._evt.emit("onLoadSuccess", {
        isInitialLoad: l
      });
    } catch (l) {
      throw await this._evt.emit("onLoadError", void 0), this.actionNotification("FETCHERROR", {
        error: l
      }), l;
    } finally {
      r || await this.endLoading();
    }
    return this.state.items.forEach((l, o) => {
      l.srfserialnum = o + 1;
    }), this.actionNotification("FETCHSUCCESS"), this.state.items;
  }
  /**
   * 计算节点数据
   *
   * @memberof MobMDCtrlTreeController
   */
  calcNodes() {
    if (this.valueField && this.parentField) {
      const e = this.state.items.map((o) => o[this.valueField]).filter((o) => o !== void 0), r = this.state.items.filter(
        (o) => !e.includes(o[this.parentField])
      ), l = (o) => {
        o.forEach((d) => {
          const h = this.state.items.filter(
            (u) => d[this.valueField] && u[this.parentField] === d[this.valueField]
          );
          h.length > 0 && (l(h), d._leaf = !1), d._children = h;
        });
      };
      l(r), this.state.rootNodes = r;
    } else
      this.state.rootNodes = this.state.items;
  }
  /**
   * 部件加载后处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<IData[]>}
   * @memberof MobMDCtrlTreeController
   */
  async afterLoad(e, r) {
    return await super.afterLoad(e, r), this.calcNodes(), console.log(this.state.rootNodes), r;
  }
}
function q(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !j(n);
}
function U(n) {
  const t = () => {
    const o = n;
    Array.isArray(o.state.simpleData) && (o.state.items = A(o.state.simpleData, o.state.size)[o.state.curPage - 1] || [], o.state.rows = o.state.items.map((d) => new F(new R(d), o)));
  };
  function e(o) {
    if (!(!o || o === n.state.curPage)) {
      if (n.state.curPage = o, n.context && n.context.srfrunmode === "DESIGN") {
        t();
        return;
      }
      n.load();
    }
  }
  function r(o) {
    if (!(!o || o === n.state.size)) {
      if (n.state.size = o, n.context && n.context.srfrunmode === "DESIGN") {
        t();
        return;
      }
      n.state.curPage === 1 && n.load();
    }
  }
  function l() {
    n.load();
  }
  return {
    onPageChange: e,
    onPageSizeChange: r,
    onPageRefresh: l
  };
}
function H(n, t, e) {
  const r = (a) => t.state.selectedData.findIndex((f) => f.srfkey === a.srfkey) !== -1, l = (a) => {
    const c = r(a);
    return [e.b("item"), e.is("active", c)];
  }, o = (a) => {
    const c = r(a);
    return i(m("van-checkbox"), {
      class: e.bm("item", "right"),
      checked: c
    }, null);
  }, d = (a) => i("img", {
    class: e.b("image"),
    src: a.image,
    alt: ""
  }, null), h = (a) => {
    const c = {};
    return Object.prototype.hasOwnProperty.call(a, "image") && Object.assign(c, {
      icon: d(a)
    }), n.mode === "SELECT" && Object.assign(c, {
      "right-icon": o(a)
    }), i(m("van-cell"), {
      "is-link": !0,
      title: a.srfmajortext || "",
      onClick: () => t.onRowClick(a)
    }, q(c) ? c : {
      default: () => [c]
    });
  }, u = (a, c) => {
    const {
      context: f,
      params: s
    } = t, p = i(m("iBizControlShell"), {
      data: a,
      modelData: c,
      context: f,
      params: s,
      onClick: () => t.onRowClick(a)
    }, null);
    return n.mode === "SELECT" ? i("div", {
      class: e.b("select-item")
    }, [i(m("van-checkbox"), {
      checked: r(a),
      onClick: () => t.onRowClick(a)
    }, null), p]) : p;
  }, C = (a) => {
    const c = t.model.itemLayoutPanel, f = l(a), s = a._leaf !== !1;
    return i("div", {
      class: f
    }, [i("div", {
      class: e.be("item", "expand-icon")
    }, [s ? null : a._expand ? i(m("ion-icon"), {
      name: "chevron-down-circle",
      onClick: () => a._expand = !a._expand
    }, null) : i(m("ion-icon"), {
      name: "chevron-forward-circle",
      onClick: () => a._expand = !a._expand
    }, null)]), i("div", {
      class: e.be("item", "content")
    }, [n.modelData.name !== "simplelist" && c ? u(a, c) : h(a)])]);
  }, b = () => {
    const {
      isLoaded: a
    } = t.state;
    if (a)
      return a && i(m("iBizNoData"), {
        text: t.model.emptyText,
        emptyTextLanguageRes: t.model.emptyTextLanguageRes
      }, null);
  }, M = () => i("div", {
    class: e.b("load-more"),
    onClick: () => t.loadMore()
  }, [i("span", null, [ibiz.i18n.t("control.common.loadMore")])]);
  return {
    renderNoData: b,
    renderItem: C,
    renderLoadMore: () => {
      let a = null;
      return t.state.items.length < t.state.total && t.state.total > t.state.size && (a = M()), a;
    }
  };
}
const S = /* @__PURE__ */ z({
  name: "IBizMDCtrlTreeControl",
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
    mdctrlActiveMode: {
      type: Number,
      default: 1
    },
    singleSelect: {
      type: Boolean,
      default: !0
    },
    selectedData: {
      type: Object,
      required: !1
    },
    mode: {
      type: String,
      default: "LIST"
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(n) {
    const t = N((...s) => new V(...s)), e = T("mob-mdctrl-tree"), {
      renderItem: r,
      renderNoData: l,
      renderLoadMore: o
    } = H(n, t, e), d = P(() => t.model.enablePagingBar === !0 || t.model.pagingMode !== 2 ? !0 : t.state.items.length >= t.state.total || t.state.isLoading || t.state.total <= t.state.size), {
      onPageChange: h
    } = U(t), u = P(() => !t.model.enableGroup && t.model.pagingMode === 3), C = t.model.deuiactionGroup, b = t.model.deuiactionGroup2, M = (s, p) => {
      const g = s.uiactionGroupDetails || [];
      if (!g || g.length === 0)
        return null;
      const y = t.state.rows.find((L) => p.srfkey === L.data.srfkey), x = y.uaColStates[s.id];
      return g.map((L) => {
        const I = x[L.id];
        return I.visible === !1 ? null : i(m("van-button"), {
          square: !0,
          type: "primary",
          text: L.caption,
          disabled: I.disabled || I.loading,
          onClick: (k) => t.onActionClick(L, y, k)
        }, null);
      });
    }, v = (s) => {
      var g, y;
      return C || b ? i("div", {
        class: e.e("node")
      }, [i(m("van-swipe-cell"), {
        key: s.srfkey
      }, {
        left: b ? () => M(b, s) : null,
        right: C ? () => M(C, s) : null,
        default: () => r(s)
      }), s._expand && ((g = s._children) == null ? void 0 : g.map((x) => v(x)))]) : i("div", {
        class: e.e("node")
      }, [r(s), s._expand && ((y = s._children) == null ? void 0 : y.map((x) => v(x)))]);
    }, a = () => t.state.rootNodes.map((s) => v(s)), c = () => t.state.groups.map((s) => i("div", {
      title: s.caption
    }, [i("div", {
      class: e.b("group-caption")
    }, [G(" "), s.caption]), s.children.map((p) => v(p.data))]));
    return {
      c: t,
      ns: e,
      renderMDContent: () => i(m("van-list"), {
        class: [e.e("content"), e.is("show-underLine", t.model.controlStyle !== "EXTVIEW1")],
        finished: d.value,
        "immediate-check": !1,
        onLoad: () => t.loadMore()
      }, {
        default: () => [t.model.groupMode !== "NONE" ? c() : a()]
      }),
      renderNoData: l,
      showCollapseOrExpandIcon: u,
      onPageChange: h,
      renderLoadMore: o
    };
  },
  render() {
    const n = this.c.model.enablePagingBar && this.c.model.pagingMode === 1;
    return i(m("iBizControlBase"), {
      controller: this.c,
      class: [this.ns.is("enable-page", n || this.showCollapseOrExpandIcon)]
    }, {
      default: () => [this.c.state.isCreated && (this.c.state.rows.length > 0 ? this.renderMDContent() : this.renderNoData()), n ? i(m("van-pagination"), {
        class: this.ns.e("pagination"),
        "total-items": this.c.state.total,
        "model-value": this.c.state.curPage,
        "items-per-page": this.c.state.size,
        "page-count": this.c.state.totalPages,
        "force-ellipses": !0,
        onChange: this.onPageChange
      }, null) : null, this.showCollapseOrExpandIcon && this.renderLoadMore()]
    });
  }
});
class W {
  constructor() {
    D(this, "component", "IBizMDCtrlTreeControl");
  }
}
const Z = O(
  S,
  function(n) {
    n.component(S.name, S), B(
      "CUSTOM_MOB_MDCTRL_TREE",
      () => new W()
    );
  }
);
export {
  Z as IBizMDCtrlTreeControl,
  Z as default
};
