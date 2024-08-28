import './style.css';
var h = Object.defineProperty;
var d = (e, o, t) => o in e ? h(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var m = (e, o, t) => (d(e, typeof o != "symbol" ? o + "" : o, t), t);
import { useNamespace as u, withInstall as I } from "@ibiz-template/vue3-util";
import { ToolbarController as w, registerToolbarItemProvider as p } from "@ibiz-template/runtime";
import { defineComponent as f, ref as g, createVNode as r, resolveComponent as M } from "vue";
const a = /* @__PURE__ */ f({
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
    const o = u("show-mode-toolbar-item"), t = e.controller, n = [{
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
    }], c = "SHOW_MODE_".concat(t.context.project, "_").concat(t.view.model.codeName), s = g(n[0].value), l = localStorage.getItem(c);
    return (l === "tree" || l === "grid") && (s.value = l), e.item.sysImage && (n[1].icon = e.item.sysImage), {
      ns: o,
      items: n,
      activeItem: s,
      onClick: async (v, i) => {
        v.stopPropagation(), i.value !== s.value && (s.value = i.value, localStorage.setItem(c, i.value), await t.onItemClick(e.item, v, {
          showMode: i.value
        }));
      }
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [r("div", {
      class: this.ns.b("content")
    }, [this.items.map((e) => r("div", {
      class: [this.ns.b("item"), this.ns.is("active", this.activeItem === e.value)],
      title: e.text,
      onClick: (o) => this.onClick(o, e)
    }, [r(M("iBizIcon"), {
      class: this.ns.be("item", "icon"),
      icon: e.icon
    }, null)]))])]);
  }
});
class b {
  constructor() {
    m(this, "component", "IBizShowModeToolbarItem");
  }
}
const H = I(
  a,
  function(e) {
    e.component(a.name, a), p(
      "TOOLBAR_ITEM_SHOW_MODE_TOOLBAR_ITEM",
      () => new b()
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
