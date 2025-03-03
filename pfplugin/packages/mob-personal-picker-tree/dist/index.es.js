import './style.css';
var i = Object.defineProperty;
var l = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var n = (o, e, r) => (l(o, typeof e != "symbol" ? e + "" : e, r), r);
import { registerControlProvider as t } from "@ibiz-template/runtime";
import { defineAsyncComponent as a } from "vue";
import { ControlLoadingPlaceholder as P } from "@ibiz-template/vue3-util";
class m {
  constructor() {
    n(this, "component", "IBizMobPersonalPickerTree");
  }
}
const E = {
  install: (o) => {
    o.component(
      "IBizMobPersonalPickerTree",
      a({
        loader: () => import("./mob-personal-picker-tree-0a2d46b9.js"),
        loadingComponent: P,
        delay: 0
      })
    ), t(
      "TREE_RENDER_MOB_PERSONAL_PICKER_TREE",
      () => new m()
    );
  }
};
export {
  E as IBizMobPersonalPickerTree,
  E as default
};
