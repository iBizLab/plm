import './style.css';
var B = Object.defineProperty;
var g = (e, t, r) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var x = (e, t, r) => (g(e, typeof t != "symbol" ? t + "" : t, r), r);
import { useNamespace as E, withInstall as I } from "@ibiz-template/vue3-util";
import { PanelItemController as v, registerPanelItemProvider as _ } from "@ibiz-template/runtime";
import { defineComponent as w, ref as P, onUnmounted as N, createVNode as i, resolveComponent as k, createTextVNode as y } from "vue";
const p = /* @__PURE__ */ w({
  name: "IBizBreadcrumbExp",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: v,
      required: !0
    }
  },
  setup(e) {
    var d, h, b, f;
    const t = E("breadcrumb-exp"), r = e.controller;
    let n;
    const s = P([]), m = (o) => o._parent && o._parent._nodeId !== "root" ? [...m(o._parent), o] : [o], l = () => {
      var c, a;
      if (!n)
        return;
      const o = (a = (c = n.state) == null ? void 0 : c.selectedData) == null ? void 0 : a[0];
      if (!o) {
        s.value = [];
        return;
      }
      s.value = m(o);
    }, C = (o, c) => {
      var a;
      n && ((a = n.onTreeNodeClick) == null || a.call(n, o, c));
    }, u = (d = r.panel.view) == null ? void 0 : d.parentView;
    if (u) {
      const o = (f = (b = (h = u.layoutPanel) == null ? void 0 : h.panelItems) == null ? void 0 : b.treeexpbar) == null ? void 0 : f.control;
      o && (n = o.xDataController, n && (n.evt.on("onSelectionChange", l), l()));
    }
    return N(() => {
      n == null || n.evt.off("onSelectionChange", l);
    }), {
      c: r,
      ns: t,
      items: s,
      handleClick: C
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.items.map((e, t) => i("div", {
      class: [this.ns.b("item"), this.ns.is("active", t === this.items.length - 1)]
    }, [i("div", {
      class: this.ns.b("item-content"),
      onClick: (r) => {
        r.stopPropagation(), t !== this.items.length - 1 && this.handleClick(e, r);
      }
    }, [e._icon ? i(k("iBizIcon"), {
      class: this.ns.be("item", "icon"),
      icon: e._icon
    }, null) : null, i("div", {
      class: this.ns.be("item", "text")
    }, [e._text || ""])]), t !== this.items.length - 1 && i("div", {
      class: this.ns.be("item", "separator")
    }, [y("/")])]))]);
  }
});
class z {
  constructor() {
    x(this, "component", "IBizBreadcrumbExp");
  }
  async createController(t, r, n) {
    const s = new v(t, r, n);
    return await s.init(), s;
  }
}
const D = I(p, function(e) {
  e.component(p.name, p), _(
    "CUSTOM_BREADCRUMB_EXP",
    () => new z()
  );
}), q = {
  install(e) {
    e.use(D);
  }
};
export {
  D as IBizBreadcrumbExp,
  q as default
};
