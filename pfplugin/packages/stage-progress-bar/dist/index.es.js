import './style.css';
var se = Object.defineProperty;
var ae = (i, l, t) => l in i ? se(i, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[l] = t;
var C = (i, l, t) => (ae(i, typeof l != "symbol" ? l + "" : l, t), t);
import { CodeListEditorController as ie, OpenAppViewCommand as de, registerEditorProvider as le } from "@ibiz-template/runtime";
import { getSpanProps as ce, useNamespace as ue, withInstall as fe } from "@ibiz-template/vue3-util";
import { defineComponent as he, ref as q, watch as me, onUnmounted as pe, createVNode as D, createTextVNode as K, resolveComponent as ge } from "vue";
import { isArray as ve } from "qx-util";
import { isUndefined as we } from "lodash-es";
import T from "dayjs";
import { RuntimeModelError as Ce } from "@ibiz-template/core";
const W = /* @__PURE__ */ he({
  name: "IBizStageProgressBar",
  props: {
    ...ce(),
    value: Array
  },
  setup(i) {
    const l = ue("stage-progress-bar"), t = i.controller, h = q("");
    let w = 0;
    const d = q([]), v = /* @__PURE__ */ new Map(), g = () => t.showMode === "operate" && d.value.length > 0 ? d.value[0][t.isOperateField] === 1 : !1, S = (e) => {
      e.sort((o, s) => {
        const n = o[t.showConfig.sort] ? Number(o[t.showConfig.sort]) : -1, u = s[t.showConfig.sort] ? Number(s[t.showConfig.sort]) : -1;
        return n - u;
      });
    }, p = (e) => {
      const o = e.findIndex((s) => s[t.isCurrentField] === 1);
      e.forEach((s, n) => v.set(s.id, o !== -1 && o >= n));
    }, F = (e, o) => {
      const s = o[t.dateRange.startField], n = o[t.dateRange.endField], u = T(e);
      if (s && n) {
        const m = T(s), E = T(n);
        return !((u.isAfter(m, "day") || u.isSame(m, "day")) && (u.isBefore(E, "day") || u.isSame(E, "day")));
      }
      if (s) {
        const m = T(s);
        return !(u.isAfter(m, "day") || u.isSame(m, "day"));
      }
      if (n) {
        const m = T(n);
        return !(u.isBefore(m, "day") || u.isSame(m, "day"));
      }
      return !1;
    }, A = (e, o) => {
      var n;
      const s = (n = i.value) == null ? void 0 : n.findIndex((u) => u.id === o.id);
      i.value && !we(s) && s !== -1 && Object.assign(i.value[s], {
        [t.dateShowConfig.fieldName]: e ? t.dateFormat(e, "YYYY-MM-DD HH:mm:ss") : null
      });
    }, k = () => {
      if (t.showMode === "operate" && w <= 0) {
        w += 1;
        const e = d.value[1] || {};
        if (!g() && !h.value && i.value) {
          const o = e[t.dateShowConfig.fieldName] || t.dateFormat(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH:mm:ss");
          F(o, e) || (h.value = o, A(h.value, e));
        }
      }
    };
    me(() => i.value, (e) => {
      e && ve(e) && (S(e), p(e), d.value = e, k());
    }, {
      immediate: !0,
      deep: !0
    });
    const _ = (e, o = -1) => e[t.isCurrentField] === 1 && o !== d.value.length - 1 ? {
      border: "2px solid ".concat(e[t.showConfig.color])
    } : {
      backgroundColor: e[t.showConfig.color],
      border: "none"
    }, H = (e) => e[t.isCurrentField] === 1 ? {
      borderBottom: "1px dashed ".concat(e[t.showConfig.color])
    } : {
      borderBottom: "1px solid ".concat(e[t.showConfig.color])
    }, r = (e, o, s) => {
      const n = e[t.showConfig.color];
      if (!v.get(e.id))
        return {};
      switch (o) {
        case "STATE":
          return t.showMode === "default" ? {
            backgroundColor: n
          } : {
            backgroundColor: "transparent",
            border: "1px solid ".concat(n),
            color: n
          };
        case "CENTER":
          return _(e, s);
        case "DATE":
          return t.showMode === "default" ? {
            color: n
          } : {};
        case "LINE":
          return H(e);
        default:
          return {};
      }
    }, a = async (e) => {
      if (e[t.isCurrentField] === 1 || t.showMode === "operate" || i.readonly)
        return;
      const o = d.value.findIndex((m) => m[t.isCurrentField] === 1), s = d.value[o], n = {
        [t.clickStageIdField]: e.id
      };
      s && Object.assign(n, {
        [t.releaseStageIdField]: s.id
      }), (await t.openLinkView(e, n)).ok && t.parent.form.load();
    }, f = (e, o) => {
      A(e, o);
    }, c = [{
      text: "今天",
      value: () => /* @__PURE__ */ new Date()
    }, {
      text: "明天",
      value: () => {
        const e = /* @__PURE__ */ new Date();
        return e.setTime(e.getTime() + 3600 * 1e3 * 24), e;
      }
    }, {
      text: "下周",
      value: () => {
        const e = /* @__PURE__ */ new Date();
        return e.setTime(e.getTime() + 3600 * 1e3 * 24 * 7), e;
      }
    }], y = () => {
      const e = [], o = g() ? d.value[0] : d.value[1];
      return c.forEach((s, n) => {
        F(s.value(), o) && e.push("button-disable".concat(n + 1));
      }), e;
    }, M = (e) => {
      const o = e[t.dateShowConfig.fieldName];
      if (t.showMode === "default")
        return o ? t.dateFormat(o, t.dateShowConfig.format) : "";
      let s = [D("div", {
        class: l.be("date", "caption")
      }, [K("日期")]), D("div", {
        class: l.be("date", "time")
      }, [o ? t.dateFormat(o, t.dateShowConfig.format) : ""])];
      return e[t.isOperateField] && (s = [D("div", {
        class: l.be("date", "caption")
      }, [K("设置日期")]), D(ge("el-date-picker"), {
        modelValue: h.value,
        "onUpdate:modelValue": (n) => h.value = n,
        type: "date",
        class: l.be("date", "time"),
        "popper-class": [l.be("date", "popper"), ...y()],
        placeholder: t.placeHolder,
        shortcuts: c,
        disabled: i.readonly,
        "disabled-date": (n) => F(n, e),
        onChange: (n) => f(n, e)
      }, null)]), D("div", {
        class: [l.b("date")]
      }, [s]);
    }, x = (e, o) => D("div", {
      class: [l.e("item")]
    }, [D("div", {
      class: [l.em("item", "state")],
      style: r(e, "STATE"),
      onClick: () => a(e)
    }, [e[t.showConfig.typeName] || ""]), D("div", {
      class: [l.em("item", "center")],
      style: r(e, "CENTER", o)
    }, null), D("div", {
      class: [l.em("item", "date")],
      style: r(e, "DATE")
    }, [M(e)])]), I = () => d.value.map((e, o) => {
      const s = o < d.value.length - 1;
      return D("div", {
        class: [l.e("item-box")]
      }, [x(e, o), s && D("div", {
        class: [l.em("item-box", "line")],
        style: r(e, "LINE")
      }, null)]);
    });
    return pe(() => {
      v.clear();
    }), {
      ns: l,
      c: t,
      items: d,
      renderContent: I,
      isLeftOperate: g
    };
  },
  render() {
    return D("div", {
      class: [this.ns.b(), this.readonly ? this.ns.e("readonly") : "", this.ns.e(this.c.showMode), this.isLeftOperate() ? this.ns.e("left-operate") : ""],
      ref: "editorRef"
    }, [D("div", {
      class: [this.ns.e("scroll")]
    }, [this.renderContent()])]);
  }
});
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Se(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Q = { exports: {} };
(function(i, l) {
  (function(t, h) {
    i.exports = h();
  })(De, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, h = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, w = /\d\d/, d = /\d\d?/, v = /\d*[^-_:/,()\s\d]+/, g = {}, S = function(r) {
      return (r = +r) + (r > 68 ? 1900 : 2e3);
    }, p = function(r) {
      return function(a) {
        this[r] = +a;
      };
    }, F = [/[+-]\d\d:?(\d\d)?|Z/, function(r) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var f = a.match(/([+-]|\d\d)/g), c = 60 * f[1] + (+f[2] || 0);
        return c === 0 ? 0 : f[0] === "+" ? -c : c;
      }(r);
    }], A = function(r) {
      var a = g[r];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, k = function(r, a) {
      var f, c = g.meridiem;
      if (c) {
        for (var y = 1; y <= 24; y += 1)
          if (r.indexOf(c(y, 0, a)) > -1) {
            f = y > 12;
            break;
          }
      } else
        f = r === (a ? "pm" : "PM");
      return f;
    }, _ = { A: [v, function(r) {
      this.afternoon = k(r, !1);
    }], a: [v, function(r) {
      this.afternoon = k(r, !0);
    }], S: [/\d/, function(r) {
      this.milliseconds = 100 * +r;
    }], SS: [w, function(r) {
      this.milliseconds = 10 * +r;
    }], SSS: [/\d{3}/, function(r) {
      this.milliseconds = +r;
    }], s: [d, p("seconds")], ss: [d, p("seconds")], m: [d, p("minutes")], mm: [d, p("minutes")], H: [d, p("hours")], h: [d, p("hours")], HH: [d, p("hours")], hh: [d, p("hours")], D: [d, p("day")], DD: [w, p("day")], Do: [v, function(r) {
      var a = g.ordinal, f = r.match(/\d+/);
      if (this.day = f[0], a)
        for (var c = 1; c <= 31; c += 1)
          a(c).replace(/\[|\]/g, "") === r && (this.day = c);
    }], M: [d, p("month")], MM: [w, p("month")], MMM: [v, function(r) {
      var a = A("months"), f = (A("monthsShort") || a.map(function(c) {
        return c.slice(0, 3);
      })).indexOf(r) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [v, function(r) {
      var a = A("months").indexOf(r) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, p("year")], YY: [w, function(r) {
      this.year = S(r);
    }], YYYY: [/\d{4}/, p("year")], Z: F, ZZ: F };
    function H(r) {
      var a, f;
      a = r, f = g && g.formats;
      for (var c = (r = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(s, n, u) {
        var m = u && u.toUpperCase();
        return n || f[u] || t[u] || f[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, b, L) {
          return b || L.slice(1);
        });
      })).match(h), y = c.length, M = 0; M < y; M += 1) {
        var x = c[M], I = _[x], e = I && I[0], o = I && I[1];
        c[M] = o ? { regex: e, parser: o } : x.replace(/^\[|\]$/g, "");
      }
      return function(s) {
        for (var n = {}, u = 0, m = 0; u < y; u += 1) {
          var E = c[u];
          if (typeof E == "string")
            m += E.length;
          else {
            var b = E.regex, L = E.parser, B = s.slice(m), P = b.exec(B)[0];
            L.call(n, P), s = s.replace(P, "");
          }
        }
        return function(O) {
          var Y = O.afternoon;
          if (Y !== void 0) {
            var N = O.hours;
            Y ? N < 12 && (O.hours += 12) : N === 12 && (O.hours = 0), delete O.afternoon;
          }
        }(n), n;
      };
    }
    return function(r, a, f) {
      f.p.customParseFormat = !0, r && r.parseTwoDigitYear && (S = r.parseTwoDigitYear);
      var c = a.prototype, y = c.parse;
      c.parse = function(M) {
        var x = M.date, I = M.utc, e = M.args;
        this.$u = I;
        var o = e[1];
        if (typeof o == "string") {
          var s = e[2] === !0, n = e[3] === !0, u = s || n, m = e[2];
          n && (m = e[2]), g = this.$locale(), !s && m && (g = f.Ls[m]), this.$d = function(B, P, O) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * B);
              var Y = H(P)(B), N = Y.year, R = Y.month, ee = Y.day, te = Y.hours, re = Y.minutes, oe = Y.seconds, ne = Y.milliseconds, X = Y.zone, z = /* @__PURE__ */ new Date(), G = ee || (N || R ? 1 : z.getDate()), j = N || z.getFullYear(), $ = 0;
              N && !R || ($ = R > 0 ? R - 1 : z.getMonth());
              var U = te || 0, Z = re || 0, V = oe || 0, J = ne || 0;
              return X ? new Date(Date.UTC(j, $, G, U, Z, V, J + 60 * X.offset * 1e3)) : O ? new Date(Date.UTC(j, $, G, U, Z, V, J)) : new Date(j, $, G, U, Z, V, J);
            } catch (Ie) {
              return /* @__PURE__ */ new Date("");
            }
          }(x, o, I), this.init(), m && m !== !0 && (this.$L = this.locale(m).$L), u && x != this.format(o) && (this.$d = /* @__PURE__ */ new Date("")), g = {};
        } else if (o instanceof Array)
          for (var E = o.length, b = 1; b <= E; b += 1) {
            e[1] = o[b - 1];
            var L = f.apply(this, e);
            if (L.isValid()) {
              this.$d = L.$d, this.$L = L.$L, this.init();
              break;
            }
            b === E && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          y.call(this, M);
      };
    };
  });
})(Q);
var ye = Q.exports;
const Me = /* @__PURE__ */ Se(ye);
T.extend(Me);
class Ee extends ie {
  constructor() {
    super(...arguments);
    /**
     *值项
     */
    C(this, "valueItem", "");
    /**
     * 发布阶段标识属性
     */
    C(this, "releaseStageIdField", "release_stage");
    /**
     * 点击阶段标识属性
     */
    C(this, "clickStageIdField", "click_stage");
    /**
     * 判断是否为当前发布阶段属性
     */
    C(this, "isCurrentField", "is_current");
    /**
     * 是否可操作属性
     */
    C(this, "isOperateField", "target");
    /**
     * 内容显示配置
     */
    C(this, "showConfig", {
      sort: "p_sequence",
      typeName: "pname",
      color: "p_color"
    });
    /**
     * 日期显示配置
     */
    C(this, "dateShowConfig", {
      fieldName: "operated_time",
      format: "YYYY年MM月DD日"
    });
    /**
     * 日期范围配置
     */
    C(this, "dateRange", {
      startField: "",
      endField: ""
    });
    /**
     * 显示模式
     */
    C(this, "showMode", "default");
    /**
     * 代码表模型
     * @return {*}
     */
    C(this, "codeList");
  }
  async onInit() {
    var t, h;
    super.onInit(), (h = (t = this.model) == null ? void 0 : t.editorItems) != null && h[0] && (this.valueItem = this.model.editorItems[0].id), this.initEditorParams();
  }
  /**
   * 初始化编辑器参数
   */
  initEditorParams() {
    const {
      RELEASESTAGEIDFIELD: t,
      CLICKSTAGEIDFIELD: h,
      DATESHOWCONFIG: w,
      ISCURRENTFIELD: d,
      ISOPERATEFIELD: v,
      SHOWCONFIG: g,
      DATERANGE: S,
      SHOWMODE: p
    } = this.editorParams;
    if (t && (this.releaseStageIdField = t), h && (this.clickStageIdField = h), d && (this.isCurrentField = d), v && (this.isOperateField = v), p && (this.showMode = p), w)
      try {
        this.dateShowConfig = JSON.parse(w);
      } catch (F) {
        this.dateShowConfig = {};
      }
    if (g)
      try {
        this.showConfig = JSON.parse(g);
      } catch (F) {
        this.showConfig = {};
      }
    if (S)
      try {
        this.dateRange = JSON.parse(S);
      } catch (F) {
        this.dateRange = {};
      }
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(t, h) {
    const w = this.context.clone();
    t[this.valueItem] && (w.srfkey = t[this.valueItem]);
    const { context: d, params: v } = this.handlePublicParams(
      t,
      w,
      this.params
    ), { linkAppViewId: g } = this.model;
    if (!g)
      throw new Ce(
        this.model,
        ibiz.i18n.t("editor.common.linkViewConfigErr")
      );
    const S = {};
    return Object.assign(S, v), Object.assign(S, h), ibiz.commands.execute(
      de.TAG,
      g,
      d,
      S
    );
  }
  /**
   * 日期格式化
   */
  dateFormat(t, h) {
    return T(t).format(h);
  }
}
class Ye {
  constructor() {
    C(this, "formEditor", "IBizStageProgressBar");
    C(this, "gridEditor", "IBizStageProgressBar");
  }
  async createController(l, t) {
    const h = new Ee(l, t);
    return await h.init(), h;
  }
}
const Fe = fe(
  W,
  function(i) {
    i.component(W.name, W), le(
      "EDITOR_CUSTOMSTYLE_STAGE_PROGRESS_BAR",
      () => new Ye()
    );
  }
), ke = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(i) {
    i.use(Fe);
  }
};
export {
  Fe as IBizStageProgressBar,
  ke as default
};
