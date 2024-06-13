import './style.css';
var m = Object.defineProperty;
var d = (e, o, t) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var h = (e, o, t) => (d(e, typeof o != "symbol" ? o + "" : o, t), t);
import { useNamespace as u, withInstall as p } from "@ibiz-template/vue3-util";
import { ToolbarController as w, registerToolbarItemProvider as I } from "@ibiz-template/runtime";
import { defineComponent as M, ref as b, createVNode as l, resolveComponent as f } from "vue";
const i = /* @__PURE__ */ M({
  name: "IBizShowModeToolbarItem",
  props: {
    item: {
      type: Object,
      required: !0
    },
    controller: {
      type: w,
      required: !0
    }
  },
  setup(e) {
    const o = u("show-mode-toolbar-item"), t = e.controller, a = [{
      icon: {
        htmlStr: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" style="fill: currentcolor;"><g stroke-width="1" fill-rule="evenodd"><path d="M7.353 6.926V4.992H5.937V1h4.158v3.992H8.553v1.934H14.395v4.153h1.479v3.993h-4.158V11.08h1.479V8.125H8.553v2.933h1.542v3.993H5.937v-3.993h1.416V8.126H2.679v2.933h1.479v3.993H0v-3.993h1.479V6.926H7.353zm-.216-4.727v1.594h1.758V2.199H7.137zM1.2 12.26v1.592h1.758v-1.593H1.2zm11.716.02v1.594h1.758V12.28h-1.758zm-5.779-.02v1.592h1.758v-1.593H7.137z"></path></g></svg>'
      },
      text: "树状",
      value: "tree"
    }, {
      icon: {
        cssClass: "fa fa-reorder"
      },
      text: "平铺",
      value: "grid"
    }], c = "SHOW_MODE_".concat(t.context.project, "_").concat(t.view.model.codeName), s = b(a[0].value), n = localStorage.getItem(c);
    return (n === "tree" || n === "grid") && (s.value = n), {
      ns: o,
      items: a,
      activeItem: s,
      onClick: async (v, r) => {
        v.stopPropagation(), r.value !== s.value && (s.value = r.value, localStorage.setItem(c, r.value), await t.onItemClick(e.item, v, {
          showMode: r.value
        }));
      }
    };
  },
  render() {
    return l("div", {
      class: this.ns.b()
    }, [l("div", {
      class: this.ns.b("content")
    }, [this.items.map((e) => l("div", {
      class: [this.ns.b("item"), this.ns.is("active", this.activeItem === e.value)],
      title: e.text,
      onClick: (o) => this.onClick(o, e)
    }, [l(f("iBizIcon"), {
      class: this.ns.be("item", "icon"),
      icon: e.icon
    }, null)]))])]);
  }
});
class g {
  constructor() {
    h(this, "component", "IBizShowModeToolbarItem");
  }
}
const H = p(
  i,
  function(e) {
    e.component(i.name, i), I(
      "TOOLBAR_ITEM_SHOW_MODE_TOOLBAR_ITEM",
      () => new g()
    );
  }
), O = {
  install(e) {
    e.use(H);
  }
};
export {
  O as default
};
