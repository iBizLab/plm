import './style.css';
var V = Object.defineProperty;
var _ = (t, d, c) => d in t ? V(t, d, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[d] = c;
var m = (t, d, c) => (_(t, typeof d != "symbol" ? d + "" : d, c), c);
import { ValueOP as r, CodeListEditorController as L, SearchBarFilterController as x, registerEditorProvider as U } from "@ibiz-template/runtime";
import { defineComponent as k, ref as w, watch as z, createVNode as n, createTextVNode as I, resolveComponent as p, isVNode as H, h as X } from "vue";
import { getInputProps as G, getEditorEmits as Q, useNamespace as j } from "@ibiz-template/vue3-util";
import { createUUID as R } from "qx-util";
const T = [
  { valueOP: r.EQ, label: "等于(=)" },
  { valueOP: r.NOT_EQ, label: "不等于(<>)" },
  { valueOP: r.GT, label: "大于(>)" },
  { valueOP: r.GT_AND_EQ, label: "大于等于(>=)" },
  { valueOP: r.LT, label: "小于(<)" },
  { valueOP: r.LT_AND_EQ, label: "小于等于(<=)" },
  { valueOP: r.IS_NULL, label: "值为空(Nil)" },
  { valueOP: r.IS_NOT_NULL, label: "值不为空(NotNil)" },
  { valueOP: r.IN, label: "值在范围中(In)" },
  { valueOP: r.NOT_IN, label: "值不在范围中(NotIn)" },
  { valueOP: r.LIKE, label: "文本包含(%)" },
  { valueOP: r.LIFT_LIKE, label: "文本左包含(%#)" },
  { valueOP: r.RIGHT_LIKE, label: "文本右包含(#%)" },
  { valueOP: r.EXISTS, label: "存在(EXISTS)" },
  { valueOP: r.NOT_EXISTS, label: "不存在(NOTEXISTS)" }
], K = [
  r.IS_NULL,
  r.IS_NOT_NULL,
  r.EXISTS,
  r.NOT_EXISTS
];
function D(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !H(t);
}
const A = /* @__PURE__ */ k({
  name: "IBizSearchBarFilterCondition",
  props: G(),
  emits: Q(),
  setup(t, {
    emit: d
  }) {
    const c = j("search-bar-filter-condition"), o = t.controller, u = w([]), l = w([{
      text: "且",
      value: "AND"
    }, {
      text: "或",
      value: "OR"
    }]), P = /* @__PURE__ */ new Map();
    l.value.forEach((e) => P.set(e.value, e.text));
    const f = /* @__PURE__ */ new Map();
    T.forEach((e) => f.set(e.valueOP, e.label)), z(() => t.value, () => {
      if (!t.value) {
        u.value = [];
        return;
      }
      if (typeof t.value == "string") {
        const e = JSON.parse(t.value), a = (e == null ? void 0 : e.condop) || "AND", i = (e == null ? void 0 : e.searchconds) || [];
        if (Array.isArray(i) && i.length) {
          u.value = i.map((h) => {
            const b = h.fieldname || "", v = h.condop || "", E = h.value, F = h.text, B = o.filterControllers.find((S) => S.fieldName === b ? S.valueOP ? S.valueOP === v : !0 : !1);
            return B != null && B.valueItem ? {
              key: R(),
              connection: a,
              field: b,
              valueOP: v,
              value: F,
              valueItem: E
            } : {
              key: R(),
              connection: a,
              field: b,
              valueOP: v,
              value: E
            };
          });
          return;
        }
      }
      u.value = [];
    }, {
      immediate: !0
    });
    const O = () => {
      var a;
      if (!u.value.length) {
        d("change", "");
        return;
      }
      const e = {
        condop: ((a = u.value[0]) == null ? void 0 : a.connection) || "AND",
        condtype: "GROUP",
        searchconds: []
      };
      u.value.forEach((i) => {
        const h = o.filterControllers.find((v) => v.fieldName === i.field ? v.valueOP ? v.valueOP === i.valueOP : !0 : !1), b = h != null && h.valueItem ? {
          condtype: "DEFIELD",
          fieldname: i.field,
          condop: i.valueOP,
          value: i.valueItem,
          text: i.value
        } : {
          condtype: "DEFIELD",
          fieldname: i.field,
          condop: i.valueOP,
          value: i.value
        };
        e.searchconds.push(b);
      }), d("change", JSON.stringify(e));
    };
    return {
      ns: c,
      c: o,
      items: u,
      connectionItems: l,
      connectionMap: P,
      filterModeMap: f,
      handleAdd: () => {
        var b, v, E;
        if (t.disabled || t.readonly)
          return;
        const e = u.value[0], a = ((b = o.fields[0]) == null ? void 0 : b.fieldName) || "", i = ((E = (v = o.fieldMap.get(a)) == null ? void 0 : v.valueOPs) == null ? void 0 : E[0]) || "", h = {
          key: R(),
          connection: (e == null ? void 0 : e.connection) || "AND",
          field: a,
          valueOP: i
        };
        u.value.push(h), O();
      },
      handleRemove: (e) => {
        t.disabled || t.readonly || (u.value.splice(e, 1), O());
      },
      renderEditor: (e) => {
        var i;
        if (!e.valueOP || K.includes(e.valueOP))
          return;
        const a = o.filterControllers.find((h) => h.fieldName === e.field ? h.valueOP ? h.valueOP === e.valueOP : !0 : !1);
        if (a && !a.noEditor) {
          if (a.editorProvider && a.editor) {
            const h = p(a.editorProvider.formEditor), b = {};
            return a.valueItem && (b[a.valueItem] = e.valueItem), X(h, {
              key: (i = a.editor.model) == null ? void 0 : i.id,
              value: e.value,
              controller: a.editor,
              disabled: t.disabled,
              readonly: t.readonly,
              data: b,
              onChange: (v, E) => {
                a.valueItem && E === a.valueItem ? e.valueItem = v : e.value = v, O();
              }
            });
          }
          return n(p("not-supported-editor"), {
            modelData: a.model.editor
          }, null);
        }
      },
      handleConnectionChange: (e) => {
        u.value.forEach((a) => {
          a.connection = e.connection;
        }), O();
      },
      handleFieldChange: async (e) => {
        var i;
        const a = o.fieldMap.get(e.field);
        e.valueOP = ((i = a == null ? void 0 : a.valueOPs) == null ? void 0 : i[0]) || "", e.value = void 0, e.valueItem = void 0, O();
      },
      handleValueOPChange: (e) => {
        e.value = void 0, e.valueItem = void 0, O();
      }
    };
  },
  render() {
    return n("div", {
      class: [this.ns.b(), this.disabled && this.ns.m("disabled"), this.readonly && this.ns.m("readonly"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [n("div", {
      class: [this.ns.b("content"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [this.c.borderMode === "BORDER" && n("div", {
      class: [this.ns.be("content", "total"), this.items.length && this.ns.bem("content", "total", "border")]
    }, [I("查询条件("), this.items.length, I(")")]), this.items.map((t, d) => {
      var u;
      let c, o;
      return n("div", {
        class: this.ns.b("item")
      }, [n("div", {
        class: [this.ns.be("item", "connection"), d === 0 && this.ns.bem("item", "connection", "init")]
      }, [d === 0 ? n("div", null, [I("当")]) : this.readonly ? n("div", {
        class: this.ns.bem("item", "connection", "readonly")
      }, [this.connectionMap.get(t.connection) || ""]) : n(p("el-select"), {
        modelValue: t.connection,
        "onUpdate:modelValue": (l) => t.connection = l,
        disabled: d > 1 || this.disabled,
        onChange: () => {
          this.handleConnectionChange(t);
        }
      }, D(c = this.connectionItems.map((l) => n(p("el-option"), {
        key: l.value,
        value: l.value,
        label: l.text
      }, null))) ? c : {
        default: () => [c]
      })]), n("div", {
        class: this.ns.b("item-content")
      }, [n("div", {
        class: this.ns.be("item", "field")
      }, [this.readonly ? ((u = this.c.fieldMap.get(t.field)) == null ? void 0 : u.label) || "" : n(p("el-select"), {
        modelValue: t.field,
        "onUpdate:modelValue": (l) => t.field = l,
        disabled: this.disabled,
        onChange: () => {
          this.handleFieldChange(t);
        }
      }, D(o = this.c.fields.map((l) => n(p("el-option"), {
        key: l.fieldName,
        value: l.fieldName,
        label: l.label
      }, null))) ? o : {
        default: () => [o]
      })]), n("div", {
        class: this.ns.be("item", "valueOP")
      }, [this.readonly ? this.filterModeMap.get(t.valueOP) || t.valueOP || "" : n(p("el-select"), {
        modelValue: t.valueOP,
        "onUpdate:modelValue": (l) => t.valueOP = l,
        disabled: this.disabled,
        onChange: () => {
          this.handleValueOPChange(t);
        }
      }, {
        default: () => {
          var l, P;
          return [(P = (l = this.c.fieldMap.get(t.field)) == null ? void 0 : l.valueOPs) == null ? void 0 : P.map((f) => n(p("el-option"), {
            key: f,
            value: f,
            label: this.filterModeMap.get(f) || f
          }, null))];
        }
      })]), n("div", {
        class: this.ns.be("item", "editor")
      }, [this.renderEditor(t)])]), n("div", {
        class: this.ns.be("item", "btn"),
        title: "删除",
        onClick: (l) => {
          l.stopPropagation(), this.handleRemove(d);
        }
      }, [n("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [n("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [n("path", {
        d: "M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z"
      }, null)])])])]);
    })]), n("div", {
      class: [this.ns.b("footer"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [n("div", {
      class: this.ns.b("footer-btn"),
      onClick: this.handleAdd
    }, [n("svg", {
      class: this.ns.be("footer-btn", "icon"),
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [n("g", {
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [n("path", {
      d: "M8.578 7.383V1.602a.601.601 0 1 0-1.2 0v5.781H1.6a.601.601 0 0 0 0 1.203h5.777v5.812a.601.601 0 1 0 1.2 0V8.586H14.4a.601.601 0 0 0 0-1.203H8.578z"
    }, null)])]), n("div", {
      class: this.ns.be("footer-btn", "text")
    }, [I("新增筛选条件")])])])]);
  }
});
class Y extends L {
  constructor() {
    super(...arguments);
    /**
     * 字段
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:41
     * @type {IField[]}
     */
    m(this, "fields", []);
    /**
     * 字段映射
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:55
     * @type {Map<string, IField>}
     */
    m(this, "fieldMap", /* @__PURE__ */ new Map());
    /**
     * 搜索栏过滤项控制器列表
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:38
     * @type {SearchBarFilterController[]}
     */
    m(this, "filterControllers", []);
    /**
     * 边框模式
     *
     * @author zhanghengfeng
     * @date 2024-07-24 16:07:00
     * @type {('DEFAULT' | 'BORDER')}
     */
    m(this, "borderMode", "DEFAULT");
    /**
     * 搜索栏名称
     *
     * @author zhanghengfeng
     * @date 2024-07-24 17:07:35
     * @type {string}
     */
    m(this, "searchBarName", "searchbar");
  }
  async onInit() {
    var c, o;
    await super.onInit(), this.borderMode = ((c = this.editorParams) == null ? void 0 : c.BORDERMODE) === "BORDER" ? "BORDER" : "DEFAULT", (o = this.editorParams) != null && o.SEARCHBARNAME && (this.searchBarName = this.editorParams.SEARCHBARNAME), await this.initFields();
  }
  /**
   * 初始化字段
   *
   * @author zhanghengfeng
   * @date 2024-07-24 16:07:38
   * @return {*}  {Promise<void>}
   */
  async initFields() {
    var g, C, y, M;
    const c = this.searchBarName, o = this.parent;
    if (!o)
      return;
    const u = (M = (y = (C = (g = o.form) == null ? void 0 : g.view) == null ? void 0 : C.layoutPanel) == null ? void 0 : y.model) == null ? void 0 : M.controls;
    if (!Array.isArray(u))
      return;
    const l = u.find((s) => s.name === c);
    if (!l || !Array.isArray(l.searchBarFilters) || !l.searchBarFilters.length || !l.appDataEntityId)
      return;
    const P = await ibiz.hub.getAppDataEntity(
      l.appDataEntityId,
      this.context.srfappid
    ), f = l.searchBarFilters.map((s) => new x(
      s,
      P,
      this.context,
      this.params
    ));
    await Promise.all(f.map((s) => s.init()));
    const O = [], N = /* @__PURE__ */ new Map();
    f.forEach((s) => {
      if (s.hidden)
        return;
      let e = O.find((a) => a.fieldName === s.fieldName);
      e || (e = {
        fieldName: s.fieldName,
        label: s.label,
        valueOPs: []
      }, O.push(e)), s.valueOP ? e.valueOPs.push(s.valueOP) : e.valueOPs = T.map((a) => a.valueOP);
    }), O.forEach((s) => {
      s.valueOPs = [...new Set(s.valueOPs)], N.set(s.fieldName, s);
    }), this.fields = O, this.fieldMap = N, this.filterControllers = f.filter((s) => !s.hidden);
  }
}
class J {
  constructor() {
    m(this, "formEditor", "IBizSearchBarFilterCondition");
    m(this, "gridEditor", "IBizSearchBarFilterCondition");
  }
  async createController(d, c) {
    const o = new Y(
      d,
      c
    );
    return await o.init(), o;
  }
}
const ae = {
  install(t) {
    t.component(
      A.name,
      A
    ), U(
      "EDITOR_CUSTOMSTYLE_SEARCH_BAR_FILTER_CONDITION",
      () => new J()
    );
  }
};
export {
  ae as default
};
