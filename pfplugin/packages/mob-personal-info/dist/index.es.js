import './style.css';
var it = Object.defineProperty;
var at = (s, g, a) => g in s ? it(s, g, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[g] = a;
var S = (s, g, a) => (at(s, typeof g != "symbol" ? g + "" : g, a), a);
import { CodeListEditorController as lt, OpenAppViewCommand as ct, registerEditorProvider as ut } from "@ibiz-template/runtime";
import { getSpanProps as dt, useNamespace as ft, useFocusAndBlur as mt, withInstall as ht } from "@ibiz-template/vue3-util";
import { defineComponent as pt, ref as q, watch as Q, computed as V, createVNode as C } from "vue";
import { isNil as vt } from "ramda";
import { DataTypes as gt, RuntimeModelError as bt, RuntimeError as Mt } from "@ibiz-template/core";
import U from "dayjs";
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var tt = { exports: {} };
(function(s, g) {
  (function(a, e) {
    s.exports = e();
  })(yt, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, h = /\d\d/, v = /\d\d?/, A = /\d*[^-_:/,()\s\d]+/, M = {}, x = function(r) {
      return (r = +r) + (r > 68 ? 1900 : 2e3);
    }, y = function(r) {
      return function(i) {
        this[r] = +i;
      };
    }, N = [/[+-]\d\d:?(\d\d)?|Z/, function(r) {
      (this.zone || (this.zone = {})).offset = function(i) {
        if (!i || i === "Z")
          return 0;
        var u = i.match(/([+-]|\d\d)/g), f = 60 * u[1] + (+u[2] || 0);
        return f === 0 ? 0 : u[0] === "+" ? -f : f;
      }(r);
    }], Y = function(r) {
      var i = M[r];
      return i && (i.indexOf ? i : i.s.concat(i.f));
    }, O = function(r, i) {
      var u, f = M.meridiem;
      if (f) {
        for (var L = 1; L <= 24; L += 1)
          if (r.indexOf(f(L, 0, i)) > -1) {
            u = L > 12;
            break;
          }
      } else
        u = r === (i ? "pm" : "PM");
      return u;
    }, B = { A: [A, function(r) {
      this.afternoon = O(r, !1);
    }], a: [A, function(r) {
      this.afternoon = O(r, !0);
    }], S: [/\d/, function(r) {
      this.milliseconds = 100 * +r;
    }], SS: [h, function(r) {
      this.milliseconds = 10 * +r;
    }], SSS: [/\d{3}/, function(r) {
      this.milliseconds = +r;
    }], s: [v, y("seconds")], ss: [v, y("seconds")], m: [v, y("minutes")], mm: [v, y("minutes")], H: [v, y("hours")], h: [v, y("hours")], HH: [v, y("hours")], hh: [v, y("hours")], D: [v, y("day")], DD: [h, y("day")], Do: [A, function(r) {
      var i = M.ordinal, u = r.match(/\d+/);
      if (this.day = u[0], i)
        for (var f = 1; f <= 31; f += 1)
          i(f).replace(/\[|\]/g, "") === r && (this.day = f);
    }], M: [v, y("month")], MM: [h, y("month")], MMM: [A, function(r) {
      var i = Y("months"), u = (Y("monthsShort") || i.map(function(f) {
        return f.slice(0, 3);
      })).indexOf(r) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [A, function(r) {
      var i = Y("months").indexOf(r) + 1;
      if (i < 1)
        throw new Error();
      this.month = i % 12 || i;
    }], Y: [/[+-]?\d+/, y("year")], YY: [h, function(r) {
      this.year = x(r);
    }], YYYY: [/\d{4}/, y("year")], Z: N, ZZ: N };
    function Z(r) {
      var i, u;
      i = r, u = M && M.formats;
      for (var f = (r = i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(c, p, m) {
        var l = m && m.toUpperCase();
        return p || u[m] || a[m] || u[l].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(b, I, w) {
          return I || w.slice(1);
        });
      })).match(e), L = f.length, T = 0; T < L; T += 1) {
        var t = f[T], n = B[t], d = n && n[0], o = n && n[1];
        f[T] = o ? { regex: d, parser: o } : t.replace(/^\[|\]$/g, "");
      }
      return function(c) {
        for (var p = {}, m = 0, l = 0; m < L; m += 1) {
          var b = f[m];
          if (typeof b == "string")
            l += b.length;
          else {
            var I = b.regex, w = b.parser, $ = c.slice(l), P = I.exec($)[0];
            w.call(p, P), c = c.replace(P, "");
          }
        }
        return function(D) {
          var E = D.afternoon;
          if (E !== void 0) {
            var F = D.hours;
            E ? F < 12 && (D.hours += 12) : F === 12 && (D.hours = 0), delete D.afternoon;
          }
        }(p), p;
      };
    }
    return function(r, i, u) {
      u.p.customParseFormat = !0, r && r.parseTwoDigitYear && (x = r.parseTwoDigitYear);
      var f = i.prototype, L = f.parse;
      f.parse = function(T) {
        var t = T.date, n = T.utc, d = T.args;
        this.$u = n;
        var o = d[1];
        if (typeof o == "string") {
          var c = d[2] === !0, p = d[3] === !0, m = c || p, l = d[2];
          p && (l = d[2]), M = this.$locale(), !c && l && (M = u.Ls[l]), this.$d = function($, P, D) {
            try {
              if (["x", "X"].indexOf(P) > -1)
                return new Date((P === "X" ? 1e3 : 1) * $);
              var E = Z(P)($), F = E.year, z = E.month, et = E.day, rt = E.hours, ot = E.minutes, nt = E.seconds, st = E.milliseconds, W = E.zone, R = /* @__PURE__ */ new Date(), J = et || (F || z ? 1 : R.getDate()), H = F || R.getFullYear(), j = 0;
              F && !z || (j = z > 0 ? z - 1 : R.getMonth());
              var _ = rt || 0, k = ot || 0, X = nt || 0, G = st || 0;
              return W ? new Date(Date.UTC(H, j, J, _, k, X, G + 60 * W.offset * 1e3)) : D ? new Date(Date.UTC(H, j, J, _, k, X, G)) : new Date(H, j, J, _, k, X, G);
            } catch (wt) {
              return /* @__PURE__ */ new Date("");
            }
          }(t, o, n), this.init(), l && l !== !0 && (this.$L = this.locale(l).$L), m && t != this.format(o) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
        } else if (o instanceof Array)
          for (var b = o.length, I = 1; I <= b; I += 1) {
            d[1] = o[I - 1];
            var w = u.apply(this, d);
            if (w.isValid()) {
              this.$d = w.$d, this.$L = w.$L, this.init();
              break;
            }
            I === b && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          L.call(this, T);
      };
    };
  });
})(tt);
var Tt = tt.exports;
const Et = /* @__PURE__ */ At(Tt);
U.extend(Et);
function Lt(s, g) {
  return s === g ? !1 : U(s, g, !0).isValid();
}
const K = /* @__PURE__ */ pt({
  name: "IBizMobPersonalInfo",
  props: dt(),
  setup(s, {
    emit: g
  }) {
    var T;
    const a = ft("mob-personal-info"), e = s.controller, h = q(""), v = e.codeList, A = e.model.textSeparator || ((T = e.editorParams) == null ? void 0 : T.TEXTSEPARATOR) || ",", M = q([]);
    v && Q(() => s.data, (t) => {
      e.loadCodeList(t).then((n) => {
        M.value = n;
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      componentRef: x
    } = mt(() => g("focus"), () => g("blur")), y = V(() => !!(s.controlParams && s.controlParams.editmode === "hover")), N = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Y = (t) => /[\u4E00-\u9FA5]/.test(t), O = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), B = (t) => {
      if (!t)
        return "";
      let n = 0;
      for (let l = 0; l < t.length; l++)
        if (Y(t))
          n = t.charCodeAt(l) + ((n << 5) - n), n = n & n;
        else {
          const b = t.charCodeAt(l);
          n += b.toString(16);
        }
      const d = String(n).substring(0, 6);
      let o = parseInt(d.substring(0, 2), 16), c = parseInt(d.substring(2, 4), 16), p = parseInt(d.substring(4, 6), 16);
      o < 0 && (o = 10), c < 0 && (c = 10), p < 0 && (p = 10);
      const m = "#".concat(o.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0")).concat(p.toString(16).padStart(2, "0"));
      return m === "#FFFFFF" && N() || m;
    }, Z = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if (O(t)) {
          const c = t.split("").find((m) => /[a-zA-Z]/.test(m)) || "", p = t.split("").find((m) => /[\u4E00-\u9FA5]/.test(m)) || "";
          return "".concat(c).concat(p).toLowerCase();
        }
        return /[a-zA-Z]/.test(t) ? t.split("").filter((c) => /[a-zA-Z]/.test(c)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((c) => /[\u4E00-\u9FA5]/.test(c)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
      }
    }, r = (t, n) => {
      if (t) {
        const d = t.find((o) => o.value == n);
        if (d)
          return d;
        for (let o = 0; o < t.length; o++) {
          const c = r(t[o].children, n);
          if (c)
            return c;
        }
      }
    }, i = (t) => {
      var n;
      if (t && ((n = t.data) != null && n.iconurl))
        return t.data.iconurl;
    };
    Q(() => s.value, (t, n) => {
      var d;
      if (t !== n) {
        if (vt(t)) {
          h.value = "";
          return;
        }
        let o = "";
        const {
          valueFormat: c,
          dataType: p,
          unitName: m
        } = e.parent;
        if (e.model.valueType === "SIMPLES")
          o = t.join(A);
        else if (e.model.valueType === "OBJECT")
          o = t[e.model.objectNameField ? e.model.objectNameField : "srfmajortext"];
        else if (e.model.valueType === "OBJECTS") {
          const l = [];
          t.forEach((b) => {
            l.push(b[e.model.objectNameField ? e.model.objectNameField : "srfmajortext"]);
          }), o = l.join(A);
        } else if (e.model.editorType === "ADDRESSPICKUP")
          try {
            const l = [];
            JSON.parse(t).forEach((I) => {
              l.push(I[e.model.objectNameField ? e.model.objectNameField : "srfmajortext"]);
            }), o = l.join(A);
          } catch (l) {
            ibiz.log.error("标签地址选择器的值不符合JSON格式".concat(t));
          }
        else if (c)
          try {
            if (p != null && gt.isDate(p))
              o = U(t).format(c);
            else {
              const l = U(t).format(c);
              Lt(o, c) ? o = l : o = ibiz.util.text.format("".concat(t), c);
            }
          } catch (l) {
            o = "".concat(t), ibiz.log.error("".concat(t, " 值格式化错误"));
          }
        else
          o = "".concat(t);
        if (m && (o += m), e.codeList && ((d = M.value) == null ? void 0 : d.length) > 0) {
          const l = M.value, b = r(l, o);
          o = (b == null ? void 0 : b.text) || o;
        }
        h.value = o;
      }
    }, {
      immediate: !0
    });
    const u = V(() => {
      var n;
      let t = h.value;
      if (e.codeList && ((n = M.value) == null ? void 0 : n.length) > 0) {
        const d = M.value, o = r(d, t);
        t = (o == null ? void 0 : o.text) || t;
      }
      return t;
    }), f = () => {
      var t;
      if (s.value) {
        let n = null;
        if (e.editorParams.VALUETYPE !== "OBJECT" ? n = r(M.value, s.value) : (t = e.editorParams) != null && t.OBJECTNAMEFIELD && (n = r(M.value, s.value[e.editorParams.OBJECTNAMEFIELD])), n && i(n)) {
          const d = i(n), o = JSON.parse(d), p = ibiz.util.file.calcFileUpDownUrl(e.context, e.params).downloadUrl.replace("%fileId%", o[0].id);
          return C("img", {
            class: a.bem("content", "head-sculpture", "avatar-icon"),
            src: p,
            alt: ""
          }, null);
        }
      }
      return Z(u.value) || "";
    };
    return {
      ns: a,
      c: e,
      text: h,
      editorRef: x,
      showFormDefaultContent: y,
      renderContent: () => {
        const t = h.value;
        if (!t)
          return "- - -";
        const n = e.parseAvatar(t);
        return n ? C("div", {
          class: a.b("content")
        }, [C("div", {
          class: a.be("content", "head-sculpture")
        }, [C("img", {
          src: n
        }, null)])]) : C("div", {
          class: a.b("content")
        }, [C("div", {
          class: a.be("content", "head-sculpture"),
          style: "background-color:".concat(B(u.value))
        }, [f()]), e.isShowNameText() ? C("div", {
          class: a.be("content", "tip")
        }, [u.value]) : null]);
      }
    };
  },
  render() {
    return C("div", {
      class: [this.ns.b(), this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)],
      ref: "editorRef"
    }, [this.renderContent()]);
  }
});
class It extends lt {
  constructor() {
    super(...arguments);
    /**
     *值项
     */
    S(this, "valueItem", "");
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    S(this, "codeList");
    /**
     * 是否支持头像
     *
     * @type {boolean}
     * @memberof MobPersonalInfoEditorController
     */
    S(this, "enableAvatar", !1);
    /**
     * 是否显示姓名文字
     *
     * @type {boolean}
     * @memberof MobPersonalInfoEditorController
     */
    S(this, "showNameText", !0);
    /**
     * 云系统操作者Map
     *
     * @type {(Map<string | number, CodeListItem>)}
     * @memberof MobPersonalInfoEditorController
     */
    S(this, "operatorMap", /* @__PURE__ */ new Map());
  }
  async onInit() {
    var h, v;
    if (super.onInit(), (v = (h = this.model) == null ? void 0 : h.editorItems) != null && v[0] && (this.valueItem = this.model.editorItems[0].id), this.model.appCodeListId) {
      const A = await ibiz.hub.getApp(this.context.srfappid);
      this.codeList = A.codeList.getCodeList(this.model.appCodeListId);
    }
    const { ENABLEAVATAR: a, SHOWNAMETEXT: e } = this.editorParams;
    a && (this.enableAvatar = this.toBoolean(a)), e && (this.showNameText = this.toBoolean(e));
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(a) {
    const e = this.context.clone();
    a[this.valueItem] && (e.srfkey = a[this.valueItem]);
    const { context: h, params: v } = this.handlePublicParams(
      a,
      e,
      this.params
    ), { linkAppViewId: A } = this.model;
    if (!A)
      throw new bt(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      ct.TAG,
      A,
      h,
      v
    );
  }
  /**
   * 判断是否显示姓名文字
   *
   * @return {*}  {boolean}
   * @memberof MobPersonalInfoEditorController
   */
  isShowNameText() {
    return this.showNameText;
  }
  /**
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {*}
   * @memberof MobPersonalInfoEditorController
   */
  parseAvatar(a) {
    if (this.enableAvatar)
      try {
        const e = JSON.parse(a);
        if (e) {
          const h = Array.isArray(e) ? e[0] : e;
          return ibiz.util.file.calcFileUpDownUrl(
            this.context,
            this.params
          ).downloadUrl.replace("%fileId%", h.id);
        }
      } catch (e) {
        throw new Mt("头像数据解析异常");
      }
  }
  /**
   * 获取操作用户列表
   *
   * @memberof MobPersonalInfoEditorController
   */
  async getOperatorUserList() {
    const a = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await a.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((h) => [h.value, h])
    );
  }
}
class St {
  constructor() {
    S(this, "formEditor", "IBizMobPersonalInfo");
    S(this, "gridEditor", "IBizMobPersonalInfo");
  }
  async createController(g, a) {
    const e = new It(
      g,
      a
    );
    return await e.init(), e;
  }
}
const Ct = ht(K, (s) => {
  s.component(K.name, K), ut(
    "EDITOR_CUSTOMSTYLE_MOB_PERSONNEL_INFO",
    () => new St()
  );
}), $t = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(Ct);
  }
};
export {
  Ct as IBizMobPersonalInfo,
  $t as default
};
