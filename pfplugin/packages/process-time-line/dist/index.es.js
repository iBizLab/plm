import './style.css';
var w = Object.defineProperty;
var P = (s, u, n) => u in s ? w(s, u, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[u] = n;
var y = (s, u, n) => (P(s, typeof u != "symbol" ? u + "" : u, n), n);
import { CalendarController as C, registerControlProvider as D } from "@ibiz-template/runtime";
import { useControlController as I, useNamespace as S, withInstall as T } from "@ibiz-template/vue3-util";
import { defineComponent as N, ref as R, watch as M, onMounted as k, createVNode as h, resolveComponent as v, isVNode as j } from "vue";
import L from "dayjs";
class O extends C {
  constructor() {
    super(...arguments);
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof ProcessTimeLineController
     */
    y(this, "tempMinorSortDir", "asc");
  }
  initState() {
    super.initState(), this.state.renderItems = [], this.state.columnNum = 5;
  }
  /**
   * 日历加载
   *
   * @author ljx
   * @date 2024-02-19 01:08:24
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[][]>}
   * @memberof ProcessTimeLineController
   */
  async load(n = {}) {
    const a = n.isInitialLoad === !0, { context: i } = this.handlerAbilityParams(n), c = await this.getFetchParams(n == null ? void 0 : n.viewParam);
    await this.startLoading();
    let l;
    try {
      l = await this.service.search(i, c);
    } finally {
      await this.endLoading();
    }
    return await this.afterLoad(n, l), this.state.isLoaded = !0, this.state.items = l, this.handleRenderItems(l), await this.evt.emit("onLoadSuccess", {
      isInitialLoad: a
    }), l;
  }
  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    super.handleControlParams(), this.controlParams.columnnum && (this.state.columnNum = Number(this.controlParams.columnnum));
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
  async getFetchParams(n = {}) {
    const { curPage: a, size: i, sortQuery: c, noSort: l } = this.state, e = {
      ...this.params
    };
    if (!l && c && (e.sort = c), e.sort || (e.sort = "update_time,".concat(this.tempMinorSortDir)), await this._evt.emit("onBeforeLoad", void 0), Object.assign(e, {
      ...this.state.searchParams
    }), i && (e.page = a - 1, e.size = i), n && Object.assign(e, n), this.model.calendarStyle !== "TIMELINE") {
      const o = this.getCurSelectDate(e);
      Object.assign(e, o);
    }
    return e;
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
  setSort(n, a) {
    super.setSort(n, a);
    const { minorSortDir: i } = this.getSortModel();
    i && (this.tempMinorSortDir = i == null ? void 0 : i.toLowerCase());
  }
  /**
   * 处理绘制数据
   */
  handleRenderItems(n) {
    const a = [];
    let i = [];
    n.forEach((c, l) => {
      l !== 0 && l % this.state.columnNum === 0 && (a.length !== 0 && a.length % 2 !== 0 && i.reverse(), a.push(i), i = []), i.push(c);
    }), i.length > 0 && (a.length !== 0 && a.length % 2 !== 0 && i.reverse(), a.push(i), i = []), this.state.renderItems = a;
  }
}
function z(s) {
  return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !j(s);
}
const g = /* @__PURE__ */ N({
  name: "IBizProcessTimeLine",
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
    const s = I((...t) => new O(...t)), u = S("process-time-line"), n = R(), a = (t) => {
      n.value && n.value.selectDate(t);
    };
    M(() => s.state.selectedDate, (t, r) => {
      const m = L(t).format("YYYY-MM"), d = L(r).format("YYYY-MM");
      m !== d && s.load();
    });
    const i = (t) => ({
      color: t.color,
      backgroundColor: t.bkColor
    }), c = (t) => (t + 1) % 2 === 0, l = (t, r) => {
      const m = c(t), d = s.state.renderItems[t];
      return (
        // 第一个元素
        !(t === 0 && r === 0 || // 中间元素
        r !== 0 && r !== d.length - 1 || // 最后一行
        t === s.state.renderItems.length - 1 || (r === 0 || r === d.length - 1) && // 偶数行
        (m && r === d.length - 1 || // 奇数行
        !m && r === 0))
      );
    }, e = (t, r) => !(t === 0 && r === 0 || t === s.state.renderItems.length - 1 && c(t) && r === 0), o = (t, r) => {
      const m = s.state.renderItems[t];
      return !(t === s.state.renderItems.length - 1 && (!c(t) && r === m.length - 1 || t === 0 && r === m.length - 1));
    };
    return k(() => {
      n.value && n.value.style.setProperty("--ibiz-process-time-line-item-width", "calc(100% / ".concat(s.state.columnNum, ")"));
    }), {
      c: s,
      ns: u,
      calendarRef: n,
      selectDate: a,
      calcItemStyle: i,
      isEvenRow: c,
      isVerticalLine: l,
      isLeftLine: e,
      isRightLine: o
    };
  },
  render() {
    let s;
    const u = (e, o) => {
      const {
        context: t,
        params: r
      } = this.c, m = this.c.state.selectedData.findIndex((f) => f.deData.srfkey === e.deData.srfkey), d = [this.ns.b("item"), this.ns.is("active", m !== -1)], p = this.calcItemStyle(e);
      return h(v("iBizControlShell"), {
        class: d,
        data: e.deData,
        modelData: o,
        context: t,
        params: r,
        style: p,
        onClick: (f) => (f.stopPropagation(), this.c.onRowClick(e)),
        onDblclick: (f) => (f.stopPropagation(), this.c.onDbRowClick(e))
      }, null);
    }, n = (e) => {
      const o = this.c.state.selectedData.findIndex((m) => m.deData.srfkey === e.deData.srfkey), t = [this.ns.b("item"), this.ns.is("active", o !== -1)], r = this.calcItemStyle(e);
      return h("div", {
        class: t,
        key: e.deData.srfkey,
        style: r
      }, [e.text]);
    }, a = () => {
      const {
        isLoaded: e
      } = this.c.state;
      return e && h(v("iBizNoData"), {
        text: this.c.model.emptyText,
        emptyTextLanguageRes: this.c.model.emptyTextLanguageRes
      }, null);
    }, i = (e, o, t) => {
      var f;
      const r = h("div", {
        class: [this.ns.be("item", "left-line")]
      }, null), m = h("div", {
        class: [this.ns.be("item", "right-line")]
      }, null), d = h("div", {
        class: [this.ns.be("item", "vertical-line")]
      }, null), p = (f = this.c.model.sysCalendarItems) == null ? void 0 : f.find((b) => e.itemType === b.itemType);
      return h("div", {
        class: [this.ns.b("item"), this.ns.is("even-row-item", this.isEvenRow(o))]
      }, [this.isLeftLine(o, t) ? r : "", p != null && p.layoutPanel ? u(e, p.layoutPanel) : n(e), this.isRightLine(o, t) ? m : "", this.isVerticalLine(o, t) ? d : ""]);
    }, c = () => h("div", {
      class: this.ns.b("content")
    }, [this.c.state.renderItems.length > 0 ? this.c.state.renderItems.map((e, o) => h("div", {
      class: [this.ns.be("content", "row"), this.ns.is("even-row", this.isEvenRow(o))]
    }, [e.map((t, r) => i(t, o, r))])) : a()]), l = () => h("div", {
      ref: "calendarRef",
      class: this.ns.b()
    }, [c()]);
    return h(v("iBizControlBase"), {
      controller: this.c
    }, z(s = l()) ? s : {
      default: () => [s]
    });
  }
});
class B {
  constructor() {
    y(this, "component", "IBizProcessTimeLine");
  }
}
const E = T(g, (s) => {
  s.component(g.name, g), D(
    "CUSTOM_PROCESS_TIME_LINE",
    () => new B()
  );
}), F = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(E);
  }
};
export {
  E as IBizProcessTimeLine,
  F as default
};
