import './style.css';
var g = Object.defineProperty;
var N = (o, e, n) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var I = (o, e, n) => (N(o, typeof e != "symbol" ? e + "" : e, n), n);
import { GridFieldColumnController as b, GridRowState as x, GridFieldEditColumnController as A, registerGridColumnProvider as y } from "@ibiz-template/runtime";
import { useNamespace as T, withInstall as V } from "@ibiz-template/vue3-util";
import { defineComponent as z, computed as a, ref as B, createVNode as i, resolveComponent as w } from "vue";
import { isNotNil as R } from "ramda";
const u = /* @__PURE__ */ z({
  name: "IBizIconGridColumn",
  props: {
    controller: {
      type: b,
      required: !0
    },
    row: {
      type: x,
      required: !0
    }
  },
  setup(o) {
    const e = T("grid-field-column"), n = (t) => {
      o.controller.hasAction && (t.stopPropagation(), o.controller.triggerAction(o.row, t));
    }, l = (t) => {
      o.controller.isLinkColumn && (t.stopPropagation(), o.controller.openLinkView(o.row, t));
    }, G = a(() => o.controller.getCustomHtml(o.row)), c = a(() => o.row.data[o.controller.model.codeName.toLowerCase()]), d = a(() => o.controller.formatValue(c.value)), m = B(""), k = (t) => {
      m.value = t;
    }, v = a(() => {
      if (o.controller.grid.overflowMode === "ellipsis" && R(c.value) && c.value !== "")
        return o.controller.codeList ? m.value : d.value + (o.controller.model.unitName || "");
    }), C = (t, r) => {
      if (t) {
        const h = t.find((s) => s.value == r);
        if (h)
          return h;
        for (let s = 0; s < t.length; s++) {
          const f = C(t[s].children, r);
          if (f)
            return f;
        }
      }
    }, L = a(() => {
      var r;
      const t = C(o.controller.codeListItems, "".concat((r = String(c.value)) == null ? void 0 : r.toLowerCase()));
      return t == null ? void 0 : t.sysImage;
    });
    return {
      ns: e,
      onCellClick: n,
      onTextClick: l,
      onInfoTextChange: k,
      onActionClick: async (t, r) => {
        await o.controller.onActionClick(t, o.row, r);
      },
      CustomHtml: G,
      fieldValue: c,
      formatValue: d,
      tooltip: v,
      codeListIcon: L
    };
  },
  render() {
    var l;
    const o = this.controller, e = o.model.deuiactionGroup ? i(w("iBizActionToolbar"), {
      class: this.ns.e("toolbar"),
      "action-details": o.model.deuiactionGroup.uiactionGroupDetails,
      "actions-state": this.row.uiActionGroupStates[this.controller.model.codeName],
      groupLevelKeys: [50, 100],
      onActionClick: this.onActionClick
    }, null) : null;
    let n = null;
    return o.isCustomCode ? n = i("span", {
      class: this.ns.e("script"),
      innerHTML: this.CustomHtml
    }, null) : o.codeList ? n = i("div", {
      class: this.ns.em("text", "icon")
    }, [i(w("iBizIcon"), {
      icon: this.codeListIcon
    }, null)]) : n = i("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.formatValue, this.fieldValue != null && o.model.unitName]), i("div", {
      class: [this.ns.b(), o.clickable(this.row) && this.ns.m("clickable"), this.ns.m(this.controller.grid.overflowMode), (l = this.controller.model.cellSysCss) == null ? void 0 : l.cssName, this.ns.is("has-action", !!o.model.deuiactionGroup)],
      onClick: this.onCellClick
    }, [o.model.deuiactionGroup ? [i("div", {
      class: this.ns.b("text-container")
    }, [n]), i("div", {
      class: this.ns.b("toolbar-container")
    }, [e])] : n]);
  }
});
class D {
  constructor() {
    I(this, "component", "IBizIconGridColumn");
  }
  async createController(e, n) {
    const l = new A(e, n);
    return await l.init(), l;
  }
}
const H = V(
  u,
  function(o) {
    o.component(u.name, u), y(
      "GRID_COLRENDER_ICON_GRIDCOLUMN",
      () => new D()
    );
  }
), p = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(H);
  }
};
export {
  H as IBizIconGridColumn,
  p as default
};
