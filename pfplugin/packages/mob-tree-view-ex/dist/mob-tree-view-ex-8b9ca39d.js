var F = Object.defineProperty;
var M = (t, n, r) => n in t ? F(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[n] = r;
var v = (t, n, r) => (M(t, typeof n != "symbol" ? n + "" : n, r), r);
import { createVNode as a, defineComponent as z, computed as D, resolveComponent as h, isVNode as L } from "vue";
import { useControlController as A, useNamespace as B } from "@ibiz-template/vue3-util";
import { createUUID as O } from "qx-util";
import { debounce as j, isArray as V } from "lodash-es";
import { TreeController as P } from "@ibiz-template/runtime";
class R extends P {
  constructor() {
    super(...arguments);
    /**
     * 回显映射
     */
    v(this, "echoMap", {
      valueField: "id",
      textField: "name"
    });
  }
  async onMounted() {
    await super.onMounted();
  }
  /**
   * 处理回显选中
   * @description 第一次load加载成功后执行,后续节点加载不会执行
   * @memberof ControlController
   */
  handleDefaultSelect() {
    const { selectedData: r, selecteddata: i } = this.params, l = r || i || this.view.params.selectedData || this.view.params.selecteddata, c = l ? JSON.parse(l) : [];
    c && c.length > 0 && (this.state.selectedData.push(...c), this._evt.emit("onSelectionChange", {
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
    const i = await super.load(r);
    return ibiz.loading.hideRedirect(), i;
  }
}
const q = () => a("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [a("g", {
  "stroke-width": "1"
}, [a("path", {
  d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
}, null)])]), K = () => a("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [a("g", {
  "stroke-width": "1"
}, [a("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), U = () => a("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [a("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [a("path", {
  d: "M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z"
}, null)])]);
function J(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !L(t);
}
const x = (t) => t ? t.idAppDEFieldId : "", H = (t) => t ? t.textAppDEFieldId : "", _ = (t, n, r) => {
  const i = x(n), l = t[i];
  return r.state.selectedData.findIndex((c) => {
    if (!c._nodeId)
      return l === c.srfkey;
    const u = x(r.getNodeModel(c._nodeId)), f = c[u];
    return l === f || t._uuid === c._uuid;
  });
}, ee = /* @__PURE__ */ z({
  name: "IBizMobTreeViewEx",
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
    const t = A((...e) => new R(...e)), n = B("mob-tree-view-ex"), r = D(() => t.state.selectedData.map((e) => e.srfkey)), i = O(), l = D(() => t.state.isLoaded ? t.model.rootVisible ? t.state.rootNodes : t.state.rootNodes.reduce((e, o) => o._children ? e.concat(o._children) : e, []) : []), c = (e) => {
      e == null || e.forEach((o) => {
        const s = t.getNodeModel(o._nodeId), d = _(o, s, t);
        d !== -1 && t.state.selectedData.splice(d, 1, o);
      });
    }, u = async (e) => {
      if (!t.state.isLoaded)
        return;
      const o = t.getNodeData(e == null ? void 0 : e._uuid);
      if (o && o._children && !t.state.query)
        ibiz.log.debug("节点展开加载-本地", o);
      else {
        ibiz.log.debug("节点展开加载-远程", o), ibiz.loading.showRedirect();
        const s = await t.loadNodes(o);
        ibiz.loading.hideRedirect(), s && c(s);
      }
    }, f = (e) => !!(e && e.disableSelect), y = (e, o) => {
      const {
        originData: s
      } = o;
      t.onTreeNodeClick(s, e);
    }, w = (e, o, s) => {
      if (e.stopPropagation(), f(s))
        return;
      const d = x(s), p = H(s), g = o[d], T = o[p];
      o[t.echoMap.valueField] || Object.assign(o, {
        [t.echoMap.valueField]: g
      }), o[t.echoMap.textField] || Object.assign(o, {
        [t.echoMap.textField]: T
      }), t.onTreeNodeClick(o, e);
    }, I = (e, o) => {
      e.stopPropagation(), e.preventDefault(), o._defaultExpand || u(o), o._defaultExpand = !o._defaultExpand;
    }, N = j(async () => {
      await t.load();
    }, 500), k = async (e) => {
      t.state.query = e, N();
    };
    t.evt.on("onLoadSuccess", () => {
      t.handleDefaultSelect(), c(l.value);
    });
    const C = () => {
      const {
        isLoaded: e
      } = t.state;
      if (e)
        return e && a(h("iBizNoData"), {
          text: t.model.emptyText,
          emptyTextLanguageRes: t.model.emptyTextLanguageRes
        }, null);
    }, E = (e) => a("div", {
      class: n.e("expand"),
      onClick: (o) => I(o, e)
    }, [e._defaultExpand ? q() : K()]), b = (e, o) => {
      const s = _(e, o, t) !== -1;
      return a("div", {
        class: [n.e("node-item"), n.is("check", s)],
        onClick: (d) => w(d, e, o)
      }, [e._icon && a("span", {
        class: n.em("node-item", "icon")
      }, [a(h("iBizIcon"), {
        icon: e._icon
      }, null)]), a("span", {
        class: n.em("node-item", "text")
      }, [e._text]), s && a("span", {
        class: n.em("node-item", "check-icon")
      }, [U()])]);
    }, S = (e, o) => a("div", {
      class: [n.e("node")]
    }, [b(e, o)]), m = (e) => {
      var s;
      const o = t.getNodeModel(e._nodeId);
      if (!e._leaf) {
        const d = e._children && e._children.length > 0, p = a("div", {
          class: [n.em("group", "title"), n.is("no-children", !d && V(e._children))]
        }, [!e._leaf && E(e), b(e, o)]);
        return !e._defaultExpand || !d ? p : a("div", {
          class: n.e("group")
        }, [p, a("div", {
          class: n.em("group", "content")
        }, [(s = e._children) == null ? void 0 : s.map((g) => m(g))])]);
      }
      return S(e, o);
    };
    return {
      c: t,
      ns: n,
      treeData: l,
      checkedKeys: r,
      uuid: i,
      onNodeCheck: y,
      onNodeClick: w,
      onInput: k,
      loadData: u,
      renderTree: (e) => {
        const o = e.some((s) => !s._leaf);
        return a("div", {
          class: [n.e("tree"), n.is("reserve-seat", o)]
        }, [e.map((s) => m(s))]);
      },
      renderNoData: C
    };
  },
  render() {
    const t = {
      searchbar: () => this.c.enableQuickSearch ? a(h("van-search"), {
        modelValue: this.c.state.query,
        class: this.ns.b("quick-search"),
        clearable: !0,
        placeholder: this.c.state.placeHolder,
        "onUpdate:model-value": this.onInput
      }, null) : null
    }, n = this.c.controlPanel ? "tree" : "default";
    return t[n] = () => this.treeData.length === 0 ? this.renderNoData() : this.renderTree(this.treeData), a(h("iBizControlBase"), {
      class: this.ns.b("content"),
      controller: this.c
    }, J(t) ? t : {
      default: () => [t]
    });
  }
});
export {
  ee as MobTreeViewEx,
  ee as default
};
