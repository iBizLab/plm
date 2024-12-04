import './style.css';
var pe = Object.defineProperty;
var ge = (t, s, e) => s in t ? pe(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var x = (t, s, e) => (ge(t, typeof s != "symbol" ? s + "" : s, e), e);
import { useUIStore as we, useNamespace as $, useControlController as X, withInstall as Ce } from "@ibiz-template/vue3-util";
import { Srfuf as _, GridRowState as J, ControlVO as ye, TreeGridController as be, calcDeCodeNameById as ve, GridNotifyState as q, GridController as Se, ScriptFactory as Ee, registerControlProvider as De } from "@ibiz-template/runtime";
import { ref as k, computed as G, watch as A, nextTick as Re, reactive as Ne, createVNode as C, resolveComponent as S, defineComponent as Pe, onMounted as Ge, onUnmounted as xe, createTextVNode as T, mergeProps as K, h as Ie } from "vue";
import { toNumber as Le, isArray as W } from "lodash-es";
import { isElementSame as Te, RuntimeError as I, awaitTimeout as ke, mergeDefaultInLeft as Ae, RuntimeModelError as Me } from "@ibiz-template/core";
import { createUUID as Fe } from "qx-util";
import { computePosition as Oe } from "@floating-ui/dom";
class $e {
  constructor() {
    x(this, "component", "IBizNumberGridControl");
  }
}
function ze(t) {
  const s = k(), e = k([]), i = G(() => t.state.items.map((a) => (a._hasChildren = t.state.items.some(
    (h) => a[t.treeGridValueField] && a[t.treeGridValueField] === h[t.treeGridParentField]
  ), a._children = [], a))), o = G(() => {
    const a = t.state.items.map(
      (h) => h[t.treeGridValueField]
    );
    return i.value.filter(
      (h) => !h[t.treeGridParentField] || !a.includes(
        h[t.treeGridParentField]
      )
    );
  });
  async function r(a, h, g) {
    if (!(t.model.enableGroup && a.isGroupData) && a.srfuf !== _.CREATE)
      if (ibiz.config.grid.editShowMode === "row" && t.model.enableRowEdit) {
        const y = t.findRowState(a);
        y && y.showRowEdit !== !0 && await t.switchRowEdit(y, !0);
      } else
        t.onRowClick(a);
  }
  function d(a) {
    t.model.enableGroup && a.isGroupData || a.srfuf !== _.CREATE && t.onDbRowClick(a);
  }
  function l(a) {
    return !!e.value.find(
      (h) => a.tempsrfkey === h.tempsrfkey
    );
  }
  function u() {
    return t.model.enableGroup ? e.value.filter((a) => !a.isGroupData) : [...e.value];
  }
  A(
    [
      () => s.value,
      () => t.state.isLoaded,
      () => t.state.selectedData
    ],
    ([a, h, g]) => {
      !h || !a || (Te(g, u()) || (e.value = g), t.state.singleSelect && (g[0] ? s.value.setCurrentRow(g[0], !0) : s.value.setCurrentRow()));
    }
  );
  function c(a) {
    const { prop: h, order: g } = a, y = t.fieldColumns[h].model.appDEFieldId;
    let v;
    g === "ascending" ? v = "asc" : g === "descending" && (v = "desc"), "".concat(y, ",").concat(v) !== t.state.sortQuery && (t.setSort(y, v), t.load());
  }
  function f({ row: a }) {
    let h = "";
    e.value.length > 0 && e.value.forEach((y) => {
      y.tempsrfkey === a.tempsrfkey && (h = "current-row");
    });
    const g = t.findRowState(a);
    return g != null && g.showRowEdit && (h += " editing-row"), a.srfkey && (h += " id-".concat(a.srfkey)), h;
  }
  function p({
    _row: a,
    column: h,
    _rowIndex: g,
    _columnIndex: y
  }) {
    var R;
    const v = (R = t.model.degridColumns) == null ? void 0 : R.find((M) => M.codeName === h.property);
    return v && v.headerSysCss && v.headerSysCss.cssName ? v.headerSysCss.cssName : "";
  }
  return A(
    () => t.state.sortQuery,
    (a) => {
      if (a) {
        const h = t.state.sortQuery.split(",")[0], g = t.state.sortQuery.split(",")[1];
        if (h && g) {
          const y = g === "desc" ? "descending" : "ascending", v = () => {
            s.value ? Re(() => {
              s.value.sort(h, y);
            }) : setTimeout(v, 500);
          };
          v();
        }
      }
    }
  ), {
    tableRef: s,
    treeGirdData: o,
    treeNodeData: i,
    curSelectedData: e,
    getSelection: u,
    onRowClick: r,
    onDbRowClick: d,
    isSelected: l,
    onSortChange: c,
    handleRowClassName: f,
    handleHeaderCellClassName: p
  };
}
function _e(t, s) {
  const { controlParam: e } = s.modelData, i = () => {
    s.data && (t.state.items = s.data, t.state.rows = s.data.map((c) => new J(new ye(c), t)));
  }, o = G(() => {
    var f;
    const c = Object.values(t.fieldColumns).find(
      (p) => p.model.appDEFieldId === t.model.minorSortAppDEFieldId
    );
    return {
      prop: c == null ? void 0 : c.model.codeName,
      order: ((f = t.model.minorSortDir) == null ? void 0 : f.toLowerCase()) === "desc" ? "descending" : "ascending"
    };
  });
  t.evt.on("onCreated", async () => {
    s.isSimple && (i(), t.state.isLoaded = !0);
  }), A(
    () => s.data,
    () => {
      s.isSimple && i();
    },
    {
      deep: !0
    }
  );
  const r = G(() => {
    const { state: c } = t;
    let f = {
      appId: t.context.srfappid,
      cssClass: "cube-outline"
    };
    if (e && e.ctrlParams && e.ctrlParams.GROUPICON && (f.cssClass = e.ctrlParams.GROUPICON), t.model.enableGroup) {
      const p = [];
      return c.groups.forEach((a) => {
        if (!a.children.length)
          return;
        a.groupIcon && (f = a.groupIcon);
        const h = [...a.children], g = Fe();
        p.push({
          tempsrfkey: g,
          srfkey: g,
          isGroupData: !0,
          caption: a.caption,
          _children: h,
          groupIcon: f
        });
      }), p;
    }
    return c.rows.map((p) => p.data);
  }), d = G(() => {
    if (t.isMultistageHeader)
      return t.model.degridColumns || [];
    const c = [];
    return t.state.columnStates.forEach((f) => {
      var a, h;
      if (f.hidden)
        return;
      const p = ((a = t.fieldColumns[f.key]) == null ? void 0 : a.model) || ((h = t.uaColumns[f.key]) == null ? void 0 : h.model);
      p && c.push(p);
    }), c;
  });
  return {
    tableData: r,
    renderColumns: d,
    defaultSort: o,
    summaryMethod: ({
      columns: c
    }) => c.map((f, p) => p === 0 ? t.aggTitle : t.state.aggResult[f.property]),
    headerDragend: (c, f, p) => {
      const { property: a } = p, h = t.columns[a];
      if (h.isAdaptiveColumn) {
        h.isAdaptiveColumn = !1, h.model.width = c;
        const g = d.value.findIndex((y) => t.columns[y.codeName].isAdaptiveColumn);
        t.hasAdaptiveColumn = g !== -1;
      }
    }
  };
}
function Be(t) {
  function s(o) {
    !o || o === t.state.curPage || (t.state.curPage = o, t.load());
  }
  function e(o) {
    !o || o === t.state.size || (t.state.size = o, t.state.curPage === 1 && t.load());
  }
  function i() {
    t.load();
  }
  return { onPageChange: s, onPageSizeChange: e, onPageRefresh: i };
}
function Ue(t, s) {
  let e;
  const i = k(!1), o = k(), r = Ne({}), d = (p) => {
    if (!t.value)
      throw new I("找不到表格组件引用");
    const a = t.value.$el;
    let h = ".editing-row";
    p.data.srfkey && (h += ".id-".concat(p.data.srfkey));
    const g = a.querySelector(h);
    if (!g)
      throw new I("找不到对应的表格行dom元素");
    return g;
  }, l = async (p) => {
    const a = d(p);
    if (!e)
      throw new I("拿不到pop组件的实例");
    const h = e.$el, {
      x: g,
      y
    } = await Oe(a, h, {
      placement: "bottom"
    });
    Object.assign(r, {
      top: "".concat(y, "px"),
      left: "".concat(g, "px")
    }), o.value = p, i.value = !0;
  }, u = async () => {
    o.value && s.switchRowEdit(o.value, !1, !0);
  }, c = async () => {
    o.value && s.switchRowEdit(o.value, !1, !1);
  }, f = () => {
    const p = i.value && s.state.rows[s.state.rows.length - 1].showRowEdit;
    return [C("div", {
      class: "row-edit-popover__placeholder",
      style: {
        display: p ? "block" : "none"
      }
    }, null), C(S("iBizRowEditPopover"), {
      ref: (a) => {
        e = a;
      },
      style: r,
      show: i.value,
      onConfirm: u,
      onCancel: c
    }, null)];
  };
  return s.evt.on("onRowEditChange", (p) => {
    p.row.showRowEdit ? setTimeout(() => {
      l(p.row);
    }, 0) : (o.value = void 0, i.value = !1, Object.assign(r, {
      top: void 0,
      left: void 0
    }));
  }), {
    renderPopover: f
  };
}
class Qe extends be {
  constructor() {
    super(...arguments);
    /**
     * 是否默认展开所有
     *
     * @type {boolean}
     * @memberof NumberTreeGridController
     */
    x(this, "defaultExpandAll", !1);
    /**
     * 指定展开列下标
     *
     * @type {boolean}
     * @memberof NumberGridController
     */
    x(this, "expandColumnIndex");
  }
  get overflowMode() {
    return "ellipsis";
  }
  initState() {
    super.initState(), this.state.nodeLoadedMap = /* @__PURE__ */ new Map();
    const e = "SHOW_MODE_".concat(this.context.project, "_").concat(this.view.model.codeName), i = localStorage.getItem(e);
    i === "tree" ? this.state.showTreeGrid = !0 : i === "grid" && (this.state.showTreeGrid = !1);
  }
  /**
   * 设置排序
   */
  setSort(e, i) {
    if (!e && !i)
      return;
    let o;
    e && (o = this.fieldIdNameMap.get(e).toLowerCase()), o && i ? this.state.sortQuery = "".concat(o, ",").concat(i) : this.state.sortQuery = "", this.setSortCache();
  }
  /**
   * 设置排序缓存
   */
  setSortCache() {
    this.view && (this.state.sortQuery ? localStorage.setItem(
      "".concat(this.view.model.id, ".").concat(this.model.name, ".sort"),
      this.state.sortQuery
    ) : localStorage.removeItem(
      "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
    ));
  }
  /**
   * 获取请求过滤参数（整合了视图参数，各种过滤条件，排序，分页）
   */
  async getFetchParams(e) {
    const { curPage: i, size: o, sortQuery: r, noSort: d } = this.state, l = {
      ...this.params
    };
    if (o && (l.page = i - 1, l.size = o), !d)
      if (r)
        l.sort = r;
      else {
        const { minorSortAppDEFieldId: u, minorSortDir: c } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (u && c) {
          const f = this.fieldIdNameMap.get(u);
          this.state.sortQuery = "".concat(f.toLowerCase(), ",").concat(c.toLowerCase());
        }
        l.sort = this.state.sortQuery, this.setSortCache();
      }
    return await this.evt.emit("onBeforeLoad", void 0), Object.assign(l, {
      ...this.state.searchParams
    }), e && Object.assign(l, e), l;
  }
  /**
   * 切换显示模式
   *
   * @param {IData} param
   * @memberof NumberTreeGridController
   */
  async switchShowMode(e) {
    const { showMode: i } = e;
    i && (i === "tree" ? this.state.showTreeGrid = !0 : i === "grid" && (this.state.showTreeGrid = !1), this.state.nodeLoadedMap.clear(), await this.load());
  }
  /**
   * 初始化方法
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async onCreated() {
    await super.onCreated();
    const { ctrlParams: e = {} } = this.model.controlParam;
    e.DEFAULTEXPANDALL && (this.defaultExpandAll = Object.is(e.DEFAULTEXPANDALL, "TRUE") || Object.is(e.DEFAULTEXPANDALL, "true")), e.GRIDROWACTIVEMODE && (this.state.mdctrlActiveMode = JSON.parse(e.GRIDROWACTIVEMODE)), e.EXPANDCOLUMNINDEX && (this.expandColumnIndex = e.EXPANDCOLUMNINDEX);
  }
  /**
   * 获取变化的数据
   *
   * @param {IData[]} originalArray
   * @param {IData[]} updatedArray
   * @return {*}  {{ added: IData[]; removed: IData[] }}
   * @memberof NumberTreeGridController
   */
  findChanges(e, i) {
    const o = [], r = [], d = /* @__PURE__ */ new Map();
    e.forEach((u) => d.set(u.srfkey, u)), i.forEach((u) => {
      d.has(u.srfkey) || o.push(u);
    });
    const l = /* @__PURE__ */ new Map();
    return i.forEach((u) => l.set(u.srfkey, u)), e.forEach((u) => {
      l.has(u.srfkey) || r.push(u);
    }), { added: o, removed: r };
  }
  /**
   * 刷新
   *
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async refresh(e = !1) {
    const i = [...this.state.items];
    await this.load({ isInitialLoad: e });
    const { added: o, removed: r } = this.findChanges(i, this.state.items);
    [...o, ...r].forEach((d) => {
      const l = this.state.items.find(
        (u) => d[this.treeGridParentField] && u[this.treeGridValueField] === d[this.treeGridParentField]
      );
      l && this.state.nodeLoadedMap.has(l.tempsrfkey) && this.evt.emit("onReloadParentNode", {
        node: d
      });
    });
  }
  /**
   * 部件加载数据行为
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[]>}
   * @memberof NumberTreeGridController
   */
  async load(e = {}) {
    if (this.state.isSimple)
      return [];
    const i = e.silent === !0;
    i || await this.startLoading();
    try {
      const o = e.isInitialLoad === !0, r = e.isLoadMore === !0;
      o ? this.state.curPage = 1 : r && (this.state.curPage += 1);
      const { context: d } = this.handlerAbilityParams(e), l = await this.getFetchParams(e == null ? void 0 : e.viewParam);
      l != null && l.hasOwnProperty("srfshowmode") || this.state.showTreeGrid && Object.assign(l, {
        srfshowmode: "tree"
      });
      const u = await this.service.fetch(d, l);
      typeof u.total == "number" && (this.state.total = u.total), typeof u.totalPages == "number" && (this.state.totalPages = u.totalPages), r ? this.state.items.push(...u.data) : this.state.items = u.data, await this.afterLoad(e, u.data), this.state.isLoaded = !0, await this.evt.emit("onLoadSuccess", {
        isInitialLoad: o
      });
    } catch (o) {
      throw await this.evt.emit("onLoadError", void 0), this.actionNotification("FETCHERROR", {
        error: o
      }), o;
    } finally {
      i || await this.endLoading();
    }
    return this.state.items.forEach((o, r) => {
      o.srfserialnum = r + 1;
    }), this.actionNotification("FETCHSUCCESS"), this.state.items;
  }
  /**
   * 部件加载后处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<ControlVO[]>}
   * @memberof NumberTreeGridController
   */
  async afterLoad(e, i) {
    if (await super.afterLoad(e, i), e.isInitialLoad === !0)
      this.state.selectedData = [];
    else {
      const r = this.state.selectedData.filter(
        (d) => this.state.items.find((l) => d.tempsrfkey === l.tempsrfkey)
      );
      this.state.selectedData = r;
    }
    return i;
  }
  /**
   * 保存
   *
   * @param {ControlVO} data
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async save(e) {
    if (this.state.isSimple)
      return;
    const i = e.srfuf === _.CREATE, o = this.findRowState(e);
    if (!o)
      throw new I("行数据不存在");
    if (!o.modified) {
      ibiz.log.debug("值没有发生改变");
      return;
    }
    if (o.processing) {
      await ke(500, this.save.bind(this), [e]);
      return;
    }
    if (!await this.validate(o))
      throw new I("行数据校验不通过，保存取消");
    let d;
    const l = ve(this.model.appDataEntityId), u = this.context.clone();
    u[l] = e.srfkey;
    try {
      d = i ? await this.service.create(u, e) : await this.service.update(u, e);
    } catch (f) {
      throw i && await this.remove({ data: [e], silent: !0 }), await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(i ? "CREATE" : "UPDATE", "ERROR"), {
        error: f,
        data: o.data
      }), f;
    }
    const c = this.findRowStateIndex(e);
    this.state.items.splice(c, 1, d.data), o.data = d.data, o.modified = !1, i && this.evt.emit("onReloadParentNode", { node: d.data }), this.gridStateNotify(o, q.SAVE), await this.evt.emit("onSaveSuccess", void 0);
  }
  afterRemove(e) {
    const i = this.state.items.findIndex(
      (r) => r.srfkey === e.srfkey
    );
    i !== -1 && this.state.items.splice(i, 1);
    const o = this.findRowStateIndex(e);
    this.state.rows.splice(o, 1), this.state.groups.forEach((r) => {
      if (r.children.length) {
        const d = r.children.findIndex(
          (l) => l.srfkey === e.srfkey
        );
        d !== -1 && r.children.splice(d, 1);
      }
    }), this.evt.emit("onReloadParentNode", { node: e });
  }
  /**
   * 新建行
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async newRow(e = {}) {
    const { data: i } = e, { editShowMode: o } = ibiz.config.grid;
    let r = {};
    if (i && (r = Array.isArray(i) ? i[0] : i), o === "row" && this.state.rows.find((a) => a.showRowEdit))
      throw new I("请先完成当前行编辑中的行的操作");
    const d = { ...this.params }, l = this.calcDefaultValue(r || {}, !0);
    r.srfDefaultData && Object.assign(l, r.srfDefaultData), Object.assign(d, l);
    let u;
    try {
      u = await this.service.getDraft(this.context, d);
    } catch (p) {
      throw this.actionNotification("GETDRAFTERROR", {
        error: p
      }), p;
    }
    const c = u.data;
    Ae(c, l), c[this.treeGridParentField] = r[this.treeGridValueField], r.srfUserData && (c.srfUserData = r.srfUserData), this.state.items.push(c);
    const f = new J(c, this);
    this.state.rows.push(f), this.gridStateNotify(f, q.DRAFT), o === "row" && this.switchRowEdit(f, !0), this.evt.emit("onReloadParentNode", { node: c }), this.actionNotification("GETDRAFTSUCCESS", { data: c });
  }
  /**
   * 行单击事件
   *
   * @param {IData} data
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async onRowClick(e) {
    this.state.singleSelect && this.setSelection([e]), this.state.mdctrlActiveMode === 1 && await this.setActive(e);
  }
}
class je extends Se {
  constructor() {
    super(...arguments);
    /**
     * 分组代码表数据项
     *
     * @type {readonly}
     * @memberof NumberGridController
     */
    x(this, "codeListItems");
    /**
     * 是否默认展开所有
     *
     * @type {boolean}
     * @memberof NumberGridController
     */
    x(this, "defaultExpandAll", !1);
  }
  /**
   * 初始化方法
   *
   * @memberof NumberGridController
   */
  async onCreated() {
    await super.onCreated();
    const { ctrlParams: e = {} } = this.model.controlParam;
    e.DEFAULTEXPANDALL && (this.defaultExpandAll = Object.is(e.DEFAULTEXPANDALL, "TRUE") || Object.is(e.DEFAULTEXPANDALL, "true"));
  }
  /**
   * 设置排序
   */
  setSort(e, i) {
    if (!e && !i)
      return;
    let o;
    e && (o = this.fieldIdNameMap.get(e).toLowerCase()), o && i ? this.state.sortQuery = "".concat(o, ",").concat(i) : this.state.sortQuery = "", this.setSortCache();
  }
  /**
   * 设置排序缓存
   */
  setSortCache() {
    this.view && (this.state.sortQuery ? localStorage.setItem(
      "".concat(this.view.model.id, ".").concat(this.model.name, ".sort"),
      this.state.sortQuery
    ) : localStorage.removeItem(
      "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
    ));
  }
  /**
   * 获取请求过滤参数（整合了视图参数，各种过滤条件，排序，分页）
   */
  async getFetchParams(e) {
    const { curPage: i, size: o, sortQuery: r, noSort: d } = this.state, l = {
      ...this.params
    };
    if (o && (l.page = i - 1, l.size = o), !d)
      if (r)
        l.sort = r;
      else {
        const { minorSortAppDEFieldId: u, minorSortDir: c } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (u && c) {
          const f = this.fieldIdNameMap.get(u);
          this.state.sortQuery = "".concat(f.toLowerCase(), ",").concat(c.toLowerCase());
        }
        l.sort = this.state.sortQuery, this.setSortCache();
      }
    return await this._evt.emit("onBeforeLoad", void 0), Object.assign(l, {
      ...this.state.searchParams
    }), e && Object.assign(l, e), l;
  }
  /**
   * 初始化表格分组
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof NumberGridController
   */
  async initGroup() {
    const { groupCodeListId: e, groupMode: i, enableGroup: o } = this.model;
    if (o && i === "CODELIST") {
      if (!e)
        throw new Me(
          this.model,
          "代码表分组模式需要配置代码表"
        );
      const r = ibiz.hub.getApp(this.context.srfappid);
      this.codeListItems = await r.codeList.get(
        e,
        this.context,
        this.params
      );
    }
  }
  /**
   * 计算分组数据
   *
   * @protected
   * @param {IData[]} items
   * @memberof NumberGridController
   */
  calcGroupData(e) {
    const { enableGroup: i, groupMode: o, groupAppDEFieldId: r } = this.model;
    if (i && r) {
      const d = /* @__PURE__ */ new Map(), l = o === "CODELIST", u = r.toLowerCase();
      l && this.codeListItems.forEach((c) => {
        d.set(c.value, []);
      }), e.forEach((c) => {
        const f = c[u];
        !l && !d.has(f) && d.set(f, []), d.has(f) && d.get(f).push(c);
      }), this.state.groups = [], d.forEach((c, f) => {
        var a;
        const p = (a = this.codeListItems) == null ? void 0 : a.find(
          (h) => h.value === f
        );
        this.state.groups.push({
          caption: (p == null ? void 0 : p.text) || "".concat(f || "其他"),
          groupIcon: p == null ? void 0 : p.sysImage,
          key: f,
          children: c
        });
      });
    }
  }
  async afterLoad(e, i) {
    if (await super.afterLoad(e, i), e.isInitialLoad === !0)
      this.state.selectedData = [];
    else {
      const r = this.state.selectedData.filter(
        (d) => this.state.items.find((l) => d.tempsrfkey === l.tempsrfkey)
      );
      this.state.selectedData = r;
    }
    return i;
  }
  /**
   * 表格行单击
   *
   * @param {IData} data
   * @return {*}  {Promise<void>}
   * @memberof NumberGridController
   */
  async onRowClick(e) {
    this.state.singleSelect && this.setSelection([e]), this.state.mdctrlActiveMode === 1 && await this.setActive(e);
  }
}
function Ve(t, s) {
  var i;
  const e = {};
  return (i = t.controlAttributes) == null || i.forEach((o) => {
    o.attrName && o.attrValue && (e[o.attrName] = Ee.execSingleLine(o.attrValue, {
      ...s
    }));
  }), e;
}
function He(t, s, e, i) {
  var h;
  const {
    codeName: o
  } = s, r = t.columns[o], d = t.state.columnStates.find((g) => g.key === o), l = e.find((g) => t.columns[g.codeName].isAdaptiveColumn), c = r.isAdaptiveColumn || !l && i === e.length - 1 ? "min-width" : "width";
  let f = "default";
  t != null && t.expandColumnIndex && i < Le(t == null ? void 0 : t.expandColumnIndex) && (f = "");
  let {
    width: p
  } = s;
  const {
    hideHeader: a
  } = t.model;
  return t.model.enableCustomized && !a && p && i === e.length - 1 && (p += 20), C(S("el-table-column"), K({
    label: s.caption,
    prop: o
  }, {
    [c]: p
  }, {
    fixed: d.fixed,
    sortable: s.enableSort ? "custom" : !1,
    align: ((h = s.align) == null ? void 0 : h.toLowerCase()) || "center",
    type: f
  }), {
    default: ({
      row: g
    }) => {
      const y = g;
      if (g.isGroupData)
        return i !== 0 ? null : C("div", {
          class: "group-column"
        }, [C(S("iBizIcon"), {
          class: "group-icon",
          icon: g.groupIcon
        }, null), g.caption]);
      const v = t.findRowState(y);
      if (v) {
        const R = S(t.providers[o].component);
        return Ie(R, {
          controller: r,
          row: v,
          key: y.tempsrfkey + o,
          attrs: Ve(s, {
            ...t.getEventArgs(),
            data: v.data
          })
        });
      }
      return null;
    }
  });
}
function Y(t, s, e, i) {
  var o, r;
  if (s.columnType === "GROUPGRIDCOLUMN") {
    const d = ((o = s.degridColumns) == null ? void 0 : o.filter((c) => !c.hideDefault)) || [], {
      width: l
    } = s, u = ((r = s.align) == null ? void 0 : r.toLowerCase()) || "center";
    return C(S("el-table-column"), {
      prop: s.codeName,
      label: s.caption,
      "min-width": l,
      align: u
    }, {
      default: () => d.map((c, f) => Y(t, c, e, f))
    });
  }
  return He(t, s, e, i);
}
const z = /* @__PURE__ */ Pe({
  name: "IBizNumberGridControl",
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
    let s;
    (() => {
      t.modelData.controlType === "TREEGRID" ? s = X((...n) => new Qe(...n)) : s = X((...n) => new je(...n));
    })();
    const {
      zIndex: i
    } = we();
    s.state.zIndex = i.increment();
    const o = $("control-grid"), r = G(() => {
      if (t.modelData.controlType === "TREEGRID")
        return $("control-".concat(s.model.controlType.toLowerCase()));
    }), d = $("number-grid"), {
      tableData: l,
      renderColumns: u,
      defaultSort: c,
      summaryMethod: f,
      headerDragend: p
    } = _e(s, t), {
      tableRef: a,
      treeGirdData: h,
      treeNodeData: g,
      curSelectedData: y,
      onRowClick: v,
      onDbRowClick: R,
      onSortChange: M,
      isSelected: B,
      getSelection: U,
      handleRowClassName: Z,
      handleHeaderCellClassName: ee
    } = ze(s), {
      onPageChange: te,
      onPageRefresh: se,
      onPageSizeChange: oe
    } = Be(s), F = G(() => t.modelData.controlType === "TREEGRID" ? s.state.showTreeGrid : !1), Q = (n = 0) => {
      setTimeout(() => {
        if (a.value) {
          const m = a.value.$el.getElementsByClassName("el-table__row");
          let w = 0;
          m.forEach((b) => {
            const E = b.firstChild.getElementsByClassName("ibiz-number-grid__number--caption")[0];
            b.style.display !== "none" && E && (E.innerText = "".concat((s.state.curPage - 1) * s.state.size + (w + 1)), w++);
          });
        }
      }, n);
    }, ie = (n, m) => {
      Q();
    };
    Ge(() => {
      const {
        controlType: n,
        enableGroup: m
      } = s.model;
      s.evt.on("onLoadSuccess", () => {
        (n === "TREEGRID" || n === "GRID" && m) && Q();
      });
    }), A(() => F.value, (n, m) => {
      n !== m && (y.value = [], s.setSelection([]));
    });
    const ae = () => {
      const n = [...h.value], m = (w) => {
        const b = s.state.items.filter((E) => E[s.treeGridParentField] && w[s.treeGridValueField] === E[s.treeGridParentField]);
        b.length > 0 && (n.push(...b), b.forEach((E) => {
          m(E);
        }));
      };
      return h.value.forEach((w) => {
        m(w);
      }), n;
    }, j = () => {
      let n = [];
      return F.value ? n = ae() : (n = [...l.value], s.model.enableGroup && l.value.forEach((m) => {
        n.push(...m._children);
      })), n;
    }, O = () => {
      const n = j();
      let m = !1;
      return n.length > 0 && (m = n.filter((b) => !B(b)).length === 0), m;
    }, ne = () => {
      const n = j(), m = y.value.filter((w) => !n.find((b) => b.tempsrfkey === w.tempsrfkey));
      O() || m.push(...n), y.value = m, s.setSelection(U());
    }, re = (n, m) => {
      const {
        controlType: w,
        enableGroup: b
      } = s.model, E = n.findIndex((D) => D.tempsrfkey === m.tempsrfkey);
      E !== -1 ? (n.splice(E, 1), w === "GRID" && b && (W(m._children) ? m._children.forEach((D) => {
        const N = n.indexOf(D);
        N !== -1 && n.splice(N, 1);
      }) : l.value.forEach((D) => {
        const N = D._children.find((P) => !n.includes(P)), L = n.findIndex((P) => P.tempsrfkey === D.tempsrfkey);
        N && L !== -1 && n.splice(L, 1);
      }))) : (n.push(m), w === "GRID" && b && (W(m._children) ? m._children.forEach((D) => {
        n.indexOf(D) === -1 && n.push(D);
      }) : l.value.forEach((D) => {
        const N = D._children.find((P) => !n.includes(P)), L = n.findIndex((P) => P.tempsrfkey === D.tempsrfkey);
        !N && L === -1 && n.unshift(D);
      })));
    }, le = (n) => {
      re(y.value, n), s.setSelection(U());
    }, de = (n) => {
      n.stopPropagation();
    }, V = (n, m, w) => {
      s.state.nodeLoadedMap.has(n.tempsrfkey) || s.state.nodeLoadedMap.set(n.tempsrfkey, {
        tree: n,
        treeNode: m,
        resolve: w
      });
      const b = g.value.filter((E) => n[s.treeGridValueField] === E[s.treeGridParentField]);
      n._children = b, w(b);
    }, ce = (n) => {
      if (s.state.nodeLoadedMap.has(n.tempsrfkey)) {
        const m = s.state.nodeLoadedMap.get(n.tempsrfkey);
        V(m.tree, m.treeNode, m.resolve);
      } else
        setTimeout(() => {
          a.value.store.loadOrToggle(n);
        }, 0);
    };
    s.evt.on("onReloadParentNode", (n) => {
      const m = g.value.find((w) => n.node[s.treeGridParentField] && w[s.treeGridValueField] === n.node[s.treeGridParentField]);
      if (m)
        if (m._hasChildren)
          ce(m);
        else {
          a.value.toggleRowExpansion(m, !1);
          const w = a.value.store.states.lazyTreeNodeMap.value;
          delete w[m.tempsrfkey];
        }
    });
    const ue = () => {
      var m;
      const {
        isLoaded: n
      } = s.state;
      if (n) {
        const w = (m = s.model.controls) == null ? void 0 : m.find((b) => b.name === "".concat(s.model.name, "_quicktoolbar"));
        return w ? C(S("iBizToolbarControl"), {
          modelData: w,
          context: s.context,
          params: s.params,
          class: o.b("quick-toolbar")
        }, null) : C(S("iBizNoData"), {
          text: s.model.emptyText,
          emptyTextLanguageRes: s.model.emptyTextLanguageRes
        }, null);
      }
      return null;
    }, {
      renderPopover: he
    } = Ue(a, s), fe = () => {
      var m;
      const n = (m = s.model.controls) == null ? void 0 : m.find((w) => w.name === "".concat(s.model.name, "_batchtoolbar"));
      if (!(!n || s.state.singleSelect))
        return C("div", {
          class: [o.b("batch-toolbar"), d.b("batch-toolbar"), o.is("show", s.state.selectedData.length > 0)]
        }, [C("div", {
          class: o.b("batch-toolbar-content")
        }, [C("div", {
          class: o.b("batch-toolbar-text")
        }, [T("已选中"), s.state.selectedData.length, T("项")]), C("div", {
          class: o.b("batch-toolbar-separator")
        }, [T("|")]), C(S("iBizToolbarControl"), {
          modelData: n,
          context: s.context,
          params: s.params,
          class: o.b("batch-toolbar-items")
        }, null)])]);
    }, me = () => {
      const n = u.value.length ? "width" : "min-width";
      return C(S("el-table-column"), K({
        "class-name": d.e("first-column")
      }, {
        [n]: 80
      }, {
        align: "center",
        fixed: "left",
        type: "index"
      }), {
        header: () => C("div", {
          class: d.e("number")
        }, [s.state.singleSelect ? C("span", null, [T("序号")]) : C(S("el-checkbox"), {
          size: "large",
          indeterminate: s.state.selectedData.length > 0 && !O(),
          modelValue: O(),
          onChange: () => ne()
        }, null)]),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        default: ({
          row: m,
          column: w,
          $index: b
        }) => {
          const E = (s.state.curPage - 1) * s.state.size + (b + 1);
          return C("div", {
            class: [d.e("number"), d.is("multiple", !s.state.singleSelect), d.is("single", s.state.singleSelect)],
            onClick: (H) => de(H)
          }, [C("span", {
            class: d.em("number", "caption")
          }, [E]), !s.state.singleSelect && C(S("el-checkbox"), {
            size: "large",
            class: d.em("number", "checkbox"),
            modelValue: B(m),
            onChange: () => le(m)
          }, null)]);
        }
      });
    };
    return xe(() => {
      i.decrement();
    }), {
      c: s,
      ns: o,
      ns2: r,
      ns3: d,
      tableRef: a,
      tableData: l,
      treeGirdData: h,
      showTreeGrid: F,
      renderColumns: u,
      defaultSort: c,
      loadData: V,
      onDbRowClick: R,
      onRowClick: v,
      onExpandChange: ie,
      onSortChange: M,
      onPageChange: te,
      onPageSizeChange: oe,
      onPageRefresh: se,
      handleRowClassName: Z,
      handleHeaderCellClassName: ee,
      renderNoData: ue,
      summaryMethod: f,
      headerDragend: p,
      renderPopover: he,
      renderBatchToolBar: fe,
      renderFirstColumn: me
    };
  },
  render() {
    var i;
    if (!this.c.state.isCreated)
      return;
    const {
      state: t
    } = this.c, {
      hideHeader: s,
      enablePagingBar: e
    } = this.c.model;
    return C(S("iBizControlBase"), {
      class: [this.ns.b(), (i = this.ns2) == null ? void 0 : i.b(), this.ns3.b(), this.ns.is("show-header", !s), this.ns.is("enable-page", e), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.is("single-select", t.singleSelect), this.ns.is("enable-customized", this.c.model.enableCustomized)],
      controller: this.c
    }, {
      default: () => [C(S("el-table"), {
        border: !0,
        ref: "tableRef",
        "row-key": "tempsrfkey",
        class: this.ns.e("table"),
        "default-sort": this.defaultSort,
        "show-header": !s,
        "show-summary": this.c.enableAgg,
        "summary-method": this.summaryMethod,
        "highlight-current-row": t.singleSelect,
        "row-class-name": this.handleRowClassName,
        "header-cell-class-name": this.handleHeaderCellClassName,
        data: this.showTreeGrid ? this.treeGirdData : this.tableData,
        onRowClick: this.onRowClick,
        onRowDblclick: this.onDbRowClick,
        onSortChange: this.onSortChange,
        onExpandChange: this.onExpandChange,
        onHeaderDragend: this.headerDragend,
        "tooltip-effect": "light",
        "default-expand-all": this.c.defaultExpandAll,
        "tree-props": {
          children: "_children",
          hasChildren: "_hasChildren"
        },
        load: this.loadData,
        lazy: this.showTreeGrid
      }, {
        empty: this.renderNoData,
        default: () => [this.renderFirstColumn(), this.renderColumns.map((o, r) => Y(this.c, o, this.renderColumns, r))],
        append: () => this.renderPopover()
      }), e && C(S("iBizPagination"), {
        total: t.total,
        curPage: t.curPage,
        size: t.size,
        totalPages: t.totalPages,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null), this.c.model.enableCustomized && !s && C("div", {
        class: [this.ns.b("setting-box"), this.ns3.b("setting-box")]
      }, [C(S("iBizGridSetting"), {
        columnStates: t.columnStates,
        controller: this.c
      }, null)]), this.renderBatchToolBar()]
    });
  }
}), Xe = Ce(
  z,
  (t) => {
    t.component(z.name, z), De(
      "GRID_RENDER_NUMBER_GRID",
      () => new $e()
    );
  }
), st = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(Xe);
  }
};
export {
  Xe as IBizNumberGridControl,
  st as default
};
