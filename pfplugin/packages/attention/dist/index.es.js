import './style.css';
var Ze = Object.defineProperty;
var Ye = (r, d, s) => d in r ? Ze(r, d, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[d] = s;
var h = (r, d, s) => (Ye(r, typeof d != "symbol" ? d + "" : d, s), s);
import { useNamespace as X, getDataPickerProps as Ge, getEditorEmits as qe, renderString as Xe, withInstall as Qe } from "@ibiz-template/vue3-util";
import { EditorController as et, getDeACMode as tt, UIActionUtil as at, OpenAppViewCommand as me, registerEditorProvider as st } from "@ibiz-template/runtime";
import { RuntimeModelError as G } from "@ibiz-template/core";
import { mergeDeepLeft as it, clone as fe } from "ramda";
import { notNilEmpty as W } from "qx-util";
import { defineComponent as Q, ref as w, onMounted as ve, watch as R, createVNode as i, computed as O, onUnmounted as lt, resolveComponent as P, onBeforeUnmount as nt, withDirectives as rt, resolveDirective as ot, createTextVNode as k, nextTick as ct, isVNode as ut } from "vue";
import { isArray as dt } from "lodash-es";
class ge extends et {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
     */
    h(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 总数
     */
    h(this, "total", 0);
    /**
     * 当前人员数量
     */
    h(this, "currentNumber", -1);
    /**
     * 人员当前页
     */
    h(this, "page", 0);
    /**
     * 部门人员数据页数
     */
    h(this, "deptpage", 0);
    /**
     * 当前部门人员数量
     */
    h(this, "deptcurrentNumber", -1);
    /**
     * 部门人员总数
     */
    h(this, "depttotal", 0);
    /**
     * 每页数量
     */
    h(this, "size", 20);
    /**
     * 是否多选
     */
    h(this, "multiple", !0);
    /**
     * 多选时拼接的字符串
     */
    h(this, "separator", ",");
    /**
     *选择视图相关参数
     */
    h(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    h(this, "linkView", null);
    /**
     * 人员UI转化
     */
    h(this, "userFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     * 部门人员UI转化
     */
    h(this, "deptFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     *值项
     */
    h(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    h(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    h(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    h(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    h(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    h(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    h(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    h(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    h(this, "dataItems", []);
    // 对象标识属性
    h(this, "objectIdField", "");
    // 对象名称属性
    h(this, "objectNameField", "");
    // 对象值属性
    h(this, "objectValueField", "");
    // 人员请求地址
    h(this, "userUrl", "");
    // 部门请求地址
    h(this, "deptUrl", "");
    // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
    h(this, "copyUserUrl", "");
    // 复制部门人员请求url
    h(this, "copyDeptUrl", "");
    // 人员请求方式
    h(this, "userMethod", "post");
    // 部门人员请求方式
    h(this, "deptMethod", "post");
    /**
     * 上下文替换正则
     *
     */
    h(this, "contextReg", /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 数据替换正则
     *
     */
    h(this, "dataReg", /\$\{data.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 参数替换正则
     *
     */
    h(this, "paramsReg", /\$\{params.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 值类型
     */
    h(this, "valueType", "OBJECTS");
    /**
     * 代码表的代码标识
     *
     */
    h(this, "codeListId", "");
    /**
     * 代码表值映射
     *
     */
    h(this, "codeListMap");
    /**
     * 关注类型属性
     *
     */
    h(this, "attentionTypeField", "type");
    /**
     * 自填充映射
     */
    h(this, "selfFillMap", {
      user_id: "user_id",
      user_name: "name"
    });
    /**
     * 默认选中项
     *
     */
    h(this, "defaultSelected", "");
    /**
     * 选中后默认关注值
     *
     */
    h(this, "defaultAttentionValue", "");
  }
  async onInit() {
    var e, p, o, c, u, M, y;
    if (super.onInit(), this.initParams(), await this.getOperatorUserList(), this.valueItem = ((e = this.model.valueItemName) == null ? void 0 : e.toLowerCase()) || "", this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await tt(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: b, minorSortDir: I } = this.deACMode;
      b && I && (this.sort = "".concat(b.toLowerCase(), ",").concat(I.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (f) => {
          f.id !== "value" && f.id !== "text" && this.dataItems.push(f);
        }
      ));
    }
    const s = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && s.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (o = (p = this.model) == null ? void 0 : p.objectIdField) == null ? void 0 : o.toLowerCase(), this.objectNameField = (u = (c = this.model) == null ? void 0 : c.objectNameField) == null ? void 0 : u.toLowerCase(), this.objectValueField = (y = (M = this.model) == null ? void 0 : M.objectValueField) == null ? void 0 : y.toLowerCase();
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    var s, e, p, o, c, u, M, y;
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
    if (this.userUrl = this.editorParams.URL, this.deptUrl = this.editorParams.DEPTURL, this.userMethod = this.editorParams.USERMETHOD || "post", this.deptMethod = this.editorParams.DEPTMETHOD || "post", this.separator = this.editorParams.SEPARATOR || ",", (s = this.editorParams) != null && s.CODELISTID && (this.codeListId = (e = this.editorParams) == null ? void 0 : e.CODELISTID), (p = this.editorParams) != null && p.DEFAULTATNVALUE && (this.defaultAttentionValue = (o = this.editorParams) == null ? void 0 : o.DEFAULTATNVALUE), (c = this.editorParams) != null && c.VALUETYPE && (this.valueType = (u = this.editorParams) == null ? void 0 : u.VALUETYPE), this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "CODELISTMAP"))
      try {
        const b = JSON.parse((M = this.editorParams) == null ? void 0 : M.CODELISTMAP);
        Object.assign(this.codeListMap, b);
      } catch (b) {
        this.codeListMap = { FOLLOWED: [20, 30, 40], NOTFOLLOWING: [10] };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "SELFFILLMAP"))
      try {
        const b = JSON.parse((y = this.editorParams) == null ? void 0 : y.SELFFILLMAP);
        Object.assign(this.selfFillMap, b);
      } catch (b) {
        this.selfFillMap = {
          user_id: "user_id",
          user_name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "USERMAP"))
      try {
        const b = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, b);
      } catch (b) {
        this.userFilterMap = {
          id: "id",
          name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "DEPTMAP"))
      try {
        const b = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, b);
      } catch (b) {
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
  async loadMore(s, e, p = {}) {
    if (e === "user" && this.currentNumber < this.total) {
      const o = await this.getServiceData(e, s, p);
      if (o)
        return this.page += 1, this.currentNumber < 0 && (this.currentNumber += 1), this.currentNumber += this.size, this.total = o.total ? Number(o.total) : Number(o.headers["x-total"]), o.data.forEach((c) => {
          Object.keys(this.userFilterMap).forEach((u) => {
            c[u] = c[this.userFilterMap[u]];
          });
        }), o;
    } else if (e === "department" && this.deptcurrentNumber < this.depttotal) {
      const o = await this.getServiceData(e, s, p);
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
  async onActionClick(s, e, p) {
    const o = s.uiactionId;
    await at.execAndResolved(
      o,
      {
        context: this.context,
        params: this.params,
        data: e,
        view: this.parent.form.ctx.view,
        event: p
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
  fill(s, e, p, o) {
    if (W(s)) {
      if (W(e)) {
        const c = s.match(this.contextReg);
        c == null || c.forEach((u) => {
          const M = u.slice(10, u.length - 1);
          s = s.replace("${context.".concat(M, "}"), e[M] || "");
        });
      }
      if (W(p)) {
        const c = s.match(this.paramsReg);
        c == null || c.forEach((u) => {
          const M = u.slice(9, u.length - 1);
          s = s.replace("${params.".concat(M, "}"), p[M] || "");
        });
      }
      if (W(o)) {
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
  async getServiceData(s, e, p) {
    const { context: o, params: c } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), u = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(u, { sort: this.sort }), Object.assign(u, { size: this.size }), p && Object.assign(u, p);
    const M = it(c, u);
    let y = "";
    const b = this.fill(this.userUrl, o, c, e).replaceAll(
      "//",
      "/"
    ), I = this.fill(this.deptUrl, o, c, e).replaceAll(
      "//",
      "/"
    );
    this.copyUserUrl = b, this.copyDeptUrl = I;
    let f = "post";
    const v = {};
    if (s === "user" ? (y = b, f = this.userMethod.toLowerCase(), Object.assign(v, { method: f, data: M })) : (y = I, f = this.deptMethod.toLowerCase(), Object.assign(v, { method: f, params: M })), y)
      return await ibiz.net.request(y, v);
    throw new G(this.model, "请配置数据接口地址");
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
    const { context: p, params: o } = this.handlePublicParams(
      s,
      this.context,
      this.params
    );
    if (e && (o.selectedData = e), !this.pickupView)
      throw new G(this.model, "请配置数据选择视图");
    const c = await ibiz.commands.execute(
      me.TAG,
      this.pickupView.id,
      p,
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
    const { context: p, params: o } = this.handlePublicParams(
      s,
      e,
      this.params
    ), { linkAppViewId: c } = this.model;
    if (!c)
      throw new G(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      me.TAG,
      c,
      p,
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
      this.dataItems.map((p) => {
        const c = s.map((u) => u[p.appDEFieldId]).join(this.separator);
        return p.format || p.convertToCodeItemText && p.codeListId || p.customCode, { id: p.id, value: c };
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
      [this.objectValueField]: fe(s)
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
      e.map((p) => [p.value, p])
    );
  }
}
class pt {
  constructor() {
    h(this, "component", "IBizAttention");
    h(this, "formEditor", "IBizAttention");
    h(this, "gridEditor", "IBizAttention");
  }
  async createController(d, s) {
    const e = new ge(d, s);
    return await e.init(), e;
  }
}
const ht = /* @__PURE__ */ Q({
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
    emit: d
  }) {
    const s = X("virtual-list-box"), e = w(36), p = w(), o = w([]), c = w(0), u = w(0), M = w(0), y = w(0), b = (v, E) => {
      d("scrollEvent", v, E);
    }, I = () => {
      u.value = Math.floor(y.value / r.itemHeight), M.value = u.value + r.showNum, o.value = r.items.slice(u.value, M.value);
      const v = y.value - y.value % r.itemHeight;
      c.value = v;
    }, f = () => {
      y.value = p.value.scrollTop, I(), b(e.value, y.value);
    };
    return ve(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), R(() => r.items, () => {
      e.value = r.itemHeight * r.items.length, I();
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: s,
      contentHeight: e,
      showList: o,
      contentBox: p,
      top: c,
      onScroll: f
    };
  },
  render() {
    return i("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [i("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [i("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((r, d) => i("div", {
      key: d,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...r,
      index: d
    }) : r.name]))])])]);
  }
});
const mt = /* @__PURE__ */ Q({
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
      type: ge,
      required: !0
    },
    defaultSelected: {
      type: String
    }
  },
  emits: {
    /** 值变更事件 */
    change: (r, d) => !0,
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
    emit: d
  }) {
    const s = X("follow"), e = r.controller, p = w(), o = w(!1), c = w(!1), u = w(), M = w(!1), y = w(!1), b = w(null), I = w(!1), f = w([]), v = O(() => r.codeListMap || {}), E = O(() => ({})), T = async () => {
      if (M.value = !0, r.codeListId) {
        const F = await ibiz.hub.getApp(e.context.srfappid).codeList.get(r.codeListId, e.context, e.params);
        F && F.length > 0 && (f.value = F), o.value = !0;
      }
      M.value = !1;
    }, L = (g) => {
      var A, S;
      b.value = g, ((S = (A = v.value) == null ? void 0 : A.FOLLOWED) == null ? void 0 : S.find((z) => String(z) === String(g))) ? y.value = !0 : y.value = !1;
    };
    R(
      () => r.value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (g, F) => {
        var S;
        let A = g;
        !g && r.codeListMap && (A = ((S = v.value) == null ? void 0 : S.NOTFOLLOWING[0]) || ""), L(A);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const U = (g) => {
      g ? c.value = g : setTimeout(() => {
        c.value = g;
      }, 100);
    }, D = O({
      get() {
        var g;
        return (g = r.value) == null ? void 0 : g.toString();
      },
      set(g) {
        d("change", g), U(!1);
      }
    }), j = O(() => {
      const g = Array.isArray(D.value) ? D.value : [D.value], F = f.value, A = [];
      return g.forEach((S) => {
        F.forEach((z) => {
          z.value === S && A.push(z.text);
        });
      }), A.join(",");
    });
    R(j, (g, F) => {
      g !== F && d("infoTextChange", g);
    }, {
      immediate: !0
    });
    const B = (g) => f.value.find((A) => A.text === g), _ = async (g) => {
      I.value = g, g && !o.value && await T();
    }, V = (g) => {
      b.value = g.value, L(g.value), d("change", g.value);
    }, J = (g) => {
      var F;
      (g.key === "Escape" || g.keyCode === 27) && (g.stopPropagation(), (F = p.value) == null || F.handleClose());
    };
    return lt(() => {
    }), {
      ns: s,
      curValue: D,
      items: f,
      valueText: j,
      editorRef: u,
      cssVars: E,
      isEditable: c,
      isLoading: M,
      followState: y,
      selectd: b,
      showState: I,
      dropdownRef: p,
      setEditable: U,
      getCodeListItem: B,
      onShowChange: _,
      onItemClick: V,
      handleKeyDown: J
    };
  },
  render() {
    const r = i("div", {
      class: [this.ns.e("showcase"), this.showState ? "is-active" : ""]
    }, [i("span", {
      class: this.ns.em("showcase", "icon")
    }, [i("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      focusable: "false"
    }, [i("g", {
      id: "follow/with/interest",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [i("path", {
      d: "M8 3.4c2.823 0 5.04 1.367 7.38 3.637a2.037 2.037 0 0 1 0 2.925C13.04 12.232 10.824 13.6 8 13.6c-2.823 0-5.032-1.364-7.376-3.637a2.037 2.037 0 0 1 0-2.925C2.967 4.764 5.176 3.4 8 3.4zm0 1.2c-2.417 0-4.405 1.228-6.542 3.3a.837.837 0 0 0 0 1.2C3.596 11.173 5.584 12.4 8 12.4s4.413-1.231 6.546-3.3a.837.837 0 0 0 0-1.2C12.412 5.83 10.415 4.6 8 4.6zM8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z",
      id: "attention"
    }, null)])])]), i("span", {
      class: this.ns.em("showcase", "text")
    }, [this.followState ? "已关注" : "未关注"])]), d = i(P("el-dropdown"), {
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
      dropdown: () => i(P("el-dropdown-menu"), {
        class: this.ns.be("popper", "dropdown-menu")
      }, {
        default: () => this.items.map((s, e) => i(P("el-dropdown-item"), {
          onClick: () => this.onItemClick(s)
        }, {
          default: () => [i("div", {
            class: [this.ns.b("content"), String(this.selectd) === String(s.value) ? "is-active" : ""]
          }, [i("div", {
            class: this.ns.em("item", "text")
          }, [s.text]), i("div", {
            class: this.ns.em("item", "tooltip")
          }, [s.tooltip])]), e === this.items.length - 1 ? null : i("div", {
            class: this.ns.em("item", "divider")
          }, [i(P("el-divider"), null, null)])]
        }))
      })
    });
    return i("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable)],
      style: this.cssVars
    }, [this.readonly ? r : d]);
  }
});
class ft {
  /**
   * 计算选中项绘制个数 多选场景需计算显示人员是否超出
   * @author ljx
   * @date 2024-03-05 02:42:45
   * @param {IData} values 选中项key值集合
   * @returns {number} selRenderNum
   */
  static calcSelItemRenderNum(d, s) {
    let e = 0;
    if (s && (d == null ? void 0 : d.length) > 0) {
      const p = (s == null ? void 0 : s.offsetWidth) || 0, o = window.getComputedStyle(s), c = parseInt(o.marginLeft, 10), u = parseInt(o.marginRight, 10), M = parseInt(o.paddingLeft, 10), y = parseInt(o.paddingRight, 10), b = c + u + M + y, I = 70, f = 33, v = 28, E = 8, T = (v + E) * d.length;
      p - b - I - f - T < 0 && (e = Math.floor(
        (p - b - I - f) / (v + E)
      ), e -= 1);
    }
    return e;
  }
}
function vt(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !ut(r);
}
const q = /* @__PURE__ */ Q({
  name: "IBizAttention",
  props: Ge(),
  emits: qe(),
  setup(r, {
    emit: d
  }) {
    const s = X("attention"), e = r.controller, p = w(""), o = w([]), c = w([]), u = w(""), M = w(!1), y = w(!1), b = w(""), I = w([]), f = w("user"), v = w([]), E = w(!1), T = w(!1), L = w(!1), U = w(""), D = w(), j = w(), B = w(""), _ = w();
    let V = 0;
    const J = O(() => r == null ? void 0 : r.readonly), g = O(() => !!(r.controlParams && r.controlParams.editmode === "hover")), F = O(() => Xe(p.value)), A = (t) => {
      t.preventDefault(), t.stopPropagation();
    }, S = () => {
      var l;
      const t = [], a = [];
      B.value = "", ((l = v.value) == null ? void 0 : l.length) > 0 && v.value.forEach((n) => {
        t.push(n[e.selfFillMap.user_id]), a.push(n[e.selfFillMap.user_name]), n[e.selfFillMap.user_id] === e.context.srfuserid && (B.value = n[e.attentionTypeField]);
      }), u.value = t == null ? void 0 : t.toString(), p.value = a == null ? void 0 : a.toString();
    }, z = (t) => {
      var a, l;
      return (l = (a = e.codeListMap) == null ? void 0 : a.FOLLOWED) == null ? void 0 : l.some((n) => String(n) === String(t));
    }, K = () => {
      const t = u.value.split(e.separator);
      V = ft.calcSelItemRenderNum(t, j.value), u.value = "", S();
    };
    R(() => r.value, (t) => {
      if (t)
        if (e.valueType === "OBJECT")
          p.value = t ? t[e.objectNameField] : null;
        else if (e.valueType === "OBJECTS") {
          const a = dt(t) ? t : [];
          v.value = [], a.forEach((l) => {
            const n = fe(l);
            e.selfFillMap.user_id && e.selfFillMap.user_name && Object.assign(n, {
              id: l[e.selfFillMap.user_id],
              name: l[e.selfFillMap.user_name],
              [e.attentionTypeField]: l[e.attentionTypeField]
            }), e.objectValueField && (Object.assign(n, {
              ...l[e.objectValueField]
            }), delete n[e.objectValueField]), v.value.push(n);
          }), S();
        } else
          p.value = t;
      else
        p.value = "", v.value = [];
      K();
    }, {
      immediate: !0
    });
    const be = O(() => r.data && r.data[e.valueItem] || void 0);
    R(be, (t, a) => {
      t !== a && (u.value = t, t === null && (v.value = [], d("change", null)));
    }, {
      immediate: !0,
      deep: !0
    });
    const ee = (t) => {
      t ? y.value = t : setTimeout(() => {
        y.value = t;
      }, 100);
    }, $ = () => {
      const t = v.value.map((a) => {
        const l = {};
        return Object.assign(l, {
          [e.selfFillMap.user_id]: a.id,
          [e.selfFillMap.user_name]: a.name,
          [e.attentionTypeField]: a[e.attentionTypeField]
        }), l;
      });
      d("change", t);
    }, we = (t, a) => {
      A(a);
      const l = v.value.findIndex((n) => n.id === t.id);
      if (l > -1 && v.value.splice(l, 1), e.valueItem) {
        const n = v.value.map((m) => m.id);
        d("change", n.join(e.separator), e.valueItem);
      }
      if (e.valueType === "OBJECTS")
        $();
      else {
        const n = v.value.map((m) => m.name);
        d("change", n.join(e.separator));
      }
    }, Me = async (t) => {
      b.value && (f.value === "user" ? o.value.unshift(t) : c.value.unshift(t));
      const a = {};
      if (Object.assign(a, t), f.value === "user") {
        Object.assign(a, {
          [e.userFilterMap.id]: a[e.userFilterMap.id] ? a[e.userFilterMap.id] : a.srfkey,
          [e.userFilterMap.name]: a[e.userFilterMap.name] ? a[e.userFilterMap.name] : a.srfmajortext
        });
        const l = v.value.findIndex((n) => n.id === a[e.userFilterMap.id]);
        l < 0 ? v.value.push({
          id: a[e.userFilterMap.id],
          name: a[e.userFilterMap.name],
          [e.attentionTypeField]: e.defaultAttentionValue
        }) : v.value.splice(l, 1);
      } else {
        Object.assign(a, {
          [e.deptFilterMap.id]: a[e.deptFilterMap.id] ? a[e.deptFilterMap.id] : a.srfkey,
          [e.deptFilterMap.name]: a[e.deptFilterMap.name] ? a[e.deptFilterMap.name] : a.srfmajortext
        });
        const l = v.value.findIndex((n) => n.id === a[e.deptFilterMap.id]);
        l < 0 ? v.value.push({
          id: a[e.deptFilterMap.id],
          name: a[e.deptFilterMap.name],
          [e.attentionTypeField]: e.defaultAttentionValue
        }) : v.value.splice(l, 1);
      }
      if (e.multiple) {
        if (e.valueItem) {
          const n = v.value.map((m) => m.id);
          d("change", n.join(e.separator), e.valueItem);
        }
        const l = v.value.map((n) => n.name);
        e.valueType === "OBJECTS" ? $() : d("change", l.join(e.separator));
      } else {
        const l = await e.calcFillDataItems([t]);
        if (l.length && l.forEach((n) => {
          d("change", n.value, n.id);
        }), e.valueItem && (f.value === "user" ? d("change", a[e.userFilterMap.id], e.valueItem) : d("change", a[e.deptFilterMap.id], e.valueItem)), e.valueType === "OBJECT")
          d("change", e.handleObjectParams(a));
        else if (e.valueType === "OBJECTS") {
          const n = {};
          f.value === "user" ? Object.assign(n, {
            id: a[e.userFilterMap.id],
            name: a[e.userFilterMap.name]
          }) : Object.assign(n, {
            id: a[e.deptFilterMap.id],
            name: a[e.deptFilterMap.name]
          }), v.value = [n], $();
        } else
          f.value === "user" ? d("change", t[e.userFilterMap.name]) : d("change", t[e.deptFilterMap.name]);
        L.value = !1;
      }
      e.valueType !== "OBJECTS" && d("blur", t), ee(!1);
    }, ye = (t, a) => {
      t.forEach((l) => {
        const n = o.value.findIndex((m) => m[a] === l[a]);
        n > -1 ? o.value.splice(n, 1, l) : o.value.push(l);
      });
    }, N = async (t = !1) => {
      if (b.value)
        return;
      E.value = !0;
      const a = {};
      f.value === "department" ? a.page = e.deptpage : a.page = e.page;
      try {
        const l = await e.loadMore(r.data, f.value, a);
        l && (f.value === "user" ? o.value.length === 0 ? o.value = l.data : ye(l.data, e.userFilterMap.id) : c.value.length === 0 ? c.value = l.data : c.value.push(...l.data));
      } catch (l) {
        E.value = !1;
      }
      E.value = !1;
    }, te = (t) => {
      const {
        dataItems: a
      } = e;
      a != null && a.length && a.forEach((l) => {
        d("change", null, l.id);
      }), e.valueItem && d("change", null, e.valueItem), e.valueType === "OBJECTS" ? d("change", []) : (d("change", null), d("blur", t)), t.stopPropagation(), t.preventDefault();
    }, Fe = (t) => {
      if (!e.codeListMap)
        return;
      if (z(String(t))) {
        const l = v.value.find((n) => {
          var m;
          return n[e.selfFillMap.user_id] === ((m = e.context) == null ? void 0 : m.srfuserid);
        });
        if (l)
          Object.assign(l, {
            [e.attentionTypeField]: t
          });
        else {
          const n = {
            id: e.context.srfuserid,
            name: e.context.srfusername,
            [e.attentionTypeField]: t
          };
          v.value.push(n);
        }
      } else {
        const l = v.value.findIndex((n) => {
          var m;
          return n[e.selfFillMap.user_id] === ((m = e.context) == null ? void 0 : m.srfuserid);
        });
        l > -1 && v.value.splice(l, 1);
      }
      S(), $();
    };
    R(F, (t, a) => {
      t !== a && e.valueType !== "OBJECTS" && d("infoTextChange", t);
    }, {
      immediate: !0
    });
    const ae = async (t) => {
      E.value = !0;
      try {
        const a = {};
        Object.assign(a, {
          query: t,
          size: 1e3
        });
        const l = await e.getServiceData(f.value, r.data, a);
        l && (f.value === "user" ? l.data.forEach((n) => {
          Object.keys(e.userFilterMap).forEach((m) => {
            n[m] = n[e.userFilterMap[m]];
          });
        }) : l.data.forEach((n) => {
          Object.keys(e.deptFilterMap).forEach((m) => {
            n[m] = n[e.deptFilterMap[m]];
          });
        }), I.value = l.data, E.value = !1);
      } catch (a) {
        E.value = !1;
      }
    }, se = (t) => {
      if (f.value !== t) {
        if (f.value = t, b.value) {
          ae(b.value);
          return;
        }
        f.value === "user" && o.value.length === 0 && N(), f.value === "department" && c.value.length === 0 && N();
      }
    }, Ee = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Ie = (t) => /[\u4E00-\u9FA5]/.test(t), Ae = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), Z = (t) => {
      if (!t)
        return "";
      let a = 0;
      for (let H = 0; H < t.length; H++)
        if (Ie(t))
          a = t.charCodeAt(H) + ((a << 5) - a), a = a & a;
        else {
          const Ke = t.charCodeAt(H);
          a += Ke.toString(16);
        }
      const l = String(a).substring(0, 6), n = parseInt(l.substring(0, 2), 16), m = parseInt(l.substring(2, 4), 16), C = parseInt(l.substring(4, 6), 16), x = "#".concat(n.toString(16).padStart(2, "0")).concat(m.toString(16).padStart(2, "0")).concat(C.toString(16).padStart(2, "0"));
      return x === "#FFFFFF" && Ee() || x;
    }, Ce = (t) => {
      clearTimeout(_.value), _.value = setTimeout(() => {
        !t && t !== 0 ? N() : ae(t), clearTimeout(_.value);
      }, 300);
    }, Se = (t) => {
      t.forEach((a) => {
        if (a.capLanguageRes && a.capLanguageRes.lanResTag) {
          const l = ibiz.i18n.t(a.capLanguageRes.lanResTag, a.caption);
          Object.assign(a, {
            caption: l
          });
        }
        if (a.tooltipLanguageRes && a.tooltipLanguageRes.lanResTag) {
          const l = ibiz.i18n.t(a.tooltipLanguageRes.lanResTag, a.tooltip);
          Object.assign(a, {
            caption: l
          });
        }
      });
    }, Pe = async (t, a) => {
      await e.onActionClick(t, [r.data], a);
    }, xe = (t) => b.value ? I.value : t, ie = () => {
      T.value = !1;
    }, Le = () => i(P("el-input"), {
      class: s.be("select-modal", "search-input"),
      ref: D,
      modelValue: b.value,
      "onUpdate:modelValue": (t) => b.value = t,
      placeholder: "搜索",
      onInput: (t) => Ce(t)
    }, {
      suffix: () => i("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [i("g", {
        id: "atwnormal/search",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [i("path", {
        d: "M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0",
        id: "atwFill-1"
      }, null)])])
    }), Oe = () => i("div", {
      class: s.be("select-modal", "select-state")
    }, [i("div", {
      class: [s.bem("select-modal", "select-state", "select-slider"), s.is("left", f.value === "user"), s.is("right", f.value !== "user")]
    }, null), i("div", {
      class: s.bem("select-modal", "select-state", "select-personel"),
      onClick: () => se("user")
    }, [k("人员")]), i("div", {
      class: s.bem("select-modal", "select-state", "select-department"),
      onClick: () => se("department")
    }, [k("部门")])]), Te = (t) => i("div", {
      class: s.bem("select-modal", "actions", "item"),
      title: t.tooltip,
      onClick: (a) => Pe(t, a)
    }, [t.showIcon && t.sysImage && i(P("iBizIcon"), {
      icon: t.sysImage
    }, null)]), De = () => {
      var a;
      const t = ((a = e.model.uiactionGroup) == null ? void 0 : a.uiactionGroupDetails) || [];
      return Se(t), i("div", {
        class: s.be("select-modal", "actions")
      }, [t.map((l) => Te(l))]);
    }, je = () => i("div", {
      class: s.be("select-modal", "select")
    }, [Oe(), De()]), Ne = (t) => {
      if (e.multiple) {
        if (u.value)
          return u.value.split(e.separator).findIndex((n) => n === t) > -1 ? i("div", {
            class: s.bem("select-modal", "personel-list", "icon")
          }, [i("i", {
            class: "fa fa-check",
            "aria-hidden": "true"
          }, null)]) : null;
      } else
        return u.value === t ? i("div", {
          class: s.bem("select-modal", "personel-list", "icon")
        }, [i("i", {
          class: "fa fa-check",
          "aria-hidden": "true"
        }, null)]) : null;
    }, ke = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if (Ae(t)) {
          const m = t.split("").find((x) => /[a-zA-Z]/.test(x)) || "", C = t.split("").find((x) => /[\u4E00-\u9FA5]/.test(x)) || "";
          return "".concat(m).concat(C).toLowerCase();
        }
        return /[a-zA-Z]/.test(t) ? t.split("").filter((m) => /[a-zA-Z]/.test(m)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((m) => /[\u4E00-\u9FA5]/.test(m)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
      }
    }, Ve = (t) => {
      if (!t)
        return null;
      const a = JSON.parse(t);
      if (a.length === 0)
        return null;
      const {
        downloadUrl: l
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, r.data, e.editorParams), n = l.replace("%fileId%", a[0].id);
      return i("img", {
        class: s.bem("select-modal", "personel-list", "avatar"),
        src: n,
        alt: ""
      }, null);
    }, Y = (t, a) => e.operatorMap && e.operatorMap.get(t) && e.operatorMap.get(t).data.iconurl ? Ve(e.operatorMap.get(t).data.iconurl) : ke(a), le = (t) => {
      const a = f.value === "user" ? t[e.userFilterMap.name] || t.name : t[e.deptFilterMap.name] || t.name, l = f.value === "user" ? t[e.userFilterMap.id] : t[e.deptFilterMap.id];
      return i("div", {
        class: [s.bem("select-modal", "personel-list", "item"), s.is("selected", u.value === l)],
        onClick: () => Me(t)
      }, [i("div", {
        class: s.bem("select-modal", "personel-list", "text")
      }, [i("div", {
        class: s.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(Z(a))
      }, [Y(l, a)]), i("div", {
        class: s.bem("select-modal", "personel-list", "text-label")
      }, [a]), l === e.context.srfuserid ? i("div", {
        class: s.bem("select-modal", "personel-list", "myself")
      }, [k("我自己")]) : null]), Ne(l)]);
    }, ze = (t, a) => {
      const {
        context: l,
        params: n
      } = e;
      return i(P("iBizControlShell"), {
        class: s.b("panel-item"),
        data: t,
        modelData: a,
        context: l,
        params: n
      }, null);
    }, Re = (t, a) => i(P("el-popover"), {
      target: "hover",
      placement: "right",
      offset: 24,
      width: "auto"
    }, {
      reference: () => le(t),
      default: () => ze(t, a)
    }), Ue = (t, a) => {
      T.value && (f.value === "user" ? t - a < 305 && (E.value || N()) : t - a < 265 && (E.value || N()));
    }, ne = (t) => {
      var n;
      const a = xe(t), l = (n = e.deACMode) == null ? void 0 : n.itemLayoutPanel;
      return i(ht, {
        items: a,
        itemHeight: 36,
        class: [s.be("select-modal", "personel-list"), s.be("select-modal", "personel-list-".concat(f.value))],
        onScrollEvent: (m, C) => Ue(m, C)
      }, {
        default: (m) => l ? Re(m, l) : le(m)
      });
    }, re = (t) => {
      M.value = t;
    }, Be = () => i("div", {
      class: s.be("select-modal", "deptpersonel")
    }, [i("div", {
      class: s.bem("select-modal", "deptpersonel", "dept")
    }, [i("div", {
      class: "collpase-icon"
    }, [M.value ? i("i", {
      class: "fa fa-angle-right",
      "aria-hidden": "true",
      onClick: () => re(!1)
    }, null) : i("i", {
      class: "fa fa-angle-down",
      "aria-hidden": "true",
      onClick: () => re(!0)
    }, null)]), i("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [i("g", {
      id: "aqf1.Base基础/1.icon图标/2.normal/部门",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [i("path", {
      d: "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z",
      id: "aqf形状结合"
    }, null)])]), i("span", null, ["".concat(e.context.srfusername, "的团队")]), i("span", null, [k("·")]), i("span", null, [e.depttotal])]), M.value ? null : i("div", {
      class: s.bem("select-modal", "deptpersonel", "dept-person")
    }, [ne(c.value)])]), oe = () => rt(i("div", {
      class: s.b("select-modal"),
      onPointerdown: A,
      onPointerup: A,
      onClick: A
    }, [Le(), je(), f.value === "user" ? ne(o.value) : Be()]), [[ot("loading"), E.value]]), ce = () => i("div", {
      class: s.b("no-select-value")
    }, [i("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [i("g", {
      id: "azeaction/user-add",
      "stroke-width": "1"
    }, [i("path", {
      d: "M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z",
      id: "aze形状结合"
    }, null)])]), i("span", null, [k("未设置")])]), _e = () => i("div", {
      class: s.b("no-select-value")
    }, [i("span", null, [k("未设置")])]), ue = () => {
      var t;
      if (e.multiple) {
        const a = [];
        if (u.value) {
          const n = u.value.split(e.separator), m = F.value.split(e.separator);
          n.forEach((C, x) => {
            a.push({
              id: C,
              name: m[x]
            });
          });
        }
        let l = !1;
        return V > 0 && (l = V < ((t = v.value) == null ? void 0 : t.length), a == null || a.splice(V, a == null ? void 0 : a.length)), i("div", {
          class: [s.b("select-value-multiple"), s.is("hidden", l)]
        }, [a == null ? void 0 : a.map((n) => {
          let m;
          return i("div", {
            class: s.be("select-value-multiple", "item")
          }, [i("div", {
            class: [s.be("select-value", "textimg"), s.bem("select-value-multiple", "item", "textimg")],
            style: "background-color:".concat(Z(n.name))
          }, [i(P("el-tooltip"), {
            class: "box-item",
            effect: "dark",
            content: n.name,
            placement: "top",
            offset: 12
          }, vt(m = Y(n.id, n.name)) ? m : {
            default: () => [m]
          }), r.readonly ? null : i("div", {
            class: [s.bem("select-value-multiple", "item", "close")],
            onClick: (C) => we(n, C)
          }, [i("i", {
            class: "fa fa-close",
            "aria-hidden": "true"
          }, null)])])]);
        }), l ? i(P("el-tooltip"), {
          class: s.b("multiple-ellipsis"),
          "popper-class": s.be("multiple-ellipsis", "popper"),
          effect: "dark",
          content: F.value,
          placement: "top",
          offset: 12
        }, {
          default: () => [i("span", {
            class: s.be("multiple-ellipsis", "default")
          }, [k("...")])]
        }) : null]);
      }
    }, de = () => e.multiple ? i("div", {
      class: s.b("select-value-multiple")
    }, [i("div", {
      class: s.b("select-value")
    }, [i("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [i("g", {
      id: "azeaction/user-add",
      "stroke-width": "1"
    }, [i("path", {
      d: "M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z",
      id: "aze形状结合"
    }, null)])])])]) : i("div", {
      class: s.b("select-value")
    }, [i("div", {
      class: s.be("select-value", "textimg"),
      style: "background-color:".concat(Z(F.value))
    }, [Y(u.value, F.value)]), i("div", {
      class: s.be("select-value", "text")
    }, [i("div", {
      class: s.bem("select-value", "text", "label")
    }, [F.value])]), r.readonly ? null : i("i", {
      class: ["fa fa-times-circle", s.be("select-value", "close")],
      "aria-hidden": "true",
      onClick: (t) => te(t)
    }, null)]), pe = async () => {
      var m, C;
      T.value = !0;
      const {
        context: t,
        params: a
      } = e.handlePublicParams(r.data, e.context, e.params), l = e.fill(e.userUrl, t, a, r.data).replaceAll("//", "/"), n = e.fill(e.deptUrl, t, a, r.data).replaceAll("//", "/");
      (l !== e.copyUserUrl || n !== e.copyDeptUrl || r.data && r.data.srfkey !== U.value) && (U.value = ((m = r.data) == null ? void 0 : m.srfkey) || "", o.value = [], c.value = [], e.resetState(), N(!0)), await ct(), (C = D.value) == null || C.focus();
    }, $e = () => F.value ? de() : ce(), He = () => F.value ? [ue()] : _e(), We = () => i(P("el-popover"), {
      ref: "popoverRef",
      visible: L.value,
      "onUpdate:visible": (t) => L.value = t,
      trigger: "click",
      popperClass: s.b("person-select"),
      placement: "top-start",
      width: 320,
      teleported: !0,
      onShow: () => pe(),
      onHide: () => ie()
    }, {
      reference: () => $e(),
      default: () => oe()
    }), Je = () => [ue(), We()], he = () => {
      K();
    };
    return ve(() => {
      j.value && (window == null || window.addEventListener("resize", he), K());
    }), nt(() => {
      e.resetState(), j.value && (window == null || window.removeEventListener("resize", he));
    }), {
      ns: s,
      c: e,
      refValue: u,
      curValue: p,
      valueText: F,
      loading: E,
      items: o,
      isEditable: y,
      showFormDefaultContent: g,
      modelVisible: L,
      curAttentionValue: B,
      attentionRef: j,
      readonlyState: J,
      onClear: te,
      load: N,
      setEditable: ee,
      renderDropModal: oe,
      renderNoSelectValue: ce,
      renderSelectInput: de,
      onPopShow: pe,
      onPageHide: ie,
      onAttentionChange: Fe,
      renderEditContent: Je,
      renderReadonlyContent: He
    };
  },
  render() {
    return i("div", {
      ref: "attentionRef",
      class: [this.ns.b(), this.ns.b("person-value"), this.disabled ? this.ns.m("disabled") : "", this.readonlyState ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.readonlyState ? this.renderReadonlyContent() : this.renderEditContent(), i(mt, {
      disabled: this.disabled,
      value: this.curAttentionValue,
      codeListId: this.c.codeListId,
      codeListMap: this.c.codeListMap,
      defaultSelected: this.c.defaultSelected,
      controller: this.c,
      onChange: this.onAttentionChange
    }, null)]);
  }
}), gt = Qe(q, function(r) {
  r.component(q.name, q), st(
    "EDITOR_CUSTOMSTYLE_ATTENTION",
    () => new pt()
  );
}), Ct = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(gt);
  }
};
export {
  gt as IBizAttention,
  Ct as default
};
