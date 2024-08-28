import './style.css';
var yt = Object.defineProperty;
var Ct = (t, e, n) => e in t ? yt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var K = (t, e, n) => (Ct(t, typeof e != "symbol" ? e + "" : e, n), n);
import { useControlController as bt, useNamespace as it, withInstall as xt } from "@ibiz-template/vue3-util";
import { GridRowState as Rt, ControlVO as vt, GridController as St, registerControlProvider as Dt, ControlType as Et } from "@ibiz-template/runtime";
import { ref as q, watch as U, computed as V, reactive as Tt, createVNode as g, resolveComponent as y, defineComponent as kt, createTextVNode as W, mergeProps as Nt, h as At } from "vue";
import { RuntimeError as $ } from "@ibiz-template/core";
function Lt(t) {
  function e(i) {
    !i || i === t.state.curPage || (t.state.curPage = i, t.load());
  }
  function n(i) {
    !i || i === t.state.size || (t.state.size = i, t.state.curPage === 1 && t.load());
  }
  function o() {
    t.load();
  }
  return { onPageChange: e, onPageSizeChange: n, onPageRefresh: o };
}
function Bt(t) {
  const e = q();
  let n = !1;
  async function o(r, d, u) {
    if (ibiz.config.grid.editShowMode === "row" && t.model.enableRowEdit) {
      const h = t.findRowState(r);
      h && h.showRowEdit !== !0 && await t.switchRowEdit(h, !0);
    } else
      t.onRowClick(r);
  }
  function i(r) {
    t.onDbRowClick(r);
  }
  function c(r) {
    n || t.setSelection(r);
  }
  U(
    [
      () => e.value,
      () => t.state.isLoaded,
      () => t.state.selectedData
    ],
    ([r, d, u]) => {
      !d || !r || (t.state.singleSelect ? u[0] ? e.value.setCurrentRow(u[0], !0) : e.value.setCurrentRow() : (n = !0, e.value.clearSelection(), u.forEach((h) => e.value.toggleRowSelection(h, !0)), n = !1));
    }
  );
  function s(r) {
    const { prop: d, order: u } = r, h = t.fieldColumns[d].model.appDEFieldId;
    let f;
    u === "ascending" ? f = "asc" : u === "descending" && (f = "desc"), t.setSort(h, f), t.load();
  }
  function l({ row: r }) {
    let d = "";
    t.state.selectedData.length > 0 && t.state.selectedData.forEach((h) => {
      h === r && (d = "current-row");
    });
    const u = t.findRowState(r);
    return u != null && u.showRowEdit && (d += " editing-row"), r.srfkey && (d += " id-".concat(r.srfkey)), d;
  }
  function a({
    _row: r,
    column: d,
    _rowIndex: u,
    _columnIndex: h
  }) {
    var m;
    const f = (m = t.model.degridColumns) == null ? void 0 : m.find((p) => p.codeName === d.property);
    return f && f.headerSysCss && f.headerSysCss.cssName ? f.headerSysCss.cssName : "";
  }
  return U(
    () => t.state.sortQuery,
    (r) => {
      if (r) {
        const d = t.state.sortQuery.split(",")[0], u = t.state.sortQuery.split(",")[1];
        if (e.value && d && u) {
          const h = u === "desc" ? "descending" : "ascending";
          setTimeout(() => {
            var f;
            (f = e.value) == null || f.sort(d, h);
          });
        }
      }
    }
  ), {
    tableRef: e,
    onRowClick: o,
    onDbRowClick: i,
    onSelectionChange: c,
    onSortChange: s,
    handleRowClassName: l,
    handleHeaderCellClassName: a
  };
}
function Pt(t, e) {
  const n = () => {
    e.data && (t.state.items = e.data, t.state.rows = e.data.map((l) => new Rt(new vt(l), t)));
  }, o = V(() => {
    var a;
    const l = Object.values(t.fieldColumns).find(
      (r) => r.model.appDEFieldId === t.model.minorSortAppDEFieldId
    );
    return {
      prop: l == null ? void 0 : l.model.codeName,
      order: ((a = t.model.minorSortDir) == null ? void 0 : a.toLowerCase()) === "desc" ? "descending" : "ascending"
    };
  });
  t.evt.on("onCreated", async () => {
    e.isSimple && (n(), t.state.isLoaded = !0);
  }), U(
    () => e.data,
    () => {
      e.isSimple && n();
    },
    {
      deep: !0
    }
  );
  const i = V(() => {
    const { state: l } = t;
    if (t.model.enableGroup) {
      const a = [];
      return l.groups.forEach((r) => {
        if (!r.children.length)
          return;
        const d = [...r.children], u = d.shift();
        a.push({
          srfkey: (u == null ? void 0 : u.srfkey) || r.caption,
          isGroupData: !0,
          caption: r.caption,
          first: u,
          children: d
        });
      }), a;
    }
    return l.rows.map((a) => a.data);
  }), c = V(() => {
    if (t.isMultistageHeader)
      return t.model.degridColumns || [];
    const l = [];
    return t.state.columnStates.forEach((a) => {
      var d, u;
      if (a.hidden)
        return;
      const r = ((d = t.fieldColumns[a.key]) == null ? void 0 : d.model) || ((u = t.uaColumns[a.key]) == null ? void 0 : u.model);
      r && l.push(r);
    }), l;
  });
  return { tableData: i, renderColumns: c, defaultSort: o, summaryMethod: ({
    columns: l
  }) => l.map((a, r) => r === 0 ? t.aggTitle : t.state.aggResult[a.property]) };
}
const _ = (t) => {
  t.stopPropagation();
}, J = async (t, e, n, o) => {
  n.grid.setSelection([o.data]), await n.onActionClick(t, o, e);
}, Z = Math.min, G = Math.max, F = Math.round, N = (t) => ({
  x: t,
  y: t
});
function st(t) {
  return t.split("-")[0];
}
function Ot(t) {
  return t.split("-")[1];
}
function Gt(t) {
  return t === "x" ? "y" : "x";
}
function Mt(t) {
  return t === "y" ? "height" : "width";
}
function rt(t) {
  return ["top", "bottom"].includes(st(t)) ? "y" : "x";
}
function zt(t) {
  return Gt(rt(t));
}
function lt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function tt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const c = rt(e), s = zt(e), l = Mt(s), a = st(e), r = c === "y", d = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[l] / 2 - i[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: d,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ot(e)) {
    case "start":
      f[s] -= h * (n && r ? -1 : 1);
      break;
    case "end":
      f[s] += h * (n && r ? -1 : 1);
      break;
  }
  return f;
}
const _t = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: c = [],
    platform: s
  } = n, l = c.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let r = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: u
  } = tt(r, o, a), h = o, f = {}, m = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: R,
      fn: D
    } = l[p], {
      x: E,
      y: T,
      data: O,
      reset: w
    } = await D({
      x: d,
      y: u,
      initialPlacement: o,
      placement: h,
      strategy: i,
      middlewareData: f,
      rects: r,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = E != null ? E : d, u = T != null ? T : u, f = {
      ...f,
      [R]: {
        ...f[R],
        ...O
      }
    }, w && m <= 50) {
      m++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (r = w.rects === !0 ? await s.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : w.rects), {
        x: d,
        y: u
      } = tt(r, h, a)), p = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: h,
    strategy: i,
    middlewareData: f
  };
};
function A(t) {
  return at(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function b(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function L(t) {
  var e;
  return (e = (at(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function at(t) {
  return t instanceof Node || t instanceof b(t).Node;
}
function S(t) {
  return t instanceof Element || t instanceof b(t).Element;
}
function v(t) {
  return t instanceof HTMLElement || t instanceof b(t).HTMLElement;
}
function et(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof b(t).ShadowRoot;
}
function z(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = x(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ft(t) {
  return ["table", "td", "th"].includes(A(t));
}
function Y(t) {
  const e = Q(), n = x(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ht(t) {
  let e = P(t);
  for (; v(e) && !H(e); ) {
    if (Y(e))
      return e;
    e = P(e);
  }
  return null;
}
function Q() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function H(t) {
  return ["html", "body", "#document"].includes(A(t));
}
function x(t) {
  return b(t).getComputedStyle(t);
}
function I(t) {
  return S(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function P(t) {
  if (A(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    et(t) && t.host || // Fallback.
    L(t)
  );
  return et(e) ? e.host : e;
}
function ct(t) {
  const e = P(t);
  return H(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : v(e) && z(e) ? e : ct(e);
}
function X(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = ct(t), c = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = b(i);
  return c ? e.concat(s, s.visualViewport || [], z(i) ? i : [], s.frameElement && n ? X(s.frameElement) : []) : e.concat(i, X(i, [], n));
}
function ut(t) {
  const e = x(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = v(t), c = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, l = F(n) !== c || F(o) !== s;
  return l && (n = c, o = s), {
    width: n,
    height: o,
    $: l
  };
}
function dt(t) {
  return S(t) ? t : t.contextElement;
}
function B(t) {
  const e = dt(t);
  if (!v(e))
    return N(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: c
  } = ut(e);
  let s = (c ? F(n.width) : n.width) / o, l = (c ? F(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const It = /* @__PURE__ */ N(0);
function ft(t) {
  const e = b(t);
  return !Q() || !e.visualViewport ? It : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Vt(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== b(t) ? !1 : e;
}
function M(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), c = dt(t);
  let s = N(1);
  e && (o ? S(o) && (s = B(o)) : s = B(t));
  const l = Vt(c, n, o) ? ft(c) : N(0);
  let a = (i.left + l.x) / s.x, r = (i.top + l.y) / s.y, d = i.width / s.x, u = i.height / s.y;
  if (c) {
    const h = b(c), f = o && S(o) ? b(o) : o;
    let m = h.frameElement;
    for (; m && o && f !== h; ) {
      const p = B(m), R = m.getBoundingClientRect(), D = x(m), E = R.left + (m.clientLeft + parseFloat(D.paddingLeft)) * p.x, T = R.top + (m.clientTop + parseFloat(D.paddingTop)) * p.y;
      a *= p.x, r *= p.y, d *= p.x, u *= p.y, a += E, r += T, m = b(m).frameElement;
    }
  }
  return lt({
    width: d,
    height: u,
    x: a,
    y: r
  });
}
function Wt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = v(n), c = L(n);
  if (n === c)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = N(1);
  const a = N(0);
  if ((i || !i && o !== "fixed") && ((A(n) !== "body" || z(c)) && (s = I(n)), v(n))) {
    const r = M(n);
    l = B(n), a.x = r.x + n.clientLeft, a.y = r.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - s.scrollLeft * l.x + a.x,
    y: e.y * l.y - s.scrollTop * l.y + a.y
  };
}
function $t(t) {
  return Array.from(t.getClientRects());
}
function ht(t) {
  return M(L(t)).left + I(t).scrollLeft;
}
function jt(t) {
  const e = L(t), n = I(t), o = t.ownerDocument.body, i = G(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), c = G(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + ht(t);
  const l = -n.scrollTop;
  return x(o).direction === "rtl" && (s += G(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: c,
    x: s,
    y: l
  };
}
function qt(t, e) {
  const n = b(t), o = L(t), i = n.visualViewport;
  let c = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
  if (i) {
    c = i.width, s = i.height;
    const r = Q();
    (!r || r && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: c,
    height: s,
    x: l,
    y: a
  };
}
function Ut(t, e) {
  const n = M(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, c = v(t) ? B(t) : N(1), s = t.clientWidth * c.x, l = t.clientHeight * c.y, a = i * c.x, r = o * c.y;
  return {
    width: s,
    height: l,
    x: a,
    y: r
  };
}
function nt(t, e, n) {
  let o;
  if (e === "viewport")
    o = qt(t, n);
  else if (e === "document")
    o = jt(L(t));
  else if (S(e))
    o = Ut(e, n);
  else {
    const i = ft(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return lt(o);
}
function mt(t, e) {
  const n = P(t);
  return n === e || !S(n) || H(n) ? !1 : x(n).position === "fixed" || mt(n, e);
}
function Xt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = X(t, [], !1).filter((l) => S(l) && A(l) !== "body"), i = null;
  const c = x(t).position === "fixed";
  let s = c ? P(t) : t;
  for (; S(s) && !H(s); ) {
    const l = x(s), a = Y(s);
    !a && l.position === "fixed" && (i = null), (c ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || z(s) && !a && mt(t, s)) ? o = o.filter((d) => d !== s) : i = l, s = P(s);
  }
  return e.set(t, o), o;
}
function Yt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? Xt(e, this._c) : [].concat(n), o], l = s[0], a = s.reduce((r, d) => {
    const u = nt(e, d, i);
    return r.top = G(u.top, r.top), r.right = Z(u.right, r.right), r.bottom = Z(u.bottom, r.bottom), r.left = G(u.left, r.left), r;
  }, nt(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Qt(t) {
  return ut(t);
}
function Kt(t, e, n) {
  const o = v(e), i = L(e), c = n === "fixed", s = M(t, !0, c, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = N(0);
  if (o || !o && !c)
    if ((A(e) !== "body" || z(i)) && (l = I(e)), o) {
      const r = M(e, !0, c, e);
      a.x = r.x + e.clientLeft, a.y = r.y + e.clientTop;
    } else
      i && (a.x = ht(i));
  return {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function ot(t, e) {
  return !v(t) || x(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function pt(t, e) {
  const n = b(t);
  if (!v(t))
    return n;
  let o = ot(t, e);
  for (; o && Ft(o) && x(o).position === "static"; )
    o = ot(o, e);
  return o && (A(o) === "html" || A(o) === "body" && x(o).position === "static" && !Y(o)) ? n : o || Ht(t) || n;
}
const Jt = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || pt, c = this.getDimensions;
  return {
    reference: Kt(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await c(n)
    }
  };
};
function Zt(t) {
  return x(t).direction === "rtl";
}
const te = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wt,
  getDocumentElement: L,
  getClippingRect: Yt,
  getOffsetParent: pt,
  getElementRects: Jt,
  getClientRects: $t,
  getDimensions: Qt,
  getScale: B,
  isElement: S,
  isRTL: Zt
}, ee = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: te,
    ...n
  }, c = {
    ...i.platform,
    _c: o
  };
  return _t(t, e, {
    ...i,
    platform: c
  });
};
function ne(t, e) {
  let n;
  const o = q(!1), i = q(), c = Tt({}), s = (u) => {
    if (!t.value)
      throw new $("找不到表格组件引用");
    const h = t.value.$el;
    let f = ".el-table__row";
    u.data.srfkey && (f += ".id-".concat(u.data.srfkey));
    const m = h.querySelector(f);
    if (!m)
      throw new $("找不到对应的表格行dom元素");
    return m;
  }, l = async (u) => {
    const h = s(u);
    if (!n)
      throw new $("拿不到pop组件的实例");
    const f = n.$el, {
      x: m,
      y: p
    } = await ee(h, f, {
      placement: "bottom"
    });
    Object.assign(c, {
      top: "".concat(p, "px"),
      left: "".concat(m, "px")
    }), i.value = u, o.value = !0;
  }, a = async () => {
    i.value && e.switchRowEdit(i.value, !1, !0);
  }, r = async () => {
    i.value && e.switchRowEdit(i.value, !1, !1);
  }, d = () => {
    const u = o.value && e.state.rows[e.state.rows.length - 1].showRowEdit;
    return [g("div", {
      class: "row-edit-popover__placeholder",
      style: {
        display: u ? "block" : "none"
      }
    }, null), g(y("iBizRowEditPopover"), {
      ref: (h) => {
        n = h;
      },
      style: c,
      show: o.value,
      onConfirm: a,
      onCancel: r
    }, null)];
  };
  return e.evt.on("onRowEditChange", (u) => {
    u.row.showRowEdit ? setTimeout(() => {
      l(u.row);
    }, 0) : (i.value = void 0, o.value = !1, Object.assign(c, {
      top: void 0,
      left: void 0
    }));
  }), {
    renderPopover: d
  };
}
class oe extends St {
  /**
   * 添加附件
   *
   * @memberof AttachGridController
   */
  async addAttachMent(e) {
    const { appDataEntityId: n } = this.model;
    n && (await ibiz.hub.getApp(this.context.srfappid).deService.exec(n, "create", this.context, e), await this.load({ isInitialLoad: !1 }), await this.evt.emit("onSaveSuccess", void 0));
  }
}
function ie(t, e, n, o) {
  var u;
  if (e.hideDefault)
    return null;
  const {
    codeName: i,
    width: c
  } = e, s = t.columns[i], l = t.state.columnStates.find((h) => h.key === i), r = s.isAdaptiveColumn || !t.hasAdaptiveColumn && o === n.length - 1 ? "min-width" : "width";
  let d = "";
  return e.columnType === "UAGRIDCOLUMN" && (d = "attachment-ua-column"), g(y("el-table-column"), Nt({
    label: e.caption,
    prop: i,
    "class-name": d,
    "label-class-name": d
  }, {
    [r]: c
  }, {
    fixed: l.fixed,
    sortable: e.enableSort ? "custom" : !1,
    align: ((u = e.align) == null ? void 0 : u.toLowerCase()) || "center"
  }), {
    default: ({
      row: h
    }) => {
      var p, R;
      let f = h;
      h.isGroupData && (f = h.first);
      const m = t.findRowState(f);
      if (m) {
        if (e.columnType === "UAGRIDCOLUMN") {
          const E = it("grid-ua-column"), T = ((p = s.model.deuiactionGroup) == null ? void 0 : p.uiactionGroupDetails) || [], O = T.filter((C) => C.actionLevel !== 250), w = T.filter((C) => C.actionLevel === 250);
          return g("div", {
            class: [E.b(), (R = s.model.cellSysCss) == null ? void 0 : R.cssName]
          }, [w.length && g(y("iBizActionToolbar"), {
            onDblclick: _,
            onClick: _,
            "action-details": w,
            "actions-state": m.uaColStates[s.model.codeName],
            onActionClick: (C, k) => {
              J(C, k, s, m);
            }
          }, null), O.length && g(y("iBizActionToolbar"), {
            onDblclick: _,
            onClick: _,
            mode: "dropdown",
            caption: "· · ·",
            "action-details": O,
            "actions-state": m.uaColStates[s.model.codeName],
            onActionClick: (C, k) => {
              J(C, k, s, m);
            }
          }, null)]);
        }
        const D = y(t.providers[i].component);
        return At(D, {
          controller: s,
          row: m,
          key: f.tempsrfkey + i
        });
      }
      return null;
    }
  });
}
function gt(t, e, n, o) {
  var i, c;
  if (e.columnType === "GROUPGRIDCOLUMN") {
    const s = ((i = e.degridColumns) == null ? void 0 : i.filter((r) => !r.hideDefault)) || [], {
      width: l
    } = e, a = ((c = e.align) == null ? void 0 : c.toLowerCase()) || "center";
    return g(y("el-table-column"), {
      prop: e.codeName,
      label: e.caption,
      "min-width": l,
      align: a
    }, {
      default: () => s.map((r, d) => gt(t, r, n, d))
    });
  }
  return ie(t, e, n, o);
}
const j = /* @__PURE__ */ kt({
  name: "AttachmentGridControl",
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
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: {
      type: Number,
      default: void 0
    },
    singleSelect: {
      type: Boolean,
      default: void 0
    },
    rowEditOpen: {
      type: Boolean,
      default: void 0
    },
    isSimple: {
      type: Boolean,
      required: !1
    },
    data: {
      type: Array,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = bt((...w) => new oe(...w)), n = it("control-".concat(e.model.controlType.toLowerCase())), {
      tableRef: o,
      onRowClick: i,
      onDbRowClick: c,
      onSelectionChange: s,
      onSortChange: l,
      handleRowClassName: a,
      handleHeaderCellClassName: r
    } = Bt(e), {
      onPageChange: d,
      onPageRefresh: u,
      onPageSizeChange: h
    } = Lt(e), f = () => {
      var C;
      const {
        isLoaded: w
      } = e.state;
      if (w) {
        const k = (C = e.model.controls) == null ? void 0 : C.find((wt) => wt.name === "".concat(e.model.name, "_quicktoolbar"));
        return k ? g(y("iBizToolbarControl"), {
          modelData: k,
          context: e.context,
          params: e.params,
          class: n.b("quick-toolbar")
        }, null) : g(y("iBizNoData"), {
          text: e.model.emptyText,
          emptyTextLanguageRes: e.model.emptyTextLanguageRes
        }, null);
      }
      return null;
    }, {
      tableData: m,
      renderColumns: p,
      defaultSort: R,
      summaryMethod: D
    } = Pt(e, t), {
      renderPopover: E
    } = ne(o, e);
    return {
      c: e,
      ns: n,
      tableRef: o,
      tableData: m,
      renderColumns: p,
      onDbRowClick: c,
      onRowClick: i,
      onSelectionChange: s,
      onSortChange: l,
      onPageChange: d,
      onPageSizeChange: h,
      onPageRefresh: u,
      handleRowClassName: a,
      handleHeaderCellClassName: r,
      renderNoData: f,
      summaryMethod: D,
      renderPopover: E,
      defaultSort: R,
      onColumnStateClick: (w) => {
        e.setColumnVisible(w);
      },
      renderBatchToolBar: () => {
        var C;
        const w = (C = e.model.controls) == null ? void 0 : C.find((k) => k.name === "".concat(e.model.name, "_batchtoolbar"));
        if (!(!w || e.state.singleSelect))
          return g("div", {
            class: [n.b("batch-toolbar"), n.is("show", e.state.selectedData.length > 0)]
          }, [g("div", {
            class: n.b("batch-toolbar-content")
          }, [g("div", {
            class: n.b("batch-toolbar-text")
          }, [W("已选中"), e.state.selectedData.length, W("项")]), g("div", {
            class: n.b("batch-toolbar-separator")
          }, [W("|")]), g(y("iBizToolbarControl"), {
            modelData: w,
            context: e.context,
            params: e.params,
            class: n.b("batch-toolbar-items")
          }, null)])]);
      }
    };
  },
  render() {
    if (!this.c.state.isCreated)
      return;
    const {
      state: t
    } = this.c, {
      hideHeader: e,
      enablePagingBar: n
    } = this.c.model;
    return g(y("iBizControlBase"), {
      class: [this.ns.is("show-header", !e), this.ns.is("enable-page", n), this.ns.is("enable-group", this.c.model.enableGroup)],
      controller: this.c
    }, {
      default: () => [g(y("el-table"), {
        ref: "tableRef",
        class: [this.ns.e("table"), this.ns.is("attachment", !0)],
        "default-sort": this.defaultSort,
        border: !0,
        "show-header": !e,
        "show-summary": this.c.enableAgg,
        "summary-method": this.summaryMethod,
        "highlight-current-row": t.singleSelect,
        "row-class-name": this.handleRowClassName,
        "header-cell-class-name": this.handleHeaderCellClassName,
        "row-key": "tempsrfkey",
        data: this.tableData,
        onRowClick: this.onRowClick,
        onRowDblclick: this.onDbRowClick,
        onSelectionChange: this.onSelectionChange,
        onSortChange: this.onSortChange,
        "tooltip-effect": "light"
      }, {
        empty: this.renderNoData,
        default: () => [!t.singleSelect && g(y("el-table-column"), {
          "class-name": this.ns.e("selection"),
          type: "selection",
          width: "55"
        }, null), this.renderColumns.map((o, i) => gt(this.c, o, this.renderColumns, i))],
        append: () => this.renderPopover()
      }), n && g(y("iBizPagination"), {
        total: t.total,
        curPage: t.curPage,
        size: t.size,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null), this.c.model.enableCustomized && !e && g("div", {
        class: this.ns.b("setting-box")
      }, [g(y("iBizGridSetting"), {
        columnStates: t.columnStates,
        controller: this.c
      }, null)]), this.renderBatchToolBar()]
    });
  }
});
class se {
  constructor() {
    K(this, "component", "AttachmentGridControl");
  }
}
const re = xt(
  j,
  (t) => {
    t.component(j.name, j), Dt(
      "".concat(Et.GRID, "_RENDER_ATTACHMENT_GRID"),
      () => new se()
    );
  }
), fe = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(re);
  }
};
export {
  re as IBizAttachmentGridControl,
  fe as default
};
