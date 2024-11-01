import './style.css';
var p = Object.defineProperty;
var m = (e, t, i) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var o = (e, t, i) => (m(e, typeof t != "symbol" ? t + "" : t, i), i);
import { PanelItemController as d, registerPanelItemProvider as h } from "@ibiz-template/runtime";
import { useNamespace as u, withInstall as I } from "@ibiz-template/vue3-util";
import { defineComponent as b, createVNode as s, resolveComponent as f } from "vue";
class c extends d {
  constructor() {
    super(...arguments);
    /**
     * 标题
     */
    o(this, "caption", this.panel.view.state.caption);
    /**
     * 编号
     */
    o(this, "titleNumnber", "");
  }
  async onInit() {
    super.onInit(), this.panel.view.evt.on("onViewInfoChange", ({ caption: i }) => {
      var a;
      const r = this.model.userTag || "";
      this.titleNumnber = "";
      const n = this.panel.view.ctx.controllersMap.get("form");
      n && (this.titleNumnber = n.state.data[r]), this.caption = "".concat(this.panel.view.state.caption).concat(this.titleNumnber ? "-".concat(this.titleNumnber) : ""), (a = ibiz.util) == null || a.setBrowserTitle(this.caption);
    });
  }
}
class T {
  constructor() {
    o(this, "component", "MobIdentifierTitle");
  }
  async createController(t, i, r) {
    const n = new c(t, i, r);
    return await n.init(), n;
  }
}
const l = /* @__PURE__ */ b({
  name: "MobIdentifierTitle",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: c,
      required: !0
    }
  },
  setup() {
    return {
      ns: u("mob-identifier-title")
    };
  },
  render() {
    return s("div", {
      class: this.ns.b()
    }, [s("div", {
      class: [this.ns.b("caption"), this.ns.is("show-icon", !!this.$props.controller.model.sysImage)]
    }, [this.$props.controller.model.sysImage && s(f("iBizIcon"), {
      class: [this.ns.be("caption", "icon")],
      icon: this.$props.controller.model.sysImage
    }, null), s("span", null, [this.$props.controller.caption])])]);
  }
}), w = I(
  l,
  // eslint-disable-next-line func-names
  function(e) {
    e.component(l.name, l), h(
      "CUSTOM_MOB_IDENTIFIER_TITLE",
      () => new T()
    );
  }
), y = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(w);
  }
};
export {
  w as IBizMobIdentifierTitle,
  y as default
};
