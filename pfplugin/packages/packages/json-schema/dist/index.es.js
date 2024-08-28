import './style.css';
var g = Object.defineProperty;
var S = (t, o, e) => o in t ? g(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var d = (t, o, e) => (S(t, typeof o != "symbol" ? o + "" : o, e), e);
import { PluginStaticResource as E, EditorController as C, registerEditorProvider as w } from "@ibiz-template/runtime";
import { getInputProps as x, getEditorEmits as j, useNamespace as v, withInstall as A } from "@ibiz-template/vue3-util";
import { defineComponent as J, ref as M, onMounted as P, watch as k, createVNode as q } from "vue";
import { createUUID as N } from "qx-util";
const u = new E(import.meta.url);
class D extends C {
  constructor() {
    super(...arguments);
    d(this, "enableAdvancedSetting", !0);
  }
  get disabled() {
    return !!this.model.disabled;
  }
  async onInit() {
    if (await super.onInit(), this.editorParams) {
      const { ENABLEADVANCEDSETTING: e } = this.editorParams;
      e && (this.enableAdvancedSetting = this.toBoolean(e));
    }
    await this.loadAmis();
  }
  /**
   * 加载amis静态资源
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  loadAmis() {
    return new Promise((e, a) => {
      const i = [
        this.loadStyle(u.dir("assets/amis/sdk.css")),
        this.loadStyle(u.dir("assets/amis/helper.css")),
        this.loadScript(u.dir("assets/amis/sdk.js"))
      ];
      Promise.all(i).then(() => {
        e();
      }).catch(() => {
        ibiz.message.error("加载amis静态资源失败,请确认静态资源是否存在！"), a();
      });
    });
  }
  /**
   * 动态加载脚本
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  loadScript(e) {
    return new Promise((a, i) => {
      const s = document.createElement("script");
      s.src = e, s.onload = a, s.onerror = i, document.head.appendChild(s);
    });
  }
  /**
   * 动态加载样式
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  loadStyle(e) {
    return new Promise((a, i) => {
      const s = document.createElement("link");
      s.rel = "stylesheet", s.href = e, s.onload = a, s.onerror = i, document.head.appendChild(s);
    });
  }
}
class B {
  constructor() {
    d(this, "formEditor");
    d(this, "gridEditor");
    this.formEditor = "JsonSchema", this.gridEditor = "JsonSchema";
  }
  async createController(o, e) {
    const a = new D(o, e);
    return await a.init(), a;
  }
}
const p = /* @__PURE__ */ J({
  name: "JsonSchema",
  props: x(),
  emits: j(),
  setup(t, {
    emit: o
  }) {
    const e = v("json-schema"), a = t.controller, i = M(), s = "json-schema".concat(N());
    let r = null;
    const h = (n) => {
      r = window.amisRequire("amis/embed").embed("#".concat(s), {
        type: "page",
        name: "page",
        body: {
          type: "form",
          name: "form",
          title: "json-schema-editor",
          mode: "horizontal",
          actions: [{
            type: "submit",
            label: "确定",
            disabled: n
          }],
          body: [{
            type: "json-schema-editor",
            name: "schema",
            label: !1,
            disabled: n,
            enableAdvancedSetting: a.enableAdvancedSetting,
            advancedSettings: {
              string: [{
                type: "select",
                name: "enumsource",
                label: "字典",
                autoComplete: "/msg_packages/dicts?query=$term"
              }, {
                type: "select",
                name: "format",
                label: "格式化",
                options: [{
                  label: "yyyy-MM-dd",
                  value: "yyyy-MM-dd"
                }, {
                  label: "yyyy-MM-dd HH:mm:ss",
                  value: "yyyy-MM-dd HH:mm:ss"
                }]
              }, {
                type: "input-text",
                name: "minlength",
                label: "最小长度"
              }, {
                type: "input-text",
                name: "maxlength",
                label: "最大长度"
              }, {
                type: "input-text",
                name: "pattern",
                label: "正则表达式"
              }, {
                name: "uniqueitems",
                type: "switch",
                label: "唯一标识",
                trueValue: 1,
                falseValue: 0
              }],
              number: [{
                type: "select",
                name: "enumsource",
                label: "字典",
                autoComplete: "/msg_packages/dicts?query=$term"
              }, {
                type: "input-text",
                name: "format",
                label: "格式化"
              }, {
                type: "input-number",
                name: "minimum",
                label: "最小值"
              }, {
                type: "input-number",
                name: "maximum",
                label: "最大值"
              }, {
                type: "input-text",
                name: "pattern",
                label: "正则表达式"
              }, {
                name: "uniqueitems",
                type: "switch",
                label: "唯一标识",
                trueValue: 1,
                falseValue: 0
              }],
              integer: [{
                type: "select",
                name: "enumsource",
                label: "字典",
                autoComplete: "/msg_packages/dicts?query=$term"
              }, {
                type: "input-text",
                name: "format",
                label: "格式化"
              }, {
                type: "input-number",
                name: "minimum",
                label: "最小值"
              }, {
                type: "input-number",
                name: "maximum",
                label: "最大值"
              }, {
                type: "input-text",
                name: "pattern",
                label: "正则表达式"
              }, {
                name: "uniqueitems",
                type: "switch",
                label: "唯一标识",
                trueValue: 1,
                falseValue: 0
              }],
              object: [{
                type: "select",
                name: "refschema",
                label: "引用",
                autoComplete: "/msg_packages/schemas?query=$term&n_id_eq=$value"
              }]
            }
          }]
        }
      }, {}, {
        fetcher: (l) => ibiz.net[l.method](l.url, l.data, l.config),
        tracker: (l, c) => {
          const {
            eventType: f
          } = l;
          if (f === "submit" && c && c.data && c.data.schema) {
            const y = c.data.schema;
            y && !n && o("change", y);
          }
        }
      });
    }, b = () => {
      if (r && r.getComponentByName) {
        const n = r.getComponentByName("page.form"), {
          value: m
        } = t;
        n && (typeof m == "object" && m !== null ? n.setData({
          schema: m
        }) : n.setData({
          schema: {
            type: "object"
          }
        }));
      }
    };
    return P(() => {
      const n = a.disabled || a.readonly;
      h(n), setTimeout(() => {
        b();
      }, 500);
    }), k(() => t.value, (n) => {
      if (r) {
        const m = r.getComponentByName("page.form");
        m && (typeof n == "object" && n !== null ? m.setData({
          schema: n
        }) : m.setData({
          schema: {
            type: "object"
          }
        }));
      }
    }, {
      immediate: !0
    }), {
      ns: e,
      c: a,
      uuid: s,
      editorRef: i
    };
  },
  render() {
    return q("div", {
      ref: "editorRef",
      id: this.uuid,
      class: [this.ns.b()]
    }, null);
  }
}), I = A(p, function(t) {
  t.component(p.name, p), w("TEXTBOX_JSONSCHEMA", () => new B());
}), R = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(I);
  }
};
export {
  I as IBizJsonSchema,
  R as default
};
