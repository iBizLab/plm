import './style.css';
var Qt = Object.defineProperty;
var Jt = (n, e, t) => e in n ? Qt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var J = (n, e, t) => (Jt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { TreeGridExRowState as yt, TreeGridExFieldColumnController as Zt, GanttService as Xt, getChildNodeRSs as Z, getRootNode as te, handleAllSettled as ut, getTreeNode as ht, GanttDataSetNodeData as ee, GanttController as ae, calcDeCodeNameById as ft, Srfuf as ne, TreeGridExNotifyState as oe, isValueChange as se, registerPanelItemProvider as Ct, registerControlProvider as re } from "@ibiz-template/runtime";
import { useNamespace as G, PanelRawItemController as wt, withInstall as at, useControlController as ie } from "@ibiz-template/vue3-util";
import { defineComponent as Y, createVNode as r, ref as R, computed as P, watch as vt, createTextVNode as le, resolveComponent as O, isVNode as ce, onMounted as Dt, getCurrentInstance as de, withDirectives as ue, resolveDirective as he, h as fe } from "vue";
import { createUUID as me } from "qx-util";
import p from "dayjs";
import { isObject as pe } from "lodash-es";
import { isNotNil as ge } from "ramda";
import { ModelError as ye, RuntimeError as mt, awaitTimeout as Ce } from "@ibiz-template/core";
function we(n, e, t) {
  const o = p(n), s = p(e), a = p(t);
  if (!(o instanceof p) || !(s instanceof p) || !(a instanceof p))
    throw new Error("All arguments must be dayjs objects");
  return o.isAfter(s) && o.isBefore(a) || o.isSame(s) || o.isSame(a);
}
const ve = (n) => {
  const e = new Date(n), t = p(e).day();
  return [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ][t];
}, De = (n, e) => p(n).format(e), be = (n) => {
  const e = new Date(n), t = p(e), o = p();
  return t.isSame(o, "day");
}, _e = (n, e, t) => p(n).isSame(p(e), t), nt = (n, e) => n.replace(/\${(.*?)}/g, (t, o) => {
  const [s, a] = o.split("."), l = e[s] || "";
  return pe(l) ? l[a] ? l[a] : "" : l;
}), ot = (n, e) => {
  const o = p(n).day();
  return e.includes(o);
}, pt = (n, e) => {
  let t = [], o = 0;
  const s = nt(
    e,
    n.data && n.data._deData ? n.data._deData : {}
  );
  let a = {};
  try {
    a = JSON.parse(s);
  } catch (l) {
    a = {};
  }
  return a.weekdays && (t = a.weekdays.split(",").map((l) => Number(l))), a.dayCapacityVal && (o = Number(a.dayCapacityVal)), Object.assign(a, { weekdays: t, dayCapacity: o }), a;
}, bt = (n, e, t) => (n.isAfter(e) || n.isSame(e)) && (n.isBefore(t) || n.isSame(t)), _t = (n, e) => {
  const t = Math.floor(n / e * 10) / 10, o = Math.round((n - t * e) * 10) / 10, s = new Array(e).fill(t);
  let a = 0;
  for (let l = 0; a < o; l++)
    s[l] = Math.round((s[l] + 0.1) * 10) / 10, a = Math.round((a + 0.1) * 10) / 10;
  return s;
};
function xt(n) {
  return n.getBoundingClientRect().top;
}
function It(n) {
  const e = n.getBoundingClientRect(), t = window.innerHeight || document.documentElement.clientHeight, o = e.top + e.height;
  return t - o;
}
const St = (n, e = []) => {
  const t = p(n).startOf("day");
  return e.filter((o) => {
    const s = o._beginDataItemValue ? p(o._beginDataItemValue).startOf("day") : null, a = o._endDataItemValue ? p(o._endDataItemValue).startOf("day") : null;
    return s && a && s.isAfter(a) ? !1 : !s && a && t.isSame(a, "day") || s && !a && t.isSame(s, "day") || s && a && we(t, s, a);
  }).length;
}, Tt = (n, e, t) => {
  const o = new Date(n), s = new Date(e), a = [];
  for (let l = new Date(o); l <= s; l.setDate(l.getDate() + 1))
    ot(l, t) && a.push(new Date(l));
  return a;
}, kt = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day");
  return t.filter(
    (i) => bt(
      a,
      p(i._beginDataItemValue).startOf("day"),
      p(i._endDataItemValue).startOf("day")
    )
  ).forEach((i) => {
    const d = p(i._beginDataItemValue).startOf("day"), c = p(i._endDataItemValue).startOf("day"), m = Tt(
      new Date(d.format("YYYY-MM-DD")),
      new Date(c.format("YYYY-MM-DD")),
      n
    ), f = m.length, h = i._deData[o] ? Number(i._deData[o]) : 0;
    if (f > 0 && h > 0) {
      const w = _t(h, f), D = m.findIndex(
        (E) => p(E).startOf("day").isSame(a)
      ), g = D !== -1 ? w[D] : 0;
      s = Math.round((s + g) * 10) / 10;
    }
  }), s;
}, Ot = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day"), l = p(/* @__PURE__ */ new Date()).startOf("day");
  return a.isBefore(l) ? 0 : (t.filter(
    (d) => bt(
      a,
      p(d._beginDataItemValue).startOf("day"),
      p(d._endDataItemValue).startOf("day")
    )
  ).forEach((d) => {
    let c = p(d._beginDataItemValue).startOf("day");
    const m = p(d._endDataItemValue).startOf("day");
    c.isBefore(l) && (c = l);
    const f = Tt(
      new Date(c.format("YYYY-MM-DD")),
      new Date(m.format("YYYY-MM-DD")),
      n
    ), h = f.length, w = d._deData[o] ? Number(d._deData[o]) : 0;
    if (h > 0 && w > 0) {
      const D = _t(w, h), g = f.findIndex(
        (I) => p(I).startOf("day").isSame(a)
      ), E = g !== -1 ? D[g] : 0;
      s = Math.round((s + E) * 10) / 10;
    }
  }), s);
};
const xe = /* @__PURE__ */ Y({
  name: "TopLevelCell",
  props: {
    cellData: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    showText: {
      type: Boolean,
      required: !0,
      default: !0
    },
    capacityConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["cellClick"],
  setup(n, {
    emit: e
  }) {
    const t = G("top-level-cell"), o = (c) => {
      c.stopPropagation(), e("cellClick", n.cellData);
    }, s = (c, m, f = 100) => {
      const h = c / m * f, w = f - h;
      return "polygon(0px ".concat(w, "%, 100% ").concat(w, "%, 100% ").concat(f, "%, 0px ").concat(f, "%)");
    }, a = (c, m) => {
      const f = {};
      return c < m && Object.assign(f, {
        "clip-path": s(c, m)
      }), f;
    }, l = (c, m) => {
      let f = [];
      return c === 0 ? [] : (c > m && (f = [t.em("caption", "exceed")]), c === m && (f = [t.em("caption", "saturation")]), c < m && (f = [t.em("caption", "standard")]), f);
    }, i = () => {
      const {
        column: c,
        row: m
      } = n.cellData;
      switch (n.capacityConfig.calcType) {
        case "WORKITEMCOUNT":
          return St(c.date, m.data._children);
        case "ESTIMATEDWORKLOAD":
          return kt(n.capacityConfig.weekdays, c.date, m.data._children, n.capacityConfig.fieldName);
        case "REMAININGWORKLOAD":
          return Ot(n.capacityConfig.weekdays, c.date, m.data._children, n.capacityConfig.fieldName);
      }
    };
    return {
      ns: t,
      renderContent: () => {
        const {
          column: c
        } = n.cellData;
        if (!c)
          return "";
        const m = i() || 0, f = a(m, n.capacityConfig.dayCapacity), h = l(m, n.capacityConfig.dayCapacity);
        return r("div", {
          class: [t.e("caption"), ...h],
          onClick: (w) => o(w)
        }, [n.showText ? r("span", {
          class: [t.em("caption", "text")]
        }, [String(m)]) : "", r("div", {
          class: [t.em("caption", "bkg")],
          style: f
        }, null)]);
      }
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [this.renderContent()]);
  }
});
const Ie = /* @__PURE__ */ Y({
  name: "TotalProgress",
  props: {
    row: {
      type: yt,
      required: !0
    },
    capacityConfig: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    dateRange: {
      type: Object,
      required: !0,
      default: () => {
      }
    }
  },
  setup(n) {
    const e = G("total-progress"), t = R(0), o = R(0), s = P(() => t.value / o.value * 100), a = (i, d, c) => {
      switch (i.calcType) {
        case "WORKITEMCOUNT":
          return St(d, c);
        case "ESTIMATEDWORKLOAD":
          return kt(i.weekdays, d, c, i.fieldName);
        case "REMAININGWORKLOAD":
          return Ot(i.weekdays, d, c, i.fieldName);
        default:
          return 0;
      }
    }, l = (i, d, c) => {
      const {
        start: m,
        end: f
      } = c;
      let h = 0, w = 0, D = 0;
      if (d.length > 0) {
        const g = new Date(m);
        for (; g <= new Date(f); ) {
          if (ot(g, n.capacityConfig.weekdays)) {
            h += 1;
            const E = a(i, g, d);
            w = Math.round((w + E) * 10) / 10;
          }
          g.setDate(g.getDate() + 1);
        }
        D = h * i.dayCapacity;
      }
      return {
        numerator: w,
        denominator: D
      };
    };
    return vt([() => n.row, () => n.capacityConfig], () => {
      const i = l(n.capacityConfig, n.row.data._children || [], n.dateRange);
      t.value = i.numerator, o.value = i.denominator;
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: e,
      numerator: t,
      denominator: o,
      percentage: s
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [r("span", {
      class: this.ns.e("caption")
    }, [this.numerator, le(" / "), this.denominator]), r(O("el-progress"), {
      percentage: this.percentage
    }, null)]);
  }
});
const Se = /* @__PURE__ */ Y({
  name: "IBizResourceGanttExFieldColumn",
  props: {
    controller: {
      type: Zt,
      required: !0
    },
    row: {
      type: yt,
      required: !0
    },
    parentRow: {
      type: Object
    },
    column: {
      type: Object
    },
    capacityConfig: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    groupConfig: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    ganttPosition: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    virtualTableVal: {
      type: Array,
      default: () => []
    },
    dateRange: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    level: {
      type: Number,
      default: 0
    },
    isTopFirstIndex: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = G("tree-grid-ex-field-column"), t = G("resource-gantt-ex-field-column"), o = R(), s = R({}), a = P(() => n.controller.nodeColumnControllerMap.get(n.row.data._nodeId)), l = P(() => n.row.data._nodeType !== "DE" && n.controller.isFirstShowColumn ? n.row.data._text : n.row.data[n.controller.name]), i = R(""), d = (v) => {
      i.value = v;
    }, c = P(() => {
      const v = a.value;
      return v ? v.nodeEditItem ? void 0 : v.codeList ? i.value : v.formatValue(l.value) + (v.unitName || "") : l.value;
    }), m = P(() => {
      if (n.controller.treeGrid.overflowMode === "ellipsis" && ge(l.value) && l.value !== "")
        return c.value;
    }), f = P(() => l.value && a.value && (a.value.isLinkColumn || a.value.hasClickAction)), h = (v) => {
      var y;
      (y = a.value) == null || y.onTextClick(n.row, v);
    }, w = async (v, y) => {
      var b;
      await ((b = a.value) == null ? void 0 : b.onActionClick(v, n.row, y));
    }, D = (v) => n.virtualTableVal.find((y) => y.data._id === v), g = (v, y, b) => {
      const {
        data: S
      } = v;
      if (S && S._children && S._children.length > 1) {
        const N = S._children.find((T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField]);
        if (N && !D(N._id)) {
          const T = n.virtualTableVal.find((z) => y.data && z.data._deData && y.data._deData && z.data._deData[b.groupField] === y.data._deData[b.groupField]);
          return T && y.data._id === T.data._id;
        }
        return N && y.data._id === N._id;
      }
      return !1;
    }, E = (v, y, b) => {
      const {
        data: S
      } = v;
      if (S && S._children && S._children.length > 1) {
        const N = S._children.findIndex((T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField] && y.data._id === T._id);
        if (N !== -1 && g(v, y, n.groupConfig))
          return S._children.slice(N).reduce((z, A) => y.data && A._deData && y.data._deData && A._deData[b.groupField] === y.data._deData[b.groupField] ? z + 1 : z, 0);
      }
      return 0;
    }, I = (v, y, b) => {
      const {
        data: S
      } = v;
      return S && S._children && S._children.length > 1 ? S._children.reduce((N, T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField] ? N + 1 : N, 0) : 0;
    };
    function M(v, y) {
      let b = v;
      for (; b && b.nodeType === 1; ) {
        if (b.classList.contains(y))
          return b;
        b = b.parentNode;
      }
      return null;
    }
    const B = () => {
      if (s.value = {}, o.value) {
        const v = M(o.value, "xg-table-row");
        if (v) {
          const {
            ganttPosition: y
          } = n, b = 46;
          let S = xt(v), N = It(v);
          S < y.top + b && (S = y.top + b), N < y.bottom && (N = y.bottom);
          const A = ((window.innerHeight || document.documentElement.clientHeight) - S - N) / 2 + S - b / 2;
          A > S && (s.value = {
            position: "fixed",
            top: "".concat(A, "px")
          });
        }
      }
    }, V = P(() => {
      let v = "";
      const {
        parentRow: y,
        row: b,
        level: S
      } = n;
      return S > 1 && y && I(y, b, n.groupConfig) > 1 && (v = g(y, b, n.groupConfig) ? "first-index" : "no-first-index"), v;
    }), L = P(() => {
      const v = {}, {
        level: y,
        parentRow: b,
        row: S
      } = n;
      if (y && y > 1 && b && b.data._children && b.data._children.length > 1) {
        const N = E(b, S, n.groupConfig);
        if (N > 1) {
          const A = 46 * N - 20;
          Object.assign(v, {
            height: "".concat(A, "px")
          }), B();
        }
      }
      return v;
    });
    return {
      ns: e,
      ns2: t,
      nodeColumn: a,
      fieldValue: l,
      showText: c,
      clickable: f,
      tooltip: m,
      calcMergeClass: V,
      calcMergeStyle: L,
      columnRef: o,
      contentStyle: s,
      onInfoTextChange: d,
      onTextClick: h,
      onActionClick: w
    };
  },
  render() {
    var o, s, a, l, i, d, c;
    let n = null;
    (o = this.nodeColumn) != null && o.nodeEditItem ? n = r(O("iBizTreeGridExEditColumn"), {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (s = this.nodeColumn) != null && s.codeList ? n = r(O("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: this.nodeColumn.codeListItems,
      codeList: this.nodeColumn.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : n = r("span", {
      class: [this.ns.e("text"), this.ns2.e("text")],
      title: this.tooltip,
      onClick: this.onTextClick,
      style: this.contentStyle
    }, [this.showText]);
    let e;
    this.$slots.actions ? e = this.$slots.actions() : this.row.columnActionsStates[this.controller.name] && (e = r(ze, {
      class: this.ns.e("toolbar"),
      actionDetails: (a = this.nodeColumn) == null ? void 0 : a.nodeColumn.deuiactionGroup.uiactionGroupDetails,
      actionsState: this.row.columnActionsStates[this.controller.name],
      mode: "dropdown",
      popperClass: this.ns2.b("popper"),
      groupLevelKeys: [],
      onActionClick: this.onActionClick
    }, null));
    let t = null;
    return this.level === 1 && (t = r(Ie, {
      row: this.row,
      capacityConfig: this.capacityConfig,
      dateRange: this.dateRange
    }, null)), r("div", {
      ref: "columnRef",
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (l = this.controller.model.cellSysCss) == null ? void 0 : l.cssName, this.ns.is("has-action", !!e), (i = this.row) != null && i.data._children && ((c = (d = this.row) == null ? void 0 : d.data._children) == null ? void 0 : c.length) === 0 ? "no-children" : "", this.isTopFirstIndex ? "top-first-index" : "", this.calcMergeClass],
      style: this.calcMergeStyle
    }, [r("div", {
      class: [this.ns.b("text-container"), this.ns2.b("text-container")]
    }, [n]), e, t]);
  }
}), gt = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0"
}, null)])]), Te = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("g", {
  transform: "translate(3.347 1.67)"
}, [r("path", {
  d: "M8.31 4.544l-3.858-3.01L.757 4.537 0 3.606 4.435 0l4.613 3.598-.738.946zM.778 7.934l3.805 3.077L8.33 8.074l.74.944-4.497 3.528-4.55-3.679.755-.933z"
}, null)])])]), ke = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("g", {
  transform: "translate(3.347 1.67)"
}, [r("path", {
  d: "M.738 0l3.858 3.01L8.291.008l.757.93-4.435 3.606L0 .946.738 0zM8.31 12.544l-3.858-3.01-3.695 3.003L0 11.606 4.435 8l4.613 3.598-.738.946z"
}, null)])])]), Oe = () => r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  height: "1em",
  width: "1em",
  "data-v-6fbb019e": ""
}, [r("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null)]), Ee = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.2A6.8 6.8 0 1 0 8 1.2a6.8 6.8 0 0 0 0 13.6zm.017-10V8.42H11.7v1.2H6.817V4.8h1.2z"
}, null)])]), Re = () => r("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M13.9940802,1 L13.9940802,2.2 L13.2624694,2.20103326 C12.93604,4.83947485 11.5126604,7.09238002 9.63519201,7.94035881 C11.5358297,8.8013205 12.9480925,11.1932677 13.2658805,13.8999459 L13.9940802,13.9 L13.9940802,15.1 L2.00217741,15.1 L2.00217741,13.9 L2.73926874,13.9002831 C3.07603558,11.2316386 4.55055745,8.86884631 6.45182913,7.97728733 C4.5311544,7.16123279 3.06895466,4.87984542 2.73753056,2.20103326 L2.00217741,2.2 L2.00217741,1 L13.9940802,1 Z M8.09238129,8.79975967 C6.27968763,8.79975967 4.50087608,10.8991568 4.003456,13.5719701 L3.95733333,13.85 L12.0513333,13.85 L12.0453334,13.8079643 C11.6544503,11.0697148 10.0166737,8.92538307 8.2486894,8.80508513 L8.09238129,8.79975967 Z M12.0446667,2.25 L3.95366667,2.25 L3.96063026,2.29291849 C4.36564997,4.94375371 6.02387547,6.97732036 7.834965,7.09464882 L8,7.1 C9.81589788,7.1 11.5127277,5.15179966 11.9963879,2.54700205 L12.0446667,2.25 Z"
}, null)])]), Ne = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M12.777 13.107V3.88a.621.621 0 0 0-.621-.62h-.76v.216a.977.977 0 0 1-.975.978h-4.9a.978.978 0 0 1-.977-.978v-.216H3.82a.62.62 0 0 0-.62.62v9.226c0 .341.278.62.62.62h8.336a.621.621 0 0 0 .62-.62zM5.744 3.255h4.453V2.2H5.744v1.054zm6.412-1.194c1.004 0 1.82.817 1.82 1.82v9.226a1.821 1.821 0 0 1-1.82 1.819H3.82A1.822 1.822 0 0 1 2 13.105V3.88c0-1.002.817-1.82 1.82-1.82h.724v-.084c0-.538.438-.976.977-.976h4.9c.538 0 .975.438.975.976v.085h.76zm-1.77 4.782a.6.6 0 0 1 .833.863l-3.688 3.562c-.002.003-.002.006-.005.009a.601.601 0 0 1-.849-.004L4.748 9.326a.599.599 0 1 1 .852-.844l1.511 1.524 3.274-3.163z"
}, null)])]), Le = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z"
}, null)])]);
class Ve extends Xt {
  /**
   * 通过节点类型加载节点数据
   *
   * @author tony001
   * @date 2023-12-11 18:12:35
   * @protected
   * @param {IDETreeNode} nodeModel
   * @param {(IDETreeNodeRS | undefined)} nodeRS
   * @param {(ITreeNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {Promise<IGanttNodeData[]>}
   */
  async fetchNodeDatasByType(e, t, o, s) {
    const a = Z(this.model, {
      parentId: e.id,
      hasQuery: s.hasQuery
    }).length === 0, l = { ...s, leaf: a };
    let i = [];
    if (!o && !this.model.rootVisible)
      i = [await this.getStaticGanttNodeData(
        e,
        t,
        o,
        l
      )];
    else
      switch (e.treeNodeType) {
        case "STATIC":
          i = [await this.getStaticGanttNodeData(
            e,
            t,
            o,
            l
          )];
          break;
        case "DE":
          i = await this.getDEGanttNodeDatas(
            e,
            t,
            o,
            l
          );
          break;
        case "CODELIST":
          i = await this.getCodeListGanttNodeDatas(
            e,
            t,
            o,
            l
          );
          break;
        default:
          throw new ye(
            e,
            ibiz.i18n.t("runtime.controller.control.gantt.noSupport", {
              treeNodeType: e.treeNodeType
            })
          );
      }
    const { expandFirstOnly: d, expanded: c, rootNode: m } = e, f = m && !this.model.rootVisible;
    if (!a)
      if (o && !o._parent) {
        i = await Promise.all(i);
        const h = await this.fetchAllChildNodes(i, s);
        i.forEach(async (w) => {
          const D = await this.fetchCustomChildNodes(
            w,
            s,
            h || []
          );
          w._children = D;
        });
      } else
        await Promise.all(
          i.map(async (h, w) => {
            if (c && // 全展开合只展开首节点expanded都为true
            (!d || d && w === 0) || f) {
              const D = await this.fetchChildNodes(
                h,
                s
              );
              h._children = D;
            }
          })
        );
    return i == null || i.forEach((h) => {
      h._beginDataItemValue || (h._beginDataItemValue = h._endDataItemValue), h._endDataItemValue || (h._endDataItemValue = h._beginDataItemValue), h._endDataItemValue && (h._endDataItemValue = "".concat(h._endDataItemValue, " 23:59:59"));
    }), i = this.groupSort(i || [], s.groupField), i;
  }
  /**
   * 获取自定义
   *
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @param {(IGanttNodeData[])} allChildrenNodes
   */
  fetchCustomChildNodes(e, t, o) {
    let s = [];
    if (e && o.length > 0) {
      const { hasQuery: a } = t, i = Z(this.model, {
        parentId: e._nodeId,
        hasQuery: a
      })[0], { parentFilter: d } = i || {};
      o.forEach((c) => {
        d && c._deData && e._value === c._deData[d] && (c._parent = e, s.push(c));
      });
    }
    return s == null || s.forEach((a) => {
      a._beginDataItemValue || (a._beginDataItemValue = a._endDataItemValue), a._endDataItemValue || (a._endDataItemValue = a._beginDataItemValue), a._endDataItemValue && (a._endDataItemValue = "".concat(a._endDataItemValue, " 23:59:59"));
    }), s = this.groupSort(
      s || [],
      t.groupField
    ), s;
  }
  /**
   * 获取子节点数据
   *
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {(Promise<IGanttNodeData[] | undefined>)}
   */
  async fetchChildNodes(e, t) {
    const { hasQuery: o } = t;
    let s = [];
    if (e) {
      const a = Z(this.model, {
        parentId: e._nodeId,
        hasQuery: o
      });
      if (a.length === 0)
        return;
      (await ut(
        a.map(async (i) => {
          const d = ht(
            this.model,
            i.childDETreeNodeId
          );
          return this.fetchNodeDatasByType(
            d,
            i,
            e,
            t
          );
        }),
        !1
      )).forEach((i) => {
        s.push(...i);
      });
    } else {
      const a = te(this.model);
      s = await this.fetchNodeDatasByType(
        a,
        void 0,
        void 0,
        t
      );
    }
    return s;
  }
  /**
   * 分组排序
   *
   * @param {(IGanttNodeData[] | undefined)} parentNodeData
   * @param {string} groupField
   */
  groupSort(e, t) {
    const o = {};
    let s = 0;
    return e.forEach((a) => {
      const l = a._deData && a._deData[t] ? a._deData[t] : "";
      l in o || (o[l] = s, s += 1);
    }), e.sort((a, l) => {
      const i = a._deData && a._deData[t] ? o[a._deData[t]] : -1, d = l._deData && l._deData[t] ? o[l._deData[t]] : -1;
      return i - d;
    }), e;
  }
  /**
   * 获取过滤项集合
   *
   * @param {(IGanttNodeData[])} parentNodeDatas
   */
  getFilterNodes(e) {
    const t = [];
    return e.forEach((o) => {
      o._value && t.push(o._value);
    }), t.join(",");
  }
  /**
   * 获取所有子节点数据
   *
   * @param {(IGanttNodeData[])} parentNodeDatas
   * @param {ResourceGanttFetchOpts} opts
   * @return {*}  {(Promise<IGanttNodeData[] | undefined>)}
   */
  async fetchAllChildNodes(e, t) {
    const { hasQuery: o } = t, s = [], a = { ...e[0] }, l = Z(this.model, {
      parentId: a._nodeId,
      hasQuery: o
    });
    return l.length === 0 ? void 0 : ((await ut(
      l.map(async (d) => {
        const c = ht(
          this.model,
          d.childDETreeNodeId
        );
        d.parentFilter && Object.assign(a, {
          _value: this.getFilterNodes(e)
        });
        const m = Z(this.model, {
          parentId: c.id,
          hasQuery: t.hasQuery
        }).length === 0, f = { ...t, leaf: m };
        return this.getCustomDEGanttNodeDatas(
          c,
          d,
          a,
          f
        );
      }),
      !1
    )).forEach((d) => {
      s.push(...d);
    }), s);
  }
  /**
   * 获取实体数据集数据
   *
   * @protected
   * @param {IDETreeDataSetNode} nodeModel
   * @param {(IDETreeNodeRS | undefined)} nodeRS
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {TreeFetchOpts} opts
   * @return {*}  {Promise<IGanttNodeData[]>}
   */
  async getCustomDEGanttNodeDatas(e, t, o, s) {
    const { appDEDataSetId: a, appDataEntityId: l } = e, { context: i, params: d, navContext: c, navParams: m } = t ? this.getNodeRSFilterParams(t, o, s) : {
      context: s.context,
      params: s.params,
      navContext: {},
      navParams: {}
    };
    d.size = e.maxSize || 1e3, e.sortAppDEFieldId && Object.assign(d, {
      sort: "".concat(e.sortAppDEFieldId.toLowerCase(), ",").concat(e.sortDir ? e.sortDir.toLowerCase() : "asc")
    });
    const f = t ? t.parentFilter : "";
    f && d["n_".concat(f.toLowerCase(), "_eq")] && (Object.assign(d, {
      ["n_".concat(f.toLowerCase(), "_in")]: d["n_".concat(f.toLowerCase(), "_eq")]
    }), delete d["n_".concat(f.toLowerCase(), "_eq")]);
    const h = await this.app.deService.exec(
      l,
      a,
      i,
      d
    );
    return h.data.length ? h.data.map((D, g) => {
      const E = this.calcExpand(e, g);
      return new ee(this.model, e, o, {
        data: D,
        leaf: !!s.leaf,
        navContext: c,
        navParams: m,
        defaultExpand: E
      });
    }) : [];
  }
}
class Et extends ae {
  constructor() {
    super(...arguments);
    /**
     * 初始加载
     */
    J(this, "isInitialLoad", !0);
  }
  get _evt() {
    return this.evt;
  }
  /**
   * 初始化对应类型的部件服务
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  async initService() {
    this.service = new Ve(this.model), await this.service.init(this.context);
  }
  initState() {
    super.initState(), this.state.showCapacity = !0, this.state.onlyTopNodes = !1, this.state.showWeekdays = [], this.state.capacityConfig = JSON.stringify({
      calcType: "WORKITEMCOUNT",
      fieldName: "",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.work_item_count}"
    }), this.state.sliderDraggable = !0, this.state.sliderShowContent = '"${show_identifier}  ${title}"', this.state.groupConfig = { groupField: "project_id" }, this.state.contextMap = JSON.stringify({
      project: "${project_id}"
    }), this.state.sliderLimit = !0, this.state.expandAll = !1, this.calcDataRange();
  }
  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    if (super.handleControlParams(), this.controlParams.sliderdraggable && (this.state.sliderDraggable = this.controlParams.sliderdraggable === "true"), this.controlParams.slidershowcontent && (this.state.sliderShowContent = this.controlParams.slidershowcontent), this.controlParams.groupconfig)
      try {
        this.state.groupConfig = JSON.parse(this.controlParams.groupconfig);
      } catch (t) {
        this.state.groupConfig = {};
      }
    this.controlParams.sliderlimit && (this.state.sliderLimit = this.controlParams.sliderlimit === "true"), this.controlParams.expandall && (this.state.expandAll = this.controlParams.expandall === "true"), this.controlParams.contextmap && (this.state.contextMap = this.controlParams.contextmap);
  }
  /**
   * 设置时间范围
   *
   * @memberof ResourceGanttController
   */
  setDateRange(t) {
    this.state.dateRange = t;
  }
  /**
   * 设置容量数值显示
   *
   * @memberof ResourceGanttController
   */
  showCapacityChange(t) {
    this.state.showCapacity = t;
  }
  /**
   * 全屏切换
   *
   * @memberof ResourceGanttController
   */
  fullscreenChange() {
    this._evt.emit("onFullscreenChange", {});
  }
  /**
   * 不显示周六及周天
   *
   * @memberof ResourceGanttController
   */
  noWeekendDays(t) {
    t ? this.state.showWeekdays = [1, 2, 3, 4, 5] : this.state.showWeekdays = [0, 1, 2, 3, 4, 5, 6];
  }
  /**
   * 容量计算切换
   *
   * @memberof ResourceGanttController
   */
  capacityCalcChange(t) {
    this.state.capacityConfig = JSON.stringify(t);
  }
  /**
   * 仅显示顶部节点
   *
   * @memberof ResourceGanttController
   */
  onlyTopNodesChange(t) {
    this.state.onlyTopNodes = t;
  }
  /**
   * 计算时间范围
   */
  calcDataRange() {
    const t = this.view.getController("searchform");
    if (t) {
      const { data: o } = t.state;
      this.state.dateRange = {
        start: o.n_date_scope_gtandeq,
        end: o.n_date_scope_ltandeq
      };
    } else {
      const o = /* @__PURE__ */ new Date();
      this.state.dateRange = {
        start: p(o.getTime() - 6048e5).format("YYYY-MM-DD"),
        end: p(o).format("YYYY-MM-DD")
      };
    }
  }
  /**
   * 根据节点id获取节点数据
   *
   * @param {string} key
   * @return {*}  {IData[]}
   * @memberof ResourceGanttController
   */
  getNodeDataByNodeId(t) {
    return this.state.items.filter((s) => s._nodeId === t).map((s) => {
      let a = {};
      return s._deData && (a = { ...s._deData, srfkey: s._deData.srfkey }), a;
    });
  }
  /**
   * 部件加载
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<ITreeNodeData[]>}
   * @memberof ResourceGanttController
   */
  async load(t = {}) {
    return this.calcDataRange(), this.isInitialLoad = t.isInitialLoad === !0, super.load(t);
  }
  /**
   * 加载子节点数据
   *
   * @param {(ITreeNodeData | undefined)} parentNode
   * @returns {*}
   * @memberof TreeController
   */
  async loadNodes(t) {
    const o = await this.getFetchParams(), s = !!o.query;
    this.state.isLoading = !this.isInitialLoad;
    let a;
    try {
      a = await this.service.fetchChildNodes(t, {
        context: this.context.clone(),
        params: o,
        hasQuery: s,
        groupField: this.state.groupConfig.groupField,
        defaultExpandedKeys: this.state.expandedKeys
      }) || [];
    } finally {
      this.state.isLoading = !1;
    }
    return t ? t._children = a : this.state.rootNodes = a, await this.afterLoadNodes(a), a;
  }
  /**
   * 开始加载
   *
   * @return {*}  {Promise<void>}
   */
  async startLoading() {
    this.ctx.startLoading();
  }
  /**
   * 打开编辑数据视图
   *
   * @param {IGanttNodeData} item
   * @memberof GanttController
   */
  async openData({
    data: t,
    context: o,
    params: s
  }) {
    var m, f;
    const a = t[0], l = this.getNodeModel(a._nodeId), { appDataEntityId: i } = l, d = ft(i);
    o[d.toLowerCase()] = (m = a._deData) == null ? void 0 : m.srfkey;
    const c = await ((f = this.viewScheduler) == null ? void 0 : f.triggerCustom(
      "".concat(l.id.toLowerCase(), "_opendata"),
      {
        context: o,
        params: s,
        data: t,
        event: void 0,
        view: this.view,
        ctrl: this
      }
    ));
    if (c === -1)
      throw new Error(
        ibiz.i18n.t("runtime.controller.control.calendar.missingViewLogic", {
          itemType: l.id.toLowerCase()
        })
      );
    return {
      cancel: !c.ok
    };
  }
  /**
   * 保存
   *
   * @param {IGanttNodeData} nodeData
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  async save(t) {
    if (this.state.isSimple) {
      ibiz.log.debug(ibiz.i18n.t("runtime.controller.common.md.simpleMode"));
      return;
    }
    if (t._nodeType !== "DE")
      throw new mt(
        ibiz.i18n.t("runtime.controller.control.gantt.nonentity")
      );
    const o = this.state.rows[t._uuid];
    if (!o)
      throw new mt(
        ibiz.i18n.t("runtime.controller.common.md.rowData")
      );
    if (!o.modified) {
      ibiz.log.debug(ibiz.i18n.t("runtime.controller.common.md.noChange"));
      return;
    }
    if (o.processing) {
      await Ce(500, this.save.bind(this), [t]);
      return;
    }
    const s = this.getNodeModel(t._nodeId), { appDataEntityId: a } = s, l = t._deData.srfuf === ne.CREATE, i = ft(a), d = this.context.clone();
    d[i] = t._deData.srfkey;
    const c = nt(this.state.contextMap, t._deData || {}) || "{}";
    Object.assign(d, JSON.parse(c));
    const m = ibiz.hub.getApp(this.context.srfappid);
    let f;
    try {
      f = await m.deService.exec(
        a,
        l ? "create" : "update",
        d,
        t._deData
      );
    } catch (h) {
      throw await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(l ? "CREATE" : "UPDATE", "ERROR"), {
        error: h,
        data: o.data
      }), h;
    }
    o.data._deData = f.data, o.modified = !1, this.gridStateNotify(o, oe.SAVE), await this.evt.emit("onSaveSuccess", void 0);
  }
  /**
   * 设置行属性的值
   *
   * @param {TreeGridExRowState} row
   * @param {string} name
   * @param {unknown} value
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  async setRowValue(t, o, s) {
    const { beginDataItemName: a, endDataItemName: l } = this.model;
    if (!(Object.prototype.hasOwnProperty.call(t.data, o) && !se(t.data[o], s)) && !((o === a || o === l) && _e(t.data[o], s, "day"))) {
      t.data[o] = s, o === a ? t.data._beginDataItemValue = s : o === l && (t.data._endDataItemValue = s), t.modified = !0, t.processing = !0;
      try {
        await this.dataChangeNotify(t, [o]);
      } finally {
        t.processing = !1;
      }
    }
  }
}
const Me = /* @__PURE__ */ Y({
  name: "ResourceGanttColumnHead",
  props: {
    controller: {
      type: Et,
      required: !0,
      default: () => {
      }
    },
    model: {
      type: Object,
      required: !0,
      default: () => {
      }
    },
    expandAll: {
      type: Boolean,
      required: !0,
      default: !1
    },
    titleData: {
      type: Object,
      required: !0,
      default: () => {
      }
    }
  },
  emits: ["expandAllChange", "headSearch"],
  setup(n, {
    emit: e
  }) {
    const t = n.controller, o = G("resource-gantt-column-head"), s = R(!1), a = R(!1), l = R(""), i = P(() => n.titleData.label);
    vt(() => n.expandAll, (I) => {
      s.value = I;
    }, {
      immediate: !0
    });
    const d = () => {
      s.value = !s.value, e("expandAllChange", s.value);
    }, c = () => {
      e("headSearch", l.value);
    }, m = (I) => {
      I.preventDefault(), I.stopPropagation(), a.value = !1, e("headSearch", "");
    }, f = (I, M) => {
      M.stopPropagation(), a.value = !0;
    }, h = async (I, M) => {
      await n.controller.doUIAction(I.uiactionId, {}, M, I.appId);
    }, w = (I) => {
      I.preventDefault(), I.stopPropagation();
    }, D = () => r(O("el-input"), {
      modelValue: l.value,
      "onUpdate:modelValue": (I) => l.value = I,
      class: o.b("search"),
      onInput: c,
      placeholder: "搜索成员"
    }, {
      prefix: () => r(gt, null, null),
      suffix: () => r(O("el-button"), {
        class: o.be("search", "suffix"),
        onClick: m
      }, {
        default: () => [r(Oe, null, null)]
      })
    }), g = () => {
      var V, L;
      const I = t.getNodeModel("root"), M = t.state.selectedData;
      if (!((L = (V = I == null ? void 0 : I.decontextMenu) == null ? void 0 : V.detoolbarItems) != null && L.length))
        return;
      const B = t.contextMenuInfos[I.id];
      return B.clickTBUIActionItem && B.onlyOneActionItem ? null : r(O("iBizContextMenuControl"), {
        modelData: I.decontextMenu,
        groupLevelKeys: [50],
        nodeModel: I,
        nodeData: M,
        context: t.context,
        onActionClick: (v, y) => h(v, y)
      }, null);
    };
    return {
      c: t,
      ns: o,
      label: i,
      isHeadSearch: a,
      expand: s,
      renderHeadSearch: D,
      onColumnHeadClick: w,
      onExpandAllChange: d,
      renderContent: () => a.value ? D() : r("div", {
        class: o.b("box")
      }, [r("div", {
        class: o.be("box", "left")
      }, [r(O("el-button"), {
        class: o.bem("box", "left", "icon"),
        title: s.value ? "全部收起" : "全部展开",
        onClick: d
      }, {
        default: () => [s.value ? r(ke, null, null) : r(Te, null, null)]
      }), r("div", {
        class: o.bem("box", "left", "caption")
      }, [i.value])]), r("div", {
        class: o.be("box", "right")
      }, [r(O("el-button"), {
        size: "small",
        title: "搜索成员",
        class: [o.e("item")],
        onClick: (I) => f("search_personal", I)
      }, {
        icon: () => r("div", {
          class: o.e("icon")
        }, [r(gt, null, null)])
      }), g()])])
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [this.renderContent()]);
  }
});
function Ae(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !ce(n);
}
const ze = /* @__PURE__ */ Y({
  name: "IBizResourceActionToolbar",
  props: {
    actionDetails: {
      type: Array,
      required: !0
    },
    actionsState: {
      type: Object,
      required: !0
    },
    caption: String,
    mode: {
      type: String,
      default: "buttons"
    },
    // 分组的行为级别
    groupLevelKeys: {
      type: Object,
      default: [50]
    },
    zIndex: {
      type: Number
    },
    popperClass: String
  },
  emits: ["actionClick"],
  setup(n, {
    emit: e
  }) {
    var D;
    const t = G("action-toolbar"), o = G("resource-action-toolbar"), s = R(), a = R(!1), l = R(!1);
    (D = n.actionDetails) == null || D.forEach((g) => {
      g.capLanguageRes && g.capLanguageRes.lanResTag && (g.caption = ibiz.i18n.t(g.capLanguageRes.lanResTag, g.caption)), g.tooltipLanguageRes && g.tooltipLanguageRes.lanResTag && (g.tooltip = ibiz.i18n.t(g.tooltipLanguageRes.lanResTag, g.tooltip));
    });
    const i = (g) => {
      l.value = g;
    }, d = async (g, E) => {
      E.stopPropagation(), n.mode === "buttons" ? a.value = !1 : s.value && s.value.handleClose(), e("actionClick", g, E);
    }, c = R([]), m = R([]);
    n.actionDetails && n.actionDetails.forEach((g) => {
      n.groupLevelKeys.findIndex((E) => E === g.actionLevel) !== -1 ? m.value.push(g) : c.value.push(g);
    });
    const f = R(), h = (g) => {
      const {
        actionLevel: E
      } = g;
      return [t.e("item"), t.is("disabled", !1), t.em("item", "level-".concat(E))];
    }, w = n.zIndex;
    return {
      ns: t,
      ns2: o,
      dropdownRef: s,
      popoverIndex: w,
      expandDetails: c,
      groupDetails: m,
      groupButtonRef: f,
      popoverVisible: a,
      dropdownVisible: l,
      handleClick: d,
      calcActionItemClass: h,
      onVisibleChange: i
    };
  },
  render() {
    var s;
    const n = this.actionDetails || [], e = (a) => r(O("el-divider"), {
      class: this.ns.e("separator"),
      "border-style": "double",
      direction: a ? "vertical" : "horizontal"
    }, null), t = (a, l = !0) => a.map((i) => this.actionsState[i.id].visible ? [i.addSeparator && e(l), r(O("el-button"), {
      text: !0,
      size: "small",
      onClick: (d) => this.handleClick(i, d),
      title: i.tooltip,
      disabled: this.actionsState[i.id].disabled,
      class: this.calcActionItemClass(i)
    }, {
      default: () => [r("div", {
        class: this.ns.em("item", "icon")
      }, [i.showIcon && i.sysImage && r(O("iBizIcon"), {
        icon: i.sysImage
      }, null)]), r("div", {
        class: this.ns.em("item", "label")
      }, [i.showCaption ? i.caption : ""])]
    })] : null), o = () => {
      let a;
      if (this.groupDetails.length === 0 || !(this.groupDetails.findIndex((d) => this.actionsState[d.id].visible === !0) !== -1))
        return null;
      const i = this.groupDetails.findIndex((d) => this.actionsState[d.id].disabled === !1) === -1;
      return [r(O("el-button"), {
        size: "small",
        text: !0,
        disabled: i,
        ref: "groupButtonRef",
        class: [this.ns.e("item"), this.ns.is("expand", this.popoverVisible)]
      }, {
        icon: () => r(O("ion-icon"), {
          class: this.ns.e("icon"),
          name: "ellipsis-vertical-outline",
          title: ibiz.i18n.t("component.actionToolbar.more")
        }, null)
      }), r(O("el-popover"), {
        placement: "bottom-start",
        "virtual-ref": this.groupButtonRef,
        trigger: "click",
        visible: this.popoverVisible,
        "onUpdate:visible": (d) => this.popoverVisible = d,
        "popper-class": this.ns.e("popover"),
        "virtual-triggering": !0,
        "popper-style": "z-index:".concat(this.popoverIndex)
      }, Ae(a = t(this.groupDetails, !1)) ? a : {
        default: () => [a]
      })];
    };
    if ((s = this.actionsState) != null && s.visible)
      return this.mode === "buttons" ? r("div", {
        class: [this.ns.b(), this.ns.m("buttons")],
        onClick: (a) => a.stopPropagation()
      }, [t(this.expandDetails), o()]) : r(O("el-dropdown"), {
        ref: "dropdownRef",
        onCommand: (a) => this.handleClick(a, new MouseEvent("click")),
        trigger: "click",
        class: [this.ns.b(), this.ns.m("dropdown"), this.dropdownVisible ? this.ns2.e("open") : ""],
        placement: "bottom-start",
        "popper-class": this.popperClass,
        onVisibleChange: this.onVisibleChange
      }, {
        default: () => r("span", {
          class: this.ns.e("caption")
        }, [this.caption, r(O("ion-icon"), {
          class: this.ns.e("caption-icon"),
          name: "ellipsis-vertical-outline"
        }, null)]),
        dropdown: () => r(O("el-dropdown-menu"), null, {
          default: () => [n.length > 0 && n.map((a) => this.actionsState[a.id].visible ? r(O("el-dropdown-item"), {
            class: [this.ns.e("item"), this.ns.is("disabled", !1)],
            title: a.tooltip,
            disabled: this.actionsState[a.id].disabled,
            command: a
          }, {
            default: () => [a.showIcon && a.sysImage && r(O("iBizIcon"), {
              icon: a.sysImage
            }, null), a.showCaption ? a.caption : ""]
          }) : null)]
        })
      });
  }
});
let Rt = class extends wt {
};
const X = /* @__PURE__ */ Y({
  name: "IBizPanelResourceState",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Rt,
      required: !0
    }
  },
  setup(n) {
    const e = G("panel-rawitem"), t = G("panel-resource-state"), o = R(""), s = [{
      tag: "standard",
      name: "标准"
    }, {
      tag: "saturation",
      name: "饱和"
    }, {
      tag: "exceed",
      name: "超出"
    }], {
      rawItem: a
    } = n.modelData;
    a && a.cssStyle && (o.value = a.cssStyle);
    const l = P(() => {
      const {
        id: d
      } = n.modelData, c = [e.b(), t.b(), e.m(d)];
      return c.push(...n.controller.containerClass), c;
    });
    return {
      ns: e,
      classArr: l,
      tempStyle: o,
      renderContent: () => s.map((d) => r("div", {
        class: [t.e("content"), t.e(d.tag)]
      }, [r("div", {
        class: [t.em("content", "star")]
      }, null), r("div", {
        class: t.em("content", "caption")
      }, [d.name])]))
    };
  },
  render() {
    if (this.controller.state.visible)
      return r("div", {
        class: this.classArr,
        style: this.tempStyle,
        onClick: () => {
          this.controller.onClick();
        }
      }, [this.renderContent()]);
  }
});
let Be = class {
  constructor() {
    J(this, "component", "IBizPanelResourceState");
  }
  async createController(e, t, o) {
    const s = new Rt(e, t, o);
    return await s.init(), s;
  }
};
const Pe = at(
  X,
  function(n) {
    n.component(X.name, X), Ct("CUSTOM_RESOURCE_STATE", () => new Be());
  }
);
class Nt extends wt {
}
const tt = /* @__PURE__ */ Y({
  name: "IBizResourceDropdownList",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Nt,
      required: !0
    }
  },
  setup(n) {
    const e = G("dropdown"), t = G("resource-dropdown-list"), o = n.controller, s = R(""), a = R({}), l = R([]), i = [{
      label: "容量计算"
    }, {
      calcType: "WORKITEMCOUNT",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.work_item_count}",
      label: "工作项数量",
      icon: Ne
    }, {
      calcType: "ESTIMATEDWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.estimated_workload}",
      fieldName: "estimated_workload",
      label: "预估工时",
      icon: Ee
    }, {
      calcType: "REMAININGWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.remaining_workload}",
      fieldName: "remaining_workload",
      label: "剩余工时",
      icon: Re
    }], {
      rawItem: d
    } = n.modelData;
    d && d.cssStyle && (s.value = d.cssStyle);
    const c = P(() => {
      const {
        id: h
      } = n.modelData, w = [e.b(), t.b(), e.m(h)];
      return w.push(...n.controller.containerClass), w;
    });
    Dt(() => {
      l.value = i, a.value = i[1];
    });
    const m = (h) => {
      a.value = h;
      const w = {};
      Object.assign(w, h), delete w.icon, n.controller.panel.panelItems && n.controller.panel.panelItems.gantt && n.controller.panel.panelItems.gantt.control.capacityCalcChange(w);
    };
    return {
      ns: e,
      ns2: t,
      c: o,
      curValue: a,
      items: l,
      classArr: c,
      tempStyle: s,
      handleItemClick: m,
      renderContent: () => r(O("el-dropdown"), {
        trigger: "click",
        class: t.b("dropdown"),
        "popper-class": t.b("dropdown-popper")
      }, {
        default: () => r("span", {
          class: t.be("dropdown", "content")
        }, [a.value.icon && r("span", {
          class: t.bem("dropdown", "content", "icon")
        }, [a.value.icon()]), r("span", {
          class: t.bem("dropdown", "content", "text")
        }, [a.value.label])]),
        dropdown: () => r(O("el-dropdown-menu"), null, {
          default: () => l.value.map((h) => r(O("el-dropdown-item"), {
            onClick: () => m(h)
          }, {
            default: () => [r("div", {
              class: t.be("dropdown-popper", "content")
            }, [h.icon && r("span", {
              class: t.bem("dropdown-popper", "content", "icon")
            }, [h.icon()]), r("span", {
              class: t.bem("dropdown-popper", "content", "text")
            }, [h.label]), a.value.calcType === h.calcType && r("span", {
              class: t.bem("dropdown-popper", "content", "correct")
            }, [Le()])])]
          }))
        })
      })
    };
  },
  render() {
    return r("div", {
      class: this.classArr,
      style: this.tempStyle
    }, [this.renderContent()]);
  }
});
class je {
  constructor() {
    J(this, "component", "IBizResourceDropdownList");
  }
  async createController(e, t, o) {
    const s = new Nt(e, t, o);
    return await s.init(), s;
  }
}
const Ge = at(
  tt,
  function(n) {
    n.component(tt.name, tt), Ct(
      "CUSTOM_RESOURCE_DROPDOWN_LIST",
      () => new je()
    );
  }
);
function $e() {
  const n = R(!1), e = (c) => {
    const { startDate: m, endDate: f, dateRange: h, sliderLimit: w } = c;
    let D = p(m.date), g = p(f.date);
    const E = g.diff(D, "hour");
    if (D.diff(D.startOf("day"), "hour") < 12) {
      if (D = D.startOf("day"), g = g.subtract(1, "day").startOf("day"), w && h) {
        const M = p(h.end).startOf("day").add(1, "day").subtract(1, "second"), B = p(h.start).startOf("day");
        (p(f.date).isAfter(M) || p(f.date).isSame(M)) && (g = M), (p(m.date).isBefore(B) || p(m.date).isSame(B)) && (D = B);
      }
      E === 24 && (g = D);
    } else
      g = g.startOf("day"), D = D.add(1, "day").startOf("day"), E === 24 && (D = g);
    return g = g.add(1, "day").startOf("day").subtract(1, "second"), { start: D, end: g };
  }, t = (c) => {
    const { startDate: m, endDate: f } = c;
    let h = p(m.date), w = p(f.date);
    return h = h.startOf("day"), w = w.startOf("day").add(1, "day").subtract(1, "second"), { start: h, end: w };
  }, o = (c, m) => ({
    curDate: p(c),
    rangeStart: p(m.start).startOf("day"),
    rangeEnd: p(m.end).startOf("day").add(1, "day").subtract(1, "second")
  }), s = (c, m) => {
    const { startDate: f, endDate: h } = c, w = f.clone(), D = h.clone();
    let g;
    n.value ? g = e(c) : g = t(c), n.value = !1, w.setDate(p(g.start)), D.setDate(p(g.end)), m({
      startDate: w,
      endDate: D,
      unit: "hour"
    });
  }, a = (c, m) => {
    const {
      x: f,
      type: h,
      startDate: w,
      endDate: D,
      sliderLimit: g,
      dateRange: E,
      ganttColumnWidth: I,
      currentMillisecond: M
    } = c;
    let B;
    n.value = !0;
    const V = w.getOffset(f / I * M).clone();
    h === "resize" && (n.value = !1);
    let L = 0;
    if (g && E) {
      const { rangeStart: v, rangeEnd: y } = o(w.date, E), b = D.getOffset(
        f / I * M
      ), S = p(D.date), N = p(w.date);
      let T = p(V.date), z = p(b.date);
      if (h === "resize") {
        const A = S.subtract(1, "day").add(1, "second");
        T.isAfter(A) && (V.setDate(A.toDate()), T = p(V.date)), T.isAfter(y.startOf("day")) && (V.setDate(y.startOf("day").toDate()), T = p(V.date));
      } else {
        if (N.isBefore(v.add(1, "day"), "day") && S.isAfter(y.subtract(1, "day"), "day"))
          return f;
        z.isAfter(y) && (b.setDate(y.toDate()), z = p(b.date));
        const A = S.diff(N, "second"), W = z.diff(T, "second"), F = z.subtract(A, "second");
        L = z.add(1, "second").valueOf() - F.valueOf(), W > 0 && W <= A && F.isAfter(v) && (V.setDate(F.toDate()), T = p(V.date));
      }
      T.isBefore(v) && V.setDate(v.toDate());
    }
    return (V.compareTo(D.getOffset(-864e5)) === "r" || L > 0) && h !== "resize" && (B = V.getOffset(L > 0 ? L : 864e5)), m({
      startDate: V,
      endDate: B,
      unit: "hour"
    }), f;
  }, l = (c, m) => {
    const {
      x: f,
      type: h,
      startDate: w,
      endDate: D,
      sliderLimit: g,
      dateRange: E,
      ganttColumnWidth: I,
      currentMillisecond: M
    } = c;
    n.value = !0;
    let B = 0, V;
    const L = D.getOffset(f / I * M).clone();
    if (h === "resize" && (n.value = !1), g && E) {
      const { rangeStart: v, rangeEnd: y } = o(D.date, E), b = w.getOffset(
        f / I * M
      ), S = p(w.date), N = p(D.date);
      let T = p(L.date);
      const z = p(b.date);
      if (h === "resize") {
        const A = S.add(1, "day").subtract(1, "second");
        T.isBefore(A) && (L.setDate(A), T = p(L.date)), T.isBefore(
          v.startOf("day").add(1, "day").subtract(1, "second")
        ) && (L.setDate(
          v.startOf("day").add(1, "day").subtract(1, "second").toDate()
        ), T = p(L.date));
      } else {
        if (S.isBefore(v.add(1, "day"), "day") && N.isAfter(y.subtract(1, "day"), "day") || z.isBefore(v))
          return f;
        const A = N.diff(S, "second"), W = T.diff(z, "second"), F = z.add(A + 1, "second");
        B = F.valueOf() - z.valueOf(), W > 0 && W <= A && F.isBefore(y) && (L.setDate(F), T = p(L.date));
      }
      T.isAfter(y) && L.setDate(y);
    }
    return L.compareTo(w.getOffset(864e5)) === "l" && h !== "resize" && (V = L.getOffset(B > 0 ? -B : -864e5)), m({
      startDate: V,
      endDate: L,
      unit: "hour"
    }), f;
  };
  function i(c) {
    const { startDate: m, ganttHeader: f, currentMillisecond: h, ganttColumnWidth: w } = c;
    return m.intervalTo(f.start) / h * w;
  }
  function d(c) {
    const { startDate: m, endDate: f, currentMillisecond: h, ganttColumnWidth: w } = c;
    return f.intervalTo(m) / h * w;
  }
  return {
    handleEmitMove: s,
    handleSetStart: a,
    handleSetEnd: l,
    handleSliderLeft: i,
    handleSliderWidth: d
  };
}
const et = /* @__PURE__ */ Y({
  name: "IBizResourceGanttControl",
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
    loadDefault: {
      type: Boolean,
      default: !0
    },
    mdctrlActiveMode: {
      type: Number,
      default: void 0
    },
    singleSelect: {
      type: Boolean,
      default: void 0
    }
  },
  setup(n) {
    var ct;
    const e = ie((...u) => new Et(...u)), t = R(), o = R(), s = R(!1), a = G("control-".concat(e.model.controlType.toLowerCase())), l = G("control-resource-gantt"), i = R(), d = R(!0), {
      handleEmitMove: c,
      handleSetStart: m,
      handleSetEnd: f,
      handleSliderLeft: h,
      handleSliderWidth: w
    } = $e(), D = R();
    D.value = me();
    const g = O("IBizRawItem"), E = O("IBizIcon");
    let I = !1;
    const M = R({
      top: 0,
      bottom: 0
    }), B = R([]), V = () => {
      var u, C, x;
      if (Object.assign(M.value, {
        top: 0,
        bottom: 0
      }), o.value && ((u = o.value) != null && u.$el)) {
        const _ = xt((C = o.value) == null ? void 0 : C.$el), j = It((x = o.value) == null ? void 0 : x.$el);
        Object.assign(M.value, {
          top: _,
          bottom: j
        });
      }
    }, L = (u) => {
      B.value = u, V();
    }, v = [], y = ["blue", "light-blue", "blue-cyan", "pink", "purple", "violet", "indigo", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "grey", "sky-blue"], b = (ct = de()) == null ? void 0 : ct.appContext.app;
    Dt(() => {
      (() => import("@ibiz-template-plugin/gantt"))().then((C) => {
        const x = C.default;
        b == null || b.use(x), s.value = !0;
      });
    });
    const S = (u) => {
      const C = document.documentElement;
      return getComputedStyle(C).getPropertyValue(u);
    }, N = P(() => {
      var C, x;
      return {
        primaryColor: ((C = e.state.ganttStyle) == null ? void 0 : C.primaryColor) || S("--ibiz-color-bg-0"),
        textColor: ((x = e.state.ganttStyle) == null ? void 0 : x.textColor) || S("--ibiz-color-text-2")
      };
    }), T = P(() => {
      var C;
      const u = {};
      return (C = e.model.detreeNodes) == null || C.forEach((x, _) => {
        const j = _ % y.length;
        u[x.id] = "rgba(".concat(S("--ibiz-".concat(y[j], "-0")), ", 1)");
      }), u;
    }), z = () => {
      var C;
      let u = e.state.rootNodes;
      return e.model.rootVisible || (u = ((C = e.state.rootNodes[0]) == null ? void 0 : C._children) || []), u.map((x) => {
        const _ = {};
        return Object.assign(_, x), _._children && (_._children = null), _;
      });
    }, A = P(() => e.state.isLoaded ? e.state.isLoading : !1), W = P(() => {
      var u, C;
      return e.state.onlyTopNodes ? z() : e.model.rootVisible ? e.state.rootNodes : (C = (u = e.state.rootNodes[0]) == null ? void 0 : u._children) == null ? void 0 : C.filter((x) => !i.value || x.name.includes(i.value));
    }), F = P(() => {
      const u = [];
      return e.state.columnStates.forEach((C) => {
        var _;
        const x = (_ = e.columns[C.key]) == null ? void 0 : _.model;
        !C.hidden && x && u.push(x);
      }), u;
    }), Lt = P(() => ibiz.i18n.getLang().toLowerCase()), Vt = (u, C) => {
      if (u)
        v.push(C);
      else {
        const x = v.findIndex((_) => _._id === C._id);
        x > -1 && v.splice(x, 1);
      }
      e.setSelection(v);
    }, st = (u, C) => {
      if (I || d.value) {
        d.value = !1;
        return;
      }
      e.onTreeNodeClick(u, C), I = !0, setTimeout(() => {
        I = !1;
      }, 200);
    }, rt = (u) => {
      e.onDbTreeNodeClick(u);
    }, Mt = (u) => {
      e.onExpandChange(u, !0), u && !u._children && e.refreshNodeChildren(u);
    }, At = (u) => {
      e.onExpandChange(u, !1);
    };
    e.evt.on("onNewRow", (u) => {
      if (t.value) {
        const C = u.row.data;
        t.value.setExpand(C);
      }
    });
    const it = () => {
      var u;
      (u = t.value) == null || u.fullscreenChange();
    };
    e._evt.on("onFullscreenChange", (u) => {
      it();
    });
    const zt = (u) => {
      i.value = u;
    }, Bt = (u) => {
      e.state.expandAll = u;
    }, Pt = (u) => {
      console.log("抛值内容", u);
    }, jt = (u) => {
      var _;
      const C = (_ = u[0]) == null ? void 0 : _.row, x = {
        begin: C._beginDataItemValue ? p(C._beginDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0,
        end: C._endDataItemValue ? p(C._endDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0
      };
      d.value = !0, e.modifyNodeTime(C, x);
    }, lt = (u, C, x, _) => {
      const j = [];
      return u.forEach((k) => {
        var U;
        if (k.itemType === "SEPERATOR") {
          j.push({
            divided: "self"
          });
          return;
        }
        const q = _[k.id];
        if (q && !q.visible)
          return;
        const $ = {};
        if (k.showCaption && k.caption && ($.label = k.caption), k.sysImage && k.showIcon && ($.icon = r(E, {
          icon: k.sysImage
        }, null)), k.itemType === "DEUIACTION") {
          $.disabled = q.disabled, $.clickClose = !0;
          const {
            uiactionId: H
          } = k;
          H && ($.onClick = () => {
            e.doUIAction(H, C, x, k.appId);
          });
        } else if (k.itemType === "RAWITEM") {
          const {
            rawItem: H
          } = k;
          H && ($.label = r(g, {
            rawItem: k
          }, null));
        } else
          k.itemType === "ITEMS" && (U = k.detoolbarItems) != null && U.length && ($.children = lt(k.detoolbarItems, C, x, _));
        j.push($);
      }), j;
    };
    let Q;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((C) => {
        Q = C.default, Q.default && !Q.showContextMenu && (Q = Q.default);
      });
    });
    const Gt = async (u, C) => {
      C.stopPropagation(), C.preventDefault();
      const x = e.getNodeModel(u._nodeId);
      if (!(x != null && x.decontextMenu))
        return;
      const _ = e.contextMenus[x.decontextMenu.id];
      if (!_.model.detoolbarItems)
        return;
      await _.calcButtonState(u._deData || (u.srfkey ? u : void 0), x.appDataEntityId);
      const j = _.state.buttonsState, k = lt(_.model.detoolbarItems, u, C, j);
      k.length && Q.showContextMenu({
        x: C.x,
        y: C.y,
        customClass: a.b("context-menu"),
        items: k
      });
    }, $t = () => {
      const {
        isLoaded: u
      } = e.state;
      return u && r(O("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    }, Wt = (u, C) => {
      const {
        caption: x,
        codeName: _,
        width: j,
        headerSysCss: k,
        align: q
      } = u, $ = e.columns[_];
      return r(O("x-gantt-column"), {
        label: x,
        prop: _,
        width: j && j > 30 ? j : 30,
        center: (q == null ? void 0 : q.toLowerCase()) === "center"
      }, {
        title: (U) => {
          const {
            label: H
          } = U;
          return _ === "name" ? r(Me, {
            key: _,
            model: u,
            controller: e,
            titleData: U,
            expandAll: e.state.expandAll,
            class: k == null ? void 0 : k.cssName,
            onExpandAllChange: Bt,
            onHeadSearch: zt
          }, null) : r("div", {
            class: k == null ? void 0 : k.cssName
          }, [H]);
        },
        default: (U) => {
          const {
            row: H,
            column: Ht,
            level: Yt
          } = U, K = e.getRowState(H._id);
          if (K) {
            if (_ === "name") {
              const Ut = pt(K, e.state.capacityConfig);
              let dt;
              H._parent && (dt = e.getRowState(H._parent._id));
              const Kt = W.value && W.value[0] ? W.value[0]._id === K.data._id : !1;
              return V(), r(Se, {
                controller: $,
                capacityConfig: Ut,
                dateRange: e.state.dateRange,
                groupConfig: e.state.groupConfig,
                row: K,
                parentRow: dt,
                column: Ht,
                level: Yt,
                isTopFirstIndex: Kt,
                key: K.data._uuid + _,
                ganttPosition: M.value,
                virtualTableVal: B.value
              }, null);
            }
            const qt = O(e.providers[_].component);
            return fe(qt, {
              controller: $,
              row: K,
              key: K.data._uuid + _
            });
          }
          return null;
        }
      });
    }, Ft = () => r(O("x-gantt-slider"), {
      "allow-link": !1,
      move: e.state.sliderDraggable,
      "resize-left": e.state.sliderDraggable,
      "resize-right": e.state.sliderDraggable,
      "move-by-unit": !0,
      "slider-limit": e.state.sliderLimit,
      "emit-move": c,
      "set-start": m,
      "set-end": f,
      "slider-left": h,
      "slider-width": w
    }, {
      content: ({
        row: u,
        level: C,
        left: x
      }) => {
        if (C !== 1) {
          const _ = nt(e.state.sliderShowContent, u._deData || {}).replace(/^"(.*?)"$/, "$1"), j = x < 0 ? "".concat(-x, "px") : "";
          return r("div", {
            class: [a.e("slider"), l.e("slider")],
            style: {
              background: T.value[u._nodeId]
            },
            onClick: (k) => st(u, k),
            onDblclick: () => rt(u),
            onContextmenu: (k) => Gt(u, k)
          }, [_ && r("div", {
            class: l.em("slider", "caption"),
            style: {
              marginLeft: j
            },
            title: _,
            innerHTML: _
          }, null)]);
        }
      }
    });
    return {
      c: e,
      ns: a,
      ns2: l,
      fullscreenChange: it,
      ganttRef: t,
      ganttBoxRef: o,
      isInited: s,
      ganttId: D,
      data: W,
      locale: Lt,
      columns: F,
      onCheck: Vt,
      loading: A,
      ganttStyle: N,
      onNodeClick: st,
      onNodeDbClick: rt,
      onNodeExpand: Mt,
      onNodeCollapse: At,
      renderContent: () => {
        const u = F.value.map((x, _) => Wt(x)), C = Ft();
        return [...u, C];
      },
      renderGanttCell: (u) => {
        if (u.level === 1) {
          const C = e.getRowState(u.row._id) || {}, x = pt(C, e.state.capacityConfig);
          if (ot(u.column.date, x.weekdays)) {
            const _ = {};
            return Object.assign(_, {
              ...u,
              row: C
            }), r(xe, {
              cellData: _,
              showText: e.state.showCapacity,
              capacityConfig: x,
              onCellClick: Pt
            }, null);
          }
        }
      },
      renderGanttTitle: (u) => {
        const {
          column: C
        } = u, x = ve(C.date), _ = De(C.date, "MM/DD");
        return r("div", {
          class: [a.b("column-title"), be(C.date) ? a.be("column-title", "today") : ""]
        }, [r("div", {
          class: a.be("column-title", "top")
        }, [x]), r("div", {
          class: a.be("column-title", "bottom")
        }, [_])]);
      },
      onSliderMove: jt,
      renderNoData: $t,
      onVirtualTableChange: L
    };
  },
  render() {
    var n;
    return this.isInited ? ue(r(O("iBizControlBase"), {
      ref: "ganttBoxRef",
      controller: this.c,
      class: [this.ns.b(), this.ns2.b(), (n = this.data) != null && n.length ? "" : this.ns.m("empty")]
    }, {
      default: () => [r(O("x-gantt"), {
        ref: "ganttRef",
        id: this.ganttId,
        "data-id": "_id",
        data: this.data,
        "row-height": 46,
        "show-expand": !0,
        "expand-all": this.c.state.expandAll,
        "start-key": "_beginDataItemValue",
        "end-key": "_endDataItemValue",
        children: "_children",
        leaf: "_leaf",
        dateRange: this.c.state.dateRange,
        showWeekdays: this.c.state.showWeekdays,
        locale: this.locale,
        "header-height": 46,
        preload: 23,
        showCheckbox: !this.c.state.singleSelect,
        showToday: !1,
        showWeekend: !1,
        onNodeExpand: this.onNodeExpand,
        onNodeCollapse: this.onNodeCollapse,
        onRowClick: this.onNodeClick,
        onRowDblClick: this.onNodeDbClick,
        onRowChecked: this.onCheck,
        onMoveSlider: this.onSliderMove,
        onVirtualTableChange: this.onVirtualTableChange,
        primaryColor: this.ganttStyle.primaryColor,
        headerStyle: {
          textColor: this.ganttStyle.textColor
        }
      }, {
        default: () => this.renderContent(),
        ganttCell: (e) => this.renderGanttCell(e),
        ganttTitle: (e) => this.renderGanttTitle(e),
        empty: () => this.renderNoData()
      })]
    }), [[he("loading"), this.loading]]) : null;
  }
});
class We {
  constructor() {
    J(this, "component", "IBizResourceGanttControl");
  }
}
const Fe = at(
  et,
  function(n) {
    n.component(et.name, et), re(
      "TREE_RENDER_RESOURCE_GANTT",
      () => new We()
    );
  }
), sa = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(n) {
    n.use(Fe), n.use(Pe), n.use(Ge);
  }
};
export {
  Fe as IBizResourceGanttControl,
  sa as default
};
