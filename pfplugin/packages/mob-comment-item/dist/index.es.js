import './style.css';
var S = Object.defineProperty;
var _ = (t, r, e) => r in t ? S(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var d = (t, r, e) => (_(t, typeof r != "symbol" ? r + "" : r, e), e);
import { EditorController as N, ScriptFactory as x, registerEditorProvider as y } from "@ibiz-template/runtime";
import { getRawProps as U, getEditorEmits as z, useNamespace as B, withInstall as L } from "@ibiz-template/vue3-util";
import { defineComponent as k, ref as m, computed as E, watch as D, createVNode as c, resolveComponent as h } from "vue";
const f = /* @__PURE__ */ k({
  name: "MobCommentItemRawItem",
  props: U(),
  emits: z(),
  setup(t) {
    var w, g, v, M;
    const r = B("raw"), e = t.controller, n = e.model, s = m(""), C = m(!1), I = m(""), b = m(), P = m(), T = m([]);
    let u = "TEXT", l = "";
    n.contentType && (u = n.contentType), (w = n.editorParams) != null && w.contenttype && (u = (g = n.editorParams) == null ? void 0 : g.contenttype), (v = n.editorParams) != null && v.template && (l = n.editorParams.template.replaceAll("//n", "\n")), (M = n.editorParams) != null && M.TEMPLATE && (l = n.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const A = E(() => !!(t.controlParams && t.controlParams.editmode === "hover")), O = (o) => o.replaceAll(/{"emoji":"(.+?)"}/g, (a, i) => {
      const p = decodeURIComponent(atob(i));
      return '<span class="emoji-tag">'.concat(p, "</span>");
    }).replaceAll(/<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g, (a, i) => {
      const p = decodeURIComponent(atob(i));
      return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(p, "</span>");
    });
    D(() => t.value, async (o, a) => {
      if (o !== a) {
        if ((typeof o == "string" || typeof o == "number") && (s.value = o), l && o) {
          let i = null;
          if (typeof o == "string")
            try {
              i = JSON.parse(o);
            } catch (p) {
              ibiz.log.error("JSON字符串转换错误");
            }
          s.value = await ibiz.util.hbs.render(l, i || o);
        }
        s.value = O(s.value ? "".concat(s.value) : ""), s.value = s.value.replaceAll("&quot;", '"');
      }
    }, {
      immediate: !0
    });
    const j = E(() => e.scriptCode ? t.controller.getPanelItemCustomHtml(e.scriptCode, {
      content: s.value
    }) : "");
    return {
      ns: r,
      c: e,
      rawRef: P,
      previewRef: b,
      content: s,
      previewUrl: I,
      type: u,
      showImg: C,
      template: l,
      htmlCode: j,
      showFormDefaultContent: A,
      previewSrcList: T,
      onClick: (o) => {
        var a, i;
        o.stopPropagation(), ((a = o.target) == null ? void 0 : a.tagName) === "IMG" && (C.value = !0, I.value = (i = o.target) == null ? void 0 : i.src);
      }
    };
  },
  render() {
    return c("div", {
      class: [this.ns.b(), this.ns.is("comment-item", !0), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)],
      onClick: this.onClick
    }, [this.htmlCode ? c("div", {
      ref: "rawRef",
      class: this.ns.e("script"),
      innerHTML: this.htmlCode
    }, null) : this.content && c(h("iBizRawItem"), {
      class: this.ns.b("content"),
      content: this.content,
      type: this.type
    }, null), c(h("van-popup"), {
      show: this.showImg,
      "onUpdate:show": (t) => this.showImg = t,
      class: this.ns.e("image-popup")
    }, {
      default: () => [c(h("iBizPreviewImage"), {
        url: this.previewUrl
      }, null)]
    })]);
  }
});
class F extends N {
  constructor() {
    super(...arguments);
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof MobCommentItemRawItemController
     */
    d(this, "scriptCode", "");
  }
  async onInit() {
    await super.onInit();
    const { SCRIPTCODE: e } = this.editorParams;
    e && (this.scriptCode = e);
  }
  /**
   * 获取面板绘制器自定义html
   *
   * @param {string} controlRenders
   * @param {(IData | undefined)} data
   * @return {*}  {(string | undefined)}
   * @memberof MobCommentItemRawItemController
   */
  getPanelItemCustomHtml(e, n) {
    if (e)
      return x.execScriptFn({ data: n || {} }, e, {
        singleRowReturn: !0,
        isAsync: !1
      });
  }
}
class R {
  constructor() {
    d(this, "formEditor", "MobCommentItemRawItem");
    d(this, "gridEditor", "MobCommentItemRawItem");
  }
  async createController(r, e) {
    const n = new F(
      r,
      e
    );
    return await n.init(), n;
  }
}
const H = L(
  f,
  function(t) {
    t.component(f.name, f), y(
      "RAW_MOB_COMMENT_ITEM",
      () => new R()
    ), y(
      "EDITOR_CUSTOMSTYLE_MOB_COMMENT_ITEM",
      () => new R()
    );
  }
), X = {
  install(t) {
    t.use(H);
  }
};
export {
  H as IBizMobCommentItemRawItem,
  X as default
};
