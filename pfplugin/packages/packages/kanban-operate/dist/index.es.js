import './style.css';
var H = Object.defineProperty;
var J = (a, n, o) => n in a ? H(a, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[n] = o;
var A = (a, n, o) => (J(a, typeof n != "symbol" ? n + "" : n, o), o);
import { PanelItemController as Q, UIActionUtil as X, registerPanelItemProvider as Z } from "@ibiz-template/runtime";
import { defineComponent as ee, ref as p, computed as k, createVNode as s, resolveComponent as c } from "vue";
import { useNamespace as te } from "@ibiz-template/vue3-util";
class V extends Q {
  /**
   * Creates an instance of KanbanOperateController.
   * @param {IPanelButton} model
   * @param {PanelController} panel
   * @param {PanelItemController} [parent]
   * @memberof KanbanOperateController
   */
  constructor(o, l, i) {
    super(o, l, i);
    /**
     * 行为模型
     */
    A(this, "actionModel", {});
  }
  /**
   * 父容器数据对象数据
   * @author lxm
   * @date 2023-07-15 01:33:58
   * @readonly
   * @type {IData}
   */
  get data() {
    return this.panel.inputData || this.dataParent.data;
  }
  get uaState() {
    const o = this.panel.ctx.controllersMap.get("kanban").state.uaState || {};
    return o ? o[this.data.srfkey] : {};
  }
  /**
   * 初始化
   *
   * @return {*}  {Promise<void>}
   * @memberof KanbanOperateController
   */
  async onInit() {
    await super.onInit();
    const o = this.panel.view, l = this.model.userTag || "OPERATE", i = o.getController("kanban");
    if (i) {
      const { dedataViewItems: m = [] } = i.model;
      this.actionModel = m.find(
        (b) => Object.is(b.name, l)
      );
    }
  }
}
const T = /* @__PURE__ */ ee({
  name: "IBizKanbanOperate",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: V,
      required: !0
    }
  },
  setup(a) {
    const n = te("panel-button"), o = a.controller, l = p(), i = p(), m = p(), b = p(), I = p(!1), h = p(!1), {
      caption: D,
      captionItemName: O,
      renderMode: N,
      showCaption: S,
      sysImage: E,
      codeName: M,
      itemStyle: x,
      tooltip: L,
      buttonCssStyle: y
    } = a.modelData, {
      panel: d
    } = a.controller, z = p("");
    y && (z.value = y);
    const P = k(() => O && d.data ? d.data[O.toLowerCase()] : D);
    let C = !1;
    Object.is(N, "LINK") && (C = !0);
    const B = k(() => {
      if (Object.is(N, "LINK"))
        return null;
      switch (x) {
        case "PRIMARY":
          return "primary";
        case "SUCCESS":
          return "success";
        case "INFO":
          return "info";
        case "WARNING":
          return "warning";
        case "DANGER":
          return "danger";
        case "INVERSE":
          return "info";
        default:
          return null;
      }
    }), v = (t) => {
      const e = o.uaState[t.id];
      return !!(e && e.disabled === !1 && e.visible === !0);
    }, U = () => {
      const {
        actionModel: t
      } = o, e = [], r = [], u = [];
      if (t && t.deuiactionGroup) {
        const {
          uiactionGroupDetails: g
        } = t.deuiactionGroup;
        g.forEach((f) => {
          f.actionLevel === 250 ? e.push(f) : f.actionLevel === 200 ? r.push(f) : u.push(f);
        });
      }
      return {
        deActions: u,
        useActions: r,
        keyActions: e
      };
    }, G = (t, e, r) => {
      const u = {
        ...e
      };
      if (r) {
        const g = r.querySelector(".".concat(t.id));
        g && (u.target = g);
      }
      return u;
    }, w = async (t, e, r) => {
      e.stopPropagation(), h.value = !0;
      const u = {
        context: d.context,
        params: d.params,
        data: [d.inputData],
        view: d.view,
        event: G(t, e, r)
      };
      await X.execAndResolved(t.uiactionId, u, t.appId), h.value = !1;
    }, K = async (t) => {
      a.controller.onClick();
    }, R = (t) => {
      const {
        actionLevel: e
      } = t;
      return [t.id, n.e("item"), n.is("disabled", !1), n.em("item", "level-".concat(e))];
    }, j = (t) => t.length === 0 ? null : s("div", {
      class: n.be("poper-content", "keyaction")
    }, [t.map((e) => s(c("el-button"), {
      class: [n.bem("poper-content", "keyaction", "action"), ...R(e), {
        "no-access": !v(e)
      }],
      text: !0,
      size: "small",
      onClick: (r) => w(e, r, null),
      title: e.tooltip || e.caption
    }, {
      default: () => [e.showIcon && e.sysImage ? s(c("iBizIcon"), {
        icon: e.sysImage
      }, null) : s(c("iBizIcon"), {
        icon: "fa fa-save"
      }, null)]
    }))]), q = (t) => t.length === 0 ? null : s("div", {
      class: n.be("poper-content", "deaction"),
      ref: m
    }, [t.map((e) => v(e) ? s("div", {
      class: [n.bem("poper-content", "deaction", "action"), ...R(e), {
        "no-access": !v(e)
      }],
      onClick: (r) => w(e, r, m.value),
      title: e.tooltip || e.caption
    }, [e.showIcon && e.sysImage ? s(c("iBizIcon"), {
      icon: e.sysImage
    }, null) : s("i", {
      class: "ibiz-icon fa fa-ravelry",
      "aria-hidden": "true"
    }, null), s("span", {
      class: n.bem("poper-content", "deaction", "action-text")
    }, [e.showCaption ? e.capLanguageRes ? ibiz.i18n.t(e.capLanguageRes.lanResTag, e.caption) : e.caption : ""])]) : null)]), _ = (t) => t.length === 0 ? null : s("div", {
      class: n.be("poper-content", "useaction"),
      ref: b
    }, [t.map((e) => s("div", {
      class: [n.bem("poper-content", "useaction", "action"), ...R(e), {
        "no-access": !v(e)
      }],
      onClick: (r) => w(e, r, b.value),
      title: e.tooltip || e.caption
    }, [e.showIcon && e.sysImage ? s(c("iBizIcon"), {
      icon: e.sysImage
    }, null) : s("i", {
      class: "ibiz-icon fa fa-ravelry",
      "aria-hidden": "true"
    }, null), s("span", {
      class: n.bem("poper-content", "useaction", "action-text")
    }, [e.showCaption ? e.capLanguageRes ? ibiz.i18n.t(e.capLanguageRes.lanResTag, e.caption) : e.caption : ""])]))]), F = () => {
      const {
        keyActions: t,
        useActions: e,
        deActions: r
      } = U();
      return s("div", {
        class: n.b("poper-content")
      }, [j(t), _(e), q(r)]);
    }, $ = () => s("div", null, [s(c("el-tooltip"), {
      popperClass: n.b("title"),
      effect: "dark",
      content: L,
      placement: "top",
      "show-arrow": !0
    }, {
      default: () => [s(c("el-button"), {
        ref: "buttonRef",
        type: B.value,
        text: C,
        onClick: K
      }, {
        default: () => [s("div", {
          class: n.b("content")
        }, [s(c("iBizIcon"), {
          class: n.bm("content", "icon"),
          icon: E
        }, null), S ? s("span", {
          class: n.bm("content", "caption")
        }, [P]) : ""])]
      })]
    })]), W = (t) => {
      t.stopPropagation(), t.preventDefault();
    }, Y = k({
      get() {
        return I.value || h.value;
      },
      set(t) {
        I.value = t;
      }
    });
    return {
      ns: n,
      isText: C,
      captionText: P,
      buttonType: B,
      showCaption: S,
      sysImage: E,
      codeName: M,
      tooltip: L,
      handleButtonClick: K,
      buttonCssStyle: y,
      tempStyle: z,
      itemStyle: x,
      buttonRef: l,
      popoverRef: i,
      popoverRefVisible: I,
      renderPoperContent: F,
      renderBtn: $,
      stopEvent: W,
      processing: h,
      isVisible: Y
    };
  },
  render() {
    return s("div", {
      class: [this.ns.b(), this.ns.m(this.codeName), this.itemStyle && this.ns.m(this.itemStyle.toLowerCase()), this.ns.is("show-popover", this.isVisible), ...this.controller.containerClass],
      onClick: this.stopEvent,
      style: this.tempStyle
    }, [s(c("el-popover"), {
      ref: "popoverRef",
      disabled: this.controller.state.readonly,
      visible: this.isVisible,
      "onUpdate:visible": (a) => this.isVisible = a,
      popperClass: [this.ns.b("one-popover")],
      width: 278,
      placement: "right-start",
      trigger: "click"
    }, {
      reference: () => this.renderBtn(),
      default: () => this.renderPoperContent()
    })]);
  }
});
class ne {
  constructor() {
    A(this, "component", "IBizKanbanOperate");
  }
  async createController(n, o, l) {
    const i = new V(n, o, l);
    return await i.init(), i;
  }
}
const ie = {
  install(a) {
    a.component(T.name, T), Z(
      "FORM_USERCONTROL_KANBAN_OPERATE",
      () => new ne()
    );
  }
};
export {
  V as KanbanOperateController,
  ie as default
};
