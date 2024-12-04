import './style.css';
var ae = Object.defineProperty;
var ne = (n, e, t) => e in n ? ae(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var J = (n, e, t) => (ne(n, typeof e != "symbol" ? e + "" : e, t), t);
import { GanttService as oe, getChildNodeRSs as Z, getRootNode as se, handleAllSettled as gt, getTreeNode as yt, GanttDataSetNodeData as re, GanttController as ie, calcDeCodeNameById as Ct, Srfuf as le, TreeGridExNotifyState as ce, isValueChange as de, TreeGridExRowState as Dt, TreeGridExFieldColumnController as ue, registerPanelItemProvider as _t, registerControlProvider as he } from "@ibiz-template/runtime";
import { useNamespace as G, PanelRawItemController as xt, withInstall as st, useControlController as fe, useUIStore as me } from "@ibiz-template/vue3-util";
import { defineComponent as H, createVNode as r, ref as E, computed as j, onMounted as rt, createTextVNode as pe, resolveComponent as R, watch as ot, isVNode as ge, getCurrentInstance as ye, withDirectives as Ce, resolveDirective as ve, h as we } from "vue";
import { createUUID as be } from "qx-util";
import p from "dayjs";
import { isObject as De } from "lodash-es";
import { ModelError as _e, RuntimeError as vt, awaitTimeout as xe } from "@ibiz-template/core";
import { isNotNil as Ie } from "ramda";
function Se(n, e, t) {
  const o = p(n), s = p(e), a = p(t);
  if (!(o instanceof p) || !(s instanceof p) || !(a instanceof p))
    throw new Error("All arguments must be dayjs objects");
  return o.isAfter(s) && o.isBefore(a) || o.isSame(s) || o.isSame(a);
}
const ke = (n) => {
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
}, Te = (n, e) => p(n).format(e), Oe = (n) => {
  const e = new Date(n), t = p(e), o = p();
  return t.isSame(o, "day");
}, Ee = (n, e, t) => p(n).isSame(p(e), t), it = (n, e) => n.replace(/\${(.*?)}/g, (t, o) => {
  const [s, a] = o.split("."), i = e[s] || "";
  return De(i) ? i[a] ? i[a] : "" : i;
}), lt = (n, e) => {
  const o = p(n).day();
  return e.includes(o);
}, wt = (n, e) => {
  let t = [], o = 0;
  const s = it(
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
}, It = (n, e, t) => (n.isAfter(e) || n.isSame(e)) && (n.isBefore(t) || n.isSame(t)), St = (n, e) => {
  const t = Math.floor(n / e * 10) / 10, o = Math.round((n - t * e) * 10) / 10, s = new Array(e).fill(t);
  let a = 0;
  for (let i = 0; a < o; i++)
    s[i] = Math.round((s[i] + 0.1) * 10) / 10, a = Math.round((a + 0.1) * 10) / 10;
  return s;
};
function kt(n) {
  return n.getBoundingClientRect().top;
}
function Tt(n) {
  const e = n.getBoundingClientRect(), t = window.innerHeight || document.documentElement.clientHeight, o = e.top + e.height;
  return t - o;
}
const Ot = (n, e = []) => {
  const t = p(n).startOf("day");
  return e.filter((o) => {
    const s = o._beginDataItemValue ? p(o._beginDataItemValue).startOf("day") : null, a = o._endDataItemValue ? p(o._endDataItemValue).startOf("day") : null;
    return s && a && s.isAfter(a) ? !1 : !s && a && t.isSame(a, "day") || s && !a && t.isSame(s, "day") || s && a && Se(t, s, a);
  }).length;
}, Et = (n, e, t) => {
  const o = new Date(n), s = new Date(e), a = [];
  for (let i = new Date(o); i <= s; i.setDate(i.getDate() + 1))
    lt(i, t) && a.push(new Date(i));
  return a;
}, Rt = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day");
  return t.filter(
    (u) => It(
      a,
      p(u._beginDataItemValue).startOf("day"),
      p(u._endDataItemValue).startOf("day")
    )
  ).forEach((u) => {
    const c = p(u._beginDataItemValue).startOf("day"), d = p(u._endDataItemValue).startOf("day"), m = Et(
      new Date(c.format("YYYY-MM-DD")),
      new Date(d.format("YYYY-MM-DD")),
      n
    ), f = m.length, h = u._deData[o] ? Number(u._deData[o]) : 0;
    if (f > 0 && h > 0) {
      const v = St(h, f), w = m.findIndex(
        (T) => p(T).startOf("day").isSame(a)
      ), y = w !== -1 ? v[w] : 0;
      s = Math.round((s + y) * 10) / 10;
    }
  }), s;
}, Nt = (n, e, t = [], o = "") => {
  let s = 0;
  const a = p(e).startOf("day"), i = p(/* @__PURE__ */ new Date()).startOf("day");
  return a.isBefore(i) ? 0 : (t.filter(
    (c) => It(
      a,
      p(c._beginDataItemValue).startOf("day"),
      p(c._endDataItemValue).startOf("day")
    )
  ).forEach((c) => {
    let d = p(c._beginDataItemValue).startOf("day");
    const m = p(c._endDataItemValue).startOf("day");
    d.isBefore(i) && (d = i);
    const f = Et(
      new Date(d.format("YYYY-MM-DD")),
      new Date(m.format("YYYY-MM-DD")),
      n
    ), h = f.length, v = c._deData[o] ? Number(c._deData[o]) : 0;
    if (h > 0 && v > 0) {
      const w = St(v, h), y = f.findIndex(
        (I) => p(I).startOf("day").isSame(a)
      ), T = y !== -1 ? w[y] : 0;
      s = Math.round((s + T) * 10) / 10;
    }
  }), s);
};
const Re = /* @__PURE__ */ H({
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
    const t = G("top-level-cell"), o = (d) => {
      d.stopPropagation(), e("cellClick", n.cellData);
    }, s = (d, m, f = 100) => {
      const h = d / m * f, v = f - h;
      return "polygon(0px ".concat(v, "%, 100% ").concat(v, "%, 100% ").concat(f, "%, 0px ").concat(f, "%)");
    }, a = (d, m) => {
      const f = {};
      return d < m && Object.assign(f, {
        "clip-path": s(d, m)
      }), f;
    }, i = (d, m) => {
      let f = [];
      return d === 0 ? [] : (d > m && (f = [t.em("caption", "exceed")]), d === m && (f = [t.em("caption", "saturation")]), d < m && (f = [t.em("caption", "standard")]), f);
    }, u = () => {
      const {
        column: d,
        row: m
      } = n.cellData;
      switch (n.capacityConfig.calcType) {
        case "WORKITEMCOUNT":
          return Ot(d.date, m.data._children);
        case "ESTIMATEDWORKLOAD":
          return Rt(n.capacityConfig.weekdays, d.date, m.data._children, n.capacityConfig.fieldName);
        case "REMAININGWORKLOAD":
          return Nt(n.capacityConfig.weekdays, d.date, m.data._children, n.capacityConfig.fieldName);
      }
    };
    return {
      ns: t,
      renderContent: () => {
        const {
          column: d
        } = n.cellData;
        if (!d)
          return "";
        const m = u() || 0, f = a(m, n.capacityConfig.dayCapacity), h = i(m, n.capacityConfig.dayCapacity);
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
class Ne extends oe {
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
    let u = [];
    if (!o && !this.model.rootVisible)
      u = [await this.getStaticGanttNodeData(
        e,
        t,
        o,
        i
      )];
    else
      switch (e.treeNodeType) {
        case "STATIC":
          u = [await this.getStaticGanttNodeData(
            e,
            t,
            o,
            i
          )];
          break;
        case "DE":
          u = await this.getDEGanttNodeDatas(
            e,
            t,
            o,
            i
          );
          break;
        case "CODELIST":
          u = await this.getCodeListGanttNodeDatas(
            e,
            t,
            o,
            i
          );
          break;
        default:
          throw new _e(
            e,
            ibiz.i18n.t("runtime.controller.control.gantt.noSupport", {
              treeNodeType: e.treeNodeType
            })
          );
      }
    const { expandFirstOnly: c, expanded: d, rootNode: m } = e, f = m && !this.model.rootVisible;
    if (!a)
      if (o && !o._parent) {
        u = await Promise.all(u);
        const h = await this.fetchAllChildNodes(u, s);
        u.forEach(async (v) => {
          const w = await this.fetchCustomChildNodes(
            v,
            s,
            h || []
          );
          v._children = w;
        });
      } else
        await Promise.all(
          u.map(async (h, v) => {
            if (d && // 全展开合只展开首节点expanded都为true
            (!c || c && v === 0) || f) {
              const w = await this.fetchChildNodes(
                h,
                s
              );
              h._children = w;
            }
          })
        );
    return u == null || u.forEach((h) => {
      h._beginDataItemValue || (h._beginDataItemValue = h._endDataItemValue), h._endDataItemValue || (h._endDataItemValue = h._beginDataItemValue), h._endDataItemValue && (h._endDataItemValue = "".concat(h._endDataItemValue, " 23:59:59"));
    }), u = this.groupSort(u || [], s.groupField), u;
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
      const { hasQuery: a } = t, u = Z(this.model, {
        parentId: e._nodeId,
        hasQuery: a
      })[0], { parentFilter: c } = u || {};
      o.forEach((d) => {
        c && d._deData && e._value === d._deData[c] && (d._parent = e, s.push(d));
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
      (await gt(
        a.map(async (u) => {
          const c = yt(
            this.model,
            u.childDETreeNodeId
          );
          return this.fetchNodeDatasByType(
            c,
            u,
            e,
            t
          );
        }),
        !1
      )).forEach((u) => {
        s.push(...u);
      });
    } else {
      const a = se(this.model);
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
      const u = a._deData && a._deData[t] ? o[a._deData[t]] : -1, c = i._deData && i._deData[t] ? o[i._deData[t]] : -1;
      return u - c;
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
    return i.length === 0 ? void 0 : ((await gt(
      i.map(async (c) => {
        const d = yt(
          this.model,
          c.childDETreeNodeId
        );
        c.parentFilter && Object.assign(a, {
          _value: this.getFilterNodes(e)
        });
        const m = Z(this.model, {
          parentId: d.id,
          hasQuery: t.hasQuery
        }).length === 0, f = { ...t, leaf: m };
        return this.getCustomDEGanttNodeDatas(
          d,
          c,
          a,
          f
        );
      }),
      !1
    )).forEach((c) => {
      s.push(...c);
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
    const { appDEDataSetId: a, appDataEntityId: i } = e, { context: u, params: c, navContext: d, navParams: m } = t ? this.getNodeRSFilterParams(t, o, s) : {
      context: s.context,
      params: s.params,
      navContext: {},
      navParams: {}
    };
    c.size = e.maxSize || 1e3, e.sortAppDEFieldId && Object.assign(c, {
      sort: "".concat(e.sortAppDEFieldId.toLowerCase(), ",").concat(e.sortDir ? e.sortDir.toLowerCase() : "asc")
    });
    const f = t ? t.parentFilter : "";
    f && c["n_".concat(f.toLowerCase(), "_eq")] && (Object.assign(c, {
      ["n_".concat(f.toLowerCase(), "_in")]: c["n_".concat(f.toLowerCase(), "_eq")]
    }), delete c["n_".concat(f.toLowerCase(), "_eq")]);
    const h = await this.app.deService.exec(
      i,
      a,
      u,
      c
    );
    return h.data.length ? h.data.map((w, y) => {
      const T = this.calcExpand(e, y);
      return new re(this.model, e, o, {
        data: w,
        leaf: !!s.leaf,
        navContext: d,
        navParams: m,
        defaultExpand: T
      });
    }) : [];
  }
}
class tt extends ie {
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
    this.service = new Ne(this.model), await this.service.init(this.context);
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
    const a = t[0], i = this.getNodeModel(a._nodeId), { appDataEntityId: u } = i, c = Ct(u);
    o[c.toLowerCase()] = (m = a._deData) == null ? void 0 : m.srfkey;
    const d = await ((f = this.viewScheduler) == null ? void 0 : f.triggerCustom(
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
    if (d === -1)
      throw new Error(
        ibiz.i18n.t("runtime.controller.control.calendar.missingViewLogic", {
          itemType: i.id.toLowerCase()
        })
      );
    return {
      cancel: !d.ok
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
      throw new vt(
        ibiz.i18n.t("runtime.controller.control.gantt.nonentity")
      );
    const o = this.state.rows[t._uuid];
    if (!o)
      throw new vt(
        ibiz.i18n.t("runtime.controller.common.md.rowData")
      );
    if (!o.modified) {
      ibiz.log.debug(ibiz.i18n.t("runtime.controller.common.md.noChange"));
      return;
    }
    if (o.processing) {
      await xe(500, this.save.bind(this), [t]);
      return;
    }
    const s = this.getNodeModel(t._nodeId), { appDataEntityId: a } = s, i = t._deData.srfuf === le.CREATE, u = Ct(a), c = this.context.clone();
    c[u] = t._deData.srfkey;
    const d = it(this.state.contextMap, t._deData || {}) || "{}";
    Object.assign(c, JSON.parse(d));
    const m = ibiz.hub.getApp(this.context.srfappid);
    let f;
    try {
      f = await m.deService.exec(
        a,
        i ? "create" : "update",
        c,
        t._deData
      );
    } catch (h) {
      throw await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(i ? "CREATE" : "UPDATE", "ERROR"), {
        error: h,
        data: o.data
      }), h;
    }
    o.data._deData = f.data, o.modified = !1, this.gridStateNotify(o, ce.SAVE), await this.evt.emit("onSaveSuccess", void 0);
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
    if (!(Object.prototype.hasOwnProperty.call(t.data, o) && !de(t.data[o], s)) && !((o === a || o === i) && Ee(t.data[o], s, "day"))) {
      t.data[o] = s, o === a ? t.data._beginDataItemValue = s : o === i && (t.data._endDataItemValue = s), t.modified = !0, t.processing = !0;
      try {
        await this.dataChangeNotify(t, [o]);
      } finally {
        t.processing = !1;
      }
    }
  }
}
const Le = /* @__PURE__ */ H({
  name: "TotalProgress",
  props: {
    row: {
      type: Dt,
      required: !0
    },
    controller: {
      type: tt,
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
    const e = G("total-progress"), t = E(0), o = E(0), s = j(() => t.value / o.value * 100), a = (c, d, m) => {
      switch (c.calcType) {
        case "WORKITEMCOUNT":
          return Ot(d, m);
        case "ESTIMATEDWORKLOAD":
          return Rt(c.weekdays, d, m, c.fieldName);
        case "REMAININGWORKLOAD":
          return Nt(c.weekdays, d, m, c.fieldName);
        default:
          return 0;
      }
    }, i = (c, d, m) => {
      const {
        start: f,
        end: h
      } = m;
      let v = 0, w = 0, y = 0;
      if (d.length > 0) {
        const T = new Date(f);
        for (; T <= new Date(h); ) {
          if (lt(T, n.capacityConfig.weekdays)) {
            v += 1;
            const I = a(c, T, d);
            w = Math.round((w + I) * 10) / 10;
          }
          T.setDate(T.getDate() + 1);
        }
        y = v * c.dayCapacity;
      }
      return {
        numerator: w,
        denominator: y
      };
    }, u = () => {
      const c = i(n.capacityConfig, n.row.data._children || [], n.dateRange);
      t.value = c.numerator, o.value = c.denominator;
    };
    return rt(() => {
      u(), n.controller._evt.on("onSliderMove", () => {
        u();
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
    }, [this.numerator, pe(" / "), this.denominator]), r(R("el-progress"), {
      percentage: this.percentage
    }, null)]);
  }
});
const Ve = /* @__PURE__ */ H({
  name: "IBizResourceGanttExFieldColumn",
  props: {
    controller: {
      type: ue,
      required: !0
    },
    gantt: {
      type: tt,
      required: !0
    },
    row: {
      type: Dt,
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
    const e = G("tree-grid-ex-field-column"), t = G("resource-gantt-ex-field-column"), o = E(), s = E({}), a = j(() => n.controller.nodeColumnControllerMap.get(n.row.data._nodeId)), i = j(() => n.row.data._nodeType !== "DE" && n.controller.isFirstShowColumn ? n.row.data._text : n.row.data[n.controller.name]), u = E(""), c = (b) => {
      u.value = b;
    }, d = j(() => {
      const b = a.value;
      return b ? b.nodeEditItem ? void 0 : b.codeList ? u.value : b.formatValue(i.value) + (b.unitName || "") : i.value;
    }), m = j(() => {
      if (n.controller.treeGrid.overflowMode === "ellipsis" && Ie(i.value) && i.value !== "")
        return d.value;
    }), f = j(() => i.value && a.value && (a.value.isLinkColumn || a.value.hasClickAction)), h = (b) => {
      var C;
      (C = a.value) == null || C.onTextClick(n.row, b);
    }, v = async (b, C) => {
      var _;
      await ((_ = a.value) == null ? void 0 : _.onActionClick(b, n.row, C));
    }, w = (b) => n.virtualTableVal.find((C) => C.data._id === b), y = (b, C, _) => {
      const {
        data: S
      } = b;
      if (S && S._children && S._children.length > 1) {
        const L = S._children.find((k) => C.data && k._deData && C.data._deData && k._deData[_.groupField] === C.data._deData[_.groupField]);
        if (L && !w(L._id)) {
          const k = n.virtualTableVal.find((N) => C.data && N.data._deData && C.data._deData && N.data._deData[_.groupField] === C.data._deData[_.groupField]);
          return k && C.data._id === k.data._id;
        }
        return L && C.data._id === L._id;
      }
      return !1;
    }, T = (b, C, _) => {
      const {
        data: S
      } = b;
      if (S && S._children && S._children.length > 1) {
        const L = S._children.findIndex((k) => C.data && k._deData && C.data._deData && k._deData[_.groupField] === C.data._deData[_.groupField] && C.data._id === k._id);
        if (L !== -1 && y(b, C, n.groupConfig))
          return S._children.slice(L).reduce((N, z) => C.data && z._deData && C.data._deData && z._deData[_.groupField] === C.data._deData[_.groupField] ? N + 1 : N, 0);
      }
      return 0;
    }, I = (b, C, _) => {
      const {
        data: S
      } = b;
      return S && S._children && S._children.length > 1 ? S._children.reduce((L, k) => C.data && k._deData && C.data._deData && k._deData[_.groupField] === C.data._deData[_.groupField] ? L + 1 : L, 0) : 0;
    };
    function A(b, C) {
      let _ = b;
      for (; _ && _.nodeType === 1; ) {
        if (_.classList.contains(C))
          return _;
        _ = _.parentNode;
      }
      return null;
    }
    const B = () => {
      if (s.value = {}, o.value) {
        const b = A(o.value, "xg-table-row");
        if (b) {
          const {
            ganttPosition: C
          } = n, _ = 46;
          let S = kt(b), L = Tt(b);
          S < C.top + _ && (S = C.top + _), L < C.bottom && (L = C.bottom);
          const z = ((window.innerHeight || document.documentElement.clientHeight) - S - L) / 2 + S - _ / 2;
          z > S && (s.value = {
            position: "fixed",
            top: "".concat(z, "px")
          });
        }
      }
    }, M = j(() => {
      let b = "";
      const {
        parentRow: C,
        row: _,
        level: S
      } = n;
      return S > 1 && C && I(C, _, n.groupConfig) > 1 && (b = y(C, _, n.groupConfig) ? "first-index" : "no-first-index"), b;
    }), V = j(() => {
      const b = {}, {
        level: C,
        parentRow: _,
        row: S
      } = n;
      if (C && C > 1 && _ && _.data._children && _.data._children.length > 1) {
        const L = T(_, S, n.groupConfig);
        if (L > 1) {
          const z = 46 * L - 20;
          Object.assign(b, {
            height: "".concat(z, "px")
          }), B();
        }
      }
      return b;
    });
    return {
      ns: e,
      ns2: t,
      nodeColumn: a,
      fieldValue: i,
      showText: d,
      clickable: f,
      tooltip: m,
      calcMergeClass: M,
      calcMergeStyle: V,
      columnRef: o,
      contentStyle: s,
      onInfoTextChange: c,
      onTextClick: h,
      onActionClick: v
    };
  },
  render() {
    var o, s, a, i, u, c, d;
    let n = null;
    (o = this.nodeColumn) != null && o.nodeEditItem ? n = r(R("iBizTreeGridExEditColumn"), {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (s = this.nodeColumn) != null && s.codeList ? n = r(R("iBizCodeList"), {
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
    this.$slots.actions ? e = this.$slots.actions() : this.row.columnActionsStates[this.controller.name] && (e = r(qe, {
      class: this.ns.e("toolbar"),
      actionDetails: (a = this.nodeColumn) == null ? void 0 : a.nodeColumn.deuiactionGroup.uiactionGroupDetails,
      actionsState: this.row.columnActionsStates[this.controller.name],
      mode: "dropdown",
      popperClass: this.ns2.b("popper"),
      groupLevelKeys: [],
      onActionClick: this.onActionClick
    }, null));
    let t = null;
    return this.level === 1 && (t = r(Le, {
      row: this.row,
      controller: this.gantt,
      capacityConfig: this.capacityConfig,
      dateRange: this.dateRange
    }, null)), r("div", {
      ref: "columnRef",
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (i = this.controller.model.cellSysCss) == null ? void 0 : i.cssName, this.ns.is("has-action", !!e), (u = this.row) != null && u.data._children && ((d = (c = this.row) == null ? void 0 : c.data._children) == null ? void 0 : d.length) === 0 ? "no-children" : "", this.isTopFirstIndex ? "top-first-index" : "", this.calcMergeClass],
      style: this.calcMergeStyle
    }, [r("div", {
      class: [this.ns.b("text-container"), this.ns2.b("text-container")]
    }, [n]), e, t]);
  }
}), bt = () => r("svg", {
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
}, null)])]), Me = () => r("svg", {
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
}, null)])])]), Ae = () => r("svg", {
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
}, null)])])]), ze = () => r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  height: "1em",
  width: "1em",
  "data-v-6fbb019e": ""
}, [r("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null)]), Be = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.2A6.8 6.8 0 1 0 8 1.2a6.8 6.8 0 0 0 0 13.6zm.017-10V8.42H11.7v1.2H6.817V4.8h1.2z"
}, null)])]), Pe = () => r("svg", {
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
}, null)])]), je = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M12.777 13.107V3.88a.621.621 0 0 0-.621-.62h-.76v.216a.977.977 0 0 1-.975.978h-4.9a.978.978 0 0 1-.977-.978v-.216H3.82a.62.62 0 0 0-.62.62v9.226c0 .341.278.62.62.62h8.336a.621.621 0 0 0 .62-.62zM5.744 3.255h4.453V2.2H5.744v1.054zm6.412-1.194c1.004 0 1.82.817 1.82 1.82v9.226a1.821 1.821 0 0 1-1.82 1.819H3.82A1.822 1.822 0 0 1 2 13.105V3.88c0-1.002.817-1.82 1.82-1.82h.724v-.084c0-.538.438-.976.977-.976h4.9c.538 0 .975.438.975.976v.085h.76zm-1.77 4.782a.6.6 0 0 1 .833.863l-3.688 3.562c-.002.003-.002.006-.005.009a.601.601 0 0 1-.849-.004L4.748 9.326a.599.599 0 1 1 .852-.844l1.511 1.524 3.274-3.163z"
}, null)])]), Ge = () => r("svg", {
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
const We = /* @__PURE__ */ H({
  name: "ResourceGanttColumnHead",
  props: {
    controller: {
      type: tt,
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
    const t = n.controller, o = G("resource-gantt-column-head"), s = E(!1), a = E(!1), i = E(""), u = j(() => n.titleData.label);
    ot(() => n.expandAll, (I) => {
      s.value = I;
    }, {
      immediate: !0
    });
    const c = () => {
      s.value = !s.value, e("expandAllChange", s.value);
    }, d = () => {
      e("headSearch", i.value);
    }, m = (I) => {
      I.preventDefault(), I.stopPropagation(), a.value = !1, e("headSearch", "");
    }, f = (I, A) => {
      A.stopPropagation(), a.value = !0;
    }, h = async (I, A) => {
      await n.controller.doUIAction(I.uiactionId, {}, A, I.appId);
    }, v = (I) => {
      I.preventDefault(), I.stopPropagation();
    }, w = () => r(R("el-input"), {
      modelValue: i.value,
      "onUpdate:modelValue": (I) => i.value = I,
      class: o.b("search"),
      onInput: d,
      placeholder: "搜索成员"
    }, {
      prefix: () => r(bt, null, null),
      suffix: () => r(R("el-button"), {
        class: o.be("search", "suffix"),
        onClick: m
      }, {
        default: () => [r(ze, null, null)]
      })
    }), y = () => {
      var M, V;
      const I = t.getNodeModel("root"), A = t.state.selectedData;
      if (!((V = (M = I == null ? void 0 : I.decontextMenu) == null ? void 0 : M.detoolbarItems) != null && V.length))
        return;
      const B = t.contextMenuInfos[I.id];
      return B.clickTBUIActionItem && B.onlyOneActionItem ? null : r(R("iBizContextMenuControl"), {
        modelData: I.decontextMenu,
        groupLevelKeys: [50],
        nodeModel: I,
        nodeData: A,
        context: t.context,
        onActionClick: (b, C) => h(b, C)
      }, null);
    };
    return {
      c: t,
      ns: o,
      label: u,
      isHeadSearch: a,
      expand: s,
      renderHeadSearch: w,
      onColumnHeadClick: v,
      onExpandAllChange: c,
      renderContent: () => a.value ? w() : r("div", {
        class: o.b("box")
      }, [r("div", {
        class: o.be("box", "left")
      }, [r(R("el-button"), {
        class: o.bem("box", "left", "icon"),
        title: s.value ? "全部收起" : "全部展开",
        onClick: c
      }, {
        default: () => [s.value ? r(Ae, null, null) : r(Me, null, null)]
      }), r("div", {
        class: o.bem("box", "left", "caption")
      }, [u.value])]), r("div", {
        class: o.be("box", "right")
      }, [r(R("el-button"), {
        size: "small",
        title: "搜索成员",
        class: [o.e("item")],
        onClick: (I) => f("search_personal", I)
      }, {
        icon: () => r("div", {
          class: o.e("icon")
        }, [r(bt, null, null)])
      }), y()])])
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [this.renderContent()]);
  }
});
function $e(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !ge(n);
}
const qe = /* @__PURE__ */ H({
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
    const t = G("action-toolbar"), o = G("resource-action-toolbar"), s = E(), a = E(!1), i = E(!1);
    (w = n.actionDetails) == null || w.forEach((y) => {
      y.capLanguageRes && y.capLanguageRes.lanResTag && (y.caption = ibiz.i18n.t(y.capLanguageRes.lanResTag, y.caption)), y.tooltipLanguageRes && y.tooltipLanguageRes.lanResTag && (y.tooltip = ibiz.i18n.t(y.tooltipLanguageRes.lanResTag, y.tooltip));
    });
    const u = (y) => {
      i.value = y;
    }, c = async (y, T) => {
      T.stopPropagation(), n.mode === "buttons" ? a.value = !1 : s.value && s.value.handleClose(), e("actionClick", y, T);
    }, d = E([]), m = E([]);
    n.actionDetails && n.actionDetails.forEach((y) => {
      n.groupLevelKeys.findIndex((T) => T === y.actionLevel) !== -1 ? m.value.push(y) : d.value.push(y);
    });
    const f = E(), h = (y) => {
      const {
        actionLevel: T
      } = y;
      return [t.e("item"), t.is("disabled", !1), t.em("item", "level-".concat(T))];
    }, v = n.zIndex;
    return {
      ns: t,
      ns2: o,
      dropdownRef: s,
      popoverIndex: v,
      expandDetails: d,
      groupDetails: m,
      groupButtonRef: f,
      popoverVisible: a,
      dropdownVisible: i,
      handleClick: c,
      calcActionItemClass: h,
      onVisibleChange: u
    };
  },
  render() {
    var s;
    const n = this.actionDetails || [], e = (a) => r(R("el-divider"), {
      class: this.ns.e("separator"),
      "border-style": "double",
      direction: a ? "vertical" : "horizontal"
    }, null), t = (a, i = !0) => a.map((u) => this.actionsState[u.id].visible ? [u.addSeparator && e(i), r(R("el-button"), {
      text: !0,
      size: "small",
      onClick: (c) => this.handleClick(u, c),
      title: u.tooltip,
      disabled: this.actionsState[u.id].disabled,
      class: this.calcActionItemClass(u)
    }, {
      default: () => [r("div", {
        class: this.ns.em("item", "icon")
      }, [u.showIcon && u.sysImage && r(R("iBizIcon"), {
        icon: u.sysImage
      }, null)]), r("div", {
        class: this.ns.em("item", "label")
      }, [u.showCaption ? u.caption : ""])]
    })] : null), o = () => {
      let a;
      if (this.groupDetails.length === 0 || !(this.groupDetails.findIndex((c) => this.actionsState[c.id].visible === !0) !== -1))
        return null;
      const u = this.groupDetails.findIndex((c) => this.actionsState[c.id].disabled === !1) === -1;
      return [r(R("el-button"), {
        size: "small",
        text: !0,
        disabled: u,
        ref: "groupButtonRef",
        class: [this.ns.e("item"), this.ns.is("expand", this.popoverVisible)]
      }, {
        icon: () => r(R("ion-icon"), {
          class: this.ns.e("icon"),
          name: "ellipsis-vertical-outline",
          title: ibiz.i18n.t("component.actionToolbar.more")
        }, null)
      }), r(R("el-popover"), {
        placement: "bottom-start",
        "virtual-ref": this.groupButtonRef,
        trigger: "click",
        visible: this.popoverVisible,
        "onUpdate:visible": (c) => this.popoverVisible = c,
        "popper-class": this.ns.e("popover"),
        "virtual-triggering": !0,
        "popper-style": "z-index:".concat(this.popoverIndex)
      }, $e(a = t(this.groupDetails, !1)) ? a : {
        default: () => [a]
      })];
    };
    if ((s = this.actionsState) != null && s.visible)
      return this.mode === "buttons" ? r("div", {
        class: [this.ns.b(), this.ns.m("buttons")],
        onClick: (a) => a.stopPropagation()
      }, [t(this.expandDetails), o()]) : r(R("el-dropdown"), {
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
        }, [this.caption, r(R("ion-icon"), {
          class: this.ns.e("caption-icon"),
          name: "ellipsis-vertical-outline"
        }, null)]),
        dropdown: () => r(R("el-dropdown-menu"), null, {
          default: () => [n.length > 0 && n.map((a) => this.actionsState[a.id].visible ? r(R("el-dropdown-item"), {
            class: [this.ns.e("item"), this.ns.is("disabled", !1)],
            title: a.tooltip,
            disabled: this.actionsState[a.id].disabled,
            command: a
          }, {
            default: () => [a.showIcon && a.sysImage && r(R("iBizIcon"), {
              icon: a.sysImage
            }, null), a.showCaption ? a.caption : ""]
          }) : null)]
        })
      });
  }
});
let Lt = class extends xt {
};
const et = /* @__PURE__ */ H({
  name: "IBizPanelResourceState",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Lt,
      required: !0
    }
  },
  setup(n) {
    const e = G("panel-rawitem"), t = G("panel-resource-state"), o = E(""), s = [{
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
    const i = j(() => {
      const {
        id: c
      } = n.modelData, d = [e.b(), t.b(), e.m(c)];
      return d.push(...n.controller.containerClass), d;
    });
    return {
      ns: e,
      classArr: i,
      tempStyle: o,
      renderContent: () => s.map((c) => r("div", {
        class: [t.e("content"), t.e(c.tag)]
      }, [r("div", {
        class: [t.em("content", "star")]
      }, null), r("div", {
        class: t.em("content", "caption")
      }, [c.name])]))
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
let Fe = class {
  constructor() {
    J(this, "component", "IBizPanelResourceState");
  }
  async createController(e, t, o) {
    const s = new Lt(e, t, o);
    return await s.init(), s;
  }
};
const He = st(
  et,
  function(n) {
    n.component(et.name, et), _t("CUSTOM_RESOURCE_STATE", () => new Fe());
  }
);
class Vt extends xt {
}
const at = /* @__PURE__ */ H({
  name: "IBizResourceDropdownList",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: Vt,
      required: !0
    }
  },
  setup(n) {
    const e = G("dropdown"), t = G("resource-dropdown-list"), o = n.controller, s = E(""), a = E({}), i = E([]), u = [{
      label: "容量计算"
    }, {
      calcType: "WORKITEMCOUNT",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.work_item_count}",
      label: "工作项数量",
      icon: je
    }, {
      calcType: "ESTIMATEDWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.estimated_workload}",
      fieldName: "estimated_workload",
      label: "预估工时",
      icon: Be
    }, {
      calcType: "REMAININGWORKLOAD",
      weekdays: "${weekday}",
      dayCapacityVal: "${day_capacity.remaining_workload}",
      fieldName: "remaining_workload",
      label: "剩余工时",
      icon: Pe
    }], {
      rawItem: c
    } = n.modelData;
    c && c.cssStyle && (s.value = c.cssStyle);
    const d = j(() => {
      const {
        id: h
      } = n.modelData, v = [e.b(), t.b(), e.m(h)];
      return v.push(...n.controller.containerClass), v;
    });
    rt(() => {
      i.value = u, a.value = u[1];
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
      classArr: d,
      tempStyle: s,
      handleItemClick: m,
      renderContent: () => r(R("el-dropdown"), {
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
        dropdown: () => r(R("el-dropdown-menu"), null, {
          default: () => i.value.map((h) => r(R("el-dropdown-item"), {
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
            }, [Ge()])])]
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
class Ye {
  constructor() {
    J(this, "component", "IBizResourceDropdownList");
  }
  async createController(e, t, o) {
    const s = new Vt(e, t, o);
    return await s.init(), s;
  }
}
const Ue = st(
  at,
  function(n) {
    n.component(at.name, at), _t(
      "CUSTOM_RESOURCE_DROPDOWN_LIST",
      () => new Ye()
    );
  }
);
function Ke() {
  const n = E(!1), e = (d) => {
    const { startDate: m, endDate: f, dateRange: h, sliderLimit: v } = d;
    let w = p(m.date), y = p(f.date);
    const T = y.diff(w, "hour");
    if (w.diff(w.startOf("day"), "hour") < 12) {
      if (w = w.startOf("day"), y = y.subtract(1, "day").startOf("day"), v && h) {
        const A = p(h.end).startOf("day").add(1, "day").subtract(1, "second"), B = p(h.start).startOf("day");
        (p(f.date).isAfter(A) || p(f.date).isSame(A)) && (y = A), (p(m.date).isBefore(B) || p(m.date).isSame(B)) && (w = B);
      }
      T === 24 && (y = w);
    } else
      y = y.startOf("day"), w = w.add(1, "day").startOf("day"), T === 24 && (w = y);
    return y = y.add(1, "day").startOf("day").subtract(1, "second"), { start: w, end: y };
  }, t = (d) => {
    const { startDate: m, endDate: f } = d;
    let h = p(m.date), v = p(f.date);
    return h = h.startOf("day"), v = v.startOf("day").add(1, "day").subtract(1, "second"), { start: h, end: v };
  }, o = (d, m) => ({
    curDate: p(d),
    rangeStart: p(m.start).startOf("day"),
    rangeEnd: p(m.end).startOf("day").add(1, "day").subtract(1, "second")
  }), s = (d, m) => {
    const { startDate: f, endDate: h } = d, v = f.clone(), w = h.clone();
    let y;
    n.value ? y = e(d) : y = t(d), n.value = !1, v.setDate(p(y.start)), w.setDate(p(y.end)), m({
      startDate: v,
      endDate: w,
      unit: "hour"
    });
  }, a = (d, m) => {
    const {
      x: f,
      type: h,
      startDate: v,
      endDate: w,
      sliderLimit: y,
      dateRange: T,
      ganttColumnWidth: I,
      currentMillisecond: A
    } = d;
    let B;
    n.value = !0;
    const M = v.getOffset(f / I * A).clone();
    h === "resize" && (n.value = !1);
    let V = 0;
    if (y && T) {
      const { rangeStart: b, rangeEnd: C } = o(v.date, T), _ = w.getOffset(
        f / I * A
      ), S = p(w.date), L = p(v.date);
      let k = p(M.date), N = p(_.date);
      if (h === "resize") {
        const z = S.subtract(1, "day").add(1, "second");
        k.isAfter(z) && (M.setDate(z.toDate()), k = p(M.date)), k.isAfter(C.startOf("day")) && (M.setDate(C.startOf("day").toDate()), k = p(M.date));
      } else {
        if (L.isBefore(b.add(1, "day"), "day") && S.isAfter(C.subtract(1, "day"), "day"))
          return f;
        N.isAfter(C) && (_.setDate(C.toDate()), N = p(_.date));
        const z = S.diff(L, "second"), F = N.diff(k, "second"), $ = N.subtract(z, "second");
        V = N.add(1, "second").valueOf() - $.valueOf(), F > 0 && F <= z && $.isAfter(b) && (M.setDate($.toDate()), k = p(M.date));
      }
      k.isBefore(b) && M.setDate(b.toDate());
    }
    return (M.compareTo(w.getOffset(-864e5)) === "r" || V > 0) && h !== "resize" && (B = M.getOffset(V > 0 ? V : 864e5)), m({
      startDate: M,
      endDate: B,
      unit: "hour"
    }), f;
  }, i = (d, m) => {
    const {
      x: f,
      type: h,
      startDate: v,
      endDate: w,
      sliderLimit: y,
      dateRange: T,
      ganttColumnWidth: I,
      currentMillisecond: A
    } = d;
    n.value = !0;
    let B = 0, M;
    const V = w.getOffset(f / I * A).clone();
    if (h === "resize" && (n.value = !1), y && T) {
      const { rangeStart: b, rangeEnd: C } = o(w.date, T), _ = v.getOffset(
        f / I * A
      ), S = p(v.date), L = p(w.date);
      let k = p(V.date);
      const N = p(_.date);
      if (h === "resize") {
        const z = S.add(1, "day").subtract(1, "second");
        k.isBefore(z) && (V.setDate(z), k = p(V.date)), k.isBefore(
          b.startOf("day").add(1, "day").subtract(1, "second")
        ) && (V.setDate(
          b.startOf("day").add(1, "day").subtract(1, "second").toDate()
        ), k = p(V.date));
      } else {
        if (S.isBefore(b.add(1, "day"), "day") && L.isAfter(C.subtract(1, "day"), "day") || N.isBefore(b))
          return f;
        const z = L.diff(S, "second"), F = k.diff(N, "second"), $ = N.add(z + 1, "second");
        B = $.valueOf() - N.valueOf(), F > 0 && F <= z && $.isBefore(C) && (V.setDate($), k = p(V.date));
      }
      k.isAfter(C) && V.setDate(C);
    }
    return V.compareTo(v.getOffset(864e5)) === "l" && h !== "resize" && (M = V.getOffset(B > 0 ? -B : -864e5)), m({
      startDate: M,
      endDate: V,
      unit: "hour"
    }), f;
  };
  function u(d) {
    const { startDate: m, ganttHeader: f, currentMillisecond: h, ganttColumnWidth: v } = d;
    return m.intervalTo(f.start) / h * v;
  }
  function c(d) {
    const { startDate: m, endDate: f, currentMillisecond: h, ganttColumnWidth: v } = d;
    return f.intervalTo(m) / h * v;
  }
  return {
    handleEmitMove: s,
    handleSetStart: a,
    handleSetEnd: i,
    handleSliderLeft: u,
    handleSliderWidth: c
  };
}
const nt = /* @__PURE__ */ H({
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
    var mt;
    const e = fe((...l) => new tt(...l)), t = E(), o = E(), s = E(!1), a = G("control-".concat(e.model.controlType.toLowerCase())), i = G("control-resource-gantt"), u = E(), c = E(!0), {
      handleEmitMove: d,
      handleSetStart: m,
      handleSetEnd: f,
      handleSliderLeft: h,
      handleSliderWidth: v
    } = Ke(), w = E();
    w.value = be();
    const y = R("IBizRawItem"), T = R("IBizIcon");
    let I = !1;
    const A = E({
      top: 0,
      bottom: 0
    }), B = E([]), M = () => {
      var l, g, x;
      if (Object.assign(A.value, {
        top: 0,
        bottom: 0
      }), o.value && ((l = o.value) != null && l.$el)) {
        const D = kt((g = o.value) == null ? void 0 : g.$el), P = Tt((x = o.value) == null ? void 0 : x.$el);
        Object.assign(A.value, {
          top: D,
          bottom: P
        });
      }
    }, V = (l) => {
      B.value = l, M();
    }, b = [], C = ["blue", "light-blue", "blue-cyan", "pink", "purple", "violet", "indigo", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "grey", "sky-blue"], _ = E(!1), S = () => {
      if (o.value) {
        const {
          $el: l
        } = o.value, g = l.querySelector(".xg-gantt-container"), x = l.querySelector(".xg-gantt-body"), D = g.offsetWidth, P = x.offsetWidth;
        return D === P;
      }
      return !1;
    }, L = new ResizeObserver(() => {
      o.value && o.value.$el.offsetWidth !== 0 && (_.value = S());
    });
    ot(o, (l) => {
      if (l && l.$el) {
        const g = l.$el.querySelector(".xg-gantt-body");
        L.observe(g);
      }
    });
    const k = (mt = ye()) == null ? void 0 : mt.appContext.app;
    rt(() => {
      (() => import("@ibiz-template-plugin/gantt"))().then((g) => {
        const x = g.default;
        k == null || k.use(x), s.value = !0;
      });
    });
    const N = (l) => {
      const g = document.documentElement;
      return getComputedStyle(g).getPropertyValue(l);
    }, {
      UIStore: z
    } = me(), F = E({}), $ = E({}), Mt = () => {
      var l, g;
      return {
        primaryColor: ((l = e.state.ganttStyle) == null ? void 0 : l.primaryColor) || N("--ibiz-color-bg-0"),
        textColor: ((g = e.state.ganttStyle) == null ? void 0 : g.textColor) || N("--ibiz-color-text-2"),
        bgColor: N("--ibiz-color-bg-1"),
        weekendColor: N("--ibiz-color-fill-2"),
        todayColor: N("--ibiz-color-primary-light-active"),
        borderColor: N("--ibiz-color-border")
      };
    }, At = () => {
      var g;
      const l = {};
      return (g = e.model.detreeNodes) == null || g.forEach((x, D) => {
        const P = D % C.length;
        l[x.id] = "rgba(".concat(N("--ibiz-".concat(C[P], "-0")), ", 1)");
      }), l;
    };
    ot(() => z.theme, () => {
      F.value = Mt(), $.value = At();
    }, {
      immediate: !0
    });
    const zt = () => {
      var g;
      let l = e.state.rootNodes;
      return e.model.rootVisible || (l = ((g = e.state.rootNodes[0]) == null ? void 0 : g._children) || []), l.map((x) => {
        const D = {};
        return Object.assign(D, x), D._children && (D._children = null), D;
      });
    }, Bt = j(() => e.state.isLoaded ? e.state.isLoading : !1), X = j(() => {
      var l, g;
      return e.state.onlyTopNodes ? zt() : e.model.rootVisible ? e.state.rootNodes : (g = (l = e.state.rootNodes[0]) == null ? void 0 : l._children) == null ? void 0 : g.filter((x) => !u.value || x.name.includes(u.value));
    }), ct = j(() => {
      const l = [];
      return e.state.columnStates.forEach((g) => {
        var D;
        const x = (D = e.columns[g.key]) == null ? void 0 : D.model;
        !g.hidden && x && l.push(x);
      }), l;
    }), Pt = j(() => ibiz.i18n.getLang().toLowerCase()), jt = (l, g) => {
      if (l)
        b.push(g);
      else {
        const x = b.findIndex((D) => D._id === g._id);
        x > -1 && b.splice(x, 1);
      }
      e.setSelection(b);
    }, dt = (l, g) => {
      if (I || c.value) {
        c.value = !1;
        return;
      }
      e.onTreeNodeClick(l, g), I = !0, setTimeout(() => {
        I = !1;
      }, 200);
    }, ut = (l) => {
      e.onDbTreeNodeClick(l);
    }, Gt = (l) => {
      e.onExpandChange(l, !0), l && !l._children && e.refreshNodeChildren(l);
    }, Wt = (l) => {
      e.onExpandChange(l, !1);
    };
    e.evt.on("onNewRow", (l) => {
      if (t.value) {
        const g = l.row.data;
        t.value.setExpand(g);
      }
    });
    const ht = () => {
      var l;
      (l = t.value) == null || l.fullscreenChange();
    };
    e._evt.on("onFullscreenChange", (l) => {
      ht();
    });
    const $t = (l) => {
      u.value = l;
    }, qt = (l) => {
      e.state.expandAll = l;
    }, Ft = (l) => {
      console.log("抛值内容", l);
    }, Ht = (l) => {
      var D;
      const g = (D = l[0]) == null ? void 0 : D.row, x = {
        begin: g._beginDataItemValue ? p(g._beginDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0,
        end: g._endDataItemValue ? p(g._endDataItemValue).format("YYYY-MM-DD HH:mm:ss") : void 0
      };
      c.value = !0, e._evt.emit("onSliderMove", g), e.modifyNodeTime(g, x);
    }, ft = (l, g, x, D) => {
      const P = [];
      return l.forEach((O) => {
        var U;
        if (O.itemType === "SEPERATOR") {
          P.push({
            divided: "self"
          });
          return;
        }
        const Y = D[O.id];
        if (Y && !Y.visible)
          return;
        const W = {};
        if (O.showCaption && O.caption && (W.label = O.caption), O.sysImage && O.showIcon && (W.icon = r(T, {
          icon: O.sysImage
        }, null)), O.itemType === "DEUIACTION") {
          W.disabled = Y.disabled, W.clickClose = !0;
          const {
            uiactionId: q
          } = O;
          q && (W.onClick = () => {
            e.doUIAction(q, g, x, O.appId);
          });
        } else if (O.itemType === "RAWITEM") {
          const {
            rawItem: q
          } = O;
          q && (W.label = r(y, {
            rawItem: O
          }, null));
        } else
          O.itemType === "ITEMS" && (U = O.detoolbarItems) != null && U.length && (W.children = ft(O.detoolbarItems, g, x, D));
        P.push(W);
      }), P;
    };
    let Q;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((g) => {
        Q = g.default, Q.default && !Q.showContextMenu && (Q = Q.default);
      });
    });
    const Yt = async (l, g) => {
      g.stopPropagation(), g.preventDefault();
      const x = e.getNodeModel(l._nodeId);
      if (!(x != null && x.decontextMenu))
        return;
      const D = e.contextMenus[x.decontextMenu.id];
      if (!D.model.detoolbarItems)
        return;
      await D.calcButtonState(l._deData || (l.srfkey ? l : void 0), x.appDataEntityId);
      const P = D.state.buttonsState, O = ft(D.model.detoolbarItems, l, g, P);
      O.length && Q.showContextMenu({
        x: g.x,
        y: g.y,
        customClass: a.b("context-menu"),
        items: O
      });
    }, Ut = () => {
      const {
        isLoaded: l
      } = e.state;
      return l && r(R("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    }, Kt = (l, g) => {
      const {
        caption: x,
        codeName: D,
        width: P,
        headerSysCss: O,
        align: Y
      } = l, W = e.columns[D];
      return r(R("x-gantt-column"), {
        label: x,
        prop: D,
        width: P && P > 30 ? P : 30,
        center: (Y == null ? void 0 : Y.toLowerCase()) === "center"
      }, {
        title: (U) => {
          const {
            label: q
          } = U;
          return D === "name" ? r(We, {
            key: D,
            model: l,
            controller: e,
            titleData: U,
            expandAll: e.state.expandAll,
            class: O == null ? void 0 : O.cssName,
            onExpandAllChange: qt,
            onHeadSearch: $t
          }, null) : r("div", {
            class: O == null ? void 0 : O.cssName
          }, [q]);
        },
        default: (U) => {
          const {
            row: q,
            column: Jt,
            level: Zt
          } = U, K = e.getRowState(q._id);
          if (K) {
            if (D === "name") {
              const te = wt(K, e.state.capacityConfig);
              let pt;
              q._parent && (pt = e.getRowState(q._parent._id));
              const ee = X.value && X.value[0] ? X.value[0]._id === K.data._id : !1;
              return M(), r(Ve, {
                controller: W,
                gantt: e,
                capacityConfig: te,
                dateRange: e.state.dateRange,
                groupConfig: e.state.groupConfig,
                row: K,
                parentRow: pt,
                column: Jt,
                level: Zt,
                isTopFirstIndex: ee,
                key: K.data._uuid + D,
                ganttPosition: A.value,
                virtualTableVal: B.value
              }, null);
            }
            const Xt = R(e.providers[D].component);
            return we(Xt, {
              controller: W,
              row: K,
              key: K.data._uuid + D
            });
          }
          return null;
        }
      });
    }, Qt = () => r(R("x-gantt-slider"), {
      "allow-link": !1,
      move: e.state.sliderDraggable,
      "resize-left": e.state.sliderDraggable,
      "resize-right": e.state.sliderDraggable,
      "move-by-unit": !0,
      "slider-limit": e.state.sliderLimit,
      "emit-move": d,
      "set-start": m,
      "set-end": f,
      "slider-left": h,
      "slider-width": v
    }, {
      content: ({
        row: l,
        level: g,
        left: x
      }) => {
        if (g !== 1) {
          const D = it(e.state.sliderShowContent, l._deData || {}).replace(/^"(.*?)"$/, "$1"), P = x < 0 ? "".concat(-x, "px") : "";
          return r("div", {
            class: [a.e("slider"), i.e("slider")],
            style: {
              background: $.value[l._nodeId]
            },
            onClick: (O) => dt(l, O),
            onDblclick: () => ut(l),
            onContextmenu: (O) => Yt(l, O)
          }, [D && r("div", {
            class: i.em("slider", "caption"),
            style: {
              marginLeft: P
            },
            title: D,
            innerHTML: D
          }, null)]);
        }
      }
    });
    return {
      c: e,
      ns: a,
      ns2: i,
      fullscreenChange: ht,
      ganttRef: t,
      ganttBoxRef: o,
      isInited: s,
      ganttId: w,
      data: X,
      locale: Pt,
      columns: ct,
      onCheck: jt,
      loading: Bt,
      ganttStyle: F,
      isGanttWidthEq: _,
      onNodeClick: dt,
      onNodeDbClick: ut,
      onNodeExpand: Gt,
      onNodeCollapse: Wt,
      renderContent: () => {
        const l = ct.value.map((x, D) => Kt(x)), g = Qt();
        return [...l, g];
      },
      renderGanttCell: (l) => {
        if (l.level === 1) {
          const g = e.getRowState(l.row._id) || {}, x = wt(g, e.state.capacityConfig);
          if (lt(l.column.date, x.weekdays)) {
            const D = {};
            return Object.assign(D, {
              ...l,
              row: g
            }), r(Re, {
              cellData: D,
              showText: e.state.showCapacity,
              capacityConfig: x,
              onCellClick: Ft
            }, null);
          }
        }
      },
      renderGanttTitle: (l) => {
        const {
          column: g
        } = l, x = ke(g.date), D = Te(g.date, "MM/DD");
        return r("div", {
          class: [a.b("column-title"), Oe(g.date) ? a.be("column-title", "today") : ""]
        }, [r("div", {
          class: a.be("column-title", "top")
        }, [x]), r("div", {
          class: a.be("column-title", "bottom")
        }, [D])]);
      },
      onSliderMove: Ht,
      renderNoData: Ut,
      onVirtualTableChange: V
    };
  },
  render() {
    var n;
    return this.isInited ? Ce(r(R("iBizControlBase"), {
      ref: "ganttBoxRef",
      controller: this.c,
      class: [this.ns.b(), this.ns2.b(), (n = this.data) != null && n.length ? "" : this.ns.m("empty"), this.ns.is("gantt-width-eq", this.isGanttWidthEq)]
    }, {
      default: () => [r(R("x-gantt"), {
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
        },
        borderColor: this.ganttStyle.borderColor,
        bodyStyle: {
          todayColor: this.ganttStyle.todayColor,
          weekendColor: this.ganttStyle.weekendColor,
          bgColor: this.ganttStyle.bgColor,
          selectColor: this.ganttStyle.weekendColor
        }
      }, {
        default: () => this.renderContent(),
        ganttCell: (e) => this.renderGanttCell(e),
        ganttTitle: (e) => this.renderGanttTitle(e),
        empty: () => this.renderNoData()
      })]
    }), [[ve("loading"), this.loading]]) : null;
  }
});
class Qe {
  constructor() {
    J(this, "component", "IBizResourceGanttControl");
  }
}
const Je = st(
  nt,
  function(n) {
    n.component(nt.name, nt), he(
      "TREE_RENDER_RESOURCE_GANTT",
      () => new Qe()
    );
  }
), ha = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(n) {
    n.use(Je), n.use(He), n.use(Ue);
  }
};
export {
  Je as IBizResourceGanttControl,
  ha as default
};
