import './style.css';
var M = Object.defineProperty;
var $ = (s, i, t) => i in s ? M(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var u = (s, i, t) => ($(s, typeof i != "symbol" ? i + "" : i, t), t);
import { EditorController as U, ControllerEvent as _, registerEditorProvider as Z } from "@ibiz-template/runtime";
import { defineComponent as B, ref as C, watch as H, onBeforeUnmount as V, createVNode as o, createTextVNode as x, resolveComponent as b } from "vue";
import { getInputProps as R, getEditorEmits as W, useNamespace as Y } from "@ibiz-template/vue3-util";
const J = () => {
  const s = document.documentElement;
  return s ? getComputedStyle(s).getPropertyValue("--ibiz-color-primary") : null;
}, K = (s) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(s), k = (s) => /[\u4E00-\u9FA5]/.test(s), y = (s) => {
  if (!s)
    return "";
  let i = 0;
  for (let p = 0; p < s.length; p++)
    if (k(s))
      i = s.charCodeAt(p) + ((i << 5) - i), i = i & i;
    else {
      const h = s.charCodeAt(p);
      i += h.toString(16);
    }
  const t = String(i).substring(0, 6), e = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), n = parseInt(t.substring(4, 6), 16), m = "#".concat(e.toString(16).padStart(2, "0")).concat(r.toString(16).padStart(2, "0")).concat(n.toString(16).padStart(2, "0")).replaceAll("-", "0");
  return m === "#FFFFFF" && J() || m;
}, A = (s) => {
  if (s && s.toString().length < 2)
    return s;
  if (s && s.toString().length >= 2) {
    if (K(s)) {
      const r = s.split("").find((m) => /[a-zA-Z]/.test(m)) || "", n = s.split("").find((m) => /[\u4E00-\u9FA5]/.test(m)) || "";
      return "".concat(r).concat(n).toLowerCase();
    }
    return /[a-zA-Z]/.test(s) ? s.split("").filter((r) => /[a-zA-Z]/.test(r)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(s) ? s.split("").filter((r) => /[\u4E00-\u9FA5]/.test(r)).slice(-2).join("") : s.replaceAll(" ", "").substring(0, 2);
  }
};
const I = /* @__PURE__ */ B({
  name: "CommentList",
  props: {
    ...R(),
    value: {
      type: Array,
      default: () => []
    }
  },
  emits: W(),
  setup(s, {
    emit: i
  }) {
    const t = Y("comment-list"), e = s.controller, r = C(""), n = C([]), m = C([]);
    H(() => s.value, async (a) => {
      if (e.isLocal) {
        n.value = [];
        const c = await e.getLocalTempData();
        if (c) {
          const l = await c.fetchDefault(e.context);
          l.data && Array.isArray(l.data) && (n.value = l.data);
        }
      } else
        a ? Array.isArray(a) ? n.value = [...a] : n.value = [] : n.value = [];
    }, {
      immediate: !0,
      deep: !0
    });
    const p = (a) => {
      const {
        eventArg: c
      } = a;
      if (c) {
        const l = n.value.findIndex((d) => d.id === c);
        l >= 0 && n.value.splice(l, 1);
      }
    }, h = (a) => {
      n.value.push(a.eventArg);
    };
    e.evt.on("deleteItem", p), e.evt.on("addItem", h);
    const P = async (a) => {
      await ibiz.confirm.error({
        title: "是否删除"
      }) && e.deleteComment(a);
    }, w = () => {
      e.sendComment(r.value, s.data), r.value = "";
    }, E = (a) => {
      console.log("头像加载失败"), m.value.push(a);
    }, L = (a) => {
      if (!a)
        return null;
      const c = JSON.parse(a);
      if (c.length === 0)
        return null;
      const {
        downloadUrl: l
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, s.data, e.editorParams), d = l.replace("%fileId%", c[0].id);
      return o("img", {
        src: d,
        onError: () => E(a),
        alt: ""
      }, null);
    }, O = () => o("div", {
      class: t.e("header")
    }, [o("div", null, [n.value.length, x("条评论")]), o(b("el-divider"), null, null)]), D = () => {
      const {
        avatar: a,
        srfusername: c
      } = e.context;
      return a ? L(a) : o("div", {
        class: t.em("input", "current-label"),
        style: "background-color:".concat(y(c))
      }, [A(c)]);
    }, S = () => o("div", {
      class: t.e("input")
    }, [o("div", {
      class: t.em("input", "left")
    }, [o("div", {
      class: t.em("input", "avatar")
    }, [D()])]), o(b("el-input"), {
      class: t.em("input", "input"),
      modelValue: r.value,
      "onUpdate:modelValue": (a) => r.value = a,
      type: "textarea",
      autosize: !0
    }, null), o("div", {
      class: t.em("input", "right")
    }, [o(b("el-button"), {
      onClick: w
    }, {
      default: () => [x("发送")]
    })])]), T = (a) => {
      const c = e.operatorMap.get(a);
      let l, d = a;
      if (c) {
        const {
          label: f,
          iconurl: g
        } = c.data;
        d = f, g ? l = L(g) : l = A(f);
      } else
        l = A(a);
      return o("div", {
        class: t.em("item", "avatar")
      }, [o("div", {
        class: t.em("item", "img"),
        style: "background-color:".concat(y(d))
      }, [l]), o("div", {
        class: t.em("item", "label")
      }, [d])]);
    }, j = (a) => {
      const c = a.split(" ");
      if (c.length === 2) {
        const l = c[0].split("-"), d = /* @__PURE__ */ new Date(), f = d.getFullYear() - Number(l[0]), g = d.getMonth() + 1 - Number(l[1]), v = d.getDate() - Number(l[2]);
        if (f === 0) {
          if (g === 0) {
            if (v === 0)
              return "今天 ".concat(a.slice(11, -3));
            if (v === 1)
              return "昨天 ".concat(a.slice(11, -3));
            if (v === 2)
              return "前天 ".concat(a.slice(11, -3));
          }
          return a.slice(5, -3);
        }
        return a.slice(0, -3);
      }
    }, z = (a) => o("div", {
      class: t.e("item")
    }, [o("div", {
      class: t.em("item", "header")
    }, [T(a.create_man), o("span", {
      class: t.em("item", "time")
    }, [j(a.create_time)]), a.create_man === e.context.srfuserid ? o("span", {
      class: t.em("item", "delicon"),
      onClick: () => P(a)
    }, [o("i", {
      class: "fa fa-trash-o",
      "aria-hidden": "true"
    }, null)]) : null]), o("div", {
      class: t.em("item", "content")
    }, [a.content])]), N = () => o("div", {
      class: t.e("list")
    }, [n.value.map((a) => z(a))]), F = (a) => {
      a.stopPropagation(), a.preventDefault();
    };
    return V(() => {
      e.evt.off("addItem", h), e.evt.off("deleteItem", p);
    }), {
      ns: t,
      c: e,
      renderHeader: O,
      renderInput: S,
      renderList: N,
      stopClick: F
    };
  },
  render() {
    return o("div", {
      class: this.ns.b(),
      onClick: this.stopClick
    }, [this.renderHeader(), this.renderInput(), this.renderList()]);
  }
});
class q extends U {
  constructor() {
    super(...arguments);
    /**
     * 是否走本地模式
     *
     * @type {boolean}
     * @memberof CommentListComtroller
     */
    u(this, "isLocal", !1);
    /**
     * 用户列表
     *
     * @memberof CommentListComtroller
     */
    u(this, "operatorMap", /* @__PURE__ */ new Map());
    u(this, "evt", new _(
      () => ({
        context: this.context,
        params: this.params,
        data: [],
        eventArg: "",
        targetName: this.model.name,
        view: this.parent.view
      })
    ));
    /**
     * 代码表模型
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-05-24 10:55:50
     */
    u(this, "codeList");
    u(this, "extraParams", {});
  }
  async onInit() {
    super.onInit(), await this.getOperatorUserList(), this.editorParams && this.editorParams.PID && Object.assign(this.extraParams, { pid: this.editorParams.PID }), this.editorParams && this.editorParams.ISLOCAL === "TRUE" && (this.isLocal = !0);
  }
  /**
   * 删除项
   *
   * @param {string} key
   * @memberof CommentListComtroller
   */
  async deleteItem(t) {
    var e;
    if (this.isLocal) {
      const r = await this.getLocalTempData();
      if (r) {
        await ((e = r.local) == null ? void 0 : e.delete(this.context, t));
        const n = ibiz.uiDomainManager.get(this.context.srfsessionid);
        n && n.dataChangeCompleted();
      }
    }
    this.evt.emit("deleteItem", {
      eventArg: t
    });
  }
  async getLocalTempData() {
    const { form: t } = this.parent;
    if (t) {
      const { srfappid: e } = this.context;
      return await ibiz.hub.getAppDEService(
        e,
        "plmweb.comment",
        this.context
      );
    }
  }
  /**
   * 添加项
   *
   * @param {IData} item
   * @memberof CommentListComtroller
   */
  async addItem(t) {
    if (this.isLocal) {
      const e = await this.getLocalTempData();
      if (e) {
        await e.create(this.context, t);
        const r = ibiz.uiDomainManager.get(this.context.srfsessionid);
        r && r.dataChangeCompleted();
      }
    }
    this.evt.emit("addItem", {
      eventArg: t
    });
  }
  /**
   * 删除评论
   *
   * @param {IData} item
   * @memberof CommentListComtroller
   */
  deleteComment(t) {
    const e = this.parent.panel, r = this.parent.form;
    e ? e.evt.emit("deletecomment", {
      targetName: "comments",
      context: this.context,
      params: this.params,
      data: [t]
    }) : r && r.evt.emit("deletecomment", {
      targetName: "comments",
      context: this.context,
      params: this.params,
      data: [t]
    });
  }
  handleExtraParams(t) {
    const e = {};
    return Object.keys(this.extraParams).forEach((r) => {
      if (this.extraParams[r].startsWith("%") && this.extraParams[r].endsWith("%")) {
        const n = this.extraParams[r].slice(1, -1);
        Object.prototype.hasOwnProperty.call(this.context, n) ? Object.assign(e, { [r]: this.context[n] }) : Object.prototype.hasOwnProperty.call(this.params, n) ? Object.assign(e, { [r]: this.params[n] }) : Object.prototype.hasOwnProperty.call(t, n) ? Object.assign(e, { [r]: t[n] }) : Object.assign(e, { [r]: null });
      } else
        Object.assign(e, { [r]: this.extraParams[r] });
    }), e;
  }
  /**
   * 发送评论
   *
   * @memberof CommentListComtroller
   */
  sendComment(t, e) {
    const r = this.parent.panel, n = this.parent.form;
    if (r) {
      const m = this.handleExtraParams(r.inputData);
      Object.assign(m, { value: t }), r.evt.emit("sendcomment", {
        targetName: "comments",
        context: this.context,
        params: this.params,
        data: [m]
      });
    } else if (n) {
      const m = this.handleExtraParams(e);
      Object.assign(m, { value: t }), n.evt.emit("sendcomment", {
        targetName: "comments",
        context: this.context,
        params: this.params,
        data: [m]
      });
    }
  }
  /**
   * 获取操作用户列表
   *
   * @memberof PersonelSelectController
   */
  async getOperatorUserList() {
    const t = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await t.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((r) => [r.value, r])
    );
  }
}
class G {
  constructor() {
    u(this, "component", "CommentList");
    u(this, "formEditor", "CommentList");
    u(this, "gridEditor", "CommentList");
  }
  async createController(i, t) {
    const e = new q(i, t);
    return await e.init(), e;
  }
}
const at = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.component(I.name, I), Z(
      "EDITOR_CUSTOMSTYLE_COMMENT_LIST",
      () => new G()
    );
  }
};
export {
  at as default
};
