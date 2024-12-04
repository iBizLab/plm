import './style.css';
var R = Object.defineProperty;
var E = (r, e, t) => e in r ? R(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var d = (r, e, t) => (E(r, typeof e != "symbol" ? e + "" : e, t), t);
import { ListController as k, registerControlProvider as x, ControlType as M } from "@ibiz-template/runtime";
import { useNamespace as A, useControlController as O, withInstall as j } from "@ibiz-template/vue3-util";
import { defineComponent as D, createVNode as a, computed as N, resolveComponent as m, isVNode as $, withDirectives as _, resolveDirective as q, createTextVNode as I } from "vue";
import { isArray as Z, isNil as U } from "lodash-es";
import { RuntimeError as G } from "@ibiz-template/core";
function H(r) {
  function e(i) {
    !i || i === r.state.curPage || (r.state.curPage = i, r.load());
  }
  function t(i) {
    !i || i === r.state.size || (r.state.size = i, r.state.curPage === 1 && r.load());
  }
  function n() {
    r.load();
  }
  return { onPageChange: e, onPageSizeChange: t, onPageRefresh: n };
}
const f = class f {
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
        const l = e.split("").find((u) => /[a-zA-Z]/.test(u)) || "", p = e.split("").find((u) => /[\u4E00-\u9FA5]/.test(u)) || "";
        return "".concat(l).concat(p).toLowerCase();
      }
      return /[a-zA-Z]/.test(e) ? e.split("").filter((l) => /[a-zA-Z]/.test(l)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((l) => /[\u4E00-\u9FA5]/.test(l)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
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
d(f, "calcColorPhoto", (e) => {
  if (!e)
    return "";
  let t = 0;
  for (let h = 0; h < e.length; h++)
    if (f.isChineseChart(e))
      t = e.charCodeAt(h) + ((t << 5) - t), t = t & t;
    else {
      const g = e.charCodeAt(h);
      t += g.toString(16);
    }
  const n = String(t).substring(0, 6);
  let i = parseInt(n.substring(0, 2), 16), l = parseInt(n.substring(2, 4), 16), p = parseInt(n.substring(4, 6), 16);
  i < 0 && (i = 10), l < 0 && (l = 10), p < 0 && (p = 10);
  const u = "#".concat(i.toString(16).padStart(2, "0")).concat(l.toString(16).padStart(2, "0")).concat(p.toString(16).padStart(2, "0"));
  return u === "#FFFFFF" && f.getThemeVar() || u;
});
let b = f;
const Y = /* @__PURE__ */ D({
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
    const e = A("custom-avatar");
    return {
      ns: e,
      renderAvatar: () => r.img ? a("img", {
        class: e.e("user-avatar"),
        src: r.img
      }, null) : a("div", {
        class: e.e("default-avatar"),
        style: "background-color: ".concat(b.calcColorPhoto(r.label))
      }, [b.calcTextPhoto(r.label)])
    };
  },
  render() {
    return a("div", {
      class: this.ns.b()
    }, [this.renderAvatar()]);
  }
});
class J extends k {
  constructor() {
    super(...arguments);
    /**
     * 云系统操作者Map
     *
     * @memberof ReviewListController
     */
    d(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 头像属性
     *
     * @type {string}
     * @memberof ReviewListController
     */
    d(this, "avatarField", "iconurl");
    /**
     * 用户id属性
     */
    d(this, "userIdField", "submitter_id");
    /**
     * 评审人类型属性
     */
    d(this, "revTypeField", "reviewer_type");
    /**
     * 用户信息
     *
     * @public
     * @type {IData}
     * @memberof ReviewListController
     */
    d(this, "userInfo");
  }
  async onCreated() {
    await super.onCreated(), this.initCtrlParams(), await this.getOperatorUserList();
    const t = this.params[this.userIdField];
    if (this.operatorMap.size > 0 && t) {
      const n = this.operatorMap.get(t);
      n && n.data && n.data[this.avatarField] && (this.userInfo = n.data, Object.assign(this.userInfo, {
        avatar: this.parseAvatar(n.data[this.avatarField])
      }));
    }
  }
  /**
   * 初始化部件控件参数
   *
   * @memberof ReviewListController
   */
  initCtrlParams() {
    const { ctrlParams: t = {} } = this.model.controlParam;
    t.USERIDFIELD && (this.userIdField = t.USERIDFIELD), t.AVATARFIELD && (this.avatarField = t.AVATARFIELD), t.REVTYPEFIELD && (this.revTypeField = t.REVTYPEFIELD);
  }
  /**
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {string | undefined}
   * @memberof ReviewListController
   */
  parseAvatar(t) {
    try {
      const n = JSON.parse(t);
      if (n) {
        const i = Z(n) ? n[0] : n;
        return ibiz.util.file.calcFileUpDownUrl(
          this.context,
          this.params
        ).downloadUrl.replace("%fileId%", i.id);
      }
    } catch (n) {
      throw new G("头像数据解析异常");
    }
  }
  /**
   * 获取操作用户列表
   *
   * @memberof ReviewListController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let n = [];
    n = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      n.map((i) => [i.value, i])
    );
  }
}
function P(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !$(r);
}
const Q = () => a("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false",
  fill: "rgb(255, 117, 117)"
}, [a("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [a("path", {
  d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm6-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6z"
}, null)])]), W = () => a("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [a("g", {
  id: "arrtips/play-circle-fill",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [a("path", {
  d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm11.26.432a.5.5 0 0 0 0-.864l-4.508-2.63A.5.5 0 0 0 6 5.372v5.258a.5.5 0 0 0 .752.432l4.508-2.63z"
}, null)])]), C = /* @__PURE__ */ D({
  name: "IBizReviewListControl",
  props: {
    modelData: {
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
    provider: {
      type: Object
    },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: {
      type: Number,
      default: void 0
    },
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
      type: Boolean,
      default: void 0
    },
    isSimple: {
      type: Boolean,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(r) {
    const e = O((...s) => new J(...s)), t = A("control-review-".concat(e.model.controlType.toLowerCase())), {
      onPageChange: n,
      onPageRefresh: i,
      onPageSizeChange: l
    } = H(e), p = N(() => e.model.enablePagingBar === !0 ? !0 : e.state.items.length >= e.state.total || e.state.isLoading || e.state.total <= e.state.size), u = () => a("div", {
      class: t.b("custom-item")
    }, [a("div", {
      class: t.be("custom-item", "icon")
    }, [W()]), a("div", {
      class: t.be("custom-item", "caption")
    }, [I("提交评审")]), a("div", {
      class: t.be("custom-item", "avatar")
    }, [e.userInfo ? a(Y, {
      label: e.userInfo.text,
      img: e.userInfo.avatar,
      readOnly: !0
    }, null) : ""])]), h = () => a("div", {
      class: [t.b("custom-item"), t.is("last-item", !0)]
    }, [a("div", {
      class: t.be("custom-item", "icon")
    }, [Q()]), a("div", {
      class: t.be("custom-item", "caption")
    }, [I("完成评审")])]), g = () => a("div", {
      class: t.b("dropdown-arrow"),
      style: ""
    }, [a("div", {
      class: t.be("dropdown-arrow", "vertical-line")
    }, null), a("div", {
      class: t.be("dropdown-arrow", "arrow-down")
    }, null)]), w = (s, o) => {
      const {
        context: c,
        params: v
      } = e, S = e.state.selectedData.findIndex((F) => F.srfkey === s.srfkey), T = [t.b("item"), t.is("active", S !== -1)];
      return a(m("iBizControlShell"), {
        class: T,
        data: s,
        modelData: o,
        context: c,
        params: v,
        onClick: () => e.onRowClick(s),
        onDblclick: () => e.onDbRowClick(s)
      }, null);
    }, y = (s) => {
      const o = e.state.selectedData.findIndex((v) => v.srfkey === s.srfkey), c = [t.b("item"), t.is("active", o !== -1)];
      return a("div", {
        class: c,
        key: s.srfkey,
        onClick: () => e.onRowClick(s),
        onDblclick: () => e.onDbRowClick(s)
      }, ["".concat(U(s.srfmajortext) ? "" : s.srfmajortext)]);
    }, L = (s) => {
      const o = r.modelData.itemLayoutPanel;
      return a(m("el-collapse-item"), {
        title: s.caption,
        class: t.be("group-content", "item")
      }, {
        default: () => [s.children.length > 0 ? s.children.map((c) => o ? w(c, o) : y(c)) : a("div", {
          class: t.bem("group-content", "item", "empty")
        }, [ibiz.i18n.t("app.noData")])]
      });
    }, z = () => {
      if (e.model.enableGroup && !e.state.isSimple)
        return a(m("el-collapse"), {
          class: [t.b("group-content"), t.b("content")]
        }, {
          default: () => {
            var o;
            return [(o = e.state.groups) == null ? void 0 : o.map((c) => a("div", {
              class: [t.b("scroll-item")]
            }, [L(c)]))];
          }
        });
      const s = r.modelData.itemLayoutPanel;
      return _(a("div", {
        class: [t.b("scroll"), t.b("content")],
        "infinite-scroll-distance": 10,
        "infinite-scroll-disabled": p.value
      }, [u(), g(), e.state.items.map((o) => a("div", {
        class: [t.b("scroll-item")]
      }, [s ? w(o, s) : y(o), g()])), h()]), [[q("infinite-scroll"), () => e.loadMore()]]);
    }, B = () => {
      var o;
      const s = (o = e.model.controls) == null ? void 0 : o.find((c) => c.name === "".concat(e.model.name, "_quicktoolbar"));
      if (s)
        return a(m("iBizToolbarControl"), {
          modelData: s,
          context: e.context,
          params: e.params
        }, null);
    };
    return {
      c: e,
      ns: t,
      renderListContent: z,
      renderNoData: () => {
        let s;
        const {
          isLoaded: o
        } = e.state;
        if (o)
          return o && a(m("iBizNoData"), {
            class: t.b("content"),
            text: e.model.emptyText,
            emptyTextLanguageRes: e.model.emptyTextLanguageRes
          }, P(s = B()) ? s : {
            default: () => [s]
          });
      },
      renderBatchToolBar: () => {
        var o;
        const s = (o = e.model.controls) == null ? void 0 : o.find((c) => c.name === "".concat(e.model.name, "_batchtoolbar"));
        if (s)
          return a("div", {
            class: t.b("batchtoolbar")
          }, [a(m("iBizToolbarControl"), {
            modelData: s,
            context: e.context,
            params: e.params
          }, null)]);
      },
      onPageChange: n,
      onPageRefresh: i,
      onPageSizeChange: l
    };
  },
  render() {
    const {
      enablePagingBar: r
    } = this.c.model;
    let e = null;
    return this.c.state.isCreated && (e = [this.c.state.items.length > 0 ? this.renderListContent() : this.renderNoData(), this.renderBatchToolBar(), r ? a(m("iBizPagination"), {
      class: this.ns.e("pagination"),
      total: this.c.state.total,
      curPage: this.c.state.curPage,
      size: this.c.state.size,
      totalPages: this.c.state.totalPages,
      onChange: this.onPageChange,
      onPageSizeChange: this.onPageSizeChange,
      onPageRefresh: this.onPageRefresh
    }, null) : null]), a(m("iBizControlBase"), {
      class: [this.ns.is("enable-page", !!r)],
      controller: this.c
    }, P(e) ? e : {
      default: () => [e]
    });
  }
});
class K {
  constructor() {
    d(this, "component", "IBizReviewListControl");
  }
}
const X = j(
  C,
  function(r) {
    r.component(C.name, C), x(
      "".concat(M.LIST, "_RENDER_REVIEW_LIST"),
      () => new K()
    );
  }
), ie = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(X);
  }
};
export {
  X as IBizReviewListControl,
  ie as default
};
