import './style.css';
var D = Object.defineProperty;
var T = (e, s, n) => s in e ? D(e, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[s] = n;
var C = (e, s, n) => (T(e, typeof s != "symbol" ? s + "" : s, n), n);
import { CalendarController as w, registerControlProvider as I } from "@ibiz-template/runtime";
import { useControlController as P, useNamespace as L, withInstall as S } from "@ibiz-template/vue3-util";
import { defineComponent as v, ref as x, watch as g, createVNode as l, resolveComponent as p, isVNode as k, createTextVNode as O } from "vue";
import b from "dayjs";
class j extends w {
  /**
   * 初始化状态
   *
   * @protected
   * @memberof NetDiskController
   */
  initState() {
    super.initState(), this.state.sortField = "update_time", this.state.sortOrder = "asc", this.state.isShowCurrent = !0;
  }
  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    super.handleControlParams(), this.controlParams.isshowcurrent && (this.state.isShowCurrent = this.controlParams.isshowcurrent === "true"), this.controlParams.sortfield && (this.state.sortField = this.controlParams.sortfield), this.controlParams.sortorder && (this.state.sortOrder = this.controlParams.sortorder);
  }
  /**
   * 日历加载
   *
   * @author ljx
   * @date 2024-02-19 01:08:24
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[][]>}
   * @memberof CalendarController
   */
  async load(s = {}) {
    const n = s.isInitialLoad === !0, { context: o } = this.handlerAbilityParams(s), d = await this.getFetchParams(s == null ? void 0 : s.viewParam);
    await this.startLoading();
    let a;
    try {
      a = await this.service.search(o, d);
    } finally {
      await this.endLoading();
    }
    return await this.afterLoad(s, a), this.state.isLoaded = !0, this.state.items = a, await this.evt.emit("onLoadSuccess", {
      isInitialLoad: n
    }), a;
  }
  /**
   * 获取请求参数
   *
   * @author zk
   * @date 2023-08-09 11:08:35
   * @param {IParams} [extraParams={}]
   * @return {*}  {Promise<IParams>}
   * @memberof CalendarController
   */
  async getFetchParams(s = {}) {
    const { curPage: n, size: o, sortQuery: d, noSort: a } = this.state, t = {
      ...this.params
    };
    if (!a && d && (t.sort = d), t.sort || (t.sort = "".concat(this.state.sortField, ",").concat(this.state.sortOrder)), await this._evt.emit("onBeforeLoad", void 0), Object.assign(t, {
      ...this.state.searchParams
    }), o && (t.page = n - 1, t.size = o), s && Object.assign(t, s), this.model.calendarStyle !== "TIMELINE") {
      const r = this.getCurSelectDate(t);
      Object.assign(t, r);
    }
    return t;
  }
}
function N(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !k(e);
}
const y = /* @__PURE__ */ v({
  name: "IBizTransitionTimeLine",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    context: {
      type: Object,
      required: !0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    provider: {
      type: Object
    },
    mdctrlActiveMode: {
      type: Number,
      default: void 0
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const e = P((...t) => new j(...t)), s = L("transition-time-line"), n = x(), o = (t) => {
      n.value && n.value.selectDate(t);
    };
    return g(() => e.state.selectedDate, (t, r) => {
      const i = b(t).format("YYYY-MM"), c = b(r).format("YYYY-MM");
      i !== c && e.load();
    }), {
      c: e,
      ns: s,
      calendarRef: n,
      selectDate: o,
      calcItemStyle: (t) => ({
        color: t.color,
        backgroundColor: t.bkColor
      }),
      calcCurrent: () => {
        switch (e.state.sortOrder) {
          case "asc":
            return e.state.items.length - 1;
          default:
            return 0;
        }
      }
    };
  },
  render() {
    let e;
    const s = (t, r) => {
      const {
        context: i,
        params: c
      } = this.c, u = this.c.state.selectedData.findIndex((h) => h.deData.srfkey === t.deData.srfkey), m = [this.ns.b("item"), this.ns.is("active", u !== -1)], f = this.calcItemStyle(t);
      return l(p("iBizControlShell"), {
        class: m,
        data: t.deData,
        modelData: r,
        context: i,
        params: c,
        style: f,
        onClick: (h) => (h.stopPropagation(), this.c.onRowClick(t)),
        onDblclick: (h) => (h.stopPropagation(), this.c.onDbRowClick(t))
      }, null);
    }, n = (t) => {
      const r = this.c.state.selectedData.findIndex((u) => u.deData.srfkey === t.deData.srfkey), i = [this.ns.b("item"), this.ns.is("active", r !== -1)], c = this.calcItemStyle(t);
      return l("div", {
        class: i,
        key: t.deData.srfkey,
        style: c,
        onClick: () => this.c.onRowClick(t),
        onDblclick: () => this.c.onDbRowClick(t)
      }, [t.text]);
    }, o = () => {
      const {
        isLoaded: t
      } = this.c.state;
      return t && l(p("iBizNoData"), {
        text: this.c.model.emptyText,
        emptyTextLanguageRes: this.c.model.emptyTextLanguageRes
      }, null);
    }, d = () => l("div", {
      class: [this.ns.b("timeline-content"), this.ns.is("not-show-current", !this.c.state.isShowCurrent)]
    }, [this.c.state.items.length > 0 ? this.c.state.items.map((t, r) => {
      var m;
      const i = (m = this.c.model.sysCalendarItems) == null ? void 0 : m.find((f) => t.itemType === f.itemType);
      let c;
      const u = this.calcCurrent();
      return r === u && (c = l("div", {
        class: this.ns.be("timeline-content", "current")
      }, [O("当前")])), i != null && i.layoutPanel ? l("div", {
        class: [this.ns.be("timeline-content", "item-box"), r === u ? "is-current" : ""]
      }, [c, s(t, i.layoutPanel)]) : n(t);
    }) : o()]), a = () => l("div", {
      class: this.ns.b()
    }, [d()]);
    return l(p("iBizControlBase"), {
      controller: this.c
    }, N(e = a()) ? e : {
      default: () => [e]
    });
  }
});
class B {
  constructor() {
    C(this, "component", "IBizTransitionTimeLine");
  }
}
const z = S(
  y,
  (e) => {
    e.component(y.name, y), I(
      "CUSTOM_TRANSITION_TIME_LINE",
      () => new B()
    );
  }
), E = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(z);
  }
};
export {
  z as IBizTransitionTimeLine,
  E as default
};
