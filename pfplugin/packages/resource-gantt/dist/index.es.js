import './style.css';
var Ne = Object.defineProperty;
var Re = (o, e, t) => e in o ? Ne(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var q = (o, e, t) => (Re(o, typeof e != "symbol" ? e + "" : e, t), t);
import { TreeGridExRowState as ie, TreeGridExFieldColumnController as Ee, GanttService as Le, getChildNodeRSs as $, getRootNode as Oe, handleAllSettled as ee, getTreeNode as te, GanttDataSetNodeData as Ve, GanttController as Ae, calcDeCodeNameById as ne, Srfuf as Me, TreeGridExNotifyState as ze, isValueChange as Pe, registerPanelItemProvider as Be, registerControlProvider as je } from "@ibiz-template/runtime";
import { useNamespace as V, PanelRawItemController as Ge, withInstall as re, useControlController as Fe } from "@ibiz-template/vue3-util";
import { defineComponent as B, createVNode as i, ref as k, computed as N, watch as le, createTextVNode as $e, resolveComponent as x, isVNode as qe, getCurrentInstance as We, onMounted as He, withDirectives as Ye, resolveDirective as Ue, h as Ke } from "vue";
import { createUUID as Qe } from "qx-util";
import S from "dayjs";
import { isObject as Je } from "lodash-es";
import { isNotNil as Xe } from "ramda";
import { ModelError as Ze, RuntimeError as ae, awaitTimeout as et } from "@ibiz-template/core";
function tt(o, e, t) {
  const a = S(o), s = S(e), n = S(t);
  if (!(a instanceof S) || !(s instanceof S) || !(n instanceof S))
    throw new Error("All arguments must be dayjs objects");
  return a.isAfter(s) && a.isBefore(n) || a.isSame(s) || a.isSame(n);
}
const nt = (o) => {
  const e = new Date(o), t = S(e).day();
  return [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ][t];
}, at = (o, e) => S(o).format(e), ot = (o) => {
  const e = new Date(o), t = S(e), a = S();
  return t.isSame(a, "day");
}, st = (o, e, t) => S(o).isSame(S(e), t), Y = (o, e) => o.replace(/\${(.*?)}/g, (t, a) => {
  const [s, n] = a.split("."), c = e[s] || "";
  return Je(c) ? c[n] ? c[n] : "" : c;
}), ce = (o, e) => {
  const a = S(o).day();
  return e.includes(a);
}, oe = (o, e) => {
  let t = [], a = 0;
  const s = Y(
    e,
    o.data && o.data._deData ? o.data._deData : {}
  );
  let n;
  try {
    n = JSON.parse(s);
  } catch (c) {
    n = {};
  }
  return n.weekdays && (t = n.weekdays.split("").map((c) => Number(c))), n.dayCapacityVal && (a = Number(n.dayCapacityVal)), Object.assign(n, { weekdays: t, dayCapacity: a }), n;
}, de = (o, e = []) => {
  const t = S(o).startOf("day");
  return e.filter((a) => {
    const s = a._beginDataItemValue ? S(a._beginDataItemValue).startOf("day") : null, n = a._endDataItemValue ? S(a._endDataItemValue).startOf("day") : null;
    return s && n && s.isAfter(n) ? !1 : !s && n && t.isSame(n, "day") || s && !n && t.isSame(s, "day") || s && n && tt(t, s, n);
  }).length;
};
const it = /* @__PURE__ */ B({
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
  setup(o, {
    emit: e
  }) {
    const t = V("top-level-cell"), a = (h) => {
      h.stopPropagation(), e("cellClick", o.cellData);
    }, s = (h, C, m = 100) => {
      const y = h / C * m, D = m - y;
      return "polygon(0px ".concat(D, "%, 100% ").concat(D, "%, 100% ").concat(m, "%, 0px ").concat(m, "%)");
    }, n = (h, C) => {
      const m = {};
      return h < C && Object.assign(m, {
        "clip-path": s(h, C)
      }), m;
    }, c = (h, C) => {
      let m = [];
      return h === 0 ? [] : (h > C && (m = [t.em("caption", "exceed")]), h === C && (m = [t.em("caption", "saturation")]), h < C && (m = [t.em("caption", "standard")]), m);
    }, l = () => {
      const {
        column: h,
        row: C
      } = o.cellData;
      switch (o.capacityConfig.calcType) {
        case "WORKITEMCOUNT":
          return de(h.date, C.data._children);
      }
    };
    return {
      ns: t,
      renderContent: () => {
        const {
          column: h
        } = o.cellData;
        if (!h)
          return "";
        const C = l() || 0, m = n(C, o.capacityConfig.dayCapacity), y = c(C, o.capacityConfig.dayCapacity);
        return i("div", {
          class: [t.e("caption"), ...y],
          onClick: (D) => a(D)
        }, [o.showText ? i("span", {
          class: [t.em("caption", "text")]
        }, [String(C)]) : "", i("div", {
          class: [t.em("caption", "bkg")],
          style: m
        }, null)]);
      }
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.renderContent()]);
  }
});
const rt = /* @__PURE__ */ B({
  name: "TotalProgress",
  props: {
    row: {
      type: ie,
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
  setup(o) {
    const e = V("total-progress"), t = k(0), a = k(0), s = N(() => t.value / a.value * 100), n = (l, d) => {
      const {
        start: h,
        end: C
      } = o.dateRange;
      let m = 0, y = 0, D = 0;
      if (d.length > 0) {
        const I = new Date(h);
        for (; I <= new Date(C); )
          ce(I, o.capacityConfig.weekdays) && (m += 1, y += de(I, d)), I.setDate(I.getDate() + 1);
        D = m * l;
      }
      return {
        numerator: y,
        denominator: D
      };
    }, c = () => {
      switch (o.capacityConfig.calcType) {
        case "WORKITEMCOUNT":
          return n(o.capacityConfig.dayCapacity, o.row.data._children);
        default:
          return {
            numerator: 0,
            denominator: 0
          };
      }
    };
    return le(() => o.row, () => {
      const l = c();
      t.value = l.numerator, a.value = l.denominator;
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: e,
      numerator: t,
      denominator: a,
      percentage: s
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [i("span", {
      class: this.ns.e("caption")
    }, [this.numerator, $e(" / "), this.denominator]), i(x("el-progress"), {
      percentage: this.percentage
    }, null)]);
  }
});
const lt = /* @__PURE__ */ B({
  name: "IBizResourceGanttExFieldColumn",
  props: {
    controller: {
      type: Ee,
      required: !0
    },
    row: {
      type: ie,
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
  setup(o) {
    const e = V("tree-grid-ex-field-column"), t = V("resource-gantt-ex-field-column"), a = N(() => o.controller.nodeColumnControllerMap.get(o.row.data._nodeId)), s = N(() => o.row.data._nodeType !== "DE" && o.controller.isFirstShowColumn ? o.row.data._text : o.row.data[o.controller.name]), n = k(""), c = (b) => {
      n.value = b;
    }, l = N(() => {
      const b = a.value;
      return b ? b.nodeEditItem ? void 0 : b.codeList ? n.value : b.formatValue(s.value) + (b.unitName || "") : s.value;
    }), d = N(() => {
      if (o.controller.treeGrid.overflowMode === "ellipsis" && Xe(s.value) && s.value !== "")
        return l.value;
    }), h = N(() => s.value && a.value && (a.value.isLinkColumn || a.value.hasClickAction)), C = (b) => {
      var p;
      (p = a.value) == null || p.onTextClick(o.row, b);
    }, m = async (b, p) => {
      var _;
      await ((_ = a.value) == null ? void 0 : _.onActionClick(b, o.row, p));
    }, y = (b, p, _) => {
      const {
        data: T
      } = b;
      if (T && T._children && T._children.length > 1) {
        const E = T._children.find((R) => p.data && R._deData && p.data._deData && R._deData[_.groupField] === p.data._deData[_.groupField]);
        return E && p.data._id === E._id;
      }
      return !1;
    }, D = (b, p, _) => {
      const {
        data: T
      } = b;
      return T && T._children && T._children.length > 1 ? T._children.reduce((E, R) => p.data && R._deData && p.data._deData && R._deData[_.groupField] === p.data._deData[_.groupField] ? E + 1 : E, 0) : 0;
    }, I = N(() => {
      let b = "";
      const {
        parentRow: p,
        row: _,
        level: T
      } = o;
      return T > 1 && p && D(p, _, o.groupConfig) > 1 && (b = y(p, _, o.groupConfig) ? "first-index" : "no-first-index"), b;
    }), v = N(() => {
      const b = {}, {
        level: p,
        parentRow: _,
        row: T
      } = o;
      if (p && p > 1 && _) {
        const E = D(_, T, o.groupConfig);
        if (E > 1) {
          const F = 46 * E - 5;
          Object.assign(b, {
            height: "".concat(F, "px")
          });
        }
      }
      return b;
    });
    return {
      ns: e,
      ns2: t,
      nodeColumn: a,
      fieldValue: s,
      showText: l,
      clickable: h,
      tooltip: d,
      calcMergeClass: I,
      calcMergeStyle: v,
      onInfoTextChange: c,
      onTextClick: C,
      onActionClick: m
    };
  },
  render() {
    var a, s, n, c, l, d, h;
    let o = null;
    (a = this.nodeColumn) != null && a.nodeEditItem ? o = i(x("iBizTreeGridExEditColumn"), {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (s = this.nodeColumn) != null && s.codeList ? o = i(x("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: this.nodeColumn.codeListItems,
      codeList: this.nodeColumn.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : o = i("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.showText]);
    let e;
    this.$slots.actions ? e = this.$slots.actions() : this.row.columnActionsStates[this.controller.name] && (e = i(ft, {
      class: this.ns.e("toolbar"),
      actionDetails: (n = this.nodeColumn) == null ? void 0 : n.nodeColumn.deuiactionGroup.uiactionGroupDetails,
      actionsState: this.row.columnActionsStates[this.controller.name],
      mode: "dropdown",
      popperClass: this.ns2.b("popper"),
      groupLevelKeys: [],
      onActionClick: this.onActionClick
    }, null));
    let t = null;
    return this.level === 1 && (t = i(rt, {
      row: this.row,
      capacityConfig: this.capacityConfig,
      dateRange: this.dateRange
    }, null)), i("div", {
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (c = this.controller.model.cellSysCss) == null ? void 0 : c.cssName, this.ns.is("has-action", !!e), (l = this.row) != null && l.data._children && ((h = (d = this.row) == null ? void 0 : d.data._children) == null ? void 0 : h.length) === 0 ? "no-children" : "", this.isTopFirstIndex ? "top-first-index" : "", this.calcMergeClass],
      style: this.calcMergeStyle
    }, [i("div", {
      class: [this.ns.b("text-container"), this.ns2.b("text-container")]
    }, [o]), e, t]);
  }
}), se = () => i("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("path", {
  d: "M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0"
}, null)])]), ct = () => i("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("g", {
  transform: "translate(3.347 1.67)"
}, [i("path", {
  d: "M8.31 4.544l-3.858-3.01L.757 4.537 0 3.606 4.435 0l4.613 3.598-.738.946zM.778 7.934l3.805 3.077L8.33 8.074l.74.944-4.497 3.528-4.55-3.679.755-.933z"
}, null)])])]), dt = () => i("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("g", {
  transform: "translate(3.347 1.67)"
}, [i("path", {
  d: "M.738 0l3.858 3.01L8.291.008l.757.93-4.435 3.606L0 .946.738 0zM8.31 12.544l-3.858-3.01-3.695 3.003L0 11.606 4.435 8l4.613 3.598-.738.946z"
}, null)])])]), ut = () => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  height: "1em",
  width: "1em",
  "data-v-6fbb019e": ""
}, [i("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null)]);
class ht extends Le {
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
  async fetchNodeDatasByType(e, t, a, s) {
    const n = $(this.model, {
      parentId: e.id,
      hasQuery: s.hasQuery
    }).length === 0, c = { ...s, leaf: n };
    let l = [];
    if (!a && !this.model.rootVisible)
      l = [await this.getStaticGanttNodeData(
        e,
        t,
        a,
        c
      )];
    else
      switch (e.treeNodeType) {
        case "STATIC":
          l = [await this.getStaticGanttNodeData(
            e,
            t,
            a,
            c
          )];
          break;
        case "DE":
          l = await this.getDEGanttNodeDatas(
            e,
            t,
            a,
            c
          );
          break;
        case "CODELIST":
          l = await this.getCodeListGanttNodeDatas(
            e,
            t,
            a,
            c
          );
          break;
        default:
          throw new Ze(
            e,
            ibiz.i18n.t("runtime.controller.control.gantt.noSupport", {
              treeNodeType: e.treeNodeType
            })
          );
      }
    const { expandFirstOnly: d, expanded: h, rootNode: C } = e, m = C && !this.model.rootVisible;
    if (!n)
      if (a && !a._parent) {
        l = await Promise.all(l);
        const y = await this.fetchAllChildNodes(l, s);
        l.forEach(async (D) => {
          const I = await this.fetchCustomChildNodes(
            D,
            s,
            y || []
          );
          D._children = I;
        });
      } else
        await Promise.all(
          l.map(async (y, D) => {
            if (h && // 全展开合只展开首节点expanded都为true
            (!d || d && D === 0) || m) {
              const I = await this.fetchChildNodes(
                y,
                s
              );
              y._children = I;
            }
          })
        );
    return l == null || l.forEach((y) => {
      y._beginDataItemValue || (y._beginDataItemValue = y._endDataItemValue), y._endDataItemValue || (y._endDataItemValue = y._beginDataItemValue);
    }), l = this.groupSort(l || [], s.groupField), l;
  }
  /**
   * 获取自定义
   *
   * @param {(IGanttNodeData | undefined)} parentNodeData
   * @param {ResourceGanttFetchOpts} opts
   * @param {(IGanttNodeData[])} allChildrenNodes
   */
  fetchCustomChildNodes(e, t, a) {
    let s = [];
    if (e && a.length > 0) {
      const { hasQuery: n } = t, l = $(this.model, {
        parentId: e._nodeId,
        hasQuery: n
      })[0], { parentFilter: d } = l || {};
      a.forEach((h) => {
        d && h._deData && e._value === h._deData[d] && (h._parent = e, s.push(h));
      });
    }
    return s == null || s.forEach((n) => {
      n._beginDataItemValue || (n._beginDataItemValue = n._endDataItemValue), n._endDataItemValue || (n._endDataItemValue = n._beginDataItemValue);
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
    const { hasQuery: a } = t;
    let s = [];
    if (e) {
      const n = $(this.model, {
        parentId: e._nodeId,
        hasQuery: a
      });
      if (n.length === 0)
        return;
      (await ee(
        n.map(async (l) => {
          const d = te(
            this.model,
            l.childDETreeNodeId
          );
          return this.fetchNodeDatasByType(
            d,
            l,
            e,
            t
          );
        }),
        !1
      )).forEach((l) => {
        s.push(...l);
      });
    } else {
      const n = Oe(this.model);
      s = await this.fetchNodeDatasByType(
        n,
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
    const a = {};
    let s = 0;
    return e.forEach((n) => {
      const c = n._deData && n._deData[t] ? n._deData[t] : "";
      c in a || (a[c] = s, s += 1);
    }), e.sort((n, c) => {
      const l = n._deData && n._deData[t] ? a[n._deData[t]] : -1, d = c._deData && c._deData[t] ? a[c._deData[t]] : -1;
      return l - d;
    }), e;
  }
  /**
   * 获取过滤项集合
   *
   * @param {(IGanttNodeData[])} parentNodeDatas
   */
  getFilterNodes(e) {
    const t = [];
    return e.forEach((a) => {
      a._value && t.push(a._value);
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
    const { hasQuery: a } = t, s = [], n = { ...e[0] }, c = $(this.model, {
      parentId: n._nodeId,
      hasQuery: a
    });
    return c.length === 0 ? void 0 : ((await ee(
      c.map(async (d) => {
        const h = te(
          this.model,
          d.childDETreeNodeId
        );
        d.parentFilter && Object.assign(n, {
          _value: this.getFilterNodes(e)
        });
        const C = $(this.model, {
          parentId: h.id,
          hasQuery: t.hasQuery
        }).length === 0, m = { ...t, leaf: C };
        return this.getCustomDEGanttNodeDatas(
          h,
          d,
          n,
          m
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
  async getCustomDEGanttNodeDatas(e, t, a, s) {
    const { appDEDataSetId: n, appDataEntityId: c } = e, { context: l, params: d, navContext: h, navParams: C } = t ? this.getNodeRSFilterParams(t, a, s) : {
      context: s.context,
      params: s.params,
      navContext: {},
      navParams: {}
    };
    d.size = e.maxSize || 1e3, e.sortAppDEFieldId && Object.assign(d, {
      sort: "".concat(e.sortAppDEFieldId.toLowerCase(), ",").concat(e.sortDir ? e.sortDir.toLowerCase() : "asc")
    });
    const m = t ? t.parentFilter : "";
    m && d["n_".concat(m.toLowerCase(), "_eq")] && (Object.assign(d, {
      ["n_".concat(m.toLowerCase(), "_in")]: d["n_".concat(m.toLowerCase(), "_eq")]
    }), delete d["n_".concat(m.toLowerCase(), "_eq")]);
    const y = await this.app.deService.exec(
      c,
      n,
      l,
      d
    );
    return y.data.length ? y.data.map((I, v) => {
      const b = this.calcExpand(e, v);
      return new Ve(this.model, e, a, {
        data: I,
        leaf: !!s.leaf,
        navContext: h,
        navParams: C,
        defaultExpand: b
      });
    }) : [];
  }
}
class ue extends Ae {
  constructor() {
    super(...arguments);
    /**
     * 初始加载
     */
    q(this, "isInitialLoad", !0);
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
    this.service = new ht(this.model), await this.service.init(this.context);
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
      const { data: a } = t.state;
      this.state.dateRange = {
        start: a.n_date_scope_gtandeq,
        end: a.n_date_scope_ltandeq
      };
    } else {
      const a = /* @__PURE__ */ new Date();
      this.state.dateRange = {
        start: S(a.getTime() - 6048e5).format("YYYY-MM-DD"),
        end: S(a).format("YYYY-MM-DD")
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
      let n = {};
      return s._deData && (n = { ...s._deData, srfkey: s._deData.srfkey }), n;
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
    const a = await this.getFetchParams(), s = !!a.query;
    this.state.isLoading = !this.isInitialLoad;
    let n;
    try {
      n = await this.service.fetchChildNodes(t, {
        context: this.context.clone(),
        params: a,
        hasQuery: s,
        groupField: this.state.groupConfig.groupField,
        defaultExpandedKeys: this.state.expandedKeys
      }) || [];
    } finally {
      this.state.isLoading = !1;
    }
    return t ? t._children = n : this.state.rootNodes = n, await this.afterLoadNodes(n), n;
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
    context: a,
    params: s
  }) {
    var C, m;
    const n = t[0], c = this.getNodeModel(n._nodeId), { appDataEntityId: l } = c, d = ne(l);
    a[d.toLowerCase()] = (C = n._deData) == null ? void 0 : C.srfkey;
    const h = await ((m = this.viewScheduler) == null ? void 0 : m.triggerCustom(
      "".concat(c.id.toLowerCase(), "_opendata"),
      {
        context: a,
        params: s,
        data: t,
        event: void 0,
        view: this.view,
        ctrl: this
      }
    ));
    if (h === -1)
      throw new Error(
        ibiz.i18n.t("runtime.controller.control.calendar.missingViewLogic", {
          itemType: c.id.toLowerCase()
        })
      );
    return {
      cancel: !h.ok
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
      throw new ae(
        ibiz.i18n.t("runtime.controller.control.gantt.nonentity")
      );
    const a = this.state.rows[t._uuid];
    if (!a)
      throw new ae(
        ibiz.i18n.t("runtime.controller.common.md.rowData")
      );
    if (!a.modified) {
      ibiz.log.debug(ibiz.i18n.t("runtime.controller.common.md.noChange"));
      return;
    }
    if (a.processing) {
      await et(500, this.save.bind(this), [t]);
      return;
    }
    const s = this.getNodeModel(t._nodeId), { appDataEntityId: n } = s, c = t._deData.srfuf === Me.CREATE, l = ne(n), d = this.context.clone();
    d[l] = t._deData.srfkey;
    const h = Y(this.state.contextMap, t._deData || {}) || "{}";
    Object.assign(d, JSON.parse(h));
    const C = ibiz.hub.getApp(this.context.srfappid);
    let m;
    try {
      m = await C.deService.exec(
        n,
        c ? "create" : "update",
        d,
        t._deData
      );
    } catch (y) {
      throw await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(c ? "CREATE" : "UPDATE", "ERROR"), {
        error: y,
        data: a.data
      }), y;
    }
    a.data._deData = m.data, a.modified = !1, this.gridStateNotify(a, ze.SAVE), await this.evt.emit("onSaveSuccess", void 0);
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
  async setRowValue(t, a, s) {
    const { beginDataItemName: n, endDataItemName: c } = this.model;
    if (!(Object.prototype.hasOwnProperty.call(t.data, a) && !Pe(t.data[a], s)) && !((a === n || a === c) && st(t.data[a], s, "day"))) {
      t.data[a] = s, a === n ? t.data._beginDataItemValue = s : a === c && (t.data._endDataItemValue = s), t.modified = !0, t.processing = !0;
      try {
        await this.dataChangeNotify(t, [a]);
      } finally {
        t.processing = !1;
      }
    }
  }
}
const pt = /* @__PURE__ */ B({
  name: "ResourceGanttColumnHead",
  props: {
    controller: {
      type: ue,
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
  setup(o, {
    emit: e
  }) {
    const t = o.controller, a = V("resource-gantt-column-head"), s = k(!1), n = k(!1), c = k(""), l = N(() => o.titleData.label);
    le(() => o.expandAll, (p) => {
      s.value = p;
    }, {
      immediate: !0
    });
    const d = () => {
      s.value = !s.value, e("expandAllChange", s.value);
    }, h = () => {
      e("headSearch", c.value);
    }, C = (p) => {
      p.preventDefault(), p.stopPropagation(), n.value = !1, e("headSearch", "");
    }, m = (p, _) => {
      _.stopPropagation(), n.value = !0;
    }, y = async (p, _) => {
      await o.controller.doUIAction(p.uiactionId, {}, _, p.appId);
    }, D = (p) => {
      p.preventDefault(), p.stopPropagation();
    }, I = () => i(x("el-input"), {
      modelValue: c.value,
      "onUpdate:modelValue": (p) => c.value = p,
      class: a.b("search"),
      onInput: h,
      placeholder: "搜索成员"
    }, {
      prefix: () => i(se, null, null),
      suffix: () => i(x("el-button"), {
        class: a.be("search", "suffix"),
        onClick: C
      }, {
        default: () => [i(ut, null, null)]
      })
    }), v = () => {
      var E, R;
      const p = t.getNodeModel("root"), _ = t.state.selectedData;
      if (!((R = (E = p == null ? void 0 : p.decontextMenu) == null ? void 0 : E.detoolbarItems) != null && R.length))
        return;
      const T = t.contextMenuInfos[p.id];
      return T.clickTBUIActionItem && T.onlyOneActionItem ? null : i(x("iBizContextMenuControl"), {
        modelData: p.decontextMenu,
        groupLevelKeys: [50],
        nodeModel: p,
        nodeData: _,
        context: t.context,
        onActionClick: (G, F) => y(G, F)
      }, null);
    };
    return {
      c: t,
      ns: a,
      label: l,
      isHeadSearch: n,
      expand: s,
      renderHeadSearch: I,
      onColumnHeadClick: D,
      onExpandAllChange: d,
      renderContent: () => n.value ? I() : i("div", {
        class: a.b("box")
      }, [i("div", {
        class: a.be("box", "left")
      }, [i(x("el-button"), {
        class: a.bem("box", "left", "icon"),
        title: s.value ? "全部收起" : "全部展开",
        onClick: d
      }, {
        default: () => [s.value ? i(dt, null, null) : i(ct, null, null)]
      }), i("div", {
        class: a.bem("box", "left", "caption")
      }, [l.value])]), i("div", {
        class: a.be("box", "right")
      }, [i(x("el-button"), {
        size: "small",
        title: "搜索成员",
        class: [a.e("item")],
        onClick: (p) => m("search_personal", p)
      }, {
        icon: () => i("div", {
          class: a.e("icon")
        }, [i(se, null, null)])
      }), v()])])
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.renderContent()]);
  }
});
function mt(o) {
  return typeof o == "function" || Object.prototype.toString.call(o) === "[object Object]" && !qe(o);
}
const ft = /* @__PURE__ */ B({
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
  setup(o, {
    emit: e
  }) {
    var I;
    const t = V("action-toolbar"), a = V("resource-action-toolbar"), s = k(), n = k(!1), c = k(!1);
    (I = o.actionDetails) == null || I.forEach((v) => {
      v.capLanguageRes && v.capLanguageRes.lanResTag && (v.caption = ibiz.i18n.t(v.capLanguageRes.lanResTag, v.caption)), v.tooltipLanguageRes && v.tooltipLanguageRes.lanResTag && (v.tooltip = ibiz.i18n.t(v.tooltipLanguageRes.lanResTag, v.tooltip));
    });
    const l = (v) => {
      c.value = v;
    }, d = async (v, b) => {
      b.stopPropagation(), o.mode === "buttons" ? n.value = !1 : s.value && s.value.handleClose(), e("actionClick", v, b);
    }, h = k([]), C = k([]);
    o.actionDetails && o.actionDetails.forEach((v) => {
      o.groupLevelKeys.findIndex((b) => b === v.actionLevel) !== -1 ? C.value.push(v) : h.value.push(v);
    });
    const m = k(), y = (v) => {
      const {
        actionLevel: b
      } = v;
      return [t.e("item"), t.is("disabled", !1), t.em("item", "level-".concat(b))];
    }, D = o.zIndex;
    return {
      ns: t,
      ns2: a,
      dropdownRef: s,
      popoverIndex: D,
      expandDetails: h,
      groupDetails: C,
      groupButtonRef: m,
      popoverVisible: n,
      dropdownVisible: c,
      handleClick: d,
      calcActionItemClass: y,
      onVisibleChange: l
    };
  },
  render() {
    var s;
    const o = this.actionDetails || [], e = (n) => i(x("el-divider"), {
      class: this.ns.e("separator"),
      "border-style": "double",
      direction: n ? "vertical" : "horizontal"
    }, null), t = (n, c = !0) => n.map((l) => this.actionsState[l.id].visible ? [l.addSeparator && e(c), i(x("el-button"), {
      text: !0,
      size: "small",
      onClick: (d) => this.handleClick(l, d),
      title: l.tooltip,
      disabled: this.actionsState[l.id].disabled,
      class: this.calcActionItemClass(l)
    }, {
      default: () => [i("div", {
        class: this.ns.em("item", "icon")
      }, [l.showIcon && l.sysImage && i(x("iBizIcon"), {
        icon: l.sysImage
      }, null)]), i("div", {
        class: this.ns.em("item", "label")
      }, [l.showCaption ? l.caption : ""])]
    })] : null), a = () => {
      let n;
      if (this.groupDetails.length === 0 || !(this.groupDetails.findIndex((d) => this.actionsState[d.id].visible === !0) !== -1))
        return null;
      const l = this.groupDetails.findIndex((d) => this.actionsState[d.id].disabled === !1) === -1;
      return [i(x("el-button"), {
        size: "small",
        text: !0,
        disabled: l,
        ref: "groupButtonRef",
        class: [this.ns.e("item"), this.ns.is("expand", this.popoverVisible)]
      }, {
        icon: () => i(x("ion-icon"), {
          class: this.ns.e("icon"),
          name: "ellipsis-vertical-outline",
          title: ibiz.i18n.t("component.actionToolbar.more")
        }, null)
      }), i(x("el-popover"), {
        placement: "bottom-start",
        "virtual-ref": this.groupButtonRef,
        trigger: "click",
        visible: this.popoverVisible,
        "onUpdate:visible": (d) => this.popoverVisible = d,
        "popper-class": this.ns.e("popover"),
        "virtual-triggering": !0,
        "popper-style": "z-index:".concat(this.popoverIndex)
      }, mt(n = t(this.groupDetails, !1)) ? n : {
        default: () => [n]
      })];
    };
    if ((s = this.actionsState) != null && s.visible)
      return this.mode === "buttons" ? i("div", {
        class: [this.ns.b(), this.ns.m("buttons")],
        onClick: (n) => n.stopPropagation()
      }, [t(this.expandDetails), a()]) : i(x("el-dropdown"), {
        ref: "dropdownRef",
        onCommand: (n) => this.handleClick(n, new MouseEvent("click")),
        trigger: "click",
        class: [this.ns.b(), this.ns.m("dropdown"), this.dropdownVisible ? this.ns2.e("open") : ""],
        placement: "bottom-start",
        "popper-class": this.popperClass,
        onVisibleChange: this.onVisibleChange
      }, {
        default: () => i("span", {
          class: this.ns.e("caption")
        }, [this.caption, i(x("ion-icon"), {
          class: this.ns.e("caption-icon"),
          name: "ellipsis-vertical-outline"
        }, null)]),
        dropdown: () => i(x("el-dropdown-menu"), null, {
          default: () => [o.length > 0 && o.map((n) => this.actionsState[n.id].visible ? i(x("el-dropdown-item"), {
            class: [this.ns.e("item"), this.ns.is("disabled", !1)],
            title: n.tooltip,
            disabled: this.actionsState[n.id].disabled,
            command: n
          }, {
            default: () => [n.showIcon && n.sysImage && i(x("iBizIcon"), {
              icon: n.sysImage
            }, null), n.showCaption ? n.caption : ""]
          }) : null)]
        })
      });
  }
});
class he extends Ge {
}
const W = /* @__PURE__ */ B({
  name: "IBizPanelResourceState",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: he,
      required: !0
    }
  },
  setup(o) {
    const e = V("panel-rawitem"), t = V("panel-resource-state"), a = k(""), s = [{
      tag: "standard",
      name: "标准"
    }, {
      tag: "saturation",
      name: "饱和"
    }, {
      tag: "exceed",
      name: "超出"
    }], {
      rawItem: n
    } = o.modelData;
    n && n.cssStyle && (a.value = n.cssStyle);
    const c = N(() => {
      const {
        id: d
      } = o.modelData, h = [e.b(), t.b(), e.m(d)];
      return h.push(...o.controller.containerClass), h;
    });
    return {
      ns: e,
      classArr: c,
      tempStyle: a,
      renderContent: () => s.map((d) => i("div", {
        class: [t.e("content"), t.e(d.tag)]
      }, [i("div", {
        class: [t.em("content", "star")]
      }, null), i("div", {
        class: t.em("content", "caption")
      }, [d.name])]))
    };
  },
  render() {
    if (this.controller.state.visible)
      return i("div", {
        class: this.classArr,
        style: this.tempStyle,
        onClick: () => {
          this.controller.onClick();
        }
      }, [this.renderContent()]);
  }
});
class gt {
  constructor() {
    q(this, "component", "IBizPanelResourceState");
  }
  async createController(e, t, a) {
    const s = new he(e, t, a);
    return await s.init(), s;
  }
}
const Ct = re(
  W,
  function(o) {
    o.component(W.name, W), Be("CUSTOM_RESOURCE_STATE", () => new gt());
  }
), H = /* @__PURE__ */ B({
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
  setup(o) {
    var X;
    const e = Fe((...r) => new ue(...r)), t = k(), a = k(), s = k(!1), n = V("control-".concat(e.model.controlType.toLowerCase())), c = V("control-resource-gantt"), l = k(), d = k(!1), h = k();
    h.value = Qe();
    const C = x("IBizRawItem"), m = x("IBizIcon");
    let y = !1;
    const D = [], I = ["blue", "light-blue", "blue-cyan", "pink", "purple", "violet", "indigo", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "grey", "sky-blue"], v = (X = We()) == null ? void 0 : X.appContext.app;
    He(() => {
      (() => import("@ibiz-template-plugin/gantt"))().then((u) => {
        const g = u.default;
        v == null || v.use(g), s.value = !0;
      });
    });
    const b = (r) => {
      const u = document.documentElement;
      return getComputedStyle(u).getPropertyValue(r);
    }, p = N(() => {
      var u, g;
      return {
        primaryColor: ((u = e.state.ganttStyle) == null ? void 0 : u.primaryColor) || b("--ibiz-color-bg-0"),
        textColor: ((g = e.state.ganttStyle) == null ? void 0 : g.textColor) || b("--ibiz-color-text-2")
      };
    }), _ = N(() => {
      var u;
      const r = {};
      return (u = e.model.detreeNodes) == null || u.forEach((g, f) => {
        const L = f % I.length;
        r[g.id] = "rgba(".concat(b("--ibiz-".concat(I[L], "-0")), ", 1)");
      }), r;
    }), T = () => {
      var u;
      let r = e.state.rootNodes;
      return e.model.rootVisible || (r = ((u = e.state.rootNodes[0]) == null ? void 0 : u._children) || []), r.map((g) => {
        const f = {};
        return Object.assign(f, g), f._children && (f._children = null), f;
      });
    }, E = N(() => e.state.isLoaded ? e.state.isLoading : !1), R = N(() => {
      var r, u;
      return e.state.onlyTopNodes ? T() : e.model.rootVisible ? e.state.rootNodes : (u = (r = e.state.rootNodes[0]) == null ? void 0 : r._children) == null ? void 0 : u.filter((g) => !l.value || g.name.includes(l.value));
    }), G = N(() => {
      const r = [];
      return e.state.columnStates.forEach((u) => {
        var f;
        const g = (f = e.columns[u.key]) == null ? void 0 : f.model;
        !u.hidden && g && r.push(g);
      }), r;
    }), F = N(() => ibiz.i18n.getLang().toLowerCase()), pe = (r, u) => {
      if (r)
        D.push(u);
      else {
        const g = D.findIndex((f) => f._id === u._id);
        g > -1 && D.splice(g, 1);
      }
      e.setSelection(D);
    }, U = (r, u) => {
      if (y || d.value) {
        d.value = !1;
        return;
      }
      e.onTreeNodeClick(r, u), y = !0, setTimeout(() => {
        y = !1;
      }, 200);
    }, K = (r) => {
      e.onDbTreeNodeClick(r);
    }, me = (r) => {
      e.onExpandChange(r, !0), r && !r._children && e.refreshNodeChildren(r);
    }, fe = (r) => {
      e.onExpandChange(r, !1);
    };
    e.evt.on("onNewRow", (r) => {
      if (t.value) {
        const u = r.row.data;
        t.value.setExpand(u);
      }
    });
    const Q = () => {
      var r;
      (r = t.value) == null || r.fullscreenChange();
    };
    e._evt.on("onFullscreenChange", (r) => {
      Q();
    });
    const ge = (r) => {
      l.value = r;
    }, Ce = (r) => {
      e.state.expandAll = r;
    }, ye = (r) => {
      console.log("抛值内容", r);
    }, be = (r) => {
      var f;
      const u = (f = r[0]) == null ? void 0 : f.row, g = {
        begin: u._beginDataItemValue ? S(u._beginDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0,
        end: u._endDataItemValue ? S(u._endDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0
      };
      d.value = !0, e.modifyNodeTime(u, g);
    }, J = (r, u, g, f) => {
      const L = [];
      return r.forEach((w) => {
        var z;
        if (w.itemType === "SEPERATOR") {
          L.push({
            divided: "self"
          });
          return;
        }
        const M = f[w.id];
        if (M && !M.visible)
          return;
        const O = {};
        if (w.showCaption && w.caption && (O.label = w.caption), w.sysImage && w.showIcon && (O.icon = i(m, {
          icon: w.sysImage
        }, null)), w.itemType === "DEUIACTION") {
          O.disabled = M.disabled, O.clickClose = !0;
          const {
            uiactionId: A
          } = w;
          A && (O.onClick = () => {
            e.doUIAction(A, u, g, w.appId);
          });
        } else if (w.itemType === "RAWITEM") {
          const {
            rawItem: A
          } = w;
          A && (O.label = i(C, {
            rawItem: w
          }, null));
        } else
          w.itemType === "ITEMS" && (z = w.detoolbarItems) != null && z.length && (O.children = J(w.detoolbarItems, u, g, f));
        L.push(O);
      }), L;
    };
    let j;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((u) => {
        j = u.default, j.default && !j.showContextMenu && (j = j.default);
      });
    });
    const we = async (r, u) => {
      u.stopPropagation(), u.preventDefault();
      const g = e.getNodeModel(r._nodeId);
      if (!(g != null && g.decontextMenu))
        return;
      const f = e.contextMenus[g.decontextMenu.id];
      if (!f.model.detoolbarItems)
        return;
      await f.calcButtonState(r._deData || (r.srfkey ? r : void 0), g.appDataEntityId);
      const L = f.state.buttonsState, w = J(f.model.detoolbarItems, r, u, L);
      w.length && j.showContextMenu({
        x: u.x,
        y: u.y,
        customClass: n.b("context-menu"),
        items: w
      });
    }, ve = () => {
      const {
        isLoaded: r
      } = e.state;
      return r && i(x("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    }, xe = (r, u) => {
      const {
        caption: g,
        codeName: f,
        width: L,
        headerSysCss: w,
        align: M
      } = r, O = e.columns[f];
      return i(x("x-gantt-column"), {
        label: g,
        prop: f,
        width: L && L > 30 ? L : 30,
        center: (M == null ? void 0 : M.toLowerCase()) === "center"
      }, {
        title: (z) => {
          const {
            label: A
          } = z;
          return f === "name" ? i(pt, {
            key: f,
            model: r,
            controller: e,
            titleData: z,
            expandAll: e.state.expandAll,
            class: w == null ? void 0 : w.cssName,
            onExpandAllChange: Ce,
            onHeadSearch: ge
          }, null) : i("div", {
            class: w == null ? void 0 : w.cssName
          }, [A]);
        },
        default: (z) => {
          const {
            row: A,
            column: Ie,
            level: _e
          } = z, P = e.getRowState(A._id);
          if (P) {
            if (f === "name") {
              const ke = oe(P, e.state.capacityConfig);
              let Z;
              A._parent && (Z = e.getRowState(A._parent._id));
              const Te = R.value && R.value[0] ? R.value[0]._id === P.data._id : !1;
              return i(lt, {
                controller: O,
                capacityConfig: ke,
                dateRange: e.state.dateRange,
                groupConfig: e.state.groupConfig,
                row: P,
                parentRow: Z,
                column: Ie,
                level: _e,
                isTopFirstIndex: Te,
                key: P.data._uuid + f
              }, null);
            }
            const Se = x(e.providers[f].component);
            return Ke(Se, {
              controller: O,
              row: P,
              key: P.data._uuid + f
            });
          }
          return null;
        }
      });
    }, De = () => i(x("x-gantt-slider"), {
      "allow-link": !1,
      move: e.state.sliderDraggable,
      "resize-left": e.state.sliderDraggable,
      "resize-right": e.state.sliderDraggable,
      "move-by-unit": !0,
      "slider-limit": e.state.sliderLimit
    }, {
      content: ({
        row: r,
        level: u,
        left: g
      }) => {
        if (u !== 1) {
          const f = Y(e.state.sliderShowContent, r._deData || {}).replace(/^"(.*?)"$/, "$1"), L = g < 0 ? "".concat(-g, "px") : "";
          return i("div", {
            class: [n.e("slider"), c.e("slider")],
            style: {
              background: _.value[r._nodeId]
            },
            onClick: (w) => U(r, w),
            onDblclick: () => K(r),
            onContextmenu: (w) => we(r, w)
          }, [f && i("div", {
            class: c.em("slider", "caption"),
            style: {
              marginLeft: L
            },
            title: f,
            innerHTML: f
          }, null)]);
        }
      }
    });
    return {
      c: e,
      ns: n,
      ns2: c,
      fullscreenChange: Q,
      ganttRef: t,
      ganttBoxRef: a,
      isInited: s,
      ganttId: h,
      data: R,
      locale: F,
      columns: G,
      onCheck: pe,
      loading: E,
      ganttStyle: p,
      onNodeClick: U,
      onNodeDbClick: K,
      onNodeExpand: me,
      onNodeCollapse: fe,
      renderContent: () => {
        const r = G.value.map((g, f) => xe(g)), u = De();
        return [...r, u];
      },
      renderGanttCell: (r) => {
        if (r.level === 1) {
          const u = e.getRowState(r.row._id) || {}, g = oe(u, e.state.capacityConfig);
          if (ce(r.column.date, g.weekdays)) {
            const f = {};
            return Object.assign(f, {
              ...r,
              row: u
            }), i(it, {
              cellData: f,
              showText: e.state.showCapacity,
              capacityConfig: g,
              onCellClick: ye
            }, null);
          }
        }
      },
      renderGanttTitle: (r) => {
        const {
          column: u
        } = r, g = nt(u.date), f = at(u.date, "MM/DD");
        return i("div", {
          class: [n.b("column-title"), ot(u.date) ? n.be("column-title", "today") : ""]
        }, [i("div", {
          class: n.be("column-title", "top")
        }, [g]), i("div", {
          class: n.be("column-title", "bottom")
        }, [f])]);
      },
      onSliderMove: be,
      renderNoData: ve
    };
  },
  render() {
    var o;
    return this.isInited ? Ye(i(x("iBizControlBase"), {
      ref: "ganttBoxRef",
      controller: this.c,
      class: [this.ns.b(), this.ns2.b(), (o = this.data) != null && o.length ? "" : this.ns.m("empty")]
    }, {
      default: () => [i(x("x-gantt"), {
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
        showCheckbox: !this.c.state.singleSelect,
        showToday: !1,
        showWeekend: !1,
        onNodeExpand: this.onNodeExpand,
        onNodeCollapse: this.onNodeCollapse,
        onRowClick: this.onNodeClick,
        onRowDblClick: this.onNodeDbClick,
        onRowChecked: this.onCheck,
        onMoveSlider: this.onSliderMove,
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
    }), [[Ue("loading"), this.loading]]) : null;
  }
});
class yt {
  constructor() {
    q(this, "component", "IBizResourceGanttControl");
  }
}
const bt = re(
  H,
  function(o) {
    o.component(H.name, H), je(
      "TREE_RENDER_RESOURCE_GANTT",
      () => new yt()
    );
  }
), Lt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(bt), o.use(Ct);
  }
};
export {
  bt as IBizResourceGanttControl,
  Lt as default
};
