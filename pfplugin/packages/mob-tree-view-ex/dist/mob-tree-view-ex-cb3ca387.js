var M = Object.defineProperty;
var z = (t, o, a) => o in t ? M(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a;
var D = (t, o, a) => (z(t, typeof o != "symbol" ? o + "" : o, a), a);
import { createVNode as r, defineComponent as T, computed as m, resolveComponent as h, isVNode as A } from "vue";
import { useControlController as B, useNamespace as L } from "@ibiz-template/vue3-util";
import { createUUID as O } from "qx-util";
import { debounce as j, isArray as V } from "lodash-es";
import { TreeController as P } from "@ibiz-template/runtime";
class q extends P {
  constructor() {
    super(...arguments);
    /**
     * 回显映射
     */
    D(this, "echoMap", {
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
    const { selectedData: a, selecteddata: i } = this.params, l = a || i || this.view.params.selectedData || this.view.params.selecteddata, c = l ? JSON.parse(l) : [];
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
  async load(a = {}) {
    ibiz.loading.showRedirect();
    const i = await super.load(a);
    return ibiz.loading.hideRedirect(), i;
  }
}
const R = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1"
}, [r("path", {
  d: "M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z"
}, null)])]), K = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1"
}, [r("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), U = () => r("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em"
}, [r("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [r("path", {
  d: "M6.012 11.201L1.313 6.832l-.817.879 5.54 5.15 9.304-9.163-.842-.855z"
}, null)])]);
function J(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !A(t);
}
const w = (t) => t ? t.idAppDEFieldId : "", H = (t) => t ? t.textAppDEFieldId : "", _ = (t, o, a) => {
  const i = w(o), l = t[i];
  return a.state.selectedData.findIndex((c) => {
    if (!c._nodeId)
      return l === c.srfkey;
    const u = w(a.getNodeModel(c._nodeId)), f = c[u];
    return l === f || t._uuid === c._uuid;
  });
}, ee = /* @__PURE__ */ T({
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
    const t = B((...e) => new q(...e)), o = L("mob-tree-view-ex"), a = m(() => t.state.selectedData.map((e) => e.srfkey)), i = O(), l = m(() => t.state.isLoaded ? t.model.rootVisible ? t.state.rootNodes : t.state.rootNodes.reduce((e, n) => n._children ? e.concat(n._children) : e, []) : []), c = (e) => {
      e == null || e.forEach((n) => {
        const s = t.getNodeModel(n._nodeId), d = _(n, s, t);
        d !== -1 && t.state.selectedData.splice(d, 1, n);
      });
    }, u = async (e) => {
      if (!t.state.isLoaded)
        return;
      const n = t.getNodeData(e == null ? void 0 : e._uuid);
      if (n && n._children && !t.state.query)
        ibiz.log.debug("节点展开加载-本地", n);
      else {
        ibiz.log.debug("节点展开加载-远程", n), ibiz.loading.showRedirect();
        const s = await t.loadNodes(n);
        ibiz.loading.hideRedirect(), s && c(s);
      }
    }, f = (e) => !!(e && e.disableSelect), I = (e, n) => {
      const {
        originData: s
      } = n;
      t.onTreeNodeClick(s, e);
    }, x = (e, n, s) => {
      if (e.stopPropagation(), f(s))
        return;
      const d = w(s), p = H(s), g = n[d], F = n[p];
      n[t.echoMap.valueField] || Object.assign(n, {
        [t.echoMap.valueField]: g
      }), n[t.echoMap.textField] || Object.assign(n, {
        [t.echoMap.textField]: F
      }), t.onTreeNodeClick(n, e);
    }, y = (e, n) => {
      e.stopPropagation(), e.preventDefault(), n._defaultExpand || u(n), n._defaultExpand = !n._defaultExpand;
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
        return e && r(h("iBizNoData"), {
          text: "无数据"
        }, null);
    }, E = (e) => r("div", {
      class: o.e("expand"),
      onClick: (n) => y(n, e)
    }, [e._defaultExpand ? R() : K()]), b = (e, n) => {
      const s = _(e, n, t) !== -1;
      return r("div", {
        class: [o.e("node-item"), o.is("check", s)],
        onClick: (d) => x(d, e, n)
      }, [e._icon && r("span", {
        class: o.em("node-item", "icon")
      }, [r(h("iBizIcon"), {
        icon: e._icon
      }, null)]), r("span", {
        class: o.em("node-item", "text")
      }, [e._text]), s && r("span", {
        class: o.em("node-item", "check-icon")
      }, [U()])]);
    }, S = (e, n) => r("div", {
      class: [o.e("node")]
    }, [b(e, n)]), v = (e) => {
      var s;
      const n = t.getNodeModel(e._nodeId);
      if (!e._leaf) {
        const d = e._children && e._children.length > 0, p = r("div", {
          class: [o.em("group", "title"), o.is("no-children", !d && V(e._children))]
        }, [!e._leaf && E(e), b(e, n)]);
        return !e._defaultExpand || !d ? p : r("div", {
          class: o.e("group")
        }, [p, r("div", {
          class: o.em("group", "content")
        }, [(s = e._children) == null ? void 0 : s.map((g) => v(g))])]);
      }
      return S(e, n);
    };
    return {
      c: t,
      ns: o,
      treeData: l,
      checkedKeys: a,
      uuid: i,
      onNodeCheck: I,
      onNodeClick: x,
      onInput: k,
      loadData: u,
      renderTree: (e) => {
        const n = e.some((s) => !s._leaf);
        return r("div", {
          class: [o.e("tree"), o.is("reserve-seat", n)]
        }, [e.map((s) => v(s))]);
      },
      renderNoData: C
    };
  },
  render() {
    const t = {
      searchbar: () => this.c.enableQuickSearch ? r(h("van-search"), {
        modelValue: this.c.state.query,
        class: this.ns.b("quick-search"),
        clearable: !0,
        placeholder: this.c.state.placeHolder,
        "onUpdate:model-value": this.onInput
      }, null) : null
    }, o = this.c.controlPanel ? "tree" : "default";
    return t[o] = () => this.treeData.length === 0 ? null : this.renderTree(this.treeData), r(h("iBizControlBase"), {
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
