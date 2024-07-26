import './style.css';
var Ke = Object.defineProperty;
var Ge = (r, p, s) => p in r ? Ke(r, p, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[p] = s;
var d = (r, p, s) => (Ge(r, typeof p != "symbol" ? p + "" : p, s), s);
import { useNamespace as ce, getDataPickerProps as Xe, getEditorEmits as Ye, renderString as qe, withInstall as Qe } from "@ibiz-template/vue3-util";
import { EditorController as et, getDeACMode as tt, UIActionUtil as at, OpenAppViewCommand as ue, PluginStaticResource as st, registerEditorProvider as it } from "@ibiz-template/runtime";
import { RuntimeModelError as H } from "@ibiz-template/core";
import { mergeDeepLeft as lt, clone as de } from "ramda";
import { notNilEmpty as R } from "qx-util";
import { defineComponent as pe, ref as S, onMounted as he, watch as w, createVNode as n, computed as J, onBeforeUnmount as rt, resolveComponent as C, withDirectives as nt, resolveDirective as ot, createTextVNode as O, nextTick as ut, isVNode as ct } from "vue";
import { isArray as dt } from "lodash-es";
class pt extends et {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof PersonelSelectController
     */
    d(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 总数
     */
    d(this, "total", 0);
    /**
     * 当前人员数量
     */
    d(this, "currentNumber", -1);
    /**
     * 人员当前页
     */
    d(this, "page", 0);
    /**
     * 部门人员数据页数
     */
    d(this, "deptpage", 0);
    /**
     * 当前部门人员数量
     */
    d(this, "deptcurrentNumber", -1);
    /**
     * 部门人员总数
     */
    d(this, "depttotal", 0);
    /**
     * 每页数量
     */
    d(this, "size", 20);
    /**
     * 是否多选
     */
    d(this, "multiple", !1);
    /**
     * 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去
     */
    d(this, "isAddSymbol", !1);
    /**
     * 多选时拼接的字符串
     */
    d(this, "separator", ",");
    /**
     *选择视图相关参数
     */
    d(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    d(this, "linkView", null);
    /**
     * 人员UI转化
     */
    d(this, "userFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     * 部门人员UI转化
     */
    d(this, "deptFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     * 是否显示人员部门分页
     */
    d(this, "isShowTab", !0);
    /**
     *值项
     */
    d(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    d(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    d(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    d(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    d(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    d(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    d(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    d(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    d(this, "dataItems", []);
    // 对象标识属性
    d(this, "objectIdField", "");
    // 对象名称属性
    d(this, "objectNameField", "");
    // 对象值属性
    d(this, "objectValueField", "");
    // 人员请求地址
    d(this, "userUrl", "");
    // 部门请求地址
    d(this, "deptUrl", "");
    // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
    d(this, "copyUserUrl", "");
    // 复制部门人员请求url
    d(this, "copyDeptUrl", "");
    // 人员请求方式
    d(this, "userMethod", "post");
    // 部门人员请求方式
    d(this, "deptMethod", "post");
    /**
     * 上下文替换正则
     *
     */
    d(this, "contextReg", /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 数据替换正则
     *
     */
    d(this, "dataReg", /\$\{data.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 参数替换正则
     *
     */
    d(this, "paramsReg", /\$\{params.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 是否配置了默认显示当前用户
     */
    d(this, "defaultSelCurUser", !1);
    /**
     * 值类型
     */
    d(this, "valueType", "OBJECTS");
    /**
     * 关注类型属性
     *
     */
    d(this, "attentionTypeField", "type");
    /**
     * 自填充映射
     */
    d(this, "selfFillMap", {});
    /**
     * 选中后默认关注值
     *
     */
    d(this, "defaultAttentionValue", "");
    /**
     * 是否显示姓名文字
     */
    d(this, "showNameText", !0);
    /**
     * 是否显示姓名提示
     */
    d(this, "showNameTip", !1);
  }
  async onInit() {
    var e, m, u, o;
    if (super.onInit(), this.initDefaultAttribute(), this.valueItem = ((e = this.model.valueItemName) == null ? void 0 : e.toLowerCase()) || "", this.initParams(), await this.getOperatorUserList(), this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await tt(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: h, minorSortDir: b } = this.deACMode;
      h && b && (this.sort = "".concat(h.toLowerCase(), ",").concat(b.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (g) => {
          g.id !== "value" && g.id !== "text" && this.dataItems.push(g);
        }
      ));
    }
    const s = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && s.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (m = this.model.objectIdField) == null ? void 0 : m.toLowerCase(), this.objectNameField = (u = this.model.objectNameField) == null ? void 0 : u.toLowerCase(), this.objectValueField = (o = this.model.objectValueField) == null ? void 0 : o.toLowerCase();
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
    var s, e, m, u, o, h, b;
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
    if (this.userUrl = this.editorParams.URL, this.deptUrl = this.editorParams.DEPTURL, this.userMethod = this.editorParams.USERMETHOD || "post", this.deptMethod = this.editorParams.DEPTMETHOD || "post", this.multiple = this.editorParams.MULTIPLE === "true", this.defaultSelCurUser = this.editorParams.DEFAULTSELCURUSER === "true", this.separator = this.editorParams.SEPARATOR || ",", this.isAddSymbol = this.editorParams.ISADDSYMBOL === "true" && this.multiple === !0, this.isShowTab = this.editorParams.ISSHOWTAB !== "false", (s = this.editorParams) != null && s.VALUETYPE && (this.valueType = (e = this.editorParams) == null ? void 0 : e.VALUETYPE), (m = this.editorParams) != null && m.DEFAULTATNVALUE && (this.defaultAttentionValue = (u = this.editorParams) == null ? void 0 : u.DEFAULTATNVALUE), (o = this.editorParams) != null && o.VALUEITEMNAME && (this.valueItem = (h = this.editorParams) == null ? void 0 : h.VALUEITEMNAME), this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "SELFFILLMAP"))
      try {
        const g = JSON.parse((b = this.editorParams) == null ? void 0 : b.SELFFILLMAP);
        Object.assign(this.selfFillMap, g);
      } catch (g) {
        this.selfFillMap = {};
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "USERMAP"))
      try {
        const g = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, g);
      } catch (g) {
        this.userFilterMap = {
          id: "id",
          name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "DEPTMAP"))
      try {
        const g = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, g);
      } catch (g) {
        this.deptFilterMap = {
          id: "id",
          name: "name"
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
  async loadMore(s, e, m = {}) {
    if (e === "user" && this.currentNumber < this.total) {
      const u = await this.getServiceData(e, s, m);
      if (u)
        return this.page += 1, this.currentNumber < 0 && (this.currentNumber += 1), this.currentNumber += this.size, this.total = (u.total ? Number(u.total) : Number(u.headers["x-total"])) || 0, u.data.forEach((o) => {
          Object.keys(this.userFilterMap).forEach((h) => {
            o[h] = o[this.userFilterMap[h]];
          });
        }), u;
    } else if (e === "department" && this.deptcurrentNumber < this.depttotal) {
      const u = await this.getServiceData(e, s, m);
      if (u)
        return this.deptpage += 1, this.deptcurrentNumber < 0 && (this.deptcurrentNumber += 1), this.deptcurrentNumber += this.size, this.depttotal = (u.total ? Number(u.total) : Number(u.headers["x-total"])) || 0, u.data.forEach((o) => {
          Object.keys(this.deptFilterMap).forEach((h) => {
            o[h] = o[this.deptFilterMap[h]];
          });
        }), u;
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
  async onActionClick(s, e, m) {
    const u = s.uiactionId;
    let o = {};
    this.parent.form ? o = this.parent.form.ctx.view : this.parent.grid && (o = this.parent.grid.ctx.view), await at.execAndResolved(
      u,
      {
        context: this.context,
        params: this.params,
        data: e,
        view: o,
        event: m
      },
      s.appId
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
  fill(s = "", e, m, u) {
    if (R(s)) {
      if (R(e)) {
        const o = s.match(this.contextReg);
        o == null || o.forEach((h) => {
          const b = h.slice(10, h.length - 1);
          s = s.replace("${context.".concat(b, "}"), e[b] || "");
        });
      }
      if (R(m)) {
        const o = s.match(this.paramsReg);
        o == null || o.forEach((h) => {
          const b = h.slice(9, h.length - 1);
          s = s.replace("${params.".concat(b, "}"), m[b] || "");
        });
      }
      if (R(u)) {
        const o = s.match(this.dataReg);
        o == null || o.forEach((h) => {
          const b = h.slice(7, h.length - 1);
          s = s.replace("${data.".concat(b, "}"), u[b] || "");
        });
      }
    }
    return s;
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
  async getServiceData(s, e, m) {
    const { context: u, params: o } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), h = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(h, { sort: this.sort }), Object.assign(h, { size: this.size }), m && Object.assign(h, m);
    const b = lt(o, h);
    let g = "";
    const M = this.fill(this.userUrl, u, o, e).replaceAll(
      "//",
      "/"
    ), I = this.fill(this.deptUrl, u, o, e).replaceAll(
      "//",
      "/"
    );
    this.copyUserUrl = M, this.copyDeptUrl = I;
    let v = "post";
    const f = {};
    if (s === "user" ? (g = M, v = this.userMethod.toLowerCase(), v === "get" ? Object.assign(f, { method: v, params: b }) : Object.assign(f, { method: v, data: b })) : (g = I, v = this.deptMethod.toLowerCase(), v === "get" ? Object.assign(f, { method: v, params: b }) : Object.assign(f, { method: v, data: b })), g)
      return await ibiz.net.request(g, f);
    throw new H(this.model, "请配置数据接口地址");
  }
  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PersonelSelectController
   */
  async openPickUpView(s, e) {
    await this.initPickupViewParams();
    const { context: m, params: u } = this.handlePublicParams(
      s,
      this.context,
      this.params
    );
    if (e && (u.selectedData = e), !this.pickupView)
      throw new H(this.model, "请配置数据选择视图");
    const o = await ibiz.commands.execute(
      ue.TAG,
      this.pickupView.id,
      m,
      u,
      { openMode: "POPUPMODAL" }
    );
    if (o && o.ok && o.data)
      return o.data;
    ibiz.log.debug("模态取消或关闭异常", o);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(s) {
    const e = this.context.clone();
    s[this.valueItem] && (e.srfkey = s[this.valueItem]);
    const { context: m, params: u } = this.handlePublicParams(
      s,
      e,
      this.params
    ), { linkAppViewId: o } = this.model;
    if (!o)
      throw new H(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      ue.TAG,
      o,
      m,
      u
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
  async calcFillDataItems(s) {
    return this.deACMode ? this.dataItems.length === 0 ? [] : await Promise.all(
      this.dataItems.map((m) => {
        const o = s.map((h) => h[m.appDEFieldId]).join(this.separator);
        return m.format || m.convertToCodeItemText && m.codeListId || m.customCode, { id: m.id, value: o };
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
  handleObjectParams(s) {
    const e = {};
    return this.objectIdField && Object.assign(e, {
      [this.objectIdField]: s[this.keyName]
    }), this.objectNameField && Object.assign(e, {
      [this.objectNameField]: s[this.textName]
    }), this.objectValueField && Object.assign(e, {
      [this.objectValueField]: de(s)
    }), e;
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const s = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await s.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((m) => [m.value, m])
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
}
class ht {
  constructor() {
    d(this, "component", "PersonelSelect");
    d(this, "formEditor", "PersonelSelect");
    d(this, "gridEditor", "PersonelSelect");
  }
  async createController(p, s) {
    const e = new pt(p, s);
    return await e.init(), e;
  }
}
const mt = /* @__PURE__ */ pe({
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
    emit: p
  }) {
    const s = ce("virtual-list"), e = S(36), m = S(), u = S([]), o = S(0), h = S(0), b = S(0), g = S(0), M = () => {
      h.value = Math.floor(g.value / r.itemHeight), b.value = h.value + r.showNum, u.value = r.items.slice(h.value, b.value);
      const f = g.value - g.value % r.itemHeight;
      o.value = f;
    }, I = () => {
      g.value = m.value.scrollTop, M(), v(e.value, g.value);
    }, v = (f, P) => {
      p("scrollEvent", f, P);
    };
    return he(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), w(() => r.items, () => {
      e.value = r.itemHeight * r.items.length, M();
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: s,
      contentHeight: e,
      showList: u,
      contentBox: m,
      top: o,
      onScroll: I
    };
  },
  render() {
    return n("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [n("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [n("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((r, p) => n("div", {
      key: p,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...r,
      // eslint-disable-next-line object-shorthand
      index: p
    }) : r.name]))])])]);
  }
}), V = new st(import.meta.url);
class ft {
  /**
   * 计算选中项绘制个数 多选场景需计算显示人员是否超出
   * @author ljx
   * @date 2024-03-05 02:42:45
   * @param {IData} values 选中项key值集合
   * @returns {number} selRenderNum
   */
  static calcSelItemRenderNum(p, s) {
    let e = 0;
    if (s && (p == null ? void 0 : p.length) > 0) {
      const m = (s == null ? void 0 : s.offsetWidth) || 0, u = window.getComputedStyle(s), o = parseInt(u.marginLeft, 10), h = parseInt(u.marginRight, 10), b = parseInt(u.paddingLeft, 10), g = parseInt(u.paddingRight, 10), M = o + h + b + g, I = 30, v = 28, f = 8, P = (v + f) * p.length;
      m - M - I - P < 0 && (e = Math.floor(
        (m - M - I) / (v + f)
      ), e -= 1);
    }
    return e;
  }
}
function vt(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !ct(r);
}
const W = /* @__PURE__ */ pe({
  name: "PersonelSelect",
  props: Xe(),
  emits: Ye(),
  setup(r, {
    emit: p
  }) {
    const s = ce("picker-dropdown"), e = r.controller, m = S(""), u = S([]), o = S([]), h = S(""), b = S(!1), g = S(!1), M = S(""), I = S([]), v = S("user"), f = S([]), P = S(!1), x = S(!1), D = S(!1), Z = S(""), K = S(), U = S(), G = S();
    let N;
    const $ = S(), X = S([]);
    let j = 0;
    const me = J(() => !!(r.controlParams && r.controlParams.editmode === "hover")), Y = (t) => {
      const a = [], i = [];
      f.value = [], t.forEach((l) => {
        var y, E;
        const c = de(l);
        (y = e.selfFillMap) != null && y.user_id && ((E = e.selfFillMap) != null && E.user_name) && Object.assign(c, {
          id: l[e.selfFillMap.user_id],
          name: l[e.selfFillMap.user_name]
        }), a.push(l[e.selfFillMap.user_id]), i.push(l[e.selfFillMap.user_name]), f.value.push(c);
      }), h.value = a == null ? void 0 : a.join(e.separator), m.value = i == null ? void 0 : i.toString();
    }, L = () => {
      const t = f.value.map((a) => {
        var l, c;
        const i = {};
        return Object.assign(i, {
          [(l = e.selfFillMap) == null ? void 0 : l.user_id]: a.id,
          [(c = e.selfFillMap) == null ? void 0 : c.user_name]: a.name
        }), e.attentionTypeField && e.defaultAttentionValue && Object.assign(i, {
          [e.attentionTypeField]: e.defaultAttentionValue
        }), i;
      });
      p("change", t), e.parent.form && (e.parent.form.state.modified = !1);
    }, fe = (t) => {
      const a = {};
      return v.value === "user" ? Object.assign(a, {
        id: t[e.userFilterMap.id],
        name: t[e.userFilterMap.name]
      }) : Object.assign(a, {
        id: t[e.deptFilterMap.id],
        name: t[e.deptFilterMap.name]
      }), a;
    }, ve = () => {
      var t, a;
      if (e.defaultSelCurUser) {
        const i = {};
        Object.assign(i, {
          id: (t = e.context) == null ? void 0 : t.srfuserid,
          name: (a = e.context) == null ? void 0 : a.srfusername
        }), e.multiple ? f.value.findIndex((c) => c.id === i[e.deptFilterMap.id]) < 0 && f.value.push(i) : f.value.length === 0 && (f.value = [i]), L();
      }
    }, q = () => {
      N != null && N.value && N.value.hide(), U.value && U.value.hide();
    }, ge = (t) => {
      (t.key === "Escape" || t.keyCode === 27) && (t.stopPropagation(), q());
    }, z = () => {
      if (!(e.defaultAttentionValue && e.valueType === "OBJECTS"))
        return;
      const t = h.value.split(e.separator);
      j = ft.calcSelItemRenderNum(t, G.value), h.value = "", Y(f.value);
    };
    w(() => r.value, (t) => {
      if (t || t === null || t === void 0) {
        if (e.model.valueType === "OBJECT")
          m.value = t ? t[e.objectNameField] : null;
        else if (e.valueType === "OBJECTS") {
          const a = dt(t) ? t : [];
          Y(a), z();
          return;
        } else
          m.value = t;
        if (t == null) {
          m.value = "", f.value = [], p("change", null, e.valueItem), p("blur");
          return;
        } else if (e.multiple && f.value.length === 0 && e.valueItem && r.data && r.data[e.valueItem]) {
          let a = r.data[e.valueItem].split(e.separator), i = m.value.split(e.separator);
          e.isAddSymbol && (a = a.map((l) => l.slice(1, -1)), i = i.map((l) => l.slice(1, -1))), a.forEach((l, c) => {
            f.value.push({
              id: l,
              name: i[c]
            });
          });
        }
      }
    }, {
      immediate: !0
    });
    const be = J(() => r.data && r.data[e.valueItem] || void 0);
    w(be, (t, a) => {
      t !== a && (h.value = t, t == null && (f.value = [], p("change", null)));
    }, {
      immediate: !0,
      deep: !0
    });
    const Q = (t) => {
      t ? g.value = t : setTimeout(() => {
        g.value = t;
      }, 100);
    }, Se = (t, a) => {
      k(a);
      const i = f.value.findIndex((l) => l.id === t.id);
      if (i > -1 && f.value.splice(i, 1), e.valueItem) {
        let l = f.value.map((c) => c.id);
        e.isAddSymbol && (l = l.map((c) => "'".concat(c, "'"))), p("change", l.join(e.separator), e.valueItem);
      }
      if (e.valueType === "OBJECTS")
        L();
      else {
        let l = f.value.map((c) => c.name);
        e.isAddSymbol && (l = l.map((c) => "'".concat(c, "'"))), p("change", l.join(e.separator));
      }
    }, Ee = async (t) => {
      console.log("选中数据", t), M.value && (v.value === "user" ? u.value.unshift(t) : o.value.unshift(t));
      const a = {};
      if (Object.assign(a, t), v.value === "user") {
        Object.assign(a, {
          [e.userFilterMap.id]: a[e.userFilterMap.id] ? a[e.userFilterMap.id] : a.srfkey,
          [e.userFilterMap.name]: a[e.userFilterMap.name] ? a[e.userFilterMap.name] : a.srfmajortext
        });
        const i = f.value.findIndex((l) => l.id === a[e.userFilterMap.id]);
        i < 0 ? f.value.push({
          id: a[e.userFilterMap.id],
          name: a[e.userFilterMap.name]
        }) : f.value.splice(i, 1);
      } else {
        Object.assign(a, {
          [e.deptFilterMap.id]: a[e.deptFilterMap.id] ? a[e.deptFilterMap.id] : a.srfkey,
          [e.deptFilterMap.name]: a[e.deptFilterMap.name] ? a[e.deptFilterMap.name] : a.srfmajortext
        });
        const i = f.value.findIndex((l) => l.id === a[e.deptFilterMap.id]);
        i < 0 ? f.value.push({
          id: a[e.deptFilterMap.id],
          name: a[e.deptFilterMap.name]
        }) : f.value.splice(i, 1);
      }
      if (e.multiple) {
        if (e.valueItem) {
          let i = f.value.map((l) => l.id);
          e.isAddSymbol && (i = i.map((l) => "'".concat(l, "'"))), p("change", i.join(e.separator), e.valueItem);
        }
        if (e.valueType === "OBJECTS")
          L();
        else {
          let i = f.value.map((l) => l.name);
          e.isAddSymbol && (i = i.map((l) => "'".concat(l, "'"))), p("change", i.join(e.separator));
        }
      } else {
        const i = await e.calcFillDataItems([t]);
        i.length && i.forEach((l) => {
          p("change", l.value, l.id);
        }), e.valueItem && (v.value === "user" ? p("change", a[e.userFilterMap.id], e.valueItem) : p("change", a[e.deptFilterMap.id], e.valueItem)), e.model.valueType === "OBJECT" ? p("change", e.handleObjectParams(a)) : e.valueType === "OBJECTS" ? (f.value = [fe(a)], L()) : v.value === "user" ? p("change", t[e.userFilterMap.name]) : p("change", t[e.deptFilterMap.name]), D.value = !1;
      }
      e.valueType !== "OBJECTS" && p("blur", t), Q(!1);
    }, ye = (t, a) => {
      t.forEach((i) => {
        const l = u.value.findIndex((c) => c[a] === i[a]);
        l > -1 ? u.value.splice(l, 1, i) : u.value.push(i);
      });
    }, T = async (t = !1) => {
      if (M.value)
        return;
      P.value = !0;
      const a = {};
      v.value === "department" ? a.page = e.deptpage : a.page = e.page;
      try {
        const i = await e.loadMore(r.data, v.value, a);
        i && (v.value === "user" ? u.value.length === 0 ? u.value = i.data : ye(i.data, e.userFilterMap.id) : o.value.length === 0 ? o.value = i.data : o.value.push(...i.data));
      } catch (i) {
        P.value = !1;
      }
      P.value = !1;
    }, ee = (t) => {
      const {
        dataItems: a
      } = e;
      a != null && a.length && a.forEach((i) => {
        p("change", null, i.id);
      }), e.valueItem && p("change", null, e.valueItem), e.valueType === "OBJECTS" ? p("change", []) : (p("change", null), p("blur", t)), t.stopPropagation(), t.preventDefault();
    }, A = J(() => qe(m.value));
    w(A, (t, a) => {
      t !== a && e.valueType !== "OBJECTS" && p("infoTextChange", t);
    }, {
      immediate: !0
    }), w(U, (t) => {
      r.autoFocus && t && (D.value = !0);
    }), w(D, (t) => {
      t === !1 && p("blur");
    });
    const te = async (t) => {
      P.value = !0;
      try {
        const a = {};
        Object.assign(a, {
          query: t,
          size: 1e3
        });
        const i = await e.getServiceData(v.value, r.data, a);
        i && (v.value === "user" ? i.data.forEach((l) => {
          Object.keys(e.userFilterMap).forEach((c) => {
            l[c] = l[e.userFilterMap[c]];
          });
        }) : i.data.forEach((l) => {
          Object.keys(e.deptFilterMap).forEach((c) => {
            l[c] = l[e.deptFilterMap[c]];
          });
        }), I.value = i.data, P.value = !1);
      } catch (a) {
        P.value = !1;
      }
    }, ae = (t) => {
      if (v.value !== t) {
        if (v.value = t, M.value) {
          te(M.value);
          return;
        }
        v.value === "user" && u.value.length === 0 && (e.resetUserState(), T()), v.value === "department" && o.value.length === 0 && (e.resetDeptState(), T());
      }
    }, Me = (t) => {
      e.isShowNameText() || t.stopPropagation();
    }, Pe = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Ae = (t) => /[\u4E00-\u9FA5]/.test(t), Ie = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), B = (t) => {
      if (!t)
        return "";
      let a = 0;
      for (let F = 0; F < t.length; F++)
        if (Ae(t))
          a = t.charCodeAt(F) + ((a << 5) - a), a = a & a;
        else {
          const Ze = t.charCodeAt(F);
          a += Ze.toString(16);
        }
      const i = String(a).substring(0, 6), l = parseInt(i.substring(0, 2), 16), c = parseInt(i.substring(2, 4), 16), y = parseInt(i.substring(4, 6), 16), E = "#".concat(l.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0")).concat(y.toString(16).padStart(2, "0"));
      return E === "#FFFFFF" && Pe() || E;
    }, Fe = (t) => {
      clearTimeout($.value), $.value = setTimeout(() => {
        !t && t !== 0 ? T() : te(t), clearTimeout($.value);
      }, 300);
    }, Te = () => n(C("el-input"), {
      class: s.be("select-modal", "search-input"),
      ref: K,
      modelValue: M.value,
      "onUpdate:modelValue": (t) => M.value = t,
      placeholder: "搜索",
      onInput: (t) => Fe(t),
      onKeydown: ge
    }, {
      suffix: () => n("img", {
        src: "".concat(V.dir("assets/images/svg/search.svg")),
        alt: ""
      }, null)
    }), we = () => n("div", {
      class: s.be("select-modal", "select-state")
    }, [n("div", {
      class: [s.bem("select-modal", "select-state", "select-slider"), s.is("left", v.value === "user"), s.is("right", v.value !== "user")]
    }, null), n("div", {
      class: s.bem("select-modal", "select-state", "select-personel"),
      onClick: () => ae("user")
    }, [O("人员")]), n("div", {
      class: s.bem("select-modal", "select-state", "select-department"),
      onClick: () => ae("department")
    }, [O("部门")])]), Ce = (t) => {
      t.forEach((a) => {
        a.capLanguageRes && a.capLanguageRes.lanResTag && (a.caption = ibiz.i18n.t(a.capLanguageRes.lanResTag, a.caption)), a.tooltipLanguageRes && a.tooltipLanguageRes.lanResTag && (a.tooltip = ibiz.i18n.t(a.tooltipLanguageRes.lanResTag, a.tooltip));
      });
    }, Oe = async (t, a) => {
      await e.onActionClick(t, [r.data], a);
    }, Ne = (t) => n("div", {
      class: s.bem("select-modal", "actions", "item"),
      title: t.tooltip || t.caption,
      onClick: (a) => Oe(t, a)
    }, [t.showIcon && t.sysImage && n(C("iBizIcon"), {
      icon: t.sysImage
    }, null)]), xe = () => {
      var a;
      const t = ((a = e.model.uiactionGroup) == null ? void 0 : a.uiactionGroupDetails) || [];
      return Ce(t), n("div", {
        class: s.be("select-modal", "actions")
      }, [t.map((i) => Ne(i))]);
    }, De = () => {
      var a;
      const t = ((a = e.model.uiactionGroup) == null ? void 0 : a.uiactionGroupDetails) || [];
      return !e.isShowTab && t.length === 0 ? null : n("div", {
        class: [s.be("select-modal", "select"), s.is("no-solider-tab", !e.isShowTab && t.length > 0)]
      }, [e.isShowTab ? we() : null, xe()]);
    }, Ue = (t) => {
      if (e.multiple) {
        if (h.value) {
          let a = h.value.split(e.separator);
          return e.isAddSymbol && (a = a.map((l) => l.slice(1, -1))), a.findIndex((l) => l === t) > -1 ? n("div", {
            class: s.bem("select-modal", "personel-list", "icon")
          }, [n("i", {
            class: "fa fa-check",
            "aria-hidden": "true"
          }, null)]) : null;
        }
      } else
        return h.value === t ? n("div", {
          class: s.bem("select-modal", "personel-list", "icon")
        }, [n("i", {
          class: "fa fa-check",
          "aria-hidden": "true"
        }, null)]) : null;
    }, je = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if (Ie(t)) {
          const c = t.split("").find((E) => /[a-zA-Z]/.test(E)) || "", y = t.split("").find((E) => /[\u4E00-\u9FA5]/.test(E)) || "";
          return "".concat(c).concat(y).toLowerCase();
        }
        return /[a-zA-Z]/.test(t) ? t.split("").filter((c) => /[a-zA-Z]/.test(c)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((c) => /[\u4E00-\u9FA5]/.test(c)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
      }
    }, Le = (t) => {
      console.log("头像加载失败"), X.value.push(t);
    }, ke = (t) => {
      if (!t)
        return null;
      const a = JSON.parse(t);
      if (a.length === 0)
        return null;
      const {
        downloadUrl: i
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, r.data, e.editorParams), l = i.replace("%fileId%", a[0].id);
      return n("img", {
        class: s.bem("select-modal", "personel-list", "avatar"),
        src: l,
        onError: () => Le(t),
        alt: ""
      }, null);
    }, _ = (t, a) => e.operatorMap && e.operatorMap.get(t) && e.operatorMap.get(t).data.iconurl && !X.value.includes(e.operatorMap.get(t).data.iconurl) ? ke(e.operatorMap.get(t).data.iconurl) : je(a), se = (t) => {
      const a = v.value === "user" ? t[e.userFilterMap.name] || t.name : t[e.deptFilterMap.name] || t.name, i = v.value === "user" ? t[e.userFilterMap.id] : t[e.deptFilterMap.id];
      return n("div", {
        class: [s.bem("select-modal", "personel-list", "item"), s.is("selected", h.value === i)],
        onClick: () => Ee(t)
      }, [n("div", {
        class: s.bem("select-modal", "personel-list", "text")
      }, [n("div", {
        class: s.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(B(a))
      }, [_(i, a)]), n("div", {
        class: s.bem("select-modal", "personel-list", "text-label")
      }, [a]), i === e.context.srfuserid ? n("div", {
        class: s.bem("select-modal", "personel-list", "myself")
      }, [O("我自己")]) : null]), Ue(i)]);
    }, Re = (t, a) => {
      const {
        context: i,
        params: l
      } = e;
      return n(C("iBizControlShell"), {
        class: s.b("panel-item"),
        data: t,
        modelData: a,
        context: i,
        params: l
      }, null);
    }, Ve = (t, a) => {
      const i = S();
      return n(C("el-popover"), {
        ref: i,
        target: "hover",
        placement: "right",
        offset: 24,
        width: "auto",
        onShow: (l) => {
          N = i;
        }
      }, {
        reference: () => se(t),
        default: () => Re(t, a)
      });
    }, $e = (t) => M.value ? I.value : t, k = (t) => {
      t.preventDefault(), t.stopPropagation();
    }, ze = (t, a) => {
      x.value && (v.value === "user" ? t - a < 305 && (P.value || T()) : t - a < 250 && (P.value || T()));
    }, ie = (t) => {
      var c, y;
      const a = ((c = e.model.uiactionGroup) == null ? void 0 : c.uiactionGroupDetails) || [], i = $e(t), l = (y = e.deACMode) == null ? void 0 : y.itemLayoutPanel;
      return n(mt, {
        items: i,
        itemHeight: 36,
        class: [s.be("select-modal", "personel-list"), s.be("select-modal", "personel-list-".concat(v.value)), s.is("no-solider-tab", !e.isShowTab && a.length > 0)],
        onScrollEvent: (E, F) => ze(E, F)
      }, {
        default: (E) => l ? Ve(E, l) : se(E)
      });
    }, le = (t) => {
      b.value = t;
    }, Be = () => n("div", {
      class: s.be("select-modal", "deptpersonel")
    }, [n("div", {
      class: s.bem("select-modal", "deptpersonel", "dept")
    }, [n("div", {
      class: "collpase-icon"
    }, [b.value ? n("i", {
      class: "fa fa-angle-right",
      "aria-hidden": "true",
      onClick: () => le(!1)
    }, null) : n("i", {
      class: "fa fa-angle-down",
      "aria-hidden": "true",
      onClick: () => le(!0)
    }, null)]), n("img", {
      src: "".concat(V.dir("assets/images/svg/org.svg"))
    }, null), n("span", null, ["".concat(e.context.srfusername, "的团队")]), n("span", null, [O("·")]), n("span", null, [e.depttotal])]), b.value ? null : n("div", {
      class: s.bem("select-modal", "deptpersonel", "dept-person")
    }, [ie(o.value)])]), _e = () => nt(n("div", {
      class: s.b("select-modal"),
      onPointerdown: k,
      onPointerup: k,
      onClick: k
    }, [Te(), De(), v.value === "user" ? ie(u.value) : Be()]), [[ot("loading"), P.value]]), re = () => n("div", {
      class: [s.b("no-select-value"), s.is("readonly", r.readonly || r.disabled)]
    }, [n("img", {
      src: "".concat(V.dir("assets/images/svg/member.svg")),
      alt: ""
    }, null), n("span", null, [O("未设置")])]), ne = () => {
      var a;
      const t = e.isShowNameTip();
      if (e.multiple) {
        let i = !1;
        const l = [];
        if (h.value) {
          let c = h.value.split(e.separator), y = A.value.split(e.separator);
          e.isAddSymbol && (c = c.map((E) => E.slice(1, -1))), e.isAddSymbol && (y = y.map((E) => E.slice(1, -1))), c.forEach((E, F) => {
            l.push({
              id: E,
              name: y[F]
            });
          });
        } else
          A.value === "当前用户" && r.disabled && l.push({
            id: A.value,
            name: A.value
          });
        return e.defaultAttentionValue && e.valueType === "OBJECTS" && j > 0 && (i = j < ((a = f.value) == null ? void 0 : a.length), l == null || l.splice(j, l == null ? void 0 : l.length)), n("div", {
          class: [s.b("select-value-multiple"), s.is("readonly", r.readonly || r.disabled), i ? s.be("select-value-multiple", "hidden") : ""]
        }, [l == null ? void 0 : l.map((c) => {
          let y;
          return n("div", {
            class: s.be("select-value-multiple", "item"),
            title: t ? c.name : ""
          }, [n("div", {
            class: [s.be("select-value", "textimg"), s.bem("select-value-multiple", "item", "textimg")],
            style: "background-color:".concat(B(c.name))
          }, [n(C("el-tooltip"), {
            class: "box-item",
            effect: "dark",
            content: c.name,
            placement: "top",
            offset: 12
          }, vt(y = _(c.id, c.name)) ? y : {
            default: () => [y]
          }), r.readonly || r.disabled ? null : n("div", {
            class: [s.bem("select-value-multiple", "item", "close")],
            onClick: (E) => Se(c, E)
          }, [n("i", {
            class: "fa fa-close",
            "aria-hidden": "true"
          }, null)])])]);
        }), i ? n("span", {
          class: s.bem("select-value-multiple", "hidden", "ellipsis")
        }, [O("...")]) : null, n("div", {
          class: s.b("no-select-value")
        }, [n("img", {
          src: "".concat(V.dir("assets/images/svg/member.svg")),
          alt: ""
        }, null)])]);
      }
      return n("div", {
        class: [s.b("select-value"), s.is("readonly", r.readonly || r.disabled)],
        title: t ? A.value : ""
      }, [n("div", {
        class: s.be("select-value", "textimg"),
        style: "background-color:".concat(B(A.value))
      }, [_(h.value, A.value)]), n("div", {
        class: s.be("select-value", "text")
      }, [n("div", {
        class: s.bem("select-value", "text", "label")
      }, [A.value])]), r.readonly || r.disabled ? null : n("i", {
        class: ["fa fa-times-circle", s.be("select-value", "close")],
        "aria-hidden": "true",
        onClick: (i) => ee(i)
      }, null)]);
    }, He = async () => {
      var c, y;
      x.value = !0, p("focus");
      const {
        context: t,
        params: a
      } = e.handlePublicParams(r.data, e.context, e.params), i = e.fill(e.userUrl, t, a, r.data).replaceAll("//", "/"), l = e.fill(e.deptUrl, t, a, r.data).replaceAll("//", "/");
      (i !== e.copyUserUrl || l !== e.copyDeptUrl || r.data && r.data.srfkey !== Z.value) && (Z.value = ((c = r.data) == null ? void 0 : c.srfkey) || "", u.value = [], o.value = [], e.resetState(), T(!0)), await ut(), (y = K.value) == null || y.focus();
    }, Je = () => A.value ? ne() : re(), We = () => {
      x.value = !1;
    };
    w(() => r.readonly, (t) => {
      t && q();
    }, {
      deep: !0
    });
    const oe = () => {
      z();
    };
    return he(() => {
      ve(), window == null || window.addEventListener("resize", oe), z();
    }), rt(() => {
      e.resetState(), window == null || window.removeEventListener("resize", oe);
    }), {
      ns: s,
      c: e,
      refValue: h,
      curValue: m,
      valueText: A,
      loading: P,
      items: u,
      personelSelRef: G,
      onClear: ee,
      load: T,
      isEditable: g,
      popoverRef: U,
      setEditable: Q,
      renderDropModal: _e,
      renderNoSelectValue: re,
      renderSelectInput: ne,
      renderReadState: Je,
      onPopShow: He,
      onPageHide: We,
      handleClick: Me,
      showFormDefaultContent: me,
      modelVisible: D
    };
  },
  render() {
    const r = n(C("el-popover"), {
      ref: "popoverRef",
      visible: this.modelVisible,
      "onUpdate:visible": (p) => this.modelVisible = p,
      trigger: "click",
      popperClass: this.ns.b("person-select"),
      width: 320,
      teleported: !0,
      onShow: () => this.onPopShow(),
      onHide: () => this.onPageHide()
    }, {
      reference: () => this.renderReadState(),
      default: () => this.renderDropModal()
    });
    return n("div", {
      ref: "personelSelRef",
      class: [this.ns.b(), this.ns.b("person-value"), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.c.isShowNameText() ? "" : this.ns.m("only-icon"), this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent)],
      onClick: this.handleClick
    }, [this.readonly || this.disabled ? this.renderReadState() : r]);
  }
}), gt = Qe(
  W,
  function(r) {
    r.component(W.name, W), it(
      "EDITOR_CUSTOMSTYLE_PERSON_SELECT",
      () => new ht()
    );
  }
), Ft = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(gt);
  }
};
export {
  gt as IBizPersonelSelect,
  Ft as default
};
