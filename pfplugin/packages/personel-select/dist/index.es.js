import './style.css';
var Ge = Object.defineProperty;
var Xe = (r, h, a) => h in r ? Ge(r, h, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[h] = a;
var p = (r, h, a) => (Xe(r, typeof h != "symbol" ? h + "" : h, a), a);
import { useNamespace as K, getDataPickerProps as Ye, getEditorEmits as qe, renderString as Qe, withInstall as et } from "@ibiz-template/vue3-util";
import { EditorController as tt, getDeACMode as st, UIActionUtil as at, OpenAppViewCommand as de, PluginStaticResource as it, registerEditorProvider as lt } from "@ibiz-template/runtime";
import { RuntimeModelError as J } from "@ibiz-template/core";
import { mergeDeepLeft as rt, clone as pe } from "ramda";
import { notNilEmpty as R } from "qx-util";
import { defineComponent as he, ref as S, onMounted as me, watch as O, createVNode as o, computed as W, onBeforeUnmount as nt, resolveComponent as C, mergeProps as ot, withDirectives as ut, resolveDirective as ct, createTextVNode as N, nextTick as dt, isVNode as pt } from "vue";
import { isArray as ht } from "lodash-es";
class mt extends tt {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof PersonelSelectController
     */
    p(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 总数
     */
    p(this, "total", 0);
    /**
     * 当前人员数量
     */
    p(this, "currentNumber", -1);
    /**
     * 人员当前页
     */
    p(this, "page", 0);
    /**
     * 部门人员数据页数
     */
    p(this, "deptpage", 0);
    /**
     * 当前部门人员数量
     */
    p(this, "deptcurrentNumber", -1);
    /**
     * 部门人员总数
     */
    p(this, "depttotal", 0);
    /**
     * 每页数量
     */
    p(this, "size", 20);
    /**
     * 是否多选
     */
    p(this, "multiple", !1);
    /**
     * 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去
     */
    p(this, "isAddSymbol", !1);
    /**
     * 多选时拼接的字符串
     */
    p(this, "separator", ",");
    /**
     *选择视图相关参数
     */
    p(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    p(this, "linkView", null);
    /**
     * 人员UI转化
     */
    p(this, "userFilterMap", {
      id: "id",
      name: "name",
      title: "title"
    });
    /**
     * 部门人员UI转化
     */
    p(this, "deptFilterMap", {
      id: "id",
      name: "name",
      title: "title"
    });
    /**
     * 是否显示人员部门分页
     */
    p(this, "isShowTab", !0);
    /**
     *值项
     */
    p(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    p(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    p(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    p(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    p(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    p(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    p(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    p(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    p(this, "dataItems", []);
    // 对象标识属性
    p(this, "objectIdField", "");
    // 对象名称属性
    p(this, "objectNameField", "");
    // 对象值属性
    p(this, "objectValueField", "");
    // 人员请求地址
    p(this, "userUrl", "");
    // 部门请求地址
    p(this, "deptUrl", "");
    // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
    p(this, "copyUserUrl", "");
    // 复制部门人员请求url
    p(this, "copyDeptUrl", "");
    // 人员请求方式
    p(this, "userMethod", "post");
    // 部门人员请求方式
    p(this, "deptMethod", "post");
    /**
     * 上下文替换正则
     *
     */
    p(this, "contextReg", /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 数据替换正则
     *
     */
    p(this, "dataReg", /\$\{data.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 参数替换正则
     *
     */
    p(this, "paramsReg", /\$\{params.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 是否配置了默认显示当前用户
     */
    p(this, "defaultSelCurUser", !1);
    /**
     * 值类型
     */
    p(this, "valueType", "OBJECTS");
    /**
     * 关注类型属性
     *
     */
    p(this, "attentionTypeField", "type");
    /**
     * 自填充映射
     */
    p(this, "selfFillMap", {});
    /**
     * 选中后默认关注值
     *
     */
    p(this, "defaultAttentionValue", "");
    /**
     * 是否显示姓名文字
     */
    p(this, "showNameText", !0);
    /**
     * 是否显示姓名提示
     */
    p(this, "showNameTip", !1);
  }
  async onInit() {
    var u, e, d, n;
    if (super.onInit(), this.initDefaultAttribute(), this.valueItem = ((u = this.model.valueItemName) == null ? void 0 : u.toLowerCase()) || "", this.initParams(), await this.getOperatorUserList(), this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await st(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: m, minorSortDir: f } = this.deACMode;
      m && f && (this.sort = "".concat(m.toLowerCase(), ",").concat(f.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (b) => {
          b.id !== "value" && b.id !== "text" && this.dataItems.push(b);
        }
      ));
    }
    const a = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && a.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (e = this.model.objectIdField) == null ? void 0 : e.toLowerCase(), this.objectNameField = (d = this.model.objectNameField) == null ? void 0 : d.toLowerCase(), this.objectValueField = (n = this.model.objectValueField) == null ? void 0 : n.toLowerCase();
  }
  /**
   * 初始化字段默认属性
   */
  initDefaultAttribute() {
    this.model.valueType && (this.valueType = this.model.valueType);
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    var a, u, e, d, n, m, f;
    switch (this.model.editorType) {
      case "PICKEREX_NOAC":
      case "PICKEREX_NOAC_LINK":
        this.noAC = !0;
        break;
      case "PICKEREX_NOBUTTON":
        this.noButton = !0;
        break;
      default:
        this.noButton = !1, this.noAC = !1;
    }
    if (this.userUrl = this.editorParams.URL, this.deptUrl = this.editorParams.DEPTURL, this.userMethod = this.editorParams.USERMETHOD || "post", this.deptMethod = this.editorParams.DEPTMETHOD || "post", this.multiple = this.editorParams.MULTIPLE === "true", this.defaultSelCurUser = this.editorParams.DEFAULTSELCURUSER === "true", this.separator = this.editorParams.SEPARATOR || ",", this.isAddSymbol = this.editorParams.ISADDSYMBOL === "true" && this.multiple === !0, this.isShowTab = this.editorParams.ISSHOWTAB !== "false", (a = this.editorParams) != null && a.VALUETYPE && (this.valueType = (u = this.editorParams) == null ? void 0 : u.VALUETYPE), (e = this.editorParams) != null && e.DEFAULTATNVALUE && (this.defaultAttentionValue = (d = this.editorParams) == null ? void 0 : d.DEFAULTATNVALUE), (n = this.editorParams) != null && n.VALUEITEMNAME && (this.valueItem = (m = this.editorParams) == null ? void 0 : m.VALUEITEMNAME), this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "SELFFILLMAP"))
      try {
        const b = JSON.parse((f = this.editorParams) == null ? void 0 : f.SELFFILLMAP);
        Object.assign(this.selfFillMap, b);
      } catch (b) {
        this.selfFillMap = {};
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "USERMAP"))
      try {
        const b = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, b);
      } catch (b) {
        this.userFilterMap = {
          id: "id",
          name: "name",
          title: "title"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "DEPTMAP"))
      try {
        const b = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, b);
      } catch (b) {
        this.deptFilterMap = {
          id: "id",
          name: "name",
          title: "title"
        };
      }
    this.editorParams.SHOWNAMETEXT && (this.showNameText = this.toBoolean(this.editorParams.SHOWNAMETEXT)), this.editorParams.SHOWNAMETIP && (this.showNameTip = this.toBoolean(this.editorParams.SHOWNAMETIP));
  }
  /**
   * 初始化选择视图相关参数
   */
  async initPickupViewParams() {
    this.model.pickupAppViewId && (this.pickupView = await ibiz.hub.config.view.get(
      this.model.pickupAppViewId
    ));
  }
  /**
   * 初始化链接视图相关参数
   */
  async initLinkViewParams() {
    this.model.linkAppViewId && (this.linkView = await ibiz.hub.config.view.get(this.model.linkAppViewId));
  }
  /**
   * 重置状态
   */
  resetState() {
    this.resetUserState(), this.resetDeptState();
  }
  /**
   * 重置全部人员分类的状态
   */
  resetUserState() {
    this.total = 0, this.currentNumber = -1, this.page = 0, this.copyUserUrl = "";
  }
  /**
   * 重置部门人员分类的状态
   */
  resetDeptState() {
    this.deptpage = 0, this.depttotal = 0, this.deptcurrentNumber = -1, this.copyDeptUrl = "";
  }
  /**
   * 加载更多
   */
  async loadMore(a, u, e = {}) {
    if (u === "user" && this.currentNumber < this.total) {
      const d = await this.getServiceData(u, a, e);
      if (d)
        return this.page += 1, this.currentNumber < 0 && (this.currentNumber += 1), this.currentNumber += this.size, this.total = (d.total ? Number(d.total) : Number(d.headers["x-total"])) || 0, d.data.forEach((n) => {
          Object.keys(this.userFilterMap).forEach((m) => {
            n[m] = n[this.userFilterMap[m]];
          });
        }), d;
    } else if (u === "department" && this.deptcurrentNumber < this.depttotal) {
      const d = await this.getServiceData(u, a, e);
      if (d)
        return this.deptpage += 1, this.deptcurrentNumber < 0 && (this.deptcurrentNumber += 1), this.deptcurrentNumber += this.size, this.depttotal = (d.total ? Number(d.total) : Number(d.headers["x-total"])) || 0, d.data.forEach((n) => {
          Object.keys(this.deptFilterMap).forEach((m) => {
            n[m] = n[this.deptFilterMap[m]];
          });
        }), d;
    }
  }
  /**
   * 触发界面行为组点击事件
   *
   * @param {IUIActionGroupDetail} detail
   * @param {GridRowState} row
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof GridFieldColumnController
   */
  async onActionClick(a, u, e) {
    const d = a.uiactionId;
    let n = {};
    this.parent.form ? n = this.parent.form.ctx.view : this.parent.grid && (n = this.parent.grid.ctx.view), await at.execAndResolved(
      d,
      {
        context: this.context,
        params: this.params,
        data: u,
        view: n,
        event: e
      },
      a.appId
    );
  }
  /**
   * 填充字符串中的数据
   *
   * @author chitanda
   * @date 2021-04-23 20:04:17
   * @static
   * @param {string} str
   * @param {*} [context]
   * @param {*} [data]
   * @return {*}  {string}
   */
  fill(a = "", u, e, d) {
    if (R(a)) {
      if (R(u)) {
        const n = a.match(this.contextReg);
        n == null || n.forEach((m) => {
          const f = m.slice(10, m.length - 1);
          a = a.replace("${context.".concat(f, "}"), u[f] || "");
        });
      }
      if (R(e)) {
        const n = a.match(this.paramsReg);
        n == null || n.forEach((m) => {
          const f = m.slice(9, m.length - 1);
          a = a.replace("${params.".concat(f, "}"), e[f] || "");
        });
      }
      if (R(d)) {
        const n = a.match(this.dataReg);
        n == null || n.forEach((m) => {
          const f = m.slice(7, m.length - 1);
          a = a.replace("${data.".concat(f, "}"), d[f] || "");
        });
      }
    }
    return a;
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} tag 当前分类 user || department
   * @param {IData} data 表单数据
   * @param {string} query 模糊匹配字符串
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PersonelSelectController
   */
  async getServiceData(a, u, e) {
    const { context: d, params: n } = this.handlePublicParams(
      u,
      this.context,
      this.params
    ), m = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(m, { sort: this.sort }), Object.assign(m, { size: this.size }), e && Object.assign(m, e);
    const f = rt(n, m);
    let b = "";
    const A = this.fill(this.userUrl, d, n, u).replaceAll(
      "//",
      "/"
    ), M = this.fill(this.deptUrl, d, n, u).replaceAll(
      "//",
      "/"
    );
    this.copyUserUrl = A, this.copyDeptUrl = M;
    let y = "post";
    const v = {};
    if (a === "user" ? (b = A, y = this.userMethod.toLowerCase(), y === "get" ? Object.assign(v, { method: y, params: f }) : Object.assign(v, { method: y, data: f })) : (b = M, y = this.deptMethod.toLowerCase(), y === "get" ? Object.assign(v, { method: y, params: f }) : Object.assign(v, { method: y, data: f })), b)
      return await ibiz.net.request(b, v);
    throw new J(this.model, "请配置数据接口地址");
  }
  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PersonelSelectController
   */
  async openPickUpView(a, u) {
    await this.initPickupViewParams();
    const { context: e, params: d } = this.handlePublicParams(
      a,
      this.context,
      this.params
    );
    if (u && (d.selectedData = u), !this.pickupView)
      throw new J(this.model, "请配置数据选择视图");
    const n = await ibiz.commands.execute(
      de.TAG,
      this.pickupView.id,
      e,
      d,
      { openMode: "POPUPMODAL" }
    );
    if (n && n.ok && n.data)
      return n.data;
    ibiz.log.debug("模态取消或关闭异常", n);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(a) {
    const u = this.context.clone();
    a[this.valueItem] && (u.srfkey = a[this.valueItem]);
    const { context: e, params: d } = this.handlePublicParams(
      a,
      u,
      this.params
    ), { linkAppViewId: n } = this.model;
    if (!n)
      throw new J(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      de.TAG,
      n,
      e,
      d
    );
  }
  /**
   * 计算回填数据
   *
   * @author lxm
   * @date 2022-10-24 16:10:24
   * @param {IData} data 选中数据
   * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
   */
  async calcFillDataItems(a) {
    return this.deACMode ? this.dataItems.length === 0 ? [] : await Promise.all(
      this.dataItems.map((e) => {
        const n = a.map((m) => m[e.appDEFieldId]).join(this.separator);
        return e.format || e.convertToCodeItemText && e.codeListId || e.customCode, { id: e.id, value: n };
      })
    ) : [];
  }
  /**
   * 处理对象数据类型抛值
   * @param {IData} select
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-08-22 15:58:56
   */
  handleObjectParams(a) {
    const u = {};
    return this.objectIdField && Object.assign(u, {
      [this.objectIdField]: a[this.keyName]
    }), this.objectNameField && Object.assign(u, {
      [this.objectNameField]: a[this.textName]
    }), this.objectValueField && Object.assign(u, {
      [this.objectValueField]: pe(a)
    }), u;
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const a = await ibiz.hub.getApp(this.context.srfappid);
    let u = [];
    u = await a.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      u.map((e) => [e.value, e])
    );
  }
  /**
   * 判断是否显示姓名文字
   *
   * @return {*}  {boolean}
   * @memberof PersonelSelectController
   */
  isShowNameText() {
    return this.showNameText;
  }
  /**
   * 判断是否显示姓名提示
   *
   * @return {*}  {boolean}
   * @memberof PersonelSelectController
   */
  isShowNameTip() {
    return this.showNameTip;
  }
  /**
   * 获取人员头像路径
   *
   * @return {*}  {boolean}
   * @memberof PersonelSelectController
   */
  getUserPictureUrl(a, u) {
    if (this.operatorMap.size <= 0)
      return "";
    let e = {};
    return this.operatorMap.get(a) ? e = this.operatorMap.get(a) : Array.from(this.operatorMap.entries()).find((d) => {
      const n = d[1] || {};
      return n.text && u && n.text === u ? (e = n, !0) : !1;
    }), e.data && e.data.iconurl ? e.data.iconurl : "";
  }
}
class ft {
  constructor() {
    p(this, "component", "PersonelSelect");
    p(this, "formEditor", "PersonelSelect");
    p(this, "gridEditor", "PersonelSelect");
  }
  async createController(h, a) {
    const u = new mt(h, a);
    return await u.init(), u;
  }
}
const vt = /* @__PURE__ */ he({
  name: "VirtualList",
  props: {
    items: {
      // 数据源
      type: Array,
      default: () => []
    },
    itemHeight: {
      // 每行高度
      type: Number,
      default: 36
    },
    showNum: {
      // 可视数量
      type: Number,
      default: 20
    }
  },
  emits: ["scrollEvent"],
  setup(r, {
    emit: h
  }) {
    const a = K("virtual-list"), u = S(36), e = S(), d = S([]), n = S(0), m = S(0), f = S(0), b = S(0), A = () => {
      m.value = Math.floor(b.value / r.itemHeight), f.value = m.value + r.showNum, d.value = r.items.slice(m.value, f.value);
      const v = b.value - b.value % r.itemHeight;
      n.value = v;
    }, M = () => {
      b.value = e.value.scrollTop, A(), y(u.value, b.value);
    }, y = (v, g) => {
      h("scrollEvent", v, g);
    };
    return me(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), O(() => r.items, () => {
      u.value = r.itemHeight * r.items.length, A();
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: a,
      contentHeight: u,
      showList: d,
      contentBox: e,
      top: n,
      onScroll: M
    };
  },
  render() {
    return o("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [o("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [o("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((r, h) => o("div", {
      key: h,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...r,
      // eslint-disable-next-line object-shorthand
      index: h
    }) : r.name]))])])]);
  }
}), V = new it(import.meta.url);
class gt {
  /**
   * 计算选中项绘制个数 多选场景需计算显示人员是否超出
   * @author ljx
   * @date 2024-03-05 02:42:45
   * @param {IData} values 选中项key值集合
   * @returns {number} selRenderNum
   */
  static calcSelItemRenderNum(h, a) {
    let u = 0;
    if (a && (h == null ? void 0 : h.length) > 0) {
      const e = (a == null ? void 0 : a.offsetWidth) || 0, d = window.getComputedStyle(a), n = parseInt(d.marginLeft, 10), m = parseInt(d.marginRight, 10), f = parseInt(d.paddingLeft, 10), b = parseInt(d.paddingRight, 10), A = n + m + f + b, M = 30, y = 28, v = 8, g = (y + v) * h.length;
      e - A - M - g < 0 && (u = Math.floor(
        (e - A - M) / (y + v)
      ), u -= 1);
    }
    return u;
  }
}
function bt(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !pt(r);
}
const Z = /* @__PURE__ */ he({
  name: "PersonelSelect",
  props: Ye(),
  emits: qe(),
  setup(r, {
    emit: h
  }) {
    const a = K("picker-dropdown"), u = K("personel-select"), e = r.controller, d = S(""), n = S([]), m = S([]), f = S(""), b = S(!1), A = S(!1), M = S(""), y = S([]), v = S("user"), g = S([]), F = S(!1), $ = S(!1), U = S(!1), G = S(""), X = S(), D = S(), Y = S();
    let x;
    const z = S(), q = S([]);
    let j = 0;
    const fe = W(() => !!(r.controlParams && r.controlParams.editmode === "hover")), Q = (t) => {
      const s = [], i = [];
      g.value = [], t.forEach((l) => {
        var P, E;
        const c = pe(l);
        (P = e.selfFillMap) != null && P.user_id && ((E = e.selfFillMap) != null && E.user_name) && Object.assign(c, {
          id: l[e.selfFillMap.user_id],
          name: l[e.selfFillMap.user_name]
        }), s.push(l[e.selfFillMap.user_id]), i.push(l[e.selfFillMap.user_name]), g.value.push(c);
      }), f.value = s == null ? void 0 : s.join(e.separator), d.value = i == null ? void 0 : i.toString();
    }, L = () => {
      const t = g.value.map((s) => {
        var l, c;
        const i = {};
        return Object.assign(i, {
          [(l = e.selfFillMap) == null ? void 0 : l.user_id]: s.id,
          [(c = e.selfFillMap) == null ? void 0 : c.user_name]: s.name
        }), e.attentionTypeField && e.defaultAttentionValue && Object.assign(i, {
          [e.attentionTypeField]: e.defaultAttentionValue
        }), i;
      });
      h("change", t), e.parent.form && (e.parent.form.state.modified = !1);
    }, ve = (t) => {
      const s = {};
      return v.value === "user" ? Object.assign(s, {
        id: t[e.userFilterMap.id],
        name: t[e.userFilterMap.name]
      }) : Object.assign(s, {
        id: t[e.deptFilterMap.id],
        name: t[e.deptFilterMap.name]
      }), s;
    }, ge = () => {
      var t, s;
      if (e.defaultSelCurUser) {
        const i = {};
        Object.assign(i, {
          id: (t = e.context) == null ? void 0 : t.srfuserid,
          name: (s = e.context) == null ? void 0 : s.srfusername
        }), e.multiple ? g.value.findIndex((c) => c.id === i[e.deptFilterMap.id]) < 0 && g.value.push(i) : g.value.length === 0 && (g.value = [i]), L();
      }
    }, ee = () => {
      x != null && x.value && x.value.hide(), D.value && D.value.hide();
    }, be = (t) => {
      (t.key === "Escape" || t.keyCode === 27) && (t.stopPropagation(), ee());
    }, B = () => {
      if (!(e.defaultAttentionValue && e.valueType === "OBJECTS"))
        return;
      const t = f.value.split(e.separator);
      j = gt.calcSelItemRenderNum(t, Y.value), f.value = "", Q(g.value);
    };
    O(() => r.value, (t) => {
      if (t || t === null || t === void 0) {
        if (e.model.valueType === "OBJECT")
          d.value = t ? t[e.objectNameField] : null;
        else if (e.valueType === "OBJECTS") {
          const s = ht(t) ? t : [];
          Q(s), B();
          return;
        } else
          d.value = t;
        if (t == null) {
          d.value = "", g.value = [], h("change", null, e.valueItem), h("blur");
          return;
        } else if (e.multiple && g.value.length === 0 && e.valueItem && r.data && r.data[e.valueItem]) {
          let s = r.data[e.valueItem].split(e.separator), i = d.value.split(e.separator);
          e.isAddSymbol && (s = s.map((l) => l.slice(1, -1)), i = i.map((l) => l.slice(1, -1))), s.forEach((l, c) => {
            g.value.push({
              id: l,
              name: i[c]
            });
          });
        }
      }
    }, {
      immediate: !0
    });
    const Se = W(() => r.data && r.data[e.valueItem] || void 0);
    O(Se, (t, s) => {
      t !== s && (f.value = t, t == null && (g.value = [], h("change", null)));
    }, {
      immediate: !0,
      deep: !0
    });
    const te = (t) => {
      t ? A.value = t : setTimeout(() => {
        A.value = t;
      }, 100);
    }, Ee = (t, s) => {
      k(s);
      const i = g.value.findIndex((l) => l.id === t.id);
      if (i > -1 && g.value.splice(i, 1), e.valueItem) {
        let l = g.value.map((c) => c.id);
        e.isAddSymbol && (l = l.map((c) => "'".concat(c, "'"))), h("change", l.join(e.separator), e.valueItem);
      }
      if (e.valueType === "OBJECTS")
        L();
      else {
        let l = g.value.map((c) => c.name);
        e.isAddSymbol && (l = l.map((c) => "'".concat(c, "'"))), h("change", l.join(e.separator));
      }
    }, Pe = async (t) => {
      console.log("选中数据", t), M.value && (v.value === "user" ? n.value.unshift(t) : m.value.unshift(t));
      const s = {};
      if (Object.assign(s, t), v.value === "user") {
        Object.assign(s, {
          [e.userFilterMap.id]: s[e.userFilterMap.id] ? s[e.userFilterMap.id] : s.srfkey,
          [e.userFilterMap.name]: s[e.userFilterMap.name] ? s[e.userFilterMap.name] : s.srfmajortext
        });
        const i = g.value.findIndex((l) => l.id === s[e.userFilterMap.id]);
        i < 0 ? g.value.push({
          id: s[e.userFilterMap.id],
          name: s[e.userFilterMap.name]
        }) : g.value.splice(i, 1);
      } else {
        Object.assign(s, {
          [e.deptFilterMap.id]: s[e.deptFilterMap.id] ? s[e.deptFilterMap.id] : s.srfkey,
          [e.deptFilterMap.name]: s[e.deptFilterMap.name] ? s[e.deptFilterMap.name] : s.srfmajortext
        });
        const i = g.value.findIndex((l) => l.id === s[e.deptFilterMap.id]);
        i < 0 ? g.value.push({
          id: s[e.deptFilterMap.id],
          name: s[e.deptFilterMap.name]
        }) : g.value.splice(i, 1);
      }
      if (e.multiple) {
        if (e.valueItem) {
          let i = g.value.map((l) => l.id);
          e.isAddSymbol && (i = i.map((l) => "'".concat(l, "'"))), h("change", i.join(e.separator), e.valueItem);
        }
        if (e.valueType === "OBJECTS")
          L();
        else {
          let i = g.value.map((l) => l.name);
          e.isAddSymbol && (i = i.map((l) => "'".concat(l, "'"))), h("change", i.join(e.separator));
        }
      } else {
        const i = await e.calcFillDataItems([t]);
        i.length && i.forEach((l) => {
          h("change", l.value, l.id);
        }), e.valueItem && (v.value === "user" ? h("change", s[e.userFilterMap.id], e.valueItem) : h("change", s[e.deptFilterMap.id], e.valueItem)), e.model.valueType === "OBJECT" ? h("change", e.handleObjectParams(s)) : e.valueType === "OBJECTS" ? (g.value = [ve(s)], L()) : v.value === "user" ? h("change", t[e.userFilterMap.name]) : h("change", t[e.deptFilterMap.name]), U.value = !1;
      }
      e.valueType !== "OBJECTS" && h("blur", t), te(!1);
    }, ye = (t, s) => {
      t.forEach((i) => {
        const l = n.value.findIndex((c) => c[s] === i[s]);
        l > -1 ? n.value.splice(l, 1, i) : n.value.push(i);
      });
    }, w = async (t = !1) => {
      if (M.value)
        return;
      F.value = !0;
      const s = {};
      v.value === "department" ? s.page = e.deptpage : s.page = e.page;
      try {
        const i = await e.loadMore(r.data, v.value, s);
        i && (v.value === "user" ? n.value.length === 0 ? n.value = i.data : ye(i.data, e.userFilterMap.id) : m.value.length === 0 ? m.value = i.data : m.value.push(...i.data));
      } catch (i) {
        F.value = !1;
      }
      F.value = !1;
    }, se = (t) => {
      const {
        dataItems: s
      } = e;
      s != null && s.length && s.forEach((i) => {
        h("change", null, i.id);
      }), e.valueItem && h("change", null, e.valueItem), e.valueType === "OBJECTS" ? h("change", []) : (h("change", null), h("blur", t)), t.stopPropagation(), t.preventDefault();
    }, I = W(() => Qe(d.value));
    O(I, (t, s) => {
      t !== s && e.valueType !== "OBJECTS" && h("infoTextChange", t);
    }, {
      immediate: !0
    }), O(D, (t) => {
      r.autoFocus && t && (U.value = !0);
    }), O(U, (t) => {
      t === !1 && h("blur");
    });
    const ae = async (t) => {
      F.value = !0;
      try {
        const s = {};
        Object.assign(s, {
          query: t,
          size: 1e3
        });
        const i = await e.getServiceData(v.value, r.data, s);
        i && (v.value === "user" ? i.data.forEach((l) => {
          Object.keys(e.userFilterMap).forEach((c) => {
            l[c] = l[e.userFilterMap[c]];
          });
        }) : i.data.forEach((l) => {
          Object.keys(e.deptFilterMap).forEach((c) => {
            l[c] = l[e.deptFilterMap[c]];
          });
        }), y.value = i.data, F.value = !1);
      } catch (s) {
        F.value = !1;
      }
    }, ie = (t) => {
      if (v.value !== t) {
        if (v.value = t, M.value) {
          ae(M.value);
          return;
        }
        v.value === "user" && n.value.length === 0 && (e.resetUserState(), w()), v.value === "department" && m.value.length === 0 && (e.resetDeptState(), w());
      }
    }, Me = (t) => {
      e.isShowNameText() || t.stopPropagation();
    }, Ae = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Ie = (t) => /[\u4E00-\u9FA5]/.test(t), Fe = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), _ = (t) => {
      if (!t)
        return "";
      let s = 0;
      for (let T = 0; T < t.length; T++)
        if (Ie(t))
          s = t.charCodeAt(T) + ((s << 5) - s), s = s & s;
        else {
          const Ke = t.charCodeAt(T);
          s += Ke.toString(16);
        }
      const i = String(s).substring(0, 6);
      let l = parseInt(i.substring(0, 2), 16), c = parseInt(i.substring(2, 4), 16), P = parseInt(i.substring(4, 6), 16);
      l < 0 && (l = 10), c < 0 && (c = 10), P < 0 && (P = 10);
      const E = "#".concat(l.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0")).concat(P.toString(16).padStart(2, "0"));
      return E === "#FFFFFF" && Ae() || E;
    }, Te = (t) => {
      clearTimeout(z.value), z.value = setTimeout(() => {
        !t && t !== 0 ? w() : ae(t), clearTimeout(z.value);
      }, 300);
    }, we = () => o(C("el-input"), {
      class: a.be("select-modal", "search-input"),
      ref: X,
      modelValue: M.value,
      "onUpdate:modelValue": (t) => M.value = t,
      placeholder: "搜索",
      onInput: (t) => Te(t),
      onKeydown: be
    }, {
      suffix: () => o("img", {
        src: "".concat(V.dir("assets/images/svg/search.svg")),
        alt: ""
      }, null)
    }), Ce = () => o("div", {
      class: a.be("select-modal", "select-state")
    }, [o("div", {
      class: [a.bem("select-modal", "select-state", "select-slider"), a.is("left", v.value === "user"), a.is("right", v.value !== "user")]
    }, null), o("div", {
      class: a.bem("select-modal", "select-state", "select-personel"),
      onClick: () => ie("user")
    }, [N("人员")]), o("div", {
      class: a.bem("select-modal", "select-state", "select-department"),
      onClick: () => ie("department")
    }, [N("部门")])]), Oe = (t) => {
      t.forEach((s) => {
        s.capLanguageRes && s.capLanguageRes.lanResTag && (s.caption = ibiz.i18n.t(s.capLanguageRes.lanResTag, s.caption)), s.tooltipLanguageRes && s.tooltipLanguageRes.lanResTag && (s.tooltip = ibiz.i18n.t(s.tooltipLanguageRes.lanResTag, s.tooltip));
      });
    }, Ne = async (t, s) => {
      await e.onActionClick(t, [r.data], s);
    }, xe = (t) => o("div", {
      class: a.bem("select-modal", "actions", "item"),
      title: t.tooltip || t.caption,
      onClick: (s) => Ne(t, s)
    }, [t.showIcon && t.sysImage && o(C("iBizIcon"), {
      icon: t.sysImage
    }, null)]), Ue = () => {
      var s;
      const t = ((s = e.model.uiactionGroup) == null ? void 0 : s.uiactionGroupDetails) || [];
      return Oe(t), o("div", {
        class: a.be("select-modal", "actions")
      }, [t.map((i) => xe(i))]);
    }, De = () => {
      var s;
      const t = ((s = e.model.uiactionGroup) == null ? void 0 : s.uiactionGroupDetails) || [];
      return !e.isShowTab && t.length === 0 ? null : o("div", {
        class: [a.be("select-modal", "select"), a.is("no-solider-tab", !e.isShowTab && t.length > 0)]
      }, [e.isShowTab ? Ce() : null, Ue()]);
    }, je = (t) => {
      if (e.multiple) {
        if (f.value) {
          let s = f.value.split(e.separator);
          return e.isAddSymbol && (s = s.map((l) => l.slice(1, -1))), s.findIndex((l) => l === t) > -1 ? o("div", {
            class: a.bem("select-modal", "personel-list", "icon")
          }, [o("i", {
            class: "fa fa-check",
            "aria-hidden": "true"
          }, null)]) : null;
        }
      } else
        return f.value === t ? o("div", {
          class: a.bem("select-modal", "personel-list", "icon")
        }, [o("i", {
          class: "fa fa-check",
          "aria-hidden": "true"
        }, null)]) : null;
    }, Le = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if (Fe(t)) {
          const c = t.split("").find((E) => /[a-zA-Z]/.test(E)) || "", P = t.split("").find((E) => /[\u4E00-\u9FA5]/.test(E)) || "";
          return "".concat(c).concat(P).toLowerCase();
        }
        return /[a-zA-Z]/.test(t) ? t.split("").filter((c) => /[a-zA-Z]/.test(c)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((c) => /[\u4E00-\u9FA5]/.test(c)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
      }
    }, ke = (t) => {
      console.log("头像加载失败"), q.value.push(t);
    }, Re = (t) => {
      if (!t)
        return null;
      const s = JSON.parse(t);
      if (s.length === 0)
        return null;
      const {
        downloadUrl: i
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, r.data, e.editorParams), l = i.replace("%fileId%", s[0].id);
      return o("img", {
        class: a.bem("select-modal", "personel-list", "avatar"),
        src: l,
        onError: () => ke(t),
        alt: ""
      }, null);
    }, H = (t, s) => {
      const i = e.getUserPictureUrl(t, s);
      return i && !q.value.includes(i) ? Re(i) : Le(s);
    }, le = (t) => {
      const s = v.value === "user" ? t[e.userFilterMap.name] || t.name : t[e.deptFilterMap.name] || t.name, i = v.value === "user" ? t[e.userFilterMap.id] : t[e.deptFilterMap.id], l = v.value === "user" ? t[e.userFilterMap.title] : t[e.deptFilterMap.title];
      return o("div", {
        class: [a.bem("select-modal", "personel-list", "item"), a.is("selected", f.value === i)],
        onClick: () => Pe(t)
      }, [o("div", {
        class: a.bem("select-modal", "personel-list", "text")
      }, [o("div", {
        class: a.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(_(s))
      }, [H(i, s)]), o("div", {
        class: a.bem("select-modal", "personel-list", "text-label")
      }, [s]), l && o("div", {
        class: a.bem("select-modal", "personel-list", "title-label")
      }, [l]), i === e.context.srfuserid ? o("div", {
        class: a.bem("select-modal", "personel-list", "myself")
      }, [N("我自己")]) : null]), je(i)]);
    }, Ve = (t, s) => {
      const {
        context: i,
        params: l
      } = e;
      return o(C("iBizControlShell"), {
        class: a.b("panel-item"),
        data: t,
        modelData: s,
        context: i,
        params: l
      }, null);
    }, $e = (t, s) => {
      const i = S();
      return o(C("el-popover"), {
        ref: i,
        target: "hover",
        placement: "right",
        offset: 24,
        width: "auto",
        onShow: (l) => {
          x = i;
        }
      }, {
        reference: () => le(t),
        default: () => Ve(t, s)
      });
    }, ze = (t) => M.value ? y.value : t, k = (t) => {
      t.preventDefault(), t.stopPropagation();
    }, Be = (t, s) => {
      $.value && (v.value === "user" ? t - s < 305 && (F.value || w()) : t - s < 250 && (F.value || w()));
    }, re = (t) => {
      var c, P;
      const s = ((c = e.model.uiactionGroup) == null ? void 0 : c.uiactionGroupDetails) || [], i = ze(t), l = (P = e.deACMode) == null ? void 0 : P.itemLayoutPanel;
      return o(vt, {
        items: i,
        itemHeight: 36,
        class: [a.be("select-modal", "personel-list"), a.be("select-modal", "personel-list-".concat(v.value)), a.is("no-solider-tab", !e.isShowTab && s.length > 0)],
        onScrollEvent: (E, T) => Be(E, T)
      }, {
        default: (E) => l ? $e(E, l) : le(E)
      });
    }, ne = (t) => {
      b.value = t;
    }, _e = () => o("div", {
      class: a.be("select-modal", "deptpersonel")
    }, [o("div", {
      class: a.bem("select-modal", "deptpersonel", "dept")
    }, [o("div", {
      class: "collpase-icon"
    }, [b.value ? o("i", {
      class: "fa fa-angle-right",
      "aria-hidden": "true",
      onClick: () => ne(!1)
    }, null) : o("i", {
      class: "fa fa-angle-down",
      "aria-hidden": "true",
      onClick: () => ne(!0)
    }, null)]), o("img", {
      src: "".concat(V.dir("assets/images/svg/org.svg"))
    }, null), o("span", null, ["".concat(e.context.srfusername, "的团队")]), o("span", null, [N("·")]), o("span", null, [e.depttotal])]), b.value ? null : o("div", {
      class: a.bem("select-modal", "deptpersonel", "dept-person")
    }, [re(m.value)])]), He = () => ut(o("div", {
      class: a.b("select-modal"),
      onPointerdown: k,
      onPointerup: k,
      onClick: k
    }, [we(), De(), v.value === "user" ? re(n.value) : _e()]), [[ct("loading"), F.value]]), oe = () => o("div", {
      class: [a.b("no-select-value"), a.is("readonly", r.readonly || r.disabled)]
    }, [o("img", {
      src: "".concat(V.dir("assets/images/svg/member.svg")),
      alt: ""
    }, null), o("span", null, [N("未设置")])]), ue = () => {
      var s;
      const t = e.isShowNameTip();
      if (e.multiple) {
        let i = !1;
        const l = [];
        if (f.value) {
          let c = f.value.split(e.separator), P = I.value.split(e.separator);
          e.isAddSymbol && (c = c.map((E) => E.slice(1, -1))), e.isAddSymbol && (P = P.map((E) => E.slice(1, -1))), c.forEach((E, T) => {
            l.push({
              id: E,
              name: P[T]
            });
          });
        } else
          I.value === "当前用户" && r.disabled && l.push({
            id: I.value,
            name: I.value
          });
        return e.defaultAttentionValue && e.valueType === "OBJECTS" && j > 0 && (i = j < ((s = g.value) == null ? void 0 : s.length), l == null || l.splice(j, l == null ? void 0 : l.length)), o("div", {
          class: [a.b("select-value-multiple"), a.is("readonly", r.readonly || r.disabled), i ? a.be("select-value-multiple", "hidden") : ""]
        }, [l == null ? void 0 : l.map((c) => {
          let P;
          return o("div", {
            class: a.be("select-value-multiple", "item"),
            title: t ? c.name : ""
          }, [o("div", {
            class: [a.be("select-value", "textimg"), a.bem("select-value-multiple", "item", "textimg")],
            style: "background-color:".concat(_(c.name))
          }, [o(C("el-tooltip"), {
            class: "box-item",
            effect: "dark",
            content: c.name,
            placement: "top",
            offset: 12
          }, bt(P = H(c.id, c.name)) ? P : {
            default: () => [P]
          }), r.readonly || r.disabled ? null : o("div", {
            class: [a.bem("select-value-multiple", "item", "close")],
            onClick: (E) => Ee(c, E)
          }, [o("i", {
            class: "fa fa-close",
            "aria-hidden": "true"
          }, null)])])]);
        }), i ? o(C("el-tooltip"), {
          class: u.b("multiple-ellipsis"),
          "popper-class": u.be("multiple-ellipsis", "popper"),
          effect: "dark",
          content: I.value,
          placement: "top",
          offset: 12
        }, {
          default: () => [o("span", {
            class: u.be("multiple-ellipsis", "default")
          }, [N("...")])]
        }) : null, o("div", {
          class: a.b("no-select-value"),
          title: "选择人员"
        }, [o("img", {
          src: "".concat(V.dir("assets/images/svg/member.svg")),
          alt: ""
        }, null)])]);
      }
      return o("div", {
        class: [a.b("select-value"), a.is("readonly", r.readonly || r.disabled)],
        title: t ? I.value : ""
      }, [o("div", {
        class: a.be("select-value", "textimg"),
        style: "background-color:".concat(_(I.value))
      }, [H(f.value, I.value)]), o("div", {
        class: a.be("select-value", "text")
      }, [o("div", {
        class: a.bem("select-value", "text", "label")
      }, [I.value])]), r.readonly || r.disabled ? null : o("i", {
        class: ["fa fa-times-circle", a.be("select-value", "close")],
        "aria-hidden": "true",
        onClick: (i) => se(i)
      }, null)]);
    }, Je = async () => {
      var c, P;
      $.value = !0, h("focus");
      const {
        context: t,
        params: s
      } = e.handlePublicParams(r.data, e.context, e.params), i = e.fill(e.userUrl, t, s, r.data).replaceAll("//", "/"), l = e.fill(e.deptUrl, t, s, r.data).replaceAll("//", "/");
      (i !== e.copyUserUrl || l !== e.copyDeptUrl || r.data && r.data.srfkey !== G.value) && (G.value = ((c = r.data) == null ? void 0 : c.srfkey) || "", n.value = [], m.value = [], e.resetState(), w(!0)), await dt(), (P = X.value) == null || P.focus();
    }, We = () => I.value ? ue() : oe(), Ze = () => {
      $.value = !1;
    };
    O(() => r.readonly, (t) => {
      t && ee();
    }, {
      deep: !0
    });
    const ce = () => {
      B();
    };
    return me(() => {
      ge(), window == null || window.addEventListener("resize", ce), B();
    }), nt(() => {
      e.resetState(), window == null || window.removeEventListener("resize", ce);
    }), {
      ns: a,
      ns2: u,
      c: e,
      refValue: f,
      curValue: d,
      valueText: I,
      loading: F,
      items: n,
      personelSelRef: Y,
      onClear: se,
      load: w,
      isEditable: A,
      popoverRef: D,
      setEditable: te,
      renderDropModal: He,
      renderNoSelectValue: oe,
      renderSelectInput: ue,
      renderReadState: We,
      onPopShow: Je,
      onPageHide: Ze,
      handleClick: Me,
      showFormDefaultContent: fe,
      modelVisible: U
    };
  },
  render() {
    const r = o(C("el-popover"), ot({
      ref: "popoverRef",
      visible: this.modelVisible,
      "onUpdate:visible": (h) => this.modelVisible = h,
      trigger: "click",
      popperClass: this.ns.b("person-select"),
      width: 320,
      teleported: !0,
      onShow: () => this.onPopShow(),
      onHide: () => this.onPageHide()
    }, this.$attrs), {
      reference: () => this.renderReadState(),
      default: () => this.renderDropModal()
    });
    return o("div", {
      ref: "personelSelRef",
      class: [this.ns.b(), this.ns2.b(), this.ns.b("person-value"), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.c.isShowNameText() ? "" : this.ns.m("only-icon"), this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent), this.ns2.is("multiple", this.c.multiple)],
      onClick: this.handleClick
    }, [this.readonly || this.disabled ? this.renderReadState() : r]);
  }
}), St = et(
  Z,
  function(r) {
    r.component(Z.name, Z), lt(
      "EDITOR_CUSTOMSTYLE_PERSON_SELECT",
      () => new ft()
    );
  }
), wt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(St);
  }
};
export {
  St as IBizPersonelSelect,
  wt as default
};
