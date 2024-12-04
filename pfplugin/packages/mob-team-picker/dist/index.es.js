import './style.css';
var z = Object.defineProperty;
var O = (e, n, t) => n in e ? z(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var d = (e, n, t) => (O(e, typeof n != "symbol" ? n + "" : n, t), t);
import { EditorController as T, getDeACMode as j, registerEditorProvider as N } from "@ibiz-template/runtime";
import { defineComponent as _, ref as g, watch as R, onMounted as U, createVNode as s, resolveComponent as f, createTextVNode as p } from "vue";
import { getDataPickerProps as Z, getEditorEmits as $, useNamespace as B } from "@ibiz-template/vue3-util";
import { createUUID as H } from "qx-util";
import { RuntimeModelError as G } from "@ibiz-template/core";
import { mergeDeepLeft as Y } from "ramda";
const J = () => {
  const e = document.documentElement;
  return e ? getComputedStyle(e).getPropertyValue("--ibiz-color-primary") : null;
}, q = (e) => /[\u4E00-\u9FA5]/.test(e), K = (e) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(e), W = (e) => {
  if (!e)
    return "";
  let n = 0;
  for (let u = 0; u < e.length; u++)
    if (q(e))
      n = e.charCodeAt(u) + ((n << 5) - n), n = n & n;
    else {
      const m = e.charCodeAt(u);
      n += m.toString(16);
    }
  const t = String(n).substring(0, 6);
  let i = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), l = parseInt(t.substring(4, 6), 16);
  i < 0 && (i = 10), r < 0 && (r = 10), l < 0 && (l = 10);
  const c = "#".concat(i.toString(16).padStart(2, "0")).concat(r.toString(16).padStart(2, "0")).concat(l.toString(16).padStart(2, "0"));
  return c === "#FFFFFF" && J() || c;
}, Q = (e) => {
  if (e && e.toString().length < 2)
    return e;
  if (e && e.toString().length >= 2) {
    if (K(e)) {
      const r = e.split("").find((c) => /[a-zA-Z]/.test(c)) || "", l = e.split("").find((c) => /[\u4E00-\u9FA5]/.test(c)) || "";
      return "".concat(r).concat(l).toLowerCase();
    }
    return /[a-zA-Z]/.test(e) ? e.split("").filter((r) => /[a-zA-Z]/.test(r)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((r) => /[\u4E00-\u9FA5]/.test(r)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
  }
}, w = /* @__PURE__ */ _({
  name: "TeamPicker",
  props: Z(),
  emits: $(),
  setup(e, {
    emit: n
  }) {
    const t = B("team-picker"), i = e.controller, r = g(""), l = g([]), c = g(!1), u = H(), m = g(""), h = g(), C = () => {
      const a = l.value.find((o) => o.id === r.value);
      if (a) {
        const o = i.fillMap[a.type];
        n("change", o), i.valueItem && n("change", a.id, i.valueItem);
      }
    }, I = (a) => {
      r.value = a.id, c.value = !1, C();
    }, y = (a) => {
      if (a.avatar) {
        const v = JSON.parse(a.avatar), L = ibiz.util.file.calcFileUpDownUrl(i.context, i.params).downloadUrl.replace("%fileId%", v[0].id);
        return s("img", {
          class: t.em("item", "img-avatar"),
          src: L,
          alt: ""
        }, null);
      }
      const o = a.name;
      return s("div", {
        class: t.em("item", "text-avatar"),
        style: "background-color:".concat(W(o))
      }, [Q(o)]);
    }, M = (a) => s("div", {
      class: t.e("item")
    }, [s("svg", {
      class: t.em("item", "org-icon"),
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "currentColor"
    }, [s("g", {
      id: "aqm画板",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [s("path", {
      d: "M11.838 0c6.538 0 11.838 5.373 11.838 12s-5.3 12-11.838 12C5.3 24 0 18.627 0 12S5.3 0 11.838 0zM13 4h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1l.41-.001-.016 2.139H8.5l-.15.006a2.1 2.1 0 0 0-1.95 2.094V14H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.4v-1.762l.007-.113a.9.9 0 0 1 .893-.787h7l.113.007a.9.9 0 0 1 .787.893V14H16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.4v-1.762l-.005-.15a2.1 2.1 0 0 0-2.095-1.95h-2.906l.016-2.139L13 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm4.8 11.2v1.6h-1.6v-1.6h1.6zm-10 0v1.6H6.2v-1.6h1.6zm5-10v1.6h-1.6V5.2h1.6z",
      id: "aqm形状结合"
    }, null)])]), s("div", {
      class: t.em("item", "content")
    }, [s("span", {
      class: t.em("item", "type")
    }, [p("组织")]), s("span", {
      class: t.em("item", "type-divide")
    }, [p("/")]), s("span", {
      class: t.em("item", "orgname"),
      title: a.name
    }, [a.name])])]), A = (a) => s("div", {
      class: t.e("item")
    }, [s("div", {
      class: t.em("item", "text-icon")
    }, [y(a)]), s("div", {
      class: t.em("item", "content")
    }, [s("span", {
      class: t.em("item", "type")
    }, [p("个人")]), s("span", {
      class: t.em("item", "type-divide")
    }, [p("/")]), s("span", {
      class: t.em("item", "personname"),
      title: a.name
    }, [a.name])])]), E = (a) => s("div", {
      class: t.e("item")
    }, [a.avatar ? s("div", {
      class: t.em("item", "text-icon")
    }, [y(a)]) : s("svg", {
      class: t.em("item", "team-icon"),
      viewBox: "0 0 16 16",
      version: "1.1",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "currentColor"
    }, [s("title", null, [p("normal/user-group-avatar@1x")]), s("g", {
      id: "团队",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [s("path", {
      d: "M8,0 C12.418278,-8.11624501e-16 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 5.41083001e-16,12.418278 0,8 C-5.41083001e-16,3.581722 3.581722,8.11624501e-16 8,0 Z M6.94814892,4.5 C5.8297723,4.5 4.92314892,5.40662338 4.92314892,6.525 C4.92314892,7.17754041 5.23179842,7.75799186 5.71074948,8.1273513 C4.58627683,8.60821226 3.79861678,9.72458136 3.80000182,11.025 C3.80000182,11.2113961 3.95110572,11.3625 4.13750182,11.3625 L4.20551985,11.3556432 C4.3593129,11.3241726 4.47500182,11.1880966 4.47500182,11.025 L4.473,11.01 L4.47841342,10.8622681 C4.55871908,9.62501422 5.54816314,8.63557016 6.78541699,8.5552645 L6.942,8.549 L6.96130368,8.55003422 C8.32215601,8.55711636 9.42316527,9.66248284 9.42824334,11.025 C9.42824334,11.2113961 9.57934724,11.3625 9.76574334,11.3625 C9.95213944,11.3625 10.1032433,11.2113961 10.1032433,11.025 L10.0963865,10.956982 L10.0931624,10.8462507 C10.0247081,9.62255373 9.25778371,8.58538265 8.18522666,8.12832813 C8.66449942,7.75799186 8.97314892,7.17754041 8.97314892,6.525 C8.97314892,5.40662338 8.06652554,4.5 6.94814892,4.5 Z M9.47939892,5.0625 L9.47939892,5.7375 C10.0696532,5.7375 10.5481489,6.21599567 10.5481489,6.80625 C10.5481489,7.39650433 10.0696532,7.875 9.47939892,7.875 L9.47939892,8.55 C10.5880137,8.55 11.5045613,9.37233726 11.651361,10.4406322 L11.6509718,10.4569843 C11.6509718,10.6433804 11.8020757,10.7944843 11.9884718,10.7944843 C12.1728418,10.7944843 12.3226827,10.6466474 12.3344785,10.4618968 C12.2317937,9.40890588 11.5598087,8.52274877 10.6305547,8.11605224 C10.9938747,7.79648694 11.2231489,7.3281434 11.2231489,6.80625 C11.2231489,5.84320347 10.4424455,5.0625 9.47939892,5.0625 Z M6.94814892,5.175 C7.69373333,5.175 8.29814892,5.77941559 8.29814892,6.525 C8.29814892,7.26653599 7.7002793,7.86843205 6.96028162,7.87494661 L6.943,7.875 L6.81813491,7.86882008 C6.13354819,7.80340381 5.59814892,7.22672651 5.59814892,6.525 C5.59814892,5.77941559 6.20256451,5.175 6.94814892,5.175 Z",
      id: "normal/user-group-circle-fill"
    }, null)])]), s("div", {
      class: t.em("item", "content")
    }, [s("span", {
      class: t.em("item", "type")
    }, [p("团队")]), s("span", {
      class: t.em("item", "type-divide")
    }, [p("/")]), s("span", {
      class: t.em("item", "personname"),
      title: a.name
    }, [a.name])])]), b = (a) => a.type === "organization" ? M(a) : a.type === "user" ? A(a) : E(a);
    R(() => e.value, () => {
      if (i.valueItem) {
        const a = e.data[i.valueItem];
        r.value = a;
      }
    }, {
      immediate: !0
    });
    const P = async () => {
      let a = null;
      (e.readonly || e.disabled) && (a = "fetch_reader");
      const o = await i.getServiceData("", e.data, a);
      o && o.data && (l.value = o.data.map((v) => ({
        ...v,
        type: "user_group"
      })));
    }, S = () => {
      if (!e.value || !e.data[i.valueItem])
        return null;
      const a = {};
      if (Object.keys(i.fillMap).some((o) => {
        if (i.fillMap[o] === e.value)
          return a.type = o, !0;
      }), a.type === "user") {
        const o = i.operatorMap.get(e.data[i.valueItem]);
        o && Object.assign(a, o, {
          name: o.text,
          avatar: o.data.iconurl
        });
      } else {
        const o = l.value.find((v) => v.id === e.data[i.valueItem]);
        o && Object.assign(a, o);
      }
      return s("div", {
        class: t.em("item", "readonly")
      }, [b(a)]);
    }, x = () => {
      m.value = "", c.value = !0;
    }, F = () => {
      c.value = !1;
    }, D = () => {
      if (!r.value)
        return;
      const a = l.value.find((o) => o.id === r.value);
      if (a)
        return b(a);
    }, k = () => s("div", {
      class: t.e("select")
    }, [s("div", {
      id: u,
      class: [t.em("select", "input"), t.is("focus", c.value)],
      ref: h,
      onClick: x
    }, [s("div", {
      class: t.em("select", "input-content")
    }, [D()]), s("div", {
      class: t.em("select", "input-icon")
    }, [s(f("van-icon"), {
      name: "arrow"
    }, null)])]), s(f("van-popup"), {
      show: c.value,
      "onUpdate:show": (a) => c.value = a,
      style: {
        height: "80%"
      },
      round: !0,
      "close-icon-position": "top-left",
      position: "bottom"
    }, {
      default: () => [s("div", {
        class: t.b("picker-pop")
      }, [s("div", {
        class: t.be("picker-pop", "header")
      }, [s(f("van-icon"), {
        name: "cross",
        onClick: F
      }, null), s("span", null, [p("选择")])]), s("div", {
        class: t.be("picker-pop", "search")
      }, [s(f("van-field"), {
        modelValue: m.value,
        "onUpdate:modelValue": (a) => m.value = a,
        placeholder: "搜索"
      }, {
        "left-icon": () => s(f("ion-icon"), {
          name: "search-outline"
        }, null)
      })]), s("div", {
        class: t.be("picker-pop", "list")
      }, [l.value.map((a) => {
        if (a.name.indexOf(m.value) >= 0)
          return s("div", {
            class: t.bem("picker-pop", "list", "item"),
            onClick: () => I(a)
          }, [b(a), r.value === a.id && s(f("ion-icon"), {
            class: t.bem("picker-pop", "list", "selected"),
            name: "checkmark-outline"
          }, null)]);
      })])])]
    })]);
    return U(async () => {
      if (await P(), (i.hasORG_M || e.readonly || e.disabled) && l.value.unshift({
        type: "organization",
        id: i.context.srforgid,
        name: i.context.srforgname
      }), i.showPerson && !e.readonly && !e.disabled && l.value.push({
        type: "user",
        id: i.context.srfpersonid,
        name: i.context.srfpersonname,
        avatar: i.context.avatar
      }), !e.value && !e.readonly && !e.disabled && l.value && l.value.length > 0) {
        if (i.params && i.params.srfdefaulttype) {
          const a = l.value.filter((o) => o.type === i.params.srfdefaulttype);
          a.length > 0 ? r.value = a[0].id : r.value = l.value[0].id;
        } else
          r.value = l.value[0].id;
        C();
      }
    }), {
      c: i,
      ns: t,
      renderSelect: k,
      renderReadOnlyState: S
    };
  },
  render() {
    return s("div", {
      class: [this.ns.b(), this.readonly || this.disabled ? this.ns.m("readonly") : ""]
    }, [this.readonly || this.disabled ? this.renderReadOnlyState() : this.renderSelect()]);
  }
});
class X extends T {
  constructor() {
    super(...arguments);
    /**
     * 当前应用是否拥有ORG_M统一资源权限,有则数据集添加组织，没有则不添加
     *
     * @memberof TeamPickerController
     */
    d(this, "hasORG_M", !1);
    /**
     * 是否显示个人
     *
     * @type {boolean}
     * @memberof TeamPickerController
     */
    d(this, "showPerson", !1);
    /**
     * 所属类型代码表映射
     *
     * @type {IData}
     * @memberof TeamPickerController
     */
    d(this, "fillMap", {
      user: "user",
      user_group: "user_group",
      organization: "organization"
    });
    /**
     *自填模式sort排序
     *
     * @type {(string | undefined)}
     * @memberof TeamPickerController
     */
    d(this, "sort", "");
    /**
     * 数据集codeName
     */
    d(this, "interfaceName", "");
    /**
     *值项
     */
    d(this, "valueItem", "");
    /*
     * 实体自填模式模型
     */
    d(this, "deACMode");
    /**
     * 主键属性名称
     */
    d(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    d(this, "textName", "srfmajortext");
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
    // 用户列表
    d(this, "operatorMap", /* @__PURE__ */ new Map());
  }
  async onInit() {
    var i, r, l, c;
    super.onInit(), this.valueItem = ((i = this.model.valueItemName) == null ? void 0 : i.toLowerCase()) || "";
    const t = await ibiz.hub.getApp(this.context.srfappid);
    if (this.hasORG_M = t.authority.calcByResCode("ORG_M"), this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await j(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: u, minorSortDir: m } = this.deACMode;
      u && m && (this.sort = "".concat(u.toLowerCase(), ",").concat(m.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (h) => {
          h.id !== "value" && h.id !== "text" && this.dataItems.push(h);
        }
      ));
    }
    if (this.objectIdField = (r = this.model.objectIdField) == null ? void 0 : r.toLowerCase(), this.objectNameField = (l = this.model.objectNameField) == null ? void 0 : l.toLowerCase(), this.objectValueField = (c = this.model.objectValueField) == null ? void 0 : c.toLowerCase(), this.editorParams && this.editorParams.enablePerson && (this.showPerson = this.editorParams.enablePerson === "true"), this.editorParams && this.editorParams.fillMap)
      try {
        this.fillMap = JSON.parse(this.editorParams.fillMap);
      } catch (u) {
        this.fillMap = {
          user: "user",
          user_group: "user_group",
          organization: "organization"
        };
      }
    await this.getOperatorUserList();
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof TeamPickerController
   */
  async getServiceData(t, i, r) {
    const { context: l, params: c } = this.handlePublicParams(
      i,
      this.context,
      this.params
    ), u = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(u, { sort: this.sort }), t && Object.assign(u, { query: t }), Object.assign(u, { size: 1e3 });
    const m = Y(c, u);
    if (r)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        r,
        l,
        m
      );
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        this.interfaceName,
        l,
        m
      );
    throw new G(this.model, "请配置实体和实体数据集");
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let i = [];
    i = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      i.map((r) => [r.value, r])
    );
  }
}
class V {
  constructor() {
    d(this, "formEditor", "TeamPicker");
    d(this, "gridEditor", "TeamPicker");
  }
  async createController(n, t) {
    const i = new X(n, t);
    return await i.init(), i;
  }
}
const le = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.component(w.name, w), N(
      "EDITOR_CUSTOMSTYLE_MOB_TEAM_PICKER",
      () => new V()
    );
  }
};
export {
  le as default
};
