import './style.css';
var b = Object.defineProperty;
var T = (e, i, s) => i in e ? b(e, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[i] = s;
var f = (e, i, s) => (T(e, typeof i != "symbol" ? i + "" : i, s), s);
import { CalendarController as I, registerControlProvider as L } from "@ibiz-template/runtime";
import { useControlController as S, useNamespace as v, withInstall as w } from "@ibiz-template/vue3-util";
import { defineComponent as g, ref as x, watch as k, createVNode as l, resolveComponent as y, isVNode as P, createTextVNode as M } from "vue";
import D from "dayjs";
class j extends I {
  constructor() {
    super(...arguments);
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof CalendarController
     */
    f(this, "tempMinorSortDir", "asc");
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
    const o = s.isInitialLoad === !0, { context: a } = this.handlerAbilityParams(s), d = await this.getFetchParams(s == null ? void 0 : s.viewParam);
    await this.startLoading();
    let t;
    try {
      t = await this.service.search(a, d);
    } finally {
      await this.endLoading();
    }
    return await this.afterLoad(s, t), this.state.isLoaded = !0, this.state.items = t, await this.evt.emit("onLoadSuccess", {
      isInitialLoad: o
    }), t;
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
    const { curPage: o, size: a, sortQuery: d, noSort: t } = this.state, n = {
      ...this.params
    };
    if (!t && d && (n.sort = d), n.sort || (n.sort = "update_time,".concat(this.tempMinorSortDir)), await this._evt.emit("onBeforeLoad", void 0), Object.assign(n, {
      ...this.state.searchParams
    }), a && (n.page = o - 1, n.size = a), s && Object.assign(n, s), this.model.calendarStyle !== "TIMELINE") {
      const r = this.getCurSelectDate(n);
      Object.assign(n, r);
    }
    return n;
  }
  /**
   * 设置排序
   * 无参数时设置的是默认排序。
   *
   * @author lxm
   * @date 2022-09-28 13:09:44
   * @param {string} key 排序字段
   * @param {string} order 排序顺序
   */
  setSort(s, o) {
    super.setSort(s, o);
    const { minorSortDir: a } = this.getSortModel();
    a && (this.tempMinorSortDir = a == null ? void 0 : a.toLowerCase());
  }
}
function N(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !P(e);
}
const C = /* @__PURE__ */ g({
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
    const e = S((...t) => new j(...t)), i = v("transition-time-line"), s = x(), o = (t) => {
      s.value && s.value.selectDate(t);
    };
    return k(() => e.state.selectedDate, (t, n) => {
      const r = D(t).format("YYYY-MM"), c = D(n).format("YYYY-MM");
      r !== c && e.load();
    }), {
      c: e,
      ns: i,
      calendarRef: s,
      selectDate: o,
      calcItemStyle: (t) => ({
        color: t.color,
        backgroundColor: t.bkColor
      }),
      calcCurrent: () => {
        switch (e.tempMinorSortDir) {
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
    const i = (t, n) => {
      const {
        context: r,
        params: c
      } = this.c, u = this.c.state.selectedData.findIndex((m) => m.deData.srfkey === t.deData.srfkey), h = [this.ns.b("item"), this.ns.is("active", u !== -1)], p = this.calcItemStyle(t);
      return l(y("iBizControlShell"), {
        class: h,
        data: t.deData,
        modelData: n,
        context: r,
        params: c,
        style: p,
        onClick: (m) => (m.stopPropagation(), this.c.onRowClick(t)),
        onDblclick: (m) => (m.stopPropagation(), this.c.onDbRowClick(t))
      }, null);
    }, s = (t) => {
      const n = this.c.state.selectedData.findIndex((u) => u.deData.srfkey === t.deData.srfkey), r = [this.ns.b("item"), this.ns.is("active", n !== -1)], c = this.calcItemStyle(t);
      return l("div", {
        class: r,
        key: t.deData.srfkey,
        style: c,
        onClick: () => this.c.onRowClick(t),
        onDblclick: () => this.c.onDbRowClick(t)
      }, [t.text]);
    }, o = () => {
      const {
        isLoaded: t
      } = this.c.state;
      return t && l(y("iBizNoData"), {
        text: this.c.model.emptyText,
        emptyTextLanguageRes: this.c.model.emptyTextLanguageRes
      }, null);
    }, a = () => l("div", {
      class: this.ns.b("timeline-content")
    }, [this.c.state.items.length > 0 ? this.c.state.items.map((t, n) => {
      var h;
      const r = (h = this.c.model.sysCalendarItems) == null ? void 0 : h.find((p) => t.itemType === p.itemType);
      let c;
      const u = this.calcCurrent();
      return n === u && (c = l("div", {
        class: this.ns.be("timeline-content", "current")
      }, [M("当前")])), r != null && r.layoutPanel ? l("div", {
        class: [this.ns.be("timeline-content", "item-box"), n === u ? "is-current" : ""]
      }, [c, i(t, r.layoutPanel)]) : s(t);
    }) : o()]), d = () => l("div", {
      class: this.ns.b()
    }, [a()]);
    return l(y("iBizControlBase"), {
      controller: this.c
    }, N(e = d()) ? e : {
      default: () => [e]
    });
  }
});
class O {
  constructor() {
    f(this, "component", "IBizTransitionTimeLine");
  }
}
const B = w(
  C,
  (e) => {
    e.component(C.name, C), L(
      "CUSTOM_TRANSITION_TIME_LINE",
      () => new O()
    );
  }
), A = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(B);
  }
};
export {
  B as IBizTransitionTimeLine,
  A as default
};
