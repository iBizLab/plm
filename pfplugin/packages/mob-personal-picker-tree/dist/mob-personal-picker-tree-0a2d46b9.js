var W = Object.defineProperty;
var Y = (t, n, s) => n in t ? W(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[n] = s;
var _ = (t, n, s) => (Y(t, typeof n != "symbol" ? n + "" : n, s), s);
import { defineComponent as T, ref as v, computed as E, onMounted as G, createVNode as r, resolveComponent as y, createTextVNode as F } from "vue";
import { useNamespace as z, useControlController as Q } from "@ibiz-template/vue3-util";
import { createUUID as X } from "qx-util";
import { debounce as ee, isArray as te } from "lodash-es";
import { recursiveIterate as se, isElementSame as ae } from "@ibiz-template/core";
import { TreeController as ne } from "@ibiz-template/runtime";
const re = /* @__PURE__ */ T({
  name: "VirtualList",
  props: {
    items: {
      //  数据源
      type: Array,
      default: () => []
    },
    itemHeight: {
      //  每行高度
      type: Number,
      default: 36
    },
    showNum: {
      //  可视数量
      type: Number,
      default: 20
    }
  },
  emits: ["scrollEvent"],
  setup(t, {
    emit: n
  }) {
    const s = z("virtual-list-box"), o = v(), d = v([]), c = v(0), h = v(0), u = v(0), p = v(0), m = (f, x) => {
      n("scrollEvent", f, x);
    }, b = () => {
      h.value = Math.floor(p.value / t.itemHeight), u.value = h.value + t.showNum, d.value = t.items.slice(h.value, u.value);
      const f = p.value - p.value % t.itemHeight;
      c.value = f;
    }, C = E(() => {
      const f = t.itemHeight < 36 ? 36 : t.itemHeight;
      return t.items.length > 0 ? (b(), f * t.items.length) : f;
    }), N = () => {
      p.value = o.value.scrollTop, b(), m(C.value, p.value);
    };
    return G(() => {
      setTimeout(() => {
        scroll();
      }, 1e3);
    }), {
      ns: s,
      contentHeight: C,
      showList: d,
      contentBox: o,
      top: c,
      onScroll: N
    };
  },
  render() {
    return r("div", {
      ref: "contentBox",
      class: this.ns.b(),
      onScroll: () => this.onScroll()
    }, [r("div", {
      class: this.ns.e("container"),
      style: "height:".concat(this.contentHeight, "px;")
    }, [r("div", {
      class: this.ns.e("content"),
      style: "top:".concat(this.top, "px;")
    }, [this.showList.map((t, n) => r("div", {
      key: n,
      class: this.ns.m("item")
    }, [this.$slots.default ? this.$slots.default({
      ...t,
      index: n
    }) : t.name]))])])]);
  }
}), I = class I {
  /**
   * 获取主题色
   *
   * @static
   * @return {*}
   * @memberof Util
   */
  static getThemeVar() {
    const n = document.documentElement;
    return n ? getComputedStyle(n).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否为中文字符串
   *
   * @static
   * @param {string} char
   * @return {*}
   * @memberof Util
   */
  static isChineseChart(n) {
    return /[\u4E00-\u9FA5]/.test(n);
  }
  /**
   * 是否同时存在英文和中文
   *
   * @static
   * @param {string} str
   * @return {*}
   * @memberof Util
   */
  static hasChineseAndEnglish(n) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(n);
  }
  /**
   * 计算图片文字
   *
   * @static
   * @param {string} textVal
   * @return {*}
   * @memberof Util
   */
  static calcTextPhoto(n) {
    if (n && n.toString().length < 2)
      return n;
    if (n && n.toString().length >= 2) {
      if (this.hasChineseAndEnglish(n)) {
        const c = n.split("").find((u) => /[a-zA-Z]/.test(u)) || "", h = n.split("").find((u) => /[\u4E00-\u9FA5]/.test(u)) || "";
        return "".concat(c).concat(h).toLowerCase();
      }
      return /[a-zA-Z]/.test(n) ? n.split("").filter((c) => /[a-zA-Z]/.test(c)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(n) ? n.split("").filter((c) => /[\u4E00-\u9FA5]/.test(c)).slice(-2).join("") : n.replaceAll(" ", "").substring(0, 2);
    }
  }
};
/**
 * 计算图片颜色
 *
 * @static
 * @param {string} textVal
 * @memberof Util
 */
_(I, "calcColorPhoto", (n) => {
  if (!n)
    return "";
  let s = 0;
  for (let p = 0; p < n.length; p++)
    if (I.isChineseChart(n))
      s = n.charCodeAt(p) + ((s << 5) - s), s = s & s;
    else {
      const m = n.charCodeAt(p);
      s += m.toString(16);
    }
  const o = String(s).substring(0, 6);
  let d = parseInt(o.substring(0, 2), 16), c = parseInt(o.substring(2, 4), 16), h = parseInt(o.substring(4, 6), 16);
  d < 0 && (d = 10), c < 0 && (c = 10), h < 0 && (h = 10);
  const u = "#".concat(d.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0")).concat(h.toString(16).padStart(2, "0"));
  return u === "#FFFFFF" && I.getThemeVar() || u;
});
let S = I;
const ie = /* @__PURE__ */ T({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Avatar",
  props: {
    label: {
      type: String,
      required: !0
    },
    img: {
      type: String
    },
    readOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const n = z("custom-avatar");
    return {
      ns: n,
      renderAvatar: () => t.img ? r("img", {
        class: n.e("user-avatar"),
        src: t.img
      }, null) : r("div", {
        class: n.e("default-avatar"),
        style: "background-color: ".concat(S.calcColorPhoto(t.label))
      }, [S.calcTextPhoto(t.label)])
    };
  },
  render() {
    return r("div", {
      class: this.ns.b()
    }, [this.renderAvatar()]);
  }
});
class oe extends ne {
  constructor() {
    super(...arguments);
    _(this, "selectedData", "");
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
     */
    _(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 回显映射
     */
    _(this, "echoMap", {
      valueField: "user_id",
      textField: "name"
    });
    /**
     * 文件上传路径及下载路径
     */
    _(this, "urls", {
      uploadUrl: "",
      downloadUrl: ""
    });
  }
  get simpleList() {
    if (this.view.modal.mode === "EMBED" && this.view.parentView) {
      const s = this.view.parentView.getController("simplelist");
      if (s)
        return s;
    }
    return null;
  }
  async onCreated() {
    super.onCreated();
    const { selectedData: s, selecteddata: o } = this.params;
    this.selectedData = s || o || this.view.params.selectedData || this.view.params.selecteddata, delete this.params.selectedData, delete this.params.selecteddata, delete this.view.params.selectedData, delete this.view.params.selecteddata;
  }
  initState() {
    super.initState(), this.state.tabNodes = [];
  }
  async onMounted() {
    await this.getOperatorUserList(), await super.onMounted(), this.urls = ibiz.util.file.calcFileUpDownUrl(this.context, this.params);
  }
  /**
   * 处理回显选中
   * @description 第一次load加载成功后执行,后续节点加载不会执行
   * @memberof ControlController
   */
  handleDefaultSelect() {
    const s = this.selectedData ? JSON.parse(this.selectedData) : [];
    s && s.length > 0 && (this.state.selectedData.push(...s), this._evt.emit("onSelectionChange", {
      data: this.state.selectedData
    }));
  }
  /**
   * 部件参数解析
   * @protected
   * @memberof ControlController
   */
  handleControlParams() {
    super.handleControlParams(), this.controlParams.echomap && (this.echoMap = JSON.parse(this.controlParams.echomap));
  }
  /**
   * 树部件加载，从根节点开始重新加载
   */
  async load(s = {}) {
    ibiz.loading.showRedirect();
    const o = await super.load(s);
    return ibiz.loading.hideRedirect(), o;
  }
  /**
   * 树节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @returns {*}  {Promise<void>}
   * @memberof TreeController
   */
  async onTreeNodeClick(s, o) {
    var c;
    this.setNavData(s);
    const d = (c = this.contextMenuInfos[s._nodeId]) == null ? void 0 : c.clickTBUIActionItem;
    if (d)
      return this.doUIAction(
        d.uiactionId,
        s,
        o,
        d.appId
      );
    if (this.state.navigational) {
      const h = this.getNodeModel(s._nodeId);
      if (!(h != null && h.navAppViewId))
        return;
    }
    if (!s._disableSelect) {
      const { selectedData: h } = this.state, u = h.filter((p) => p._id !== s._id);
      u.length === h.length ? this.setSelection(
        this.state.singleSelect ? [s] : h.concat([s])
      ) : (this.simpleList && this.simpleList.handleRemove(s._deData), this.setSelection(u));
    }
    this.state.mdctrlActiveMode === 1 && await this.setActive(s);
  }
  /**
   * 初始化绘制数据
   */
  initNodeItems() {
    this.state.items = [], this.state.tabNodes = [];
    const s = this.state.rootNodes[0]._children || [];
    this.state.items.push(this.state.rootNodes[0]), s == null || s.forEach((o, d) => {
      this.state.items.push(o), this.state.tabNodes[d] = [], o._children && se(
        { _children: o._children },
        (c) => {
          const h = c._parent && c._parent._level !== void 0 ? c._parent._level + 1 : 0;
          c._level = h, this.state.items.push(c), this.state.tabNodes[d].push(c);
        },
        { childrenFields: ["_children"] }
      );
    });
  }
  /**
   * loadNodes加载完子数据之后的处理
   * @author lxm
   * @date 2023-12-22 02:37:50
   * @param {IMobPersonalPickerTreeNodeData[]} nodes 加载回来的子数据
   * @return {*}  {Promise<void>}
   */
  async afterLoadNodes(s) {
    this.initNodeItems(), s && (this.state.expandedKeys = this.calcExpandedKeys(s));
  }
  /**
   * 设置选中项
   *
   * @param {{ _id: string }[]} selection
   * @memberof MobPersonalPickerTreeController
   */
  setSelection(s) {
    var h, u;
    const o = [];
    s.forEach((p) => {
      const m = this.state.items.find((b) => b._id === p._id);
      m ? o.push(m) : o.push(p);
    });
    const { selectedData: d } = this.state;
    ae(d, o) || (this.state.selectedData = o, this._evt.emit("onSelectionChange", {
      data: o
    }));
    const c = s == null ? void 0 : s[0];
    (h = this.batchToolbarController) == null || h.calcButtonState(
      c,
      this.model.appDataEntityId
    ), (u = this.quickToolbarController) == null || u.calcButtonState(
      c,
      this.model.appDataEntityId
    );
  }
  /**
   * 获取操作用户列表
   *
   * @return {*}  {Promise<void>}
   * @memberof AttentionController
   */
  async getOperatorUserList() {
    const s = await ibiz.hub.getApp(this.context.srfappid);
    let o = [];
    o = await s.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      o.map((d) => [d.value, d])
    );
  }
}
const le = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1"
}, [r("path", {
  d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
}, null)])]), ce = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1"
}, [r("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), de = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z"
}, null)])]), he = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z"
}, null)])]), ue = () => r("svg", {
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5116",
  height: "1em",
  width: "1em"
}, [r("path", {
  d: "M820.22683799 974.335097H203.77316201c-30.35106072 0-55.03645251-24.69571177-55.03645251-55.03645251V104.70135551C148.7367095 74.36061477 173.43242126 49.664903 203.77316201 49.664903h616.443356C850.57789872 49.664903 875.2632905 74.36061477 875.2632905 104.70135551v814.586969c0 30.35106072-24.68539179 55.04677249-55.03645251 55.04677249zM214.7845805 908.28722601h594.430839V115.71277399H214.7845805v792.57445202z",
  "p-id": "5117"
}, null), r("path", {
  d: "M710.143613 335.86890401H313.856387c-18.24572436 0-33.0239355-14.77821114-33.02393551-33.02393551s14.77821114-33.0239355 33.02393551-33.02393549h396.287226c18.23540438 0 33.0239355 14.77821114 33.02393551 33.02393549s-14.78853112 33.0239355-33.02393551 33.02393551zM602.96030234 534.01251701H316.74598136c-18.24572436 0-33.0239355-14.77821114-33.0239355-33.0239355s14.77821114-33.0239355 33.0239355-33.02393551h286.204001c18.24572436 0 33.0239355 14.77821114 33.02393551 33.02393551s-14.77821114 33.0239355-33.01361553 33.0239355zM602.96030234 732.15613001H316.74598136c-18.24572436 0-33.0239355-14.77821114-33.0239355-33.0239355s14.77821114-33.0239355 33.0239355-33.0239355h286.204001c18.24572436 0 33.0239355 14.77821114 33.02393551 33.0239355 0.01031998 18.24572436-14.77821114 33.0239355-33.01361553 33.0239355z",
  "p-id": "5118"
}, null)]), A = (t) => t ? t.idAppDEFieldId : "", pe = (t) => t ? t.textAppDEFieldId : "", H = (t, n, s) => {
  const o = A(n), d = t[o];
  return s.state.selectedData.findIndex((c) => {
    if (!c._nodeId)
      return d && d === c.srfkey;
    const h = A(s.getNodeModel(c._nodeId)), u = c[h];
    return d && d === u || t._uuid && t._uuid === c._uuid;
  });
}, ge = (t, n = {}) => {
  let s = 0;
  const o = document.createElement("div"), d = document.createElement("div");
  return d.innerHTML = t, Object.assign(d.style, n), Object.assign(o.style, {
    width: "auto",
    position: "absolute",
    left: "-9999px"
  }), o.appendChild(d), document.body.appendChild(o), s = o.offsetHeight, document.body.removeChild(o), s;
}, Ne = /* @__PURE__ */ T({
  name: "IBizMobPersonalPickerTree",
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
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: {
      type: Number,
      default: 2
    },
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const t = Q((...e) => new oe(...e)), n = z("mob-personal-picker-tree"), s = v(""), o = v(0), d = E(() => t.state.selectedData.map((e) => e.srfkey)), c = X(), h = E(() => t.state.isLoaded ? t.state.rootNodes.reduce((e, a) => a._children ? e.concat(a._children) : e, []) : []), u = async (e) => {
      if (!t.state.isLoaded)
        return;
      const a = t.getNodeData(e._uuid);
      if (a && a._children && !t.state.query)
        ibiz.log.debug("节点展开加载-本地", a), t.afterLoadNodes(a._children);
      else {
        ibiz.log.debug("节点展开加载-远程", a), ibiz.loading.showRedirect();
        const i = await t.loadNodes(a);
        ibiz.loading.hideRedirect(), i && i.forEach((l) => {
          const g = t.getNodeModel(l._nodeId), w = H(l, g, t);
          w !== -1 && t.state.selectedData.splice(w, 1, l);
        });
      }
    }, p = ee(async () => {
      await t.load();
    }, 500), m = async (e) => {
      s.value = e, t.state.query = e;
      const a = h.value[0];
      t.state.mobExpandedKey = a._uuid || "", p();
    }, b = (e) => !!(e && e.disableSelect), C = (e, a) => {
      const {
        originData: i
      } = a;
      t.onTreeNodeClick(i, e);
    }, N = (e, a, i) => {
      if (e.stopPropagation(), !a._leaf || b(i))
        return;
      const l = A(i), g = pe(i), w = a[l], D = a[g];
      a[t.echoMap.valueField] || Object.assign(a, {
        [t.echoMap.valueField]: w
      }), a[t.echoMap.textField] || Object.assign(a, {
        [t.echoMap.textField]: D
      }), t.onTreeNodeClick(a, e);
    }, f = (e) => t.state.expandedKeys.includes(e._id), x = (e) => {
      let a = 0;
      if (e && e.length > 0) {
        a = e.length;
        for (let i = 0; i < e.length; i++) {
          const l = e[i];
          l._children && l._children.length > 0 && (a += x(l._children));
        }
      }
      return a;
    }, L = (e, a) => {
      for (let i = 0; i < e.length; i++) {
        const l = e[i];
        if (l._id === a._id) {
          l._children = void 0;
          return;
        }
        l._children && l._children.length > 0 && L(l._children, a);
      }
    }, P = async (e, a) => {
      if (e.stopPropagation(), e.preventDefault(), !f(a)) {
        await u(a), t.onExpandChange(a, !0);
        return;
      }
      t.onExpandChange(a, !1);
      const i = t.state.tabNodes[o.value], l = i.findIndex((g) => g._id === a._id);
      l !== -1 && i.splice(l + 1, x(a._children)), L(t.state.rootNodes, a);
    };
    t.evt.on("onLoadSuccess", async () => {
      t.handleDefaultSelect();
      let e = h.value.findIndex((i) => {
        const l = t.getNodeModel(i._nodeId);
        return l && l.enableCheck && l.selected;
      });
      e = e === -1 ? 0 : e, o.value = e;
      const a = h.value[e];
      a && await u(a);
    });
    const B = (e) => {
      t.state.query = e === 0 ? s.value : "";
      const a = h.value[e];
      t.state.mobExpandedKey = "", o.value = e, u(a);
    }, U = (e) => {
      var a;
      if (e && ((a = e.data) != null && a.iconurl))
        return e.data.iconurl;
    }, O = () => {
      const {
        isLoaded: e
      } = t.state;
      if (e)
        return e && r(y("iBizNoData"), {
          text: t.model.emptyText,
          emptyTextLanguageRes: t.model.emptyTextLanguageRes
        }, null);
    }, $ = (e, a) => {
      let i = "";
      const l = A(a), g = e[l];
      if (g) {
        const w = t.operatorMap.get(g), D = U(w);
        if (D) {
          const Z = JSON.parse(D), {
            downloadUrl: J
          } = t.urls;
          i = J.replace("%fileId%", Z[0].id) || "";
        }
      }
      return r(ie, {
        class: n.e("avatar"),
        label: e.srfmajortext || e._text || "",
        img: i
      }, null);
    }, j = (e) => e._children && e._children.length === 0 ? null : r("div", {
      class: n.e("expand"),
      onClick: (a) => P(a, e)
    }, [f(e) ? le() : ce()]), q = (e) => {
      let a = "";
      if (/^\[\{(?=.*"name":)(?=.*"id":).*\}\]$/.test(e)) {
        const l = JSON.parse(e);
        a = (t.urls.downloadUrl || "").replace("%fileId%", l[0].id);
      }
      return a;
    }, K = (e, a) => {
      if (e._leaf && !b(a))
        return $(e, a);
      const i = e._leaf ? ue() : de();
      if (!e._icon)
        return i;
      const l = {
        ...e._icon
      };
      if (l.imagePath) {
        const g = q(l.imagePath);
        return r("img", {
          class: n.e("img"),
          src: g
        }, null);
      }
      return r(y("iBizIcon"), {
        icon: l
      }, null);
    }, M = (e, a) => {
      const i = e._deData ? e._deData.title : void 0;
      return r("div", {
        class: n.e("node-item")
      }, [r("span", {
        class: n.em("node-item", "icon")
      }, [K(e, a)]), r("span", {
        class: n.em("node-item", "text")
      }, [e._text]), i && r("span", {
        class: n.em("node-item", "title-label")
      }, [i])]);
    }, R = (e, a) => {
      const i = e._leaf && H(e, a, t) !== -1;
      let l = 1 * e._level;
      return e._level >= 1 && (l += 1.13), r("div", {
        class: [n.e("node"), n.is("check", i)],
        style: {
          paddingLeft: "".concat(l, "rem")
        },
        onClick: (g) => N(g, e, a)
      }, [M(e, a), i && he()]);
    }, V = (e) => {
      const a = t.getNodeModel(e._nodeId);
      if (!e._leaf) {
        let i = 1 * e._level;
        const l = e._children && e._children.length > 0;
        return f(e) && !l && (i += 2.125), r("div", {
          class: [n.e("group"), n.is("no-children", !l && te(e._children))],
          style: {
            paddingLeft: "".concat(i, "rem")
          }
        }, [!e._leaf && j(e), M(e, a)]);
      }
      return R(e, a);
    }, k = (e) => {
      const a = ge("", {
        width: "20px",
        height: "2rem",
        padding: "0.5rem 0",
        boxSizing: "unset"
      });
      return r("div", {
        class: n.e("virtual-tree")
      }, [r(re, {
        items: e,
        itemHeight: a
      }, {
        default: (i) => V(i)
      })]);
    };
    return {
      c: t,
      ns: n,
      treeData: h,
      checkedKeys: d,
      uuid: c,
      currentPage: o,
      onNodeCheck: C,
      onNodeClick: N,
      onTabChange: B,
      loadData: u,
      renderTree: (e, a) => {
        let i = null;
        return a === 0 && (i = r(y("van-search"), {
          modelValue: s.value,
          class: n.b("quick-search"),
          clearable: !0,
          placeholder: t.state.placeHolder,
          "onUpdate:model-value": m
        }, null)), [i, k(e)];
      },
      renderNoData: O,
      renderVirtualTree: k
    };
  },
  render() {
    return r(y("iBizControlBase"), {
      class: this.ns.b("content"),
      controller: this.c
    }, {
      default: () => r("div", {
        class: this.ns.b("container")
      }, [this.treeData.length === 0 ? this.renderNoData() : r(y("van-tabs"), {
        class: this.ns.b(),
        active: this.currentPage,
        onChange: this.onTabChange
      }, {
        default: () => this.c.state.tabNodes.map((t, n) => {
          const s = this.treeData[n];
          return r(y("van-tab"), {
            class: this.ns.b("tab-item"),
            name: n
          }, {
            default: () => t.length > 0 ? this.renderTree(t, n) : this.renderNoData(),
            title: () => r("span", null, [s._text])
          });
        })
      }), this.treeData.length !== 0 && !this.singleSelect && r("span", {
        class: this.ns.b("select-total")
      }, [F("已选("), this.c.state.selectedData.length, F(")")])])
    });
  }
});
export {
  Ne as MobPersonalPickerTree,
  Ne as default
};
