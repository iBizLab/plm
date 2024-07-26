import './style.css';
var kt = Object.defineProperty;
var Mt = (i, t, e) => t in i ? kt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (Mt(i, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as ue, ref as g, shallowRef as ct, watch as de, onBeforeUnmount as ke, onMounted as Be, nextTick as z, createVNode as f, resolveComponent as $, createTextVNode as K, onUnmounted as xt, computed as dt, withDirectives as ut, resolveDirective as Re, h as nt, defineAsyncComponent as Lt } from "vue";
import { ScriptFactory as q, convertNavData as Ue, EditorController as Pt, ControllerEvent as Tt, getDeACMode as Ht, registerEditorProvider as Ft } from "@ibiz-template/runtime";
import { getHtmlProps as it, useNamespace as he, useClickOutside as Nt, getEditorEmits as At, withInstall as It } from "@ibiz-template/vue3-util";
import { Editor as ht, Toolbar as mt } from "@wangeditor/editor-for-vue";
import { SlateEditor as ce, SlateElement as ft, SlateRange as ze, SlateTransforms as Oe, SlateNode as De, SlateText as Se, Boot as D, DomEditor as V, createEditor as Ot } from "@wangeditor/editor";
import { getCookie as pt, createUUID as Me } from "qx-util";
import { isNil as vt } from "ramda";
import { CoreConst as gt, debounce as yt, awaitTimeout as Dt, RuntimeError as ne, listenJSEvent as xe, NOOP as _, strToBase64 as Rt, base64ToStr as Ut, downloadFileFromBlob as zt } from "@ibiz-template/core";
import { ElMessageBox as wt } from "element-plus";
import { debounce as Ct, toNumber as $t } from "lodash-es";
class bt {
  constructor(t, e) {
    /**
     * 模态实例
     * @memberof ModalUtil
     */
    o(this, "modalOrPanel");
    /**
     * 富文本Ref
     * @memberof ModalUtil
     */
    o(this, "htmlRef");
    this.modalOrPanel = t, this.htmlRef = e, this.calcModalPosition(), window.addEventListener("resize", this.handleResize.bind(this));
  }
  /**
   * 计算模态定位
   * @memberof ModalUtil
   */
  calcModalPosition() {
    if (!["dropPanel", "selectList"].includes(this.modalOrPanel.type))
      return;
    const { $elem: e } = this.modalOrPanel, s = e[0], n = this.htmlRef.$el, a = n.querySelector(".w-e-bar"), l = s.previousElementSibling, d = l.getAttribute("data-menu-key"), u = s.parentNode.parentNode.parentNode;
    if (!["bgColor", "color", "headerSelect"].includes(d) || !n || !a || !l || u.getAttribute("data-w-e-toolbar") === "true")
      return;
    const m = s.clientWidth, E = s.clientHeight, k = a.clientHeight, M = l.getBoundingClientRect(), N = M.bottom, H = M.right, A = M.top, I = M.left, y = "".concat(A + k, "px"), w = "".concat(I, "px"), C = "".concat(N - E - k, "px"), b = "".concat(H - m, "px"), x = { position: "fixed", left: w, top: y }, B = window.innerWidth, O = window.innerHeight;
    B - I < m && Object.assign(x, { left: b }), O - A - k < E && Object.assign(x, { top: C }), Object.assign(s.style, { top: "", bottom: "", left: "", right: "" }), Object.assign(s.style, x);
  }
  /**
   * 监听窗口变化
   * @memberof ModalUtil
   */
  handleResize() {
    this.calcModalPosition();
  }
  /**
   * 销毁
   * @memberof ModalUtil
   */
  destroy() {
    window.removeEventListener("resize", this.handleResize);
  }
}
const $e = /* @__PURE__ */ ue({
  name: "IBizHtmlContent",
  props: it(),
  emits: ["change", "blur", "focus", "enter", "infoTextChange", "link"],
  setup(i, {
    emit: t
  }) {
    const e = he("html"), s = i.controller, n = g(), a = g({});
    let l = null, d = 0;
    const u = g(), p = g(), m = ct(), E = g(), k = g(""), M = g({
      Authorization: "Bearer ".concat(pt(gt.TOKEN))
    }), N = g(""), H = g(""), A = g(!0), I = g(!1), y = g(!1), w = g(!1), C = g(!1), b = g(""), x = g([]), B = g(!1), O = s.model;
    O.editorParams && (O.editorParams.enableEdit && (I.value = !0, y.value = !0, A.value = s.toBoolean(O.editorParams.enableEdit) && !i.readonly && !i.disabled), O.editorParams.enableFullScreen && (w.value = s.toBoolean(O.editorParams.enableFullScreen)));
    const Z = (c) => {
      if (!m.value)
        return;
      const {
        eventArg: v
      } = c;
      v && (m.value.setHtml(v), m.value.focus(!0), t("focus"));
    }, X = () => {
      m.value && (m.value.blur(), m.value.setHtml(""));
    }, oe = () => {
      m.value && (m.value.focus(!0), t("focus"));
    };
    s.evt.on("setHtml", Z), s.evt.on("clear", X), s.evt.on("onSetReply", oe), de(() => i.data, (c) => {
      if (c) {
        const v = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, c);
        N.value = v.uploadUrl, H.value = v.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const W = (c, v) => {
      if (v)
        return !0;
    }, me = (c) => c, ee = {
      toolbarKeys: [{
        key: "group-add-style",
        // 必填，要以 group 开头
        title: "添加",
        // 必填
        iconSvg: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="arvaction/plus-circle-fill" stroke-width="1" fill-rule="evenodd"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.6-8.6H4v1.2h3.4V12h1.2V8.6H12V7.4H8.6V4H7.4v3.4z" id="arv形状结合"></path></g></svg>',
        // 可选
        menuKeys: ["attachments", "codesnippet", "page"]
      }, "|", {
        key: "group-inline-style",
        // 必填，要以 group 开头
        title: "文本格式",
        // 必填
        iconSvg: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="ahdeditor/color-tt" stroke-width="1" fill-rule="evenodd"><path id="ahdsecondary-color" d="M1.999 15.011h11.998V13.81H1.999z"></path><path d="M6.034 7.59h4.104L8.086 2.297 6.034 7.59zm-.465 1.2l-1.437 3.707H2.845L7.301 1h1.287l-.001.004h.286l4.454 11.492h-1.288L10.603 8.79H5.569z" id="ahd合并形状"></path></g></svg>',
        // 可选
        menuKeys: ["bold", "italic", "underline", "through", "code", "numberedList", "bulletedList", "insertLink"]
      }, "codeBlock", "mention", "marker", "emoji"]
    };
    s.chatCompletion && ee.toolbarKeys.push("aichart");
    const re = {
      placeholder: s.placeHolder,
      readOnly: I.value ? y.value : i.readonly,
      MENU_CONF: {
        // 图片上传
        uploadImage: {
          // 上传地址
          server: N.value,
          // form-data fieldName ，默认值 'wangeditor-uploaded-image'
          fieldName: "file",
          // 单个文件的最大体积限制，默认为 2M
          maxFileSize: 10 * 1024 * 1024,
          // 10M
          // 最多可上传几个文件，默认为 100
          maxNumberOfFiles: 10,
          // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
          allowedFileTypes: [],
          // 自定义增加 http  header
          headers: M.value,
          // 跨域是否传递 cookie ，默认为 false
          withCredentials: !0,
          // 上传之前触发
          onBeforeUpload(c) {
            return c;
          },
          // 上传进度的回调函数
          onProgress(c) {
            console.log("progress", c);
          },
          // 单个文件上传成功之后
          onSuccess(c, v) {
            console.log("".concat(c.name, " 上传成功"), v);
          },
          // 单个文件上传失败
          onFailed(c, v) {
            console.log("".concat(c.name, " 上传失败"), v);
          },
          // 上传错误，或者触发 timeout 超时
          onError(c, v, L) {
            console.log("".concat(c.name, " 上传出错"), v, L);
          },
          // 自定义插入图片
          async customInsert(c, v) {
            const L = H.value.replace("%fileId%", c.id), F = c.filename;
            v(L, F, "");
          }
        },
        // 插入链接
        insertLink: {
          checkLink: W,
          // 也支持 async 函数
          parseLinkUrl: me
          // 也支持 async 函数
        },
        // 更新链接
        editLink: {
          checkLink: W,
          // 也支持 async 函数
          parseLinkUrl: me
          // 也支持 async 函数
        }
      },
      hoverbarKeys: {
        link: {
          menuKeys: ["editLink", "unLink", "customViewLink"]
        }
      }
    }, je = async (c) => {
      const v = c.src;
      if (y.value)
        J(v);
      else {
        const L = ce.nodes(m.value, {
          match: (F) => !!(ft.isElement(F) && F.type === "image"),
          universal: !0
        });
        if (L)
          for (const F of L) {
            const [r] = F;
            r.type === "image" && v.endsWith(r.src) && J(r.src);
          }
      }
    }, J = async (c) => {
      if (b.value = c, x.value = [c], await z(), E.value) {
        const {
          container: v
        } = E.value.$refs;
        v && v.children[0].click();
      }
    }, Le = (c) => {
      const v = c.getEditableContainer();
      v && v.querySelectorAll("img").forEach((F) => {
        F.onclick = (r) => {
          const h = r.target;
          h && je(h);
        };
      });
    }, fe = (c) => {
      if (E.value) {
        const {
          container: v
        } = E.value.$refs;
        if (v) {
          const L = v.querySelector(".el-image-viewer__wrapper");
          L == null || L[c]("keydown", Ve);
        }
      }
    }, Ve = async (c) => {
      (c.key === "Escape" || c.keyCode === 27) && (c.stopPropagation(), c.preventDefault(), await z(), fe("removeEventListener"), x.value = []);
    }, Pe = async () => {
      await z(), fe("addEventListener");
    };
    let pe;
    const Te = async () => {
      var c;
      if (s.deService) {
        const v = await import("@ibiz-template-plugin/ai-chat"), L = v.chat || v.default.chat;
        pe = L;
        const F = L.create({
          question: async (h) => {
            var T;
            const S = Me();
            return await ((T = s.deService) == null ? void 0 : T.aiChatSse((P) => {
              if (ibiz.log.info("aiChatSse", P), P.actionstate === 20 && P.actionresult)
                F.addMessage({
                  messageid: S,
                  state: P.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: P.actionresult
                });
              else if (P.actionstate === 30 && P.actionresult) {
                const j = JSON.parse(P.actionresult), {
                  choices: R
                } = j;
                R && R.length > 0 && F.replaceMessage({
                  messageid: S,
                  state: P.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: R[0].content || ""
                });
              } else
                P.actionstate === 40 && F.replaceMessage({
                  messageid: S,
                  state: P.actionstate,
                  type: "ERROR",
                  role: "ASSISTANT",
                  content: P.actionresult
                });
            }, s.context, {}, {
              messages: h
            })), F.addMessage({
              messageid: S,
              state: 10,
              type: "DEFAULT",
              role: "ASSISTANT",
              content: ""
            }), !0;
          },
          action: (h, S) => {
            h === "backfill" && (t("change", S.content), B.value = !0);
          },
          closed: () => {
            m.value && i.value && m.value && m.value.focus(!0);
          }
        }), r = await ((c = s.deService) == null ? void 0 : c.aiChatHistory(s.context, {}));
        r.data && Array.isArray(r.data) && r.data.forEach((h) => {
          const S = {
            messageid: Me(),
            state: 30,
            type: "DEFAULT",
            role: h.role,
            content: h.content
          };
          F.addMessage(S);
        });
      }
    };
    ke(() => {
      pe && pe.close();
      const c = m.value;
      c != null && c.destroy();
    });
    const He = (c) => {
      m.value = c;
      let v;
      c.on("modalOrPanelShow", (L) => {
        v = new bt(L, p.value);
      }), c.on("modalOrPanelHide", () => {
        v && v.destroy();
      }), c.setHtml(k.value), c.on("aiClick", () => {
        Te();
      }), s.onCreated(m.value, i.data, ee), s.onLineEditing(m.value);
    }, Fe = (c) => {
      const v = c.getHtml();
      Le(c);
      const L = v === "<p><br></p>" ? "" : v;
      L === i.value || L === "" && vt(i.value) || I.value || (t("change", L), s.evt.emit("onChange", {
        eventArg: L
      }));
    }, ve = (c) => {
      s.evt.off("setHtml", Z), s.evt.off("clear", X), s.evt.off("onSetReply", oe);
    }, Ne = () => {
      t("focus"), s.evt.emit("onFocus", {
        eventArg: i.value
      });
    }, ge = () => {
      t("blur"), s.evt.emit("onBlur", {
        eventArg: i.value
      });
    }, ye = (c, v) => {
      alert("【自定义提示】".concat(v, " - ").concat(c));
    }, we = (c, v, L) => {
      L(!0);
    }, Ae = (c) => {
      const v = m.value;
      v != null && v.insertText(c);
    }, Ie = () => {
      const c = m.value;
      c != null && console.log(c.getHtml());
    }, te = () => {
      const c = m.value;
      c != null && c.disable();
    }, se = () => {
      const c = m.value;
      c != null && c.enable();
    }, qe = () => {
      if (n.value && u.value) {
        const c = n.value.offsetHeight;
        l = new ResizeObserver((v) => {
          const {
            height: L
          } = v[0].contentRect;
          if (L !== d) {
            const F = {
              height: "".concat(c - v[0].contentRect.height, "px")
            };
            a.value = e.cssVarBlock(F), d = L;
          }
        }), l.observe(u.value.selector);
      }
    }, Je = () => {
      var c, v;
      if (i.value) {
        const L = i.value.indexOf("</p>");
        if (L >= 0) {
          const F = (c = m.value.selection.anchor) == null ? void 0 : c.offset, r = (v = m.value.selection.anchor) == null ? void 0 : v.path;
          F === 0 && r.length > 0 && r[0] === 0 && m.value.move(L - 3);
        }
      }
    }, Q = () => {
      y.value = !y.value, y.value ? te() : (se(), m.value.focus(), Je());
    }, le = () => f("div", {
      class: e.be("message", "message-content")
    }, [f("p", null, [K("确定要取消编辑吗？")]), f("p", {
      class: e.bem("message", "message-content", "message-tip")
    }, [K("取消编辑将无法保存修改的内容，且不能找回。")])]), Ke = () => {
      i.value !== k.value ? wt({
        title: "确认取消",
        type: "warning",
        customClass: e.b("message"),
        message: le(),
        showCancelButton: !0,
        cancelButtonClass: e.be("message", "message-cancel"),
        confirmButtonClass: e.be("message", "message-comfire")
      }).then(() => {
        if (i.value) {
          const c = s.parseNode(i.value);
          k.value = c;
        } else
          k.value = "";
        Q();
      }).catch(() => {
        m.value.focus();
      }) : Q();
    }, _e = () => {
      y.value = !0, m.value.disable();
      const {
        value: c
      } = k;
      t("change", c), C.value && (C.value = !1);
    }, Ce = () => I.value ? f("div", {
      class: [e.b("footer"), {
        [e.b("footer-dialog")]: C.value
      }]
    }, [f("div", {
      class: e.be("footer", "cancel"),
      onClick: () => Ke()
    }, [K("取消")]), f("div", {
      class: e.be("footer", "save"),
      onClick: () => _e()
    }, [K("保存")])]) : null, be = () => {
      C.value = !C.value, z(() => {
        y.value ? te() : (se(), m.value.focus());
      });
    }, Ze = () => w.value ? C.value ? f("i", {
      class: "fa fa-compress",
      "aria-hidden": "true",
      title: "缩小",
      onClick: () => be()
    }, null) : f("i", {
      class: "fa fa-expand",
      "aria-hidden": "true",
      title: "放大",
      onClick: () => be()
    }, null) : null, We = () => I.value || w.value ? f("div", {
      class: e.b("custom-toolbar")
    }, [I.value && A.value && y.value ? f("i", {
      class: "fa fa-edit",
      "aria-hidden": "true",
      title: "启用编辑",
      onClick: () => Q()
    }, null) : null, Ze()]) : null, Qe = () => {
      if (s.reply.value) {
        const c = q.execScriptFn({
          value: s.reply.value
        }, s.replyScript, {
          singleRowReturn: !0,
          isAsync: !1
        });
        return f("div", {
          class: e.b("reply")
        }, [f("div", {
          class: e.be("reply", "content"),
          innerHTML: c
        }, null), f($("ion-icon"), {
          name: "close-outline",
          onClick: () => s.removeReply()
        }, null)]);
      }
    }, Ee = () => s.hidden.value ? null : f("div", {
      class: e.b("content"),
      ref: "htmlContent",
      style: a.value
    }, [f(ht, {
      ref: "htmlRef",
      class: e.b("editor"),
      modelValue: k.value,
      "onUpdate:modelValue": (c) => k.value = c,
      "default-config": re,
      mode: "default",
      onOnCreated: He,
      onOnChange: Fe,
      onOnDestroyed: ve,
      onOnFocus: Ne,
      onOnBlur: ge,
      oncustomAlert: ye,
      oncustomPaste: we
    }, null), Qe(), f(mt, {
      ref: "toolbarRef",
      editor: m.value,
      "default-config": ee,
      mode: "default",
      class: e.b("toolbar")
    }, null)]), Ye = () => f($("el-image"), {
      class: e.e("preview"),
      ref: "previewRef",
      "zoom-rate": 1.1,
      src: b.value,
      "preview-src-list": x.value,
      "hide-on-click-modal": !0,
      onShow: Pe,
      fit: "cover"
    }, null);
    return Be(() => {
      qe(), de(() => i.value, (c, v) => {
        c !== v && (typeof i.value == "string" || c == null) && (c == null ? k.value = "" : k.value = c, B.value && (m.value && z(() => {
          m.value.focus(!0);
        }), B.value = !1));
      }, {
        immediate: !0
      }), de(() => i.disabled, (c, v) => {
        c !== v && (c === !0 ? te() : se());
      }, {
        immediate: !0
      });
    }), {
      ns: e,
      editorRef: m,
      previewRef: E,
      mode: "default",
      valueHtml: k,
      toolbarConfig: ee,
      editorConfig: re,
      handleCreated: He,
      handleChange: Fe,
      handleDestroyed: ve,
      handleFocus: Ne,
      handleBlur: ge,
      customAlert: ye,
      customPaste: we,
      insertText: Ae,
      printHtml: Ie,
      disable: te,
      enable: se,
      renderHeaserToolbar: We,
      renderEditorContent: Ee,
      renderFooter: Ce,
      htmlContent: n,
      hasEnableEdit: I,
      cssVars: a,
      toolbarRef: u,
      htmlRef: p,
      isFullScreen: C,
      readonlyState: y,
      changeFullScreenState: be,
      renderPreview: Ye
    };
  },
  render() {
    return this.isFullScreen ? f($("el-dialog"), {
      modelValue: this.isFullScreen,
      "onUpdate:modelValue": (i) => this.isFullScreen = i,
      width: "80%",
      top: "10vh",
      class: this.ns.b("dialog-full-screen"),
      onClose: () => this.changeFullScreenState()
    }, {
      default: () => [f("div", {
        class: [this.ns.b(), {
          [this.ns.b("editor-readonly")]: this.readonlyState
        }]
      }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null])]
    }) : f("div", {
      class: [this.ns.b(), {
        [this.ns.b("editor-readonly")]: this.readonlyState
      }]
    }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.renderPreview(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null]);
  }
}), Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), jt = [
  "headerSelect",
  "blockquote",
  "|",
  "bold",
  "underline",
  "italic",
  {
    key: "group-more-style",
    title: "更多",
    iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>',
    menuKeys: ["through", "code", "sup", "sub", "clearStyle"]
  },
  "color",
  "bgColor",
  "|",
  "fontSize",
  "fontFamily",
  "lineHeight",
  "|",
  "bulletedList",
  "numberedList",
  "todo",
  {
    key: "group-justify",
    title: "对齐",
    iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
    menuKeys: [
      "justifyLeft",
      "justifyRight",
      "justifyCenter",
      "justifyJustify"
    ]
  },
  {
    key: "group-indent",
    title: "缩进",
    iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
    menuKeys: ["indent", "delIndent"]
  },
  "|",
  "emoji",
  "insertLink",
  {
    key: "group-image",
    title: "图片",
    iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
    menuKeys: ["insertImage", "uploadImage"]
  },
  {
    key: "group-video",
    title: "视频",
    iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>',
    menuKeys: ["insertVideo", "uploadVideo"]
  },
  "insertTable",
  "codeBlock",
  "divider",
  "|",
  "undo",
  "redo"
], Xe = /<span class='personnel-marker'>(.*?)<\/span>/, st = /* @__PURE__ */ ue({
  name: "IBizHtmlCollapse",
  props: it(),
  emits: ["change", "blur", "focus", "enter", "infoTextChange", "link"],
  setup(i, {
    emit: t
  }) {
    const e = he("html"), s = i.controller, n = g(), a = g({});
    let l = null, d = 0;
    const u = g(), p = ct(), m = g(), E = g(), k = g(), M = g(""), N = g({
      Authorization: "Bearer ".concat(pt(gt.TOKEN))
    }), H = g(""), A = g(""), I = g(!0), y = g(!1), w = g(!1), C = g(!1), b = g(!1), x = g(!0), B = g(!1), O = g(""), Z = g(!1);
    let X;
    const oe = g([]), W = s.model;
    W.editorParams && (W.editorParams.enableEdit && (y.value = !0, w.value = !0, I.value = s.toBoolean(W.editorParams.enableEdit) && !i.readonly && !i.disabled), W.editorParams.enableFullScreen && (C.value = s.toBoolean(W.editorParams.enableFullScreen))), i.readonly && (y.value = !1, w.value = !0), de(() => i.data, (r) => {
      if (r) {
        const h = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, r, s.editorParams);
        H.value = h.uploadUrl, A.value = h.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const me = (r, h) => {
      if (h)
        return !0;
    }, ee = (r) => r;
    ke(() => {
      const r = p.value;
      r != null && r.destroy();
    });
    let re;
    const je = async () => {
      var r;
      if (s.deService) {
        const h = await import("@ibiz-template-plugin/ai-chat"), S = h.chat || h.default.chat;
        re = S;
        const T = S.create({
          question: async (j) => {
            var at;
            const R = Me();
            return await ((at = s.deService) == null ? void 0 : at.aiChatSse((U) => {
              if (ibiz.log.info("aiChatSse", U), U.actionstate === 20 && U.actionresult)
                T.addMessage({
                  messageid: R,
                  state: U.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: U.actionresult
                });
              else if (U.actionstate === 30 && U.actionresult) {
                const St = JSON.parse(U.actionresult), {
                  choices: Ge
                } = St;
                Ge && Ge.length > 0 && T.replaceMessage({
                  messageid: R,
                  state: U.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: Ge[0].content || ""
                });
              } else
                U.actionstate === 40 && T.replaceMessage({
                  messageid: R,
                  state: U.actionstate,
                  type: "ERROR",
                  role: "ASSISTANT",
                  content: U.actionresult
                });
            }, s.context, {}, {
              messages: j
            })), T.addMessage({
              messageid: R,
              state: 10,
              type: "DEFAULT",
              role: "ASSISTANT",
              content: ""
            }), !0;
          },
          action: (j, R) => {
            j === "backfill" && (y.value ? M.value = R.content : t("change", R.content), Z.value = !0);
          },
          closed: () => {
            p.value && p.value.focus(!0);
          }
        }), P = await ((r = s.deService) == null ? void 0 : r.aiChatHistory(s.context, {}));
        P.data && Array.isArray(P.data) && P.data.forEach((j) => {
          const R = {
            messageid: Me(),
            state: 30,
            type: "DEFAULT",
            role: j.role,
            content: j.content
          };
          T.addMessage(R);
        });
      }
    }, J = {
      toolbarKeys: jt
    };
    s.chatCompletion && (J.insertKeys = {
      index: 60,
      keys: ["|", "aichart"]
    }), s.insertKeys.length > 0 && J.toolbarKeys && s.insertKeys.forEach((r) => {
      r.keys && r.keys.forEach((h, S) => {
        J.toolbarKeys.includes(h) || J.toolbarKeys.splice(r.index + S, 0, h);
      });
    });
    const Le = {
      placeholder: s.placeHolder,
      readOnly: y.value ? w.value : i.readonly,
      MENU_CONF: {
        // 图片上传
        uploadImage: {
          // 上传地址
          server: H.value,
          // form-data fieldName ，默认值 'wangeditor-uploaded-image'
          fieldName: "file",
          // 单个文件的最大体积限制，默认为 2M
          maxFileSize: 10 * 1024 * 1024,
          // 10M
          // 最多可上传几个文件，默认为 100
          maxNumberOfFiles: 10,
          // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
          allowedFileTypes: [],
          // 自定义增加 http  header
          headers: N.value,
          // 跨域是否传递 cookie ，默认为 false
          withCredentials: !0,
          // 上传之前触发
          onBeforeUpload(r) {
            return r;
          },
          // 上传进度的回调函数
          onProgress(r) {
            console.log("progress", r);
          },
          // 单个文件上传成功之后
          onSuccess(r, h) {
            console.log("".concat(r.name, " 上传成功"), h);
          },
          // 单个文件上传失败
          onFailed(r, h) {
            console.log("".concat(r.name, " 上传失败"), h);
          },
          // 上传错误，或者触发 timeout 超时
          onError(r, h, S) {
            console.log("".concat(r.name, " 上传出错"), h, S);
          },
          // 自定义插入图片
          async customInsert(r, h) {
            const S = A.value.replace("%fileId%", r.id), T = r.filename;
            h(S, T, "");
          }
        },
        // 插入链接
        insertLink: {
          checkLink: me,
          // 也支持 async 函数
          parseLinkUrl: ee
          // 也支持 async 函数
        },
        // 更新链接
        editLink: {
          checkLink: me,
          // 也支持 async 函数
          parseLinkUrl: ee
          // 也支持 async 函数
        }
      },
      hoverbarKeys: {
        link: {
          menuKeys: ["editLink", "unLink", "customViewLink"]
        }
      }
    };
    ke(() => {
      const r = p.value;
      r != null && r.destroy();
    });
    const fe = async (r) => {
      if (s.maxHeight) {
        const h = r.getEditableContainer();
        B.value = h.offsetHeight > s.maxHeight;
      }
    }, Ve = async (r) => {
      const h = r.src;
      if (w.value)
        Pe(h);
      else {
        const S = ce.nodes(p.value, {
          match: (T) => !!(ft.isElement(T) && T.type === "image"),
          universal: !0
        });
        if (S)
          for (const T of S) {
            const [P] = T;
            P.type === "image" && h.endsWith(P.src) && Pe(P.src);
          }
      }
    }, Pe = async (r) => {
      if (O.value = r, oe.value = [r], await z(), E.value) {
        const {
          container: h
        } = E.value.$refs;
        h && h.children[0].click();
      }
    }, pe = (r) => {
      const h = r.getEditableContainer();
      h && h.querySelectorAll("img").forEach((T) => {
        T.onload = () => {
          fe(r);
        }, T.onclick = (P) => {
          const j = P.target;
          j && Ve(j);
        };
      });
    }, Te = (r) => {
      if (E.value) {
        const {
          container: h
        } = E.value.$refs;
        if (h) {
          const S = h.querySelector(".el-image-viewer__wrapper");
          S == null || S[r]("keydown", He);
        }
      }
    }, He = async (r) => {
      (r.key === "Escape" || r.keyCode === 27) && (r.stopPropagation(), r.preventDefault(), await z(), Te("removeEventListener"), oe.value = []);
    }, Fe = async () => {
      await z(), Te("addEventListener");
    }, ve = () => {
      let r = M.value;
      if (r = r.replace(Xe, ""), s.renderMode === "JSON") {
        const h = p.value;
        r = s.toJson(h.children);
      }
      i.value !== r && t("change", r);
    }, Ne = yt(ve, s.saveInterval), ge = (r) => {
      p.value = r, s.onCreated(p.value, i.data, J);
      const h = s.parseNode(M.value);
      r.setHtml(h), s.onLineEditing(p.value);
      let S;
      r.on("modalOrPanelShow", (T) => {
        S = new bt(T, m.value);
      }), r.on("modalOrPanelHide", () => {
        S && S.destroy();
      }), r.on("aiClick", () => {
        je();
      });
    }, ye = (r) => {
      const h = r.getHtml().replace(Xe, "");
      fe(r), pe(r);
      const S = h === "<p><br></p>" ? "" : h;
      S === i.value || S === "" && vt(i.value) || (!y.value && r.isFocused() && (s.emitMode === "AUTOMATIC" ? Ne() : ve()), s.evt.emit("onChange", {
        eventArg: S
      }));
    }, we = (r) => {
    }, Ae = (r) => {
      t("focus"), s.evt.emit("onFocus", {
        eventArg: i.value
      });
    }, Ie = (r) => {
      t("blur"), s.evt.emit("onBlur", {
        eventArg: i.value
      });
    }, te = (r, h) => {
      alert("【自定义提示】".concat(h, " - ").concat(r));
    }, se = (r, h, S) => {
      S(!0);
    }, qe = (r) => {
      const h = p.value;
      h != null && h.insertText(r);
    }, Je = () => {
      p.value != null;
    }, Q = () => {
      const r = p.value;
      r != null && r.disable();
    }, le = () => {
      const r = p.value;
      r != null && r.enable();
    }, Ke = () => {
      Dt(0, () => {
        if (n.value && u.value) {
          const r = n.value.offsetHeight;
          l = new ResizeObserver((h) => {
            const {
              height: S
            } = h[0].contentRect;
            if (S !== d) {
              const T = {
                height: "".concat(r - h[0].contentRect.height, "px")
              };
              a.value = e.cssVarBlock(T), d = S;
            }
          }), l.observe(u.value.selector);
        }
      });
    }, _e = () => {
      var r, h;
      if (i.value) {
        const S = i.value.indexOf("</p>");
        if (S >= 0) {
          const T = (r = p.value.selection.anchor) == null ? void 0 : r.offset, P = (h = p.value.selection.anchor) == null ? void 0 : h.path;
          T === 0 && P.length > 0 && P[0] === 0 && p.value.move(S - 3);
        }
      }
    }, Ce = () => {
      if (w.value = !w.value, !w.value)
        le(), p.value.focus(), _e(), x.value = !0;
      else {
        if (m.value) {
          const {
            box: r
          } = m.value.$refs;
          r.scroll(0, 0);
        }
        Q();
      }
    }, be = () => f("div", {
      class: e.be("message", "message-content")
    }, [f("p", null, [K("确定要取消编辑吗？")]), f("p", {
      class: e.bem("message", "message-content", "message-tip")
    }, [K("取消编辑将无法保存修改的内容，且不能找回。")])]), Ze = () => {
      i.value !== M.value ? wt({
        title: "确认取消",
        type: "warning",
        customClass: e.b("message"),
        message: be(),
        showCancelButton: !0,
        cancelButtonClass: e.be("message", "message-cancel"),
        confirmButtonClass: e.be("message", "message-comfire")
      }).then(() => {
        if (i.value) {
          const r = s.parseNode(i.value);
          M.value = r;
        } else
          M.value = "";
        Ce();
      }).catch(() => {
        p.value.focus();
      }) : Ce();
    }, We = () => {
      w.value = !0, p.value.disable();
      const r = M.value.replace(Xe, "");
      s.renderMode !== "JSON" && t("change", r), b.value && (b.value = !1);
    }, Qe = () => y.value && s.emitMode !== "AUTOMATIC" ? f("div", {
      class: [e.b("footer"), {
        [e.b("footer-dialog")]: b.value
      }]
    }, [f("div", {
      class: e.be("footer", "cancel"),
      onClick: () => Ze()
    }, [K("取消")]), f("div", {
      class: e.be("footer", "save"),
      onClick: () => We()
    }, [K("保存")])]) : null, Ee = () => {
      b.value = !b.value, x.value = !b.value, z(() => {
        w.value ? Q() : (le(), p.value.focus());
      });
    }, Ye = () => C.value ? b.value ? f("i", {
      class: "fa fa-compress",
      "aria-hidden": "true",
      title: "缩小",
      onClick: () => Ee()
    }, null) : f("i", {
      class: "fa fa-expand",
      "aria-hidden": "true",
      title: "放大",
      onClick: () => Ee()
    }, null) : null, c = () => y.value || C.value ? f("div", {
      class: e.b("custom-toolbar")
    }, [y.value && I.value && w.value ? f("i", {
      class: "fa fa-edit",
      "aria-hidden": "true",
      title: "编辑",
      onClick: () => Ce()
    }, null) : null, Ye()]) : null, v = () => B.value ? x.value ? f("div", {
      class: e.e("toggle"),
      onClick: () => {
        x.value = !x.value;
      }
    }, [K("展开更多 "), f($("ion-icon"), {
      name: "arrow-down-outline"
    }, null)]) : f("div", {
      class: e.e("toggle"),
      onClick: () => {
        x.value = !x.value;
      }
    }, [K("收起更多 "), f($("ion-icon"), {
      name: "arrow-up-outline"
    }, null)]) : null, L = () => {
      const r = {
        ...a.value
      };
      return x.value && s.maxHeight && Object.assign(r, {
        maxHeight: "".concat(s.maxHeight, "px")
      }), f("div", {
        class: [e.b("content"), e.is("readonly", w.value)],
        ref: "htmlContent",
        style: r
      }, [f(mt, {
        ref: "toolbarRef",
        editor: p.value,
        "default-config": J,
        mode: "default",
        class: e.b("toolbar")
      }, null), f(ht, {
        ref: "htmlRef",
        class: e.b("editor"),
        modelValue: M.value,
        "onUpdate:modelValue": (h) => M.value = h,
        "default-config": Le,
        mode: "default",
        onOnCreated: ge,
        onOnChange: ye,
        onOnDestroyed: we,
        onOnFocus: Ae,
        onOnBlur: Ie,
        oncustomAlert: te,
        oncustomPaste: se
      }, null)]);
    }, F = () => f($("el-image"), {
      class: e.e("preview"),
      ref: "previewRef",
      "zoom-rate": 1.1,
      src: O.value,
      "preview-src-list": oe.value,
      "hide-on-click-modal": !0,
      onShow: Fe,
      fit: "cover"
    }, null);
    return Be(() => {
      k.value && (X = Nt(k, async () => {
        p.value && p.value.emit("clickOutside");
      })), Ke(), de(() => i.value, (r, h) => {
        r !== h && (typeof i.value == "string" || r == null) && (r == null ? M.value = "" : s.renderMode === "JSON" ? M.value = s.jsonToHtml(r) : M.value = r, Z.value && (p.value && z(() => {
          p.value.focus(!0);
        }), Z.value = !1));
      }, {
        immediate: !0
      }), de(() => i.disabled, (r, h) => {
        r !== h && (r === !0 ? Q() : le());
      }, {
        immediate: !0
      });
    }), xt(() => {
      l && l.disconnect(), X && X.stop && X.stop(), re && re.close();
    }), {
      ns: e,
      editorRef: p,
      previewRef: E,
      containerRef: k,
      htmlRef: m,
      mode: "default",
      valueHtml: M,
      toolbarConfig: J,
      editorConfig: Le,
      handleCreated: ge,
      handleChange: ye,
      handleDestroyed: we,
      handleFocus: Ae,
      handleBlur: Ie,
      customAlert: te,
      customPaste: se,
      insertText: qe,
      printHtml: Je,
      disable: Q,
      enable: le,
      renderHeaserToolbar: c,
      renderEditorContent: L,
      renderToggle: v,
      renderFooter: Qe,
      htmlContent: n,
      hasEnableEdit: y,
      cssVars: a,
      toolbarRef: u,
      isFullScreen: b,
      readonlyState: w,
      collapse: x,
      changeFullScreenState: Ee,
      renderPreview: F
    };
  },
  render() {
    return this.isFullScreen ? f($("el-dialog"), {
      modelValue: this.isFullScreen,
      "onUpdate:modelValue": (i) => this.isFullScreen = i,
      width: "80%",
      top: "10vh",
      class: this.ns.b("dialog-full-screen"),
      onClose: () => this.changeFullScreenState()
    }, {
      default: () => [f("div", {
        ref: "containerRef",
        class: [this.ns.b(), this.ns.b("collapse"), {
          [this.ns.b("editor-readonly")]: this.readonlyState
        }]
      }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null])]
    }) : f("div", {
      ref: "containerRef",
      class: [this.ns.b(), this.ns.is("allow-collapse", !0), {
        [this.ns.b("editor-readonly")]: this.readonlyState
      }]
    }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.readonlyState ? this.renderToggle() : null, this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null, this.renderPreview()]);
  }
});
class ie {
  /**
   * 获取主题
   * @returns
   */
  static getThemeVar() {
    const t = document.documentElement;
    return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否包含中文字符
   * @param inputString
   * @returns
   */
  static isChineseCharacter(t) {
    return /[\u4e00-\u9fa5]/.test(t);
  }
  /**
   * 判断字符串是否同时存在英文和中文
   * @param str
   * @returns
   */
  static hasChineseAndEnglish(t) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t);
  }
  /**
   * 字符串转16进制颜色
   * @param text
   * @returns
   */
  static stringToHexColor(t) {
    if (!t)
      return "";
    let e = 0;
    for (let u = 0; u < t.length; u++)
      if (this.isChineseCharacter(t))
        e = t.charCodeAt(u) + ((e << 5) - e), e = e & e;
      else {
        const p = t.charCodeAt(u);
        e += p.toString(16);
      }
    const s = String(e).substring(0, 6), n = parseInt(s.substring(0, 2), 16), a = parseInt(s.substring(2, 4), 16), l = parseInt(s.substring(4, 6), 16), d = "#".concat(n.toString(16).padStart(2, "0")).concat(a.toString(16).padStart(2, "0")).concat(l.toString(16).padStart(2, "0"));
    return d === "#FFFFFF" && this.getThemeVar() || d;
  }
  /**
   * 缩写名字
   * @param text
   * @returns
   */
  static avatarName(t) {
    if (t && t.toString().length < 2)
      return t;
    if (t && t.toString().length >= 2) {
      if (this.hasChineseAndEnglish(t)) {
        const a = t.split("").find((d) => /[a-zA-Z]/.test(d)) || "", l = t.split("").find((d) => /[\u4E00-\u9FA5]/.test(d)) || "";
        return "".concat(a).concat(l).toLowerCase();
      }
      return /[a-zA-Z]/.test(t) ? t.split("").filter((a) => /[a-zA-Z]/.test(a)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((a) => /[\u4E00-\u9FA5]/.test(a)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
    }
  }
  /**
   * 解析emoji表情
   *
   * @param {string} value
   * @return {*}  {string}
   */
  static getEmojiCustomHtml(t) {
    return t.replaceAll(/{"emoji":"(.+?)"}/g, (e, s) => {
      const n = decodeURIComponent(atob(s));
      return '<span class="emoji-tag">'.concat(n, "</span>");
    }).replaceAll(
      /<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g,
      (e, s) => {
        const n = decodeURIComponent(atob(s));
        return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(n, "</span>");
      }
    );
  }
}
function ot(i, t) {
  i.data == null && (i.data = {});
  const e = i.data;
  e.style == null && (e.style = {}), Object.assign(e.style, t);
}
function Vt(i, t) {
  const { backgroundColor: e, bgColor: s } = i;
  let n = t;
  return e && ot(n, { backgroundColor: e }), s && ot(n, { backgroundColor: s }), n;
}
class Y {
  /**
   * 添加标记
   * @param editor 编辑器
   * @param op 标记信息
   */
  static addMarks(t, e) {
    const { selection: s, mark: n } = e, a = (d, u) => {
      if (!Se.isText(d))
        return !1;
      const [p, m] = ce.parent(t, u);
      return !t.isVoid(p);
    };
    if (ze.isExpanded(s))
      Oe.setNodes(t, n, {
        match: a,
        at: s,
        split: !0,
        voids: !0
      });
    else {
      const d = {
        ...ce.marks(t) || {},
        ...n
      };
      t.marks = d;
    }
  }
  /**
   * 删除标记
   * @param editor 编辑器
   * @param op 标记信息
   */
  static removeMarks(t, e) {
    const { selection: s, keys: n } = e, a = (d, u) => {
      if (!Se.isText(d))
        return !1;
      const [p, m] = ce.parent(t, u);
      return !t.isVoid(p);
    };
    if (ze.isExpanded(s))
      Oe.unsetNodes(t, n, {
        match: a,
        at: s,
        split: !0,
        voids: !0
      });
    else {
      const d = { ...ce.marks(t) || {} };
      n.forEach((u) => {
        delete d[u];
      }), t.marks = d;
    }
  }
  /**
   * 移动用户光标节点
   * @param editor
   * @param options
   */
  static movePersNode(t, e) {
    const { param: s, node: n } = e, { id: a, cursor: l, preCursor: d } = s, { position: u, newPosition: p, selectionRange: m } = l;
    if (!m && (d != null && d.selectionRange)) {
      const E = d.selectionRange;
      this.removeMarks(t, {
        keys: ["backgroundColor"],
        selection: {
          anchor: this.calcPointByOffset(t, E.anchor),
          focus: this.calcPointByOffset(t, E.focus)
        }
      });
    }
    if (u) {
      const k = De.parent(t, u.path).children.findIndex((M) => M.id === a);
      k > -1 && Oe.removeNodes(t, { at: [u.path[0], k] });
    }
    if (p) {
      m && this.addMarks(t, {
        mark: {
          backgroundColor: ie.stringToHexColor(a)
        },
        selection: {
          anchor: this.calcPointByOffset(t, m.anchor),
          focus: this.calcPointByOffset(t, m.focus)
        }
      });
      const E = this.calcPointByOffset(t, p);
      Oe.insertNodes(t, [n], {
        at: E
      });
    }
  }
  /**
   * 根据偏移量计算位置
   * @param editor
   * @param item
   */
  static calcPointByOffset(t, e) {
    const s = De.parent(t, e.path);
    let n = 0, a = 0;
    s.children.forEach((d, u) => {
      Se.isText(d) && a < e.offset && (a += d.text.length || 1, n = u);
    });
    const l = s.children[n].text.length - (a - e.offset);
    return { path: [e.path[0], n], offset: l };
  }
  /**
   * 根据点位置计算偏移量
   * @param editor
   * @param point
   */
  static calcOffsetByPoint(t, e) {
    let s = e.offset;
    const n = De.parent(t, e.path), a = De.get(t, e.path);
    return Se.isText(a) && a.text.length === 0 && s === 0 && (s = 1), n.children.forEach((l, d) => {
      Se.isText(l) && d < e.path[1] && (s += l.text.length || 1);
    }), s;
  }
}
const et = /* @__PURE__ */ ue({
  name: "HtmlComment",
  props: it(),
  emits: At(),
  setup(i, {
    emit: t
  }) {
    const e = he("html-comment"), s = i.controller, n = g(), a = g(), l = g(!1), d = () => {
      s.collapsed.value = !1, t("focus");
    }, u = (k) => {
      t("change", k), k && s.collapsed.value && (s.collapsed.value = !1);
    }, p = () => {
      if (t("blur"), i.value)
        return null;
      s.collapsed.value = !0;
    }, m = () => {
      l.value = !0;
    };
    return {
      ns: e,
      c: s,
      comment: n,
      editorRef: a,
      onChange: u,
      onFocus: d,
      onBlur: p,
      renderAvatar: () => {
        if (s.userAvatar && !l.value) {
          const N = JSON.parse(s.userAvatar);
          if (N.length === 0)
            return null;
          const {
            downloadUrl: H
          } = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, i.data, s.editorParams), A = H.replace("%fileId%", N[0].id);
          return f("div", {
            class: e.e("avatar-name")
          }, [f("img", {
            src: A,
            alt: "",
            onError: m
          }, null)]);
        }
        const k = ie.stringToHexColor(s.context.srfusername), M = ie.avatarName(s.context.srfusername);
        return s.context.srfusername ? f("div", {
          class: e.e("avatar-name"),
          style: "background: ".concat(k, ";")
        }, [M]) : f($("el-avatar"), {
          class: e.e("avatar"),
          src: "./assets/images/user-avatar.png"
        }, null);
      }
    };
  },
  render() {
    return this.c.mode === "default" ? f(st, {
      controller: this.c,
      data: this.data,
      value: this.value,
      readonly: this.readonly,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, null) : f("div", {
      ref: "comment",
      class: [this.ns.b(), this.ns.is("collapse", this.c.collapsed.value)],
      style: {
        height: "".concat(this.c.collapsed.value ? this.c.minHeight : this.c.maxHeight, "px")
      }
    }, [this.renderAvatar(), f($e, {
      controller: this.c,
      data: this.data,
      value: this.value,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, null)]);
  }
});
function rt(i, t, e, s, n) {
  const a = t === void 0 ? void 0 : t.key;
  return { sel: i, data: t, children: e, text: s, elm: n, key: a };
}
const lt = Array.isArray;
function tt(i) {
  return typeof i == "string" || typeof i == "number" || i instanceof String || i instanceof Number;
}
function Et(i, t, e) {
  if (i.ns = "http://www.w3.org/2000/svg", e !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const n = t[s];
      if (typeof n == "string")
        continue;
      const a = n.data;
      a !== void 0 && Et(a, n.children, n.sel);
    }
}
function ae(i, t, e) {
  let s = {}, n, a, l;
  if (e !== void 0 ? (t !== null && (s = t), lt(e) ? n = e : tt(e) ? a = e.toString() : e && e.sel && (n = [e])) : t != null && (lt(t) ? n = t : tt(t) ? a = t.toString() : t && t.sel ? n = [t] : s = t), n !== void 0)
    for (l = 0; l < n.length; ++l)
      tt(n[l]) && (n[l] = rt(void 0, void 0, void 0, n[l], void 0));
  return i[0] === "s" && i[1] === "v" && i[2] === "g" && (i.length === 3 || i[3] === "." || i[3] === "#") && Et(s, n, i), rt(i, s, n, a, void 0);
}
function qt(i) {
  const { script: t = "", data: e = {} } = i, s = q.execScriptFn({ data: e }, t, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const Jt = {
  type: "attachments",
  elemToHtml: qt
};
function Kt(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || ""), e = JSON.parse(t);
  return {
    type: "attachments",
    script: e.script,
    data: e,
    children: [{ text: "" }]
  };
}
const _t = {
  selector: 'span[data-w-e-type="attachments"]',
  parseElemHtml: Kt
};
function Zt(i) {
  const { data: t = {} } = i, e = {
    name: "".concat(t.name),
    id: t.id
  };
  return ae(
    "mention-elem",
    {
      dataset: { value: JSON.stringify(e) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const Wt = {
  type: "attachments",
  renderElem: Zt
};
class Qt {
  constructor() {
    o(this, "title", "本地文件");
    o(this, "tag", "button");
    o(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">\n    <title>附件</title>\n    <g id="附件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="icon">\n            <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>\n            <g id="编组-28" transform="translate(2.997929, 8.001508)">\n                <path d="M13.9611058,12.6330155 C13.9611058,14.5460163 12.4108408,16.0968098 10.498492,16.0968098 C8.58614322,16.0968098 7.03587822,14.5460163 7.03590808,12.6393438 L7.03590808,12.6393438 L6.98338468,7.07669061 C6.97992133,6.70644889 7.27712693,6.40347538 7.64724246,6.39998034 C8.017358,6.39648531 8.32022824,6.69379224 8.32372209,7.06403396 L8.32372209,7.06403396 L8.37624485,12.6330155 C8.37624485,13.8054998 9.32640727,14.7559862 10.498492,14.7559862 C11.6705768,14.7559862 12.6207392,13.8054998 12.6207392,12.6330155 L12.6207392,12.6330155 L12.6207392,6.46506253 C12.6207392,4.69957562 11.0562006,3.24725012 9.10227678,3.24725012 C7.148353,3.24725012 5.58381437,4.69957562 5.58381437,6.46506253 L5.58381437,6.46506253 L5.58381437,12.8655397 C5.58381437,15.5621365 7.78332719,17.7497339 10.498492,17.7497339 C13.2136568,17.7497339 15.4131697,15.5621365 15.4131697,12.8655397 L15.4131697,12.8655397 L15.4131697,7.10001026 C15.4131697,6.72975204 15.713221,6.42959845 16.083353,6.42959845 C16.453485,6.42959845 16.7535363,6.72975204 16.7535363,7.10001026 L16.7535363,7.10001026 L16.7535363,12.8655397 C16.7535363,16.3043913 13.9521943,19.0905575 10.498492,19.0905575 C7.04478976,19.0905575 4.24344774,16.3043913 4.24344774,12.8655397 L4.24344774,12.8655397 L4.24344774,6.46506253 C4.24344774,3.93573556 6.42955024,1.90642651 9.10227678,1.90642651 C11.7750033,1.90642651 13.9611058,3.93573556 13.9611058,6.46506253 L13.9611058,6.46506253 Z" id="形状结合" fill="#DDDDDD" transform="translate(10.498492, 10.498492) rotate(-315.000000) translate(-10.498492, -10.498492) "/>\n                <path d="M21.6662931,9.87797441 L24.6096402,9.87797441 C24.9410111,9.87797441 25.2096402,10.1466036 25.2096402,10.4779744 C25.2096402,10.8093453 24.9410111,11.0779744 24.6096402,11.0779744 L21.6662931,11.0779744 C21.3349223,11.0779744 21.0662931,10.8093453 21.0662931,10.4779744 C21.0662931,10.1466036 21.3349223,9.87797441 21.6662931,9.87797441 Z" id="矩形备份-74" fill="#73D897"/>\n                <path d="M21.6662931,4.29120933 L27.4020707,4.29120933 C27.7334415,4.29120933 28.0020707,4.55983848 28.0020707,4.89120933 C28.0020707,5.22258018 27.7334415,5.49120933 27.4020707,5.49120933 L21.6662931,5.49120933 C21.3349223,5.49120933 21.0662931,5.22258018 21.0662931,4.89120933 C21.0662931,4.55983848 21.3349223,4.29120933 21.6662931,4.29120933 Z" id="矩形备份-75" fill="#6698FF"/>\n                <path d="M21.6662931,15.4647395 L27.4020707,15.4647395 C27.7334415,15.4647395 28.0020707,15.7333686 28.0020707,16.0647395 C28.0020707,16.3961103 27.7334415,16.6647395 27.4020707,16.6647395 L21.6662931,16.6647395 C21.3349223,16.6647395 21.0662931,16.3961103 21.0662931,16.0647395 C21.0662931,15.7333686 21.3349223,15.4647395 21.6662931,15.4647395 Z" id="矩形备份-77" fill="#FF7575"/>\n            </g>\n        </g>\n    </g>\n</svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    throw new ne("暂未支持上传本地文件！");
  }
}
const Yt = {
  key: "attachments",
  factory() {
    return new Qt();
  }
}, Gt = {
  renderElems: [Wt],
  elemsToHtml: [Jt],
  parseElemsHtml: [_t],
  menus: [Yt]
};
class Xt {
  /**
   * Creates an instance of AttachmentsController.
   * @param {IData} option
   * @memberof AttachmentsController
   */
  constructor() {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof AttachmentsController
     */
    o(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    o(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    o(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof AttachmentsController
     */
    o(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof AttachmentsController
     */
    o(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof AttachmentsController
     */
    o(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof AttachmentsController
     */
    o(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof AttachmentsController
     */
    o(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof AttachmentsController
     */
    o(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.attachmentsIsRegiter || (D.registerModule(Gt), window.attachmentsIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof AttachmentsController
   */
  async init(t, e) {
    this.model = e.model, this.context = e.context, this.params = e.params, this.evt = e.evt, this.data = e.data, this.editor = t, this.editorParams = this.model.editorParams;
  }
  /**
   * 控制器销毁
   *
   * @memberof AttachmentsController
   */
  onDestroyed() {
  }
  /**
   * 插入节点
   *
   * @param {IDomEditor} editor
   * @memberof AttachmentsController
   */
  insertNode(t) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof AttachmentsController
   */
  parseNode(t) {
    return t;
  }
}
function es(i) {
  const { script: t = "", data: e = {} } = i, s = q.execScriptFn({ data: e }, t, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const ts = {
  type: "codesnippet",
  elemToHtml: es
};
function ss(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || ""), e = JSON.parse(t);
  return {
    type: "codesnippet",
    script: e.script,
    data: e,
    children: [{ text: "" }]
  };
}
const ns = {
  selector: 'span[data-w-e-type="codesnippet"]',
  parseElemHtml: ss
};
function is(i) {
  const { data: t = {} } = i, e = {
    name: "".concat(t.name),
    id: t.id
  };
  return ae(
    "mention-elem",
    {
      dataset: { value: JSON.stringify(e) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const as = {
  type: "CodeSnippet",
  renderElem: is
};
class os {
  constructor() {
    o(this, "title", "代码段");
    o(this, "tag", "button");
    o(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">\n  <title>代码段</title>\n  <g id="代码段" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="icon备份">\n          <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>\n          <path d="M24.6642225,18.8794824 L27.6075695,18.8794824 C27.9389404,18.8794824 28.2075695,19.1481115 28.2075695,19.4794824 C28.2075695,19.8108532 27.9389404,20.0794824 27.6075695,20.0794824 L24.6642225,20.0794824 C24.3328516,20.0794824 24.0642225,19.8108532 24.0642225,19.4794824 C24.0642225,19.1481115 24.3328516,18.8794824 24.6642225,18.8794824 Z" id="矩形备份-74" fill="#73D897"/>\n          <path d="M24.6642225,13.2927173 L30.4,13.2927173 C30.7313708,13.2927173 31,13.5613465 31,13.8927173 C31,14.2240882 30.7313708,14.4927173 30.4,14.4927173 L24.6642225,14.4927173 C24.3328516,14.4927173 24.0642225,14.2240882 24.0642225,13.8927173 C24.0642225,13.5613465 24.3328516,13.2927173 24.6642225,13.2927173 Z" id="矩形备份-75" fill="#6698FF"/>\n          <path d="M24.6642225,24.4662475 L30.4,24.4662475 C30.7313708,24.4662475 31,24.7348766 31,25.0662475 C31,25.3976183 30.7313708,25.6662475 30.4,25.6662475 L24.6642225,25.6662475 C24.3328516,25.6662475 24.0642225,25.3976183 24.0642225,25.0662475 C24.0642225,24.7348766 24.3328516,24.4662475 24.6642225,24.4662475 Z" id="矩形备份-77" fill="#FF7575"/>\n          <g id="1.Base基础/1.icon图标/11.editor/header-1" transform="translate(5.000000, 11.000000)" fill="#DDDDDD">\n              <path d="M4.68266589,2.39258039 L1.51032474,7.44797324 L5.01586095,12.7216272 L4.05994646,13.3212428 L0.126424153,7.40475416 L3.68603474,1.72997946 L4.68266589,2.39258039 Z M11.3173341,12.6697762 L14.4896753,7.61438339 L10.984139,2.34072939 L11.9400535,1.7411138 L15.8735758,7.65760247 L12.3139653,13.3323772 L11.3173341,12.6697762 Z M8.86596086,1.31248434 L10.0376294,1.55020137 L7.19605832,13.6243456 L6.0243898,13.3866286 L8.86596086,1.31248434 Z" id="形状结合"/>\n          </g>\n      </g>\n  </g>\n</svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    throw new ne("暂未支持上传代码段！");
  }
}
const rs = {
  key: "codesnippet",
  factory() {
    return new os();
  }
}, ls = {
  renderElems: [as],
  elemsToHtml: [ts],
  parseElemsHtml: [ns],
  menus: [rs]
};
class cs {
  /**
   * Creates an instance of CodeSnippetController.
   * @param {IData} option
   * @memberof CodeSnippetController
   */
  constructor() {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof CodeSnippetController
     */
    o(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    o(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    o(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    o(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof CodeSnippetController
     */
    o(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    o(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof CodeSnippetController
     */
    o(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof CodeSnippetController
     */
    o(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof CodeSnippetController
     */
    o(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.codesnippetIsRegiter || (D.registerModule(ls), window.codesnippetIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CodeSnippetController
   */
  async init(t, e) {
    this.model = e.model, this.context = e.context, this.params = e.params, this.evt = e.evt, this.data = e.data, this.editor = t, this.editorParams = this.model.editorParams;
  }
  /**
   * 控制器销毁
   *
   * @memberof CodeSnippetController
   */
  onDestroyed() {
  }
  /**
   * 插入节点
   *
   * @param {IDomEditor} editor
   * @memberof CodeSnippetController
   */
  insertNode(t) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof CodeSnippetController
   */
  parseNode(t) {
    return t;
  }
}
function ds(i) {
  const { script: t = "", data: e = {} } = i, s = q.execScriptFn({ data: e }, t, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const us = {
  type: "marker",
  elemToHtml: ds
};
function hs(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || ""), e = JSON.parse(t);
  return {
    type: "marker",
    script: e.script,
    data: e,
    children: [{ text: "" }]
  };
}
const ms = {
  selector: 'span[data-w-e-type="marker"]',
  parseElemHtml: hs
};
function fs(i) {
  const { data: t = {} } = i;
  return ae(
    "mention-elem",
    {
      dataset: { value: JSON.stringify(t) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const ps = {
  type: "marker",
  renderElem: fs
};
let vs = class {
  constructor() {
    o(this, "title", "提及工作项");
    o(this, "tag", "button");
    o(this, "iconSvg", '<svg t="1706259772097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6854" width="200" height="200"><path d="M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z" fill="#979797" p-id="6855"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    t.insertText("#");
  }
};
const gs = {
  key: "marker",
  factory() {
    return new vs();
  }
}, ys = {
  renderElems: [ps],
  elemsToHtml: [us],
  parseElemsHtml: [ms],
  menus: [gs]
};
const ws = /* @__PURE__ */ ue({
  name: "MenTion",
  props: {
    controller: {
      type: Object,
      required: !0
    },
    modal: {
      type: Object
    }
  },
  setup(i) {
    const t = he("mention"), e = i.controller, s = g(!1), n = g([]);
    let a = _;
    const l = g({}), d = g(0), u = g([]), p = (C) => {
      const {
        eventArg: b
      } = C;
      if (b) {
        !b.includes("@") && e.overlay && e.execting && e.overlay.dismiss();
        const x = b.match(new RegExp("(?<=\\@)([^\\@&^{]*?)(?=\\<)", "g")) || [];
        e.execting && (x.length === 0 && e.overlay.dismiss(), e.query = x.pop() || "", e.query && /\s$/.test(e.query) ? e.overlay.dismiss() : e.query && N({
          isInitialLoad: !0
        }));
      } else
        e.overlay && e.execting && e.overlay.dismiss();
    }, m = () => {
      e.evt && e.evt.on("onChange", p);
    }, E = (C = {}) => {
      s.value = !0, e.getUsers(C).then((b) => {
        (b.status !== 200 || !b.data) && (s.value = !1), b.headers["x-total"] && (d.value = Number(b.headers["x-total"])), C.isLoadMore === !0 ? n.value.push(...e.toUIData(b.data)) : (n.value = e.toUIData(b.data), n.value.length > 0 && (l.value = n.value[0])), s.value = !1;
      }).catch(() => {
        s.value = !1;
      });
    }, k = () => {
      E({
        isLoadMore: !0
      });
    }, M = dt(() => n.value.length >= d.value || s.value || d.value <= e.size), N = Ct(E, 300, {
      leading: !0
    });
    m(), E({
      isInitialLoad: !0
    });
    const H = (C) => {
      let b = n.value.findIndex((x) => x.id === l.value.id);
      switch (C) {
        case "up":
          b--, (b === -1 || b === -2) && (b = n.value.length - 1), l.value = n.value[b];
          break;
        case "down":
          b++, b === n.value.length && (b = 0), l.value = n.value[b];
          break;
        case "enter":
          A(l.value);
          break;
      }
    }, A = (C) => {
      var b;
      if (i.modal) {
        const x = {
          ok: !0,
          data: [C]
        };
        (b = i.modal) == null || b.dismiss(x);
      }
    }, I = (C) => {
      if (!C)
        return null;
      const b = JSON.parse(C);
      if (b.length === 0)
        return null;
      const {
        downloadUrl: x
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, e.editorParams);
      return x.replace("%fileId%", b[0].id);
    }, y = (C) => {
      u.value.push(C);
    }, w = (C) => {
      const b = C.name, x = ie.stringToHexColor(b), B = ie.avatarName(b);
      let O = "";
      if (e.operatorMap.has(C.id)) {
        const Z = e.operatorMap.get(C.id);
        Z.data.iconurl && (O = I(Z.data.iconurl) || "");
      }
      return f("div", {
        class: [t.e("item"), t.is("active", C.id === l.value.id)],
        onClick: () => A(C)
      }, [f("div", {
        class: t.e("avatar"),
        style: "background: ".concat(x, ";")
      }, [O && !u.value.includes(O) ? f("img", {
        src: O,
        onError: () => y(O)
      }, null) : B]), f("div", {
        class: t.e("name"),
        title: b
      }, [b])]);
    };
    return Be(() => {
      a = xe(window, "keyup", (C) => {
        C.keyCode === 40 ? H("down") : C.keyCode === 38 ? H("up") : C.keyCode === 13 && H("enter");
      });
    }), ke(() => {
      a !== _ && a(), e.evt.off("onChange", p);
    }), {
      ns: t,
      items: n,
      loading: s,
      isLodeMoreDisabled: M,
      renderItem: w,
      loadMore: k
    };
  },
  render() {
    return ut(f("div", {
      "infinite-scroll-distance": 10,
      "infinite-scroll-disabled": this.isLodeMoreDisabled,
      "infinite-scroll-immediate": !1,
      class: this.ns.b()
    }, [this.items.map((i) => this.renderItem(i)), this.items.length === 0 && f($("iBizNoData"), {
      text: "暂无用户数据"
    }, null)]), [[Re("infinite-scroll"), () => this.loadMore()], [Re("loading"), this.loading]]);
  }
});
const Cs = /* @__PURE__ */ ue({
  name: "Marker",
  props: {
    controller: {
      type: Object,
      required: !0
    },
    modal: {
      type: Object
    }
  },
  setup(i) {
    const t = he("marker"), e = i.controller, s = g(!1), n = g([]);
    let a = _;
    const l = g({}), d = g(0), u = (y) => {
      const {
        eventArg: w
      } = y;
      if (w) {
        !w.includes("#") && e.overlay && e.execting && e.overlay.dismiss();
        const C = /<svg((.|[\t\r\f\n\s])+?)<\/svg>/g, x = w.replace(C, "").match(new RegExp("(?<=\\#)([^\\#&^{]*?)(?=\\<)", "g")) || [];
        e.execting && (x.length === 0 && e.overlay.dismiss(), e.query = x.pop() || "", e.query && /\s$/.test(e.query) ? e.overlay.dismiss() : e.query && M({
          isInitialLoad: !0
        }));
      } else
        e.overlay && e.execting && e.overlay.dismiss();
    }, p = () => {
      e.evt && e.evt.on("onChange", u);
    }, m = (y = {}) => {
      s.value = !0, e.load(y).then((w) => {
        (w.status !== 200 || !w.data) && (s.value = !1), w.headers["x-total"] && (d.value = Number(w.headers["x-total"])), y.isLoadMore === !0 ? n.value.push(...e.toUIData(w.data)) : (n.value = e.toUIData(w.data), n.value.length > 0 && (l.value = n.value[0])), s.value = !1;
      }).catch(() => {
        s.value = !1;
      });
    }, E = () => {
      m({
        isLoadMore: !0
      });
    }, k = dt(() => n.value.length >= d.value || s.value || d.value <= e.size), M = Ct(m, 300, {
      leading: !0
    });
    p(), m({
      isInitialLoad: !0
    });
    const N = (y) => {
      let w = n.value.findIndex((C) => C.id === l.value.id);
      switch (y) {
        case "up":
          w--, (w === -1 || w === -2) && (w = n.value.length - 1), l.value = n.value[w];
          break;
        case "down":
          w++, w === n.value.length && (w = 0), l.value = n.value[w];
          break;
        case "enter":
          H(l.value);
          break;
      }
    }, H = (y) => {
      var w;
      if (i.modal) {
        const C = {
          ok: !0,
          data: [y]
        };
        (w = i.modal) == null || w.dismiss(C);
      }
    }, A = (y, w) => {
      if (e.quoteCodelistMap.has(y)) {
        const C = e.quoteCodelistMap.get(y);
        return f($("iBizCodeList"), {
          codeListItems: C.codeListItems,
          codeList: C.codeList,
          value: w
        }, null);
      }
      return w;
    }, I = (y) => f("div", {
      class: [t.e("item"), t.is("active", y.id === l.value.id)],
      onClick: () => H(y)
    }, [f("div", {
      class: t.e("type")
    }, [A("type", y.type)]), f("div", {
      class: t.e("identifier")
    }, [A("identifier", y.identifier)]), f("div", {
      class: t.e("name"),
      title: y.name
    }, [A("name", y.name)])]);
    return Be(() => {
      a = xe(window, "keyup", (y) => {
        y.keyCode === 40 ? N("down") : y.keyCode === 38 ? N("up") : y.keyCode === 13 && N("enter");
      });
    }), ke(() => {
      a !== _ && a(), e.evt.off("onChange", u);
    }), {
      ns: t,
      items: n,
      loading: s,
      isLodeMoreDisabled: k,
      renderItem: I,
      loadMore: E
    };
  },
  render() {
    return ut(f("div", {
      "infinite-scroll-distance": 10,
      "infinite-scroll-disabled": this.isLodeMoreDisabled,
      "infinite-scroll-immediate": !1,
      class: this.ns.b()
    }, [this.items.map((i) => this.renderItem(i)), this.items.length === 0 && f($("iBizNoData"), {
      text: "暂无用户数据"
    }, null)]), [[Re("infinite-scroll"), () => this.loadMore()], [Re("loading"), this.loading]]);
  }
});
const bs = /* @__PURE__ */ ue({
  name: "IBizHtmlEmoji",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    return {
      ns: he("html-emoji"),
      onSelect: (s) => {
        const n = {
          ok: !0,
          data: [{
            emoji: Rt(s.data)
          }]
        };
        i.modal.dismiss(n);
      }
    };
  },
  render() {
    return f("div", {
      class: this.ns.b()
    }, [f($("iBizEmojiSelect"), {
      dark: !0,
      continuousList: !0,
      onSelect: this.onSelect
    }, null)]);
  }
});
class Es {
  /**
   * Creates an instance of MarkerController.
   * @param {IData} option
   * @memberof MarkerController
   */
  constructor() {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MarkerController
     */
    o(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    o(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    o(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof MarkerController
     */
    o(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MarkerController
     */
    o(this, "editor");
    /**
     * 引用请求url
     *
     * @type {string}
     * @memberof MarkerController
     */
    o(this, "quoteUrl", "");
    /**
     * 人员UI转化
     */
    o(this, "quoteFieldMap", {
      id: "id",
      name: "name"
    });
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    o(this, "quoteCodelistMap", /* @__PURE__ */ new Map());
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MarkerController
     */
    o(this, "quoteMethod", "post");
    /**
     * 请求参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    o(this, "quoteParams", {});
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "quoteScript", "`#{id=${data.id},name=${data.name},identifier=${data.identifier},icon=${data.icon}}`");
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "quoteInScript", "value.replaceAll(/#{id=(.+?),name=(.+?),identifier=(.+?),icon=((.|[\\t\\r\\f\\n\\s])+?)}/g,(x, id, name, identifier, icon) => {return controller.getNodeInfo({ id, name, identifier, icon })})");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    o(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MarkerController
     */
    o(this, "items", []);
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MarkerController
     */
    o(this, "overlay", null);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MarkerController
     */
    o(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MarkerController
     */
    o(this, "execting", !1);
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MarkerController
     */
    o(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MarkerController
     */
    o(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MarkerController
     */
    o(this, "size", 20);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    o(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    o(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MarkerController
     */
    o(this, "cleanup", _);
    this.registerNode();
  }
  /**
   * 声明'@'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof MarkerController
   */
  markerPlugin(t) {
    const { insertText: e, isInline: s, isVoid: n } = t;
    return t.insertText = (a) => {
      if (!this.editor) {
        e(a);
        return;
      }
      if (!this.editor.isFocused()) {
        e(a);
        return;
      }
      if (V.getSelectedElems(t).some((u) => t.isVoid(u))) {
        e(a);
        return;
      }
      a === "#" && !this.execting && (this.query = "", this.showModal()), e(a);
    }, t.isInline = (a) => V.getNodeType(a) === "marker" ? !0 : s(a), t.isVoid = (a) => V.getNodeType(a) === "marker" ? !0 : n(a), t;
  }
  registerNode() {
    window.markerIsRegiter || (D.registerModule(ys), window.markerIsRegiter = !0), D.registerPlugin(this.markerPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
   */
  async init(t, e) {
    if (this.model = e.model, this.context = e.context, this.params = e.params, this.evt = e.evt, this.data = e.data, this.editor = t, this.editorParams = this.model.editorParams, this.editorParams) {
      const {
        QUOTEURL: n,
        QUOTEFIELDMAP: a,
        QUOTEMETHOD: l,
        QUOTESCRIPT: d,
        QUOTEINSCRIPT: u,
        QUOTEPARAMS: p,
        QUOTECODELISTMAP: m
      } = this.editorParams;
      if (n && (this.quoteUrl = n), a && (this.quoteFieldMap = JSON.parse(a)), l && (this.quoteMethod = l.toLowerCase()), p && (this.quoteParams = JSON.parse(p)), d && (this.quoteScript = d), u && (this.quoteInScript = u), m) {
        const E = JSON.parse(m);
        this.setCodeListMap(E);
      }
    }
    const s = this.editor.getEditableContainer();
    s && (this.cleanup = xe(s, "keydown", (n) => {
      var a;
      this.execting && this.presetPreventEvents.includes(n.keyCode) && n.preventDefault(), this.execting && this.presetPreventPropEvents.includes(n.keyCode) && (n.stopPropagation(), (a = this.overlay) == null || a.dismiss());
    }));
  }
  onDestroyed() {
    this.cleanup !== _ && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
  // 设置代码表map
  async setCodeListMap(t) {
    for (const e in t) {
      const s = await this.loadCodeList(t[e]);
      s && this.quoteCodelistMap.set(e, s);
    }
  }
  // 显示弹框
  showModal() {
    if (!this.quoteUrl)
      throw new ne("未配置提及工作项QUOTEURL编辑器参数！");
    const t = document.getSelection();
    if (!t)
      return;
    const { focusNode: e } = t;
    e && this.openPopover(e.parentNode).then(
      (s) => {
        s.length > 0 && this.insertNode(s[0]);
      }
    );
  }
  findCodeListItem(t, e) {
    if (t) {
      const s = t.find((n) => n.value == e);
      if (s)
        return s;
      for (let n = 0; n < t.length; n++) {
        const a = this.findCodeListItem(
          t[n].children,
          e
        );
        if (a)
          return a;
      }
    }
  }
  /**
   * 插入@
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
   */
  insertNode(t) {
    if (this.quoteCodelistMap.has("type") && t.type) {
      const s = this.quoteCodelistMap.get("type"), n = this.findCodeListItem(s.codeListItems, t.type);
      n && n.sysImage && Object.assign(t, {
        icon: n.sysImage.rawContent
      });
    }
    const e = {
      type: "marker",
      script: this.quoteScript,
      data: t,
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.deleteBackward("character");
    for (let s = 0; s < this.query.length; s++)
      this.editor.deleteBackward("character");
    this.editor.insertNode(e), this.editor.move(1);
  }
  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  getNodeInfo(t) {
    return Object.assign(t, { script: this.quoteScript }), '<span data-w-e-type="marker" data-w-e-is-void data-w-e-is-inline data-value="'.concat(encodeURIComponent(
      JSON.stringify(t)
    ), '"></span>');
  }
  /**
   * 解析marker节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MarkerController
   */
  parseNode(t) {
    return q.execScriptFn(
      { value: t, controller: this },
      this.quoteInScript,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    );
  }
  /**
   * 处理公共参数
   *
   * @param {IData} data
   * @param {IContext} context
   * @param {IParams} params
   * @return {*}  {{ context: IContext; params: IParams }}
   * @memberof MarkerController
   */
  handlePublicParams(t, e, s) {
    const { navigateContexts: n, navigateParams: a } = this.model;
    let l = {};
    n && t && (l = Ue(n, t, s, e));
    const d = Object.assign(e.clone(), l);
    let u = {};
    return a && t && (u = Ue(a, t, s, e)), { context: d, params: u };
  }
  /**
   * 获取工作项信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MarkerController
   */
  load(t = {}) {
    const { context: e, params: s } = this.handlePublicParams(
      this.data,
      this.context,
      this.params
    ), n = t.isInitialLoad === !0, a = t.isLoadMore === !0;
    n ? this.curPage = 0 : a && (this.curPage += 1);
    const l = q.execScriptFn(
      { data: this.data, context: e, params: s },
      this.quoteUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), d = {
      ...s,
      query: this.query,
      size: this.size,
      page: this.curPage,
      ...this.quoteParams
    };
    return ibiz.net[this.quoteMethod](l, d);
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MarkerController
   */
  toUIData(t) {
    return t.map((e) => {
      const s = {};
      return Object.keys(this.quoteFieldMap).forEach((n) => {
        s[n] = e[this.quoteFieldMap[n]];
      }), s;
    });
  }
  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MarkerController
   */
  async openPopover(t) {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      void 0,
      {
        placement: "bottom-start",
        autoClose: !0,
        width: "300px",
        noArrow: !0
      }
    ), await this.overlay.present(t), this.execting = !0;
    const e = await this.overlay.onWillDismiss();
    return this.execting = !1, e.data || [];
  }
  createOverlayView() {
    return (t) => nt(Cs, {
      controller: this,
      modal: t
    });
  }
  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof MarkerController
   */
  async loadCodeList(t) {
    const e = ibiz.hub.getApp(this.context.srfappid), s = e.codeList.getCodeList(t), n = await e.codeList.get(
      t,
      this.context,
      this.params
    );
    return { codeList: s, codeListItems: n };
  }
}
function Ss(i) {
  const { script: t = "", data: e = {} } = i, s = q.execScriptFn({ data: e }, t, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const ks = {
  type: "mention",
  elemToHtml: Ss
};
function Ms(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || ""), e = JSON.parse(t);
  return {
    type: "mention",
    script: e.script,
    data: e,
    children: [{ text: "" }]
  };
}
const xs = {
  selector: 'span[data-w-e-type="mention"]',
  parseElemHtml: Ms
};
function Ls(i) {
  const { data: t = {} } = i, e = {
    name: "@".concat(t.name),
    id: t.id
  };
  return ae(
    "mention-elem",
    {
      dataset: { value: JSON.stringify(e) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const Ps = {
  type: "mention",
  renderElem: Ls
};
class Ts {
  constructor() {
    o(this, "title", "提及成员");
    o(this, "tag", "button");
    o(this, "iconSvg", '<svg t="1705979200437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z" fill="#333333" p-id="4219"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    t.insertText("@");
  }
}
const Hs = {
  key: "mention",
  factory() {
    return new Ts();
  }
}, Fs = {
  renderElems: [Ps],
  elemsToHtml: [ks],
  parseElemsHtml: [xs],
  menus: [Hs]
};
class Ns {
  /**
   * Creates an instance of MenTionController.
   * @param {IData} option
   * @memberof MenTionController
   */
  constructor() {
    /**
     *云系统操作者Map
     *
     * @memberof MenTionController
     */
    o(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    o(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    o(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    o(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof MenTionController
     */
    o(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MenTionController
     */
    o(this, "editor");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "userUrl", "");
    /**
     * 人员UI转化
     */
    o(this, "userFieldMap", {
      id: "id",
      name: "name"
    });
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MenTionController
     */
    o(this, "userMethod", "post");
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "userScript", "`@{userid=${data.id},name=${data.name}}`");
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "userInScript", "value.replaceAll(/@{userid=(.+?),name=(.+?)}/g,(x, id, name) => {return controller.getNodeInfo({ id, name })})");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    o(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MenTionController
     */
    o(this, "items", []);
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MenTionController
     */
    o(this, "overlay", null);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MenTionController
     */
    o(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MenTionController
     */
    o(this, "execting", !1);
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MenTionController
     */
    o(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MenTionController
     */
    o(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MenTionController
     */
    o(this, "size", 20);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    o(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    o(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MenTionController
     */
    o(this, "cleanup", _);
    this.registerNode();
  }
  /**
   * 声明'@'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof MenTionController
   */
  mentionPlugin(t) {
    const { insertText: e, isInline: s, isVoid: n } = t;
    return t.insertText = (a) => {
      if (!this.editor) {
        e(a);
        return;
      }
      if (!this.editor.isFocused()) {
        e(a);
        return;
      }
      if (V.getSelectedElems(t).some((u) => t.isVoid(u))) {
        e(a);
        return;
      }
      a === "@" && !this.execting && (this.query = "", this.showModal()), e(a);
    }, t.isInline = (a) => V.getNodeType(a) === "mention" ? !0 : s(a), t.isVoid = (a) => V.getNodeType(a) === "mention" ? !0 : n(a), t;
  }
  registerNode() {
    window.mentionIsRegiter || (D.registerModule(Fs), window.mentionIsRegiter = !0), D.registerPlugin(this.mentionPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MenTionController
   */
  async init(t, e) {
    if (this.model = e.model, this.context = e.context, this.params = e.params, this.evt = e.evt, this.data = e.data, this.editor = t, this.editorParams = this.model.editorParams, this.editorParams) {
      const { USERURL: n, USERFIELDMAP: a, USERMETHOD: l, USERSCRIPT: d, USERINSCRIPT: u } = this.editorParams;
      n && (this.userUrl = n), a && (this.userFieldMap = JSON.parse(a)), l && (this.userMethod = l.toLowerCase()), d && (this.userScript = d), u && (this.userInScript = u);
    }
    const s = this.editor.getEditableContainer();
    s && (this.cleanup = xe(s, "keydown", (n) => {
      var a;
      this.execting && this.presetPreventEvents.includes(n.keyCode) && n.preventDefault(), this.execting && this.presetPreventPropEvents.includes(n.keyCode) && (n.stopPropagation(), (a = this.overlay) == null || a.dismiss());
    })), await this.getOperatorUserList();
  }
  /**
   * 获取云系统操作者
   *
   * @memberof MenTionController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((s) => [s.value, s])
    );
  }
  onDestroyed() {
    this.cleanup !== _ && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
  // 显示弹框
  showModal() {
    if (!this.userUrl)
      throw new ne("未配置提及用户USERURL编辑器参数！");
    const t = document.getSelection();
    if (!t)
      return;
    const { focusNode: e } = t;
    e && this.openUserPopover(e.parentNode).then(
      (s) => {
        s.length > 0 && this.insertNode(s[0]);
      }
    );
  }
  /**
   * 插入@
   *
   * @param {IDomEditor} editor
   * @memberof MenTionController
   */
  insertNode(t) {
    const e = {
      type: "mention",
      script: this.userScript,
      data: t,
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.deleteBackward("character");
    for (let s = 0; s < this.query.length; s++)
      this.editor.deleteBackward("character");
    this.editor.insertNode(e), this.editor.move(1);
  }
  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  getNodeInfo(t) {
    return Object.assign(t, { script: this.userScript }), '<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="'.concat(encodeURIComponent(
      JSON.stringify(t)
    ), '"></span>');
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MenTionController
   */
  parseNode(t) {
    return q.execScriptFn(
      { value: t, controller: this },
      this.userInScript,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    );
  }
  /**
   * 处理公共参数
   *
   * @param {IData} data
   * @param {IContext} context
   * @param {IParams} params
   * @return {*}  {{ context: IContext; params: IParams }}
   * @memberof MenTionController
   */
  handlePublicParams(t, e, s) {
    const { navigateContexts: n, navigateParams: a } = this.model;
    let l = {};
    n && t && (l = Ue(n, t, s, e));
    const d = Object.assign(e.clone(), l);
    let u = {};
    return a && t && (u = Ue(a, t, s, e)), { context: d, params: u };
  }
  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MenTionController
   */
  getUsers(t = {}) {
    const { context: e, params: s } = this.handlePublicParams(
      this.data,
      this.context,
      this.params
    ), n = t.isInitialLoad === !0, a = t.isLoadMore === !0;
    n ? this.curPage = 0 : a && (this.curPage += 1);
    const l = q.execScriptFn(
      { data: this.data, context: e, params: s },
      this.userUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), d = {
      ...s,
      query: this.query,
      size: this.size,
      page: this.curPage
    };
    return ibiz.net[this.userMethod](l, d);
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MenTionController
   */
  toUIData(t) {
    return t.map((e) => {
      const s = {};
      return Object.keys(this.userFieldMap).forEach((n) => {
        s[n] = e[this.userFieldMap[n]];
      }), s;
    });
  }
  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MenTionController
   */
  async openUserPopover(t) {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      void 0,
      {
        placement: "bottom-start",
        autoClose: !0,
        width: "300px",
        noArrow: !0
      }
    ), await this.overlay.present(t), this.execting = !0;
    const e = await this.overlay.onWillDismiss();
    return this.execting = !1, e.data || [];
  }
  createOverlayView() {
    return (t) => nt(ws, {
      controller: this,
      modal: t
    });
  }
}
function As(i) {
  const { script: t = "", data: e = {} } = i, s = q.execScriptFn({ data: e }, t, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const Is = {
  type: "page",
  elemToHtml: As
};
function Os(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || ""), e = JSON.parse(t);
  return {
    type: "page",
    script: e.script,
    data: e,
    children: [{ text: "" }]
  };
}
const Ds = {
  selector: 'span[data-w-e-type="page"]',
  parseElemHtml: Os
};
function Rs(i) {
  const { data: t = {} } = i, e = {
    name: "".concat(t.name),
    id: t.id
  };
  return ae(
    "mention-elem",
    {
      dataset: { value: JSON.stringify(e) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const Us = {
  type: "Page",
  renderElem: Rs
};
class zs {
  constructor() {
    o(this, "title", "页面");
    o(this, "tag", "button");
    o(this, "iconSvg", '<svg t="1707293566679" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6103" width="200" height="200"><path d="M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z" p-id="6104"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    throw new ne("暂未支持上传页面！");
  }
}
const $s = {
  key: "page",
  factory() {
    return new zs();
  }
}, Bs = {
  renderElems: [Us],
  elemsToHtml: [Is],
  parseElemsHtml: [Ds],
  menus: [$s]
};
class js {
  /**
   * Creates an instance of PageController.
   * @param {IData} option
   * @memberof PageController
   */
  constructor() {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof PageController
     */
    o(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    o(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    o(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof PageController
     */
    o(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof PageController
     */
    o(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof PageController
     */
    o(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof PageController
     */
    o(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof PageController
     */
    o(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof PageController
     */
    o(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.pageIsRegiter || (D.registerModule(Bs), window.pageIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof PageController
   */
  async init(t, e) {
    this.model = e.model, this.context = e.context, this.params = e.params, this.evt = e.evt, this.data = e.data, this.editor = t, this.editorParams = this.model.editorParams;
  }
  /**
   * 控制器销毁
   *
   * @memberof PageController
   */
  onDestroyed() {
  }
  /**
   * 插入节点
   *
   * @param {IDomEditor} editor
   * @memberof PageController
   */
  insertNode(t) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof PageController
   */
  parseNode(t) {
    return t;
  }
}
const Vs = {
  type: "emoji",
  renderElem: (i) => {
    const { data: t = {} } = i;
    return ae(
      "emoji-elem",
      {
        dataset: { value: t.emoji ? Ut(t.emoji) : "" },
        props: {
          contentEditable: !1
          // 不可编辑
        }
      },
      []
    );
  }
}, qs = {
  type: "emoji",
  elemToHtml: (i) => {
    const { data: t } = i;
    return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(t.emoji, "</span>");
  }
}, Js = {
  selector: 'span[data-w-e-type="emoji"]',
  parseElemHtml: (i) => ({
    data: {
      emoji: i.innerHTML
    },
    type: "emoji",
    children: [{ text: "" }]
  })
};
class Ks {
  /**
   * Creates an instance of EmojiButtonMenu.
   * @memberof EmojiButtonMenu
   */
  constructor() {
    /**
     * 标题
     *
     * @memberof EmojiButtonMenu
     */
    o(this, "title", "表情");
    /**
     * 菜单类型
     *
     * @memberof EmojiButtonMenu
     */
    o(this, "tag", "button");
    /**
     * 菜单图标
     *
     * @memberof EmojiButtonMenu
     */
    o(this, "iconSvg", "<svg viewBox='0 0 1040 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1490' width='1em' height='1em' stroke='var(--w-e-toolbar-color)' > <path stroke-width='38' d='M512.075261 1024A511.774217 511.774217 0 1 1 730.482434 48.769072a37.630457 37.630457 0 1 1-32.061149 68.035867 436.513303 436.513303 0 1 0 250.468323 395.270322 37.630457 37.630457 0 0 1 75.260914 0 512.526826 512.526826 0 0 1-512.075261 511.924739z' p-id='1491' ></path> <path stroke-width='38' d='M333.857416 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.499339 57.499339 0 0 0-57.348817-57.348817zM686.53006 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.348817 57.348817 0 0 0-57.348817-57.348817zM515.236219 783.165074c-162.864619 0-262.359547-141.942084-262.359547-219.159782a30.104366 30.104366 0 0 1 60.208731 0c0 48.618551 76.314567 158.951051 202.150816 158.951051s193.571072-134.114949 193.571072-158.951051a30.104366 30.104366 0 0 1 60.208731 0c0 54.488902-90.012054 219.159782-253.779803 219.159782zM1009.549904 207.720123h-67.132735V139.985301a30.104366 30.104366 0 1 0-60.208732 0v67.734822h-67.734822a30.104366 30.104366 0 0 0-30.104366 30.104366 30.104366 30.104366 0 0 0 30.104366 30.104366h67.734822v67.734823a30.104366 30.104366 0 0 0 60.208732 0v-67.734823h67.734823a30.104366 30.104366 0 0 0 30.104365-30.104366 30.104366 30.104366 0 0 0-30.706453-30.104366z' p-id='1492' ></path> </svg>");
  }
  /**
   * 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof EmojiButtonMenu
   */
  isActive() {
    return !1;
  }
  /**
   * 获取菜单执行时的 value ，用不到则返回空 字符串或 false
   *
   * @return {*}  {(string | boolean)}
   * @memberof EmojiButtonMenu
   */
  getValue() {
    return !1;
  }
  /**
   * 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof EmojiButtonMenu
   */
  isDisabled() {
    return !1;
  }
  /**
   * 点击菜单时触发的函数
   *
   * @param {IDomEditor} editor
   * @memberof EmojiButtonMenu
   */
  exec(t) {
    t.emit("openEmojiSelect");
  }
}
const _s = {
  key: "emoji",
  factory() {
    return new Ks();
  }
}, Zs = {
  renderElems: [Vs],
  elemsToHtml: [qs],
  parseElemsHtml: [Js],
  menus: [_s]
};
class Ws {
  /**
   * Creates an instance of EmojiController.
   * @param {IData} option
   * @memberof EmojiController
   */
  constructor() {
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof EmojiController
     */
    o(this, "editor");
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof EmojiController
     */
    o(this, "overlay", null);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    o(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    o(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof EmojiController
     */
    o(this, "cleanup", _);
    this.registerNode();
  }
  /**
   * 声明' :'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof EmojiController
   */
  emojiPlugin(t) {
    const { isInline: e, isVoid: s } = t;
    return t.isInline = (n) => V.getNodeType(n) === "emoji" ? !0 : e(n), t.isVoid = (n) => V.getNodeType(n) === "emoji" ? !0 : s(n), t;
  }
  registerNode() {
    window.emojiIsRegiter || (D.registerModule(Zs), window.emojiIsRegiter = !0), D.registerPlugin(this.emojiPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof EmojiController
   */
  async init(t) {
    this.editor = t, this.listenEvent();
  }
  /**
   * 监听事件
   *
   * @private
   * @memberof EmojiController
   */
  listenEvent() {
    const t = this.editor.getEditableContainer();
    this.editor.on("openEmojiSelect", () => this.openEmojiSelect()), this.cleanup = xe(t, "keydown", (e) => {
      var s;
      this.overlay && this.presetPreventEvents.includes(e.keyCode) && e.preventDefault(), this.overlay && this.presetPreventPropEvents.includes(e.keyCode) && (e.stopPropagation(), (s = this.overlay) == null || s.dismiss());
    });
  }
  /**
   * 打开表情选择
   *
   * @memberof EmojiController
   */
  async openEmojiSelect() {
    const t = document.getSelection(), { focusNode: e } = t;
    e && (this.overlay = ibiz.overlay.createPopover(
      (s) => nt(bs, {
        controller: this,
        modal: s
      }),
      void 0,
      {
        width: "auto",
        noArrow: !0,
        autoClose: !0,
        placement: "bottom-start"
      }
    ), await this.overlay.present(e.parentNode), this.overlay.onWillDismiss().then((s) => {
      var l;
      const n = s, a = (l = n.data) == null ? void 0 : l[0];
      n.ok && a && this.addEmojiNode(a), this.overlay = null;
    }));
  }
  /**
   * 添加表情
   *
   * @param {string} data
   * @memberof EmojiController
   */
  addEmojiNode(t) {
    const e = {
      data: t,
      type: "emoji",
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.insertNode(e), this.editor.move(1);
  }
  /**
   * 解析emoji节点
   *
   * @param {string} value
   * @return {*}
   * @memberof EmojiController
   */
  parseNode(t) {
    return q.execScriptFn(
      { value: t, controller: this },
      'value.replaceAll(/\\{\\"\\emoji\\":\\"(.+?)\\"\\}/g,(x, emoji) => {return \'<span data-w-e-type="emoji" class="emoji">\'+emoji+\'</span>\'})',
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    );
  }
  onDestroyed() {
    this.cleanup !== _ && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
}
class G {
  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  static init(t) {
    this.registerMap.set("mention", Ns), this.registerMap.set("marker", Es), this.registerMap.set("attachments", Xt), this.registerMap.set("codesnippet", cs), this.registerMap.set("page", js), this.registerMap.set("emoji", Ws), this.presetNodes.forEach((e) => {
      this.registerPlugin({
        type: e,
        id: "".concat(e).concat(t)
      });
    });
  }
  /**
   * 注册节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  static registerPlugin(t) {
    const { type: e, id: s } = t;
    if (this.customNodeMap.has(s))
      return this.customNodeMap.get(s);
    const n = this.registerMap.get(e);
    if (n) {
      const a = new n();
      return this.customNodeMap.set(s, a), a;
    }
  }
  /**
   * 根据uuid获取注册插件
   *
   * @static
   * @param {string} id
   * @return {*}
   * @memberof CustomNodeFactory
   */
  static getPluginsById(t) {
    const e = [];
    return this.presetNodes.forEach((s) => {
      this.customNodeMap.has("".concat(s).concat(t)) && e.push(this.customNodeMap.get("".concat(s).concat(t)));
    }), e;
  }
  /**
   * 卸载节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  static unregisterPlugin(t) {
    const { id: e } = t;
    this.customNodeMap.has(e) && this.customNodeMap.delete(e);
  }
  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  static destroy(t) {
    this.presetNodes.forEach((e) => {
      this.unregisterPlugin({
        id: "".concat(e).concat(t)
      });
    }), this.registerMap.delete("mention"), this.registerMap.delete("marker"), this.registerMap.delete("attachments"), this.registerMap.delete("codesnippet"), this.registerMap.delete("page"), this.registerMap.delete("emoji");
  }
}
/**
 * 自定义节点
 *
 * @static
 * @type {IData}
 * @memberof CustomNodeFactory
 */
o(G, "customNodeMap", /* @__PURE__ */ new Map()), /**
 * 预置注册表
 *
 * @type {Map<string, any>}
 * @memberof CustomNodeFactory
 */
o(G, "registerMap", /* @__PURE__ */ new Map()), /**
 * 预置注册节点
 *
 * @static
 * @memberof CustomNodeFactory
 */
o(G, "presetNodes", [
  "mention",
  "marker",
  "attachments",
  "codesnippet",
  "page",
  "emoji"
]);
class Qs extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ["data-value"];
  }
  attributeChangedCallback(t, e, s) {
    if (t === "data-value") {
      if (s && e === s)
        return;
      const n = JSON.parse(s), a = this.attachShadow({ mode: "open" }), l = a.ownerDocument;
      if (n.icon) {
        const u = l.createElement("span");
        u.part.add("svg"), u.innerHTML = n.icon, a.appendChild(u);
      }
      if (n.identifier) {
        const u = l.createElement("span");
        u.part.add("identifier"), u.innerHTML = n.identifier, a.appendChild(u);
      }
      if (n.name) {
        const u = l.createElement("span");
        u.part.add("name"), u.innerHTML = n.name, a.appendChild(u);
      }
      const d = l.createElement("style");
      d.innerHTML = "\n      svg {\n        height: 1em;\n        width: 1em;\n      }\n    ", a.appendChild(d);
    }
  }
}
class Ys extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ["data-value"];
  }
  attributeChangedCallback(t, e, s) {
    if (t === "data-value") {
      if (s && e === s)
        return;
      const n = JSON.parse(s), a = this.attachShadow({ mode: "open" }), l = a.ownerDocument, d = l.createElement("div");
      d.part.add("box"), d.classList.add("personnel-marker_box");
      let u = "";
      if (n.name) {
        u = ie.stringToHexColor(n.name);
        const E = l.createElement("div");
        E.part.add("name"), E.classList.add("personnel-marker_name"), E.style.backgroundColor = u, E.innerHTML = n.name, d.appendChild(E);
      }
      const p = l.createElement("div");
      p.part.add("line"), p.classList.add("personnel-marker_line"), p.style.backgroundColor = u, d.appendChild(p), a.appendChild(d);
      const m = l.createElement("style");
      d.appendChild(m);
    }
  }
}
class Gs extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ["data-value"];
  }
  attributeChangedCallback(t, e, s) {
    if (t === "data-value") {
      if (s && e === s)
        return;
      const n = this.attachShadow({ mode: "open" }), l = n.ownerDocument.createElement("span");
      l.innerHTML = s, l.part.add("box"), l.classList.add("emoji-elem_box"), n.appendChild(l);
    }
  }
}
class Xs {
  constructor() {
    o(this, "title", "格式刷");
    o(this, "tag", "button");
    o(this, "fragment", []);
    o(this, "format", {});
    o(this, "editor", null);
    o(this, "excting", !1);
    o(this, "iconSvg", '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="aqseditor/paintformat" stroke-width="1" fill-rule="evenodd"><path d="M3 5.24h10V2H3v3.24zM13.299 1H2.701A.701.701 0 0 0 2 1.701v3.838c0 .387.314.701.701.701h6.236L7.621 7.438h-.002v2.233h-.768v5.184L9.404 13.1V9.671h-.585V7.97l1.9-1.73h2.58A.701.701 0 0 0 14 5.539V1.701A.701.701 0 0 0 13.299 1z" id="aqsFill-1"></path></g></svg>');
    o(this, "setPaintFormat", () => {
      if (!this.editor)
        return;
      const t = this.editor.getSelectionText();
      if (t && Object.keys(this.format).length > 0) {
        const e = { ...this.format, text: t };
        this.editor.insertNode(e), this.excting || this.clearFormat();
      }
    });
    o(this, "onPaintFormat", yt(this.setPaintFormat, 500, !1));
    o(this, "throttleHandle", this.throttle(this.handle, 300));
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return Object.keys(this.format).length > 0;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  calcFormat(t) {
    if (t.length > 0) {
      const { children: e } = t[0];
      e.forEach((s) => {
        Object.assign(this.format, s);
      });
    }
  }
  clearFormat() {
    this.format = {};
    const t = this.editor.getEditableContainer();
    t && t.classList.remove("is-paint-format");
    const e = document.querySelector(
      "button[data-menu-key='paintformat']"
    );
    e && e.classList.remove("active");
  }
  throttle(t, e) {
    let s = null;
    return function(...n) {
      s || (s = setTimeout(() => {
        t.apply(this, n), s = null, this.excting = !0;
      }, e));
    };
  }
  handle(t) {
    if (this.excting) {
      this.clearFormat(), this.excting = !1;
      return;
    }
    const e = t.getFragment();
    this.calcFormat(e), this.editor = t;
    const s = this.editor.getEditableContainer();
    s && s.classList.add("is-paint-format"), t.deselect(), t.on("change", this.onPaintFormat), t.on("clickOutside", () => {
      this.clearFormat(), this.excting = !1;
    });
  }
  // 点击菜单时触发的函数
  exec(t) {
    this.throttleHandle(t);
  }
}
const en = {
  key: "paintformat",
  factory() {
    return new Xs();
  }
};
function tn(i) {
  const { data: t = {} } = i;
  return "<span class='personnel-marker'>".concat(t == null ? void 0 : t.name, "</span>");
}
const sn = {
  type: "personnel-marker",
  elemToHtml: tn
};
function nn(i) {
  const t = decodeURIComponent(i.getAttribute("data-value") || "");
  return {
    type: "personnel-marker",
    data: JSON.parse(t),
    children: [{ text: "" }]
  };
}
const an = {
  selector: 'span[data-w-e-type="personnel-marker"]',
  parseElemHtml: nn
};
function on(i) {
  const { data: t = {} } = i, e = {
    name: "".concat(t.name),
    id: t.id
  };
  return ae(
    "personnel-marker-elem",
    {
      dataset: { value: JSON.stringify(e) },
      props: {
        contentEditable: !1
        // 不可编辑
      }
    },
    []
  );
}
const rn = {
  type: "personnel-marker",
  renderElem: on
}, ln = {
  renderElems: [rn],
  elemsToHtml: [sn],
  parseElemsHtml: [an]
}, cn = (i) => {
  const { isInline: t, isVoid: e, deleteBackward: s } = i;
  return i.deleteBackward = (n) => {
    const { selection: a } = i;
    if (a && a.focus.offset === 0) {
      const [l, d] = a.focus.path;
      let u = d, p = l, m = !1;
      d === 0 && l !== 0 ? (p = p - 1, m = !0) : d > 0 && (u = u - 1);
      const E = i.children[p].children[m ? i.children[p].children.length - 1 : u];
      (E == null ? void 0 : E.type) === "personnel-marker" && i.moveReverse(1);
    }
    s(n);
  }, i.isInline = (n) => V.getNodeType(n) === "personnel-marker" ? !0 : t(n), i.isVoid = (n) => V.getNodeType(n) === "personnel-marker" ? !1 : e(n), i;
};
class dn {
  constructor() {
    // TS 语法
    o(this, "title", "AI询问");
    o(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <text x="0" y="13" font-size="16" fill="black">AI</text></svg>');
    o(this, "tag", "button");
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(t) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(t) {
    return "aichart";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(t) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(t, e) {
    t.emit("aiClick");
  }
}
function un(i) {
  const { url: t, children: e } = i;
  let s = "_blank";
  return t.startsWith("./#/") && (s = "_self"), '<a href="'.concat(t, '" target="').concat(s, '">').concat(e[0].text, "</a>");
}
const hn = {
  type: "link",
  elemToHtml: un
};
class mn {
  constructor() {
    o(this, "title", "查看连接");
    o(this, "iconSvg", '<svg viewBox="0 0 1024 1024"><path d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z" p-id="10909"></path><path d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z" p-id="10910"></path><path d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z"></path></svg>');
    o(this, "tag", "button");
  }
  getSelectedLinkElem(t) {
    const e = V.getSelectedNodeByType(t, "link");
    return e == null ? null : e;
  }
  getValue(t) {
    const e = this.getSelectedLinkElem(t);
    return e && e.url || "";
  }
  isActive() {
    return !1;
  }
  isDisabled(t) {
    return t.selection == null || this.getSelectedLinkElem(t) == null;
  }
  exec(t, e) {
    if (!this.isDisabled(t)) {
      if (!e || typeof e != "string")
        throw new Error("打开链接失败, 路径为 '".concat(e, "'"));
      e.toString().startsWith("./#/") ? window.open("".concat(window.location.pathname).concat(e.slice(1)), "_self") : window.open(e, "_blank");
    }
  }
}
const fn = {
  key: "customViewLink",
  factory() {
    return new mn();
  }
}, pn = {
  menus: [fn],
  elemsToHtml: [hn]
};
class vn extends Pt {
  constructor() {
    super(...arguments);
    /**
     * 用户头像数据
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    o(this, "userAvatar", "");
    /**
     * 上传参数
     */
    o(this, "uploadParams");
    /**
     * 下载参数
     */
    o(this, "exportParams");
    /**
     * 最小高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    o(this, "minHeight", 48);
    /**
     * 最大高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    o(this, "maxHeight", 315);
    /**
     * 是否折叠
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    o(this, "collapsed", g(!0));
    /**
     * 是否隐藏
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    o(this, "hidden", g(!1));
    /**
     * 回复
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    o(this, "reply", g(""));
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    o(this, "replyScript", "");
    /**
     * 编辑器模式
     *
     * @type {('comment' | 'default')}
     * @memberof HtmlCommentController
     */
    o(this, "mode", "comment");
    /**
     * 插入工具栏项
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    o(this, "insertKeys", []);
    /**
     * 绘制模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    o(this, "renderMode", "HTML");
    /**
     * 保存间隔
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    o(this, "saveInterval", 3e3);
    /**
     * 抛值模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    o(this, "emitMode", "BUTTON");
    /**
     * 唯一标识
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    o(this, "uuid", Me());
    /**
     * 实时编辑（协同编辑）
     */
    o(this, "enableRealtime", !1);
    /**
     * 编辑器实例
     */
    o(this, "editor");
    /**
     * 是否在处理中
     */
    o(this, "processing", g(!1));
    /**
     * 用户标记数据map
     */
    o(this, "persMarkMap", /* @__PURE__ */ new Map());
    /**
     * 消息信息
     */
    o(this, "msg");
    /**
     * 是否已监听
     */
    o(this, "hasSubscribe", !1);
    /**
     * 应用实体服务
     *
     * @type {IAppDEService}
     * @memberof HtmlCommentController
     */
    o(this, "deService");
    /**
     * 自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:52
     * @type {IAppDEACMode}
     */
    o(this, "deACMode");
    /**
     * AI 聊天自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:37
     * @type {boolean}
     */
    o(this, "chatCompletion", !1);
    o(this, "evt", new Tt(
      this.getEventArgs.bind(this)
    ));
  }
  getEventArgs() {
    return {
      context: this.context,
      params: this.params,
      data: [],
      eventArg: "",
      targetName: this.model.name,
      view: this.getView()
    };
  }
  async onInit() {
    await super.onInit(), await this.getCurrentUserAvatar();
    const { model: e } = this;
    if (e.appDEACModeId && (this.deACMode = await Ht(
      e.appDEACModeId,
      e.appDataEntityId,
      this.context.srfappid
    ), this.deACMode && this.deACMode.actype === "CHATCOMPLETION" && (this.deService = await ibiz.hub.getApp(e.appId).deService.getService(this.context, e.appDataEntityId), this.chatCompletion = !0)), this.registerCustomElem(), this.editorParams) {
      const {
        uploadParams: s,
        exportParams: n,
        MINHEIGHT: a,
        MAXHEIGHT: l,
        REPLYSCRIPT: d,
        MODE: u,
        INSERTKEYS: p,
        RENDERMODE: m,
        SAVEINTERVAL: E,
        EMITMODE: k,
        DEFAULTCOLLAPSE: M,
        ENABLEREALTIME: N
      } = this.editorParams;
      if (s)
        try {
          this.uploadParams = JSON.parse(s);
        } catch (H) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              H
            ), "]编辑器参数 uploadParams 非 json 格式")
          );
        }
      if (n)
        try {
          this.exportParams = JSON.parse(n);
        } catch (H) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              H
            ), "]编辑器参数 exportParams 非 json 格式")
          );
        }
      a && (this.minHeight = Number(a)), l && (this.maxHeight = Number(l)), d && (this.replyScript = d), u && (this.mode = u.toLowerCase()), p && (this.insertKeys = JSON.parse(p)), m && (this.renderMode = m), E && (this.saveInterval = $t(E)), k && (this.emitMode = k), M && (this.collapsed.value = !Object.is(M, "TRUE") && !Object.is(M, "true")), N && (this.enableRealtime = Object.is(N, "TRUE") || Object.is(N, "true"));
    }
    G.init(this.uuid), this.evt.on("onChange", () => {
      if (this.parent.form)
        return;
      const s = ibiz.uiDomainManager.get(this.context.srfsessionid);
      s && s.dataChange();
    }), this.initMarkOpenData(), this.listenViewDestroyed();
  }
  /**
   * 注册自定义元素
   *
   * @private
   * @memberof HtmlCommentController
   */
  registerCustomElem() {
    window.customElements.get("mention-elem") || window.customElements.define("mention-elem", Qs), window.customElements.get("personnel-marker-elem") || window.customElements.define(
      "personnel-marker-elem",
      Ys
    ), window.customElements.get("emoji-elem") || window.customElements.define("emoji-elem", Gs), window.paintFormatIsRegiter || (D.registerMenu(en), window.paintFormatIsRegiter = !0), window.personnelMarkerIsRegiter || (D.registerModule(ln), window.personnelMarkerIsRegiter = !0), D.registerRenderStyle((e, s) => Vt(e, s)), D.registerPlugin(cn), window.aichartRegister || (D.registerMenu({
      key: "aichart",
      factory() {
        return new dn();
      }
    }), window.aichartRegister = !0), window.customLinkIsRegiter || (D.registerModule(pn), window.customLinkIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof HtmlCommentController
   */
  onCreated(e, s, n) {
    G.getPluginsById(this.uuid).forEach((l) => {
      l.init(e, {
        model: this.model,
        data: s,
        toolbarConfig: n,
        context: this.context,
        params: this.params,
        evt: this.evt
      });
    });
  }
  /**
   * 处理编辑
   * @param item
   */
  handleEdit(e) {
    const { data: s } = e;
    if (s) {
      this.processing.value = !0;
      const n = this.persMarkMap.get(e.username);
      s.type === "set_selection" ? this.drawPersonnelMarker({
        id: e.username,
        cursor: s.cursor
      }) : s.type === "set_node" && (n != null && n.cursor.selectionRange) ? this.setPersSelectionMark({
        persMarkData: n,
        mark: s.newProperties
      }) : this.editor.apply(s), this.processing.value = !1;
    }
  }
  /**
   * 处理查看
   * @param item
   */
  handleView(e) {
  }
  /**
   * 处理更新
   * @param item
   */
  handleUpdate(e) {
  }
  /**
   * 处理关闭
   * @param item
   */
  handleClose(e) {
  }
  /**
   * 标记打开数据回调
   * @param msg
   */
  markOpenDataCallback(e) {
    const { action: s, data: n } = e;
    if (this.enableRealtime)
      switch (s) {
        case "VIEW":
          this.handleView(e);
          break;
        case "EDIT":
          this.handleEdit(e);
          break;
        case "UPDATE":
          this.handleUpdate(e);
          break;
        case "CLOSE":
          this.handleClose(e);
          break;
      }
  }
  /**
   * 初始化MarkOpenData逻辑
   */
  initMarkOpenData() {
    if (this.markOpenDataCallback = this.markOpenDataCallback.bind(this), this.enableRealtime) {
      const e = this.parent.form || this.parent.grid;
      e && (e.evt.on("onLoadSuccess", (s) => {
        const n = s.data[0];
        this.msg = { deName: n.srfdecodename, srfkey: n.srfkey }, ibiz.markOpenData.action(this.msg.deName, this.msg.srfkey, "VIEW"), this.hasSubscribe || ibiz.markOpenData.subscribe(
          this.msg.deName,
          this.msg.srfkey,
          this.markOpenDataCallback
        );
      }), e.evt.on("onSaveSuccess", () => {
        this.msg.srfkey && ibiz.markOpenData.action(
          this.msg.deName,
          this.msg.srfkey,
          "UPDATE"
        );
      }), e.view.evt.on("onCloseView", () => {
        this.msg.srfkey && ibiz.markOpenData.action(this.msg.deName, this.msg.srfkey, "CLOSE");
      }));
    }
  }
  /**
   * 在线编辑
   * @param editor
   * @param item
   */
  onLineEditing(e) {
    this.editor = e;
    const { apply: s } = e;
    e.apply = (n) => {
      if (s(n), this.enableRealtime && !this.processing.value) {
        const a = { ...n };
        if (n.type === "set_selection") {
          const l = this.handleCursor(n);
          Object.assign(a, { cursor: l });
        }
        ibiz.markOpenData.send(this.msg.deName, this.msg.srfkey, "EDIT", a);
      }
    };
  }
  /**
   * 处理光标信息
   * @param op
   * @returns
   */
  handleCursor(e) {
    const s = {};
    e.properties && (s.position = {
      path: e.properties.focus.path,
      offset: Y.calcOffsetByPoint(this.editor, e.properties.focus)
    }), e.newProperties && (s.newPosition = {
      path: e.newProperties.focus.path,
      offset: Y.calcOffsetByPoint(
        this.editor,
        e.newProperties.focus
      )
    });
    const { selection: n } = this.editor;
    return !ze.isRange(e.newProperties) && !ze.isRange(e.properties) && n && (s.selectionRange = {
      anchor: {
        path: n.anchor.path,
        offset: Y.calcOffsetByPoint(this.editor, n.anchor)
      },
      focus: {
        path: n.focus.path,
        offset: Y.calcOffsetByPoint(this.editor, n.focus)
      }
    }), s;
  }
  /**
   * 组件销毁
   *
   * @memberof HtmlCollapseController
   */
  onDestroyed() {
    G.getPluginsById(this.uuid).forEach((s) => {
      s.onDestroyed();
    }), G.destroy(this.uuid), this.enableRealtime && ibiz.markOpenData.unsubscribe(
      this.msg.deName,
      this.msg.srfkey,
      this.markOpenDataCallback
    );
  }
  /**
   * 处理视图销毁
   *
   * @memberof HtmlCommentController
   */
  listenViewDestroyed() {
    const e = this.getView();
    e && e.evt.on("onDestroyed", () => {
      this.onDestroyed();
    });
  }
  /**
   * 解析所有注册节点
   *
   * @param {string} value
   * @return {*}
   * @memberof HtmlCommentController
   */
  parseNode(e) {
    let s = e;
    return G.getPluginsById(this.uuid).forEach((a) => {
      s = a.parseNode(s);
    }), s;
  }
  /**
   * 设置html
   *
   * @param {string} value
   * @memberof HtmlCommentController
   */
  async setValue(e) {
    this.collapsed.value = !1, this.hidden.value = !0, await z(), this.hidden.value = !1, await z();
    const s = this.parseNode(e);
    this.evt.emit("setHtml", {
      eventArg: s
    });
  }
  /**
   * 设置回复,data: {name: string, content: string}
   *
   * @param {IData} data
   * @memberof HtmlCommentController
   */
  setReply(e) {
    this.reply.value = ie.getEmojiCustomHtml(
      "".concat(e.name, ": ").concat(e.content)
    ), this.evt.emit("onSetReply", {
      eventArg: this.reply.value
    });
  }
  /**
   * 删除回复
   *
   * @memberof HtmlCommentController
   */
  removeReply() {
    this.reply.value = "", this.evt.emit("onRemoveReply", {
      eventArg: this.reply.value
    });
  }
  /**
   * 清空
   *
   * @memberof HtmlCommentController
   */
  clear() {
    this.reply.value = "", this.evt.emit("onRemoveReply", {
      eventArg: this.reply.value
    }), this.evt.emit("clear", {
      eventArg: ""
    }), this.collapsed.value = !0;
  }
  /**
   * 请求url获取文件流，并用JS触发文件下载
   *
   * @author lxm
   * @date 2022-11-17 14:11:09
   * @param {string} url
   * @param {IData} file
   */
  fileDownload(e) {
    ibiz.net.request(e.url, {
      method: "get",
      responseType: "blob",
      baseURL: ""
      // 已经有baseURL了，这里无需再写
    }).then((s) => {
      if (s.status !== 200)
        throw new ne("下载文件失败");
      if (s.data) {
        const n = e.name;
        zt(s.data, n);
      } else
        throw new ne("文件流数据不存在");
    });
  }
  /**
   * 切换折叠
   *
   * @memberof HtmlCommentController
   */
  toggleCollapse(e) {
    this.collapsed.value = !e && !this.collapsed.value;
  }
  /**
   * 绘制模式为json时，需要将返回数据的json内容转html
   *
   * @author ljx
   * @date 2024-03-09 15:11:09
   * @param {string} url
   * @param {IData} file
   */
  jsonToHtml(e) {
    let s = "";
    try {
      const n = JSON.parse(e);
      s = Ot({
        content: n
      }).getHtml();
    } catch (n) {
      s = e, ibiz.log.error("JSON字符串转换错误", n);
    }
    return s;
  }
  /**
   * 绘制模式为json时，处理抛值数据
   *
   * @author ljx
   * @date 2024-03-09 15:11:09
   * @param {string} url
   * @param {IData} file
   */
  toJson(e = []) {
    let s = "";
    try {
      s = JSON.stringify(e);
    } catch (n) {
      ibiz.log.error("JSON字符串转换错误");
    }
    return s;
  }
  /**
   * 绘制正在编辑人员标记
   * @param item 用户标记数据
   */
  drawPersonnelMarker(e) {
    var l;
    const { id: s } = e, n = {
      type: "personnel-marker",
      data: { name: s },
      children: [{ text: "" }],
      id: s
    }, a = (l = this.persMarkMap.get(s)) == null ? void 0 : l.cursor;
    Object.assign(e, { preCursor: a }), Y.movePersNode(this.editor, {
      node: n,
      param: e
    }), this.persMarkMap.set(s, e);
  }
  /**
   * 设置人员选区标记
   * @param item
   */
  setPersSelectionMark(e) {
    const { persMarkData: s, mark: n } = e, a = s.cursor.selectionRange;
    a && Y.addMarks(this.editor, {
      mark: n,
      selection: {
        anchor: Y.calcPointByOffset(this.editor, a.anchor),
        focus: Y.calcPointByOffset(this.editor, a.focus)
      }
    });
  }
  /**
   * 获取当前用户头像
   *
   * @memberof HtmlCommentController
   */
  async getCurrentUserAvatar() {
    var n, a;
    const e = await ibiz.hub.getApp(this.context.srfappid);
    let s = [];
    if (s = await e.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.context.srfuserid) {
      const l = s.filter((d) => d.value === this.context.srfuserid);
      l && l.length > 0 && (this.userAvatar = ((a = (n = l[0]) == null ? void 0 : n.data) == null ? void 0 : a.iconurl) || "");
    }
  }
  /**
   * 获取当前视图
   *
   * @return {*}
   * @memberof HtmlCommentController
   */
  getView() {
    const e = this.parent.form || this.parent.grid || this.parent.panel;
    if (e)
      return e.view;
  }
}
class gn {
  constructor() {
    o(this, "formEditor", "HtmlComment");
    o(this, "gridEditor", "HtmlComment");
  }
  async createController(t, e) {
    const s = new vn(t, e);
    return await s.init(), s;
  }
}
const yn = It(et, function(i) {
  i.component(st.name, st), i.component($e.name, $e), i.component(et.name, et), Ft(
    "EDITOR_CUSTOMSTYLE_COMMENT",
    () => new gn()
  );
}), Fn = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(i) {
    i.use(yn), i.component(
      "IBizHtmlContent",
      Lt(() => Promise.resolve().then(() => Bt))
    );
  }
};
export {
  yn as IBizHtmlComment,
  Fn as default
};
//# sourceMappingURL=index.es.js.map
