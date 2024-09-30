import './style.css';
var z = Object.defineProperty;
var D = (o, r, t) => r in o ? z(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var p = (o, r, t) => (D(o, typeof r != "symbol" ? r + "" : r, t), t);
import { EditorController as H, ScriptFactory as U, registerEditorProvider as b } from "@ibiz-template/runtime";
import { getRawProps as $, getEditorEmits as F, useNamespace as q, withInstall as B } from "@ibiz-template/vue3-util";
import { defineComponent as J, ref as d, computed as M, watch as A, createVNode as u, resolveComponent as L, nextTick as f } from "vue";
const C = /* @__PURE__ */ J({
  name: "CommentItemRawItem",
  props: $(),
  emits: F(),
  setup(o) {
    var R, P, T, S;
    const r = q("raw"), t = o.controller, n = t.model, a = d(""), y = d(""), m = d(), h = d(), w = d([]);
    let v = "TEXT", l = "";
    n.contentType && (v = n.contentType), (R = n.editorParams) != null && R.contenttype && (v = (P = n.editorParams) == null ? void 0 : P.contenttype), (T = n.editorParams) != null && T.template && (l = n.editorParams.template.replaceAll("//n", "\n")), (S = n.editorParams) != null && S.TEMPLATE && (l = n.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const k = M(() => !!(o.controlParams && o.controlParams.editmode === "hover")), x = (e) => e.replaceAll(/{"emoji":"(.+?)"}/g, (i, s) => {
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
        a.value = x(a.value ? "".concat(a.value) : "");
      }
    }, {
      immediate: !0
    });
    const I = M(() => t.scriptCode ? o.controller.getPanelItemCustomHtml(t.scriptCode, {
      content: a.value
    }) : ""), O = async (e) => {
      if (y.value = e, w.value = [e], await f(), m.value) {
        const {
          container: i
        } = m.value.$refs;
        i && i.children[0].click();
      }
    }, _ = async () => {
      await f(), h.value && h.value.querySelectorAll("img").forEach((i) => {
        i.onclick = (s) => {
          const c = s.target;
          c && O(c.src);
        };
      });
    }, E = (e) => {
      if (m.value) {
        const {
          container: i
        } = m.value.$refs;
        if (i) {
          const s = i.querySelector(".el-image-viewer__wrapper");
          s == null || s[e]("keydown", g);
        }
      }
    }, g = async (e) => {
      (e.key === "Escape" || e.keyCode === 27) && (e.stopPropagation(), e.preventDefault(), await f(), E("removeEventListener"), w.value = []);
    }, N = async () => {
      await f(), E("addEventListener");
    };
    return A(() => I, () => {
      _();
    }, {
      immediate: !0
    }), {
      ns: r,
      c: t,
      rawRef: h,
      previewRef: m,
      content: a,
      previewUrl: y,
      type: v,
      template: l,
      htmlCode: I,
      showFormDefaultContent: k,
      previewSrcList: w,
      onShow: N,
      handleKeyPress: g
    };
  },
  render() {
    return u("div", {
      class: [this.ns.b(), this.ns.is("comment-item", !0), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.htmlCode ? u("div", {
      ref: "rawRef",
      class: this.ns.e("script"),
      innerHTML: this.htmlCode
    }, null) : this.content && u(L("iBizRawItem"), {
      class: this.ns.b("content"),
      content: this.content,
      type: this.type
    }, null), u(L("el-image"), {
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
class K extends H {
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
      return U.execScriptFn({ data: n || {} }, t, {
        singleRowReturn: !0,
        isAsync: !1
      });
  }
}
class j {
  constructor() {
    p(this, "formEditor", "CommentItemRawItem");
    p(this, "gridEditor", "CommentItemRawItem");
  }
  async createController(r, t) {
    const n = new K(
      r,
      t
    );
    return await n.init(), n;
  }
}
const W = B(
  C,
  function(o) {
    o.component(C.name, C), b(
      "RAW_COMMENT_ITEM",
      () => new j()
    ), b(
      "EDITOR_CUSTOMSTYLE_COMMENT_ITEM",
      () => new j()
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
