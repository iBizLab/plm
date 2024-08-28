import './style.css';
var O = Object.defineProperty;
var F = (y, f, _) => f in y ? O(y, f, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : y[f] = _;
var R = (y, f, _) => (F(y, typeof f != "symbol" ? f + "" : f, _), _);
import { getRawProps, getEditorEmits, useNamespace, withInstall } from "@ibiz-template/vue3-util";
import { EditorController, registerEditorProvider } from "@ibiz-template/runtime";
import { defineComponent, ref, computed, watch, createVNode, createTextVNode, h } from "vue";
import { isArray } from "lodash-es";
const rawActivity = "", RawActivity = /* @__PURE__ */ defineComponent({
  name: "RawActivity",
  props: getRawProps(),
  emits: getEditorEmits(),
  setup(props) {
    var y, f, _, m;
    const ns = useNamespace("raw"), ns2 = useNamespace("raw-activity"), c = props.controller, editorModel = c.model, content = ref("");
    let type = "TEXT", template = "";
    editorModel.contentType && (type = editorModel.contentType), (y = editorModel.editorParams) != null && y.contenttype && (type = (f = editorModel.editorParams) == null ? void 0 : f.contenttype), (_ = editorModel.editorParams) != null && _.template && (template = editorModel.editorParams.template.replaceAll("//n", "\n")), (m = editorModel.editorParams) != null && m.TEMPLATE && (template = editorModel.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const showFormDefaultContent = computed(() => !!(props.controlParams && props.controlParams.editmode === "hover"));
    watch(() => props.value, async (d, r) => {
      if (d !== r && ((typeof d == "string" || typeof d == "number") && (content.value = d), template && d)) {
        let n = [];
        if (typeof d == "string")
          try {
            n = JSON.parse(d), n.forEach((t) => {
              if (t.dataauditdetailname === "TAGS") {
                if (t.newvalue) {
                  const s = JSON.parse(t.newvalue);
                  isArray(s) && (t.newvalue = s.map((i) => i.name).join(","));
                }
                if (t.oldvalue) {
                  const s = JSON.parse(t.oldvalue);
                  isArray(s) && (t.oldvalue = s.map((i) => i.name).join(","));
                }
              }
            });
          } catch (t) {
            ibiz.log.error("JSON字符串转换错误");
          }
        content.value = await ibiz.util.hbs.render(template, n || d);
      }
    }, {
      immediate: !0
    });
    const handleClick = async (e) => {
      const clickValue = e.target.getAttribute("click");
      if (clickValue)
        try {
          eval(clickValue);
        } catch (d) {
          ibiz.log.error("".concat(clickValue, " 脚本执行错误"));
        }
    }, renderContent = () => type === "HTML" ? createVNode("div", {
      class: ns2.e("paragraph"),
      innerHTML: content.value,
      onClick: (d) => {
        handleClick(d);
      }
    }, null) : createVNode("span", {
      class: ns2.e("text")
    }, [content.value]), onContrast = (d) => {
      try {
        const r = JSON.parse(props.value);
        if (r) {
          const n = r.find((t) => t.dataauditdetailname === d);
          if (n) {
            const t = {
              name: d,
              oldValue: n.oldvalue,
              newValue: n.newvalue
            };
            c.openContrastModal(t);
          }
        }
      } catch (r) {
        ibiz.log.error("JSON字符串转换错误");
      }
    };
    return {
      ns,
      ns2,
      onContrast,
      renderContent,
      showFormDefaultContent
    };
  },
  render() {
    return createVNode("div", {
      class: [this.ns.b(), this.ns2.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.renderContent()]);
  }
});
var diffMatchPatch = { exports: {} };
(function(y) {
  var f = function() {
    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
  }, _ = -1, m = 1, d = 0;
  f.Diff = function(r, n) {
    return [r, n];
  }, f.prototype.diff_main = function(r, n, t, s) {
    typeof s > "u" && (this.Diff_Timeout <= 0 ? s = Number.MAX_VALUE : s = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
    var i = s;
    if (r == null || n == null)
      throw new Error("Null input. (diff_main)");
    if (r == n)
      return r ? [new f.Diff(d, r)] : [];
    typeof t > "u" && (t = !0);
    var a = t, l = this.diff_commonPrefix(r, n), o = r.substring(0, l);
    r = r.substring(l), n = n.substring(l), l = this.diff_commonSuffix(r, n);
    var u = r.substring(r.length - l);
    r = r.substring(0, r.length - l), n = n.substring(0, n.length - l);
    var g = this.diff_compute_(r, n, a, i);
    return o && g.unshift(new f.Diff(d, o)), u && g.push(new f.Diff(d, u)), this.diff_cleanupMerge(g), g;
  }, f.prototype.diff_compute_ = function(r, n, t, s) {
    var i;
    if (!r)
      return [new f.Diff(m, n)];
    if (!n)
      return [new f.Diff(_, r)];
    var a = r.length > n.length ? r : n, l = r.length > n.length ? n : r, o = a.indexOf(l);
    if (o != -1)
      return i = [
        new f.Diff(m, a.substring(0, o)),
        new f.Diff(d, l),
        new f.Diff(
          m,
          a.substring(o + l.length)
        )
      ], r.length > n.length && (i[0][0] = i[2][0] = _), i;
    if (l.length == 1)
      return [
        new f.Diff(_, r),
        new f.Diff(m, n)
      ];
    var u = this.diff_halfMatch_(r, n);
    if (u) {
      var g = u[0], v = u[1], p = u[2], b = u[3], w = u[4], M = this.diff_main(g, p, t, s), A = this.diff_main(v, b, t, s);
      return M.concat(
        [new f.Diff(d, w)],
        A
      );
    }
    return t && r.length > 100 && n.length > 100 ? this.diff_lineMode_(r, n, s) : this.diff_bisect_(r, n, s);
  }, f.prototype.diff_lineMode_ = function(r, n, t) {
    var s = this.diff_linesToChars_(r, n);
    r = s.chars1, n = s.chars2;
    var i = s.lineArray, a = this.diff_main(r, n, !1, t);
    this.diff_charsToLines_(a, i), this.diff_cleanupSemantic(a), a.push(new f.Diff(d, ""));
    for (var l = 0, o = 0, u = 0, g = "", v = ""; l < a.length; ) {
      switch (a[l][0]) {
        case m:
          u++, v += a[l][1];
          break;
        case _:
          o++, g += a[l][1];
          break;
        case d:
          if (o >= 1 && u >= 1) {
            a.splice(
              l - o - u,
              o + u
            ), l = l - o - u;
            for (var p = this.diff_main(g, v, !1, t), b = p.length - 1; b >= 0; b--)
              a.splice(l, 0, p[b]);
            l = l + p.length;
          }
          u = 0, o = 0, g = "", v = "";
          break;
      }
      l++;
    }
    return a.pop(), a;
  }, f.prototype.diff_bisect_ = function(r, n, t) {
    for (var s = r.length, i = n.length, a = Math.ceil((s + i) / 2), l = a, o = 2 * a, u = new Array(o), g = new Array(o), v = 0; v < o; v++)
      u[v] = -1, g[v] = -1;
    u[l + 1] = 0, g[l + 1] = 0;
    for (var p = s - i, b = p % 2 != 0, w = 0, M = 0, A = 0, C = 0, D = 0; D < a && !((/* @__PURE__ */ new Date()).getTime() > t); D++) {
      for (var E = -D + w; E <= D - M; E += 2) {
        var N = l + E, T;
        E == -D || E != D && u[N - 1] < u[N + 1] ? T = u[N + 1] : T = u[N - 1] + 1;
        for (var S = T - E; T < s && S < i && r.charAt(T) == n.charAt(S); )
          T++, S++;
        if (u[N] = T, T > s)
          M += 2;
        else if (S > i)
          w += 2;
        else if (b) {
          var V = l + p - E;
          if (V >= 0 && V < o && g[V] != -1) {
            var P = s - g[V];
            if (T >= P)
              return this.diff_bisectSplit_(r, n, T, S, t);
          }
        }
      }
      for (var I = -D + A; I <= D - C; I += 2) {
        var V = l + I, P;
        I == -D || I != D && g[V - 1] < g[V + 1] ? P = g[V + 1] : P = g[V - 1] + 1;
        for (var k = P - I; P < s && k < i && r.charAt(s - P - 1) == n.charAt(i - k - 1); )
          P++, k++;
        if (g[V] = P, P > s)
          C += 2;
        else if (k > i)
          A += 2;
        else if (!b) {
          var N = l + p - I;
          if (N >= 0 && N < o && u[N] != -1) {
            var T = u[N], S = l + T - N;
            if (P = s - P, T >= P)
              return this.diff_bisectSplit_(r, n, T, S, t);
          }
        }
      }
    }
    return [
      new f.Diff(_, r),
      new f.Diff(m, n)
    ];
  }, f.prototype.diff_bisectSplit_ = function(r, n, t, s, i) {
    var a = r.substring(0, t), l = n.substring(0, s), o = r.substring(t), u = n.substring(s), g = this.diff_main(a, l, !1, i), v = this.diff_main(o, u, !1, i);
    return g.concat(v);
  }, f.prototype.diff_linesToChars_ = function(r, n) {
    var t = [], s = {};
    t[0] = "";
    function i(u) {
      for (var g = "", v = 0, p = -1, b = t.length; p < u.length - 1; ) {
        p = u.indexOf("\n", v), p == -1 && (p = u.length - 1);
        var w = u.substring(v, p + 1);
        (s.hasOwnProperty ? s.hasOwnProperty(w) : s[w] !== void 0) ? g += String.fromCharCode(s[w]) : (b == a && (w = u.substring(v), p = u.length), g += String.fromCharCode(b), s[w] = b, t[b++] = w), v = p + 1;
      }
      return g;
    }
    var a = 4e4, l = i(r);
    a = 65535;
    var o = i(n);
    return { chars1: l, chars2: o, lineArray: t };
  }, f.prototype.diff_charsToLines_ = function(r, n) {
    for (var t = 0; t < r.length; t++) {
      for (var s = r[t][1], i = [], a = 0; a < s.length; a++)
        i[a] = n[s.charCodeAt(a)];
      r[t][1] = i.join("");
    }
  }, f.prototype.diff_commonPrefix = function(r, n) {
    if (!r || !n || r.charAt(0) != n.charAt(0))
      return 0;
    for (var t = 0, s = Math.min(r.length, n.length), i = s, a = 0; t < i; )
      r.substring(a, i) == n.substring(a, i) ? (t = i, a = t) : s = i, i = Math.floor((s - t) / 2 + t);
    return i;
  }, f.prototype.diff_commonSuffix = function(r, n) {
    if (!r || !n || r.charAt(r.length - 1) != n.charAt(n.length - 1))
      return 0;
    for (var t = 0, s = Math.min(r.length, n.length), i = s, a = 0; t < i; )
      r.substring(r.length - i, r.length - a) == n.substring(n.length - i, n.length - a) ? (t = i, a = t) : s = i, i = Math.floor((s - t) / 2 + t);
    return i;
  }, f.prototype.diff_commonOverlap_ = function(r, n) {
    var t = r.length, s = n.length;
    if (t == 0 || s == 0)
      return 0;
    t > s ? r = r.substring(t - s) : t < s && (n = n.substring(0, t));
    var i = Math.min(t, s);
    if (r == n)
      return i;
    for (var a = 0, l = 1; ; ) {
      var o = r.substring(i - l), u = n.indexOf(o);
      if (u == -1)
        return a;
      l += u, (u == 0 || r.substring(i - l) == n.substring(0, l)) && (a = l, l++);
    }
  }, f.prototype.diff_halfMatch_ = function(r, n) {
    if (this.Diff_Timeout <= 0)
      return null;
    var t = r.length > n.length ? r : n, s = r.length > n.length ? n : r;
    if (t.length < 4 || s.length * 2 < t.length)
      return null;
    var i = this;
    function a(M, A, C) {
      for (var D = M.substring(C, C + Math.floor(M.length / 4)), E = -1, N = "", T, S, V, P; (E = A.indexOf(D, E + 1)) != -1; ) {
        var I = i.diff_commonPrefix(
          M.substring(C),
          A.substring(E)
        ), k = i.diff_commonSuffix(
          M.substring(0, C),
          A.substring(0, E)
        );
        N.length < k + I && (N = A.substring(E - k, E) + A.substring(E, E + I), T = M.substring(0, C - k), S = M.substring(C + I), V = A.substring(0, E - k), P = A.substring(E + I));
      }
      return N.length * 2 >= M.length ? [
        T,
        S,
        V,
        P,
        N
      ] : null;
    }
    var l = a(
      t,
      s,
      Math.ceil(t.length / 4)
    ), o = a(
      t,
      s,
      Math.ceil(t.length / 2)
    ), u;
    if (!l && !o)
      return null;
    o ? l ? u = l[4].length > o[4].length ? l : o : u = o : u = l;
    var g, v, p, b;
    r.length > n.length ? (g = u[0], v = u[1], p = u[2], b = u[3]) : (p = u[0], b = u[1], g = u[2], v = u[3]);
    var w = u[4];
    return [g, v, p, b, w];
  }, f.prototype.diff_cleanupSemantic = function(r) {
    for (var n = !1, t = [], s = 0, i = null, a = 0, l = 0, o = 0, u = 0, g = 0; a < r.length; )
      r[a][0] == d ? (t[s++] = a, l = u, o = g, u = 0, g = 0, i = r[a][1]) : (r[a][0] == m ? u += r[a][1].length : g += r[a][1].length, i && i.length <= Math.max(l, o) && i.length <= Math.max(
        u,
        g
      ) && (r.splice(
        t[s - 1],
        0,
        new f.Diff(_, i)
      ), r[t[s - 1] + 1][0] = m, s--, s--, a = s > 0 ? t[s - 1] : -1, l = 0, o = 0, u = 0, g = 0, i = null, n = !0)), a++;
    for (n && this.diff_cleanupMerge(r), this.diff_cleanupSemanticLossless(r), a = 1; a < r.length; ) {
      if (r[a - 1][0] == _ && r[a][0] == m) {
        var v = r[a - 1][1], p = r[a][1], b = this.diff_commonOverlap_(v, p), w = this.diff_commonOverlap_(p, v);
        b >= w ? (b >= v.length / 2 || b >= p.length / 2) && (r.splice(a, 0, new f.Diff(
          d,
          p.substring(0, b)
        )), r[a - 1][1] = v.substring(0, v.length - b), r[a + 1][1] = p.substring(b), a++) : (w >= v.length / 2 || w >= p.length / 2) && (r.splice(a, 0, new f.Diff(
          d,
          v.substring(0, w)
        )), r[a - 1][0] = m, r[a - 1][1] = p.substring(0, p.length - w), r[a + 1][0] = _, r[a + 1][1] = v.substring(w), a++), a++;
      }
      a++;
    }
  }, f.prototype.diff_cleanupSemanticLossless = function(r) {
    function n(w, M) {
      if (!w || !M)
        return 6;
      var A = w.charAt(w.length - 1), C = M.charAt(0), D = A.match(f.nonAlphaNumericRegex_), E = C.match(f.nonAlphaNumericRegex_), N = D && A.match(f.whitespaceRegex_), T = E && C.match(f.whitespaceRegex_), S = N && A.match(f.linebreakRegex_), V = T && C.match(f.linebreakRegex_), P = S && w.match(f.blanklineEndRegex_), I = V && M.match(f.blanklineStartRegex_);
      return P || I ? 5 : S || V ? 4 : D && !N && T ? 3 : N || T ? 2 : D || E ? 1 : 0;
    }
    for (var t = 1; t < r.length - 1; ) {
      if (r[t - 1][0] == d && r[t + 1][0] == d) {
        var s = r[t - 1][1], i = r[t][1], a = r[t + 1][1], l = this.diff_commonSuffix(s, i);
        if (l) {
          var o = i.substring(i.length - l);
          s = s.substring(0, s.length - l), i = o + i.substring(0, i.length - l), a = o + a;
        }
        for (var u = s, g = i, v = a, p = n(s, i) + n(i, a); i.charAt(0) === a.charAt(0); ) {
          s += i.charAt(0), i = i.substring(1) + a.charAt(0), a = a.substring(1);
          var b = n(s, i) + n(i, a);
          b >= p && (p = b, u = s, g = i, v = a);
        }
        r[t - 1][1] != u && (u ? r[t - 1][1] = u : (r.splice(t - 1, 1), t--), r[t][1] = g, v ? r[t + 1][1] = v : (r.splice(t + 1, 1), t--));
      }
      t++;
    }
  }, f.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, f.whitespaceRegex_ = /\s/, f.linebreakRegex_ = /[\r\n]/, f.blanklineEndRegex_ = /\n\r?\n$/, f.blanklineStartRegex_ = /^\r?\n\r?\n/, f.prototype.diff_cleanupEfficiency = function(r) {
    for (var n = !1, t = [], s = 0, i = null, a = 0, l = !1, o = !1, u = !1, g = !1; a < r.length; )
      r[a][0] == d ? (r[a][1].length < this.Diff_EditCost && (u || g) ? (t[s++] = a, l = u, o = g, i = r[a][1]) : (s = 0, i = null), u = g = !1) : (r[a][0] == _ ? g = !0 : u = !0, i && (l && o && u && g || i.length < this.Diff_EditCost / 2 && l + o + u + g == 3) && (r.splice(
        t[s - 1],
        0,
        new f.Diff(_, i)
      ), r[t[s - 1] + 1][0] = m, s--, i = null, l && o ? (u = g = !0, s = 0) : (s--, a = s > 0 ? t[s - 1] : -1, u = g = !1), n = !0)), a++;
    n && this.diff_cleanupMerge(r);
  }, f.prototype.diff_cleanupMerge = function(r) {
    r.push(new f.Diff(d, ""));
    for (var n = 0, t = 0, s = 0, i = "", a = "", l; n < r.length; )
      switch (r[n][0]) {
        case m:
          s++, a += r[n][1], n++;
          break;
        case _:
          t++, i += r[n][1], n++;
          break;
        case d:
          t + s > 1 ? (t !== 0 && s !== 0 && (l = this.diff_commonPrefix(a, i), l !== 0 && (n - t - s > 0 && r[n - t - s - 1][0] == d ? r[n - t - s - 1][1] += a.substring(0, l) : (r.splice(0, 0, new f.Diff(
            d,
            a.substring(0, l)
          )), n++), a = a.substring(l), i = i.substring(l)), l = this.diff_commonSuffix(a, i), l !== 0 && (r[n][1] = a.substring(a.length - l) + r[n][1], a = a.substring(0, a.length - l), i = i.substring(0, i.length - l))), n -= t + s, r.splice(n, t + s), i.length && (r.splice(
            n,
            0,
            new f.Diff(_, i)
          ), n++), a.length && (r.splice(
            n,
            0,
            new f.Diff(m, a)
          ), n++), n++) : n !== 0 && r[n - 1][0] == d ? (r[n - 1][1] += r[n][1], r.splice(n, 1)) : n++, s = 0, t = 0, i = "", a = "";
          break;
      }
    r[r.length - 1][1] === "" && r.pop();
    var o = !1;
    for (n = 1; n < r.length - 1; )
      r[n - 1][0] == d && r[n + 1][0] == d && (r[n][1].substring(r[n][1].length - r[n - 1][1].length) == r[n - 1][1] ? (r[n][1] = r[n - 1][1] + r[n][1].substring(0, r[n][1].length - r[n - 1][1].length), r[n + 1][1] = r[n - 1][1] + r[n + 1][1], r.splice(n - 1, 1), o = !0) : r[n][1].substring(0, r[n + 1][1].length) == r[n + 1][1] && (r[n - 1][1] += r[n + 1][1], r[n][1] = r[n][1].substring(r[n + 1][1].length) + r[n + 1][1], r.splice(n + 1, 1), o = !0)), n++;
    o && this.diff_cleanupMerge(r);
  }, f.prototype.diff_xIndex = function(r, n) {
    var t = 0, s = 0, i = 0, a = 0, l;
    for (l = 0; l < r.length && (r[l][0] !== m && (t += r[l][1].length), r[l][0] !== _ && (s += r[l][1].length), !(t > n)); l++)
      i = t, a = s;
    return r.length != l && r[l][0] === _ ? a : a + (n - i);
  }, f.prototype.diff_prettyHtml = function(r) {
    for (var n = [], t = /&/g, s = /</g, i = />/g, a = /\n/g, l = 0; l < r.length; l++) {
      var o = r[l][0], u = r[l][1], g = u.replace(t, "&amp;").replace(s, "&lt;").replace(i, "&gt;").replace(a, "&para;<br>");
      switch (o) {
        case m:
          n[l] = '<ins style="background:#e6ffe6;">' + g + "</ins>";
          break;
        case _:
          n[l] = '<del style="background:#ffe6e6;">' + g + "</del>";
          break;
        case d:
          n[l] = "<span>" + g + "</span>";
          break;
      }
    }
    return n.join("");
  }, f.prototype.diff_text1 = function(r) {
    for (var n = [], t = 0; t < r.length; t++)
      r[t][0] !== m && (n[t] = r[t][1]);
    return n.join("");
  }, f.prototype.diff_text2 = function(r) {
    for (var n = [], t = 0; t < r.length; t++)
      r[t][0] !== _ && (n[t] = r[t][1]);
    return n.join("");
  }, f.prototype.diff_levenshtein = function(r) {
    for (var n = 0, t = 0, s = 0, i = 0; i < r.length; i++) {
      var a = r[i][0], l = r[i][1];
      switch (a) {
        case m:
          t += l.length;
          break;
        case _:
          s += l.length;
          break;
        case d:
          n += Math.max(t, s), t = 0, s = 0;
          break;
      }
    }
    return n += Math.max(t, s), n;
  }, f.prototype.diff_toDelta = function(r) {
    for (var n = [], t = 0; t < r.length; t++)
      switch (r[t][0]) {
        case m:
          n[t] = "+" + encodeURI(r[t][1]);
          break;
        case _:
          n[t] = "-" + r[t][1].length;
          break;
        case d:
          n[t] = "=" + r[t][1].length;
          break;
      }
    return n.join("	").replace(/%20/g, " ");
  }, f.prototype.diff_fromDelta = function(r, n) {
    for (var t = [], s = 0, i = 0, a = n.split(/\t/g), l = 0; l < a.length; l++) {
      var o = a[l].substring(1);
      switch (a[l].charAt(0)) {
        case "+":
          try {
            t[s++] = new f.Diff(m, decodeURI(o));
          } catch (v) {
            throw new Error("Illegal escape in diff_fromDelta: " + o);
          }
          break;
        case "-":
        case "=":
          var u = parseInt(o, 10);
          if (isNaN(u) || u < 0)
            throw new Error("Invalid number in diff_fromDelta: " + o);
          var g = r.substring(i, i += u);
          a[l].charAt(0) == "=" ? t[s++] = new f.Diff(d, g) : t[s++] = new f.Diff(_, g);
          break;
        default:
          if (a[l])
            throw new Error("Invalid diff operation in diff_fromDelta: " + a[l]);
      }
    }
    if (i != r.length)
      throw new Error("Delta length (" + i + ") does not equal source text length (" + r.length + ").");
    return t;
  }, f.prototype.match_main = function(r, n, t) {
    if (r == null || n == null || t == null)
      throw new Error("Null input. (match_main)");
    return t = Math.max(0, Math.min(t, r.length)), r == n ? 0 : r.length ? r.substring(t, t + n.length) == n ? t : this.match_bitap_(r, n, t) : -1;
  }, f.prototype.match_bitap_ = function(r, n, t) {
    if (n.length > this.Match_MaxBits)
      throw new Error("Pattern too long for this browser.");
    var s = this.match_alphabet_(n), i = this;
    function a(T, S) {
      var V = T / n.length, P = Math.abs(t - S);
      return i.Match_Distance ? V + P / i.Match_Distance : P ? 1 : V;
    }
    var l = this.Match_Threshold, o = r.indexOf(n, t);
    o != -1 && (l = Math.min(a(0, o), l), o = r.lastIndexOf(n, t + n.length), o != -1 && (l = Math.min(a(0, o), l)));
    var u = 1 << n.length - 1;
    o = -1;
    for (var g, v, p = n.length + r.length, b, w = 0; w < n.length; w++) {
      for (g = 0, v = p; g < v; )
        a(w, t + v) <= l ? g = v : p = v, v = Math.floor((p - g) / 2 + g);
      p = v;
      var M = Math.max(1, t - v + 1), A = Math.min(t + v, r.length) + n.length, C = Array(A + 2);
      C[A + 1] = (1 << w) - 1;
      for (var D = A; D >= M; D--) {
        var E = s[r.charAt(D - 1)];
        if (w === 0 ? C[D] = (C[D + 1] << 1 | 1) & E : C[D] = (C[D + 1] << 1 | 1) & E | ((b[D + 1] | b[D]) << 1 | 1) | b[D + 1], C[D] & u) {
          var N = a(w, D - 1);
          if (N <= l)
            if (l = N, o = D - 1, o > t)
              M = Math.max(1, 2 * t - o);
            else
              break;
        }
      }
      if (a(w + 1, t) > l)
        break;
      b = C;
    }
    return o;
  }, f.prototype.match_alphabet_ = function(r) {
    for (var n = {}, t = 0; t < r.length; t++)
      n[r.charAt(t)] = 0;
    for (var t = 0; t < r.length; t++)
      n[r.charAt(t)] |= 1 << r.length - t - 1;
    return n;
  }, f.prototype.patch_addContext_ = function(r, n) {
    if (n.length != 0) {
      if (r.start2 === null)
        throw Error("patch not initialized");
      for (var t = n.substring(r.start2, r.start2 + r.length1), s = 0; n.indexOf(t) != n.lastIndexOf(t) && t.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
        s += this.Patch_Margin, t = n.substring(
          r.start2 - s,
          r.start2 + r.length1 + s
        );
      s += this.Patch_Margin;
      var i = n.substring(r.start2 - s, r.start2);
      i && r.diffs.unshift(new f.Diff(d, i));
      var a = n.substring(
        r.start2 + r.length1,
        r.start2 + r.length1 + s
      );
      a && r.diffs.push(new f.Diff(d, a)), r.start1 -= i.length, r.start2 -= i.length, r.length1 += i.length + a.length, r.length2 += i.length + a.length;
    }
  }, f.prototype.patch_make = function(r, n, t) {
    var s, i;
    if (typeof r == "string" && typeof n == "string" && typeof t > "u")
      s = /** @type {string} */
      r, i = this.diff_main(
        s,
        /** @type {string} */
        n,
        !0
      ), i.length > 2 && (this.diff_cleanupSemantic(i), this.diff_cleanupEfficiency(i));
    else if (r && typeof r == "object" && typeof n > "u" && typeof t > "u")
      i = /** @type {!Array.<!diff_match_patch.Diff>} */
      r, s = this.diff_text1(i);
    else if (typeof r == "string" && n && typeof n == "object" && typeof t > "u")
      s = /** @type {string} */
      r, i = /** @type {!Array.<!diff_match_patch.Diff>} */
      n;
    else if (typeof r == "string" && typeof n == "string" && t && typeof t == "object")
      s = /** @type {string} */
      r, i = /** @type {!Array.<!diff_match_patch.Diff>} */
      t;
    else
      throw new Error("Unknown call format to patch_make.");
    if (i.length === 0)
      return [];
    for (var a = [], l = new f.patch_obj(), o = 0, u = 0, g = 0, v = s, p = s, b = 0; b < i.length; b++) {
      var w = i[b][0], M = i[b][1];
      switch (!o && w !== d && (l.start1 = u, l.start2 = g), w) {
        case m:
          l.diffs[o++] = i[b], l.length2 += M.length, p = p.substring(0, g) + M + p.substring(g);
          break;
        case _:
          l.length1 += M.length, l.diffs[o++] = i[b], p = p.substring(0, g) + p.substring(g + M.length);
          break;
        case d:
          M.length <= 2 * this.Patch_Margin && o && i.length != b + 1 ? (l.diffs[o++] = i[b], l.length1 += M.length, l.length2 += M.length) : M.length >= 2 * this.Patch_Margin && o && (this.patch_addContext_(l, v), a.push(l), l = new f.patch_obj(), o = 0, v = p, u = g);
          break;
      }
      w !== m && (u += M.length), w !== _ && (g += M.length);
    }
    return o && (this.patch_addContext_(l, v), a.push(l)), a;
  }, f.prototype.patch_deepCopy = function(r) {
    for (var n = [], t = 0; t < r.length; t++) {
      var s = r[t], i = new f.patch_obj();
      i.diffs = [];
      for (var a = 0; a < s.diffs.length; a++)
        i.diffs[a] = new f.Diff(s.diffs[a][0], s.diffs[a][1]);
      i.start1 = s.start1, i.start2 = s.start2, i.length1 = s.length1, i.length2 = s.length2, n[t] = i;
    }
    return n;
  }, f.prototype.patch_apply = function(r, n) {
    if (r.length == 0)
      return [n, []];
    r = this.patch_deepCopy(r);
    var t = this.patch_addPadding(r);
    n = t + n + t, this.patch_splitMax(r);
    for (var s = 0, i = [], a = 0; a < r.length; a++) {
      var l = r[a].start2 + s, o = this.diff_text1(r[a].diffs), u, g = -1;
      if (o.length > this.Match_MaxBits ? (u = this.match_main(
        n,
        o.substring(0, this.Match_MaxBits),
        l
      ), u != -1 && (g = this.match_main(
        n,
        o.substring(o.length - this.Match_MaxBits),
        l + o.length - this.Match_MaxBits
      ), (g == -1 || u >= g) && (u = -1))) : u = this.match_main(n, o, l), u == -1)
        i[a] = !1, s -= r[a].length2 - r[a].length1;
      else {
        i[a] = !0, s = u - l;
        var v;
        if (g == -1 ? v = n.substring(u, u + o.length) : v = n.substring(u, g + this.Match_MaxBits), o == v)
          n = n.substring(0, u) + this.diff_text2(r[a].diffs) + n.substring(u + o.length);
        else {
          var p = this.diff_main(o, v, !1);
          if (o.length > this.Match_MaxBits && this.diff_levenshtein(p) / o.length > this.Patch_DeleteThreshold)
            i[a] = !1;
          else {
            this.diff_cleanupSemanticLossless(p);
            for (var b = 0, w, M = 0; M < r[a].diffs.length; M++) {
              var A = r[a].diffs[M];
              A[0] !== d && (w = this.diff_xIndex(p, b)), A[0] === m ? n = n.substring(0, u + w) + A[1] + n.substring(u + w) : A[0] === _ && (n = n.substring(0, u + w) + n.substring(u + this.diff_xIndex(
                p,
                b + A[1].length
              ))), A[0] !== _ && (b += A[1].length);
            }
          }
        }
      }
    }
    return n = n.substring(t.length, n.length - t.length), [n, i];
  }, f.prototype.patch_addPadding = function(r) {
    for (var n = this.Patch_Margin, t = "", s = 1; s <= n; s++)
      t += String.fromCharCode(s);
    for (var s = 0; s < r.length; s++)
      r[s].start1 += n, r[s].start2 += n;
    var i = r[0], a = i.diffs;
    if (a.length == 0 || a[0][0] != d)
      a.unshift(new f.Diff(d, t)), i.start1 -= n, i.start2 -= n, i.length1 += n, i.length2 += n;
    else if (n > a[0][1].length) {
      var l = n - a[0][1].length;
      a[0][1] = t.substring(a[0][1].length) + a[0][1], i.start1 -= l, i.start2 -= l, i.length1 += l, i.length2 += l;
    }
    if (i = r[r.length - 1], a = i.diffs, a.length == 0 || a[a.length - 1][0] != d)
      a.push(new f.Diff(d, t)), i.length1 += n, i.length2 += n;
    else if (n > a[a.length - 1][1].length) {
      var l = n - a[a.length - 1][1].length;
      a[a.length - 1][1] += t.substring(0, l), i.length1 += l, i.length2 += l;
    }
    return t;
  }, f.prototype.patch_splitMax = function(r) {
    for (var n = this.Match_MaxBits, t = 0; t < r.length; t++)
      if (!(r[t].length1 <= n)) {
        var s = r[t];
        r.splice(t--, 1);
        for (var i = s.start1, a = s.start2, l = ""; s.diffs.length !== 0; ) {
          var o = new f.patch_obj(), u = !0;
          for (o.start1 = i - l.length, o.start2 = a - l.length, l !== "" && (o.length1 = o.length2 = l.length, o.diffs.push(new f.Diff(d, l))); s.diffs.length !== 0 && o.length1 < n - this.Patch_Margin; ) {
            var g = s.diffs[0][0], v = s.diffs[0][1];
            g === m ? (o.length2 += v.length, a += v.length, o.diffs.push(s.diffs.shift()), u = !1) : g === _ && o.diffs.length == 1 && o.diffs[0][0] == d && v.length > 2 * n ? (o.length1 += v.length, i += v.length, u = !1, o.diffs.push(new f.Diff(g, v)), s.diffs.shift()) : (v = v.substring(
              0,
              n - o.length1 - this.Patch_Margin
            ), o.length1 += v.length, i += v.length, g === d ? (o.length2 += v.length, a += v.length) : u = !1, o.diffs.push(new f.Diff(g, v)), v == s.diffs[0][1] ? s.diffs.shift() : s.diffs[0][1] = s.diffs[0][1].substring(v.length));
          }
          l = this.diff_text2(o.diffs), l = l.substring(l.length - this.Patch_Margin);
          var p = this.diff_text1(s.diffs).substring(0, this.Patch_Margin);
          p !== "" && (o.length1 += p.length, o.length2 += p.length, o.diffs.length !== 0 && o.diffs[o.diffs.length - 1][0] === d ? o.diffs[o.diffs.length - 1][1] += p : o.diffs.push(new f.Diff(d, p))), u || r.splice(++t, 0, o);
        }
      }
  }, f.prototype.patch_toText = function(r) {
    for (var n = [], t = 0; t < r.length; t++)
      n[t] = r[t];
    return n.join("");
  }, f.prototype.patch_fromText = function(r) {
    var n = [];
    if (!r)
      return n;
    for (var t = r.split("\n"), s = 0, i = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; s < t.length; ) {
      var a = t[s].match(i);
      if (!a)
        throw new Error("Invalid patch string: " + t[s]);
      var l = new f.patch_obj();
      for (n.push(l), l.start1 = parseInt(a[1], 10), a[2] === "" ? (l.start1--, l.length1 = 1) : a[2] == "0" ? l.length1 = 0 : (l.start1--, l.length1 = parseInt(a[2], 10)), l.start2 = parseInt(a[3], 10), a[4] === "" ? (l.start2--, l.length2 = 1) : a[4] == "0" ? l.length2 = 0 : (l.start2--, l.length2 = parseInt(a[4], 10)), s++; s < t.length; ) {
        var o = t[s].charAt(0);
        try {
          var u = decodeURI(t[s].substring(1));
        } catch (g) {
          throw new Error("Illegal escape in patch_fromText: " + u);
        }
        if (o == "-")
          l.diffs.push(new f.Diff(_, u));
        else if (o == "+")
          l.diffs.push(new f.Diff(m, u));
        else if (o == " ")
          l.diffs.push(new f.Diff(d, u));
        else {
          if (o == "@")
            break;
          if (o !== "")
            throw new Error('Invalid patch mode "' + o + '" in: ' + u);
        }
        s++;
      }
    }
    return n;
  }, f.patch_obj = function() {
    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
  }, f.patch_obj.prototype.toString = function() {
    var r, n;
    this.length1 === 0 ? r = this.start1 + ",0" : this.length1 == 1 ? r = this.start1 + 1 : r = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? n = this.start2 + ",0" : this.length2 == 1 ? n = this.start2 + 1 : n = this.start2 + 1 + "," + this.length2;
    for (var t = ["@@ -" + r + " +" + n + " @@\n"], s, i = 0; i < this.diffs.length; i++) {
      switch (this.diffs[i][0]) {
        case m:
          s = "+";
          break;
        case _:
          s = "-";
          break;
        case d:
          s = " ";
          break;
      }
      t[i + 1] = s + encodeURI(this.diffs[i][1]) + "\n";
    }
    return t.join("").replace(/%20/g, " ");
  }, y.exports = f, y.exports.diff_match_patch = f, y.exports.DIFF_DELETE = _, y.exports.DIFF_INSERT = m, y.exports.DIFF_EQUAL = d;
})(diffMatchPatch);
var diffMatchPatchExports = diffMatchPatch.exports;
class Util {
  constructor() {
    /**
     * diff-match-patch 实例
     *
     * @memberof Util
     */
    R(this, "dmp");
    /**
     * 比对标签的集合
     *
     * @memberof Util
     */
    R(this, "tagMap", {});
    /**
     * unicode初始值
     *
     * @memberof Util
     */
    R(this, "unicodeRangeStart", 57344);
    /**
     * 标签集合的长度
     *
     * @memberof Util
     */
    R(this, "mapLength", 0);
    this.init();
  }
  init() {
    this.dmp = new diffMatchPatchExports.diff_match_patch();
  }
  /**
   * 字符串比对方法
   *
   * @param {string} oldValue 旧值
   * @param {string} newValue 新值
   * @returns {string} 比对结果字符串
   * @memberof Util
   */
  doDiff(f, _) {
    const m = this.convertHtmlToDiffString(f), d = this.convertHtmlToDiffString(_), r = this.dmp.diff_main(m, d);
    this.dmp.diff_cleanupSemantic(r);
    let n = "";
    for (let t = 0; t < r.length; t++)
      r[t][1] = this.insertTagsForOperation(r[t][1], r[t][0]), n += this.convertDiffBackToHtml(r[t][1]);
    return n;
  }
  /**
   * 将 HTML 字符串转换为可比较的字符串
   *
   * @param {string} htmlString 输入的 HTML 字符串
   * @returns {string} 转换后的可比较字符串
   * @memberof Util
   */
  convertHtmlToDiffString(f) {
    let _ = "";
    if (f == null || f.length === 0)
      return _;
    let m = 0;
    for (; m < f.length; ) {
      const d = f.indexOf("<", m);
      if (d < 0) {
        _ += f.substr(m);
        break;
      } else {
        const r = f.indexOf(">", d);
        if (r < 0) {
          _ += f.substr(m, d - m);
          break;
        }
        const n = f.substr(d, r + 1 - d);
        let t = this.tagMap[n];
        t || (t = String.fromCharCode(
          this.mapLength + this.unicodeRangeStart
        ), this.tagMap[n] = t, this.tagMap[t] = n, this.mapLength++), _ += f.substr(m, d - m), _ += t, m = r + 1;
      }
    }
    return _;
  }
  /**
   * 插入标签操作符
   *
   * @param {string} diffableString
   * @param {number} [operation=0 | 1 | -1]
   * @return {*}
   * @memberof Util
   */
  insertTagsForOperation(f, _ = -1) {
    let m = "";
    const d = "</span>";
    if (_ === 1)
      m = "<span class='add-text'>";
    else if (_ === -1)
      m = "<span class='remove-text'>";
    else
      return f;
    let r = -1;
    do
      r++;
    while (f.charCodeAt(r) >= this.unicodeRangeStart);
    if (r >= f.length)
      return "".concat(m).concat(f).concat(d);
    let n = "", t = !1;
    for (let s = 0; s < f.length; s++) {
      const i = f[s];
      this.tagMap[i] ? (t && (n += d, t = !1), n += i) : (t || (n += m, t = !0), n += i);
    }
    return t && (n += d), n;
  }
  /**
   * 将可比较的字符串转换回 HTML 字符串
   *
   * @param {string} diffString 可比较的字符串
   * @returns {string} 转换后的 HTML 字符串
   * @memberof Util
   */
  convertDiffBackToHtml(f) {
    let _ = "";
    for (let m = 0; m < f.length; m++) {
      const d = f.charCodeAt(m), r = this.tagMap[f[m]];
      if (d < this.unicodeRangeStart) {
        _ += f[m];
        continue;
      } else
        r === void 0 ? _ += f[m] : _ += r;
    }
    return _;
  }
}
const stepContrast = "", StepContrast = /* @__PURE__ */ defineComponent({
  name: "StepContrast",
  props: {
    item: {
      type: Object,
      required: !0
    },
    modal: {
      type: Object
    }
  },
  setup(y) {
    const f = useNamespace("contrast-modal"), _ = new Util(), m = computed(() => {
      let o = y.item.oldValue;
      return y.item.name === "STEPS" && o && (o = JSON.parse(o)), o;
    }), d = computed(() => {
      let o = y.item.newValue;
      return y.item.name === "STEPS" && o && (o = JSON.parse(o)), o;
    }), r = computed(() => {
      const o = [];
      let u = 0, g = 0;
      return isArray(m.value) && m.value.forEach((v, p) => {
        v.is_group || !p || !v.group_id ? (u++, g = 0, o.push("".concat(u))) : (g++, o.push("".concat(u, ".").concat(g)));
      }), o;
    }), n = computed(() => {
      const o = [];
      let u = 0, g = 0;
      return isArray(d.value) && d.value.forEach((v, p) => {
        v.is_group || !p || !v.group_id ? (u++, g = 0, o.push("".concat(u))) : (g++, o.push("".concat(u, ".").concat(g)));
      }), o;
    }), t = () => _.doDiff(m.value || "", d.value || ""), s = (o) => (o === "oldValue" ? m.value : d.value).map((g, v) => createVNode("tr", null, [createVNode("td", {
      class: "number-column"
    }, [o === "oldValue" ? r.value[v] : n.value[v]]), createVNode("td", {
      class: "description-column",
      colspan: g.is_group ? 2 : 1
    }, [g.is_group ? g.name : g.description]), !g.is_group && createVNode("td", {
      class: "expected-column"
    }, [g.expected_value])])), i = (o) => createVNode("table", {
      class: "steps-table"
    }, [createVNode("tr", {
      class: "table-header"
    }, [createVNode("td", {
      class: "number-column"
    }, [createTextVNode("#")]), createVNode("td", {
      class: "description-column"
    }, [createTextVNode("步骤描述")]), createVNode("td", {
      class: "expected-column"
    }, [createTextVNode("预期结果")])]), s(o)]), a = (o) => createVNode("div", {
      class: "html",
      innerHTML: o === "oldValue" ? m.value : t()
    }, null);
    return {
      ns: f,
      renderContainer: (o) => createVNode("div", {
        class: f.e("container")
      }, [y.item.name === "STEPS" ? i(o) : a(o)])
    };
  },
  render() {
    return createVNode("div", {
      class: [this.ns.b(), this.ns.e("".concat(this.item.name.toLowerCase()))]
    }, [createVNode("div", {
      class: this.ns.e("modal-title")
    }, [createTextVNode("变更对比")]), createVNode("div", {
      class: this.ns.e("modal-content")
    }, [createVNode("div", {
      class: this.ns.m("change-content")
    }, [createVNode("div", {
      class: "before-change"
    }, [createVNode("span", null, [createTextVNode("变更前")])]), this.renderContainer("oldValue")]), createVNode("div", {
      class: this.ns.m("change-content")
    }, [createVNode("div", {
      class: "after-change"
    }, [createVNode("span", null, [createTextVNode("变更后")]), this.item.name !== "STEPS" && createVNode("span", {
      class: "inserted"
    }, [createTextVNode("新增 "), createVNode("span", {
      class: "add state"
    }, null), createTextVNode("删除 "), createVNode("span", {
      class: "remove state"
    }, null)])]), this.renderContainer("newValue")])])]);
  }
});
class RawActivityEditorController extends EditorController {
  constructor() {
    super(...arguments);
    /**
     * 模态容器
     *
     * @type {(IOverlayContainer | null)}
     * @memberof RawActivityEditorController
     */
    R(this, "modal", null);
  }
  /**
   * 打开对照模态
   *
   * @param {{ name: string, newValue: string, oldValue: string }} item
   * @return {*}
   * @memberof RawActivityEditorController
   */
  async openContrastModal(_) {
    return this.modal = ibiz.overlay.createModal(
      (d) => h(StepContrast, {
        item: _,
        modal: d
      }),
      void 0,
      { width: "90%", height: "90%" }
    ), await this.modal.present(), (await this.modal.onWillDismiss()).data || [];
  }
}
class RawActivityEditorProvider {
  constructor() {
    R(this, "formEditor", "RawActivity");
    R(this, "gridEditor", "RawActivity");
  }
  async createController(f, _) {
    const m = new RawActivityEditorController(f, _);
    return await m.init(), m;
  }
}
const IBizRawActivity = withInstall(RawActivity, (y) => {
  y.component(RawActivity.name, RawActivity), registerEditorProvider(
    "EDITOR_CUSTOMSTYLE_RAW_ACTIVITY",
    () => new RawActivityEditorProvider()
  );
}), index = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(y) {
    y.use(IBizRawActivity);
  }
};
export {
  IBizRawActivity,
  index as default
};
