import './style.css';
var $ = Object.defineProperty;
var z = (s, r, e) => r in s ? $(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var f = (s, r, e) => (z(s, typeof r != "symbol" ? r + "" : r, e), e);
import { EditorController as H, ScriptFactory as U, PanelItemEventName as F, OpenAppViewCommand as J, registerEditorProvider as R } from "@ibiz-template/runtime";
import { getRawProps as K, getEditorEmits as q, useNamespace as B, withInstall as V } from "@ibiz-template/vue3-util";
import { defineComponent as W, ref as h, computed as T, watch as k, createVNode as I, resolveComponent as S, nextTick as w } from "vue";
import { clone as G } from "ramda";
const v = /* @__PURE__ */ W({
  name: "CommentItemRawItem",
  props: K(),
  emits: {
    ...q(),
    /** 点击事件 */
    click: (s, r) => !0
  },
  setup(s) {
    var L, P, _, b;
    const r = B("raw"), e = s.controller, t = e.model, i = h(""), l = h(""), c = h(), d = h(), o = h([]);
    let C = "TEXT", u = "";
    t.contentType && (C = t.contentType), (L = t.editorParams) != null && L.contenttype && (C = (P = t.editorParams) == null ? void 0 : P.contenttype), (_ = t.editorParams) != null && _.template && (u = t.editorParams.template.replaceAll("//n", "\n")), (b = t.editorParams) != null && b.TEMPLATE && (u = t.editorParams.TEMPLATE.replaceAll("//n", "\n"));
    const O = T(() => !!(s.controlParams && s.controlParams.editmode === "hover")), x = (n) => n.replaceAll(/{"emoji":"(.+?)"}/g, (m, a) => {
      const p = decodeURIComponent(atob(a));
      return '<span class="emoji-tag">'.concat(p, "</span>");
    }).replaceAll(/<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g, (m, a) => {
      const p = decodeURIComponent(atob(a));
      return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(p, "</span>");
    });
    k(() => s.value, async (n, m) => {
      if (n !== m) {
        if ((typeof n == "string" || typeof n == "number") && (i.value = n), u && n) {
          let a = null;
          if (typeof n == "string")
            try {
              a = JSON.parse(n);
            } catch (p) {
              ibiz.log.error("JSON字符串转换错误");
            }
          i.value = await ibiz.util.hbs.render(u, a || n);
        }
        i.value = x(i.value ? "".concat(i.value) : "");
      }
    }, {
      immediate: !0
    });
    const y = T(() => e.scriptCode ? s.controller.getPanelItemCustomHtml(e.scriptCode, {
      content: i.value
    }) : ""), A = async (n) => {
      if (l.value = n, o.value = [n], await w(), c.value) {
        const {
          container: m
        } = c.value.$refs;
        m && m.children[0].click();
      }
    }, M = async () => {
      await w(), d.value && d.value.querySelectorAll("img").forEach((m) => {
        m.onclick = (a) => {
          const p = a.target;
          p && A(p.src);
        };
      });
    }, g = (n) => {
      if (c.value) {
        const {
          container: m
        } = c.value.$refs;
        if (m) {
          const a = m.querySelector(".el-image-viewer__wrapper");
          a == null || a[n]("keydown", E);
        }
      }
    }, E = async (n) => {
      (n.key === "Escape" || n.keyCode === 27) && (n.stopPropagation(), n.preventDefault(), await w(), g("removeEventListener"), o.value = []);
    }, j = async () => {
      await w(), g("addEventListener");
    }, D = (n) => {
      n.stopPropagation(), n.preventDefault(), e.handleClick(n);
    };
    return k(() => y, () => {
      M();
    }, {
      immediate: !0
    }), {
      ns: r,
      c: e,
      rawRef: d,
      previewRef: c,
      content: i,
      previewUrl: l,
      type: C,
      template: u,
      htmlCode: y,
      showFormDefaultContent: O,
      previewSrcList: o,
      onShow: j,
      handleKeyPress: E,
      handleClick: D
    };
  },
  render() {
    return I("div", {
      class: [this.ns.b(), this.ns.is("comment-item", !0), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("show-default", this.showFormDefaultContent)]
    }, [this.htmlCode ? I("div", {
      ref: "rawRef",
      onClick: this.handleClick,
      class: this.ns.e("script"),
      innerHTML: this.htmlCode
    }, null) : this.content && I(S("iBizRawItem"), {
      class: this.ns.b("content"),
      content: this.content,
      type: this.type
    }, null), I(S("el-image"), {
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
class X extends H {
  constructor() {
    super(...arguments);
    /**
     * 绘制器脚本代码
     *
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    f(this, "scriptCode", "");
    /**
     * @description 链接视图id
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    f(this, "linkViewId", "plmweb.recent_redirect_view");
    /**
     * @description 图标代码表标识
     * @type {string}
     * @memberof CommentItemRawItemEditorController
     */
    f(this, "iconCodeListId", "plmweb.base__recent_visite");
    /**
     * @description 代码表数据
     * @type {readonly}
     * @memberof CommentItemRawItemEditorController
     */
    f(this, "codeListItems", []);
  }
  async onInit() {
    await super.onInit();
    const { SCRIPTCODE: e, LINKVIEWID: t, ICONCODELISTID: i } = this.editorParams;
    e && (this.scriptCode = e), t && (this.linkViewId = t), i && (this.iconCodeListId = i), this.codeListItems = await this.loadCodeList(this.iconCodeListId);
  }
  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<readonly CodeListItem[]>)}
   * @memberof CommentItemRawItemEditorController
   */
  async loadCodeList(e) {
    return await ibiz.hub.getApp(this.context.srfappid).codeList.get(
      e,
      this.context,
      this.params
    );
  }
  /**
   * 获取面板绘制器自定义html
   *
   * @param {string} controlRenders
   * @param {(IData | undefined)} data
   * @return {*}  {(string | undefined)}
   * @memberof CommentItemRawItemEditorController
   */
  getPanelItemCustomHtml(e, t) {
    if (e)
      return U.execScriptFn(
        { data: t || {}, controller: this },
        e,
        {
          singleRowReturn: !0,
          isAsync: !1
        }
      );
  }
  findCodeListItem(e, t) {
    if (e) {
      const i = e.find((l) => l.value == t);
      if (i)
        return i;
      for (let l = 0; l < e.length; l++) {
        const c = this.findCodeListItem(
          e[l].children,
          t
        );
        if (c)
          return c;
      }
    }
  }
  /**
   * @description 解析评论节点
   * @param {IData} data
   * @return {*}
   * @memberof CommentItemRawItemEditorController
   */
  parseCommentTag(e) {
    let { icon: t } = e;
    if (!e.icon && e.owner_subtype && this.codeListItems.length) {
      const i = this.findCodeListItem(
        this.codeListItems,
        e.owner_subtype
      );
      i && i.sysImage && (t = i.sysImage.rawContent || "");
    }
    return "<span class='comment-tag' data-value='".concat(JSON.stringify(
      e
    ), "'>").concat(t, " ").concat(e.identifier, " ").concat(e.name, "</span>");
  }
  /**
   * @description 点击事件
   * @param {MouseEvent} event
   * @memberof CommentItemRawItemEditorController
   */
  onClick(e) {
    const { panel: t } = this.parent;
    t && t.evt.emit("onPanelItemEvent", {
      panelItemName: this.model.id,
      panelItemEventName: F.CLICK,
      event: e
    });
  }
  /**
   * @description 处理点击事件
   * @param {MouseEvent} event
   * @return {*}  {void}
   * @memberof CommentItemRawItemEditorController
   */
  handleClick(e) {
    const { classList: t, dataset: i } = e.target;
    if (t && t.contains("comment-tag")) {
      const l = i.value || "", c = this.context.clone(), d = G(this.params), o = JSON.parse(l);
      if (!o.owner_type)
        return;
      c.srfkey = o.id, o.owner_subtype === "page" ? d.article_page = o.owner_id : d[o.owner_subtype] = o.owner_id, d[o.owner_type] = o.recent_parent, delete o.script, delete o.icon, delete o.id, Object.assign(d, o), o && this.linkViewId && ibiz.commands.execute(
        J.TAG,
        this.linkViewId,
        c,
        d
      );
    }
  }
}
class N {
  constructor() {
    f(this, "formEditor", "CommentItemRawItem");
    f(this, "gridEditor", "CommentItemRawItem");
  }
  async createController(r, e) {
    const t = new X(
      r,
      e
    );
    return await t.init(), t;
  }
}
const Y = V(
  v,
  function(s) {
    s.component(v.name, v), R(
      "RAW_COMMENT_ITEM",
      () => new N()
    ), R(
      "EDITOR_CUSTOMSTYLE_COMMENT_ITEM",
      () => new N()
    );
  }
), ie = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(Y);
  }
};
export {
  Y as IBizCommentItemRawItem,
  ie as default
};
