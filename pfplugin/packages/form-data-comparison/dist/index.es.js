import './style.css';
var U = Object.defineProperty;
var j = (r, m, a) => m in r ? U(r, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[m] = a;
var v = (r, m, a) => (j(r, typeof m != "symbol" ? m + "" : m, a), a);
import { useNamespace as B, useControlController as _, withInstall as k } from "@ibiz-template/vue3-util";
import { EditFormController as z, ControlVO as q, ScriptFactory as $, hasDeCodeName as J, calcDeCodeNameById as Q, FormNotifyState as H, calcNavParams as K, registerControlProvider as W } from "@ibiz-template/runtime";
import { defineComponent as X, ref as P, watch as V, reactive as Y, createVNode as s, createTextVNode as C, resolveComponent as E, isVNode as Z, h as S } from "vue";
import { clone as b } from "lodash-es";
class ee {
  constructor() {
    v(this, "component", "IBizFormDataComparison");
  }
}
class te extends z {
  constructor() {
    super(...arguments);
    /**
     *   基础数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 17:04:49
     * @type {IData}
     */
    v(this, "baseResData", []);
    /**
     *   对比数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 17:04:49
     * @type {IData}
     */
    v(this, "compareResData", []);
    /**
     * 表单旧数据
     *
     * @author zk
     * @date 2023-12-20 11:12:43
     * @protected
     * @type {IData}
     * @memberof FormController
     */
    v(this, "oldData", new q());
    /**
     * version数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 16:04:37
     * @type {IData[]}
     */
    v(this, "versionData", []);
    /**
     *  对比数据
     *
     * @author fangZhiHao
     * @date 2024-04-26 16:04:37
     * @type {IData[]}
     */
    v(this, "comparisonArr", {});
    /**
     *  基础表格数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:57
     * @type {IData[]}
     */
    v(this, "gridData", []);
    /**
     *  展示完全数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:04
     * @type {IData[]}
     */
    v(this, "AllGridData", []);
    /**
     *  去除相同数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:15
     * @type {IData[]}
     */
    v(this, "removeSameGridData", []);
    /**
     *  关系界面数据
     *
     * @author fangZhiHao
     * @date 2024-04-30 10:04:33
     * @type {IData}
     */
    v(this, "AlldruipartData", /* @__PURE__ */ new Map());
    /**
     *  关系界面数据长度
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:56
     * @type {number}
     */
    v(this, "druipartDataSize", 0);
    /**
     *   关系界面实际数据
     *
     * @author fangZhiHao
     * @date 2024-05-06 11:05:13
     * @type {IData}
     */
    v(this, "newDruipartData", {});
  }
  async onMounted() {
    await super.onMounted(), await this.getVersion(), this.model.deformPages && this.model.deformPages[0].deformDetails && this.calcGridData(this.model.deformPages[0].deformDetails), !this.state.isSimple && this.state.loadDefault && this.load();
  }
  /**
   *   获取版本数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:24
   */
  async getVersion() {
    var g;
    const { REQUESTMETHOD: a, REQUESTPARAMS: e, REQUESTURL: t, RESPONSEMAP: i } = (g = this.model.controlParam) == null ? void 0 : g.ctrlParams, n = a || "post", c = $.execScriptFn(
      { context: this.context, params: this.params },
      e,
      { singleRowReturn: !0 }
    ), l = await ibiz.net[n](t, {
      n_owner_id_eq: c
    }), d = JSON.parse(i), p = [];
    l.data.forEach((D) => {
      const y = {};
      for (const I in d)
        y[I] = D[d[I]];
      p.push(y);
    }), this.versionData = p;
  }
  /**
   *  设置关系界面数据
   *
   * @author fangZhiHao
   * @date 2024-04-30 10:04:15
   * @param {string} version
   * @param {string} name
   * @param {IData} data
   */
  calcAlldruipartData(a, e, t) {
    this.AlldruipartData.set("".concat(a).concat(e), t);
  }
  /**
   *  设置关系界面数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:38
   * @param {DataChangeEvent} args
   */
  setdruipartData(a) {
    const e = "".concat(a.context.version).concat(a.context.versionItemName);
    if (this.AlldruipartData.get(e)) {
      this.druipartDataSize += 1;
      const t = this.AlldruipartData.get(e), i = t.model.xdataControlName, n = t.getController(i), { compareItem: c, compareViewFieldName: l } = t.context, { version: d } = a.context;
      let p = [];
      if (c) {
        const g = c.split(",");
        n.state.items.forEach((D) => {
          const y = [];
          g.forEach((I) => {
            D[l] && D[l][I] && y.push(D[l][I]);
          }), y.sort(), y.length > 0 && p.push(y.join("."));
        });
      } else
        p = n.state.items;
      p.sort(), a.context.version === "base" ? this.baseResData[a.context.versionItemName] = p : this.compareResData[a.context.versionItemName] = p, this.newDruipartData[a.context.versionItemName] ? Object.assign(this.newDruipartData[a.context.versionItemName], {
        [d]: p
      }) : (this.newDruipartData[a.context.versionItemName] = {}, Object.assign(this.newDruipartData[a.context.versionItemName], {
        [d]: p
      }));
    }
    if (this.druipartDataSize === this.AlldruipartData.size) {
      const t = this.duripartDifference();
      this.calcCategorduriptData(this.AllGridData, t);
      const i = b(this.AllGridData);
      this.removeSameGridData = this.removeSame(i);
    }
  }
  /**
   * 计算关系界面的差异
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:15
   * @return {*}
   */
  duripartDifference() {
    const a = {}, e = {};
    for (const t in this.newDruipartData)
      Object.prototype.hasOwnProperty.call(this.newDruipartData, t) && (a[t] = this.newDruipartData[t].base, e[t] = this.newDruipartData[t].compare);
    return this.diffObjects(a, e);
  }
  /**
   *  计算duriput样式
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  calcCategorduriptData(a, e) {
    a.forEach((t) => {
      if (t.detailType === "DRUIPART") {
        const i = this.caleduriptCategory(t.name, e);
        t.category = i;
      }
      t.detailType === "GROUPPANEL" && t.slot.length > 0 && this.calcCategorduriptData(t.slot, e);
    });
  }
  /**
   *  计算关系界面差异
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:45
   * @param {string} codeName
   * @param {IData} result
   * @return {*}
   */
  caleduriptCategory(a, e) {
    return e.added.includes(a) ? "added" : e.modified.includes(a) ? "modified" : e.deleted.includes(a) ? "deleted" : "samed";
  }
  /**
   *  计算属性类别
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:42
   * @param {string} codeName
   * @return {*}
   */
  caleCategory(a) {
    return this.comparisonArr.added.includes(a) ? "added" : this.comparisonArr.modified.includes(a) ? "modified" : this.comparisonArr.deleted.includes(a) ? "deleted" : "samed";
  }
  /**
   *  计算表单分组
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:07
   * @param {IDEFormDetail[]} data
   * @return {*}
   */
  calcGroupPanel(a) {
    const e = [];
    return a.forEach((t) => {
      t.hidden !== !0 && (t.detailType === "FORMITEM" && e.push({
        detailType: t.detailType,
        caption: t.caption,
        name: t.codeName,
        oldItem: t,
        newItem: t
      }), t.detailType === "DRUIPART" && e.push({
        detailType: t.detailType,
        caption: t.caption,
        name: t.codeName,
        oldItem: t,
        newItem: t
      }), t.detailType === "MDCTRL" && e.push({
        detailType: t.detailType,
        caption: t.caption,
        name: t.codeName,
        oldItem: t,
        newItem: t
      }));
    }), e;
  }
  /**
   *  计算表格
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:07
   * @param {IDEFormDetail[]} data
   * @return {*}
   */
  calcGridData(a) {
    a.forEach((e) => {
      if (e.hidden !== !0) {
        if (e.detailType === "FORMITEM" && this.gridData.push({
          detailType: e.detailType,
          caption: e.caption,
          name: e.codeName,
          oldItem: e,
          newItem: e
        }), e.detailType === "GROUPPANEL") {
          let t = null;
          e.deformDetails && (t = this.calcGroupPanel(e.deformDetails)), this.gridData.push({
            detailType: e.detailType,
            caption: e.caption,
            slot: t
          });
        }
        e.detailType === "DRUIPART" && this.gridData.push({
          detailType: e.detailType,
          caption: e.caption,
          name: e.codeName,
          oldItem: e,
          newItem: e
        });
      }
    });
  }
  /**
   *  计算类别样式
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  calcCategoryGridData(a) {
    a.forEach((e) => {
      if (e.detailType === "FORMITEM") {
        const t = this.caleCategory(e.name);
        e.category = t;
      }
      if (e.detailType === "GROUPPANEL" && e.slot.length > 0 && this.calcCategoryGridData(e.slot), e.detailType === "MDCTRL") {
        const t = this.caleCategory(e.name);
        e.category = t;
      }
    });
  }
  /**
   *  去除相同项
   *
   * @author fangZhiHao
   * @date 2024-04-26 18:04:56
   * @param {IData[]} data
   */
  removeSame(a) {
    const e = [];
    return a.forEach((t) => {
      if (t.detailType === "FORMITEM" && t.category !== "samed" && e.push(t), t.detailType === "GROUPPANEL") {
        const i = [];
        t.slot.length > 0 && t.slot.forEach((n) => {
          (n.detailType === "FORMITEM" && n.category !== "samed" || n.detailType === "MDCTRL" && n.category !== "samed" || n.detailType === "DRUIPART" && n.category !== "samed") && i.push(n);
        }), i.length > 0 && e.push({
          caption: t.caption,
          detailType: t.detailType,
          slot: i
        });
      }
    }), e;
  }
  isFalseyButNotEmpty(a) {
    return a == null || typeof a == "string" && a === "" || Array.isArray(a) && a.length === 0 || typeof a == "object" && Object.keys(a).length === 0;
  }
  compareObjectValues(a, e) {
    return JSON.stringify(a) !== JSON.stringify(e);
  }
  /**
   *  判断两个对象的差异
   *  新增属性：在新对象中存在属性且属性值不能是falsey值（数字 0，布尔值 false 除外），不为空数组，不为空对象，且该属性在旧对象中不存在或其值为falsey值、空数组、空对象。
   *  修改属性：在新旧对象中都存在，且新旧值均不为falsey值（数字 0，布尔值 false 除外）、空对象、空数组，且值发生了变化。注意，对于引用对象，使用JSON.stringify进行字符串化对比。
   *  删除属性：在旧对象中存在且其值不是falsey值、空数组、空对象，但在新对象中不存在或其值为falsey值、空数组、空对象。
   *
   * @author fangZhiHao
   * @date 2024-04-26 13:04:59
   * @param {IData} oldObj
   * @param {IData} newObj
   * @return {*}
   */
  diffObjects(a, e) {
    const t = [], i = [], n = [];
    for (const c in e) {
      const l = a[c], d = e[c];
      this.isFalseyButNotEmpty(l) && !this.isFalseyButNotEmpty(d) && t.push(c);
    }
    for (const c in e) {
      const l = a[c], d = e[c];
      !this.isFalseyButNotEmpty(l) && !this.isFalseyButNotEmpty(d) && this.compareObjectValues(l, d) && i.push(c);
    }
    for (const c in a)
      if (!Object.prototype.hasOwnProperty.call(e, c) || this.isFalseyButNotEmpty(e[c])) {
        const l = a[c];
        this.isFalseyButNotEmpty(l) || n.push(c);
      }
    return {
      added: t,
      modified: i,
      deleted: n
    };
  }
  /**
   * 部件加载数据行为
   *
   * @author lxm
   * @date 2022-08-19 14:08:50
   */
  async load(a) {
    this.druipartDataSize = 0, this.newDruipartData = {}, this.AlldruipartData = /* @__PURE__ */ new Map();
    const e = this.params.srfcopymode;
    let t = "", i = "";
    const { base_version: n, compare_version: c } = this.params;
    if (t = a && a.data && a.data.baseVersion || n, i = a && a.data && a.data.compareVersion || c, this.state.isLoaded = !1, e)
      return this.copy();
    if (!J(
      this.context,
      Q(this.model.appDataEntityId)
    ))
      return this.loadDraft();
    const { context: d, params: p } = this.handlerAbilityParams(a), g = b(p);
    let D, y;
    try {
      await this.startLoading(), await this.evt.emit("onBeforeLoad", { args: g }), D = await this.service.get(
        d,
        Object.assign(g, { srfversionid: t })
      ), y = await this.service.get(
        d,
        Object.assign(g, { srfversionid: i })
      );
      const N = this.diffObjects(D.data, y.data);
      this.comparisonArr = N;
    } catch (N) {
      throw await this.evt.emit("onLoadError", { args: N }), this.actionNotification("GETERROR", {
        error: N
      }), N;
    } finally {
      await this.endLoading();
    }
    this.state.modified = !1, this.state.data = D.data, this.baseResData = D.data, this.compareResData = y.data, this.oldData = this.data.clone(), this.formStateNotify(H.LOAD), await this.evt.emit("onLoadSuccess", { args: D.data }), this.actionNotification("GETSUCCESS"), this.state.isLoaded = !0, this.AllGridData = b(this.gridData), this.calcCategoryGridData(this.AllGridData);
    const I = b(this.AllGridData);
    return this.removeSameGridData = this.removeSame(I), this.data;
  }
}
function A(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !Z(r);
}
const O = /* @__PURE__ */ X({
  name: "IBizFormDataComparison",
  props: {
    modelData: {
      type: Object,
      required: !0
    },
    context: {
      type: Object,
      required: !0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    provider: {
      type: Object
    },
    isSimple: {
      type: Boolean,
      required: !1
    },
    data: {
      type: Object,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(r) {
    const m = B("form-data-comparison"), a = [], e = _((...o) => new te(...o), {
      excludePropsKeys: ["data"]
    }), t = P(""), i = P(""), n = P(!1), c = P([]), l = P([]), {
      base_version: d,
      compare_version: p
    } = r.params;
    d && (t.value = d), p && (i.value = p), V(() => t.value, () => {
      e.load({
        data: {
          baseVersion: t.value,
          compareVersion: i.value
        }
      });
    }), V(() => i.value, () => {
      e.load({
        data: {
          baseVersion: t.value,
          compareVersion: i.value
        }
      });
    }), r.isSimple && (e.evt.on("onMounted", () => {
      e.setSimpleData(r.data || {});
    }), V(() => r.data, (o) => {
      const h = o || {};
      Object.keys(e.data).find((f) => h[f] !== e.data[f]) && e.setSimpleData(h);
    }, {
      deep: !0
    })), e.evt.on("onCreated", () => {
      Object.keys(e.details).forEach((h) => {
        const u = e.details[h];
        u.state = Y(u.state);
      });
    });
    const g = (o, h) => {
      const u = e.formItems.find((T) => T.name === o.codeName);
      let f = "";
      o.codeName && (f = h[o.codeName]);
      let R = null;
      if (u) {
        const T = {
          value: f,
          data: e.data,
          controller: u.editor,
          readonly: !0,
          disabled: !0
        };
        if (u.editorProvider) {
          const w = E(u.editorProvider.formEditor);
          R = S(w, {
            ...T
          });
        }
      }
      return R;
    }, D = (o, h, u, f) => {
      const {
        navigateContexts: R,
        navigateParams: T
      } = o, w = {
        navContexts: R,
        navParams: T
      }, M = {
        context: u,
        params: f,
        data: h
      }, {
        resultContext: x,
        resultParams: F
      } = K(w, M), G = Object.assign(u.clone(), x, {
        currentSrfNav: o.id
      }), L = {
        ...f,
        ...F
      };
      return {
        newContext: G,
        newParams: L
      };
    }, y = (o) => {
      e.calcAlldruipartData(o.context.version, o.context.versionItemName, o.view);
    }, I = (o) => {
      e.setdruipartData(o);
    };
    return {
      baseVersion: t,
      compareVersion: i,
      switchValue: n,
      c: e,
      ns: m,
      gridData: l,
      formItems: a,
      activeNames: c,
      renderEditor: g,
      renderDruipart: (o, h, u) => {
        if (h[o.codeName] && h[o.codeName].length === 0)
          return null;
        const f = e.context.clone(), R = b(h);
        Object.assign(f, R);
        const {
          newContext: T,
          newParams: w
        } = D(o, R, f, {});
        return Object.assign(T, {
          version: u
        }, {
          versionItemName: o.codeName
        }, {
          compareItem: o.userTag2 || ""
        }, {
          compareViewFieldName: o.userTag || ""
        }), S(E("IBizViewShell"), {
          context: T,
          params: w,
          key: o.id,
          viewId: o.appViewId,
          onCreated: y,
          onDataChange: I
        });
      },
      renderMdctrl: (o, h) => {
        const u = e.formMDCtrls.find((T) => o.codeName === T.name), f = b(u), {
          codeName: R
        } = o;
        return o.contentType === "REPEATER" ? s("div", null, [h[R] && h[R].map((T) => s("div", null, [o.deformDetails && o.deformDetails.map((w) => s("div", null, [T[w.codeName]]))]))]) : s(E("iBizFormMDCtrl"), {
          modelData: f.model,
          controller: f
        }, null);
      }
    };
  },
  render() {
    let r, m, a;
    if (this.c.state.isLoaded)
      this.switchValue ? this.gridData = this.c.removeSameGridData : this.gridData = this.c.AllGridData;
    else
      return null;
    return s("div", {
      class: [this.ns.b()]
    }, [s("div", {
      class: this.ns.e("top-hidesame-content")
    }, [s("div", {
      class: this.ns.e("top-hidesame-content-left")
    }, [C("隐藏相同项 "), s(E("el-switch"), {
      modelValue: this.switchValue,
      "onUpdate:modelValue": (e) => this.switchValue = e
    }, null)]), s("div", {
      class: this.ns.e("top-hidesame-content-right")
    }, [s("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [C("新增"), s("div", {
      class: this.ns.e("top-hidesame-content-right-item-add")
    }, null)]), s("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [C("修改"), s("div", {
      class: this.ns.e("top-hidesame-content-right-item-change")
    }, null)]), s("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [C("删除"), s("div", {
      class: this.ns.e("top-hidesame-content-right-item-delete")
    }, null)])])]), s("div", {
      class: this.ns.e("top-content")
    }, [s("div", {
      class: this.ns.e("top-content-left")
    }, [s("div", {
      class: this.ns.e("top-content-left-attribute")
    }, [C("属性")]), s("div", {
      class: this.ns.e("top-content-left-version")
    }, [C("版本号")])]), s("div", {
      class: [this.ns.e("top-content-choose"), this.baseVersion !== this.compareVersion ? "modified" : ""]
    }, [s(E("el-select"), {
      modelValue: this.baseVersion,
      "onUpdate:modelValue": (e) => this.baseVersion = e,
      size: "large",
      class: this.ns.e("top-content-choose-select")
    }, A(r = this.c.versionData.map((e) => s(E("el-option"), {
      key: e.id,
      label: e.label,
      value: e.id
    }, null))) ? r : {
      default: () => [r]
    })]), s("div", {
      class: [this.ns.e("top-content-choose"), this.baseVersion !== this.compareVersion ? "modified" : ""]
    }, [s(E("el-select"), {
      modelValue: this.compareVersion,
      "onUpdate:modelValue": (e) => this.compareVersion = e,
      size: "large",
      class: this.ns.e("top-content-choose-select")
    }, A(m = this.c.versionData.map((e) => s(E("el-option"), {
      key: e.id,
      label: e.label,
      value: e.id
    }, null))) ? m : {
      default: () => [m]
    })])]), s(E("el-collapse"), {
      modelValue: this.activeNames,
      "onUpdate:modelValue": (e) => this.activeNames = e
    }, A(a = this.gridData.map((e) => {
      if (e.detailType === "FORMITEM")
        return s("div", {
          class: [this.ns.e("mid-content"), e.category]
        }, [s("div", {
          class: this.ns.e("mid-content-left")
        }, [e.caption]), s("div", {
          class: this.ns.e("mid-content-item")
        }, [this.renderEditor(e.oldItem, this.c.baseResData)]), s("div", {
          class: this.ns.e("mid-content-item")
        }, [this.renderEditor(e.newItem, this.c.compareResData)])]);
      if (e.detailType === "GROUPPANEL")
        return s(E("el-collapse-item"), {
          class: this.ns.e("collapse-item"),
          title: e.caption
        }, {
          default: () => [e.slot && e.slot.map((t) => s("div", {
            class: [this.ns.e("mid-content"), "slot", t.category]
          }, [s("div", {
            class: [this.ns.e("mid-content-left"), "slot"]
          }, [t.caption]), s("div", {
            class: this.ns.e("mid-content-item")
          }, [t.detailType === "FORMITEM" && this.renderEditor(t.oldItem, this.c.baseResData), t.detailType === "DRUIPART" && this.renderDruipart(t.oldItem, this.c.baseResData, "base"), t.detailType === "MDCTRL" && this.renderMdctrl(t.oldItem, this.c.baseResData)]), s("div", {
            class: this.ns.e("mid-content-item")
          }, [t.detailType === "FORMITEM" && this.renderEditor(t.newItem, this.c.compareResData), t.detailType === "DRUIPART" && this.renderDruipart(t.newItem, this.c.compareResData, "compare"), t.detailType === "MDCTRL" && this.renderMdctrl(t.newItem, this.c.compareResData)])]))]
        });
    })) ? a : {
      default: () => [a]
    })]);
  }
}), ae = k(
  O,
  // eslint-disable-next-line func-names
  function(r) {
    r.component(O.name, O), W(
      "EDITFORM_RENDER_FORM_DATA_COMPARISON",
      () => new ee()
    );
  }
), de = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(ae);
  }
};
export {
  ae as IBizFormDataComparison,
  de as default
};
