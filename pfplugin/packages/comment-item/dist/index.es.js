import './style.css';
var N = Object.defineProperty;
var D = (o, n, t) => n in o ? N(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t;
var d = (o, n, t) => (D(o, typeof n != "symbol" ? n + "" : n, t), t);
import { EditorController as F, ScriptFactory as H, registerEditorProvider as O } from "@ibiz-template/runtime";
import { getRawProps as _, getEditorEmits as q, useNamespace as B, withInstall as J } from "@ibiz-template/vue3-util";
import { defineComponent as U, ref as m, computed as b, watch as k, createVNode as u, resolveComponent as L, nextTick as f } from "vue";
const y = /* @__PURE__ */ U({
  name: "CommentItemRawItem",
  props: _(),
  emits: q(),
  setup(o) {
    var R, g, T, S;
    const n = B("raw"), t = o.controller, r = t.model, l = m(""), C = m(""), a = m(), p = m(), h = m([]);
    let w = "TEXT", c = "";
    r.contentType && (w = r.contentType), (R = r.editorParams) != null && R.contenttype && (w = (g = r.editorParams) == null ? void 0 : g.contenttype), (T = r.editorParams) != null && T.template && (c = r.editorParams.template.replaceAll("//n", "\n")), (S = r.editorParams) != null && S.TEMPLATE && (c = r.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const A = b(() => !!(o.controlParams && o.controlParams.editmode === "hover"));
    k(() => o.value, async (e, i) => {
      if (e !== i && ((typeof e == "string" || typeof e == "number") && (l.value = e), c && e)) {
        let s = null;
        if (typeof e == "string")
          try {
            s = JSON.parse(e);
          } catch (v) {
            ibiz.log.error("JSON字符串转换错误");
          }
        l.value = await ibiz.util.hbs.render(c, s || e);
      }
    }, {
      immediate: !0
    });
    const I = b(() => t.scriptCode ? o.controller.getPanelItemCustomHtml(t.scriptCode, {
      content: l.value
    }) : ""), M = async (e) => {
      if (C.value = e, h.value = [e], await f(), a.value) {
        const {
          container: i
        } = a.value.$refs;
        i && i.children[0].click();
      }
    }, x = async () => {
      await f(), p.value && p.value.querySelectorAll("img").forEach((i) => {
        i.onclick = (s) => {
          const v = s.target;
          v && M(v.src);
        };
      });
    }, E = (e) => {
      if (a.value) {
        const {
          container: i
        } = a.value.$refs;
        if (i) {
          const s = i.querySelector(".el-image-viewer__wrapper");
          s == null || s[e]("keydown", P);
        }
      }
    }, P = async (e) => {
      (e.key === "Escape" || e.keyCode === 27) && (e.stopPropagation(), e.preventDefault(), await f(), E("removeEventListener"), h.value = []);
    }, z = async () => {
      await f(), E("addEventListener");
    };
    return k(() => I, () => {
      x();
    }, {
      immediate: !0
    }), {
      ns: n,
      c: t,
      rawRef: p,
      previewRef: a,
      content: l,
      previewUrl: C,
      type: w,
      template: c,
      htmlCode: I,
      showFormDefaultContent: A,
      previewSrcList: h,
      onShow: z,
      handleKeyPress: P
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
class $ extends F {
  constructor() {
    super(...arguments);
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    d(this, "scriptCode", "");
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
  getPanelItemCustomHtml(t, r) {
    if (t)
      return H.execScriptFn({ data: r || {} }, t, {
        singleRowReturn: !0,
        isAsync: !1
      });
  }
}
class j {
  constructor() {
    d(this, "formEditor", "CommentItemRawItem");
    d(this, "gridEditor", "CommentItemRawItem");
  }
  async createController(n, t) {
    const r = new $(
      n,
      t
    );
    return await r.init(), r;
  }
}
const K = J(
  y,
  function(o) {
    o.component(y.name, y), O(
      "RAW_COMMENT_ITEM",
      () => new j()
    );
  }
), Y = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(o) {
    o.use(K);
  }
};
export {
  K as IBizCommentItemRawItem,
  Y as default
};
