import './style.css';
var I = Object.defineProperty;
var g = (e, t, i) => t in e ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var h = (e, t, i) => (g(e, typeof t != "symbol" ? t + "" : t, i), i);
import { PanelItemState as M, PanelItemController as y, UIActionButtonState as b, UIActionUtil as x, registerPanelItemProvider as C } from "@ibiz-template/runtime";
import { useNamespace as A, withInstall as H } from "@ibiz-template/vue3-util";
import { defineComponent as B, ref as v, watch as V, onMounted as z, createVNode as l, resolveComponent as N, nextTick as k } from "vue";
class O extends M {
  constructor() {
    super(...arguments);
    /**
     * 加载中
     * @author lxm
     * @date 2023-07-21 10:11:21
     * @type {boolean}
     */
    h(this, "loading", !1);
    /**
     * 界面行为状态
     * @author lxm
     * @date 2023-07-21 03:34:27
     * @type {UIActionButtonState}
     */
    h(this, "uiActionState");
  }
}
class S extends y {
  createState() {
    var t;
    return new O((t = this.parent) == null ? void 0 : t.state);
  }
  /**
   * 父容器数据对象数据
   * @author lxm
   * @date 2023-07-15 01:33:58
   * @readonly
   * @type {IData}
   */
  get data() {
    return this.dataParent.data;
  }
  /**
   * Creates an instance of SwitchShowModeController.
   * @param {IPanelButton} model
   * @param {PanelController} panel
   * @param {PanelItemController} [parent]
   * @memberof SwitchShowModeController
   */
  constructor(t, i, a) {
    super(t, i, a), this.state.uiActionState = this.createUIActionState();
  }
  /**
   * 初始化
   *
   * @return {*}  {Promise<void>}
   * @memberof SwitchShowModeController
   */
  async onInit() {
    await super.onInit(), this.updateButtonState();
  }
  /**
   * 创建界面行为状态对象
   *
   * @protected
   * @return {*}  {SwitchShowModeState}
   * @memberof SwitchShowModeController
   */
  createUIActionState() {
    const { uiactionId: t, name: i } = this.model;
    return new b(
      i,
      this.panel.context.srfappid,
      t
    );
  }
  /**
   * 面板数据变更通知(由面板控制器调用)
   *
   * @param {string[]} names
   * @memberof SwitchShowModeController
   */
  async dataChangeNotify(t) {
    await this.updateButtonState(), super.dataChangeNotify(t);
  }
  /**
   * 面板状态变更通知
   *
   * @param {PanelNotifyState} _state
   * @memberof SwitchShowModeController
   */
  async panelStateNotify(t) {
    await this.updateButtonState(), super.panelStateNotify(t);
  }
  /**
   * 更新按钮权限状态
   *
   * @memberof SwitchShowModeController
   */
  async updateButtonState() {
    await this.state.uiActionState.update(
      this.panel.context,
      this.data,
      this.panel.model.appDataEntityId
    );
  }
  /**
   * 行为点击
   *
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof SwitchShowModeController
   */
  async onActionClick(t, i) {
    const { uiactionId: a, actionType: o } = this.model;
    if (o === "NONE")
      return;
    const s = {};
    Object.assign(s, {
      ...this.panel.params,
      showMode: i == null ? void 0 : i.showMode
    }), await x.execAndResolved(
      a,
      {
        context: this.panel.context,
        params: s,
        data: [this.data],
        view: this.panel.view,
        event: t,
        noWaitRoute: !0
      },
      this.model.appId
    );
  }
  calcItemVisible(t) {
    if (this.state.uiActionState.visible === !1) {
      this.state.visible = !1;
      return;
    }
    super.calcItemVisible(t);
  }
  calcItemDisabled(t) {
    if (this.state.uiActionState.disabled === !0) {
      this.state.disabled = !0;
      return;
    }
    super.calcItemDisabled(t);
  }
}
const p = /* @__PURE__ */ B({
  name: "IBizSwitchShowMode",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: S,
      required: !0
    }
  },
  setup(e) {
    const t = A("switch-show-mode"), i = [{
      icon: {
        htmlStr: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g stroke-width="1" fill-rule="evenodd"><path d="M7.353 6.926V4.992H5.937V1h4.158v3.992H8.553v1.934H14.395v4.153h1.479v3.993h-4.158V11.08h1.479V8.125H8.553v2.933h1.542v3.993H5.937v-3.993h1.416V8.126H2.679v2.933h1.479v3.993H0v-3.993h1.479V6.926H7.353zm-.216-4.727v1.594h1.758V2.199H7.137zM1.2 12.26v1.592h1.758v-1.593H1.2zm11.716.02v1.594h1.758V12.28h-1.758zm-5.779-.02v1.592h1.758v-1.593H7.137z"></path></g></svg>'
      },
      title: "树状",
      value: "tree"
    }, {
      icon: {
        cssClass: "fa fa-reorder"
      },
      title: "平铺",
      value: "grid"
    }], a = e.controller, o = "SHOW_MODE_".concat(a.panel.context.project, "_").concat(a.panel.view.model.codeName), s = v(i[0].value), d = localStorage.getItem(o);
    (d === "tree" || d === "grid") && (s.value = d);
    const r = v({
      transition: "none",
      width: "",
      transform: ""
    }), w = v(), u = () => {
      k(() => {
        const c = w.value;
        if (!c)
          return;
        const n = Array.from(c.children).find((m) => m.classList.contains(t.is("active", !0)));
        n && (r.value.width = "".concat(n.offsetWidth, "px"), r.value.transform = "translateX(".concat(n.offsetLeft, "px)"));
      });
    }, f = (c, n) => {
      c.stopPropagation(), !(n.value === s.value || !c.target) && (r.value.transition = "", s.value = n.value, localStorage.setItem(o, n.value), u(), setTimeout(() => {
        e.controller.onActionClick(c, {
          showMode: n.value
        });
      }));
    };
    return V(() => e.controller.state.visible, () => {
      u();
    }), z(u), {
      ns: t,
      items: i,
      indicatorStyle: r,
      activeItem: s,
      content: w,
      onClick: f
    };
  },
  render() {
    if (this.controller.state.visible)
      return l("div", {
        class: this.ns.b()
      }, [l("div", {
        class: this.ns.b("content"),
        ref: "content"
      }, [this.items.map((e) => l("div", {
        class: [this.ns.b("item"), this.ns.is("active", this.activeItem === e.value)],
        title: e.title,
        onClick: (t) => this.onClick(t, e)
      }, [l(N("iBizIcon"), {
        class: this.ns.be("item", "icon"),
        icon: e.icon
      }, null)])), l("div", {
        class: this.ns.b("indicator"),
        style: this.indicatorStyle
      }, null)])]);
  }
});
class P {
  constructor() {
    h(this, "component", "IBizSwitchShowMode");
  }
  async createController(t, i, a) {
    const o = new S(t, i, a);
    return await o.init(), o;
  }
}
const D = H(
  p,
  function(e) {
    e.component(p.name, p), C(
      "CUSTOM_SWITCH_SHOW_MODE",
      () => new P()
    );
  }
), E = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(D);
  }
};
export {
  D as IBizSwitchShowModeButton,
  E as default
};
