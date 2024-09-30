import './style.css';
var M = Object.defineProperty;
var $ = (r, i, t) => i in r ? M(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var u = (r, i, t) => ($(r, typeof i != "symbol" ? i + "" : i, t), t);
import { EditorController as U, ControllerEvent as _, registerEditorProvider as Z } from "@ibiz-template/runtime";
import { defineComponent as B, ref as C, watch as H, onBeforeUnmount as V, createVNode as o, createTextVNode as x, resolveComponent as b } from "vue";
import { getInputProps as R, getEditorEmits as W, useNamespace as Y } from "@ibiz-template/vue3-util";
const J = () => {
  const r = document.documentElement;
  return r ? getComputedStyle(r).getPropertyValue("--ibiz-color-primary") : null;
}, K = (r) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(r), k = (r) => /[\u4E00-\u9FA5]/.test(r), w = (r) => {
  if (!r)
    return "";
  let i = 0;
  for (let p = 0; p < r.length; p++)
    if (k(r))
      i = r.charCodeAt(p) + ((i << 5) - i), i = i & i;
    else {
      const h = r.charCodeAt(p);
      i += h.toString(16);
    }
  const t = String(i).substring(0, 6);
  let e = parseInt(t.substring(0, 2), 16), a = parseInt(t.substring(2, 4), 16), n = parseInt(t.substring(4, 6), 16);
  e < 0 && (e = 10), a < 0 && (a = 10), n < 0 && (n = 10);
  const m = "#".concat(e.toString(16).padStart(2, "0")).concat(a.toString(16).padStart(2, "0")).concat(n.toString(16).padStart(2, "0")).replaceAll("-", "0");
  return m === "#FFFFFF" && J() || m;
}, A = (r) => {
  if (r && r.toString().length < 2)
    return r;
  if (r && r.toString().length >= 2) {
    if (K(r)) {
      const a = r.split("").find((m) => /[a-zA-Z]/.test(m)) || "", n = r.split("").find((m) => /[\u4E00-\u9FA5]/.test(m)) || "";
      return "".concat(a).concat(n).toLowerCase();
    }
    return /[a-zA-Z]/.test(r) ? r.split("").filter((a) => /[a-zA-Z]/.test(a)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(r) ? r.split("").filter((a) => /[\u4E00-\u9FA5]/.test(a)).slice(-2).join("") : r.replaceAll(" ", "").substring(0, 2);
  }
};
const y = /* @__PURE__ */ B({
  name: "CommentList",
  props: {
    ...R(),
    value: {
      type: Array,
      default: () => []
    }
  },
  emits: W(),
  setup(r, {
    emit: i
  }) {
    const t = Y("comment-list"), e = r.controller, a = C(""), n = C([]), m = C([]);
    H(() => r.value, async (s) => {
      if (e.isLocal) {
        n.value = [];
        const c = await e.getLocalTempData();
        if (c) {
          const l = await c.fetchDefault(e.context);
          l.data && Array.isArray(l.data) && (n.value = l.data);
        }
      } else
        s ? Array.isArray(s) ? n.value = [...s] : n.value = [] : n.value = [];
    }, {
      immediate: !0,
      deep: !0
    });
    const p = (s) => {
      const {
        eventArg: c
      } = s;
      if (c) {
        const l = n.value.findIndex((d) => d.id === c);
        l >= 0 && n.value.splice(l, 1);
      }
    }, h = (s) => {
      n.value.push(s.eventArg);
    };
    e.evt.on("deleteItem", p), e.evt.on("addItem", h);
    const I = async (s) => {
      await ibiz.confirm.error({
        title: "是否删除"
      }) && e.deleteComment(s);
    }, P = () => {
      e.sendComment(a.value, r.data), a.value = "";
    }, E = (s) => {
      console.log("头像加载失败"), m.value.push(s);
    }, L = (s) => {
      if (!s)
        return null;
      const c = JSON.parse(s);
      if (c.length === 0)
        return null;
      const {
        downloadUrl: l
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, r.data, e.editorParams), d = l.replace("%fileId%", c[0].id);
      return o("img", {
        src: d,
        onError: () => E(s),
        alt: ""
      }, null);
    }, O = () => o("div", {
      class: t.e("header")
    }, [o("div", null, [n.value.length, x("条评论")]), o(b("el-divider"), null, null)]), D = () => {
      const {
        avatar: s,
        srfusername: c
      } = e.context;
      return s ? L(s) : o("div", {
        class: t.em("input", "current-label"),
        style: "background-color:".concat(w(c))
      }, [A(c)]);
    }, S = () => o("div", {
      class: t.e("input")
    }, [o("div", {
      class: t.em("input", "left")
    }, [o("div", {
      class: t.em("input", "avatar")
    }, [D()])]), o(b("el-input"), {
      class: t.em("input", "input"),
      modelValue: a.value,
      "onUpdate:modelValue": (s) => a.value = s,
      type: "textarea",
      rows: 1,
      autosize: a.value.length > 0
    }, null), o("div", {
      class: t.em("input", "right")
    }, [o(b("el-button"), {
      onClick: P
    }, {
      default: () => [x("发送")]
    })])]), T = (s) => {
      const c = e.operatorMap.get(s);
      let l, d = s;
      if (c) {
        const {
          label: f,
          iconurl: g
        } = c.data;
        d = f, g ? l = L(g) : l = A(f);
      } else
        l = A(s);
      return o("div", {
        class: t.em("item", "avatar")
      }, [o("div", {
        class: t.em("item", "img"),
        style: "background-color:".concat(w(d))
      }, [l]), o("div", {
        class: t.em("item", "label")
      }, [d])]);
    }, j = (s) => {
      const c = s.split(" ");
      if (c.length === 2) {
        const l = c[0].split("-"), d = /* @__PURE__ */ new Date(), f = d.getFullYear() - Number(l[0]), g = d.getMonth() + 1 - Number(l[1]), v = d.getDate() - Number(l[2]);
        if (f === 0) {
          if (g === 0) {
            if (v === 0)
              return "今天 ".concat(s.slice(11, -3));
            if (v === 1)
              return "昨天 ".concat(s.slice(11, -3));
            if (v === 2)
              return "前天 ".concat(s.slice(11, -3));
          }
          return s.slice(5, -3);
        }
        return s.slice(0, -3);
      }
    }, z = (s) => o("div", {
      class: t.e("item")
    }, [o("div", {
      class: t.em("item", "header")
    }, [T(s.create_man), o("span", {
      class: t.em("item", "time")
    }, [j(s.create_time)]), s.create_man === e.context.srfuserid ? o("span", {
      class: t.em("item", "delicon"),
      onClick: () => I(s)
    }, [o("i", {
      class: "fa fa-trash-o",
      "aria-hidden": "true"
    }, null)]) : null]), o("div", {
      class: t.em("item", "content")
    }, [s.content])]), N = () => o("div", {
      class: t.e("list")
    }, [n.value.map((s) => z(s))]), F = (s) => {
      s.stopPropagation(), s.preventDefault();
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
      const a = await this.getLocalTempData();
      if (a) {
        await ((e = a.local) == null ? void 0 : e.delete(this.context, t));
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
        const a = ibiz.uiDomainManager.get(this.context.srfsessionid);
        a && a.dataChangeCompleted();
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
    const e = this.parent.panel, a = this.parent.form;
    e ? e.evt.emit("deletecomment", {
      targetName: "comments",
      context: this.context,
      params: this.params,
      data: [t]
    }) : a && a.evt.emit("deletecomment", {
      targetName: "comments",
      context: this.context,
      params: this.params,
      data: [t]
    });
  }
  handleExtraParams(t) {
    const e = {};
    return Object.keys(this.extraParams).forEach((a) => {
      if (this.extraParams[a].startsWith("%") && this.extraParams[a].endsWith("%")) {
        const n = this.extraParams[a].slice(1, -1);
        Object.prototype.hasOwnProperty.call(this.context, n) ? Object.assign(e, { [a]: this.context[n] }) : Object.prototype.hasOwnProperty.call(this.params, n) ? Object.assign(e, { [a]: this.params[n] }) : Object.prototype.hasOwnProperty.call(t, n) ? Object.assign(e, { [a]: t[n] }) : Object.assign(e, { [a]: null });
      } else
        Object.assign(e, { [a]: this.extraParams[a] });
    }), e;
  }
  /**
   * 发送评论
   *
   * @memberof CommentListComtroller
   */
  sendComment(t, e) {
    const a = this.parent.panel, n = this.parent.form;
    if (a) {
      const m = this.handleExtraParams(a.inputData);
      Object.assign(m, { value: t }), a.evt.emit("sendcomment", {
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
      e.map((a) => [a.value, a])
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
  install(r) {
    r.component(y.name, y), Z(
      "EDITOR_CUSTOMSTYLE_COMMENT_LIST",
      () => new G()
    );
  }
};
export {
  at as default
};
