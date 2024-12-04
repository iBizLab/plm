import './style.css';
var X = Object.defineProperty;
var Y = (e, t, s) => t in e ? X(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var O = (e, t, s) => (Y(e, typeof t != "symbol" ? t + "" : t, s), s);
import { Srfuf as k, GridRowState as Z, ControlVO as ee, GridController as te, ScriptFactory as L, registerControlProvider as se } from "@ibiz-template/runtime";
import { ref as y, watch as T, computed as N, nextTick as ae, defineComponent as ne, onMounted as oe, onBeforeUnmount as re, onUnmounted as ie, createVNode as h, resolveComponent as v, createTextVNode as P, renderSlot as le, isVNode as ce, mergeProps as ue, h as de } from "vue";
import { useControlController as me, useNamespace as pe, useUIStore as he } from "@ibiz-template/vue3-util";
import { RuntimeModelError as fe } from "@ibiz-template/core";
import { createUUID as B } from "qx-util";
function ge(e) {
  const t = y();
  let s = !1, n = !1;
  async function a(l, u, f) {
    if (l.srfuf !== k.CREATE)
      if (ibiz.config.grid.editShowMode === "row" && e.model.enableRowEdit) {
        const r = e.findRowState(l);
        r && r.showRowEdit !== !0 && await e.switchRowEdit(r, !0);
      } else
        e.onRowClick(l);
  }
  function d(l) {
    l.srfuf !== k.CREATE && e.onDbRowClick(l);
  }
  function p(l) {
    s || e.setSelection(l);
  }
  T(
    [
      () => t.value,
      () => e.state.isLoaded,
      () => e.state.selectedData
    ],
    ([l, u, f]) => {
      !u || !l || (e.state.singleSelect ? f[0] ? t.value.setCurrentRow(f[0], !0) : t.value.setCurrentRow() : (s = !0, t.value.clearSelection(), f.forEach((r) => t.value.toggleRowSelection(r, !0)), s = !1));
    }
  );
  function i(l) {
    if (n) {
      n = !1;
      return;
    }
    const { prop: u, order: f } = l, r = e.fieldColumns[u].model.appDEFieldId;
    let g;
    f === "ascending" ? g = "asc" : f === "descending" && (g = "desc"), "".concat(r, ",").concat(g) !== e.state.sortQuery && (e.setSort(r, g), e.load());
  }
  function c({ row: l }) {
    let u = "";
    e.state.selectedData.length > 0 && e.state.selectedData.forEach((r) => {
      r === l && (u = "current-row");
    });
    const f = e.findRowState(l);
    return f != null && f.showRowEdit && (u += " editing-row"), l.srfkey && (u += " id-".concat(l.srfkey)), e.enableRowEditOrder && (u += " enable-order"), u;
  }
  function m({
    _row: l,
    column: u,
    _rowIndex: f,
    _columnIndex: r
  }) {
    var C;
    const g = (C = e.model.degridColumns) == null ? void 0 : C.find((_) => _.codeName === u.property);
    return g && g.headerSysCss && g.headerSysCss.cssName ? g.headerSysCss.cssName : "";
  }
  return T(
    () => e.state.sortQuery,
    (l) => {
      if (l) {
        const u = e.state.sortQuery.split(",")[0], f = e.state.sortQuery.split(",")[1];
        if (u && f) {
          const r = f === "desc" ? "descending" : "ascending", g = () => {
            t.value ? ae(() => {
              n = !0, t.value.sort(u, r);
            }) : setTimeout(g, 500);
          };
          g();
        }
      }
    }
  ), {
    tableRef: t,
    onRowClick: a,
    onDbRowClick: d,
    onSelectionChange: p,
    onSortChange: i,
    handleRowClassName: c,
    handleHeaderCellClassName: m
  };
}
function we(e) {
  function t(a) {
    !a || a === e.state.curPage || (e.state.curPage = a, e.load());
  }
  function s(a) {
    !a || a === e.state.size || (e.state.size = a, e.state.curPage === 1 && e.load());
  }
  function n() {
    e.load();
  }
  return { onPageChange: t, onPageSizeChange: s, onPageRefresh: n };
}
function Ce(e, t) {
  const s = () => {
    t.data && (e.state.items = t.data, e.state.rows = t.data.map((i) => new Z(new ee(i), e)));
  }, n = N(() => {
    var c;
    const i = Object.values(e.fieldColumns).find(
      (m) => m.model.appDEFieldId === e.model.minorSortAppDEFieldId
    );
    return {
      prop: i == null ? void 0 : i.model.codeName,
      order: ((c = e.model.minorSortDir) == null ? void 0 : c.toLowerCase()) === "desc" ? "descending" : "ascending"
    };
  });
  e.evt.on("onCreated", async () => {
    t.isSimple && (s(), e.state.isLoaded = !0);
  }), T(
    () => t.data,
    () => {
      t.isSimple && s();
    },
    {
      deep: !0
    }
  );
  const a = N(() => {
    const { state: i } = e;
    if (e.model.enableGroup) {
      const c = [];
      return i.groups.forEach((m) => {
        if (!m.children.length)
          return;
        const l = [...m.children], u = l.shift();
        c.push({
          tempsrfkey: (u == null ? void 0 : u.tempsrfkey) || m.caption,
          srfkey: (u == null ? void 0 : u.srfkey) || m.caption,
          isGroupData: !0,
          caption: m.caption,
          first: u,
          children: l
        });
      }), c;
    }
    return i.rows.map((c) => c.data);
  }), d = N(() => {
    if (e.isMultistageHeader)
      return e.model.degridColumns || [];
    const i = [];
    return e.state.columnStates.forEach((c) => {
      var l, u;
      if (c.hidden)
        return;
      const m = ((l = e.fieldColumns[c.key]) == null ? void 0 : l.model) || ((u = e.uaColumns[c.key]) == null ? void 0 : u.model);
      m && i.push(m);
    }), i;
  });
  return { tableData: a, renderColumns: d, defaultSort: n, summaryMethod: ({
    columns: i
  }) => i.map((c, m) => m === 0 ? e.aggTitle : e.state.aggResult[c.property]) };
}
class be extends te {
  /**
   * 重写初始化state class类
   *
   * @protected
   * @memberof BaselineCompareController
   */
  initState() {
    super.initState(), this.state.baseline = "baseline", this.state.compareline = "comparison_baseline", this.state.compareGroup = [], this.state.compareList = [];
  }
  async onCreated() {
    await super.onCreated(), this.controlParams && (this.controlParams.baseline && (this.state.baseline = this.controlParams.baseline), this.controlParams.comparison_baseline && (this.state.compareline = this.controlParams.comparison_baseline)), await this.loadCompareSelectData();
  }
  /**
   * 转化下拉的映射数据
   *
   * @param {IData[]} items
   * @memberof BaselineCompareController
   */
  convertList(t) {
    if (this.controlParams.responsemap) {
      const s = [], n = {
        id: "id",
        name: "name"
      };
      try {
        const a = JSON.parse(this.controlParams.responsemap);
        Object.assign(n, a);
      } catch (a) {
        console.log("转化JSON配置错误");
      }
      t.forEach((a) => {
        s.push(
          Object.assign(a, {
            id: a[n.id],
            name: a[n.name]
          })
        );
      }), this.state.compareList = s;
    } else
      this.state.compareList = t;
  }
  /**
   * 加载对比下拉数据
   *
   * @memberof BaselineCompareController
   */
  async loadCompareSelectData() {
    const t = L.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.requesturl,
      { singleRowReturn: !0 }
    ), s = L.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.n_owner_id_eq,
      { singleRowReturn: !0 }
    ), n = L.execScriptFn(
      { context: this.context, params: this.params },
      this.controlParams.n_owner_type_eq,
      { singleRowReturn: !0 }
    ), a = {
      method: this.controlParams.requestmethod || "post",
      data: {
        n_owner_id_eq: s,
        n_owner_type_eq: n
      }
    };
    if (t && typeof t == "string") {
      const d = await ibiz.net.request(t, a);
      d && d.data && (Array.isArray(d.data) ? this.convertList(d.data) : this.convertList([d.data]));
    } else
      throw new fe(this.model, "请配置数据接口地址");
  }
  /**
   * 部件加载数据行为
   *
   * @author lxm
   * @date 2022-08-19 14:08:50
   */
  async load(t = {}) {
    if (this.state.isSimple)
      return [];
    const s = t.silent === !0;
    s || await this.startLoading();
    try {
      const n = t.isInitialLoad === !0, a = t.isLoadMore === !0;
      n ? this.state.curPage = 1 : a && (this.state.curPage += 1);
      const { context: d } = this.handlerAbilityParams(t), p = await this.getFetchParams(t == null ? void 0 : t.viewParam);
      p[this.state.compareline] || (p[this.state.compareline] = this.params[this.state.baseline]);
      const i = await this.service.fetch(d, p);
      typeof i.total == "number" && (this.state.total = i.total), typeof i.totalPages == "number" && (this.state.totalPages = i.totalPages), a ? this.state.items.push(...i.data) : this.state.items = i.data, await this.afterLoad(t, i.data), this.state.isLoaded = !0, await this._evt.emit("onLoadSuccess", {
        isInitialLoad: n
      });
    } catch (n) {
      throw await this._evt.emit("onLoadError", void 0), this.actionNotification("FETCHERROR", {
        error: n
      }), n;
    } finally {
      s || await this.endLoading();
    }
    return this.state.items.forEach((n, a) => {
      n.srfserialnum = a + 1;
    }), this.actionNotification("FETCHSUCCESS"), this.state.items;
  }
  /**
   * 数据加载完成后对数据进行分组处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<ControlVO[]>}
   * @memberof BaselineCompareController
   */
  async afterLoad(t, s) {
    return await super.afterLoad(t, s), this.computeCompareGroup(t, s), s;
  }
  /**
   * 计算比对分组数据,根据属性 principal_id 分为两组
   *
   * @memberof BaselineCompareController
   */
  computeCompareGroup(t, s) {
    var u, f;
    const n = [], a = [], d = ((u = t == null ? void 0 : t.viewParam) == null ? void 0 : u[this.state.baseline]) || this.params[this.state.baseline], p = ((f = t == null ? void 0 : t.viewParam) == null ? void 0 : f[this.state.compareline]) || this.params[this.state.baseline], i = [], c = [];
    s.forEach((r) => {
      d === p ? r.is_latest === "1" ? c.push(r) : i.push(r) : r.principal_id === d ? i.push(r) : c.push(r);
    }), i.forEach((r) => {
      const g = this.diffItms(r.target_id, i, c);
      if (g === "DEL")
        n.push(Object.assign(r, { actionType: g })), a.push(
          Object.assign({}, {
            actionType: g,
            tempsrfkey: B(),
            base_version: d,
            compare_version: p,
            base_target_version_id: r.target_version_id,
            compare_target_version_id: ""
          })
        );
      else {
        const C = c.findIndex((_) => _.target_id === r.target_id);
        this.compareField(r, c[C]) ? (n.push(
          Object.assign(r, {
            actionType: g
          })
        ), a.push(
          Object.assign(c[C], {
            actionType: g,
            base_version: d,
            compare_version: p,
            base_target_version_id: r.target_version_id,
            compare_target_version_id: c[C].target_version_id
          })
        )) : (n.push(
          Object.assign(r, {
            actionType: "UN".concat(g)
          })
        ), a.push(
          Object.assign(c[C], {
            actionType: "UN".concat(g),
            base_version: d,
            compare_version: p,
            base_target_version_id: r.target_version_id,
            compare_target_version_id: c[C].target_version_id
          })
        )), c.splice(C, 1);
      }
    }), c.forEach((r) => {
      n.push(
        Object.assign({}, {
          actionType: "ADD",
          tempsrfkey: B()
        })
      ), a.push(
        Object.assign(r, {
          actionType: "ADD",
          base_version: d,
          compare_version: p
        })
      );
    });
    const m = this.state.compareList.find((r) => r.id === d), l = this.state.compareList.find((r) => r.id === p);
    this.state.compareGroup = [
      {
        name: m == null ? void 0 : m.name,
        id: m == null ? void 0 : m.id,
        data: n
      },
      {
        name: l == null ? void 0 : l.name,
        id: l == null ? void 0 : l.id,
        data: a
      }
    ];
  }
  /**
   * 比较不同，有不同返回true,否则返回false
   *
   * @param {IData} item1
   * @param {IData} item2
   * @return {*}
   * @memberof BaselineCompareController
   */
  compareField(t, s) {
    return t.target_version_id !== s.target_version_id;
  }
  /**
   * 判断当前项在左右两边是否存在，因为遍历的是左边，所以肯定不会出现左边没有而右边存在的情况，不会返回 [ADD]
   *
   * @param {string} id
   * @param {IData[]} leftItems
   * @param {IData[]} rightItesm
   * @return {*}
   * @memberof BaselineCompareController
   */
  diffItms(t, s, n) {
    const a = s.filter((p) => p.target_id === t), d = n.filter((p) => p.target_id === t);
    if (a.length > 0 && d.length > 0)
      return "EDIT";
    if (a.length > 0)
      return "DEL";
  }
}
function ve(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ce(e);
}
function ye(e, t) {
  var n;
  const s = {};
  return (n = e.controlAttributes) == null || n.forEach((a) => {
    a.attrName && a.attrValue && (s[a.attrName] = L.execSingleLine(a.attrValue, {
      ...t
    }));
  }), s;
}
function _e(e, t, s, n) {
  var l;
  const {
    codeName: a,
    width: d
  } = t, p = e.columns[a], i = e.state.columnStates.find((u) => u.key === a), m = p.isAdaptiveColumn || !e.hasAdaptiveColumn && n === s.length - 1 ? "min-width" : "width";
  return h(v("el-table-column"), ue({
    label: t.caption,
    prop: a
  }, {
    [m]: d
  }, {
    fixed: i.fixed,
    sortable: t.enableSort ? "custom" : !1,
    align: ((l = t.align) == null ? void 0 : l.toLowerCase()) || "center"
  }), {
    default: ({
      row: u
    }) => {
      let f = u;
      u.isGroupData && (f = u.first);
      const r = e.findRowState(f);
      if (t.columnType === "UAGRIDCOLUMN" && !["EDIT", "UNEDIT"].includes(f.actionType))
        return null;
      if (r) {
        const g = v(e.providers[a].component);
        return de(g, {
          controller: p,
          row: r,
          key: f.tempsrfkey + a,
          attrs: ye(t, {
            ...e.getEventArgs(),
            data: r.data
          })
        });
      }
      return null;
    }
  });
}
function G(e, t, s, n) {
  var a, d;
  if (t.columnType === "GROUPGRIDCOLUMN") {
    const p = ((a = t.degridColumns) == null ? void 0 : a.filter((m) => !m.hideDefault && !m.hiddenDataItem)) || [], {
      width: i
    } = t, c = ((d = t.align) == null ? void 0 : d.toLowerCase()) || "center";
    return h(v("el-table-column"), {
      prop: t.codeName,
      label: t.caption,
      "min-width": i,
      align: c
    }, {
      default: () => p.map((m, l) => G(e, m, s, l))
    });
  }
  return _e(e, t, s, n);
}
const A = /* @__PURE__ */ ne({
  name: "BaselineCompare",
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
  setup(e, {
    slots: t
  }) {
    const s = me((...o) => new be(...o)), n = pe("baseline-compare"), {
      zIndex: a
    } = he();
    s.state.zIndex = a.increment();
    const d = y(), p = y(), i = y(), c = y(), m = y([]);
    s.params[s.state.compareline] && (i.value = s.params[s.state.compareline]), s.params[s.state.baseline] && (c.value = s.params[s.state.baseline]);
    const {
      onRowClick: l,
      onDbRowClick: u,
      onSelectionChange: f,
      onSortChange: r,
      handleRowClassName: g,
      handleHeaderCellClassName: C
    } = ge(s), {
      onPageChange: _,
      onPageRefresh: M,
      onPageSizeChange: j
    } = we(s), z = () => {
      const {
        isLoaded: o
      } = s.state;
      return o ? h(v("iBizNoData"), {
        text: s.model.emptyText,
        emptyTextLanguageRes: s.model.emptyTextLanguageRes
      }, null) : h("div", null, null);
    }, {
      tableData: U,
      renderColumns: x,
      defaultSort: F,
      summaryMethod: $
    } = Ce(s, e), q = (o, w, b) => b === 0 && o.columnType === "UAGRIDCOLUMN" ? null : t[o.id] ? le(t, o.id, {
      model: o,
      data: s.state.items
    }) : G(s, o, x.value, w), H = (o) => {
      const w = g({
        row: o.row
      });
      if (o.row && o.row.actionType) {
        const b = "compareline-type-".concat(o.row.actionType.toLowerCase());
        return "".concat(w, " ").concat(b);
      }
      return w;
    }, Q = (o) => {
      c.value && o && s.load({
        isInitialLoad: !0,
        viewParam: {
          [s.state.baseline]: c.value,
          [s.state.compareline]: o
        }
      });
    }, V = () => {
      let o;
      return h(v("el-select"), {
        modelValue: i.value,
        "onUpdate:modelValue": (w) => i.value = w,
        "fit-input-width": !0,
        onChange: Q
      }, ve(o = s.state.compareList.map((w) => h(v("el-option"), {
        value: w.id,
        label: w.name
      }, {
        default: () => [h("div", {
          class: n.e("dropdown-select")
        }, [h("span", null, [w.name]), w.id === c.value ? h("div", {
          class: n.em("dropdown-select", "last")
        }, [P("最新版本")]) : null])]
      }))) ? o : {
        default: () => [o]
      });
    }, W = () => h("div", {
      class: n.e("legen-icon")
    }, [h("div", {
      class: n.em("legen-icon", "add")
    }, [P("新增")]), h("div", {
      class: n.em("legen-icon", "change")
    }, [P("修改")]), h("div", {
      class: n.em("legen-icon", "del")
    }, [P("删除")])]), D = (o) => {
      var w;
      if (o) {
        const b = (w = o.target) == null ? void 0 : w.scrollTop;
        d.value.setScrollTop(b), p.value.setScrollTop(b);
      }
    }, I = (o) => {
      o && o.addEventListener("scroll", D);
    };
    oe(async () => {
      setTimeout(() => {
        var b, S, R, E;
        const o = (S = (b = d.value) == null ? void 0 : b.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")) == null ? void 0 : S[0], w = (E = (R = p.value) == null ? void 0 : R.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")) == null ? void 0 : E[0];
        I(o), I(w);
      }, 1200);
    }), T(() => s.state.compareList, (o) => {
      o && !i.value && (i.value = c.value), c.value && i.value && o.length > 0 && s.load({
        isInitialLoad: !0,
        viewParam: {
          [s.state.baseline]: c.value,
          [s.state.compareline]: i.value
        }
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const J = (o) => {
      if (o.column && o.column.type === "index")
        return "baseline-index";
      if (o.column && o.column.property === "uagridcolumn1")
        return "baseline-uaaction";
    }, K = (o) => {
      const w = C({
        _row: o.row,
        _columnIndex: o._columnIndex,
        _rowIndex: o.rowIndex,
        column: o.column
      });
      return o.column && o.column.type === "index" ? "".concat(w, " baseline-header baseline-index") : "".concat(w, " baseline-header");
    };
    return re(() => {
      var b, S, R, E;
      const o = (S = (b = d.value) == null ? void 0 : b.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")) == null ? void 0 : S[0], w = (E = (R = p.value) == null ? void 0 : R.$refs.bodyWrapper.getElementsByClassName("el-scrollbar__wrap")) == null ? void 0 : E[0];
      o && o.removeEventListener("scroll", D), w && w.removeEventListener("scroll", D);
    }), ie(() => {
      a.decrement();
    }), {
      c: s,
      ns: n,
      curTableRef: d,
      compareTableRef: p,
      tableData: U,
      renderColumns: x,
      CustomCellClass: J,
      renderTableColumn: q,
      onDbRowClick: u,
      onRowClick: l,
      onSelectionChange: f,
      onSortChange: r,
      onPageChange: _,
      onPageSizeChange: j,
      onPageRefresh: M,
      handleRowClassName: g,
      handleHeaderCellClassName: C,
      renderNoData: z,
      summaryMethod: $,
      customHeaderRowClass: K,
      renderSelectCompare: V,
      renderLegendIcon: W,
      customRowClass: H,
      compareGroup: m,
      defaultSort: F
    };
  },
  render() {
    if (!this.c.state.isCreated)
      return;
    const {
      state: e
    } = this.c, {
      hideHeader: t,
      enablePagingBar: s
    } = this.c.model;
    return h(v("iBizControlBase"), {
      class: [this.ns.is("show-header", !t), this.ns.is("enable-page", s), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.is("single-select", e.singleSelect), this.ns.is("empty", e.items.length === 0), this.ns.is("enable-customized", this.c.model.enableCustomized)],
      controller: this.c
    }, {
      default: () => [h("div", {
        class: [this.ns.b(), this.ns.is("show-page", s)]
      }, [h("div", {
        class: this.ns.e("select")
      }, [h("div", {
        class: this.ns.em("select", "title")
      }, [this.c.view.model.caption]), h("div", {
        class: this.ns.em("select", "right")
      }, [this.renderSelectCompare(), h("span", {
        class: this.ns.em("select", "separate")
      }, [P("|")]), this.renderLegendIcon()])]), h("div", {
        class: this.ns.e("grid")
      }, [e.compareGroup.map((n, a) => h("div", {
        class: [this.ns.em("grid", n.id), this.ns.e("version")]
      }, [h("div", {
        class: this.ns.em("version", "title")
      }, [n.name]), h("div", {
        class: this.ns.em("version", "compare-grid")
      }, [h(v("el-table"), {
        ref: a === 0 ? "curTableRef" : "compareTableRef",
        class: this.ns.e("table"),
        "default-sort": this.defaultSort,
        border: !0,
        "show-header": !t,
        "show-summary": this.c.enableAgg,
        "summary-method": this.summaryMethod,
        "highlight-current-row": e.singleSelect,
        "cell-class-name": this.CustomCellClass,
        "row-class-name": this.customRowClass,
        "header-cell-class-name": this.customHeaderRowClass,
        "row-key": "tempsrfkey",
        data: n.data,
        onRowClick: this.onRowClick,
        onRowDblclick: this.onDbRowClick,
        onSelectionChange: this.onSelectionChange,
        onSortChange: this.onSortChange,
        "tooltip-effect": "light"
      }, {
        empty: this.renderNoData,
        default: () => [a === 0 && h(v("el-table-column"), {
          "class-name": this.ns.e("row-index"),
          label: "#",
          type: "index",
          align: "center",
          width: "55"
        }, null), this.renderColumns.map((d, p) => this.renderTableColumn(d, p, a))]
      }), this.c.model.enableCustomized && !t && a === 1 && h("div", {
        class: this.ns.b("setting-box")
      }, [h(v("iBizGridSetting"), {
        columnStates: e.columnStates,
        controller: this.c
      }, null)])])]))])]), s && h(v("iBizPagination"), {
        total: e.total,
        curPage: e.curPage,
        size: e.size,
        totalPages: e.totalPages,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null)]
    });
  }
});
class Se {
  constructor() {
    O(this, "component", "BaselineCompare");
  }
}
const Ne = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.component(A.name, A), se(
      "GRID_RENDER_BASELINECOMPARE",
      () => new Se()
    );
  }
};
export {
  Ne as default
};
