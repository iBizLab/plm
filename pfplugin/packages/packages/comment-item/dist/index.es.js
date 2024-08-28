import './style.css';
var H = Object.defineProperty;
var N = (o, r, t) => r in o ? H(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var p = (o, r, t) => (N(o, typeof r != "symbol" ? r + "" : r, t), t);
import { EditorController as $, ScriptFactory as D, registerEditorProvider as F } from "@ibiz-template/runtime";
import { getRawProps as O, getEditorEmits as U, useNamespace as _, withInstall as q } from "@ibiz-template/vue3-util";
import { defineComponent as B, ref as d, computed as b, watch as A, createVNode as u, resolveComponent as j, nextTick as f } from "vue";
const y = /* @__PURE__ */ B({
  name: "CommentItemRawItem",
  props: O(),
  emits: U(),
  setup(o) {
    var P, R, T, S;
    const r = _("raw"), t = o.controller, n = t.model, a = d(""), C = d(""), m = d(), h = d(), w = d([]);
    let v = "TEXT", l = "";
    n.contentType && (v = n.contentType), (P = n.editorParams) != null && P.contenttype && (v = (R = n.editorParams) == null ? void 0 : R.contenttype), (T = n.editorParams) != null && T.template && (l = n.editorParams.template.replaceAll("//n", "\n")), (S = n.editorParams) != null && S.TEMPLATE && (l = n.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const k = b(() => !!(o.controlParams && o.controlParams.editmode === "hover")), L = (e) => e.replaceAll(/{"emoji":"(.+?)"}/g, (i, s) => {
      const c = decodeURIComponent(atob(s));
      return '<span class="emoji-tag">'.concat(c, "</span>");
    }).replaceAll(/<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g, (i, s) => {
      const c = decodeURIComponent(atob(s));
      return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(c, "</span>");
    });
    A(() => o.value, async (e, i) => {
      if (e !== i) {
        if ((typeof e == "string" || typeof e == "number") && (a.value = e), l && e) {
          let s = null;
          if (typeof e == "string")
            try {
              s = JSON.parse(e);
            } catch (c) {
              ibiz.log.error("JSON字符串转换错误");
            }
          a.value = await ibiz.util.hbs.render(l, s || e);
        }
        a.value = L(a.value ? "".concat(a.value) : "");
      }
    }, {
      immediate: !0
    });
    const I = b(() => t.scriptCode ? o.controller.getPanelItemCustomHtml(t.scriptCode, {
      content: a.value
    }) : ""), x = async (e) => {
      if (C.value = e, w.value = [e], await f(), m.value) {
        const {
          container: i
        } = m.value.$refs;
        i && i.children[0].click();
      }
    }, M = async () => {
      await f(), h.value && h.value.querySelectorAll("img").forEach((i) => {
        i.onclick = (s) => {
          const c = s.target;
          c && x(c.src);
        };
      });
    }, g = (e) => {
      if (m.value) {
        const {
          container: i
        } = m.value.$refs;
        if (i) {
          const s = i.querySelector(".el-image-viewer__wrapper");
          s == null || s[e]("keydown", E);
        }
      }
    }, E = async (e) => {
      (e.key === "Escape" || e.keyCode === 27) && (e.stopPropagation(), e.preventDefault(), await f(), g("removeEventListener"), w.value = []);
    }, z = async () => {
      await f(), g("addEventListener");
    };
    return A(() => I, () => {
      M();
    }, {
      immediate: !0
    }), {
      ns: r,
      c: t,
      rawRef: h,
      previewRef: m,
      content: a,
      previewUrl: C,
      type: v,
      template: l,
      htmlCode: I,
      showFormDefaultContent: k,
      previewSrcList: w,
      onShow: z,
      handleKeyPress: E
    };
  },
  render() {
    return u("div", {
      class: [this.ns.b(), this.ns.is("comment-item", !0), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.htmlCode ? u("div", {
      ref: "rawRef",
      class: this.ns.e("script"),
      innerHTML: this.htmlCode
    }, null) : this.content && u(j("iBizRawItem"), {
      class: this.ns.b("content"),
      content: this.content,
      type: this.type
    }, null), u(j("el-image"), {
      class: this.ns.e("preview"),
      ref: "previewRef",
      "zoom-rate": 1.1,
      src: this.previewUrl,
      "preview-src-list": this.previewSrcList,
      "hide-on-click-modal": !0,
      onShow: this.onShow,
      fit: "cover"
    }, null)]);
  }
});
class J extends $ {
  constructor() {
    super(...arguments);
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    p(this, "scriptCode", "");
  }
  async onInit() {
    await super.onInit();
    const { SCRIPTCODE: t } = this.editorParams;
    t && (this.scriptCode = t);
  }
  /**
   * 获取面板绘制器自定义html
   *
   * @param {string} controlRenders
   * @param {(IData | undefined)} data
   * @return {*}  {(string | undefined)}
   * @memberof CommentItemRawItemEditorController
   */
  getPanelItemCustomHtml(t, n) {
    if (t)
      return D.execScriptFn({ data: n || {} }, t, {
        singleRowReturn: !0,
        isAsync: !1
      });
  }
}
class K {
  constructor() {
    p(this, "formEditor", "CommentItemRawItem");
    p(this, "gridEditor", "CommentItemRawItem");
  }
  async createController(r, t) {
    const n = new J(
      r,
      t
    );
    return await n.init(), n;
  }
}
const W = q(
  y,
  function(o) {
    o.component(y.name, y), F(
      "RAW_COMMENT_ITEM",
      () => new K()
    );
  }
), Z = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(W);
  }
};
export {
  W as IBizCommentItemRawItem,
  Z as default
};
