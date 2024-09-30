import './style.css';
var Pn = Object.defineProperty;
var Xn = (e, A, t) => A in e ? Pn(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var vA = (e, A, t) => (Xn(e, typeof A != "symbol" ? A + "" : A, t), t);
import { PluginStaticResource as _n, EditorController as Jn, registerEditorProvider as kn } from "@ibiz-template/runtime";
import { ref as G, watch as Be, computed as Yn, defineComponent as Wn, createVNode as y, resolveComponent as ZA, mergeProps as Ht, createTextVNode as NA, nextTick as vt } from "vue";
import { getUploadProps as Zn, getEditorEmits as zn, useNamespace as qn } from "@ibiz-template/vue3-util";
import { CoreConst as jn, HttpError as $n, RuntimeModelError as It } from "@ibiz-template/core";
import { getCookie as As } from "qx-util";
const es = new _n(import.meta.url);
function rs(e, A, t) {
  const r = G([]), B = G({
    Authorization: "Bearer ".concat(As(jn.TOKEN))
  }), n = G(""), s = G(""), a = {
    count: 0,
    cacheFiles: []
    // iview上传过程中不能改default-file-list,所以需要缓存
  };
  Be(
    () => e.value,
    (w) => {
      r.value = w ? JSON.parse(w) : [];
    },
    { immediate: !0 }
  ), Be(
    () => e.data,
    (w) => {
      if (w) {
        const p = ibiz.util.file.calcFileUpDownUrl(
          t.context,
          t.params,
          w,
          t.editorParams
        );
        n.value = p.uploadUrl, s.value = p.downloadUrl;
      }
    },
    { immediate: !0, deep: !0 }
  ), Be(
    r,
    (w) => {
      w != null && w.length && s.value && w.forEach((p) => {
        p.url = p.url || s.value.replace("%fileId%", p.id);
      });
    },
    { immediate: !0 }
  ), Be(
    s,
    (w) => {
      w && r.value.length && r.value.forEach((p) => {
        p.url = s.value.replace("%fileId%", p.id);
      });
    },
    { immediate: !0 }
  );
  const i = () => {
    const w = [...r.value, ...a.cacheFiles], p = w.length > 0 ? JSON.stringify(w.map((U) => ({ name: U.name, id: U.id }))) : null;
    a.cacheFiles = [], A(p);
  }, o = () => {
    a.count += 1;
  }, c = (w) => {
    w && (a.cacheFiles.push({
      name: w.filename,
      id: w.fileid
    }), a.count -= 1, a.count === 0 && i());
  }, l = (...w) => {
    const p = w[0];
    throw a.count -= 1, new $n({
      response: { data: JSON.parse(p.message), status: p.status }
    });
  }, Q = (w) => {
    if (e.disabled)
      return;
    const p = r.value.findIndex((U) => U.id === w.id);
    p !== -1 && r.value.splice(p, 1), i();
  }, C = (w) => {
    const p = w.url || s.value.replace("%fileId%", w.id);
    ibiz.util.file.fileDownload(p, w.name);
  }, u = Yn(() => t.multiple ? 9999 : 1);
  return {
    uploadUrl: n,
    downloadUrl: s,
    headers: B,
    files: r,
    limit: u,
    onDownload: C,
    onError: l,
    onRemove: Q,
    onSuccess: c,
    beforeUpload: o
  };
}
const mt = /* @__PURE__ */ Wn({
  name: "AvatarUpload",
  props: Zn(),
  emits: zn(),
  setup(e, {
    emit: A
  }) {
    const t = qn("avatar-upload"), r = e.controller, B = G(!1), n = G(), s = G(), a = G(), i = G(), o = G(), c = G(), l = G(!1), Q = G(), C = G(), u = G(), w = G(0), p = G(0), U = G(), g = G({
      r: r.cutShape === "DEFAULT" ? 100 : 107.14,
      x: 150,
      y: 150,
      oldx: 150,
      oldy: 150
    }), x = G(""), v = G(!1);
    let E = 0;
    const f = G([]), K = G(""), I = G(1), H = es.dir("assets/images/user-avatar.png"), {
      uploadUrl: V,
      downloadUrl: Y,
      headers: AA,
      files: D,
      limit: _,
      onDownload: wA,
      onError: z,
      onRemove: q,
      onSuccess: dA,
      beforeUpload: BA
    } = rs(e, (d) => {
      K.value = d;
    }, r), cA = async () => {
      await vt();
      const {
        width: d,
        height: m
      } = n.value.getBoundingClientRect(), S = (300 - d) / 2, O = (300 - m) / 2;
      n.value ? S > O ? g.value.r = d / 3 : g.value.r = m / 3 : g.value.r = 60, g.value.x = 150, g.value.y = 150, g.value.oldx = 150, g.value.oldy = 150;
    }, uA = () => {
      B.value = !1, f.value.forEach((d) => {
        d.raw && URL.revokeObjectURL(d.raw);
      }), E = 0, I.value = 1, cA();
    }, fA = (d) => {
      if (!d)
        return;
      f.value = [], f.value.push({
        name: d.filename,
        id: d.fileid
      });
      const m = JSON.stringify(f.value.map((S) => ({
        name: S.name,
        id: S.id
      })));
      K.value = m, v.value && (A("change", K.value), v.value = !1, uA());
    }, lA = (d) => {
      B.value = !0, fA(d);
    }, pA = (d) => {
      if (d.status === "ready")
        if (["image/jpeg", "image/png", "image/jpg"].includes(d.raw.type))
          v.value || (B.value = !0), f.value = [d];
        else
          throw new Error("请选择图片类型文件");
    };
    Be(f, (d) => {
      d != null && d.length && Y.value && d.forEach((m) => {
        m.id ? m.url = m.url || Y.value.replace("%fileId%", m.id) : m.raw && (m.url = URL.createObjectURL(m.raw));
      });
    }, {
      immediate: !0
    });
    const nA = (d, m, S = !1) => {
      d.length > 0 && (S && (B.value = !1), m && m.length > 0 && m[0].raw && URL.revokeObjectURL(m[0].raw), o.value.clearFiles(), vt(() => {
        o.value.handleStart(d[0]), S && o.value.submit();
      }));
    }, LA = async (d = !1) => {
      const m = await r.createCropImageUrl(U.value, g.value.x, g.value.y, g.value.r);
      if (m && (x.value = m, d)) {
        const S = r.dataURLtoBlob(m), O = new File([S], "cropimg.png", {
          type: S.type
        });
        nA([O], f.value, d);
      }
    }, VA = async () => {
      v.value = !0, LA(!0);
    }, xn = () => y("div", {
      class: t.em("upload-dialog", "footer")
    }, [y(ZA("el-button"), {
      type: "text",
      class: "cancel",
      onClick: uA
    }, {
      default: () => [NA("取消")]
    }), y(ZA("el-button"), {
      type: "primary",
      class: "comfire",
      onClick: VA,
      loading: v.value
    }, {
      default: () => [NA("确认")]
    })]), pt = (d, m) => {
      if (r.cutShape === "DEFAULT") {
        const {
          width: S,
          height: O
        } = n.value.getBoundingClientRect(), YA = (300 - S) / 2, WA = (300 - O) / 2, CA = m / g.value.r, EA = S * CA, HA = O * CA, oe = -(g.value.x - g.value.r - YA) * CA, Nn = -(g.value.y - g.value.r - WA) * CA;
        d.style.width = "".concat(EA, "px"), d.style.height = "".concat(HA, "px"), d.style.transform = "translate(".concat(oe, "px,").concat(Nn, "px)");
      } else
        d.style.width = "".concat(m * 2, "px"), d.style.height = "".concat(m * 2, "px");
    }, Dn = (d, m) => {
      d.style.transformOrigin = "".concat(m, "px ").concat(m, "px"), d.style.scale = I.value;
    }, xe = (d, m) => {
      if (r.cutShape === "DEFAULT") {
        const {
          width: S,
          height: O
        } = n.value.getBoundingClientRect(), YA = (300 - S / I.value) / 2, WA = (300 - O / I.value) / 2, CA = m / g.value.r, EA = -(g.value.x - g.value.r - YA) * CA, HA = -(g.value.y - g.value.r - WA) * CA;
        Dn(d, m), d.style.transform = "translate(".concat(EA, "px,").concat(HA, "px)");
      } else {
        300 - (g.value.x + g.value.r);
        const S = g.value.x - g.value.r;
        if (m === 60) {
          let O = (43 - S) / 2.5;
          O < -17.14 && (O = -17.14), d.style.transform = "translateX(".concat(O, "px"), d.style.scale = I.value;
        }
        if (m === 18) {
          let O = (43 - S) / 8.3;
          O < -5.16 && (O = -5.16), d.style.transform = "translateX(".concat(O, "px");
        }
        d.style.scale = I.value;
      }
    }, bn = async () => {
      if (I.value = 1, E = 0, await cA(), r.cutShape === "DEFAULT") {
        const d = "circle(".concat(g.value.r, "px at ").concat(g.value.x, "px ").concat(g.value.y, "px)");
        U.value.style.clipPath = d;
      } else {
        const d = "inset(0  ".concat(300 - (g.value.x + g.value.r), "px 0 ").concat(g.value.x - g.value.r, "px)");
        U.value.style.clipPath = d;
      }
      pt(a.value, 60), pt(i.value, 18);
    }, Sn = () => {
      l.value = !1;
    }, Et = () => {
      const {
        width: d,
        height: m
      } = n.value.getBoundingClientRect(), S = (300 - d) / 2, O = (300 - m) / 2;
      g.value.x < S + g.value.r ? g.value.x = S + g.value.r : g.value.x > 300 - g.value.r - S && (g.value.x = d - g.value.r + S), g.value.y < O + g.value.r ? g.value.y = O + g.value.r : g.value.y > 300 - g.value.r - O && (g.value.y = m + O - g.value.r);
    }, Tn = (d) => {
      if (l.value && I.value === 1 && d && d.target && Q.value) {
        const {
          width: m,
          height: S
        } = n.value.getBoundingClientRect(), {
          pageX: O,
          pageY: YA
        } = d, WA = (300 - m) / 2, CA = (300 - S) / 2, EA = w.value - O, HA = p.value - YA;
        if (g.value.x - EA >= WA + g.value.r && g.value.x - EA >= g.value.r && g.value.x - EA <= 300 - g.value.r - WA && g.value.x - EA <= 300 - g.value.r && (g.value.oldx = g.value.x, g.value.x -= EA), g.value.y - HA >= CA + g.value.r && g.value.y - HA >= g.value.r && g.value.y - HA <= 300 - g.value.r - CA && g.value.y - HA <= 300 - g.value.r && (g.value.oldy = g.value.y, g.value.y -= HA), Et(), r.cutShape === "DEFAULT") {
          const oe = "circle(".concat(g.value.r, "px at ").concat(g.value.x, "px ").concat(g.value.y, "px)");
          U.value.style.clipPath = oe;
        } else {
          const oe = "inset(0  ".concat(300 - (g.value.x + g.value.r), "px 0 ").concat(g.value.x - g.value.r, "px)");
          U.value.style.clipPath = oe;
        }
        w.value = O, p.value = YA, xe(a.value, 60), xe(i.value, 18);
      }
    }, On = (d) => {
      d.stopPropagation(), d.preventDefault();
      const {
        pageX: m,
        pageY: S
      } = d;
      w.value = m, p.value = S, l.value = !0;
    }, Mn = () => {
      l.value = !1;
    }, Rn = (d) => {
      [n.value, s.value].forEach((m) => {
        const {
          width: S,
          height: O
        } = m.getBoundingClientRect();
        m.style.transformOrigin = "".concat(g.value.x - (300 - S / d) / 2, "px ").concat(g.value.y - (300 - O / d) / 2, "px"), m.style.scale = d;
      }), Et(), xe(a.value, 60), xe(i.value, 18);
    }, Gn = () => {
      Q.value && (E += 1, Q.value.style.transform = "rotate(".concat(E * 90, "deg)"), C.value.style.transform = "rotate(".concat(E * 90, "deg)"), u.value.style.transform = "rotate(".concat(E * 90, "deg)"));
    }, Vn = (d) => {
      d.stopPropagation(), d.preventDefault(), A("change", "");
    };
    return Be(() => I.value, (d) => {
      Rn(d);
    }), {
      ns: t,
      c: r,
      size: I,
      uploadUrl: V,
      headers: AA,
      files: D,
      limit: _,
      dialogVisible: B,
      tempFiles: f,
      uploadTag: v,
      defaultAvatar: H,
      previewImgContainer: Q,
      upload1: o,
      upload2: c,
      topImgRef: n,
      croparea: U,
      bottomImgRef: s,
      cropImgPreviewUrl: x,
      largePreviewImgref: a,
      smallPreviewImgref: i,
      smallPreviewImgContainer: u,
      largePreviewImgContainer: C,
      overturn: Gn,
      onDownload: wA,
      onError: z,
      onRemove: q,
      onSuccess: dA,
      beforeUpload: BA,
      openDialog: lA,
      renderFooter: xn,
      overlimit: nA,
      onTempSuccess: fA,
      mouseMove: Tn,
      mouseUp: Mn,
      mouseDown: On,
      mouseOut: Sn,
      imgload: bn,
      onChange: pA,
      onDelete: Vn
    };
  },
  render() {
    return y("div", {
      class: this.ns.b(),
      title: "仅支持JPEG,JPG,PNG类型文件"
    }, [y("div", {
      class: [this.ns.e("avatar-preview"), this.ns.is("is-rect", this.c.cutShape === "IDRECT")]
    }, [this.files && this.files.length > 0 ? y("img", {
      src: this.files[0].url,
      alt: ""
    }, null) : y("img", {
      src: this.defaultAvatar,
      alt: ""
    }, null), y("div", {
      class: [this.ns.em("avatar-preview", "upicon"), this.ns.is("readonly", this.readonly)]
    }, [y(ZA("el-upload"), Ht({
      ref: "upload1",
      "file-list": this.tempFiles,
      action: this.uploadUrl,
      headers: this.headers,
      multiple: !1,
      "auto-upload": !1,
      limit: 1,
      "show-file-list": !1,
      accept: "images/*",
      "on-change": this.onChange,
      "on-exceed": this.overlimit,
      onSuccess: this.openDialog
    }, this.$attrs), {
      trigger: () => y("div", {
        class: this.ns.em("avatar-preview", "avatar-action")
      }, [y("i", {
        class: "fa fa-camera change-avatar",
        "aria-hidden": "true"
      }, null), this.files && this.files.length > 0 ? y("i", {
        class: "fa fa-trash",
        "aria-hidden": "true",
        onClick: this.onDelete
      }, null) : null])
    })])]), y(ZA("el-dialog"), {
      modelValue: this.dialogVisible,
      "onUpdate:modelValue": (e) => this.dialogVisible = e,
      title: "上传头像",
      class: this.ns.e("upload-dialog"),
      width: 660
    }, {
      default: () => y("div", {
        class: this.ns.em("upload-dialog", "content")
      }, [y("div", {
        class: this.ns.em("upload-dialog", "content-left")
      }, [y("div", {
        class: this.ns.em("upload-dialog", "content-left-img")
      }, [this.tempFiles && this.tempFiles.length > 0 ? y("div", {
        class: "img-container",
        ref: "previewImgContainer"
      }, [y("div", {
        class: "img-bottom-container"
      }, [y("img", {
        ref: "bottomImgRef",
        class: "img-bottom",
        src: this.tempFiles[0].url,
        alt: ""
      }, null)]), y("div", {
        class: "img-modal"
      }, null), y("div", {
        class: "img-croparea",
        ref: "croparea",
        onMousemove: this.mouseMove,
        onMousedown: this.mouseDown,
        onMouseup: this.mouseUp,
        onMouseout: this.mouseOut
      }, [y("img", {
        ref: "topImgRef",
        class: "img-top",
        src: this.tempFiles[0].url,
        onLoad: this.imgload
      }, null)])]) : null]), y("div", {
        class: this.ns.em("upload-dialog", "content-left-slider")
      }, [y(ZA("el-slider"), {
        modelValue: this.size,
        "onUpdate:modelValue": (e) => this.size = e,
        max: 2,
        min: 1,
        step: 0.1
      }, null), y("div", {
        class: this.ns.em("upload-dialog", "overturn"),
        onClick: this.overturn
      }, [y("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false",
        fill: "currentColor"
      }, [y("g", {
        id: "atsnormal/rotate-right",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [y("g", {
        id: "ats编组",
        transform: "translate(.954 .346)",
        "fill-rule": "nonzero"
      }, [y("path", {
        d: "M12.5 5.761a1.7 1.7 0 0 1 1.694 1.553l.006.147v6.093a1.7 1.7 0 0 1-1.553 1.694l-.147.006H5.164a1.7 1.7 0 0 1-1.694-1.553l-.006-.147V7.461a1.7 1.7 0 0 1 1.553-1.694l.147-.006H12.5zm0 1.2H5.164a.5.5 0 0 0-.492.41l-.008.09v6.093a.5.5 0 0 0 .41.492l.09.008H12.5a.5.5 0 0 0 .492-.41l.008-.09V7.461a.5.5 0 0 0-.5-.5zM7.288 0a.33.33 0 0 1 .202.07l2.05 1.598a.33.33 0 0 1-.003.523l-2.05 1.55a.33.33 0 0 1-.53-.263v-.951l-2.175-.006C2.518 2.507 1.37 3.725 1.2 6.399A.6.6 0 1 1 0 6.323c.21-3.277 1.852-5.02 4.788-5.002l2.168.009v-1a.33.33 0 0 1 .33-.33z",
        id: "ats形状结合"
      }, null)])])])])]), y("div", {
        class: this.ns.em("upload-dialog", "content-left-action")
      }, [y(ZA("el-upload"), Ht({
        ref: "upload2",
        "file-list": this.files,
        action: this.uploadUrl,
        headers: this.headers,
        multiple: !1,
        limit: 1,
        "on-exceed": this.overlimit,
        "on-change": this.onChange,
        "show-file-list": !1,
        accept: "images/*",
        "auto-upload": !1,
        onSuccess: this.onTempSuccess,
        onError: this.onError
      }, this.$attrs), {
        trigger: () => y("span", {
          class: "upload-action"
        }, [y("i", {
          class: "fa fa-upload",
          "aria-hidden": "true"
        }, null), y("span", {
          class: "upload-avatar"
        }, [NA("上传头像")])])
      }), y("span", {
        class: "img-tip"
      }, [NA("最佳尺寸 120 x 120 像素")])])]), y("div", {
        class: this.ns.em("upload-dialog", "content-right")
      }, [y("div", {
        class: this.ns.em("upload-dialog", "content-right-tip")
      }, [NA("预览")]), y("div", {
        class: this.ns.em("upload-dialog", "content-right-large-preview")
      }, [y("div", {
        class: [this.ns.em("upload-dialog", "preview-container--large"), this.ns.is("is-rect", this.c.cutShape === "IDRECT")],
        ref: "largePreviewImgContainer"
      }, [this.tempFiles && this.tempFiles.length > 0 ? y("img", {
        ref: "largePreviewImgref",
        src: this.tempFiles[0].url,
        alt: ""
      }, null) : null]), y("div", {
        class: "size-tip"
      }, [NA("120 x 120")])]), y("div", {
        class: this.ns.em("upload-dialog", "content-right-small-preview")
      }, [y("div", {
        class: [this.ns.em("upload-dialog", "preview-container--small"), this.ns.is("is-rect", this.c.cutShape === "IDRECT")],
        ref: "smallPreviewImgContainer"
      }, [this.tempFiles && this.tempFiles.length > 0 ? y("img", {
        ref: "smallPreviewImgref",
        src: this.tempFiles[0].url,
        alt: ""
      }, null) : null]), y("div", {
        class: "size-tip"
      }, [NA("36 x 36")])])])]),
      footer: () => this.renderFooter()
    })]);
  }
});
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var kr = function(e, A) {
  return kr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var B in r)
      Object.prototype.hasOwnProperty.call(r, B) && (t[B] = r[B]);
  }, kr(e, A);
};
function gA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  kr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Yr = function() {
  return Yr = Object.assign || function(A) {
    for (var t, r = 1, B = arguments.length; r < B; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n]);
    }
    return A;
  }, Yr.apply(this, arguments);
};
function eA(e, A, t, r) {
  function B(n) {
    return n instanceof t ? n : new t(function(s) {
      s(n);
    });
  }
  return new (t || (t = Promise))(function(n, s) {
    function a(c) {
      try {
        o(r.next(c));
      } catch (l) {
        s(l);
      }
    }
    function i(c) {
      try {
        o(r.throw(c));
      } catch (l) {
        s(l);
      }
    }
    function o(c) {
      c.done ? n(c.value) : B(c.value).then(a, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function j(e, A) {
  var t = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, B, n, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(o) {
    return function(c) {
      return i([o, c]);
    };
  }
  function i(o) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, B && (n = o[0] & 2 ? B.return : o[0] ? B.throw || ((n = B.return) && n.call(B), 0) : B.next) && !(n = n.call(B, o[1])).done)
          return n;
        switch (B = 0, n && (o = [o[0] & 2, n.value]), o[0]) {
          case 0:
          case 1:
            n = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, B = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!n || o[1] > n[0] && o[1] < n[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < n[1]) {
              t.label = n[1], n = o;
              break;
            }
            if (n && t.label < n[2]) {
              t.label = n[2], t.ops.push(o);
              break;
            }
            n[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = A.call(e, t);
      } catch (c) {
        o = [6, c], B = 0;
      } finally {
        r = n = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function De(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, B = A.length, n; r < B; r++)
      (n || !(r in A)) && (n || (n = Array.prototype.slice.call(A, 0, r)), n[r] = A[r]);
  return e.concat(n || A);
}
var KA = (
  /** @class */
  function() {
    function e(A, t, r, B) {
      this.left = A, this.top = t, this.width = r, this.height = B;
    }
    return e.prototype.add = function(A, t, r, B) {
      return new e(this.left + A, this.top + t, this.width + r, this.height + B);
    }, e.fromClientRect = function(A, t) {
      return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
    }, e.fromDOMRectList = function(A, t) {
      var r = Array.from(t).find(function(B) {
        return B.width !== 0;
      });
      return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  }()
), ur = function(e, A) {
  return KA.fromClientRect(e, A.getBoundingClientRect());
}, ts = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), B = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new KA(0, 0, r, B);
}, fr = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var B = e.charCodeAt(t++);
    if (B >= 55296 && B <= 56319 && t < r) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((B & 1023) << 10) + (n & 1023) + 65536) : (A.push(B), t--);
    } else
      A.push(B);
  }
  return A;
}, P = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], B = -1, n = ""; ++B < t; ) {
    var s = e[B];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (B + 1 === t || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var be = 0; be < yt.length; be++)
  Bs[yt.charCodeAt(be)] = be;
var Kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", we = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Se = 0; Se < Kt.length; Se++)
  we[Kt.charCodeAt(Se)] = Se;
var ns = function(e) {
  var A = e.length * 0.75, t = e.length, r, B = 0, n, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    n = we[e.charCodeAt(r)], s = we[e.charCodeAt(r + 1)], a = we[e.charCodeAt(r + 2)], i = we[e.charCodeAt(r + 3)], c[B++] = n << 2 | s >> 4, c[B++] = (s & 15) << 4 | a >> 2, c[B++] = (a & 3) << 6 | i & 63;
  return o;
}, ss = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, as = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, JA = 5, ut = 6 + 5, vr = 2, is = ut - JA, mB = 65536 >> JA, os = 1 << JA, Ir = os - 1, cs = 1024 >> JA, ls = mB + cs, Qs = ls, gs = 32, ws = Qs + gs, us = 65536 >> ut, fs = 1 << is, Cs = fs - 1, Lt = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Us = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Fs = function(e, A) {
  var t = ns(e), r = Array.isArray(t) ? as(t) : new Uint32Array(t), B = Array.isArray(t) ? ss(t) : new Uint16Array(t), n = 24, s = Lt(B, n / 2, r[4] / 2), a = r[5] === 2 ? Lt(B, (n + r[4]) / 2) : Us(r, Math.ceil((n + r[4]) / 4));
  return new hs(r[0], r[1], r[2], r[3], s, a);
}, hs = (
  /** @class */
  function() {
    function e(A, t, r, B, n, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = B, this.index = n, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> JA], t = (t << vr) + (A & Ir), this.data[t];
        if (A <= 65535)
          return t = this.index[mB + (A - 55296 >> JA)], t = (t << vr) + (A & Ir), this.data[t];
        if (A < this.highStart)
          return t = ws - us + (A >> ut), t = this.index[t], t += A >> JA & Cs, t = this.index[t], t = (t << vr) + (A & Ir), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ds = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Te = 0; Te < xt.length; Te++)
  ds[xt.charCodeAt(Te)] = Te;
var ps = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Dt = 50, Es = 1, yB = 2, KB = 3, Hs = 4, vs = 5, bt = 7, LB = 8, St = 9, SA = 10, Wr = 11, Tt = 12, Zr = 13, Is = 14, ue = 15, zr = 16, Oe = 17, ce = 18, ms = 19, Ot = 20, qr = 21, le = 22, mr = 23, zA = 24, tA = 25, fe = 26, Ce = 27, qA = 28, ys = 29, XA = 30, Ks = 31, Me = 32, Re = 33, jr = 34, $r = 35, At = 36, Ie = 37, et = 38, er = 39, rr = 40, yr = 41, xB = 42, Ls = 43, xs = [9001, 65288], DB = "!", L = "×", Ge = "÷", rt = Fs(ps), IA = [XA, At], tt = [Es, yB, KB, vs], bB = [SA, LB], Mt = [Ce, fe], Ds = tt.concat(bB), Rt = [et, er, rr, jr, $r], bs = [ue, Zr], Ss = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], B = [];
  return e.forEach(function(n, s) {
    var a = rt.get(n);
    if (a > Dt ? (B.push(!0), a -= Dt) : B.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(s), t.push(zr);
    if (a === Hs || a === Wr) {
      if (s === 0)
        return r.push(s), t.push(XA);
      var i = t[s - 1];
      return Ds.indexOf(i) === -1 ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(XA));
    }
    if (r.push(s), a === Ks)
      return t.push(A === "strict" ? qr : Ie);
    if (a === xB || a === ys)
      return t.push(XA);
    if (a === Ls)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(Ie) : t.push(XA);
    t.push(a);
  }), [r, t, B];
}, Kr = function(e, A, t, r) {
  var B = r[t];
  if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
    for (var n = t; n <= r.length; ) {
      n++;
      var s = r[n];
      if (s === A)
        return !0;
      if (s !== SA)
        break;
    }
  if (B === SA)
    for (var n = t; n > 0; ) {
      n--;
      var a = r[n];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
        for (var i = t; i <= r.length; ) {
          i++;
          var s = r[i];
          if (s === A)
            return !0;
          if (s !== SA)
            break;
        }
      if (a !== SA)
        break;
    }
  return !1;
}, Gt = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === SA)
      t--;
    else
      return r;
  }
  return 0;
}, Ts = function(e, A, t, r, B) {
  if (t[r] === 0)
    return L;
  var n = r - 1;
  if (Array.isArray(B) && B[n] === !0)
    return L;
  var s = n - 1, a = n + 1, i = A[n], o = s >= 0 ? A[s] : 0, c = A[a];
  if (i === yB && c === KB)
    return L;
  if (tt.indexOf(i) !== -1)
    return DB;
  if (tt.indexOf(c) !== -1 || bB.indexOf(c) !== -1)
    return L;
  if (Gt(n, A) === LB)
    return Ge;
  if (rt.get(e[n]) === Wr || (i === Me || i === Re) && rt.get(e[a]) === Wr || i === bt || c === bt || i === St || [SA, Zr, ue].indexOf(i) === -1 && c === St || [Oe, ce, ms, zA, qA].indexOf(c) !== -1 || Gt(n, A) === le || Kr(mr, le, n, A) || Kr([Oe, ce], qr, n, A) || Kr(Tt, Tt, n, A))
    return L;
  if (i === SA)
    return Ge;
  if (i === mr || c === mr)
    return L;
  if (c === zr || i === zr)
    return Ge;
  if ([Zr, ue, qr].indexOf(c) !== -1 || i === Is || o === At && bs.indexOf(i) !== -1 || i === qA && c === At || c === Ot || IA.indexOf(c) !== -1 && i === tA || IA.indexOf(i) !== -1 && c === tA || i === Ce && [Ie, Me, Re].indexOf(c) !== -1 || [Ie, Me, Re].indexOf(i) !== -1 && c === fe || IA.indexOf(i) !== -1 && Mt.indexOf(c) !== -1 || Mt.indexOf(i) !== -1 && IA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ce, fe].indexOf(i) !== -1 && (c === tA || [le, ue].indexOf(c) !== -1 && A[a + 1] === tA) || // ( OP | HY ) × NU
  [le, ue].indexOf(i) !== -1 && c === tA || // NU ×	(NU | SY | IS)
  i === tA && [tA, qA, zA].indexOf(c) !== -1)
    return L;
  if ([tA, qA, zA, Oe, ce].indexOf(c) !== -1)
    for (var l = n; l >= 0; ) {
      var Q = A[l];
      if (Q === tA)
        return L;
      if ([qA, zA].indexOf(Q) !== -1)
        l--;
      else
        break;
    }
  if ([Ce, fe].indexOf(c) !== -1)
    for (var l = [Oe, ce].indexOf(i) !== -1 ? s : n; l >= 0; ) {
      var Q = A[l];
      if (Q === tA)
        return L;
      if ([qA, zA].indexOf(Q) !== -1)
        l--;
      else
        break;
    }
  if (et === i && [et, er, jr, $r].indexOf(c) !== -1 || [er, jr].indexOf(i) !== -1 && [er, rr].indexOf(c) !== -1 || [rr, $r].indexOf(i) !== -1 && c === rr || Rt.indexOf(i) !== -1 && [Ot, fe].indexOf(c) !== -1 || Rt.indexOf(c) !== -1 && i === Ce || IA.indexOf(i) !== -1 && IA.indexOf(c) !== -1 || i === zA && IA.indexOf(c) !== -1 || IA.concat(tA).indexOf(i) !== -1 && c === le && xs.indexOf(e[a]) === -1 || IA.concat(tA).indexOf(c) !== -1 && i === ce)
    return L;
  if (i === yr && c === yr) {
    for (var C = t[n], u = 1; C > 0 && (C--, A[C] === yr); )
      u++;
    if (u % 2 !== 0)
      return L;
  }
  return i === Me && c === Re ? L : Ge;
}, Os = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = Ss(e, A.lineBreak), r = t[0], B = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (B = B.map(function(a) {
    return [tA, XA, xB].indexOf(a) !== -1 ? Ie : a;
  }));
  var s = A.wordBreak === "keep-all" ? n.map(function(a, i) {
    return a && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, B, s];
}, Ms = (
  /** @class */
  function() {
    function e(A, t, r, B) {
      this.codePoints = A, this.required = t === DB, this.start = r, this.end = B;
    }
    return e.prototype.slice = function() {
      return P.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), Rs = function(e, A) {
  var t = fr(e), r = Os(t, A), B = r[0], n = r[1], s = r[2], a = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= a)
        return { done: !0, value: null };
      for (var c = L; o < a && (c = Ts(t, n, B, ++o, s)) === L; )
        ;
      if (c !== L || o === a) {
        var l = new Ms(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Gs = 1, Vs = 2, Ke = 4, Vt = 8, nr = 10, Nt = 47, de = 92, Ns = 9, Ps = 32, Ve = 34, Qe = 61, Xs = 35, _s = 36, Js = 37, Ne = 39, Pe = 40, ge = 41, ks = 95, rA = 45, Ys = 33, Ws = 60, Zs = 62, zs = 64, qs = 91, js = 93, $s = 61, Aa = 123, Xe = 63, ea = 125, Pt = 124, ra = 126, ta = 128, Xt = 65533, Lr = 42, _A = 43, Ba = 44, na = 58, sa = 59, me = 46, aa = 0, ia = 8, oa = 11, ca = 14, la = 31, Qa = 127, UA = -1, SB = 48, TB = 97, OB = 101, ga = 102, wa = 117, ua = 122, MB = 65, RB = 69, GB = 70, fa = 85, Ca = 90, $ = function(e) {
  return e >= SB && e <= 57;
}, Ua = function(e) {
  return e >= 55296 && e <= 57343;
}, jA = function(e) {
  return $(e) || e >= MB && e <= GB || e >= TB && e <= ga;
}, Fa = function(e) {
  return e >= TB && e <= ua;
}, ha = function(e) {
  return e >= MB && e <= Ca;
}, da = function(e) {
  return Fa(e) || ha(e);
}, pa = function(e) {
  return e >= ta;
}, _e = function(e) {
  return e === nr || e === Ns || e === Ps;
}, sr = function(e) {
  return da(e) || pa(e) || e === ks;
}, _t = function(e) {
  return sr(e) || $(e) || e === rA;
}, Ea = function(e) {
  return e >= aa && e <= ia || e === oa || e >= ca && e <= la || e === Qa;
}, bA = function(e, A) {
  return e !== de ? !1 : A !== nr;
}, Je = function(e, A, t) {
  return e === rA ? sr(A) || bA(A, t) : sr(e) ? !0 : !!(e === de && bA(e, A));
}, xr = function(e, A, t) {
  return e === _A || e === rA ? $(A) ? !0 : A === me && $(t) : $(e === me ? A : e);
}, Ha = function(e) {
  var A = 0, t = 1;
  (e[A] === _A || e[A] === rA) && (e[A] === rA && (t = -1), A++);
  for (var r = []; $(e[A]); )
    r.push(e[A++]);
  var B = r.length ? parseInt(P.apply(void 0, r), 10) : 0;
  e[A] === me && A++;
  for (var n = []; $(e[A]); )
    n.push(e[A++]);
  var s = n.length, a = s ? parseInt(P.apply(void 0, n), 10) : 0;
  (e[A] === RB || e[A] === OB) && A++;
  var i = 1;
  (e[A] === _A || e[A] === rA) && (e[A] === rA && (i = -1), A++);
  for (var o = []; $(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(P.apply(void 0, o), 10) : 0;
  return t * (B + a * Math.pow(10, -s)) * Math.pow(10, i * c);
}, va = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Ia = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, ma = {
  type: 4
  /* COMMA_TOKEN */
}, ya = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Ka = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, La = {
  type: 21
  /* COLUMN_TOKEN */
}, xa = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Da = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, ba = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Sa = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Ta = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ke = {
  type: 23
  /* BAD_URL_TOKEN */
}, Oa = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Ma = {
  type: 25
  /* CDO_TOKEN */
}, Ra = {
  type: 24
  /* CDC_TOKEN */
}, Ga = {
  type: 26
  /* COLON_TOKEN */
}, Va = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Na = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Pa = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Xa = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Bt = {
  type: 32
  /* EOF_TOKEN */
}, VB = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(fr(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Bt; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Ve:
          return this.consumeStringToken(Ve);
        case Xs:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), B = this.peekCodePoint(2);
          if (_t(t) || bA(r, B)) {
            var n = Je(t, r, B) ? Vs : Gs, s = this.consumeName();
            return { type: 5, value: s, flags: n };
          }
          break;
        case _s:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), ya;
          break;
        case Ne:
          return this.consumeStringToken(Ne);
        case Pe:
          return va;
        case ge:
          return Ia;
        case Lr:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), Ta;
          break;
        case _A:
          if (xr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Ba:
          return ma;
        case rA:
          var a = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (xr(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Je(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === rA && o === Zs)
            return this.consumeCodePoint(), this.consumeCodePoint(), Ra;
          break;
        case me:
          if (xr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Nt:
          if (this.peekCodePoint(0) === Lr)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Lr && (c = this.consumeCodePoint(), c === Nt))
                return this.consumeToken();
              if (c === UA)
                return this.consumeToken();
            }
          break;
        case na:
          return Ga;
        case sa:
          return Va;
        case Ws:
          if (this.peekCodePoint(0) === Ys && this.peekCodePoint(1) === rA && this.peekCodePoint(2) === rA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Ma;
          break;
        case zs:
          var l = this.peekCodePoint(0), Q = this.peekCodePoint(1), C = this.peekCodePoint(2);
          if (Je(l, Q, C)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case qs:
          return Na;
        case de:
          if (bA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case js:
          return Pa;
        case $s:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), Ka;
          break;
        case Aa:
          return ba;
        case ea:
          return Sa;
        case wa:
        case fa:
          var u = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return u === _A && (jA(w) || w === Xe) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Pt:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), xa;
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), La;
          break;
        case ra:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), Da;
          break;
        case UA:
          return Bt;
      }
      return _e(A) ? (this.consumeWhiteSpace(), Xa) : $(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : sr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: P(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); jA(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Xe && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var B = parseInt(P.apply(void 0, A.map(function(i) {
          return i === Xe ? SB : i;
        })), 16), n = parseInt(P.apply(void 0, A.map(function(i) {
          return i === Xe ? GB : i;
        })), 16);
        return { type: 30, start: B, end: n };
      }
      var s = parseInt(P.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === rA && jA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; jA(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var n = parseInt(P.apply(void 0, a), 16);
        return { type: 30, start: s, end: n };
      } else
        return { type: 30, start: s, end: s };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Pe ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Pe ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === UA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ne || t === Ve) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === UA || this.peekCodePoint(0) === ge) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), ke);
      }
      for (; ; ) {
        var B = this.consumeCodePoint();
        if (B === UA || B === ge)
          return { type: 22, value: P.apply(void 0, A) };
        if (_e(B))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === UA || this.peekCodePoint(0) === ge ? (this.consumeCodePoint(), { type: 22, value: P.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), ke);
        if (B === Ve || B === Ne || B === Pe || Ea(B))
          return this.consumeBadUrlRemnants(), ke;
        if (B === de)
          if (bA(B, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), ke;
        else
          A.push(B);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; _e(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === ge || A === UA)
          return;
        bA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var B = Math.min(t, A);
        r += P.apply(void 0, this._value.splice(0, B)), A -= B;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var B = this._value[r];
        if (B === UA || B === void 0 || B === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (B === nr)
          return this._value.splice(0, r), Oa;
        if (B === de) {
          var n = this._value[r + 1];
          n !== UA && n !== void 0 && (n === nr ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : bA(B, n) && (t += this.consumeStringSlice(r), t += P(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Ke, r = this.peekCodePoint(0);
      for ((r === _A || r === rA) && A.push(this.consumeCodePoint()); $(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var B = this.peekCodePoint(1);
      if (r === me && $(B))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Vt; $(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), B = this.peekCodePoint(1);
      var n = this.peekCodePoint(2);
      if ((r === RB || r === OB) && ((B === _A || B === rA) && $(n) || $(B)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Vt; $(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Ha(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], B = this.peekCodePoint(0), n = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (Je(B, n, s)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return B === Js ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (jA(A)) {
        for (var t = P(A); jA(this.peekCodePoint(0)) && t.length < 6; )
          t += P(this.consumeCodePoint());
        _e(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Ua(r) || r > 1114111 ? Xt : r;
      }
      return A === UA ? Xt : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (_t(t))
          A += P(t);
        else if (bA(t, this.peekCodePoint(0)))
          A += P(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), NB = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new VB();
      return t.write(A), new e(t.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var t = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return A;
        A.push(t), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || Ja(r, A))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var t = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? Bt : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Le = function(e) {
  return e.type === 15;
}, ie = function(e) {
  return e.type === 17;
}, T = function(e) {
  return e.type === 20;
}, _a = function(e) {
  return e.type === 0;
}, nt = function(e, A) {
  return T(e) && e.value === A;
}, PB = function(e) {
  return e.type !== 31;
}, ae = function(e) {
  return e.type !== 31 && e.type !== 4;
}, FA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Ja = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, GA = function(e) {
  return e.type === 17 || e.type === 15;
}, X = function(e) {
  return e.type === 16 || GA(e);
}, XB = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, Z = {
  type: 17,
  number: 0,
  flags: Ke
}, ft = {
  type: 16,
  number: 50,
  flags: Ke
}, TA = {
  type: 16,
  number: 100,
  flags: Ke
}, Ue = function(e, A, t) {
  var r = e[0], B = e[1];
  return [M(r, A), M(typeof B < "u" ? B : r, t)];
}, M = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Le(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, _B = "deg", JB = "grad", kB = "rad", YB = "turn", Cr = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case _B:
          return Math.PI * A.number / 180;
        case JB:
          return Math.PI / 200 * A.number;
        case kB:
          return A.number;
        case YB:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, WB = function(e) {
  return e.type === 15 && (e.unit === _B || e.unit === JB || e.unit === kB || e.unit === YB);
}, ZB = function(e) {
  var A = e.filter(T).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Z, Z];
    case "to top":
    case "bottom":
      return iA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Z, TA];
    case "to right":
    case "left":
      return iA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [TA, TA];
    case "to bottom":
    case "top":
      return iA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [TA, Z];
    case "to left":
    case "right":
      return iA(270);
  }
  return 0;
}, iA = function(e) {
  return Math.PI * e / 180;
}, MA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = ka[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), B = A.value.substring(1, 2), n = A.value.substring(2, 3);
        return OA(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), B = A.value.substring(1, 2), n = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return OA(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), B = A.value.substring(2, 4), n = A.value.substring(4, 6);
        return OA(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), B = A.value.substring(2, 4), n = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return OA(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var a = yA[A.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return yA.TRANSPARENT;
  }
}, RA = function(e) {
  return (255 & e) === 0;
}, k = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, B = 255 & e >> 24;
  return A < 255 ? "rgba(" + B + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + B + "," + r + "," + t + ")";
}, OA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Jt = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, kt = function(e, A) {
  var t = A.filter(ae);
  if (t.length === 3) {
    var r = t.map(Jt), B = r[0], n = r[1], s = r[2];
    return OA(B, n, s, 1);
  }
  if (t.length === 4) {
    var a = t.map(Jt), B = a[0], n = a[1], s = a[2], i = a[3];
    return OA(B, n, s, i);
  }
  return 0;
};
function Dr(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Yt = function(e, A) {
  var t = A.filter(ae), r = t[0], B = t[1], n = t[2], s = t[3], a = (r.type === 17 ? iA(r.number) : Cr.parse(e, r)) / (Math.PI * 2), i = X(B) ? B.number / 100 : 0, o = X(n) ? n.number / 100 : 0, c = typeof s < "u" && X(s) ? M(s, 1) : 1;
  if (i === 0)
    return OA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, Q = o * 2 - l, C = Dr(Q, l, a + 1 / 3), u = Dr(Q, l, a), w = Dr(Q, l, a - 1 / 3);
  return OA(C * 255, u * 255, w * 255, c);
}, ka = {
  hsl: Yt,
  hsla: Yt,
  rgb: kt,
  rgba: kt
}, pe = function(e, A) {
  return MA.parse(e, NB.create(A).parseComponentValue());
}, yA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, Ya = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (T(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Wa = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ur = function(e, A) {
  var t = MA.parse(e, A[0]), r = A[1];
  return r && X(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Wt = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = Z), r.stop === null && (r.stop = TA);
  for (var B = [], n = 0, s = 0; s < e.length; s++) {
    var a = e[s].stop;
    if (a !== null) {
      var i = M(a, A);
      i > n ? B.push(i) : B.push(n), n = i;
    } else
      B.push(null);
  }
  for (var o = null, s = 0; s < B.length; s++) {
    var c = B[s];
    if (c === null)
      o === null && (o = s);
    else if (o !== null) {
      for (var l = s - o, Q = B[o - 1], C = (c - Q) / (l + 1), u = 1; u <= l; u++)
        B[o + u - 1] = C * u;
      o = null;
    }
  }
  return e.map(function(w, p) {
    var U = w.color;
    return { color: U, stop: Math.max(Math.min(1, B[p] / A), 0) };
  });
}, Za = function(e, A, t) {
  var r = A / 2, B = t / 2, n = M(e[0], A) - r, s = B - M(e[1], t);
  return (Math.atan2(s, n) + Math.PI * 2) % (Math.PI * 2);
}, za = function(e, A, t) {
  var r = typeof e == "number" ? e : Za(e, A, t), B = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), n = A / 2, s = t / 2, a = B / 2, i = Math.sin(r - Math.PI / 2) * a, o = Math.cos(r - Math.PI / 2) * a;
  return [B, n - o, n + o, s - i, s + i];
}, QA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Zt = function(e, A, t, r, B) {
  var n = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return n.reduce(function(s, a) {
    var i = a[0], o = a[1], c = QA(t - i, r - o);
    return (B ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: B ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, qa = function(e, A, t, r, B) {
  var n = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - B)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - B)));
      break;
    case 2:
      if (e.shape === 0)
        n = s = Math.min(QA(A, t), QA(A, t - B), QA(A - r, t), QA(A - r, t - B));
      else if (e.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - B)) / Math.min(Math.abs(A), Math.abs(A - r)), i = Zt(r, B, A, t, !0), o = i[0], c = i[1];
        n = QA(o - A, (c - t) / a), s = a * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - B)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - B)));
      break;
    case 3:
      if (e.shape === 0)
        n = s = Math.max(QA(A, t), QA(A, t - B), QA(A - r, t), QA(A - r, t - B));
      else if (e.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - B)) / Math.max(Math.abs(A), Math.abs(A - r)), l = Zt(r, B, A, t, !1), o = l[0], c = l[1];
        n = QA(o - A, (c - t) / a), s = a * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = M(e.size[0], r), s = e.size.length === 2 ? M(e.size[1], B) : n), [n, s];
}, ja = function(e, A) {
  var t = iA(180), r = [];
  return FA(A).forEach(function(B, n) {
    if (n === 0) {
      var s = B[0];
      if (s.type === 20 && s.value === "to") {
        t = ZB(B);
        return;
      } else if (WB(s)) {
        t = Cr.parse(e, s);
        return;
      }
    }
    var a = Ur(e, B);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ye = function(e, A) {
  var t = iA(180), r = [];
  return FA(A).forEach(function(B, n) {
    if (n === 0) {
      var s = B[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = ZB(B);
        return;
      } else if (WB(s)) {
        t = (Cr.parse(e, s) + iA(270)) % iA(360);
        return;
      }
    }
    var a = Ur(e, B);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, $a = function(e, A) {
  var t = iA(180), r = [], B = 1, n = 0, s = 3, a = [];
  return FA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (T(c) && c.value === "linear") {
        B = 1;
        return;
      } else if (T(c) && c.value === "radial") {
        B = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = MA.parse(e, c.values[0]);
        r.push({ stop: Z, color: l });
      } else if (c.name === "to") {
        var l = MA.parse(e, c.values[0]);
        r.push({ stop: TA, color: l });
      } else if (c.name === "color-stop") {
        var Q = c.values.filter(ae);
        if (Q.length === 2) {
          var l = MA.parse(e, Q[1]), C = Q[0];
          ie(C) && r.push({
            stop: { type: 16, number: C.number * 100, flags: C.flags },
            color: l
          });
        }
      }
    }
  }), B === 1 ? {
    angle: (t + iA(180)) % iA(360),
    stops: r,
    type: B
  } : { size: s, shape: n, stops: r, position: a, type: B };
}, zB = "closest-side", qB = "farthest-side", jB = "closest-corner", $B = "farthest-corner", An = "circle", en = "ellipse", rn = "cover", tn = "contain", Ai = function(e, A) {
  var t = 0, r = 3, B = [], n = [];
  return FA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0) {
      var o = !1;
      i = s.reduce(function(l, Q) {
        if (o)
          if (T(Q))
            switch (Q.value) {
              case "center":
                return n.push(ft), l;
              case "top":
              case "left":
                return n.push(Z), l;
              case "right":
              case "bottom":
                return n.push(TA), l;
            }
          else
            (X(Q) || GA(Q)) && n.push(Q);
        else if (T(Q))
          switch (Q.value) {
            case An:
              return t = 0, !1;
            case en:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case zB:
              return r = 0, !1;
            case rn:
            case qB:
              return r = 1, !1;
            case tn:
            case jB:
              return r = 2, !1;
            case $B:
              return r = 3, !1;
          }
        else if (GA(Q) || X(Q))
          return Array.isArray(r) || (r = []), r.push(Q), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = Ur(e, s);
      B.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: B,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, We = function(e, A) {
  var t = 0, r = 3, B = [], n = [];
  return FA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0 ? i = s.reduce(function(c, l) {
      if (T(l))
        switch (l.value) {
          case "center":
            return n.push(ft), !1;
          case "top":
          case "left":
            return n.push(Z), !1;
          case "right":
          case "bottom":
            return n.push(TA), !1;
        }
      else if (X(l) || GA(l))
        return n.push(l), !1;
      return c;
    }, i) : a === 1 && (i = s.reduce(function(c, l) {
      if (T(l))
        switch (l.value) {
          case An:
            return t = 0, !1;
          case en:
            return t = 1, !1;
          case tn:
          case zB:
            return r = 0, !1;
          case qB:
            return r = 1, !1;
          case jB:
            return r = 2, !1;
          case rn:
          case $B:
            return r = 3, !1;
        }
      else if (GA(l) || X(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = Ur(e, s);
      B.push(o);
    }
  }), {
    size: r,
    shape: t,
    stops: B,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, ei = function(e) {
  return e.type === 1;
}, ri = function(e) {
  return e.type === 2;
}, Ct = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var t = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      var r = Bn[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function ti(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Bn[e.name]);
}
var Bn = {
  "linear-gradient": ja,
  "-moz-linear-gradient": Ye,
  "-ms-linear-gradient": Ye,
  "-o-linear-gradient": Ye,
  "-webkit-linear-gradient": Ye,
  "radial-gradient": Ai,
  "-moz-radial-gradient": We,
  "-ms-radial-gradient": We,
  "-o-radial-gradient": We,
  "-webkit-radial-gradient": We,
  "-webkit-gradient": $a
}, Bi = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ae(r) && ti(r);
    }).map(function(r) {
      return Ct.parse(e, r);
    });
  }
}, ni = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (T(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, si = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return FA(A).map(function(t) {
      return t.filter(X);
    }).map(XB);
  }
}, ai = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return FA(A).map(function(t) {
      return t.filter(T).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(ii);
  }
}, ii = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, se;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(se || (se = {}));
var oi = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return FA(A).map(function(t) {
      return t.filter(ci);
    });
  }
}, ci = function(e) {
  return T(e) || X(e);
}, Fr = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, li = Fr("top"), Qi = Fr("right"), gi = Fr("bottom"), wi = Fr("left"), hr = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return XB(t.filter(X));
    }
  };
}, ui = hr("top-left"), fi = hr("top-right"), Ci = hr("bottom-right"), Ui = hr("bottom-left"), dr = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, Fi = dr("top"), hi = dr("right"), di = dr("bottom"), pi = dr("left"), pr = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Le(t) ? t.number : 0;
    }
  };
}, Ei = pr("top"), Hi = pr("right"), vi = pr("bottom"), Ii = pr("left"), mi = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, yi = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Ki = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(T).reduce(
      function(t, r) {
        return t | Li(r.value);
      },
      0
      /* NONE */
    );
  }
}, Li = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, xi = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, Di = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, ar;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ar || (ar = {}));
var bi = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return ar.STRICT;
      case "normal":
      default:
        return ar.NORMAL;
    }
  }
}, Si = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, zt = function(e, A) {
  return T(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : X(e) ? M(e, A) : A;
}, Ti = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Ct.parse(e, A);
  }
}, Oi = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, st = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, Er = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Mi = Er("top"), Ri = Er("right"), Gi = Er("bottom"), Vi = Er("left"), Ni = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(T).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, Pi = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Hr = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Xi = Hr("top"), _i = Hr("right"), Ji = Hr("bottom"), ki = Hr("left"), Yi = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Wi = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, Zi = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && nt(A[0], "none") ? [] : FA(A).map(function(t) {
      for (var r = {
        color: yA.TRANSPARENT,
        offsetX: Z,
        offsetY: Z,
        blur: Z
      }, B = 0, n = 0; n < t.length; n++) {
        var s = t[n];
        GA(s) ? (B === 0 ? r.offsetX = s : B === 1 ? r.offsetY = s : r.blur = s, B++) : r.color = MA.parse(e, s);
      }
      return r;
    });
  }
}, zi = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, qi = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Ao[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, ji = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, $i = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var B = A[4], n = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var s = A[12], a = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, B, n, s, a] : null;
}, Ao = {
  matrix: ji,
  matrix3d: $i
}, qt = {
  type: 16,
  number: 50,
  flags: Ke
}, eo = [qt, qt], ro = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(X);
    return t.length !== 2 ? eo : [t[0], t[1]];
  }
}, to = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Ee;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ee || (Ee = {}));
var Bo = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ee.BREAK_ALL;
      case "keep-all":
        return Ee.KEEP_ALL;
      case "normal":
      default:
        return Ee.NORMAL;
    }
  }
}, no = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (ie(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, nn = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, so = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ie(A) ? A.number : 1;
  }
}, ao = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, io = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(T).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, oo = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [], r = [];
    return A.forEach(function(B) {
      switch (B.type) {
        case 20:
        case 0:
          t.push(B.value);
          break;
        case 17:
          t.push(B.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(B) {
      return B.indexOf(" ") === -1 ? B : "'" + B + "'";
    });
  }
}, co = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, lo = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ie(A))
      return A.number;
    if (T(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Qo = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(T).map(function(t) {
      return t.value;
    });
  }
}, go = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, J = function(e, A) {
  return (e & A) !== 0;
}, wo = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, uo = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], B = A.filter(PB), n = 0; n < B.length; n++) {
      var s = B[n], a = B[n + 1];
      if (s.type === 20) {
        var i = a && ie(a) ? a.number : 1;
        r.push({ counter: s.value, increment: i });
      }
    }
    return r;
  }
}, fo = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(PB), B = 0; B < r.length; B++) {
      var n = r[B], s = r[B + 1];
      if (T(n) && n.value !== "none") {
        var a = s && ie(s) ? s.number : 0;
        t.push({ counter: n.value, reset: a });
      }
    }
    return t;
  }
}, Co = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Le).map(function(t) {
      return nn.parse(e, t);
    });
  }
}, Uo = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], B = A.filter(_a);
    if (B.length % 2 !== 0)
      return null;
    for (var n = 0; n < B.length; n += 2) {
      var s = B[n].value, a = B[n + 1].value;
      r.push({ open: s, close: a });
    }
    return r;
  }
}, jt = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Fo = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && nt(A[0], "none") ? [] : FA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: Z,
        offsetY: Z,
        blur: Z,
        spread: Z,
        inset: !1
      }, B = 0, n = 0; n < t.length; n++) {
        var s = t[n];
        nt(s, "inset") ? r.inset = !0 : GA(s) ? (B === 0 ? r.offsetX = s : B === 1 ? r.offsetY = s : B === 2 ? r.blur = s : r.spread = s, B++) : r.color = MA.parse(e, s);
      }
      return r;
    });
  }
}, ho = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return A.filter(T).forEach(function(B) {
      switch (B.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(B) {
      r.indexOf(B) === -1 && r.push(B);
    }), r;
  }
}, po = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Eo = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Le(A) ? A.number : 0;
  }
}, Ho = (
  /** @class */
  function() {
    function e(A, t) {
      var r, B;
      this.animationDuration = h(A, Co, t.animationDuration), this.backgroundClip = h(A, Ya, t.backgroundClip), this.backgroundColor = h(A, Wa, t.backgroundColor), this.backgroundImage = h(A, Bi, t.backgroundImage), this.backgroundOrigin = h(A, ni, t.backgroundOrigin), this.backgroundPosition = h(A, si, t.backgroundPosition), this.backgroundRepeat = h(A, ai, t.backgroundRepeat), this.backgroundSize = h(A, oi, t.backgroundSize), this.borderTopColor = h(A, li, t.borderTopColor), this.borderRightColor = h(A, Qi, t.borderRightColor), this.borderBottomColor = h(A, gi, t.borderBottomColor), this.borderLeftColor = h(A, wi, t.borderLeftColor), this.borderTopLeftRadius = h(A, ui, t.borderTopLeftRadius), this.borderTopRightRadius = h(A, fi, t.borderTopRightRadius), this.borderBottomRightRadius = h(A, Ci, t.borderBottomRightRadius), this.borderBottomLeftRadius = h(A, Ui, t.borderBottomLeftRadius), this.borderTopStyle = h(A, Fi, t.borderTopStyle), this.borderRightStyle = h(A, hi, t.borderRightStyle), this.borderBottomStyle = h(A, di, t.borderBottomStyle), this.borderLeftStyle = h(A, pi, t.borderLeftStyle), this.borderTopWidth = h(A, Ei, t.borderTopWidth), this.borderRightWidth = h(A, Hi, t.borderRightWidth), this.borderBottomWidth = h(A, vi, t.borderBottomWidth), this.borderLeftWidth = h(A, Ii, t.borderLeftWidth), this.boxShadow = h(A, Fo, t.boxShadow), this.color = h(A, mi, t.color), this.direction = h(A, yi, t.direction), this.display = h(A, Ki, t.display), this.float = h(A, xi, t.cssFloat), this.fontFamily = h(A, oo, t.fontFamily), this.fontSize = h(A, co, t.fontSize), this.fontStyle = h(A, go, t.fontStyle), this.fontVariant = h(A, Qo, t.fontVariant), this.fontWeight = h(A, lo, t.fontWeight), this.letterSpacing = h(A, Di, t.letterSpacing), this.lineBreak = h(A, bi, t.lineBreak), this.lineHeight = h(A, Si, t.lineHeight), this.listStyleImage = h(A, Ti, t.listStyleImage), this.listStylePosition = h(A, Oi, t.listStylePosition), this.listStyleType = h(A, st, t.listStyleType), this.marginTop = h(A, Mi, t.marginTop), this.marginRight = h(A, Ri, t.marginRight), this.marginBottom = h(A, Gi, t.marginBottom), this.marginLeft = h(A, Vi, t.marginLeft), this.opacity = h(A, so, t.opacity);
      var n = h(A, Ni, t.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = h(A, Pi, t.overflowWrap), this.paddingTop = h(A, Xi, t.paddingTop), this.paddingRight = h(A, _i, t.paddingRight), this.paddingBottom = h(A, Ji, t.paddingBottom), this.paddingLeft = h(A, ki, t.paddingLeft), this.paintOrder = h(A, ho, t.paintOrder), this.position = h(A, Wi, t.position), this.textAlign = h(A, Yi, t.textAlign), this.textDecorationColor = h(A, ao, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = h(A, io, (B = t.textDecorationLine) !== null && B !== void 0 ? B : t.textDecoration), this.textShadow = h(A, Zi, t.textShadow), this.textTransform = h(A, zi, t.textTransform), this.transform = h(A, qi, t.transform), this.transformOrigin = h(A, ro, t.transformOrigin), this.visibility = h(A, to, t.visibility), this.webkitTextStrokeColor = h(A, po, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = h(A, Eo, t.webkitTextStrokeWidth), this.wordBreak = h(A, Bo, t.wordBreak), this.zIndex = h(A, no, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return RA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return J(
        this.display,
        4
        /* INLINE */
      ) || J(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || J(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || J(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || J(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || J(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), vo = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = h(A, wo, t.content), this.quotes = h(A, Uo, t.quotes);
    }
    return e;
  }()
), $t = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = h(A, uo, t.counterIncrement), this.counterReset = h(A, fo, t.counterReset);
    }
    return e;
  }()
), h = function(e, A, t) {
  var r = new VB(), B = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(B);
  var n = new NB(r.read());
  switch (A.type) {
    case 2:
      var s = n.parseComponentValue();
      return A.parse(e, T(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, n.parseComponentValue());
    case 1:
      return A.parse(e, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Cr.parse(e, n.parseComponentValue());
        case "color":
          return MA.parse(e, n.parseComponentValue());
        case "image":
          return Ct.parse(e, n.parseComponentValue());
        case "length":
          var a = n.parseComponentValue();
          return GA(a) ? a : Z;
        case "length-percentage":
          var i = n.parseComponentValue();
          return X(i) ? i : Z;
        case "time":
          return nn.parse(e, n.parseComponentValue());
      }
      break;
  }
}, Io = "data-html2canvas-debug", mo = function(e) {
  var A = e.getAttribute(Io);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, at = function(e, A) {
  var t = mo(e);
  return t === 1 || A === t;
}, hA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, at(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Ho(A, window.getComputedStyle(t, null)), ct(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = ur(this.context, t), at(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), yo = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", AB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ze = 0; Ze < AB.length; Ze++)
  Fe[AB.charCodeAt(Ze)] = Ze;
var Ko = function(e) {
  var A = e.length * 0.75, t = e.length, r, B = 0, n, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    n = Fe[e.charCodeAt(r)], s = Fe[e.charCodeAt(r + 1)], a = Fe[e.charCodeAt(r + 2)], i = Fe[e.charCodeAt(r + 3)], c[B++] = n << 2 | s >> 4, c[B++] = (s & 15) << 4 | a >> 2, c[B++] = (a & 3) << 6 | i & 63;
  return o;
}, Lo = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, xo = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, kA = 5, Ut = 6 + 5, br = 2, Do = Ut - kA, sn = 65536 >> kA, bo = 1 << kA, Sr = bo - 1, So = 1024 >> kA, To = sn + So, Oo = To, Mo = 32, Ro = Oo + Mo, Go = 65536 >> Ut, Vo = 1 << Do, No = Vo - 1, eB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Po = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Xo = function(e, A) {
  var t = Ko(e), r = Array.isArray(t) ? xo(t) : new Uint32Array(t), B = Array.isArray(t) ? Lo(t) : new Uint16Array(t), n = 24, s = eB(B, n / 2, r[4] / 2), a = r[5] === 2 ? eB(B, (n + r[4]) / 2) : Po(r, Math.ceil((n + r[4]) / 4));
  return new _o(r[0], r[1], r[2], r[3], s, a);
}, _o = (
  /** @class */
  function() {
    function e(A, t, r, B, n, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = B, this.index = n, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> kA], t = (t << br) + (A & Sr), this.data[t];
        if (A <= 65535)
          return t = this.index[sn + (A - 55296 >> kA)], t = (t << br) + (A & Sr), this.data[t];
        if (A < this.highStart)
          return t = Ro - Go + (A >> Ut), t = this.index[t], t += A >> kA & No, t = this.index[t], t = (t << br) + (A & Sr), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), rB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Jo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ze = 0; ze < rB.length; ze++)
  Jo[rB.charCodeAt(ze)] = ze;
var ko = 1, Tr = 2, Or = 3, tB = 4, BB = 5, Yo = 7, nB = 8, Mr = 9, Rr = 10, sB = 11, aB = 12, iB = 13, oB = 14, Gr = 15, Wo = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var B = e.charCodeAt(t++);
    if (B >= 55296 && B <= 56319 && t < r) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((B & 1023) << 10) + (n & 1023) + 65536) : (A.push(B), t--);
    } else
      A.push(B);
  }
  return A;
}, Zo = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], B = -1, n = ""; ++B < t; ) {
    var s = e[B];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (B + 1 === t || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, zo = Xo(yo), sA = "×", Vr = "÷", qo = function(e) {
  return zo.get(e);
}, jo = function(e, A, t) {
  var r = t - 2, B = A[r], n = A[t - 1], s = A[t];
  if (n === Tr && s === Or)
    return sA;
  if (n === Tr || n === Or || n === tB || s === Tr || s === Or || s === tB)
    return Vr;
  if (n === nB && [nB, Mr, sB, aB].indexOf(s) !== -1 || (n === sB || n === Mr) && (s === Mr || s === Rr) || (n === aB || n === Rr) && s === Rr || s === iB || s === BB || s === Yo || n === ko)
    return sA;
  if (n === iB && s === oB) {
    for (; B === BB; )
      B = A[--r];
    if (B === oB)
      return sA;
  }
  if (n === Gr && s === Gr) {
    for (var a = 0; B === Gr; )
      a++, B = A[--r];
    if (a % 2 === 0)
      return sA;
  }
  return Vr;
}, $o = function(e) {
  var A = Wo(e), t = A.length, r = 0, B = 0, n = A.map(qo);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = sA; r < t && (s = jo(A, n, ++r)) === sA; )
        ;
      if (s !== sA || r === t) {
        var a = Zo.apply(null, A.slice(B, r));
        return B = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Ac = function(e) {
  for (var A = $o(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, ec = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var B = t.getBoundingClientRect(), n = Math.round(B.height);
      if (e.body.removeChild(r), n === A)
        return !0;
    }
  }
  return !1;
}, rc = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, B = fr(r.data).map(function(i) {
    return P(i);
  }), n = 0, s = {}, a = B.every(function(i, o) {
    t.setStart(r, n), t.setEnd(r, n + i.length);
    var c = t.getBoundingClientRect();
    n += i.length;
    var l = c.x > s.x || c.y > s.y;
    return s = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), a;
}, tc = function() {
  return typeof new Image().crossOrigin < "u";
}, Bc = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, nc = function(e) {
  var A = new Image(), t = e.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), t.toDataURL();
  } catch (B) {
    return !1;
  }
  return !0;
}, cB = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, sc = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var B = new Image(), n = A.toDataURL();
  B.src = n;
  var s = it(t, t, 0, 0, B);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), lB(s).then(function(a) {
    r.drawImage(a, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + n + ")", o.style.height = t + "px", cB(i) ? lB(it(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), cB(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, it = function(e, A, t, r, B) {
  var n = "http://www.w3.org/2000/svg", s = document.createElementNS(n, "svg"), a = document.createElementNS(n, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(a), a.appendChild(B), s;
}, lB = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, W = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = ec(document);
    return Object.defineProperty(W, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = W.SUPPORT_RANGE_BOUNDS && rc(document);
    return Object.defineProperty(W, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = nc(document);
    return Object.defineProperty(W, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? sc(document) : Promise.resolve(!1);
    return Object.defineProperty(W, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = tc();
    return Object.defineProperty(W, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Bc();
    return Object.defineProperty(W, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(W, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(W, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, He = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), ac = function(e, A, t, r) {
  var B = cc(A, t), n = [], s = 0;
  return B.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (W.SUPPORT_RANGE_BOUNDS) {
        var i = QB(r, s, a.length).getClientRects();
        if (i.length > 1) {
          var o = Ft(a), c = 0;
          o.forEach(function(Q) {
            n.push(new He(Q, KA.fromDOMRectList(e, QB(r, c + s, Q.length).getClientRects()))), c += Q.length;
          });
        } else
          n.push(new He(a, KA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(a.length);
        n.push(new He(a, ic(e, r))), r = l;
      }
    else
      W.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    s += a.length;
  }), n;
}, ic = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var B = A.parentNode;
    if (B) {
      B.replaceChild(r, A);
      var n = ur(e, r);
      return r.firstChild && B.replaceChild(r.firstChild, r), n;
    }
  }
  return KA.EMPTY;
}, QB = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var B = r.createRange();
  return B.setStart(e, A), B.setEnd(e, A + t), B;
}, Ft = function(e) {
  if (W.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Ac(e);
}, oc = function(e, A) {
  if (W.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Qc(e, A);
}, cc = function(e, A) {
  return A.letterSpacing !== 0 ? Ft(e) : oc(e, A);
}, lc = [32, 160, 4961, 65792, 65793, 4153, 4241], Qc = function(e, A) {
  for (var t = Rs(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], B, n = function() {
    if (B.value) {
      var s = B.value.slice(), a = fr(s), i = "";
      a.forEach(function(o) {
        lc.indexOf(o) === -1 ? i += P(o) : (i.length && r.push(i), r.push(P(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(B = t.next()).done; )
    n();
  return r;
}, gc = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = wc(t.data, r.textTransform), this.textBounds = ac(A, this.text, r, t);
    }
    return e;
  }()
), wc = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(uc, fc);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, uc = /(^|\s|:|-|\(|\))([a-z])/g, fc = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, an = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.src = r.currentSrc || r.src, B.intrinsicWidth = r.naturalWidth, B.intrinsicHeight = r.naturalHeight, B.context.cache.addImage(B.src), B;
    }
    return A;
  }(hA)
), on = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.canvas = r, B.intrinsicWidth = r.width, B.intrinsicHeight = r.height, B;
    }
    return A;
  }(hA)
), cn = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this, n = new XMLSerializer(), s = ur(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), B.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(r)), B.intrinsicWidth = r.width.baseVal.value, B.intrinsicHeight = r.height.baseVal.value, B.context.cache.addImage(B.svg), B;
    }
    return A;
  }(hA)
), ln = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.value = r.value, B;
    }
    return A;
  }(hA)
), ot = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.start = r.start, B.reversed = typeof r.reversed == "boolean" && r.reversed === !0, B;
    }
    return A;
  }(hA)
), Cc = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Uc = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Fc = function(e) {
  return e.width > e.height ? new KA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new KA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, hc = function(e) {
  var A = e.type === dc ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, ir = "checkbox", or = "radio", dc = "password", gB = 707406591, ht = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      switch (B.type = r.type.toLowerCase(), B.checked = r.checked, B.value = hc(r), (B.type === ir || B.type === or) && (B.styles.backgroundColor = 3739148031, B.styles.borderTopColor = B.styles.borderRightColor = B.styles.borderBottomColor = B.styles.borderLeftColor = 2779096575, B.styles.borderTopWidth = B.styles.borderRightWidth = B.styles.borderBottomWidth = B.styles.borderLeftWidth = 1, B.styles.borderTopStyle = B.styles.borderRightStyle = B.styles.borderBottomStyle = B.styles.borderLeftStyle = 1, B.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], B.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], B.bounds = Fc(B.bounds)), B.type) {
        case ir:
          B.styles.borderTopRightRadius = B.styles.borderTopLeftRadius = B.styles.borderBottomRightRadius = B.styles.borderBottomLeftRadius = Cc;
          break;
        case or:
          B.styles.borderTopRightRadius = B.styles.borderTopLeftRadius = B.styles.borderBottomRightRadius = B.styles.borderBottomLeftRadius = Uc;
          break;
      }
      return B;
    }
    return A;
  }(hA)
), Qn = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this, n = r.options[r.selectedIndex || 0];
      return B.value = n && n.text || "", B;
    }
    return A;
  }(hA)
), gn = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.value = r.value, B;
    }
    return A;
  }(hA)
), wn = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      B.src = r.src, B.width = parseInt(r.width, 10) || 0, B.height = parseInt(r.height, 10) || 0, B.backgroundColor = B.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          B.tree = fn(t, r.contentWindow.document.documentElement);
          var n = r.contentWindow.document.documentElement ? pe(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : yA.TRANSPARENT, s = r.contentWindow.document.body ? pe(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : yA.TRANSPARENT;
          B.backgroundColor = RA(n) ? RA(s) ? B.styles.backgroundColor : s : n;
        }
      } catch (a) {
      }
      return B;
    }
    return A;
  }(hA)
), pc = ["OL", "UL", "MENU"], tr = function(e, A, t, r) {
  for (var B = A.firstChild, n = void 0; B; B = n)
    if (n = B.nextSibling, Cn(B) && B.data.trim().length > 0)
      t.textNodes.push(new gc(e, B, t.styles));
    else if (ne(B))
      if (dn(B) && B.assignedNodes)
        B.assignedNodes().forEach(function(a) {
          return tr(e, a, t, r);
        });
      else {
        var s = un(e, B);
        s.styles.isVisible() && (Ec(B, s, r) ? s.flags |= 4 : Hc(s.styles) && (s.flags |= 2), pc.indexOf(B.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), B.slot, B.shadowRoot ? tr(e, B.shadowRoot, s, r) : !cr(B) && !Un(B) && !lr(B) && tr(e, B, s, r));
      }
}, un = function(e, A) {
  return lt(A) ? new an(e, A) : Fn(A) ? new on(e, A) : Un(A) ? new cn(e, A) : vc(A) ? new ln(e, A) : Ic(A) ? new ot(e, A) : mc(A) ? new ht(e, A) : lr(A) ? new Qn(e, A) : cr(A) ? new gn(e, A) : hn(A) ? new wn(e, A) : new hA(e, A);
}, fn = function(e, A) {
  var t = un(e, A);
  return t.flags |= 4, tr(e, A, t, t), t;
}, Ec = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || dt(e) && t.styles.isTransparent();
}, Hc = function(e) {
  return e.isPositioned() || e.isFloating();
}, Cn = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ne = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, ct = function(e) {
  return ne(e) && typeof e.style < "u" && !Br(e);
}, Br = function(e) {
  return typeof e.className == "object";
}, vc = function(e) {
  return e.tagName === "LI";
}, Ic = function(e) {
  return e.tagName === "OL";
}, mc = function(e) {
  return e.tagName === "INPUT";
}, yc = function(e) {
  return e.tagName === "HTML";
}, Un = function(e) {
  return e.tagName === "svg";
}, dt = function(e) {
  return e.tagName === "BODY";
}, Fn = function(e) {
  return e.tagName === "CANVAS";
}, wB = function(e) {
  return e.tagName === "VIDEO";
}, lt = function(e) {
  return e.tagName === "IMG";
}, hn = function(e) {
  return e.tagName === "IFRAME";
}, uB = function(e) {
  return e.tagName === "STYLE";
}, Kc = function(e) {
  return e.tagName === "SCRIPT";
}, cr = function(e) {
  return e.tagName === "TEXTAREA";
}, lr = function(e) {
  return e.tagName === "SELECT";
}, dn = function(e) {
  return e.tagName === "SLOT";
}, fB = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Lc = (
  /** @class */
  function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var t = this.counters[A];
      return t && t.length ? t[t.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var t = this.counters[A];
      return t || [];
    }, e.prototype.pop = function(A) {
      var t = this;
      A.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, e.prototype.parse = function(A) {
      var t = this, r = A.counterIncrement, B = A.counterReset, n = !0;
      r !== null && r.forEach(function(a) {
        var i = t.counters[a.counter];
        i && a.increment !== 0 && (n = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += a.increment);
      });
      var s = [];
      return n && B.forEach(function(a) {
        var i = t.counters[a.counter];
        s.push(a.counter), i || (i = t.counters[a.counter] = []), i.push(a.reset);
      }), s;
    }, e;
  }()
), CB = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, UB = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, xc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, Dc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, $A = function(e, A, t, r, B, n) {
  return e < A || e > t ? ye(e, B, n.length > 0) : r.integers.reduce(function(s, a, i) {
    for (; e >= a; )
      e -= a, s += r.values[i];
    return s;
  }, "") + n;
}, pn = function(e, A, t, r) {
  var B = "";
  do
    t || e--, B = r(e) + B, e /= A;
  while (e * A >= A);
  return B;
}, N = function(e, A, t, r, B) {
  var n = t - A + 1;
  return (e < 0 ? "-" : "") + (pn(Math.abs(e), n, r, function(s) {
    return P(Math.floor(s % n) + A);
  }) + B);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return pn(Math.abs(e), r, !1, function(B) {
    return A[Math.floor(B % r)];
  }) + t;
}, re = 1, xA = 2, DA = 4, he = 8, mA = function(e, A, t, r, B, n) {
  if (e < -9999 || e > 9999)
    return ye(e, 4, B.length > 0);
  var s = Math.abs(e), a = B;
  if (s === 0)
    return A[0] + a;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && J(n, re) && a !== "" ? a = A[o] + a : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && J(n, xA) || o === 1 && i === 1 && J(n, DA) && e > 100 || o === 1 && i > 1 && J(n, he) ? a = A[o] + (i > 0 ? t[i - 1] : "") + a : o === 1 && i > 0 && (a = t[i - 1] + a), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + a;
}, FB = "十百千萬", hB = "拾佰仟萬", dB = "マイナス", Nr = "마이너스", ye = function(e, A, t) {
  var r = t ? ". " : "", B = t ? "、" : "", n = t ? ", " : "", s = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var a = N(e, 48, 57, !0, r);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return PA(e, "〇一二三四五六七八九", B);
    case 6:
      return $A(e, 1, 3999, CB, 3, r).toLowerCase();
    case 7:
      return $A(e, 1, 3999, CB, 3, r);
    case 8:
      return N(e, 945, 969, !1, r);
    case 9:
      return N(e, 97, 122, !1, r);
    case 10:
      return N(e, 65, 90, !1, r);
    case 11:
      return N(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return $A(e, 1, 9999, UB, 3, r);
    case 35:
      return $A(e, 1, 9999, UB, 3, r).toLowerCase();
    case 13:
      return N(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return N(e, 6112, 6121, !0, r);
    case 15:
      return PA(e, "子丑寅卯辰巳午未申酉戌亥", B);
    case 16:
      return PA(e, "甲乙丙丁戊己庚辛壬癸", B);
    case 17:
    case 48:
      return mA(e, "零一二三四五六七八九", FB, "負", B, xA | DA | he);
    case 47:
      return mA(e, "零壹貳參肆伍陸柒捌玖", hB, "負", B, re | xA | DA | he);
    case 42:
      return mA(e, "零一二三四五六七八九", FB, "负", B, xA | DA | he);
    case 41:
      return mA(e, "零壹贰叁肆伍陆柒捌玖", hB, "负", B, re | xA | DA | he);
    case 26:
      return mA(e, "〇一二三四五六七八九", "十百千万", dB, B, 0);
    case 25:
      return mA(e, "零壱弐参四伍六七八九", "拾百千万", dB, B, re | xA | DA);
    case 31:
      return mA(e, "영일이삼사오육칠팔구", "십백천만", Nr, n, re | xA | DA);
    case 33:
      return mA(e, "零一二三四五六七八九", "十百千萬", Nr, n, 0);
    case 32:
      return mA(e, "零壹貳參四五六七八九", "拾百千", Nr, n, re | xA | DA);
    case 18:
      return N(e, 2406, 2415, !0, r);
    case 20:
      return $A(e, 1, 19999, Dc, 3, r);
    case 21:
      return N(e, 2790, 2799, !0, r);
    case 22:
      return N(e, 2662, 2671, !0, r);
    case 22:
      return $A(e, 1, 10999, xc, 3, r);
    case 23:
      return PA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return PA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return N(e, 3302, 3311, !0, r);
    case 28:
      return PA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", B);
    case 29:
      return PA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", B);
    case 34:
      return N(e, 3792, 3801, !0, r);
    case 37:
      return N(e, 6160, 6169, !0, r);
    case 38:
      return N(e, 4160, 4169, !0, r);
    case 39:
      return N(e, 2918, 2927, !0, r);
    case 40:
      return N(e, 1776, 1785, !0, r);
    case 43:
      return N(e, 3046, 3055, !0, r);
    case 44:
      return N(e, 3174, 3183, !0, r);
    case 45:
      return N(e, 3664, 3673, !0, r);
    case 46:
      return N(e, 3872, 3881, !0, r);
    case 3:
    default:
      return N(e, 48, 57, !0, r);
  }
}, En = "data-html2canvas-ignore", pB = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Lc(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, B = bc(A, t);
      if (!B.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, a = B.contentWindow, i = a.document, o = Oc(B).then(function() {
        return eA(r, void 0, void 0, function() {
          var c, l;
          return j(this, function(Q) {
            switch (Q.label) {
              case 0:
                return this.scrolledElements.forEach(Vc), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                Q.sent(), Q.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Tc(i)] : [3, 4];
              case 3:
                Q.sent(), Q.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(i, l);
                }).then(function() {
                  return B;
                })] : [2, B];
            }
          });
        });
      });
      return i.open(), i.write(Rc(document.doctype) + "<html></html>"), Gc(this.referenceElement.ownerDocument, n, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (at(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Fn(A))
        return this.createCanvasClone(A);
      if (wB(A))
        return this.createVideoClone(A);
      if (uB(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return lt(t) && (lt(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), fB(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return Pr(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(n, s) {
            return s && typeof s.cssText == "string" ? n + s.cssText : n;
          }, ""), B = A.cloneNode(!1);
          return B.textContent = r, B;
        }
      } catch (n) {
        if (this.context.logger.error("Unable to access cssRules property", n), n.name !== "SecurityError")
          throw n;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var t;
      if (this.options.inlineImages && A.ownerDocument) {
        var r = A.ownerDocument.createElement("img");
        try {
          return r.src = A.toDataURL(), r;
        } catch (o) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var B = A.cloneNode(!1);
      try {
        B.width = A.width, B.height = A.height;
        var n = A.getContext("2d"), s = B.getContext("2d");
        if (s)
          if (!this.options.allowTaint && n)
            s.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var a = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (a) {
              var i = a.getContextAttributes();
              (i == null ? void 0 : i.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            s.drawImage(A, 0, 0);
          }
        return B;
      } catch (o) {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return B;
    }, e.prototype.createVideoClone = function(A) {
      var t = A.ownerDocument.createElement("canvas");
      t.width = A.offsetWidth, t.height = A.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch (n) {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var B = A.ownerDocument.createElement("canvas");
      return B.width = A.offsetWidth, B.height = A.offsetHeight, B;
    }, e.prototype.appendChildNode = function(A, t, r) {
      (!ne(t) || !Kc(t) && !t.hasAttribute(En) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ne(t) || !uB(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var B = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling)
        if (ne(n) && dn(n) && typeof n.assignedNodes == "function") {
          var s = n.assignedNodes();
          s.length && s.forEach(function(a) {
            return B.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, n, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (Cn(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && ne(A) && (ct(A) || Br(A))) {
        var B = this.createElementClone(A);
        B.style.transitionProperty = "none";
        var n = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), a = r.getComputedStyle(A, ":after");
        this.referenceElement === A && ct(B) && (this.clonedReferenceElement = B), dt(B) && Xc(B);
        var i = this.counters.parse(new $t(this.context, n)), o = this.resolvePseudoContent(A, B, s, ve.BEFORE);
        fB(A) && (t = !0), wB(A) || this.cloneChildNodes(A, B, t), o && B.insertBefore(o, B.firstChild);
        var c = this.resolvePseudoContent(A, B, a, ve.AFTER);
        return c && B.appendChild(c), this.counters.pop(i), (n && (this.options.copyStyles || Br(A)) && !hn(A) || t) && Pr(n, B), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([B, A.scrollLeft, A.scrollTop]), (cr(A) || lr(A)) && (cr(B) || lr(B)) && (B.value = A.value), B;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, B) {
      var n = this;
      if (r) {
        var s = r.content, a = t.ownerDocument;
        if (!(!a || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new $t(this.context, r));
          var i = new vo(this.context, r), o = a.createElement("html2canvaspseudoelement");
          Pr(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(a.createTextNode(l.value));
            else if (l.type === 22) {
              var Q = a.createElement("img");
              Q.src = l.value, Q.style.opacity = "1", o.appendChild(Q);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var C = l.values.filter(T);
                C.length && o.appendChild(a.createTextNode(A.getAttribute(C[0].value) || ""));
              } else if (l.name === "counter") {
                var u = l.values.filter(ae), w = u[0], p = u[1];
                if (w && T(w)) {
                  var U = n.counters.getCounterValue(w.value), g = p && T(p) ? st.parse(n.context, p.value) : 3;
                  o.appendChild(a.createTextNode(ye(U, g, !1)));
                }
              } else if (l.name === "counters") {
                var x = l.values.filter(ae), w = x[0], v = x[1], p = x[2];
                if (w && T(w)) {
                  var E = n.counters.getCounterValues(w.value), f = p && T(p) ? st.parse(n.context, p.value) : 3, K = v && v.type === 0 ? v.value : "", I = E.map(function(Y) {
                    return ye(Y, f, !1);
                  }).join(K);
                  o.appendChild(a.createTextNode(I));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(a.createTextNode(jt(i.quotes, n.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(a.createTextNode(jt(i.quotes, --n.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(a.createTextNode(l.value));
              }
          }), o.className = Qt + " " + gt;
          var c = B === ve.BEFORE ? " " + Qt : " " + gt;
          return Br(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), ve;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ve || (ve = {}));
var bc = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(En, "true"), e.body.appendChild(t), t;
}, Sc = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, Tc = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Sc));
}, Oc = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var B = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var n = setInterval(function() {
        B.body.childNodes.length > 0 && B.readyState === "complete" && (clearInterval(n), A(e));
      }, 50);
    };
  });
}, Mc = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Pr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Mc.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Rc = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Gc = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Vc = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Nc = ":before", Pc = ":after", Qt = "___html2canvas___pseudoelement_before", gt = "___html2canvas___pseudoelement_after", EB = '{\n    content: "" !important;\n    display: none !important;\n}', Xc = function(e) {
  _c(e, "." + Qt + Nc + EB + "\n         ." + gt + Pc + EB);
}, _c = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Hn = (
  /** @class */
  function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var t = e._link;
      return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  }()
), Jc = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (_r(A) || Zc(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return eA(this, void 0, void 0, function() {
        var t, r, B, n, s = this;
        return j(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Hn.isSameOrigin(A), r = !Xr(A) && this._options.useCORS === !0 && W.SUPPORT_CORS_IMAGES && !t, B = !Xr(A) && !t && !_r(A) && typeof this._options.proxy == "string" && W.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Xr(A) && !_r(A) && !B && !r ? [
                2
                /*return*/
              ] : (n = A, B ? [4, this.proxy(n)] : [3, 2]);
            case 1:
              n = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (zc(n) || r) && (c.crossOrigin = "anonymous"), c.src = n, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var B = A.substring(0, 256);
      return new Promise(function(n, s) {
        var a = W.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (a === "text")
              n(i.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return n(l.result);
              }, !1), l.addEventListener("error", function(Q) {
                return s(Q);
              }, !1), l.readAsDataURL(i.response);
            }
          else
            s("Failed to proxy resource " + B + " with status code " + i.status);
        }, i.onerror = s;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + r + o + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && i instanceof XMLHttpRequest && (i.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return s("Timed out (" + c + "ms) proxying " + B);
          };
        }
        i.send();
      });
    }, e;
  }()
), kc = /^data:image\/svg\+xml/i, Yc = /^data:image\/.*;base64,/i, Wc = /^data:image\/.*/i, Zc = function(e) {
  return W.SUPPORT_SVG_DRAWING || !qc(e);
}, Xr = function(e) {
  return Wc.test(e);
}, zc = function(e) {
  return Yc.test(e);
}, _r = function(e) {
  return e.substr(0, 4) === "blob";
}, qc = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || kc.test(e);
}, F = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), Ae = function(e, A, t) {
  return new F(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, qe = (
  /** @class */
  function() {
    function e(A, t, r, B) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = B;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Ae(this.start, this.startControl, A), B = Ae(this.startControl, this.endControl, A), n = Ae(this.endControl, this.end, A), s = Ae(r, B, A), a = Ae(B, n, A), i = Ae(s, a, A);
      return t ? new e(this.start, r, s, i) : new e(i, a, n, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), aA = function(e) {
  return e.type === 1;
}, jc = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, B = Ue(t.borderTopLeftRadius, r.width, r.height), n = B[0], s = B[1], a = Ue(t.borderTopRightRadius, r.width, r.height), i = a[0], o = a[1], c = Ue(t.borderBottomRightRadius, r.width, r.height), l = c[0], Q = c[1], C = Ue(t.borderBottomLeftRadius, r.width, r.height), u = C[0], w = C[1], p = [];
      p.push((n + i) / r.width), p.push((u + l) / r.width), p.push((s + w) / r.height), p.push((o + Q) / r.height);
      var U = Math.max.apply(Math, p);
      U > 1 && (n /= U, s /= U, i /= U, o /= U, l /= U, Q /= U, u /= U, w /= U);
      var g = r.width - i, x = r.height - Q, v = r.width - l, E = r.height - w, f = t.borderTopWidth, K = t.borderRightWidth, I = t.borderBottomWidth, H = t.borderLeftWidth, V = M(t.paddingTop, A.bounds.width), Y = M(t.paddingRight, A.bounds.width), AA = M(t.paddingBottom, A.bounds.width), D = M(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? R(r.left + H / 3, r.top + f / 3, n - H / 3, s - f / 3, b.TOP_LEFT) : new F(r.left + H / 3, r.top + f / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? R(r.left + g, r.top + f / 3, i - K / 3, o - f / 3, b.TOP_RIGHT) : new F(r.left + r.width - K / 3, r.top + f / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || Q > 0 ? R(r.left + v, r.top + x, l - K / 3, Q - I / 3, b.BOTTOM_RIGHT) : new F(r.left + r.width - K / 3, r.top + r.height - I / 3), this.bottomLeftBorderDoubleOuterBox = u > 0 || w > 0 ? R(r.left + H / 3, r.top + E, u - H / 3, w - I / 3, b.BOTTOM_LEFT) : new F(r.left + H / 3, r.top + r.height - I / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? R(r.left + H * 2 / 3, r.top + f * 2 / 3, n - H * 2 / 3, s - f * 2 / 3, b.TOP_LEFT) : new F(r.left + H * 2 / 3, r.top + f * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? R(r.left + g, r.top + f * 2 / 3, i - K * 2 / 3, o - f * 2 / 3, b.TOP_RIGHT) : new F(r.left + r.width - K * 2 / 3, r.top + f * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || Q > 0 ? R(r.left + v, r.top + x, l - K * 2 / 3, Q - I * 2 / 3, b.BOTTOM_RIGHT) : new F(r.left + r.width - K * 2 / 3, r.top + r.height - I * 2 / 3), this.bottomLeftBorderDoubleInnerBox = u > 0 || w > 0 ? R(r.left + H * 2 / 3, r.top + E, u - H * 2 / 3, w - I * 2 / 3, b.BOTTOM_LEFT) : new F(r.left + H * 2 / 3, r.top + r.height - I * 2 / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? R(r.left + H / 2, r.top + f / 2, n - H / 2, s - f / 2, b.TOP_LEFT) : new F(r.left + H / 2, r.top + f / 2), this.topRightBorderStroke = n > 0 || s > 0 ? R(r.left + g, r.top + f / 2, i - K / 2, o - f / 2, b.TOP_RIGHT) : new F(r.left + r.width - K / 2, r.top + f / 2), this.bottomRightBorderStroke = l > 0 || Q > 0 ? R(r.left + v, r.top + x, l - K / 2, Q - I / 2, b.BOTTOM_RIGHT) : new F(r.left + r.width - K / 2, r.top + r.height - I / 2), this.bottomLeftBorderStroke = u > 0 || w > 0 ? R(r.left + H / 2, r.top + E, u - H / 2, w - I / 2, b.BOTTOM_LEFT) : new F(r.left + H / 2, r.top + r.height - I / 2), this.topLeftBorderBox = n > 0 || s > 0 ? R(r.left, r.top, n, s, b.TOP_LEFT) : new F(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? R(r.left + g, r.top, i, o, b.TOP_RIGHT) : new F(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || Q > 0 ? R(r.left + v, r.top + x, l, Q, b.BOTTOM_RIGHT) : new F(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = u > 0 || w > 0 ? R(r.left, r.top + E, u, w, b.BOTTOM_LEFT) : new F(r.left, r.top + r.height), this.topLeftPaddingBox = n > 0 || s > 0 ? R(r.left + H, r.top + f, Math.max(0, n - H), Math.max(0, s - f), b.TOP_LEFT) : new F(r.left + H, r.top + f), this.topRightPaddingBox = i > 0 || o > 0 ? R(r.left + Math.min(g, r.width - K), r.top + f, g > r.width + K ? 0 : Math.max(0, i - K), Math.max(0, o - f), b.TOP_RIGHT) : new F(r.left + r.width - K, r.top + f), this.bottomRightPaddingBox = l > 0 || Q > 0 ? R(r.left + Math.min(v, r.width - H), r.top + Math.min(x, r.height - I), Math.max(0, l - K), Math.max(0, Q - I), b.BOTTOM_RIGHT) : new F(r.left + r.width - K, r.top + r.height - I), this.bottomLeftPaddingBox = u > 0 || w > 0 ? R(r.left + H, r.top + Math.min(E, r.height - I), Math.max(0, u - H), Math.max(0, w - I), b.BOTTOM_LEFT) : new F(r.left + H, r.top + r.height - I), this.topLeftContentBox = n > 0 || s > 0 ? R(r.left + H + D, r.top + f + V, Math.max(0, n - (H + D)), Math.max(0, s - (f + V)), b.TOP_LEFT) : new F(r.left + H + D, r.top + f + V), this.topRightContentBox = i > 0 || o > 0 ? R(r.left + Math.min(g, r.width + H + D), r.top + f + V, g > r.width + H + D ? 0 : i - H + D, o - (f + V), b.TOP_RIGHT) : new F(r.left + r.width - (K + Y), r.top + f + V), this.bottomRightContentBox = l > 0 || Q > 0 ? R(r.left + Math.min(v, r.width - (H + D)), r.top + Math.min(x, r.height + f + V), Math.max(0, l - (K + Y)), Q - (I + AA), b.BOTTOM_RIGHT) : new F(r.left + r.width - (K + Y), r.top + r.height - (I + AA)), this.bottomLeftContentBox = u > 0 || w > 0 ? R(r.left + H + D, r.top + E, Math.max(0, u - (H + D)), w - (I + AA), b.BOTTOM_LEFT) : new F(r.left + H + D, r.top + r.height - (I + AA));
    }
    return e;
  }()
), b;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(b || (b = {}));
var R = function(e, A, t, r, B) {
  var n = 4 * ((Math.sqrt(2) - 1) / 3), s = t * n, a = r * n, i = e + t, o = A + r;
  switch (B) {
    case b.TOP_LEFT:
      return new qe(new F(e, o), new F(e, o - a), new F(i - s, A), new F(i, A));
    case b.TOP_RIGHT:
      return new qe(new F(e, A), new F(e + s, A), new F(i, o - a), new F(i, o));
    case b.BOTTOM_RIGHT:
      return new qe(new F(i, A), new F(i, A + a), new F(e + s, o), new F(e, o));
    case b.BOTTOM_LEFT:
    default:
      return new qe(new F(i, o), new F(i - s, o), new F(e, A + a), new F(e, A));
  }
}, Qr = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, $c = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, gr = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Al = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), je = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), el = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), rl = function(e) {
  return e.type === 0;
}, vn = function(e) {
  return e.type === 1;
}, tl = function(e) {
  return e.type === 2;
}, HB = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Bl = function(e, A, t, r, B) {
  return e.map(function(n, s) {
    switch (s) {
      case 0:
        return n.add(A, t);
      case 1:
        return n.add(A + r, t);
      case 2:
        return n.add(A + r, t + B);
      case 3:
        return n.add(A, t + B);
    }
    return n;
  });
}, In = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), mn = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new jc(this.container), this.container.styles.opacity < 1 && this.effects.push(new el(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, B = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new Al(r, B, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = Qr(this.curves), a = gr(this.curves);
        HB(s, a) ? this.effects.push(new je(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new je(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new je(
          a,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, B = this.effects.slice(0); r; ) {
        var n = r.effects.filter(function(i) {
          return !vn(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (B.unshift.apply(B, n), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = Qr(r.curves), a = gr(r.curves);
            HB(s, a) || B.unshift(new je(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          B.unshift.apply(B, n);
        r = r.parent;
      }
      return B.filter(function(i) {
        return J(i.target, A);
      });
    }, e;
  }()
), wt = function(e, A, t, r) {
  e.container.elements.forEach(function(B) {
    var n = J(
      B.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = J(
      B.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new mn(B, e);
    J(
      B.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var i = J(
      B.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (n || s) {
      var o = n || B.styles.isPositioned() ? t : A, c = new In(a);
      if (B.styles.isPositioned() || B.styles.opacity < 1 || B.styles.isTransformed()) {
        var l = B.styles.zIndex.order;
        if (l < 0) {
          var Q = 0;
          o.negativeZIndex.some(function(u, w) {
            return l > u.element.container.styles.zIndex.order ? (Q = w, !1) : Q > 0;
          }), o.negativeZIndex.splice(Q, 0, c);
        } else if (l > 0) {
          var C = 0;
          o.positiveZIndex.some(function(u, w) {
            return l >= u.element.container.styles.zIndex.order ? (C = w + 1, !1) : C > 0;
          }), o.positiveZIndex.splice(C, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        B.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      wt(a, c, n ? c : t, i);
    } else
      B.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), wt(a, A, t, i);
    J(
      B.flags,
      8
      /* IS_LIST_OWNER */
    ) && yn(B, i);
  });
}, yn = function(e, A) {
  for (var t = e instanceof ot ? e.start : 1, r = e instanceof ot ? e.reversed : !1, B = 0; B < A.length; B++) {
    var n = A[B];
    n.container instanceof ln && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = ye(t, n.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, nl = function(e) {
  var A = new mn(e, null), t = new In(A), r = [];
  return wt(A, t, t, r), yn(A.container, r), t;
}, vB = function(e, A) {
  switch (A) {
    case 0:
      return oA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return oA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return oA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return oA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, sl = function(e, A) {
  switch (A) {
    case 0:
      return oA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return oA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return oA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return oA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, al = function(e, A) {
  switch (A) {
    case 0:
      return oA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return oA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return oA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return oA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, il = function(e, A) {
  switch (A) {
    case 0:
      return $e(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return $e(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return $e(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return $e(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, $e = function(e, A) {
  var t = [];
  return aA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), aA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, oA = function(e, A, t, r) {
  var B = [];
  return aA(e) ? B.push(e.subdivide(0.5, !1)) : B.push(e), aA(t) ? B.push(t.subdivide(0.5, !0)) : B.push(t), aA(r) ? B.push(r.subdivide(0.5, !0).reverse()) : B.push(r), aA(A) ? B.push(A.subdivide(0.5, !1).reverse()) : B.push(A), B;
}, Kn = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, wr = function(e) {
  var A = e.styles, t = e.bounds, r = M(A.paddingLeft, t.width), B = M(A.paddingRight, t.width), n = M(A.paddingTop, t.width), s = M(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + B), -(A.borderTopWidth + A.borderBottomWidth + n + s));
}, ol = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? wr(A) : Kn(A);
}, cl = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? wr(A) : Kn(A);
}, Jr = function(e, A, t) {
  var r = ol(te(e.styles.backgroundOrigin, A), e), B = cl(te(e.styles.backgroundClip, A), e), n = ll(te(e.styles.backgroundSize, A), t, r), s = n[0], a = n[1], i = Ue(te(e.styles.backgroundPosition, A), r.width - s, r.height - a), o = Ql(te(e.styles.backgroundRepeat, A), i, n, r, B), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, s, a];
}, ee = function(e) {
  return T(e) && e.value === se.AUTO;
}, Ar = function(e) {
  return typeof e == "number";
}, ll = function(e, A, t) {
  var r = A[0], B = A[1], n = A[2], s = e[0], a = e[1];
  if (!s)
    return [0, 0];
  if (X(s) && a && X(a))
    return [M(s, t.width), M(a, t.height)];
  var i = Ar(n);
  if (T(s) && (s.value === se.CONTAIN || s.value === se.COVER)) {
    if (Ar(n)) {
      var o = t.width / t.height;
      return o < n != (s.value === se.COVER) ? [t.width, t.width / n] : [t.height * n, t.height];
    }
    return [t.width, t.height];
  }
  var c = Ar(r), l = Ar(B), Q = c || l;
  if (ee(s) && (!a || ee(a))) {
    if (c && l)
      return [r, B];
    if (!i && !Q)
      return [t.width, t.height];
    if (Q && i) {
      var C = c ? r : B * n, u = l ? B : r / n;
      return [C, u];
    }
    var w = c ? r : t.width, p = l ? B : t.height;
    return [w, p];
  }
  if (i) {
    var U = 0, g = 0;
    return X(s) ? U = M(s, t.width) : X(a) && (g = M(a, t.height)), ee(s) ? U = g * n : (!a || ee(a)) && (g = U / n), [U, g];
  }
  var x = null, v = null;
  if (X(s) ? x = M(s, t.width) : a && X(a) && (v = M(a, t.height)), x !== null && (!a || ee(a)) && (v = c && l ? x / r * B : t.height), v !== null && ee(s) && (x = c && l ? v / B * r : t.width), x !== null && v !== null)
    return [x, v];
  throw new Error("Unable to calculate background-size for element");
}, te = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Ql = function(e, A, t, r, B) {
  var n = A[0], s = A[1], a = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new F(Math.round(r.left), Math.round(r.top + s)),
        new F(Math.round(r.left + r.width), Math.round(r.top + s)),
        new F(Math.round(r.left + r.width), Math.round(i + r.top + s)),
        new F(Math.round(r.left), Math.round(i + r.top + s))
      ];
    case 3:
      return [
        new F(Math.round(r.left + n), Math.round(r.top)),
        new F(Math.round(r.left + n + a), Math.round(r.top)),
        new F(Math.round(r.left + n + a), Math.round(r.height + r.top)),
        new F(Math.round(r.left + n), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new F(Math.round(r.left + n), Math.round(r.top + s)),
        new F(Math.round(r.left + n + a), Math.round(r.top + s)),
        new F(Math.round(r.left + n + a), Math.round(r.top + s + i)),
        new F(Math.round(r.left + n), Math.round(r.top + s + i))
      ];
    default:
      return [
        new F(Math.round(B.left), Math.round(B.top)),
        new F(Math.round(B.left + B.width), Math.round(B.top)),
        new F(Math.round(B.left + B.width), Math.round(B.height + B.top)),
        new F(Math.round(B.left), Math.round(B.height + B.top))
      ];
  }
}, gl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", IB = "Hidden Text", wl = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), B = this._document.createElement("img"), n = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), B.src = gl, B.width = 1, B.height = 1, B.style.margin = "0", B.style.padding = "0", B.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(IB)), r.appendChild(n), r.appendChild(B);
      var a = B.offsetTop - n.offsetTop + 2;
      r.removeChild(n), r.appendChild(this._document.createTextNode(IB)), r.style.lineHeight = "normal", B.style.verticalAlign = "super";
      var i = B.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: a, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), Ln = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), ul = 1e4, fl = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B._activeEffects = [], B.canvas = r.canvas ? r.canvas : document.createElement("canvas"), B.ctx = B.canvas.getContext("2d"), r.canvas || (B.canvas.width = Math.floor(r.width * r.scale), B.canvas.height = Math.floor(r.height * r.scale), B.canvas.style.width = r.width + "px", B.canvas.style.height = r.height + "px"), B.fontMetrics = new wl(document), B.ctx.scale(B.options.scale, B.options.scale), B.ctx.translate(-r.x, -r.y), B.ctx.textBaseline = "bottom", B._activeEffects = [], B.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), B;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(B) {
        return r.applyEffect(B);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), tl(t) && (this.ctx.globalAlpha = t.opacity), rl(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), vn(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return eA(this, void 0, void 0, function() {
        var r;
        return j(this, function(B) {
          switch (B.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              B.sent(), B.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(t) {
      return eA(this, void 0, void 0, function() {
        return j(this, function(r) {
          switch (r.label) {
            case 0:
              if (J(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(t, r, B) {
      var n = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + B);
      else {
        var s = Ft(t.text);
        s.reduce(function(a, i) {
          return n.ctx.fillText(i, a, t.bounds.top + B), a + n.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), B = dl(t.fontFamily).join(", "), n = Le(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, n, B].join(" "),
        B,
        n
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return eA(this, void 0, void 0, function() {
        var B, n, s, a, i, o, c, l, Q = this;
        return j(this, function(C) {
          return B = this.createFontStyle(r), n = B[0], s = B[1], a = B[2], this.ctx.font = n, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, a), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(u) {
            l.forEach(function(w) {
              switch (w) {
                case 0:
                  Q.ctx.fillStyle = k(r.color), Q.renderTextWithLetterSpacing(u, r.letterSpacing, o);
                  var p = r.textShadow;
                  p.length && u.text.trim().length && (p.slice(0).reverse().forEach(function(U) {
                    Q.ctx.shadowColor = k(U.color), Q.ctx.shadowOffsetX = U.offsetX.number * Q.options.scale, Q.ctx.shadowOffsetY = U.offsetY.number * Q.options.scale, Q.ctx.shadowBlur = U.blur.number, Q.renderTextWithLetterSpacing(u, r.letterSpacing, o);
                  }), Q.ctx.shadowColor = "", Q.ctx.shadowOffsetX = 0, Q.ctx.shadowOffsetY = 0, Q.ctx.shadowBlur = 0), r.textDecorationLine.length && (Q.ctx.fillStyle = k(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(U) {
                    switch (U) {
                      case 1:
                        Q.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top + o), u.bounds.width, 1);
                        break;
                      case 2:
                        Q.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top), u.bounds.width, 1);
                        break;
                      case 3:
                        Q.ctx.fillRect(u.bounds.left, Math.ceil(u.bounds.top + c), u.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && u.text.trim().length && (Q.ctx.strokeStyle = k(r.webkitTextStrokeColor), Q.ctx.lineWidth = r.webkitTextStrokeWidth, Q.ctx.lineJoin = window.chrome ? "miter" : "round", Q.ctx.strokeText(u.text, u.bounds.left, u.bounds.top + o)), Q.ctx.strokeStyle = "", Q.ctx.lineWidth = 0, Q.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(t, r, B) {
      if (B && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var n = wr(t), s = gr(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(B, 0, 0, t.intrinsicWidth, t.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return eA(this, void 0, void 0, function() {
        var r, B, n, s, a, i, g, g, o, c, l, Q, v, C, u, E, w, p, U, g, x, v, E;
        return j(this, function(f) {
          switch (f.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, B = t.curves, n = r.styles, s = 0, a = r.textNodes, f.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [4, this.renderTextNode(i, n)]) : [3, 4];
            case 2:
              f.sent(), f.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(r instanceof an))
                return [3, 8];
              f.label = 5;
            case 5:
              return f.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return g = f.sent(), this.renderReplacedElement(r, B, g), [3, 8];
            case 7:
              return f.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof on && this.renderReplacedElement(r, B, r.canvas), !(r instanceof cn))
                return [3, 12];
              f.label = 9;
            case 9:
              return f.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return g = f.sent(), this.renderReplacedElement(r, B, g), [3, 12];
            case 11:
              return f.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof wn && r.tree ? (o = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, o.render(r.tree)]) : [3, 14];
            case 13:
              c = f.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), f.label = 14;
            case 14:
              if (r instanceof ht && (l = Math.min(r.bounds.width, r.bounds.height), r.type === ir ? r.checked && (this.ctx.save(), this.path([
                new F(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new F(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new F(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new F(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new F(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new F(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new F(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = k(gB), this.ctx.fill(), this.ctx.restore()) : r.type === or && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = k(gB), this.ctx.fill(), this.ctx.restore())), Cl(r) && r.value.length) {
                switch (Q = this.createFontStyle(n), v = Q[0], C = Q[1], u = this.fontMetrics.getMetrics(v, C).baseline, this.ctx.font = v, this.ctx.fillStyle = k(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Fl(r.styles.textAlign), E = wr(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += E.width / 2;
                    break;
                  case 2:
                    w += E.width;
                    break;
                }
                p = E.add(w, 0, 0, -E.height / 2 + 1), this.ctx.save(), this.path([
                  new F(E.left, E.top),
                  new F(E.left + E.width, E.top),
                  new F(E.left + E.width, E.top + E.height),
                  new F(E.left, E.top + E.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new He(r.value, p), n.letterSpacing, u), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!J(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (U = r.styles.listStyleImage, U.type !== 0)
                return [3, 18];
              g = void 0, x = U.url, f.label = 15;
            case 15:
              return f.trys.push([15, 17, , 18]), [4, this.context.cache.match(x)];
            case 16:
              return g = f.sent(), this.ctx.drawImage(g, r.bounds.left - (g.width + 10), r.bounds.top), [3, 18];
            case 17:
              return f.sent(), this.context.logger.error("Error loading list-style-image " + x), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(n)[0], this.ctx.font = v, this.ctx.fillStyle = k(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", E = new KA(r.bounds.left, r.bounds.top + M(r.styles.paddingTop, r.bounds.width), r.bounds.width, zt(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new He(t.listValue, E), n.letterSpacing, zt(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), f.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return eA(this, void 0, void 0, function() {
        var r, B, U, n, s, U, a, i, U, o, c, U, l, Q, U, C, u, U, w, p, U;
        return j(this, function(g) {
          switch (g.label) {
            case 0:
              if (J(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              g.sent(), r = 0, B = t.negativeZIndex, g.label = 2;
            case 2:
              return r < B.length ? (U = B[r], [4, this.renderStack(U)]) : [3, 5];
            case 3:
              g.sent(), g.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              g.sent(), n = 0, s = t.nonInlineLevel, g.label = 7;
            case 7:
              return n < s.length ? (U = s[n], [4, this.renderNode(U)]) : [3, 10];
            case 8:
              g.sent(), g.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              a = 0, i = t.nonPositionedFloats, g.label = 11;
            case 11:
              return a < i.length ? (U = i[a], [4, this.renderStack(U)]) : [3, 14];
            case 12:
              g.sent(), g.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, g.label = 15;
            case 15:
              return o < c.length ? (U = c[o], [4, this.renderStack(U)]) : [3, 18];
            case 16:
              g.sent(), g.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, Q = t.inlineLevel, g.label = 19;
            case 19:
              return l < Q.length ? (U = Q[l], [4, this.renderNode(U)]) : [3, 22];
            case 20:
              g.sent(), g.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              C = 0, u = t.zeroOrAutoZIndexOrTransformedOrOpacity, g.label = 23;
            case 23:
              return C < u.length ? (U = u[C], [4, this.renderStack(U)]) : [3, 26];
            case 24:
              g.sent(), g.label = 25;
            case 25:
              return C++, [3, 23];
            case 26:
              w = 0, p = t.positiveZIndex, g.label = 27;
            case 27:
              return w < p.length ? (U = p[w], [4, this.renderStack(U)]) : [3, 30];
            case 28:
              g.sent(), g.label = 29;
            case 29:
              return w++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, A.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(B, n) {
        var s = aA(B) ? B.start : B;
        n === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y), aA(B) && r.ctx.bezierCurveTo(B.startControl.x, B.startControl.y, B.endControl.x, B.endControl.y, B.end.x, B.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, B, n) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(B, n), this.ctx.fill(), this.ctx.translate(-B, -n);
    }, A.prototype.resizeImage = function(t, r, B) {
      var n;
      if (t.width === r && t.height === B)
        return t;
      var s = (n = this.canvas.ownerDocument) !== null && n !== void 0 ? n : document, a = s.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, B);
      var i = a.getContext("2d");
      return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, B), a;
    }, A.prototype.renderBackgroundImage = function(t) {
      return eA(this, void 0, void 0, function() {
        var r, B, n, s, a, i;
        return j(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, B = function(c) {
                var l, Q, C, V, z, q, D, _, I, u, V, z, q, D, _, w, p, U, g, x, v, E, f, K, I, H, V, Y, AA, D, _, wA, z, q, dA, BA, cA, uA, fA, lA, pA, nA;
                return j(this, function(LA) {
                  switch (LA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, Q = c.url, LA.label = 1;
                    case 1:
                      return LA.trys.push([1, 3, , 4]), [4, n.context.cache.match(Q)];
                    case 2:
                      return l = LA.sent(), [3, 4];
                    case 3:
                      return LA.sent(), n.context.logger.error("Error loading background-image " + Q), [3, 4];
                    case 4:
                      return l && (C = Jr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), V = C[0], z = C[1], q = C[2], D = C[3], _ = C[4], I = n.ctx.createPattern(n.resizeImage(l, D, _), "repeat"), n.renderRepeat(V, I, z, q)), [3, 6];
                    case 5:
                      ei(c) ? (u = Jr(t, r, [null, null, null]), V = u[0], z = u[1], q = u[2], D = u[3], _ = u[4], w = za(c.angle, D, _), p = w[0], U = w[1], g = w[2], x = w[3], v = w[4], E = document.createElement("canvas"), E.width = D, E.height = _, f = E.getContext("2d"), K = f.createLinearGradient(U, x, g, v), Wt(c.stops, p).forEach(function(VA) {
                        return K.addColorStop(VA.stop, k(VA.color));
                      }), f.fillStyle = K, f.fillRect(0, 0, D, _), D > 0 && _ > 0 && (I = n.ctx.createPattern(E, "repeat"), n.renderRepeat(V, I, z, q))) : ri(c) && (H = Jr(t, r, [
                        null,
                        null,
                        null
                      ]), V = H[0], Y = H[1], AA = H[2], D = H[3], _ = H[4], wA = c.position.length === 0 ? [ft] : c.position, z = M(wA[0], D), q = M(wA[wA.length - 1], _), dA = qa(c, z, q, D, _), BA = dA[0], cA = dA[1], BA > 0 && cA > 0 && (uA = n.ctx.createRadialGradient(Y + z, AA + q, 0, Y + z, AA + q, BA), Wt(c.stops, BA * 2).forEach(function(VA) {
                        return uA.addColorStop(VA.stop, k(VA.color));
                      }), n.path(V), n.ctx.fillStyle = uA, BA !== cA ? (fA = t.bounds.left + 0.5 * t.bounds.width, lA = t.bounds.top + 0.5 * t.bounds.height, pA = cA / BA, nA = 1 / pA, n.ctx.save(), n.ctx.translate(fA, lA), n.ctx.transform(1, 0, 0, pA, 0, 0), n.ctx.translate(-fA, -lA), n.ctx.fillRect(Y, nA * (AA - lA) + lA, D, _ * nA), n.ctx.restore()) : n.ctx.fill())), LA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, n = this, s = 0, a = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [5, B(i)]) : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, B) {
      return eA(this, void 0, void 0, function() {
        return j(this, function(n) {
          return this.path(vB(B, r)), this.ctx.fillStyle = k(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, B, n) {
      return eA(this, void 0, void 0, function() {
        var s, a;
        return j(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, B, n)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = sl(n, B), this.path(s), this.ctx.fillStyle = k(t), this.ctx.fill(), a = al(n, B), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return eA(this, void 0, void 0, function() {
        var r, B, n, s, a, i, o, c, l = this;
        return j(this, function(Q) {
          switch (Q.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, B = !RA(r.backgroundColor) || r.backgroundImage.length, n = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = Ul(te(r.backgroundClip, 0), t.curves), B || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), RA(r.backgroundColor) || (this.ctx.fillStyle = k(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              Q.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(C) {
                l.ctx.save();
                var u = Qr(t.curves), w = C.inset ? 0 : ul, p = Bl(u, -w + (C.inset ? 1 : -1) * C.spread.number, (C.inset ? 1 : -1) * C.spread.number, C.spread.number * (C.inset ? -2 : 2), C.spread.number * (C.inset ? -2 : 2));
                C.inset ? (l.path(u), l.ctx.clip(), l.mask(p)) : (l.mask(u), l.ctx.clip(), l.path(p)), l.ctx.shadowOffsetX = C.offsetX.number + w, l.ctx.shadowOffsetY = C.offsetY.number, l.ctx.shadowColor = k(C.color), l.ctx.shadowBlur = C.blur.number, l.ctx.fillStyle = C.inset ? k(C.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), Q.label = 2;
            case 2:
              a = 0, i = 0, o = n, Q.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !RA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return Q.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return Q.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, a, t.curves)];
            case 8:
              return Q.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, a, t.curves)];
            case 10:
              Q.sent(), Q.label = 11;
            case 11:
              a++, Q.label = 12;
            case 12:
              return i++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, B, n, s) {
      return eA(this, void 0, void 0, function() {
        var a, i, o, c, l, Q, C, u, w, p, U, g, x, v, E, f, E, f;
        return j(this, function(K) {
          return this.ctx.save(), a = il(n, B), i = vB(n, B), s === 2 && (this.path(i), this.ctx.clip()), aA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), aA(i[1]) ? (l = i[1].end.x, Q = i[1].end.y) : (l = i[1].x, Q = i[1].y), B === 0 || B === 2 ? C = Math.abs(o - l) : C = Math.abs(c - Q), this.ctx.beginPath(), s === 3 ? this.formatPath(a) : this.formatPath(i.slice(0, 2)), u = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, s === 3 && (u = r, w = r), p = !0, C <= u * 2 ? p = !1 : C <= u * 2 + w ? (U = C / (2 * u + w), u *= U, w *= U) : (g = Math.floor((C + w) / (u + w)), x = (C - g * u) / (g - 1), v = (C - (g + 1) * u) / g, w = v <= 0 || Math.abs(w - x) < Math.abs(w - v) ? x : v), p && (s === 3 ? this.ctx.setLineDash([0, u + w]) : this.ctx.setLineDash([u, w])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = k(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (aA(i[0]) && (E = i[3], f = i[0], this.ctx.beginPath(), this.formatPath([new F(E.end.x, E.end.y), new F(f.start.x, f.start.y)]), this.ctx.stroke()), aA(i[1]) && (E = i[1], f = i[2], this.ctx.beginPath(), this.formatPath([new F(E.end.x, E.end.y), new F(f.start.x, f.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return eA(this, void 0, void 0, function() {
        var r;
        return j(this, function(B) {
          switch (B.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = k(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = nl(t), [4, this.renderStack(r)];
            case 1:
              return B.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Ln)
), Cl = function(e) {
  return e instanceof gn || e instanceof Qn ? !0 : e instanceof ht && e.type !== or && e.type !== ir;
}, Ul = function(e, A) {
  switch (e) {
    case 0:
      return Qr(A);
    case 2:
      return $c(A);
    case 1:
    default:
      return gr(A);
  }
}, Fl = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, hl = ["-apple-system", "system-ui"], dl = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return hl.indexOf(A) === -1;
  }) : e;
}, pl = (
  /** @class */
  function(e) {
    gA(A, e);
    function A(t, r) {
      var B = e.call(this, t, r) || this;
      return B.canvas = r.canvas ? r.canvas : document.createElement("canvas"), B.ctx = B.canvas.getContext("2d"), B.options = r, B.canvas.width = Math.floor(r.width * r.scale), B.canvas.height = Math.floor(r.height * r.scale), B.canvas.style.width = r.width + "px", B.canvas.style.height = r.height + "px", B.ctx.scale(B.options.scale, B.options.scale), B.ctx.translate(-r.x, -r.y), B.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), B;
    }
    return A.prototype.render = function(t) {
      return eA(this, void 0, void 0, function() {
        var r, B;
        return j(this, function(n) {
          switch (n.label) {
            case 0:
              return r = it(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, El(r)];
            case 1:
              return B = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = k(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(B, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Ln)
), El = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Hl = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, De([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, De([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, De([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, De([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), vl = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Hl({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new Jc(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), Il = function(e, A) {
  return A === void 0 && (A = {}), ml(e, A);
};
typeof window < "u" && Hn.setContext(window);
var ml = function(e, A) {
  return eA(void 0, void 0, void 0, function() {
    var t, r, B, n, s, a, i, o, c, l, Q, C, u, w, p, U, g, x, v, E, K, f, K, I, H, V, Y, AA, D, _, wA, z, q, dA, BA, cA, uA, fA, lA, pA;
    return j(this, function(nA) {
      switch (nA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return B = {
            allowTaint: (I = A.allowTaint) !== null && I !== void 0 ? I : !1,
            imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3,
            proxy: A.proxy,
            useCORS: (V = A.useCORS) !== null && V !== void 0 ? V : !1
          }, n = Yr({ logging: (Y = A.logging) !== null && Y !== void 0 ? Y : !0, cache: A.cache }, B), s = {
            windowWidth: (AA = A.windowWidth) !== null && AA !== void 0 ? AA : r.innerWidth,
            windowHeight: (D = A.windowHeight) !== null && D !== void 0 ? D : r.innerHeight,
            scrollX: (_ = A.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
            scrollY: (wA = A.scrollY) !== null && wA !== void 0 ? wA : r.pageYOffset
          }, a = new KA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new vl(n, a), o = (z = A.foreignObjectRendering) !== null && z !== void 0 ? z : !1, c = {
            allowTaint: (q = A.allowTaint) !== null && q !== void 0 ? q : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), l = new pB(i, e, c), Q = l.clonedReferenceElement, Q ? [4, l.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return C = nA.sent(), u = dt(Q) || yc(Q) ? ts(Q.ownerDocument) : ur(i, Q), w = u.width, p = u.height, U = u.left, g = u.top, x = yl(i, Q, A.backgroundColor), v = {
            canvas: A.canvas,
            backgroundColor: x,
            scale: (BA = (dA = A.scale) !== null && dA !== void 0 ? dA : r.devicePixelRatio) !== null && BA !== void 0 ? BA : 1,
            x: ((cA = A.x) !== null && cA !== void 0 ? cA : 0) + U,
            y: ((uA = A.y) !== null && uA !== void 0 ? uA : 0) + g,
            width: (fA = A.width) !== null && fA !== void 0 ? fA : Math.ceil(w),
            height: (lA = A.height) !== null && lA !== void 0 ? lA : Math.ceil(p)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), K = new pl(i, v), [4, K.render(Q)]) : [3, 3];
        case 2:
          return E = nA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + U + "," + g + " with size " + w + "x" + p + " using computed rendering"), i.logger.debug("Starting DOM parsing"), f = fn(i, Q), x === f.styles.backgroundColor && (f.styles.backgroundColor = yA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), K = new fl(i, v), [4, K.render(f)];
        case 4:
          E = nA.sent(), nA.label = 5;
        case 5:
          return (!((pA = A.removeContainer) !== null && pA !== void 0) || pA) && (pB.destroy(C) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, E];
      }
    });
  });
}, yl = function(e, A, t) {
  var r = A.ownerDocument, B = r.documentElement ? pe(e, getComputedStyle(r.documentElement).backgroundColor) : yA.TRANSPARENT, n = r.body ? pe(e, getComputedStyle(r.body).backgroundColor) : yA.TRANSPARENT, s = typeof t == "string" ? pe(e, t) : t === null ? yA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? RA(B) ? RA(n) ? s : n : B : s;
};
class Kl extends Jn {
  constructor() {
    super(...arguments);
    /**
     * 是否支持拖拽
     */
    vA(this, "isDrag", !1);
    /**
     * 是否多选
     */
    vA(this, "multiple", !1);
    /**
     * 接受上传的文件类型
     */
    vA(this, "accept", "images/*");
    /**
     * 上传参数
     */
    vA(this, "uploadParams");
    /**
     * 下载参数
     */
    vA(this, "exportParams");
    /**
     * 截取形状，默认为圆形，IDRECT为证件矩形
     *
     * @type {('DEFAULT' | 'IDRECT')}
     * @memberof AvatarUploadController
     */
    vA(this, "cutShape", "DEFAULT");
  }
  async onInit() {
    if (await super.onInit(), this.editorParams) {
      const { isDrag: t, accept: r, uploadParams: B, exportParams: n, cutShape: s } = this.editorParams;
      if (s && (this.cutShape = s), t && (this.isDrag = !!t), r && (this.accept = r), B)
        try {
          this.uploadParams = JSON.parse(B);
        } catch (a) {
          throw new It(
            B,
            "配置uploadParams没有按标准JSON格式"
          );
        }
      if (n)
        try {
          this.exportParams = JSON.parse(n);
        } catch (a) {
          throw new It(
            n,
            "配置exportParams没有按标准JSON格式"
          );
        }
    }
  }
  /**
   * 创建指定区域的截图并转为URL
   *
   * @param {HTMLElement} croparea
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @return {*}
   * @memberof AvatarUploadController
   */
  async createCropImageUrl(t, r, B, n) {
    let s, a, i, o;
    this.cutShape === "DEFAULT" ? (s = r - n, a = B - n, i = n * 2, o = n * 2) : (s = r - n, a = 0, i = n * 2, o = 300);
    const c = await Il(t, {
      x: s,
      // 指定截取区域的左上角 x 坐标
      y: a,
      // 指定截取区域的左上角 y 坐标
      width: i,
      // 指定截取区域的宽度
      height: o
      // 指定截取区域的高度
    });
    if (c) {
      if (this.cutShape === "IDRECT")
        return c.toDataURL("image/png");
      const l = document.createElement("canvas"), Q = l.getContext("2d");
      if (l.width = i, l.height = o, Q)
        return Q.beginPath(), Q.arc(n, n, n, 0, Math.PI * 2), Q.closePath(), Q.clip(), Q.drawImage(c, 0, 0), l.toDataURL("image/png");
    }
  }
  /**
   *将数据 URL 转换为 Blob 对象
   *
   * @param {string} dataURL
   * @return {*}
   * @memberof AvatarUploadController
   */
  dataURLtoBlob(t) {
    const r = atob(t.split(",")[1]), B = t.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(r.length), s = new Uint8Array(n);
    for (let a = 0; a < r.length; a++)
      s[a] = r.charCodeAt(a);
    return new Blob([n], { type: B });
  }
}
class Ll {
  constructor() {
    vA(this, "formEditor", "AvatarUpload");
    vA(this, "gridEditor", "AvatarUpload");
  }
  async createController(A, t) {
    const r = new Kl(A, t);
    return await r.init(), r;
  }
}
const Ml = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
  install(e) {
    e.component(mt.name, mt), kn(
      "EDITOR_CUSTOMSTYLE_AVATAR_UPLOAD",
      () => new Ll()
    );
  }
};
export {
  Ml as default
};
