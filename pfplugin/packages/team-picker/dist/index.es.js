import './style.css';
var $ = Object.defineProperty;
var G = (i, d, t) => d in i ? $(i, d, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[d] = t;
var l = (i, d, t) => (G(i, typeof d != "symbol" ? d + "" : d, t), t);
import { EditorController as Y, getDeACMode as J, registerEditorProvider as W } from "@ibiz-template/runtime";
import { defineComponent as q, ref as b, computed as K, watch as Q, onMounted as X, onBeforeUnmount as V, createVNode as s, resolveComponent as x, createTextVNode as g } from "vue";
import { getDataPickerProps as ee, getEditorEmits as te, useNamespace as ae } from "@ibiz-template/vue3-util";
import { createUUID as se } from "qx-util";
import { RuntimeModelError as re } from "@ibiz-template/core";
import { mergeDeepLeft as ie } from "ramda";
const D = /* @__PURE__ */ q({
  name: "TeamPicker",
  props: ee(),
  emits: te(),
  setup(i, {
    emit: d
  }) {
    const t = ae("team-picker"), r = i.controller, o = b(""), n = b([]), c = b(!1), u = se();
    let h = !1;
    const f = b(), M = K(() => !!(i.controlParams && i.controlParams.editmode === "hover" && !i.readonly)), L = () => {
      const e = document.documentElement;
      return e ? getComputedStyle(e).getPropertyValue("--ibiz-color-primary") : null;
    }, z = (e) => /[\u4E00-\u9FA5]/.test(e), O = (e) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(e), T = (e) => {
      if (!e)
        return "";
      let a = 0;
      for (let y = 0; y < e.length; y++)
        if (z(e))
          a = e.charCodeAt(y) + ((a << 5) - a), a = a & a;
        else {
          const H = e.charCodeAt(y);
          a += H.toString(16);
        }
      const m = String(a).substring(0, 6);
      let C = parseInt(m.substring(0, 2), 16), p = parseInt(m.substring(2, 4), 16), w = parseInt(m.substring(4, 6), 16);
      C < 0 && (C = 10), p < 0 && (p = 10), w < 0 && (w = 10);
      const v = "#".concat(C.toString(16).padStart(2, "0")).concat(p.toString(16).padStart(2, "0")).concat(w.toString(16).padStart(2, "0"));
      return v === "#FFFFFF" && L() || v;
    }, j = (e) => {
      if (e && e.toString().length < 2)
        return e;
      if (e && e.toString().length >= 2) {
        if (O(e)) {
          const p = e.split("").find((v) => /[a-zA-Z]/.test(v)) || "", w = e.split("").find((v) => /[\u4E00-\u9FA5]/.test(v)) || "";
          return "".concat(p).concat(w).toLowerCase();
        }
        return /[a-zA-Z]/.test(e) ? e.split("").filter((p) => /[a-zA-Z]/.test(p)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((p) => /[\u4E00-\u9FA5]/.test(p)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
      }
    }, E = () => {
      const e = n.value.find((a) => a.id === o.value);
      if (e) {
        const a = r.fillMap[e.type];
        d("change", a), r.valueItem && d("change", e.id, r.valueItem);
      }
    }, I = (e) => {
      o.value = e.id, c.value = !1, E();
    }, S = (e) => {
      if (e.avatar) {
        const m = JSON.parse(e.avatar), p = ibiz.util.file.calcFileUpDownUrl(r.context, r.params).downloadUrl.replace("%fileId%", m[0].id);
        return s("img", {
          class: t.em("item", "img-avatar"),
          src: p,
          alt: ""
        }, null);
      }
      const a = e.name;
      return s("div", {
        class: t.em("item", "text-avatar"),
        style: "background-color:".concat(T(a))
      }, [j(a)]);
    }, k = (e) => s("div", {
      class: t.e("item"),
      onClick: () => I(e)
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
    }, [g("组织")]), s("span", {
      class: t.em("item", "type-divide")
    }, [g("/")]), s("span", {
      class: t.em("item", "orgname"),
      title: e.name
    }, [e.name])])]), N = (e) => s("div", {
      class: t.e("item"),
      onClick: () => I(e)
    }, [s("div", {
      class: t.em("item", "text-icon")
    }, [S(e)]), s("div", {
      class: t.em("item", "content")
    }, [s("span", {
      class: t.em("item", "type")
    }, [g("个人")]), s("span", {
      class: t.em("item", "type-divide")
    }, [g("/")]), s("span", {
      class: t.em("item", "personname"),
      title: e.name
    }, [e.name])])]), _ = (e) => s("div", {
      class: t.e("item"),
      onClick: () => I(e)
    }, [e.avatar ? s("div", {
      class: t.em("item", "text-icon")
    }, [S(e)]) : s("svg", {
      class: t.em("item", "team-icon"),
      viewBox: "0 0 16 16",
      version: "1.1",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "currentColor"
    }, [s("title", null, [g("normal/user-group-avatar@1x")]), s("g", {
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
    }, [g("团队")]), s("span", {
      class: t.em("item", "type-divide")
    }, [g("/")]), s("span", {
      class: t.em("item", "personname"),
      title: e.name
    }, [e.name])])]), A = (e) => e.type === "organization" ? k(e) : e.type === "user" ? N(e) : _(e);
    Q(() => i.value, () => {
      if (r.valueItem) {
        const e = i.data[r.valueItem];
        o.value = e;
      }
    }, {
      immediate: !0
    });
    const R = async () => {
      let e = null;
      (i.readonly || i.disabled) && (e = "fetch_reader");
      const a = await r.getServiceData("", i.data, e);
      a && a.data && (n.value = a.data.map((m) => ({
        ...m,
        type: "user_group"
      })));
    }, U = () => {
      if (!i.value || !i.data[r.valueItem])
        return null;
      const e = {};
      if (Object.keys(r.fillMap).some((a) => {
        if (r.fillMap[a] === i.value)
          return e.type = a, !0;
      }), e.type === "user") {
        const a = r.operatorMap.get(i.data[r.valueItem]);
        a && Object.assign(e, a, {
          name: a.text,
          avatar: a.data.iconurl
        });
      } else {
        const a = n.value.find((m) => m.id === i.data[r.valueItem]);
        a && Object.assign(e, a);
      }
      return s("div", {
        class: t.em("item", "readonly")
      }, [A(e)]);
    }, P = (e) => {
      h = e;
    }, Z = () => {
      if (!o.value)
        return;
      const e = n.value.find((a) => a.id === o.value);
      if (e)
        return A(e);
    }, B = () => {
      var e;
      return s("div", {
        class: t.e("select")
      }, [s(x("el-popover"), {
        trigger: "click",
        visible: c.value,
        "onUpdate:visible": (a) => c.value = a,
        width: (e = f.value) == null ? void 0 : e.offsetWidth
      }, {
        reference: () => s("div", {
          id: u,
          class: [t.em("select", "input"), t.is("focus", c.value)],
          ref: f
        }, [s("div", {
          class: t.em("select", "input-content")
        }, [Z()]), s("div", {
          class: t.em("select", "input-icon")
        }, [s(x("el-icon"), {
          class: t.is("reverse", c.value)
        }, {
          default: () => [s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024"
          }, [s("path", {
            fill: "currentColor",
            d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          }, null)])]
        })])]),
        default: () => s("div", {
          class: t.em("select", "list"),
          onMouseenter: () => P(!0),
          onMouseleave: () => P(!1)
        }, [n.value.map((a) => A(a))])
      })]);
    }, F = (e) => {
      e.target && e.target.id === u || h || (c.value = !1);
    };
    return X(async () => {
      if (await R(), (r.hasORG_M || i.readonly || i.disabled) && n.value.unshift({
        type: "organization",
        id: r.context.srforgid,
        name: r.context.srforgname
      }), r.showPerson && !i.readonly && !i.disabled && n.value.push({
        type: "user",
        id: r.context.srfpersonid,
        name: r.context.srfpersonname,
        avatar: r.context.avatar
      }), !i.value && !i.readonly && !i.disabled && n.value && n.value.length > 0) {
        if (r.params && r.params.srfdefaulttype) {
          const e = n.value.filter((a) => a.type === r.params.srfdefaulttype);
          e.length > 0 ? o.value = e[0].id : o.value = n.value[0].id;
        } else
          o.value = n.value[0].id;
        E();
      }
      window.addEventListener("pointerdown", F);
    }), V(() => {
      window.removeEventListener("pointerdown", F);
    }), {
      c: r,
      ns: t,
      renderSelect: B,
      renderReadOnlyState: U,
      showFormDefaultContent: M
    };
  },
  render() {
    return s("div", {
      class: [this.ns.b(), this.readonly || this.disabled ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.readonly || this.disabled ? this.renderReadOnlyState() : this.renderSelect()]);
  }
});
class ne extends Y {
  constructor() {
    super(...arguments);
    /**
     * 当前应用是否拥有ORG_M统一资源权限,有则数据集添加组织，没有则不添加
     *
     * @memberof TeamPickerController
     */
    l(this, "hasORG_M", !1);
    /**
     * 是否显示个人
     *
     * @type {boolean}
     * @memberof TeamPickerController
     */
    l(this, "showPerson", !1);
    /**
     * 所属类型代码表映射
     *
     * @type {IData}
     * @memberof TeamPickerController
     */
    l(this, "fillMap", {
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
    l(this, "sort", "");
    /**
     * 数据集codeName
     */
    l(this, "interfaceName", "");
    /**
     *值项
     */
    l(this, "valueItem", "");
    /*
     * 实体自填模式模型
     */
    l(this, "deACMode");
    /**
     * 主键属性名称
     */
    l(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    l(this, "textName", "srfmajortext");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    l(this, "dataItems", []);
    // 对象标识属性
    l(this, "objectIdField", "");
    // 对象名称属性
    l(this, "objectNameField", "");
    // 对象值属性
    l(this, "objectValueField", "");
    // 用户列表
    l(this, "operatorMap", /* @__PURE__ */ new Map());
  }
  async onInit() {
    var r, o, n, c;
    super.onInit(), this.valueItem = ((r = this.model.valueItemName) == null ? void 0 : r.toLowerCase()) || "";
    const t = await ibiz.hub.getApp(this.context.srfappid);
    if (this.hasORG_M = t.authority.calcByResCode("ORG_M"), this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await J(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: u, minorSortDir: h } = this.deACMode;
      u && h && (this.sort = "".concat(u.toLowerCase(), ",").concat(h.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (f) => {
          f.id !== "value" && f.id !== "text" && this.dataItems.push(f);
        }
      ));
    }
    if (this.objectIdField = (o = this.model.objectIdField) == null ? void 0 : o.toLowerCase(), this.objectNameField = (n = this.model.objectNameField) == null ? void 0 : n.toLowerCase(), this.objectValueField = (c = this.model.objectValueField) == null ? void 0 : c.toLowerCase(), this.editorParams && this.editorParams.enablePerson && (this.showPerson = this.editorParams.enablePerson === "true"), this.editorParams && this.editorParams.fillMap)
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
  async getServiceData(t, r, o) {
    const { context: n, params: c } = this.handlePublicParams(
      r,
      this.context,
      this.params
    ), u = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(u, { sort: this.sort }), t && Object.assign(u, { query: t }), Object.assign(u, { size: 1e3 });
    const h = ie(c, u);
    if (o)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        o,
        n,
        h
      );
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        this.interfaceName,
        n,
        h
      );
    throw new re(this.model, "请配置实体和实体数据集");
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let r = [];
    r = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      r.map((o) => [o.value, o])
    );
  }
}
class oe {
  constructor() {
    l(this, "formEditor", "TeamPicker");
    l(this, "gridEditor", "TeamPicker");
  }
  async createController(d, t) {
    const r = new ne(d, t);
    return await r.init(), r;
  }
}
const fe = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(i) {
    i.component(D.name, D), W(
      "EDITOR_CUSTOMSTYLE_TEAM_PICKER",
      () => new oe()
    );
  }
};
export {
  fe as default
};
