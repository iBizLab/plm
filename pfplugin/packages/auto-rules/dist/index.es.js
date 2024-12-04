import './style.css';
var G = Object.defineProperty;
var K = (u, n, s) => n in u ? G(u, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : u[n] = s;
var I = (u, n, s) => (K(u, typeof n != "symbol" ? n + "" : n, s), s);
import { CodeListEditorController as Q, registerEditorProvider as X } from "@ibiz-template/runtime";
import { defineComponent as Z, ref as i, watch as ee, computed as le, onMounted as te, createVNode as o, resolveComponent as r, createTextVNode as se, isVNode as oe } from "vue";
import { getDropdownProps as ae, getEditorEmits as ne, useNamespace as ue } from "@ibiz-template/vue3-util";
import { RuntimeModelError as ce } from "@ibiz-template/core";
function S(u) {
  return typeof u == "function" || Object.prototype.toString.call(u) === "[object Object]" && !oe(u);
}
const D = /* @__PURE__ */ Z({
  name: "AutoRules",
  props: {
    ...ae(),
    value: [String, Object, Array, Number]
  },
  emits: ne(),
  setup(u, {
    emit: n
  }) {
    const s = ue("auto-rules"), c = u.controller, v = i(!1), g = i(), f = i([]), h = i(!1), y = i(""), x = i(""), w = i([]), V = i(!1), E = i(), R = i(), A = i([]), C = i([]), L = i(!1), k = i(!1), {
      editorItems: a
    } = c.model, N = (t, e) => {
      if (t.length === 0)
        return [];
      const l = [];
      return t.forEach((d) => {
        if (l.push({
          ...d,
          pvalue: e,
          disabled: d.disableSelect === !0
        }), d.children && d.children.length > 0) {
          const p = N(d.children, d.value.toString());
          l.push(...p);
        }
      }), l;
    }, T = async () => {
      k.value = !0;
      const t = await c.loadCodeList(u.data);
      L.value = !0, C.value = N(t, ""), k.value = !1;
    }, _ = (t) => C.value.find((e) => e.value === t), O = async (t) => {
      t && !L.value && await T();
    };
    ee(() => u.value, async (t, e) => {
      (t || t === null || t === 0) && !L.value && e === void 0 && await T();
    }, {
      immediate: !0
    });
    const P = (t) => C.value.filter((e) => e.pvalue === t), m = () => {
      v.value = !1, h.value = !1, g.value = null, y.value = null, x.value = null;
    }, j = () => {
      V.value = !1, E.value = null, m();
    }, U = (t) => {
      const e = [{
        text: "- 任何 -",
        label: "- 任何 -",
        value: ""
      }];
      return (t === "true" || t === !0) && e.unshift({
        text: "- 空 -",
        label: "- 空 -",
        value: "null"
      }), e;
    }, F = async (t) => {
      if (j(), !t) {
        if (R.value = null, n("change", null), a && a.length > 0) {
          const e = a[0].id;
          n("change", null, e);
        }
        return;
      }
      if (t.endsWith(".*")) {
        if (R.value = t, A.value = P(t), V.value = !0, n("change", null), a && a.length > 0) {
          const e = a[0].id;
          n("change", null, e);
        }
      } else {
        R.value = null, n("change", t);
        const e = _(t);
        if (e && e.data) {
          const {
            allow_empty: l,
            codelist_tag: d,
            is_dropdown_list: p
          } = e.data;
          if (p === "true" || p === !0) {
            h.value = !0;
            const b = await c.loadCustomCodeList(d, u.data), $ = U(l);
            w.value = [...$, ...b];
            return;
          }
          if (!l || l === "false" || l === !1) {
            if (a && a.length > 0) {
              const b = a[0].id;
              n("change", ["", ""], b);
              return;
            }
          } else
            (l === "true" || l === !0) && (f.value = c.allowEmptyText, v.value = !0);
        } else
          f.value = c.allowEmptyText, v.value = !0;
        if (a && a.length > 0) {
          const l = a[0].id;
          n("change", null, l);
        }
      }
    }, B = le({
      get() {
        return R.value || u.value;
      },
      set(t) {
        F(t);
      }
    }), J = (t) => {
      if (a && a.length > 0) {
        const e = a[0].id;
        n("change", JSON.parse(t), e);
      }
    }, z = (t, e) => {
      if (e === 1 ? y.value = t : x.value = t, a && a.length > 0) {
        const l = a[0].id;
        n("change", [y.value, x.value], l);
      }
    }, M = async (t) => {
      if (m(), !t) {
        if (n("change", t), a && a.length > 0) {
          const l = a[0].id;
          n("change", null, l);
        }
        return;
      }
      const e = _(t);
      if (e && e.data) {
        const {
          allow_empty: l,
          codelist_tag: d,
          is_dropdown_list: p
        } = e.data;
        if (p === "true" || p === !0) {
          h.value = !0;
          const b = await c.loadCustomCodeList(d, u.data), $ = U(l);
          w.value = [...$, ...b];
          return;
        }
        if (!l || l === "false" || l === !1) {
          if (a && a.length > 0) {
            const b = a[0].id;
            n("change", ["", ""], b);
            return;
          }
        } else
          (l === "true" || l === !0) && (f.value = c.allowEmptyText, v.value = !0);
      } else
        f.value = c.allowEmptyText, v.value = !0;
      if (n("change", t), a && a.length > 0) {
        const l = a[0].id;
        n("change", null, l);
      }
    }, H = () => {
      let t;
      return o(r("el-select"), {
        ref: "childFieldEditorRef",
        modelValue: E.value,
        "onUpdate:modelValue": (e) => E.value = e,
        clearable: !0,
        class: [s.b("child-select")],
        filterable: !0,
        "fit-input-width": !0,
        onChange: M
      }, S(t = A.value.map((e) => o(r("el-option"), {
        key: e.value,
        value: e.value.toString(),
        label: e.text,
        disabled: e.disableSelect === !0,
        style: e.bkcolor ? s.cssVarBlock({
          "select-option-item-bkcolor": "".concat(e.bkcolor)
        }) : "",
        class: [e.cls ? e.cls : null],
        title: e.text
      }, {
        default: () => o("div", {
          class: [s.b("select-option-content"), e.textCls ? e.textCls : null],
          style: e.color ? s.cssVarBlock({
            "select-option-item-color": "".concat(e.color)
          }) : ""
        }, [e.sysImage && o(r("iBizIcon"), {
          icon: e.sysImage
        }, null), o("span", {
          class: [s.be("select-option-content", "text")]
        }, [e.text])])
      }))) ? t : {
        default: () => [t]
      });
    }, W = () => {
      let t;
      return o(r("el-select"), {
        ref: "rulesEditorRef",
        modelValue: g.value,
        "onUpdate:modelValue": (e) => g.value = e,
        clearable: !0,
        class: [s.em("rules-select", "fix")],
        filterable: !0,
        "fit-input-width": !0,
        onChange: J
      }, S(t = f.value.map((e) => o(r("el-option"), {
        key: e.value,
        value: e.value.toString(),
        label: e.text,
        disabled: e.disableSelect === !0,
        style: e.bkcolor ? s.cssVarBlock({
          "select-option-item-bkcolor": "".concat(e.bkcolor)
        }) : "",
        class: [e.cls ? e.cls : null],
        title: e.text
      }, {
        default: () => o("div", {
          class: [s.b("select-option-content"), e.textCls ? e.textCls : null],
          style: e.color ? s.cssVarBlock({
            "select-option-item-color": "".concat(e.color)
          }) : ""
        }, [e.sysImage && o(r("iBizIcon"), {
          icon: e.sysImage
        }, null), o("span", {
          class: [s.be("select-option-content", "text")]
        }, [e.text])])
      }))) ? t : {
        default: () => [t]
      });
    }, Y = () => {
      let t, e;
      return o("div", {
        class: s.b("code-rules")
      }, [o(r("el-select"), {
        modelValue: y.value,
        "onUpdate:modelValue": (l) => y.value = l,
        clearable: !0,
        class: [s.b("rules-select")],
        filterable: !0,
        "fit-input-width": !0,
        onChange: (l) => z(l, 1)
      }, S(t = w.value.map((l) => o(r("el-option"), {
        key: l.value,
        value: l.value.toString(),
        label: l.text,
        disabled: l.disableSelect === !0,
        style: l.bkcolor ? s.cssVarBlock({
          "select-option-item-bkcolor": "".concat(l.bkcolor)
        }) : "",
        class: [l.cls ? l.cls : null],
        title: l.text
      }, {
        default: () => o("div", {
          class: [s.b("select-option-content"), l.textCls ? l.textCls : null],
          style: l.color ? s.cssVarBlock({
            "select-option-item-color": "".concat(l.color)
          }) : ""
        }, [l.sysImage && o(r("iBizIcon"), {
          icon: l.sysImage
        }, null), o("span", {
          class: [s.be("select-option-content", "text")]
        }, [l.text])])
      }))) ? t : {
        default: () => [t]
      }), o("span", {
        class: s.be("code-rules", "change")
      }, [se("变为")]), o(r("el-select"), {
        modelValue: x.value,
        "onUpdate:modelValue": (l) => x.value = l,
        clearable: !0,
        class: [s.b("rules-select")],
        filterable: !0,
        "fit-input-width": !0,
        onChange: (l) => z(l, 2)
      }, S(e = w.value.map((l) => o(r("el-option"), {
        key: l.value,
        value: l.value.toString(),
        label: l.text,
        disabled: l.disableSelect === !0,
        style: l.bkcolor ? s.cssVarBlock({
          "select-option-item-bkcolor": "".concat(l.bkcolor)
        }) : "",
        class: [l.cls ? l.cls : null],
        title: l.text
      }, {
        default: () => o("div", {
          class: [s.b("select-option-content"), l.textCls ? l.textCls : null],
          style: l.color ? s.cssVarBlock({
            "select-option-item-color": "".concat(l.color)
          }) : ""
        }, [l.sysImage && o(r("iBizIcon"), {
          icon: l.sysImage
        }, null), o("span", {
          class: [s.be("select-option-content", "text")]
        }, [l.text])])
      }))) ? e : {
        default: () => [e]
      })]);
    }, q = () => {
      let t;
      return o(r("el-select"), {
        ref: "editorRef",
        modelValue: B.value,
        "onUpdate:modelValue": (e) => B.value = e,
        clearable: !0,
        class: [s.b("select")],
        filterable: !0,
        placeholder: c.placeHolder ? c.placeHolder : " ",
        disabled: u.disabled,
        loading: k.value,
        "fit-input-width": !0,
        onVisibleChange: O
      }, S(t = C.value.map((e) => o(r("el-option"), {
        key: e.value,
        value: e.value.toString(),
        label: e.text,
        disabled: e.disableSelect === !0,
        style: e.bkcolor ? s.cssVarBlock({
          "select-option-item-bkcolor": "".concat(e.bkcolor)
        }) : "",
        class: [e.cls ? e.cls : null],
        title: e.text
      }, {
        default: () => o("div", {
          class: [s.b("select-option-content"), e.textCls ? e.textCls : null],
          style: e.color ? s.cssVarBlock({
            "select-option-item-color": "".concat(e.color)
          }) : ""
        }, [e.sysImage && o(r("iBizIcon"), {
          icon: e.sysImage
        }, null), o("span", {
          class: [s.be("select-option-content", "text")]
        }, [e.text])])
      }))) ? t : {
        default: () => [t]
      });
    };
    return te(async () => {
      await T();
    }), {
      ns: s,
      c,
      items: C,
      showSelect: v,
      showChildSelect: V,
      isLoading: k,
      curValue: B,
      showCodeRulesSelect: h,
      renderFieldSelect: H,
      renderRulesSelect: W,
      renderCodeRulesSelect: Y,
      renderRuleTypesSelect: q,
      onVisibleChange: O,
      getCodeListItemByValue: _
    };
  },
  render() {
    return o("div", {
      class: this.ns.b()
    }, [o("div", {
      class: this.ns.e("field-select")
    }, [this.renderRuleTypesSelect(), this.showChildSelect ? this.renderFieldSelect() : null]), o("div", {
      class: [this.ns.e("rules-select"), this.ns.is("visible", !this.showSelect && !this.showCodeRulesSelect)]
    }, [this.showSelect ? this.renderRulesSelect() : null, this.showCodeRulesSelect ? this.renderCodeRulesSelect() : null])]);
  }
});
class re extends Q {
  constructor() {
    super(...arguments);
    /**
     * [属性确定,文本项,允许空] 自定义仿真数据
     *
     * @static
     * @memberof AutoRulesController
     */
    I(this, "allowEmptyText", [
      { text: "从任何到任何", value: JSON.stringify(["", ""]) },
      {
        text: "从有值到空值",
        value: JSON.stringify(["", null])
      },
      {
        text: "从空值到有值",
        value: JSON.stringify([null, ""])
      }
    ]);
  }
  async onInit() {
    super.onInit();
  }
  // 加载自定义配置的下拉代码表
  async loadCustomCodeList(s, c) {
    const { context: v, params: g } = this.handlePublicParams(
      c,
      this.context,
      this.params
    );
    if (s) {
      const f = await ibiz.hub.getApp(this.context.srfappid);
      let h = [];
      return h = await f.codeList.get(
        "".concat(f.model.id, ".").concat(s),
        v,
        g
      ), h;
    }
    throw new ce(
      this.model,
      ibiz.i18n.t("runtime.controller.common.editor.editorNoConfigured", {
        editorType: this.model.editorType
      })
    );
  }
}
class ie {
  constructor() {
    I(this, "formEditor", "AutoRules");
    I(this, "gridEditor", "AutoRules");
  }
  async createController(n, s) {
    const c = new re(n, s);
    return await c.init(), c;
  }
}
const be = {
  install(u) {
    u.component(D.name, D), X(
      "EDITOR_CUSTOMSTYLE_AUTO_RULES",
      () => new ie()
    );
  }
};
export {
  be as default
};
