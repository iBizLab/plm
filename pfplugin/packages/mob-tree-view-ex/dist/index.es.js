import './style.css';
var n = Object.defineProperty;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var i = (o, e, r) => (t(o, typeof e != "symbol" ? e + "" : e, r), r);
import { registerControlProvider as E } from "@ibiz-template/runtime";
import { defineAsyncComponent as l } from "vue";
import { ControlLoadingPlaceholder as m } from "@ibiz-template/vue3-util";
class a {
  constructor() {
    i(this, "component", "IBizMobTreeViewEx");
  }
}
const T = {
  install: (o) => {
    o.component(
      "IBizMobTreeViewEx",
      l({
        loader: () => import("./mob-tree-view-ex-8b9ca39d.js"),
        loadingComponent: m,
        delay: 0
      })
    ), E(
      "TREE_RENDER_MOB_TREE_VIEW_EX",
      () => new a()
    );
  }
};
export {
  T as IBizMobTreeViewEx,
  T as default
};
