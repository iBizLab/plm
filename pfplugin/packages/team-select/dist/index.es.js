import './style.css';
var _e = Object.defineProperty;
var Be = (l, d, r) => d in l ? _e(l, d, { enumerable: !0, configurable: !0, writable: !0, value: r }) : l[d] = r;
var n = (l, d, r) => (Be(l, typeof d != "symbol" ? d + "" : d, r), r);
import { PluginStaticResource as He, EditorController as We, getDeACMode as Ye, registerEditorProvider as Ze } from "@ibiz-template/runtime";
import { defineComponent as oe, ref as p, onMounted as ne, watch as ce, createVNode as a, computed as Ke, onBeforeMount as Xe, nextTick as qe, onUnmounted as Je, resolveComponent as S, isVNode as Ge, createTextVNode as $ } from "vue";
import { useNamespace as de, getDataPickerProps as Qe, getEditorEmits as et, useClickOutside as tt } from "@ibiz-template/vue3-util";
import { RuntimeModelError as re } from "@ibiz-template/core";
import { mergeDeepLeft as le } from "ramda";
import { notNilEmpty as j } from "qx-util";
const at = /* @__PURE__ */ oe({
  name: "VirtualList",
  props: {
    items: {
      // 数据源
      type: Array,
      default: () => []
    },
    itemHeight: {
      // 每行高度
      type: Number,
      default: 36
    },
    showNum: {
      // 可视数量
      type: Number,
      default: 20
    }
  },
  emits: ["scrollEvent"],
  setup(l, {
    emit: d
  }) {
    const r = de("team-select-virtual-list"), t = p(36), f = p(), o = p([]), u = p(0), m = p(0), v = p(0), b = p(0), M = () => {
      m.value = Math.floor(b.value / l.itemHeight), v.value = m.value + l.showNum, o.value = l.items.slice(m.value, v.value);
      const h = b.value - b.value % l.itemHeight;
      u.value = h;
    }, E = () => {
      b.value = f.value.scrollTop, M(), P(t.value, b.value);
    }, P = (h, w) => {
      d("scrollEvent", h, w);
    };
    return ne(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), ce(() => l.items, () => {
      t.value = l.itemHeight * l.items.length, M();
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: r,
      contentHeight: t,
      showList: o,
      contentBox: f,
      top: u,
      onScroll: E
    };
  },
  render() {
    return a("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [a("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [a("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((l, d) => a("div", {
      key: d,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...l,
      // eslint-disable-next-line object-shorthand
      index: d
    }) : l.name]))])])]);
  }
}), _ = new He(import.meta.url);
function st(l) {
  return typeof l == "function" || Object.prototype.toString.call(l) === "[object Object]" && !Ge(l);
}
const ie = /* @__PURE__ */ oe({
  name: "TeamSelect",
  props: Qe(),
  emits: et(),
  setup(l, {
    emit: d
  }) {
    const r = de("team-select"), t = l.controller, f = [{
      name: "成员",
      label: "member"
    }, {
      name: "部门",
      label: "department"
    }, {
      name: "团队",
      label: "team"
    }], o = p({
      member: !1,
      department: !1,
      team: !1
    }), u = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "azvnormal/user-bold",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M8 .828a4.172 4.172 0 0 1 2.548 7.476A6.696 6.696 0 0 1 14.7 14.5a.7.7 0 0 1-1.4 0 5.3 5.3 0 0 0-10.595-.222L2.7 14.5a.7.7 0 0 1-1.4 0l.006-.279a6.7 6.7 0 0 1 4.146-5.92A4.172 4.172 0 0 1 8 .828zm0 1.344a2.828 2.828 0 0 0-.326 5.637 6.797 6.797 0 0 1 .651-.002A2.828 2.828 0 0 0 8 2.172z",
      id: "azv形状结合"
    }, null)])]), m = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "aqo1.Base基础/1.icon图标/2.normal/部门",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z",
      id: "aqo形状结合"
    }, null)])]), v = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "azznormal/user-group",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M8.2 8.85a5.602 5.602 0 0 1 3.399 5.04.6.6 0 1 1-1.19.11H10.4a4.4 4.4 0 0 0-8.8-.06l.003.06a.6.6 0 0 1-1.2 0H.4c0-2.311 1.4-4.296 3.4-5.15a3.6 3.6 0 1 1 4.402 0zM6 8.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zm4.5 1.2V8.4a1.9 1.9 0 0 0 0-3.8V3.4a3.1 3.1 0 0 1 2.048 5.428A5.104 5.104 0 0 1 15.576 13h-.016a.6.6 0 1 1-1.198-.048A3.9 3.9 0 0 0 10.5 9.6zM6.632 13H5.424h1.208z",
      id: "azz形状结合"
    }, null)])]), b = (e) => {
      if (e === "member")
        return u();
      if (e === "department")
        return m();
      if (e === "team")
        return v();
    }, M = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "abbnavigation/angle-right",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
      id: "abb形状结合",
      transform: "rotate(-90 7.978 8.252)"
    }, null)])]), E = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "azznormal/user-group",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M8.2 8.85a5.602 5.602 0 0 1 3.399 5.04.6.6 0 1 1-1.19.11H10.4a4.4 4.4 0 0 0-8.8-.06l.003.06a.6.6 0 0 1-1.2 0H.4c0-2.311 1.4-4.296 3.4-5.15a3.6 3.6 0 1 1 4.402 0zM6 8.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zm4.5 1.2V8.4a1.9 1.9 0 0 0 0-3.8V3.4a3.1 3.1 0 0 1 2.048 5.428A5.104 5.104 0 0 1 15.576 13h-.016a.6.6 0 1 1-1.198-.048A3.9 3.9 0 0 0 10.5 9.6zM6.632 13H5.424h1.208z",
      id: "azz形状结合"
    }, null)])]), P = () => a("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [a("g", {
      id: "agwtips/close-circle-bold-fill",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [a("path", {
      d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm6.296.064l-2.298 2.298 1.768 1.768 2.298-2.298 2.298 2.298 1.768-1.768-2.298-2.298 2.298-2.298-1.768-1.768-2.298 2.298-2.298-2.298-1.768 1.768 2.298 2.298z",
      id: "agw形状结合"
    }, null)])]), h = p("member"), w = p(!1), L = p(!1), ue = p(""), T = p([]), F = p([]), D = p([]), O = p(/* @__PURE__ */ new Map()), C = p(/* @__PURE__ */ new Map()), me = p(), y = p(), X = p(!1), he = p(), k = p(""), B = p([]), H = p([]), W = p(), I = p(null);
    let z;
    const q = p([]), pe = Ke(() => !!(l.controlParams && l.controlParams.editmode === "hover" && !l.readonly)), ve = () => {
      const e = document.documentElement;
      return e ? getComputedStyle(e).getPropertyValue("--ibiz-color-primary") : null;
    }, fe = (e) => /[\u4E00-\u9FA5]/.test(e), ge = (e) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(e), J = (e) => {
      if (!e)
        return "";
      let s = 0;
      for (let R = 0; R < e.length; R++)
        if (fe(e))
          s = e.charCodeAt(R) + ((s << 5) - s), s = s & s;
        else {
          const je = e.charCodeAt(R);
          s += je.toString(16);
        }
      const i = String(s).substring(0, 6);
      let c = parseInt(i.substring(0, 2), 16), g = parseInt(i.substring(2, 4), 16), A = parseInt(i.substring(4, 6), 16);
      c < 0 && (c = 10), g < 0 && (g = 10), A < 0 && (A = 10);
      const x = "#".concat(c.toString(16).padStart(2, "0")).concat(g.toString(16).padStart(2, "0")).concat(A.toString(16).padStart(2, "0"));
      return x === "#FFFFFF" && ve() || x;
    }, be = (e) => {
      if (e && e.toString().length < 2)
        return e;
      if (e && e.toString().length >= 2) {
        if (ge(e)) {
          const g = e.split("").find((x) => /[a-zA-Z]/.test(x)) || "", A = e.split("").find((x) => /[\u4E00-\u9FA5]/.test(x)) || "";
          return "".concat(g).concat(A).toLowerCase();
        }
        return /[a-zA-Z]/.test(e) ? e.split("").filter((g) => /[a-zA-Z]/.test(g)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((g) => /[\u4E00-\u9FA5]/.test(g)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
      }
    }, we = (e) => {
      var s;
      return ((s = I.value) == null ? void 0 : s.id) === e ? a("div", {
        class: r.bem("select-modal", "personel-list", "icon")
      }, [a("i", {
        class: "fa fa-check",
        "aria-hidden": "true"
      }, null)]) : null;
    }, Me = (e) => {
      console.log("头像加载失败"), q.value.push(e);
    }, Ee = (e) => {
      if (!e)
        return null;
      const s = JSON.parse(e);
      if (s.length === 0)
        return null;
      const {
        downloadUrl: i
      } = ibiz.util.file.calcFileUpDownUrl(t.context, t.params, l.data, t.editorParams), c = i.replace("%fileId%", s[0].id);
      return a("img", {
        class: r.bem("select-modal", "personel-list", "avatar"),
        src: c,
        onError: () => Me(e),
        alt: ""
      }, null);
    }, G = (e, s) => t.operatorMap && t.operatorMap.get(e) && t.operatorMap.get(e).data.iconurl && !q.value.includes(t.operatorMap.get(e).data.iconurl) ? Ee(t.operatorMap.get(e).data.iconurl) : be(s), Y = async (e, s, i = !1) => {
      if (e.preventDefault(), e.stopPropagation(), console.log("选中数据", s), o.value.team = !1, o.value.department = !1, o.value.member = !1, i) {
        const c = C.value.get(s.id);
        c.value = !0, d("change", s.id, t.valueItem), d("change", s.name), t.teamValueItem && d("change", 30, t.teamValueItem);
      } else
        Q(), h.value === "member" || h.value === "team" ? d("change", s[t.userFilterMap.id], t.valueItem) : d("change", s[t.deptFilterMap.id], t.valueItem), h.value === "member" || h.value === "team" ? d("change", s[t.userFilterMap.name]) : d("change", s[t.deptFilterMap.name]), t.teamValueItem && d("change", 20, t.teamValueItem);
      k.value = "", y.value.handleClose();
    };
    Xe(async () => {
      await se();
      const e = K(l.data[t.valueItem]);
      e === "team" ? I.value = {
        dataType: "team",
        name: l.value
      } : e === "member" && (I.value = {
        name: l.value,
        [t.userFilterMap.id]: l.data[t.valueItem],
        [t.deptFilterMap.id]: l.data[t.valueItem]
      });
    });
    const Q = () => {
      Array.from(C.value.keys()).forEach((s) => {
        const i = C.value.get(s);
        i && (i.value = !1);
      });
    }, ee = (e = !1) => {
      k.value = "", o.value.team = !1, o.value.department = !1, o.value.member = !1, Q(), d("change", null, t.valueItem), d("change", null);
    }, U = (e, s = !0, i = !0) => {
      const c = h.value === "member" || h.value === "team" ? e[t.userFilterMap.name] || e.name : e[t.deptFilterMap.name] || e.name, g = h.value === "member" || h.value === "team" ? e[t.userFilterMap.id] : e[t.deptFilterMap.id];
      return a("div", {
        class: [
          r.bem("select-modal", "personel-list", "item"),
          i ? "isShowPadding" : ""
          // ns.is('selected', selectedPersonnel.value?.id === userid),
        ],
        onClick: (A) => Y(A, e)
      }, [a("div", {
        class: r.bem("select-modal", "personel-list", "text")
      }, [a("div", {
        class: r.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(J(c))
      }, [G(g, c)]), a("div", {
        class: r.bem("select-modal", "personel-list", "text-label")
      }, [c]), s && g === t.context.srfuserid ? a("div", {
        class: r.bem("select-modal", "personel-list", "myself")
      }, [$("我自己")]) : null]), s && we(g)]);
    }, ye = (e) => {
      const s = O.value.get(e.id);
      return a("div", {
        class: [
          r.bem("select-modal", "personel-list", "item-team")
          // ns.is('selected', refValue.value === userid),
        ],
        onClick: (i) => Y(i, e, !0)
      }, [a("img", {
        src: "".concat(_.dir("assets/images/svg/user-group-avatar.svg")),
        style: "margin-right:6px",
        alt: ""
      }, null), e.name, s && " · ", s && s.length]);
    }, Ae = (e, s) => {
      const {
        context: i,
        params: c
      } = t;
      return a(S("iBizControlShell"), {
        class: r.b("panel-item"),
        data: e,
        modelData: s,
        context: i,
        params: c
      }, null);
    }, Ie = (e, s) => {
      const i = p();
      return a(S("el-popover"), {
        ref: i,
        target: "hover",
        placement: "right",
        offset: 24,
        width: "auto"
      }, {
        reference: () => U(e),
        default: () => Ae(e, s)
      });
    }, te = (e) => {
      var c;
      const s = e, i = (c = t.deACMode) == null ? void 0 : c.itemLayoutPanel;
      return a(at, {
        items: s,
        itemHeight: 36,
        class: [
          r.be("select-modal", "personel-list"),
          r.be("select-modal", "personel-list-".concat(h.value))
          // ns.is('no-solider-tab', !c.isShowTab && actions.length > 0),
        ]
      }, {
        default: (g) => i ? Ie(g, i) : U(g, !0)
      });
    }, Pe = (e, s) => {
      e.forEach((i) => {
        const c = T.value.findIndex((g) => g[s] === i[s]);
        c > -1 ? T.value.splice(c, 1, i) : T.value.push(i);
      });
    }, Se = async (e = !1) => {
      w.value = !0;
      const s = {};
      s.page = t.page;
      try {
        const i = await t.loadMore(l.data, "member", s);
        i && (T.value.length === 0 ? T.value = i.data : Pe(i.data, t.userFilterMap.id));
      } catch (i) {
        w.value = !1;
      }
      w.value = !1;
    }, Te = async (e = !1) => {
      w.value = !0;
      const s = {};
      s.page = t.deptpage;
      try {
        const i = await t.loadMore(l.data, "department", s);
        i && (F.value.length === 0 ? F.value = i.data : F.value.push(...i.data));
      } catch (i) {
        w.value = !1;
      }
      w.value = !1;
    }, Ce = async (e) => {
      if (e !== "team")
        return;
      w.value = !0;
      const s = {};
      try {
        const i = await t.loadMore(l.data, "team", s);
        i && (D.value = i == null ? void 0 : i.data, D.value.forEach((c) => {
          if (C.value.get(c.id) === void 0) {
            const A = p(!1);
            C.value.set(c.id, A);
          }
        }));
      } catch (i) {
        w.value = !1;
      }
      w.value = !1;
    }, xe = async (e, s) => {
      const i = {}, c = await t.loadTeamMember(l.data, s.id, i);
      O.value.get(s.id) || c && O.value.set(s.id, c.data), y.value.handleOpen();
    }, Fe = (e) => {
      Array.from(C.value.keys()).filter((c) => c !== e).forEach((c) => {
        const g = C.value.get(c);
        g && (g.value = !1);
      });
    }, De = async (e, s) => {
      e.preventDefault(), e.stopPropagation(), C.value.get(s.id).value ? ee(!0) : (await Y(e, s, !0), Fe(s.id)), o.value.team = !1, o.value.department = !1, o.value.member = !1, y.value.handleClose();
    }, Z = async (e) => {
      h.value = e, h.value === "member" && T.value.length === 0 && (t.resetUserState(), await Se()), h.value === "department" && F.value.length === 0 && (t.resetDeptState(), await Te()), await Ce(e);
    }, ae = (e, s) => {
      e.stopPropagation(), L.value = s, y.value.handleOpen();
    }, Oe = () => a("div", {
      class: r.be("select-modal", "deptpersonel"),
      onClick: () => {
        y.value.handleOpen();
      }
    }, [a("div", {
      class: r.bem("select-modal", "deptpersonel", "dept")
    }, [a("div", {
      class: "collpase-icon"
    }, [L.value ? a("i", {
      class: "fa fa-angle-right",
      "aria-hidden": "true",
      onClick: (e) => ae(e, !1)
    }, null) : a("i", {
      class: "fa fa-angle-down",
      "aria-hidden": "true",
      onClick: (e) => ae(e, !0)
    }, null)]), a("img", {
      src: "".concat(_.dir("assets/images/svg/org.svg"))
    }, null), a("span", null, ["".concat(t.context.srfusername, "的团队")]), a("span", null, [$("·")]), a("span", null, [t.depttotal])]), L.value ? null : a("div", {
      class: r.bem("select-modal", "deptpersonel", "dept-person")
    }, [te(F.value)])]), Ue = async (e) => {
      w.value = !0, B.value = [], H.value = [];
      try {
        const s = {};
        Object.assign(s, {
          query: e,
          size: 1e3
        });
        const i = await t.getServiceData("member", l.data, s), c = await t.getServiceData("team", l.data, s);
        i && (i.data.forEach((g) => {
          Object.keys(t.userFilterMap).forEach((A) => {
            g[A] = g[t.userFilterMap[A]];
          });
        }), B.value = i.data, w.value = !1), c && (H.value = c.data);
      } catch (s) {
        w.value = !1;
      }
      y.value.handleOpen();
    }, Ne = (e) => {
      clearTimeout(W.value), W.value = setTimeout(() => {
        e && Ue(e), clearTimeout(W.value);
      }, 300);
    }, Le = () => a(S("el-collapse"), {
      class: r.e("collapse")
    }, {
      default: () => [D.value.length === 0 ? a("div", {
        class: r.e("no-team")
      }, [$("暂无团队")]) : D.value.map((e) => {
        const s = O.value.get(e.id), i = C.value.get(e.id);
        return a(S("el-collapse-item"), {
          class: r.e("collapse-item"),
          name: e.id,
          title: e.caption,
          onClick: (c) => xe(c, e)
        }, {
          default: () => a("div", null, [s && s.length > 0 ? s.map((c) => U(c, !0)) : a("div", {
            class: r.e("noteamItem")
          }, [$("暂无人员")])]),
          title: () => a("div", {
            class: r.e("collapse-item-checkbox-wrapper")
          }, [a(S("el-checkbox"), {
            class: r.e("collapse-item-checkbox"),
            size: "large",
            modelValue: i.value,
            "onUpdate:modelValue": (c) => i.value = c,
            onClick: (c) => De(c, e)
          }, null), a("img", {
            src: "".concat(_.dir("assets/images/svg/user-group-avatar.svg")),
            style: "margin-right:6px",
            alt: ""
          }, null), e.name, s && " · ", s && s.length])
        });
      })]
    }), ke = (e) => e === "department" ? Oe() : e === "member" ? te(T.value) : e === "team" ? Le() : a("div", null, [e]), ze = () => !k.value && I.value ? I.value.dataType === "team" ? a("div", {
      class: r.e("personnel-team")
    }, [a("div", {
      class: r.e("personnel-team-svg")
    }, [E()]), a("div", null, [I.value.name])]) : U(I.value, !1, !1) : null, Ve = (e) => {
      y.value && y.value.$el && (V.value = y.value.$el.clientWidth), X.value = e;
    }, se = async () => {
      l.readonly || l.disabled || (await Z("member"), await Z("department"), await Z("team"), h.value = "member");
    }, Re = (e, s) => {
      e.stopPropagation(), h.value = s.label, o.value[s.label] = !o.value[s.label], ["member", "department", "team"].filter((c) => c !== s.label).forEach((c) => {
        o.value[c] = !1;
      });
    }, N = p(), $e = p(), K = (e) => D.value.findIndex((c) => c.id === e) >= 0 ? "team" : T.value.findIndex((c) => c.id === e) >= 0 ? "member" : "";
    ce(() => l.value, (e) => {
      (e || e === null || e === void 0) && (e ? K(l.data[t.valueItem]) === "team" ? I.value = {
        dataType: "team",
        name: e
      } : I.value = {
        name: e,
        [t.userFilterMap.id]: l.data[t.valueItem],
        [t.deptFilterMap.id]: l.data[t.valueItem]
      } : I.value = null);
    }, {
      immediate: !0
    });
    const V = p(0);
    return ne(() => {
      N.value && (z = tt(N, async (e) => {
        if (N.value && !N.value.contains(e.target)) {
          let s = [];
          e.target && e.target.className && typeof e.target.className == "string" && (s = e.target.className.split(" ")), s.findIndex((c) => c === "ibiz-team-select__popover-item") === -1 && (o.value.team = !1, o.value.department = !1, o.value.member = !1);
        }
      })), V.value = y.value.$el.clientWidth;
    }), qe(() => {
      V.value = y.value.$el.clientWidth;
    }), Je(() => {
      z && z.stop && z.stop();
    }), {
      ns: r,
      c: t,
      curValue: ue,
      items: T,
      dropDownItem: f,
      numberSvg: u,
      departmentSvg: m,
      teamSvg: v,
      renderItemSvg: b,
      rightArrowSvg: M,
      deleteSvg: P,
      renderItemContent: ke,
      showFormDefaultContent: pe,
      searchValue: k,
      handleSearch: Ne,
      romateData: B,
      renderPersonItem: U,
      selectedPersonnel: I,
      searchRef: me,
      visibleChange: Ve,
      dropdownRef: y,
      dropdownClick: se,
      popoverRef: he,
      teamMenberItems: O,
      renderPersonnel: ze,
      renderTeamItem: ye,
      dropDownItemVisible: o,
      dropdownItemClick: Re,
      romateTeamData: H,
      dropdownVisible: X,
      pxx: N,
      dropdownMenu: $e,
      handleFocus: (e) => {
        o.value.team = !1, o.value.department = !1, o.value.member = !1;
      },
      clearSelect: ee,
      readOnlyItem: () => l.value ? K(l.data[t.valueItem]) === "team" ? a("div", {
        class: r.e("personnel-team")
      }, [a("div", {
        class: r.e("personnel-team-svg")
      }, [E()]), a("div", null, [l.value])]) : a("div", {
        class: r.bem("select-modal", "personel-list", "text")
      }, [a("div", {
        class: r.bem("select-modal", "personel-list", "text-img"),
        style: "background-color:".concat(J(l.value))
      }, [G(l.data[t.valueItem], l.value)]), a("div", {
        class: r.bem("select-modal", "personel-list", "text-label")
      }, [l.value])]) : "未设置",
      width: V
    };
  },
  render() {
    return a("div", {
      class: [this.ns.b()]
    }, [this.$props.readonly || this.$props.disabled ? this.readOnlyItem() : a(S("el-dropdown"), {
      class: [this.ns.e("dropdown")],
      ref: "dropdownRef",
      "popper-class": this.ns.e("popover"),
      onVisibleChange: this.visibleChange,
      trigger: "click",
      "hide-on-click": !0
    }, {
      default: () => a("div", {
        class: [this.ns.e("dropdown-input")]
      }, [a(S("el-input"), {
        class: [this.ns.e("search-input"), this.searchValue || this.selectedPersonnel ? "hasValue" : ""],
        ref: "searchRef",
        modelValue: this.searchValue,
        "onUpdate:modelValue": (l) => this.searchValue = l,
        placeholder: this.selectedPersonnel ? "" : "选择评审人",
        onInput: (l) => this.handleSearch(l),
        onFocus: this.handleFocus
      }, {
        suffix: () => a("div", {
          class: [this.ns.e("dropdown-input-suffix")]
        }, [a("img", {
          class: [this.ns.e("search-arrow"), this.dropdownVisible ? "isopen" : ""],
          src: "".concat(_.dir("assets/images/svg/arrow.svg")),
          alt: ""
        }, null), a("div", {
          class: [this.ns.e("search-delete")],
          onClick: (l) => {
            l.stopPropagation(), this.clearSelect();
          }
        }, [this.deleteSvg()])]),
        prefix: () => a("div", {
          class: [this.ns.e("dropdown-input-prefix"), this.dropdownVisible ? "dark" : ""]
        }, [this.renderPersonnel()])
      })]),
      dropdown: () => {
        let l;
        return this.searchValue ? a(S("el-dropdown-menu"), null, {
          default: () => [this.romateData.length > 0 && this.dropDownItem.map((d) => {
            if (d.label === "member")
              return a("div", {
                class: this.ns.e("popover-item"),
                style: this.width ? "width:".concat(this.width, "px") : "pointer-events: none;"
              }, [a("div", {
                class: this.ns.e("popover-item-center")
              }, [a("div", {
                class: this.ns.e("popover-item-name")
              }, [d.name])])]);
          }), this.romateData.map((d) => a("div", {
            class: this.ns.e("search-romate-item")
          }, [this.renderPersonItem(d, !1, !1)])), this.romateTeamData.length > 0 && this.dropDownItem.map((d) => {
            if (d.label === "team")
              return a("div", {
                class: this.ns.e("popover-item"),
                style: this.width ? "width:".concat(this.width, "px") : "pointer-events: none;"
              }, [a("div", {
                class: this.ns.e("popover-item-center")
              }, [a("div", {
                class: this.ns.e("popover-item-name")
              }, [d.name])])]);
          }), this.romateTeamData.map((d) => a("div", {
            class: this.ns.e("search-romate-item")
          }, [this.renderTeamItem(d)]))]
        }) : a(S("el-dropdown-menu"), null, st(l = this.dropDownItem.map((d) => a(S("el-popover"), {
          trigger: "click",
          placement: "right",
          width: "380",
          "show-after": 100,
          "popper-class": [this.ns.e("popover-content"), d.label],
          ref: "popoverRef",
          "popper-options": {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [110, -10]
                }
              },
              // 设置偏移量
              {
                name: "preventOverflow",
                options: {
                  padding: 5
                }
              }
              // 防止溢出时的设置
            ]
          },
          visible: this.dropDownItemVisible[d.label]
        }, {
          reference: () => a("div", {
            class: this.ns.e("popover-item"),
            style: this.width ? "width:".concat(this.width, "px") : "",
            onClick: (r) => this.dropdownItemClick(r, d),
            ref: "dropdownMenu"
          }, [a("div", {
            class: this.ns.e("popover-item-center")
          }, [a("div", {
            class: this.ns.e("popover-item-left")
          }, [this.renderItemSvg(d.label)]), a("div", {
            class: this.ns.e("popover-item-name")
          }, [d.name])]), a("div", {
            class: this.ns.e("popover-item-right")
          }, [this.rightArrowSvg()])]),
          default: () => a("div", {
            onClick: (r) => {
              this.dropdownRef.handleOpen();
            },
            class: [this.ns.e("popover-item-content"), d.label],
            ref: "pxx"
          }, [this.renderItemContent(d.label)])
        }))) ? l : {
          default: () => [l]
        });
      }
    })]);
  }
});
class rt extends We {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof PersonelSelectController
     */
    n(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 总数
     */
    n(this, "total", 0);
    /**
     * 当前人员数量
     */
    n(this, "currentNumber", -1);
    /**
     * 人员当前页
     */
    n(this, "page", 0);
    /**
     * 部门人员数据页数
     */
    n(this, "deptpage", 0);
    /**
     * 当前部门人员数量
     */
    n(this, "deptcurrentNumber", -1);
    /**
     * 部门人员总数
     */
    n(this, "depttotal", 0);
    /**
     * 每页数量
     */
    n(this, "size", 20);
    /**
     * 是否多选
     */
    n(this, "multiple", !1);
    /**
     * 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去
     */
    n(this, "isAddSymbol", !1);
    /**
     * 多选时拼接的字符串
     */
    n(this, "separator", ",");
    /**
     *选择视图相关参数
     */
    n(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    n(this, "linkView", null);
    /**
     * 人员UI转化
     */
    n(this, "userFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     * 部门人员UI转化
     */
    n(this, "deptFilterMap", {
      id: "id",
      name: "name"
    });
    /**
     * 是否显示人员部门分页
     */
    n(this, "isShowTab", !0);
    /**
     *值项
     */
    n(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    n(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    n(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    n(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    n(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    n(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    n(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    n(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    n(this, "dataItems", []);
    // 对象标识属性
    n(this, "objectIdField", "");
    // 对象名称属性
    n(this, "objectNameField", "");
    // 对象值属性
    n(this, "objectValueField", "");
    // 人员请求地址
    n(this, "userUrl", "");
    // 部门请求地址
    n(this, "deptUrl", "");
    //  团队请求地址
    n(this, "teamUrl", "");
    //  团队成员请求地址
    n(this, "teamMemberUrl", "");
    // 团队值项
    n(this, "teamValueItem", "");
    // 复制人员请求url,这是用来保证当配置的URL中的动态参数变化后可以刷新当前请求状态
    n(this, "copyUserUrl", "");
    // 复制部门人员请求url
    n(this, "copyDeptUrl", "");
    // 复制团队请求url
    n(this, "copyTeamUrl", "");
    // 复制团队成员请求url
    n(this, "copyTeamMemberUrl", "");
    // 人员请求方式
    n(this, "userMethod", "post");
    // 部门人员请求方式
    n(this, "deptMethod", "post");
    // 团队请求方式
    n(this, "teamMethod", "post");
    // 团队人员请求方式
    n(this, "teamMemberMethod", "post");
    /**
     * 上下文替换正则
     *
     */
    n(this, "contextReg", /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 数据替换正则
     *
     */
    n(this, "dataReg", /\$\{data.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 参数替换正则
     *
     */
    n(this, "paramsReg", /\$\{params.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g);
    /**
     * 是否配置了默认显示当前用户
     */
    n(this, "defaultSelCurUser", !1);
    /**
     * 值类型
     */
    n(this, "valueType", "OBJECTS");
    /**
     * 关注类型属性
     *
     */
    n(this, "attentionTypeField", "type");
    /**
     * 自填充映射
     */
    n(this, "selfFillMap", {});
    /**
     * 选中后默认关注值
     *
     */
    n(this, "defaultAttentionValue", "");
    /**
     * 是否显示姓名文字
     */
    n(this, "showNameText", !0);
    /**
     * 是否显示姓名提示
     */
    n(this, "showNameTip", !1);
  }
  async onInit() {
    var t, f, o, u;
    if (super.onInit(), this.initDefaultAttribute(), this.valueItem = ((t = this.model.valueItemName) == null ? void 0 : t.toLowerCase()) || "", this.initParams(), await this.getOperatorUserList(), this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await Ye(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: m, minorSortDir: v } = this.deACMode;
      m && v && (this.sort = "".concat(m.toLowerCase(), ",").concat(v.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (b) => {
          b.id !== "value" && b.id !== "text" && this.dataItems.push(b);
        }
      ));
    }
    const r = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && r.includes(this.model.editorType), this.objectIdField = (f = this.model.objectIdField) == null ? void 0 : f.toLowerCase(), this.objectNameField = (o = this.model.objectNameField) == null ? void 0 : o.toLowerCase(), this.objectValueField = (u = this.model.objectValueField) == null ? void 0 : u.toLowerCase();
  }
  /**
   * 初始化字段默认属性
   */
  initDefaultAttribute() {
    this.model.valueType && (this.valueType = this.model.valueType);
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    var r, t, f, o, u, m, v, b;
    switch (this.model.editorType) {
      case "PICKEREX_NOAC":
      case "PICKEREX_NOAC_LINK":
        this.noAC = !0;
        break;
      case "PICKEREX_NOBUTTON":
        this.noButton = !0;
        break;
      default:
        this.noButton = !1, this.noAC = !1;
    }
    if (this.userUrl = this.editorParams.URL, this.deptUrl = this.editorParams.DEPTURL, this.teamUrl = this.editorParams.TEAMURL, this.teamMemberUrl = this.editorParams.TEAMMEMBERURL, this.userMethod = this.editorParams.USERMETHOD || "post", this.deptMethod = this.editorParams.DEPTMETHOD || "post", this.teamMethod = this.editorParams.TEAMMETHOD || "post", this.teamMemberMethod = this.editorParams.TEAMMEMBERURL || "post", this.teamValueItem = (r = this.editorParams) == null ? void 0 : r.TEAMTYPEFIELD, this.multiple = this.editorParams.MULTIPLE === "true", this.defaultSelCurUser = this.editorParams.DEFAULTSELCURUSER === "true", this.separator = this.editorParams.SEPARATOR || ",", this.isAddSymbol = this.editorParams.ISADDSYMBOL === "true" && this.multiple === !0, this.isShowTab = this.editorParams.ISSHOWTAB !== "false", (t = this.editorParams) != null && t.VALUETYPE && (this.valueType = (f = this.editorParams) == null ? void 0 : f.VALUETYPE), (o = this.editorParams) != null && o.DEFAULTATNVALUE && (this.defaultAttentionValue = (u = this.editorParams) == null ? void 0 : u.DEFAULTATNVALUE), (m = this.editorParams) != null && m.VALUEITEMNAME && (this.valueItem = (v = this.editorParams) == null ? void 0 : v.VALUEITEMNAME), this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "SELFFILLMAP"))
      try {
        const M = JSON.parse((b = this.editorParams) == null ? void 0 : b.SELFFILLMAP);
        Object.assign(this.selfFillMap, M);
      } catch (M) {
        this.selfFillMap = {};
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "USERMAP"))
      try {
        const M = JSON.parse(this.editorParams.USERMAP);
        Object.assign(this.userFilterMap, M);
      } catch (M) {
        this.userFilterMap = {
          id: "id",
          name: "name"
        };
      }
    if (this.editorParams && Object.prototype.hasOwnProperty.call(this.editorParams, "DEPTMAP"))
      try {
        const M = JSON.parse(this.editorParams.DEPTMAP);
        Object.assign(this.deptFilterMap, M);
      } catch (M) {
        this.deptFilterMap = {
          id: "id",
          name: "name"
        };
      }
    this.editorParams.SHOWNAMETEXT && (this.showNameText = this.toBoolean(this.editorParams.SHOWNAMETEXT)), this.editorParams.SHOWNAMETIP && (this.showNameTip = this.toBoolean(this.editorParams.SHOWNAMETIP));
  }
  /**
   * 重置状态
   */
  resetState() {
    this.resetUserState(), this.resetDeptState();
  }
  /**
   * 重置全部人员分类的状态
   */
  resetUserState() {
    this.total = 0, this.currentNumber = -1, this.page = 0, this.copyUserUrl = "";
  }
  /**
   * 重置部门人员分类的状态
   */
  resetDeptState() {
    this.deptpage = 0, this.depttotal = 0, this.deptcurrentNumber = -1, this.copyDeptUrl = "";
  }
  /**
   * 加载更多
   */
  async loadMore(r, t, f = {}) {
    if (t === "member") {
      const o = await this.getServiceData(t, r, f);
      if (o)
        return this.page += 1, this.currentNumber < 0 && (this.currentNumber += 1), this.currentNumber += this.size, this.total = o.total ? Number(o.total) : Number(o.headers["x-total"]), o.data.forEach((u) => {
          Object.keys(this.userFilterMap).forEach((m) => {
            u[m] = u[this.userFilterMap[m]];
          });
        }), o;
    } else if (t === "department" && this.deptcurrentNumber < this.depttotal) {
      const o = await this.getServiceData(t, r, f);
      if (o)
        return this.deptpage += 1, this.deptcurrentNumber < 0 && (this.deptcurrentNumber += 1), this.deptcurrentNumber += this.size, this.depttotal = o.total ? Number(o.total) : Number(o.headers["x-total"]), o.data.forEach((u) => {
          Object.keys(this.deptFilterMap).forEach((m) => {
            u[m] = u[this.deptFilterMap[m]];
          });
        }), o;
    } else if (t === "team")
      return await this.getServiceData(t, r, f);
  }
  async getServiceDataTeamMember(r, t, f) {
    const { context: o, params: u } = this.handlePublicParams(
      t,
      this.context,
      this.params
    ), m = {
      n_owner_type_eq: "GROUP",
      n_owner_id_eq: r
    };
    this.sort && !Object.is(this.sort, "") && Object.assign(m, { sort: this.sort }), Object.assign(m, { size: this.size }), f && Object.assign(m, f);
    const v = le(u, m);
    let b = "";
    const M = this.fill(
      this.teamMemberUrl,
      o,
      { ...u, teamid: r },
      t
    ).replaceAll("//", "/");
    this.copyTeamMemberUrl = M;
    let E = "post";
    const P = {};
    if (b = M, E = this.teamMethod.toLowerCase(), E === "get" ? Object.assign(P, { method: E, params: v }) : Object.assign(P, { method: E, data: v }), b)
      return await ibiz.net.request(b, P);
    throw new re(this.model, "请配置数据接口地址");
  }
  /**
   * 团队成员
   */
  async loadTeamMember(r, t, f = {}) {
    const o = await this.getServiceDataTeamMember(t, r, f);
    if (o)
      return o;
  }
  /**
   * 填充字符串中的数据
   *
   * @author chitanda
   * @date 2021-04-23 20:04:17
   * @static
   * @param {string} str
   * @param {*} [context]
   * @param {*} [data]
   * @return {*}  {string}
   */
  fill(r = "", t, f, o) {
    if (j(r)) {
      if (j(t)) {
        const u = r.match(this.contextReg);
        u == null || u.forEach((m) => {
          const v = m.slice(10, m.length - 1);
          r = r.replace("${context.".concat(v, "}"), t[v] || "");
        });
      }
      if (j(f)) {
        const u = r.match(this.paramsReg);
        u == null || u.forEach((m) => {
          const v = m.slice(9, m.length - 1);
          r = r.replace("${params.".concat(v, "}"), f[v] || "");
        });
      }
      if (j(o)) {
        const u = r.match(this.dataReg);
        u == null || u.forEach((m) => {
          const v = m.slice(7, m.length - 1);
          r = r.replace("${data.".concat(v, "}"), o[v] || "");
        });
      }
    }
    return r;
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} tag 当前分类 user || department
   * @param {IData} data 表单数据
   * @param {string} query 模糊匹配字符串
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PersonelSelectController
   */
  async getServiceData(r, t, f) {
    const { context: o, params: u } = this.handlePublicParams(
      t,
      this.context,
      this.params
    ), m = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(m, { sort: this.sort }), Object.assign(m, { size: this.size }), f && Object.assign(m, f);
    const v = le(u, m);
    let b = "";
    const M = this.fill(this.userUrl, o, u, t).replaceAll(
      "//",
      "/"
    ), E = this.fill(this.deptUrl, o, u, t).replaceAll(
      "//",
      "/"
    ), P = this.fill(this.teamUrl, o, u, t).replaceAll(
      "//",
      "/"
    );
    this.copyUserUrl = M, this.copyDeptUrl = E, this.copyTeamUrl = P;
    let h = "post";
    const w = {};
    if (r === "member" ? (b = M, h = this.userMethod.toLowerCase(), h === "get" ? Object.assign(w, { method: h, params: v }) : Object.assign(w, { method: h, data: v })) : r === "department" ? (b = E, h = this.deptMethod.toLowerCase(), h === "get" ? Object.assign(w, { method: h, params: v }) : Object.assign(w, { method: h, data: v })) : r === "team" && (b = P, h = this.teamMethod.toLowerCase(), h === "get" ? Object.assign(w, { method: h, params: v }) : Object.assign(w, { method: h, data: v })), b)
      return await ibiz.net.request(b, w);
    throw new re(this.model, "请配置数据接口地址");
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const r = await ibiz.hub.getApp(this.context.srfappid);
    let t = [];
    t = await r.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      t.map((f) => [f.value, f])
    );
  }
}
class lt {
  constructor() {
    n(this, "formEditor", "TeamSelect");
    n(this, "gridEditor", "TeamSelect");
  }
  async createController(d, r) {
    const t = new rt(d, r);
    return await t.init(), t;
  }
}
const vt = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(l) {
    l.component(ie.name, ie), Ze(
      "EDITOR_CUSTOMSTYLE_TEAM_SELECT",
      () => new lt()
    );
  }
};
export {
  vt as default
};
