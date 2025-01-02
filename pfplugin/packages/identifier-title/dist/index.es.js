import './style.css';
var v = Object.defineProperty;
var f = (i, s, t) => s in i ? v(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var r = (i, s, t) => (f(i, typeof s != "symbol" ? s + "" : s, t), t);
import { PanelItemState as w, PanelItemController as g, ViewCallTag as y, registerPanelItemProvider as I } from "@ibiz-template/runtime";
import { useNamespace as T, withInstall as b } from "@ibiz-template/vue3-util";
import { defineComponent as z, ref as p, createVNode as e, resolveComponent as x } from "vue";
class C extends w {
  constructor() {
    super(...arguments);
    /**
     * 标题
     */
    r(this, "caption", "");
  }
}
class u extends g {
  constructor() {
    super(...arguments);
    /**
     * 编号
     */
    r(this, "titleNumnber", "");
  }
  async onInit() {
    super.onInit(), this.state.caption = this.panel.view.state.caption, this.panel.view.evt.on(
      "onViewInfoChange",
      ({ caption: t, dataInfo: o }) => {
        var a;
        const l = this.model.userTag || "";
        this.titleNumnber = "";
        const n = this.panel.view.ctx.controllersMap.get("form");
        n && (this.titleNumnber = n.state.data[l]), this.state.caption = "".concat(this.panel.view.state.caption).concat(this.titleNumnber ? "-".concat(this.titleNumnber) : ""), (a = ibiz.util) == null || a.setBrowserTitle(this.state.caption);
      }
    );
  }
  /**
   * 创建面板状态对象
   *
   * @protected
   * @return {*}  {IdentifierTitleState}
   */
  createState() {
    var t;
    return new C((t = this.parent) == null ? void 0 : t.state);
  }
  /**
   * 获取分享路径
   *
   * @return {*}  {boolean}
   * @memberof IdentifierTitleController
   */
  async copyPath() {
    return (await this.panel.view.call(y.COPY_PATH)).ok;
  }
}
class M {
  constructor() {
    r(this, "component", "IdentifierTitle");
  }
  async createController(s, t, o) {
    const l = new u(s, t, o);
    return await l.init(), l;
  }
}
const d = /* @__PURE__ */ z({
  name: "IdentifierTitle",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: u,
      required: !0
    }
  },
  setup(i) {
    const s = T("identifier-title"), t = p(!1), o = p(!1);
    let l, n;
    return {
      ns: s,
      copyIdSuccess: t,
      copyUrlSuccess: o,
      copy: async (h, c) => {
        const m = c === "id" ? ibiz.util.text.copy(h) : await i.controller.copyPath();
        clearTimeout(c === "id" ? l : n), m ? (ibiz.message.success("拷贝成功!"), c === "id" ? (t.value = !0, l = setTimeout(() => {
          t.value = !1;
        }, 3e3)) : (o.value = !0, n = setTimeout(() => {
          o.value = !1;
        }, 3e3))) : ibiz.message.error("拷贝失败，浏览器copy操作不被支持或未被启用!");
      }
    };
  },
  render() {
    return e("div", {
      class: this.ns.b()
    }, [e("div", {
      class: [this.ns.b("caption"), this.ns.is("show-icon", !!this.$props.controller.model.sysImage)]
    }, [this.$props.controller.model.sysImage && e(x("iBizIcon"), {
      class: [this.ns.be("caption", "icon")],
      icon: this.$props.controller.model.sysImage
    }, null), e("span", null, [this.$props.controller.state.caption]), e("div", {
      class: this.ns.b("copy")
    }, [e("div", {
      class: this.ns.be("copy", "copy-id"),
      title: this.copyIdSuccess ? "复制成功" : "复制ID",
      onClick: () => this.copy(this.$props.controller.titleNumnber, "id")
    }, [this.copyIdSuccess ? e("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "#73D897"
    }, [e("g", {
      id: "agctips/check-circle-fill",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [e("path", {
      d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z",
      id: "agc形状结合"
    }, null)])]) : e("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      focusable: "false",
      fill: "currentColor"
    }, [e("g", {
      id: "copy2020/after-copy",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [e("g", {
      id: "5666232",
      transform: "translate(2 -.27)",
      "fill-rule": "nonzero"
    }, [e("path", {
      d: "M5.6 8.47v-1.2h4.174v1.2H5.6zm0 3v-1.2h4.174v1.2H5.6zm-4.4-10v10.075H0L.003 2.27c0-1.088.895-2 1.997-2h7.585v1.2H1.2zm1.8.8h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1zm.2 1.2v11.6h8.6V3.47H3.2z",
      id: "copy2020"
    }, null)])])])]), e("div", {
      class: this.ns.be("copy", "copy-url"),
      title: this.copyUrlSuccess ? "复制成功" : "复制链接",
      onClick: () => this.copy(window.location.href, "url")
    }, [this.copyUrlSuccess ? e("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "#73D897"
    }, [e("g", {
      id: "agctips/check-circle-fill",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [e("path", {
      d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z",
      id: "agc形状结合"
    }, null)])]) : e("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false",
      fill: "currentColor"
    }, [e("g", {
      id: "aodeditor/link-insert",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [e("path", {
      d: "M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z",
      id: "aod形状结合",
      transform: "rotate(46 8.253 8.13)"
    }, null)])])])])])]);
  }
}), k = b(
  d,
  // eslint-disable-next-line func-names
  function(i) {
    i.component(d.name, d), I(
      "CUSTOM_IDENTIFIER_TITLE",
      () => new M()
    );
  }
), D = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(i) {
    i.use(k);
  }
};
export {
  k as IBizIdentifierTitle,
  D as default
};
