var G = Object.defineProperty;
var B = (e, l, a) => l in e ? G(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a;
var v = (e, l, a) => (B(e, typeof l != "symbol" ? l + "" : l, a), a);
import { useControlController as z, useNamespace as L, withInstall as R } from "@ibiz-template/vue3-util";
import { GridController as w, registerControlProvider as I, ControlType as N } from "@ibiz-template/runtime";
import { defineComponent as E, ref as S, watch as P, computed as x, createVNode as i, resolveComponent as d } from "vue";
import { createUUID as O } from "qx-util";
class j extends w {
  /**
   * 简单列表控制器
   *
   * @readonly
   * @type {IListController}
   * @memberof CheckboxGridController
   */
  get simpleList() {
    var l;
    return (l = this.view.parentView) == null ? void 0 : l.getController("simplelist");
  }
  initState() {
    super.initState(), this.state.enableSelectAll = !1;
  }
  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    super.handleControlParams(), this.controlParams.enableselectall && (this.state.enableSelectAll = this.controlParams.enableselectall === "true");
  }
  /**
   * 处理选中数据
   *
   * @param {string[]} selects 选中数据
   * @memberof CheckboxGridController
   */
  handleSelection(l) {
    const { items: a, selectedData: s } = this.state, r = s.filter(
      (h) => !a.find((m) => m.srfkey === h.srfkey)
    ), p = a.filter(
      (h) => l.includes(h.srfkey)
    );
    r.push(...p), this.setSelection(r), this.handlePushSimpleListItems();
  }
  /**
   * 处理添加简单列表数据
   *
   * @protected
   * @memberof CheckboxGridController
   */
  handlePushSimpleListItems() {
    var s;
    const { selectedData: l } = this.state, a = [...l];
    (s = this.simpleList) == null || s.setData(a);
  }
}
const C = /* @__PURE__ */ E({
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
    const e = z((...t) => new j(...t)), l = L("checkbox-grid"), a = S([]), s = {
      srfkey: O(),
      caption: "全选"
    }, r = S(!1);
    P(() => e.state.selectedData, (t) => {
      a.value = t.map((n) => n.srfkey), e.state.enableSelectAll && g(a.value) && a.value.unshift(s.srfkey);
    });
    const p = (t) => {
      !t || t === e.state.curPage || (e.state.curPage = t - 1, e.load({
        isLoadMore: !0
      }));
    }, h = (t) => {
      !t || t === e.state.size || (e.state.size = t, e.state.curPage === 1 && e.load());
    }, m = () => {
      e.load();
    }, u = x(() => {
      const {
        state: t
      } = e;
      if (e.model.enableGroup) {
        const n = [];
        return t.groups.forEach((o) => {
          if (!o.children.length)
            return [];
          const f = [...o.children], c = f.shift();
          n.push({
            srfkey: (c == null ? void 0 : c.srfkey) || o.caption,
            isGroupData: !0,
            caption: o.caption,
            first: c,
            children: f
          });
        }), n;
      }
      return t.rows.map((n) => n.data);
    }), b = x(() => {
      if (e.isMultistageHeader)
        return e.model.degridColumns || [];
      const t = [];
      return e.state.columnStates.forEach((n) => {
        var f, c;
        if (n.hidden)
          return;
        const o = ((f = e.fieldColumns[n.key]) == null ? void 0 : f.model) || ((c = e.uaColumns[n.key]) == null ? void 0 : c.model);
        o && t.push(o);
      }), t;
    });
    e.state.enableSelectAll && P(() => u.value, () => {
      const t = a.value.filter((n) => n !== s.srfkey);
      if (r.value = g(t), !r.value) {
        a.value = t;
        return;
      }
      a.value.unshift(s.srfkey);
    });
    const g = (t) => u.value.length > 0 && t.length > 0 && u.value.every((n) => t.includes(n.srfkey)), k = (t) => {
      r.value = t;
      let n = [];
      t && (n = u.value.map((o) => o.srfkey)), e.handleSelection(n);
    }, D = (t) => {
      const n = t.filter((o) => o !== s.srfkey);
      if (e.state.enableSelectAll) {
        if (g(n)) {
          k(!r.value);
          return;
        }
        r.value = !1;
      }
      e.handleSelection(n);
    }, A = (t) => {
      t.preventDefault(), t.stopPropagation(), k(!r.value);
    }, y = () => {
      const {
        isLoaded: t
      } = e.state;
      return t && i(d("iBizNoData"), {
        text: e.model.emptyText,
        emptyTextLanguageRes: e.model.emptyTextLanguageRes
      }, null);
    };
    return {
      c: e,
      ns: l,
      onPageChange: p,
      onPageSizeChange: h,
      onPageRefresh: m,
      renderNoData: y,
      renderContent: () => u.value.length > 0 ? i(d("el-checkbox-group"), {
        modelValue: a.value,
        "onUpdate:modelValue": (t) => a.value = t,
        onChange: (t) => D(t)
      }, {
        default: () => [[e.state.enableSelectAll && i(d("el-checkbox"), {
          label: s.srfkey,
          checked: r.value,
          onClick: A
        }, {
          default: () => [i("span", {
            class: l.em("content", "item"),
            title: s.caption
          }, [s.caption])]
        }), u.value.map((t) => i(d("el-checkbox"), {
          label: t.srfkey
        }, {
          default: () => [i("span", {
            class: l.em("content", "item"),
            title: t[b.value[0].codeName]
          }, [t[b.value[0].codeName]])]
        }))]]
      }) : y()
    };
  },
  render() {
    if (!this.c.state.isCreated)
      return;
    const {
      state: e
    } = this.c, {
      enablePagingBar: l
    } = this.c.model;
    return i(d("iBizControlBase"), {
      class: [this.ns.is("enable-page", l), this.ns.is("enable-group", this.c.model.enableGroup), this.ns.b()],
      controller: this.c
    }, {
      default: () => [i("div", {
        class: this.ns.e("content")
      }, [this.renderContent()]), l && i(d("iBizPagination"), {
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
class q {
  constructor() {
    v(this, "component", "CheckboxGrid");
  }
}
const M = R(C, (e) => {
  e.component(C.name, C), I(
    "".concat(N.GRID, "_RENDER_CHECKBOX_GRID"),
    () => new q()
  );
}), X = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(M);
  }
};
export {
  M as IBizCheckboxGrid,
  X as default
};
