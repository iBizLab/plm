import './style.css';
var L = Object.defineProperty;
var S = (n, l, s) => l in n ? L(n, l, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[l] = s;
var p = (n, l, s) => (S(n, typeof l != "symbol" ? l + "" : l, s), s);
import { ValueOP as e, getEditorProvider as C, CodeListEditorController as F, getEntitySchema as D, registerEditorProvider as M } from "@ibiz-template/runtime";
import { defineComponent as y, ref as N, watch as w, createVNode as i, createTextVNode as f, resolveComponent as v, isVNode as R, h as U } from "vue";
import { getInputProps as V, getEditorEmits as A, useNamespace as B } from "@ibiz-template/vue3-util";
import { createUUID as P } from "qx-util";
const x = {
  string: [
    e.EQ,
    e.NOT_EQ,
    e.IS_NULL,
    e.IS_NOT_NULL,
    e.USER_LIKE,
    e.LIKE,
    e.LIFT_LIKE,
    e.RIGHT_LIKE
  ],
  number: [
    e.EQ,
    e.GT,
    e.GT_AND_EQ,
    e.LT,
    e.LT_AND_EQ,
    e.NOT_EQ,
    e.IS_NULL,
    e.IS_NOT_NULL,
    e.IN,
    e.NOT_IN
  ],
  date: [
    e.EQ,
    e.GT,
    e.GT_AND_EQ,
    e.LT,
    e.LT_AND_EQ,
    e.NOT_EQ,
    e.IS_NULL,
    e.IS_NOT_NULL,
    e.IN,
    e.NOT_IN
  ],
  dropdown: [
    e.EQ,
    e.NOT_EQ,
    e.IS_NULL,
    e.IS_NOT_NULL,
    e.IN,
    e.NOT_IN
  ],
  dataPicker: [
    e.EQ,
    e.NOT_EQ,
    e.IS_NULL,
    e.IS_NOT_NULL,
    e.IN,
    e.NOT_IN
  ]
}, Q = [
  e.IS_NULL,
  e.IS_NOT_NULL,
  e.EXISTS,
  e.NOT_EXISTS
], j = {
  string: {
    appId: "",
    editorType: "TEXTBOX"
  },
  number: {
    appId: "",
    editorType: "NUMBER"
  },
  date: {
    appId: "",
    editorType: "DATEPICKEREX",
    dateTimeFormat: "YYYY-MM-DD"
  },
  dropdown: {
    appId: "",
    valueType: "SIMPLE",
    editorType: "MDROPDOWNLIST",
    appCodeListId: "",
    editorParams: {
      overflowMode: "ellipsis"
    }
  },
  dataPicker: {
    appId: "",
    editorType: "ADDRESSPICKUP",
    appDEDataSetId: "fetchdefault",
    objectIdField: "srfkey",
    objectNameField: "srfmajortext",
    valueType: "OBJECTS",
    editorParams: {
      overflowMode: "ellipsis"
    }
  }
}, k = [
  { valueOP: e.EQ, label: "等于(=)" },
  { valueOP: e.NOT_EQ, label: "不等于(<>)" },
  { valueOP: e.GT, label: "大于(>)" },
  { valueOP: e.GT_AND_EQ, label: "大于等于(>=)" },
  { valueOP: e.LT, label: "小于(<)" },
  { valueOP: e.LT_AND_EQ, label: "小于等于(<=)" },
  { valueOP: e.IS_NULL, label: "值为空(Nil)" },
  { valueOP: e.IS_NOT_NULL, label: "值不为空(NotNil)" },
  { valueOP: e.IN, label: "值在范围中(In)" },
  { valueOP: e.NOT_IN, label: "值不在范围中(NotIn)" },
  { valueOP: e.LIKE, label: "文本包含(%)" },
  { valueOP: e.LIFT_LIKE, label: "文本左包含(%#)" },
  { valueOP: e.RIGHT_LIKE, label: "文本右包含(#%)" },
  { valueOP: e.EXISTS, label: "存在(EXISTS)" },
  { valueOP: e.NOT_EXISTS, label: "不存在(NOTEXISTS)" }
];
function g(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !R(n);
}
const _ = /* @__PURE__ */ y({
  name: "IBizFilterCondition",
  props: V(),
  emits: A(),
  setup(n, {
    emit: l
  }) {
    const s = B("filter-condition"), o = n.controller, a = N([]), h = N([{
      text: "且",
      value: "AND"
    }, {
      text: "或",
      value: "OR"
    }]), r = /* @__PURE__ */ new Map();
    k.forEach((t) => r.set(t.valueOP, t.label));
    const E = async (t) => {
      const d = o.schemaFieldMap.get(t.field);
      if (!d)
        return;
      const c = o.getEditor(d), u = await C(c);
      if (u) {
        t.editorProvider = u;
        const m = await u.createController(c, {
          context: o.context,
          params: o.params
        });
        t.editor = m;
      }
    };
    w(() => n.value, async () => {
      if (!n.value) {
        a.value = [];
        return;
      }
      if (typeof n.value == "string") {
        const t = JSON.parse(n.value), d = (t == null ? void 0 : t.condop) || "AND", c = (t == null ? void 0 : t.searchconds) || [];
        if (Array.isArray(c) && c.length) {
          a.value = await Promise.all(c.map(async (u) => {
            const m = u.fieldname || "", I = u.condop || "", b = u.value, T = {
              key: P(),
              connection: d,
              field: m,
              valueOP: I,
              value: b
            };
            return await E(T), T;
          }));
          return;
        }
      }
      a.value = [];
    }, {
      immediate: !0
    });
    const O = () => {
      var d;
      if (!a.value.length) {
        l("change", "");
        return;
      }
      const t = {
        condop: ((d = a.value[0]) == null ? void 0 : d.connection) || "AND",
        condtype: "GROUP",
        searchconds: []
      };
      a.value.forEach((c) => {
        t.searchconds.push({
          condtype: "DEFIELD",
          fieldname: c.field,
          condop: c.valueOP,
          value: c.value
        });
      }), l("change", JSON.stringify(t));
    };
    return {
      ns: s,
      c: o,
      items: a,
      connectionItems: h,
      filterModeMap: r,
      handleAdd: async () => {
        var m, I, b;
        if (n.disabled)
          return;
        const t = a.value[0], d = ((m = o.schemaFields[0]) == null ? void 0 : m.appDEFieldId) || "", c = ((b = (I = o.schemaFieldMap.get(d)) == null ? void 0 : I.valueOPs) == null ? void 0 : b[0]) || "", u = {
          key: P(),
          connection: t != null && t.connection ? t.connection : "AND",
          field: d,
          valueOP: c
        };
        await E(u), a.value.push(u), O();
      },
      handleRemove: (t) => {
        n.disabled || (a.value.splice(t, 1), O());
      },
      renderEditor: (t) => {
        if (!t.valueOP || Q.includes(t.valueOP))
          return null;
        if (t.editorProvider && t.editor) {
          const d = v(t.editorProvider.formEditor);
          return U(d, {
            value: t.value,
            controller: t.editor,
            disabled: n.disabled,
            onChange: (c) => {
              t.value = c, O();
            }
          });
        }
      },
      handleConnectionChange: (t) => {
        a.value.forEach((d) => {
          d.connection = t.connection;
        }), O();
      },
      handleFieldChange: async (t) => {
        var c;
        const d = o.schemaFieldMap.get(t.field);
        t.valueOP = ((c = d == null ? void 0 : d.valueOPs) == null ? void 0 : c[0]) || "", t.value = void 0, t.editorProvider = void 0, t.editor = void 0, await E(t), O();
      },
      handleValueOPChange: (t) => {
        t.value = void 0, O();
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b(), this.disabled && this.ns.m("disabled"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [i("div", {
      class: [this.ns.b("content"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [this.c.borderMode && i("div", {
      class: this.ns.be("content", "total")
    }, [f("查询条件("), this.items.length, f(")")]), this.items.map((n, l) => {
      let s, o;
      return i("div", {
        class: this.ns.b("item")
      }, [i("div", {
        class: [this.ns.be("item", "connection"), l === 0 && this.ns.bem("item", "connection", "init")]
      }, [l === 0 ? i("div", null, [f("当")]) : i(v("el-select"), {
        modelValue: n.connection,
        "onUpdate:modelValue": (a) => n.connection = a,
        disabled: l > 1 || this.disabled,
        onChange: () => {
          this.handleConnectionChange(n);
        }
      }, g(s = this.connectionItems.map((a) => i(v("el-option"), {
        key: a.value,
        value: a.value,
        label: a.text
      }, null))) ? s : {
        default: () => [s]
      })]), i("div", {
        class: this.ns.b("item-content")
      }, [i("div", {
        class: this.ns.be("item", "field")
      }, [i(v("el-select"), {
        modelValue: n.field,
        "onUpdate:modelValue": (a) => n.field = a,
        disabled: this.disabled,
        onChange: () => {
          this.handleFieldChange(n);
        }
      }, g(o = this.c.schemaFields.map((a) => i(v("el-option"), {
        key: a.appDEFieldId,
        value: a.appDEFieldId,
        label: a.caption
      }, null))) ? o : {
        default: () => [o]
      })]), i("div", {
        class: this.ns.be("item", "valueOP")
      }, [i(v("el-select"), {
        modelValue: n.valueOP,
        "onUpdate:modelValue": (a) => n.valueOP = a,
        disabled: this.disabled,
        onChange: () => {
          this.handleValueOPChange(n);
        }
      }, {
        default: () => {
          var a, h;
          return [(h = (a = this.c.schemaFieldMap.get(n.field)) == null ? void 0 : a.valueOPs) == null ? void 0 : h.map((r) => i(v("el-option"), {
            key: r,
            value: r,
            label: this.filterModeMap.get(r) || r
          }, null))];
        }
      })]), i("div", {
        class: this.ns.be("item", "editor")
      }, [this.renderEditor(n)])]), i("div", {
        class: this.ns.be("item", "btn"),
        onClick: (a) => {
          a.stopPropagation(), this.handleRemove(l);
        }
      }, [i("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [i("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [i("path", {
        d: "M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z"
      }, null)])])])]);
    })]), i("div", {
      class: [this.ns.b("footer"), this.ns.is("border-mode", this.c.borderMode === "BORDER")]
    }, [i("div", {
      class: this.ns.b("footer-btn"),
      onClick: this.handleAdd
    }, [i("svg", {
      class: this.ns.be("footer-btn", "icon"),
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [i("g", {
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [i("path", {
      d: "M8.578 7.383V1.602a.601.601 0 1 0-1.2 0v5.781H1.6a.601.601 0 0 0 0 1.203h5.777v5.812a.601.601 0 1 0 1.2 0V8.586H14.4a.601.601 0 0 0 0-1.203H8.578z"
    }, null)])]), i("div", {
      class: this.ns.be("footer-btn", "text")
    }, [f("新增筛选条件")])])])]);
  }
});
class z extends F {
  constructor() {
    super(...arguments);
    /**
     * jsonSchema标识
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:15
     * @type {string}
     */
    p(this, "jsonSchemaTag", "");
    /**
     * jsonSchema属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:38
     * @type {ISchemaField[]}
     */
    p(this, "schemaFields", []);
    /**
     * jsonSchema属性字段映射
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:04
     */
    p(this, "schemaFieldMap", /* @__PURE__ */ new Map());
    /**
     * 边框模式
     *
     * @type {boolean}
     * @memberof FilterConditionController
     */
    p(this, "borderMode", "DEFAULT");
  }
  /**
   * 初始化
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:23
   * @protected
   * @return {*}  {Promise<void>}
   */
  async onInit() {
    var s, o;
    if (await super.onInit(), this.jsonSchemaTag = ((s = this.editorParams) == null ? void 0 : s.JSONSCHEMATAG) || "", this.borderMode = ((o = this.editorParams) == null ? void 0 : o.BORDERMODE) === "BORDER" ? "BORDER" : "DEFAULT", this.jsonSchemaTag) {
      const a = await D(
        this.jsonSchemaTag,
        this.context,
        {
          ...this.params
        }
      );
      if (a) {
        const h = this.calcSchemaFieldBySchema(a);
        this.schemaFields = h, this.schemaFields.forEach((r) => {
          this.schemaFieldMap.set(r.appDEFieldId, r);
        });
      }
    }
  }
  /**
   * 计算jsonSchema属性字段
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:35
   * @param {IData} jsonSchema
   * @return {*}  {ISchemaField[]}
   */
  calcSchemaFieldBySchema(s) {
    if (!s.properties)
      return [];
    const { properties: o } = s;
    if (!Object.keys(o).length)
      return [];
    const a = [];
    return Object.keys(o).forEach((h) => {
      var E;
      let r = "string";
      switch (o[h].type) {
        case "string":
          o[h].format === "date-time" && (r = "date"), o[h].enumSource && (r = "dropdown");
          break;
        case "integer":
        case "number":
          r = "number";
          break;
        default:
          o[h].$ref && (r = "dataPicker");
          break;
      }
      a.push({
        type: r,
        appDEFieldId: h,
        valueOPs: x[r],
        caption: o[h].description,
        appDataEntityId: (E = o[h].$ref) == null ? void 0 : E.split(".")[0],
        appCodeListId: o[h].enumSource
      });
    }), a;
  }
  /**
   * 获取编辑器模型
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:49
   * @param {ISchemaField} field
   * @return {*}  {IEditor}
   */
  getEditor(s) {
    const o = { ...j[s.type] };
    return s.type === "dropdown" && Object.assign(o, {
      appCodeListId: s.appCodeListId
    }), s.type === "dataPicker" && Object.assign(o, {
      appDataEntityId: s.appDataEntityId
    }), o;
  }
}
class G {
  constructor() {
    p(this, "formEditor", "IBizFilterCondition");
    p(this, "gridEditor", "IBizFilterCondition");
  }
  async createController(l, s) {
    const o = new z(l, s);
    return await o.init(), o;
  }
}
const ae = {
  install(n) {
    n.component(_.name, _), M(
      "EDITOR_CUSTOMSTYLE_FILTER_CONDITION",
      () => new G()
    );
  }
};
export {
  ae as default
};
