var re = Object.defineProperty;
var le = (u, p, e) => p in u ? re(u, p, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[p] = e;
var x = (u, p, e) => (le(u, typeof p != "symbol" ? p + "" : p, e), e);
import { CodeListEditorController as se, ScriptFactory as F, registerEditorProvider as ne } from "@ibiz-template/runtime";
import { getListBoxProps as oe, getEditorEmits as ue, useNamespace as ce, useFocusAndBlur as ie, withInstall as de } from "@ibiz-template/vue3-util";
import { defineComponent as he, ref as m, computed as U, watch as fe, createVNode as f, resolveComponent as b, isVNode as pe, mergeProps as ve } from "vue";
import { isNil as ge, clone as Ee } from "ramda";
import C from "dayjs";
function L(u) {
  return typeof u == "function" || Object.prototype.toString.call(u) === "[object Object]" && !pe(u);
}
const M = /* @__PURE__ */ he({
  name: "CheckboxListExtend",
  props: oe(),
  emits: ue(),
  setup(u, {
    emit: p
  }) {
    const e = ce("checkbox-list-extend"), t = u.controller, r = m(null), h = {
      label: "text",
      children: "children"
    }, {
      codeList: s
    } = t, n = m([]), d = m([]), i = m([]), v = m([]), g = m({});
    (async () => {
      t.loadCodeList(u.data).then((a) => {
        v.value = a, i.value = t.handleCodeListData(a, u.data), Object.is(t.renderMode, "TREE") && Object.is(t.mode, "horizontal") && K(), Object.is(t.renderMode, "BUTTON") && Object.is(t.mode, "vertical") && T(i.value);
        const l = t.getDefaultSelect(i.value, u.data);
        k(l);
      });
    })();
    const k = (a) => {
      a.length > 0 && O(a);
    }, T = (a) => {
      a.forEach((l) => {
        l.children && (d.value.push(l.value), T(l.children));
      });
    }, R = U(() => s && s.orMode ? s.orMode.toLowerCase() : "str");
    let y = ",";
    s && s.valueSeparator && (y = s.valueSeparator);
    const j = (a) => {
      r.value ? r.value.setCheckedKeys(a) : n.value = a;
    }, E = m([]);
    let I = "";
    const w = U({
      get() {
        return E.value.join(y);
      },
      set() {
      }
    });
    fe(() => u.value, (a) => {
      if (ge(a))
        j([]), E.value = [];
      else {
        let l = [];
        if (Object.is(R.value, "num") && i) {
          const o = typeof a == "string" ? parseInt(a, 10) : a;
          i.value.forEach((c) => {
            (o & c.value) === c.value && l.push(c.value);
          });
        } else if (Object.is(R.value, "str") && a !== "" && s && typeof a == "string" && (l = a.split(y), s.codeItemValueNumber))
          for (let o = 0, c = l.length; o < c; o++)
            l[o] = Number(l[o]);
        j(l), E.value = l;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const O = (a) => {
      a && a.length > 0 ? p("change", a.join(y)) : p("change", t.emptyValue);
    }, _ = (a, l) => {
      const o = l.checkedNodes.filter((c) => !c.group).map((c) => c.value);
      O(o);
    }, K = () => {
      i.value.forEach((a) => {
        a.children && Object.assign(g.value, {
          [a.value]: !1,
          ["".concat(a.value, "-all")]: !1
        });
      });
    }, A = (a, l, o) => {
      l.forEach((ee) => {
        const {
          value: S
        } = ee;
        if (a)
          E.value.includes(S) || E.value.push(S);
        else if (E.value.includes(S)) {
          const te = E.value.findIndex((ae) => Object.is(ae, S));
          E.value.splice(te, 1);
        }
      });
      const c = t.getDefaultSelect(i.value, u.data);
      c.length > 0 && (E.value.push(...c), E.value = [...new Set(E.value)]), Object.assign(g.value, {
        [o.value]: !1
      }), O(E.value);
    }, $ = (a, l, o) => {
      const c = a.length;
      a.length === l.length ? Object.assign(g.value, {
        [o.value]: !1,
        ["".concat(o.value, "-all")]: !0
      }) : Object.assign(g.value, {
        [o.value]: c > 0,
        ["".concat(o.value, "-all")]: !1
      }), O(a);
    }, Q = (a) => {
      a && I !== a ? (I = a, p("change", a)) : (I = t.emptyValue, w.value = t.emptyValue, p("change", t.emptyValue));
    }, W = (a) => {
      O(a);
    }, {
      componentRef: H
    } = ie(() => p("focus"), () => p("blur")), P = (a) => a.children ? X(a.children, a) : f(b("el-checkbox"), {
      class: [e.e("check-item")],
      key: a.value,
      disabled: a.disableSelect,
      label: a.value
    }, {
      default: () => [a.sysImage ? f(b("iBizIcon"), {
        icon: a.sysImage
      }, null) : null, a.text]
    }), X = (a, l) => {
      let o;
      return f("div", {
        class: [e.e("check-group")]
      }, [f(b("el-checkbox"), {
        modelValue: g.value["".concat(l.value, "-all")],
        "onUpdate:modelValue": (c) => g.value["".concat(l.value, "-all")] = c,
        disabled: l.disableSelect,
        indeterminate: g.value[l.value],
        onChange: (c) => A(c, a, l)
      }, {
        default: () => [l.text]
      }), f(b("el-checkbox-group"), {
        modelValue: E.value,
        "onUpdate:modelValue": (c) => E.value = c,
        onChange: (c) => $(c, a, l)
      }, L(o = a.map((c) => P(c))) ? o : {
        default: () => [o]
      })]);
    }, Y = (a, l) => t.singleSelect ? f(b("el-radio-group"), {
      modelValue: w.value,
      "onUpdate:modelValue": (o) => w.value = o,
      title: l.text,
      onClick: () => Q(l.value)
    }, {
      default: () => [f(b("el-radio-button"), {
        key: l.value,
        label: l.value,
        disabled: l.disableSelect
      }, {
        default: () => [l.sysImage ? f(b("iBizIcon"), {
          icon: l.sysImage
        }, null) : null, l.text]
      })]
    }) : f(b("el-checkbox-group"), {
      modelValue: E.value,
      "onUpdate:modelValue": (o) => E.value = o,
      title: l.text,
      onChange: (o) => W(o)
    }, {
      default: () => [f(b("el-checkbox-button"), ve(t.editorParams, {
        key: l.value,
        label: l.value,
        disabled: l.disableSelect
      }), {
        default: () => [l.sysImage ? f(b("iBizIcon"), {
          icon: l.sysImage
        }, null) : null, l.text]
      })]
    }), N = (a, l) => l.children ? J(l.children, l) : Y(a, l), J = (a, l) => {
      let o;
      return f(b("el-collapse"), {
        modelValue: d.value,
        "onUpdate:modelValue": (c) => d.value = c
      }, {
        default: () => [f(b("el-collapse-item"), {
          title: l.text,
          name: l.value
        }, L(o = a.map((c) => N(a, c))) ? o : {
          default: () => [o]
        })]
      });
    }, Z = (a, l) => l.children ? f(b("el-dropdown"), {
      "popper-class": [e.e("button"), e.em("dropdown-menu", "popper")]
    }, {
      default: () => f("span", {
        class: [e.e("dropdown-caption")]
      }, [l.text, f("i", {
        class: ["fa", "fa-angle-down", e.em("dropdown-caption", "icon-right")]
      }, null)]),
      dropdown: () => {
        let o;
        return f(b("el-dropdown-menu"), null, L(o = l.children.map((c) => V(c.children, c))) ? o : {
          default: () => [o]
        });
      }
    }) : Y(a, l), V = (a, l) => {
      let o;
      return l.children ? f("div", {
        class: [e.em("dropdown-item", "group")]
      }, [l.children.map((c) => V(l.children, c))]) : f(b("el-dropdown-item"), null, L(o = Y(a, l)) ? o : {
        default: () => [o]
      });
    };
    return {
      ns: e,
      c: t,
      editorRef: H,
      items: i,
      treeRef: r,
      selectArray: E,
      treeProps: h,
      defaultCheckedKeys: n,
      onSelectArrayChange: _,
      handleCheckAllChange: A,
      handleCheckChange: $,
      renderCheckItem: P,
      renderCollapseItem: N,
      renderDropdownMenu: Z
    };
  },
  render() {
    var u, p;
    return Object.is(this.c.renderMode, "TREE") ? Object.is(this.c.mode, "vertical") ? f("div", {
      class: [this.ns.b(), this.ns.e("tree")],
      ref: "editorRef"
    }, [f(b("el-tree"), {
      ref: "treeRef",
      props: this.treeProps,
      data: this.items,
      "show-checkbox": !0,
      "node-key": "value",
      "default-expand-all": !0,
      "check-on-click-node": !0,
      "expand-on-click-node": !1,
      "default-checked-keys": this.defaultCheckedKeys,
      onCheck: this.onSelectArrayChange
    }, null)]) : f("div", {
      class: [this.ns.b(), this.ns.e("checkbox")]
    }, [this.items.map((e) => this.renderCheckItem(e))]) : this.c.mode === "vertical" ? f("div", {
      class: [this.ns.b(), this.ns.e((u = this.c.renderMode) == null ? void 0 : u.toLowerCase()), this.ns.e("collapse")]
    }, [this.items.map((e) => this.renderCollapseItem(this.items, e))]) : f("div", {
      class: [this.ns.b(), this.ns.e((p = this.c.renderMode) == null ? void 0 : p.toLowerCase()), this.ns.e("dropdown")]
    }, [this.items.map((e) => this.renderDropdownMenu(this.items, e))]);
  }
});
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var q = { exports: {} };
(function(u, p) {
  (function(e, t) {
    u.exports = t();
  })(G, function() {
    var e = "month", t = "quarter";
    return function(r, h) {
      var s = h.prototype;
      s.quarter = function(i) {
        return this.$utils().u(i) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (i - 1));
      };
      var n = s.add;
      s.add = function(i, v) {
        return i = Number(i), this.$utils().p(v) === t ? this.add(3 * i, e) : n.bind(this)(i, v);
      };
      var d = s.startOf;
      s.startOf = function(i, v) {
        var g = this.$utils(), D = !!g.u(v) || v;
        if (g.p(i) === t) {
          var k = this.quarter() - 1;
          return D ? this.month(3 * k).startOf(e).startOf("day") : this.month(3 * k + 2).endOf(e).endOf("day");
        }
        return d.bind(this)(i, v);
      };
    };
  });
})(q);
var be = q.exports;
const xe = /* @__PURE__ */ B(be);
var z = { exports: {} };
(function(u, p) {
  (function(e, t) {
    u.exports = t();
  })(G, function() {
    var e = "week", t = "year";
    return function(r, h, s) {
      var n = h.prototype;
      n.week = function(d) {
        if (d === void 0 && (d = null), d !== null)
          return this.add(7 * (d - this.week()), "day");
        var i = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var v = s(this).startOf(t).add(1, t).date(i), g = s(this).endOf(e);
          if (v.isBefore(g))
            return 1;
        }
        var D = s(this).startOf(t).date(i).startOf(e).subtract(1, "millisecond"), k = this.diff(D, e, !0);
        return k < 0 ? s(this).startOf("week").week() : Math.ceil(k);
      }, n.weeks = function(d) {
        return d === void 0 && (d = null), this.week(d);
      };
    };
  });
})(z);
var Ce = z.exports;
const ke = /* @__PURE__ */ B(Ce);
C.extend(xe);
C.extend(ke);
class me extends se {
  constructor() {
    super(...arguments);
    /**
     * 分组模式
     *
     * @type {('YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'CODELIST' | 'FIELD' | 'NOGROUP')}
     * @memberof CheckboxListExtendController
     */
    x(this, "groupModel", "NOGROUP");
    /**
     * 分组属性
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    x(this, "groupField", "value");
    /**
     * 分组代码表
     *
     * @type {IData[]}
     * @memberof CheckboxListExtendController
     */
    x(this, "groupCodeList", []);
    /**
     * 空值文本
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    x(this, "emptyValue", "");
    /**
     * 加载之后
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    x(this, "loadAfter", "");
    /**
     * 设置默认选中
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    x(this, "setDefaultSelect", "");
    /**
     * 排序
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    x(this, "dateSort", "");
    /**
     * 绘制模式
     *
     * @type {('TREE' | 'BUTTON')}
     * @memberof CheckboxListExtendController
     */
    x(this, "renderMode", "TREE");
    /**
     * 模式
     *
     * @type {('horizontal' | 'vertical')}
     * @memberof CheckboxListExtendController
     */
    x(this, "mode", "vertical");
    /**
     * 单项选择
     *
     * @type {boolean}
     * @memberof CheckboxListExtendController
     */
    x(this, "singleSelect", !1);
    /**
     * 代码表模型
     *
     * @type {(IAppCodeList | undefined)}
     * @memberof CheckboxListExtendController
     */
    x(this, "codeList");
    /**
     * 设置默认选中
     *
     * @param {IData} items
     * @param {IData} data
     * @memberof CheckboxListExtendController
     */
    x(this, "getDefaultSelect", (e, t) => {
      let r = [];
      return this.setDefaultSelect && (r = F.execScriptFn(
        {
          items: e,
          context: this.context,
          params: this.params,
          data: t
        },
        this.setDefaultSelect,
        { isAsync: !1 }
      )), r;
    });
  }
  async onInit() {
    if (super.onInit(), this.model.appCodeListId) {
      const e = await ibiz.hub.getApp(this.context.srfappid);
      this.codeList = e.codeList.getCodeList(this.model.appCodeListId);
    }
    this.initEditorParams();
  }
  /**
   * 初始化编辑器参数
   *
   * @protected
   * @memberof CheckboxListExtendController
   */
  initEditorParams() {
    const { editorParams: e } = this.model;
    e && (this.groupModel = e.GROUPMODEL || "NOGROUP", e.GROUPFIELD && (this.groupField = e.GROUPFIELD.toLowerCase()), e.GROUPCODELIST && (this.groupCodeList = JSON.parse(e.GROUPCODELIST)), e.EMPTYVALUE && (this.emptyValue = e.EMPTYVALUE.toLowerCase()), e.RENDERMODE && (this.renderMode = e.RENDERMODE), e.MODE && (this.mode = e.MODE), e.DATESORT && (this.dateSort = e.DATESORT), e.LOADAFTER && (this.loadAfter = e.LOADAFTER), e.SETDEFAULTSELECT && (this.setDefaultSelect = e.SETDEFAULTSELECT), e.SINGLESELECT && (this.singleSelect = e.SINGLESELECT === "true"));
  }
  /**
   * 处理代码表数据
   *
   * @param {readonly} items
   * @param {*} CodeListItem
   * @param {*} []
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  handleCodeListData(e, t) {
    let r = Ee(e);
    switch (this.dateSort && (r = this.handleSort(r)), this.groupModel) {
      case "YEAR":
        r = this.calcYearData(r);
        break;
      case "QUARTER":
        r = this.calcQuarterData(r);
        break;
      case "WEEK":
        r = this.calcWeekData(r);
        break;
      case "MONTH":
        r = this.calcMonthData(r);
        break;
      case "DAY":
        r = this.calcDayData(r);
        break;
      case "CODELIST":
        r = this.calcGroupCodelistData(r);
        break;
      case "FIELD":
        r = this.calcFieldData(r);
        break;
    }
    return this.loadAfter && (r = F.execScriptFn(
      {
        items: r,
        context: this.context,
        params: this.params,
        data: t
      },
      this.loadAfter,
      { isAsync: !1 }
    )), r;
  }
  /**
   * 处理排序
   *
   * @param {IData[]} result
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  handleSort(e) {
    return Object.is(this.dateSort, "DESC") ? e.sort((t, r) => C(r.value).unix() - C(t.value).unix()) : e.sort((t, r) => C(t.value).unix() - C(r.value).unix());
  }
  /**
   * 计算年分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcYearData(e) {
    const t = [], r = {};
    return e.forEach((h) => {
      const n = C(h.value).format("YYYY");
      r[n] || (r[n] = {
        text: n,
        value: n,
        group: !0,
        children: []
      }, t.push(r[n])), r[n].children.push(h);
    }), t;
  }
  /**
   * 计算季度分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcQuarterData(e) {
    const t = [], r = {};
    return e.forEach((h) => {
      const s = C(h.value), n = s.format("YYYY"), d = this.getQuarterDetail(s.quarter(), n);
      r[n] || (r[n] = {
        text: n,
        value: n,
        group: !0,
        children: []
      }, t.push(r[n]));
      const i = r[n], v = i.children.find(
        (g) => g.value === d
      );
      v ? v.children.push(h) : i.children.push({
        text: d,
        value: d,
        group: !0,
        children: [h]
      });
    }), t;
  }
  /**
   * 计算年周分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcWeekData(e) {
    const t = [], r = {};
    return e.forEach((h) => {
      const s = C(h.value), n = s.format("YYYY"), d = "".concat(n, "-").concat(s.week());
      r[n] || (r[n] = {
        text: n,
        value: n,
        group: !0,
        children: []
      }, t.push(r[n]));
      const i = r[n], v = i.children.find(
        (g) => g.value === d
      );
      v ? v.children.push(h) : i.children.push({
        text: d,
        value: d,
        group: !0,
        children: [h]
      });
    }), t;
  }
  /**
   * 计算月分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcMonthData(e) {
    const t = [], r = {};
    return e.forEach((h) => {
      const s = C(h.value), n = s.format("YYYY"), d = s.format("YYYY-MM");
      r[n] || (r[n] = {
        text: n,
        value: n,
        group: !0,
        children: []
      }, t.push(r[n]));
      const i = r[n], v = i.children.find(
        (g) => g.value === d
      );
      v ? v.children.push(h) : i.children.push({
        text: d,
        value: d,
        group: !0,
        children: [h]
      });
    }), t;
  }
  /**
   * 计算天分组数据
   *
   * @param {IData[]} items
   * @memberof CheckboxListExtendController
   */
  calcDayData(e) {
    return e;
  }
  /**
   * 计算代码表分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcGroupCodelistData(e) {
    const t = [];
    if (this.groupCodeList) {
      const r = {};
      e.forEach((h) => {
        const s = h[this.groupField];
        if (!r[s]) {
          const n = this.groupCodeList.find(
            (d) => Object.is(d.value, s)
          );
          n ? r[s] = {
            text: n.text,
            value: n.value,
            group: !0,
            children: []
          } : r[s] = {
            text: h.text,
            value: h.value,
            group: !0,
            children: []
          }, t.push(r[s]);
        }
        r[s].children.push(h);
      });
    } else
      ibiz.message.warning("分组失败，未配置分组代码表数据！");
    return t;
  }
  /**
   * 计算属性分组数据
   *
   * @param {IData[]} items
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  calcFieldData(e) {
    const t = [], r = {};
    return e.forEach((h) => {
      const s = h[this.groupField];
      r[s] || (r[s] = {
        text: s,
        value: s,
        group: !0,
        children: []
      }, t.push(r[s])), r[s].children.push(h);
    }), t;
  }
  /**
   * 获取季度细节
   *
   * @param {number} quarter
   * @param {string} year
   * @return {*}
   * @memberof CheckboxListExtendController
   */
  getQuarterDetail(e, t) {
    switch (e) {
      case 1:
        return "".concat(t, "-01~").concat(t, "-03");
      case 2:
        return "".concat(t, "-04~").concat(t, "-06");
      case 3:
        return "".concat(t, "-07~").concat(t, "-09");
      case 4:
        return "".concat(t, "-10~").concat(t, "-12");
    }
  }
}
class Oe {
  constructor() {
    x(this, "formEditor", "CheckboxListExtend");
    x(this, "gridEditor", "CheckboxListExtend");
  }
  async createController(p, e) {
    const t = new me(p, e);
    return await t.init(), t;
  }
}
const De = de(
  M,
  function(u) {
    u.component(M.name, M), ne(
      "CHECKBOXLIST_EXTEND",
      () => new Oe()
    );
  }
), Me = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(u) {
    u.use(De);
  }
};
export {
  De as IBizCheckboxListExtend,
  Me as default
};
