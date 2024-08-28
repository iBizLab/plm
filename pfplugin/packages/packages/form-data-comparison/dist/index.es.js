import './style.css';
var j = Object.defineProperty;
var B = (l, u, a) => u in l ? j(l, u, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[u] = a;
var v = (l, u, a) => (B(l, typeof u != "symbol" ? u + "" : u, a), a);
import { useNamespace as z, useControlController as k, withInstall as $ } from "@ibiz-template/vue3-util";
import { EditFormController as q, ControlVO as J, getFormDetailProvider as F, isFormDataContainer as Q, findChildFormDetails as K, ScriptFactory as H, hasDeCodeName as W, calcDeCodeNameById as X, FormNotifyState as Y, calcNavParams as Z, registerControlProvider as ee } from "@ibiz-template/runtime";
import { defineComponent as te, ref as b, watch as V, reactive as ae, createVNode as i, createTextVNode as P, resolveComponent as C, isVNode as se, h as M } from "vue";
import { clone as I } from "lodash-es";
import { RuntimeModelError as oe } from "@ibiz-template/core";
class ie {
  constructor() {
    v(this, "component", "IBizFormDataComparison");
  }
}
class re extends q {
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
    v(this, "oldData", new J());
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
    await super.onMounted(), await this.getVersion(), this.model.deformPages && this.model.deformPages[0].deformDetails && await this.calcGridData(this.model.deformPages[0].deformDetails), !this.state.isSimple && this.state.loadDefault && this.load();
  }
  /**
   * 初始化表单成员控制器
   *
   * @author lxm
   * @date 2022-08-24 21:08:48
   * @protected
   */
  async initDetailControllers(a = this.model.deformPages, e = this, t = void 0) {
    await Promise.all(
      a.map(async (s) => {
        const r = await F(s, this.model);
        if (!r)
          return;
        if (e.details[s.id])
          throw new oe(
            s,
            ibiz.i18n.t(
              "runtime.controller.control.form.initializationException",
              {
                id: s.id,
                detailType: s.detailType
              }
            )
          );
        e.providers[s.id] = r;
        const n = await r.createController(
          s,
          e,
          t
        );
        if (e.details[s.id] = n, s.detailType === "FORMITEM" && e.formItems.push(n), s.detailType === "MDCTRL") {
          e.formMDCtrls.push(n);
          const c = s.id, p = await r.createController(
            { ...s, id: "new_".concat(c) },
            e,
            t
          );
          e.details["new_".concat(c)] = p, console.log("detailController", n, s), e.formMDCtrls.push(p);
        }
        if (Q(s))
          return;
        const d = K(s);
        d.length && await this.initDetailControllers(
          d,
          e,
          n
        );
      })
    );
  }
  /**
   *   获取版本数据
   *
   * @author fangZhiHao
   * @date 2024-05-06 11:05:24
   */
  async getVersion() {
    var w;
    const { REQUESTMETHOD: a, REQUESTPARAMS: e, REQUESTURL: t, RESPONSEMAP: s } = (w = this.model.controlParam) == null ? void 0 : w.ctrlParams, r = a || "post", n = H.execScriptFn(
      { context: this.context, params: this.params },
      e,
      { singleRowReturn: !0 }
    ), d = await ibiz.net[r](t, {
      n_owner_id_eq: n
    }), c = JSON.parse(s), p = [];
    d.data.forEach((m) => {
      const f = {};
      for (const R in c)
        f[R] = m[c[R]];
      p.push(f);
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
      const t = this.AlldruipartData.get(e), s = t.model.xdataControlName, r = t.getController(s), { compareItem: n, compareViewFieldName: d } = t.context, { version: c } = a.context;
      let p = [];
      if (n) {
        const w = n.split(",");
        r.state.items.forEach((m) => {
          const f = [];
          w.forEach((R) => {
            m[d] && m[d][R] && f.push(m[d][R]);
          }), f.sort(), f.length > 0 && p.push(f.join("."));
        });
      } else
        p = r.state.items;
      p.sort(), a.context.version === "base" ? this.baseResData[a.context.versionItemName] = p : this.compareResData[a.context.versionItemName] = p, this.newDruipartData[a.context.versionItemName] ? Object.assign(this.newDruipartData[a.context.versionItemName], {
        [c]: p
      }) : (this.newDruipartData[a.context.versionItemName] = {}, Object.assign(this.newDruipartData[a.context.versionItemName], {
        [c]: p
      }));
    }
    if (this.druipartDataSize === this.AlldruipartData.size) {
      const t = this.duripartDifference();
      this.calcCategorduriptData(this.AllGridData, t);
      const s = I(this.AllGridData);
      this.removeSameGridData = this.removeSame(s);
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
        const s = this.caleduriptCategory(t.name, e);
        t.category = s;
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
    return a.forEach(async (t) => {
      if (t.hidden !== !0 && (t.detailType === "FORMITEM" && e.push({
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
      }), t.detailType === "MDCTRL")) {
        let s = "";
        if (t.sysPFPluginId) {
          const r = await F(
            t,
            this.model
          );
          r && (s = r.component);
        }
        e.push({
          detailType: t.detailType,
          caption: t.caption,
          name: t.codeName,
          oldItem: t,
          newItem: t,
          component: s
        });
      }
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
    a.forEach(async (e) => {
      if (e.hidden !== !0) {
        if (e.detailType === "FORMITEM" && this.gridData.push({
          detailType: e.detailType,
          caption: e.caption,
          name: e.codeName,
          oldItem: e,
          newItem: e
        }), e.detailType === "GROUPPANEL") {
          let t = null;
          e.deformDetails && (t = await this.calcGroupPanel(e.deformDetails)), this.gridData.push({
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
        const s = [];
        t.slot.length > 0 && t.slot.forEach((r) => {
          (r.detailType === "FORMITEM" && r.category !== "samed" || r.detailType === "MDCTRL" && r.category !== "samed" || r.detailType === "DRUIPART" && r.category !== "samed") && s.push(r);
        }), s.length > 0 && e.push({
          caption: t.caption,
          detailType: t.detailType,
          slot: s
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
    const t = [], s = [], r = [];
    for (const n in e) {
      const d = a[n], c = e[n];
      this.isFalseyButNotEmpty(d) && !this.isFalseyButNotEmpty(c) && t.push(n);
    }
    for (const n in e) {
      const d = a[n], c = e[n];
      !this.isFalseyButNotEmpty(d) && !this.isFalseyButNotEmpty(c) && this.compareObjectValues(d, c) && s.push(n);
    }
    for (const n in a)
      if (!Object.prototype.hasOwnProperty.call(e, n) || this.isFalseyButNotEmpty(e[n])) {
        const d = a[n];
        this.isFalseyButNotEmpty(d) || r.push(n);
      }
    return {
      added: t,
      modified: s,
      deleted: r
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addPrefixToKeys(a, e) {
    return Object.keys(a).reduce((t, s) => (t[e + s] = a[s], t), {});
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
    let t = "", s = "";
    const { base_version: r, compare_version: n } = this.params;
    if (t = a && a.data && a.data.baseVersion || r, s = a && a.data && a.data.compareVersion || n, this.state.isLoaded = !1, e)
      return this.copy();
    if (!W(
      this.context,
      X(this.model.appDataEntityId)
    ))
      return this.loadDraft();
    const { context: c, params: p } = this.handlerAbilityParams(a), w = I(p);
    let m, f;
    try {
      await this.startLoading(), await this.evt.emit("onBeforeLoad", { args: w }), m = await this.service.get(
        c,
        Object.assign(w, { srfversionid: t })
      ), console.log("res", m), f = await this.service.get(
        c,
        Object.assign(w, { srfversionid: s })
      );
      const o = this.diffObjects(m.data, f.data);
      this.comparisonArr = o;
    } catch (o) {
      throw await this.evt.emit("onLoadError", { args: o }), this.actionNotification("GETERROR", {
        error: o
      }), o;
    } finally {
      await this.endLoading();
    }
    this.state.modified = !1;
    const R = I(f.data), A = this.addPrefixToKeys(R, "new_");
    this.state.data = { ...m.data, ...A }, this.baseResData = m.data, this.compareResData = f.data, this.oldData = this.data, this.formStateNotify(Y.LOAD), await this.evt.emit("onLoadSuccess", { args: m.data }), this.actionNotification("GETSUCCESS"), this.state.isLoaded = !0, this.AllGridData = I(this.gridData), this.calcCategoryGridData(this.AllGridData);
    const S = I(this.AllGridData);
    return this.removeSameGridData = this.removeSame(S), this.data;
  }
}
function O(l) {
  return typeof l == "function" || Object.prototype.toString.call(l) === "[object Object]" && !se(l);
}
const x = /* @__PURE__ */ te({
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
  setup(l) {
    const u = z("form-data-comparison"), a = [], e = k((...o) => new re(...o), {
      excludePropsKeys: ["data"]
    }), t = b(""), s = b(""), r = b(!1), n = b([]), d = b([]), {
      base_version: c,
      compare_version: p
    } = l.params;
    c && (t.value = c), p && (s.value = p), V(() => t.value, () => {
      e.load({
        data: {
          baseVersion: t.value,
          compareVersion: s.value
        }
      });
    }), V(() => s.value, () => {
      e.load({
        data: {
          baseVersion: t.value,
          compareVersion: s.value
        }
      });
    }), l.isSimple && (e.evt.on("onMounted", () => {
      e.setSimpleData(l.data || {});
    }), V(() => l.data, (o) => {
      const h = o || {};
      Object.keys(e.data).find((y) => h[y] !== e.data[y]) && e.setSimpleData(h);
    }, {
      deep: !0
    })), e.evt.on("onCreated", () => {
      Object.keys(e.details).forEach((h) => {
        const D = e.details[h];
        D.state = ae(D.state);
      });
    });
    const w = (o, h) => {
      const D = e.formItems.find((g) => g.name === o.codeName);
      let y = "";
      o.codeName && (y = h[o.codeName]);
      let T = null;
      if (D) {
        const g = {
          value: y,
          data: e.data,
          controller: D.editor,
          readonly: !0,
          disabled: !0
        };
        if (D.editorProvider) {
          const E = C(D.editorProvider.formEditor);
          T = M(E, {
            ...g
          });
        }
      }
      return T;
    }, m = (o, h, D, y) => {
      const {
        navigateContexts: T,
        navigateParams: g
      } = o, E = {
        navContexts: T,
        navParams: g
      }, N = {
        context: D,
        params: y,
        data: h
      }, {
        resultContext: G,
        resultParams: L
      } = Z(E, N), _ = Object.assign(D.clone(), G, {
        currentSrfNav: o.id
      }), U = {
        ...y,
        ...L
      };
      return {
        newContext: _,
        newParams: U
      };
    }, f = (o) => {
      e.calcAlldruipartData(o.context.version, o.context.versionItemName, o.view);
    }, R = (o) => {
      e.setdruipartData(o);
    };
    return {
      baseVersion: t,
      compareVersion: s,
      switchValue: r,
      c: e,
      ns: u,
      gridData: d,
      formItems: a,
      activeNames: n,
      renderEditor: w,
      renderDruipart: (o, h, D) => {
        if (h[o.codeName] && h[o.codeName].length === 0)
          return null;
        const y = e.context.clone(), T = I(h);
        Object.assign(y, T);
        const {
          newContext: g,
          newParams: E
        } = m(o, T, y, {});
        return Object.assign(g, {
          version: D
        }, {
          versionItemName: o.codeName
        }, {
          compareItem: o.userTag2 || ""
        }, {
          compareViewFieldName: o.userTag || ""
        }), M(C("IBizViewShell"), {
          context: g,
          params: E,
          key: o.id,
          viewId: o.appViewId,
          onCreated: f,
          onDataChange: R
        });
      },
      renderMdctrl: (o, h, D, y) => {
        let T = null;
        h === "old" ? T = e.formMDCtrls.find((N) => o.codeName === N.name) : h === "new" && (T = e.formMDCtrls.find((N) => "new_".concat(o.codeName) === N.name));
        const g = I(T);
        let E = "iBizFormMDCtrl";
        return y && (E = y), M(C(E), {
          controller: g,
          modelData: g.model
        });
      }
    };
  },
  render() {
    let l, u, a;
    if (this.c.state.isLoaded)
      this.switchValue ? this.gridData = this.c.removeSameGridData : this.gridData = this.c.AllGridData;
    else
      return null;
    return i("div", {
      class: [this.ns.b()]
    }, [i("div", {
      class: this.ns.e("top-hidesame-content")
    }, [i("div", {
      class: this.ns.e("top-hidesame-content-left")
    }, [P("隐藏相同项 "), i(C("el-switch"), {
      modelValue: this.switchValue,
      "onUpdate:modelValue": (e) => this.switchValue = e
    }, null)]), i("div", {
      class: this.ns.e("top-hidesame-content-right")
    }, [i("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [P("新增"), i("div", {
      class: this.ns.e("top-hidesame-content-right-item-add")
    }, null)]), i("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [P("修改"), i("div", {
      class: this.ns.e("top-hidesame-content-right-item-change")
    }, null)]), i("div", {
      class: this.ns.e("top-hidesame-content-right-item")
    }, [P("删除"), i("div", {
      class: this.ns.e("top-hidesame-content-right-item-delete")
    }, null)])])]), i("div", {
      class: this.ns.e("top-content")
    }, [i("div", {
      class: this.ns.e("top-content-left")
    }, [i("div", {
      class: this.ns.e("top-content-left-attribute")
    }, [P("属性")]), i("div", {
      class: this.ns.e("top-content-left-version")
    }, [P("版本号")])]), i("div", {
      class: [this.ns.e("top-content-choose"), this.baseVersion !== this.compareVersion ? "modified" : ""]
    }, [i(C("el-select"), {
      modelValue: this.baseVersion,
      "onUpdate:modelValue": (e) => this.baseVersion = e,
      size: "large",
      class: this.ns.e("top-content-choose-select")
    }, O(l = this.c.versionData.map((e) => i(C("el-option"), {
      key: e.id,
      label: e.label,
      value: e.id
    }, null))) ? l : {
      default: () => [l]
    })]), i("div", {
      class: [this.ns.e("top-content-choose"), this.baseVersion !== this.compareVersion ? "modified" : ""]
    }, [i(C("el-select"), {
      modelValue: this.compareVersion,
      "onUpdate:modelValue": (e) => this.compareVersion = e,
      size: "large",
      class: this.ns.e("top-content-choose-select")
    }, O(u = this.c.versionData.map((e) => i(C("el-option"), {
      key: e.id,
      label: e.label,
      value: e.id
    }, null))) ? u : {
      default: () => [u]
    })])]), i(C("el-collapse"), {
      modelValue: this.activeNames,
      "onUpdate:modelValue": (e) => this.activeNames = e
    }, O(a = this.gridData.map((e) => {
      if (e.detailType === "FORMITEM")
        return i("div", {
          class: [this.ns.e("mid-content"), e.category]
        }, [i("div", {
          class: this.ns.e("mid-content-left")
        }, [e.caption]), i("div", {
          class: this.ns.e("mid-content-item")
        }, [this.renderEditor(e.oldItem, this.c.baseResData)]), i("div", {
          class: this.ns.e("mid-content-item")
        }, [this.renderEditor(e.newItem, this.c.compareResData)])]);
      if (e.detailType === "GROUPPANEL")
        return i(C("el-collapse-item"), {
          class: this.ns.e("collapse-item"),
          title: e.caption
        }, {
          default: () => [e.slot && e.slot.map((t) => i("div", {
            class: [this.ns.e("mid-content"), "slot", t.category]
          }, [i("div", {
            class: [this.ns.e("mid-content-left"), "slot"]
          }, [t.caption]), i("div", {
            class: this.ns.e("mid-content-item")
          }, [t.detailType === "FORMITEM" && this.renderEditor(t.oldItem, this.c.baseResData), t.detailType === "DRUIPART" && this.renderDruipart(t.oldItem, this.c.baseResData, "base"), t.detailType === "MDCTRL" && this.renderMdctrl(t.oldItem, "old", this.c.baseResData, t.component)]), i("div", {
            class: this.ns.e("mid-content-item")
          }, [t.detailType === "FORMITEM" && this.renderEditor(t.newItem, this.c.compareResData), t.detailType === "DRUIPART" && this.renderDruipart(t.newItem, this.c.compareResData, "compare"), t.detailType === "MDCTRL" && this.renderMdctrl(t.newItem, "new", this.c.compareResData, t.component)])]))]
        });
    })) ? a : {
      default: () => [a]
    })]);
  }
}), ne = $(
  x,
  // eslint-disable-next-line func-names
  function(l) {
    l.component(x.name, x), ee(
      "EDITFORM_RENDER_FORM_DATA_COMPARISON",
      () => new ie()
    );
  }
), me = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(l) {
    l.use(ne);
  }
};
export {
  ne as IBizFormDataComparison,
  me as default
};
