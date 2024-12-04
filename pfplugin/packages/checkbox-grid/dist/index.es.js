var y = Object.defineProperty;
var k = (e, n, s) => n in e ? y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[n] = s;
var C = (e, n, s) => (k(e, typeof n != "symbol" ? n + "" : n, s), s);
import { useControlController as P, useNamespace as x, withInstall as v } from "@ibiz-template/vue3-util";
import { GridController as S, registerControlProvider as D, ControlType as G } from "@ibiz-template/runtime";
import { defineComponent as B, ref as z, watch as L, computed as b, createVNode as l, resolveComponent as u, isVNode as N } from "vue";
class R extends S {
  /**
   * 简单列表控制器
   *
   * @readonly
   * @type {IListController}
   * @memberof CheckboxGridController
   */
  get simpleList() {
    var n;
    return (n = this.view.parentView) == null ? void 0 : n.getController("simplelist");
  }
  /**
   * 处理选中数据
   *
   * @param {string[]} selects 选中数据
   * @memberof CheckboxGridController
   */
  handleSelection(n) {
    const { items: s, selectedData: i } = this.state, h = i.filter(
      (c) => !s.find((p) => p.srfkey === c.srfkey)
    ), f = s.filter(
      (c) => n.includes(c.srfkey)
    );
    h.push(...f), this.setSelection(h), this.handlePushSimpleListItems();
  }
  /**
   * 处理添加简单列表数据
   *
   * @protected
   * @memberof CheckboxGridController
   */
  handlePushSimpleListItems() {
    var i;
    const { selectedData: n } = this.state, s = [...n];
    (i = this.simpleList) == null || i.setData(s);
  }
}
function w(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !N(e);
}
const m = /* @__PURE__ */ B({
  name: "CheckboxGrid",
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
    singleSelect: {
      type: Boolean,
      default: void 0
    },
    rowEditOpen: {
      type: Boolean,
      default: void 0
    },
    isSimple: {
      type: Boolean,
      required: !1
    },
    data: {
      type: Array,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const e = P((...t) => new R(...t)), n = x("checkbox-grid"), s = z([]);
    L(() => e.state.selectedData, (t) => {
      s.value = t.map((o) => o.srfkey);
    });
    const i = (t) => {
      !t || t === e.state.curPage || (e.state.curPage = t - 1, e.load({
        isLoadMore: !0
      }));
    }, h = (t) => {
      !t || t === e.state.size || (e.state.size = t, e.state.curPage === 1 && e.load());
    }, f = () => {
      e.load();
    }, c = b(() => {
      const {
        state: t
      } = e;
      if (e.model.enableGroup) {
        const o = [];
        return t.groups.forEach((a) => {
          if (!a.children.length)
            return;
          const d = [...a.children], r = d.shift();
          o.push({
            srfkey: (r == null ? void 0 : r.srfkey) || a.caption,
            isGroupData: !0,
            caption: a.caption,
            first: r,
            children: d
          });
        }), o;
      }
      return t.rows.map((o) => o.data);
    }), p = b(() => {
      if (e.isMultistageHeader)
        return e.model.degridColumns || [];
      const t = [];
      return e.state.columnStates.forEach((o) => {
        var d, r;
        if (o.hidden)
          return;
        const a = ((d = e.fieldColumns[o.key]) == null ? void 0 : d.model) || ((r = e.uaColumns[o.key]) == null ? void 0 : r.model);
        a && t.push(a);
      }), t;
    }), g = () => {
      const {
        isLoaded: t
      } = e.state;
      return t && l(u("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    };
    return {
      c: e,
      ns: n,
      onPageChange: i,
      onPageSizeChange: h,
      onPageRefresh: f,
      renderNoData: g,
      renderContent: () => {
        if (c.value.length > 0) {
          let t;
          return l(u("el-checkbox-group"), {
            modelValue: s.value,
            "onUpdate:modelValue": (o) => s.value = o,
            onChange: (o) => e.handleSelection(o)
          }, w(t = c.value.map((o) => l(u("el-checkbox"), {
            label: o.srfkey
          }, {
            default: () => [l("span", {
              class: n.em("content", "item"),
              title: o[p.value[0].codeName]
            }, [o[p.value[0].codeName]])]
          }))) ? t : {
            default: () => [t]
          });
        }
        return g();
      }
    };
  },
  render() {
    if (!this.c.state.isCreated)
      return;
    const {
      state: e
    } = this.c, {
      enablePagingBar: n
    } = this.c.model;
    return l(u("iBizControlBase"), {
      class: [this.ns.is("enable-page", n), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.b()],
      controller: this.c
    }, {
      default: () => [l("div", {
        class: this.ns.e("content")
      }, [this.renderContent()]), n && l(u("iBizPagination"), {
        total: e.total,
        curPage: e.curPage,
        size: e.size,
        onChange: this.onPageChange,
        onPageSizeChange: this.onPageSizeChange,
        onPageRefresh: this.onPageRefresh
      }, null)]
    });
  }
});
class O {
  constructor() {
    C(this, "component", "CheckboxGrid");
  }
}
const j = v(m, (e) => {
  e.component(m.name, m), D(
    "".concat(G.GRID, "_RENDER_CHECKBOX_GRID"),
    () => new O()
  );
}), M = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(j);
  }
};
export {
  j as IBizCheckboxGrid,
  M as default
};
