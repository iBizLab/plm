import './style.css';
var A = Object.defineProperty;
var F = (r, e, t) => e in r ? A(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var l = (r, e, t) => (F(r, typeof e != "symbol" ? e + "" : e, t), t);
import { useNamespace as p, withInstall as T } from "@ibiz-template/vue3-util";
import { PanelItemController as P, registerPanelItemProvider as S } from "@ibiz-template/runtime";
import { defineComponent as v, createVNode as i, h as w, resolveComponent as d, createTextVNode as O, inject as E, ref as U, onBeforeUnmount as z } from "vue";
import { useRouter as L } from "vue-router";
import { NOOP as g, listenJSEvent as j, RuntimeError as N } from "@ibiz-template/core";
import { isArray as I } from "lodash-es";
const u = class u {
  /**
   * 获取主题色
   *
   * @static
   * @return {*}
   * @memberof Util
   */
  static getThemeVar() {
    const e = document.documentElement;
    return e ? getComputedStyle(e).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否为中文字符串
   *
   * @static
   * @param {string} char
   * @return {*}
   * @memberof Util
   */
  static isChineseChart(e) {
    return /[\u4E00-\u9FA5]/.test(e);
  }
  /**
   * 是否同时存在英文和中文
   *
   * @static
   * @param {string} str
   * @return {*}
   * @memberof Util
   */
  static hasChineseAndEnglish(e) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(e);
  }
  /**
   * 计算图片文字
   *
   * @static
   * @param {string} textVal
   * @return {*}
   * @memberof Util
   */
  static calcTextPhoto(e) {
    if (e && e.toString().length < 2)
      return e;
    if (e && e.toString().length >= 2) {
      if (this.hasChineseAndEnglish(e)) {
        const o = e.split("").find((c) => /[a-zA-Z]/.test(c)) || "", a = e.split("").find((c) => /[\u4E00-\u9FA5]/.test(c)) || "";
        return "".concat(o).concat(a).toLowerCase();
      }
      return /[a-zA-Z]/.test(e) ? e.split("").filter((o) => /[a-zA-Z]/.test(o)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((o) => /[\u4E00-\u9FA5]/.test(o)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
    }
  }
};
/**
 * 计算图片颜色
 *
 * @static
 * @param {string} textVal
 * @memberof Util
 */
l(u, "calcColorPhoto", (e) => {
  if (!e)
    return "";
  let t = 0;
  for (let h = 0; h < e.length; h++)
    if (u.isChineseChart(e))
      t = e.charCodeAt(h) + ((t << 5) - t), t = t & t;
    else {
      const y = e.charCodeAt(h);
      t += y.toString(16);
    }
  const s = String(t).substring(0, 6);
  let n = parseInt(s.substring(0, 2), 16), o = parseInt(s.substring(2, 4), 16), a = parseInt(s.substring(4, 6), 16);
  n < 0 && (n = 10), o < 0 && (o = 10), a < 0 && (a = 10);
  const c = "#".concat(n.toString(16).padStart(2, "0")).concat(o.toString(16).padStart(2, "0")).concat(a.toString(16).padStart(2, "0"));
  return c === "#FFFFFF" && u.getThemeVar() || c;
});
let f = u;
const C = /* @__PURE__ */ v({
  name: "Avatar",
  props: {
    label: {
      type: String,
      required: !0
    },
    img: {
      type: String
    },
    readOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(r) {
    const e = p("custom-avatar");
    return {
      ns: e,
      renderAvatar: () => r.img ? i("img", {
        class: e.e("user-avatar"),
        src: r.img
      }, null) : i("div", {
        class: e.e("default-avatar"),
        style: "background-color: ".concat(f.calcColorPhoto(r.label))
      }, [f.calcTextPhoto(r.label)])
    };
  },
  render() {
    return i("div", {
      class: this.ns.b()
    }, [this.renderAvatar()]);
  }
});
const R = /* @__PURE__ */ v({
  name: "UserInfoPopover",
  props: {
    controller: {
      type: Object,
      required: !0
    },
    context: {
      type: Object,
      required: !0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    viewId: {
      type: String
    },
    modal: {
      type: Object
    }
  },
  setup(r) {
    const e = p("user-info-popover"), t = r.controller, s = () => [i("div", {
      class: e.e("header")
    }, [i("img", {
      src: "./assets/images/login-header.png"
    }, null)]), i("div", {
      class: e.e("content")
    }, [i("div", {
      class: e.em("content", "avatar-container")
    }, [i(C, {
      class: e.em("content", "avatar"),
      label: t.userInfo.srfusername,
      img: t.userInfo.avatar
    }, null)]), i("div", {
      class: e.em("content", "info")
    }, [i("div", {
      class: "user-name"
    }, [t.userInfo.srfusername]), i("div", {
      class: "description"
    }, [t.userInfo.srfpersonname])])]), i(d("el-divider"), {
      class: e.e("divider"),
      "content-position": "center"
    }, null), i("div", {
      class: e.e("footer")
    }, [i(d("el-button"), {
      class: e.e("log-out"),
      onClick: () => t.onLogOut(),
      text: !0
    }, {
      default: () => [i(d("iBizIcon"), {
        class: e.em("log-out", "icon"),
        icon: {
          cssClass: "fa fa-sign-out"
        }
      }, null), i("span", {
        class: e.em("log-out", "text")
      }, [O("退出登录")])]
    })])];
    return {
      ns: e,
      renderContent: () => r.viewId ? w(d("IBizViewShell"), {
        context: r.context,
        params: r.params,
        viewId: r.viewId,
        modal: r.modal
      }) : s()
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b()]
    }, [this.renderContent()]);
  }
});
class b extends P {
  constructor() {
    super(...arguments);
    /**
     * 弹框内导航视图名称
     *
     * @private
     * @memberof CustomUserInfoController
     */
    l(this, "navViewName", "");
    /**
     * 头像属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    l(this, "avatarField", "");
    /**
     * 标题属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    l(this, "titlField", "");
    /**
     * 子标题属性
     *
     * @type {string}
     * @memberof CustomUserInfoController
     */
    l(this, "subTitleField", "");
    /**
     * 路由
     *
     * @private
     * @memberof CustomUserInfoController
     */
    l(this, "router");
    /**
     * 气泡弹窗容器
     *
     * @private
     * @type {(IOverlayPopoverContainer | null)}
     * @memberof CustomUserInfoController
     */
    l(this, "overlay", null);
    /**
     * ctx
     *
     * @memberof CustomUserInfoController
     */
    l(this, "ctx", E("ctx", void 0));
    /**
     * 用户信息视图
     *
     * @private
     * @type {IViewConfig}
     * @memberof CustomUserInfoController
     */
    l(this, "userInfoView");
    /**
     * 用户信息
     *
     * @public
     * @type {IData}
     * @memberof CustomUserInfoController
     */
    l(this, "userInfo");
    /**
     * 监听函数
     *
     * @memberof CustomUserInfoController
     */
    l(this, "cleanup", g);
  }
  /**
   * 是否折叠
   *
   * @readonly
   * @memberof CustomUserInfoController
   */
  get isCollapse() {
    return this.panel.view.state.isCollapse;
  }
  /**
   * 菜单方向
   *
   * @readonly
   * @memberof CustomUserInfoController
   */
  get menuAlign() {
    var t;
    return (t = this.ctx) != null && t.view && this.ctx.view.model.mainMenuAlign || "LEFT";
  }
  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof CustomUserInfoController
   */
  async onInit() {
    var t;
    await super.onInit(), this.initRawItemParams();
    try {
      const s = ((t = ibiz.appData) == null ? void 0 : t.context) || {}, { srfusername: n = "游客", srfpersonname: o } = s;
      this.userInfo = { srfusername: n, srfpersonname: o }, this.avatarField && s[this.avatarField] && Object.assign(this.userInfo, {
        avatar: this.parseAvatar(s[this.avatarField])
      }), this.titlField && s[this.titlField] && Object.assign(this.userInfo, {
        srfusername: s[this.titlField]
      }), this.subTitleField && s[this.subTitleField] && Object.assign(this.userInfo, {
        srfpersonname: s[this.subTitleField]
      }), this.userInfoView = await ibiz.hub.config.view.get(this.navViewName);
    } catch (s) {
      ibiz.log.error(s);
    }
    this.cleanup = j(window, "keydown", (s) => {
      var n;
      s.keyCode === 27 && ((n = this.overlay) == null || n.dismiss());
    });
  }
  /**
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {*}
   * @memberof CustomUserInfoController
   */
  parseAvatar(t) {
    try {
      const s = JSON.parse(t);
      if (s) {
        const n = I(s) ? s[0] : s;
        return ibiz.util.file.calcFileUpDownUrl(
          this.panel.context,
          this.panel.params
        ).downloadUrl.replace("%fileId%", n.id);
      }
    } catch (s) {
      throw new N("头像数据解析异常");
    }
  }
  /**
   * 初始化面板项高级参数
   *
   * @memberof CustomUserInfoController
   */
  initRawItemParams() {
    var s;
    const t = (s = this.model) == null ? void 0 : s.rawItem;
    I(t == null ? void 0 : t.rawItemParams) && (t == null || t.rawItemParams.forEach((n) => {
      const { key: o, value: a } = n;
      o === "NAVVIEWNAME" && (this.navViewName = a), o === "AVATAR" && (this.avatarField = a.toLowerCase()), o === "TITLE" && (this.titlField = a.toLowerCase()), o === "SUBTITLE" && (this.subTitleField = a.toLowerCase());
    }));
  }
  /**
   * 设置路由对象
   *
   * @param {Router} router
   * @memberof CustomUserInfoController
   */
  setRouter(t) {
    this.router = t;
  }
  /**
   * 登出
   *
   * @memberof CustomUserInfoController
   */
  async onLogOut() {
    var s;
    (s = this.overlay) == null || s.dismiss(), await ibiz.confirm.info({
      title: "退出登录",
      desc: "您确定要退出登录吗？"
    }) && await ibiz.hub.controller.logout() && (await this.router.push(
      "/login?ru=".concat(encodeURIComponent(
        window.location.hash.replace("#/", "/")
      ))
    ), ibiz.util.showAppLoading(), window.location.reload());
  }
  /**
   * 打开用户信息Popover
   *
   * @param {EventTarget} target
   * @memberof CustomUserInfoController
   */
  async openUserInfoPopover(t) {
    var s, n;
    return this.overlay = ibiz.overlay.createPopover(
      (o) => {
        var a;
        return w(R, {
          context: this.panel.context.clone(),
          params: this.panel.params,
          modal: o,
          controller: this,
          viewId: (a = this.userInfoView) == null ? void 0 : a.id
        });
      },
      void 0,
      {
        placement: this.menuAlign === "LEFT" ? "right-start" : "bottom",
        autoClose: !0,
        noArrow: !0,
        width: ((s = this.userInfoView) == null ? void 0 : s.width) || 320,
        height: (n = this.userInfoView) == null ? void 0 : n.height
      }
    ), await this.overlay.present(t), await this.overlay.onWillDismiss();
  }
  onDestroyed() {
    var t;
    this.cleanup !== g && this.cleanup(), (t = this.overlay) == null || t.dismiss();
  }
}
const m = /* @__PURE__ */ v({
  name: "CustomUserInfo",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    controller: {
      type: b,
      required: !0
    }
  },
  setup(r) {
    const e = p("custom-user-info"), t = r.controller, s = U({}), n = L();
    t.setRouter(n);
    const o = () => {
      t.openUserInfoPopover(s.value);
    };
    return z(() => {
      t.onDestroyed();
    }), {
      c: t,
      ns: e,
      userInfo: s,
      onOpenUserInfoPopover: o
    };
  },
  render() {
    return i("div", {
      ref: "userInfo",
      class: [this.ns.b(), this.ns.m(this.modelData.id), ...this.c.containerClass, this.ns.is("left", this.c.menuAlign === "LEFT"), this.ns.is("top", this.c.menuAlign === "TOP"), this.ns.is("collapse", this.c.isCollapse)],
      onClick: this.onOpenUserInfoPopover
    }, [i(C, {
      class: this.ns.e("avatar"),
      label: this.c.userInfo.srfusername,
      img: this.c.userInfo.avatar,
      readOnly: !0
    }, null), !this.c.isCollapse && i("div", {
      class: this.ns.e("info")
    }, [i("div", {
      class: this.ns.em("info", "user-name")
    }, [this.c.userInfo.srfusername]), this.c.menuAlign === "LEFT" && i("div", {
      class: this.ns.em("info", "description")
    }, [this.c.userInfo.srfpersonname])])]);
  }
});
class D {
  constructor() {
    l(this, "component", "CustomUserInfo");
  }
  async createController(e, t, s) {
    const n = new b(e, t, s);
    return await n.init(), n;
  }
}
const B = T(
  m,
  function(r) {
    r.component(m.name, m), S(
      "CUSTOM_CUSTOM_AUTH_USERINFO",
      () => new D()
    );
  }
), J = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(B);
  }
};
export {
  B as IBizCustomUserInfo,
  J as default
};
