import './style.css';
var at = Object.defineProperty;
var st = (r, h, s) => h in r ? at(r, h, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[h] = s;
var p = (r, h, s) => (st(r, typeof h != "symbol" ? h + "" : h, s), s);
import { useNamespace as te, getDataPickerProps as it, getEditorEmits as lt, renderString as nt, withInstall as rt } from "@ibiz-template/vue3-util";
import { EditorController as ot, getDeACMode as ct, UIActionUtil as ut, OpenAppViewCommand as be, registerEditorProvider as dt } from "@ibiz-template/runtime";
import { RuntimeModelError as q } from "@ibiz-template/core";
import { mergeDeepLeft as pt, clone as ee } from "ramda";
import { notNilEmpty as J } from "qx-util";
import { defineComponent as ae, ref as b, onMounted as Me, watch as R, createVNode as l, computed as D, onUnmounted as ht, resolveComponent as P, onBeforeUnmount as mt, withDirectives as ft, resolveDirective as vt, createTextVNode as k, nextTick as gt, isVNode as bt } from "vue";
import { isArray as Mt } from "lodash-es";
class we extends ot {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
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
    p(this, "multiple", !0);
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
      name: "name"
    });
    /**
     * 部门人员UI转化
     */
    p(this, "deptFilterMap", {
      id: "id",
      name: "name"
    });
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
     * 值类型
     */
    p(this, "valueType", "OBJECTS");
    /**
     * 代码表的代码标识
     *
     */
    p(this, "codeListId", "");
    /**
     * 代码表值映射
     *
     */
    p(this, "codeListMap");
    /**
     * 关注类型属性
     *
     */
    p(this, "attentionTypeField", "type");
    /**
     * 自填充映射
     */
    p(this, "selfFillMap", {
      user_id: "user_id",
      user_name: "name"
    });
    /**
     * 默认选中项
     *
     */
    p(this, "defaultSelected", "");
    /**
     * 选中后默认关注值
     *
     */
    p(this, "defaultAttentionValue", "");
    /**
     * 启用确认按钮
     */
    p(this, "enableBottomButton", !1);
    /**
     * 额外抛值字段映射
     */
    p(this, "fieldMap", "");
  }
  async onInit() {
    var e, m, o, c, u, M, w;
    if (super.onInit(), this.initParams(), await this.getOperatorUserList(), this.valueItem = ((e = this.model.valueItemName) == null ? void 0 : e.toLowerCase()) || "", this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await ct(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: E, minorSortDir: F } = this.deACMode;
      E && F && (this.sort = "".concat(E.toLowerCase(), ",").concat(F.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (v) => {
          v.id !== "value" && v.id !== "text" && this.dataItems.push(v);
        }
      ));
    }
    const s = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && s.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (o = (m = this.model) == null ? void 0 : m.objectIdField) == null ? void 0 : o.toLowerCase(), this.objectNameField = (u = (c = this.model) == null ? void 0 : c.objectNameField) == null ? void 0 : u.toLowerCase(), this.objectValueField = (w = (M = this.model) == null ? void 0 : M.objectValueField) == null ? void 0 : w.toLowerCase();
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    var s, e, m, o, c, u, M, w, E, F, v, f;
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
    if (this.userUrl = this.editorParams.URL, this.deptUrl = this.editorParams.DEPTURL, this.userMethod = this.editorParams.USERMETHOD || "post", this.deptMethod = this.editorParams.DEPTMETHOD || "post", this.separator = this.editorParams.SEPARATOR || ",", (s = this.editorParams) != null && s.CODELISTID && (this.codeListId = (e = this.editorParams) == null ? void 0 : e.CODELISTID), (m = this.editorParams) != null && m.DEFAULTATNVALUE && (this.defaultAttentionValue = (o = this.editorParams) == null ? void 0 : o.DEFAULTATNVALUE), (c = this.editorParams) != null && c.VALUETYPE && (this.valueType = (u = this.editorParams) == null ? void 0 : u.VALUETYPE), (M = this.editorParams) != null && M.ENABLEBOTTOMBUTTON && (this.enableBottomButton = ((w = this.editorParams) == null ? void 0 : w.ENABLEBOTTOMBUTTON) === "true"), (E = this.editorParams) != null && E.FIELDMAP && (this.fieldMap = (F = this.editorParams) == null ? void 0 : F.FIELDMAP), this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "CODELISTMAP"))
      try {
        const y = JSON.parse((v = this.editorParams) == null ? void 0 : v.CODELISTMAP);
        Object.assign(this.codeListMap, y);
      } catch (y) {
        this.codeListMap = { FOLLOWED: [20, 30, 40], NOTFOLLOWING: [10] };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "SELFFILLMAP"))
      try {
        const y = JSON.parse((f = this.editorParams) == null ? void 0 : f.SELFFILLMAP);
        Object.assign(this.selfFillMap, y);
      } catch (y) {
        this.selfFillMap = {
          user_id: "user_id",
          user_name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "USERMAP"))
      try {
        const y = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, y);
      } catch (y) {
        this.userFilterMap = {
          id: "id",
          name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "DEPTMAP"))
      try {
        const y = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, y);
      } catch (y) {
        this.deptFilterMap = {
          id: "id",
          name: "name"
        };
      }
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
    this.total = 0, this.currentNumber = -1, this.page = 0, this.deptpage = 0, this.depttotal = 0, this.deptcurrentNumber = -1, this.copyDeptUrl = "", this.copyUserUrl = "";
  }
  /**
   * 加载更多
   */
  async loadMore(s, e, m = {}) {
    if (e === "user" && this.currentNumber < this.total) {
      const o = await this.getServiceData(e, s, m);
      if (o)
        return this.page += 1, this.currentNumber < 0 && (this.currentNumber += 1), this.currentNumber += this.size, this.total = o.total ? Number(o.total) : Number(o.headers["x-total"]), o.data.forEach((c) => {
          Object.keys(this.userFilterMap).forEach((u) => {
            c[u] = c[this.userFilterMap[u]];
          });
        }), o;
    } else if (e === "department" && this.deptcurrentNumber < this.depttotal) {
      const o = await this.getServiceData(e, s, m);
      if (o)
        return this.deptpage += 1, this.deptcurrentNumber < 0 && (this.deptcurrentNumber += 1), this.deptcurrentNumber += this.size, this.depttotal = o.total ? Number(o.total) : Number(o.headers["x-total"]), o.data.forEach((c) => {
          Object.keys(this.deptFilterMap).forEach((u) => {
            c[u] = c[this.deptFilterMap[u]];
          });
        }), o;
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
    const o = s.uiactionId;
    await ut.execAndResolved(
      o,
      {
        context: this.context,
        params: this.params,
        data: e,
        view: this.parent.form.ctx.view,
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
  fill(s, e, m, o) {
    if (J(s)) {
      if (J(e)) {
        const c = s.match(this.contextReg);
        c == null || c.forEach((u) => {
          const M = u.slice(10, u.length - 1);
          s = s.replace("${context.".concat(M, "}"), e[M] || "");
        });
      }
      if (J(m)) {
        const c = s.match(this.paramsReg);
        c == null || c.forEach((u) => {
          const M = u.slice(9, u.length - 1);
          s = s.replace("${params.".concat(M, "}"), m[M] || "");
        });
      }
      if (J(o)) {
        const c = s.match(this.dataReg);
        c == null || c.forEach((u) => {
          const M = u.slice(7, u.length - 1);
          s = s.replace("${data.".concat(M, "}"), o[M] || "");
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
    const { context: o, params: c } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), u = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(u, { sort: this.sort }), Object.assign(u, { size: this.size }), m && Object.assign(u, m);
    const M = pt(c, u);
    let w = "";
    const E = this.fill(this.userUrl, o, c, e).replaceAll(
      "//",
      "/"
    ), F = this.fill(this.deptUrl, o, c, e).replaceAll(
      "//",
      "/"
    );
    this.copyUserUrl = E, this.copyDeptUrl = F;
    let v = "post";
    const f = {};
    if (s === "user" ? (w = E, v = this.userMethod.toLowerCase(), Object.assign(f, { method: v, data: M })) : (w = F, v = this.deptMethod.toLowerCase(), Object.assign(f, { method: v, params: M })), w)
      return await ibiz.net.request(w, f);
    throw new q(this.model, "请配置数据接口地址");
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
    const { context: m, params: o } = this.handlePublicParams(
      s,
      this.context,
      this.params
    );
    if (e && (o.selectedData = e), !this.pickupView)
      throw new q(this.model, "请配置数据选择视图");
    const c = await ibiz.commands.execute(
      be.TAG,
      this.pickupView.id,
      m,
      o,
      { openMode: "POPUPMODAL" }
    );
    if (c && c.ok && c.data)
      return c.data;
    ibiz.log.debug("模态取消或关闭异常", c);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(s) {
    const e = this.context.clone();
    s[this.valueItem] && (e.srfkey = s[this.valueItem]);
    const { context: m, params: o } = this.handlePublicParams(
      s,
      e,
      this.params
    ), { linkAppViewId: c } = this.model;
    if (!c)
      throw new q(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      be.TAG,
      c,
      m,
      o
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
        const c = s.map((u) => u[m.appDEFieldId]).join(this.separator);
        return m.format || m.convertToCodeItemText && m.codeListId || m.customCode, { id: m.id, value: c };
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
      [this.objectValueField]: ee(s)
    }), e;
  }
  /**
   * 获取操作用户列表
   *
   * @return {*}  {Promise<void>}
   * @memberof AttentionController
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
   * 动态匹配${}
   *
   * @param {string} str
   * @param {Record<string, IData>} values
   * @return {*}  {string}
   */
  dynamicMatch(s, e) {
    return s.replace(/\${(.*?)}/g, (m, o) => {
      const [c, u] = o.split("."), M = e[c];
      return M && M[u] || "";
    });
  }
}
class wt {
  constructor() {
    p(this, "component", "IBizAttention");
    p(this, "formEditor", "IBizAttention");
    p(this, "gridEditor", "IBizAttention");
  }
  async createController(h, s) {
    const e = new we(h, s);
    return await e.init(), e;
  }
}
const Et = /* @__PURE__ */ ae({
  name: "VirtualList",
  props: {
    items: {
      //  数据源
      type: Array,
      default: () => []
    },
    itemHeight: {
      //  每行高度
      type: Number,
      default: 36
    },
    showNum: {
      //  可视数量
      type: Number,
      default: 20
    }
  },
  emits: ["scrollEvent"],
  setup(r, {
    emit: h
  }) {
    const s = te("virtual-list-box"), e = b(36), m = b(), o = b([]), c = b(0), u = b(0), M = b(0), w = b(0), E = (f, y) => {
      h("scrollEvent", f, y);
    }, F = () => {
      u.value = Math.floor(w.value / r.itemHeight), M.value = u.value + r.showNum, o.value = r.items.slice(u.value, M.value);
      const f = w.value - w.value % r.itemHeight;
      c.value = f;
    }, v = () => {
      w.value = m.value.scrollTop, F(), E(e.value, w.value);
    };
    return Me(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), R(() => r.items, () => {
      e.value = r.itemHeight * r.items.length, F();
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: s,
      contentHeight: e,
      showList: o,
      contentBox: m,
      top: c,
      onScroll: v
    };
  },
  render() {
    return l("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [l("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [l("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((r, h) => l("div", {
      key: h,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...r,
      index: h
    }) : r.name]))])])]);
  }
});
const yt = /* @__PURE__ */ ae({
  name: "IBizFollow",
  props: {
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    value: {
      type: String
    },
    codeListId: {
      type: String
    },
    codeListMap: {
      type: Object
    },
    controller: {
      type: we,
      required: !0
    },
    defaultSelected: {
      type: String
    }
  },
  emits: {
    /** 值变更事件 */
    change: (r, h) => !0,
    /** 失焦事件 */
    blur: (r) => !0,
    /** 聚焦事件 */
    focus: (r) => !0,
    /** 回车事件 */
    enter: (r) => !0,
    /** 信息文本变更事件 */
    infoTextChange: (r) => !0
  },
  setup(r, {
    emit: h
  }) {
    const s = te("follow"), e = r.controller, m = b(), o = b(!1), c = b(!1), u = b(), M = b(!1), w = b(!1), E = b(null), F = b(!1), v = b([]), f = D(() => r.codeListMap || {}), y = D(() => ({})), S = async () => {
      if (M.value = !0, r.codeListId) {
        const C = await ibiz.hub.getApp(e.context.srfappid).codeList.get(r.codeListId, e.context, e.params);
        C && C.length > 0 && (v.value = C), o.value = !0;
      }
      M.value = !1;
    }, N = (g) => {
      var O, A;
      E.value = g, ((A = (O = f.value) == null ? void 0 : O.FOLLOWED) == null ? void 0 : A.find((j) => String(j) === String(g))) ? w.value = !0 : w.value = !1;
    };
    R(
      () => r.value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (g, C) => {
        var A;
        let O = g;
        !g && r.codeListMap && (O = ((A = f.value) == null ? void 0 : A.NOTFOLLOWING[0]) || ""), N(O);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const T = (g) => {
      g ? c.value = g : setTimeout(() => {
        c.value = g;
      }, 100);
    }, B = D({
      get() {
        var g;
        return (g = r.value) == null ? void 0 : g.toString();
      },
      set(g) {
        h("change", g), T(!1);
      }
    }), x = D(() => {
      const g = Array.isArray(B.value) ? B.value : [B.value], C = v.value, O = [];
      return g.forEach((A) => {
        C.forEach((j) => {
          j.value === A && O.push(j.text);
        });
      }), O.join(",");
    });
    R(x, (g, C) => {
      g !== C && h("infoTextChange", g);
    }, {
      immediate: !0
    });
    const W = (g) => v.value.find((O) => O.text === g), z = async (g) => {
      F.value = g, g && !o.value && await S();
    }, _ = (g) => {
      E.value = g.value, N(g.value), h("change", g.value);
    }, $ = (g) => {
      var C;
      (g.key === "Escape" || g.keyCode === 27) && (g.stopPropagation(), (C = m.value) == null || C.handleClose());
    };
    return ht(() => {
    }), {
      ns: s,
      curValue: B,
      items: v,
      valueText: x,
      editorRef: u,
      cssVars: y,
      isEditable: c,
      isLoading: M,
      followState: w,
      selectd: E,
      showState: F,
      dropdownRef: m,
      setEditable: T,
      getCodeListItem: W,
      onShowChange: z,
      onItemClick: _,
      handleKeyDown: $
    };
  },
  render() {
    const r = l("div", {
      class: [this.ns.e("showcase"), this.showState ? "is-active" : ""]
    }, [l("span", {
      class: this.ns.em("showcase", "icon")
    }, [l("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      focusable: "false"
    }, [l("g", {
      id: "follow/with/interest",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [l("path", {
      d: "M8 3.4c2.823 0 5.04 1.367 7.38 3.637a2.037 2.037 0 0 1 0 2.925C13.04 12.232 10.824 13.6 8 13.6c-2.823 0-5.032-1.364-7.376-3.637a2.037 2.037 0 0 1 0-2.925C2.967 4.764 5.176 3.4 8 3.4zm0 1.2c-2.417 0-4.405 1.228-6.542 3.3a.837.837 0 0 0 0 1.2C3.596 11.173 5.584 12.4 8 12.4s4.413-1.231 6.546-3.3a.837.837 0 0 0 0-1.2C12.412 5.83 10.415 4.6 8 4.6zM8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z",
      id: "attention"
    }, null)])])]), l("span", {
      class: this.ns.em("showcase", "text")
    }, [this.followState ? "已关注" : "未关注"])]), h = l(P("el-dropdown"), {
      "popper-class": this.ns.b("popover"),
      ref: (s) => {
        this.dropdownRef = s;
      },
      trigger: "click",
      placement: "top-start",
      onVisibleChange: this.onShowChange,
      onKeydown: (s) => {
        this.handleKeyDown(s);
      }
    }, {
      default: () => r,
      dropdown: () => l(P("el-dropdown-menu"), {
        class: this.ns.be("popper", "dropdown-menu")
      }, {
        default: () => this.items.map((s, e) => l(P("el-dropdown-item"), {
          onClick: () => this.onItemClick(s)
        }, {
          default: () => [l("div", {
            class: [this.ns.b("content"), String(this.selectd) === String(s.value) ? "is-active" : ""]
          }, [l("div", {
            class: this.ns.em("item", "text")
          }, [s.text]), l("div", {
            class: this.ns.em("item", "tooltip")
          }, [s.tooltip])]), e === this.items.length - 1 ? null : l("div", {
            class: this.ns.em("item", "divider")
          }, [l(P("el-divider"), null, null)])]
        }))
      })
    });
    return l("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable)],
      style: this.cssVars
    }, [this.readonly ? r : h]);
  }
});
class Ft {
  /**
   * 计算选中项绘制个数 多选场景需计算显示人员是否超出
   * @author ljx
   * @date 2024-03-05 02:42:45
   * @param {IData} values 选中项key值集合
   * @returns {number} selRenderNum
   */
  static calcSelItemRenderNum(h, s) {
    let e = 0;
    if (s && (h == null ? void 0 : h.length) > 0) {
      const m = (s == null ? void 0 : s.offsetWidth) || 0, o = window.getComputedStyle(s), c = parseInt(o.marginLeft, 10), u = parseInt(o.marginRight, 10), M = parseInt(o.paddingLeft, 10), w = parseInt(o.paddingRight, 10), E = c + u + M + w, F = 70, v = 33, f = 28, y = 8, S = (f + y) * h.length;
      m - E - F - v - S < 0 && (e = Math.floor(
        (m - E - F - v) / (f + y)
      ), e -= 1);
    }
    return e;
  }
}
function X(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !bt(r);
}
const Q = /* @__PURE__ */ ae({
  name: "IBizAttention",
  props: it(),
  emits: lt(),
  setup(r, {
    emit: h
  }) {
    const s = te("attention"), e = r.controller, m = b(""), o = b([]), c = b([]), u = b(""), M = b(!1), w = b(!1), E = b(""), F = b([]), v = b("user"), f = b([]), y = b([]), S = b(!1), N = b(!1), T = b(!1), B = b(""), x = b(!1), W = b(), z = b(), _ = b(""), $ = b();
    let g = 0;
    const C = D(() => r == null ? void 0 : r.readonly), O = D(() => !!(r.controlParams && r.controlParams.editmode === "hover")), A = D(() => nt(m.value)), j = (t) => {
      t.preventDefault(), t.stopPropagation();
    }, K = () => {
      var i;
      const t = [], a = [];
      _.value = "", ((i = f.value) == null ? void 0 : i.length) > 0 && f.value.forEach((n) => {
        t.push(n[e.selfFillMap.user_id]), a.push(n[e.selfFillMap.user_name]), n[e.selfFillMap.user_id] === e.context.srfuserid && (_.value = n[e.attentionTypeField]);
      }), u.value = t == null ? void 0 : t.toString(), m.value = a == null ? void 0 : a.toString();
    }, Ee = (t) => {
      var a, i;
      return (i = (a = e.codeListMap) == null ? void 0 : a.FOLLOWED) == null ? void 0 : i.some((n) => String(n) === String(t));
    }, Z = () => {
      const t = u.value.split(e.separator);
      g = Ft.calcSelItemRenderNum(t, z.value), u.value = "", K();
    }, se = (t) => {
      if (t) {
        const a = Mt(t) ? t : [];
        f.value = [], a.forEach((i) => {
          const n = ee(i);
          e.selfFillMap.user_id && e.selfFillMap.user_name && Object.assign(n, {
            id: i[e.selfFillMap.user_id],
            name: i[e.selfFillMap.user_name],
            [e.attentionTypeField]: i[e.attentionTypeField]
          }), e.objectValueField && (Object.assign(n, {
            ...i[e.objectValueField]
          }), delete n[e.objectValueField]), f.value.push(n);
        });
      } else
        f.value = [];
      y.value = ee(f.value);
    };
    R(() => r.value, (t) => {
      t ? e.valueType === "OBJECT" ? m.value = t ? t[e.objectNameField] : null : e.valueType === "OBJECTS" ? (se(t), K()) : m.value = t : (m.value = "", f.value = []), Z();
    }, {
      immediate: !0
    });
    const ye = D(() => r.data && r.data[e.valueItem] || void 0);
    R(ye, (t, a) => {
      t !== a && (u.value = t, t === null && (f.value = [], h("change", null)));
    }, {
      immediate: !0,
      deep: !0
    });
    const ie = (t) => {
      t ? w.value = t : setTimeout(() => {
        w.value = t;
      }, 100);
    }, Fe = (t) => {
      const a = {}, i = y.value.find((n) => n.id === t.id) || {};
      try {
        const n = e.dynamicMatch(e.fieldMap, {
          item: {
            ...i,
            ...t
          }
        }), d = JSON.parse(n);
        Object.keys(d).forEach((I) => {
          d[I] && Object.assign(a, {
            [I]: d[I]
          });
        });
      } catch (n) {
        ibiz.log.debug("".concat(e.fieldMap, "额外抛值字段映射"));
      }
      return a;
    }, H = () => {
      if (e.enableBottomButton && !x.value)
        return;
      const t = f.value.map((a) => {
        const i = {};
        return Object.assign(i, {
          [e.selfFillMap.user_id]: a.id,
          [e.selfFillMap.user_name]: a.name,
          [e.attentionTypeField]: a[e.attentionTypeField]
        }), e.fieldMap && Object.assign(i, Fe(a)), i;
      });
      h("change", t);
    }, Ie = (t, a) => {
      j(a);
      const i = f.value.findIndex((n) => n.id === t.id);
      if (i > -1 && f.value.splice(i, 1), e.valueItem) {
        const n = f.value.map((d) => d.id);
        h("change", n.join(e.separator), e.valueItem);
      }
      if (e.valueType === "OBJECTS")
        x.value = !0, H(), x.value = !1;
      else {
        const n = f.value.map((d) => d.name);
        h("change", n.join(e.separator));
      }
    }, Ae = async (t) => {
      E.value && (v.value === "user" ? o.value.unshift(t) : c.value.unshift(t));
      const a = {};
      if (Object.assign(a, t), v.value === "user") {
        Object.assign(a, {
          [e.userFilterMap.id]: a[e.userFilterMap.id] ? a[e.userFilterMap.id] : a.srfkey,
          [e.userFilterMap.name]: a[e.userFilterMap.name] ? a[e.userFilterMap.name] : a.srfmajortext
        });
        const i = f.value.findIndex((n) => n.id === a[e.userFilterMap.id]);
        i < 0 ? f.value.push({
          ...a,
          id: a[e.userFilterMap.id],
          name: a[e.userFilterMap.name],
          [e.attentionTypeField]: e.defaultAttentionValue
        }) : f.value.splice(i, 1);
      } else {
        Object.assign(a, {
          [e.deptFilterMap.id]: a[e.deptFilterMap.id] ? a[e.deptFilterMap.id] : a.srfkey,
          [e.deptFilterMap.name]: a[e.deptFilterMap.name] ? a[e.deptFilterMap.name] : a.srfmajortext
        });
        const i = f.value.findIndex((n) => n.id === a[e.deptFilterMap.id]);
        i < 0 ? f.value.push({
          ...a,
          id: a[e.deptFilterMap.id],
          name: a[e.deptFilterMap.name],
          [e.attentionTypeField]: e.defaultAttentionValue
        }) : f.value.splice(i, 1);
      }
      if (e.multiple) {
        if (e.valueItem) {
          const n = f.value.map((d) => d.id);
          h("change", n.join(e.separator), e.valueItem);
        }
        const i = f.value.map((n) => n.name);
        e.valueType === "OBJECTS" ? H() : h("change", i.join(e.separator));
      } else {
        const i = await e.calcFillDataItems([t]);
        if (i.length && i.forEach((n) => {
          h("change", n.value, n.id);
        }), e.valueItem && (v.value === "user" ? h("change", a[e.userFilterMap.id], e.valueItem) : h("change", a[e.deptFilterMap.id], e.valueItem)), e.valueType === "OBJECT")
          h("change", e.handleObjectParams(a));
        else if (e.valueType === "OBJECTS") {
          const n = {};
          v.value === "user" ? Object.assign(n, {
            id: a[e.userFilterMap.id],
            name: a[e.userFilterMap.name]
          }) : Object.assign(n, {
            id: a[e.deptFilterMap.id],
            name: a[e.deptFilterMap.name]
          }), f.value = [n], H();
        } else
          v.value === "user" ? h("change", t[e.userFilterMap.name]) : h("change", t[e.deptFilterMap.name]);
        T.value = !1;
      }
      e.valueType !== "OBJECTS" && h("blur", t), ie(!1);
    }, Ce = (t, a) => {
      t.forEach((i) => {
        const n = o.value.findIndex((d) => d[a] === i[a]);
        n > -1 ? o.value.splice(n, 1, i) : o.value.push(i);
      });
    }, V = async (t = !1) => {
      if (E.value)
        return;
      S.value = !0;
      const a = {};
      v.value === "department" ? a.page = e.deptpage : a.page = e.page;
      try {
        const i = await e.loadMore(r.data, v.value, a);
        i && (v.value === "user" ? o.value.length === 0 ? o.value = i.data : Ce(i.data, e.userFilterMap.id) : c.value.length === 0 ? c.value = i.data : c.value.push(...i.data));
      } catch (i) {
        S.value = !1;
      }
      S.value = !1;
    }, le = (t) => {
      const {
        dataItems: a
      } = e;
      a != null && a.length && a.forEach((i) => {
        h("change", null, i.id);
      }), e.valueItem && h("change", null, e.valueItem), e.valueType === "OBJECTS" ? h("change", []) : (h("change", null), h("blur", t)), t.stopPropagation(), t.preventDefault();
    }, Se = (t) => {
      if (!e.codeListMap)
        return;
      if (Ee(String(t))) {
        const i = f.value.find((n) => {
          var d;
          return n[e.selfFillMap.user_id] === ((d = e.context) == null ? void 0 : d.srfuserid);
        });
        if (i)
          Object.assign(i, {
            [e.attentionTypeField]: t
          });
        else {
          const n = {
            id: e.context.srfuserid,
            name: e.context.srfusername,
            [e.attentionTypeField]: t
          };
          f.value.push(n);
        }
      } else {
        const i = f.value.findIndex((n) => {
          var d;
          return n[e.selfFillMap.user_id] === ((d = e.context) == null ? void 0 : d.srfuserid);
        });
        i > -1 && f.value.splice(i, 1);
      }
      K(), H();
    };
    R(A, (t, a) => {
      t !== a && e.valueType !== "OBJECTS" && h("infoTextChange", t);
    }, {
      immediate: !0
    });
    const ne = async (t) => {
      S.value = !0;
      try {
        const a = {};
        Object.assign(a, {
          query: t,
          size: 1e3
        });
        const i = await e.getServiceData(v.value, r.data, a);
        i && (v.value === "user" ? i.data.forEach((n) => {
          Object.keys(e.userFilterMap).forEach((d) => {
            n[d] = n[e.userFilterMap[d]];
          });
        }) : i.data.forEach((n) => {
          Object.keys(e.deptFilterMap).forEach((d) => {
            n[d] = n[e.deptFilterMap[d]];
          });
        }), F.value = i.data, S.value = !1);
      } catch (a) {
        S.value = !1;
      }
    }, re = (t) => {
      if (v.value !== t) {
        if (v.value = t, E.value) {
          ne(E.value);
          return;
        }
        v.value === "user" && o.value.length === 0 && V(), v.value === "department" && c.value.length === 0 && V();
      }
    }, Pe = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Oe = (t) => /[\u4E00-\u9FA5]/.test(t), Le = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), Y = (t) => {
      if (!t)
        return "";
      let a = 0;
      for (let U = 0; U < t.length; U++)
        if (Oe(t))
          a = t.charCodeAt(U) + ((a << 5) - a), a = a & a;
        else {
          const tt = t.charCodeAt(U);
          a += tt.toString(16);
        }
      const i = String(a).substring(0, 6);
      let n = parseInt(i.substring(0, 2), 16), d = parseInt(i.substring(2, 4), 16), I = parseInt(i.substring(4, 6), 16);
      n < 0 && (n = 10), d < 0 && (d = 10), I < 0 && (I = 10);
      const L = "#".concat(n.toString(16).padStart(2, "0")).concat(d.toString(16).padStart(2, "0")).concat(I.toString(16).padStart(2, "0"));
      return L === "#FFFFFF" && Pe() || L;
    }, Te = (t) => {
      clearTimeout($.value), $.value = setTimeout(() => {
        !t && t !== 0 ? V() : ne(t), clearTimeout($.value);
      }, 300);
    }, xe = (t) => {
      t.forEach((a) => {
        if (a.capLanguageRes && a.capLanguageRes.lanResTag) {
          const i = ibiz.i18n.t(a.capLanguageRes.lanResTag, a.caption);
          Object.assign(a, {
            caption: i
          });
        }
        if (a.tooltipLanguageRes && a.tooltipLanguageRes.lanResTag) {
          const i = ibiz.i18n.t(a.tooltipLanguageRes.lanResTag, a.tooltip);
          Object.assign(a, {
            caption: i
          });
        }
      });
    }, je = async (t, a) => {
      await e.onActionClick(t, [r.data], a);
    }, De = (t) => E.value ? F.value : t, oe = () => {
      N.value = !1;
    }, Ne = () => {
      x.value = !1, T.value = !1, setTimeout(() => {
        se(r.value);
      }, 200);
    }, Be = () => {
      x.value = !0, T.value = !1, H(), x.value = !1;
    }, Ve = () => l(P("el-input"), {
      class: s.be("select-modal", "search-input"),
      ref: W,
      modelValue: E.value,
      "onUpdate:modelValue": (t) => E.value = t,
      placeholder: "搜索",
      onInput: (t) => Te(t)
    }, {
      suffix: () => l("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [l("g", {
        id: "atwnormal/search",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [l("path", {
        d: "M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0",
        id: "atwFill-1"
      }, null)])])
    }), ke = () => l("div", {
      class: s.be("select-modal", "select-state")
    }, [l("div", {
      class: [s.bem("select-modal", "select-state", "select-slider"), s.is("left", v.value === "user"), s.is("right", v.value !== "user")]
    }, null), l("div", {
      class: s.bem("select-modal", "select-state", "select-personel"),
      onClick: () => re("user")
    }, [k("人员")]), l("div", {
      class: s.bem("select-modal", "select-state", "select-department"),
      onClick: () => re("department")
    }, [k("部门")])]), ze = (t) => l("div", {
      class: s.bem("select-modal", "actions", "item"),
      title: t.tooltip,
      onClick: (a) => je(t, a)
    }, [t.showIcon && t.sysImage && l(P("iBizIcon"), {
      icon: t.sysImage
    }, null)]), Ue = () => {
      var a;
      const t = ((a = e.model.uiactionGroup) == null ? void 0 : a.uiactionGroupDetails) || [];
      return xe(t), l("div", {
        class: s.be("select-modal", "actions")
      }, [t.map((i) => ze(i))]);
    }, Re = () => l("div", {
      class: s.be("select-modal", "select")
    }, [ke(), Ue()]), _e = (t) => {
      if (e.multiple) {
        let a = -1;
        return u.value && (a = u.value.split(e.separator).findIndex((n) => n === t)), e.enableBottomButton && (a = f.value.findIndex((i) => (v.value === "user" ? i[e.userFilterMap.id] : i[e.deptFilterMap.id]) === t)), a > -1 ? l("div", {
          class: s.bem("select-modal", "personel-list", "icon")
        }, [l("i", {
          class: "fa fa-check",
          "aria-hidden": "true"
        }, null)]) : null;
      }
      return u.value === t ? l("div", {
        class: s.bem("select-modal", "personel-list", "icon")
      }, [l("i", {
        class: "fa fa-check",
        "aria-hidden": "true"
      }, null)]) : null;
    }, $e = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if (Le(t)) {
          const d = t.split("").find((L) => /[a-zA-Z]/.test(L)) || "", I = t.split("").find((L) => /[\u4E00-\u9FA5]/.test(L)) || "";
          return "".concat(d).concat(I).toLowerCase();
        }
        return /[a-zA-Z]/.test(t) ? t.split("").filter((d) => /[a-zA-Z]/.test(d)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((d) => /[\u4E00-\u9FA5]/.test(d)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
      }
    }, He = (t) => {
      if (!t)
        return null;
      const a = JSON.parse(t);
      if (a.length === 0)
        return null;
      const {
        downloadUrl: i
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, r.data, e.editorParams), n = i.replace("%fileId%", a[0].id);
      return l("img", {
        class: s.bem("select-modal", "personel-list", "avatar"),
        src: n,
        alt: ""
      }, null);
    }, G = (t, a) => e.operatorMap && e.operatorMap.get(t) && e.operatorMap.get(t).data.iconurl ? He(e.operatorMap.get(t).data.iconurl) : $e(a), ce = (t) => {
      const a = v.value === "user" ? t[e.userFilterMap.name] || t.name : t[e.deptFilterMap.name] || t.name, i = v.value === "user" ? t[e.userFilterMap.id] : t[e.deptFilterMap.id];
      return l("div", {
        class: [s.bem("select-modal", "personel-list", "item"), s.is("selected", u.value === i)],
        onClick: () => Ae(t)
      }, [l("div", {
        class: s.bem("select-modal", "personel-list", "text")
      }, [l("div", {
        class: s.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(Y(a))
      }, [G(i, a)]), l("div", {
        class: s.bem("select-modal", "personel-list", "text-label")
      }, [a]), i === e.context.srfuserid ? l("div", {
        class: s.bem("select-modal", "personel-list", "myself")
      }, [k("我自己")]) : null]), _e(i)]);
    }, We = (t, a) => {
      const {
        context: i,
        params: n
      } = e;
      return l(P("iBizControlShell"), {
        class: s.b("panel-item"),
        data: t,
        modelData: a,
        context: i,
        params: n
      }, null);
    }, Je = (t, a) => l(P("el-popover"), {
      target: "hover",
      placement: "right",
      offset: 24,
      width: "auto"
    }, {
      reference: () => ce(t),
      default: () => We(t, a)
    }), Ke = (t, a) => {
      N.value && (v.value === "user" ? t - a < 305 && (S.value || V()) : t - a < 265 && (S.value || V()));
    }, ue = (t) => {
      var n;
      const a = De(t), i = (n = e.deACMode) == null ? void 0 : n.itemLayoutPanel;
      return l(Et, {
        items: a,
        itemHeight: 36,
        class: [s.be("select-modal", "personel-list"), s.be("select-modal", "personel-list-".concat(v.value))],
        onScrollEvent: (d, I) => Ke(d, I)
      }, {
        default: (d) => i ? Je(d, i) : ce(d)
      });
    }, de = (t) => {
      M.value = t;
    }, Ze = () => l("div", {
      class: s.be("select-modal", "deptpersonel")
    }, [l("div", {
      class: s.bem("select-modal", "deptpersonel", "dept")
    }, [l("div", {
      class: "collpase-icon"
    }, [M.value ? l("i", {
      class: "fa fa-angle-right",
      "aria-hidden": "true",
      onClick: () => de(!1)
    }, null) : l("i", {
      class: "fa fa-angle-down",
      "aria-hidden": "true",
      onClick: () => de(!0)
    }, null)]), l("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [l("g", {
      id: "aqf1.Base基础/1.icon图标/2.normal/部门",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [l("path", {
      d: "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z",
      id: "aqf形状结合"
    }, null)])]), l("span", null, ["".concat(e.context.srfusername, "的团队")]), l("span", null, [k("·")]), l("span", null, [e.depttotal])]), M.value ? null : l("div", {
      class: s.bem("select-modal", "deptpersonel", "dept-person")
    }, [ue(c.value)])]), Ye = () => {
      let t, a;
      return l("div", {
        class: s.be("select-modal", "bottom")
      }, [l(P("el-button"), {
        type: "text",
        onClick: Ne
      }, X(t = ibiz.i18n.t("app.cancel")) ? t : {
        default: () => [t]
      }), l(P("el-button"), {
        onClick: Be
      }, X(a = ibiz.i18n.t("app.confirm")) ? a : {
        default: () => [a]
      })]);
    }, pe = () => ft(l("div", {
      class: s.b("select-modal"),
      onPointerdown: j,
      onPointerup: j,
      onClick: j
    }, [Ve(), Re(), v.value === "user" ? ue(o.value) : Ze(), e.enableBottomButton && Ye()]), [[vt("loading"), S.value]]), he = () => l("div", {
      class: s.b("no-select-value")
    }, [l("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [l("g", {
      id: "azeaction/user-add",
      "stroke-width": "1"
    }, [l("path", {
      d: "M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z",
      id: "aze形状结合"
    }, null)])]), l("span", null, [k("未设置")])]), Ge = () => l("div", {
      class: s.b("no-select-value")
    }, [l("span", null, [k("未设置")])]), me = () => {
      var t, a;
      if (e.multiple) {
        const i = [];
        if (u.value) {
          const d = u.value.split(e.separator), I = A.value.split(e.separator);
          d.forEach((L, U) => {
            i.push({
              id: L,
              name: I[U]
            });
          });
        }
        let n = !1;
        return g > 0 && (n = e.enableBottomButton ? g < ((t = y.value) == null ? void 0 : t.length) : g < ((a = f.value) == null ? void 0 : a.length), i == null || i.splice(g, i == null ? void 0 : i.length)), l("div", {
          class: [s.b("select-value-multiple"), s.is("hidden", n)]
        }, [i == null ? void 0 : i.map((d) => {
          let I;
          return l("div", {
            class: s.be("select-value-multiple", "item")
          }, [l("div", {
            class: [s.be("select-value", "textimg"), s.bem("select-value-multiple", "item", "textimg")],
            style: "background-color:".concat(Y(d.name))
          }, [l(P("el-tooltip"), {
            class: "box-item",
            effect: "dark",
            content: d.name,
            placement: "top",
            offset: 12
          }, X(I = G(d.id, d.name)) ? I : {
            default: () => [I]
          }), r.readonly ? null : l("div", {
            class: [s.bem("select-value-multiple", "item", "close")],
            onClick: (L) => Ie(d, L)
          }, [l("i", {
            class: "fa fa-close",
            "aria-hidden": "true"
          }, null)])])]);
        }), n ? l(P("el-tooltip"), {
          class: s.b("multiple-ellipsis"),
          "popper-class": s.be("multiple-ellipsis", "popper"),
          effect: "dark",
          content: A.value,
          placement: "top",
          offset: 12
        }, {
          default: () => [l("span", {
            class: s.be("multiple-ellipsis", "default")
          }, [k("...")])]
        }) : null]);
      }
    }, fe = () => e.multiple ? l("div", {
      class: s.b("select-value-multiple")
    }, [l("div", {
      class: s.b("select-value"),
      title: "选择人员"
    }, [l("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [l("g", {
      id: "azeaction/user-add",
      "stroke-width": "1"
    }, [l("path", {
      d: "M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z",
      id: "aze形状结合"
    }, null)])])])]) : l("div", {
      class: s.b("select-value")
    }, [l("div", {
      class: s.be("select-value", "textimg"),
      style: "background-color:".concat(Y(A.value))
    }, [G(u.value, A.value)]), l("div", {
      class: s.be("select-value", "text")
    }, [l("div", {
      class: s.bem("select-value", "text", "label")
    }, [A.value])]), r.readonly ? null : l("i", {
      class: ["fa fa-times-circle", s.be("select-value", "close")],
      "aria-hidden": "true",
      onClick: (t) => le(t)
    }, null)]), ve = async () => {
      var d, I;
      N.value = !0;
      const {
        context: t,
        params: a
      } = e.handlePublicParams(r.data, e.context, e.params), i = e.fill(e.userUrl, t, a, r.data).replaceAll("//", "/"), n = e.fill(e.deptUrl, t, a, r.data).replaceAll("//", "/");
      (i !== e.copyUserUrl || n !== e.copyDeptUrl || r.data && r.data.srfkey !== B.value) && (B.value = ((d = r.data) == null ? void 0 : d.srfkey) || "", o.value = [], c.value = [], e.resetState(), V(!0)), await gt(), (I = W.value) == null || I.focus();
    }, qe = () => A.value ? fe() : he(), Xe = () => A.value ? [me()] : Ge(), Qe = () => l(P("el-popover"), {
      ref: "popoverRef",
      visible: T.value,
      "onUpdate:visible": (t) => T.value = t,
      trigger: "click",
      popperClass: s.b("person-select"),
      placement: "top-start",
      width: 320,
      teleported: !0,
      onShow: () => ve(),
      onHide: () => oe()
    }, {
      reference: () => qe(),
      default: () => pe()
    }), et = () => [me(), Qe()], ge = () => {
      Z();
    };
    return Me(() => {
      z.value && (window == null || window.addEventListener("resize", ge), Z());
    }), mt(() => {
      e.resetState(), z.value && (window == null || window.removeEventListener("resize", ge));
    }), {
      ns: s,
      c: e,
      refValue: u,
      curValue: m,
      valueText: A,
      loading: S,
      items: o,
      isEditable: w,
      showFormDefaultContent: O,
      modelVisible: T,
      curAttentionValue: _,
      attentionRef: z,
      readonlyState: C,
      onClear: le,
      load: V,
      setEditable: ie,
      renderDropModal: pe,
      renderNoSelectValue: he,
      renderSelectInput: fe,
      onPopShow: ve,
      onPageHide: oe,
      onAttentionChange: Se,
      renderEditContent: et,
      renderReadonlyContent: Xe
    };
  },
  render() {
    return l("div", {
      ref: "attentionRef",
      class: [this.ns.b(), this.ns.b("person-value"), this.disabled ? this.ns.m("disabled") : "", this.readonlyState ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.readonlyState ? this.renderReadonlyContent() : this.renderEditContent(), l(yt, {
      disabled: this.disabled,
      value: this.curAttentionValue,
      codeListId: this.c.codeListId,
      codeListMap: this.c.codeListMap,
      defaultSelected: this.c.defaultSelected,
      controller: this.c,
      onChange: this.onAttentionChange
    }, null)]);
  }
}), It = rt(Q, function(r) {
  r.component(Q.name, Q), dt(
    "EDITOR_CUSTOMSTYLE_ATTENTION",
    () => new wt()
  );
}), jt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(It);
  }
};
export {
  It as IBizAttention,
  jt as default
};
