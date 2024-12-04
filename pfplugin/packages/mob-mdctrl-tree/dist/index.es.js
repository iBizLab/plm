import './style.css';
var F = Object.defineProperty;
var z = (o, t, e) => t in o ? F(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var x = (o, t, e) => (z(o, typeof t != "symbol" ? t + "" : t, e), e);
import { useControlController as j, useNamespace as O, withInstall as B } from "@ibiz-template/vue3-util";
import { MDCtrlController as A, GridRowState as G, ControlVO as V, registerControlProvider as q } from "@ibiz-template/runtime";
import { createVNode as r, resolveComponent as p, isVNode as U, defineComponent as X, ref as H, computed as S, createTextVNode as Q } from "vue";
import { chunk as Y, debounce as J } from "lodash-es";
class W extends A {
  constructor() {
    super(...arguments);
    /**
     * 值属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    x(this, "valueField");
    /**
     * 父属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    x(this, "parentField");
    /**
     * 仅展开条件
     * - 点击项满足条件时不触发激活，仅改变展开状态
     * @private
     * @type {IData}
     * @memberof MobMDCtrlTreeController
     */
    x(this, "onlyExpand", {});
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
    var e, l, i;
    await super.onCreated();
    try {
      if ((e = this.model.controlParam) != null && e.ctrlParams) {
        const n = this.model.controlParam.ctrlParams;
        this.valueField = (l = n.VALUEFIELD) == null ? void 0 : l.toLowerCase(), this.parentField = (i = n.PARENTFIELD) == null ? void 0 : i.toLowerCase(), n.ONLYEXPAND && (this.onlyExpand = JSON.parse(n.ONLYEXPAND));
      }
    } catch (n) {
      ibiz.log.error(n);
    }
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
    const l = e.silent === !0;
    l || await this.startLoading();
    try {
      const i = e.isInitialLoad === !0, n = e.isLoadMore === !0;
      i ? this.state.curPage = 1 : n && (this.state.curPage += 1);
      const { context: d } = this.handlerAbilityParams(e), m = await this.getFetchParams(e == null ? void 0 : e.viewParam);
      Object.assign(m, {
        srfshowmode: "tree"
      });
      const h = await this.service.fetch(d, m);
      typeof h.total == "number" && (this.state.total = h.total), typeof h.totalx == "number" && (this.state.totalx = h.totalx), typeof h.totalPages == "number" && (this.state.totalPages = h.totalPages), n ? this.state.items.push(...h.data) : this.state.items = h.data, await this.afterLoad(e, h.data), this.state.isLoaded = !0, await this._evt.emit("onLoadSuccess", {
        isInitialLoad: i
      });
    } catch (i) {
      throw await this._evt.emit("onLoadError", void 0), this.actionNotification("FETCHERROR", {
        error: i
      }), i;
    } finally {
      l || await this.endLoading();
    }
    return this.state.items.forEach((i, n) => {
      i.srfserialnum = n + 1;
    }), this.actionNotification("FETCHSUCCESS"), this.state.items;
  }
  /**
   * 计算节点数据
   *
   * @memberof MobMDCtrlTreeController
   */
  calcNodes() {
    if (this.valueField && this.parentField) {
      const e = this.state.items.map((n) => n[this.valueField]).filter((n) => n !== void 0), l = this.state.items.filter(
        (n) => !e.includes(n[this.parentField])
      ), i = (n) => {
        n.forEach((d) => {
          const m = this.state.items.filter(
            (h) => d[this.valueField] && h[this.parentField] === d[this.valueField]
          );
          m.length > 0 && (i(m), d._leaf = !1), d._children = m;
        });
      };
      i(l), this.state.rootNodes = l;
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
  async afterLoad(e, l) {
    return await super.afterLoad(e, l), this.calcNodes(), l;
  }
  /**
   * 行单击
   *
   * @param {IData} data
   * @param {MouseEvent} [event]
   * @return {*}  {Promise<void>}
   * @memberof MobMDCtrlTreeController
   */
  async onRowClick(e, l) {
    const i = Object.keys(this.onlyExpand);
    (i.length > 0 ? i.every(
      (d) => Object.prototype.hasOwnProperty.call(e, d) && e[d] === this.onlyExpand[d]
    ) : !1) ? e._expand = !e._expand : await super.onRowClick(e, l);
  }
}
function $(o) {
  return typeof o == "function" || Object.prototype.toString.call(o) === "[object Object]" && !U(o);
}
function K(o) {
  const t = () => {
    const n = o;
    Array.isArray(n.state.simpleData) && (n.state.items = Y(n.state.simpleData, n.state.size)[n.state.curPage - 1] || [], n.state.rows = n.state.items.map((d) => new G(new V(d), n)));
  };
  function e(n) {
    if (!(!n || n === o.state.curPage)) {
      if (o.state.curPage = n, o.context && o.context.srfrunmode === "DESIGN") {
        t();
        return;
      }
      o.load();
    }
  }
  function l(n) {
    if (!(!n || n === o.state.size)) {
      if (o.state.size = n, o.context && o.context.srfrunmode === "DESIGN") {
        t();
        return;
      }
      o.state.curPage === 1 && o.load();
    }
  }
  function i() {
    o.load();
  }
  return {
    onPageChange: e,
    onPageSizeChange: l,
    onPageRefresh: i
  };
}
function Z(o, t, e) {
  const l = (s) => t.state.selectedData.findIndex((g) => g.srfkey === s.srfkey) !== -1, i = (s) => {
    const c = l(s);
    return [e.b("item"), e.is("active", c)];
  }, n = (s) => {
    const c = l(s);
    return r(p("van-checkbox"), {
      class: e.bm("item", "right"),
      checked: c
    }, null);
  }, d = (s) => r("img", {
    class: e.b("image"),
    src: s.image,
    alt: ""
  }, null), m = (s) => {
    const c = {};
    return Object.prototype.hasOwnProperty.call(s, "image") && Object.assign(c, {
      icon: d(s)
    }), o.mode === "SELECT" && Object.assign(c, {
      "right-icon": n(s)
    }), r(p("van-cell"), {
      "is-link": !0,
      title: s.srfmajortext || "",
      onClick: () => t.onRowClick(s)
    }, $(c) ? c : {
      default: () => [c]
    });
  }, h = (s, c) => {
    const {
      context: g,
      params: b
    } = t, v = r(p("iBizControlShell"), {
      data: s,
      modelData: c,
      context: g,
      params: b,
      onClick: () => t.onRowClick(s)
    }, null);
    return o.mode === "SELECT" ? r("div", {
      class: e.b("select-item")
    }, [r(p("van-checkbox"), {
      checked: l(s),
      onClick: () => t.onRowClick(s)
    }, null), v]) : v;
  }, M = (s) => {
    const c = t.model.itemLayoutPanel, g = i(s), b = s._leaf !== !1;
    return r("div", {
      class: g
    }, [r("div", {
      class: e.be("item", "expand-icon")
    }, [b ? null : s._expand ? r(p("ion-icon"), {
      name: "chevron-down-circle",
      onClick: () => s._expand = !s._expand
    }, null) : r(p("ion-icon"), {
      name: "chevron-forward-circle",
      onClick: () => s._expand = !s._expand
    }, null)]), r("div", {
      class: e.be("item", "content")
    }, [o.modelData.name !== "simplelist" && c ? h(s, c) : m(s)])]);
  }, I = () => {
    const {
      isLoaded: s
    } = t.state;
    if (s)
      return s && r(p("iBizNoData"), {
        text: t.model.emptyText,
        emptyTextLanguageRes: t.model.emptyTextLanguageRes
      }, null);
  }, D = () => r("div", {
    class: e.b("load-more"),
    onClick: () => t.loadMore()
  }, [r("span", null, [ibiz.i18n.t("control.common.loadMore")])]);
  return {
    renderNoData: I,
    renderItem: M,
    renderLoadMore: () => {
      let s = null;
      return t.state.items.length < t.state.total && t.state.total > t.state.size && (s = D()), s;
    }
  };
}
const E = /* @__PURE__ */ X({
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
  setup(o) {
    const t = j((...a) => new W(...a)), e = O("mob-mdctrl-tree"), l = O("control-".concat(t.model.controlType.toLowerCase())), {
      renderItem: i,
      renderNoData: n,
      renderLoadMore: d
    } = Z(o, t, e), m = H(!1), h = S(() => t.model.enablePagingBar === !0 || t.model.pagingMode !== 2 ? !0 : t.state.items.length >= t.state.total || t.state.isLoading || t.state.total <= t.state.size), {
      onPageChange: M
    } = K(t), I = S(() => {
      var f;
      const a = [];
      return (f = t.model.delistItems) == null || f.forEach((u) => {
        var C, y;
        u.enableSort && a.push({
          value: u.id,
          label: ibiz.i18n.t(((C = u == null ? void 0 : u.capLanguageRes) == null ? void 0 : C.lanResTag) || "", u.caption || ((y = u == null ? void 0 : u.capLanguageRes) == null ? void 0 : y.defaultContent))
        });
      }), a;
    }), D = S(() => {
      if (t.state.sortQuery) {
        const [a, f] = t.state.sortQuery.split(",");
        return {
          key: a,
          order: f
        };
      }
      return null;
    }), k = (a) => {
      t.setSort(a.key, a.order), t.load({
        isInitialLoad: !0
      });
    }, s = J(async () => {
      t.loadMore();
    }, 500), c = () => {
      s();
    };
    t.evt.on("onLoadSuccess", () => {
      m.value = !0, window.requestAnimationFrame(() => {
        m.value = !1;
      });
    });
    const g = S(() => !t.model.enableGroup && t.model.pagingMode === 3), b = t.model.deuiactionGroup, v = t.model.deuiactionGroup2, N = (a, f) => {
      const u = a.uiactionGroupDetails || [];
      if (!u || u.length === 0)
        return null;
      const C = t.state.rows.find((L) => f.srfkey === L.data.srfkey), y = C.uaColStates[a.id];
      return u.map((L) => {
        const w = y[L.id];
        return w.visible === !1 ? null : r(p("van-button"), {
          square: !0,
          type: "primary",
          text: L.caption,
          disabled: w.disabled || w.loading,
          onClick: (R) => t.onActionClick(L, C, R)
        }, null);
      });
    }, P = (a) => {
      var u, C;
      return b || v ? r("div", {
        class: e.e("node")
      }, [r(p("van-swipe-cell"), {
        key: a.srfkey,
        class: e.b("slider-item")
      }, {
        left: v ? () => N(v, a) : null,
        right: b ? () => N(b, a) : null,
        default: () => i(a)
      }), a._expand && ((u = a._children) == null ? void 0 : u.map((y) => P(y)))]) : r("div", {
        class: e.e("node")
      }, [i(a), a._expand && ((C = a._children) == null ? void 0 : C.map((y) => P(y)))]);
    }, T = () => t.state.rootNodes.map((a) => P(a)), _ = () => t.state.groups.map((a) => r("div", {
      title: a.caption
    }, [r("div", {
      class: e.b("group-caption")
    }, [Q(" "), a.caption]), a.children.map((f) => P(f.data))]));
    return {
      c: t,
      ns: e,
      ns2: l,
      renderMDContent: () => r(p("van-list"), {
        class: [e.e("content"), e.is("show-underLine", t.model.controlStyle !== "EXTVIEW1")],
        finished: h.value || t.state.isLoading || m.value,
        "immediate-check": !1,
        onLoad: () => c()
      }, {
        default: () => [t.model.groupMode !== "NONE" ? _() : T()]
      }),
      renderNoData: n,
      showCollapseOrExpandIcon: g,
      onPageChange: M,
      renderLoadMore: d,
      sortVal: D,
      delistItems: I,
      onSortChange: k
    };
  },
  render() {
    const o = this.c.model.enablePagingBar && this.c.model.pagingMode === 1;
    return r(p("iBizControlBase"), {
      controller: this.c,
      class: [this.ns.is("enable-page", o || this.showCollapseOrExpandIcon)]
    }, {
      default: () => [this.delistItems.length > 0 && r(p("iBizMdCtrlSetting"), {
        class: [this.ns.e("setting"), this.ns2.e("setting")],
        listItems: this.delistItems,
        sort: this.sortVal,
        onSortChange: this.onSortChange
      }, null), this.c.state.isCreated && (this.c.state.rows.length > 0 ? this.renderMDContent() : this.renderNoData()), o ? r(p("van-pagination"), {
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
class tt {
  constructor() {
    x(this, "component", "IBizMDCtrlTreeControl");
  }
}
const it = B(
  E,
  function(o) {
    o.component(E.name, E), q(
      "CUSTOM_MOB_MDCTRL_TREE",
      () => new tt()
    );
  }
);
export {
  it as IBizMDCtrlTreeControl,
  it as default
};
