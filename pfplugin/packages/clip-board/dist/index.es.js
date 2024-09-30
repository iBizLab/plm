import './style.css';
var ft = Object.defineProperty;
var pt = (t, l, i) => l in t ? ft(t, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[l] = i;
var A = (t, l, i) => (pt(t, typeof l != "symbol" ? l + "" : l, i), i);
import { useNamespace as W, getSpanProps as vt, useFocusAndBlur as Ct, withInstall as yt } from "@ibiz-template/vue3-util";
import { GridFieldColumnController as nt, GridRowState as gt, CodeListEditorController as Lt, OpenAppViewCommand as xt, registerEditorProvider as wt, registerGridColumnProvider as It } from "@ibiz-template/runtime";
import { defineComponent as tt, ref as H, computed as B, createVNode as h, watch as ot, resolveComponent as Q } from "vue";
import { isNil as rt, isNotNil as bt } from "ramda";
import { DataTypes as Mt, RuntimeModelError as Dt } from "@ibiz-template/core";
import G from "dayjs";
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function St(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lt = { exports: {} };
(function(t, l) {
  (function(i, o) {
    t.exports = o();
  })(Tt, function() {
    var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, o = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, c = /\d\d/, f = /\d\d?/, n = /\d*[^-_:/,()\s\d]+/, a = {}, v = function(e) {
      return (e = +e) + (e > 68 ? 1900 : 2e3);
    }, r = function(e) {
      return function(s) {
        this[e] = +s;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
      (this.zone || (this.zone = {})).offset = function(s) {
        if (!s || s === "Z")
          return 0;
        var u = s.match(/([+-]|\d\d)/g), m = 60 * u[1] + (+u[2] || 0);
        return m === 0 ? 0 : u[0] === "+" ? -m : m;
      }(e);
    }], p = function(e) {
      var s = a[e];
      return s && (s.indexOf ? s : s.s.concat(s.f));
    }, g = function(e, s) {
      var u, m = a.meridiem;
      if (m) {
        for (var x = 1; x <= 24; x += 1)
          if (e.indexOf(m(x, 0, s)) > -1) {
            u = x > 12;
            break;
          }
      } else
        u = e === (s ? "pm" : "PM");
      return u;
    }, E = { A: [n, function(e) {
      this.afternoon = g(e, !1);
    }], a: [n, function(e) {
      this.afternoon = g(e, !0);
    }], S: [/\d/, function(e) {
      this.milliseconds = 100 * +e;
    }], SS: [c, function(e) {
      this.milliseconds = 10 * +e;
    }], SSS: [/\d{3}/, function(e) {
      this.milliseconds = +e;
    }], s: [f, r("seconds")], ss: [f, r("seconds")], m: [f, r("minutes")], mm: [f, r("minutes")], H: [f, r("hours")], h: [f, r("hours")], HH: [f, r("hours")], hh: [f, r("hours")], D: [f, r("day")], DD: [c, r("day")], Do: [n, function(e) {
      var s = a.ordinal, u = e.match(/\d+/);
      if (this.day = u[0], s)
        for (var m = 1; m <= 31; m += 1)
          s(m).replace(/\[|\]/g, "") === e && (this.day = m);
    }], M: [f, r("month")], MM: [c, r("month")], MMM: [n, function(e) {
      var s = p("months"), u = (p("monthsShort") || s.map(function(m) {
        return m.slice(0, 3);
      })).indexOf(e) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [n, function(e) {
      var s = p("months").indexOf(e) + 1;
      if (s < 1)
        throw new Error();
      this.month = s % 12 || s;
    }], Y: [/[+-]?\d+/, r("year")], YY: [c, function(e) {
      this.year = v(e);
    }], YYYY: [/\d{4}/, r("year")], Z: d, ZZ: d };
    function O(e) {
      var s, u;
      s = e, u = a && a.formats;
      for (var m = (e = s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(z, M, L) {
        var C = L && L.toUpperCase();
        return M || u[L] || i[L] || u[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, T, F) {
          return T || F.slice(1);
        });
      })).match(o), x = m.length, w = 0; w < x; w += 1) {
        var k = m[w], S = E[k], I = S && S[0], b = S && S[1];
        m[w] = b ? { regex: I, parser: b } : k.replace(/^\[|\]$/g, "");
      }
      return function(z) {
        for (var M = {}, L = 0, C = 0; L < x; L += 1) {
          var D = m[L];
          if (typeof D == "string")
            C += D.length;
          else {
            var T = D.regex, F = D.parser, $ = z.slice(C), N = T.exec($)[0];
            F.call(M, N), z = z.replace(N, "");
          }
        }
        return function(Y) {
          var y = Y.afternoon;
          if (y !== void 0) {
            var P = Y.hours;
            y ? P < 12 && (Y.hours += 12) : P === 12 && (Y.hours = 0), delete Y.afternoon;
          }
        }(M), M;
      };
    }
    return function(e, s, u) {
      u.p.customParseFormat = !0, e && e.parseTwoDigitYear && (v = e.parseTwoDigitYear);
      var m = s.prototype, x = m.parse;
      m.parse = function(w) {
        var k = w.date, S = w.utc, I = w.args;
        this.$u = S;
        var b = I[1];
        if (typeof b == "string") {
          var z = I[2] === !0, M = I[3] === !0, L = z || M, C = I[2];
          M && (C = I[2]), a = this.$locale(), !z && C && (a = u.Ls[C]), this.$d = function($, N, Y) {
            try {
              if (["x", "X"].indexOf(N) > -1)
                return new Date((N === "X" ? 1e3 : 1) * $);
              var y = O(N)($), P = y.year, j = y.month, ct = y.day, ut = y.hours, dt = y.minutes, mt = y.seconds, ht = y.milliseconds, et = y.zone, _ = /* @__PURE__ */ new Date(), V = ct || (P || j ? 1 : _.getDate()), U = P || _.getFullYear(), R = 0;
              P && !j || (R = j > 0 ? j - 1 : _.getMonth());
              var Z = ut || 0, J = dt || 0, X = mt || 0, q = ht || 0;
              return et ? new Date(Date.UTC(U, R, V, Z, J, X, q + 60 * et.offset * 1e3)) : Y ? new Date(Date.UTC(U, R, V, Z, J, X, q)) : new Date(U, R, V, Z, J, X, q);
            } catch (Pt) {
              return /* @__PURE__ */ new Date("");
            }
          }(k, b, S), this.init(), C && C !== !0 && (this.$L = this.locale(C).$L), L && k != this.format(b) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (b instanceof Array)
          for (var D = b.length, T = 1; T <= D; T += 1) {
            I[1] = b[T - 1];
            var F = u.apply(this, I);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            T === D && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          x.call(this, w);
      };
    };
  });
})(lt);
var zt = lt.exports;
const Ft = /* @__PURE__ */ St(zt);
const at = /* @__PURE__ */ tt({
  name: "IBizCopy",
  props: {
    value: {
      type: String || Number,
      default: null
    },
    codeListItems: {
      type: Array
    }
  },
  setup(t) {
    const l = W("clip-board-button"), i = H(null), o = (n, a) => {
      if (n) {
        const v = n.find((r) => r.value == a);
        if (v)
          return v;
        for (let r = 0; r < n.length; r++) {
          const d = o(n[r].children, a);
          if (d)
            return d;
        }
      }
    }, c = B(() => {
      var v;
      let n;
      const a = t == null ? void 0 : t.value;
      if (rt(a) || a === "")
        n = "";
      else {
        if (typeof a == "string" && (t != null && t.codeListItems) && ((v = t == null ? void 0 : t.codeListItems) == null ? void 0 : v.length) > 0) {
          const r = o(t.codeListItems, a);
          n = (r == null ? void 0 : r.text) || "";
        } else
          n = a;
        n = String(n);
      }
      return n;
    });
    return {
      ns: l,
      timer: i,
      text: c,
      copy: (n, a) => {
        if (a.stopPropagation(), a.preventDefault(), !n)
          return;
        ibiz.util.text.copy(n) ? (ibiz.message.success("拷贝成功!"), i.value = setTimeout(() => {
          i.value = null;
        }, 3e3)) : ibiz.message.error("拷贝失败，浏览器copy操作不被支持或未被启用!");
      }
    };
  },
  render() {
    return h("div", {
      class: this.ns.b(),
      onClick: (t) => this.copy(this.text, t)
    }, [this.timer ? h("div", {
      class: this.ns.e("before-copy"),
      title: "复制成功"
    }, [h("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2455",
      width: "1em",
      height: "1em"
    }, [h("path", {
      d: "M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m260.654545 425.425455l-279.272727 279.272727c-5.585455 5.585455-13.032727 9.309091-21.410909 9.309091-10.24 1.861818-20.48-0.930909-27.927273-8.378182l-175.941818-176.872727a30.906182 30.906182 0 0 1 0-43.752728l14.894546-14.894545c12.101818-12.101818 31.650909-12.101818 43.752727 0l141.498182 141.498182 244.829091-244.829091c12.101818-12.101818 31.650909-12.101818 43.752727 0L772.654545 381.672727c12.101818 12.101818 12.101818 31.650909 0 43.752728z",
      "p-id": "2456"
    }, null)])]) : h("div", {
      class: this.ns.e("after-copy"),
      title: "点击复制"
    }, [h("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      focusable: "false"
    }, [h("g", {
      id: "copy2020/after-copy",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [h("g", {
      id: "5666232",
      transform: "translate(2 -.27)",
      "fill-rule": "nonzero"
    }, [h("path", {
      d: "M5.6 8.47v-1.2h4.174v1.2H5.6zm0 3v-1.2h4.174v1.2H5.6zm-4.4-10v10.075H0L.003 2.27c0-1.088.895-2 1.997-2h7.585v1.2H1.2zm1.8.8h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1zm.2 1.2v11.6h8.6V3.47H3.2z",
      id: "copy2020"
    }, null)])])])])]);
  }
});
G.extend(Ft);
function Yt(t, l) {
  return t === l ? !1 : G(t, l, !0).isValid();
}
const K = /* @__PURE__ */ tt({
  name: "IBizFastCopySpan",
  props: vt(),
  setup(t, {
    emit: l
  }) {
    var r;
    const i = W("clip-board-span"), o = t.controller, c = H(""), {
      codeList: f
    } = o, n = o.model.textSeparator || ((r = o.editorParams) == null ? void 0 : r.TEXTSEPARATOR) || ",";
    ot(() => t.value, (d, p) => {
      if (d !== p) {
        if (rt(d)) {
          c.value = "";
          return;
        }
        const {
          valueFormat: g,
          dataType: E,
          unitName: O
        } = o.parent;
        if (o.model.valueType === "SIMPLES")
          c.value = d.join(n);
        else if (o.model.valueType === "OBJECT")
          c.value = d[o.model.objectNameField ? o.model.objectNameField : "srfmajortext"];
        else if (o.model.valueType === "OBJECTS") {
          const e = [];
          d.forEach((s) => {
            e.push(s[o.model.objectNameField ? o.model.objectNameField : "srfmajortext"]);
          }), c.value = e.join(n);
        } else if (o.model.editorType === "ADDRESSPICKUP")
          try {
            const e = [];
            JSON.parse(d).forEach((u) => {
              e.push(u[o.model.objectNameField ? o.model.objectNameField : "srfmajortext"]);
            }), c.value = e.join(n);
          } catch (e) {
            ibiz.log.error("标签地址选择器的值不符合JSON格式".concat(d));
          }
        else if (g)
          try {
            if (E != null && Mt.isDate(E))
              c.value = G(d).format(g);
            else {
              const e = G(d).format(g);
              Yt(e, g) ? c.value = e : c.value = ibiz.util.text.format("".concat(d), g);
            }
          } catch (e) {
            c.value = "".concat(d), ibiz.log.error("".concat(d, " 值格式化错误"));
          }
        else
          c.value = "".concat(d);
        O && (c.value += O);
      }
    }, {
      immediate: !0
    });
    const a = H([]);
    f && ot(() => t.data, (d) => {
      o.loadCodeList(d).then((p) => {
        a.value = p;
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      componentRef: v
    } = Ct(() => l("focus"), () => l("blur"));
    return {
      ns: i,
      c: o,
      text: c,
      editorRef: v,
      items: a
    };
  },
  render() {
    let t = null;
    return this.c.codeList ? t = this.items.length > 0 && h(Q("iBizCodeList"), {
      class: this.ns.e("code-list"),
      codeListItems: this.items,
      codeList: this.c.codeList,
      value: this.text
    }, null) : this.text ? t = this.text : t = "- - -", h("span", {
      class: [this.ns.b(), this.readonly ? this.ns.m("readonly") : ""],
      ref: "editorRef"
    }, [h("span", {
      class: this.ns.e("content"),
      title: this.text
    }, [t]), this.text ? h(at, {
      class: this.ns.e("copy"),
      value: this.text,
      codeListItems: this.items
    }, null) : null]);
  }
});
const it = /* @__PURE__ */ tt({
  name: "IBizFastCopyFieldColumn",
  props: {
    controller: {
      type: nt,
      required: !0
    },
    row: {
      type: gt,
      required: !0
    }
  },
  setup(t) {
    const l = W("grid-field-column"), i = (p) => {
      t.controller.hasAction && (p.stopPropagation(), p.stopImmediatePropagation(), t.controller.triggerAction(t.row, p));
    }, o = (p) => {
      t.controller.isLinkColumn && (p.stopPropagation(), p.stopImmediatePropagation(), t.controller.openLinkView(t.row, p));
    }, c = B(() => t.controller.getCustomHtml(t.row)), f = B(() => t.row.data[t.controller.fieldName]), n = B(() => t.controller.formatValue(f.value)), a = H(""), v = (p) => {
      a.value = p;
    }, r = B(() => {
      if (t.controller.grid.overflowMode === "ellipsis" && bt(f.value) && f.value !== "")
        return t.controller.codeList ? a.value : n.value + (t.controller.model.unitName || "");
    });
    return {
      ns: l,
      onCellClick: i,
      onTextClick: o,
      onInfoTextChange: v,
      onActionClick: async (p, g) => {
        await t.controller.onActionClick(p, t.row, g);
      },
      CustomHtml: c,
      fieldValue: f,
      formatValue: n,
      tooltip: r
    };
  },
  render() {
    var o;
    const t = this.controller, l = t.model.deuiactionGroup ? h(Q("iBizActionToolbar"), {
      class: this.ns.e("toolbar"),
      "action-details": t.model.deuiactionGroup.uiactionGroupDetails,
      "actions-state": this.row.uiActionGroupStates[this.controller.model.codeName],
      groupLevelKeys: [50, 100],
      onActionClick: this.onActionClick
    }, null) : null;
    let i = null;
    return t.isCustomCode ? i = h("span", {
      class: this.ns.e("script"),
      innerHTML: this.CustomHtml
    }, null) : t.codeList ? i = h(Q("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: t.codeListItems,
      codeList: t.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : i = h("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.formatValue, this.fieldValue != null && t.model.unitName]), h("div", {
      class: [this.ns.b(), this.ns.b("clip-board"), t.clickable(this.row) && this.ns.m("clickable"), this.ns.m(this.controller.grid.overflowMode), (o = this.controller.model.cellSysCss) == null ? void 0 : o.cssName, this.ns.is("has-action", !!t.model.deuiactionGroup)],
      onClick: this.onCellClick
    }, [t.model.deuiactionGroup ? [h("div", {
      class: this.ns.b("text-container"),
      title: this.formatValue
    }, [i]), h("div", {
      class: this.ns.b("toolbar-container")
    }, [l])] : i, this.formatValue ? h(at, {
      class: this.ns.e("copy"),
      value: this.formatValue,
      codeListItems: t.codeListItems
    }, null) : null]);
  }
});
class At extends Lt {
  constructor() {
    super(...arguments);
    /**
     *值项
     */
    A(this, "valueItem", "");
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    A(this, "codeList");
  }
  async onInit() {
    var i, o;
    if (super.onInit(), (o = (i = this.model) == null ? void 0 : i.editorItems) != null && o[0] && (this.valueItem = this.model.editorItems[0].id), this.model.appCodeListId) {
      const c = await ibiz.hub.getApp(this.context.srfappid);
      this.codeList = c.codeList.getCodeList(this.model.appCodeListId);
    }
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(i) {
    const o = this.context.clone();
    i[this.valueItem] && (o.srfkey = i[this.valueItem]);
    const { context: c, params: f } = this.handlePublicParams(
      i,
      o,
      this.params
    ), { linkAppViewId: n } = this.model;
    if (!n)
      throw new Dt(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      xt.TAG,
      n,
      c,
      f
    );
  }
}
class st {
  constructor(l) {
    A(this, "formEditor", "IBizFastCopySpan");
    A(this, "gridEditor", "IBizFastCopySpan");
    A(this, "component", "IBizFastCopyFieldColumn");
    A(this, "registerType", "");
    this.registerType = l;
  }
  async createController(l, i) {
    let o;
    return this.registerType === "GRIDCOLUMN" ? o = new nt(
      l,
      i
    ) : o = new At(
      l,
      i
    ), await o.init(), o;
  }
}
const Nt = yt(K, function(t) {
  t.component(K.name, K), t.component(it.name, it), wt(
    "EDITOR_CUSTOMSTYLE_CLIP_BOARD_SPAN",
    () => new st()
  ), It(
    "GRID_COLRENDER_CLIP_BOARD_FIELDCOLUMN",
    () => new st("GRIDCOLUMN")
  );
}), Ht = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(Nt);
  }
};
export {
  Nt as IBizClipBoard,
  Ht as default
};
