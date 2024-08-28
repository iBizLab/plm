import './style.css';
var Kt = Object.defineProperty;
var Qt = (n, e, t) => e in n ? Kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var J = (n, e, t) => (Qt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { GanttService as Jt, getChildNodeRSs as Z, getRootNode as Zt, handleAllSettled as ft, getTreeNode as mt, GanttDataSetNodeData as Xt, GanttController as te, calcDeCodeNameById as pt, Srfuf as ee, TreeGridExNotifyState as ae, isValueChange as ne, TreeGridExRowState as vt, TreeGridExFieldColumnController as oe, registerPanelItemProvider as wt, registerControlProvider as se } from "@ibiz-template/runtime";
import { useNamespace as G, PanelRawItemController as Dt, withInstall as nt, useControlController as re } from "@ibiz-template/vue3-util";
import { defineComponent as Y, createVNode as r, ref as R, computed as P, onMounted as ot, createTextVNode as ie, resolveComponent as E, watch as le, isVNode as ce, getCurrentInstance as de, withDirectives as ue, resolveDirective as he, h as fe } from "vue";
import { createUUID as me } from "qx-util";
import p from "dayjs";
import { isObject as pe } from "lodash-es";
import { ModelError as ge, RuntimeError as gt, awaitTimeout as ye } from "@ibiz-template/core";
import { isNotNil as Ce } from "ramda";
function ve(n, e, t) {
  const o = p(n), s = p(e), a = p(t);
  if (!(o instanceof p) || !(s instanceof p) || !(a instanceof p))
    throw new Error("All arguments must be dayjs objects");
  return o.isAfter(s) && o.isBefore(a) || o.isSame(s) || o.isSame(a);
}
const we = (n) => {
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
}, _e = (n, e, t) => p(n).isSame(p(e), t), st = (n, e) => n.replace(/\${(.*?)}/g, (t, o) => {
  const [s, a] = o.split("."), i = e[s] || "";
  return pe(i) ? i[a] ? i[a] : "" : i;
}), rt = (n, e) => {
  const o = p(n).day();
  return e.includes(o);
}, yt = (n, e) => {
  let t = [], o = 0;
  const s = st(
    e,
    n.data && n.data._deData ? n.data._deData : {}
  );
  let a = {};
  try {
    a = JSON.parse(s);
  } catch (i) {
    a = {};
  }
  return a.weekdays && (t = a.weekdays.split(",").map((i) => Number(i))), a.dayCapacityVal && (o = Number(a.dayCapacityVal)), Object.assign(a, { weekdays: t, dayCapacity: o }), a;
}, bt = (n, e, t) => (n.isAfter(e) || n.isSame(e)) && (n.isBefore(t) || n.isSame(t)), _t = (n, e) => {
  const t = Math.floor(n / e * 10) / 10, o = Math.round((n - t * e) * 10) / 10, s = new Array(e).fill(t);
  let a = 0;
  for (let i = 0; a < o; i++)
    s[i] = Math.round((s[i] + 0.1) * 10) / 10, a = Math.round((a + 0.1) * 10) / 10;
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
    return s && a && s.isAfter(a) ? !1 : !s && a && t.isSame(a, "day") || s && !a && t.isSame(s, "day") || s && a && ve(t, s, a);
  }).length;
}, Tt = (n, e, t) => {
  const o = new Date(n), s = new Date(e), a = [];
  for (let i = new Date(o); i <= s; i.setDate(i.getDate() + 1))
    rt(i, t) && a.push(new Date(i));
  return a;
}, kt = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day");
  return t.filter(
    (d) => bt(
      a,
      p(d._beginDataItemValue).startOf("day"),
      p(d._endDataItemValue).startOf("day")
    )
  ).forEach((d) => {
    const l = p(d._beginDataItemValue).startOf("day"), c = p(d._endDataItemValue).startOf("day"), m = Tt(
      new Date(l.format("YYYY-MM-DD")),
      new Date(c.format("YYYY-MM-DD")),
      n
    ), f = m.length, h = d._deData[o] ? Number(d._deData[o]) : 0;
    if (f > 0 && h > 0) {
      const v = _t(h, f), w = m.findIndex(
        (k) => p(k).startOf("day").isSame(a)
      ), g = w !== -1 ? v[w] : 0;
      s = Math.round((s + g) * 10) / 10;
    }
  }), s;
}, Ot = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day"), i = p(/* @__PURE__ */ new Date()).startOf("day");
  return a.isBefore(i) ? 0 : (t.filter(
    (l) => bt(
      a,
      p(l._beginDataItemValue).startOf("day"),
      p(l._endDataItemValue).startOf("day")
    )
  ).forEach((l) => {
    let c = p(l._beginDataItemValue).startOf("day");
    const m = p(l._endDataItemValue).startOf("day");
    c.isBefore(i) && (c = i);
    const f = Tt(
      new Date(c.format("YYYY-MM-DD")),
      new Date(m.format("YYYY-MM-DD")),
      n
    ), h = f.length, v = l._deData[o] ? Number(l._deData[o]) : 0;
    if (h > 0 && v > 0) {
      const w = _t(v, h), g = f.findIndex(
        (I) => p(I).startOf("day").isSame(a)
      ), k = g !== -1 ? w[g] : 0;
      s = Math.round((s + k) * 10) / 10;
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
      const h = c / m * f, v = f - h;
      return "polygon(0px ".concat(v, "%, 100% ").concat(v, "%, 100% ").concat(f, "%, 0px ").concat(f, "%)");
    }, a = (c, m) => {
      const f = {};
      return c < m && Object.assign(f, {
        "clip-path": s(c, m)
      }), f;
    }, i = (c, m) => {
      let f = [];
      return c === 0 ? [] : (c > m && (f = [t.em("caption", "exceed")]), c === m && (f = [t.em("caption", "saturation")]), c < m && (f = [t.em("caption", "standard")]), f);
    }, d = () => {
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
        const m = d() || 0, f = a(m, n.capacityConfig.dayCapacity), h = i(m, n.capacityConfig.dayCapacity);
        return r("div", {
          class: [t.e("caption"), ...h],
          onClick: (v) => o(v)
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
class Ie extends Jt {
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
    }).length === 0, i = { ...s, leaf: a };
    let d = [];
    if (!o && !this.model.rootVisible)
      d = [await this.getStaticGanttNodeData(
        e,
        t,
        o,
        i
      )];
    else
      switch (e.treeNodeType) {
        case "STATIC":
          d = [await this.getStaticGanttNodeData(
            e,
            t,
            o,
            i
          )];
          break;
        case "DE":
          d = await this.getDEGanttNodeDatas(
            e,
            t,
            o,
            i
          );
          break;
        case "CODELIST":
          d = await this.getCodeListGanttNodeDatas(
            e,
            t,
            o,
            i
          );
          break;
        default:
          throw new ge(
            e,
            ibiz.i18n.t("runtime.controller.control.gantt.noSupport", {
              treeNodeType: e.treeNodeType
            })
          );
      }
    const { expandFirstOnly: l, expanded: c, rootNode: m } = e, f = m && !this.model.rootVisible;
    if (!a)
      if (o && !o._parent) {
        d = await Promise.all(d);
        const h = await this.fetchAllChildNodes(d, s);
        d.forEach(async (v) => {
          const w = await this.fetchCustomChildNodes(
            v,
            s,
            h || []
          );
          v._children = w;
        });
      } else
        await Promise.all(
          d.map(async (h, v) => {
            if (c && // 全展开合只展开首节点expanded都为true
            (!l || l && v === 0) || f) {
              const w = await this.fetchChildNodes(
                h,
                s
              );
              h._children = w;
            }
          })
        );
    return d == null || d.forEach((h) => {
      h._beginDataItemValue || (h._beginDataItemValue = h._endDataItemValue), h._endDataItemValue || (h._endDataItemValue = h._beginDataItemValue), h._endDataItemValue && (h._endDataItemValue = "".concat(h._endDataItemValue, " 23:59:59"));
    }), d = this.groupSort(d || [], s.groupField), d;
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
      const { hasQuery: a } = t, d = Z(this.model, {
        parentId: e._nodeId,
        hasQuery: a
      })[0], { parentFilter: l } = d || {};
      o.forEach((c) => {
        l && c._deData && e._value === c._deData[l] && (c._parent = e, s.push(c));
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
      (await ft(
        a.map(async (d) => {
          const l = mt(
            this.model,
            d.childDETreeNodeId
          );
          return this.fetchNodeDatasByType(
            l,
            d,
            e,
            t
          );
        }),
        !1
      )).forEach((d) => {
        s.push(...d);
      });
    } else {
      const a = Zt(this.model);
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
      const i = a._deData && a._deData[t] ? a._deData[t] : "";
      i in o || (o[i] = s, s += 1);
    }), e.sort((a, i) => {
      const d = a._deData && a._deData[t] ? o[a._deData[t]] : -1, l = i._deData && i._deData[t] ? o[i._deData[t]] : -1;
      return d - l;
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
    const { hasQuery: o } = t, s = [], a = { ...e[0] }, i = Z(this.model, {
      parentId: a._nodeId,
      hasQuery: o
    });
    return i.length === 0 ? void 0 : ((await ft(
      i.map(async (l) => {
        const c = mt(
          this.model,
          l.childDETreeNodeId
        );
        l.parentFilter && Object.assign(a, {
          _value: this.getFilterNodes(e)
        });
        const m = Z(this.model, {
          parentId: c.id,
          hasQuery: t.hasQuery
        }).length === 0, f = { ...t, leaf: m };
        return this.getCustomDEGanttNodeDatas(
          c,
          l,
          a,
          f
        );
      }),
      !1
    )).forEach((l) => {
      s.push(...l);
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
    const { appDEDataSetId: a, appDataEntityId: i } = e, { context: d, params: l, navContext: c, navParams: m } = t ? this.getNodeRSFilterParams(t, o, s) : {
      context: s.context,
      params: s.params,
      navContext: {},
      navParams: {}
    };
    l.size = e.maxSize || 1e3, e.sortAppDEFieldId && Object.assign(l, {
      sort: "".concat(e.sortAppDEFieldId.toLowerCase(), ",").concat(e.sortDir ? e.sortDir.toLowerCase() : "asc")
    });
    const f = t ? t.parentFilter : "";
    f && l["n_".concat(f.toLowerCase(), "_eq")] && (Object.assign(l, {
      ["n_".concat(f.toLowerCase(), "_in")]: l["n_".concat(f.toLowerCase(), "_eq")]
    }), delete l["n_".concat(f.toLowerCase(), "_eq")]);
    const h = await this.app.deService.exec(
      i,
      a,
      d,
      l
    );
    return h.data.length ? h.data.map((w, g) => {
      const k = this.calcExpand(e, g);
      return new Xt(this.model, e, o, {
        data: w,
        leaf: !!s.leaf,
        navContext: c,
        navParams: m,
        defaultExpand: k
      });
    }) : [];
  }
}
class X extends te {
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
    this.service = new Ie(this.model), await this.service.init(this.context);
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
    const a = t[0], i = this.getNodeModel(a._nodeId), { appDataEntityId: d } = i, l = pt(d);
    o[l.toLowerCase()] = (m = a._deData) == null ? void 0 : m.srfkey;
    const c = await ((f = this.viewScheduler) == null ? void 0 : f.triggerCustom(
      "".concat(i.id.toLowerCase(), "_opendata"),
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
          itemType: i.id.toLowerCase()
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
      throw new gt(
        ibiz.i18n.t("runtime.controller.control.gantt.nonentity")
      );
    const o = this.state.rows[t._uuid];
    if (!o)
      throw new gt(
        ibiz.i18n.t("runtime.controller.common.md.rowData")
      );
    if (!o.modified) {
      ibiz.log.debug(ibiz.i18n.t("runtime.controller.common.md.noChange"));
      return;
    }
    if (o.processing) {
      await ye(500, this.save.bind(this), [t]);
      return;
    }
    const s = this.getNodeModel(t._nodeId), { appDataEntityId: a } = s, i = t._deData.srfuf === ee.CREATE, d = pt(a), l = this.context.clone();
    l[d] = t._deData.srfkey;
    const c = st(this.state.contextMap, t._deData || {}) || "{}";
    Object.assign(l, JSON.parse(c));
    const m = ibiz.hub.getApp(this.context.srfappid);
    let f;
    try {
      f = await m.deService.exec(
        a,
        i ? "create" : "update",
        l,
        t._deData
      );
    } catch (h) {
      throw await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(i ? "CREATE" : "UPDATE", "ERROR"), {
        error: h,
        data: o.data
      }), h;
    }
    o.data._deData = f.data, o.modified = !1, this.gridStateNotify(o, ae.SAVE), await this.evt.emit("onSaveSuccess", void 0);
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
    const { beginDataItemName: a, endDataItemName: i } = this.model;
    if (!(Object.prototype.hasOwnProperty.call(t.data, o) && !ne(t.data[o], s)) && !((o === a || o === i) && _e(t.data[o], s, "day"))) {
      t.data[o] = s, o === a ? t.data._beginDataItemValue = s : o === i && (t.data._endDataItemValue = s), t.modified = !0, t.processing = !0;
      try {
        await this.dataChangeNotify(t, [o]);
      } finally {
        t.processing = !1;
      }
    }
  }
}
const Se = /* @__PURE__ */ Y({
  name: "TotalProgress",
  props: {
    row: {
      type: vt,
      required: !0
    },
    controller: {
      type: X,
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
    const e = G("total-progress"), t = R(0), o = R(0), s = P(() => t.value / o.value * 100), a = (l, c, m) => {
      switch (l.calcType) {
        case "WORKITEMCOUNT":
          return St(c, m);
        case "ESTIMATEDWORKLOAD":
          return kt(l.weekdays, c, m, l.fieldName);
        case "REMAININGWORKLOAD":
          return Ot(l.weekdays, c, m, l.fieldName);
        default:
          return 0;
      }
    }, i = (l, c, m) => {
      const {
        start: f,
        end: h
      } = m;
      let v = 0, w = 0, g = 0;
      if (c.length > 0) {
        const k = new Date(f);
        for (; k <= new Date(h); ) {
          if (rt(k, n.capacityConfig.weekdays)) {
            v += 1;
            const I = a(l, k, c);
            w = Math.round((w + I) * 10) / 10;
          }
          k.setDate(k.getDate() + 1);
        }
        g = v * l.dayCapacity;
      }
      return {
        numerator: w,
        denominator: g
      };
    }, d = () => {
      const l = i(n.capacityConfig, n.row.data._children || [], n.dateRange);
      t.value = l.numerator, o.value = l.denominator;
    };
    return ot(() => {
      d(), n.controller._evt.on("onSliderMove", () => {
        d();
      });
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
    }, [this.numerator, ie(" / "), this.denominator]), r(E("el-progress"), {
      percentage: this.percentage
    }, null)]);
  }
});
const Te = /* @__PURE__ */ Y({
  name: "IBizResourceGanttExFieldColumn",
  props: {
    controller: {
      type: oe,
      required: !0
    },
    gantt: {
      type: X,
      required: !0
    },
    row: {
      type: vt,
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
    const e = G("tree-grid-ex-field-column"), t = G("resource-gantt-ex-field-column"), o = R(), s = R({}), a = P(() => n.controller.nodeColumnControllerMap.get(n.row.data._nodeId)), i = P(() => n.row.data._nodeType !== "DE" && n.controller.isFirstShowColumn ? n.row.data._text : n.row.data[n.controller.name]), d = R(""), l = (D) => {
      d.value = D;
    }, c = P(() => {
      const D = a.value;
      return D ? D.nodeEditItem ? void 0 : D.codeList ? d.value : D.formatValue(i.value) + (D.unitName || "") : i.value;
    }), m = P(() => {
      if (n.controller.treeGrid.overflowMode === "ellipsis" && Ce(i.value) && i.value !== "")
        return c.value;
    }), f = P(() => i.value && a.value && (a.value.isLinkColumn || a.value.hasClickAction)), h = (D) => {
      var y;
      (y = a.value) == null || y.onTextClick(n.row, D);
    }, v = async (D, y) => {
      var b;
      await ((b = a.value) == null ? void 0 : b.onActionClick(D, n.row, y));
    }, w = (D) => n.virtualTableVal.find((y) => y.data._id === D), g = (D, y, b) => {
      const {
        data: S
      } = D;
      if (S && S._children && S._children.length > 1) {
        const N = S._children.find((T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField]);
        if (N && !w(N._id)) {
          const T = n.virtualTableVal.find((z) => y.data && z.data._deData && y.data._deData && z.data._deData[b.groupField] === y.data._deData[b.groupField]);
          return T && y.data._id === T.data._id;
        }
        return N && y.data._id === N._id;
      }
      return !1;
    }, k = (D, y, b) => {
      const {
        data: S
      } = D;
      if (S && S._children && S._children.length > 1) {
        const N = S._children.findIndex((T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField] && y.data._id === T._id);
        if (N !== -1 && g(D, y, n.groupConfig))
          return S._children.slice(N).reduce((z, A) => y.data && A._deData && y.data._deData && A._deData[b.groupField] === y.data._deData[b.groupField] ? z + 1 : z, 0);
      }
      return 0;
    }, I = (D, y, b) => {
      const {
        data: S
      } = D;
      return S && S._children && S._children.length > 1 ? S._children.reduce((N, T) => y.data && T._deData && y.data._deData && T._deData[b.groupField] === y.data._deData[b.groupField] ? N + 1 : N, 0) : 0;
    };
    function M(D, y) {
      let b = D;
      for (; b && b.nodeType === 1; ) {
        if (b.classList.contains(y))
          return b;
        b = b.parentNode;
      }
      return null;
    }
    const B = () => {
      if (s.value = {}, o.value) {
        const D = M(o.value, "xg-table-row");
        if (D) {
          const {
            ganttPosition: y
          } = n, b = 46;
          let S = xt(D), N = It(D);
          S < y.top + b && (S = y.top + b), N < y.bottom && (N = y.bottom);
          const A = ((window.innerHeight || document.documentElement.clientHeight) - S - N) / 2 + S - b / 2;
          A > S && (s.value = {
            position: "fixed",
            top: "".concat(A, "px")
          });
        }
      }
    }, V = P(() => {
      let D = "";
      const {
        parentRow: y,
        row: b,
        level: S
      } = n;
      return S > 1 && y && I(y, b, n.groupConfig) > 1 && (D = g(y, b, n.groupConfig) ? "first-index" : "no-first-index"), D;
    }), L = P(() => {
      const D = {}, {
        level: y,
        parentRow: b,
        row: S
      } = n;
      if (y && y > 1 && b && b.data._children && b.data._children.length > 1) {
        const N = k(b, S, n.groupConfig);
        if (N > 1) {
          const A = 46 * N - 20;
          Object.assign(D, {
            height: "".concat(A, "px")
          }), B();
        }
      }
      return D;
    });
    return {
      ns: e,
      ns2: t,
      nodeColumn: a,
      fieldValue: i,
      showText: c,
      clickable: f,
      tooltip: m,
      calcMergeClass: V,
      calcMergeStyle: L,
      columnRef: o,
      contentStyle: s,
      onInfoTextChange: l,
      onTextClick: h,
      onActionClick: v
    };
  },
  render() {
    var o, s, a, i, d, l, c;
    let n = null;
    (o = this.nodeColumn) != null && o.nodeEditItem ? n = r(E("iBizTreeGridExEditColumn"), {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (s = this.nodeColumn) != null && s.codeList ? n = r(E("iBizCodeList"), {
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
    return this.level === 1 && (t = r(Se, {
      row: this.row,
      controller: this.gantt,
      capacityConfig: this.capacityConfig,
      dateRange: this.dateRange
    }, null)), r("div", {
      ref: "columnRef",
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (i = this.controller.model.cellSysCss) == null ? void 0 : i.cssName, this.ns.is("has-action", !!e), (d = this.row) != null && d.data._children && ((c = (l = this.row) == null ? void 0 : l.data._children) == null ? void 0 : c.length) === 0 ? "no-children" : "", this.isTopFirstIndex ? "top-first-index" : "", this.calcMergeClass],
      style: this.calcMergeStyle
    }, [r("div", {
      class: [this.ns.b("text-container"), this.ns2.b("text-container")]
    }, [n]), e, t]);
  }
}), Ct = () => r("svg", {
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
}, null)])]), ke = () => r("svg", {
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
}, null)])])]), Oe = () => r("svg", {
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
}, null)])])]), Ee = () => r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  height: "1em",
  width: "1em",
  "data-v-6fbb019e": ""
}, [r("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null)]), Re = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.2A6.8 6.8 0 1 0 8 1.2a6.8 6.8 0 0 0 0 13.6zm.017-10V8.42H11.7v1.2H6.817V4.8h1.2z"
}, null)])]), Ne = () => r("svg", {
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
}, null)])]), Le = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M12.777 13.107V3.88a.621.621 0 0 0-.621-.62h-.76v.216a.977.977 0 0 1-.975.978h-4.9a.978.978 0 0 1-.977-.978v-.216H3.82a.62.62 0 0 0-.62.62v9.226c0 .341.278.62.62.62h8.336a.621.621 0 0 0 .62-.62zM5.744 3.255h4.453V2.2H5.744v1.054zm6.412-1.194c1.004 0 1.82.817 1.82 1.82v9.226a1.821 1.821 0 0 1-1.82 1.819H3.82A1.822 1.822 0 0 1 2 13.105V3.88c0-1.002.817-1.82 1.82-1.82h.724v-.084c0-.538.438-.976.977-.976h4.9c.538 0 .975.438.975.976v.085h.76zm-1.77 4.782a.6.6 0 0 1 .833.863l-3.688 3.562c-.002.003-.002.006-.005.009a.601.601 0 0 1-.849-.004L4.748 9.326a.599.599 0 1 1 .852-.844l1.511 1.524 3.274-3.163z"
}, null)])]), Ve = () => r("svg", {
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
const Me = /* @__PURE__ */ Y({
  name: "ResourceGanttColumnHead",
  props: {
    controller: {
      type: X,
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
    const t = n.controller, o = G("resource-gantt-column-head"), s = R(!1), a = R(!1), i = R(""), d = P(() => n.titleData.label);
    le(() => n.expandAll, (I) => {
      s.value = I;
    }, {
      immediate: !0
    });
    const l = () => {
      s.value = !s.value, e("expandAllChange", s.value);
    }, c = () => {
      e("headSearch", i.value);
    }, m = (I) => {
      I.preventDefault(), I.stopPropagation(), a.value = !1, e("headSearch", "");
    }, f = (I, M) => {
      M.stopPropagation(), a.value = !0;
    }, h = async (I, M) => {
      await n.controller.doUIAction(I.uiactionId, {}, M, I.appId);
    }, v = (I) => {
      I.preventDefault(), I.stopPropagation();
    }, w = () => r(E("el-input"), {
      modelValue: i.value,
      "onUpdate:modelValue": (I) => i.value = I,
      class: o.b("search"),
      onInput: c,
      placeholder: "搜索成员"
    }, {
      prefix: () => r(Ct, null, null),
      suffix: () => r(E("el-button"), {
        class: o.be("search", "suffix"),
        onClick: m
      }, {
        default: () => [r(Ee, null, null)]
      })
    }), g = () => {
      var V, L;
      const I = t.getNodeModel("root"), M = t.state.selectedData;
      if (!((L = (V = I == null ? void 0 : I.decontextMenu) == null ? void 0 : V.detoolbarItems) != null && L.length))
        return;
      const B = t.contextMenuInfos[I.id];
      return B.clickTBUIActionItem && B.onlyOneActionItem ? null : r(E("iBizContextMenuControl"), {
        modelData: I.decontextMenu,
        groupLevelKeys: [50],
        nodeModel: I,
        nodeData: M,
        context: t.context,
        onActionClick: (D, y) => h(D, y)
      }, null);
    };
    return {
      c: t,
      ns: o,
      label: d,
      isHeadSearch: a,
      expand: s,
      renderHeadSearch: w,
      onColumnHeadClick: v,
      onExpandAllChange: l,
      renderContent: () => a.value ? w() : r("div", {
        class: o.b("box")
      }, [r("div", {
        class: o.be("box", "left")
      }, [r(E("el-button"), {
        class: o.bem("box", "left", "icon"),
        title: s.value ? "全部收起" : "全部展开",
        onClick: l
      }, {
        default: () => [s.value ? r(Oe, null, null) : r(ke, null, null)]
      }), r("div", {
        class: o.bem("box", "left", "caption")
      }, [d.value])]), r("div", {
        class: o.be("box", "right")
      }, [r(E("el-button"), {
        size: "small",
        title: "搜索成员",
        class: [o.e("item")],
        onClick: (I) => f("search_personal", I)
      }, {
        icon: () => r("div", {
          class: o.e("icon")
        }, [r(Ct, null, null)])
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
    var w;
    const t = G("action-toolbar"), o = G("resource-action-toolbar"), s = R(), a = R(!1), i = R(!1);
    (w = n.actionDetails) == null || w.forEach((g) => {
      g.capLanguageRes && g.capLanguageRes.lanResTag && (g.caption = ibiz.i18n.t(g.capLanguageRes.lanResTag, g.caption)), g.tooltipLanguageRes && g.tooltipLanguageRes.lanResTag && (g.tooltip = ibiz.i18n.t(g.tooltipLanguageRes.lanResTag, g.tooltip));
    });
    const d = (g) => {
      i.value = g;
    }, l = async (g, k) => {
      k.stopPropagation(), n.mode === "buttons" ? a.value = !1 : s.value && s.value.handleClose(), e("actionClick", g, k);
    }, c = R([]), m = R([]);
    n.actionDetails && n.actionDetails.forEach((g) => {
      n.groupLevelKeys.findIndex((k) => k === g.actionLevel) !== -1 ? m.value.push(g) : c.value.push(g);
    });
    const f = R(), h = (g) => {
      const {
        actionLevel: k
      } = g;
      return [t.e("item"), t.is("disabled", !1), t.em("item", "level-".concat(k))];
    }, v = n.zIndex;
    return {
      ns: t,
      ns2: o,
      dropdownRef: s,
      popoverIndex: v,
      expandDetails: c,
      groupDetails: m,
      groupButtonRef: f,
      popoverVisible: a,
      dropdownVisible: i,
      handleClick: l,
      calcActionItemClass: h,
      onVisibleChange: d
    };
  },
  render() {
    var s;
    const n = this.actionDetails || [], e = (a) => r(E("el-divider"), {
      class: this.ns.e("separator"),
      "border-style": "double",
      direction: a ? "vertical" : "horizontal"
    }, null), t = (a, i = !0) => a.map((d) => this.actionsState[d.id].visible ? [d.addSeparator && e(i), r(E("el-button"), {
      text: !0,
      size: "small",
      onClick: (l) => this.handleClick(d, l),
      title: d.tooltip,
      disabled: this.actionsState[d.id].disabled,
      class: this.calcActionItemClass(d)
    }, {
      default: () => [r("div", {
        class: this.ns.em("item", "icon")
      }, [d.showIcon && d.sysImage && r(E("iBizIcon"), {
        icon: d.sysImage
      }, null)]), r("div", {
        class: this.ns.em("item", "label")
      }, [d.showCaption ? d.caption : ""])]
    })] : null), o = () => {
      let a;
      if (this.groupDetails.length === 0 || !(this.groupDetails.findIndex((l) => this.actionsState[l.id].visible === !0) !== -1))
        return null;
      const d = this.groupDetails.findIndex((l) => this.actionsState[l.id].disabled === !1) === -1;
      return [r(E("el-button"), {
        size: "small",
        text: !0,
        disabled: d,
        ref: "groupButtonRef",
        class: [this.ns.e("item"), this.ns.is("expand", this.popoverVisible)]
      }, {
        icon: () => r(E("ion-icon"), {
          class: this.ns.e("icon"),
          name: "ellipsis-vertical-outline",
          title: ibiz.i18n.t("component.actionToolbar.more")
        }, null)
      }), r(E("el-popover"), {
        placement: "bottom-start",
        "virtual-ref": this.groupButtonRef,
        trigger: "click",
        visible: this.popoverVisible,
        "onUpdate:visible": (l) => this.popoverVisible = l,
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
      }, [t(this.expandDetails), o()]) : r(E("el-dropdown"), {
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
        }, [this.caption, r(E("ion-icon"), {
          class: this.ns.e("caption-icon"),
          name: "ellipsis-vertical-outline"
        }, null)]),
        dropdown: () => r(E("el-dropdown-menu"), null, {
          default: () => [n.length > 0 && n.map((a) => this.actionsState[a.id].visible ? r(E("el-dropdown-item"), {
            class: [this.ns.e("item"), this.ns.is("disabled", !1)],
            title: a.tooltip,
            disabled: this.actionsState[a.id].disabled,
            command: a
          }, {
            default: () => [a.showIcon && a.sysImage && r(E("iBizIcon"), {
              icon: a.sysImage
            }, null), a.showCaption ? a.caption : ""]
          }) : null)]
        })
      });
  }
});
let Et = class extends Dt {
};
const tt = /* @__PURE__ */ Y({
  name: "IBizPanelResourceState",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Et,
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
    const i = P(() => {
      const {
        id: l
      } = n.modelData, c = [e.b(), t.b(), e.m(l)];
      return c.push(...n.controller.containerClass), c;
    });
    return {
      ns: e,
      classArr: i,
      tempStyle: o,
      renderContent: () => s.map((l) => r("div", {
        class: [t.e("content"), t.e(l.tag)]
      }, [r("div", {
        class: [t.em("content", "star")]
      }, null), r("div", {
        class: t.em("content", "caption")
      }, [l.name])]))
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
    const s = new Et(e, t, o);
    return await s.init(), s;
  }
};
const Pe = nt(
  tt,
  function(n) {
    n.component(tt.name, tt), wt("CUSTOM_RESOURCE_STATE", () => new Be());
  }
);
class Rt extends Dt {
}
const et = /* @__PURE__ */ Y({
  name: "IBizResourceDropdownList",
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
    const e = G("dropdown"), t = G("resource-dropdown-list"), o = n.controller, s = R(""), a = R({}), i = R([]), d = [{
      label: "容量计算"
    }, {
      calcType: "WORKITEMCOUNT",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.work_item_count}",
      label: "工作项数量",
      icon: Le
    }, {
      calcType: "ESTIMATEDWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.estimated_workload}",
      fieldName: "estimated_workload",
      label: "预估工时",
      icon: Re
    }, {
      calcType: "REMAININGWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.remaining_workload}",
      fieldName: "remaining_workload",
      label: "剩余工时",
      icon: Ne
    }], {
      rawItem: l
    } = n.modelData;
    l && l.cssStyle && (s.value = l.cssStyle);
    const c = P(() => {
      const {
        id: h
      } = n.modelData, v = [e.b(), t.b(), e.m(h)];
      return v.push(...n.controller.containerClass), v;
    });
    ot(() => {
      i.value = d, a.value = d[1];
    });
    const m = (h) => {
      a.value = h;
      const v = {};
      Object.assign(v, h), delete v.icon, n.controller.panel.panelItems && n.controller.panel.panelItems.gantt && n.controller.panel.panelItems.gantt.control.capacityCalcChange(v);
    };
    return {
      ns: e,
      ns2: t,
      c: o,
      curValue: a,
      items: i,
      classArr: c,
      tempStyle: s,
      handleItemClick: m,
      renderContent: () => r(E("el-dropdown"), {
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
        dropdown: () => r(E("el-dropdown-menu"), null, {
          default: () => i.value.map((h) => r(E("el-dropdown-item"), {
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
            }, [Ve()])])]
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
    const s = new Rt(e, t, o);
    return await s.init(), s;
  }
}
const Ge = nt(
  et,
  function(n) {
    n.component(et.name, et), wt(
      "CUSTOM_RESOURCE_DROPDOWN_LIST",
      () => new je()
    );
  }
);
function $e() {
  const n = R(!1), e = (c) => {
    const { startDate: m, endDate: f, dateRange: h, sliderLimit: v } = c;
    let w = p(m.date), g = p(f.date);
    const k = g.diff(w, "hour");
    if (w.diff(w.startOf("day"), "hour") < 12) {
      if (w = w.startOf("day"), g = g.subtract(1, "day").startOf("day"), v && h) {
        const M = p(h.end).startOf("day").add(1, "day").subtract(1, "second"), B = p(h.start).startOf("day");
        (p(f.date).isAfter(M) || p(f.date).isSame(M)) && (g = M), (p(m.date).isBefore(B) || p(m.date).isSame(B)) && (w = B);
      }
      k === 24 && (g = w);
    } else
      g = g.startOf("day"), w = w.add(1, "day").startOf("day"), k === 24 && (w = g);
    return g = g.add(1, "day").startOf("day").subtract(1, "second"), { start: w, end: g };
  }, t = (c) => {
    const { startDate: m, endDate: f } = c;
    let h = p(m.date), v = p(f.date);
    return h = h.startOf("day"), v = v.startOf("day").add(1, "day").subtract(1, "second"), { start: h, end: v };
  }, o = (c, m) => ({
    curDate: p(c),
    rangeStart: p(m.start).startOf("day"),
    rangeEnd: p(m.end).startOf("day").add(1, "day").subtract(1, "second")
  }), s = (c, m) => {
    const { startDate: f, endDate: h } = c, v = f.clone(), w = h.clone();
    let g;
    n.value ? g = e(c) : g = t(c), n.value = !1, v.setDate(p(g.start)), w.setDate(p(g.end)), m({
      startDate: v,
      endDate: w,
      unit: "hour"
    });
  }, a = (c, m) => {
    const {
      x: f,
      type: h,
      startDate: v,
      endDate: w,
      sliderLimit: g,
      dateRange: k,
      ganttColumnWidth: I,
      currentMillisecond: M
    } = c;
    let B;
    n.value = !0;
    const V = v.getOffset(f / I * M).clone();
    h === "resize" && (n.value = !1);
    let L = 0;
    if (g && k) {
      const { rangeStart: D, rangeEnd: y } = o(v.date, k), b = w.getOffset(
        f / I * M
      ), S = p(w.date), N = p(v.date);
      let T = p(V.date), z = p(b.date);
      if (h === "resize") {
        const A = S.subtract(1, "day").add(1, "second");
        T.isAfter(A) && (V.setDate(A.toDate()), T = p(V.date)), T.isAfter(y.startOf("day")) && (V.setDate(y.startOf("day").toDate()), T = p(V.date));
      } else {
        if (N.isBefore(D.add(1, "day"), "day") && S.isAfter(y.subtract(1, "day"), "day"))
          return f;
        z.isAfter(y) && (b.setDate(y.toDate()), z = p(b.date));
        const A = S.diff(N, "second"), W = z.diff(T, "second"), F = z.subtract(A, "second");
        L = z.add(1, "second").valueOf() - F.valueOf(), W > 0 && W <= A && F.isAfter(D) && (V.setDate(F.toDate()), T = p(V.date));
      }
      T.isBefore(D) && V.setDate(D.toDate());
    }
    return (V.compareTo(w.getOffset(-864e5)) === "r" || L > 0) && h !== "resize" && (B = V.getOffset(L > 0 ? L : 864e5)), m({
      startDate: V,
      endDate: B,
      unit: "hour"
    }), f;
  }, i = (c, m) => {
    const {
      x: f,
      type: h,
      startDate: v,
      endDate: w,
      sliderLimit: g,
      dateRange: k,
      ganttColumnWidth: I,
      currentMillisecond: M
    } = c;
    n.value = !0;
    let B = 0, V;
    const L = w.getOffset(f / I * M).clone();
    if (h === "resize" && (n.value = !1), g && k) {
      const { rangeStart: D, rangeEnd: y } = o(w.date, k), b = v.getOffset(
        f / I * M
      ), S = p(v.date), N = p(w.date);
      let T = p(L.date);
      const z = p(b.date);
      if (h === "resize") {
        const A = S.add(1, "day").subtract(1, "second");
        T.isBefore(A) && (L.setDate(A), T = p(L.date)), T.isBefore(
          D.startOf("day").add(1, "day").subtract(1, "second")
        ) && (L.setDate(
          D.startOf("day").add(1, "day").subtract(1, "second").toDate()
        ), T = p(L.date));
      } else {
        if (S.isBefore(D.add(1, "day"), "day") && N.isAfter(y.subtract(1, "day"), "day") || z.isBefore(D))
          return f;
        const A = N.diff(S, "second"), W = T.diff(z, "second"), F = z.add(A + 1, "second");
        B = F.valueOf() - z.valueOf(), W > 0 && W <= A && F.isBefore(y) && (L.setDate(F), T = p(L.date));
      }
      T.isAfter(y) && L.setDate(y);
    }
    return L.compareTo(v.getOffset(864e5)) === "l" && h !== "resize" && (V = L.getOffset(B > 0 ? -B : -864e5)), m({
      startDate: V,
      endDate: L,
      unit: "hour"
    }), f;
  };
  function d(c) {
    const { startDate: m, ganttHeader: f, currentMillisecond: h, ganttColumnWidth: v } = c;
    return m.intervalTo(f.start) / h * v;
  }
  function l(c) {
    const { startDate: m, endDate: f, currentMillisecond: h, ganttColumnWidth: v } = c;
    return f.intervalTo(m) / h * v;
  }
  return {
    handleEmitMove: s,
    handleSetStart: a,
    handleSetEnd: i,
    handleSliderLeft: d,
    handleSliderWidth: l
  };
}
const at = /* @__PURE__ */ Y({
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
    var ut;
    const e = re((...u) => new X(...u)), t = R(), o = R(), s = R(!1), a = G("control-".concat(e.model.controlType.toLowerCase())), i = G("control-resource-gantt"), d = R(), l = R(!0), {
      handleEmitMove: c,
      handleSetStart: m,
      handleSetEnd: f,
      handleSliderLeft: h,
      handleSliderWidth: v
    } = $e(), w = R();
    w.value = me();
    const g = E("IBizRawItem"), k = E("IBizIcon");
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
    }, D = [], y = ["blue", "light-blue", "blue-cyan", "pink", "purple", "violet", "indigo", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "grey", "sky-blue"], b = (ut = de()) == null ? void 0 : ut.appContext.app;
    ot(() => {
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
      return e.state.onlyTopNodes ? z() : e.model.rootVisible ? e.state.rootNodes : (C = (u = e.state.rootNodes[0]) == null ? void 0 : u._children) == null ? void 0 : C.filter((x) => !d.value || x.name.includes(d.value));
    }), F = P(() => {
      const u = [];
      return e.state.columnStates.forEach((C) => {
        var _;
        const x = (_ = e.columns[C.key]) == null ? void 0 : _.model;
        !C.hidden && x && u.push(x);
      }), u;
    }), Nt = P(() => ibiz.i18n.getLang().toLowerCase()), Lt = (u, C) => {
      if (u)
        D.push(C);
      else {
        const x = D.findIndex((_) => _._id === C._id);
        x > -1 && D.splice(x, 1);
      }
      e.setSelection(D);
    }, it = (u, C) => {
      if (I || l.value) {
        l.value = !1;
        return;
      }
      e.onTreeNodeClick(u, C), I = !0, setTimeout(() => {
        I = !1;
      }, 200);
    }, lt = (u) => {
      e.onDbTreeNodeClick(u);
    }, Vt = (u) => {
      e.onExpandChange(u, !0), u && !u._children && e.refreshNodeChildren(u);
    }, Mt = (u) => {
      e.onExpandChange(u, !1);
    };
    e.evt.on("onNewRow", (u) => {
      if (t.value) {
        const C = u.row.data;
        t.value.setExpand(C);
      }
    });
    const ct = () => {
      var u;
      (u = t.value) == null || u.fullscreenChange();
    };
    e._evt.on("onFullscreenChange", (u) => {
      ct();
    });
    const At = (u) => {
      d.value = u;
    }, zt = (u) => {
      e.state.expandAll = u;
    }, Bt = (u) => {
      console.log("抛值内容", u);
    }, Pt = (u) => {
      var _;
      const C = (_ = u[0]) == null ? void 0 : _.row, x = {
        begin: C._beginDataItemValue ? p(C._beginDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0,
        end: C._endDataItemValue ? p(C._endDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0
      };
      l.value = !0, e._evt.emit("onSliderMove", C), e.modifyNodeTime(C, x);
    }, dt = (u, C, x, _) => {
      const j = [];
      return u.forEach((O) => {
        var U;
        if (O.itemType === "SEPERATOR") {
          j.push({
            divided: "self"
          });
          return;
        }
        const q = _[O.id];
        if (q && !q.visible)
          return;
        const $ = {};
        if (O.showCaption && O.caption && ($.label = O.caption), O.sysImage && O.showIcon && ($.icon = r(k, {
          icon: O.sysImage
        }, null)), O.itemType === "DEUIACTION") {
          $.disabled = q.disabled, $.clickClose = !0;
          const {
            uiactionId: H
          } = O;
          H && ($.onClick = () => {
            e.doUIAction(H, C, x, O.appId);
          });
        } else if (O.itemType === "RAWITEM") {
          const {
            rawItem: H
          } = O;
          H && ($.label = r(g, {
            rawItem: O
          }, null));
        } else
          O.itemType === "ITEMS" && (U = O.detoolbarItems) != null && U.length && ($.children = dt(O.detoolbarItems, C, x, _));
        j.push($);
      }), j;
    };
    let Q;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((C) => {
        Q = C.default, Q.default && !Q.showContextMenu && (Q = Q.default);
      });
    });
    const jt = async (u, C) => {
      C.stopPropagation(), C.preventDefault();
      const x = e.getNodeModel(u._nodeId);
      if (!(x != null && x.decontextMenu))
        return;
      const _ = e.contextMenus[x.decontextMenu.id];
      if (!_.model.detoolbarItems)
        return;
      await _.calcButtonState(u._deData || (u.srfkey ? u : void 0), x.appDataEntityId);
      const j = _.state.buttonsState, O = dt(_.model.detoolbarItems, u, C, j);
      O.length && Q.showContextMenu({
        x: C.x,
        y: C.y,
        customClass: a.b("context-menu"),
        items: O
      });
    }, Gt = () => {
      const {
        isLoaded: u
      } = e.state;
      return u && r(E("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    }, $t = (u, C) => {
      const {
        caption: x,
        codeName: _,
        width: j,
        headerSysCss: O,
        align: q
      } = u, $ = e.columns[_];
      return r(E("x-gantt-column"), {
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
            class: O == null ? void 0 : O.cssName,
            onExpandAllChange: zt,
            onHeadSearch: At
          }, null) : r("div", {
            class: O == null ? void 0 : O.cssName
          }, [H]);
        },
        default: (U) => {
          const {
            row: H,
            column: Ft,
            level: Ht
          } = U, K = e.getRowState(H._id);
          if (K) {
            if (_ === "name") {
              const qt = yt(K, e.state.capacityConfig);
              let ht;
              H._parent && (ht = e.getRowState(H._parent._id));
              const Ut = W.value && W.value[0] ? W.value[0]._id === K.data._id : !1;
              return V(), r(Te, {
                controller: $,
                gantt: e,
                capacityConfig: qt,
                dateRange: e.state.dateRange,
                groupConfig: e.state.groupConfig,
                row: K,
                parentRow: ht,
                column: Ft,
                level: Ht,
                isTopFirstIndex: Ut,
                key: K.data._uuid + _,
                ganttPosition: M.value,
                virtualTableVal: B.value
              }, null);
            }
            const Yt = E(e.providers[_].component);
            return fe(Yt, {
              controller: $,
              row: K,
              key: K.data._uuid + _
            });
          }
          return null;
        }
      });
    }, Wt = () => r(E("x-gantt-slider"), {
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
      "slider-width": v
    }, {
      content: ({
        row: u,
        level: C,
        left: x
      }) => {
        if (C !== 1) {
          const _ = st(e.state.sliderShowContent, u._deData || {}).replace(/^"(.*?)"$/, "$1"), j = x < 0 ? "".concat(-x, "px") : "";
          return r("div", {
            class: [a.e("slider"), i.e("slider")],
            style: {
              background: T.value[u._nodeId]
            },
            onClick: (O) => it(u, O),
            onDblclick: () => lt(u),
            onContextmenu: (O) => jt(u, O)
          }, [_ && r("div", {
            class: i.em("slider", "caption"),
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
      ns2: i,
      fullscreenChange: ct,
      ganttRef: t,
      ganttBoxRef: o,
      isInited: s,
      ganttId: w,
      data: W,
      locale: Nt,
      columns: F,
      onCheck: Lt,
      loading: A,
      ganttStyle: N,
      onNodeClick: it,
      onNodeDbClick: lt,
      onNodeExpand: Vt,
      onNodeCollapse: Mt,
      renderContent: () => {
        const u = F.value.map((x, _) => $t(x)), C = Wt();
        return [...u, C];
      },
      renderGanttCell: (u) => {
        if (u.level === 1) {
          const C = e.getRowState(u.row._id) || {}, x = yt(C, e.state.capacityConfig);
          if (rt(u.column.date, x.weekdays)) {
            const _ = {};
            return Object.assign(_, {
              ...u,
              row: C
            }), r(xe, {
              cellData: _,
              showText: e.state.showCapacity,
              capacityConfig: x,
              onCellClick: Bt
            }, null);
          }
        }
      },
      renderGanttTitle: (u) => {
        const {
          column: C
        } = u, x = we(C.date), _ = De(C.date, "MM/DD");
        return r("div", {
          class: [a.b("column-title"), be(C.date) ? a.be("column-title", "today") : ""]
        }, [r("div", {
          class: a.be("column-title", "top")
        }, [x]), r("div", {
          class: a.be("column-title", "bottom")
        }, [_])]);
      },
      onSliderMove: Pt,
      renderNoData: Gt,
      onVirtualTableChange: L
    };
  },
  render() {
    var n;
    return this.isInited ? ue(r(E("iBizControlBase"), {
      ref: "ganttBoxRef",
      controller: this.c,
      class: [this.ns.b(), this.ns2.b(), (n = this.data) != null && n.length ? "" : this.ns.m("empty")]
    }, {
      default: () => [r(E("x-gantt"), {
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
const Fe = nt(
  at,
  function(n) {
    n.component(at.name, at), se(
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
