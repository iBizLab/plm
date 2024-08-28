import './style.css';
var Cl = Object.defineProperty;
var kl = (n, e, t) => e in n ? Cl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var p = (n, e, t) => (kl(n, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as Ne, ref as _, shallowRef as Ti, watch as tt, onBeforeUnmount as cs, onMounted as wn, nextTick as le, createVNode as C, resolveComponent as ue, createTextVNode as Se, computed as Tt, Fragment as El, onUnmounted as Ii, mergeProps as xl, reactive as Dl, withDirectives as hr, resolveDirective as sn, h as dr, defineAsyncComponent as Al } from "vue";
import { ScriptFactory as me, Srfuf as _l, convertNavData as Xn, EditorController as Tl, ControllerEvent as Il, getDeACMode as Ml, registerEditorProvider as Ol } from "@ibiz-template/runtime";
import { getHtmlProps as fr, useNamespace as Ue, useClickOutside as Ll, getEditorEmits as Rl, withInstall as Pl } from "@ibiz-template/vue3-util";
import { Editor as Mi, Toolbar as Oi } from "@wangeditor/editor-for-vue";
import { SlateEditor as P, SlateElement as Qn, SlateText as F, SlateNode as yn, SlatePath as it, SlateTransforms as Z, SlateRange as Ce, SlatePoint as $r, Boot as he, DomEditor as Le, createEditor as Nl } from "@wangeditor/editor";
import { getCookie as Li, createUUID as It, QXEvent as Ri } from "qx-util";
import { isNil as Pi } from "ramda";
import { CoreConst as Ni, debounce as gr, getToken as Ul, awaitTimeout as Fl, RuntimeError as ot, listenJSEvent as vn, NOOP as Ee, strToBase64 as $l, base64ToStr as Hl, downloadFileFromBlob as jl } from "@ibiz-template/core";
import { ElMessageBox as Ui } from "element-plus";
import { debounce as Fi, toNumber as Bl } from "lodash-es";
class $i {
  constructor(e, t) {
    /**
     * 模态实例
     * @memberof ModalUtil
     */
    p(this, "modalOrPanel");
    /**
     * 富文本Ref
     * @memberof ModalUtil
     */
    p(this, "htmlRef");
    this.modalOrPanel = e, this.htmlRef = t, this.calcModalPosition(), window.addEventListener("resize", this.handleResize.bind(this));
  }
  /**
   * 计算模态定位
   * @memberof ModalUtil
   */
  calcModalPosition() {
    if (!["dropPanel", "selectList"].includes(this.modalOrPanel.type))
      return;
    const { $elem: t } = this.modalOrPanel, s = t[0], r = this.htmlRef.$el, i = r.querySelector(".w-e-bar"), o = s.previousElementSibling, l = o.getAttribute("data-menu-key"), a = s.parentNode.parentNode.parentNode;
    if (!["bgColor", "color", "headerSelect"].includes(l) || !r || !i || !o || a.getAttribute("data-w-e-toolbar") === "true")
      return;
    const u = s.clientWidth, c = s.clientHeight, d = i.clientHeight, f = o.getBoundingClientRect(), g = f.bottom, v = f.right, w = f.top, b = f.left, S = "".concat(w + d, "px"), k = "".concat(b, "px"), E = "".concat(g - c - d, "px"), D = "".concat(v - u, "px"), M = { position: "fixed", left: k, top: S }, J = window.innerWidth, W = window.innerHeight;
    J - b < u && Object.assign(M, { left: D }), W - w - d < c && Object.assign(M, { top: E }), Object.assign(s.style, { top: "", bottom: "", left: "", right: "" }), Object.assign(s.style, M);
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
const es = /* @__PURE__ */ Ne({
  name: "IBizHtmlContent",
  props: fr(),
  emits: ["change", "blur", "focus", "enter", "infoTextChange", "link"],
  setup(n, {
    emit: e
  }) {
    const t = Ue("html"), s = n.controller, r = _(), i = _({});
    let o = null, l = 0;
    const a = _(), h = _(), u = Ti(), c = _(), d = _(""), f = _({
      Authorization: "Bearer ".concat(Li(Ni.TOKEN))
    }), g = _(""), v = _(""), w = _(!0), b = _(!1), S = _(!1), k = _(!1), E = _(!1), D = _(""), M = _([]), J = _(!1), W = s.model;
    W.editorParams && (W.editorParams.enableEdit && (b.value = !0, S.value = !0, w.value = s.toBoolean(W.editorParams.enableEdit) && !n.readonly && !n.disabled), W.editorParams.enableFullScreen && (k.value = s.toBoolean(W.editorParams.enableFullScreen)));
    const _e = (y) => {
      if (!u.value)
        return;
      const {
        eventArg: A
      } = y;
      A && (u.value.setHtml(A), u.value.focus(!0), e("focus"));
    }, We = () => {
      u.value && (u.value.blur(), u.value.setHtml(""));
    }, pt = () => {
      u.value && (u.value.focus(!0), e("focus"));
    };
    s.evt.on("setHtml", _e), s.evt.on("clear", We), s.evt.on("onSetReply", pt), tt(() => n.data, (y) => {
      if (y) {
        const A = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, y);
        g.value = A.uploadUrl, v.value = A.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const Ge = (y, A) => {
      if (A)
        return !0;
    }, An = (y) => y, we = {
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
    s.chatCompletion && we.toolbarKeys.push("aichart");
    const Vt = {
      placeholder: s.placeHolder,
      readOnly: b.value ? S.value : n.readonly,
      MENU_CONF: {
        // 图片上传
        uploadImage: {
          // 上传地址
          server: g.value,
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
          headers: f.value,
          // 跨域是否传递 cookie ，默认为 false
          withCredentials: !0,
          // 上传之前触发
          onBeforeUpload(y) {
            return y;
          },
          // 上传进度的回调函数
          onProgress(y) {
            console.log("progress", y);
          },
          // 单个文件上传成功之后
          onSuccess(y, A) {
            console.log("".concat(y.name, " 上传成功"), A);
          },
          // 单个文件上传失败
          onFailed(y, A) {
            console.log("".concat(y.name, " 上传失败"), A);
          },
          // 上传错误，或者触发 timeout 超时
          onError(y, A, R) {
            console.log("".concat(y.name, " 上传出错"), A, R);
          },
          // 自定义插入图片
          async customInsert(y, A) {
            const R = v.value.replace("%fileId%", y.id), z = y.filename;
            A(R, z, "");
          }
        },
        // 插入链接
        insertLink: {
          checkLink: Ge,
          // 也支持 async 函数
          parseLinkUrl: An
          // 也支持 async 函数
        },
        // 更新链接
        editLink: {
          checkLink: Ge,
          // 也支持 async 函数
          parseLinkUrl: An
          // 也支持 async 函数
        }
      },
      hoverbarKeys: {
        link: {
          menuKeys: ["editLink", "unLink", "customViewLink"]
        }
      }
    }, _n = async (y) => {
      const A = y.src;
      if (S.value)
        mt(A);
      else {
        const R = P.nodes(u.value, {
          match: (z) => !!(Qn.isElement(z) && z.type === "image"),
          universal: !0
        });
        if (R)
          for (const z of R) {
            const [X] = z;
            X.type === "image" && A.endsWith(X.src) && mt(X.src);
          }
      }
    }, mt = async (y) => {
      if (D.value = y, M.value = [y], await le(), c.value) {
        const {
          container: A
        } = c.value.$refs;
        A && A.children[0].click();
      }
    }, ks = (y) => {
      const A = y.getEditableContainer();
      A && A.querySelectorAll("img").forEach((z) => {
        z.onclick = (X) => {
          const fe = X.target;
          fe && _n(fe);
        };
      });
    }, ye = (y) => {
      if (c.value) {
        const {
          container: A
        } = c.value.$refs;
        if (A) {
          const R = A.querySelector(".el-image-viewer__wrapper");
          R == null || R[y]("keydown", Tn);
        }
      }
    }, Tn = async (y) => {
      (y.key === "Escape" || y.keyCode === 27) && (y.stopPropagation(), y.preventDefault(), await le(), ye("removeEventListener"), M.value = []);
    }, In = async () => {
      await le(), ye("addEventListener");
    };
    let qt;
    const Mn = async () => {
      var y;
      if (s.deService) {
        const A = await import("@ibiz-template-plugin/ai-chat"), R = A.chat || A.default.chat;
        qt = R;
        const z = R.create({
          question: async (fe) => {
            var x;
            const m = It();
            return await ((x = s.deService) == null ? void 0 : x.aiChatSse((T) => {
              if (ibiz.log.info("aiChatSse", T), T.actionstate === 20 && T.actionresult)
                z.addMessage({
                  messageid: m,
                  state: T.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: T.actionresult
                });
              else if (T.actionstate === 30 && T.actionresult) {
                const H = JSON.parse(T.actionresult), {
                  choices: G
                } = H;
                G && G.length > 0 && z.replaceMessage({
                  messageid: m,
                  state: T.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: G[0].content || ""
                });
              } else
                T.actionstate === 40 && z.replaceMessage({
                  messageid: m,
                  state: T.actionstate,
                  type: "ERROR",
                  role: "ASSISTANT",
                  content: T.actionresult
                });
            }, s.context, {}, {
              messages: fe
            })), z.addMessage({
              messageid: m,
              state: 10,
              type: "DEFAULT",
              role: "ASSISTANT",
              content: ""
            }), !0;
          },
          action: (fe, m) => {
            fe === "backfill" && (e("change", m.content), J.value = !0);
          },
          closed: () => {
            u.value && n.value && u.value && u.value.focus(!0);
          }
        }), X = await ((y = s.deService) == null ? void 0 : y.aiChatHistory(s.context, {}));
        X.data && Array.isArray(X.data) && X.data.forEach((fe) => {
          const m = {
            messageid: It(),
            state: 30,
            type: "DEFAULT",
            role: fe.role,
            content: fe.content
          };
          z.addMessage(m);
        });
      }
    };
    cs(() => {
      qt && qt.close();
      const y = u.value;
      y != null && y.destroy();
    });
    const On = (y) => {
      u.value = y;
      let A;
      y.on("modalOrPanelShow", (R) => {
        A = new $i(R, h.value);
      }), y.on("modalOrPanelHide", () => {
        A && A.destroy();
      }), y.setHtml(d.value), y.on("aiClick", () => {
        Mn();
      }), s.onCreated(u.value, n.data, we);
    }, Jt = (y) => {
      const A = y.getHtml();
      ks(y);
      const R = A === "<p><br></p>" ? "" : A;
      R === n.value || R === "" && Pi(n.value) || b.value || (e("change", R), s.evt.emit("onChange", {
        eventArg: R
      }));
    }, Ln = (y) => {
      s.evt.off("setHtml", _e), s.evt.off("clear", We), s.evt.off("onSetReply", pt);
    }, Rn = () => {
      e("focus"), s.evt.emit("onFocus", {
        eventArg: n.value
      });
    }, Yt = () => {
      e("blur"), s.evt.emit("onBlur", {
        eventArg: n.value
      });
    }, Pn = (y, A) => {
      alert("【自定义提示】".concat(A, " - ").concat(y));
    }, Kt = (y, A, R) => {
      R(!0);
    }, Nn = (y) => {
      const A = u.value;
      A != null && A.insertText(y);
    }, Un = () => {
      const y = u.value;
      y != null && console.log(y.getHtml());
    }, Ze = () => {
      const y = u.value;
      y != null && y.disable();
    }, Xe = () => {
      const y = u.value;
      y != null && y.enable();
    }, Fn = () => {
      if (r.value && a.value) {
        const y = r.value.offsetHeight;
        o = new ResizeObserver((A) => {
          const {
            height: R
          } = A[0].contentRect;
          if (R !== l) {
            const z = {
              height: "".concat(y - A[0].contentRect.height, "px")
            };
            i.value = t.cssVarBlock(z), l = R;
          }
        }), o.observe(a.value.selector);
      }
    }, $n = () => {
      var y, A;
      if (n.value) {
        const R = n.value.indexOf("</p>");
        if (R >= 0) {
          const z = (y = u.value.selection.anchor) == null ? void 0 : y.offset, X = (A = u.value.selection.anchor) == null ? void 0 : A.path;
          z === 0 && X.length > 0 && X[0] === 0 && u.value.move(R - 3);
        }
      }
    }, Wt = () => {
      S.value = !S.value, S.value ? Ze() : (Xe(), u.value.focus(), $n());
    }, Es = () => C("div", {
      class: t.be("message", "message-content")
    }, [C("p", null, [Se("确定要取消编辑吗？")]), C("p", {
      class: t.bem("message", "message-content", "message-tip")
    }, [Se("取消编辑将无法保存修改的内容，且不能找回。")])]), wt = () => {
      n.value !== d.value ? Ui({
        title: "确认取消",
        type: "warning",
        customClass: t.b("message"),
        message: Es(),
        showCancelButton: !0,
        cancelButtonClass: t.be("message", "message-cancel"),
        confirmButtonClass: t.be("message", "message-comfire")
      }).then(() => {
        if (n.value) {
          const y = s.parseNode(n.value);
          d.value = y;
        } else
          d.value = "";
        Wt();
      }).catch(() => {
        u.value.focus();
      }) : Wt();
    }, yt = () => {
      S.value = !0, u.value.disable();
      const {
        value: y
      } = d;
      e("change", y), E.value && (E.value = !1);
    }, xs = () => b.value ? C("div", {
      class: [t.b("footer"), {
        [t.b("footer-dialog")]: E.value
      }]
    }, [C("div", {
      class: t.be("footer", "cancel"),
      onClick: () => wt()
    }, [Se("取消")]), C("div", {
      class: t.be("footer", "save"),
      onClick: () => yt()
    }, [Se("保存")])]) : null, Gt = () => {
      E.value = !E.value, le(() => {
        S.value ? Ze() : (Xe(), u.value.focus());
      });
    }, Zt = () => k.value ? E.value ? C("i", {
      class: "fa fa-compress",
      "aria-hidden": "true",
      title: "缩小",
      onClick: () => Gt()
    }, null) : C("i", {
      class: "fa fa-expand",
      "aria-hidden": "true",
      title: "放大",
      onClick: () => Gt()
    }, null) : null, Ds = () => b.value || k.value ? C("div", {
      class: t.b("custom-toolbar")
    }, [b.value && w.value && S.value ? C("i", {
      class: "fa fa-edit",
      "aria-hidden": "true",
      title: "启用编辑",
      onClick: () => Wt()
    }, null) : null, Zt()]) : null, As = () => {
      if (s.reply.value) {
        const y = me.execScriptFn({
          value: s.reply.value
        }, s.replyScript, {
          singleRowReturn: !0,
          isAsync: !1
        });
        return C("div", {
          class: t.b("reply")
        }, [C("div", {
          class: t.be("reply", "content"),
          innerHTML: y
        }, null), C(ue("ion-icon"), {
          name: "close-outline",
          onClick: () => s.removeReply()
        }, null)]);
      }
    }, _s = () => s.hidden.value ? null : C("div", {
      class: t.b("content"),
      ref: "htmlContent",
      style: i.value
    }, [C(Mi, {
      ref: "htmlRef",
      class: t.b("editor"),
      modelValue: d.value,
      "onUpdate:modelValue": (y) => d.value = y,
      "default-config": Vt,
      mode: "default",
      onOnCreated: On,
      onOnChange: Jt,
      onOnDestroyed: Ln,
      onOnFocus: Rn,
      onOnBlur: Yt,
      oncustomAlert: Pn,
      oncustomPaste: Kt
    }, null), As(), C(Oi, {
      ref: "toolbarRef",
      editor: u.value,
      "default-config": we,
      mode: "default",
      class: t.b("toolbar")
    }, null)]), Ts = () => C(ue("el-image"), {
      class: t.e("preview"),
      ref: "previewRef",
      "zoom-rate": 1.1,
      src: D.value,
      "preview-src-list": M.value,
      "hide-on-click-modal": !0,
      onShow: In,
      fit: "cover"
    }, null);
    return wn(() => {
      Fn(), tt(() => n.value, (y, A) => {
        y !== A && (typeof n.value == "string" || y == null) && (y == null ? d.value = "" : d.value = y, J.value && (u.value && le(() => {
          u.value.focus(!0);
        }), J.value = !1));
      }, {
        immediate: !0
      }), tt(() => n.disabled, (y, A) => {
        y !== A && (y === !0 ? Ze() : Xe());
      }, {
        immediate: !0
      });
    }), {
      ns: t,
      editorRef: u,
      previewRef: c,
      mode: "default",
      valueHtml: d,
      toolbarConfig: we,
      editorConfig: Vt,
      handleCreated: On,
      handleChange: Jt,
      handleDestroyed: Ln,
      handleFocus: Rn,
      handleBlur: Yt,
      customAlert: Pn,
      customPaste: Kt,
      insertText: Nn,
      printHtml: Un,
      disable: Ze,
      enable: Xe,
      renderHeaserToolbar: Ds,
      renderEditorContent: _s,
      renderFooter: xs,
      htmlContent: r,
      hasEnableEdit: b,
      cssVars: i,
      toolbarRef: a,
      htmlRef: h,
      isFullScreen: E,
      readonlyState: S,
      changeFullScreenState: Gt,
      renderPreview: Ts
    };
  },
  render() {
    return this.isFullScreen ? C(ue("el-dialog"), {
      modelValue: this.isFullScreen,
      "onUpdate:modelValue": (n) => this.isFullScreen = n,
      width: "80%",
      top: "10vh",
      class: this.ns.b("dialog-full-screen"),
      onClose: () => this.changeFullScreenState()
    }, {
      default: () => [C("div", {
        class: [this.ns.b(), {
          [this.ns.b("editor-readonly")]: this.readonlyState
        }]
      }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null])]
    }) : C("div", {
      class: [this.ns.b(), {
        [this.ns.b("editor-readonly")]: this.readonlyState
      }]
    }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.renderPreview(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null]);
  }
}), zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" })), Vl = [
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
], pe = () => /* @__PURE__ */ new Map(), Js = (n) => {
  const e = pe();
  return n.forEach((t, s) => {
    e.set(s, t);
  }), e;
}, Ke = (n, e, t) => {
  let s = n.get(e);
  return s === void 0 && n.set(e, s = t()), s;
}, ql = (n, e) => {
  const t = [];
  for (const [s, r] of n)
    t.push(e(r, s));
  return t;
}, Jl = (n, e) => {
  for (const [t, s] of n)
    if (e(s, t))
      return !0;
  return !1;
}, Mt = () => /* @__PURE__ */ new Set(), Ms = (n) => n[n.length - 1], Yl = (n, e) => {
  for (let t = 0; t < e.length; t++)
    n.push(e[t]);
}, qe = Array.from, Kl = (n, e) => {
  for (let t = 0; t < n.length; t++)
    if (e(n[t], t, n))
      return !0;
  return !1;
}, Ys = Array.isArray;
class Hi {
  constructor() {
    this._observers = pe();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(e, t) {
    return Ke(
      this._observers,
      /** @type {string} */
      e,
      Mt
    ).add(t), t;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(e, t) {
    const s = (...r) => {
      this.off(
        e,
        /** @type {any} */
        s
      ), t(...r);
    };
    this.on(
      e,
      /** @type {any} */
      s
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(e, t) {
    const s = this._observers.get(e);
    s !== void 0 && (s.delete(t), s.size === 0 && this._observers.delete(e));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(e, t) {
    return qe((this._observers.get(e) || pe()).values()).forEach((s) => s(...t));
  }
  destroy() {
    this._observers = pe();
  }
}
const Je = Math.floor, Vn = Math.abs, ji = (n, e) => n < e ? n : e, dt = (n, e) => n > e ? n : e, Bi = (n) => n !== 0 ? n < 0 : 1 / n < 0, Hr = 1, jr = 2, Os = 4, Ls = 8, rn = 32, Re = 64, se = 128, us = 31, Ks = 63, nt = 127, Wl = 2147483647, zi = Number.MAX_SAFE_INTEGER, Gl = Number.isInteger || ((n) => typeof n == "number" && isFinite(n) && Je(n) === n), Zl = (n) => n.toLowerCase(), Xl = /^\s*/g, Ql = (n) => n.replace(Xl, ""), ea = /([A-Z])/g, Br = (n, e) => Ql(n.replace(ea, (t) => "".concat(e).concat(Zl(t)))), ta = (n) => {
  const e = unescape(encodeURIComponent(n)), t = e.length, s = new Uint8Array(t);
  for (let r = 0; r < t; r++)
    s[r] = /** @type {number} */
    e.codePointAt(r);
  return s;
}, on = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), na = (n) => on.encode(n), sa = on ? na : ta;
let Qt = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
Qt && Qt.decode(new Uint8Array()).length === 1 && (Qt = null);
let bn = class {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
};
const Sn = () => new bn(), ra = (n) => {
  let e = n.cpos;
  for (let t = 0; t < n.bufs.length; t++)
    e += n.bufs[t].length;
  return e;
}, ge = (n) => {
  const e = new Uint8Array(ra(n));
  let t = 0;
  for (let s = 0; s < n.bufs.length; s++) {
    const r = n.bufs[s];
    e.set(r, t), t += r.length;
  }
  return e.set(new Uint8Array(n.cbuf.buffer, 0, n.cpos), t), e;
}, ia = (n, e) => {
  const t = n.cbuf.length;
  t - n.cpos < e && (n.bufs.push(new Uint8Array(n.cbuf.buffer, 0, n.cpos)), n.cbuf = new Uint8Array(dt(t, e) * 2), n.cpos = 0);
}, q = (n, e) => {
  const t = n.cbuf.length;
  n.cpos === t && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(t * 2), n.cpos = 0), n.cbuf[n.cpos++] = e;
}, ln = q, L = (n, e) => {
  for (; e > nt; )
    q(n, se | nt & e), e = Je(e / 128);
  q(n, nt & e);
}, hs = (n, e) => {
  const t = Bi(e);
  for (t && (e = -e), q(n, (e > Ks ? se : 0) | (t ? Re : 0) | Ks & e), e = Je(e / 64); e > 0; )
    q(n, (e > nt ? se : 0) | nt & e), e = Je(e / 128);
}, Ws = new Uint8Array(3e4), oa = Ws.length / 3, la = (n, e) => {
  if (e.length < oa) {
    const t = on.encodeInto(e, Ws).written || 0;
    L(n, t);
    for (let s = 0; s < t; s++)
      q(n, Ws[s]);
  } else
    ee(n, sa(e));
}, aa = (n, e) => {
  const t = unescape(encodeURIComponent(e)), s = t.length;
  L(n, s);
  for (let r = 0; r < s; r++)
    q(
      n,
      /** @type {number} */
      t.codePointAt(r)
    );
}, st = on && /** @type {any} */
on.encodeInto ? la : aa, ds = (n, e) => {
  const t = n.cbuf.length, s = n.cpos, r = ji(t - s, e.length), i = e.length - r;
  n.cbuf.set(e.subarray(0, r), s), n.cpos += r, i > 0 && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(dt(t * 2, i)), n.cbuf.set(e.subarray(r)), n.cpos = i);
}, ee = (n, e) => {
  L(n, e.byteLength), ds(n, e);
}, pr = (n, e) => {
  ia(n, e);
  const t = new DataView(n.cbuf.buffer, n.cpos, e);
  return n.cpos += e, t;
}, ca = (n, e) => pr(n, 4).setFloat32(0, e, !1), ua = (n, e) => pr(n, 8).setFloat64(0, e, !1), ha = (n, e) => (
  /** @type {any} */
  pr(n, 8).setBigInt64(0, e, !1)
), zr = new DataView(new ArrayBuffer(4)), da = (n) => (zr.setFloat32(0, n), zr.getFloat32(0) === n), an = (n, e) => {
  switch (typeof e) {
    case "string":
      q(n, 119), st(n, e);
      break;
    case "number":
      Gl(e) && Vn(e) <= Wl ? (q(n, 125), hs(n, e)) : da(e) ? (q(n, 124), ca(n, e)) : (q(n, 123), ua(n, e));
      break;
    case "bigint":
      q(n, 122), ha(n, e);
      break;
    case "object":
      if (e === null)
        q(n, 126);
      else if (Ys(e)) {
        q(n, 117), L(n, e.length);
        for (let t = 0; t < e.length; t++)
          an(n, e[t]);
      } else if (e instanceof Uint8Array)
        q(n, 116), ee(n, e);
      else {
        q(n, 118);
        const t = Object.keys(e);
        L(n, t.length);
        for (let s = 0; s < t.length; s++) {
          const r = t[s];
          st(n, r), an(n, e[r]);
        }
      }
      break;
    case "boolean":
      q(n, e ? 120 : 121);
      break;
    default:
      q(n, 127);
  }
};
class Vr extends bn {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && L(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const qr = (n) => {
  n.count > 0 && (hs(n.encoder, n.count === 1 ? n.s : -n.s), n.count > 1 && L(n.encoder, n.count - 2));
};
class qn {
  constructor() {
    this.encoder = new bn(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (qr(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return qr(this), ge(this.encoder);
  }
}
const Jr = (n) => {
  if (n.count > 0) {
    const e = n.diff * 2 + (n.count === 1 ? 0 : 1);
    hs(n.encoder, e), n.count > 1 && L(n.encoder, n.count - 2);
  }
};
class Rs {
  constructor() {
    this.encoder = new bn(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (Jr(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Jr(this), ge(this.encoder);
  }
}
class fa {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new qn();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new bn();
    return this.sarr.push(this.s), this.s = "", st(e, this.sarr.join("")), ds(e, this.lensE.toUint8Array()), ge(e);
  }
}
const Ye = (n) => new Error(n), ke = () => {
  throw Ye("Method unimplemented");
}, de = () => {
  throw Ye("Unexpected case");
}, Vi = Ye("Unexpected end of array"), qi = Ye("Integer out of Range");
let fs = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
};
const ft = (n) => new fs(n), Ji = (n) => n.pos !== n.arr.length, ga = (n, e) => {
  const t = new Uint8Array(n.arr.buffer, n.pos + n.arr.byteOffset, e);
  return n.pos += e, t;
}, te = (n) => ga(n, O(n)), Ot = (n) => n.arr[n.pos++], O = (n) => {
  let e = 0, t = 1;
  const s = n.arr.length;
  for (; n.pos < s; ) {
    const r = n.arr[n.pos++];
    if (e = e + (r & nt) * t, t *= 128, r < se)
      return e;
    if (e > zi)
      throw qi;
  }
  throw Vi;
}, gs = (n) => {
  let e = n.arr[n.pos++], t = e & Ks, s = 64;
  const r = (e & Re) > 0 ? -1 : 1;
  if (!(e & se))
    return r * t;
  const i = n.arr.length;
  for (; n.pos < i; ) {
    if (e = n.arr[n.pos++], t = t + (e & nt) * s, s *= 128, e < se)
      return r * t;
    if (t > zi)
      throw qi;
  }
  throw Vi;
}, pa = (n) => {
  let e = O(n);
  if (e === 0)
    return "";
  {
    let t = String.fromCodePoint(Ot(n));
    if (--e < 100)
      for (; e--; )
        t += String.fromCodePoint(Ot(n));
    else
      for (; e > 0; ) {
        const s = e < 1e4 ? e : 1e4, r = n.arr.subarray(n.pos, n.pos + s);
        n.pos += s, t += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          r
        ), e -= s;
      }
    return decodeURIComponent(escape(t));
  }
}, ma = (n) => (
  /** @type any */
  Qt.decode(te(n))
), rt = Qt ? ma : pa, mr = (n, e) => {
  const t = new DataView(n.arr.buffer, n.arr.byteOffset + n.pos, e);
  return n.pos += e, t;
}, wa = (n) => mr(n, 4).getFloat32(0, !1), ya = (n) => mr(n, 8).getFloat64(0, !1), va = (n) => (
  /** @type {any} */
  mr(n, 8).getBigInt64(0, !1)
), ba = [
  (n) => {
  },
  // CASE 127: undefined
  (n) => null,
  // CASE 126: null
  gs,
  // CASE 125: integer
  wa,
  // CASE 124: float32
  ya,
  // CASE 123: float64
  va,
  // CASE 122: bigint
  (n) => !1,
  // CASE 121: boolean (false)
  (n) => !0,
  // CASE 120: boolean (true)
  rt,
  // CASE 119: string
  (n) => {
    const e = O(n), t = {};
    for (let s = 0; s < e; s++) {
      const r = rt(n);
      t[r] = cn(n);
    }
    return t;
  },
  (n) => {
    const e = O(n), t = [];
    for (let s = 0; s < e; s++)
      t.push(cn(n));
    return t;
  },
  te
  // CASE 116: Uint8Array
], cn = (n) => ba[127 - Ot(n)](n);
class Yr extends fs {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(e, t) {
    super(e), this.reader = t, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), Ji(this) ? this.count = O(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class Jn extends fs {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = gs(this);
      const e = Bi(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = O(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class Ps extends fs {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const e = gs(this), t = e & 1;
      this.diff = Je(e / 2), this.count = 1, t && (this.count = O(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Sa {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    this.decoder = new Jn(e), this.str = rt(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
    return this.spos = e, t;
  }
}
const Ca = crypto.getRandomValues.bind(crypto), Yi = () => Ca(new Uint32Array(1))[0], ka = [1e7] + -1e3 + -4e3 + -8e3 + -1e11, Ea = () => ka.replace(
  /[018]/g,
  /** @param {number} c */
  (n) => (n ^ Yi() & 15 >> n / 4).toString(16)
), xa = Date.now, Kr = (n) => (
  /** @type {Promise<T>} */
  new Promise(n)
);
Promise.all.bind(Promise);
const Wr = (n) => n === void 0 ? null : n;
let Da = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(e, t) {
    this.map.set(e, t);
  }
  /**
   * @param {string} key
   */
  getItem(e) {
    return this.map.get(e);
  }
}, Ki = new Da(), Aa = !0;
try {
  typeof localStorage < "u" && localStorage && (Ki = localStorage, Aa = !1);
} catch (n) {
}
const _a = Ki, Ta = Object.assign, Ia = Object.keys, Ma = (n, e) => {
  for (const t in n)
    e(n[t], t);
}, Gr = (n) => Ia(n).length, Oa = (n) => {
  for (const e in n)
    return !1;
  return !0;
}, La = (n, e) => {
  for (const t in n)
    if (!e(n[t], t))
      return !1;
  return !0;
}, Ra = (n, e) => Object.prototype.hasOwnProperty.call(n, e), Pa = (n, e) => n === e || Gr(n) === Gr(e) && La(n, (t, s) => (t !== void 0 || Ra(e, s)) && e[s] === t), wr = (n, e, t = 0) => {
  try {
    for (; t < n.length; t++)
      n[t](...e);
  } finally {
    t < n.length && wr(n, e, t + 1);
  }
}, Na = (n) => n, Ua = (n, e) => e.includes(n), un = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
let ve;
const Fa = () => {
  if (ve === void 0)
    if (un) {
      ve = pe();
      const n = process.argv;
      let e = null;
      for (let t = 0; t < n.length; t++) {
        const s = n[t];
        s[0] === "-" ? (e !== null && ve.set(e, ""), e = s) : e !== null && (ve.set(e, s), e = null);
      }
      e !== null && ve.set(e, "");
    } else
      typeof location == "object" ? (ve = pe(), (location.search || "?").slice(1).split("&").forEach((n) => {
        if (n.length !== 0) {
          const [e, t] = n.split("=");
          ve.set("--".concat(Br(e, "-")), t), ve.set("-".concat(Br(e, "-")), t);
        }
      })) : ve = pe();
  return ve;
}, Gs = (n) => Fa().has(n), Zs = (n) => Wr(un ? process.env[n.toUpperCase().replaceAll("-", "_")] : _a.getItem(n)), Wi = (n) => Gs("--" + n) || Zs(n) !== null;
Wi("production");
const $a = un && Ua(process.env.FORCE_COLOR, ["true", "1", "2"]), Ha = $a || !Gs("--no-colors") && // @todo deprecate --no-colors
!Wi("no-color") && (!un || process.stdout.isTTY) && (!un || Gs("--color") || Zs("COLORTERM") !== null || (Zs("TERM") || "").includes("color")), ja = (n) => new Uint8Array(n), Ba = (n) => {
  const e = ja(n.byteLength);
  return e.set(n), e;
};
class za {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, t) {
    this.left = e, this.right = t;
  }
}
const Me = (n, e) => new za(n, e);
typeof DOMParser < "u" && new DOMParser();
const Va = (n) => ql(n, (e, t) => "".concat(t, ":").concat(e, ";")).join(""), Fe = Symbol, Gi = Fe(), Zi = Fe(), qa = Fe(), Ja = Fe(), Ya = Fe(), Xi = Fe(), Ka = Fe(), yr = Fe(), Wa = Fe(), Ga = (n) => {
  var r;
  n.length === 1 && ((r = n[0]) == null ? void 0 : r.constructor) === Function && (n = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  n[0]());
  const e = [], t = [];
  let s = 0;
  for (; s < n.length; s++) {
    const i = n[s];
    if (i === void 0)
      break;
    if (i.constructor === String || i.constructor === Number)
      e.push(i);
    else if (i.constructor === Object)
      break;
  }
  for (s > 0 && t.push(e.join("")); s < n.length; s++) {
    const i = n[s];
    i instanceof Symbol || t.push(i);
  }
  return t;
}, Za = {
  [Gi]: Me("font-weight", "bold"),
  [Zi]: Me("font-weight", "normal"),
  [qa]: Me("color", "blue"),
  [Ya]: Me("color", "green"),
  [Ja]: Me("color", "grey"),
  [Xi]: Me("color", "red"),
  [Ka]: Me("color", "purple"),
  [yr]: Me("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [Wa]: Me("color", "black")
}, Xa = (n) => {
  var o;
  n.length === 1 && ((o = n[0]) == null ? void 0 : o.constructor) === Function && (n = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  n[0]());
  const e = [], t = [], s = pe();
  let r = [], i = 0;
  for (; i < n.length; i++) {
    const l = n[i], a = Za[l];
    if (a !== void 0)
      s.set(a.left, a.right);
    else {
      if (l === void 0)
        break;
      if (l.constructor === String || l.constructor === Number) {
        const h = Va(s);
        i > 0 || h.length > 0 ? (e.push("%c" + l), t.push(h)) : e.push(l);
      } else
        break;
    }
  }
  for (i > 0 && (r = t, r.unshift(e.join(""))); i < n.length; i++) {
    const l = n[i];
    l instanceof Symbol || r.push(l);
  }
  return r;
}, Qi = Ha ? Xa : Ga, Qa = (...n) => {
  console.log(...Qi(n)), eo.forEach((e) => e.print(n));
}, ec = (...n) => {
  console.warn(...Qi(n)), n.unshift(yr), eo.forEach((e) => e.print(n));
}, eo = Mt(), to = (n) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: n
}), tc = (n, e) => to(() => {
  let t;
  do
    t = n.next();
  while (!t.done && !e(t.value));
  return t;
}), Ns = (n, e) => to(() => {
  const { done: t, value: s } = n.next();
  return { done: t, value: t ? void 0 : e(s) };
});
class vr {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(e, t) {
    this.clock = e, this.len = t;
  }
}
class $t {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Lt = (n, e, t) => e.clients.forEach((s, r) => {
  const i = (
    /** @type {Array<GC|Item>} */
    n.doc.store.clients.get(r)
  );
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    yo(n, i, l.clock, l.len, t);
  }
}), nc = (n, e) => {
  let t = 0, s = n.length - 1;
  for (; t <= s; ) {
    const r = Je((t + s) / 2), i = n[r], o = i.clock;
    if (o <= e) {
      if (e < o + i.len)
        return r;
      t = r + 1;
    } else
      s = r - 1;
  }
  return null;
}, Cn = (n, e) => {
  const t = n.clients.get(e.client);
  return t !== void 0 && nc(t, e.clock) !== null;
}, br = (n) => {
  n.clients.forEach((e) => {
    e.sort((r, i) => r.clock - i.clock);
    let t, s;
    for (t = 1, s = 1; t < e.length; t++) {
      const r = e[s - 1], i = e[t];
      r.clock + r.len >= i.clock ? r.len = dt(r.len, i.clock + i.len - r.clock) : (s < t && (e[s] = i), s++);
    }
    e.length = s;
  });
}, Xs = (n) => {
  const e = new $t();
  for (let t = 0; t < n.length; t++)
    n[t].clients.forEach((s, r) => {
      if (!e.clients.has(r)) {
        const i = s.slice();
        for (let o = t + 1; o < n.length; o++)
          Yl(i, n[o].clients.get(r) || []);
        e.clients.set(r, i);
      }
    });
  return br(e), e;
}, hn = (n, e, t, s) => {
  Ke(n.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new vr(t, s));
}, sc = () => new $t(), rc = (n) => {
  const e = sc();
  return n.clients.forEach((t, s) => {
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (o.deleted) {
        const l = o.id.clock;
        let a = o.length;
        if (i + 1 < t.length)
          for (let h = t[i + 1]; i + 1 < t.length && h.deleted; h = t[++i + 1])
            a += h.length;
        r.push(new vr(l, a));
      }
    }
    r.length > 0 && e.clients.set(s, r);
  }), e;
}, Ht = (n, e) => {
  L(n.restEncoder, e.clients.size), qe(e.clients.entries()).sort((t, s) => s[0] - t[0]).forEach(([t, s]) => {
    n.resetDsCurVal(), L(n.restEncoder, t);
    const r = s.length;
    L(n.restEncoder, r);
    for (let i = 0; i < r; i++) {
      const o = s[i];
      n.writeDsClock(o.clock), n.writeDsLen(o.len);
    }
  });
}, Sr = (n) => {
  const e = new $t(), t = O(n.restDecoder);
  for (let s = 0; s < t; s++) {
    n.resetDsCurVal();
    const r = O(n.restDecoder), i = O(n.restDecoder);
    if (i > 0) {
      const o = Ke(e.clients, r, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < i; l++)
        o.push(new vr(n.readDsClock(), n.readDsLen()));
    }
  }
  return e;
}, Zr = (n, e, t) => {
  const s = new $t(), r = O(n.restDecoder);
  for (let i = 0; i < r; i++) {
    n.resetDsCurVal();
    const o = O(n.restDecoder), l = O(n.restDecoder), a = t.clients.get(o) || [], h = B(t, o);
    for (let u = 0; u < l; u++) {
      const c = n.readDsClock(), d = c + n.readDsLen();
      if (c < h) {
        h < d && hn(s, o, h, d - h);
        let f = xe(a, c), g = a[f];
        for (!g.deleted && g.id.clock < c && (a.splice(f + 1, 0, ls(e, g, c - g.id.clock)), f++); f < a.length && (g = a[f++], g.id.clock < d); )
          g.deleted || (d < g.id.clock + g.length && a.splice(f, 0, ls(e, g, d - g.id.clock)), g.delete(e));
      } else
        hn(s, o, c, d - c);
    }
  }
  if (s.clients.size > 0) {
    const i = new lt();
    return L(i.restEncoder, 0), Ht(i, s), i.toUint8Array();
  }
  return null;
}, no = Yi;
class jt extends Hi {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = Ea(), collectionid: t = null, gc: s = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = r, this.clientID = no(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new mo(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.whenLoaded = Kr((h) => {
      this.on("load", () => {
        this.isLoaded = !0, h(this);
      });
    });
    const a = () => Kr((h) => {
      const u = (c) => {
        (c === void 0 || c === !0) && (this.off("sync", u), h());
      };
      this.on("sync", u);
    });
    this.on("sync", (h) => {
      h === !1 && this.isSynced && (this.whenSynced = a()), this.isSynced = h === void 0 || h === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = a();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const e = this._item;
    e !== null && !this.shouldLoad && N(
      /** @type {any} */
      e.parent.doc,
      (t) => {
        t.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(qe(this.subdocs).map((e) => e.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(e, t = null) {
    return N(this, e, t);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(e, t = (
    /** @type {any} */
    Y
  )) {
    const s = Ke(this.share, e, () => {
      const i = new t();
      return i._integrate(this, null), i;
    }), r = s.constructor;
    if (t !== Y && r !== t)
      if (r === Y) {
        const i = new t();
        i._map = s._map, s._map.forEach(
          /** @param {Item?} n */
          (o) => {
            for (; o !== null; o = o.left)
              o.parent = i;
          }
        ), i._start = s._start;
        for (let o = i._start; o !== null; o = o.right)
          o.parent = i;
        return i._length = s._length, this.share.set(e, i), i._integrate(this, null), /** @type {InstanceType<Type>} */
        i;
      } else
        throw new Error("Type with the name ".concat(e, " has already been defined with a different constructor"));
    return (
      /** @type {InstanceType<Type>} */
      s
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(e = "") {
    return (
      /** @type {YArray<T>} */
      this.get(e, xt)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Nt);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(e = "") {
    return (
      /** @type {YMap<T>} */
      this.get(e, Pt)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(e = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(e, Ut)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, at);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const e = {};
    return this.share.forEach((t, s) => {
      e[s] = t.toJSON();
    }), e;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    qe(this.subdocs).forEach((t) => t.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const t = (
        /** @type {ContentDoc} */
        e.content
      );
      t.doc = new jt({ guid: this.guid, ...t.opts, shouldLoad: !1 }), t.doc._item = e, N(
        /** @type {any} */
        e.parent.doc,
        (s) => {
          const r = t.doc;
          e.deleted || s.subdocsAdded.add(r), s.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class so {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    this.restDecoder = e;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return O(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return O(this.restDecoder);
  }
}
class ro extends so {
  /**
   * @return {ID}
   */
  readLeftID() {
    return I(O(this.restDecoder), O(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return I(O(this.restDecoder), O(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return O(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return Ot(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return rt(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return O(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return O(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return O(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return cn(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Ba(te(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(rt(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return rt(this.restDecoder);
  }
}
class ic {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    this.dsCurrVal = 0, this.restDecoder = e;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += O(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const e = O(this.restDecoder) + 1;
    return this.dsCurrVal += e, e;
  }
}
class Rt extends ic {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], O(e), this.keyClockDecoder = new Ps(te(e)), this.clientDecoder = new Jn(te(e)), this.leftClockDecoder = new Ps(te(e)), this.rightClockDecoder = new Ps(te(e)), this.infoDecoder = new Yr(te(e), Ot), this.stringDecoder = new Sa(te(e)), this.parentInfoDecoder = new Yr(te(e), Ot), this.typeRefDecoder = new Jn(te(e)), this.lenDecoder = new Jn(te(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new kt(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new kt(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return cn(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return te(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return cn(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const e = this.keyClockDecoder.read();
    if (e < this.keys.length)
      return this.keys[e];
    {
      const t = this.stringDecoder.read();
      return this.keys.push(t), t;
    }
  }
}
class io {
  constructor() {
    this.restEncoder = Sn();
  }
  toUint8Array() {
    return ge(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    L(this.restEncoder, e);
  }
}
class kn extends io {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    ln(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    st(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    L(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    L(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    L(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    an(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    ee(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    st(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    st(this.restEncoder, e);
  }
}
class oo {
  constructor() {
    this.restEncoder = Sn(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return ge(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const t = e - this.dsCurrVal;
    this.dsCurrVal = e, L(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && de(), L(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class lt extends oo {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Rs(), this.clientEncoder = new qn(), this.leftClockEncoder = new Rs(), this.rightClockEncoder = new Rs(), this.infoEncoder = new Vr(ln), this.stringEncoder = new fa(), this.parentInfoEncoder = new Vr(ln), this.typeRefEncoder = new qn(), this.lenEncoder = new qn();
  }
  toUint8Array() {
    const e = Sn();
    return L(e, 0), ee(e, this.keyClockEncoder.toUint8Array()), ee(e, this.clientEncoder.toUint8Array()), ee(e, this.leftClockEncoder.toUint8Array()), ee(e, this.rightClockEncoder.toUint8Array()), ee(e, ge(this.infoEncoder)), ee(e, this.stringEncoder.toUint8Array()), ee(e, ge(this.parentInfoEncoder)), ee(e, this.typeRefEncoder.toUint8Array()), ee(e, this.lenEncoder.toUint8Array()), ds(e, ge(this.restEncoder)), ge(e);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(e) {
    this.clientEncoder.write(e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    this.infoEncoder.write(e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    this.stringEncoder.write(e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    this.parentInfoEncoder.write(e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    this.typeRefEncoder.write(e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    this.lenEncoder.write(e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    an(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    ee(this.restEncoder, e);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(e) {
    an(this.restEncoder, e);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(e) {
    const t = this.keyMap.get(e);
    t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
  }
}
const oc = (n, e, t, s) => {
  s = dt(s, e[0].id.clock);
  const r = xe(e, s);
  L(n.restEncoder, e.length - r), n.writeClient(t), L(n.restEncoder, s);
  const i = e[r];
  i.write(n, s - i.id.clock);
  for (let o = r + 1; o < e.length; o++)
    e[o].write(n, 0);
}, Cr = (n, e, t) => {
  const s = /* @__PURE__ */ new Map();
  t.forEach((r, i) => {
    B(e, i) > r && s.set(i, r);
  }), ps(e).forEach((r, i) => {
    t.has(i) || s.set(i, 0);
  }), L(n.restEncoder, s.size), qe(s.entries()).sort((r, i) => i[0] - r[0]).forEach(([r, i]) => {
    oc(
      n,
      /** @type {Array<GC|Item>} */
      e.clients.get(r),
      r,
      i
    );
  });
}, lc = (n, e) => {
  const t = pe(), s = O(n.restDecoder);
  for (let r = 0; r < s; r++) {
    const i = O(n.restDecoder), o = new Array(i), l = n.readClient();
    let a = O(n.restDecoder);
    t.set(l, { i: 0, refs: o });
    for (let h = 0; h < i; h++) {
      const u = n.readInfo();
      switch (us & u) {
        case 0: {
          const c = n.readLen();
          o[h] = new ae(I(l, a), c), a += c;
          break;
        }
        case 10: {
          const c = O(n.restDecoder);
          o[h] = new ce(I(l, a), c), a += c;
          break;
        }
        default: {
          const c = (u & (Re | se)) === 0, d = new U(
            I(l, a),
            null,
            // left
            (u & se) === se ? n.readLeftID() : null,
            // origin
            null,
            // right
            (u & Re) === Re ? n.readRightID() : null,
            // right origin
            c ? n.readParentInfo() ? e.get(n.readString()) : n.readLeftID() : null,
            // parent
            c && (u & rn) === rn ? n.readString() : null,
            // parentSub
            $o(n, u)
            // item content
          );
          o[h] = d, a += d.length;
        }
      }
    }
  }
  return t;
}, ac = (n, e, t) => {
  const s = [];
  let r = qe(t.keys()).sort((f, g) => f - g);
  if (r.length === 0)
    return null;
  const i = () => {
    if (r.length === 0)
      return null;
    let f = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      t.get(r[r.length - 1])
    );
    for (; f.refs.length === f.i; )
      if (r.pop(), r.length > 0)
        f = /** @type {{i:number,refs:Array<GC|Item>}} */
        t.get(r[r.length - 1]);
      else
        return null;
    return f;
  };
  let o = i();
  if (o === null)
    return null;
  const l = new mo(), a = /* @__PURE__ */ new Map(), h = (f, g) => {
    const v = a.get(f);
    (v == null || v > g) && a.set(f, g);
  };
  let u = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const c = /* @__PURE__ */ new Map(), d = () => {
    for (const f of s) {
      const g = f.id.client, v = t.get(g);
      v ? (v.i--, l.clients.set(g, v.refs.slice(v.i)), t.delete(g), v.i = 0, v.refs = []) : l.clients.set(g, [f]), r = r.filter((w) => w !== g);
    }
    s.length = 0;
  };
  for (; ; ) {
    if (u.constructor !== ce) {
      const g = Ke(c, u.id.client, () => B(e, u.id.client)) - u.id.clock;
      if (g < 0)
        s.push(u), h(u.id.client, u.id.clock - 1), d();
      else {
        const v = u.getMissing(n, e);
        if (v !== null) {
          s.push(u);
          const w = t.get(
            /** @type {number} */
            v
          ) || { refs: [], i: 0 };
          if (w.refs.length === w.i)
            h(
              /** @type {number} */
              v,
              B(e, v)
            ), d();
          else {
            u = w.refs[w.i++];
            continue;
          }
        } else
          (g === 0 || g < u.length) && (u.integrate(n, g), c.set(u.id.client, u.id.clock + u.length));
      }
    }
    if (s.length > 0)
      u = /** @type {GC|Item} */
      s.pop();
    else if (o !== null && o.i < o.refs.length)
      u = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = i(), o === null)
        break;
      u = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (l.clients.size > 0) {
    const f = new lt();
    return Cr(f, l, /* @__PURE__ */ new Map()), L(f.restEncoder, 0), { missing: a, update: f.toUint8Array() };
  }
  return null;
}, cc = (n, e) => Cr(n, e.doc.store, e.beforeState), uc = (n, e, t, s = new Rt(n)) => N(e, (r) => {
  r.local = !1;
  let i = !1;
  const o = r.doc, l = o.store, a = lc(s, o), h = ac(r, l, a), u = l.pendingStructs;
  if (u) {
    for (const [d, f] of u.missing)
      if (f < B(l, d)) {
        i = !0;
        break;
      }
    if (h) {
      for (const [d, f] of h.missing) {
        const g = u.missing.get(d);
        (g == null || g > f) && u.missing.set(d, f);
      }
      u.update = ns([u.update, h.update]);
    }
  } else
    l.pendingStructs = h;
  const c = Zr(s, r, l);
  if (l.pendingDs) {
    const d = new Rt(ft(l.pendingDs));
    O(d.restDecoder);
    const f = Zr(d, r, l);
    c && f ? l.pendingDs = ns([c, f]) : l.pendingDs = c || f;
  } else
    l.pendingDs = c;
  if (i) {
    const d = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, lo(r.doc, d);
  }
}, t, !1), lo = (n, e, t, s = Rt) => {
  const r = ft(e);
  uc(r, n, t, new s(r));
}, hc = (n, e, t) => lo(n, e, t, ro), dc = (n, e, t = /* @__PURE__ */ new Map()) => {
  Cr(n, e.store, t), Ht(n, rc(e.store));
}, fc = (n, e = new Uint8Array([0]), t = new lt()) => {
  const s = ao(e);
  dc(t, n, s);
  const r = [t.toUint8Array()];
  if (n.store.pendingDs && r.push(n.store.pendingDs), n.store.pendingStructs && r.push(Nc(n.store.pendingStructs.update, e)), r.length > 1) {
    if (t.constructor === kn)
      return Rc(r.map((i, o) => o === 0 ? i : Fc(i)));
    if (t.constructor === lt)
      return ns(r);
  }
  return r[0];
}, gc = (n, e) => fc(n, e, new kn()), pc = (n) => {
  const e = /* @__PURE__ */ new Map(), t = O(n.restDecoder);
  for (let s = 0; s < t; s++) {
    const r = O(n.restDecoder), i = O(n.restDecoder);
    e.set(r, i);
  }
  return e;
}, ao = (n) => pc(new so(ft(n))), co = (n, e) => (L(n.restEncoder, e.size), qe(e.entries()).sort((t, s) => s[0] - t[0]).forEach(([t, s]) => {
  L(n.restEncoder, t), L(n.restEncoder, s);
}), n), mc = (n, e) => co(n, ps(e.store)), wc = (n, e = new oo()) => (n instanceof Map ? co(e, n) : mc(e, n), e.toUint8Array()), yc = (n) => wc(n, new io());
class vc {
  constructor() {
    this.l = [];
  }
}
const Xr = () => new vc(), Qr = (n, e) => n.l.push(e), ei = (n, e) => {
  const t = n.l, s = t.length;
  n.l = t.filter((r) => e !== r), s === n.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, uo = (n, e, t) => wr(n.l, [e, t]);
class kt {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, t) {
    this.client = e, this.clock = t;
  }
}
const Ct = (n, e) => n === e || n !== null && e !== null && n.client === e.client && n.clock === e.clock, I = (n, e) => new kt(n, e), ti = (n, e) => {
  L(n, e.client), L(n, e.clock);
}, ni = (n) => I(O(n), O(n)), ho = (n) => {
  for (const [e, t] of n.doc.share.entries())
    if (t === n)
      return e;
  throw de();
}, ts = (n, e) => {
  for (; e !== null; ) {
    if (e.parent === n)
      return !0;
    e = /** @type {AbstractType<any>} */
    e.parent._item;
  }
  return !1;
};
class kr {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(e, t, s, r = 0) {
    this.type = e, this.tname = t, this.item = s, this.assoc = r;
  }
}
const bc = (n) => {
  var e;
  return new kr(n.type == null ? null : I(n.type.client, n.type.clock), (e = n.tname) != null ? e : null, n.item == null ? null : I(n.item.client, n.item.clock), n.assoc == null ? 0 : n.assoc);
};
class Sc {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(e, t, s = 0) {
    this.type = e, this.index = t, this.assoc = s;
  }
}
const Cc = (n, e, t = 0) => new Sc(n, e, t), Hn = (n, e, t) => {
  let s = null, r = null;
  return n._item === null ? r = ho(n) : s = I(n._item.id.client, n._item.id.clock), new kr(s, r, e, t);
}, fo = (n, e, t = 0) => {
  let s = n._start;
  if (t < 0) {
    if (e === 0)
      return Hn(n, null, t);
    e--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > e)
        return Hn(n, I(s.id.client, s.id.clock + e), t);
      e -= s.length;
    }
    if (s.right === null && t < 0)
      return Hn(n, s.lastId, t);
    s = s.right;
  }
  return Hn(n, null, t);
}, kc = (n, e) => {
  const { type: t, tname: s, item: r, assoc: i } = e;
  if (r !== null)
    L(n, 0), ti(n, r);
  else if (s !== null)
    ln(n, 1), st(n, s);
  else if (t !== null)
    ln(n, 2), ti(n, t);
  else
    throw de();
  return hs(n, i), n;
}, Ec = (n) => {
  const e = Sn();
  return kc(e, n), ge(e);
}, xc = (n) => {
  let e = null, t = null, s = null;
  switch (O(n)) {
    case 0:
      s = ni(n);
      break;
    case 1:
      t = rt(n);
      break;
    case 2:
      e = ni(n);
  }
  const r = Ji(n) ? gs(n) : 0;
  return new kr(e, t, s, r);
}, go = (n) => xc(ft(n)), po = (n, e, t = !0) => {
  const s = e.store, r = n.item, i = n.type, o = n.tname, l = n.assoc;
  let a = null, h = 0;
  if (r !== null) {
    if (B(s, r.client) <= r.clock)
      return null;
    const u = t ? nr(s, r) : { item: Et(s, r), diff: 0 }, c = u.item;
    if (!(c instanceof U))
      return null;
    if (a = /** @type {AbstractType<any>} */
    c.parent, a._item === null || !a._item.deleted) {
      h = c.deleted || !c.countable ? 0 : u.diff + (l >= 0 ? 0 : 1);
      let d = c.left;
      for (; d !== null; )
        !d.deleted && d.countable && (h += d.length), d = d.left;
    }
  } else {
    if (o !== null)
      a = e.get(o);
    else if (i !== null) {
      if (B(s, i.client) <= i.clock)
        return null;
      const { item: u } = t ? nr(s, i) : { item: Et(s, i) };
      if (u instanceof U && u.content instanceof Ae)
        a = u.content.type;
      else
        return null;
    } else
      throw de();
    l >= 0 ? h = a._length : h = 0;
  }
  return Cc(a, h, n.assoc);
}, si = (n, e) => n === e || n !== null && e !== null && n.tname === e.tname && Ct(n.item, e.item) && Ct(n.type, e.type) && n.assoc === e.assoc, bt = (n, e) => e === void 0 ? !n.deleted : e.sv.has(n.id.client) && (e.sv.get(n.id.client) || 0) > n.id.clock && !Cn(e.ds, n.id), Qs = (n, e) => {
  const t = Ke(n.meta, Qs, Mt), s = n.doc.store;
  t.has(e) || (e.sv.forEach((r, i) => {
    r < B(s, i) && Q(n, I(i, r));
  }), Lt(n, e.ds, (r) => {
  }), t.add(e));
};
class mo {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const ps = (n) => {
  const e = /* @__PURE__ */ new Map();
  return n.clients.forEach((t, s) => {
    const r = t[t.length - 1];
    e.set(s, r.id.clock + r.length);
  }), e;
}, B = (n, e) => {
  const t = n.clients.get(e);
  if (t === void 0)
    return 0;
  const s = t[t.length - 1];
  return s.id.clock + s.length;
}, wo = (n, e) => {
  let t = n.clients.get(e.id.client);
  if (t === void 0)
    t = [], n.clients.set(e.id.client, t);
  else {
    const s = t[t.length - 1];
    if (s.id.clock + s.length !== e.id.clock)
      throw de();
  }
  t.push(e);
}, xe = (n, e) => {
  let t = 0, s = n.length - 1, r = n[s], i = r.id.clock;
  if (i === e)
    return s;
  let o = Je(e / (i + r.length - 1) * s);
  for (; t <= s; ) {
    if (r = n[o], i = r.id.clock, i <= e) {
      if (e < i + r.length)
        return o;
      t = o + 1;
    } else
      s = o - 1;
    o = Je((t + s) / 2);
  }
  throw de();
}, Dc = (n, e) => {
  const t = n.clients.get(e.client);
  return t[xe(t, e.clock)];
}, Et = (
  /** @type {function(StructStore,ID):Item} */
  Dc
), er = (n, e, t) => {
  const s = xe(e, t), r = e[s];
  return r.id.clock < t && r instanceof U ? (e.splice(s + 1, 0, ls(n, r, t - r.id.clock)), s + 1) : s;
}, Q = (n, e) => {
  const t = (
    /** @type {Array<Item>} */
    n.doc.store.clients.get(e.client)
  );
  return t[er(n, t, e.clock)];
}, ri = (n, e, t) => {
  const s = e.clients.get(t.client), r = xe(s, t.clock), i = s[r];
  return t.clock !== i.id.clock + i.length - 1 && i.constructor !== ae && s.splice(r + 1, 0, ls(n, i, t.clock - i.id.clock + 1)), i;
}, Ac = (n, e, t) => {
  const s = (
    /** @type {Array<GC|Item>} */
    n.clients.get(e.id.client)
  );
  s[xe(s, e.id.clock)] = t;
}, yo = (n, e, t, s, r) => {
  if (s === 0)
    return;
  const i = t + s;
  let o = er(n, e, t), l;
  do
    l = e[o++], i < l.id.clock + l.length && er(n, e, i), r(l);
  while (o < e.length && e[o].id.clock < i);
};
class _c {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, t, s) {
    this.doc = e, this.deleteSet = new $t(), this.beforeState = ps(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const ii = (n, e) => e.deleteSet.clients.size === 0 && !Jl(e.afterState, (t, s) => e.beforeState.get(s) !== t) ? !1 : (br(e.deleteSet), cc(n, e), Ht(n, e.deleteSet), !0), oi = (n, e, t) => {
  const s = e._item;
  (s === null || s.id.clock < (n.beforeState.get(s.id.client) || 0) && !s.deleted) && Ke(n.changed, e, Mt).add(t);
}, Yn = (n, e) => {
  let t = n[e], s = n[e - 1], r = e;
  for (; r > 0; t = s, s = n[--r - 1]) {
    if (s.deleted === t.deleted && s.constructor === t.constructor && s.mergeWith(t)) {
      t instanceof U && t.parentSub !== null && /** @type {AbstractType<any>} */
      t.parent._map.get(t.parentSub) === t && t.parent._map.set(
        t.parentSub,
        /** @type {Item} */
        s
      );
      continue;
    }
    break;
  }
  const i = e - r;
  return i && n.splice(e + 1 - i, i), i;
}, Tc = (n, e, t) => {
  for (const [s, r] of n.clients.entries()) {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(s)
    );
    for (let o = r.length - 1; o >= 0; o--) {
      const l = r[o], a = l.clock + l.len;
      for (let h = xe(i, l.clock), u = i[h]; h < i.length && u.id.clock < a; u = i[++h]) {
        const c = i[h];
        if (l.clock + l.len <= c.id.clock)
          break;
        c instanceof U && c.deleted && !c.keep && t(c) && c.gc(e, !1);
      }
    }
  }
}, Ic = (n, e) => {
  n.clients.forEach((t, s) => {
    const r = (
      /** @type {Array<GC|Item>} */
      e.clients.get(s)
    );
    for (let i = t.length - 1; i >= 0; i--) {
      const o = t[i], l = ji(r.length - 1, 1 + xe(r, o.clock + o.len - 1));
      for (let a = l, h = r[a]; a > 0 && h.id.clock >= o.clock; h = r[a])
        a -= 1 + Yn(r, a);
    }
  });
}, vo = (n, e) => {
  if (e < n.length) {
    const t = n[e], s = t.doc, r = s.store, i = t.deleteSet, o = t._mergeStructs;
    try {
      br(i), t.afterState = ps(t.doc.store), s.emit("beforeObserverCalls", [t, s]);
      const l = [];
      t.changed.forEach(
        (a, h) => l.push(() => {
          (h._item === null || !h._item.deleted) && h._callObserver(t, a);
        })
      ), l.push(() => {
        t.changedParentTypes.forEach((a, h) => {
          h._dEH.l.length > 0 && (h._item === null || !h._item.deleted) && (a = a.filter(
            (u) => u.target._item === null || !u.target._item.deleted
          ), a.forEach((u) => {
            u.currentTarget = h, u._path = null;
          }), a.sort((u, c) => u.path.length - c.path.length), uo(h._dEH, a, t));
        });
      }), l.push(() => s.emit("afterTransaction", [t, s])), wr(l, []), t._needFormattingCleanup && Xc(t);
    } finally {
      s.gc && Tc(i, r, s.gcFilter), Ic(i, r), t.afterState.forEach((u, c) => {
        const d = t.beforeState.get(c) || 0;
        if (d !== u) {
          const f = (
            /** @type {Array<GC|Item>} */
            r.clients.get(c)
          ), g = dt(xe(f, d), 1);
          for (let v = f.length - 1; v >= g; )
            v -= 1 + Yn(f, v);
        }
      });
      for (let u = o.length - 1; u >= 0; u--) {
        const { client: c, clock: d } = o[u].id, f = (
          /** @type {Array<GC|Item>} */
          r.clients.get(c)
        ), g = xe(f, d);
        g + 1 < f.length && Yn(f, g + 1) > 1 || g > 0 && Yn(f, g);
      }
      if (!t.local && t.afterState.get(s.clientID) !== t.beforeState.get(s.clientID) && (Qa(yr, Gi, "[yjs] ", Zi, Xi, "Changed the client-id because another client seems to be using it."), s.clientID = no()), s.emit("afterTransactionCleanup", [t, s]), s._observers.has("update")) {
        const u = new kn();
        ii(u, t) && s.emit("update", [u.toUint8Array(), t.origin, s, t]);
      }
      if (s._observers.has("updateV2")) {
        const u = new lt();
        ii(u, t) && s.emit("updateV2", [u.toUint8Array(), t.origin, s, t]);
      }
      const { subdocsAdded: l, subdocsLoaded: a, subdocsRemoved: h } = t;
      (l.size > 0 || h.size > 0 || a.size > 0) && (l.forEach((u) => {
        u.clientID = s.clientID, u.collectionid == null && (u.collectionid = s.collectionid), s.subdocs.add(u);
      }), h.forEach((u) => s.subdocs.delete(u)), s.emit("subdocs", [{ loaded: a, added: l, removed: h }, s, t]), h.forEach((u) => u.destroy())), n.length <= e + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, n])) : vo(n, e + 1);
    }
  }
}, N = (n, e, t = null, s = !0) => {
  const r = n._transactionCleanups;
  let i = !1, o = null;
  n._transaction === null && (i = !0, n._transaction = new _c(n, t, s), r.push(n._transaction), r.length === 1 && n.emit("beforeAllTransactions", [n]), n.emit("beforeTransaction", [n._transaction, n]));
  try {
    o = e(n._transaction);
  } finally {
    if (i) {
      const l = n._transaction === r[0];
      n._transaction = null, l && vo(r, 0);
    }
  }
  return o;
};
class Mc {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(e, t) {
    this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const li = (n, e, t) => {
  Lt(n, t.deletions, (s) => {
    s instanceof U && e.scope.some((r) => ts(r, s)) && Mr(s, !1);
  });
}, ai = (n, e, t) => {
  let s = null;
  const r = n.doc, i = n.scope;
  N(r, (l) => {
    for (; e.length > 0 && n.currStackItem === null; ) {
      const a = r.store, h = (
        /** @type {StackItem} */
        e.pop()
      ), u = /* @__PURE__ */ new Set(), c = [];
      let d = !1;
      Lt(l, h.insertions, (f) => {
        if (f instanceof U) {
          if (f.redone !== null) {
            let { item: g, diff: v } = nr(a, f.id);
            v > 0 && (g = Q(l, I(g.id.client, g.id.clock + v))), f = g;
          }
          !f.deleted && i.some((g) => ts(
            g,
            /** @type {Item} */
            f
          )) && c.push(f);
        }
      }), Lt(l, h.deletions, (f) => {
        f instanceof U && i.some((g) => ts(g, f)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Cn(h.insertions, f.id) && u.add(f);
      }), u.forEach((f) => {
        d = Fo(l, f, u, h.insertions, n.ignoreRemoteMapChanges, n) !== null || d;
      });
      for (let f = c.length - 1; f >= 0; f--) {
        const g = c[f];
        n.deleteFilter(g) && (g.delete(l), d = !0);
      }
      n.currStackItem = d ? h : null;
    }
    l.changed.forEach((a, h) => {
      a.has(null) && h._searchMarker && (h._searchMarker.length = 0);
    }), s = l;
  }, n);
  const o = n.currStackItem;
  if (o != null) {
    const l = s.changedParentTypes;
    n.emit("stack-item-popped", [{ stackItem: o, type: t, changedParentTypes: l, origin: n }, n]), n.currStackItem = null;
  }
  return o;
};
class Oc extends Hi {
  /**
   * @param {AbstractType<any>|Array<AbstractType<any>>} typeScope Accepts either a single type, or an array of types
   * @param {UndoManagerOptions} options
   */
  constructor(e, {
    captureTimeout: t = 500,
    captureTransaction: s = (a) => !0,
    deleteFilter: r = () => !0,
    trackedOrigins: i = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = (
      /** @type {Doc} */
      Ys(e) ? e[0].doc : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = t, this.afterTransactionHandler = (a) => {
      if (!this.captureTransaction(a) || !this.scope.some((w) => a.changedParentTypes.has(w)) || !this.trackedOrigins.has(a.origin) && (!a.origin || !this.trackedOrigins.has(a.origin.constructor)))
        return;
      const h = this.undoing, u = this.redoing, c = h ? this.redoStack : this.undoStack;
      h ? this.stopCapturing() : u || this.clear(!1, !0);
      const d = new $t();
      a.afterState.forEach((w, b) => {
        const S = a.beforeState.get(b) || 0, k = w - S;
        k > 0 && hn(d, b, S, k);
      });
      const f = xa();
      let g = !1;
      if (this.lastChange > 0 && f - this.lastChange < this.captureTimeout && c.length > 0 && !h && !u) {
        const w = c[c.length - 1];
        w.deletions = Xs([w.deletions, a.deleteSet]), w.insertions = Xs([w.insertions, d]);
      } else
        c.push(new Mc(a.deleteSet, d)), g = !0;
      !h && !u && (this.lastChange = f), Lt(
        a,
        a.deleteSet,
        /** @param {Item|GC} item */
        (w) => {
          w instanceof U && this.scope.some((b) => ts(b, w)) && Mr(w, !0);
        }
      );
      const v = [{ stackItem: c[c.length - 1], origin: a.origin, type: h ? "redo" : "undo", changedParentTypes: a.changedParentTypes }, this];
      g ? this.emit("stack-item-added", v) : this.emit("stack-item-updated", v);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * @param {Array<AbstractType<any>> | AbstractType<any>} ytypes
   */
  addToScope(e) {
    e = Ys(e) ? e : [e], e.forEach((t) => {
      this.scope.every((s) => s !== t) && (t.doc !== this.doc && ec("[yjs#509] Not same Y.Doc"), this.scope.push(t));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(e) {
    this.trackedOrigins.add(e);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(e) {
    this.trackedOrigins.delete(e);
  }
  clear(e = !0, t = !0) {
    (e && this.canUndo() || t && this.canRedo()) && this.doc.transact((s) => {
      e && (this.undoStack.forEach((r) => li(s, this, r)), this.undoStack = []), t && (this.redoStack.forEach((r) => li(s, this, r)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: t }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let e;
    try {
      e = ai(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return e;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let e;
    try {
      e = ai(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return e;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* Lc(n) {
  const e = O(n.restDecoder);
  for (let t = 0; t < e; t++) {
    const s = O(n.restDecoder), r = n.readClient();
    let i = O(n.restDecoder);
    for (let o = 0; o < s; o++) {
      const l = n.readInfo();
      if (l === 10) {
        const a = O(n.restDecoder);
        yield new ce(I(r, i), a), i += a;
      } else if (us & l) {
        const a = (l & (Re | se)) === 0, h = new U(
          I(r, i),
          null,
          // left
          (l & se) === se ? n.readLeftID() : null,
          // origin
          null,
          // right
          (l & Re) === Re ? n.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          a ? n.readParentInfo() ? n.readString() : n.readLeftID() : null,
          // parent
          a && (l & rn) === rn ? n.readString() : null,
          // parentSub
          $o(n, l)
          // item content
        );
        yield h, i += h.length;
      } else {
        const a = n.readLen();
        yield new ae(I(r, i), a), i += a;
      }
    }
  }
}
class Er {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(e, t) {
    this.gen = Lc(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === ce);
    return this.curr;
  }
}
class xr {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const Rc = (n) => ns(n, ro, kn), Pc = (n, e) => {
  if (n.constructor === ae) {
    const { client: t, clock: s } = n.id;
    return new ae(I(t, s + e), n.length - e);
  } else if (n.constructor === ce) {
    const { client: t, clock: s } = n.id;
    return new ce(I(t, s + e), n.length - e);
  } else {
    const t = (
      /** @type {Item} */
      n
    ), { client: s, clock: r } = t.id;
    return new U(
      I(s, r + e),
      null,
      I(s, r + e - 1),
      null,
      t.rightOrigin,
      t.parent,
      t.parentSub,
      t.content.splice(e)
    );
  }
}, ns = (n, e = Rt, t = lt) => {
  if (n.length === 1)
    return n[0];
  const s = n.map((u) => new e(ft(u)));
  let r = s.map((u) => new Er(u, !0)), i = null;
  const o = new t(), l = new xr(o);
  for (; r = r.filter((d) => d.curr !== null), r.sort(
    /** @type {function(any,any):number} */
    (d, f) => {
      if (d.curr.id.client === f.curr.id.client) {
        const g = d.curr.id.clock - f.curr.id.clock;
        return g === 0 ? d.curr.constructor === f.curr.constructor ? 0 : d.curr.constructor === ce ? 1 : -1 : g;
      } else
        return f.curr.id.client - d.curr.id.client;
    }
  ), r.length !== 0; ) {
    const u = r[0], c = (
      /** @type {Item | GC} */
      u.curr.id.client
    );
    if (i !== null) {
      let d = (
        /** @type {Item | GC | null} */
        u.curr
      ), f = !1;
      for (; d !== null && d.id.clock + d.length <= i.struct.id.clock + i.struct.length && d.id.client >= i.struct.id.client; )
        d = u.next(), f = !0;
      if (d === null || // current decoder is empty
      d.id.client !== c || // check whether there is another decoder that has has updates from `firstClient`
      f && d.id.clock > i.struct.id.clock + i.struct.length)
        continue;
      if (c !== i.struct.id.client)
        He(l, i.struct, i.offset), i = { struct: d, offset: 0 }, u.next();
      else if (i.struct.id.clock + i.struct.length < d.id.clock)
        if (i.struct.constructor === ce)
          i.struct.length = d.id.clock + d.length - i.struct.id.clock;
        else {
          He(l, i.struct, i.offset);
          const g = d.id.clock - i.struct.id.clock - i.struct.length;
          i = { struct: new ce(I(c, i.struct.id.clock + i.struct.length), g), offset: 0 };
        }
      else {
        const g = i.struct.id.clock + i.struct.length - d.id.clock;
        g > 0 && (i.struct.constructor === ce ? i.struct.length -= g : d = Pc(d, g)), i.struct.mergeWith(
          /** @type {any} */
          d
        ) || (He(l, i.struct, i.offset), i = { struct: d, offset: 0 }, u.next());
      }
    } else
      i = { struct: (
        /** @type {Item | GC} */
        u.curr
      ), offset: 0 }, u.next();
    for (let d = u.curr; d !== null && d.id.client === c && d.id.clock === i.struct.id.clock + i.struct.length && d.constructor !== ce; d = u.next())
      He(l, i.struct, i.offset), i = { struct: d, offset: 0 };
  }
  i !== null && (He(l, i.struct, i.offset), i = null), Dr(l);
  const a = s.map((u) => Sr(u)), h = Xs(a);
  return Ht(o, h), o.toUint8Array();
}, Nc = (n, e, t = Rt, s = lt) => {
  const r = ao(e), i = new s(), o = new xr(i), l = new t(ft(n)), a = new Er(l, !1);
  for (; a.curr; ) {
    const u = a.curr, c = u.id.client, d = r.get(c) || 0;
    if (a.curr.constructor === ce) {
      a.next();
      continue;
    }
    if (u.id.clock + u.length > d)
      for (He(o, u, dt(d - u.id.clock, 0)), a.next(); a.curr && a.curr.id.client === c; )
        He(o, a.curr, 0), a.next();
    else
      for (; a.curr && a.curr.id.client === c && a.curr.id.clock + a.curr.length <= d; )
        a.next();
  }
  Dr(o);
  const h = Sr(l);
  return Ht(i, h), i.toUint8Array();
}, bo = (n) => {
  n.written > 0 && (n.clientStructs.push({ written: n.written, restEncoder: ge(n.encoder.restEncoder) }), n.encoder.restEncoder = Sn(), n.written = 0);
}, He = (n, e, t) => {
  n.written > 0 && n.currClient !== e.id.client && bo(n), n.written === 0 && (n.currClient = e.id.client, n.encoder.writeClient(e.id.client), L(n.encoder.restEncoder, e.id.clock + t)), e.write(n.encoder, t), n.written++;
}, Dr = (n) => {
  bo(n);
  const e = n.encoder.restEncoder;
  L(e, n.clientStructs.length);
  for (let t = 0; t < n.clientStructs.length; t++) {
    const s = n.clientStructs[t];
    L(e, s.written), ds(e, s.restEncoder);
  }
}, Uc = (n, e, t, s) => {
  const r = new t(ft(n)), i = new Er(r, !1), o = new s(), l = new xr(o);
  for (let h = i.curr; h !== null; h = i.next())
    He(l, e(h), 0);
  Dr(l);
  const a = Sr(r);
  return Ht(o, a), o.toUint8Array();
}, Fc = (n) => Uc(n, Na, Rt, kn), ci = "You must not compute changes after the event-handler fired.";
class ms {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(e, t) {
    this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = $c(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(e) {
    return Cn(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Ye(ci);
      const e = /* @__PURE__ */ new Map(), t = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(t).forEach((r) => {
        if (r !== null) {
          const i = (
            /** @type {Item} */
            t._map.get(r)
          );
          let o, l;
          if (this.adds(i)) {
            let a = i.left;
            for (; a !== null && this.adds(a); )
              a = a.left;
            if (this.deletes(i))
              if (a !== null && this.deletes(a))
                o = "delete", l = Ms(a.content.getContent());
              else
                return;
            else
              a !== null && this.deletes(a) ? (o = "update", l = Ms(a.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(i))
            o = "delete", l = Ms(
              /** @type {Item} */
              i.content.getContent()
            );
          else
            return;
          e.set(r, { action: o, oldValue: l });
        }
      }), this._keys = e;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(e) {
    return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let e = this._changes;
    if (e === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Ye(ci);
      const t = this.target, s = Mt(), r = Mt(), i = [];
      if (e = {
        added: s,
        deleted: r,
        delta: i,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(t).has(null)) {
        let l = null;
        const a = () => {
          l && i.push(l);
        };
        for (let h = t._start; h !== null; h = h.right)
          h.deleted ? this.deletes(h) && !this.adds(h) && ((l === null || l.delete === void 0) && (a(), l = { delete: 0 }), l.delete += h.length, r.add(h)) : this.adds(h) ? ((l === null || l.insert === void 0) && (a(), l = { insert: [] }), l.insert = l.insert.concat(h.content.getContent()), s.add(h)) : ((l === null || l.retain === void 0) && (a(), l = { retain: 0 }), l.retain += h.length);
        l !== null && l.retain === void 0 && a();
      }
      this._changes = e;
    }
    return (
      /** @type {any} */
      e
    );
  }
}
const $c = (n, e) => {
  const t = [];
  for (; e._item !== null && e !== n; ) {
    if (e._item.parentSub !== null)
      t.unshift(e._item.parentSub);
    else {
      let s = 0, r = (
        /** @type {AbstractType<any>} */
        e._item.parent._start
      );
      for (; r !== e._item && r !== null; )
        !r.deleted && r.countable && (s += r.length), r = r.right;
      t.unshift(s);
    }
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  }
  return t;
}, So = 80;
let Ar = 0;
class Hc {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, t) {
    e.marker = !0, this.p = e, this.index = t, this.timestamp = Ar++;
  }
}
const jc = (n) => {
  n.timestamp = Ar++;
}, Co = (n, e, t) => {
  n.p.marker = !1, n.p = e, e.marker = !0, n.index = t, n.timestamp = Ar++;
}, Bc = (n, e, t) => {
  if (n.length >= So) {
    const s = n.reduce((r, i) => r.timestamp < i.timestamp ? r : i);
    return Co(s, e, t), s;
  } else {
    const s = new Hc(e, t);
    return n.push(s), s;
  }
}, ws = (n, e) => {
  if (n._start === null || e === 0 || n._searchMarker === null)
    return null;
  const t = n._searchMarker.length === 0 ? null : n._searchMarker.reduce((i, o) => Vn(e - i.index) < Vn(e - o.index) ? i : o);
  let s = n._start, r = 0;
  for (t !== null && (s = t.p, r = t.index, jc(t)); s.right !== null && r < e; ) {
    if (!s.deleted && s.countable) {
      if (e < r + s.length)
        break;
      r += s.length;
    }
    s = s.right;
  }
  for (; s.left !== null && r > e; )
    s = s.left, !s.deleted && s.countable && (r -= s.length);
  for (; s.left !== null && s.left.id.client === s.id.client && s.left.id.clock + s.left.length === s.id.clock; )
    s = s.left, !s.deleted && s.countable && (r -= s.length);
  return t !== null && Vn(t.index - r) < /** @type {YText|YArray<any>} */
  s.parent.length / So ? (Co(t, s, r), t) : Bc(n._searchMarker, s, r);
}, dn = (n, e, t) => {
  for (let s = n.length - 1; s >= 0; s--) {
    const r = n[s];
    if (t > 0) {
      let i = r.p;
      for (i.marker = !1; i && (i.deleted || !i.countable); )
        i = i.left, i && !i.deleted && i.countable && (r.index -= i.length);
      if (i === null || i.marker === !0) {
        n.splice(s, 1);
        continue;
      }
      r.p = i, i.marker = !0;
    }
    (e < r.index || t > 0 && e === r.index) && (r.index = dt(e, r.index + t));
  }
}, ys = (n, e, t) => {
  const s = n, r = e.changedParentTypes;
  for (; Ke(r, n, () => []).push(t), n._item !== null; )
    n = /** @type {AbstractType<any>} */
    n._item.parent;
  uo(s._eH, t, e);
};
class Y {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Xr(), this._dEH = Xr(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(e, t) {
    this.doc = e, this._item = t;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw ke();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw ke();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(e) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let e = this._start;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    !e.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(e) {
    Qr(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    Qr(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    ei(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    ei(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const ko = (n, e, t) => {
  e < 0 && (e = n._length + e), t < 0 && (t = n._length + t);
  let s = t - e;
  const r = [];
  let i = n._start;
  for (; i !== null && s > 0; ) {
    if (i.countable && !i.deleted) {
      const o = i.content.getContent();
      if (o.length <= e)
        e -= o.length;
      else {
        for (let l = e; l < o.length && s > 0; l++)
          r.push(o[l]), s--;
        e = 0;
      }
    }
    i = i.right;
  }
  return r;
}, Eo = (n) => {
  const e = [];
  let t = n._start;
  for (; t !== null; ) {
    if (t.countable && !t.deleted) {
      const s = t.content.getContent();
      for (let r = 0; r < s.length; r++)
        e.push(s[r]);
    }
    t = t.right;
  }
  return e;
}, fn = (n, e) => {
  let t = 0, s = n._start;
  for (; s !== null; ) {
    if (s.countable && !s.deleted) {
      const r = s.content.getContent();
      for (let i = 0; i < r.length; i++)
        e(r[i], t++, n);
    }
    s = s.right;
  }
}, xo = (n, e) => {
  const t = [];
  return fn(n, (s, r) => {
    t.push(e(s, r, n));
  }), t;
}, zc = (n) => {
  let e = n._start, t = null, s = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (t === null) {
        for (; e !== null && e.deleted; )
          e = e.right;
        if (e === null)
          return {
            done: !0,
            value: void 0
          };
        t = e.content.getContent(), s = 0, e = e.right;
      }
      const r = t[s++];
      return t.length <= s && (t = null), {
        done: !1,
        value: r
      };
    }
  };
}, Do = (n, e) => {
  const t = ws(n, e);
  let s = n._start;
  for (t !== null && (s = t.p, e -= t.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (e < s.length)
        return s.content.getContent()[e];
      e -= s.length;
    }
}, ss = (n, e, t, s) => {
  let r = t;
  const i = n.doc, o = i.clientID, l = i.store, a = t === null ? e._start : t.right;
  let h = [];
  const u = () => {
    h.length > 0 && (r = new U(I(o, B(l, o)), r, r && r.lastId, a, a && a.id, e, null, new ct(h)), r.integrate(n, 0), h = []);
  };
  s.forEach((c) => {
    if (c === null)
      h.push(c);
    else
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          h.push(c);
          break;
        default:
          switch (u(), c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              r = new U(I(o, B(l, o)), r, r && r.lastId, a, a && a.id, e, null, new En(new Uint8Array(
                /** @type {Uint8Array} */
                c
              ))), r.integrate(n, 0);
              break;
            case jt:
              r = new U(I(o, B(l, o)), r, r && r.lastId, a, a && a.id, e, null, new xn(
                /** @type {Doc} */
                c
              )), r.integrate(n, 0);
              break;
            default:
              if (c instanceof Y)
                r = new U(I(o, B(l, o)), r, r && r.lastId, a, a && a.id, e, null, new Ae(c)), r.integrate(n, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), u();
}, Ao = () => Ye("Length exceeded!"), _o = (n, e, t, s) => {
  if (t > e._length)
    throw Ao();
  if (t === 0)
    return e._searchMarker && dn(e._searchMarker, t, s.length), ss(n, e, null, s);
  const r = t, i = ws(e, t);
  let o = e._start;
  for (i !== null && (o = i.p, t -= i.index, t === 0 && (o = o.prev, t += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (t <= o.length) {
        t < o.length && Q(n, I(o.id.client, o.id.clock + t));
        break;
      }
      t -= o.length;
    }
  return e._searchMarker && dn(e._searchMarker, r, s.length), ss(n, e, o, s);
}, Vc = (n, e, t) => {
  let r = (e._searchMarker || []).reduce((i, o) => o.index > i.index ? o : i, { index: 0, p: e._start }).p;
  if (r)
    for (; r.right; )
      r = r.right;
  return ss(n, e, r, t);
}, To = (n, e, t, s) => {
  if (s === 0)
    return;
  const r = t, i = s, o = ws(e, t);
  let l = e._start;
  for (o !== null && (l = o.p, t -= o.index); l !== null && t > 0; l = l.right)
    !l.deleted && l.countable && (t < l.length && Q(n, I(l.id.client, l.id.clock + t)), t -= l.length);
  for (; s > 0 && l !== null; )
    l.deleted || (s < l.length && Q(n, I(l.id.client, l.id.clock + s)), l.delete(n), s -= l.length), l = l.right;
  if (s > 0)
    throw Ao();
  e._searchMarker && dn(
    e._searchMarker,
    r,
    -i + s
    /* in case we remove the above exception */
  );
}, rs = (n, e, t) => {
  const s = e._map.get(t);
  s !== void 0 && s.delete(n);
}, _r = (n, e, t, s) => {
  const r = e._map.get(t) || null, i = n.doc, o = i.clientID;
  let l;
  if (s == null)
    l = new ct([s]);
  else
    switch (s.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        l = new ct([s]);
        break;
      case Uint8Array:
        l = new En(
          /** @type {Uint8Array} */
          s
        );
        break;
      case jt:
        l = new xn(
          /** @type {Doc} */
          s
        );
        break;
      default:
        if (s instanceof Y)
          l = new Ae(s);
        else
          throw new Error("Unexpected content type");
    }
  new U(I(o, B(i.store, o)), r, r && r.lastId, null, null, e, t, l).integrate(n, 0);
}, Tr = (n, e) => {
  const t = n._map.get(e);
  return t !== void 0 && !t.deleted ? t.content.getContent()[t.length - 1] : void 0;
}, Io = (n) => {
  const e = {};
  return n._map.forEach((t, s) => {
    t.deleted || (e[s] = t.content.getContent()[t.length - 1]);
  }), e;
}, Mo = (n, e) => {
  const t = n._map.get(e);
  return t !== void 0 && !t.deleted;
}, qc = (n, e) => {
  const t = {};
  return n._map.forEach((s, r) => {
    let i = s;
    for (; i !== null && (!e.sv.has(i.id.client) || i.id.clock >= (e.sv.get(i.id.client) || 0)); )
      i = i.left;
    i !== null && bt(i, e) && (t[r] = i.content.getContent()[i.length - 1]);
  }), t;
}, jn = (n) => tc(
  n.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
);
class Jc extends ms {
}
class xt extends Y {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(e) {
    const t = new xt();
    return t.push(e), t;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new xt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new xt();
    return e.insert(0, this.toArray().map(
      (t) => t instanceof Y ? (
        /** @type {typeof el} */
        t.clone()
      ) : t
    )), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    super._callObserver(e, t), ys(this, e, new Jc(this, e));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(e, t) {
    this.doc !== null ? N(this.doc, (s) => {
      _o(
        s,
        this,
        e,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.splice(e, 0, ...t);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(e) {
    this.doc !== null ? N(this.doc, (t) => {
      Vc(
        t,
        this,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.push(...e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(e, t = 1) {
    this.doc !== null ? N(this.doc, (s) => {
      To(s, this, e, t);
    }) : this._prelimContent.splice(e, t);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return Do(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Eo(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(e = 0, t = this.length) {
    return ko(this, e, t);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof Y ? e.toJSON() : e);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(e) {
    return xo(
      this,
      /** @type {any} */
      e
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    fn(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return zc(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(pu);
  }
}
const Yc = (n) => new xt();
class Kc extends ms {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, t, s) {
    super(e, t), this.keysChanged = s;
  }
}
class Pt extends Y {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this._prelimContent.forEach((s, r) => {
      this.set(r, s);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new Pt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new Pt();
    return this.forEach((t, s) => {
      e.set(s, t instanceof Y ? (
        /** @type {typeof value} */
        t.clone()
      ) : t);
    }), e;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    ys(this, e, new Kc(this, e, t));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const e = {};
    return this._map.forEach((t, s) => {
      if (!t.deleted) {
        const r = t.content.getContent()[t.length - 1];
        e[s] = r instanceof Y ? r.toJSON() : r;
      }
    }), e;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...jn(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return Ns(
      jn(this._map),
      /** @param {any} v */
      (e) => e[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return Ns(
      jn(this._map),
      /** @param {any} v */
      (e) => e[1].content.getContent()[e[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return Ns(
      jn(this._map),
      /** @param {any} v */
      (e) => (
        /** @type {any} */
        [e[0], e[1].content.getContent()[e[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    this._map.forEach((t, s) => {
      t.deleted || e(t.content.getContent()[t.length - 1], s, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(e) {
    this.doc !== null ? N(this.doc, (t) => {
      rs(t, this, e);
    }) : this._prelimContent.delete(e);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(e, t) {
    return this.doc !== null ? N(this.doc, (s) => {
      _r(
        s,
        this,
        e,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.set(e, t), t;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(e) {
    return (
      /** @type {any} */
      Tr(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return Mo(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? N(this.doc, (e) => {
      this.forEach(function(t, s, r) {
        rs(e, r, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(mu);
  }
}
const Wc = (n) => new Pt(), Be = (n, e) => n === e || typeof n == "object" && typeof e == "object" && n && e && Pa(n, e);
class tr {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(e, t, s, r) {
    this.left = e, this.right = t, this.index = s, this.currentAttributes = r;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    switch (this.right === null && de(), this.right.content.constructor) {
      case V:
        this.right.deleted || Bt(
          this.currentAttributes,
          /** @type {ContentFormat} */
          this.right.content
        );
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const ui = (n, e, t) => {
  for (; e.right !== null && t > 0; ) {
    switch (e.right.content.constructor) {
      case V:
        e.right.deleted || Bt(
          e.currentAttributes,
          /** @type {ContentFormat} */
          e.right.content
        );
        break;
      default:
        e.right.deleted || (t < e.right.length && Q(n, I(e.right.id.client, e.right.id.clock + t)), e.index += e.right.length, t -= e.right.length);
        break;
    }
    e.left = e.right, e.right = e.right.right;
  }
  return e;
}, Bn = (n, e, t, s) => {
  const r = /* @__PURE__ */ new Map(), i = s ? ws(e, t) : null;
  if (i) {
    const o = new tr(i.p.left, i.p, i.index, r);
    return ui(n, o, t - i.index);
  } else {
    const o = new tr(null, e._start, 0, r);
    return ui(n, o, t);
  }
}, Oo = (n, e, t, s) => {
  for (; t.right !== null && (t.right.deleted === !0 || t.right.content.constructor === V && Be(
    s.get(
      /** @type {ContentFormat} */
      t.right.content.key
    ),
    /** @type {ContentFormat} */
    t.right.content.value
  )); )
    t.right.deleted || s.delete(
      /** @type {ContentFormat} */
      t.right.content.key
    ), t.forward();
  const r = n.doc, i = r.clientID;
  s.forEach((o, l) => {
    const a = t.left, h = t.right, u = new U(I(i, B(r.store, i)), a, a && a.lastId, h, h && h.id, e, null, new V(l, o));
    u.integrate(n, 0), t.right = u, t.forward();
  });
}, Bt = (n, e) => {
  const { key: t, value: s } = e;
  s === null ? n.delete(t) : n.set(t, s);
}, Lo = (n, e) => {
  var t;
  for (; n.right !== null; ) {
    if (!(n.right.deleted || n.right.content.constructor === V && Be(
      (t = e[
        /** @type {ContentFormat} */
        n.right.content.key
      ]) != null ? t : null,
      /** @type {ContentFormat} */
      n.right.content.value
    )))
      break;
    n.forward();
  }
}, Ro = (n, e, t, s) => {
  var l;
  const r = n.doc, i = r.clientID, o = /* @__PURE__ */ new Map();
  for (const a in s) {
    const h = s[a], u = (l = t.currentAttributes.get(a)) != null ? l : null;
    if (!Be(u, h)) {
      o.set(a, u);
      const { left: c, right: d } = t;
      t.right = new U(I(i, B(r.store, i)), c, c && c.lastId, d, d && d.id, e, null, new V(a, h)), t.right.integrate(n, 0), t.forward();
    }
  }
  return o;
}, Us = (n, e, t, s, r) => {
  t.currentAttributes.forEach((d, f) => {
    r[f] === void 0 && (r[f] = null);
  });
  const i = n.doc, o = i.clientID;
  Lo(t, r);
  const l = Ro(n, e, t, r), a = s.constructor === String ? new De(
    /** @type {string} */
    s
  ) : s instanceof Y ? new Ae(s) : new gt(s);
  let { left: h, right: u, index: c } = t;
  e._searchMarker && dn(e._searchMarker, t.index, a.getLength()), u = new U(I(o, B(i.store, o)), h, h && h.lastId, u, u && u.id, e, null, a), u.integrate(n, 0), t.right = u, t.index = c, t.forward(), Oo(n, e, t, l);
}, hi = (n, e, t, s, r) => {
  const i = n.doc, o = i.clientID;
  Lo(t, r);
  const l = Ro(n, e, t, r);
  e:
    for (; t.right !== null && (s > 0 || l.size > 0 && (t.right.deleted || t.right.content.constructor === V)); ) {
      if (!t.right.deleted)
        switch (t.right.content.constructor) {
          case V: {
            const { key: a, value: h } = (
              /** @type {ContentFormat} */
              t.right.content
            ), u = r[a];
            if (u !== void 0) {
              if (Be(u, h))
                l.delete(a);
              else {
                if (s === 0)
                  break e;
                l.set(a, h);
              }
              t.right.delete(n);
            } else
              t.currentAttributes.set(a, h);
            break;
          }
          default:
            s < t.right.length && Q(n, I(t.right.id.client, t.right.id.clock + s)), s -= t.right.length;
            break;
        }
      t.forward();
    }
  if (s > 0) {
    let a = "";
    for (; s > 0; s--)
      a += "\n";
    t.right = new U(I(o, B(i.store, o)), t.left, t.left && t.left.lastId, t.right, t.right && t.right.id, e, null, new De(a)), t.right.integrate(n, 0), t.forward();
  }
  Oo(n, e, t, l);
}, Po = (n, e, t, s, r) => {
  var h, u;
  let i = e;
  const o = pe();
  for (; i && (!i.countable || i.deleted); ) {
    if (!i.deleted && i.content.constructor === V) {
      const c = (
        /** @type {ContentFormat} */
        i.content
      );
      o.set(c.key, c);
    }
    i = i.right;
  }
  let l = 0, a = !1;
  for (; e !== i; ) {
    if (t === e && (a = !0), !e.deleted) {
      const c = e.content;
      switch (c.constructor) {
        case V: {
          const { key: d, value: f } = (
            /** @type {ContentFormat} */
            c
          ), g = (h = s.get(d)) != null ? h : null;
          (o.get(d) !== c || g === f) && (e.delete(n), l++, !a && ((u = r.get(d)) != null ? u : null) === f && g !== f && (g === null ? r.delete(d) : r.set(d, g))), !a && !e.deleted && Bt(
            r,
            /** @type {ContentFormat} */
            c
          );
          break;
        }
      }
    }
    e = /** @type {Item} */
    e.right;
  }
  return l;
}, Gc = (n, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const t = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === V) {
      const s = (
        /** @type {ContentFormat} */
        e.content.key
      );
      t.has(s) ? e.delete(n) : t.add(s);
    }
    e = e.left;
  }
}, Zc = (n) => {
  let e = 0;
  return N(
    /** @type {Doc} */
    n.doc,
    (t) => {
      let s = (
        /** @type {Item} */
        n._start
      ), r = n._start, i = pe();
      const o = Js(i);
      for (; r; ) {
        if (r.deleted === !1)
          switch (r.content.constructor) {
            case V:
              Bt(
                o,
                /** @type {ContentFormat} */
                r.content
              );
              break;
            default:
              e += Po(t, s, r, i, o), i = Js(o), s = r;
              break;
          }
        r = r.right;
      }
    }
  ), e;
}, Xc = (n) => {
  const e = /* @__PURE__ */ new Set(), t = n.doc;
  for (const [s, r] of n.afterState.entries()) {
    const i = n.beforeState.get(s) || 0;
    r !== i && yo(
      n,
      /** @type {Array<Item|GC>} */
      t.store.clients.get(s),
      i,
      r,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === V && o.constructor !== ae && e.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  N(t, (s) => {
    Lt(n, n.deleteSet, (r) => {
      if (r instanceof ae || !/** @type {YText} */
      r.parent._hasFormatting || e.has(
        /** @type {YText} */
        r.parent
      ))
        return;
      const i = (
        /** @type {YText} */
        r.parent
      );
      r.content.constructor === V ? e.add(i) : Gc(s, r);
    });
    for (const r of e)
      Zc(r);
  });
}, di = (n, e, t) => {
  const s = t, r = Js(e.currentAttributes), i = e.right;
  for (; t > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case Ae:
        case gt:
        case De:
          t < e.right.length && Q(n, I(e.right.id.client, e.right.id.clock + t)), t -= e.right.length, e.right.delete(n);
          break;
      }
    e.forward();
  }
  i && Po(n, i, e.right, r, e.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return o._searchMarker && dn(o._searchMarker, e.index, -s + t), e;
};
class No extends ms {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(e, t, s) {
    super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), s.forEach((r) => {
      r === null ? this.childListChanged = !0 : this.keysChanged.add(r);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const e = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = e;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const e = (
        /** @type {Doc} */
        this.target.doc
      ), t = [];
      N(e, (s) => {
        var f, g, v;
        const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
        let o = this.target._start, l = null;
        const a = {};
        let h = "", u = 0, c = 0;
        const d = () => {
          if (l !== null) {
            let w = null;
            switch (l) {
              case "delete":
                c > 0 && (w = { delete: c }), c = 0;
                break;
              case "insert":
                (typeof h == "object" || h.length > 0) && (w = { insert: h }, r.size > 0 && (w.attributes = {}, r.forEach((b, S) => {
                  b !== null && (w.attributes[S] = b);
                }))), h = "";
                break;
              case "retain":
                u > 0 && (w = { retain: u }, Oa(a) || (w.attributes = Ta({}, a))), u = 0;
                break;
            }
            w && t.push(w), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case Ae:
            case gt:
              this.adds(o) ? this.deletes(o) || (d(), l = "insert", h = o.content.getContent()[0], d()) : this.deletes(o) ? (l !== "delete" && (d(), l = "delete"), c += 1) : o.deleted || (l !== "retain" && (d(), l = "retain"), u += 1);
              break;
            case De:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (d(), l = "insert"), h += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (l !== "delete" && (d(), l = "delete"), c += o.length) : o.deleted || (l !== "retain" && (d(), l = "retain"), u += o.length);
              break;
            case V: {
              const { key: w, value: b } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const S = (f = r.get(w)) != null ? f : null;
                  Be(S, b) ? b !== null && o.delete(s) : (l === "retain" && d(), Be(b, (g = i.get(w)) != null ? g : null) ? delete a[w] : a[w] = b);
                }
              } else if (this.deletes(o)) {
                i.set(w, b);
                const S = (v = r.get(w)) != null ? v : null;
                Be(S, b) || (l === "retain" && d(), a[w] = S);
              } else if (!o.deleted) {
                i.set(w, b);
                const S = a[w];
                S !== void 0 && (Be(S, b) ? S !== null && o.delete(s) : (l === "retain" && d(), b === null ? delete a[w] : a[w] = b));
              }
              o.deleted || (l === "insert" && d(), Bt(
                r,
                /** @type {ContentFormat} */
                o.content
              ));
              break;
            }
          }
          o = o.right;
        }
        for (d(); t.length > 0; ) {
          const w = t[t.length - 1];
          if (w.retain !== void 0 && w.attributes === void 0)
            t.pop();
          else
            break;
        }
      }), this._delta = t;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class Nt extends Y {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(e) {
    super(), this._pending = e !== void 0 ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t);
    try {
      this._pending.forEach((s) => s());
    } catch (s) {
      console.error(s);
    }
    this._pending = null;
  }
  _copy() {
    return new Nt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Nt();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    super._callObserver(e, t);
    const s = new No(this, e, t);
    ys(this, e, s), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let e = "", t = this._start;
    for (; t !== null; )
      !t.deleted && t.countable && t.content.constructor === De && (e += /** @type {ContentString} */
      t.content.str), t = t.right;
    return e;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(e, { sanitize: t = !0 } = {}) {
    this.doc !== null ? N(this.doc, (s) => {
      const r = new tr(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let i = 0; i < e.length; i++) {
        const o = e[i];
        if (o.insert !== void 0) {
          const l = !t && typeof o.insert == "string" && i === e.length - 1 && r.right === null && o.insert.slice(-1) === "\n" ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && Us(s, this, r, l, o.attributes || {});
        } else
          o.retain !== void 0 ? hi(s, this, r, o.retain, o.attributes || {}) : o.delete !== void 0 && di(s, r, o.delete);
      }
    }) : this._pending.push(() => this.applyDelta(e));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(e, t, s) {
    const r = [], i = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", a = this._start;
    function h() {
      if (l.length > 0) {
        const c = {};
        let d = !1;
        i.forEach((g, v) => {
          d = !0, c[v] = g;
        });
        const f = { insert: l };
        d && (f.attributes = c), r.push(f), l = "";
      }
    }
    const u = () => {
      for (; a !== null; ) {
        if (bt(a, e) || t !== void 0 && bt(a, t))
          switch (a.content.constructor) {
            case De: {
              const c = i.get("ychange");
              e !== void 0 && !bt(a, e) ? (c === void 0 || c.user !== a.id.client || c.type !== "removed") && (h(), i.set("ychange", s ? s("removed", a.id) : { type: "removed" })) : t !== void 0 && !bt(a, t) ? (c === void 0 || c.user !== a.id.client || c.type !== "added") && (h(), i.set("ychange", s ? s("added", a.id) : { type: "added" })) : c !== void 0 && (h(), i.delete("ychange")), l += /** @type {ContentString} */
              a.content.str;
              break;
            }
            case Ae:
            case gt: {
              h();
              const c = {
                insert: a.content.getContent()[0]
              };
              if (i.size > 0) {
                const d = (
                  /** @type {Object<string,any>} */
                  {}
                );
                c.attributes = d, i.forEach((f, g) => {
                  d[g] = f;
                });
              }
              r.push(c);
              break;
            }
            case V:
              bt(a, e) && (h(), Bt(
                i,
                /** @type {ContentFormat} */
                a.content
              ));
              break;
          }
        a = a.right;
      }
      h();
    };
    return e || t ? N(o, (c) => {
      e && Qs(c, e), t && Qs(c, t), u();
    }, "cleanup") : u(), r;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(e, t, s) {
    if (t.length <= 0)
      return;
    const r = this.doc;
    r !== null ? N(r, (i) => {
      const o = Bn(i, this, e, !s);
      s || (s = {}, o.currentAttributes.forEach((l, a) => {
        s[a] = l;
      })), Us(i, this, o, t, s);
    }) : this._pending.push(() => this.insert(e, t, s));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(e, t, s) {
    const r = this.doc;
    r !== null ? N(r, (i) => {
      const o = Bn(i, this, e, !s);
      Us(i, this, o, t, s || {});
    }) : this._pending.push(() => this.insertEmbed(e, t, s || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(e, t) {
    if (t === 0)
      return;
    const s = this.doc;
    s !== null ? N(s, (r) => {
      di(r, Bn(r, this, e, !0), t);
    }) : this._pending.push(() => this.delete(e, t));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(e, t, s) {
    if (t === 0)
      return;
    const r = this.doc;
    r !== null ? N(r, (i) => {
      const o = Bn(i, this, e, !1);
      o.right !== null && hi(i, this, o, t, s);
    }) : this._pending.push(() => this.format(e, t, s));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? N(this.doc, (t) => {
      rs(t, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, t) {
    this.doc !== null ? N(this.doc, (s) => {
      _r(s, this, e, t);
    }) : this._pending.push(() => this.setAttribute(e, t));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      Tr(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return Io(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(wu);
  }
}
const Qc = (n) => new Nt();
class Fs {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, t = () => !0) {
    this._filter = t, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let e = this._currentNode, t = e && e.content && /** @type {any} */
    e.content.type;
    if (e !== null && (!this._firstCall || e.deleted || !this._filter(t)))
      do
        if (t = /** @type {any} */
        e.content.type, !e.deleted && (t.constructor === Ut || t.constructor === at) && t._start !== null)
          e = t._start;
        else
          for (; e !== null; )
            if (e.right !== null) {
              e = e.right;
              break;
            } else
              e.parent === this._root ? e = null : e = /** @type {AbstractType<any>} */
              e.parent._item;
      while (e !== null && (e.deleted || !this._filter(
        /** @type {ContentType} */
        e.content.type
      )));
    return this._firstCall = !1, e === null ? { value: void 0, done: !0 } : (this._currentNode = e, { value: (
      /** @type {any} */
      e.content.type
    ), done: !1 });
  }
}
class at extends Y {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const e = this._first;
    return e ? e.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new at();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new at();
    return e.insert(0, this.toArray().map((t) => t instanceof Y ? t.clone() : t)), e;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(e) {
    return new Fs(this, e);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(e) {
    e = e.toUpperCase();
    const s = new Fs(this, (r) => r.nodeName && r.nodeName.toUpperCase() === e).next();
    return s.done ? null : s.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(e) {
    return e = e.toUpperCase(), qe(new Fs(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, t) {
    ys(this, e, new nu(this, t, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return xo(this, (e) => e.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t = {}, s) {
    const r = e.createDocumentFragment();
    return s !== void 0 && s._createAssociation(r, this), fn(this, (i) => {
      r.insertBefore(i.toDOM(e, t, s), null);
    }), r;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(e, t) {
    this.doc !== null ? N(this.doc, (s) => {
      _o(s, this, e, t);
    }) : this._prelimContent.splice(e, 0, ...t);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(e, t) {
    if (this.doc !== null)
      N(this.doc, (s) => {
        const r = e && e instanceof Y ? e._item : e;
        ss(s, this, r, t);
      });
    else {
      const s = (
        /** @type {Array<any>} */
        this._prelimContent
      ), r = e === null ? 0 : s.findIndex((i) => i === e) + 1;
      if (r === 0 && e !== null)
        throw Ye("Reference item not found");
      s.splice(r, 0, ...t);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(e, t = 1) {
    this.doc !== null ? N(this.doc, (s) => {
      To(s, this, e, t);
    }) : this._prelimContent.splice(e, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Eo(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(e) {
    this.insert(this.length, e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(e) {
    return Do(this, e);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(e = 0, t = this.length) {
    return ko(this, e, t);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    fn(this, e);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(vu);
  }
}
const eu = (n) => new at();
class Ut extends at {
  constructor(e = "UNDEFINED") {
    super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, t) {
    super._integrate(e, t), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((s, r) => {
      this.setAttribute(r, s);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new Ut(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new Ut(this.nodeName), t = this.getAttributes();
    return Ma(t, (s, r) => {
      typeof s == "string" && e.setAttribute(r, s);
    }), e.insert(0, this.toArray().map((s) => s instanceof Y ? s.clone() : s)), e;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const e = this.getAttributes(), t = [], s = [];
    for (const l in e)
      s.push(l);
    s.sort();
    const r = s.length;
    for (let l = 0; l < r; l++) {
      const a = s[l];
      t.push(a + '="' + e[a] + '"');
    }
    const i = this.nodeName.toLocaleLowerCase(), o = t.length > 0 ? " " + t.join(" ") : "";
    return "<".concat(i).concat(o, ">").concat(super.toString(), "</").concat(i, ">");
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? N(this.doc, (t) => {
      rs(t, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, t) {
    this.doc !== null ? N(this.doc, (s) => {
      _r(s, this, e, t);
    }) : this._prelimAttrs.set(e, t);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      Tr(this, e)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(e) {
    return (
      /** @type {any} */
      Mo(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(e) {
    return (
      /** @type {any} */
      e ? qc(this, e) : Io(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t = {}, s) {
    const r = e.createElement(this.nodeName), i = this.getAttributes();
    for (const o in i) {
      const l = i[o];
      typeof l == "string" && r.setAttribute(o, l);
    }
    return fn(this, (o) => {
      r.appendChild(o.toDOM(e, t, s));
    }), s !== void 0 && s._createAssociation(r, this), r;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(yu), e.writeKey(this.nodeName);
  }
}
const tu = (n) => new Ut(n.readKey());
class nu extends ms {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(e, t, s) {
    super(e, s), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((r) => {
      r === null ? this.childListChanged = !0 : this.attributesChanged.add(r);
    });
  }
}
class is extends Pt {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(e) {
    super(), this.hookName = e;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new is(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const e = new is(this.hookName);
    return this.forEach((t, s) => {
      e.set(s, t);
    }), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t = {}, s) {
    const r = t[this.hookName];
    let i;
    return r !== void 0 ? i = r.createDom(this) : i = document.createElement(this.hookName), i.setAttribute("data-yjs-hook", this.hookName), s !== void 0 && s._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(bu), e.writeKey(this.hookName);
  }
}
const su = (n) => new is(n.readKey());
class K extends Nt {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  _copy() {
    return new K();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const e = new K();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, t, s) {
    const r = e.createTextNode(this.toString());
    return s !== void 0 && s._createAssociation(r, this), r;
  }
  toString() {
    return this.toDelta().map((e) => {
      const t = [];
      for (const r in e.attributes) {
        const i = [];
        for (const o in e.attributes[r])
          i.push({ key: o, value: e.attributes[r][o] });
        i.sort((o, l) => o.key < l.key ? -1 : 1), t.push({ nodeName: r, attrs: i });
      }
      t.sort((r, i) => r.nodeName < i.nodeName ? -1 : 1);
      let s = "";
      for (let r = 0; r < t.length; r++) {
        const i = t[r];
        s += "<".concat(i.nodeName);
        for (let o = 0; o < i.attrs.length; o++) {
          const l = i.attrs[o];
          s += " ".concat(l.key, '="').concat(l.value, '"');
        }
        s += ">";
      }
      s += e.insert;
      for (let r = t.length - 1; r >= 0; r--)
        s += "</".concat(t[r].nodeName, ">");
      return s;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(Su);
  }
}
const ru = (n) => new K();
class Ir {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(e, t) {
    this.id = e, this.length = t;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw ke();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(e, t, s) {
    throw ke();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    throw ke();
  }
}
const iu = 0;
class ae extends Ir {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    t > 0 && (this.id.clock += t, this.length -= t), wo(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeInfo(iu), e.writeLen(this.length - t);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, t) {
    return null;
  }
}
class En {
  /**
   * @param {Uint8Array} content
   */
  constructor(e) {
    this.content = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new En(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(e) {
    throw ke();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const ou = (n) => new En(n.readBuf());
class gn {
  /**
   * @param {number} len
   */
  constructor(e) {
    this.len = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new gn(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const t = new gn(this.len - e);
    return this.len = e, t;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    hn(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeLen(this.len - t);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const lu = (n) => new gn(n.readLen()), Uo = (n, e) => new jt({ guid: n, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class xn {
  /**
   * @param {Doc} doc
   */
  constructor(e) {
    e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
    const t = {};
    this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new xn(Uo(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw ke();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeString(this.doc.guid), e.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const au = (n) => new xn(Uo(n.readString(), n.readAny()));
class gt {
  /**
   * @param {Object} embed
   */
  constructor(e) {
    this.embed = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new gt(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw ke();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const cu = (n) => new gt(n.readJSON());
class V {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(e, t) {
    this.key = e, this.value = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new V(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw ke();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(e, t) {
    const s = (
      /** @type {YText} */
      t.parent
    );
    s._searchMarker = null, s._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeKey(this.key), e.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const uu = (n) => new V(n.readKey(), n.readJSON());
class os {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new os(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(e) {
    const t = new os(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), t;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    const s = this.arr.length;
    e.writeLen(s - t);
    for (let r = t; r < s; r++) {
      const i = this.arr[r];
      e.writeString(i === void 0 ? "undefined" : JSON.stringify(i));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const hu = (n) => {
  const e = n.readLen(), t = [];
  for (let s = 0; s < e; s++) {
    const r = n.readString();
    r === "undefined" ? t.push(void 0) : t.push(JSON.parse(r));
  }
  return new os(t);
};
class ct {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new ct(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const t = new ct(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), t;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    const s = this.arr.length;
    e.writeLen(s - t);
    for (let r = t; r < s; r++) {
      const i = this.arr[r];
      e.writeAny(i);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const du = (n) => {
  const e = n.readLen(), t = [];
  for (let s = 0; s < e; s++)
    t.push(n.readAny());
  return new ct(t);
};
class De {
  /**
   * @param {string} str
   */
  constructor(e) {
    this.str = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new De(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const t = new De(this.str.slice(e));
    this.str = this.str.slice(0, e);
    const s = this.str.charCodeAt(e - 1);
    return s >= 55296 && s <= 56319 && (this.str = this.str.slice(0, e - 1) + "�", t.str = "�" + t.str.slice(1)), t;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.str += e.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeString(t === 0 ? this.str : this.str.slice(t));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const fu = (n) => new De(n.readString()), gu = [
  Yc,
  Wc,
  Qc,
  tu,
  eu,
  su,
  ru
], pu = 0, mu = 1, wu = 2, yu = 3, vu = 4, bu = 5, Su = 6;
class Ae {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(e) {
    this.type = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new Ae(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw ke();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, t) {
    this.type._integrate(e.doc, t);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    let t = this.type._start;
    for (; t !== null; )
      t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
    this.type._map.forEach((s) => {
      s.deleted ? s.id.clock < (e.beforeState.get(s.id.client) || 0) && e._mergeStructs.push(s) : s.delete(e);
    }), e.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
    let t = this.type._start;
    for (; t !== null; )
      t.gc(e, !0), t = t.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (s) => {
        for (; s !== null; )
          s.gc(e, !0), s = s.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    this.type._write(e);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Cu = (n) => new Ae(gu[n.readTypeRef()](n)), nr = (n, e) => {
  let t = e, s = 0, r;
  do
    s > 0 && (t = I(t.client, t.clock + s)), r = Et(n, t), s = t.clock - r.id.clock, t = r.redone;
  while (t !== null && r instanceof U);
  return {
    item: r,
    diff: s
  };
}, Mr = (n, e) => {
  for (; n !== null && n.keep !== e; )
    n.keep = e, n = /** @type {AbstractType<any>} */
    n.parent._item;
}, ls = (n, e, t) => {
  const { client: s, clock: r } = e.id, i = new U(
    I(s, r + t),
    e,
    I(s, r + t - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(t)
  );
  return e.deleted && i.markDeleted(), e.keep && (i.keep = !0), e.redone !== null && (i.redone = I(e.redone.client, e.redone.clock + t)), e.right = i, i.right !== null && (i.right.left = i), n._mergeStructs.push(i), i.parentSub !== null && i.right === null && i.parent._map.set(i.parentSub, i), e.length = t, i;
}, fi = (n, e) => Kl(
  n,
  /** @param {StackItem} s */
  (t) => Cn(t.deletions, e)
), Fo = (n, e, t, s, r, i) => {
  const o = n.doc, l = o.store, a = o.clientID, h = e.redone;
  if (h !== null)
    return Q(n, h);
  let u = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), c = null, d;
  if (u !== null && u.deleted === !0) {
    if (u.redone === null && (!t.has(u) || Fo(n, u, t, s, r, i) === null))
      return null;
    for (; u.redone !== null; )
      u = Q(n, u.redone);
  }
  const f = u === null ? (
    /** @type {AbstractType<any>} */
    e.parent
  ) : (
    /** @type {ContentType} */
    u.content.type
  );
  if (e.parentSub === null) {
    for (c = e.left, d = e; c !== null; ) {
      let b = c;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Q(n, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        c = b;
        break;
      }
      c = c.left;
    }
    for (; d !== null; ) {
      let b = d;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== u; )
        b = b.redone === null ? null : Q(n, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === u) {
        d = b;
        break;
      }
      d = d.right;
    }
  } else if (d = null, e.right && !r) {
    for (c = e; c !== null && c.right !== null && (c.right.redone || Cn(s, c.right.id) || fi(i.undoStack, c.right.id) || fi(i.redoStack, c.right.id)); )
      for (c = c.right; c.redone; )
        c = Q(n, c.redone);
    if (c && c.right !== null)
      return null;
  } else
    c = f._map.get(e.parentSub) || null;
  const g = B(l, a), v = I(a, g), w = new U(
    v,
    c,
    c && c.lastId,
    d,
    d && d.id,
    f,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = v, Mr(w, !0), w.integrate(n, 0), w;
};
class U extends Ir {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(e, t, s, r, i, o, l, a) {
    super(e, a.getLength()), this.origin = s, this.left = t, this.right = r, this.rightOrigin = i, this.parent = o, this.parentSub = l, this.redone = null, this.content = a, this.info = this.content.isCountable() ? jr : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & Ls) > 0 !== e && (this.info ^= Ls);
  }
  get marker() {
    return (this.info & Ls) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Hr) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= Hr);
  }
  get countable() {
    return (this.info & jr) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Os) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Os);
  }
  markDeleted() {
    this.info |= Os;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, t) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= B(t, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= B(t, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === kt && this.id.client !== this.parent.client && this.parent.clock >= B(t, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = ri(e, t, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = Q(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === ae || this.right && this.right.constructor === ae)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === U && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === U && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === kt) {
      const s = Et(t, this.parent);
      s.constructor === ae ? this.parent = null : this.parent = /** @type {ContentType} */
      s.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    if (t > 0 && (this.id.clock += t, this.left = ri(e, e.doc.store, I(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let s = this.left, r;
        if (s !== null)
          r = s.right;
        else if (this.parentSub !== null)
          for (r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; r !== null && r.left !== null; )
            r = r.left;
        else
          r = /** @type {AbstractType<any>} */
          this.parent._start;
        const i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; r !== null && r !== this.right; ) {
          if (o.add(r), i.add(r), Ct(this.origin, r.origin)) {
            if (r.id.client < this.id.client)
              s = r, i.clear();
            else if (Ct(this.rightOrigin, r.rightOrigin))
              break;
          } else if (r.origin !== null && o.has(Et(e.doc.store, r.origin)))
            i.has(Et(e.doc.store, r.origin)) || (s = r, i.clear());
          else
            break;
          r = r.right;
        }
        this.left = s;
      }
      if (this.left !== null) {
        const s = this.left.right;
        this.right = s, this.left.right = this;
      } else {
        let s;
        if (this.parentSub !== null)
          for (s = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; s !== null && s.left !== null; )
            s = s.left;
        else
          s = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = s;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), wo(e.doc.store, this), this.content.integrate(e, this), oi(
        e,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new ae(this.id, this.length).integrate(e, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let e = this.right;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let e = this.left;
    for (; e !== null && e.deleted; )
      e = e.left;
    return e;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : I(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && Ct(e.origin, this.lastId) && this.right === e && Ct(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
      const t = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return t && t.forEach((s) => {
        s.p === e && (s.p = this, !this.deleted && this.countable && (s.index -= this.length));
      }), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(e) {
    if (!this.deleted) {
      const t = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), hn(e.deleteSet, this.id.client, this.id.clock, this.length), oi(e, t, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, t) {
    if (!this.deleted)
      throw de();
    this.content.gc(e), t ? Ac(e, this, new ae(this.id, this.length)) : this.content = new gn(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(e, t) {
    const s = t > 0 ? I(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, o = this.content.getRef() & us | (s === null ? 0 : se) | // origin is defined
    (r === null ? 0 : Re) | // right origin is defined
    (i === null ? 0 : rn);
    if (e.writeInfo(o), s !== null && e.writeLeftID(s), r !== null && e.writeRightID(r), s === null && r === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const a = l._item;
        if (a === null) {
          const h = ho(l);
          e.writeParentInfo(!0), e.writeString(h);
        } else
          e.writeParentInfo(!1), e.writeLeftID(a.id);
      } else
        l.constructor === String ? (e.writeParentInfo(!0), e.writeString(l)) : l.constructor === kt ? (e.writeParentInfo(!1), e.writeLeftID(l)) : de();
      i !== null && e.writeString(i);
    }
    this.content.write(e, t);
  }
}
const $o = (n, e) => ku[e & us](n), ku = [
  () => {
    de();
  },
  // GC is not ItemContent
  lu,
  // 1
  hu,
  // 2
  ou,
  // 3
  fu,
  // 4
  cu,
  // 5
  uu,
  // 6
  Cu,
  // 7
  du,
  // 8
  au,
  // 9
  () => {
    de();
  }
  // 10 - Skip is not ItemContent
], Eu = 10;
class ce extends Ir {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, t) {
    de();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, t) {
    e.writeInfo(Eu), L(e.restEncoder, this.length - t);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, t) {
    return null;
  }
}
const Ho = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), jo = "__ $YJS$ __";
Ho[jo] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Ho[jo] = !0;
function gi(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function pi(n) {
  if (!gi(n))
    return !1;
  const e = n.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(gi(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1);
}
function Or(n, e) {
  for (const t in n) {
    const s = n[t], r = e[t];
    if (pi(s) && pi(r)) {
      if (!Or(s, r))
        return !1;
    } else if (Array.isArray(s) && Array.isArray(r)) {
      if (s.length !== r.length)
        return !1;
      for (let i = 0; i < s.length; i++)
        if (s[i] !== r[i])
          return !1;
    } else if (s !== r)
      return !1;
  }
  for (const t in e)
    if (n[t] === void 0 && e[t] !== void 0)
      return !1;
  return !0;
}
function xu(n, ...e) {
  return Object.fromEntries(
    Object.entries(n).filter(([t]) => e.includes(t))
  );
}
function Du(n, ...e) {
  return Object.fromEntries(
    Object.entries(n).filter(([t]) => !e.includes(t))
  );
}
function Au(n) {
  return Object.fromEntries(
    Object.entries(n).filter(([, e]) => e !== null)
  );
}
function _u(n) {
  var t, s;
  const e = [];
  for (const r of n) {
    if (typeof r.insert == "string" && r.insert.length === 0)
      continue;
    const i = e[e.length - 1];
    if (!i || typeof i.insert != "string" || typeof r.insert != "string") {
      e.push(r);
      continue;
    }
    if (i.attributes === r.attributes || !i.attributes == !r.attributes && Or((t = i.attributes) != null ? t : {}, (s = r.attributes) != null ? s : {})) {
      i.insert += r.insert;
      continue;
    }
    e.push(r);
  }
  return e;
}
function $e(n) {
  return _u(n.toDelta());
}
function Bo({ insert: n }) {
  return typeof n == "string" ? n.length : 1;
}
function zo(n) {
  return n.reduce((e, t) => e + Bo(t), 0);
}
function Vo(n, e, t) {
  if (t < 1)
    return [];
  let s = 0;
  const r = [], i = e + t;
  for (let o = 0; o < n.length && !(s >= i); o++) {
    const l = n[o], a = Bo(l);
    if (s + a <= e) {
      s += a;
      continue;
    }
    if (typeof l.insert != "string") {
      s += a, r.push(l);
      continue;
    }
    const h = Math.max(0, e - s), u = Math.min(
      a,
      a - (s + a - i)
    );
    r.push({
      ...l,
      insert: l.insert.slice(h, u)
    }), s += a;
  }
  return r;
}
function Oe(n) {
  return Du(
    n,
    F.isText(n) ? "text" : "children"
  );
}
function qo(n) {
  const e = $e(n), t = e.length > 0 ? e.map(sr) : [{ text: "" }];
  return { ...n.getAttributes(), children: t };
}
function sr(n) {
  return typeof n.insert == "string" ? { ...n.attributes, text: n.insert } : qo(n.insert);
}
function Jo(n) {
  return n.map((e) => F.isText(e) ? { insert: e.text, attributes: Oe(e) } : { insert: Yo(e) });
}
function Yo({
  children: n,
  ...e
}) {
  const t = new K();
  return Object.entries(e).forEach(([s, r]) => {
    t.setAttribute(s, r);
  }), t.applyDelta(Jo(n), { sanitize: !1 }), t;
}
function pn(n) {
  return n ? F.isText(n) ? n.text.length : 1 : 0;
}
function Tu(n, e) {
  return n.children.slice(0, e).reduce((t, s) => t + pn(s), 0);
}
function re(n, e, t) {
  var c;
  if (t.length === 0)
    throw new Error("Path has to a have a length >= 1");
  if (F.isText(e))
    throw new Error("Cannot descent into slate text");
  const [s, ...r] = t, i = Tu(e, s), o = e.children[s], l = $e(n), a = pn(o), h = Vo(l, i, a);
  if (h.length > 1)
    throw new Error("Path doesn't match yText, yTarget spans multiple nodes");
  const u = (c = h[0]) == null ? void 0 : c.insert;
  if (r.length > 0) {
    if (!(u instanceof K))
      throw new Error(
        "Path doesn't match yText, cannot descent into non-yText"
      );
    return re(u, o, r);
  }
  return {
    yParent: n,
    textRange: { start: i, end: i + a },
    yTarget: u instanceof K ? u : void 0,
    slateParent: e,
    slateTarget: o,
    targetDelta: h
  };
}
function Qe(n, e, t = {}) {
  const { assoc: s = 0, insert: r = !1 } = t;
  let i = 0, o = 0;
  for (let h = 0; h < n.children.length; h++) {
    const u = n.children[h], c = F.isText(u) ? u.text.length : 1;
    c > 0 && (o = h);
    const d = i + c;
    if (c > 0 && (s >= 0 ? d > e : d >= e))
      return [h, e - i];
    i += c;
  }
  if (e > i + (r ? 1 : 0))
    throw new Error("yOffset out of bounds");
  if (r)
    return [n.children.length, 0];
  const l = n.children[o], a = F.isText(l) ? l.text.length : 1;
  return [o, a];
}
function Ko(n, e, t) {
  const s = [t];
  for (; s[0] !== n; ) {
    const { parent: i } = s[0];
    if (!i)
      throw new Error("yText isn't a descendant of root element");
    if (!(i instanceof K))
      throw new Error("Unexpected y parent type");
    s.unshift(i);
  }
  if (s.length < 2)
    return [];
  let r = e;
  return s.reduce((i, o, l) => {
    const a = s[l + 1];
    if (!a)
      return i;
    let h = 0;
    const u = $e(o);
    for (const d of u) {
      if (d.insert === a)
        break;
      h += typeof d.insert == "string" ? d.insert.length : 1;
    }
    if (F.isText(r))
      throw new Error("Cannot descent into slate text");
    const [c] = Qe(r, h);
    return r = r.children[c], i.concat(c);
  }, []);
}
function Dt(n) {
  if (!n.doc)
    throw new Error("shared type isn't attached to a document");
}
const ut = "__slateYjsStoredPosition_";
function rr(n, e, t) {
  const { yTarget: s, yParent: r, textRange: i } = re(
    n,
    e,
    t.path
  );
  if (s)
    throw new Error(
      "Slate point points to a non-text element inside sharedRoot"
    );
  const o = i.start + t.offset;
  return fo(
    r,
    o,
    o === i.end ? -1 : 0
  );
}
function Iu(n, e, { type: t, index: s, assoc: r }) {
  if (!(t instanceof K))
    throw new Error("Absolute position points to a non-XMLText");
  const i = Ko(n, e, t), o = yn.get(e, i);
  if (F.isText(o))
    throw new Error(
      "Absolute position doesn't match slateRoot, cannot descent into text"
    );
  const [l, a] = Qe(o, s, {
    assoc: r
  }), h = o.children[l];
  return F.isText(h) ? { path: [...i, l], offset: a } : null;
}
function ir(n, e, t) {
  if (!n.doc)
    throw new Error("sharedRoot isn't attach to a yDoc");
  const s = po(
    t,
    n.doc
  );
  return s && Iu(n, e, s);
}
function Mu(n, e) {
  const t = n.getAttribute(ut + e);
  return t ? go(t) : null;
}
function Ou(n) {
  return Object.fromEntries(
    Object.entries(n.getAttributes()).filter(([e]) => e.startsWith(ut)).map(([e, t]) => [
      e.slice(ut.length),
      bc(t)
    ])
  );
}
function Lu(n) {
  return Dt(n), Object.fromEntries(
    Object.entries(n.getAttributes()).filter(([e]) => e.startsWith(ut)).map(
      ([e, t]) => [
        e.slice(ut.length),
        po(
          go(t),
          n.doc
        )
      ]
    ).filter(([, e]) => e)
  );
}
function Ru(n, e) {
  n.removeAttribute(ut + e);
}
function Wo(n, e, t) {
  n.setAttribute(
    ut + e,
    Ec(t)
  );
}
function Go(n, e, t) {
  return Object.fromEntries(
    Object.entries(n).filter(([, s]) => s.type !== e ? !1 : t ? s.assoc >= 0 ? s.index >= t.start && s.index < t.end : s.index > t.start && s.index >= t.end : !0)
  );
}
function Zo(n, e, t = "") {
  const s = {
    [t]: Go(n, e)
  };
  return $e(e).forEach(({ insert: i }, o) => {
    i instanceof K && Object.assign(
      s,
      Zo(
        n,
        i,
        t ? "".concat(t, ".").concat(o) : o.toString()
      )
    );
  }), s;
}
function Lr(n, e, t, s = 0) {
  const r = Lu(n), i = {
    "": Go(r, e, {
      start: s,
      end: s + zo(t)
    })
  };
  return t.forEach(({ insert: o }, l) => {
    o instanceof K && Object.assign(
      i,
      Zo(r, o, l.toString())
    );
  }), i;
}
function vs(n, e, t, s, r = 0, i = 0, o = "") {
  const l = t[o];
  l && Object.entries(l).forEach(([a, h]) => {
    Wo(
      n,
      a,
      fo(
        e,
        h.index - i + r,
        h.assoc
      )
    );
  }), s.forEach(({ insert: a }, h) => {
    a instanceof K && vs(
      n,
      a,
      t,
      $e(a),
      0,
      0,
      o ? "".concat(o, ".").concat(h) : h.toString()
    );
  });
}
function Kn(n, e, t) {
  return {
    anchor: rr(n, e, t.anchor),
    focus: rr(n, e, t.focus)
  };
}
function Xo(n, e, t) {
  const s = ir(
    n,
    e,
    t.anchor
  );
  if (!s)
    return null;
  const r = ir(
    n,
    e,
    t.focus
  );
  return r ? { anchor: s, focus: r } : null;
}
function Pu(n, e, t) {
  const s = [];
  let r = t.reduce((i, o) => "retain" in o ? i + o.retain : "delete" in o ? i + o.delete : i, 0);
  return t.reverse().forEach((i) => {
    var o;
    if ("attributes" in i && "retain" in i) {
      const [l, a] = Qe(
        n,
        r - i.retain
      ), [h, u] = Qe(
        n,
        r,
        { assoc: -1 }
      );
      for (let c = h; c >= l; c--) {
        const d = n.children[c], f = [...e, c];
        if (!F.isText(d))
          continue;
        const g = i.attributes, v = xu(
          n,
          ...Object.keys(i.attributes)
        );
        if (c === l || c === h) {
          const w = c === l ? a : 0, b = c === h ? u : d.text.length;
          if (b !== d.text.length && s.push({
            type: "split_node",
            path: f,
            position: b,
            properties: Oe(d)
          }), w !== 0) {
            s.push({
              type: "split_node",
              path: f,
              position: w,
              properties: Au({
                ...Oe(d),
                ...g
              })
            });
            continue;
          }
        }
        s.push({
          type: "set_node",
          newProperties: g,
          path: f,
          properties: v
        });
      }
    }
    if ("retain" in i && (r -= i.retain), "delete" in i) {
      const [l, a] = Qe(
        n,
        r - i.delete
      ), [h, u] = Qe(
        n,
        r,
        { assoc: -1 }
      );
      for (let c = u === 0 ? h - 1 : h; c >= l; c--) {
        const d = n.children[c], f = [...e, c];
        if (F.isText(d) && (c === l || c === h)) {
          const g = c === l ? a : 0, v = c === h ? u : d.text.length;
          s.push({
            type: "remove_text",
            offset: g,
            text: d.text.slice(g, v),
            path: f
          }), r -= v - g;
          continue;
        }
        s.push({
          type: "remove_node",
          node: d,
          path: f
        }), r -= pn(d);
      }
      return;
    }
    if ("insert" in i) {
      const [l, a] = Qe(n, r, {
        insert: !0
      }), h = n.children[l], u = [...e, l];
      if (F.isText(h)) {
        const c = s[s.length - 1], d = c != null && c.type === "insert_node" ? c.node : Oe(h);
        let f = [];
        if (c != null && (c.type === "insert_node" || c.type === "insert_text" || c.type === "split_node" || c.type === "set_node") && (f = c.path), typeof i.insert == "string" && Or((o = i.attributes) != null ? o : {}, d) && it.equals(u, f))
          return s.push({
            type: "insert_text",
            offset: a,
            text: i.insert,
            path: u
          });
        const g = sr(i);
        return a === 0 ? s.push({
          type: "insert_node",
          path: u,
          node: g
        }) : (a < h.text.length && s.push({
          type: "split_node",
          path: u,
          position: a,
          properties: Oe(h)
        }), s.push({
          type: "insert_node",
          path: it.next(u),
          node: g
        }));
      }
      return s.push({
        type: "insert_node",
        path: u,
        node: sr(i)
      });
    }
  }), s;
}
function Nu(n, e, t) {
  const { target: s, changes: r } = t, i = t.delta;
  if (!(s instanceof K))
    throw new Error("Unexpected target node type");
  const o = [], l = Ko(n, e, s), a = yn.get(e, l);
  if (F.isText(a))
    throw new Error("Cannot apply yTextEvent to text node");
  const h = Array.from(r.keys.entries());
  if (l.length > 0 && h.length > 0) {
    const u = Object.fromEntries(
      h.map(([d, f]) => [
        d,
        f.action === "delete" ? null : s.getAttribute(d)
      ])
    ), c = Object.fromEntries(
      h.map(([d]) => [d, a[d]])
    );
    o.push({ type: "set_node", newProperties: u, properties: c, path: l });
  }
  return i.length > 0 && o.push(...Pu(a, l, i)), o;
}
function Uu(n, e, t) {
  if (t instanceof No)
    return Nu(n, e, t);
  throw new Error("Unexpected Y event type");
}
function Fu(n, e, t) {
  P.withoutNormalizing(e, () => {
    t.forEach((s) => {
      Uu(n, e, s).forEach((r) => {
        e.apply(r);
      });
    });
  });
}
function $u(n, e, t) {
  const { yParent: s, textRange: r } = re(n, e, t.path);
  if (F.isText(t.node))
    return s.insert(
      r.start,
      t.node.text,
      Oe(t.node)
    );
  s.insertEmbed(r.start, Yo(t.node));
}
function Hu(n) {
  const e = new K(), t = n.getAttributes();
  return Object.entries(t).forEach(([s, r]) => {
    e.setAttribute(s, r);
  }), e.applyDelta(bs($e(n)), {
    sanitize: !1
  }), e;
}
function bs(n) {
  return n.map((e) => typeof e.insert == "string" ? e : { ...e, insert: Hu(e.insert) });
}
function ju(n, e, t) {
  const s = re(n, e, t.path), r = re(
    s.yParent,
    s.slateParent,
    it.previous(t.path.slice(-1))
  );
  if (!s.yTarget != !r.yTarget)
    throw new Error("Cannot merge y text with y element");
  if (!r.yTarget || !s.yTarget) {
    const { yParent: u, textRange: c, slateTarget: d } = s;
    if (!d)
      throw new Error("Expected Slate target node for merge op.");
    const f = yn.get(e, it.previous(t.path));
    if (!F.isText(f))
      throw new Error("Path points to Y.Text but not a Slate text node.");
    const g = Oe(d), v = Oe(f), w = Object.keys(g).reduce((b, S) => S in v ? b : { ...b, [S]: null }, {});
    return u.format(c.start, c.end - c.start, {
      ...w,
      ...v
    });
  }
  const i = r.yTarget.length, o = $e(s.yTarget), l = bs(o), a = Lr(
    n,
    s.yTarget,
    o,
    i
  ), h = [{ retain: i }, ...l];
  r.yTarget.applyDelta(h, {
    sanitize: !1
  }), s.yParent.delete(
    s.textRange.start,
    s.textRange.end - s.textRange.start
  ), vs(
    n,
    r.yTarget,
    a,
    l,
    i
  );
}
function Bu(n, e, t) {
  const s = it.parent(t.newPath), r = t.newPath[t.newPath.length - 1], i = yn.get(e, s);
  if (F.isText(i))
    throw new Error("Cannot move slate node into text element");
  const o = [
    ...s,
    Math.min(r, i.children.length)
  ], l = re(n, e, t.path), a = re(n, e, o), h = bs(l.targetDelta), u = Lr(
    n,
    l.yParent,
    l.targetDelta
  );
  l.yParent.delete(
    l.textRange.start,
    l.textRange.end - l.textRange.start
  );
  const c = zo($e(a.yParent)), d = Math.min(a.textRange.start, c), f = [{ retain: d }, ...h];
  a.yParent.applyDelta(f, { sanitize: !1 }), vs(
    n,
    a.yParent,
    u,
    h,
    d,
    l.textRange.start
  );
}
function zu(n, e, t) {
  const { yParent: s, textRange: r } = re(
    n,
    e,
    t.path
  );
  s.delete(r.start, r.end - r.start);
}
function Vu(n, e, t) {
  const { yTarget: s, textRange: r, yParent: i } = re(
    n,
    e,
    t.path
  );
  if (s)
    return Object.entries(t.newProperties).forEach(([a, h]) => {
      if (h === null)
        return s.removeAttribute(a);
      s.setAttribute(a, h);
    }), Object.entries(t.properties).forEach(([a]) => {
      t.newProperties.hasOwnProperty(a) || s.removeAttribute(a);
    });
  const l = { ...Object.fromEntries(
    Object.keys(t.properties).map((a) => [a, null])
  ), ...t.newProperties };
  i.format(
    r.start,
    r.end - r.start,
    l
  );
}
function qu(n, e, t) {
  const s = re(n, e, t.path);
  if (!s.slateTarget)
    throw new Error("Y target without corresponding slate node");
  if (!s.yTarget) {
    if (!F.isText(s.slateTarget))
      throw new Error("Mismatch node type between y target and slate node");
    const c = {};
    return s.targetDelta.forEach((d) => {
      d.attributes && Object.keys(d.attributes).forEach((f) => {
        c[f] = null;
      });
    }), s.yParent.format(
      s.textRange.start,
      s.textRange.end - s.textRange.start,
      { ...c, ...t.properties }
    );
  }
  if (F.isText(s.slateTarget))
    throw new Error("Mismatch node type between y target and slate node");
  const r = re(s.yTarget, s.slateTarget, [
    t.position
  ]), i = s.slateTarget.children.slice(0, t.position).reduce((c, d) => c + pn(d), 0), o = s.slateTarget.children.reduce(
    (c, d) => c + pn(d),
    0
  ), l = Vo(
    $e(s.yTarget),
    i,
    o - i
  ), a = bs(l), h = Lr(
    n,
    s.yTarget,
    l,
    i
  ), u = new K();
  u.applyDelta(a, {
    sanitize: !1
  }), Object.entries(t.properties).forEach(([c, d]) => {
    u.setAttribute(c, d);
  }), s.yTarget.delete(
    r.textRange.start,
    s.yTarget.length - r.textRange.start
  ), s.yParent.insertEmbed(s.textRange.end, u), vs(
    n,
    u,
    h,
    a,
    0,
    i
  );
}
const Ju = {
  insert_node: $u,
  remove_node: zu,
  set_node: Vu,
  merge_node: ju,
  move_node: Bu,
  split_node: qu
};
function Yu(n, e, t) {
  const { yParent: s, textRange: r } = re(
    n,
    e,
    t.path
  ), i = yn.get(e, t.path);
  if (!F.isText(i))
    throw new Error("Cannot insert text into non-text node");
  s.insert(
    r.start + t.offset,
    t.text,
    Oe(i)
  );
}
function Ku(n, e, t) {
  const { yParent: s, textRange: r } = re(
    n,
    e,
    t.path
  );
  s.delete(r.start + t.offset, t.text.length);
}
const Wu = {
  insert_text: Yu,
  remove_text: Ku
}, Gu = () => {
}, Zu = {
  ...Wu,
  ...Ju,
  set_selection: Gu
};
function Xu(n, e, t) {
  const s = Zu[t.type];
  if (!s)
    throw new Error("Unknown operation: ".concat(t.type));
  s(n, e, t);
}
const Qu = Symbol("slate-yjs-operation"), eh = Symbol("slate-yjs-position-storage"), $s = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakSet(), $ = {
  isYjsEditor(n) {
    return P.isEditor(n) && n.sharedRoot instanceof K && "localOrigin" in n && "positionStorageOrigin" in n && typeof n.applyRemoteEvents == "function" && typeof n.storeLocalChange == "function" && typeof n.flushLocalChanges == "function" && typeof n.isLocalOrigin == "function" && typeof n.connect == "function" && typeof n.disconnect == "function";
  },
  localChanges(n) {
    var e;
    return (e = or.get(n)) != null ? e : [];
  },
  applyRemoteEvents(n, e, t) {
    n.applyRemoteEvents(e, t);
  },
  storeLocalChange(n, e) {
    n.storeLocalChange(e);
  },
  flushLocalChanges(n) {
    n.flushLocalChanges();
  },
  connected(n) {
    return lr.has(n);
  },
  connect(n) {
    n.connect();
  },
  disconnect(n) {
    n.disconnect();
  },
  isLocal(n) {
    return n.isLocalOrigin($.origin(n));
  },
  origin(n) {
    const e = $s.get(n);
    return e !== void 0 ? e : n.localOrigin;
  },
  withOrigin(n, e, t) {
    const s = $.origin(n);
    $s.set(n, e), t(), $s.set(n, s);
  },
  storePosition(n, e, t) {
    var o;
    const { sharedRoot: s, positionStorageOrigin: r } = n;
    Dt(s);
    const i = rr(s, n, t);
    (o = s.doc) == null || o.transact(() => {
      Wo(s, e, i);
    }, r);
  },
  removeStoredPosition(n, e) {
    var r;
    const { sharedRoot: t, positionStorageOrigin: s } = n;
    Dt(t), (r = t.doc) == null || r.transact(() => {
      Ru(t, e);
    }, s);
  },
  position(n, e) {
    const t = Mu(n.sharedRoot, e);
    if (t)
      return ir(n.sharedRoot, n, t);
  },
  storedPositionsRelative(n) {
    return Ou(n.sharedRoot);
  }
};
function th(n, e, t, {
  localOrigin: s,
  positionStorageOrigin: r,
  autoConnect: i = !1
} = {}) {
  const o = n;
  o.sharedRoot = e, o.editorWindow = t, o.localOrigin = s != null ? s : Qu, o.positionStorageOrigin = r != null ? r : eh, o.applyRemoteEvents = (c, d) => {
    $.flushLocalChanges(o), P.withoutNormalizing(o, () => {
      $.withOrigin(o, d, () => {
        Fu(o.sharedRoot, o, c);
      });
    });
  }, o.isLocalOrigin = (c) => c === o.localOrigin;
  const l = (c, d) => {
    o.isLocalOrigin(d.origin) || $.applyRemoteEvents(o, c, d.origin);
  };
  let a = null;
  i && (a = setTimeout(() => {
    a = null, $.connect(o);
  })), o.connect = () => {
    if ($.connected(o))
      throw new Error("already connected");
    o.sharedRoot.observeDeep(l);
    const c = qo(o.sharedRoot);
    o.children = c.children, lr.add(o), P.normalize(n, { force: !0 }), n.operations.length || n.onChange();
  }, o.disconnect = () => {
    a && clearTimeout(a), $.flushLocalChanges(o), o.sharedRoot.unobserveDeep(l), lr.delete(o);
  }, o.storeLocalChange = (c) => {
    or.set(o, [
      ...$.localChanges(o),
      { op: c, doc: n.children, origin: $.origin(o) }
    ]);
  }, o.flushLocalChanges = () => {
    Dt(o.sharedRoot);
    const c = $.localChanges(o);
    or.delete(o);
    const d = [];
    c.forEach((f) => {
      const g = d[d.length - 1];
      if (g && g[0].origin === f.origin)
        return g.push(f);
      d.push([f]);
    }), d.forEach((f) => {
      var g;
      Dt(o.sharedRoot), (g = o.sharedRoot.doc) == null || g.transact(() => {
        f.forEach((v) => {
          Dt(o.sharedRoot), Xu(o.sharedRoot, { children: v.doc }, v.op);
        });
      }, f[0].origin);
    });
  };
  const { apply: h, onChange: u } = o;
  return o.apply = (c) => {
    $.connected(o) && $.isLocal(o) && $.storeLocalChange(o, c), h(c);
  }, o.onChange = () => {
    $.connected(o) && $.flushLocalChanges(o), u();
  }, o;
}
const mi = /* @__PURE__ */ new WeakMap(), nh = Symbol(
  "slate-yjs-history-without-saving"
);
function sh(n, {
  withoutSavingOrigin: e = nh,
  trackedOrigins: t = /* @__PURE__ */ new Set([n.localOrigin]),
  ...s
} = {}) {
  const r = n, i = new Oc(r.sharedRoot, {
    trackedOrigins: t,
    ...s
  });
  r.undoManager = i, r.withoutSavingOrigin = e;
  const { onChange: o, isLocalOrigin: l } = r;
  r.onChange = () => {
    o(), mi.set(
      r,
      r.selection && Kn(r.sharedRoot, r, r.selection)
    );
  }, r.isLocalOrigin = (f) => f === r.withoutSavingOrigin || l(f);
  const a = ({
    stackItem: f
  }) => {
    f.meta.set(
      "selection",
      r.selection && Kn(r.sharedRoot, r, r.selection)
    ), f.meta.set("selectionBefore", mi.get(r));
  }, h = ({
    stackItem: f
  }) => {
    f.meta.set(
      "selection",
      r.selection && Kn(r.sharedRoot, r, r.selection)
    );
  }, u = ({
    stackItem: f,
    type: g
  }) => {
    const v = g === "undo" ? r.undoManager.redoStack : r.undoManager.undoStack, w = v[v.length - 1];
    w && (w.meta.set("selection", f.meta.get("selectionBefore")), w.meta.set("selectionBefore", f.meta.get("selection")));
    const b = f.meta.get(
      "selectionBefore"
    );
    if (!b)
      return;
    const S = Xo(
      r.sharedRoot,
      r,
      b
    );
    S && Z.select(r, S);
  }, { connect: c, disconnect: d } = r;
  return r.connect = () => {
    c(), r.undoManager.on("stack-item-added", a), r.undoManager.on("stack-item-popped", u), r.undoManager.on("stack-item-updated", h);
  }, r.disconnect = () => {
    r.undoManager.off("stack-item-added", a), r.undoManager.off("stack-item-popped", u), r.undoManager.off("stack-item-updated", h), d();
  }, r.undo = () => {
    $.connected(r) && ($.flushLocalChanges(r), r.undoManager.undo());
  }, r.redo = () => {
    $.connected(r) && ($.flushLocalChanges(r), r.undoManager.redo());
  }, r;
}
const Wn = /* @__PURE__ */ new WeakMap(), zn = new Ri(), ze = {
  isCursorEditor(n) {
    return $.isYjsEditor(n) && n.awareness && typeof n.cursorDataField == "string" && typeof n.selectionStateField == "string" && typeof n.sendCursorPosition == "function" && typeof n.sendCursorData == "function";
  },
  sendCursorPosition(n, e = n.selection) {
    n.sendCursorPosition(e);
  },
  sendCursorData(n, e) {
    n.sendCursorData(e);
  },
  on(n, e, t) {
    var r;
    if (e !== "change")
      return;
    const s = (r = Wn.get(n)) != null ? r : /* @__PURE__ */ new Set();
    s.add(t), Wn.set(n, s);
  },
  off(n, e, t) {
    if (e !== "change")
      return;
    const s = Wn.get(n);
    s && s.delete(t);
  },
  cursorState(n, e) {
    var s;
    if (e === n.awareness.clientID || !$.connected(n))
      return null;
    const t = n.awareness.getStates().get(e);
    return t ? {
      relativeSelection: (s = t[n.selectionStateField]) != null ? s : null,
      data: t[n.cursorDataField],
      clientId: e
    } : null;
  },
  cursorStates(n) {
    return $.connected(n) ? Object.fromEntries(
      Array.from(n.awareness.getStates().entries(), ([e, t]) => e === n.awareness.clientID || !t ? null : [
        e,
        {
          relativeSelection: t[n.selectionStateField],
          data: t[n.cursorDataField]
        }
      ]).filter(Array.isArray)
    ) : {};
  },
  // TODO CursorEditor自定义事件处理器
  emitEvent(n, ...e) {
    zn.emit(n, ...e);
  },
  onEvent(n, e) {
    zn.on(n, e);
  },
  offEvent(n, e) {
    zn.off(n, e);
  },
  resetEvent() {
    zn.reset();
  }
};
function rh(n, e, {
  cursorStateField: t = "selection",
  cursorDataField: s = "data",
  autoSend: r = !0,
  data: i
} = {}) {
  const o = n;
  o.awareness = e, o.cursorDataField = s, o.selectionStateField = t, o.sendCursorData = (u) => {
    o.awareness.setLocalStateField(o.cursorDataField, u);
  }, o.sendCursorPosition = (u) => {
    const c = o.awareness.getLocalState(), d = c == null ? void 0 : c[t];
    if (!u) {
      d && o.awareness.setLocalStateField(o.selectionStateField, null);
      return;
    }
    const { anchor: f, focus: g } = Kn(o.sharedRoot, o, u);
    (!d || !si(f, d) || !si(g, d)) && o.awareness.setLocalStateField(o.selectionStateField, { anchor: f, focus: g });
  };
  const l = (u) => {
    const c = Wn.get(o);
    if (!c)
      return;
    const d = o.awareness.clientID, f = {
      added: u.added.filter((g) => g !== d),
      removed: u.removed.filter((g) => g !== d),
      updated: u.updated.filter((g) => g !== d)
    };
    (f.added.length > 0 || f.removed.length > 0 || f.updated.length > 0) && c.forEach((g) => g(f));
  }, { connect: a, disconnect: h } = o;
  return o.connect = () => {
    if (a(), o.awareness.on("change", l), l({
      removed: [],
      added: Array.from(o.awareness.getStates().keys()),
      updated: []
    }), r) {
      i && ze.sendCursorData(o, i);
      const { onChange: u } = o;
      o.onChange = () => {
        u(), $.connected(o) && (ze.sendCursorPosition(o), ze.emitEvent("updateCursor"));
      };
    }
  }, o.disconnect = () => {
    o.awareness.off("change", l), ze.resetEvent(), l({
      removed: Array.from(o.awareness.getStates().keys()),
      added: [],
      updated: []
    }), h();
  }, o;
}
function Qo(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function vt(n) {
  const e = Qo(n);
  return new RegExp("(".concat(e, ").+?(").concat(e, ")$"));
}
function Hs(n) {
  const e = Qo(n);
  return new RegExp("^(".concat(e, ")$"));
}
function js(n) {
  return (e, t) => {
    Z.setNodes(e, { type: n }, {
      match: (s) => P.isBlock(e, s),
      at: t
    });
  };
}
function ih(n) {
  return (e, t) => {
    const s = P.rangeRef(e, t);
    Z.unwrapNodes(e, {
      at: t,
      match: (i) => P.isInline(e, i),
      mode: "all",
      split: !0
    }), s.current && Z.insertNodes(
      e,
      { text: " " },
      {
        match: F.isText,
        at: Ce.end(s.current),
        select: !0
      }
    );
    const r = s.unref();
    r && Z.wrapNodes(e, { type: n, children: [] }, {
      at: r,
      split: !0
    });
  };
}
function Xt(n) {
  return (e, t) => {
    Z.insertNodes(
      e,
      { text: " " },
      {
        match: F.isText,
        at: Ce.end(t),
        select: !0
      }
    ), Z.setNodes(
      e,
      { [n]: !0 },
      {
        match: F.isText,
        at: t,
        split: !0
      }
    );
  };
}
const oh = [
  { trigger: Hs("#"), apply: js("heading-one") },
  { trigger: Hs("##"), apply: js("heading-two") },
  { trigger: Hs(">"), apply: js("block-quote") },
  { trigger: vt("`"), apply: ih("inline-code") },
  { trigger: vt("**"), apply: Xt("bold") },
  { trigger: vt("__"), apply: Xt("bold") },
  { trigger: vt("*"), apply: Xt("italic") },
  { trigger: vt("_"), apply: Xt("italic") },
  { trigger: vt("~~"), apply: Xt("strikethrough") }
];
function Gn(n, e, t) {
  if (e.offset >= t)
    return { offset: e.offset - t, path: e.path };
  const s = P.previous(n, {
    at: e.path,
    match: F.isText
  });
  if (!s)
    return;
  const [r, i] = s;
  return Gn(
    n,
    { offset: r.text.length, path: i },
    t - e.offset
  );
}
function lh(n) {
  const { deleteBackward: e, insertText: t, isInline: s } = n;
  return n.insertText = (r) => {
    const { selection: i } = n;
    if (r !== " " || !i || !Ce.isCollapsed(i))
      return t(r);
    const { anchor: o } = i, l = P.above(n, {
      match: (c) => P.isBlock(n, c)
    }), a = l ? l[1] : [], h = { anchor: o, focus: P.start(n, a) }, u = P.string(n, h);
    for (const { trigger: c, apply: d } of oh) {
      const f = c.exec(u);
      if (!f)
        continue;
      const [g, v, w] = f;
      P.withoutNormalizing(n, () => {
        const b = o, S = w && Gn(n, b, w.length), k = v && Gn(n, b, g.length - v.length), E = Gn(n, b, g.length);
        if (!b || !E)
          return;
        const D = P.rangeRef(n, {
          anchor: E,
          focus: b
        });
        S && Z.delete(n, {
          at: { anchor: S, focus: b }
        }), k && Z.delete(n, {
          at: { anchor: E, focus: k }
        });
        const M = D.unref();
        M && d(n, M);
      });
      return;
    }
    t(r);
  }, n.insertBreak = () => {
    var i;
    const { selection: r } = n;
    if (r) {
      const o = P.above(n, {
        match: (u) => P.isBlock(n, u)
      }), l = o ? o[1] : [], a = P.end(n, l), h = $r.equals(
        a,
        Ce.end(r)
      );
      if (Z.splitNodes(n, { always: !0 }), h) {
        Z.unwrapNodes(n, {
          match: (c) => P.isInline(n, c),
          mode: "all"
        }), Z.setNodes(n, { type: "paragraph" }, {
          match: (c) => P.isBlock(n, c)
        });
        const u = (i = P.marks(n)) != null ? i : {};
        Z.unsetNodes(n, Object.keys(u), {
          match: F.isText
        });
      }
    }
  }, n.deleteBackward = (...r) => {
    const { selection: i } = n;
    if (i && Ce.isCollapsed(i)) {
      const o = P.above(n, {
        match: (l) => P.isBlock(n, l)
      });
      if (o) {
        const [l, a] = o, h = P.start(n, a);
        if (!P.isEditor(l) && Qn.isElement(l) && l.type !== "paragraph" && $r.equals(i.anchor, h)) {
          const u = {
            type: "paragraph"
          };
          Z.setNodes(n, u);
          return;
        }
      }
      e(...r);
    }
  }, n.isInline = (r) => Qn.isElement(r) && r.type === "inline-code" || s(r), n;
}
function ah(n) {
  const { normalizeNode: e } = n;
  return n.normalizeNode = (t) => {
    const [s] = t;
    if (!P.isEditor(s) || s.children.length > 0)
      return e(t);
    const r = {
      type: "paragraph",
      children: [{ text: "" }]
    };
    Z.insertNodes(n, r, { at: [0] });
  }, n;
}
class Ft {
  /**
   * 获取主题
   * @returns
   */
  static getThemeVar() {
    const e = document.documentElement;
    return e ? getComputedStyle(e).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否包含中文字符
   * @param inputString
   * @returns
   */
  static isChineseCharacter(e) {
    return /[\u4e00-\u9fa5]/.test(e);
  }
  /**
   * 判断字符串是否同时存在英文和中文
   * @param str
   * @returns
   */
  static hasChineseAndEnglish(e) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(e);
  }
  /**
   * 字符串转16进制颜色
   * @param text
   * @returns
   */
  static stringToHexColor(e) {
    if (!e)
      return "";
    let t = 0;
    for (let a = 0; a < e.length; a++)
      if (this.isChineseCharacter(e))
        t = e.charCodeAt(a) + ((t << 5) - t), t = t & t;
      else {
        const h = e.charCodeAt(a);
        t += h.toString(16);
      }
    const s = String(t).substring(0, 6);
    let r = parseInt(s.substring(0, 2), 16), i = parseInt(s.substring(2, 4), 16), o = parseInt(s.substring(4, 6), 16);
    r < 0 && (r = 10), i < 0 && (i = 10), o < 0 && (o = 10);
    const l = "#".concat(r.toString(16).padStart(2, "0")).concat(i.toString(16).padStart(2, "0")).concat(o.toString(16).padStart(2, "0"));
    return l === "#FFFFFF" && this.getThemeVar() || l;
  }
  /**
   * 缩写名字
   * @param text
   * @returns
   */
  static avatarName(e) {
    if (e && e.toString().length < 2)
      return e;
    if (e && e.toString().length >= 2) {
      if (this.hasChineseAndEnglish(e)) {
        const i = e.split("").find((l) => /[a-zA-Z]/.test(l)) || "", o = e.split("").find((l) => /[\u4E00-\u9FA5]/.test(l)) || "";
        return "".concat(i).concat(o).toLowerCase();
      }
      return /[a-zA-Z]/.test(e) ? e.split("").filter((i) => /[a-zA-Z]/.test(i)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(e) ? e.split("").filter((i) => /[\u4E00-\u9FA5]/.test(i)).slice(-2).join("") : e.replaceAll(" ", "").substring(0, 2);
    }
  }
  /**
   * 解析emoji表情
   *
   * @param {string} value
   * @return {*}  {string}
   */
  static getEmojiCustomHtml(e) {
    return e.replaceAll(/{"emoji":"(.+?)"}/g, (t, s) => {
      const r = decodeURIComponent(atob(s));
      return '<span class="emoji-tag">'.concat(r, "</span>");
    }).replaceAll(
      /<span data-w-e-type="emoji" class='emoji'>(.+?)<\/span>/g,
      (t, s) => {
        const r = decodeURIComponent(atob(s));
        return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(r, "</span>");
      }
    );
  }
}
function ch(n, e) {
  const t = Math.round(Math.min(Math.max(e, 0), 1) * 255);
  return n + t.toString(16).toUpperCase();
}
function uh(n) {
  return {
    color: Ft.stringToHexColor(n),
    name: "".concat(n)
  };
}
const hh = globalThis.Text, el = (n) => {
  var e, t;
  return (t = (e = n == null ? void 0 : n.ownerDocument) == null ? void 0 : e.defaultView) != null ? t : null;
}, dh = (n) => {
  const e = el(n);
  return !!e && n instanceof e.Node;
}, wi = (n) => dh(n) && n.nodeType === 1;
function yi(n, e) {
  var a;
  const [t] = P.node(n, e.path), s = n.toDOMNode(t);
  let r;
  P.void(n, { at: e }) && (e = { path: e.path, offset: 0 });
  const i = "[data-slate-string], [data-slate-zero-width]", o = Array.from(s.querySelectorAll(i));
  let l = 0;
  for (let h = 0; h < o.length; h++) {
    const u = o[h], c = u.childNodes[0];
    if (c == null || c.textContent == null)
      continue;
    const { length: d } = c.textContent, f = u.getAttribute("data-slate-length"), g = f == null ? d : parseInt(f, 10), v = l + g, w = o[h + 1];
    if (e.offset === v && (w != null && w.hasAttribute("data-slate-mark-placeholder"))) {
      const b = w.childNodes[0];
      r = [
        b instanceof hh ? b : w,
        (a = w.textContent) != null && a.startsWith("\uFEFF") ? 1 : 0
      ];
      break;
    }
    if (e.offset <= v) {
      const b = Math.min(d, Math.max(0, e.offset - l));
      r = [c, b];
      break;
    }
    l = v;
  }
  if (!r)
    throw new Error(
      "Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(e))
    );
  return r;
}
function fh(n, e) {
  const { anchor: t, focus: s } = e, r = Ce.isBackward(e), i = yi(n, t), o = Ce.isCollapsed(e) ? i : yi(n, s), a = n.editorWindow.document.createRange(), [h, u] = r ? o : i, [c, d] = r ? i : o, g = !!(wi(h) ? h : h.parentElement).getAttribute("data-slate-zero-width"), w = !!(wi(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
  return a.setStart(h, g ? 1 : u), a.setEnd(c, w ? 1 : d), a;
}
function gh(n, e) {
  try {
    return fh(n, e);
  } catch (t) {
    return null;
  }
}
const vi = /* @__PURE__ */ new WeakMap();
function bi(n, e) {
  if (!e.relativeSelection || !n)
    return null;
  let t = vi.get(n.children);
  t || (t = /* @__PURE__ */ new WeakMap(), vi.set(n.children, t));
  let s = t.get(e);
  if (s === void 0)
    try {
      s = Xo(
        n.sharedRoot,
        n,
        e.relativeSelection
      ), t.set(e, s);
    } catch (r) {
      return null;
    }
  return s;
}
function ph(n, e, { yOffset: t, xOffset: s, shouldGenerateOverlay: r }) {
  const [i, o] = Ce.edges(e), l = gh(n, e);
  if (!l)
    return {
      caretPosition: null,
      selectionRects: []
    };
  const a = [], h = P.nodes(n, {
    at: e,
    match: (d, f) => F.isText(d) && (!r || r(d, f))
  });
  let u = null;
  const c = Ce.isBackward(e);
  for (const [d, f] of h) {
    const g = n.toDOMNode(d), v = it.equals(f, i.path), w = it.equals(f, o.path);
    let b = null;
    if (v || w) {
      const k = document.createRange();
      k.selectNode(g), v && k.setStart(l.startContainer, l.startOffset), w && k.setEnd(l.endContainer, l.endOffset), b = k.getClientRects();
    } else
      b = g.getClientRects();
    const S = c ? v : w;
    for (let k = 0; k < b.length; k++) {
      const E = b.item(k);
      if (!E)
        continue;
      const D = S && (c ? k === 0 : k === b.length - 1), M = E.top - t, J = E.left - s;
      D && (u = {
        height: "".concat(E.height, "px"),
        top: "".concat(M, "px"),
        left: "".concat(J + (c || Ce.isCollapsed(e) ? 0 : E.width), "px")
      }), a.push({
        width: "".concat(E.width, "px"),
        height: "".concat(E.height, "px"),
        top: "".concat(M, "px"),
        left: "".concat(J, "px")
      });
    }
  }
  return {
    selectionRects: a,
    caretPosition: u
  };
}
const mh = /* @__PURE__ */ Ne({
  name: "CursorCaret",
  props: {
    data: {
      type: Object,
      required: !0
    },
    caretPosition: Object
  },
  setup(n) {
    const e = Ue("cursor-caret"), t = Tt(() => ({
      ...n.caretPosition,
      background: n.data.color
    })), s = Tt(() => ({
      transform: "translateY(-100%)",
      background: n.data.color
    }));
    return {
      ns: e,
      caretStyle: t,
      labelStyle: s
    };
  },
  render() {
    return C("div", {
      style: this.caretStyle,
      class: this.ns.b()
    }, [C("div", {
      class: this.ns.e("text"),
      style: this.labelStyle
    }, [this.data.name])]);
  }
});
const wh = /* @__PURE__ */ Ne({
  name: "CursorSelection",
  props: {
    data: Object,
    selectionRects: Array,
    caretPosition: Object
  },
  setup(n) {
    const e = Ue("cursor-selection"), t = Tt(() => ({
      backgroundColor: ch(n.data.color, 0.5)
    }));
    return {
      ns: e,
      selectionStyle: t
    };
  },
  render() {
    var n;
    return this.data ? C(El, null, [(n = this.selectionRects) == null ? void 0 : n.map((e, t) => C("div", {
      style: {
        ...this.selectionStyle,
        ...e
      },
      class: this.ns.b(),
      key: t
    }, null)), this.caretPosition && C(mh, {
      caretPosition: this.caretPosition,
      data: this.data
    }, null)]) : null;
  }
});
function yh(n, e) {
  let t = null;
  wn(() => {
    n.value && (t = new ResizeObserver(() => {
      e();
    }), t.observe(n.value));
  }), Ii(() => {
    t && n.value && t.unobserve(n.value);
  });
}
const Si = Object.freeze([]);
function vh(n) {
  var u;
  const { slateYjs: e, containerRef: t, shouldGenerateOverlay: s } = n, r = "refreshOnResize" in n && (u = n.refreshOnResize) != null ? u : !0, i = /* @__PURE__ */ new Map(), o = _({}), l = () => {
    var w, b, S;
    if (t && !t.value || !e.yjsEditor)
      return;
    const c = (w = t == null ? void 0 : t.value) == null ? void 0 : w.getBoundingClientRect(), d = (b = c == null ? void 0 : c.x) != null ? b : 0, f = (S = c == null ? void 0 : c.y) != null ? S : 0;
    let g = Object.keys(o.value).length !== Object.keys(e.cursorStates).length;
    const v = Object.fromEntries(
      Object.entries(e.cursorStates).map(([k, E]) => {
        const D = E.relativeSelection && bi(e.yjsEditor, E);
        if (!D)
          return [k, Si];
        const M = i.get(D);
        if (M)
          return [k, M];
        const J = ph(
          e.yjsEditor,
          D,
          {
            xOffset: d,
            yOffset: f,
            shouldGenerateOverlay: s
          }
        );
        return g = !0, i.set(D, J), [k, J];
      })
    );
    g && (o.value = v);
  }, a = () => {
    i.clear(), l();
  };
  return r && yh(t, a), ze.onEvent("updateCursor", gr(l, 0)), tt(
    () => e.cursorStates,
    () => l(),
    { deep: !0, immediate: !0 }
  ), {
    overlayData: Tt(() => Object.entries(e.cursorStates).map(([c, d]) => {
      var v, w;
      const f = d.relativeSelection && bi(e.yjsEditor, d), g = o.value[c];
      return {
        ...d,
        range: f,
        caretPosition: (v = g == null ? void 0 : g.caretPosition) != null ? v : null,
        selectionRects: (w = g == null ? void 0 : g.selectionRects) != null ? w : Si
      };
    })),
    refresh: a
  };
}
const bh = /* @__PURE__ */ Ne({
  name: "CursorOverlay",
  props: {
    slateYjs: {
      type: Object,
      required: !0
    }
  },
  setup(n) {
    const e = Ue("cursor-overlay"), t = _(), {
      overlayData: s
    } = vh({
      slateYjs: n.slateYjs,
      containerRef: t
    });
    return {
      ns: e,
      overlayData: s,
      containerRef: t
    };
  },
  render() {
    var n, e;
    return C("div", {
      class: this.ns.b(),
      ref: "containerRef"
    }, [(e = (n = this.$slots).default) == null ? void 0 : e.call(n), this.overlayData.map((t) => C(wh, xl({
      key: t.clientId
    }, t), null))]);
  }
});
class Sh {
  /**
   * Creates an instance of CollaborateService.
   * @author tony001
   * @date 2024-08-06 11:08:59
   * @param {string} id
   * @param {string} mqttTopic
   * @param {string} token
   * @param {string} appId
   */
  constructor(e, t, s, r) {
    /**
     * 发送消息
     *
     * @author tony001
     * @date 2024-08-06 11:08:00
     * @protected
     */
    p(this, "collaborateUrl", "/portal/collaborate");
    /**
     * 连接状态
     *
     * @author tony001
     * @date 2024-08-06 11:08:20
     * @protected
     * @type {number}
     */
    p(this, "readyState");
    /**
     * 事件对象
     *
     * @author tony001
     * @date 2024-08-05 19:08:09
     */
    p(this, "evt", new Ri());
    /**
     * mqtt 连接实例
     *
     * @author tony001
     * @date 2024-08-05 19:08:52
     * @type {MqttClient}
     */
    p(this, "client");
    /**
     * 连接选项
     *
     * @author tony001
     * @date 2024-08-05 19:08:06
     * @protected
     * @type {IClientOptions}
     */
    p(this, "options", {
      // 超时时间
      connectTimeout: 6e3,
      // 认证信息
      clientId: It(),
      username: "",
      password: "",
      // 心跳时间
      keepalive: 60,
      clean: !0
    });
    this.id = e, this.mqttTopic = t, this.token = s, this.appId = r, this.options.username = t, this.options.password = s, this.readyState = 0;
  }
  /**
   * 发送消息
   *
   * @author tony001
   * @date 2024-08-06 11:08:40
   * @param {(string | ArrayBufferLike | Blob | ArrayBufferView)} data
   */
  send(e) {
    ibiz.net.post("".concat(this.collaborateUrl, "/ROOM/").concat(this.id), { data: e });
  }
  /**
   * mqtt 连接
   *
   * @author tony001
   * @date 2024-08-05 19:08:17
   * @return {*}  {Promise<void>}
   */
  async connect() {
    const e = await import("./mqtt.min-c50220fb.js").then((r) => r.m), t = e.default ? e.default : e, { location: s } = window;
    this.client = t.connect(
      "ws://".concat(s.host).concat(ibiz.env.baseUrl, "/").concat(this.appId).concat(ibiz.env.mqttUrl),
      this.options
    ), this.client.on("connect", () => {
      this.client.subscribe(this.mqttTopic), this.readyState = 1, this.evt.emit("connect"), ibiz.log.debug("collaborate connect");
    }), this.client.on("error", (r) => {
      this.readyState = 3, this.evt.emit("error", r), ibiz.log.debug("collaborate error");
    }), this.client.on("message", (r, i) => {
      const o = JSON.parse(i.toString());
      o && o.data && o.data.data && o.data.data.data && this.evt.emit(
        "message",
        new Uint8Array(Object.values(o.data.data.data))
      ), ibiz.log.debug("collaborate message");
    }), this.client.on("reconnect", () => {
      this.readyState = 0, this.evt.emit("reconnect");
    }), this.client.on("close", () => {
      this.readyState = 3, this.evt.emit("close"), ibiz.log.debug("collaborate close");
    });
  }
  /**
   * 结束 mqtt 连接
   *
   * @author tony001
   * @date 2024-08-05 19:08:02
   */
  close() {
    var e;
    (e = this.client) == null || e.end(), this.evt.reset();
  }
}
const At = () => /* @__PURE__ */ new Map(), tl = (n, e, t) => {
  let s = n.get(e);
  return s === void 0 && n.set(e, s = t()), s;
}, Ch = String.fromCharCode, kh = (n) => n.toLowerCase(), Eh = /^\s*/g, xh = (n) => n.replace(Eh, ""), Dh = /([A-Z])/g, Ci = (n, e) => xh(n.replace(Dh, (t) => "".concat(e).concat(kh(t)))), Ah = (n) => {
  const e = unescape(encodeURIComponent(n)), t = e.length, s = new Uint8Array(t);
  for (let r = 0; r < t; r++)
    s[r] = /** @type {number} */
    e.codePointAt(r);
  return s;
}, Ss = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), _h = (n) => Ss.encode(n), Th = Ss ? _h : Ah;
let en = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
en && en.decode(new Uint8Array()).length === 1 && (en = null);
const ki = (n) => n === void 0 ? null : n;
class Ih {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(e, t) {
    this.map.set(e, t);
  }
  /**
   * @param {string} key
   */
  getItem(e) {
    return this.map.get(e);
  }
}
let nl = new Ih(), sl = !0;
try {
  typeof localStorage < "u" && (nl = localStorage, sl = !1);
} catch (n) {
}
const rl = nl, Mh = (n) => sl || addEventListener(
  "storage",
  /** @type {any} */
  n
), mn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name), il = typeof window < "u" && !mn;
let be;
const Oh = () => {
  if (be === void 0)
    if (mn) {
      be = At();
      const n = process.argv;
      let e = null;
      for (let t = 0; t < n.length; t++) {
        const s = n[t];
        s[0] === "-" ? (e !== null && be.set(e, ""), e = s) : e !== null && (be.set(e, s), e = null);
      }
      e !== null && be.set(e, "");
    } else
      typeof location == "object" ? (be = At(), (location.search || "?").slice(1).split("&").forEach((n) => {
        if (n.length !== 0) {
          const [e, t] = n.split("=");
          be.set("--".concat(Ci(e, "-")), t), be.set("-".concat(Ci(e, "-")), t);
        }
      })) : be = At();
  return be;
}, Lh = (n) => Oh().has(n), Rh = (n) => ki(mn ? process.env[n.toUpperCase()] : rl.getItem(n)), Ph = (n) => Lh("--" + n) || Rh(n) !== null;
Ph("production");
const ol = Math.floor, ll = (n, e) => n < e ? n : e, Nh = (n, e) => n > e ? n : e, Uh = Math.pow, al = 128, Zn = 127, Fh = Number.MAX_SAFE_INTEGER;
class $h {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const oe = () => new $h(), Rr = (n) => {
  let e = n.cpos;
  for (let t = 0; t < n.bufs.length; t++)
    e += n.bufs[t].length;
  return e;
}, ne = (n) => {
  const e = new Uint8Array(Rr(n));
  let t = 0;
  for (let s = 0; s < n.bufs.length; s++) {
    const r = n.bufs[s];
    e.set(r, t), t += r.length;
  }
  return e.set(hl(n.cbuf.buffer, 0, n.cpos), t), e;
}, as = (n, e) => {
  const t = n.cbuf.length;
  n.cpos === t && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(t * 2), n.cpos = 0), n.cbuf[n.cpos++] = e;
}, j = (n, e) => {
  for (; e > Zn; )
    as(n, al | Zn & e), e = ol(e / 128);
  as(n, Zn & e);
}, ar = new Uint8Array(3e4), Hh = ar.length / 3, jh = (n, e) => {
  if (e.length < Hh) {
    const t = Ss.encodeInto(e, ar).written || 0;
    j(n, t);
    for (let s = 0; s < t; s++)
      as(n, ar[s]);
  } else
    Pe(n, Th(e));
}, Bh = (n, e) => {
  const t = unescape(encodeURIComponent(e)), s = t.length;
  j(n, s);
  for (let r = 0; r < s; r++)
    as(
      n,
      /** @type {number} */
      t.codePointAt(r)
    );
}, zh = Ss ? jh : Bh, Vh = (n, e) => {
  const t = n.cbuf.length, s = n.cpos, r = ll(t - s, e.length), i = e.length - r;
  n.cbuf.set(e.subarray(0, r), s), n.cpos += r, i > 0 && (n.bufs.push(n.cbuf), n.cbuf = new Uint8Array(Nh(t * 2, i)), n.cbuf.set(e.subarray(r)), n.cpos = i);
}, Pe = (n, e) => {
  j(n, e.byteLength), Vh(n, e);
};
class qh {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const cl = (n) => new qh(n), Jh = (n, e) => {
  const t = hl(n.arr.buffer, n.pos + n.arr.byteOffset, e);
  return n.pos += e, t;
}, Cs = (n) => Jh(n, Ve(n)), Ei = (n) => n.arr[n.pos++], Ve = (n) => {
  let e = 0, t = 1;
  for (; ; ) {
    const s = n.arr[n.pos++];
    if (e = e + (s & Zn) * t, t *= 128, s < al)
      return e;
    if (e > Fh)
      throw new Error("Integer out of range!");
  }
}, Yh = (n) => {
  let e = Ve(n);
  if (e === 0)
    return "";
  {
    let t = String.fromCodePoint(Ei(n));
    if (--e < 100)
      for (; e--; )
        t += String.fromCodePoint(Ei(n));
    else
      for (; e > 0; ) {
        const s = e < 1e4 ? e : 1e4, r = n.arr.subarray(n.pos, n.pos + s);
        n.pos += s, t += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          r
        ), e -= s;
      }
    return decodeURIComponent(escape(t));
  }
}, Kh = (n) => (
  /** @type any */
  en.decode(Cs(n))
), ul = en ? Kh : Yh, Wh = (n) => new Uint8Array(n), hl = (n, e, t) => new Uint8Array(n, e, t), Gh = (n) => new Uint8Array(n), Zh = (n) => {
  let e = "";
  for (let t = 0; t < n.byteLength; t++)
    e += Ch(n[t]);
  return btoa(e);
}, Xh = (n) => Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("base64"), Qh = (n) => {
  const e = atob(n), t = Wh(e.length);
  for (let s = 0; s < e.length; s++)
    t[s] = e.charCodeAt(s);
  return t;
}, ed = (n) => {
  const e = Buffer.from(n, "base64");
  return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}, td = il ? Zh : Xh, nd = il ? Qh : ed, sd = /* @__PURE__ */ new Map();
class rd {
  /**
   * @param {string} room
   */
  constructor(e) {
    this.room = e, this.onmessage = null, Mh((t) => t.key === e && this.onmessage !== null && this.onmessage({ data: nd(t.newValue || "") }));
  }
  /**
   * @param {ArrayBuffer} buf
   */
  postMessage(e) {
    rl.setItem(this.room, td(Gh(e)));
  }
}
const id = typeof BroadcastChannel > "u" ? rd : BroadcastChannel, Pr = (n) => tl(sd, n, () => {
  const e = /* @__PURE__ */ new Set(), t = new id(n);
  return t.onmessage = (s) => e.forEach((r) => r(s.data, "broadcastchannel")), {
    bc: t,
    subs: e
  };
}), od = (n, e) => Pr(n).subs.add(e), ld = (n, e) => Pr(n).subs.delete(e), St = (n, e, t = null) => {
  const s = Pr(n);
  s.bc.postMessage(e), s.subs.forEach((r) => r(e, t));
}, ht = Date.now, dl = 0, Nr = 1, fl = 2, cr = (n, e) => {
  j(n, dl);
  const t = yc(e);
  Pe(n, t);
}, gl = (n, e, t) => {
  j(n, Nr), Pe(n, gc(e, t));
}, ad = (n, e, t) => gl(e, t, Cs(n)), pl = (n, e, t) => {
  try {
    hc(e, Cs(n), t);
  } catch (s) {
    console.error("Caught error while handling a Yjs update", s);
  }
}, cd = (n, e) => {
  j(n, fl), Pe(n, e);
}, ud = pl, hd = (n, e, t, s) => {
  const r = Ve(n);
  switch (r) {
    case dl:
      ad(n, e, t);
      break;
    case Nr:
      pl(n, t, s);
      break;
    case fl:
      ud(n, t, s);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return r;
}, dd = 0, fd = (n, e, t) => {
  switch (Ve(n)) {
    case dd:
      t(e, ul(n));
  }
}, gd = () => /* @__PURE__ */ new Set(), pd = Array.from;
class ml {
  constructor() {
    this._observers = At();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(e, t) {
    tl(this._observers, e, gd).add(t);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(e, t) {
    const s = (...r) => {
      this.off(e, s), t(...r);
    };
    this.on(e, s);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(e, t) {
    const s = this._observers.get(e);
    s !== void 0 && (s.delete(t), s.size === 0 && this._observers.delete(e));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(e, t) {
    return pd((this._observers.get(e) || At()).values()).forEach((s) => s(...t));
  }
  destroy() {
    this._observers = At();
  }
}
const md = Object.keys, wd = (n, e) => {
  const t = [];
  for (const s in n)
    t.push(e(n[s], s));
  return t;
}, xi = (n) => md(n).length, yd = (n, e) => Object.prototype.hasOwnProperty.call(n, e), vd = (n, e) => n === e, tn = (n, e) => {
  if (n == null || e == null)
    return vd(n, e);
  if (n.constructor !== e.constructor)
    return !1;
  if (n === e)
    return !0;
  switch (n.constructor) {
    case ArrayBuffer:
      n = new Uint8Array(n), e = new Uint8Array(e);
    case Uint8Array: {
      if (n.byteLength !== e.byteLength)
        return !1;
      for (let t = 0; t < n.length; t++)
        if (n[t] !== e[t])
          return !1;
      break;
    }
    case Set: {
      if (n.size !== e.size)
        return !1;
      for (const t of n)
        if (!e.has(t))
          return !1;
      break;
    }
    case Map: {
      if (n.size !== e.size)
        return !1;
      for (const t of n.keys())
        if (!e.has(t) || !tn(n.get(t), e.get(t)))
          return !1;
      break;
    }
    case Object:
      if (xi(n) !== xi(e))
        return !1;
      for (const t in n)
        if (!yd(n, t) || !tn(n[t], e[t]))
          return !1;
      break;
    case Array:
      if (n.length !== e.length)
        return !1;
      for (let t = 0; t < n.length; t++)
        if (!tn(n[t], e[t]))
          return !1;
      break;
    default:
      return !1;
  }
  return !0;
}, Bs = 3e4;
class bd extends ml {
  /**
   * @param {Y.Doc} doc
   */
  constructor(e) {
    super(), this.doc = e, this.clientID = e.clientID, this.states = /* @__PURE__ */ new Map(), this.meta = /* @__PURE__ */ new Map(), this._checkInterval = /** @type {any} */
    setInterval(() => {
      const t = ht();
      this.getLocalState() !== null && Bs / 2 <= t - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
      const s = [];
      this.meta.forEach((r, i) => {
        i !== this.clientID && Bs <= t - r.lastUpdated && this.states.has(i) && s.push(i);
      }), s.length > 0 && Ur(this, s, "timeout");
    }, ol(Bs / 10)), e.on("destroy", () => {
      this.destroy();
    }), this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(e) {
    const t = this.clientID, s = this.meta.get(t), r = s === void 0 ? 0 : s.clock + 1, i = this.states.get(t);
    e === null ? this.states.delete(t) : this.states.set(t, e), this.meta.set(t, {
      clock: r,
      lastUpdated: ht()
    });
    const o = [], l = [], a = [], h = [];
    e === null ? h.push(t) : i == null ? e != null && o.push(t) : (l.push(t), tn(i, e) || a.push(t)), (o.length > 0 || a.length > 0 || h.length > 0) && this.emit("change", [{ added: o, updated: a, removed: h }, "local"]), this.emit("update", [{ added: o, updated: l, removed: h }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(e, t) {
    const s = this.getLocalState();
    s !== null && this.setLocalState({
      ...s,
      [e]: t
    });
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
}
const Ur = (n, e, t) => {
  const s = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (n.states.has(i)) {
      if (n.states.delete(i), i === n.clientID) {
        const o = (
          /** @type {MetaClientState} */
          n.meta.get(i)
        );
        n.meta.set(i, {
          clock: o.clock + 1,
          lastUpdated: ht()
        });
      }
      s.push(i);
    }
  }
  s.length > 0 && (n.emit("change", [{ added: [], updated: [], removed: s }, t]), n.emit("update", [{ added: [], updated: [], removed: s }, t]));
}, nn = (n, e, t = n.states) => {
  const s = e.length, r = oe();
  j(r, s);
  for (let i = 0; i < s; i++) {
    const o = e[i], l = t.get(o) || null, a = (
      /** @type {MetaClientState} */
      n.meta.get(o).clock
    );
    j(r, o), j(r, a), zh(r, JSON.stringify(l));
  }
  return ne(r);
}, Sd = (n, e, t) => {
  const s = cl(e), r = ht(), i = [], o = [], l = [], a = [], h = Ve(s);
  for (let u = 0; u < h; u++) {
    const c = Ve(s);
    let d = Ve(s);
    const f = JSON.parse(ul(s)), g = n.meta.get(c), v = n.states.get(c), w = g === void 0 ? 0 : g.clock;
    (w < d || w === d && f === null && n.states.has(c)) && (f === null ? c === n.clientID && n.getLocalState() != null ? d++ : n.states.delete(c) : n.states.set(c, f), n.meta.set(c, {
      clock: d,
      lastUpdated: r
    }), g === void 0 && f !== null ? i.push(c) : g !== void 0 && f === null ? a.push(c) : f !== null && (tn(f, v) || l.push(c), o.push(c)));
  }
  (i.length > 0 || l.length > 0 || a.length > 0) && n.emit("change", [{
    added: i,
    updated: l,
    removed: a
  }, t]), (i.length > 0 || o.length > 0 || a.length > 0) && n.emit("update", [{
    added: i,
    updated: o,
    removed: a
  }, t]);
}, Cd = (n) => wd(n, (e, t) => "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e))).join("&"), et = 0, wl = 3, _t = 1, kd = 2, Dn = [];
Dn[et] = (n, e, t, s, r) => {
  j(n, et);
  const i = hd(
    e,
    n,
    t.doc,
    t
  );
  s && i === Nr && !t.synced && (t.synced = !0);
};
Dn[wl] = (n, e, t, s, r) => {
  j(n, _t), Pe(
    n,
    nn(
      t.awareness,
      Array.from(t.awareness.getStates().keys())
    )
  );
};
Dn[_t] = (n, e, t, s, r) => {
  Sd(
    t.awareness,
    Cs(e),
    t
  );
};
Dn[kd] = (n, e, t, s, r) => {
  fd(
    e,
    t.doc,
    (i, o) => Ed(t, o)
  );
};
const Di = 3e4, Ed = (n, e) => console.warn("Permission denied to access ".concat(n.url, ".\n").concat(e)), yl = (n, e, t) => {
  const s = cl(e), r = oe(), i = Ve(s), o = n.messageHandlers[i];
  return /** @type {any} */ o ? o(r, s, n, t, i) : console.error("Unable to compute message"), r;
}, vl = (n) => {
  if (n.shouldConnect && n.ws === null) {
    const e = n._WS;
    n.ws = e, n.wsconnecting = !0, n.wsconnected = !1, n.synced = !1, e.evt.on("message", (t) => {
      n.wsLastMessageReceived = ht();
      const s = yl(n, t, !0);
      Rr(s) > 1 && e.send(ne(s));
    }), e.evt.on("error", (t) => {
      n.emit("connection-error", [t, n]);
    }), e.evt.on("close", (t) => {
      n.emit("connection-close", [t, n]), n.ws = null, n.wsconnecting = !1, n.wsconnected ? (n.wsconnected = !1, n.synced = !1, Ur(
        n.awareness,
        Array.from(n.awareness.getStates().keys()).filter(
          (s) => s !== n.doc.clientID
        ),
        n
      ), n.emit("status", [
        {
          status: "disconnected"
        }
      ])) : n.wsUnsuccessfulReconnects++, setTimeout(
        vl,
        ll(
          Uh(2, n.wsUnsuccessfulReconnects) * 100,
          n.maxBackoffTime
        ),
        n
      );
    }), e.evt.on("connect", () => {
      n.wsLastMessageReceived = ht(), n.wsconnecting = !1, n.wsconnected = !0, n.wsUnsuccessfulReconnects = 0, n.emit("status", [
        {
          status: "connected"
        }
      ]);
      const t = oe();
      if (j(t, et), cr(t, n.doc), e.send(ne(t)), n.awareness.getLocalState() !== null) {
        const s = oe();
        j(s, _t), Pe(
          s,
          nn(n.awareness, [
            n.doc.clientID
          ])
        ), e.send(ne(s));
      }
    }), n.emit("status", [
      {
        status: "connecting"
      }
    ]);
  }
}, zs = (n, e) => {
  const t = n.ws;
  n.wsconnected && t && t.readyState === 1 && t.send(e), n.bcconnected && St(n.bcChannel, e, n);
};
class xd extends ml {
  /**
   * @param {string} serverUrl
   * @param {string} roomname
   * @param {Y.Doc} doc
   * @param {object} opts
   * @param {boolean} [opts.connect]
   * @param {awarenessProtocol.Awareness} [opts.awareness]
   * @param {Object<string,string>} [opts.params] specify url parameters
   * @param {Array<string>} [opts.protocols] specify websocket protocols
   * @param {typeof Object} [opts.WebSocketPolyfill] Optionall provide a Object polyfill
   * @param {number} [opts.resyncInterval] Request server state every `resyncInterval` milliseconds
   * @param {number} [opts.maxBackoffTime] Maximum amount of time to wait before trying to reconnect (we try to reconnect using exponential backoff)
   * @param {boolean} [opts.disableBc] Disable cross-tab BroadcastChannel communication
   */
  constructor(e, t, s, {
    connect: r = !0,
    awareness: i = new bd(s),
    params: o = {},
    protocols: l = [],
    WebSocketPolyfill: a,
    resyncInterval: h = -1,
    maxBackoffTime: u = 2500,
    disableBc: c = !1
  } = {}) {
    for (super(); e[e.length - 1] === "/"; )
      e = e.slice(0, e.length - 1);
    this.serverUrl = e, this.bcChannel = e + "/" + t, this.maxBackoffTime = u, this.params = o, this.protocols = l, this.roomname = t, this.doc = s, this._WS = a, this.awareness = i, this.wsconnected = !1, this.wsconnecting = !1, this.bcconnected = !1, this.disableBc = c, this.wsUnsuccessfulReconnects = 0, this.messageHandlers = Dn.slice(), this._synced = !1, this.ws = null, this.wsLastMessageReceived = 0, this.shouldConnect = r, this._resyncInterval = 0, h > 0 && (this._resyncInterval = /** @type {any} */
    setInterval(() => {
      if (this.ws && this.ws.readyState === 1) {
        const d = oe();
        j(d, et), cr(d, s), this.ws.send(ne(d));
      }
    }, h)), this._bcSubscriber = (d, f) => {
      if (f !== this) {
        const g = yl(this, new Uint8Array(d), !1);
        Rr(g) > 1 && St(this.bcChannel, ne(g), this);
      }
    }, this._updateHandler = (d, f) => {
      if (f !== this) {
        const g = oe();
        j(g, et), cd(g, d), zs(this, ne(g));
      }
    }, this.doc.on("update", this._updateHandler), this._awarenessUpdateHandler = ({ added: d, updated: f, removed: g }, v) => {
      const w = d.concat(f).concat(g), b = oe();
      j(b, _t), Pe(
        b,
        nn(i, w)
      ), zs(this, ne(b));
    }, this._exitHandler = () => {
      Ur(
        this.awareness,
        [s.clientID],
        "app closed"
      );
    }, mn && typeof process < "u" && process.on("exit", this._exitHandler), i.on("update", this._awarenessUpdateHandler), this._checkInterval = /** @type {any} */
    setInterval(() => {
      this.wsconnected && Di < ht() - this.wsLastMessageReceived && this.ws.close();
    }, Di / 10), r && this.connect();
  }
  get url() {
    const e = Cd(this.params);
    return this.serverUrl + "/" + this.roomname + (e.length === 0 ? "" : "?" + e);
  }
  /**
   * @type {boolean}
   */
  get synced() {
    return this._synced;
  }
  set synced(e) {
    this._synced !== e && (this._synced = e, this.emit("synced", [e]), this.emit("sync", [e]));
  }
  destroy() {
    this._resyncInterval !== 0 && clearInterval(this._resyncInterval), clearInterval(this._checkInterval), this.disconnect(), mn && typeof process < "u" && process.off("exit", this._exitHandler), this.awareness.off("update", this._awarenessUpdateHandler), this.doc.off("update", this._updateHandler), super.destroy();
  }
  connectBc() {
    if (this.disableBc)
      return;
    this.bcconnected || (od(this.bcChannel, this._bcSubscriber), this.bcconnected = !0);
    const e = oe();
    j(e, et), cr(e, this.doc), St(this.bcChannel, ne(e), this);
    const t = oe();
    j(t, et), gl(t, this.doc), St(this.bcChannel, ne(t), this);
    const s = oe();
    j(s, wl), St(
      this.bcChannel,
      ne(s),
      this
    );
    const r = oe();
    j(r, _t), Pe(
      r,
      nn(this.awareness, [
        this.doc.clientID
      ])
    ), St(
      this.bcChannel,
      ne(r),
      this
    );
  }
  disconnectBc() {
    const e = oe();
    j(e, _t), Pe(
      e,
      nn(
        this.awareness,
        [this.doc.clientID],
        /* @__PURE__ */ new Map()
      )
    ), zs(this, ne(e)), this.bcconnected && (ld(this.bcChannel, this._bcSubscriber), this.bcconnected = !1);
  }
  disconnect() {
    this.shouldConnect = !1, this.disconnectBc(), this.ws !== null && this.ws.close();
  }
  connect() {
    this.shouldConnect = !0, !this.wsconnected && this.ws === null && (vl(this), this.connectBc());
  }
}
class Dd {
  /**
   * Creates an instance of CollaborateRoom.
   * @author tony001
   * @date 2024-08-05 18:08:36
   * @param {string} id
   * @param {IData} doc
   */
  constructor(e, t, s, r) {
    /**
     * 唯一标识
     *
     * @author tony001
     * @date 2024-08-05 18:08:19
     * @type {string}
     */
    p(this, "id");
    /**
     * 房间名称
     *
     * @author tony001
     * @date 2024-08-06 10:08:25
     * @type {string}
     */
    p(this, "name");
    /**
     * 文档实例
     *
     * @author tony001
     * @date 2024-08-05 18:08:59
     * @type {Y.Doc}
     */
    p(this, "doc");
    /**
     * 上下文
     *
     * @author tony001
     * @date 2024-08-06 10:08:29
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @author tony001
     * @date 2024-08-06 10:08:34
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 连接提供者
     *
     * @author tony001
     * @date 2024-08-05 18:08:04
     * @type {*}
     */
    p(this, "connectionProvider");
    this.context = e, this.params = t, this.id = s, this.doc = r;
    const i = ibiz.appData.mqtttopic.split("/");
    this.name = "/".concat(i[1], "/collaborate/ROOM/").concat(this.id);
  }
  /**
   * 创建当前实例
   *
   * @author tony001
   * @date 2024-08-06 10:08:20
   * @return {*}  {Promise<void>}
   */
  async created() {
    const t = ibiz.hub.getApp(this.context.srfappid).model.appId || ibiz.env.appId, s = "ws://".concat(window.location.host).concat(ibiz.env.baseUrl, "/").concat(t).concat(ibiz.env.mqttUrl), r = new Sh(
      this.id,
      this.name,
      Ul(),
      t
    );
    await r.connect(), this.connectionProvider = new xd(
      s,
      this.name,
      this.doc,
      { WebSocketPolyfill: r, resyncInterval: 5e3 }
    );
  }
  /**
   * 销毁当前实例
   *
   * @author tony001
   * @date 2024-08-06 10:08:08
   * @return {*}  {Promise<void>}
   */
  async destroy() {
    var e;
    (e = this.connectionProvider) == null || e.destroy();
  }
}
class Ad {
  constructor() {
    /**
     * 协同房间缓存实例
     *
     * @author tony001
     * @date 2024-08-06 14:08:38
     * @protected
     * @type {Map<string, Map<string, CollaborateRoom>>}
     */
    p(this, "collaborateMap", /* @__PURE__ */ new Map());
  }
  /**
   * 获取应用标识
   *
   * @author tony001
   * @date 2024-08-06 14:08:27
   * @protected
   * @param {IContext} context
   * @return {*}  {string}
   */
  getAppId(e) {
    return ibiz.hub.getApp(e.srfappid).model.appId || ibiz.env.appId;
  }
  /**
   * 创建协同房间
   *
   * @author tony001
   * @date 2024-08-06 14:08:37
   * @param {IContext} context 上下文
   * @param {IParams} params 视图参数
   * @param {string} id 业务数据主键
   * @param {IData} doc 文档实例对象
   * @return {*}  {Promise<CollaborateRoom>}
   */
  async create(e, t, s, r) {
    const i = new Dd(e, t, s, r);
    await i.created();
    const o = this.getAppId(e);
    return this.collaborateMap.has(o) || this.collaborateMap.set(o, /* @__PURE__ */ new Map()), this.collaborateMap.get(o).set(i.id, i), i;
  }
  /**
   * 获取协同房间
   *
   * @author tony001
   * @date 2024-08-06 10:08:17
   * @param {IContext} context 上下文
   * @param {IParams} params 视图参数
   * @param {string} id 业务数据主键
   * @return {*}  {Promise<CollaborateRoom>}
   */
  async get(e, t, s) {
    const r = this.getAppId(e);
    if (!this.collaborateMap.has(r))
      throw new Error(
        ibiz.i18n.t("runtime.utils.collaborateManager.invalidCollaborateRoom", {
          id: s
        })
      );
    const i = this.collaborateMap.get(r);
    if (i && i.has(s))
      return i.get(s);
    throw new Error(
      ibiz.i18n.t("runtime.utils.collaborateManager.invalidCollaborateRoom", {
        id: s
      })
    );
  }
  /**
   * 销毁协同房间
   *
   * @author tony001
   * @date 2024-08-06 10:08:08
   * @param {IContext} context 上下文
   * @param {IParams} params 视图参数
   * @param {string} id 业务数据主键
   * @return {*}  {Promise<void>}
   */
  async destroy(e, t, s) {
    const r = this.getAppId(e);
    if (this.collaborateMap.has(r)) {
      const i = this.collaborateMap.get(r);
      i && i.has(s) && (i.get(s).destroy(), i.delete(s));
    }
  }
}
class _d {
  /**
   * Creates an instance of SlateYjs.
   * @memberof SlateYjs
   */
  constructor(e) {
    /**
     * Yjs 文档
     *
     * @private
     * @type {Y.Doc}
     * @memberof Yjs
     */
    p(this, "yDoc", new jt());
    /**
     * 协同编辑管理器
     *
     * @private
     * @memberof SlateYjs
     */
    p(this, "collaborateManager", new Ad());
    /**
     * Yjs ws 适配器
     *
     * @type {WebsocketProvider | undefined}
     * @memberof Yjs
     */
    p(this, "wsProvider");
    /**
     * 是否初始化完成
     *
     * @private
     * @type {Ref<boolean>}
     * @memberof Yjs
     */
    p(this, "inited", _(!1));
    /**
     * yjs 编辑器实例
     *
     * @type {YjsEditor | undefined}
     * @memberof Yjs
     */
    p(this, "yjsEditor");
    /**
     * 光标状态信息
     *
     * @memberof Yjs
     */
    p(this, "cursorStates", Dl({}));
    /**
     * 光标处理
     *
     * @private
     * @type {(RemoteCursorChangeEventListener | null)}
     * @memberof Yjs
     */
    p(this, "cursorHandler", null);
    this.enableRealtime = e, this.inited.value = !e;
  }
  /**
   * 初始化YJS 必须调用
   *
   * @param {ISlateYjsOption} opt
   * @return {*}  {Promise<void>}
   * @memberof Yjs
   */
  async initYjs(e) {
    var t;
    if (!this.inited.value) {
      const s = [...e.editor.children], r = this.yDoc.get("content", K), i = await this.collaborateManager.create(
        e.context,
        e.params,
        e.roomname,
        this.yDoc
      );
      this.wsProvider = i.connectionProvider, this.wsProvider.on("status", (o) => {
        o.status === "connected" && !this.inited.value && setTimeout(() => {
          this.inited.value = !0, !r.toJSON() && s.length > 0 && r.applyDelta(Jo(s));
        }, 1e3);
      }), this.yjsEditor = lh(
        ah(
          sh(
            rh(
              th(e.editor, r, el((t = e.htmlRef) == null ? void 0 : t.$el), {
                autoConnect: !0
              }),
              this.wsProvider.awareness,
              {
                data: uh(e.context.srfusername)
              }
            )
          )
        )
      ), this.initCursorHandler();
    }
  }
  /**
   * 初始化光标处理
   *
   * @private
   * @memberof Yjs
   */
  initCursorHandler() {
    if (!this.cursorHandler && this.yjsEditor) {
      const e = /* @__PURE__ */ new Set();
      this.cursorHandler = (t) => {
        t.added.forEach((s) => e.add(s)), t.removed.forEach((s) => e.add(s)), t.updated.forEach((s) => e.add(s)), e.forEach((s) => {
          const r = ze.cursorState(
            this.yjsEditor,
            s
          );
          r === null ? delete this.cursorStates[s.toString()] : this.cursorStates[s] = r;
        });
      }, ze.on(
        this.yjsEditor,
        "change",
        this.cursorHandler
      );
    }
  }
  /**
   * 销毁
   *
   * @memberof Yjs
   */
  destroy() {
    var e, t;
    (e = this.yjsEditor) == null || e.disconnect(), this.wsProvider.disconnect(), this.cursorHandler && (ze.off(
      this.yjsEditor,
      "change",
      this.cursorHandler
    ), this.cursorHandler = null), (t = this.yjsEditor) == null || t.destroy();
  }
}
const ur = /* @__PURE__ */ Ne({
  name: "IBizHtmlCollapse",
  props: fr(),
  emits: ["change", "blur", "focus", "enter", "infoTextChange", "link"],
  setup(n, {
    emit: e
  }) {
    const t = Ue("html"), s = n.controller, r = _(), i = _({});
    let o = null, l = 0;
    const a = _(), h = Ti(), u = _(), c = _(), d = _(), f = _(""), g = _({
      Authorization: "Bearer ".concat(Li(Ni.TOKEN))
    }), v = _(""), w = _(""), b = _(!0), S = _(!1), k = _(!1), E = _(!1), D = _(!1), M = _(!0), J = _(!1), W = _(""), _e = _(!1);
    let We;
    const pt = _([]), Ge = new _d(s.enableRealtime), An = () => {
      const m = n.data.srfuf === _l.CREATE;
      Ge.initYjs({
        roomname: m ? "draft" : n.data.srfkey,
        editor: h.value,
        context: s.context,
        params: s.params,
        htmlRef: u.value
      });
    }, we = s.model;
    we.editorParams && (we.editorParams.enableEdit && (S.value = !0, k.value = !0, b.value = s.toBoolean(we.editorParams.enableEdit) && !n.readonly && !n.disabled), we.editorParams.enableFullScreen && (E.value = s.toBoolean(we.editorParams.enableFullScreen))), n.readonly && (S.value = !1, k.value = !0), tt(() => n.data, (m) => {
      if (m) {
        const x = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, m, s.editorParams);
        v.value = x.uploadUrl, w.value = x.downloadUrl;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const Vt = (m, x) => {
      if (x)
        return !0;
    }, _n = (m) => m;
    let mt;
    const ks = async () => {
      var m;
      if (s.deService) {
        const x = await import("@ibiz-template-plugin/ai-chat"), T = x.chat || x.default.chat;
        mt = T;
        const H = T.create({
          question: async (Te) => {
            var Fr;
            const Ie = It();
            return await ((Fr = s.deService) == null ? void 0 : Fr.aiChatSse((ie) => {
              if (ibiz.log.info("aiChatSse", ie), ie.actionstate === 20 && ie.actionresult)
                H.addMessage({
                  messageid: Ie,
                  state: ie.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: ie.actionresult
                });
              else if (ie.actionstate === 30 && ie.actionresult) {
                const Sl = JSON.parse(ie.actionresult), {
                  choices: Is
                } = Sl;
                Is && Is.length > 0 && H.replaceMessage({
                  messageid: Ie,
                  state: ie.actionstate,
                  type: "DEFAULT",
                  role: "ASSISTANT",
                  content: Is[0].content || ""
                });
              } else
                ie.actionstate === 40 && H.replaceMessage({
                  messageid: Ie,
                  state: ie.actionstate,
                  type: "ERROR",
                  role: "ASSISTANT",
                  content: ie.actionresult
                });
            }, s.context, {}, {
              messages: Te
            })), H.addMessage({
              messageid: Ie,
              state: 10,
              type: "DEFAULT",
              role: "ASSISTANT",
              content: ""
            }), !0;
          },
          action: (Te, Ie) => {
            Te === "backfill" && (S.value ? f.value = Ie.content : e("change", Ie.content), _e.value = !0);
          },
          closed: () => {
            h.value && h.value.focus(!0);
          }
        }), G = await ((m = s.deService) == null ? void 0 : m.aiChatHistory(s.context, {}));
        G.data && Array.isArray(G.data) && G.data.forEach((Te) => {
          const Ie = {
            messageid: It(),
            state: 30,
            type: "DEFAULT",
            role: Te.role,
            content: Te.content
          };
          H.addMessage(Ie);
        });
      }
    }, ye = {
      toolbarKeys: Vl
    };
    s.chatCompletion && (ye.insertKeys = {
      index: 60,
      keys: ["|", "aichart"]
    }), s.insertKeys.length > 0 && ye.toolbarKeys && s.insertKeys.forEach((m) => {
      m.keys && m.keys.forEach((x, T) => {
        ye.toolbarKeys.includes(x) || ye.toolbarKeys.splice(m.index + T, 0, x);
      });
    });
    const Tn = {
      placeholder: s.placeHolder,
      readOnly: S.value ? k.value : n.readonly,
      MENU_CONF: {
        // 图片上传
        uploadImage: {
          // 上传地址
          server: v.value,
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
          headers: g.value,
          // 跨域是否传递 cookie ，默认为 false
          withCredentials: !0,
          // 上传之前触发
          onBeforeUpload(m) {
            return m;
          },
          // 上传进度的回调函数
          onProgress(m) {
            console.log("progress", m);
          },
          // 单个文件上传成功之后
          onSuccess(m, x) {
            console.log("".concat(m.name, " 上传成功"), x);
          },
          // 单个文件上传失败
          onFailed(m, x) {
            console.log("".concat(m.name, " 上传失败"), x);
          },
          // 上传错误，或者触发 timeout 超时
          onError(m, x, T) {
            console.log("".concat(m.name, " 上传出错"), x, T);
          },
          // 自定义插入图片
          async customInsert(m, x) {
            const T = w.value.replace("%fileId%", m.id), H = m.filename;
            x(T, H, "");
          }
        },
        // 插入链接
        insertLink: {
          checkLink: Vt,
          // 也支持 async 函数
          parseLinkUrl: _n
          // 也支持 async 函数
        },
        // 更新链接
        editLink: {
          checkLink: Vt,
          // 也支持 async 函数
          parseLinkUrl: _n
          // 也支持 async 函数
        }
      },
      hoverbarKeys: {
        link: {
          menuKeys: ["editLink", "unLink", "customViewLink"]
        }
      }
    };
    cs(() => {
      const m = h.value;
      m != null && (s.enableRealtime ? Ge.destroy() : m.destroy());
    });
    const In = async (m) => {
      if (s.maxHeight) {
        const x = m.getEditableContainer();
        J.value = x.offsetHeight > s.maxHeight;
      }
    }, qt = async (m) => {
      const x = m.src;
      if (k.value)
        Mn(x);
      else {
        const T = P.nodes(h.value, {
          match: (H) => !!(Qn.isElement(H) && H.type === "image"),
          universal: !0
        });
        if (T)
          for (const H of T) {
            const [G] = H;
            G.type === "image" && x.endsWith(G.src) && Mn(G.src);
          }
      }
    }, Mn = async (m) => {
      if (W.value = m, pt.value = [m], await le(), c.value) {
        const {
          container: x
        } = c.value.$refs;
        x && x.children[0].click();
      }
    }, On = (m) => {
      const x = m.getEditableContainer();
      x && x.querySelectorAll("img").forEach((H) => {
        H.onload = () => {
          In(m);
        }, H.onclick = (G) => {
          const Te = G.target;
          Te && qt(Te);
        };
      });
    }, Jt = (m) => {
      if (c.value) {
        const {
          container: x
        } = c.value.$refs;
        if (x) {
          const T = x.querySelector(".el-image-viewer__wrapper");
          T == null || T[m]("keydown", Ln);
        }
      }
    }, Ln = async (m) => {
      (m.key === "Escape" || m.keyCode === 27) && (m.stopPropagation(), m.preventDefault(), await le(), Jt("removeEventListener"), pt.value = []);
    }, Rn = async () => {
      await le(), Jt("addEventListener");
    }, Yt = () => {
      let m = f.value;
      if (s.renderMode === "JSON") {
        const x = h.value;
        m = s.toJson(x.children);
      }
      n.value !== m && e("change", m);
    }, Pn = gr(Yt, s.saveInterval), Kt = (m) => {
      h.value = m, s.onCreated(h.value, n.data, ye);
      const x = s.parseNode(f.value);
      m.setHtml(x), An();
      let T;
      m.on("modalOrPanelShow", (H) => {
        T = new $i(H, u.value);
      }), m.on("modalOrPanelHide", () => {
        T && T.destroy();
      }), m.on("aiClick", () => {
        ks();
      });
    }, Nn = (m) => {
      const x = m.getHtml();
      In(m), On(m);
      const T = x === "<p><br></p>" ? "" : x;
      T === n.value || T === "" && Pi(n.value) || (!S.value && m.isFocused() && (s.emitMode === "AUTOMATIC" ? Pn() : Yt()), s.evt.emit("onChange", {
        eventArg: T
      }));
    }, Un = (m) => {
    }, Ze = (m) => {
      e("focus"), s.evt.emit("onFocus", {
        eventArg: n.value
      });
    }, Xe = (m) => {
      e("blur"), s.evt.emit("onBlur", {
        eventArg: n.value
      });
    }, Fn = (m, x) => {
      alert("【自定义提示】".concat(x, " - ").concat(m));
    }, $n = (m, x, T) => {
      T(!0);
    }, Wt = (m) => {
      const x = h.value;
      x != null && x.insertText(m);
    }, Es = () => {
      h.value != null;
    }, wt = () => {
      const m = h.value;
      m != null && m.disable();
    }, yt = () => {
      const m = h.value;
      m != null && m.enable();
    }, xs = () => {
      Fl(0, () => {
        if (r.value && a.value) {
          const m = r.value.$el.offsetHeight;
          o = new ResizeObserver((x) => {
            const {
              height: T
            } = x[0].contentRect;
            if (T !== l) {
              const H = {
                height: "".concat(m - x[0].contentRect.height, "px")
              };
              i.value = t.cssVarBlock(H), l = T;
            }
          }), o.observe(a.value.selector);
        }
      });
    }, Gt = () => {
      var m, x;
      if (n.value) {
        const T = n.value.indexOf("</p>");
        if (T >= 0) {
          const H = (m = h.value.selection.anchor) == null ? void 0 : m.offset, G = (x = h.value.selection.anchor) == null ? void 0 : x.path;
          H === 0 && G.length > 0 && G[0] === 0 && h.value.move(T - 3);
        }
      }
    }, Zt = () => {
      if (k.value = !k.value, !k.value)
        yt(), h.value.focus(), Gt(), M.value = !0;
      else {
        if (u.value) {
          const {
            box: m
          } = u.value.$refs;
          m.scroll(0, 0);
        }
        wt();
      }
    }, Ds = () => C("div", {
      class: t.be("message", "message-content")
    }, [C("p", null, [Se("确定要取消编辑吗？")]), C("p", {
      class: t.bem("message", "message-content", "message-tip")
    }, [Se("取消编辑将无法保存修改的内容，且不能找回。")])]), As = () => {
      n.value !== f.value ? Ui({
        title: "确认取消",
        type: "warning",
        customClass: t.b("message"),
        message: Ds(),
        showCancelButton: !0,
        cancelButtonClass: t.be("message", "message-cancel"),
        confirmButtonClass: t.be("message", "message-comfire")
      }).then(() => {
        if (n.value) {
          const m = s.parseNode(n.value);
          f.value = m;
        } else
          f.value = "";
        Zt();
      }).catch(() => {
        h.value.focus();
      }) : Zt();
    }, _s = () => {
      k.value = !0, h.value.disable(), s.renderMode !== "JSON" && e("change", f.value), D.value && (D.value = !1);
    }, Ts = () => S.value && s.emitMode !== "AUTOMATIC" ? C("div", {
      class: [t.b("footer"), {
        [t.b("footer-dialog")]: D.value
      }]
    }, [C("div", {
      class: t.be("footer", "cancel"),
      onClick: () => As()
    }, [Se("取消")]), C("div", {
      class: t.be("footer", "save"),
      onClick: () => _s()
    }, [Se("保存")])]) : null, y = () => {
      D.value = !D.value, M.value = !D.value, le(() => {
        k.value ? wt() : (yt(), h.value.focus());
      });
    }, A = () => E.value ? D.value ? C("i", {
      class: "fa fa-compress",
      "aria-hidden": "true",
      title: "缩小",
      onClick: () => y()
    }, null) : C("i", {
      class: "fa fa-expand",
      "aria-hidden": "true",
      title: "放大",
      onClick: () => y()
    }, null) : null, R = () => S.value || E.value ? C("div", {
      class: t.b("custom-toolbar")
    }, [S.value && b.value && k.value ? C("i", {
      class: "fa fa-edit",
      "aria-hidden": "true",
      title: "编辑",
      onClick: () => Zt()
    }, null) : null, A()]) : null, z = () => J.value ? M.value ? C("div", {
      class: t.e("toggle"),
      onClick: () => {
        M.value = !M.value;
      }
    }, [Se("展开更多 "), C(ue("ion-icon"), {
      name: "arrow-down-outline"
    }, null)]) : C("div", {
      class: t.e("toggle"),
      onClick: () => {
        M.value = !M.value;
      }
    }, [Se("收起更多 "), C(ue("ion-icon"), {
      name: "arrow-up-outline"
    }, null)]) : null, X = () => {
      const m = {
        ...i.value
      };
      return M.value && s.maxHeight && Object.assign(m, {
        maxHeight: "".concat(s.maxHeight, "px")
      }), hr(C(bh, {
        ref: "htmlContent",
        style: m,
        slateYjs: Ge,
        "element-loading-text": "数据同步中...",
        class: [t.b("content"), t.is("readonly", k.value)]
      }, {
        default: () => [C(Oi, {
          ref: "toolbarRef",
          editor: h.value,
          "default-config": ye,
          mode: "default",
          class: t.b("toolbar")
        }, null), C(Mi, {
          ref: "htmlRef",
          class: t.b("editor"),
          modelValue: f.value,
          "onUpdate:modelValue": (x) => f.value = x,
          "default-config": Tn,
          mode: "default",
          onOnCreated: Kt,
          onOnChange: Nn,
          onOnDestroyed: Un,
          onOnFocus: Ze,
          onOnBlur: Xe,
          oncustomAlert: Fn,
          oncustomPaste: $n
        }, null)]
      }), [[sn("loading"), !Ge.inited.value]]);
    }, fe = () => C(ue("el-image"), {
      class: t.e("preview"),
      ref: "previewRef",
      "zoom-rate": 1.1,
      src: W.value,
      "preview-src-list": pt.value,
      "hide-on-click-modal": !0,
      onShow: Rn,
      fit: "cover"
    }, null);
    return wn(() => {
      d.value && (We = Ll(d, async () => {
        h.value && h.value.emit("clickOutside");
      })), xs(), tt(() => n.value, (m, x) => {
        m !== x && (typeof n.value == "string" || m == null) && (m == null ? f.value = "" : s.renderMode === "JSON" ? f.value = s.jsonToHtml(m) : f.value = m, _e.value && (h.value && le(() => {
          h.value.focus(!0);
        }), _e.value = !1));
      }, {
        immediate: !0
      }), tt(() => n.disabled, (m, x) => {
        m !== x && (m === !0 ? wt() : yt());
      }, {
        immediate: !0
      });
    }), Ii(() => {
      o && o.disconnect(), We && We.stop && We.stop(), mt && mt.close();
    }), {
      ns: t,
      editorRef: h,
      previewRef: c,
      containerRef: d,
      htmlRef: u,
      mode: "default",
      valueHtml: f,
      toolbarConfig: ye,
      editorConfig: Tn,
      handleCreated: Kt,
      handleChange: Nn,
      handleDestroyed: Un,
      handleFocus: Ze,
      handleBlur: Xe,
      customAlert: Fn,
      customPaste: $n,
      insertText: Wt,
      printHtml: Es,
      disable: wt,
      enable: yt,
      renderHeaserToolbar: R,
      renderEditorContent: X,
      renderToggle: z,
      renderFooter: Ts,
      htmlContent: r,
      hasEnableEdit: S,
      cssVars: i,
      toolbarRef: a,
      isFullScreen: D,
      readonlyState: k,
      collapse: M,
      changeFullScreenState: y,
      renderPreview: fe
    };
  },
  render() {
    return this.isFullScreen ? C(ue("el-dialog"), {
      modelValue: this.isFullScreen,
      "onUpdate:modelValue": (n) => this.isFullScreen = n,
      width: "80%",
      top: "10vh",
      class: this.ns.b("dialog-full-screen"),
      onClose: () => this.changeFullScreenState()
    }, {
      default: () => [C("div", {
        ref: "containerRef",
        class: [this.ns.b(), this.ns.b("collapse"), {
          [this.ns.b("editor-readonly")]: this.readonlyState
        }]
      }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null])]
    }) : C("div", {
      ref: "containerRef",
      class: [this.ns.b(), this.ns.is("allow-collapse", !0), {
        [this.ns.b("editor-readonly")]: this.readonlyState
      }]
    }, [this.renderHeaserToolbar(), this.renderEditorContent(), this.readonlyState ? this.renderToggle() : null, this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null, this.renderPreview()]);
  }
});
const Vs = /* @__PURE__ */ Ne({
  name: "HtmlComment",
  props: fr(),
  emits: Rl(),
  setup(n, {
    emit: e
  }) {
    const t = Ue("html-comment"), s = n.controller, r = _(), i = _(), o = _(!1), l = () => {
      s.collapsed.value = !1, e("focus");
    }, a = (d) => {
      e("change", d), d && s.collapsed.value && (s.collapsed.value = !1);
    }, h = () => {
      if (e("blur"), n.value)
        return null;
      s.collapsed.value = !0;
    }, u = () => {
      o.value = !0;
    };
    return {
      ns: t,
      c: s,
      comment: r,
      editorRef: i,
      onChange: a,
      onFocus: l,
      onBlur: h,
      renderAvatar: () => {
        if (s.userAvatar && !o.value) {
          const g = JSON.parse(s.userAvatar);
          if (g.length === 0)
            return null;
          const {
            downloadUrl: v
          } = ibiz.util.file.calcFileUpDownUrl(s.context, s.params, n.data, s.editorParams), w = v.replace("%fileId%", g[0].id);
          return C("div", {
            class: t.e("avatar-name")
          }, [C("img", {
            src: w,
            alt: "",
            onError: u
          }, null)]);
        }
        const d = Ft.stringToHexColor(s.context.srfusername), f = Ft.avatarName(s.context.srfusername);
        return s.context.srfusername ? C("div", {
          class: t.e("avatar-name"),
          style: "background: ".concat(d, ";")
        }, [f]) : C(ue("el-avatar"), {
          class: t.e("avatar"),
          src: "./assets/images/user-avatar.png"
        }, null);
      }
    };
  },
  render() {
    return this.c.mode === "default" ? C(ur, {
      controller: this.c,
      data: this.data,
      value: this.value,
      readonly: this.readonly,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, null) : C("div", {
      ref: "comment",
      class: [this.ns.b(), this.ns.is("collapse", this.c.collapsed.value)],
      style: {
        height: "".concat(this.c.collapsed.value ? this.c.minHeight : this.c.maxHeight, "px")
      }
    }, [this.renderAvatar(), C(es, {
      controller: this.c,
      data: this.data,
      value: this.value,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, null)]);
  }
});
function Ai(n, e, t, s, r) {
  const i = e === void 0 ? void 0 : e.key;
  return { sel: n, data: e, children: t, text: s, elm: r, key: i };
}
const _i = Array.isArray;
function qs(n) {
  return typeof n == "string" || typeof n == "number" || n instanceof String || n instanceof Number;
}
function bl(n, e, t) {
  if (n.ns = "http://www.w3.org/2000/svg", t !== "foreignObject" && e !== void 0)
    for (let s = 0; s < e.length; ++s) {
      const r = e[s];
      if (typeof r == "string")
        continue;
      const i = r.data;
      i !== void 0 && bl(i, r.children, r.sel);
    }
}
function zt(n, e, t) {
  let s = {}, r, i, o;
  if (t !== void 0 ? (e !== null && (s = e), _i(t) ? r = t : qs(t) ? i = t.toString() : t && t.sel && (r = [t])) : e != null && (_i(e) ? r = e : qs(e) ? i = e.toString() : e && e.sel ? r = [e] : s = e), r !== void 0)
    for (o = 0; o < r.length; ++o)
      qs(r[o]) && (r[o] = Ai(void 0, void 0, void 0, r[o], void 0));
  return n[0] === "s" && n[1] === "v" && n[2] === "g" && (n.length === 3 || n[3] === "." || n[3] === "#") && bl(s, r, n), Ai(n, s, r, i, void 0);
}
function Td(n) {
  const { script: e = "", data: t = {} } = n, s = me.execScriptFn({ data: t }, e, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const Id = {
  type: "attachments",
  elemToHtml: Td
};
function Md(n) {
  const e = decodeURIComponent(n.getAttribute("data-value") || ""), t = JSON.parse(e);
  return {
    type: "attachments",
    script: t.script,
    data: t,
    children: [{ text: "" }]
  };
}
const Od = {
  selector: 'span[data-w-e-type="attachments"]',
  parseElemHtml: Md
};
function Ld(n) {
  const { data: e = {} } = n, t = {
    name: "".concat(e.name),
    id: e.id
  };
  return zt(
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
const Rd = {
  type: "attachments",
  renderElem: Ld
};
class Pd {
  constructor() {
    p(this, "title", "本地文件");
    p(this, "tag", "button");
    p(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">\n    <title>附件</title>\n    <g id="附件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="icon">\n            <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>\n            <g id="编组-28" transform="translate(2.997929, 8.001508)">\n                <path d="M13.9611058,12.6330155 C13.9611058,14.5460163 12.4108408,16.0968098 10.498492,16.0968098 C8.58614322,16.0968098 7.03587822,14.5460163 7.03590808,12.6393438 L7.03590808,12.6393438 L6.98338468,7.07669061 C6.97992133,6.70644889 7.27712693,6.40347538 7.64724246,6.39998034 C8.017358,6.39648531 8.32022824,6.69379224 8.32372209,7.06403396 L8.32372209,7.06403396 L8.37624485,12.6330155 C8.37624485,13.8054998 9.32640727,14.7559862 10.498492,14.7559862 C11.6705768,14.7559862 12.6207392,13.8054998 12.6207392,12.6330155 L12.6207392,12.6330155 L12.6207392,6.46506253 C12.6207392,4.69957562 11.0562006,3.24725012 9.10227678,3.24725012 C7.148353,3.24725012 5.58381437,4.69957562 5.58381437,6.46506253 L5.58381437,6.46506253 L5.58381437,12.8655397 C5.58381437,15.5621365 7.78332719,17.7497339 10.498492,17.7497339 C13.2136568,17.7497339 15.4131697,15.5621365 15.4131697,12.8655397 L15.4131697,12.8655397 L15.4131697,7.10001026 C15.4131697,6.72975204 15.713221,6.42959845 16.083353,6.42959845 C16.453485,6.42959845 16.7535363,6.72975204 16.7535363,7.10001026 L16.7535363,7.10001026 L16.7535363,12.8655397 C16.7535363,16.3043913 13.9521943,19.0905575 10.498492,19.0905575 C7.04478976,19.0905575 4.24344774,16.3043913 4.24344774,12.8655397 L4.24344774,12.8655397 L4.24344774,6.46506253 C4.24344774,3.93573556 6.42955024,1.90642651 9.10227678,1.90642651 C11.7750033,1.90642651 13.9611058,3.93573556 13.9611058,6.46506253 L13.9611058,6.46506253 Z" id="形状结合" fill="#DDDDDD" transform="translate(10.498492, 10.498492) rotate(-315.000000) translate(-10.498492, -10.498492) "/>\n                <path d="M21.6662931,9.87797441 L24.6096402,9.87797441 C24.9410111,9.87797441 25.2096402,10.1466036 25.2096402,10.4779744 C25.2096402,10.8093453 24.9410111,11.0779744 24.6096402,11.0779744 L21.6662931,11.0779744 C21.3349223,11.0779744 21.0662931,10.8093453 21.0662931,10.4779744 C21.0662931,10.1466036 21.3349223,9.87797441 21.6662931,9.87797441 Z" id="矩形备份-74" fill="#73D897"/>\n                <path d="M21.6662931,4.29120933 L27.4020707,4.29120933 C27.7334415,4.29120933 28.0020707,4.55983848 28.0020707,4.89120933 C28.0020707,5.22258018 27.7334415,5.49120933 27.4020707,5.49120933 L21.6662931,5.49120933 C21.3349223,5.49120933 21.0662931,5.22258018 21.0662931,4.89120933 C21.0662931,4.55983848 21.3349223,4.29120933 21.6662931,4.29120933 Z" id="矩形备份-75" fill="#6698FF"/>\n                <path d="M21.6662931,15.4647395 L27.4020707,15.4647395 C27.7334415,15.4647395 28.0020707,15.7333686 28.0020707,16.0647395 C28.0020707,16.3961103 27.7334415,16.6647395 27.4020707,16.6647395 L21.6662931,16.6647395 C21.3349223,16.6647395 21.0662931,16.3961103 21.0662931,16.0647395 C21.0662931,15.7333686 21.3349223,15.4647395 21.6662931,15.4647395 Z" id="矩形备份-77" fill="#FF7575"/>\n            </g>\n        </g>\n    </g>\n</svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    throw new ot("暂未支持上传本地文件！");
  }
}
const Nd = {
  key: "attachments",
  factory() {
    return new Pd();
  }
}, Ud = {
  renderElems: [Rd],
  elemsToHtml: [Id],
  parseElemsHtml: [Od],
  menus: [Nd]
};
class Fd {
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
    p(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof AttachmentsController
     */
    p(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof AttachmentsController
     */
    p(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof AttachmentsController
     */
    p(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof AttachmentsController
     */
    p(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof AttachmentsController
     */
    p(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof AttachmentsController
     */
    p(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.attachmentsIsRegiter || (he.registerModule(Ud), window.attachmentsIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof AttachmentsController
   */
  async init(e, t) {
    this.model = t.model, this.context = t.context, this.params = t.params, this.evt = t.evt, this.data = t.data, this.editor = e, this.editorParams = this.model.editorParams;
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
  insertNode(e) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof AttachmentsController
   */
  parseNode(e) {
    return e;
  }
}
function $d(n) {
  const { script: e = "", data: t = {} } = n, s = me.execScriptFn({ data: t }, e, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const Hd = {
  type: "codesnippet",
  elemToHtml: $d
};
function jd(n) {
  const e = decodeURIComponent(n.getAttribute("data-value") || ""), t = JSON.parse(e);
  return {
    type: "codesnippet",
    script: t.script,
    data: t,
    children: [{ text: "" }]
  };
}
const Bd = {
  selector: 'span[data-w-e-type="codesnippet"]',
  parseElemHtml: jd
};
function zd(n) {
  const { data: e = {} } = n, t = {
    name: "".concat(e.name),
    id: e.id
  };
  return zt(
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
const Vd = {
  type: "CodeSnippet",
  renderElem: zd
};
class qd {
  constructor() {
    p(this, "title", "代码段");
    p(this, "tag", "button");
    p(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">\n  <title>代码段</title>\n  <g id="代码段" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="icon备份">\n          <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>\n          <path d="M24.6642225,18.8794824 L27.6075695,18.8794824 C27.9389404,18.8794824 28.2075695,19.1481115 28.2075695,19.4794824 C28.2075695,19.8108532 27.9389404,20.0794824 27.6075695,20.0794824 L24.6642225,20.0794824 C24.3328516,20.0794824 24.0642225,19.8108532 24.0642225,19.4794824 C24.0642225,19.1481115 24.3328516,18.8794824 24.6642225,18.8794824 Z" id="矩形备份-74" fill="#73D897"/>\n          <path d="M24.6642225,13.2927173 L30.4,13.2927173 C30.7313708,13.2927173 31,13.5613465 31,13.8927173 C31,14.2240882 30.7313708,14.4927173 30.4,14.4927173 L24.6642225,14.4927173 C24.3328516,14.4927173 24.0642225,14.2240882 24.0642225,13.8927173 C24.0642225,13.5613465 24.3328516,13.2927173 24.6642225,13.2927173 Z" id="矩形备份-75" fill="#6698FF"/>\n          <path d="M24.6642225,24.4662475 L30.4,24.4662475 C30.7313708,24.4662475 31,24.7348766 31,25.0662475 C31,25.3976183 30.7313708,25.6662475 30.4,25.6662475 L24.6642225,25.6662475 C24.3328516,25.6662475 24.0642225,25.3976183 24.0642225,25.0662475 C24.0642225,24.7348766 24.3328516,24.4662475 24.6642225,24.4662475 Z" id="矩形备份-77" fill="#FF7575"/>\n          <g id="1.Base基础/1.icon图标/11.editor/header-1" transform="translate(5.000000, 11.000000)" fill="#DDDDDD">\n              <path d="M4.68266589,2.39258039 L1.51032474,7.44797324 L5.01586095,12.7216272 L4.05994646,13.3212428 L0.126424153,7.40475416 L3.68603474,1.72997946 L4.68266589,2.39258039 Z M11.3173341,12.6697762 L14.4896753,7.61438339 L10.984139,2.34072939 L11.9400535,1.7411138 L15.8735758,7.65760247 L12.3139653,13.3323772 L11.3173341,12.6697762 Z M8.86596086,1.31248434 L10.0376294,1.55020137 L7.19605832,13.6243456 L6.0243898,13.3866286 L8.86596086,1.31248434 Z" id="形状结合"/>\n          </g>\n      </g>\n  </g>\n</svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    throw new ot("暂未支持上传代码段！");
  }
}
const Jd = {
  key: "codesnippet",
  factory() {
    return new qd();
  }
}, Yd = {
  renderElems: [Vd],
  elemsToHtml: [Hd],
  parseElemsHtml: [Bd],
  menus: [Jd]
};
class Kd {
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
    p(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    p(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof CodeSnippetController
     */
    p(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof CodeSnippetController
     */
    p(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof CodeSnippetController
     */
    p(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof CodeSnippetController
     */
    p(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof CodeSnippetController
     */
    p(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.codesnippetIsRegiter || (he.registerModule(Yd), window.codesnippetIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof CodeSnippetController
   */
  async init(e, t) {
    this.model = t.model, this.context = t.context, this.params = t.params, this.evt = t.evt, this.data = t.data, this.editor = e, this.editorParams = this.model.editorParams;
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
  insertNode(e) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof CodeSnippetController
   */
  parseNode(e) {
    return e;
  }
}
function Wd(n) {
  const { script: e = "", data: t = {} } = n, s = me.execScriptFn({ data: t }, e, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const Gd = {
  type: "marker",
  elemToHtml: Wd
};
function Zd(n) {
  const e = decodeURIComponent(n.getAttribute("data-value") || ""), t = JSON.parse(e);
  return {
    type: "marker",
    script: t.script,
    data: t,
    children: [{ text: "" }]
  };
}
const Xd = {
  selector: 'span[data-w-e-type="marker"]',
  parseElemHtml: Zd
};
function Qd(n) {
  const { data: e = {} } = n;
  return zt(
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
const ef = {
  type: "marker",
  renderElem: Qd
};
let tf = class {
  constructor() {
    p(this, "title", "提及工作项");
    p(this, "tag", "button");
    p(this, "iconSvg", '<svg t="1706259772097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6854" width="200" height="200"><path d="M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z" fill="#979797" p-id="6855"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    e.insertText("#");
  }
};
const nf = {
  key: "marker",
  factory() {
    return new tf();
  }
}, sf = {
  renderElems: [ef],
  elemsToHtml: [Gd],
  parseElemsHtml: [Xd],
  menus: [nf]
};
const rf = /* @__PURE__ */ Ne({
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
  setup(n) {
    const e = Ue("mention"), t = n.controller, s = _(!1), r = _([]);
    let i = Ee;
    const o = _({}), l = _(0), a = _([]), h = (E) => {
      const {
        eventArg: D
      } = E;
      if (D) {
        !D.includes("@") && t.overlay && t.execting && t.overlay.dismiss();
        const M = D.match(new RegExp("(?<=\\@)([^\\@&^{]*?)(?=\\<)", "g")) || [];
        t.execting && (M.length === 0 && t.overlay.dismiss(), t.query = M.pop() || "", t.query && /\s$/.test(t.query) ? t.overlay.dismiss() : t.query && g({
          isInitialLoad: !0
        }));
      } else
        t.overlay && t.execting && t.overlay.dismiss();
    }, u = () => {
      t.evt && t.evt.on("onChange", h);
    }, c = (E = {}) => {
      s.value = !0, t.getUsers(E).then((D) => {
        (D.status !== 200 || !D.data) && (s.value = !1), D.headers["x-total"] && (l.value = Number(D.headers["x-total"])), E.isLoadMore === !0 ? r.value.push(...t.toUIData(D.data)) : (r.value = t.toUIData(D.data), r.value.length > 0 && (o.value = r.value[0])), s.value = !1;
      }).catch(() => {
        s.value = !1;
      });
    }, d = () => {
      c({
        isLoadMore: !0
      });
    }, f = Tt(() => r.value.length >= l.value || s.value || l.value <= t.size), g = Fi(c, 300, {
      leading: !0
    });
    u(), c({
      isInitialLoad: !0
    });
    const v = (E) => {
      let D = r.value.findIndex((M) => M.id === o.value.id);
      switch (E) {
        case "up":
          D--, (D === -1 || D === -2) && (D = r.value.length - 1), o.value = r.value[D];
          break;
        case "down":
          D++, D === r.value.length && (D = 0), o.value = r.value[D];
          break;
        case "enter":
          w(o.value);
          break;
      }
    }, w = (E) => {
      var D;
      if (n.modal) {
        const M = {
          ok: !0,
          data: [E]
        };
        (D = n.modal) == null || D.dismiss(M);
      }
    }, b = (E) => {
      if (!E)
        return null;
      const D = JSON.parse(E);
      if (D.length === 0)
        return null;
      const {
        downloadUrl: M
      } = ibiz.util.file.calcFileUpDownUrl(t.context, t.params, t.editorParams);
      return M.replace("%fileId%", D[0].id);
    }, S = (E) => {
      a.value.push(E);
    }, k = (E) => {
      const D = E.name, M = Ft.stringToHexColor(D), J = Ft.avatarName(D);
      let W = "";
      if (t.operatorMap.has(E.id)) {
        const _e = t.operatorMap.get(E.id);
        _e.data.iconurl && (W = b(_e.data.iconurl) || "");
      }
      return C("div", {
        class: [e.e("item"), e.is("active", E.id === o.value.id)],
        onClick: () => w(E)
      }, [C("div", {
        class: e.e("avatar"),
        style: "background: ".concat(M, ";")
      }, [W && !a.value.includes(W) ? C("img", {
        src: W,
        onError: () => S(W)
      }, null) : J]), C("div", {
        class: e.e("name"),
        title: D
      }, [D])]);
    };
    return wn(() => {
      i = vn(window, "keyup", (E) => {
        E.keyCode === 40 ? v("down") : E.keyCode === 38 ? v("up") : E.keyCode === 13 && v("enter");
      });
    }), cs(() => {
      i !== Ee && i(), t.evt.off("onChange", h);
    }), {
      ns: e,
      items: r,
      loading: s,
      isLodeMoreDisabled: f,
      renderItem: k,
      loadMore: d
    };
  },
  render() {
    return hr(C("div", {
      "infinite-scroll-distance": 10,
      "infinite-scroll-disabled": this.isLodeMoreDisabled,
      "infinite-scroll-immediate": !1,
      class: this.ns.b()
    }, [this.items.map((n) => this.renderItem(n)), this.items.length === 0 && C(ue("iBizNoData"), {
      text: "暂无用户数据"
    }, null)]), [[sn("infinite-scroll"), () => this.loadMore()], [sn("loading"), this.loading]]);
  }
});
const of = /* @__PURE__ */ Ne({
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
  setup(n) {
    const e = Ue("marker"), t = n.controller, s = _(!1), r = _([]);
    let i = Ee;
    const o = _({}), l = _(0), a = (S) => {
      const {
        eventArg: k
      } = S;
      if (k) {
        !k.includes("#") && t.overlay && t.execting && t.overlay.dismiss();
        const E = /<svg((.|[\t\r\f\n\s])+?)<\/svg>/g, M = k.replace(E, "").match(new RegExp("(?<=\\#)([^\\#&^{]*?)(?=\\<)", "g")) || [];
        t.execting && (M.length === 0 && t.overlay.dismiss(), t.query = M.pop() || "", t.query && /\s$/.test(t.query) ? t.overlay.dismiss() : t.query && f({
          isInitialLoad: !0
        }));
      } else
        t.overlay && t.execting && t.overlay.dismiss();
    }, h = () => {
      t.evt && t.evt.on("onChange", a);
    }, u = (S = {}) => {
      s.value = !0, t.load(S).then((k) => {
        (k.status !== 200 || !k.data) && (s.value = !1), k.headers["x-total"] && (l.value = Number(k.headers["x-total"])), S.isLoadMore === !0 ? r.value.push(...t.toUIData(k.data)) : (r.value = t.toUIData(k.data), r.value.length > 0 && (o.value = r.value[0])), s.value = !1;
      }).catch(() => {
        s.value = !1;
      });
    }, c = () => {
      u({
        isLoadMore: !0
      });
    }, d = Tt(() => r.value.length >= l.value || s.value || l.value <= t.size), f = Fi(u, 300, {
      leading: !0
    });
    h(), u({
      isInitialLoad: !0
    });
    const g = (S) => {
      let k = r.value.findIndex((E) => E.id === o.value.id);
      switch (S) {
        case "up":
          k--, (k === -1 || k === -2) && (k = r.value.length - 1), o.value = r.value[k];
          break;
        case "down":
          k++, k === r.value.length && (k = 0), o.value = r.value[k];
          break;
        case "enter":
          v(o.value);
          break;
      }
    }, v = (S) => {
      var k;
      if (n.modal) {
        const E = {
          ok: !0,
          data: [S]
        };
        (k = n.modal) == null || k.dismiss(E);
      }
    }, w = (S, k) => {
      if (t.quoteCodelistMap.has(S)) {
        const E = t.quoteCodelistMap.get(S);
        return C(ue("iBizCodeList"), {
          codeListItems: E.codeListItems,
          codeList: E.codeList,
          value: k
        }, null);
      }
      return k;
    }, b = (S) => C("div", {
      class: [e.e("item"), e.is("active", S.id === o.value.id)],
      onClick: () => v(S)
    }, [C("div", {
      class: e.e("type")
    }, [w("type", S.type)]), C("div", {
      class: e.e("identifier")
    }, [w("identifier", S.identifier)]), C("div", {
      class: e.e("name"),
      title: S.name
    }, [w("name", S.name)])]);
    return wn(() => {
      i = vn(window, "keyup", (S) => {
        S.keyCode === 40 ? g("down") : S.keyCode === 38 ? g("up") : S.keyCode === 13 && g("enter");
      });
    }), cs(() => {
      i !== Ee && i(), t.evt.off("onChange", a);
    }), {
      ns: e,
      items: r,
      loading: s,
      isLodeMoreDisabled: d,
      renderItem: b,
      loadMore: c
    };
  },
  render() {
    return hr(C("div", {
      "infinite-scroll-distance": 10,
      "infinite-scroll-disabled": this.isLodeMoreDisabled,
      "infinite-scroll-immediate": !1,
      class: this.ns.b()
    }, [this.items.map((n) => this.renderItem(n)), this.items.length === 0 && C(ue("iBizNoData"), {
      text: "暂无用户数据"
    }, null)]), [[sn("infinite-scroll"), () => this.loadMore()], [sn("loading"), this.loading]]);
  }
});
const lf = /* @__PURE__ */ Ne({
  name: "IBizHtmlEmoji",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(n) {
    return {
      ns: Ue("html-emoji"),
      onSelect: (s) => {
        const r = {
          ok: !0,
          data: [{
            emoji: $l(s.data)
          }]
        };
        n.modal.dismiss(r);
      }
    };
  },
  render() {
    return C("div", {
      class: this.ns.b()
    }, [C(ue("iBizEmojiSelect"), {
      dark: !0,
      continuousList: !0,
      onSelect: this.onSelect
    }, null)]);
  }
});
class af {
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
    p(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof MarkerController
     */
    p(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MarkerController
     */
    p(this, "editor");
    /**
     * 引用请求url
     *
     * @type {string}
     * @memberof MarkerController
     */
    p(this, "quoteUrl", "");
    /**
     * 人员UI转化
     */
    p(this, "quoteFieldMap", {
      id: "id",
      name: "name"
    });
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    p(this, "quoteCodelistMap", /* @__PURE__ */ new Map());
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MarkerController
     */
    p(this, "quoteMethod", "post");
    /**
     * 请求参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    p(this, "quoteParams", {});
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "quoteScript", "`#{id=${data.id},name=${data.name},identifier=${data.identifier},icon=${data.icon}}`");
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "quoteInScript", "value.replaceAll(/#{id=(.+?),name=(.+?),identifier=(.+?),icon=((.|[\\t\\r\\f\\n\\s])+?)}/g,(x, id, name, identifier, icon) => {return controller.getNodeInfo({ id, name, identifier, icon })})");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    p(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MarkerController
     */
    p(this, "items", []);
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MarkerController
     */
    p(this, "overlay", null);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MarkerController
     */
    p(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MarkerController
     */
    p(this, "execting", !1);
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MarkerController
     */
    p(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MarkerController
     */
    p(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MarkerController
     */
    p(this, "size", 20);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    p(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    p(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MarkerController
     */
    p(this, "cleanup", Ee);
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
  markerPlugin(e) {
    const { insertText: t, isInline: s, isVoid: r } = e;
    return e.insertText = (i) => {
      if (!this.editor) {
        t(i);
        return;
      }
      if (!this.editor.isFocused()) {
        t(i);
        return;
      }
      if (Le.getSelectedElems(e).some((a) => e.isVoid(a))) {
        t(i);
        return;
      }
      i === "#" && !this.execting && (this.query = "", this.showModal()), t(i);
    }, e.isInline = (i) => Le.getNodeType(i) === "marker" ? !0 : s(i), e.isVoid = (i) => Le.getNodeType(i) === "marker" ? !0 : r(i), e;
  }
  registerNode() {
    window.markerIsRegiter || (he.registerModule(sf), window.markerIsRegiter = !0), he.registerPlugin(this.markerPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
   */
  async init(e, t) {
    if (this.model = t.model, this.context = t.context, this.params = t.params, this.evt = t.evt, this.data = t.data, this.editor = e, this.editorParams = this.model.editorParams, this.editorParams) {
      const {
        QUOTEURL: r,
        QUOTEFIELDMAP: i,
        QUOTEMETHOD: o,
        QUOTESCRIPT: l,
        QUOTEINSCRIPT: a,
        QUOTEPARAMS: h,
        QUOTECODELISTMAP: u
      } = this.editorParams;
      if (r && (this.quoteUrl = r), i && (this.quoteFieldMap = JSON.parse(i)), o && (this.quoteMethod = o.toLowerCase()), h && (this.quoteParams = JSON.parse(h)), l && (this.quoteScript = l), a && (this.quoteInScript = a), u) {
        const c = JSON.parse(u);
        this.setCodeListMap(c);
      }
    }
    const s = this.editor.getEditableContainer();
    s && (this.cleanup = vn(s, "keydown", (r) => {
      var i;
      this.execting && this.presetPreventEvents.includes(r.keyCode) && r.preventDefault(), this.execting && this.presetPreventPropEvents.includes(r.keyCode) && (r.stopPropagation(), (i = this.overlay) == null || i.dismiss());
    }));
  }
  onDestroyed() {
    this.cleanup !== Ee && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
  // 设置代码表map
  async setCodeListMap(e) {
    for (const t in e) {
      const s = await this.loadCodeList(e[t]);
      s && this.quoteCodelistMap.set(t, s);
    }
  }
  // 显示弹框
  showModal() {
    if (!this.quoteUrl)
      throw new ot("未配置提及工作项QUOTEURL编辑器参数！");
    const e = document.getSelection();
    if (!e)
      return;
    const { focusNode: t } = e;
    t && this.openPopover(t.parentNode).then(
      (s) => {
        s.length > 0 && this.insertNode(s[0]);
      }
    );
  }
  findCodeListItem(e, t) {
    if (e) {
      const s = e.find((r) => r.value == t);
      if (s)
        return s;
      for (let r = 0; r < e.length; r++) {
        const i = this.findCodeListItem(
          e[r].children,
          t
        );
        if (i)
          return i;
      }
    }
  }
  /**
   * 插入@
   *
   * @param {IDomEditor} editor
   * @memberof MarkerController
   */
  insertNode(e) {
    if (this.quoteCodelistMap.has("type") && e.type) {
      const s = this.quoteCodelistMap.get("type"), r = this.findCodeListItem(s.codeListItems, e.type);
      r && r.sysImage && Object.assign(e, {
        icon: r.sysImage.rawContent
      });
    }
    const t = {
      type: "marker",
      script: this.quoteScript,
      data: e,
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.deleteBackward("character");
    for (let s = 0; s < this.query.length; s++)
      this.editor.deleteBackward("character");
    this.editor.insertNode(t), this.editor.move(1);
  }
  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  getNodeInfo(e) {
    return Object.assign(e, { script: this.quoteScript }), '<span data-w-e-type="marker" data-w-e-is-void data-w-e-is-inline data-value="'.concat(encodeURIComponent(
      JSON.stringify(e)
    ), '"></span>');
  }
  /**
   * 解析marker节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MarkerController
   */
  parseNode(e) {
    return me.execScriptFn(
      { value: e, controller: this },
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
  handlePublicParams(e, t, s) {
    const { navigateContexts: r, navigateParams: i } = this.model;
    let o = {};
    r && e && (o = Xn(r, e, s, t));
    const l = Object.assign(t.clone(), o);
    let a = {};
    return i && e && (a = Xn(i, e, s, t)), { context: l, params: a };
  }
  /**
   * 获取工作项信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MarkerController
   */
  load(e = {}) {
    const { context: t, params: s } = this.handlePublicParams(
      this.data,
      this.context,
      this.params
    ), r = e.isInitialLoad === !0, i = e.isLoadMore === !0;
    r ? this.curPage = 0 : i && (this.curPage += 1);
    const o = me.execScriptFn(
      { data: this.data, context: t, params: s },
      this.quoteUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), l = {
      ...s,
      query: this.query,
      size: this.size,
      page: this.curPage,
      ...this.quoteParams
    };
    return ibiz.net[this.quoteMethod](o, l);
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MarkerController
   */
  toUIData(e) {
    return e.map((t) => {
      const s = {};
      return Object.keys(this.quoteFieldMap).forEach((r) => {
        s[r] = t[this.quoteFieldMap[r]];
      }), s;
    });
  }
  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MarkerController
   */
  async openPopover(e) {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      void 0,
      {
        placement: "bottom-start",
        autoClose: !0,
        width: "300px",
        noArrow: !0
      }
    ), await this.overlay.present(e), this.execting = !0;
    const t = await this.overlay.onWillDismiss();
    return this.execting = !1, t.data || [];
  }
  createOverlayView() {
    return (e) => dr(of, {
      controller: this,
      modal: e
    });
  }
  /**
   * 加载代码表
   *
   * @param {string} appCodeListId
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof MarkerController
   */
  async loadCodeList(e) {
    const t = ibiz.hub.getApp(this.context.srfappid), s = t.codeList.getCodeList(e), r = await t.codeList.get(
      e,
      this.context,
      this.params
    );
    return { codeList: s, codeListItems: r };
  }
}
function cf(n) {
  const { script: e = "", data: t = {} } = n, s = me.execScriptFn({ data: t }, e, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const uf = {
  type: "mention",
  elemToHtml: cf
};
function hf(n) {
  const e = decodeURIComponent(n.getAttribute("data-value") || ""), t = JSON.parse(e);
  return {
    type: "mention",
    script: t.script,
    data: t,
    children: [{ text: "" }]
  };
}
const df = {
  selector: 'span[data-w-e-type="mention"]',
  parseElemHtml: hf
};
function ff(n) {
  const { data: e = {} } = n, t = {
    name: "@".concat(e.name),
    id: e.id
  };
  return zt(
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
const gf = {
  type: "mention",
  renderElem: ff
};
class pf {
  constructor() {
    p(this, "title", "提及成员");
    p(this, "tag", "button");
    p(this, "iconSvg", '<svg t="1705979200437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z" fill="#333333" p-id="4219"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    e.insertText("@");
  }
}
const mf = {
  key: "mention",
  factory() {
    return new pf();
  }
}, wf = {
  renderElems: [gf],
  elemsToHtml: [uf],
  parseElemsHtml: [df],
  menus: [mf]
};
class yf {
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
    p(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    p(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof MenTionController
     */
    p(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MenTionController
     */
    p(this, "editor");
    /**
     * 用户请求url
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "userUrl", "");
    /**
     * 人员UI转化
     */
    p(this, "userFieldMap", {
      id: "id",
      name: "name"
    });
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MenTionController
     */
    p(this, "userMethod", "post");
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "userScript", "`@{userid=${data.id},name=${data.name}}`");
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "userInScript", "value.replaceAll(/@{userid=(.+?),name=(.+?)}/g,(x, id, name) => {return controller.getNodeInfo({ id, name })})");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    p(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MenTionController
     */
    p(this, "items", []);
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MenTionController
     */
    p(this, "overlay", null);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MenTionController
     */
    p(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MenTionController
     */
    p(this, "execting", !1);
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MenTionController
     */
    p(this, "query", "");
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MenTionController
     */
    p(this, "curPage", 0);
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MenTionController
     */
    p(this, "size", 20);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    p(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    p(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MenTionController
     */
    p(this, "cleanup", Ee);
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
  mentionPlugin(e) {
    const { insertText: t, isInline: s, isVoid: r } = e;
    return e.insertText = (i) => {
      if (!this.editor) {
        t(i);
        return;
      }
      if (!this.editor.isFocused()) {
        t(i);
        return;
      }
      if (Le.getSelectedElems(e).some((a) => e.isVoid(a))) {
        t(i);
        return;
      }
      i === "@" && !this.execting && (this.query = "", this.showModal()), t(i);
    }, e.isInline = (i) => Le.getNodeType(i) === "mention" ? !0 : s(i), e.isVoid = (i) => Le.getNodeType(i) === "mention" ? !0 : r(i), e;
  }
  registerNode() {
    window.mentionIsRegiter || (he.registerModule(wf), window.mentionIsRegiter = !0), he.registerPlugin(this.mentionPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof MenTionController
   */
  async init(e, t) {
    if (this.model = t.model, this.context = t.context, this.params = t.params, this.evt = t.evt, this.data = t.data, this.editor = e, this.editorParams = this.model.editorParams, this.editorParams) {
      const { USERURL: r, USERFIELDMAP: i, USERMETHOD: o, USERSCRIPT: l, USERINSCRIPT: a } = this.editorParams;
      r && (this.userUrl = r), i && (this.userFieldMap = JSON.parse(i)), o && (this.userMethod = o.toLowerCase()), l && (this.userScript = l), a && (this.userInScript = a);
    }
    const s = this.editor.getEditableContainer();
    s && (this.cleanup = vn(s, "keydown", (r) => {
      var i;
      this.execting && this.presetPreventEvents.includes(r.keyCode) && r.preventDefault(), this.execting && this.presetPreventPropEvents.includes(r.keyCode) && (r.stopPropagation(), (i = this.overlay) == null || i.dismiss());
    })), await this.getOperatorUserList();
  }
  /**
   * 获取云系统操作者
   *
   * @memberof MenTionController
   */
  async getOperatorUserList() {
    const e = await ibiz.hub.getApp(this.context.srfappid);
    let t = [];
    t = await e.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      t.map((s) => [s.value, s])
    );
  }
  onDestroyed() {
    this.cleanup !== Ee && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
  // 显示弹框
  showModal() {
    if (!this.userUrl)
      throw new ot("未配置提及用户USERURL编辑器参数！");
    const e = document.getSelection();
    if (!e)
      return;
    const { focusNode: t } = e;
    t && this.openUserPopover(t.parentNode).then(
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
  insertNode(e) {
    const t = {
      type: "mention",
      script: this.userScript,
      data: e,
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.deleteBackward("character");
    for (let s = 0; s < this.query.length; s++)
      this.editor.deleteBackward("character");
    this.editor.insertNode(t), this.editor.move(1);
  }
  /**
   * 获取节点信息
   *
   * @param {IData} data
   * @memberof MenTionController
   */
  getNodeInfo(e) {
    return Object.assign(e, { script: this.userScript }), '<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="'.concat(encodeURIComponent(
      JSON.stringify(e)
    ), '"></span>');
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof MenTionController
   */
  parseNode(e) {
    return me.execScriptFn(
      { value: e, controller: this },
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
  handlePublicParams(e, t, s) {
    const { navigateContexts: r, navigateParams: i } = this.model;
    let o = {};
    r && e && (o = Xn(r, e, s, t));
    const l = Object.assign(t.clone(), o);
    let a = {};
    return i && e && (a = Xn(i, e, s, t)), { context: l, params: a };
  }
  /**
   * 获取用户信息
   *
   * @param {IData} data
   * @return {*}  {Promise<IData[]>}
   * @memberof MenTionController
   */
  getUsers(e = {}) {
    const { context: t, params: s } = this.handlePublicParams(
      this.data,
      this.context,
      this.params
    ), r = e.isInitialLoad === !0, i = e.isLoadMore === !0;
    r ? this.curPage = 0 : i && (this.curPage += 1);
    const o = me.execScriptFn(
      { data: this.data, context: t, params: s },
      this.userUrl,
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    ), l = {
      ...s,
      query: this.query,
      size: this.size,
      page: this.curPage
    };
    return ibiz.net[this.userMethod](o, l);
  }
  /**
   * 转换ui数据
   *
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof MenTionController
   */
  toUIData(e) {
    return e.map((t) => {
      const s = {};
      return Object.keys(this.userFieldMap).forEach((r) => {
        s[r] = t[this.userFieldMap[r]];
      }), s;
    });
  }
  /**
   * 打开用户列表气泡框
   *
   * @param {HTMLElement} event
   * @memberof MenTionController
   */
  async openUserPopover(e) {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      void 0,
      {
        placement: "bottom-start",
        autoClose: !0,
        width: "300px",
        noArrow: !0
      }
    ), await this.overlay.present(e), this.execting = !0;
    const t = await this.overlay.onWillDismiss();
    return this.execting = !1, t.data || [];
  }
  createOverlayView() {
    return (e) => dr(rf, {
      controller: this,
      modal: e
    });
  }
}
function vf(n) {
  const { script: e = "", data: t = {} } = n, s = me.execScriptFn({ data: t }, e, {
    singleRowReturn: !0,
    isAsync: !1
  });
  return "".concat(s);
}
const bf = {
  type: "page",
  elemToHtml: vf
};
function Sf(n) {
  const e = decodeURIComponent(n.getAttribute("data-value") || ""), t = JSON.parse(e);
  return {
    type: "page",
    script: t.script,
    data: t,
    children: [{ text: "" }]
  };
}
const Cf = {
  selector: 'span[data-w-e-type="page"]',
  parseElemHtml: Sf
};
function kf(n) {
  const { data: e = {} } = n, t = {
    name: "".concat(e.name),
    id: e.id
  };
  return zt(
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
const Ef = {
  type: "Page",
  renderElem: kf
};
class xf {
  constructor() {
    p(this, "title", "页面");
    p(this, "tag", "button");
    p(this, "iconSvg", '<svg t="1707293566679" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6103" width="200" height="200"><path d="M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z" p-id="6104"></path></svg>');
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    throw new ot("暂未支持上传页面！");
  }
}
const Df = {
  key: "page",
  factory() {
    return new xf();
  }
}, Af = {
  renderElems: [Ef],
  elemsToHtml: [bf],
  parseElemsHtml: [Cf],
  menus: [Df]
};
class _f {
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
    p(this, "model");
    /**
     * 上下文
     *
     * @type {IContext}
     */
    p(this, "context");
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    p(this, "params");
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof PageController
     */
    p(this, "data", {});
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof PageController
     */
    p(this, "editor");
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof PageController
     */
    p(this, "editorParams");
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof PageController
     */
    p(this, "items", []);
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof PageController
     */
    p(this, "evt");
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof PageController
     */
    p(this, "execting", !1);
    this.registerNode();
  }
  registerNode() {
    window.pageIsRegiter || (he.registerModule(Af), window.pageIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof PageController
   */
  async init(e, t) {
    this.model = t.model, this.context = t.context, this.params = t.params, this.evt = t.evt, this.data = t.data, this.editor = e, this.editorParams = this.model.editorParams;
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
  insertNode(e) {
  }
  /**
   * 解析mention节点
   *
   * @param {string} value
   * @return {*}
   * @memberof PageController
   */
  parseNode(e) {
    return e;
  }
}
const Tf = {
  type: "emoji",
  renderElem: (n) => {
    const { data: e = {} } = n;
    return zt(
      "emoji-elem",
      {
        dataset: { value: e.emoji ? Hl(e.emoji) : "" },
        props: {
          contentEditable: !1
          // 不可编辑
        }
      },
      []
    );
  }
}, If = {
  type: "emoji",
  elemToHtml: (n) => {
    const { data: e } = n;
    return "<span data-w-e-type=\"emoji\" class='emoji'>".concat(e.emoji, "</span>");
  }
}, Mf = {
  selector: 'span[data-w-e-type="emoji"]',
  parseElemHtml: (n) => ({
    data: {
      emoji: n.innerHTML
    },
    type: "emoji",
    children: [{ text: "" }]
  })
};
class Of {
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
    p(this, "title", "表情");
    /**
     * 菜单类型
     *
     * @memberof EmojiButtonMenu
     */
    p(this, "tag", "button");
    /**
     * 菜单图标
     *
     * @memberof EmojiButtonMenu
     */
    p(this, "iconSvg", "<svg viewBox='0 0 1040 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1490' width='1em' height='1em' stroke='var(--w-e-toolbar-color)' > <path stroke-width='38' d='M512.075261 1024A511.774217 511.774217 0 1 1 730.482434 48.769072a37.630457 37.630457 0 1 1-32.061149 68.035867 436.513303 436.513303 0 1 0 250.468323 395.270322 37.630457 37.630457 0 0 1 75.260914 0 512.526826 512.526826 0 0 1-512.075261 511.924739z' p-id='1491' ></path> <path stroke-width='38' d='M333.857416 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.499339 57.499339 0 0 0-57.348817-57.348817zM686.53006 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.348817 57.348817 0 0 0-57.348817-57.348817zM515.236219 783.165074c-162.864619 0-262.359547-141.942084-262.359547-219.159782a30.104366 30.104366 0 0 1 60.208731 0c0 48.618551 76.314567 158.951051 202.150816 158.951051s193.571072-134.114949 193.571072-158.951051a30.104366 30.104366 0 0 1 60.208731 0c0 54.488902-90.012054 219.159782-253.779803 219.159782zM1009.549904 207.720123h-67.132735V139.985301a30.104366 30.104366 0 1 0-60.208732 0v67.734822h-67.734822a30.104366 30.104366 0 0 0-30.104366 30.104366 30.104366 30.104366 0 0 0 30.104366 30.104366h67.734822v67.734823a30.104366 30.104366 0 0 0 60.208732 0v-67.734823h67.734823a30.104366 30.104366 0 0 0 30.104365-30.104366 30.104366 30.104366 0 0 0-30.706453-30.104366z' p-id='1492' ></path> </svg>");
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
  exec(e) {
    e.emit("openEmojiSelect");
  }
}
const Lf = {
  key: "emoji",
  factory() {
    return new Of();
  }
}, Rf = {
  renderElems: [Tf],
  elemsToHtml: [If],
  parseElemsHtml: [Mf],
  menus: [Lf]
};
class Pf {
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
    p(this, "editor");
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof EmojiController
     */
    p(this, "overlay", null);
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    p(this, "presetPreventEvents", [13, 38, 40]);
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    p(this, "presetPreventPropEvents", [27]);
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof EmojiController
     */
    p(this, "cleanup", Ee);
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
  emojiPlugin(e) {
    const { isInline: t, isVoid: s } = e;
    return e.isInline = (r) => Le.getNodeType(r) === "emoji" ? !0 : t(r), e.isVoid = (r) => Le.getNodeType(r) === "emoji" ? !0 : s(r), e;
  }
  registerNode() {
    window.emojiIsRegiter || (he.registerModule(Rf), window.emojiIsRegiter = !0), he.registerPlugin(this.emojiPlugin.bind(this));
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof EmojiController
   */
  async init(e) {
    this.editor = e, this.listenEvent();
  }
  /**
   * 监听事件
   *
   * @private
   * @memberof EmojiController
   */
  listenEvent() {
    const e = this.editor.getEditableContainer();
    this.editor.on("openEmojiSelect", () => this.openEmojiSelect()), this.cleanup = vn(e, "keydown", (t) => {
      var s;
      this.overlay && this.presetPreventEvents.includes(t.keyCode) && t.preventDefault(), this.overlay && this.presetPreventPropEvents.includes(t.keyCode) && (t.stopPropagation(), (s = this.overlay) == null || s.dismiss());
    });
  }
  /**
   * 打开表情选择
   *
   * @memberof EmojiController
   */
  async openEmojiSelect() {
    const e = document.getSelection(), { focusNode: t } = e;
    t && (this.overlay = ibiz.overlay.createPopover(
      (s) => dr(lf, {
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
    ), await this.overlay.present(t.parentNode), this.overlay.onWillDismiss().then((s) => {
      var o;
      const r = s, i = (o = r.data) == null ? void 0 : o[0];
      r.ok && i && this.addEmojiNode(i), this.overlay = null;
    }));
  }
  /**
   * 添加表情
   *
   * @param {string} data
   * @memberof EmojiController
   */
  addEmojiNode(e) {
    const t = {
      data: e,
      type: "emoji",
      children: [{ text: "" }]
    };
    this.editor.restoreSelection(), this.editor.insertNode(t), this.editor.move(1);
  }
  /**
   * 解析emoji节点
   *
   * @param {string} value
   * @return {*}
   * @memberof EmojiController
   */
  parseNode(e) {
    return me.execScriptFn(
      { value: e, controller: this },
      'value.replaceAll(/\\{\\"\\emoji\\":\\"(.+?)\\"\\}/g,(x, emoji) => {return \'<span data-w-e-type="emoji" class="emoji">\'+emoji+\'</span>\'})',
      {
        singleRowReturn: !0,
        isAsync: !1
      }
    );
  }
  onDestroyed() {
    this.cleanup !== Ee && this.cleanup(), this.overlay && this.overlay.dismiss();
  }
}
class je {
  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  static init(e) {
    this.registerMap.set("mention", yf), this.registerMap.set("marker", af), this.registerMap.set("attachments", Fd), this.registerMap.set("codesnippet", Kd), this.registerMap.set("page", _f), this.registerMap.set("emoji", Pf), this.presetNodes.forEach((t) => {
      this.registerPlugin({
        type: t,
        id: "".concat(t).concat(e)
      });
    });
  }
  /**
   * 注册节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  static registerPlugin(e) {
    const { type: t, id: s } = e;
    if (this.customNodeMap.has(s))
      return this.customNodeMap.get(s);
    const r = this.registerMap.get(t);
    if (r) {
      const i = new r();
      return this.customNodeMap.set(s, i), i;
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
  static getPluginsById(e) {
    const t = [];
    return this.presetNodes.forEach((s) => {
      this.customNodeMap.has("".concat(s).concat(e)) && t.push(this.customNodeMap.get("".concat(s).concat(e)));
    }), t;
  }
  /**
   * 卸载节点适配器
   *
   * @public
   * @memberof CustomNodeFactory
   */
  static unregisterPlugin(e) {
    const { id: t } = e;
    this.customNodeMap.has(t) && this.customNodeMap.delete(t);
  }
  /**
   * 初始化
   *
   * @static
   * @memberof CustomNodeFactory
   */
  static destroy(e) {
    this.presetNodes.forEach((t) => {
      this.unregisterPlugin({
        id: "".concat(t).concat(e)
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
p(je, "customNodeMap", /* @__PURE__ */ new Map()), /**
 * 预置注册表
 *
 * @type {Map<string, any>}
 * @memberof CustomNodeFactory
 */
p(je, "registerMap", /* @__PURE__ */ new Map()), /**
 * 预置注册节点
 *
 * @static
 * @memberof CustomNodeFactory
 */
p(je, "presetNodes", [
  "mention",
  "marker",
  "attachments",
  "codesnippet",
  "page",
  "emoji"
]);
class Nf extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ["data-value"];
  }
  attributeChangedCallback(e, t, s) {
    if (e === "data-value") {
      if (s && t === s)
        return;
      const r = JSON.parse(s), i = this.attachShadow({ mode: "open" }), o = i.ownerDocument;
      if (r.icon) {
        const a = o.createElement("span");
        a.part.add("svg"), a.innerHTML = r.icon, i.appendChild(a);
      }
      if (r.identifier) {
        const a = o.createElement("span");
        a.part.add("identifier"), a.innerHTML = r.identifier, i.appendChild(a);
      }
      if (r.name) {
        const a = o.createElement("span");
        a.part.add("name"), a.innerHTML = r.name, i.appendChild(a);
      }
      const l = o.createElement("style");
      l.innerHTML = "\n      svg {\n        height: 1em;\n        width: 1em;\n      }\n    ", i.appendChild(l);
    }
  }
}
class Uf extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ["data-value"];
  }
  attributeChangedCallback(e, t, s) {
    if (e === "data-value") {
      if (s && t === s)
        return;
      const r = this.attachShadow({ mode: "open" }), o = r.ownerDocument.createElement("span");
      o.innerHTML = s, o.part.add("box"), o.classList.add("emoji-elem_box"), r.appendChild(o);
    }
  }
}
class Ff {
  constructor() {
    p(this, "title", "格式刷");
    p(this, "tag", "button");
    p(this, "fragment", []);
    p(this, "format", {});
    p(this, "editor", null);
    p(this, "excting", !1);
    p(this, "iconSvg", '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="aqseditor/paintformat" stroke-width="1" fill-rule="evenodd"><path d="M3 5.24h10V2H3v3.24zM13.299 1H2.701A.701.701 0 0 0 2 1.701v3.838c0 .387.314.701.701.701h6.236L7.621 7.438h-.002v2.233h-.768v5.184L9.404 13.1V9.671h-.585V7.97l1.9-1.73h2.58A.701.701 0 0 0 14 5.539V1.701A.701.701 0 0 0 13.299 1z" id="aqsFill-1"></path></g></svg>');
    p(this, "setPaintFormat", () => {
      if (!this.editor)
        return;
      const e = this.editor.getSelectionText();
      if (e && Object.keys(this.format).length > 0) {
        const t = { ...this.format, text: e };
        this.editor.insertNode(t), this.excting || this.clearFormat();
      }
    });
    p(this, "onPaintFormat", gr(this.setPaintFormat, 500, !1));
    p(this, "throttleHandle", this.throttle(this.handle, 300));
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return Object.keys(this.format).length > 0;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  calcFormat(e) {
    if (e.length > 0) {
      const { children: t } = e[0];
      t.forEach((s) => {
        Object.assign(this.format, s);
      });
    }
  }
  clearFormat() {
    this.format = {};
    const e = this.editor.getEditableContainer();
    e && e.classList.remove("is-paint-format");
    const t = document.querySelector(
      "button[data-menu-key='paintformat']"
    );
    t && t.classList.remove("active");
  }
  throttle(e, t) {
    let s = null;
    return function(...r) {
      s || (s = setTimeout(() => {
        e.apply(this, r), s = null, this.excting = !0;
      }, t));
    };
  }
  handle(e) {
    if (this.excting) {
      this.clearFormat(), this.excting = !1;
      return;
    }
    const t = e.getFragment();
    this.calcFormat(t), this.editor = e;
    const s = this.editor.getEditableContainer();
    s && s.classList.add("is-paint-format"), e.deselect(), e.on("change", this.onPaintFormat), e.on("clickOutside", () => {
      this.clearFormat(), this.excting = !1;
    });
  }
  // 点击菜单时触发的函数
  exec(e) {
    this.throttleHandle(e);
  }
}
const $f = {
  key: "paintformat",
  factory() {
    return new Ff();
  }
};
class Hf {
  constructor() {
    // TS 语法
    p(this, "title", "AI询问");
    p(this, "iconSvg", '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <text x="0" y="13" font-size="16" fill="black">AI</text></svg>');
    p(this, "tag", "button");
  }
  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(e) {
    return !1;
  }
  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(e) {
    return "aichart";
  }
  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(e) {
    return !1;
  }
  // 点击菜单时触发的函数
  exec(e, t) {
    e.emit("aiClick");
  }
}
function jf(n) {
  const { url: e, children: t } = n;
  let s = "_blank";
  return e.startsWith("./#/") && (s = "_self"), '<a href="'.concat(e, '" target="').concat(s, '">').concat(t[0].text, "</a>");
}
const Bf = {
  type: "link",
  elemToHtml: jf
};
class zf {
  constructor() {
    p(this, "title", "查看连接");
    p(this, "iconSvg", '<svg viewBox="0 0 1024 1024"><path d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z" p-id="10909"></path><path d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z" p-id="10910"></path><path d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z"></path></svg>');
    p(this, "tag", "button");
  }
  getSelectedLinkElem(e) {
    const t = Le.getSelectedNodeByType(e, "link");
    return t == null ? null : t;
  }
  getValue(e) {
    const t = this.getSelectedLinkElem(e);
    return t && t.url || "";
  }
  isActive() {
    return !1;
  }
  isDisabled(e) {
    return e.selection == null || this.getSelectedLinkElem(e) == null;
  }
  exec(e, t) {
    if (!this.isDisabled(e)) {
      if (!t || typeof t != "string")
        throw new Error("打开链接失败, 路径为 '".concat(t, "'"));
      t.toString().startsWith("./#/") ? window.open("".concat(window.location.pathname).concat(t.slice(1)), "_self") : window.open(t, "_blank");
    }
  }
}
const Vf = {
  key: "customViewLink",
  factory() {
    return new zf();
  }
}, qf = {
  menus: [Vf],
  elemsToHtml: [Bf]
};
class Jf extends Tl {
  constructor() {
    super(...arguments);
    /**
     * 用户头像数据
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    p(this, "userAvatar", "");
    /**
     * 上传参数
     */
    p(this, "uploadParams");
    /**
     * 下载参数
     */
    p(this, "exportParams");
    /**
     * 最小高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    p(this, "minHeight", 48);
    /**
     * 最大高度
     *
     * @type {number}
     * @memberof HtmlCommentController
     */
    p(this, "maxHeight", 315);
    /**
     * 是否折叠
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    p(this, "collapsed", _(!0));
    /**
     * 是否隐藏
     *
     * @type {Ref<boolean>}
     * @memberof HtmlCommentController
     */
    p(this, "hidden", _(!1));
    /**
     * 回复
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    p(this, "reply", _(""));
    /**
     * 回复脚本
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    p(this, "replyScript", "");
    /**
     * 编辑器模式
     *
     * @type {('comment' | 'default')}
     * @memberof HtmlCommentController
     */
    p(this, "mode", "comment");
    /**
     * 插入工具栏项
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    p(this, "insertKeys", []);
    /**
     * 绘制模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    p(this, "renderMode", "HTML");
    /**
     * 保存间隔
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    p(this, "saveInterval", 3e3);
    /**
     * 抛值模式
     *
     * @type {IData[]}
     * @memberof HtmlCommentController
     */
    p(this, "emitMode", "BUTTON");
    /**
     * 唯一标识
     *
     * @type {string}
     * @memberof HtmlCommentController
     */
    p(this, "uuid", It());
    /**
     * 实时编辑（协同编辑）
     */
    p(this, "enableRealtime", !1);
    /**
     * 编辑器实例
     */
    p(this, "editor");
    /**
     * 自动保存间隔
     * - 默认30秒
     * @private
     * @type {number}
     * @memberof HtmlCommentController
     */
    p(this, "autoSaveInterval", 3e4);
    /**
     * 定时器
     *
     * @private
     * @type {(NodeJS.Timeout | null)}
     * @memberof HtmlCommentController
     */
    p(this, "timer", null);
    /**
     * 应用实体服务
     *
     * @type {IAppDEService}
     * @memberof HtmlCommentController
     */
    p(this, "deService");
    /**
     * 自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:52
     * @type {IAppDEACMode}
     */
    p(this, "deACMode");
    /**
     * AI 聊天自填模式
     *
     * @author chitanda
     * @date 2023-10-12 10:10:37
     * @type {boolean}
     */
    p(this, "chatCompletion", !1);
    p(this, "evt", new Il(
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
    const { model: t } = this;
    if (t.appDEACModeId && (this.deACMode = await Ml(
      t.appDEACModeId,
      t.appDataEntityId,
      this.context.srfappid
    ), this.deACMode && this.deACMode.actype === "CHATCOMPLETION" && (this.deService = await ibiz.hub.getApp(t.appId).deService.getService(this.context, t.appDataEntityId), this.chatCompletion = !0)), this.registerCustomElem(), this.editorParams) {
      const {
        uploadParams: s,
        exportParams: r,
        MINHEIGHT: i,
        MAXHEIGHT: o,
        REPLYSCRIPT: l,
        MODE: a,
        INSERTKEYS: h,
        RENDERMODE: u,
        SAVEINTERVAL: c,
        EMITMODE: d,
        DEFAULTCOLLAPSE: f,
        ENABLEREALTIME: g
      } = this.editorParams;
      if (s)
        try {
          this.uploadParams = JSON.parse(s);
        } catch (v) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              v
            ), "]编辑器参数 uploadParams 非 json 格式")
          );
        }
      if (r)
        try {
          this.exportParams = JSON.parse(r);
        } catch (v) {
          ibiz.log.error(
            "编辑器[".concat(ibiz.log.error(
              v
            ), "]编辑器参数 exportParams 非 json 格式")
          );
        }
      i && (this.minHeight = Number(i)), o && (this.maxHeight = Number(o)), l && (this.replyScript = l), a && (this.mode = a.toLowerCase()), h && (this.insertKeys = JSON.parse(h)), u && (this.renderMode = u), c && (this.saveInterval = Bl(c)), d && (this.emitMode = d), f && (this.collapsed.value = !Object.is(f, "TRUE") && !Object.is(f, "true")), g && (this.enableRealtime = Object.is(g, "TRUE") || Object.is(g, "true"));
    }
    je.init(this.uuid), this.evt.on("onChange", () => {
      if (this.parent.form)
        return;
      const s = ibiz.uiDomainManager.get(this.context.srfsessionid);
      s && s.dataChange();
    }), this.listenViewDestroyed();
  }
  /**
   * 注册自定义元素
   *
   * @private
   * @memberof HtmlCommentController
   */
  registerCustomElem() {
    window.customElements.get("mention-elem") || window.customElements.define("mention-elem", Nf), window.customElements.get("emoji-elem") || window.customElements.define("emoji-elem", Uf), window.paintFormatIsRegiter || (he.registerMenu($f), window.paintFormatIsRegiter = !0), window.aichartRegister || (he.registerMenu({
      key: "aichart",
      factory() {
        return new Hf();
      }
    }), window.aichartRegister = !0), window.customLinkIsRegiter || (he.registerModule(qf), window.customLinkIsRegiter = !0);
  }
  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof HtmlCommentController
   */
  onCreated(t, s, r) {
    je.getPluginsById(this.uuid).forEach((o) => {
      o.init(t, {
        model: this.model,
        data: s,
        toolbarConfig: r,
        context: this.context,
        params: this.params,
        evt: this.evt
      });
    });
  }
  /**
   * 组件销毁
   *
   * @memberof HtmlCollapseController
   */
  onDestroyed() {
    je.getPluginsById(this.uuid).forEach((s) => {
      s.onDestroyed();
    }), je.destroy(this.uuid);
  }
  /**
   * 处理视图销毁
   *
   * @memberof HtmlCommentController
   */
  listenViewDestroyed() {
    const t = this.getView();
    t && t.evt.on("onDestroyed", () => {
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
  parseNode(t) {
    let s = t;
    return je.getPluginsById(this.uuid).forEach((i) => {
      s = i.parseNode(s);
    }), s;
  }
  /**
   * 设置html
   *
   * @param {string} value
   * @memberof HtmlCommentController
   */
  async setValue(t) {
    this.collapsed.value = !1, this.hidden.value = !0, await le(), this.hidden.value = !1, await le();
    const s = this.parseNode(t);
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
  setReply(t) {
    this.reply.value = Ft.getEmojiCustomHtml(
      "".concat(t.name, ": ").concat(t.content)
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
  fileDownload(t) {
    ibiz.net.request(t.url, {
      method: "get",
      responseType: "blob",
      baseURL: ""
      // 已经有baseURL了，这里无需再写
    }).then((s) => {
      if (s.status !== 200)
        throw new ot("下载文件失败");
      if (s.data) {
        const r = t.name;
        jl(s.data, r);
      } else
        throw new ot("文件流数据不存在");
    });
  }
  /**
   * 切换折叠
   *
   * @memberof HtmlCommentController
   */
  toggleCollapse(t) {
    this.collapsed.value = !t && !this.collapsed.value;
  }
  /**
   * 绘制模式为json时，需要将返回数据的json内容转html
   *
   * @author ljx
   * @date 2024-03-09 15:11:09
   * @param {string} url
   * @param {IData} file
   */
  jsonToHtml(t) {
    let s = "";
    try {
      const r = JSON.parse(t);
      s = Nl({
        content: r
      }).getHtml();
    } catch (r) {
      s = t, ibiz.log.error("JSON字符串转换错误", r);
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
  toJson(t = []) {
    let s = "";
    try {
      s = JSON.stringify(t);
    } catch (r) {
      ibiz.log.error("JSON字符串转换错误");
    }
    return s;
  }
  /**
   * 获取当前用户头像
   *
   * @memberof HtmlCommentController
   */
  async getCurrentUserAvatar() {
    var r, i;
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let s = [];
    if (s = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.context.srfuserid) {
      const o = s.filter((l) => l.value === this.context.srfuserid);
      o && o.length > 0 && (this.userAvatar = ((i = (r = o[0]) == null ? void 0 : r.data) == null ? void 0 : i.iconurl) || "");
    }
  }
  /**
   * 获取当前视图
   *
   * @return {*}
   * @memberof HtmlCommentController
   */
  getView() {
    const t = this.parent.form || this.parent.grid || this.parent.panel;
    if (t)
      return t.view;
  }
}
class Yf {
  constructor() {
    p(this, "formEditor", "HtmlComment");
    p(this, "gridEditor", "HtmlComment");
  }
  async createController(e, t) {
    const s = new Jf(e, t);
    return await s.init(), s;
  }
}
const Kf = Pl(Vs, function(n) {
  n.component(ur.name, ur), n.component(es.name, es), n.component(Vs.name, Vs), Ol(
    "EDITOR_CUSTOMSTYLE_COMMENT",
    () => new Yf()
  );
}), ug = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(n) {
    n.use(Kf), n.component(
      "IBizHtmlContent",
      Al(() => Promise.resolve().then(() => zl))
    );
  }
};
export {
  Kf as IBizHtmlComment,
  ug as default
};
