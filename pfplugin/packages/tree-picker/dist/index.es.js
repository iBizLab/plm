import './style.css';
var w = Object.defineProperty;
var x = (s, i, n) => i in s ? w(s, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[i] = n;
var u = (s, i, n) => (x(s, typeof i != "symbol" ? i + "" : i, n), n);
import { defineComponent as B, ref as f, watch as y, createVNode as a, resolveComponent as m } from "vue";
import { getDropdownProps as L, getEditorEmits as z, useNamespace as M } from "@ibiz-template/vue3-util";
import { CodeListEditorController as _, registerEditorProvider as N } from "@ibiz-template/runtime";
const k = /* @__PURE__ */ B({
  name: "IBizTreePicker",
  props: L(),
  emits: z(),
  setup(s, {
    emit: i
  }) {
    const n = M("tree-picker"), c = s.controller, v = f(!1), o = f([]), d = f(), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), C = (e, r) => {
      e.length && e.forEach((t) => {
        p.set(t.value, t), h.set(t.value, r), t.children && C(t.children, t);
      });
    }, I = (e, r) => !e.children || !e.children.length ? !0 : e.children.every((t) => r.includes("".concat(t.value))), g = (e, r) => {
      if (e.children && e.children.forEach((t) => {
        g(t, r);
      }), !I(e, r)) {
        const t = r.indexOf("".concat(e.value));
        t !== -1 && r.splice(t, 1);
      }
    }, b = () => {
      const e = [];
      typeof s.value == "string" && e.push(...s.value.split(",").filter(Boolean)), e.map((t) => p.get(t)).filter(Boolean).forEach((t) => {
        g(t, e);
      }), d.value && d.value.setCheckedKeys(e);
    };
    y(() => s.value, async () => {
      v.value || (o.value = await c.loadCodeList(s.data), C(o.value || []), v.value = !0), b();
    }, {
      immediate: !0
    });
    const E = (e) => h.get(e.value) ? [...E(h.get(e.value)), e] : [e];
    return {
      ns: n,
      c,
      tree: d,
      codeListItems: o,
      handleCheck: (e, r) => {
        const t = /* @__PURE__ */ new Map();
        (r.checkedNodes || []).forEach((T) => {
          E(T).forEach((l) => {
            l && l.value && !t.has(l.value) && t.set(l.value, l);
          });
        });
        const P = [...t.keys()].join(",");
        i("change", P);
      }
    };
  },
  render() {
    return a("div", {
      class: [this.ns.b(), this.disabled && this.ns.m("disabled")]
    }, [a(m("el-tree"), {
      ref: "tree",
      data: this.codeListItems,
      "show-checkbox": !0,
      "node-key": "value",
      props: {
        label: "text",
        children: "children",
        disabled: () => this.disabled ? "value" : ""
      },
      onCheck: this.handleCheck
    }, {
      default: ({
        data: s
      }) => {
        var i;
        return a("div", {
          class: this.ns.b("item")
        }, [(i = s.sysImage) != null && i.imagePath ? a(m("iBizIcon"), {
          class: this.ns.be("item", "icon"),
          icon: s.sysImage
        }, null) : a(m("iBizIcon"), {
          class: this.ns.be("item", "icon"),
          icon: {
            cssClass: "fa fa-file-text-o"
          }
        }, null), a("span", {
          class: this.ns.be("item", "text")
        }, [s.text || ""])]);
      }
    })]);
  }
});
class O {
  constructor() {
    u(this, "formEditor", "IBizTreePicker");
    u(this, "gridEditor", "IBizTreePicker");
  }
  async createController(i, n) {
    const c = new _(i, n);
    return await c.init(), c;
  }
}
const A = {
  install(s) {
    s.component(k.name, k), N(
      "EDITOR_CUSTOMSTYLE_TREE_PICKER",
      () => new O()
    );
  }
};
export {
  A as default
};
