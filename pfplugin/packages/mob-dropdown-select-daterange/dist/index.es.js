import './style.css';
var b = Object.defineProperty;
var I = (e, t, s) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var T = (e, t, s) => (I(e, typeof t != "symbol" ? t + "" : t, s), s);
import { EditorController as P, registerEditorProvider as W } from "@ibiz-template/runtime";
import { defineComponent as $, ref as f, computed as B, onMounted as _, nextTick as K, createVNode as i, resolveComponent as D, createTextVNode as j } from "vue";
import { getDateRangeProps as G, getEditorEmits as Q, useNamespace as q } from "@ibiz-template/vue3-util";
import w from "dayjs";
function O() {
  const e = /* @__PURE__ */ new Date(), t = e.getDay(), s = t === 0 ? -6 : 1 - t, a = new Date(e);
  a.setDate(e.getDate() + s), a.setHours(0, 0, 0, 0);
  const o = new Date(a);
  return o.setDate(a.getDate() + 6), o.setHours(23, 59, 59, 999), {
    start: a,
    end: o
  };
}
function L() {
  const e = /* @__PURE__ */ new Date(), t = e.getFullYear(), s = e.getMonth(), a = new Date(t, s, 1);
  a.setHours(0, 0, 0, 0);
  const o = new Date(t, s + 1, 1), u = new Date(o);
  return u.setHours(23, 59, 59, 999), u.setDate(u.getDate() - 1), {
    start: a,
    end: u
  };
}
function z() {
  const e = /* @__PURE__ */ new Date(), t = e.getFullYear(), s = e.getMonth();
  let a, o;
  s < 3 ? (a = 0, o = 2) : s < 6 ? (a = 3, o = 5) : s < 9 ? (a = 6, o = 8) : (a = 9, o = 11);
  const u = new Date(t, a, 1);
  u.setHours(0, 0, 0, 0);
  const d = new Date(t, o + 1, 1);
  return d.setHours(23, 59, 59, 999), d.setDate(d.getDate() - 1), {
    start: u,
    end: d
  };
}
function v(e) {
  const { start: t, end: s } = e;
  if (t && s) {
    let a = "", o = "";
    return t.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? a = "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日") : a = w(t).format("YYYY年MM月DD日"), s.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? o = "".concat(s.getMonth() + 1, "月").concat(s.getDate(), "日") : o = w(s).format("YYYY年MM月DD日"), "".concat(a, " ~ ").concat(o);
  }
  return "";
}
const N = /* @__PURE__ */ $({
  name: "DropdownSelectDateRange",
  props: G(),
  emits: Q(),
  setup(e, {
    emit: t
  }) {
    const s = q("dropdown-select-daterange"), a = e.controller, o = f(""), u = f(), d = f(), M = f(!1), x = [{
      text: "本周",
      value: "WEEK"
    }, {
      text: "本月",
      value: "MONTH"
    }, {
      text: "本季度",
      value: "QUARTER"
    }], E = a.model;
    let h = [];
    const g = f("YYYY-MM-DD"), y = a.valueFormat;
    y && (g.value = y);
    let Y = ",";
    E.editorParams && E.editorParams.valueSeparator && (Y = E.editorParams.valueSeparator);
    const m = f([]), {
      editorItems: C
    } = E;
    if (C && C.length > 0) {
      const r = C.map((n) => n.id);
      m.value = r;
    }
    const A = (r, n) => {
      const l = w(r).format(g.value);
      if (g.value && l !== "Invalid Date" ? h[n] = l : h[n] = r, h.length === 2 && t("change", h.join(Y)), m.value) {
        const c = m.value[n];
        c && t("change", r, c);
      }
    }, S = () => {
      M.value = !0;
    }, p = (r) => {
      r.forEach((n, l) => {
        const c = w(n).format(g.value);
        A(c, l);
      });
    }, F = (r) => {
      switch (r) {
        case "WEEK": {
          const n = O();
          o.value = v(n);
          const {
            start: l,
            end: c
          } = n;
          p([l, c]);
          break;
        }
        case "MONTH": {
          const n = L();
          o.value = v(n);
          const {
            start: l,
            end: c
          } = n;
          p([l, c]);
          break;
        }
        case "QUARTER": {
          const n = z();
          o.value = v(n);
          const {
            start: l,
            end: c
          } = n;
          p([l, c]);
          break;
        }
        case "CUSTOM":
        default:
          S();
          break;
      }
    }, V = () => {
      M.value = !1;
    }, k = (r) => {
      if (!r || r[0] === "" && r[1] === "") {
        const n = O();
        o.value = v(n), u.value = "WEEK";
        const {
          start: l,
          end: c
        } = n;
        p([l, c]);
      } else {
        r.forEach((l, c) => {
          const H = w(l).format(g.value);
          A(H, c);
        });
        const n = {
          start: new Date(r[0]),
          end: new Date(r[1])
        };
        o.value = v(n);
      }
      M.value = !1;
    }, R = B(() => m.value && m.value.length > 0 ? m.value.map((n) => e.data[n] || "") : e.value && typeof e.value == "string" ? (h = e.value.split(Y), e.value.split(Y)) : []), U = () => {
      u.value = "CUSTOM", d.value && d.value.toggle(), S();
    };
    return _(() => {
      if (R.value.length === 0 || R.value[0] === "" && R.value[1] === "") {
        u.value = "WEEK";
        const r = O();
        o.value = v(r), K(() => {
          const {
            start: n,
            end: l
          } = r;
          p([n, l]);
        });
      }
    }), {
      ns: s,
      c: a,
      rangeText: o,
      selectValue: u,
      selectOptions: x,
      show: M,
      dateRangeSelectRef: d,
      valueArray: R,
      openSelect: S,
      onChange: F,
      onCancel: V,
      onClickCustom: U,
      onSave: k
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [i(D("van-field"), {
      class: this.ns.e("input")
    }, {
      input: i(D("van-dropdown-menu"), {
        ref: "SelectRef"
      }, {
        default: () => [i(D("van-dropdown-item"), {
          ref: "dateRangeSelectRef",
          modelValue: this.selectValue,
          "onUpdate:modelValue": (e) => this.selectValue = e,
          options: this.selectOptions,
          onChange: this.onChange
        }, {
          title: () => i("div", null, [this.rangeText]),
          default: () => i("div", {
            class: [this.ns.e("custom"), this.ns.is("selected", this.selectValue === "CUSTOM")],
            onClick: this.onClickCustom
          }, [i("div", {
            class: this.ns.em("custom", "text")
          }, [j("自定义")]), i(D("van-icon"), {
            name: "success",
            class: [this.ns.em("custom", "icon"), this.ns.is("selected", this.selectValue === "CUSTOM")]
          }, null)])
        })]
      }),
      rightIcon: () => i(D("van-icon"), {
        name: "arrow-down"
      }, null)
    }), i(D("van-popup"), {
      show: this.show,
      "onUpdate:show": (e) => this.show = e,
      position: "left",
      class: this.ns.e("calendar"),
      style: {
        height: "100%"
      }
    }, {
      default: () => i(D("iBizDateRangeCalendar"), {
        onCancel: this.onCancel,
        value: this.valueArray,
        onSave: this.onSave,
        type: "range"
      }, null)
    })]);
  }
});
class J extends P {
  /**
   * 根据编辑器类型获取格式化
   *
   * @return {*}  {string}
   * @memberof DropdownSelectDateRangeController
   */
  getFormatByType() {
    switch (this.model.editorType) {
      case "MOBDATERANGE":
        return "YYYY-MM-DD hh:mm:ss";
      case "MOBDATERANGE_NOTIME":
        return "YYYY-MM-DD";
      default:
        return "YYYY-MM-DD hh:mm:ss";
    }
  }
}
class X {
  constructor() {
    T(this, "formEditor", "DropdownSelectDateRange");
    T(this, "gridEditor", "DropdownSelectDateRange");
  }
  async createController(t, s) {
    const a = new J(
      t,
      s
    );
    return await a.init(), a;
  }
}
const se = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.component(N.name, N), W(
      "EDITOR_CUSTOMSTYLE_DROPDOWN_SELECT_DATERANGE",
      () => new X()
    );
  }
};
export {
  se as default
};
