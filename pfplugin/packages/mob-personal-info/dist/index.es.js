import './style.css';
var it = Object.defineProperty;
var at = (i, v, a) => v in i ? it(i, v, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[v] = a;
var w = (i, v, a) => (at(i, typeof v != "symbol" ? v + "" : v, a), a);
import { CodeListEditorController as ct, OpenAppViewCommand as lt, registerEditorProvider as ut } from "@ibiz-template/runtime";
import { getSpanProps as dt, useNamespace as ft, useFocusAndBlur as mt, withInstall as ht } from "@ibiz-template/vue3-util";
import { defineComponent as pt, ref as q, watch as Q, computed as V, createVNode as C } from "vue";
import { isNil as vt } from "ramda";
import { DataTypes as gt, RuntimeModelError as bt, RuntimeError as yt } from "@ibiz-template/core";
import U from "dayjs";
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var tt = { exports: {} };
(function(i, v) {
  (function(a, e) {
    i.exports = e();
  })(Mt, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, h = /\d\d/, p = /\d\d?/, A = /\d*[^-_:/,()\s\d]+/, M = {}, x = function(r) {
      return (r = +r) + (r > 68 ? 1900 : 2e3);
    }, y = function(r) {
      return function(s) {
        this[r] = +s;
      };
    }, N = [/[+-]\d\d:?(\d\d)?|Z/, function(r) {
      (this.zone || (this.zone = {})).offset = function(s) {
        if (!s || s === "Z")
          return 0;
        var u = s.match(/([+-]|\d\d)/g), f = 60 * u[1] + (+u[2] || 0);
        return f === 0 ? 0 : u[0] === "+" ? -f : f;
      }(r);
    }], Y = function(r) {
      var s = M[r];
      return s && (s.indexOf ? s : s.s.concat(s.f));
    }, $ = function(r, s) {
      var u, f = M.meridiem;
      if (f) {
        for (var I = 1; I <= 24; I += 1)
          if (r.indexOf(f(I, 0, s)) > -1) {
            u = I > 12;
            break;
          }
      } else
        u = r === (s ? "pm" : "PM");
      return u;
    }, Z = { A: [A, function(r) {
      this.afternoon = $(r, !1);
    }], a: [A, function(r) {
      this.afternoon = $(r, !0);
    }], S: [/\d/, function(r) {
      this.milliseconds = 100 * +r;
    }], SS: [h, function(r) {
      this.milliseconds = 10 * +r;
    }], SSS: [/\d{3}/, function(r) {
      this.milliseconds = +r;
    }], s: [p, y("seconds")], ss: [p, y("seconds")], m: [p, y("minutes")], mm: [p, y("minutes")], H: [p, y("hours")], h: [p, y("hours")], HH: [p, y("hours")], hh: [p, y("hours")], D: [p, y("day")], DD: [h, y("day")], Do: [A, function(r) {
      var s = M.ordinal, u = r.match(/\d+/);
      if (this.day = u[0], s)
        for (var f = 1; f <= 31; f += 1)
          s(f).replace(/\[|\]/g, "") === r && (this.day = f);
    }], M: [p, y("month")], MM: [h, y("month")], MMM: [A, function(r) {
      var s = Y("months"), u = (Y("monthsShort") || s.map(function(f) {
        return f.slice(0, 3);
      })).indexOf(r) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [A, function(r) {
      var s = Y("months").indexOf(r) + 1;
      if (s < 1)
        throw new Error();
      this.month = s % 12 || s;
    }], Y: [/[+-]?\d+/, y("year")], YY: [h, function(r) {
      this.year = x(r);
    }], YYYY: [/\d{4}/, y("year")], Z: N, ZZ: N };
    function B(r) {
      var s, u;
      s = r, u = M && M.formats;
      for (var f = (r = s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(c, g, m) {
        var l = m && m.toUpperCase();
        return g || u[m] || a[m] || u[l].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(b, L, D) {
          return L || D.slice(1);
        });
      })).match(e), I = f.length, S = 0; S < I; S += 1) {
        var t = f[S], n = Z[t], d = n && n[0], o = n && n[1];
        f[S] = o ? { regex: d, parser: o } : t.replace(/^\[|\]$/g, "");
      }
      return function(c) {
        for (var g = {}, m = 0, l = 0; m < I; m += 1) {
          var b = f[m];
          if (typeof b == "string")
            l += b.length;
          else {
            var L = b.regex, D = b.parser, O = c.slice(l), F = L.exec(O)[0];
            D.call(g, F), c = c.replace(F, "");
          }
        }
        return function(E) {
          var T = E.afternoon;
          if (T !== void 0) {
            var P = E.hours;
            T ? P < 12 && (E.hours += 12) : P === 12 && (E.hours = 0), delete E.afternoon;
          }
        }(g), g;
      };
    }
    return function(r, s, u) {
      u.p.customParseFormat = !0, r && r.parseTwoDigitYear && (x = r.parseTwoDigitYear);
      var f = s.prototype, I = f.parse;
      f.parse = function(S) {
        var t = S.date, n = S.utc, d = S.args;
        this.$u = n;
        var o = d[1];
        if (typeof o == "string") {
          var c = d[2] === !0, g = d[3] === !0, m = c || g, l = d[2];
          g && (l = d[2]), M = this.$locale(), !c && l && (M = u.Ls[l]), this.$d = function(O, F, E) {
            try {
              if (["x", "X"].indexOf(F) > -1)
                return new Date((F === "X" ? 1e3 : 1) * O);
              var T = B(F)(O), P = T.year, z = T.month, et = T.day, rt = T.hours, ot = T.minutes, nt = T.seconds, st = T.milliseconds, W = T.zone, R = /* @__PURE__ */ new Date(), H = et || (P || z ? 1 : R.getDate()), _ = P || R.getFullYear(), j = 0;
              P && !z || (j = z > 0 ? z - 1 : R.getMonth());
              var k = rt || 0, J = ot || 0, X = nt || 0, G = st || 0;
              return W ? new Date(Date.UTC(_, j, H, k, J, X, G + 60 * W.offset * 1e3)) : E ? new Date(Date.UTC(_, j, H, k, J, X, G)) : new Date(_, j, H, k, J, X, G);
            } catch (Dt) {
              return /* @__PURE__ */ new Date("");
            }
          }(t, o, n), this.init(), l && l !== !0 && (this.$L = this.locale(l).$L), m && t != this.format(o) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
        } else if (o instanceof Array)
          for (var b = o.length, L = 1; L <= b; L += 1) {
            d[1] = o[L - 1];
            var D = u.apply(this, d);
            if (D.isValid()) {
              this.$d = D.$d, this.$L = D.$L, this.init();
              break;
            }
            L === b && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          I.call(this, S);
      };
    };
  });
})(tt);
var St = tt.exports;
const Tt = /* @__PURE__ */ At(St);
U.extend(Tt);
function It(i, v) {
  return i === v ? !1 : U(i, v, !0).isValid();
}
const K = /* @__PURE__ */ pt({
  name: "IBizMobPersonalInfo",
  props: dt(),
  setup(i, {
    emit: v
  }) {
    var S;
    const a = ft("mob-personal-info"), e = i.controller, h = q(""), p = e.codeList, A = e.model.textSeparator || ((S = e.editorParams) == null ? void 0 : S.TEXTSEPARATOR) || ",", M = q([]);
    p && Q(() => i.data, (t) => {
      e.loadCodeList(t).then((n) => {
        M.value = n;
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      componentRef: x
    } = mt(() => v("focus"), () => v("blur")), y = V(() => !!(i.controlParams && i.controlParams.editmode === "hover")), N = () => {
      const t = document.documentElement;
      return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
    }, Y = (t) => /[\u4E00-\u9FA5]/.test(t), $ = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), Z = (t) => {
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
      let o = parseInt(d.substring(0, 2), 16), c = parseInt(d.substring(2, 4), 16), g = parseInt(d.substring(4, 6), 16);
      o < 0 && (o = 10), c < 0 && (c = 10), g < 0 && (g = 10);
      const m = "#".concat(o.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0")).concat(g.toString(16).padStart(2, "0"));
      return m === "#FFFFFF" && N() || m;
    }, B = (t) => {
      if (t && t.toString().length < 2)
        return t;
      if (t && t.toString().length >= 2) {
        if ($(t)) {
          const c = t.split("").find((m) => /[a-zA-Z]/.test(m)) || "", g = t.split("").find((m) => /[\u4E00-\u9FA5]/.test(m)) || "";
          return "".concat(c).concat(g).toLowerCase();
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
    }, s = (t) => {
      var n;
      if (t && ((n = t.data) != null && n.iconurl))
        return t.data.iconurl;
    };
    Q(() => i.value, (t, n) => {
      var d;
      if (t !== n) {
        if (vt(t)) {
          h.value = "";
          return;
        }
        let o = "";
        const {
          valueFormat: c,
          dataType: g,
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
            JSON.parse(t).forEach((L) => {
              l.push(L[e.model.objectNameField ? e.model.objectNameField : "srfmajortext"]);
            }), o = l.join(A);
          } catch (l) {
            ibiz.log.error("标签地址选择器的值不符合JSON格式".concat(t));
          }
        else if (c)
          try {
            if (g != null && gt.isDate(g))
              o = U(t).format(c);
            else {
              const l = U(t).format(c);
              It(o, c) ? o = l : o = ibiz.util.text.format("".concat(t), c);
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
      if (i.value) {
        const t = r(M.value, i.value);
        if (t && s(t)) {
          const n = s(t), d = JSON.parse(n), c = ibiz.util.file.calcFileUpDownUrl(e.context, e.params).downloadUrl.replace("%fileId%", d[0].id);
          return C("img", {
            class: a.bem("content", "head-sculpture", "avatar-icon"),
            src: c,
            alt: ""
          }, null);
        }
      }
      return B(u.value) || "";
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
          style: "background-color:".concat(Z(u.value))
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
class Lt extends ct {
  constructor() {
    super(...arguments);
    /**
     *值项
     */
    w(this, "valueItem", "");
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    w(this, "codeList");
    /**
     * 是否支持头像
     *
     * @type {boolean}
     * @memberof MobPersonalInfoEditorController
     */
    w(this, "enableAvatar", !1);
    /**
     * 是否显示姓名文字
     *
     * @type {boolean}
     * @memberof MobPersonalInfoEditorController
     */
    w(this, "showNameText", !0);
    /**
     * 云系统操作者Map
     *
     * @type {(Map<string | number, CodeListItem>)}
     * @memberof MobPersonalInfoEditorController
     */
    w(this, "operatorMap", /* @__PURE__ */ new Map());
  }
  async onInit() {
    var h, p;
    if (super.onInit(), (p = (h = this.model) == null ? void 0 : h.editorItems) != null && p[0] && (this.valueItem = this.model.editorItems[0].id), this.model.appCodeListId) {
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
    const { context: h, params: p } = this.handlePublicParams(
      a,
      e,
      this.params
    ), { linkAppViewId: A } = this.model;
    if (!A)
      throw new bt(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      lt.TAG,
      A,
      h,
      p
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
        throw new yt("头像数据解析异常");
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
class wt {
  constructor() {
    w(this, "formEditor", "IBizMobPersonalInfo");
    w(this, "gridEditor", "IBizMobPersonalInfo");
  }
  async createController(v, a) {
    const e = new Lt(
      v,
      a
    );
    return await e.init(), e;
  }
}
const Ct = ht(K, (i) => {
  i.component(K.name, K), ut(
    "EDITOR_CUSTOMSTYLE_MOB_PERSONNEL_INFO",
    () => new wt()
  );
}), Ot = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(i) {
    i.use(Ct);
  }
};
export {
  Ct as IBizMobPersonalInfo,
  Ot as default
};
