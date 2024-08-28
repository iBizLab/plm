import './style.css';
var he = Object.defineProperty;
var fe = (t, s, e) => s in t ? he(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var I = (t, s, e) => (fe(t, typeof s != "symbol" ? s + "" : s, e), e);
import { useUIStore as me, useNamespace as M, useControlController as V, withInstall as pe } from "@ibiz-template/vue3-util";
import { Srfuf as z, GridRowState as q, ControlVO as ge, TreeGridController as we, calcDeCodeNameById as Ce, GridNotifyState as H, GridController as ye, ScriptFactory as be, registerControlProvider as ve } from "@ibiz-template/runtime";
import { ref as A, computed as P, watch as F, nextTick as Se, reactive as De, createVNode as w, resolveComponent as v, defineComponent as Ee, onMounted as Re, onUnmounted as xe, createTextVNode as k, mergeProps as W, h as Ie } from "vue";
import { toNumber as Pe, isArray as X } from "lodash-es";
import { isElementSame as Ge, RuntimeError as G, awaitTimeout as Ne, mergeDefaultInLeft as Te, RuntimeModelError as Le } from "@ibiz-template/core";
import { createUUID as ke } from "qx-util";
import { computePosition as Ae } from "@floating-ui/dom";
class Fe {
  constructor() {
    I(this, "component", "IBizNumberGridControl");
  }
}
function Oe(t) {
  const s = A(), e = A([]), o = P(() => t.state.treeData);
  async function i(a, u, f) {
    if (!(t.model.enableGroup && a.isGroupData) && a.srfuf !== z.CREATE)
      if (ibiz.config.grid.editShowMode === "row" && t.model.enableRowEdit) {
        const g = t.findRowState(a);
        g && g.showRowEdit !== !0 && await t.switchRowEdit(g, !0);
      } else
        t.onRowClick(a);
  }
  function n(a) {
    t.model.enableGroup && a.isGroupData || a.srfuf !== z.CREATE && t.onDbRowClick(a);
  }
  function r(a) {
    return !!e.value.find(
      (u) => a.tempsrfkey === u.tempsrfkey
    );
  }
  function l() {
    return t.model.enableGroup ? e.value.filter((a) => !a.isGroupData) : [...e.value];
  }
  F(
    [
      () => s.value,
      () => t.state.isLoaded,
      () => t.state.selectedData
    ],
    ([a, u, f]) => {
      !u || !a || (Ge(f, l()) || (e.value = f), t.state.singleSelect && (f[0] ? s.value.setCurrentRow(f[0], !0) : s.value.setCurrentRow()));
    }
  );
  function m(a) {
    const { prop: u, order: f } = a, g = t.fieldColumns[u].model.appDEFieldId;
    let C;
    f === "ascending" ? C = "asc" : f === "descending" && (C = "desc"), "".concat(g, ",").concat(C) !== t.state.sortQuery && (t.setSort(g, C), t.load());
  }
  function c({ row: a }) {
    let u = "";
    e.value.length > 0 && e.value.forEach((g) => {
      g.tempsrfkey === a.tempsrfkey && (u = "current-row");
    });
    const f = t.findRowState(a);
    return f != null && f.showRowEdit && (u += " editing-row"), a.srfkey && (u += " id-".concat(a.srfkey)), u;
  }
  function h({
    _row: a,
    column: u,
    _rowIndex: f,
    _columnIndex: g
  }) {
    var E;
    const C = (E = t.model.degridColumns) == null ? void 0 : E.find((N) => N.codeName === u.property);
    return C && C.headerSysCss && C.headerSysCss.cssName ? C.headerSysCss.cssName : "";
  }
  return F(
    () => t.state.sortQuery,
    (a) => {
      if (a) {
        const u = t.state.sortQuery.split(",")[0], f = t.state.sortQuery.split(",")[1];
        if (u && f) {
          const g = f === "desc" ? "descending" : "ascending", C = () => {
            s.value ? Se(() => {
              s.value.sort(u, g);
            }) : setTimeout(C, 500);
          };
          C();
        }
      }
    }
  ), t.evt.on("onRowCollapse", (a) => {
    setTimeout(() => {
      s.value && s.value.toggleRowExpansion(a.row.data, a.state);
    }, 0);
  }), {
    tableRef: s,
    getSelection: l,
    curSelectedData: e,
    onRowClick: i,
    onDbRowClick: n,
    isSelected: r,
    onSortChange: m,
    treeGirdData: o,
    handleRowClassName: c,
    handleHeaderCellClassName: h
  };
}
function $e(t, s) {
  const { controlParam: e } = s.modelData, o = () => {
    s.data && (t.state.items = s.data, t.state.rows = s.data.map((c) => new q(new ge(c), t)));
  }, i = P(() => {
    var h;
    const c = Object.values(t.fieldColumns).find(
      (a) => a.model.appDEFieldId === t.model.minorSortAppDEFieldId
    );
    return {
      prop: c == null ? void 0 : c.model.codeName,
      order: ((h = t.model.minorSortDir) == null ? void 0 : h.toLowerCase()) === "desc" ? "descending" : "ascending"
    };
  });
  t.evt.on("onCreated", async () => {
    s.isSimple && (o(), t.state.isLoaded = !0);
  }), F(
    () => s.data,
    () => {
      s.isSimple && o();
    },
    {
      deep: !0
    }
  );
  const n = P(() => {
    const { state: c } = t;
    let h = {
      appId: t.context.srfappid,
      cssClass: "cube-outline"
    };
    if (e && e.ctrlParams && e.ctrlParams.GROUPICON && (h.cssClass = e.ctrlParams.GROUPICON), t.model.enableGroup) {
      const a = [];
      return c.groups.forEach((u) => {
        if (!u.children.length)
          return;
        u.groupIcon && (h = u.groupIcon);
        const f = [...u.children], g = ke();
        a.push({
          tempsrfkey: g,
          srfkey: g,
          isGroupData: !0,
          caption: u.caption,
          _children: f,
          groupIcon: h
        });
      }), a;
    }
    return c.rows.map((a) => a.data);
  }), r = P(() => {
    if (t.isMultistageHeader)
      return t.model.degridColumns || [];
    const c = [];
    return t.state.columnStates.forEach((h) => {
      var u, f;
      if (h.hidden)
        return;
      const a = ((u = t.fieldColumns[h.key]) == null ? void 0 : u.model) || ((f = t.uaColumns[h.key]) == null ? void 0 : f.model);
      a && c.push(a);
    }), c;
  });
  return {
    tableData: n,
    renderColumns: r,
    defaultSort: i,
    summaryMethod: ({
      columns: c
    }) => c.map((h, a) => a === 0 ? t.aggTitle : t.state.aggResult[h.property]),
    headerDragend: (c, h, a) => {
      const { property: u } = a, f = t.columns[u];
      if (f.isAdaptiveColumn) {
        f.isAdaptiveColumn = !1, f.model.width = c;
        const g = r.value.findIndex((C) => t.columns[C.codeName].isAdaptiveColumn);
        t.hasAdaptiveColumn = g !== -1;
      }
    }
  };
}
function Me(t) {
  function s(i) {
    !i || i === t.state.curPage || (t.state.curPage = i, t.load());
  }
  function e(i) {
    !i || i === t.state.size || (t.state.size = i, t.state.curPage === 1 && t.load());
  }
  function o() {
    t.load();
  }
  return { onPageChange: s, onPageSizeChange: e, onPageRefresh: o };
}
function _e(t, s) {
  let e;
  const o = A(!1), i = A(), n = De({}), r = (a) => {
    if (!t.value)
      throw new G("找不到表格组件引用");
    const u = t.value.$el;
    let f = ".editing-row";
    a.data.srfkey && (f += ".id-".concat(a.data.srfkey));
    const g = u.querySelector(f);
    if (!g)
      throw new G("找不到对应的表格行dom元素");
    return g;
  }, l = async (a) => {
    const u = r(a);
    if (!e)
      throw new G("拿不到pop组件的实例");
    const f = e.$el, {
      x: g,
      y: C
    } = await Ae(u, f, {
      placement: "bottom"
    });
    Object.assign(n, {
      top: "".concat(C, "px"),
      left: "".concat(g, "px")
    }), i.value = a, o.value = !0;
  }, m = async () => {
    i.value && s.switchRowEdit(i.value, !1, !0);
  }, c = async () => {
    i.value && s.switchRowEdit(i.value, !1, !1);
  }, h = () => {
    const a = o.value && s.state.rows[s.state.rows.length - 1].showRowEdit;
    return [w("div", {
      class: "row-edit-popover__placeholder",
      style: {
        display: a ? "block" : "none"
      }
    }, null), w(v("iBizRowEditPopover"), {
      ref: (u) => {
        e = u;
      },
      style: n,
      show: o.value,
      onConfirm: m,
      onCancel: c
    }, null)];
  };
  return s.evt.on("onRowEditChange", (a) => {
    a.row.showRowEdit ? setTimeout(() => {
      l(a.row);
    }, 0) : (i.value = void 0, o.value = !1, Object.assign(n, {
      top: void 0,
      left: void 0
    }));
  }), {
    renderPopover: h
  };
}
class ze extends we {
  constructor() {
    super(...arguments);
    /**
     * 是否默认展开所有
     *
     * @type {boolean}
     * @memberof NumberTreeGridController
     */
    I(this, "defaultExpandAll", !1);
    /**
     * 指定展开列下标
     *
     * @type {boolean}
     * @memberof NumberGridController
     */
    I(this, "expandColumnIndex");
  }
  get overflowMode() {
    return "ellipsis";
  }
  initState() {
    super.initState(), this.state.treeData = [];
    const e = "SHOW_MODE_".concat(this.context.project, "_").concat(this.view.model.codeName), o = localStorage.getItem(e);
    o === "tree" ? this.state.showTreeGrid = !0 : o === "grid" && (this.state.showTreeGrid = !1);
  }
  /**
   * 设置排序
   */
  setSort(e, o) {
    if (!e && !o)
      return;
    let i;
    e && (i = this.fieldIdNameMap.get(e).toLowerCase()), i && o ? this.state.sortQuery = "".concat(i, ",").concat(o) : this.state.sortQuery = "", this.setSortCache();
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
    const { curPage: o, size: i, sortQuery: n, noSort: r } = this.state, l = {
      ...this.params
    };
    if (i && (l.page = o - 1, l.size = i), !r)
      if (n)
        l.sort = n;
      else {
        const { minorSortAppDEFieldId: m, minorSortDir: c } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (m && c) {
          const h = this.fieldIdNameMap.get(m);
          this.state.sortQuery = "".concat(h.toLowerCase(), ",").concat(c.toLowerCase());
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
    const { showMode: o } = e;
    o && (o === "tree" ? this.state.showTreeGrid = !0 : o === "grid" && (this.state.showTreeGrid = !1), this.state.treeData = [...this.state.items], await this.refresh());
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
   * 刷新
   *
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async refresh(e = !1) {
    await this.load({ isInitialLoad: e });
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
    const o = e.silent === !0;
    o || await this.startLoading();
    try {
      const i = e.isInitialLoad === !0, n = e.isLoadMore === !0;
      i ? this.state.curPage = 1 : n && (this.state.curPage += 1);
      const { context: r } = this.handlerAbilityParams(e), l = await this.getFetchParams(e == null ? void 0 : e.viewParam);
      l != null && l.hasOwnProperty("srfshowmode") || this.state.showTreeGrid && Object.assign(l, {
        srfshowmode: "tree"
      });
      const m = await this.service.fetch(r, l);
      typeof m.total == "number" && (this.state.total = m.total), typeof m.totalPages == "number" && (this.state.totalPages = m.totalPages), n ? this.state.items.push(...m.data) : this.state.items = m.data, await this.afterLoad(e, m.data), this.state.isLoaded = !0, await this.evt.emit("onLoadSuccess", {
        isInitialLoad: i
      });
    } catch (i) {
      throw await this.evt.emit("onLoadError", void 0), this.actionNotification("FETCHERROR", {
        error: i
      }), i;
    } finally {
      o || await this.endLoading();
    }
    return this.state.items.forEach((i, n) => {
      i.srfserialnum = n + 1;
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
  async afterLoad(e, o) {
    if (await super.afterLoad(e, o), e.isInitialLoad === !0)
      this.state.selectedData = [];
    else {
      const n = this.state.selectedData.filter(
        (r) => this.state.items.find((l) => r.tempsrfkey === l.tempsrfkey)
      );
      this.state.selectedData = n;
    }
    return this.setTreeData(), o;
  }
  /**
   * 设置树数据
   *
   * @memberof NumberTreeGridController
   */
  setTreeData() {
    if (this.state.showTreeGrid) {
      const e = this.state.items.map((n) => n[this.treeGridValueField]).filter((n) => n !== void 0), o = this.state.items.filter(
        (n) => !e.includes(n[this.treeGridParentField])
      ), i = (n) => {
        n.forEach((r) => {
          const l = this.state.items.filter(
            (m) => r[this.treeGridValueField] && m[this.treeGridParentField] === r[this.treeGridValueField]
          );
          l.length > 0 && i(l), r._children = l;
        });
      };
      i(o), this.state.treeData = o;
    }
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
    const o = e.srfuf === z.CREATE, i = this.findRowState(e);
    if (!i)
      throw new G("行数据不存在");
    if (!i.modified) {
      ibiz.log.debug("值没有发生改变");
      return;
    }
    if (i.processing) {
      await Ne(500, this.save.bind(this), [e]);
      return;
    }
    if (!await this.validate(i))
      throw new G("行数据校验不通过，保存取消");
    let r;
    const l = Ce(this.model.appDataEntityId), m = this.context.clone();
    m[l] = e.srfkey;
    try {
      r = o ? await this.service.create(m, e) : await this.service.update(m, e);
    } catch (h) {
      throw o && await this.remove({ data: [e], silent: !0 }), await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(o ? "CREATE" : "UPDATE", "ERROR"), {
        error: h,
        data: i.data
      }), h;
    }
    const c = this.findRowStateIndex(e);
    this.state.items.splice(c, 1, r.data), i.data = r.data, i.modified = !1, this.setTreeData(), this.gridStateNotify(i, H.SAVE), await this.evt.emit("onSaveSuccess", void 0);
  }
  afterRemove(e) {
    const o = this.state.items.findIndex(
      (r) => r.srfkey === e.srfkey
    );
    o !== -1 && this.state.items.splice(o, 1);
    const i = this.findRowStateIndex(e);
    this.state.rows[i], this.state.rows.splice(i, 1), this.state.groups.forEach((r) => {
      if (r.children.length) {
        const l = r.children.findIndex(
          (m) => m.srfkey === e.srfkey
        );
        l !== -1 && r.children.splice(l, 1);
      }
    }), this.setTreeData();
    const n = this.state.rows.find((r) => e[this.treeGridParentField] && r.data[this.treeGridValueField] === e[this.treeGridParentField]);
    n && n.data._children.length === 0 && this.evt.emit("onRowCollapse", { row: n, state: !1 });
  }
  /**
   * 新建行
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<void>}
   * @memberof NumberTreeGridController
   */
  async newRow(e = {}) {
    const { data: o } = e, { editShowMode: i } = ibiz.config.grid;
    let n = {};
    if (o && (n = Array.isArray(o) ? o[0] : o), i === "row" && this.state.rows.find((f) => f.showRowEdit))
      throw new G("请先完成当前行编辑中的行的操作");
    const r = { ...this.params }, l = this.calcDefaultValue(n || {}, !0);
    n.srfDefaultData && Object.assign(l, n.srfDefaultData), Object.assign(r, l);
    let m;
    try {
      m = await this.service.getDraft(this.context, r);
    } catch (u) {
      throw this.actionNotification("GETDRAFTERROR", {
        error: u
      }), u;
    }
    const c = m.data;
    Te(c, l), c[this.treeGridParentField] = n[this.treeGridValueField], n.srfUserData && (c.srfUserData = n.srfUserData), this.state.items.push(c);
    const h = new q(c, this);
    this.state.rows.push(h), this.gridStateNotify(h, H.DRAFT), i === "row" && this.switchRowEdit(h, !0), this.setTreeData();
    const a = this.state.rows.find((u) => h.data[this.treeGridParentField] && u.data[this.treeGridValueField] === h.data[this.treeGridParentField]);
    a && this.evt.emit("onRowCollapse", { row: a, state: !0 }), this.actionNotification("GETDRAFTSUCCESS", { data: c });
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
class Be extends ye {
  constructor() {
    super(...arguments);
    /**
     * 分组代码表数据项
     *
     * @type {readonly}
     * @memberof NumberGridController
     */
    I(this, "codeListItems");
    /**
     * 是否默认展开所有
     *
     * @type {boolean}
     * @memberof NumberGridController
     */
    I(this, "defaultExpandAll", !1);
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
  setSort(e, o) {
    if (!e && !o)
      return;
    let i;
    e && (i = this.fieldIdNameMap.get(e).toLowerCase()), i && o ? this.state.sortQuery = "".concat(i, ",").concat(o) : this.state.sortQuery = "", this.setSortCache();
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
    const { curPage: o, size: i, sortQuery: n, noSort: r } = this.state, l = {
      ...this.params
    };
    if (i && (l.page = o - 1, l.size = i), !r)
      if (n)
        l.sort = n;
      else {
        const { minorSortAppDEFieldId: m, minorSortDir: c } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (m && c) {
          const h = this.fieldIdNameMap.get(m);
          this.state.sortQuery = "".concat(h.toLowerCase(), ",").concat(c.toLowerCase());
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
    const { groupCodeListId: e, groupMode: o, enableGroup: i } = this.model;
    if (i && o === "CODELIST") {
      if (!e)
        throw new Le(
          this.model,
          "代码表分组模式需要配置代码表"
        );
      const n = ibiz.hub.getApp(this.context.srfappid);
      this.codeListItems = await n.codeList.get(
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
    const { enableGroup: o, groupMode: i, groupAppDEFieldId: n } = this.model;
    if (o && n) {
      const r = /* @__PURE__ */ new Map(), l = i === "CODELIST", m = n.toLowerCase();
      l && this.codeListItems.forEach((c) => {
        r.set(c.value, []);
      }), e.forEach((c) => {
        const h = c[m];
        !l && !r.has(h) && r.set(h, []), r.has(h) && r.get(h).push(c);
      }), this.state.groups = [], r.forEach((c, h) => {
        var u;
        const a = (u = this.codeListItems) == null ? void 0 : u.find(
          (f) => f.value === h
        );
        this.state.groups.push({
          caption: (a == null ? void 0 : a.text) || "".concat(h || "其他"),
          groupIcon: a == null ? void 0 : a.sysImage,
          key: h,
          children: c
        });
      });
    }
  }
  async afterLoad(e, o) {
    if (await super.afterLoad(e, o), e.isInitialLoad === !0)
      this.state.selectedData = [];
    else {
      const n = this.state.selectedData.filter(
        (r) => this.state.items.find((l) => r.tempsrfkey === l.tempsrfkey)
      );
      this.state.selectedData = n;
    }
    return o;
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
function Ue(t, s) {
  var o;
  const e = {};
  return (o = t.controlAttributes) == null || o.forEach((i) => {
    i.attrName && i.attrValue && (e[i.attrName] = be.execSingleLine(i.attrValue, {
      ...s
    }));
  }), e;
}
function Qe(t, s, e, o) {
  var f;
  const {
    codeName: i
  } = s, n = t.columns[i], r = t.state.columnStates.find((g) => g.key === i), l = e.find((g) => t.columns[g.codeName].isAdaptiveColumn), c = n.isAdaptiveColumn || !l && o === e.length - 1 ? "min-width" : "width";
  let h = "default";
  t != null && t.expandColumnIndex && o < Pe(t == null ? void 0 : t.expandColumnIndex) && (h = "");
  let {
    width: a
  } = s;
  const {
    hideHeader: u
  } = t.model;
  return t.model.enableCustomized && !u && a && o === e.length - 1 && (a += 20), w(v("el-table-column"), W({
    label: s.caption,
    prop: i
  }, {
    [c]: a
  }, {
    fixed: r.fixed,
    sortable: s.enableSort ? "custom" : !1,
    align: ((f = s.align) == null ? void 0 : f.toLowerCase()) || "center",
    type: h
  }), {
    default: ({
      row: g
    }) => {
      const C = g;
      if (g.isGroupData)
        return o !== 0 ? null : w("div", {
          class: "group-column"
        }, [w(v("iBizIcon"), {
          class: "group-icon",
          icon: g.groupIcon
        }, null), g.caption]);
      const E = t.findRowState(C);
      if (E) {
        const N = v(t.providers[i].component);
        return Ie(N, {
          controller: n,
          row: E,
          key: C.tempsrfkey + i,
          attrs: Ue(s, {
            ...t.getEventArgs(),
            data: E.data
          })
        });
      }
      return null;
    }
  });
}
function J(t, s, e, o) {
  var i, n;
  if (s.columnType === "GROUPGRIDCOLUMN") {
    const r = ((i = s.degridColumns) == null ? void 0 : i.filter((c) => !c.hideDefault)) || [], {
      width: l
    } = s, m = ((n = s.align) == null ? void 0 : n.toLowerCase()) || "center";
    return w(v("el-table-column"), {
      prop: s.codeName,
      label: s.caption,
      "min-width": l,
      align: m
    }, {
      default: () => r.map((c, h) => J(t, c, e, h))
    });
  }
  return Qe(t, s, e, o);
}
const _ = /* @__PURE__ */ Ee({
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
      t.modelData.controlType === "TREEGRID" ? s = V((...d) => new ze(...d)) : s = V((...d) => new Be(...d));
    })();
    const {
      zIndex: o
    } = me();
    s.state.zIndex = o.increment();
    const i = M("control-grid"), n = P(() => {
      if (t.modelData.controlType === "TREEGRID")
        return M("control-".concat(s.model.controlType.toLowerCase()));
    }), r = M("number-grid"), {
      tableRef: l,
      onRowClick: m,
      onDbRowClick: c,
      onSortChange: h,
      isSelected: a,
      curSelectedData: u,
      getSelection: f,
      handleRowClassName: g,
      treeGirdData: C,
      handleHeaderCellClassName: E
    } = Oe(s), {
      onPageChange: N,
      onPageRefresh: K,
      onPageSizeChange: Y
    } = Me(s), O = P(() => t.modelData.controlType === "TREEGRID" ? s.state.showTreeGrid : !1), B = (d = 0) => {
      setTimeout(() => {
        if (l.value) {
          const p = l.value.$el.getElementsByClassName("el-table__row");
          let y = 0;
          p.forEach((b) => {
            const D = b.firstChild.getElementsByClassName("ibiz-number-grid__number--caption")[0];
            b.style.display !== "none" && D && (D.innerText = "".concat((s.state.curPage - 1) * s.state.size + (y + 1)), y++);
          });
        }
      }, d);
    }, Z = (d, p) => {
      B();
    };
    Re(() => {
      const {
        controlType: d,
        enableGroup: p
      } = s.model;
      s.evt.on("onLoadSuccess", () => {
        (d === "TREEGRID" || d === "GRID" && p) && B();
      });
    }), F(() => O.value, (d, p) => {
      d !== p && (u.value = [], s.setSelection([]));
    });
    const ee = () => {
      const d = [...C.value], p = (y) => {
        const b = s.state.items.filter((D) => D[s.treeGridParentField] && y[s.treeGridValueField] === D[s.treeGridParentField]);
        b.length > 0 && (d.push(...b), b.forEach((D) => {
          p(D);
        }));
      };
      return C.value.forEach((y) => {
        p(y);
      }), d;
    }, U = () => {
      let d = [];
      return O.value ? d = ee() : (d = [...T.value], s.model.enableGroup && T.value.forEach((p) => {
        d.push(...p._children);
      })), d;
    }, $ = () => {
      const d = U();
      let p = !1;
      return d.length > 0 && (p = d.filter((b) => !a(b)).length === 0), p;
    }, te = () => {
      const d = U(), p = u.value.filter((y) => !d.find((b) => b.tempsrfkey === y.tempsrfkey));
      $() || p.push(...d), u.value = p, s.setSelection(f());
    }, se = (d) => {
      oe(u.value, d), s.setSelection(f());
    }, ie = (d) => {
      d.stopPropagation();
    }, oe = (d, p) => {
      const {
        controlType: y,
        enableGroup: b
      } = s.model, D = d.findIndex((S) => S.tempsrfkey === p.tempsrfkey);
      D !== -1 ? (d.splice(D, 1), y === "GRID" && b && (X(p._children) ? p._children.forEach((S) => {
        const R = d.indexOf(S);
        R !== -1 && d.splice(R, 1);
      }) : T.value.forEach((S) => {
        const R = S._children.find((x) => !d.includes(x)), L = d.findIndex((x) => x.tempsrfkey === S.tempsrfkey);
        R && L !== -1 && d.splice(L, 1);
      }))) : (d.push(p), y === "GRID" && b && (X(p._children) ? p._children.forEach((S) => {
        d.indexOf(S) === -1 && d.push(S);
      }) : T.value.forEach((S) => {
        const R = S._children.find((x) => !d.includes(x)), L = d.findIndex((x) => x.tempsrfkey === S.tempsrfkey);
        !R && L === -1 && d.unshift(S);
      })));
    }, ae = () => {
      var p;
      const {
        isLoaded: d
      } = s.state;
      if (d) {
        const y = (p = s.model.controls) == null ? void 0 : p.find((b) => b.name === "".concat(s.model.name, "_quicktoolbar"));
        return y ? w(v("iBizToolbarControl"), {
          modelData: y,
          context: s.context,
          params: s.params,
          class: i.b("quick-toolbar")
        }, null) : w(v("iBizNoData"), {
          text: s.model.emptyText,
          emptyTextLanguageRes: s.model.emptyTextLanguageRes
        }, null);
      }
      return null;
    }, {
      tableData: T,
      renderColumns: Q,
      defaultSort: ne,
      summaryMethod: re,
      headerDragend: le
    } = $e(s, t), {
      renderPopover: de
    } = _e(l, s), ce = () => {
      var p;
      const d = (p = s.model.controls) == null ? void 0 : p.find((y) => y.name === "".concat(s.model.name, "_batchtoolbar"));
      if (!(!d || s.state.singleSelect))
        return w("div", {
          class: [i.b("batch-toolbar"), r.b("batch-toolbar"), i.is("show", s.state.selectedData.length > 0)]
        }, [w("div", {
          class: i.b("batch-toolbar-content")
        }, [w("div", {
          class: i.b("batch-toolbar-text")
        }, [k("已选中"), s.state.selectedData.length, k("项")]), w("div", {
          class: i.b("batch-toolbar-separator")
        }, [k("|")]), w(v("iBizToolbarControl"), {
          modelData: d,
          context: s.context,
          params: s.params,
          class: i.b("batch-toolbar-items")
        }, null)])]);
    }, ue = () => {
      const d = Q.value.length ? "width" : "min-width";
      return w(v("el-table-column"), W({
        "class-name": r.e("first-column")
      }, {
        [d]: 80
      }, {
        align: "center",
        fixed: "left",
        type: "index"
      }), {
        header: () => w("div", {
          class: r.e("number")
        }, [s.state.singleSelect ? w("span", null, [k("序号")]) : w(v("el-checkbox"), {
          size: "large",
          indeterminate: s.state.selectedData.length > 0 && !$(),
          modelValue: $(),
          onChange: () => te()
        }, null)]),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        default: ({
          row: p,
          column: y,
          $index: b
        }) => {
          const D = (s.state.curPage - 1) * s.state.size + (b + 1);
          return w("div", {
            class: [r.e("number"), r.is("multiple", !s.state.singleSelect), r.is("single", s.state.singleSelect)],
            onClick: (j) => ie(j)
          }, [w("span", {
            class: r.em("number", "caption")
          }, [D]), !s.state.singleSelect && w(v("el-checkbox"), {
            size: "large",
            class: r.em("number", "checkbox"),
            modelValue: a(p),
            onChange: () => se(p)
          }, null)]);
        }
      });
    };
    return xe(() => {
      o.decrement();
    }), {
      c: s,
      ns: i,
      ns2: n,
      ns3: r,
      tableRef: l,
      tableData: T,
      treeGirdData: C,
      showTreeGrid: O,
      renderColumns: Q,
      onDbRowClick: c,
      onRowClick: m,
      onExpandChange: Z,
      onSortChange: h,
      onPageChange: N,
      onPageSizeChange: Y,
      onPageRefresh: K,
      handleRowClassName: g,
      handleHeaderCellClassName: E,
      renderNoData: ae,
      summaryMethod: re,
      headerDragend: le,
      renderPopover: de,
      defaultSort: ne,
      renderBatchToolBar: ce,
      renderFirstColumn: ue
    };
  },
  render() {
    var o;
    if (!this.c.state.isCreated)
      return;
    const {
      state: t
    } = this.c, {
      hideHeader: s,
      enablePagingBar: e
    } = this.c.model;
    return w(v("iBizControlBase"), {
      class: [this.ns.b(), (o = this.ns2) == null ? void 0 : o.b(), this.ns3.b(), this.ns.is("show-header", !s), this.ns.is("enable-page", e), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.is("single-select", t.singleSelect), this.ns.is("enable-customized", this.c.model.enableCustomized)],
      controller: this.c
    }, {
      default: () => [w(v("el-table"), {
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
        }
      }, {
        empty: this.renderNoData,
        default: () => [this.renderFirstColumn(), this.renderColumns.map((i, n) => J(this.c, i, this.renderColumns, n))],
        append: () => this.renderPopover()
      }), e && w(v("iBizPagination"), {
        total: t.total,
        curPage: t.curPage,
        size: t.size,
        totalPages: t.totalPages,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null), this.c.model.enableCustomized && !s && w("div", {
        class: [this.ns.b("setting-box"), this.ns3.b("setting-box")]
      }, [w(v("iBizGridSetting"), {
        columnStates: t.columnStates,
        controller: this.c
      }, null)]), this.renderBatchToolBar()]
    });
  }
}), je = pe(
  _,
  (t) => {
    t.component(_.name, _), ve(
      "GRID_RENDER_NUMBER_GRID",
      () => new Fe()
    );
  }
), Ze = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(je);
  }
};
export {
  je as IBizNumberGridControl,
  Ze as default
};
