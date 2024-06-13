import './style.css';
var ue = Object.defineProperty;
var he = (s, t, e) => t in s ? ue(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var I = (s, t, e) => (he(s, typeof t != "symbol" ? t + "" : t, e), e);
import { useUIStore as fe, useNamespace as M, useControlController as V, withInstall as me } from "@ibiz-template/vue3-util";
import { Srfuf as z, GridRowState as H, ControlVO as pe, TreeGridController as we, calcDeCodeNameById as ge, GridNotifyState as X, GridController as Ce, ScriptFactory as ye, registerControlProvider as be } from "@ibiz-template/runtime";
import { ref as A, computed as x, watch as F, nextTick as Se, reactive as ve, createVNode as g, resolveComponent as S, defineComponent as Ee, onMounted as De, onUnmounted as Re, createTextVNode as k, mergeProps as W, h as Pe } from "vue";
import { toNumber as Ie, isArray as q } from "lodash-es";
import { isElementSame as xe, RuntimeError as G, awaitTimeout as Ge, mergeDefaultInLeft as Ne, RuntimeModelError as Te } from "@ibiz-template/core";
import { createUUID as Le } from "qx-util";
import { computePosition as ke } from "@floating-ui/dom";
class Ae {
  constructor() {
    I(this, "component", "IBizNumberGridControl");
  }
}
function Fe(s) {
  const t = A(), e = A([]), o = x(() => s.state.treeData);
  async function i(a, f, m) {
    if (!(s.model.enableGroup && a.isGroupData) && a.srfuf !== z.CREATE)
      if (ibiz.config.grid.editShowMode === "row" && s.model.enableRowEdit) {
        const w = s.findRowState(a);
        w && w.showRowEdit !== !0 && await s.switchRowEdit(w, !0);
      } else
        s.onRowClick(a);
  }
  function n(a) {
    s.model.enableGroup && a.isGroupData || a.srfuf !== z.CREATE && s.onDbRowClick(a);
  }
  function l(a) {
    return !!e.value.find(
      (f) => a.tempsrfkey === f.tempsrfkey
    );
  }
  function r() {
    return s.model.enableGroup ? e.value.filter((a) => !a.isGroupData) : e.value;
  }
  F(
    [
      () => t.value,
      () => s.state.isLoaded,
      () => s.state.selectedData
    ],
    ([a, f, m]) => {
      !f || !a || (xe(m, r()) || (e.value = m), s.state.singleSelect && (m[0] ? t.value.setCurrentRow(m[0], !0) : t.value.setCurrentRow()));
    }
  );
  function c(a) {
    const { prop: f, order: m } = a, w = s.fieldColumns[f].model.appDEFieldId;
    let C;
    m === "ascending" ? C = "asc" : m === "descending" && (C = "desc"), "".concat(w, ",").concat(C) !== s.state.sortQuery && (s.setSort(w, C), s.load());
  }
  function u({ row: a }) {
    let f = "";
    e.value.length > 0 && e.value.forEach((w) => {
      w.tempsrfkey === a.tempsrfkey && (f = "current-row");
    });
    const m = s.findRowState(a);
    return m != null && m.showRowEdit && (f += " editing-row"), a.srfkey && (f += " id-".concat(a.srfkey)), f;
  }
  function h({
    _row: a,
    column: f,
    _rowIndex: m,
    _columnIndex: w
  }) {
    var D;
    const C = (D = s.model.degridColumns) == null ? void 0 : D.find((N) => N.codeName === f.property);
    return C && C.headerSysCss && C.headerSysCss.cssName ? C.headerSysCss.cssName : "";
  }
  return F(
    () => s.state.sortQuery,
    (a) => {
      if (a) {
        const f = s.state.sortQuery.split(",")[0], m = s.state.sortQuery.split(",")[1];
        if (f && m) {
          const w = m === "desc" ? "descending" : "ascending", C = () => {
            t.value ? Se(() => {
              t.value.sort(f, w);
            }) : setTimeout(C, 500);
          };
          C();
        }
      }
    }
  ), s.evt.on("onRowCollapse", (a) => {
    setTimeout(() => {
      t.value && t.value.toggleRowExpansion(a.row.data, a.state);
    }, 0);
  }), {
    tableRef: t,
    getSelection: r,
    curSelectedData: e,
    onRowClick: i,
    onDbRowClick: n,
    isSelected: l,
    onSortChange: c,
    treeGirdData: o,
    handleRowClassName: u,
    handleHeaderCellClassName: h
  };
}
function Oe(s, t) {
  const { controlParam: e } = t.modelData, o = () => {
    t.data && (s.state.items = t.data, s.state.rows = t.data.map((c) => new H(new pe(c), s)));
  }, i = x(() => {
    var u;
    const c = Object.values(s.fieldColumns).find(
      (h) => h.model.appDEFieldId === s.model.minorSortAppDEFieldId
    );
    return {
      prop: c == null ? void 0 : c.model.codeName,
      order: ((u = s.model.minorSortDir) == null ? void 0 : u.toLowerCase()) === "desc" ? "descending" : "ascending"
    };
  });
  s.evt.on("onCreated", async () => {
    t.isSimple && (o(), s.state.isLoaded = !0);
  }), F(
    () => t.data,
    () => {
      t.isSimple && o();
    },
    {
      deep: !0
    }
  );
  const n = x(() => {
    const { state: c } = s;
    let u = {
      appId: s.context.srfappid,
      cssClass: "cube-outline"
    };
    if (e && e.ctrlParams && e.ctrlParams.GROUPICON && (u.cssClass = e.ctrlParams.GROUPICON), s.model.enableGroup) {
      const h = [];
      return c.groups.forEach((a) => {
        if (!a.children.length)
          return;
        a.groupIcon && (u = a.groupIcon);
        const f = [...a.children], m = Le();
        h.push({
          tempsrfkey: m,
          srfkey: m,
          isGroupData: !0,
          caption: a.caption,
          _children: f,
          groupIcon: u
        });
      }), h;
    }
    return c.rows.map((h) => h.data);
  }), l = x(() => {
    if (s.isMultistageHeader)
      return s.model.degridColumns || [];
    const c = [];
    return s.state.columnStates.forEach((u) => {
      var a, f;
      if (u.hidden)
        return;
      const h = ((a = s.fieldColumns[u.key]) == null ? void 0 : a.model) || ((f = s.uaColumns[u.key]) == null ? void 0 : f.model);
      h && c.push(h);
    }), c;
  });
  return { tableData: n, renderColumns: l, defaultSort: i, summaryMethod: ({
    columns: c
  }) => c.map((u, h) => h === 0 ? s.aggTitle : s.state.aggResult[u.property]) };
}
function $e(s) {
  function t(i) {
    !i || i === s.state.curPage || (s.state.curPage = i, s.load());
  }
  function e(i) {
    !i || i === s.state.size || (s.state.size = i, s.state.curPage === 1 && s.load());
  }
  function o() {
    s.load();
  }
  return { onPageChange: t, onPageSizeChange: e, onPageRefresh: o };
}
function Me(s, t) {
  let e;
  const o = A(!1), i = A(), n = ve({}), l = (a) => {
    if (!s.value)
      throw new G("找不到表格组件引用");
    const f = s.value.$el;
    let m = ".editing-row";
    a.data.srfkey && (m += ".id-".concat(a.data.srfkey));
    const w = f.querySelector(m);
    if (!w)
      throw new G("找不到对应的表格行dom元素");
    return w;
  }, r = async (a) => {
    const f = l(a);
    if (!e)
      throw new G("拿不到pop组件的实例");
    const m = e.$el, {
      x: w,
      y: C
    } = await ke(f, m, {
      placement: "bottom"
    });
    Object.assign(n, {
      top: "".concat(C, "px"),
      left: "".concat(w, "px")
    }), i.value = a, o.value = !0;
  }, c = async () => {
    i.value && t.switchRowEdit(i.value, !1, !0);
  }, u = async () => {
    i.value && t.switchRowEdit(i.value, !1, !1);
  }, h = () => {
    const a = o.value && t.state.rows[t.state.rows.length - 1].showRowEdit;
    return [g("div", {
      class: "row-edit-popover__placeholder",
      style: {
        display: a ? "block" : "none"
      }
    }, null), g(S("iBizRowEditPopover"), {
      ref: (f) => {
        e = f;
      },
      style: n,
      show: o.value,
      onConfirm: c,
      onCancel: u
    }, null)];
  };
  return t.evt.on("onRowEditChange", (a) => {
    a.row.showRowEdit ? setTimeout(() => {
      r(a.row);
    }, 0) : (i.value = void 0, o.value = !1, Object.assign(n, {
      top: void 0,
      left: void 0
    }));
  }), {
    renderPopover: h
  };
}
class _e extends we {
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
    const { curPage: o, size: i, sortQuery: n, noSort: l } = this.state, r = {
      ...this.params
    };
    if (i && (r.page = o - 1, r.size = i), !l)
      if (n)
        r.sort = n;
      else {
        const { minorSortAppDEFieldId: c, minorSortDir: u } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (c && u) {
          const h = this.fieldIdNameMap.get(c);
          this.state.sortQuery = "".concat(h.toLowerCase(), ",").concat(u.toLowerCase());
        }
        r.sort = this.state.sortQuery, this.setSortCache();
      }
    return await this.evt.emit("onBeforeLoad", void 0), Object.assign(r, {
      ...this.state.searchParams
    }), e && Object.assign(r, e), r;
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
      const { context: l } = this.handlerAbilityParams(e), r = await this.getFetchParams(e == null ? void 0 : e.viewParam);
      r != null && r.hasOwnProperty("srfshowmode") || this.state.showTreeGrid && Object.assign(r, {
        srfshowmode: "tree"
      });
      const c = await this.service.fetch(l, r);
      typeof c.total == "number" && (this.state.total = c.total), typeof c.totalPages == "number" && (this.state.totalPages = c.totalPages), n ? this.state.items.push(...c.data) : this.state.items = c.data, await this.afterLoad(e, c.data), this.state.isLoaded = !0, await this.evt.emit("onLoadSuccess", {
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
        (l) => this.state.items.find((r) => l.tempsrfkey === r.tempsrfkey)
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
        n.forEach((l) => {
          const r = this.state.items.filter(
            (c) => l[this.treeGridValueField] && c[this.treeGridParentField] === l[this.treeGridValueField]
          );
          r.length > 0 && i(r), l._children = r;
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
      await Ge(500, this.save.bind(this), [e]);
      return;
    }
    if (!await this.validate(i))
      throw new G("行数据校验不通过，保存取消");
    let l;
    const r = ge(this.model.appDataEntityId), c = this.context.clone();
    c[r] = e.srfkey;
    try {
      l = o ? await this.service.create(c, e) : await this.service.update(c, e);
    } catch (h) {
      throw o && await this.remove({ data: [e], silent: !0 }), await this.evt.emit("onSaveError", void 0), this.actionNotification("".concat(o ? "CREATE" : "UPDATE", "ERROR"), {
        error: h,
        data: i.data
      }), h;
    }
    const u = this.findRowStateIndex(e);
    this.state.items.splice(u, 1, l.data), i.data = l.data, i.modified = !1, this.setTreeData(), this.gridStateNotify(i, X.SAVE), await this.evt.emit("onSaveSuccess", void 0);
  }
  afterRemove(e) {
    const o = this.state.items.findIndex(
      (l) => l.srfkey === e.srfkey
    );
    o !== -1 && this.state.items.splice(o, 1);
    const i = this.findRowStateIndex(e);
    this.state.rows[i], this.state.rows.splice(i, 1), this.state.groups.forEach((l) => {
      if (l.children.length) {
        const r = l.children.findIndex(
          (c) => c.srfkey === e.srfkey
        );
        r !== -1 && l.children.splice(r, 1);
      }
    }), this.setTreeData();
    const n = this.state.rows.find((l) => e[this.treeGridParentField] && l.data[this.treeGridValueField] === e[this.treeGridParentField]);
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
    if (o && (n = Array.isArray(o) ? o[0] : o), i === "row" && this.state.rows.find((m) => m.showRowEdit))
      throw new G("请先完成当前行编辑中的行的操作");
    const l = { ...this.params }, r = this.calcDefaultValue(n || {}, !0);
    n.srfDefaultData && Object.assign(r, n.srfDefaultData), Object.assign(l, r);
    let c;
    try {
      c = await this.service.getDraft(this.context, l);
    } catch (f) {
      throw this.actionNotification("GETDRAFTERROR", {
        error: f
      }), f;
    }
    const u = c.data;
    Ne(u, r), u[this.treeGridParentField] = n[this.treeGridValueField], n.srfUserData && (u.srfUserData = n.srfUserData), this.state.items.push(u);
    const h = new H(u, this);
    this.state.rows.push(h), this.gridStateNotify(h, X.DRAFT), i === "row" && this.switchRowEdit(h, !0), this.setTreeData();
    const a = this.state.rows.find((f) => h.data[this.treeGridParentField] && f.data[this.treeGridValueField] === h.data[this.treeGridParentField]);
    a && this.evt.emit("onRowCollapse", { row: a, state: !0 }), this.actionNotification("GETDRAFTSUCCESS", { data: u });
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
class ze extends Ce {
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
    const { curPage: o, size: i, sortQuery: n, noSort: l } = this.state, r = {
      ...this.params
    };
    if (i && (r.page = o - 1, r.size = i), !l)
      if (n)
        r.sort = n;
      else {
        const { minorSortAppDEFieldId: c, minorSortDir: u } = this.getSortModel();
        if (this.view && localStorage.getItem("".concat(this.view.model.id, ".").concat(this.model.name, ".sort")))
          this.state.sortQuery = localStorage.getItem(
            "".concat(this.view.model.id, ".").concat(this.model.name, ".sort")
          );
        else if (c && u) {
          const h = this.fieldIdNameMap.get(c);
          this.state.sortQuery = "".concat(h.toLowerCase(), ",").concat(u.toLowerCase());
        }
        r.sort = this.state.sortQuery, this.setSortCache();
      }
    return await this._evt.emit("onBeforeLoad", void 0), Object.assign(r, {
      ...this.state.searchParams
    }), e && Object.assign(r, e), r;
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
        throw new Te(
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
      const l = /* @__PURE__ */ new Map(), r = i === "CODELIST", c = n.toLowerCase();
      r && this.codeListItems.forEach((u) => {
        l.set(u.value, []);
      }), e.forEach((u) => {
        const h = u[c];
        !r && !l.has(h) && l.set(h, []), l.has(h) && l.get(h).push(u);
      }), this.state.groups = [], l.forEach((u, h) => {
        var f;
        const a = (f = this.codeListItems) == null ? void 0 : f.find(
          (m) => m.value === h
        );
        this.state.groups.push({
          caption: (a == null ? void 0 : a.text) || "".concat(h || "其他"),
          groupIcon: a == null ? void 0 : a.sysImage,
          key: h,
          children: u
        });
      });
    }
  }
  async afterLoad(e, o) {
    if (await super.afterLoad(e, o), e.isInitialLoad === !0)
      this.state.selectedData = [];
    else {
      const n = this.state.selectedData.filter(
        (l) => this.state.items.find((r) => l.tempsrfkey === r.tempsrfkey)
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
function Be(s, t) {
  var o;
  const e = {};
  return (o = s.controlAttributes) == null || o.forEach((i) => {
    i.attrName && i.attrValue && (e[i.attrName] = ye.execSingleLine(i.attrValue, {
      ...t
    }));
  }), e;
}
function Ue(s, t, e, o) {
  var m;
  const {
    codeName: i
  } = t, n = s.columns[i], l = s.state.columnStates.find((w) => w.key === i), r = e.find((w) => s.columns[w.codeName].isAdaptiveColumn), u = n.isAdaptiveColumn || !r && o === e.length - 1 ? "min-width" : "width";
  let h = "default";
  s != null && s.expandColumnIndex && o < Ie(s == null ? void 0 : s.expandColumnIndex) && (h = "");
  let {
    width: a
  } = t;
  const {
    hideHeader: f
  } = s.model;
  return s.model.enableCustomized && !f && a && o === e.length - 1 && (a += 20), g(S("el-table-column"), W({
    label: t.caption,
    prop: i
  }, {
    [u]: a
  }, {
    fixed: l.fixed,
    sortable: t.enableSort ? "custom" : !1,
    align: ((m = t.align) == null ? void 0 : m.toLowerCase()) || "center",
    type: h
  }), {
    default: ({
      row: w
    }) => {
      const C = w;
      if (w.isGroupData)
        return o !== 0 ? null : g("div", {
          class: "group-column"
        }, [g(S("iBizIcon"), {
          class: "group-icon",
          icon: w.groupIcon
        }, null), w.caption]);
      const D = s.findRowState(C);
      if (D) {
        const N = S(s.providers[i].component);
        return Pe(N, {
          controller: n,
          row: D,
          key: C.tempsrfkey + i,
          attrs: Be(t, {
            ...s.getEventArgs(),
            data: D.data
          })
        });
      }
      return null;
    }
  });
}
function J(s, t, e, o) {
  var i, n;
  if (t.columnType === "GROUPGRIDCOLUMN") {
    const l = ((i = t.degridColumns) == null ? void 0 : i.filter((u) => !u.hideDefault)) || [], {
      width: r
    } = t, c = ((n = t.align) == null ? void 0 : n.toLowerCase()) || "center";
    return g(S("el-table-column"), {
      prop: t.codeName,
      label: t.caption,
      "min-width": r,
      align: c
    }, {
      default: () => l.map((u, h) => J(s, u, e, h))
    });
  }
  return Ue(s, t, e, o);
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
  setup(s) {
    let t;
    (() => {
      s.modelData.controlType === "TREEGRID" ? t = V((...d) => new _e(...d)) : t = V((...d) => new ze(...d));
    })();
    const {
      zIndex: o
    } = fe();
    t.state.zIndex = o.increment();
    const i = M("control-grid"), n = x(() => {
      if (s.modelData.controlType === "TREEGRID")
        return M("control-".concat(t.model.controlType.toLowerCase()));
    }), l = M("number-grid"), {
      tableRef: r,
      onRowClick: c,
      onDbRowClick: u,
      onSortChange: h,
      isSelected: a,
      curSelectedData: f,
      getSelection: m,
      handleRowClassName: w,
      treeGirdData: C,
      handleHeaderCellClassName: D
    } = Fe(t), {
      onPageChange: N,
      onPageRefresh: K,
      onPageSizeChange: Y
    } = $e(t), O = x(() => s.modelData.controlType === "TREEGRID" ? t.state.showTreeGrid : !1), B = (d = 0) => {
      setTimeout(() => {
        if (r.value) {
          const p = r.value.$el.getElementsByClassName("el-table__row");
          let y = 0;
          p.forEach((b) => {
            const E = b.firstChild.getElementsByClassName("ibiz-number-grid__number--caption")[0];
            b.style.display !== "none" && E && (E.innerText = "".concat((t.state.curPage - 1) * t.state.size + (y + 1)), y++);
          });
        }
      }, d);
    }, Z = (d, p) => {
      B();
    };
    De(() => {
      const {
        controlType: d,
        enableGroup: p
      } = t.model;
      t.evt.on("onLoadSuccess", () => {
        (d === "TREEGRID" || d === "GRID" && p) && B();
      });
    }), F(() => O.value, (d, p) => {
      d !== p && (f.value = [], t.setSelection([]));
    });
    const ee = () => {
      const d = [...C.value], p = (y) => {
        const b = t.state.items.filter((E) => E[t.treeGridParentField] && y[t.treeGridValueField] === E[t.treeGridParentField]);
        b.length > 0 && (d.push(...b), b.forEach((E) => {
          p(E);
        }));
      };
      return C.value.forEach((y) => {
        p(y);
      }), d;
    }, U = () => {
      let d = [];
      return O.value ? d = ee() : (d = [...T.value], t.model.enableGroup && T.value.forEach((p) => {
        d.push(...p._children);
      })), d;
    }, $ = () => {
      const d = U();
      let p = !1;
      return d.length > 0 && (p = d.filter((b) => !a(b)).length === 0), p;
    }, te = () => {
      const d = U(), p = f.value.filter((y) => !d.find((b) => b.tempsrfkey === y.tempsrfkey));
      $() || p.push(...d), f.value = p, t.setSelection(m());
    }, se = (d) => {
      oe(f.value, d), t.setSelection(m());
    }, ie = (d) => {
      d.stopPropagation();
    }, oe = (d, p) => {
      const {
        controlType: y,
        enableGroup: b
      } = t.model, E = d.findIndex((v) => v.tempsrfkey === p.tempsrfkey);
      E !== -1 ? (d.splice(E, 1), y === "GRID" && b && (q(p._children) ? p._children.forEach((v) => {
        const R = d.indexOf(v);
        R !== -1 && d.splice(R, 1);
      }) : T.value.forEach((v) => {
        const R = v._children.find((P) => !d.includes(P)), L = d.findIndex((P) => P.tempsrfkey === v.tempsrfkey);
        R && L !== -1 && d.splice(L, 1);
      }))) : (d.push(p), y === "GRID" && b && (q(p._children) ? p._children.forEach((v) => {
        d.indexOf(v) === -1 && d.push(v);
      }) : T.value.forEach((v) => {
        const R = v._children.find((P) => !d.includes(P)), L = d.findIndex((P) => P.tempsrfkey === v.tempsrfkey);
        !R && L === -1 && d.unshift(v);
      })));
    }, ae = () => {
      var p;
      const {
        isLoaded: d
      } = t.state;
      if (d) {
        const y = (p = t.model.controls) == null ? void 0 : p.find((b) => b.name === "".concat(t.model.name, "_quicktoolbar"));
        return y ? g(S("iBizToolbarControl"), {
          modelData: y,
          context: t.context,
          params: t.params,
          class: i.b("quick-toolbar")
        }, null) : g(S("iBizNoData"), {
          text: t.model.emptyText,
          emptyTextLanguageRes: t.model.emptyTextLanguageRes
        }, null);
      }
      return null;
    }, {
      tableData: T,
      renderColumns: Q,
      defaultSort: ne,
      summaryMethod: re
    } = Oe(t, s), {
      renderPopover: le
    } = Me(r, t), de = () => {
      var p;
      const d = (p = t.model.controls) == null ? void 0 : p.find((y) => y.name === "".concat(t.model.name, "_batchtoolbar"));
      if (!(!d || t.state.singleSelect))
        return g("div", {
          class: [i.b("batch-toolbar"), l.b("batch-toolbar"), i.is("show", t.state.selectedData.length > 0)]
        }, [g("div", {
          class: i.b("batch-toolbar-content")
        }, [g("div", {
          class: i.b("batch-toolbar-text")
        }, [k("已选中"), t.state.selectedData.length, k("项")]), g("div", {
          class: i.b("batch-toolbar-separator")
        }, [k("|")]), g(S("iBizToolbarControl"), {
          modelData: d,
          context: t.context,
          params: t.params,
          class: i.b("batch-toolbar-items")
        }, null)])]);
    }, ce = () => {
      const d = Q.value.length ? "width" : "min-width";
      return g(S("el-table-column"), W({
        "class-name": l.e("first-column")
      }, {
        [d]: 80
      }, {
        align: "center",
        fixed: "left",
        type: "index"
      }), {
        header: () => g("div", {
          class: l.e("number")
        }, [t.state.singleSelect ? g("span", null, [k("序号")]) : g(S("el-checkbox"), {
          size: "large",
          indeterminate: t.state.selectedData.length > 0 && !$(),
          modelValue: $(),
          onChange: () => te()
        }, null)]),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        default: ({
          row: p,
          column: y,
          $index: b
        }) => {
          const E = (t.state.curPage - 1) * t.state.size + (b + 1);
          return g("div", {
            class: [l.e("number"), l.is("multiple", !t.state.singleSelect), l.is("single", t.state.singleSelect)],
            onClick: (j) => ie(j)
          }, [g("span", {
            class: l.em("number", "caption")
          }, [E]), !t.state.singleSelect && g(S("el-checkbox"), {
            size: "large",
            class: l.em("number", "checkbox"),
            modelValue: a(p),
            onChange: () => se(p)
          }, null)]);
        }
      });
    };
    return Re(() => {
      o.decrement();
    }), {
      c: t,
      ns: i,
      ns2: n,
      ns3: l,
      tableRef: r,
      tableData: T,
      treeGirdData: C,
      showTreeGrid: O,
      renderColumns: Q,
      onDbRowClick: u,
      onRowClick: c,
      onExpandChange: Z,
      onSortChange: h,
      onPageChange: N,
      onPageSizeChange: Y,
      onPageRefresh: K,
      handleRowClassName: w,
      handleHeaderCellClassName: D,
      renderNoData: ae,
      summaryMethod: re,
      renderPopover: le,
      defaultSort: ne,
      renderBatchToolBar: de,
      renderFirstColumn: ce
    };
  },
  render() {
    var o;
    if (!this.c.state.isCreated)
      return;
    const {
      state: s
    } = this.c, {
      hideHeader: t,
      enablePagingBar: e
    } = this.c.model;
    return g(S("iBizControlBase"), {
      class: [this.ns.b(), (o = this.ns2) == null ? void 0 : o.b(), this.ns3.b(), this.ns.is("show-header", !t), this.ns.is("enable-page", e), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.is("single-select", s.singleSelect), this.ns.is("enable-customized", this.c.model.enableCustomized)],
      controller: this.c
    }, {
      default: () => [g(S("el-table"), {
        border: !0,
        ref: "tableRef",
        "row-key": "tempsrfkey",
        class: this.ns.e("table"),
        "default-sort": this.defaultSort,
        "show-header": !t,
        "show-summary": this.c.enableAgg,
        "summary-method": this.summaryMethod,
        "highlight-current-row": s.singleSelect,
        "row-class-name": this.handleRowClassName,
        "header-cell-class-name": this.handleHeaderCellClassName,
        data: this.showTreeGrid ? this.treeGirdData : this.tableData,
        onRowClick: this.onRowClick,
        onRowDblclick: this.onDbRowClick,
        onSortChange: this.onSortChange,
        onExpandChange: this.onExpandChange,
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
      }), e && g(S("iBizPagination"), {
        total: s.total,
        curPage: s.curPage,
        size: s.size,
        totalPages: s.totalPages,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null), this.c.model.enableCustomized && !t && g("div", {
        class: [this.ns.b("setting-box"), this.ns3.b("setting-box")]
      }, [g(S("iBizGridSetting"), {
        columnStates: s.columnStates,
        controller: this.c
      }, null)]), this.renderBatchToolBar()]
    });
  }
}), Qe = me(
  _,
  (s) => {
    s.component(_.name, _), be(
      "GRID_RENDER_NUMBER_GRID",
      () => new Ae()
    );
  }
), Ye = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(Qe);
  }
};
export {
  Qe as IBizNumberGridControl,
  Ye as default
};
