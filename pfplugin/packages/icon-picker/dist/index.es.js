import './style.css';
var K = Object.defineProperty;
var X = (t, c, i) => c in t ? K(t, c, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[c] = i;
var W = (t, c, i) => (X(t, typeof c != "symbol" ? c + "" : c, i), i);
import { EditorController as Q, registerEditorProvider as _ } from "@ibiz-template/runtime";
import { defineComponent as J, ref as f, computed as g, watch as O, createVNode as a, resolveComponent as u, mergeProps as Z, createTextVNode as q } from "vue";
import { getInputProps as ee, getEditorEmits as ie, useNamespace as ae } from "@ibiz-template/vue3-util";
import { RuntimeModelError as re } from "@ibiz-template/core";
const P = /* @__PURE__ */ J({
  name: "IconPicker",
  props: ee(),
  emits: ie(),
  setup: (t, {
    emit: c
  }) => {
    const i = ae("icon-picker"), r = t.controller, n = r.model, d = f(!1), l = f(""), s = f(""), b = f(0);
    let y = "input";
    n.editorParams && n.editorParams.SHOWMODE && (y = n.editorParams.SHOWMODE);
    const w = f(!1), k = f(), C = g(() => {
      switch (n.editorType) {
        case "TEXTBOX":
          return "text";
        case "PASSWORD":
          return "password";
        case "TEXTAREA":
        case "TEXTAREA_10":
          return "textarea";
        default:
          return "string";
      }
    }), L = g(() => !!(t.controlParams && t.controlParams.editmode === "hover" && !t.readonly)), m = f("");
    r.initIconList();
    const T = g(() => ({
      cssClass: m.value || "fa fa-plus"
    })), B = (e) => {
      e.stopPropagation(), m.value = "", s.value = "", c("change", "");
    };
    O(() => t.value, (e, o) => {
      e !== o && (e == null ? (m.value = "", s.value = "") : (m.value = e.toString(), s.value = e.toString()));
    }, {
      immediate: !0
    });
    const v = (e) => {
      e ? w.value = e : setTimeout(() => {
        w.value = e;
      }, 100);
    };
    let p;
    const F = (e) => {
      p !== e && c("change", e), p = void 0;
    }, D = (e) => {
      e && e.code === "Enter" && (c("enter", e), k.value.$el.dispatchEvent(e));
    }, E = (e) => {
      p = e.target.value, p != t.value && c("change", p), c("blur", e), v(!1);
    };
    O(k, (e) => {
      if (t.autoFocus && e) {
        const o = C.value === "textarea" ? "textarea" : "input";
        e.$el.getElementsByTagName(o)[0].focus();
      }
    });
    const I = g(() => {
      if (r.iconList.length > 0) {
        const e = Number(b.value) || 0, o = r.iconList[e];
        let h = [];
        return o && o.children && (h = o.children), l.value && (h = h.filter((x) => {
          const $ = "fa fa-".concat(x.id);
          return !!(x.id && $.includes(l.value));
        })), h;
      }
      return [];
    }), M = () => {
      d.value = !0;
    }, H = (e) => {
      c("focus", e), v(!0);
    }, U = g(() => {
      const {
        unitName: e
      } = t.controller.parent;
      let o = "".concat(t.controller.formatValue(m.value));
      return o && e && (o += e), o;
    }), R = g(() => r.model.editorParams && r.model.editorParams.autocomplete && r.toBoolean(r.model.editorParams.autocomplete) ? "on" : "new-password"), S = () => {
      l.value = "", b.value = 0, d.value = !1;
    }, z = () => {
      s.value && c("change", s.value), l.value = "", b.value = 0, d.value = !1;
    }, G = (e) => {
      b.value = e;
    }, V = (e) => {
      e.id && (s.value = "fa fa-".concat(e.id));
    }, j = (e) => a("div", {
      class: i.em("modal-box", "icon-item")
    }, [a("div", {
      class: [i.em("modal-box", "icon-item-box"), i.is("active", s.value === "fa fa-".concat(e.id))],
      title: "fa fa-".concat(e.id),
      onClick: () => V(e)
    }, [a("p", {
      class: "item-icon"
    }, [a("i", {
      class: "fa fa-".concat(e.id)
    }, null)]), a("p", {
      class: "icon-tip"
    }, [e.id])])]), N = () => a("div", {
      class: i.e("modal-box")
    }, [a("div", {
      class: i.em("modal-box", "search-input")
    }, [a(u("el-input"), {
      modelValue: l.value,
      "onUpdate:modelValue": (e) => l.value = e,
      placeholder: "请输入图标名称"
    }, null)]), a("div", {
      class: i.em("modal-box", "icon-menu")
    }, [a(u("el-menu"), {
      "default-active": String(b.value),
      mode: "horizontal",
      onSelect: G
    }, {
      default: () => r.iconList.map((e, o) => a(u("el-menu-item"), {
        title: e.label,
        key: o,
        index: o.toString()
      }, {
        default: () => [e.type]
      }))
    })]), a("div", {
      class: i.em("modal-box", "icon-list")
    }, [I.value.map((e) => j(e))])]), Y = () => a("div", {
      class: i.e("footer")
    }, [a(u("el-button"), {
      type: "text",
      onClick: S
    }, {
      default: () => [q("取消")]
    }), a(u("el-button"), {
      type: "primary",
      onClick: z
    }, {
      default: () => [q("确认")]
    })]);
    return {
      c: r,
      ns: i,
      type: C,
      currentVal: m,
      readonlyText: U,
      handleChange: F,
      handleKeyUp: D,
      onBlur: E,
      onFocus: H,
      editorRef: k,
      shouldAutoComplete: R,
      isEditable: w,
      setEditable: v,
      iconSelectorState: d,
      renderIconModal: () => a(u("el-dialog"), {
        title: "请选择图标",
        modelValue: d.value,
        "onUpdate:modelValue": (e) => d.value = e,
        "onBefore-close": S,
        modal: !1,
        width: "80%"
      }, {
        default: () => N(),
        footer: () => Y()
      }),
      openDialog: M,
      showFormDefaultContent: L,
      showMode: y,
      curSysImage: T,
      onClearIcon: B
    };
  },
  render() {
    const {
      editorWidth: t,
      editorHeight: c
    } = this.c.model, i = this.showMode === "span";
    let r = null;
    this.readonly ? r = this.readonlyText : r = a(u("el-input"), Z({
      ref: "editorRef",
      clearable: !0,
      modelValue: this.currentVal,
      "onUpdate:modelValue": (d) => this.currentVal = d,
      placeholder: this.c.placeHolder,
      type: this.type,
      resize: "none",
      maxlength: this.c.model.maxLength,
      minlength: this.c.model.minLength,
      onChange: this.handleChange,
      onKeyup: this.handleKeyUp,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      class: this.ns.b("input"),
      disabled: this.disabled,
      autocomplete: this.shouldAutoComplete
    }, this.$attrs), {
      suffix: () => a(u("ion-icon"), {
        onClick: this.openDialog,
        name: "search"
      }, null)
    }), i && (r = a("div", {
      class: this.ns.e("icon"),
      onClick: this.openDialog
    }, [a(u("iBizIcon"), {
      icon: this.curSysImage
    }, null), this.currentVal ? a("svg", {
      class: this.ns.em("icon", "clear"),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024",
      width: "1em",
      height: "1em",
      onClick: this.onClearIcon
    }, [a("path", {
      d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
    }, null)]) : ""]));
    const n = a("div", {
      class: this.ns.b("form-default-content")
    }, [this.currentVal ? this.type === "password" ? this.currentVal.split("").map((d) => "•") : this.currentVal : "-"]);
    return a("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : "", this.ns.is("editable", this.isEditable), this.ns.is("show-default", this.showFormDefaultContent), this.ns.is("span", i)],
      style: {
        width: t ? "".concat(t, "px") : "",
        height: c ? "".concat(c, "px") : ""
      }
    }, [this.showFormDefaultContent && n, r, this.iconSelectorState && this.renderIconModal()]);
  }
}), te = [
  {
    name: "Glass",
    id: "glass",
    unicode: "f000",
    created: 1,
    filter: [
      "martini",
      "drink",
      "bar",
      "alcohol",
      "liquor"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Music",
    id: "music",
    unicode: "f001",
    created: 1,
    filter: [
      "note",
      "sound"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Search",
    id: "search",
    unicode: "f002",
    created: 1,
    filter: [
      "magnify",
      "zoom",
      "enlarge",
      "bigger"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Envelope Outlined",
    id: "envelope-o",
    unicode: "f003",
    created: 1,
    filter: [
      "email",
      "e-mail",
      "letter",
      "support",
      "mail",
      "message",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Heart",
    id: "heart",
    unicode: "f004",
    created: 1,
    filter: [
      "love",
      "like",
      "favorite"
    ],
    categories: [
      "Web应用程序图标",
      "医疗图标"
    ]
  },
  {
    name: "Star",
    id: "star",
    unicode: "f005",
    created: 1,
    filter: [
      "award",
      "achievement",
      "night",
      "rating",
      "score",
      "favorite"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Star Outlined",
    id: "star-o",
    unicode: "f006",
    created: 1,
    filter: [
      "award",
      "achievement",
      "night",
      "rating",
      "score",
      "favorite"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "User",
    id: "user",
    unicode: "f007",
    created: 1,
    filter: [
      "person",
      "man",
      "head",
      "profile"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Film",
    id: "film",
    unicode: "f008",
    created: 1,
    filter: [
      "movie"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "th-large",
    id: "th-large",
    unicode: "f009",
    created: 1,
    filter: [
      "blocks",
      "squares",
      "boxes",
      "grid"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "th",
    id: "th",
    unicode: "f00a",
    created: 1,
    filter: [
      "blocks",
      "squares",
      "boxes",
      "grid"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "th-list",
    id: "th-list",
    unicode: "f00b",
    created: 1,
    filter: [
      "ul",
      "ol",
      "checklist",
      "finished",
      "completed",
      "done",
      "todo"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Check",
    id: "check",
    unicode: "f00c",
    created: 1,
    filter: [
      "checkmark",
      "done",
      "todo",
      "agree",
      "accept",
      "confirm",
      "tick",
      "ok"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Times",
    id: "times",
    unicode: "f00d",
    created: 1,
    aliases: [
      "remove",
      "close"
    ],
    filter: [
      "close",
      "exit",
      "x",
      "cross"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Search Plus",
    id: "search-plus",
    unicode: "f00e",
    created: 1,
    filter: [
      "magnify",
      "zoom",
      "enlarge",
      "bigger"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Search Minus",
    id: "search-minus",
    unicode: "f010",
    created: 1,
    filter: [
      "magnify",
      "minify",
      "zoom",
      "smaller"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Power Off",
    id: "power-off",
    unicode: "f011",
    created: 1,
    filter: [
      "on"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "signal",
    id: "signal",
    unicode: "f012",
    created: 1,
    filter: [
      "graph",
      "bars"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "cog",
    id: "cog",
    unicode: "f013",
    created: 1,
    filter: [
      "settings"
    ],
    aliases: [
      "gear"
    ],
    categories: [
      "Web应用程序图标",
      "图表图标"
    ]
  },
  {
    name: "Trash Outlined",
    id: "trash-o",
    unicode: "f014",
    created: 1,
    filter: [
      "garbage",
      "delete",
      "remove",
      "trash",
      "hide"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "home",
    id: "home",
    unicode: "f015",
    created: 1,
    filter: [
      "main",
      "house"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "File Outlined",
    id: "file-o",
    unicode: "f016",
    created: 1,
    filter: [
      "new",
      "page",
      "pdf",
      "document"
    ],
    categories: [
      "文本编辑器图标",
      "文件类型图标"
    ]
  },
  {
    name: "Clock Outlined",
    id: "clock-o",
    unicode: "f017",
    created: 1,
    filter: [
      "watch",
      "timer",
      "late",
      "timestamp"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "road",
    id: "road",
    unicode: "f018",
    created: 1,
    filter: [
      "street"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Download",
    id: "download",
    unicode: "f019",
    created: 1,
    filter: [
      "import"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Arrow Circle Outlined Down",
    id: "arrow-circle-o-down",
    unicode: "f01a",
    created: 1,
    filter: [
      "download"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Arrow Circle Outlined Up",
    id: "arrow-circle-o-up",
    unicode: "f01b",
    created: 1,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "inbox",
    id: "inbox",
    unicode: "f01c",
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Play Circle Outlined",
    id: "play-circle-o",
    unicode: "f01d",
    created: 1,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Repeat",
    id: "repeat",
    unicode: "f01e",
    created: 1,
    filter: [
      "redo",
      "forward"
    ],
    aliases: [
      "rotate-right"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "refresh",
    id: "refresh",
    unicode: "f021",
    created: 1,
    filter: [
      "reload",
      "sync"
    ],
    categories: [
      "Web应用程序图标",
      "微图标"
    ]
  },
  {
    name: "list-alt",
    id: "list-alt",
    unicode: "f022",
    created: 1,
    filter: [
      "ul",
      "ol",
      "checklist",
      "finished",
      "completed",
      "done",
      "todo"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "lock",
    id: "lock",
    unicode: "f023",
    created: 1,
    filter: [
      "protect",
      "admin",
      "security"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "flag",
    id: "flag",
    unicode: "f024",
    created: 1,
    filter: [
      "report",
      "notification",
      "notify"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "headphones",
    id: "headphones",
    unicode: "f025",
    created: 1,
    filter: [
      "sound",
      "listen",
      "music",
      "audio"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "volume-off",
    id: "volume-off",
    unicode: "f026",
    created: 1,
    filter: [
      "audio",
      "mute",
      "sound",
      "music"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "volume-down",
    id: "volume-down",
    unicode: "f027",
    created: 1,
    filter: [
      "audio",
      "lower",
      "quieter",
      "sound",
      "music"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "volume-up",
    id: "volume-up",
    unicode: "f028",
    created: 1,
    filter: [
      "audio",
      "higher",
      "louder",
      "sound",
      "music"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "qrcode",
    id: "qrcode",
    unicode: "f029",
    created: 1,
    filter: [
      "scan"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "barcode",
    id: "barcode",
    unicode: "f02a",
    created: 1,
    filter: [
      "scan"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "tag",
    id: "tag",
    unicode: "f02b",
    created: 1,
    filter: [
      "label"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "tags",
    id: "tags",
    unicode: "f02c",
    created: 1,
    filter: [
      "labels"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "book",
    id: "book",
    unicode: "f02d",
    created: 1,
    filter: [
      "read",
      "documentation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "bookmark",
    id: "bookmark",
    unicode: "f02e",
    created: 1,
    filter: [
      "save"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "print",
    id: "print",
    unicode: "f02f",
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "camera",
    id: "camera",
    unicode: "f030",
    created: 1,
    filter: [
      "photo",
      "picture",
      "record"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "font",
    id: "font",
    unicode: "f031",
    created: 1,
    filter: [
      "text"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "bold",
    id: "bold",
    unicode: "f032",
    created: 1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "italic",
    id: "italic",
    unicode: "f033",
    created: 1,
    filter: [
      "italics"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "text-height",
    id: "text-height",
    unicode: "f034",
    created: 1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "text-width",
    id: "text-width",
    unicode: "f035",
    created: 1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "align-left",
    id: "align-left",
    unicode: "f036",
    created: 1,
    filter: [
      "text"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "align-center",
    id: "align-center",
    unicode: "f037",
    created: 1,
    filter: [
      "middle",
      "text"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "align-right",
    id: "align-right",
    unicode: "f038",
    created: 1,
    filter: [
      "text"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "align-justify",
    id: "align-justify",
    unicode: "f039",
    created: 1,
    filter: [
      "text"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "list",
    id: "list",
    unicode: "f03a",
    created: 1,
    filter: [
      "ul",
      "ol",
      "checklist",
      "finished",
      "completed",
      "done",
      "todo"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Outdent",
    id: "outdent",
    unicode: "f03b",
    created: 1,
    aliases: [
      "dedent"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Indent",
    id: "indent",
    unicode: "f03c",
    created: 1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Video Camera",
    id: "video-camera",
    unicode: "f03d",
    created: 1,
    filter: [
      "film",
      "movie",
      "record"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Picture Outlined",
    id: "picture-o",
    unicode: "f03e",
    created: 1,
    aliases: [
      "photo",
      "image"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "pencil",
    id: "pencil",
    unicode: "f040",
    created: 1,
    filter: [
      "write",
      "edit",
      "update"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "map-marker",
    id: "map-marker",
    unicode: "f041",
    created: 1,
    filter: [
      "map",
      "pin",
      "location",
      "coordinates",
      "localize",
      "address",
      "travel",
      "where",
      "place"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "adjust",
    id: "adjust",
    unicode: "f042",
    created: 1,
    filter: [
      "contrast"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "tint",
    id: "tint",
    unicode: "f043",
    created: 1,
    filter: [
      "raindrop",
      "waterdrop",
      "drop",
      "droplet"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Pencil Square Outlined",
    id: "pencil-square-o",
    unicode: "f044",
    created: 1,
    filter: [
      "write",
      "edit",
      "update"
    ],
    aliases: [
      "edit"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Share Square Outlined",
    id: "share-square-o",
    unicode: "f045",
    created: 1,
    filter: [
      "social",
      "send",
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Check Square Outlined",
    id: "check-square-o",
    unicode: "f046",
    created: 1,
    filter: [
      "todo",
      "done",
      "agree",
      "accept",
      "confirm",
      "ok"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Arrows",
    id: "arrows",
    unicode: "f047",
    created: 1,
    filter: [
      "move",
      "reorder",
      "resize"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "step-backward",
    id: "step-backward",
    unicode: "f048",
    created: 1,
    filter: [
      "rewind",
      "previous",
      "beginning",
      "start",
      "first"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "fast-backward",
    id: "fast-backward",
    unicode: "f049",
    created: 1,
    filter: [
      "rewind",
      "previous",
      "beginning",
      "start",
      "first"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "backward",
    id: "backward",
    unicode: "f04a",
    created: 1,
    filter: [
      "rewind",
      "previous"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "play",
    id: "play",
    unicode: "f04b",
    created: 1,
    filter: [
      "start",
      "playing",
      "music",
      "sound"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "pause",
    id: "pause",
    unicode: "f04c",
    created: 1,
    filter: [
      "wait"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "stop",
    id: "stop",
    unicode: "f04d",
    created: 1,
    filter: [
      "block",
      "box",
      "square"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "forward",
    id: "forward",
    unicode: "f04e",
    created: 1,
    filter: [
      "forward",
      "next"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "fast-forward",
    id: "fast-forward",
    unicode: "f050",
    created: 1,
    filter: [
      "next",
      "end",
      "last"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "step-forward",
    id: "step-forward",
    unicode: "f051",
    created: 1,
    filter: [
      "next",
      "end",
      "last"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "eject",
    id: "eject",
    unicode: "f052",
    created: 1,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "chevron-left",
    id: "chevron-left",
    unicode: "f053",
    created: 1,
    filter: [
      "bracket",
      "previous",
      "back"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "chevron-right",
    id: "chevron-right",
    unicode: "f054",
    created: 1,
    filter: [
      "bracket",
      "next",
      "forward"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Plus Circle",
    id: "plus-circle",
    unicode: "f055",
    created: 1,
    filter: [
      "add",
      "new",
      "create",
      "expand"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Minus Circle",
    id: "minus-circle",
    unicode: "f056",
    created: 1,
    filter: [
      "delete",
      "remove",
      "trash",
      "hide"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Times Circle",
    id: "times-circle",
    unicode: "f057",
    created: 1,
    filter: [
      "close",
      "exit",
      "x"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Check Circle",
    id: "check-circle",
    unicode: "f058",
    created: 1,
    filter: [
      "todo",
      "done",
      "agree",
      "accept",
      "confirm",
      "ok"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Question Circle",
    id: "question-circle",
    unicode: "f059",
    filter: [
      "help",
      "information",
      "unknown",
      "support"
    ],
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Info Circle",
    id: "info-circle",
    unicode: "f05a",
    created: 1,
    filter: [
      "help",
      "information",
      "more",
      "details"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Crosshairs",
    id: "crosshairs",
    unicode: "f05b",
    created: 1,
    filter: [
      "picker"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Times Circle Outlined",
    id: "times-circle-o",
    unicode: "f05c",
    created: 1,
    filter: [
      "close",
      "exit",
      "x"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Check Circle Outlined",
    id: "check-circle-o",
    unicode: "f05d",
    created: 1,
    filter: [
      "todo",
      "done",
      "agree",
      "accept",
      "confirm",
      "ok"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "ban",
    id: "ban",
    unicode: "f05e",
    created: 1,
    filter: [
      "delete",
      "remove",
      "trash",
      "hide",
      "block",
      "stop",
      "abort",
      "cancel"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "arrow-left",
    id: "arrow-left",
    unicode: "f060",
    created: 1,
    filter: [
      "previous",
      "back"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "arrow-right",
    id: "arrow-right",
    unicode: "f061",
    created: 1,
    filter: [
      "next",
      "forward"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "arrow-up",
    id: "arrow-up",
    unicode: "f062",
    created: 1,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "arrow-down",
    id: "arrow-down",
    unicode: "f063",
    created: 1,
    filter: [
      "download"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Share",
    id: "share",
    unicode: "f064",
    created: 1,
    aliases: [
      "mail-forward"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Expand",
    id: "expand",
    unicode: "f065",
    created: 1,
    filter: [
      "enlarge",
      "bigger",
      "resize"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Compress",
    id: "compress",
    unicode: "f066",
    created: 1,
    filter: [
      "collapse",
      "combine",
      "contract",
      "merge",
      "smaller"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "plus",
    id: "plus",
    unicode: "f067",
    created: 1,
    filter: [
      "add",
      "new",
      "create",
      "expand"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "minus",
    id: "minus",
    unicode: "f068",
    created: 1,
    filter: [
      "hide",
      "minify",
      "delete",
      "remove",
      "trash",
      "hide",
      "collapse"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "asterisk",
    id: "asterisk",
    unicode: "f069",
    created: 1,
    filter: [
      "details"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Exclamation Circle",
    id: "exclamation-circle",
    unicode: "f06a",
    created: 1,
    filter: [
      "warning",
      "error",
      "problem",
      "notification",
      "alert"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "gift",
    id: "gift",
    unicode: "f06b",
    created: 1,
    filter: [
      "present"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "leaf",
    id: "leaf",
    unicode: "f06c",
    created: 1,
    filter: [
      "eco",
      "nature",
      "plant"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "fire",
    id: "fire",
    unicode: "f06d",
    created: 1,
    filter: [
      "flame",
      "hot",
      "popular"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Eye",
    id: "eye",
    unicode: "f06e",
    created: 1,
    filter: [
      "show",
      "visible",
      "views"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Eye Slash",
    id: "eye-slash",
    unicode: "f070",
    created: 1,
    filter: [
      "toggle",
      "show",
      "hide",
      "visible",
      "visiblity",
      "views"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Exclamation Triangle",
    id: "exclamation-triangle",
    unicode: "f071",
    created: 1,
    filter: [
      "warning",
      "error",
      "problem",
      "notification",
      "alert"
    ],
    aliases: [
      "warning"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "plane",
    id: "plane",
    unicode: "f072",
    created: 1,
    filter: [
      "travel",
      "trip",
      "location",
      "destination",
      "airplane",
      "fly",
      "mode"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "calendar",
    id: "calendar",
    unicode: "f073",
    created: 1,
    filter: [
      "date",
      "time",
      "when",
      "event"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "random",
    id: "random",
    unicode: "f074",
    created: 1,
    filter: [
      "sort",
      "shuffle"
    ],
    categories: [
      "Web应用程序图标",
      "视频播放器图标"
    ]
  },
  {
    name: "comment",
    id: "comment",
    unicode: "f075",
    created: 1,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "magnet",
    id: "magnet",
    unicode: "f076",
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "chevron-up",
    id: "chevron-up",
    unicode: "f077",
    created: 1,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "chevron-down",
    id: "chevron-down",
    unicode: "f078",
    created: 1,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "retweet",
    id: "retweet",
    unicode: "f079",
    created: 1,
    filter: [
      "refresh",
      "reload",
      "share"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "shopping-cart",
    id: "shopping-cart",
    unicode: "f07a",
    created: 1,
    filter: [
      "checkout",
      "buy",
      "purchase",
      "payment"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Folder",
    id: "folder",
    unicode: "f07b",
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Folder Open",
    id: "folder-open",
    unicode: "f07c",
    created: 1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Arrows Vertical",
    id: "arrows-v",
    unicode: "f07d",
    created: 1,
    filter: [
      "resize"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Arrows Horizontal",
    id: "arrows-h",
    unicode: "f07e",
    created: 1,
    filter: [
      "resize"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Bar Chart",
    id: "bar-chart",
    unicode: "f080",
    created: 1,
    aliases: [
      "bar-chart-o"
    ],
    filter: [
      "graph",
      "analytics",
      "statistics"
    ],
    categories: [
      "Web应用程序图标",
      "图表图标"
    ]
  },
  {
    name: "Twitter Square",
    id: "twitter-square",
    unicode: "f081",
    created: 1,
    filter: [
      "tweet",
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Facebook Square",
    id: "facebook-square",
    unicode: "f082",
    created: 1,
    filter: [
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "camera-retro",
    id: "camera-retro",
    unicode: "f083",
    created: 1,
    filter: [
      "photo",
      "picture",
      "record"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "key",
    id: "key",
    unicode: "f084",
    created: 1,
    filter: [
      "unlock",
      "password"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "cogs",
    id: "cogs",
    unicode: "f085",
    created: 1,
    aliases: [
      "gears"
    ],
    filter: [
      "settings"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "comments",
    id: "comments",
    unicode: "f086",
    created: 1,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Thumbs Up Outlined",
    id: "thumbs-o-up",
    unicode: "f087",
    created: 1,
    filter: [
      "like",
      "approve",
      "favorite",
      "agree",
      "hand"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Thumbs Down Outlined",
    id: "thumbs-o-down",
    unicode: "f088",
    created: 1,
    filter: [
      "dislike",
      "disapprove",
      "disagree",
      "hand"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "star-half",
    id: "star-half",
    unicode: "f089",
    created: 1,
    filter: [
      "award",
      "achievement",
      "rating",
      "score"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Heart Outlined",
    id: "heart-o",
    unicode: "f08a",
    created: 1,
    filter: [
      "love",
      "like",
      "favorite"
    ],
    categories: [
      "Web应用程序图标",
      "医疗图标"
    ]
  },
  {
    name: "Sign Out",
    id: "sign-out",
    unicode: "f08b",
    created: 1,
    filter: [
      "log out",
      "logout",
      "leave",
      "exit",
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "LinkedIn Square",
    id: "linkedin-square",
    unicode: "f08c",
    created: 1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Thumb Tack",
    id: "thumb-tack",
    unicode: "f08d",
    created: 1,
    filter: [
      "marker",
      "pin",
      "location",
      "coordinates"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "External Link",
    id: "external-link",
    unicode: "f08e",
    created: 1,
    filter: [
      "open",
      "new"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sign In",
    id: "sign-in",
    unicode: "f090",
    created: 1,
    filter: [
      "enter",
      "join",
      "log in",
      "login",
      "sign up",
      "sign in",
      "signin",
      "signup",
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "trophy",
    id: "trophy",
    unicode: "f091",
    created: 1,
    filter: [
      "award",
      "achievement",
      "cup",
      "winner",
      "game"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "GitHub Square",
    id: "github-square",
    unicode: "f092",
    created: 1,
    url: "github.com/logos",
    filter: [
      "octocat"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Upload",
    id: "upload",
    unicode: "f093",
    created: 1,
    filter: [
      "import"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Lemon Outlined",
    id: "lemon-o",
    unicode: "f094",
    created: 1,
    filter: [
      "food"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Phone",
    id: "phone",
    unicode: "f095",
    created: 2,
    filter: [
      "call",
      "voice",
      "number",
      "support",
      "earphone",
      "telephone"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Square Outlined",
    id: "square-o",
    unicode: "f096",
    created: 2,
    filter: [
      "block",
      "square",
      "box"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Bookmark Outlined",
    id: "bookmark-o",
    unicode: "f097",
    created: 2,
    filter: [
      "save"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Phone Square",
    id: "phone-square",
    unicode: "f098",
    created: 2,
    filter: [
      "call",
      "voice",
      "number",
      "support",
      "telephone"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Twitter",
    id: "twitter",
    unicode: "f099",
    created: 2,
    filter: [
      "tweet",
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Facebook",
    id: "facebook",
    unicode: "f09a",
    created: 2,
    aliases: [
      "facebook-f"
    ],
    filter: [
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "GitHub",
    id: "github",
    unicode: "f09b",
    created: 2,
    url: "github.com/logos",
    filter: [
      "octocat"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "unlock",
    id: "unlock",
    unicode: "f09c",
    created: 2,
    filter: [
      "protect",
      "admin",
      "password",
      "lock"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "credit-card",
    id: "credit-card",
    unicode: "f09d",
    created: 2,
    filter: [
      "money",
      "buy",
      "debit",
      "checkout",
      "purchase",
      "payment"
    ],
    categories: [
      "Web应用程序图标",
      "支付图标"
    ]
  },
  {
    name: "rss",
    id: "rss",
    unicode: "f09e",
    created: 2,
    filter: [
      "blog"
    ],
    aliases: [
      "feed"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "HDD",
    id: "hdd-o",
    unicode: "f0a0",
    created: 2,
    filter: [
      "harddrive",
      "hard drive",
      "storage",
      "save"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "bullhorn",
    id: "bullhorn",
    unicode: "f0a1",
    created: 2,
    filter: [
      "announcement",
      "share",
      "broadcast",
      "louder",
      "megaphone"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "bell",
    id: "bell",
    unicode: "f0f3",
    created: 2,
    filter: [
      "alert",
      "reminder",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "certificate",
    id: "certificate",
    unicode: "f0a3",
    created: 2,
    filter: [
      "badge",
      "star"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hand Outlined Right",
    id: "hand-o-right",
    unicode: "f0a4",
    created: 2,
    filter: [
      "point",
      "right",
      "next",
      "forward",
      "finger"
    ],
    categories: [
      "方向图标",
      "手图标"
    ]
  },
  {
    name: "Hand Outlined Left",
    id: "hand-o-left",
    unicode: "f0a5",
    created: 2,
    filter: [
      "point",
      "left",
      "previous",
      "back",
      "finger"
    ],
    categories: [
      "方向图标",
      "手图标"
    ]
  },
  {
    name: "Hand Outlined Up",
    id: "hand-o-up",
    unicode: "f0a6",
    created: 2,
    filter: [
      "point",
      "finger"
    ],
    categories: [
      "方向图标",
      "手图标"
    ]
  },
  {
    name: "Hand Outlined Down",
    id: "hand-o-down",
    unicode: "f0a7",
    created: 2,
    filter: [
      "point",
      "finger"
    ],
    categories: [
      "方向图标",
      "手图标"
    ]
  },
  {
    name: "Arrow Circle Left",
    id: "arrow-circle-left",
    unicode: "f0a8",
    created: 2,
    filter: [
      "previous",
      "back"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Arrow Circle Right",
    id: "arrow-circle-right",
    unicode: "f0a9",
    created: 2,
    filter: [
      "next",
      "forward"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Arrow Circle Up",
    id: "arrow-circle-up",
    unicode: "f0aa",
    created: 2,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Arrow Circle Down",
    id: "arrow-circle-down",
    unicode: "f0ab",
    created: 2,
    filter: [
      "download"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Globe",
    id: "globe",
    unicode: "f0ac",
    created: 2,
    filter: [
      "world",
      "planet",
      "map",
      "place",
      "travel",
      "earth",
      "global",
      "translate",
      "all",
      "language",
      "localize",
      "location",
      "coordinates",
      "country"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Wrench",
    id: "wrench",
    unicode: "f0ad",
    created: 2,
    filter: [
      "settings",
      "fix",
      "update",
      "spanner"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Tasks",
    id: "tasks",
    unicode: "f0ae",
    created: 2,
    filter: [
      "progress",
      "loading",
      "downloading",
      "downloads",
      "settings"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Filter",
    id: "filter",
    unicode: "f0b0",
    created: 2,
    filter: [
      "funnel",
      "options"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Briefcase",
    id: "briefcase",
    unicode: "f0b1",
    created: 2,
    filter: [
      "work",
      "business",
      "office",
      "luggage",
      "bag"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Arrows Alt",
    id: "arrows-alt",
    unicode: "f0b2",
    created: 2,
    filter: [
      "expand",
      "enlarge",
      "fullscreen",
      "bigger",
      "move",
      "reorder",
      "resize",
      "arrow"
    ],
    categories: [
      "视频播放器图标",
      "方向图标"
    ]
  },
  {
    name: "Users",
    id: "users",
    unicode: "f0c0",
    created: 2,
    filter: [
      "people",
      "profiles",
      "persons"
    ],
    aliases: [
      "group"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Link",
    id: "link",
    unicode: "f0c1",
    created: 2,
    filter: [
      "chain"
    ],
    aliases: [
      "chain"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Cloud",
    id: "cloud",
    filter: [
      "save"
    ],
    unicode: "f0c2",
    created: 2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Flask",
    id: "flask",
    unicode: "f0c3",
    created: 2,
    filter: [
      "science",
      "beaker",
      "experimental",
      "labs"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Scissors",
    id: "scissors",
    unicode: "f0c4",
    created: 2,
    aliases: [
      "cut"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Files Outlined",
    id: "files-o",
    unicode: "f0c5",
    created: 2,
    filter: [
      "duplicate",
      "clone",
      "copy"
    ],
    aliases: [
      "copy"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Paperclip",
    id: "paperclip",
    unicode: "f0c6",
    created: 2,
    filter: [
      "attachment"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Floppy Outlined",
    id: "floppy-o",
    unicode: "f0c7",
    created: 2,
    aliases: [
      "save"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Square",
    id: "square",
    unicode: "f0c8",
    created: 2,
    filter: [
      "block",
      "box"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Bars",
    id: "bars",
    unicode: "f0c9",
    created: 2,
    aliases: [
      "navicon",
      "reorder"
    ],
    filter: [
      "menu",
      "drag",
      "reorder",
      "settings",
      "list",
      "ul",
      "ol",
      "checklist",
      "todo",
      "list",
      "hamburger"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "list-ul",
    id: "list-ul",
    unicode: "f0ca",
    created: 2,
    filter: [
      "ul",
      "ol",
      "checklist",
      "todo",
      "list"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "list-ol",
    id: "list-ol",
    unicode: "f0cb",
    created: 2,
    filter: [
      "ul",
      "ol",
      "checklist",
      "list",
      "todo",
      "list",
      "numbers"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Strikethrough",
    id: "strikethrough",
    unicode: "f0cc",
    created: 2,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Underline",
    id: "underline",
    unicode: "f0cd",
    created: 2,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "table",
    id: "table",
    unicode: "f0ce",
    created: 2,
    filter: [
      "data",
      "excel",
      "spreadsheet"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "magic",
    id: "magic",
    unicode: "f0d0",
    created: 2,
    filter: [
      "wizard",
      "automatic",
      "autocomplete"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "truck",
    id: "truck",
    unicode: "f0d1",
    created: 2,
    filter: [
      "shipping"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Pinterest",
    id: "pinterest",
    unicode: "f0d2",
    created: 2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pinterest Square",
    id: "pinterest-square",
    unicode: "f0d3",
    created: 2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Google Plus Square",
    id: "google-plus-square",
    unicode: "f0d4",
    created: 2,
    filter: [
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Google Plus",
    id: "google-plus",
    unicode: "f0d5",
    created: 2,
    filter: [
      "social network"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Money",
    id: "money",
    unicode: "f0d6",
    created: 2,
    filter: [
      "cash",
      "money",
      "buy",
      "checkout",
      "purchase",
      "payment"
    ],
    categories: [
      "Web应用程序图标",
      "货币图标"
    ]
  },
  {
    name: "Caret Down",
    id: "caret-down",
    unicode: "f0d7",
    created: 2,
    filter: [
      "more",
      "dropdown",
      "menu",
      "triangle down",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Caret Up",
    id: "caret-up",
    unicode: "f0d8",
    created: 2,
    filter: [
      "triangle up",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Caret Left",
    id: "caret-left",
    unicode: "f0d9",
    created: 2,
    filter: [
      "previous",
      "back",
      "triangle left",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Caret Right",
    id: "caret-right",
    unicode: "f0da",
    created: 2,
    filter: [
      "next",
      "forward",
      "triangle right",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Columns",
    id: "columns",
    unicode: "f0db",
    created: 2,
    filter: [
      "split",
      "panes"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Sort",
    id: "sort",
    unicode: "f0dc",
    created: 2,
    filter: [
      "order"
    ],
    aliases: [
      "unsorted"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Descending",
    id: "sort-desc",
    unicode: "f0dd",
    created: 2,
    filter: [
      "dropdown",
      "more",
      "menu",
      "arrow"
    ],
    aliases: [
      "sort-down"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Ascending",
    id: "sort-asc",
    unicode: "f0de",
    created: 2,
    aliases: [
      "sort-up"
    ],
    filter: [
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Envelope",
    id: "envelope",
    unicode: "f0e0",
    created: 2,
    filter: [
      "email",
      "e-mail",
      "letter",
      "support",
      "mail",
      "message",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "LinkedIn",
    id: "linkedin",
    unicode: "f0e1",
    created: 2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Undo",
    id: "undo",
    unicode: "f0e2",
    created: 2,
    filter: [
      "back"
    ],
    aliases: [
      "rotate-left"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Gavel",
    id: "gavel",
    unicode: "f0e3",
    created: 2,
    filter: [
      "judge",
      "lawyer",
      "opinion"
    ],
    aliases: [
      "legal"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Tachometer",
    id: "tachometer",
    unicode: "f0e4",
    created: 2,
    filter: [
      "speedometer",
      "fast"
    ],
    aliases: [
      "dashboard"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "comment-o",
    id: "comment-o",
    unicode: "f0e5",
    created: 2,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "comments-o",
    id: "comments-o",
    unicode: "f0e6",
    created: 2,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Lightning Bolt",
    id: "bolt",
    unicode: "f0e7",
    created: 2,
    filter: [
      "lightning",
      "weather"
    ],
    aliases: [
      "flash"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sitemap",
    id: "sitemap",
    unicode: "f0e8",
    created: 2,
    filter: [
      "directory",
      "hierarchy",
      "organization"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Umbrella",
    id: "umbrella",
    unicode: "f0e9",
    created: 2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Clipboard",
    id: "clipboard",
    unicode: "f0ea",
    created: 2,
    filter: [
      "copy"
    ],
    aliases: [
      "paste"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Lightbulb Outlined",
    id: "lightbulb-o",
    unicode: "f0eb",
    created: 3,
    filter: [
      "idea",
      "inspiration"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Exchange",
    id: "exchange",
    unicode: "f0ec",
    created: 3,
    filter: [
      "transfer",
      "arrows",
      "arrow"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Cloud Download",
    id: "cloud-download",
    unicode: "f0ed",
    created: 3,
    filter: [
      "import"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Cloud Upload",
    id: "cloud-upload",
    unicode: "f0ee",
    created: 3,
    filter: [
      "import"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "user-md",
    id: "user-md",
    unicode: "f0f0",
    created: 2,
    filter: [
      "doctor",
      "profile",
      "medical",
      "nurse"
    ],
    categories: [
      "医疗图标"
    ]
  },
  {
    name: "Stethoscope",
    id: "stethoscope",
    unicode: "f0f1",
    created: 3,
    categories: [
      "医疗图标"
    ]
  },
  {
    name: "Suitcase",
    id: "suitcase",
    unicode: "f0f2",
    created: 3,
    filter: [
      "trip",
      "luggage",
      "travel",
      "move",
      "baggage"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bell Outlined",
    id: "bell-o",
    unicode: "f0a2",
    created: 3,
    filter: [
      "alert",
      "reminder",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Coffee",
    id: "coffee",
    unicode: "f0f4",
    created: 3,
    filter: [
      "morning",
      "mug",
      "breakfast",
      "tea",
      "drink",
      "cafe"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Cutlery",
    id: "cutlery",
    unicode: "f0f5",
    created: 3,
    filter: [
      "food",
      "restaurant",
      "spoon",
      "knife",
      "dinner",
      "eat"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "File Text Outlined",
    id: "file-text-o",
    unicode: "f0f6",
    created: 3,
    filter: [
      "new",
      "page",
      "pdf",
      "document"
    ],
    categories: [
      "文本编辑器图标",
      "文件类型图标"
    ]
  },
  {
    name: "Building Outlined",
    id: "building-o",
    unicode: "f0f7",
    created: 3,
    filter: [
      "work",
      "business",
      "apartment",
      "office",
      "company"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "hospital Outlined",
    id: "hospital-o",
    unicode: "f0f8",
    created: 3,
    filter: [
      "building"
    ],
    categories: [
      "医疗图标"
    ]
  },
  {
    name: "ambulance",
    id: "ambulance",
    unicode: "f0f9",
    created: 3,
    filter: [
      "vehicle",
      "support",
      "help"
    ],
    categories: [
      "医疗图标",
      "交通图标"
    ]
  },
  {
    name: "medkit",
    id: "medkit",
    unicode: "f0fa",
    created: 3,
    filter: [
      "first aid",
      "firstaid",
      "help",
      "support",
      "health"
    ],
    categories: [
      "医疗图标"
    ]
  },
  {
    name: "fighter-jet",
    id: "fighter-jet",
    unicode: "f0fb",
    created: 3,
    filter: [
      "fly",
      "plane",
      "airplane",
      "quick",
      "fast",
      "travel"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "beer",
    id: "beer",
    unicode: "f0fc",
    created: 3,
    filter: [
      "alcohol",
      "stein",
      "drink",
      "mug",
      "bar",
      "liquor"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "H Square",
    id: "h-square",
    unicode: "f0fd",
    created: 3,
    filter: [
      "hospital",
      "hotel"
    ],
    categories: [
      "医疗图标"
    ]
  },
  {
    name: "Plus Square",
    id: "plus-square",
    unicode: "f0fe",
    created: 3,
    filter: [
      "add",
      "new",
      "create",
      "expand"
    ],
    categories: [
      "医疗图标",
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Angle Double Left",
    id: "angle-double-left",
    unicode: "f100",
    created: 3,
    filter: [
      "laquo",
      "quote",
      "previous",
      "back",
      "arrows"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Angle Double Right",
    id: "angle-double-right",
    unicode: "f101",
    created: 3,
    filter: [
      "raquo",
      "quote",
      "next",
      "forward",
      "arrows"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Angle Double Up",
    id: "angle-double-up",
    unicode: "f102",
    created: 3,
    filter: [
      "arrows"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Angle Double Down",
    id: "angle-double-down",
    unicode: "f103",
    created: 3,
    filter: [
      "arrows"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "angle-left",
    id: "angle-left",
    unicode: "f104",
    created: 3,
    filter: [
      "previous",
      "back",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "angle-right",
    id: "angle-right",
    unicode: "f105",
    created: 3,
    filter: [
      "next",
      "forward",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "angle-up",
    id: "angle-up",
    unicode: "f106",
    created: 3,
    filter: [
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "angle-down",
    id: "angle-down",
    unicode: "f107",
    created: 3,
    filter: [
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Desktop",
    id: "desktop",
    unicode: "f108",
    created: 3,
    filter: [
      "monitor",
      "screen",
      "desktop",
      "computer",
      "demo",
      "device"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Laptop",
    id: "laptop",
    unicode: "f109",
    created: 3,
    filter: [
      "demo",
      "computer",
      "device"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "tablet",
    id: "tablet",
    unicode: "f10a",
    created: 3,
    filter: [
      "ipad",
      "device"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Mobile Phone",
    id: "mobile",
    unicode: "f10b",
    created: 3,
    filter: [
      "cell phone",
      "cellphone",
      "text",
      "call",
      "iphone",
      "number",
      "telephone"
    ],
    aliases: [
      "mobile-phone"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Circle Outlined",
    id: "circle-o",
    unicode: "f10c",
    created: 3,
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "quote-left",
    id: "quote-left",
    unicode: "f10d",
    created: 3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "quote-right",
    id: "quote-right",
    unicode: "f10e",
    created: 3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Spinner",
    id: "spinner",
    unicode: "f110",
    created: 3,
    filter: [
      "loading",
      "progress"
    ],
    categories: [
      "Web应用程序图标",
      "微图标"
    ]
  },
  {
    name: "Circle",
    id: "circle",
    unicode: "f111",
    created: 3,
    filter: [
      "dot",
      "notification"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Reply",
    id: "reply",
    unicode: "f112",
    created: 3,
    aliases: [
      "mail-reply"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "GitHub Alt",
    id: "github-alt",
    unicode: "f113",
    created: 3,
    url: "github.com/logos",
    filter: [
      "octocat"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Folder Outlined",
    id: "folder-o",
    unicode: "f114",
    created: 3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Folder Open Outlined",
    id: "folder-open-o",
    unicode: "f115",
    created: 3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Smile Outlined",
    id: "smile-o",
    unicode: "f118",
    created: 3.1,
    filter: [
      "face",
      "emoticon",
      "happy",
      "approve",
      "satisfied",
      "rating"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Frown Outlined",
    id: "frown-o",
    unicode: "f119",
    created: 3.1,
    filter: [
      "face",
      "emoticon",
      "sad",
      "disapprove",
      "rating"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Meh Outlined",
    id: "meh-o",
    unicode: "f11a",
    created: 3.1,
    filter: [
      "face",
      "emoticon",
      "rating",
      "neutral"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Gamepad",
    id: "gamepad",
    unicode: "f11b",
    created: 3.1,
    filter: [
      "controller"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Keyboard Outlined",
    id: "keyboard-o",
    unicode: "f11c",
    created: 3.1,
    filter: [
      "type",
      "input"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Flag Outlined",
    id: "flag-o",
    unicode: "f11d",
    created: 3.1,
    filter: [
      "report",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "flag-checkered",
    id: "flag-checkered",
    unicode: "f11e",
    created: 3.1,
    filter: [
      "report",
      "notification",
      "notify"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Terminal",
    id: "terminal",
    unicode: "f120",
    created: 3.1,
    filter: [
      "command",
      "prompt",
      "code"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Code",
    id: "code",
    unicode: "f121",
    created: 3.1,
    filter: [
      "html",
      "brackets"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "reply-all",
    id: "reply-all",
    unicode: "f122",
    created: 3.1,
    aliases: [
      "mail-reply-all"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Star Half Outlined",
    id: "star-half-o",
    unicode: "f123",
    created: 3.1,
    filter: [
      "award",
      "achievement",
      "rating",
      "score"
    ],
    aliases: [
      "star-half-empty",
      "star-half-full"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "location-arrow",
    id: "location-arrow",
    unicode: "f124",
    created: 3.1,
    filter: [
      "map",
      "coordinates",
      "location",
      "address",
      "place",
      "where"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "crop",
    id: "crop",
    unicode: "f125",
    created: 3.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "code-fork",
    id: "code-fork",
    unicode: "f126",
    created: 3.1,
    filter: [
      "git",
      "fork",
      "vcs",
      "svn",
      "github",
      "rebase",
      "version",
      "merge"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Chain Broken",
    id: "chain-broken",
    unicode: "f127",
    created: 3.1,
    filter: [
      "remove"
    ],
    aliases: [
      "unlink"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Question",
    id: "question",
    unicode: "f128",
    created: 3.1,
    filter: [
      "help",
      "information",
      "unknown",
      "support"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Info",
    id: "info",
    unicode: "f129",
    created: 3.1,
    filter: [
      "help",
      "information",
      "more",
      "details"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "exclamation",
    id: "exclamation",
    unicode: "f12a",
    created: 3.1,
    filter: [
      "warning",
      "error",
      "problem",
      "notification",
      "notify",
      "alert"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "superscript",
    id: "superscript",
    unicode: "f12b",
    created: 3.1,
    filter: [
      "exponential"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "subscript",
    id: "subscript",
    unicode: "f12c",
    created: 3.1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "eraser",
    id: "eraser",
    unicode: "f12d",
    created: 3.1,
    filter: [
      "remove",
      "delete"
    ],
    categories: [
      "文本编辑器图标",
      "Web应用程序图标"
    ]
  },
  {
    name: "Puzzle Piece",
    id: "puzzle-piece",
    unicode: "f12e",
    created: 3.1,
    filter: [
      "addon",
      "add-on",
      "section"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "microphone",
    id: "microphone",
    unicode: "f130",
    created: 3.1,
    filter: [
      "record",
      "voice",
      "sound"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Microphone Slash",
    id: "microphone-slash",
    unicode: "f131",
    created: 3.1,
    filter: [
      "record",
      "voice",
      "sound",
      "mute"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "shield",
    id: "shield",
    unicode: "f132",
    created: 3.1,
    filter: [
      "award",
      "achievement",
      "security",
      "winner"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "calendar-o",
    id: "calendar-o",
    unicode: "f133",
    created: 3.1,
    filter: [
      "date",
      "time",
      "when",
      "event"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "fire-extinguisher",
    id: "fire-extinguisher",
    unicode: "f134",
    created: 3.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "rocket",
    id: "rocket",
    unicode: "f135",
    created: 3.1,
    filter: [
      "app"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "MaxCDN",
    id: "maxcdn",
    unicode: "f136",
    created: 3.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Chevron Circle Left",
    id: "chevron-circle-left",
    unicode: "f137",
    created: 3.1,
    filter: [
      "previous",
      "back",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Chevron Circle Right",
    id: "chevron-circle-right",
    unicode: "f138",
    created: 3.1,
    filter: [
      "next",
      "forward",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Chevron Circle Up",
    id: "chevron-circle-up",
    unicode: "f139",
    created: 3.1,
    filter: [
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Chevron Circle Down",
    id: "chevron-circle-down",
    unicode: "f13a",
    created: 3.1,
    filter: [
      "more",
      "dropdown",
      "menu",
      "arrow"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "HTML 5 Logo",
    id: "html5",
    unicode: "f13b",
    created: 3.1,
    code: [
      "code",
      "html5"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "CSS 3 Logo",
    id: "css3",
    unicode: "f13c",
    created: 3.1,
    filter: [
      "code"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Anchor",
    id: "anchor",
    unicode: "f13d",
    created: 3.1,
    filter: [
      "link"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Unlock Alt",
    id: "unlock-alt",
    unicode: "f13e",
    created: 3.1,
    filter: [
      "protect",
      "admin",
      "password",
      "lock"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bullseye",
    id: "bullseye",
    unicode: "f140",
    created: 3.1,
    filter: [
      "target"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Ellipsis Horizontal",
    id: "ellipsis-h",
    unicode: "f141",
    created: 3.1,
    filter: [
      "dots"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Ellipsis Vertical",
    id: "ellipsis-v",
    unicode: "f142",
    created: 3.1,
    filter: [
      "dots"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "RSS Square",
    id: "rss-square",
    unicode: "f143",
    created: 3.1,
    filter: [
      "feed",
      "blog"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Play Circle",
    id: "play-circle",
    unicode: "f144",
    created: 3.1,
    filter: [
      "start",
      "playing"
    ],
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Ticket",
    id: "ticket",
    unicode: "f145",
    created: 3.1,
    filter: [
      "movie",
      "pass",
      "support"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Minus Square",
    id: "minus-square",
    unicode: "f146",
    created: 3.1,
    filter: [
      "hide",
      "minify",
      "delete",
      "remove",
      "trash",
      "hide",
      "collapse"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Minus Square Outlined",
    id: "minus-square-o",
    unicode: "f147",
    created: 3.1,
    filter: [
      "hide",
      "minify",
      "delete",
      "remove",
      "trash",
      "hide",
      "collapse"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Level Up",
    id: "level-up",
    unicode: "f148",
    created: 3.1,
    filter: [
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Level Down",
    id: "level-down",
    unicode: "f149",
    created: 3.1,
    filter: [
      "arrow"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Check Square",
    id: "check-square",
    unicode: "f14a",
    created: 3.1,
    filter: [
      "checkmark",
      "done",
      "todo",
      "agree",
      "accept",
      "confirm",
      "ok"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Pencil Square",
    id: "pencil-square",
    unicode: "f14b",
    created: 3.1,
    filter: [
      "write",
      "edit",
      "update"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "External Link Square",
    id: "external-link-square",
    unicode: "f14c",
    created: 3.1,
    filter: [
      "open",
      "new"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Share Square",
    id: "share-square",
    unicode: "f14d",
    created: 3.1,
    filter: [
      "social",
      "send"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Compass",
    id: "compass",
    unicode: "f14e",
    created: 3.2,
    filter: [
      "safari",
      "directory",
      "menu",
      "location"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Caret Square Outlined Down",
    id: "caret-square-o-down",
    unicode: "f150",
    created: 3.2,
    aliases: [
      "toggle-down"
    ],
    filter: [
      "more",
      "dropdown",
      "menu"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Caret Square Outlined Up",
    id: "caret-square-o-up",
    unicode: "f151",
    created: 3.2,
    aliases: [
      "toggle-up"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Caret Square Outlined Right",
    id: "caret-square-o-right",
    unicode: "f152",
    created: 3.2,
    filter: [
      "next",
      "forward"
    ],
    aliases: [
      "toggle-right"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Euro (EUR)",
    id: "eur",
    unicode: "f153",
    created: 3.2,
    aliases: [
      "euro"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "GBP",
    id: "gbp",
    unicode: "f154",
    created: 3.2,
    categories: [
      "货币图标"
    ]
  },
  {
    name: "US Dollar",
    id: "usd",
    unicode: "f155",
    created: 3.2,
    aliases: [
      "dollar"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Indian Rupee (INR)",
    id: "inr",
    unicode: "f156",
    created: 3.2,
    aliases: [
      "rupee"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Japanese Yen (JPY)",
    id: "jpy",
    unicode: "f157",
    created: 3.2,
    aliases: [
      "cny",
      "rmb",
      "yen"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Russian Ruble (RUB)",
    id: "rub",
    unicode: "f158",
    created: 4,
    aliases: [
      "ruble",
      "rouble"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Korean Won (KRW)",
    id: "krw",
    unicode: "f159",
    created: 3.2,
    aliases: [
      "won"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Bitcoin (BTC)",
    id: "btc",
    unicode: "f15a",
    created: 3.2,
    aliases: [
      "bitcoin"
    ],
    categories: [
      "货币图标",
      "商标图标"
    ]
  },
  {
    name: "File",
    id: "file",
    unicode: "f15b",
    created: 3.2,
    filter: [
      "new",
      "page",
      "pdf",
      "document"
    ],
    categories: [
      "文本编辑器图标",
      "文件类型图标"
    ]
  },
  {
    name: "File Text",
    id: "file-text",
    unicode: "f15c",
    created: 3.2,
    filter: [
      "new",
      "page",
      "pdf",
      "document"
    ],
    categories: [
      "文本编辑器图标",
      "文件类型图标"
    ]
  },
  {
    name: "Sort Alpha Ascending",
    id: "sort-alpha-asc",
    unicode: "f15d",
    created: 3.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Alpha Descending",
    id: "sort-alpha-desc",
    unicode: "f15e",
    created: 3.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Amount Ascending",
    id: "sort-amount-asc",
    unicode: "f160",
    created: 3.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Amount Descending",
    id: "sort-amount-desc",
    unicode: "f161",
    created: 3.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Numeric Ascending",
    id: "sort-numeric-asc",
    unicode: "f162",
    created: 3.2,
    filter: [
      "numbers"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sort Numeric Descending",
    id: "sort-numeric-desc",
    unicode: "f163",
    created: 3.2,
    filter: [
      "numbers"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "thumbs-up",
    id: "thumbs-up",
    unicode: "f164",
    created: 3.2,
    filter: [
      "like",
      "favorite",
      "approve",
      "agree",
      "hand"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "thumbs-down",
    id: "thumbs-down",
    unicode: "f165",
    created: 3.2,
    filter: [
      "dislike",
      "disapprove",
      "disagree",
      "hand"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "YouTube Square",
    id: "youtube-square",
    unicode: "f166",
    created: 3.2,
    filter: [
      "video",
      "film"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "YouTube",
    id: "youtube",
    unicode: "f167",
    created: 3.2,
    filter: [
      "video",
      "film"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Xing",
    id: "xing",
    unicode: "f168",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Xing Square",
    id: "xing-square",
    unicode: "f169",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "YouTube Play",
    id: "youtube-play",
    unicode: "f16a",
    created: 3.2,
    filter: [
      "start",
      "playing"
    ],
    categories: [
      "商标图标",
      "视频播放器图标"
    ]
  },
  {
    name: "Dropbox",
    id: "dropbox",
    unicode: "f16b",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Stack Overflow",
    id: "stack-overflow",
    unicode: "f16c",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Instagram",
    id: "instagram",
    unicode: "f16d",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Flickr",
    id: "flickr",
    unicode: "f16e",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "App.net",
    id: "adn",
    unicode: "f170",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Bitbucket",
    id: "bitbucket",
    unicode: "f171",
    created: 3.2,
    filter: [
      "git"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Bitbucket Square",
    id: "bitbucket-square",
    unicode: "f172",
    created: 3.2,
    filter: [
      "git"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Tumblr",
    id: "tumblr",
    unicode: "f173",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Tumblr Square",
    id: "tumblr-square",
    unicode: "f174",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Long Arrow Down",
    id: "long-arrow-down",
    unicode: "f175",
    created: 3.2,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Long Arrow Up",
    id: "long-arrow-up",
    unicode: "f176",
    created: 3.2,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Long Arrow Left",
    id: "long-arrow-left",
    unicode: "f177",
    created: 3.2,
    filter: [
      "previous",
      "back"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Long Arrow Right",
    id: "long-arrow-right",
    unicode: "f178",
    created: 3.2,
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Apple",
    id: "apple",
    unicode: "f179",
    created: 3.2,
    filter: [
      "osx",
      "food"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Windows",
    id: "windows",
    unicode: "f17a",
    created: 3.2,
    filter: [
      "microsoft"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Android",
    id: "android",
    unicode: "f17b",
    created: 3.2,
    filter: [
      "robot"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Linux",
    id: "linux",
    unicode: "f17c",
    created: 3.2,
    filter: [
      "tux"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Dribbble",
    id: "dribbble",
    unicode: "f17d",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Skype",
    id: "skype",
    unicode: "f17e",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Foursquare",
    id: "foursquare",
    unicode: "f180",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Trello",
    id: "trello",
    unicode: "f181",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Female",
    id: "female",
    unicode: "f182",
    created: 3.2,
    filter: [
      "woman",
      "user",
      "person",
      "profile"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Male",
    id: "male",
    unicode: "f183",
    created: 3.2,
    filter: [
      "man",
      "user",
      "person",
      "profile"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Gratipay (Gittip)",
    id: "gratipay",
    unicode: "f184",
    created: 3.2,
    aliases: [
      "gittip"
    ],
    filter: [
      "heart",
      "like",
      "favorite",
      "love"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Sun Outlined",
    id: "sun-o",
    unicode: "f185",
    created: 3.2,
    filter: [
      "weather",
      "contrast",
      "lighter",
      "brighten",
      "day"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Moon Outlined",
    id: "moon-o",
    unicode: "f186",
    created: 3.2,
    filter: [
      "night",
      "darker",
      "contrast"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Archive",
    id: "archive",
    unicode: "f187",
    created: 3.2,
    filter: [
      "box",
      "storage"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bug",
    id: "bug",
    unicode: "f188",
    created: 3.2,
    filter: [
      "report",
      "insect"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "VK",
    id: "vk",
    unicode: "f189",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Weibo",
    id: "weibo",
    unicode: "f18a",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Renren",
    id: "renren",
    unicode: "f18b",
    created: 3.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pagelines",
    id: "pagelines",
    unicode: "f18c",
    created: 4,
    filter: [
      "leaf",
      "leaves",
      "tree",
      "plant",
      "eco",
      "nature"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Stack Exchange",
    id: "stack-exchange",
    unicode: "f18d",
    created: 4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Arrow Circle Outlined Right",
    id: "arrow-circle-o-right",
    unicode: "f18e",
    created: 4,
    filter: [
      "next",
      "forward"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Arrow Circle Outlined Left",
    id: "arrow-circle-o-left",
    unicode: "f190",
    created: 4,
    filter: [
      "previous",
      "back"
    ],
    categories: [
      "方向图标"
    ]
  },
  {
    name: "Caret Square Outlined Left",
    id: "caret-square-o-left",
    unicode: "f191",
    created: 4,
    filter: [
      "previous",
      "back"
    ],
    aliases: [
      "toggle-left"
    ],
    categories: [
      "Web应用程序图标",
      "方向图标"
    ]
  },
  {
    name: "Dot Circle Outlined",
    id: "dot-circle-o",
    unicode: "f192",
    created: 4,
    filter: [
      "target",
      "bullseye",
      "notification"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Wheelchair",
    id: "wheelchair",
    unicode: "f193",
    created: 4,
    filter: [
      "handicap",
      "person"
    ],
    categories: [
      "Web应用程序图标",
      "医疗图标",
      "交通图标",
      "访问图标"
    ]
  },
  {
    name: "Vimeo Square",
    id: "vimeo-square",
    unicode: "f194",
    created: 4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Turkish Lira (TRY)",
    id: "try",
    unicode: "f195",
    created: 4,
    aliases: [
      "turkish-lira"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "Plus Square Outlined",
    id: "plus-square-o",
    unicode: "f196",
    created: 4,
    filter: [
      "add",
      "new",
      "create",
      "expand"
    ],
    categories: [
      "Web应用程序图标",
      "表单控件图标"
    ]
  },
  {
    name: "Space Shuttle",
    id: "space-shuttle",
    unicode: "f197",
    created: 4.1,
    filter: null,
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Slack Logo",
    id: "slack",
    unicode: "f198",
    created: 4.1,
    filter: [
      "hashtag",
      "anchor",
      "hash"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Envelope Square",
    id: "envelope-square",
    unicode: "f199",
    created: 4.1,
    filter: [
      "email",
      "e-mail",
      "letter",
      "support",
      "mail",
      "message",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "WordPress Logo",
    id: "wordpress",
    unicode: "f19a",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "OpenID",
    id: "openid",
    unicode: "f19b",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "University",
    id: "university",
    unicode: "f19c",
    created: 4.1,
    aliases: [
      "institution",
      "bank"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Graduation Cap",
    id: "graduation-cap",
    unicode: "f19d",
    created: 4.1,
    aliases: [
      "mortar-board"
    ],
    filter: [
      "learning",
      "school",
      "student"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Yahoo Logo",
    id: "yahoo",
    unicode: "f19e",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Google Logo",
    id: "google",
    unicode: "f1a0",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "reddit Logo",
    id: "reddit",
    unicode: "f1a1",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "reddit Square",
    id: "reddit-square",
    unicode: "f1a2",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "StumbleUpon Circle",
    id: "stumbleupon-circle",
    unicode: "f1a3",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "StumbleUpon Logo",
    id: "stumbleupon",
    unicode: "f1a4",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Delicious Logo",
    id: "delicious",
    unicode: "f1a5",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Digg Logo",
    id: "digg",
    unicode: "f1a6",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pied Piper PP Logo (Old)",
    id: "pied-piper-pp",
    unicode: "f1a7",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pied Piper Alternate Logo",
    id: "pied-piper-alt",
    unicode: "f1a8",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Drupal Logo",
    id: "drupal",
    unicode: "f1a9",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Joomla Logo",
    id: "joomla",
    unicode: "f1aa",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Language",
    id: "language",
    unicode: "f1ab",
    created: 4.1,
    filter: [
      "translate"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Fax",
    id: "fax",
    unicode: "f1ac",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Building",
    id: "building",
    unicode: "f1ad",
    created: 4.1,
    filter: [
      "work",
      "business",
      "apartment",
      "office",
      "company"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Child",
    id: "child",
    unicode: "f1ae",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Paw",
    id: "paw",
    unicode: "f1b0",
    created: 4.1,
    filter: [
      "pet"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "spoon",
    id: "spoon",
    unicode: "f1b1",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Cube",
    id: "cube",
    unicode: "f1b2",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Cubes",
    id: "cubes",
    unicode: "f1b3",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Behance",
    id: "behance",
    unicode: "f1b4",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Behance Square",
    id: "behance-square",
    unicode: "f1b5",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Steam",
    id: "steam",
    unicode: "f1b6",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Steam Square",
    id: "steam-square",
    unicode: "f1b7",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Recycle",
    id: "recycle",
    unicode: "f1b8",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Car",
    id: "car",
    unicode: "f1b9",
    created: 4.1,
    aliases: [
      "automobile"
    ],
    filter: [
      "vehicle"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Taxi",
    id: "taxi",
    unicode: "f1ba",
    created: 4.1,
    aliases: [
      "cab"
    ],
    filter: [
      "vehicle"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Tree",
    id: "tree",
    unicode: "f1bb",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Spotify",
    id: "spotify",
    unicode: "f1bc",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "deviantART",
    id: "deviantart",
    unicode: "f1bd",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "SoundCloud",
    id: "soundcloud",
    unicode: "f1be",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Database",
    id: "database",
    unicode: "f1c0",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "PDF File Outlined",
    id: "file-pdf-o",
    unicode: "f1c1",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Word File Outlined",
    id: "file-word-o",
    unicode: "f1c2",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Excel File Outlined",
    id: "file-excel-o",
    unicode: "f1c3",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Powerpoint File Outlined",
    id: "file-powerpoint-o",
    unicode: "f1c4",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Image File Outlined",
    id: "file-image-o",
    unicode: "f1c5",
    created: 4.1,
    aliases: [
      "file-photo-o",
      "file-picture-o"
    ],
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Archive File Outlined",
    id: "file-archive-o",
    unicode: "f1c6",
    created: 4.1,
    aliases: [
      "file-zip-o"
    ],
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Audio File Outlined",
    id: "file-audio-o",
    unicode: "f1c7",
    created: 4.1,
    aliases: [
      "file-sound-o"
    ],
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Video File Outlined",
    id: "file-video-o",
    unicode: "f1c8",
    created: 4.1,
    aliases: [
      "file-movie-o"
    ],
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Code File Outlined",
    id: "file-code-o",
    unicode: "f1c9",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "文件类型图标"
    ]
  },
  {
    name: "Vine",
    id: "vine",
    unicode: "f1ca",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Codepen",
    id: "codepen",
    unicode: "f1cb",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "jsFiddle",
    id: "jsfiddle",
    unicode: "f1cc",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Life Ring",
    id: "life-ring",
    unicode: "f1cd",
    created: 4.1,
    aliases: [
      "life-bouy",
      "life-buoy",
      "life-saver",
      "support"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Circle Outlined Notched",
    id: "circle-o-notch",
    unicode: "f1ce",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "微图标"
    ]
  },
  {
    name: "Rebel Alliance",
    id: "rebel",
    unicode: "f1d0",
    created: 4.1,
    aliases: [
      "ra",
      "resistance"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Galactic Empire",
    id: "empire",
    unicode: "f1d1",
    created: 4.1,
    aliases: [
      "ge"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Git Square",
    id: "git-square",
    unicode: "f1d2",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Git",
    id: "git",
    unicode: "f1d3",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Hacker News",
    id: "hacker-news",
    unicode: "f1d4",
    created: 4.1,
    aliases: [
      "y-combinator-square",
      "yc-square"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Tencent Weibo",
    id: "tencent-weibo",
    unicode: "f1d5",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "QQ",
    id: "qq",
    unicode: "f1d6",
    created: 4.1,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Weixin (WeChat)",
    id: "weixin",
    unicode: "f1d7",
    created: 4.1,
    aliases: [
      "wechat"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Paper Plane",
    id: "paper-plane",
    unicode: "f1d8",
    created: 4.1,
    aliases: [
      "send"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Paper Plane Outlined",
    id: "paper-plane-o",
    unicode: "f1d9",
    created: 4.1,
    aliases: [
      "send-o"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "History",
    id: "history",
    unicode: "f1da",
    created: 4.1,
    filter: [
      "recent"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Circle Outlined Thin",
    id: "circle-thin",
    unicode: "f1db",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "header",
    id: "header",
    unicode: "f1dc",
    created: 4.1,
    filter: [
      "heading"
    ],
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "paragraph",
    id: "paragraph",
    unicode: "f1dd",
    created: 4.1,
    categories: [
      "文本编辑器图标"
    ]
  },
  {
    name: "Sliders",
    id: "sliders",
    unicode: "f1de",
    created: 4.1,
    filter: [
      "settings"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Share Alt",
    id: "share-alt",
    unicode: "f1e0",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "商标图标"
    ]
  },
  {
    name: "Share Alt Square",
    id: "share-alt-square",
    unicode: "f1e1",
    created: 4.1,
    categories: [
      "Web应用程序图标",
      "商标图标"
    ]
  },
  {
    name: "Bomb",
    id: "bomb",
    unicode: "f1e2",
    created: 4.1,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Futbol Outlined",
    id: "futbol-o",
    unicode: "f1e3",
    created: 4.2,
    aliases: [
      "soccer-ball-o"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "TTY",
    id: "tty",
    unicode: "f1e4",
    created: 4.2,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Binoculars",
    id: "binoculars",
    unicode: "f1e5",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Plug",
    id: "plug",
    unicode: "f1e6",
    created: 4.2,
    filter: [
      "power",
      "connect"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Slideshare",
    id: "slideshare",
    unicode: "f1e7",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Twitch",
    id: "twitch",
    unicode: "f1e8",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Yelp",
    id: "yelp",
    unicode: "f1e9",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Newspaper Outlined",
    id: "newspaper-o",
    unicode: "f1ea",
    created: 4.2,
    filter: [
      "press"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "WiFi",
    id: "wifi",
    unicode: "f1eb",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Calculator",
    id: "calculator",
    unicode: "f1ec",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Paypal",
    id: "paypal",
    unicode: "f1ed",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Google Wallet",
    id: "google-wallet",
    unicode: "f1ee",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Visa Credit Card",
    id: "cc-visa",
    unicode: "f1f0",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "MasterCard Credit Card",
    id: "cc-mastercard",
    unicode: "f1f1",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Discover Credit Card",
    id: "cc-discover",
    unicode: "f1f2",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "American Express Credit Card",
    id: "cc-amex",
    unicode: "f1f3",
    created: 4.2,
    filter: [
      "amex"
    ],
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Paypal Credit Card",
    id: "cc-paypal",
    unicode: "f1f4",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Stripe Credit Card",
    id: "cc-stripe",
    unicode: "f1f5",
    created: 4.2,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Bell Slash",
    id: "bell-slash",
    unicode: "f1f6",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bell Slash Outlined",
    id: "bell-slash-o",
    unicode: "f1f7",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Trash",
    id: "trash",
    unicode: "f1f8",
    created: 4.2,
    filter: [
      "garbage",
      "delete",
      "remove",
      "hide"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Copyright",
    id: "copyright",
    unicode: "f1f9",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "At",
    id: "at",
    unicode: "f1fa",
    created: 4.2,
    filter: [
      "email",
      "e-mail"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Eyedropper",
    id: "eyedropper",
    unicode: "f1fb",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Paint Brush",
    id: "paint-brush",
    unicode: "f1fc",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Birthday Cake",
    id: "birthday-cake",
    unicode: "f1fd",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Area Chart",
    id: "area-chart",
    unicode: "f1fe",
    created: 4.2,
    filter: [
      "graph",
      "analytics",
      "statistics"
    ],
    categories: [
      "Web应用程序图标",
      "图表图标"
    ]
  },
  {
    name: "Pie Chart",
    id: "pie-chart",
    unicode: "f200",
    created: 4.2,
    filter: [
      "graph",
      "analytics",
      "statistics"
    ],
    categories: [
      "Web应用程序图标",
      "图表图标"
    ]
  },
  {
    name: "Line Chart",
    id: "line-chart",
    unicode: "f201",
    created: 4.2,
    filter: [
      "graph",
      "analytics",
      "statistics"
    ],
    categories: [
      "Web应用程序图标",
      "图表图标"
    ]
  },
  {
    name: "last.fm",
    id: "lastfm",
    unicode: "f202",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "last.fm Square",
    id: "lastfm-square",
    unicode: "f203",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Toggle Off",
    id: "toggle-off",
    unicode: "f204",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Toggle On",
    id: "toggle-on",
    unicode: "f205",
    created: 4.2,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bicycle",
    id: "bicycle",
    unicode: "f206",
    created: 4.2,
    filter: [
      "vehicle",
      "bike"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Bus",
    id: "bus",
    unicode: "f207",
    created: 4.2,
    filter: [
      "vehicle"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "ioxhost",
    id: "ioxhost",
    unicode: "f208",
    created: 4.2,
    url: "ioxhost.co.uk",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "AngelList",
    id: "angellist",
    unicode: "f209",
    created: 4.2,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Closed Captions",
    id: "cc",
    unicode: "f20a",
    created: 4.2,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Shekel (ILS)",
    id: "ils",
    unicode: "f20b",
    created: 4.2,
    aliases: [
      "shekel",
      "sheqel"
    ],
    categories: [
      "货币图标"
    ]
  },
  {
    name: "meanpath",
    id: "meanpath",
    unicode: "f20c",
    created: 4.2,
    url: "meanpath.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "BuySellAds",
    id: "buysellads",
    unicode: "f20d",
    created: 4.3,
    url: "buysellads.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Connect Develop",
    id: "connectdevelop",
    unicode: "f20e",
    created: 4.3,
    url: "connectdevelop.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "DashCube",
    id: "dashcube",
    unicode: "f210",
    created: 4.3,
    url: "dashcube.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Forumbee",
    id: "forumbee",
    unicode: "f211",
    created: 4.3,
    url: "forumbee.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Leanpub",
    id: "leanpub",
    unicode: "f212",
    created: 4.3,
    url: "leanpub.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Sellsy",
    id: "sellsy",
    unicode: "f213",
    created: 4.3,
    url: "sellsy.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Shirts in Bulk",
    id: "shirtsinbulk",
    unicode: "f214",
    created: 4.3,
    url: "shirtsinbulk.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "SimplyBuilt",
    id: "simplybuilt",
    unicode: "f215",
    created: 4.3,
    url: "simplybuilt.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "skyatlas",
    id: "skyatlas",
    unicode: "f216",
    created: 4.3,
    url: "skyatlas.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Add to Shopping Cart",
    id: "cart-plus",
    unicode: "f217",
    created: 4.3,
    filter: [
      "add",
      "shopping"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Shopping Cart Arrow Down",
    id: "cart-arrow-down",
    unicode: "f218",
    created: 4.3,
    filter: [
      "shopping"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Diamond",
    id: "diamond",
    unicode: "f219",
    created: 4.3,
    filter: [
      "gem",
      "gemstone"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Ship",
    id: "ship",
    unicode: "f21a",
    created: 4.3,
    filter: [
      "boat",
      "sea"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "User Secret",
    id: "user-secret",
    unicode: "f21b",
    created: 4.3,
    filter: [
      "whisper",
      "spy",
      "incognito",
      "privacy"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Motorcycle",
    id: "motorcycle",
    unicode: "f21c",
    created: 4.3,
    filter: [
      "vehicle",
      "bike"
    ],
    categories: [
      "Web应用程序图标",
      "交通图标"
    ]
  },
  {
    name: "Street View",
    id: "street-view",
    unicode: "f21d",
    created: 4.3,
    filter: [
      "map"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Heartbeat",
    id: "heartbeat",
    unicode: "f21e",
    created: 4.3,
    filter: [
      "ekg"
    ],
    categories: [
      "Web应用程序图标",
      "医疗图标"
    ]
  },
  {
    name: "Venus",
    id: "venus",
    unicode: "f221",
    created: 4.3,
    filter: [
      "female"
    ],
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mars",
    id: "mars",
    unicode: "f222",
    created: 4.3,
    filter: [
      "male"
    ],
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mercury",
    id: "mercury",
    unicode: "f223",
    created: 4.3,
    filter: [
      "transgender"
    ],
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Transgender",
    id: "transgender",
    unicode: "f224",
    created: 4.3,
    aliases: [
      "intersex"
    ],
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Transgender Alt",
    id: "transgender-alt",
    unicode: "f225",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Venus Double",
    id: "venus-double",
    unicode: "f226",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mars Double",
    id: "mars-double",
    unicode: "f227",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Venus Mars",
    id: "venus-mars",
    unicode: "f228",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mars Stroke",
    id: "mars-stroke",
    unicode: "f229",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mars Stroke Vertical",
    id: "mars-stroke-v",
    unicode: "f22a",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Mars Stroke Horizontal",
    id: "mars-stroke-h",
    unicode: "f22b",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Neuter",
    id: "neuter",
    unicode: "f22c",
    created: 4.3,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Genderless",
    id: "genderless",
    unicode: "f22d",
    created: 4.4,
    categories: [
      "性别图标"
    ]
  },
  {
    name: "Facebook Official",
    id: "facebook-official",
    unicode: "f230",
    created: 4.3,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pinterest P",
    id: "pinterest-p",
    unicode: "f231",
    created: 4.3,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "What's App",
    id: "whatsapp",
    unicode: "f232",
    created: 4.3,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Server",
    id: "server",
    unicode: "f233",
    created: 4.3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Add User",
    id: "user-plus",
    unicode: "f234",
    created: 4.3,
    filter: [
      "sign up",
      "signup"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Remove User",
    id: "user-times",
    unicode: "f235",
    created: 4.3,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bed",
    id: "bed",
    unicode: "f236",
    created: 4.3,
    filter: [
      "travel"
    ],
    aliases: [
      "hotel"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Viacoin (VIA)",
    id: "viacoin",
    unicode: "f237",
    created: 4.3,
    url: "viacoin.org",
    categories: [
      "货币图标",
      "商标图标"
    ]
  },
  {
    name: "Train",
    id: "train",
    unicode: "f238",
    created: 4.3,
    categories: [
      "交通图标"
    ]
  },
  {
    name: "Subway",
    id: "subway",
    unicode: "f239",
    created: 4.3,
    categories: [
      "交通图标"
    ]
  },
  {
    name: "Medium",
    id: "medium",
    unicode: "f23a",
    created: 4.3,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Y Combinator",
    id: "y-combinator",
    unicode: "f23b",
    created: 4.4,
    aliases: [
      "yc"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Optin Monster",
    id: "optin-monster",
    unicode: "f23c",
    created: 4.4,
    url: "optinmonster.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "OpenCart",
    id: "opencart",
    unicode: "f23d",
    created: 4.4,
    url: "opencart.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "ExpeditedSSL",
    id: "expeditedssl",
    unicode: "f23e",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Battery Full",
    id: "battery-full",
    unicode: "f240",
    created: 4.4,
    aliases: [
      "battery-4",
      "battery"
    ],
    filter: [
      "power"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Battery 3/4 Full",
    id: "battery-three-quarters",
    unicode: "f241",
    created: 4.4,
    aliases: [
      "battery-3"
    ],
    filter: [
      "power"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Battery 1/2 Full",
    id: "battery-half",
    unicode: "f242",
    created: 4.4,
    aliases: [
      "battery-2"
    ],
    filter: [
      "power"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Battery 1/4 Full",
    id: "battery-quarter",
    unicode: "f243",
    created: 4.4,
    aliases: [
      "battery-1"
    ],
    filter: [
      "power"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Battery Empty",
    id: "battery-empty",
    unicode: "f244",
    created: 4.4,
    aliases: [
      "battery-0"
    ],
    filter: [
      "power"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Mouse Pointer",
    id: "mouse-pointer",
    unicode: "f245",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "I Beam Cursor",
    id: "i-cursor",
    unicode: "f246",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Object Group",
    id: "object-group",
    unicode: "f247",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Object Ungroup",
    id: "object-ungroup",
    unicode: "f248",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sticky Note",
    id: "sticky-note",
    unicode: "f249",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Sticky Note Outlined",
    id: "sticky-note-o",
    unicode: "f24a",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "JCB Credit Card",
    id: "cc-jcb",
    unicode: "f24b",
    created: 4.4,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Diner's Club Credit Card",
    id: "cc-diners-club",
    unicode: "f24c",
    created: 4.4,
    categories: [
      "商标图标",
      "支付图标"
    ]
  },
  {
    name: "Clone",
    id: "clone",
    unicode: "f24d",
    created: 4.4,
    filter: [
      "copy"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Balance Scale",
    id: "balance-scale",
    unicode: "f24e",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hourglass Outlined",
    id: "hourglass-o",
    unicode: "f250",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hourglass Start",
    id: "hourglass-start",
    unicode: "f251",
    created: 4.4,
    aliases: [
      "hourglass-1"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hourglass Half",
    id: "hourglass-half",
    unicode: "f252",
    created: 4.4,
    aliases: [
      "hourglass-2"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hourglass End",
    id: "hourglass-end",
    unicode: "f253",
    created: 4.4,
    aliases: [
      "hourglass-3"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hourglass",
    id: "hourglass",
    unicode: "f254",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Rock (Hand)",
    id: "hand-rock-o",
    unicode: "f255",
    created: 4.4,
    aliases: [
      "hand-grab-o"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Paper (Hand)",
    id: "hand-paper-o",
    unicode: "f256",
    created: 4.4,
    aliases: [
      "hand-stop-o"
    ],
    filter: [
      "stop"
    ],
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Scissors (Hand)",
    id: "hand-scissors-o",
    unicode: "f257",
    created: 4.4,
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Lizard (Hand)",
    id: "hand-lizard-o",
    unicode: "f258",
    created: 4.4,
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Spock (Hand)",
    id: "hand-spock-o",
    unicode: "f259",
    created: 4.4,
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Hand Pointer",
    id: "hand-pointer-o",
    unicode: "f25a",
    created: 4.4,
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Hand Peace",
    id: "hand-peace-o",
    unicode: "f25b",
    created: 4.4,
    categories: [
      "Web应用程序图标",
      "手图标"
    ]
  },
  {
    name: "Trademark",
    id: "trademark",
    unicode: "f25c",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Registered Trademark",
    id: "registered",
    unicode: "f25d",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Creative Commons",
    id: "creative-commons",
    unicode: "f25e",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "GG Currency",
    id: "gg",
    unicode: "f260",
    created: 4.4,
    categories: [
      "货币图标",
      "商标图标"
    ]
  },
  {
    name: "GG Currency Circle",
    id: "gg-circle",
    unicode: "f261",
    created: 4.4,
    categories: [
      "货币图标",
      "商标图标"
    ]
  },
  {
    name: "TripAdvisor",
    id: "tripadvisor",
    unicode: "f262",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Odnoklassniki",
    id: "odnoklassniki",
    unicode: "f263",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Odnoklassniki Square",
    id: "odnoklassniki-square",
    unicode: "f264",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Get Pocket",
    id: "get-pocket",
    unicode: "f265",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Wikipedia W",
    id: "wikipedia-w",
    unicode: "f266",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Safari",
    id: "safari",
    unicode: "f267",
    created: 4.4,
    filter: [
      "browser"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Chrome",
    id: "chrome",
    unicode: "f268",
    created: 4.4,
    filter: [
      "browser"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Firefox",
    id: "firefox",
    unicode: "f269",
    created: 4.4,
    filter: [
      "browser"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Opera",
    id: "opera",
    unicode: "f26a",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Internet-explorer",
    id: "internet-explorer",
    unicode: "f26b",
    created: 4.4,
    filter: [
      "browser",
      "ie"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Television",
    id: "television",
    unicode: "f26c",
    created: 4.4,
    aliases: [
      "tv"
    ],
    filter: [
      "display",
      "computer",
      "monitor"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Contao",
    id: "contao",
    unicode: "f26d",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "500px",
    id: "500px",
    unicode: "f26e",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Amazon",
    id: "amazon",
    unicode: "f270",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Calendar Plus Outlined",
    id: "calendar-plus-o",
    unicode: "f271",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Calendar Minus Outlined",
    id: "calendar-minus-o",
    unicode: "f272",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Calendar Times Outlined",
    id: "calendar-times-o",
    unicode: "f273",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Calendar Check Outlined",
    id: "calendar-check-o",
    unicode: "f274",
    created: 4.4,
    filter: [
      "ok"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Industry",
    id: "industry",
    unicode: "f275",
    created: 4.4,
    filter: [
      "factory"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Map Pin",
    id: "map-pin",
    unicode: "f276",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Map Signs",
    id: "map-signs",
    unicode: "f277",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Map Outlined",
    id: "map-o",
    unicode: "f278",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Map",
    id: "map",
    unicode: "f279",
    created: 4.4,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Commenting",
    id: "commenting",
    unicode: "f27a",
    created: 4.4,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Commenting Outlined",
    id: "commenting-o",
    unicode: "f27b",
    created: 4.4,
    filter: [
      "speech",
      "notification",
      "note",
      "chat",
      "bubble",
      "feedback",
      "message",
      "texting",
      "sms",
      "conversation"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Houzz",
    id: "houzz",
    unicode: "f27c",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Vimeo",
    id: "vimeo",
    unicode: "f27d",
    created: 4.4,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Font Awesome Black Tie",
    id: "black-tie",
    unicode: "f27e",
    created: 4.4,
    url: "blacktie.io",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Fonticons",
    id: "fonticons",
    unicode: "f280",
    created: 4.4,
    url: "fonticons.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "reddit Alien",
    id: "reddit-alien",
    unicode: "f281",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Edge Browser",
    id: "edge",
    unicode: "f282",
    created: 4.5,
    filter: [
      "browser",
      "ie"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Credit Card",
    id: "credit-card-alt",
    unicode: "f283",
    created: 4.5,
    filter: [
      "money",
      "buy",
      "debit",
      "checkout",
      "purchase",
      "payment",
      "credit card"
    ],
    categories: [
      "支付图标",
      "Web应用程序图标"
    ]
  },
  {
    name: "Codie Pie",
    id: "codiepie",
    unicode: "f284",
    created: 4.5,
    url: "codiepie.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "MODX",
    id: "modx",
    unicode: "f285",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Fort Awesome",
    id: "fort-awesome",
    unicode: "f286",
    created: 4.5,
    url: "fortawesome.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "USB",
    id: "usb",
    unicode: "f287",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Product Hunt",
    id: "product-hunt",
    unicode: "f288",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Mixcloud",
    id: "mixcloud",
    unicode: "f289",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Scribd",
    id: "scribd",
    unicode: "f28a",
    created: 4.5,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pause Circle",
    id: "pause-circle",
    unicode: "f28b",
    created: 4.5,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Pause Circle Outlined",
    id: "pause-circle-o",
    unicode: "f28c",
    created: 4.5,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Stop Circle",
    id: "stop-circle",
    unicode: "f28d",
    created: 4.5,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Stop Circle Outlined",
    id: "stop-circle-o",
    unicode: "f28e",
    created: 4.5,
    categories: [
      "视频播放器图标"
    ]
  },
  {
    name: "Shopping Bag",
    id: "shopping-bag",
    unicode: "f290",
    created: 4.5,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Shopping Basket",
    id: "shopping-basket",
    unicode: "f291",
    created: 4.5,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Hashtag",
    id: "hashtag",
    unicode: "f292",
    created: 4.5,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bluetooth",
    id: "bluetooth",
    unicode: "f293",
    created: 4.5,
    categories: [
      "Web应用程序图标",
      "商标图标"
    ]
  },
  {
    name: "Bluetooth",
    id: "bluetooth-b",
    unicode: "f294",
    created: 4.5,
    categories: [
      "Web应用程序图标",
      "商标图标"
    ]
  },
  {
    name: "Percent",
    id: "percent",
    unicode: "f295",
    created: 4.5,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "GitLab",
    id: "gitlab",
    unicode: "f296",
    created: 4.6,
    url: "gitlab.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "WPBeginner",
    id: "wpbeginner",
    unicode: "f297",
    created: 4.6,
    url: "wpbeginner.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "WPForms",
    id: "wpforms",
    unicode: "f298",
    created: 4.6,
    url: "wpforms.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Envira Gallery",
    id: "envira",
    unicode: "f299",
    created: 4.6,
    url: "enviragallery.com",
    filter: [
      "leaf"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Universal Access",
    id: "universal-access",
    unicode: "f29a",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Wheelchair Alt",
    id: "wheelchair-alt",
    unicode: "f29b",
    created: 4.6,
    filter: [
      "handicap",
      "person"
    ],
    categories: [
      "Web应用程序图标",
      "医疗图标",
      "交通图标",
      "访问图标"
    ]
  },
  {
    name: "Question Circle Outlined",
    id: "question-circle-o",
    unicode: "f29c",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Blind",
    id: "blind",
    unicode: "f29d",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Audio Description",
    id: "audio-description",
    unicode: "f29e",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Volume Control Phone",
    id: "volume-control-phone",
    unicode: "f2a0",
    created: 4.6,
    filter: [
      "telephone"
    ],
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Braille",
    id: "braille",
    unicode: "f2a1",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Assistive Listening Systems",
    id: "assistive-listening-systems",
    unicode: "f2a2",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "American Sign Language Interpreting",
    id: "american-sign-language-interpreting",
    unicode: "f2a3",
    created: 4.6,
    aliases: [
      "asl-interpreting"
    ],
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Deaf",
    id: "deaf",
    unicode: "f2a4",
    created: 4.6,
    aliases: [
      "deafness",
      "hard-of-hearing"
    ],
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Glide",
    id: "glide",
    unicode: "f2a5",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Glide G",
    id: "glide-g",
    unicode: "f2a6",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Sign Language",
    id: "sign-language",
    unicode: "f2a7",
    created: 4.6,
    aliases: [
      "signing"
    ],
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Low Vision",
    id: "low-vision",
    unicode: "f2a8",
    created: 4.6,
    categories: [
      "Web应用程序图标",
      "访问图标"
    ]
  },
  {
    name: "Viadeo",
    id: "viadeo",
    unicode: "f2a9",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Viadeo Square",
    id: "viadeo-square",
    unicode: "f2aa",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Snapchat",
    id: "snapchat",
    unicode: "f2ab",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Snapchat Ghost",
    id: "snapchat-ghost",
    unicode: "f2ac",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Snapchat Square",
    id: "snapchat-square",
    unicode: "f2ad",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Pied Piper Logo",
    id: "pied-piper",
    unicode: "f2ae",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "First Order",
    id: "first-order",
    unicode: "f2b0",
    created: 4.6,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Yoast",
    id: "yoast",
    unicode: "f2b1",
    created: 4.6,
    url: "yoast.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "ThemeIsle",
    id: "themeisle",
    unicode: "f2b2",
    created: 4.6,
    url: "themeisle.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Google Plus Official",
    id: "google-plus-official",
    unicode: "f2b3",
    created: 4.6,
    aliases: [
      "google-plus-circle"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Font Awesome",
    id: "font-awesome",
    unicode: "f2b4",
    created: 4.6,
    aliases: [
      "fa"
    ],
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Handshake Outlined",
    id: "handshake-o",
    unicode: "f2b5",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Envelope Open",
    id: "envelope-open",
    unicode: "f2b6",
    created: 4.7,
    filter: [
      "email",
      "e-mail",
      "letter",
      "support",
      "mail",
      "message",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Envelope Open Outlined",
    id: "envelope-open-o",
    unicode: "f2b7",
    created: 4.7,
    filter: [
      "email",
      "e-mail",
      "letter",
      "support",
      "mail",
      "message",
      "notification"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Linode",
    id: "linode",
    unicode: "f2b8",
    created: 4.7,
    url: "linode.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Address Book",
    id: "address-book",
    unicode: "f2b9",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Address Book Outlined",
    id: "address-book-o",
    unicode: "f2ba",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Address Card",
    id: "address-card",
    unicode: "f2bb",
    created: 4.7,
    aliases: [
      "vcard"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Address Card Outlined",
    id: "address-card-o",
    unicode: "f2bc",
    created: 4.7,
    aliases: [
      "vcard-o"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "User Circle",
    id: "user-circle",
    unicode: "f2bd",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "User Circle Outlined",
    id: "user-circle-o",
    unicode: "f2be",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "User Outlined",
    id: "user-o",
    unicode: "f2c0",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Identification Badge",
    id: "id-badge",
    unicode: "f2c1",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Identification Card",
    id: "id-card",
    unicode: "f2c2",
    created: 4.7,
    aliases: [
      "drivers-license"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Identification Card Outlined",
    id: "id-card-o",
    unicode: "f2c3",
    created: 4.7,
    aliases: [
      "drivers-license-o"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Quora",
    id: "quora",
    unicode: "f2c4",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Free Code Camp",
    id: "free-code-camp",
    unicode: "f2c5",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Telegram",
    id: "telegram",
    unicode: "f2c6",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Thermometer Full",
    id: "thermometer-full",
    unicode: "f2c7",
    created: 4.7,
    aliases: [
      "thermometer-4",
      "thermometer"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Thermometer 3/4 Full",
    id: "thermometer-three-quarters",
    unicode: "f2c8",
    created: 4.7,
    aliases: [
      "thermometer-3"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Thermometer 1/2 Full",
    id: "thermometer-half",
    unicode: "f2c9",
    created: 4.7,
    aliases: [
      "thermometer-2"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Thermometer 1/4 Full",
    id: "thermometer-quarter",
    unicode: "f2ca",
    created: 4.7,
    aliases: [
      "thermometer-1"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Thermometer Empty",
    id: "thermometer-empty",
    unicode: "f2cb",
    created: 4.7,
    aliases: [
      "thermometer-0"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Shower",
    id: "shower",
    unicode: "f2cc",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bath",
    id: "bath",
    unicode: "f2cd",
    created: 4.7,
    aliases: [
      "bathtub",
      "s15"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Podcast",
    id: "podcast",
    unicode: "f2ce",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Window Maximize",
    id: "window-maximize",
    unicode: "f2d0",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Window Minimize",
    id: "window-minimize",
    unicode: "f2d1",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Window Restore",
    id: "window-restore",
    unicode: "f2d2",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Window Close",
    id: "window-close",
    unicode: "f2d3",
    created: 4.7,
    aliases: [
      "times-rectangle"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Window Close Outline",
    id: "window-close-o",
    unicode: "f2d4",
    created: 4.7,
    aliases: [
      "times-rectangle-o"
    ],
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Bandcamp",
    id: "bandcamp",
    unicode: "f2d5",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Grav",
    id: "grav",
    unicode: "f2d6",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Etsy",
    id: "etsy",
    unicode: "f2d7",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "IMDB",
    id: "imdb",
    unicode: "f2d8",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Ravelry",
    id: "ravelry",
    unicode: "f2d9",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Eercast",
    id: "eercast",
    unicode: "f2da",
    created: 4.7,
    url: "eercast.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Microchip",
    id: "microchip",
    unicode: "f2db",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Snowflake Outlined",
    id: "snowflake-o",
    unicode: "f2dc",
    created: 4.7,
    categories: [
      "Web应用程序图标"
    ]
  },
  {
    name: "Superpowers",
    id: "superpowers",
    unicode: "f2dd",
    created: 4.7,
    url: "superpowers.io",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "WPExplorer",
    id: "wpexplorer",
    unicode: "f2de",
    created: 4.7,
    url: "wpexplorer.com",
    categories: [
      "商标图标"
    ]
  },
  {
    name: "Meetup",
    id: "meetup",
    unicode: "f2e0",
    created: 4.7,
    categories: [
      "商标图标"
    ]
  }
], A = {
  icons: te
};
class ce extends Q {
  constructor() {
    super(...arguments);
    /**
     * 图标列表
     */
    W(this, "iconList", []);
  }
  /**
   * 初始化图标列表
   */
  initIconList() {
    if (!A)
      throw new re(this.model, "请配置实体和实体数据集");
    const { icons: i } = A;
    if (i && i.length > 0) {
      const r = [];
      i.forEach((n) => {
        n.categories.forEach((d) => {
          const l = r.findIndex(
            (s) => Object.is(s.type, d)
          );
          l === -1 ? r.push({
            type: d,
            children: [n]
          }) : (r[l].children || []).push(n);
        });
      }), this.iconList = r;
    }
  }
}
class oe {
  constructor() {
    W(this, "component", "IconPicker");
    W(this, "formEditor", "IconPicker");
    W(this, "gridEditor", "IconPicker");
  }
  async createController(c, i) {
    const r = new ce(c, i);
    return await r.init(), r;
  }
}
const me = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.component(P.name, P), _(
      "EDITOR_CUSTOMSTYLE_ICONPICKER",
      () => new oe()
    );
  }
};
export {
  me as default
};
