var K = Object.defineProperty;
var Z = (t, a, r) => a in t ? K(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[a] = r;
var m = (t, a, r) => (Z(t, typeof a != "symbol" ? a + "" : a, r), r);
import { defineComponent as T, createVNode as n, ref as x, computed as E, resolveComponent as w, createTextVNode as z } from "vue";
import { useNamespace as k, useControlController as J } from "@ibiz-template/vue3-util";
import { createUUID as V } from "qx-util";
import { debounce as G, isArray as Q } from "lodash-es";
import { isElementSame as W } from "@ibiz-template/core";
import { TreeController as X } from "@ibiz-template/runtime";
const b = class b {
  /**
   * 获取主题色
   *
   * @static
   * @return {*}
   * @memberof Util
   */
  static getThemeVar() {
    const a = document.documentElement;
    return a ? getComputedStyle(a).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否为中文字符串
   *
   * @static
   * @param {string} char
   * @return {*}
   * @memberof Util
   */
  static isChineseChart(a) {
    return /[\u4E00-\u9FA5]/.test(a);
  }
  /**
   * 是否同时存在英文和中文
   *
   * @static
   * @param {string} str
   * @return {*}
   * @memberof Util
   */
  static hasChineseAndEnglish(a) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(a);
  }
  /**
   * 计算图片文字
   *
   * @static
   * @param {string} textVal
   * @return {*}
   * @memberof Util
   */
  static calcTextPhoto(a) {
    if (a && a.toString().length < 2)
      return a;
    if (a && a.toString().length >= 2) {
      if (this.hasChineseAndEnglish(a)) {
        const d = a.split("").find((h) => /[a-zA-Z]/.test(h)) || "", l = a.split("").find((h) => /[\u4E00-\u9FA5]/.test(h)) || "";
        return "".concat(d).concat(l).toLowerCase();
      }
      return /[a-zA-Z]/.test(a) ? a.split("").filter((d) => /[a-zA-Z]/.test(d)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(a) ? a.split("").filter((d) => /[\u4E00-\u9FA5]/.test(d)).slice(-2).join("") : a.replaceAll(" ", "").substring(0, 2);
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
m(b, "calcColorPhoto", (a) => {
  if (!a)
    return "";
  let r = 0;
  for (let g = 0; g < a.length; g++)
    if (b.isChineseChart(a))
      r = a.charCodeAt(g) + ((r << 5) - r), r = r & r;
    else {
      const v = a.charCodeAt(g);
      r += v.toString(16);
    }
  const o = String(r).substring(0, 6);
  let u = parseInt(o.substring(0, 2), 16), d = parseInt(o.substring(2, 4), 16), l = parseInt(o.substring(4, 6), 16);
  u < 0 && (u = 10), d < 0 && (d = 10), l < 0 && (l = 10);
  const h = "#".concat(u.toString(16).padStart(2, "0")).concat(d.toString(16).padStart(2, "0")).concat(l.toString(16).padStart(2, "0"));
  return h === "#FFFFFF" && b.getThemeVar() || h;
});
let _ = b;
const Y = /* @__PURE__ */ T({
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
    const a = k("custom-avatar");
    return {
      ns: a,
      renderAvatar: () => t.img ? n("img", {
        class: a.e("user-avatar"),
        src: t.img
      }, null) : n("div", {
        class: a.e("default-avatar"),
        style: "background-color: ".concat(_.calcColorPhoto(t.label))
      }, [_.calcTextPhoto(t.label)])
    };
  },
  render() {
    return n("div", {
      class: this.ns.b()
    }, [this.renderAvatar()]);
  }
});
class ee extends X {
  constructor() {
    super(...arguments);
    m(this, "selectedData", "");
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
     */
    m(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 回显映射
     */
    m(this, "echoMap", {
      valueField: "user_id",
      textField: "name"
    });
    /**
     * 文件上传路径及下载路径
     */
    m(this, "urls", {
      uploadUrl: "",
      downloadUrl: ""
    });
  }
  get simpleList() {
    if (this.view.modal.mode === "EMBED" && this.view.parentView) {
      const r = this.view.parentView.getController("simplelist");
      if (r)
        return r;
    }
    return null;
  }
  async onCreated() {
    super.onCreated();
    const { selectedData: r, selecteddata: o } = this.params;
    this.selectedData = r || o || this.view.params.selectedData || this.view.params.selecteddata, delete this.params.selectedData, delete this.params.selecteddata, delete this.view.params.selectedData, delete this.view.params.selecteddata;
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
    const r = this.selectedData ? JSON.parse(this.selectedData) : [];
    r && r.length > 0 && (this.state.selectedData.push(...r), this._evt.emit("onSelectionChange", {
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
  async load(r = {}) {
    ibiz.loading.showRedirect();
    const o = await super.load(r);
    return ibiz.loading.hideRedirect(), o;
  }
  /**
   * 树节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @returns {*}  {Promise<void>}
   * @memberof TreeController
   */
  async onTreeNodeClick(r, o) {
    var d;
    this.setNavData(r);
    const u = (d = this.contextMenuInfos[r._nodeId]) == null ? void 0 : d.clickTBUIActionItem;
    if (u)
      return this.doUIAction(
        u.uiactionId,
        r,
        o,
        u.appId
      );
    if (this.state.navigational) {
      const l = this.getNodeModel(r._nodeId);
      if (!(l != null && l.navAppViewId))
        return;
    }
    if (!r._disableSelect) {
      const { selectedData: l } = this.state, h = l.filter((g) => g._id !== r._id);
      h.length === l.length ? this.setSelection(
        this.state.singleSelect ? [r] : l.concat([r])
      ) : (this.simpleList && this.simpleList.handleRemove(r._deData), this.setSelection(h));
    }
    this.state.mdctrlActiveMode === 1 && await this.setActive(r);
  }
  /**
   * 设置选中项
   *
   * @param {{ _id: string }[]} selection
   * @memberof MobPersonalPickerTreeController
   */
  setSelection(r) {
    var l, h;
    const o = [];
    r.forEach((g) => {
      const v = this.state.items.find((I) => I._id === g._id);
      v ? o.push(v) : o.push(g);
    });
    const { selectedData: u } = this.state;
    W(u, o) || (this.state.selectedData = o, this._evt.emit("onSelectionChange", {
      data: o
    }));
    const d = r == null ? void 0 : r[0];
    (l = this.batchToolbarController) == null || l.calcButtonState(
      d,
      this.model.appDataEntityId
    ), (h = this.quickToolbarController) == null || h.calcButtonState(
      d,
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
    const r = await ibiz.hub.getApp(this.context.srfappid);
    let o = [];
    o = await r.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      o.map((u) => [u.value, u])
    );
  }
}
const te = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [n("g", {
  "stroke-width": "1"
}, [n("path", {
  d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
}, null)])]), ae = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [n("g", {
  "stroke-width": "1"
}, [n("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), se = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [n("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [n("path", {
  d: "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z"
}, null)])]), re = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [n("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [n("path", {
  d: "M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z"
}, null)])]), ne = () => n("svg", {
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5116",
  height: "1em",
  width: "1em"
}, [n("path", {
  d: "M820.22683799 974.335097H203.77316201c-30.35106072 0-55.03645251-24.69571177-55.03645251-55.03645251V104.70135551C148.7367095 74.36061477 173.43242126 49.664903 203.77316201 49.664903h616.443356C850.57789872 49.664903 875.2632905 74.36061477 875.2632905 104.70135551v814.586969c0 30.35106072-24.68539179 55.04677249-55.03645251 55.04677249zM214.7845805 908.28722601h594.430839V115.71277399H214.7845805v792.57445202z",
  "p-id": "5117"
}, null), n("path", {
  d: "M710.143613 335.86890401H313.856387c-18.24572436 0-33.0239355-14.77821114-33.02393551-33.02393551s14.77821114-33.0239355 33.02393551-33.02393549h396.287226c18.23540438 0 33.0239355 14.77821114 33.02393551 33.02393549s-14.78853112 33.0239355-33.02393551 33.02393551zM602.96030234 534.01251701H316.74598136c-18.24572436 0-33.0239355-14.77821114-33.0239355-33.0239355s14.77821114-33.0239355 33.0239355-33.02393551h286.204001c18.24572436 0 33.0239355 14.77821114 33.02393551 33.02393551s-14.77821114 33.0239355-33.01361553 33.0239355zM602.96030234 732.15613001H316.74598136c-18.24572436 0-33.0239355-14.77821114-33.0239355-33.0239355s14.77821114-33.0239355 33.0239355-33.0239355h286.204001c18.24572436 0 33.0239355 14.77821114 33.02393551 33.0239355 0.01031998 18.24572436-14.77821114 33.0239355-33.01361553 33.0239355z",
  "p-id": "5118"
}, null)]), y = (t) => t ? t.idAppDEFieldId : "", oe = (t) => t ? t.textAppDEFieldId : "", N = (t, a, r) => {
  const o = y(a), u = t[o];
  return r.state.selectedData.findIndex((d) => {
    if (!d._nodeId)
      return u && u === d.srfkey;
    const l = y(r.getNodeModel(d._nodeId)), h = d[l];
    return u && u === h || t._uuid && t._uuid === d._uuid;
  });
}, ve = /* @__PURE__ */ T({
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
    const t = J((...e) => new ee(...e)), a = k("mob-personal-picker-tree"), r = x(""), o = x(0), u = E(() => t.state.selectedData.map((e) => e.srfkey)), d = V(), l = E(() => t.state.isLoaded ? t.state.rootNodes.reduce((e, s) => s._children ? e.concat(s._children) : e, []) : []), h = async (e) => {
      if (!t.state.isLoaded)
        return;
      const s = t.getNodeData(e._uuid);
      if (s && s._children && !t.state.query)
        ibiz.log.debug("节点展开加载-本地", s);
      else {
        ibiz.log.debug("节点展开加载-远程", s), ibiz.loading.showRedirect();
        const i = await t.loadNodes(s);
        ibiz.loading.hideRedirect(), i && i.forEach((c) => {
          const p = t.getNodeModel(c._nodeId), f = N(c, p, t);
          f !== -1 && t.state.selectedData.splice(f, 1, c);
        });
      }
    }, g = G(async () => {
      await t.load();
    }, 500), v = async (e) => {
      r.value = e, t.state.query = e;
      const s = l.value[0];
      t.state.mobExpandedKey = s._uuid || "", g();
    }, I = (e) => !!(e && e.disableSelect), M = (e, s) => {
      const {
        originData: i
      } = s;
      t.onTreeNodeClick(i, e);
    }, D = (e, s, i) => {
      if (e.stopPropagation(), !s._leaf || I(i))
        return;
      const c = y(i), p = oe(i), f = s[c], C = s[p];
      s[t.echoMap.valueField] || Object.assign(s, {
        [t.echoMap.valueField]: f
      }), s[t.echoMap.textField] || Object.assign(s, {
        [t.echoMap.textField]: C
      }), t.onTreeNodeClick(s, e);
    }, F = (e, s) => {
      e.stopPropagation(), e.preventDefault(), s._defaultExpand || h(s), s._defaultExpand = !s._defaultExpand;
    };
    t.evt.on("onLoadSuccess", async () => {
      t.handleDefaultSelect();
      let e = l.value.findIndex((i) => {
        const c = t.getNodeModel(i._nodeId);
        return c && c.enableCheck && c.selected;
      });
      e = e === -1 ? 0 : e, o.value = e;
      const s = l.value[e];
      s && await h(s);
    });
    const P = (e) => {
      t.state.query = e === 0 ? r.value : "";
      const s = l.value[e];
      t.state.mobExpandedKey = "", h(s);
    }, L = (e) => {
      var s;
      if (e && ((s = e.data) != null && s.iconurl))
        return e.data.iconurl;
    }, U = () => {
      const {
        isLoaded: e
      } = t.state;
      if (e)
        return e && n(w("iBizNoData"), {
          text: t.model.emptyText,
          emptyTextLanguageRes: t.model.emptyTextLanguageRes
        }, null);
    }, B = (e, s) => {
      let i = "";
      const c = y(s), p = e[c];
      if (p) {
        const f = t.operatorMap.get(p), C = L(f);
        if (C) {
          const R = JSON.parse(C), {
            downloadUrl: $
          } = t.urls;
          i = $.replace("%fileId%", R[0].id) || "";
        }
      }
      return n(Y, {
        class: a.e("avatar"),
        label: e.srfmajortext || "",
        img: i
      }, null);
    }, H = (e) => e._children && e._children.length === 0 ? null : n("div", {
      class: a.e("expand"),
      onClick: (s) => F(s, e)
    }, [e._defaultExpand ? te() : ae()]), O = (e) => {
      let s = "";
      if (/^\[\{(?=.*"name":)(?=.*"id":).*\}\]$/.test(e)) {
        const c = JSON.parse(e);
        s = (t.urls.downloadUrl || "").replace("%fileId%", c[0].id);
      }
      return s;
    }, j = (e, s) => {
      if (e._leaf && !I(s))
        return B(e, s);
      const i = e._leaf ? ne() : se();
      if (!e._icon)
        return i;
      const c = {
        ...e._icon
      };
      if (c.imagePath) {
        const p = O(c.imagePath);
        return n("img", {
          class: a.e("img"),
          src: p
        }, null);
      }
      return n(w("iBizIcon"), {
        icon: c
      }, null);
    }, A = (e, s) => n("div", {
      class: a.e("node-item")
    }, [n("span", {
      class: a.em("node-item", "icon")
    }, [j(e, s)]), n("span", {
      class: a.em("node-item", "text")
    }, [e._text])]), q = (e, s) => {
      const i = e._leaf && N(e, s, t) !== -1;
      return n("div", {
        class: [a.e("node"), a.is("check", i)],
        onClick: (c) => D(c, e, s)
      }, [A(e, s), i && re()]);
    }, S = (e) => {
      var i;
      const s = t.getNodeModel(e._nodeId);
      if (!e._leaf) {
        const c = e._children && e._children.length > 0, p = n("div", {
          class: [a.em("group", "title"), a.is("no-children", !c && Q(e._children))]
        }, [!e._leaf && H(e), A(e, s)]);
        return !e._defaultExpand || !c ? p : n("div", {
          class: a.e("group")
        }, [p, n("div", {
          class: a.em("group", "content")
        }, [(i = e._children) == null ? void 0 : i.map((f) => S(f))])]);
      }
      return q(e, s);
    };
    return {
      c: t,
      ns: a,
      treeData: l,
      checkedKeys: u,
      uuid: d,
      currentPage: o,
      onNodeCheck: M,
      onNodeClick: D,
      onTabChange: P,
      loadData: h,
      renderTree: (e, s) => {
        let i = null;
        return s === 0 && (i = n(w("van-search"), {
          modelValue: r.value,
          class: a.b("quick-search"),
          clearable: !0,
          placeholder: t.state.placeHolder,
          "onUpdate:model-value": v
        }, null)), [i, n("div", {
          class: a.e("tree")
        }, [e._children.map((c) => S(c))])];
      },
      renderNoData: U
    };
  },
  render() {
    return n(w("iBizControlBase"), {
      class: this.ns.b("content"),
      controller: this.c
    }, {
      default: () => n("div", {
        class: this.ns.b("container")
      }, [this.treeData.length === 0 ? this.renderNoData() : n(w("van-tabs"), {
        class: this.ns.b(),
        active: this.currentPage,
        onChange: this.onTabChange
      }, {
        default: () => this.treeData.map((t, a) => n(w("van-tab"), {
          class: this.ns.b("tab-item"),
          name: a
        }, {
          default: () => t._children ? this.renderTree(t, a) : this.renderNoData(),
          title: () => n("span", null, [t._text])
        }))
      }), this.treeData.length !== 0 && !this.singleSelect && n("span", {
        class: this.ns.b("select-total")
      }, [z("已选("), this.c.state.selectedData.length, z(")")])])
    });
  }
});
export {
  ve as MobPersonalPickerTree,
  ve as default
};
