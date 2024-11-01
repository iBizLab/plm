var K = Object.defineProperty;
var Z = (r, t, s) => t in r ? K(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var v = (r, t, s) => (Z(r, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as k, createVNode as n, ref as S, computed as z, resolveComponent as m } from "vue";
import { useNamespace as M, useControlController as J } from "@ibiz-template/vue3-util";
import { createUUID as R } from "qx-util";
import { debounce as G, isArray as Q } from "lodash-es";
import { TreeController as W } from "@ibiz-template/runtime";
const w = class w {
  /**
   * 获取主题色
   *
   * @static
   * @return {*}
   * @memberof Util
   */
  static getThemeVar() {
    const t = document.documentElement;
    return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
  }
  /**
   * 是否为中文字符串
   *
   * @static
   * @param {string} char
   * @return {*}
   * @memberof Util
   */
  static isChineseChart(t) {
    return /[\u4E00-\u9FA5]/.test(t);
  }
  /**
   * 是否同时存在英文和中文
   *
   * @static
   * @param {string} str
   * @return {*}
   * @memberof Util
   */
  static hasChineseAndEnglish(t) {
    return /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t);
  }
  /**
   * 计算图片文字
   *
   * @static
   * @param {string} textVal
   * @return {*}
   * @memberof Util
   */
  static calcTextPhoto(t) {
    if (t && t.toString().length < 2)
      return t;
    if (t && t.toString().length >= 2) {
      if (this.hasChineseAndEnglish(t)) {
        const l = t.split("").find((u) => /[a-zA-Z]/.test(u)) || "", c = t.split("").find((u) => /[\u4E00-\u9FA5]/.test(u)) || "";
        return "".concat(l).concat(c).toLowerCase();
      }
      return /[a-zA-Z]/.test(t) ? t.split("").filter((l) => /[a-zA-Z]/.test(l)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((l) => /[\u4E00-\u9FA5]/.test(l)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
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
v(w, "calcColorPhoto", (t) => {
  if (!t)
    return "";
  let s = 0;
  for (let g = 0; g < t.length; g++)
    if (w.isChineseChart(t))
      s = t.charCodeAt(g) + ((s << 5) - s), s = s & s;
    else {
      const A = t.charCodeAt(g);
      s += A.toString(16);
    }
  const d = String(s).substring(0, 6);
  let h = parseInt(d.substring(0, 2), 16), l = parseInt(d.substring(2, 4), 16), c = parseInt(d.substring(4, 6), 16);
  h < 0 && (h = 10), l < 0 && (l = 10), c < 0 && (c = 10);
  const u = "#".concat(h.toString(16).padStart(2, "0")).concat(l.toString(16).padStart(2, "0")).concat(c.toString(16).padStart(2, "0"));
  return u === "#FFFFFF" && w.getThemeVar() || u;
});
let I = w;
const X = /* @__PURE__ */ k({
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
  setup(r) {
    const t = M("custom-avatar");
    return {
      ns: t,
      renderAvatar: () => r.img ? n("img", {
        class: t.e("user-avatar"),
        src: r.img
      }, null) : n("div", {
        class: t.e("default-avatar"),
        style: "background-color: ".concat(I.calcColorPhoto(r.label))
      }, [I.calcTextPhoto(r.label)])
    };
  },
  render() {
    return n("div", {
      class: this.ns.b()
    }, [this.renderAvatar()]);
  }
});
class Y extends W {
  constructor() {
    super(...arguments);
    v(this, "selectedData", "");
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
     */
    v(this, "operatorMap", /* @__PURE__ */ new Map());
    /**
     * 回显映射
     */
    v(this, "echoMap", {
      valueField: "user_id",
      textField: "name"
    });
    /**
     * 文件上传路径及下载路径
     */
    v(this, "urls", {
      uploadUrl: "",
      downloadUrl: ""
    });
  }
  async onCreated() {
    super.onCreated();
    const { selectedData: s, selecteddata: d } = this.params;
    this.selectedData = s || d || this.view.params.selectedData || this.view.params.selecteddata, delete this.params.selectedData, delete this.params.selecteddata, delete this.view.params.selectedData, delete this.view.params.selecteddata;
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
    const d = await super.load(s);
    return ibiz.loading.hideRedirect(), d;
  }
  /**
   * 树节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @returns {*}  {Promise<void>}
   * @memberof TreeController
   */
  async onTreeNodeClick(s, d) {
    var l;
    this.setNavData(s);
    const h = (l = this.contextMenuInfos[s._nodeId]) == null ? void 0 : l.clickTBUIActionItem;
    if (h)
      return this.doUIAction(
        h.uiactionId,
        s,
        d,
        h.appId
      );
    if (this.state.navigational) {
      const c = this.getNodeModel(s._nodeId);
      if (!(c != null && c.navAppViewId))
        return;
    }
    if (!s._disableSelect) {
      const { selectedData: c } = this.state, u = c.filter((g) => g._id !== s._id);
      u.length === c.length ? this.setSelection(
        this.state.singleSelect ? [s] : c.concat([s])
      ) : this.setSelection(u);
    }
    this.state.mdctrlActiveMode === 1 && await this.setActive(s);
  }
  /**
   * 获取操作用户列表
   *
   * @return {*}  {Promise<void>}
   * @memberof AttentionController
   */
  async getOperatorUserList() {
    const s = await ibiz.hub.getApp(this.context.srfappid);
    let d = [];
    d = await s.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      d.map((h) => [h.value, h])
    );
  }
}
const V = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [n("g", {
  "stroke-width": "1"
}, [n("path", {
  d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
}, null)])]), ee = () => n("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [n("g", {
  "stroke-width": "1"
}, [n("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), te = () => n("svg", {
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
}, null)])]), ae = () => n("svg", {
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
}, null)]), C = (r) => r ? r.idAppDEFieldId : "", se = (r) => r ? r.textAppDEFieldId : "", N = (r, t, s) => {
  const d = C(t), h = r[d];
  return s.state.selectedData.findIndex((l) => {
    if (!l._nodeId)
      return h === l.srfkey;
    const c = C(s.getNodeModel(l._nodeId)), u = l[c];
    return h === u || r._uuid === l._uuid;
  });
}, pe = /* @__PURE__ */ k({
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
    const r = J((...e) => new Y(...e)), t = M("mob-personal-picker-tree"), s = S(""), d = S(0), h = z(() => r.state.selectedData.map((e) => e.srfkey)), l = R(), c = z(() => r.state.isLoaded ? r.state.rootNodes.reduce((e, a) => a._children ? e.concat(a._children) : e, []) : []), u = async (e) => {
      if (!r.state.isLoaded)
        return;
      const a = r.getNodeData(e._uuid);
      if (a && a._children && !r.state.query)
        ibiz.log.debug("节点展开加载-本地", a);
      else {
        ibiz.log.debug("节点展开加载-远程", a), ibiz.loading.showRedirect();
        const o = await r.loadNodes(a);
        ibiz.loading.hideRedirect(), o && o.forEach((i) => {
          const p = r.getNodeModel(i._nodeId), f = N(i, p, r);
          f !== -1 && r.state.selectedData.splice(f, 1, i);
        });
      }
    }, g = G(async () => {
      await r.load();
    }, 500), A = async (e) => {
      s.value = e, r.state.query = e;
      const a = c.value[0];
      r.state.mobExpandedKey = a._uuid || "", g();
    }, _ = (e) => !!(e && e.disableSelect), E = (e, a) => {
      const {
        originData: o
      } = a;
      r.onTreeNodeClick(o, e);
    }, y = (e, a, o) => {
      if (e.stopPropagation(), !a._leaf || _(o))
        return;
      const i = C(o), p = se(o), f = a[i], b = a[p];
      a[r.echoMap.valueField] || Object.assign(a, {
        [r.echoMap.valueField]: f
      }), a[r.echoMap.textField] || Object.assign(a, {
        [r.echoMap.textField]: b
      }), r.onTreeNodeClick(a, e);
    }, F = (e, a) => {
      e.stopPropagation(), e.preventDefault(), a._defaultExpand || u(a), a._defaultExpand = !a._defaultExpand;
    };
    r.evt.on("onLoadSuccess", async () => {
      r.handleDefaultSelect();
      let e = c.value.findIndex((o) => {
        const i = r.getNodeModel(o._nodeId);
        return i && i.enableCheck && i.selected;
      });
      e = e === -1 ? 0 : e, d.value = e;
      const a = c.value[e];
      a && await u(a);
    });
    const T = (e) => {
      r.state.query = e === 0 ? s.value : "";
      const a = c.value[e];
      r.state.mobExpandedKey = "", u(a);
    }, P = (e) => {
      var a;
      if (e && ((a = e.data) != null && a.iconurl))
        return e.data.iconurl;
    }, U = () => {
      const {
        isLoaded: e
      } = r.state;
      if (e)
        return e && n(m("iBizNoData"), {
          text: "无数据"
        }, null);
    }, L = (e, a) => {
      let o = "";
      const i = C(a), p = e[i];
      if (p) {
        const f = r.operatorMap.get(p), b = P(f);
        if (b) {
          const q = JSON.parse(b), {
            downloadUrl: $
          } = r.urls;
          o = $.replace("%fileId%", q[0].id) || "";
        }
      }
      return n(X, {
        class: t.e("avatar"),
        label: e.srfmajortext || "",
        img: o
      }, null);
    }, B = (e) => e._children && e._children.length === 0 ? null : n("div", {
      class: t.e("expand"),
      onClick: (a) => F(a, e)
    }, [e._defaultExpand ? V() : ee()]), H = (e) => {
      let a = "";
      if (/^\[\{(?=.*"name":)(?=.*"id":).*\}\]$/.test(e)) {
        const i = JSON.parse(e);
        a = (r.urls.downloadUrl || "").replace("%fileId%", i[0].id);
      }
      return a;
    }, O = (e, a) => {
      if (e._leaf && !_(a))
        return L(e, a);
      const o = e._leaf ? ae() : te();
      if (!e._icon)
        return o;
      const i = {
        ...e._icon
      };
      if (i.imagePath) {
        const p = H(i.imagePath);
        return n("img", {
          class: t.e("img"),
          src: p
        }, null);
      }
      return n(m("iBizIcon"), {
        icon: i
      }, null);
    }, D = (e, a) => n("div", {
      class: t.e("node-item")
    }, [n("span", {
      class: t.em("node-item", "icon")
    }, [O(e, a)]), n("span", {
      class: t.em("node-item", "text")
    }, [e._text])]), j = (e, a) => {
      const o = e._leaf && N(e, a, r) !== -1;
      return n("div", {
        class: [t.e("node"), t.is("check", o)],
        onClick: (i) => y(i, e, a)
      }, [D(e, a), o && re()]);
    }, x = (e) => {
      var o;
      const a = r.getNodeModel(e._nodeId);
      if (!e._leaf) {
        const i = e._children && e._children.length > 0, p = n("div", {
          class: [t.em("group", "title"), t.is("no-children", !i && Q(e._children))]
        }, [!e._leaf && B(e), D(e, a)]);
        return !e._defaultExpand || !i ? p : n("div", {
          class: t.e("group")
        }, [p, n("div", {
          class: t.em("group", "content")
        }, [(o = e._children) == null ? void 0 : o.map((f) => x(f))])]);
      }
      return j(e, a);
    };
    return {
      c: r,
      ns: t,
      treeData: c,
      checkedKeys: h,
      uuid: l,
      currentPage: d,
      onNodeCheck: E,
      onNodeClick: y,
      onTabChange: T,
      loadData: u,
      renderTree: (e, a) => {
        let o = null;
        return a === 0 && (o = n(m("van-search"), {
          modelValue: s.value,
          class: t.b("quick-search"),
          clearable: !0,
          placeholder: r.state.placeHolder,
          "onUpdate:model-value": A
        }, null)), [o, n("div", {
          class: t.e("tree")
        }, [e._children.map((i) => x(i))])];
      },
      renderNoData: U
    };
  },
  render() {
    return n(m("iBizControlBase"), {
      class: this.ns.b("content"),
      controller: this.c
    }, {
      default: () => this.treeData.length === 0 ? this.renderNoData() : n(m("van-tabs"), {
        class: this.ns.b(),
        active: this.currentPage,
        onChange: this.onTabChange
      }, {
        default: () => this.treeData.map((r, t) => n(m("van-tab"), {
          class: this.ns.b("tab-item"),
          name: t
        }, {
          default: () => r._children ? this.renderTree(r, t) : this.renderNoData(),
          title: () => n("span", null, [r._text])
        }))
      })
    });
  }
});
export {
  pe as MobPersonalPickerTree,
  pe as default
};
