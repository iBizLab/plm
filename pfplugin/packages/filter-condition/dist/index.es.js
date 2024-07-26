import './style.css';
var L = Object.defineProperty;
var S = (n, s, l) => s in n ? L(n, s, { enumerable: !0, configurable: !0, writable: !0, value: l }) : n[s] = l;
var m = (n, s, l) => (S(n, typeof s != "symbol" ? s + "" : s, l), l);
import { ValueOP as e, getEditorProvider as C, CodeListEditorController as F, getEntitySchema as y, registerEditorProvider as w } from "@ibiz-template/runtime";
import { defineComponent as D, ref as T, watch as M, createVNode as o, createTextVNode as b, resolveComponent as p, isVNode as U, h as V } from "vue";
import { getInputProps as A, getEditorEmits as x, useNamespace as Q } from "@ibiz-template/vue3-util";
import { createUUID as P } from "qx-util";
const R = {
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
}, j = [
  e.IS_NULL,
  e.IS_NOT_NULL,
  e.EXISTS,
  e.NOT_EXISTS
], B = {
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
function _(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !U(n);
}
const g = /* @__PURE__ */ D({
  name: "IBizFilterCondition",
  props: A(),
  emits: x(),
  setup(n, {
    emit: s
  }) {
    const l = Q("filter-condition"), i = n.controller, a = T([]), c = T([{
      text: "且",
      value: "AND"
    }, {
      text: "或",
      value: "OR"
    }]), u = /* @__PURE__ */ new Map();
    k.forEach((t) => u.set(t.valueOP, t.label));
    const v = async (t) => {
      const d = i.schemaFieldMap.get(t.field);
      if (!d)
        return;
      const r = i.getEditor(d), h = await C(r);
      if (h) {
        t.editorProvider = h;
        const E = await h.createController(r, {
          context: i.context,
          params: i.params
        });
        t.editor = E;
      }
    };
    M(() => n.value, async () => {
      if (!n.value) {
        a.value = [];
        return;
      }
      if (typeof n.value == "string") {
        const t = JSON.parse(n.value), d = (t == null ? void 0 : t.condop) || "AND", r = (t == null ? void 0 : t.searchconds) || [];
        if (Array.isArray(r) && r.length) {
          a.value = await Promise.all(r.map(async (h) => {
            const E = h.fieldname || "", O = h.condop || "", f = h.value, N = {
              key: P(),
              connection: d,
              field: E,
              valueOP: O,
              value: f
            };
            return await v(N), N;
          }));
          return;
        }
      }
      a.value = [];
    }, {
      immediate: !0
    });
    const I = () => {
      var d;
      if (!a.value.length) {
        s("change", "");
        return;
      }
      const t = {
        condop: ((d = a.value[0]) == null ? void 0 : d.connection) || "AND",
        condtype: "GROUP",
        searchconds: []
      };
      a.value.forEach((r) => {
        t.searchconds.push({
          condtype: "DEFIELD",
          fieldname: r.field,
          condop: r.valueOP,
          value: r.value
        });
      }), s("change", JSON.stringify(t));
    };
    return {
      ns: l,
      c: i,
      items: a,
      connectionItems: c,
      filterModeMap: u,
      handleAdd: async () => {
        var E, O, f;
        if (n.disabled)
          return;
        const t = a.value[0], d = ((E = i.schemaFields[0]) == null ? void 0 : E.appDEFieldId) || "", r = ((f = (O = i.schemaFieldMap.get(d)) == null ? void 0 : O.valueOPs) == null ? void 0 : f[0]) || "", h = {
          key: P(),
          connection: t != null && t.connection ? t.connection : "AND",
          field: d,
          valueOP: r
        };
        await v(h), a.value.push(h), I();
      },
      handleRemove: (t) => {
        n.disabled || (a.value.splice(t, 1), I());
      },
      renderEditor: (t) => {
        if (!t.valueOP || j.includes(t.valueOP))
          return null;
        if (t.editorProvider && t.editor) {
          const d = p(t.editorProvider.formEditor);
          return V(d, {
            value: t.value,
            controller: t.editor,
            disabled: n.disabled,
            onChange: (r) => {
              t.value = r, I();
            }
          });
        }
      },
      handleConnectionChange: (t) => {
        a.value.forEach((d) => {
          d.connection = t.connection;
        }), I();
      },
      handleFieldChange: async (t) => {
        var r;
        const d = i.schemaFieldMap.get(t.field);
        t.valueOP = ((r = d == null ? void 0 : d.valueOPs) == null ? void 0 : r[0]) || "", t.value = void 0, t.editorProvider = void 0, t.editor = void 0, await v(t), I();
      },
      handleValueOPChange: (t) => {
        t.value = void 0, I();
      }
    };
  },
  render() {
    return o("div", {
      class: [this.ns.b(), this.disabled && this.ns.m("disabled")]
    }, [o("div", {
      class: this.ns.b("content")
    }, [this.items.map((n, s) => {
      let l, i;
      return o("div", {
        class: this.ns.b("item")
      }, [o("div", {
        class: [this.ns.be("item", "connection"), s === 0 && this.ns.bem("item", "connection", "init")]
      }, [s === 0 ? o("div", null, [b("当")]) : o(p("el-select"), {
        modelValue: n.connection,
        "onUpdate:modelValue": (a) => n.connection = a,
        disabled: s > 1 || this.disabled,
        onChange: () => {
          this.handleConnectionChange(n);
        }
      }, _(l = this.connectionItems.map((a) => o(p("el-option"), {
        key: a.value,
        value: a.value,
        label: a.text
      }, null))) ? l : {
        default: () => [l]
      })]), o("div", {
        class: this.ns.b("item-content")
      }, [o("div", {
        class: this.ns.be("item", "field")
      }, [o(p("el-select"), {
        modelValue: n.field,
        "onUpdate:modelValue": (a) => n.field = a,
        disabled: this.disabled,
        onChange: () => {
          this.handleFieldChange(n);
        }
      }, _(i = this.c.schemaFields.map((a) => o(p("el-option"), {
        key: a.appDEFieldId,
        value: a.appDEFieldId,
        label: a.caption
      }, null))) ? i : {
        default: () => [i]
      })]), o("div", {
        class: this.ns.be("item", "valueOP")
      }, [o(p("el-select"), {
        modelValue: n.valueOP,
        "onUpdate:modelValue": (a) => n.valueOP = a,
        disabled: this.disabled,
        onChange: () => {
          this.handleValueOPChange(n);
        }
      }, {
        default: () => {
          var a, c;
          return [(c = (a = this.c.schemaFieldMap.get(n.field)) == null ? void 0 : a.valueOPs) == null ? void 0 : c.map((u) => o(p("el-option"), {
            key: u,
            value: u,
            label: this.filterModeMap.get(u) || u
          }, null))];
        }
      })]), o("div", {
        class: this.ns.be("item", "editor")
      }, [this.renderEditor(n)])]), o("div", {
        class: this.ns.be("item", "btn"),
        onClick: (a) => {
          a.stopPropagation(), this.handleRemove(s);
        }
      }, [o("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [o("g", {
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [o("path", {
        d: "M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z"
      }, null)])])])]);
    })]), o("div", {
      class: this.ns.b("footer")
    }, [o("div", {
      class: this.ns.b("footer-btn"),
      onClick: this.handleAdd
    }, [o("svg", {
      class: this.ns.be("footer-btn", "icon"),
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [o("g", {
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [o("path", {
      d: "M8.578 7.383V1.602a.601.601 0 1 0-1.2 0v5.781H1.6a.601.601 0 0 0 0 1.203h5.777v5.812a.601.601 0 1 0 1.2 0V8.586H14.4a.601.601 0 0 0 0-1.203H8.578z"
    }, null)])]), o("div", {
      class: this.ns.be("footer-btn", "text")
    }, [b("新增筛选条件")])])])]);
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
    m(this, "jsonSchemaTag", "");
    /**
     * jsonSchema属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:38
     * @type {ISchemaField[]}
     */
    m(this, "schemaFields", []);
    /**
     * jsonSchema属性字段映射
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:04
     */
    m(this, "schemaFieldMap", /* @__PURE__ */ new Map());
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
    var l;
    if (await super.onInit(), this.jsonSchemaTag = ((l = this.editorParams) == null ? void 0 : l.JSONSCHEMATAG) || "", this.jsonSchemaTag) {
      const i = await y(
        this.jsonSchemaTag,
        this.context,
        {
          ...this.params
        }
      );
      if (i) {
        const a = this.calcSchemaFieldBySchema(i);
        this.schemaFields = a, this.schemaFields.forEach((c) => {
          this.schemaFieldMap.set(c.appDEFieldId, c);
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
  calcSchemaFieldBySchema(l) {
    if (!l.properties)
      return [];
    const { properties: i } = l;
    if (!Object.keys(i).length)
      return [];
    const a = [];
    return Object.keys(i).forEach((c) => {
      var v;
      let u = "string";
      switch (i[c].type) {
        case "string":
          i[c].format === "date-time" && (u = "date"), i[c].enumSource && (u = "dropdown");
          break;
        case "integer":
        case "number":
          u = "number";
          break;
        default:
          i[c].$ref && (u = "dataPicker");
          break;
      }
      a.push({
        type: u,
        appDEFieldId: c,
        valueOPs: R[u],
        caption: i[c].description,
        appDataEntityId: (v = i[c].$ref) == null ? void 0 : v.split(".")[0],
        appCodeListId: i[c].enumSource
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
  getEditor(l) {
    const i = { ...B[l.type] };
    return l.type === "dropdown" && Object.assign(i, {
      appCodeListId: l.appCodeListId
    }), l.type === "dataPicker" && Object.assign(i, {
      appDataEntityId: l.appDataEntityId
    }), i;
  }
}
class G {
  constructor() {
    m(this, "formEditor", "IBizFilterCondition");
    m(this, "gridEditor", "IBizFilterCondition");
  }
  async createController(s, l) {
    const i = new z(s, l);
    return await i.init(), i;
  }
}
const ae = {
  install(n) {
    n.component(g.name, g), w(
      "EDITOR_CUSTOMSTYLE_FILTER_CONDITION",
      () => new G()
    );
  }
};
export {
  ae as default
};
