import './style.css';
var se = Object.defineProperty;
var ie = (t, a, c) => a in t ? se(t, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[a] = c;
var z = (t, a, c) => (ie(t, typeof a != "symbol" ? a + "" : a, c), c);
import { TreeController as re, getControlPanel as le, registerControlProvider as ae } from "@ibiz-template/runtime";
import { useControlController as ce, useNamespace as de, withInstall as ue } from "@ibiz-template/vue3-util";
import { defineComponent as fe, ref as N, reactive as pe, watch as O, computed as he, nextTick as me, resolveComponent as g, onMounted as ge, onUnmounted as xe, withDirectives as be, createVNode as f, resolveDirective as Ie, isVNode as ye, createTextVNode as Ce } from "vue";
import { createUUID as U } from "qx-util";
import { debounce as P } from "lodash-es";
import { RuntimeError as B } from "@ibiz-template/core";
import { clone as Ne, isNil as ve } from "ramda";
function x(t, a) {
  const c = a.state.items.find((i) => i._id === t);
  return c || a.state.items.find((i) => i._uuid === t);
}
function _e(t, a) {
  const c = () => {
    const p = t.value;
    if (!p)
      throw new B("找不到el-tree实例对象");
    return p;
  }, i = () => {
    var b;
    const p = t.value;
    if (!p) {
      setTimeout(() => {
        i();
      }, 200);
      return;
    }
    Object.values(p.store.nodesMap).forEach((l) => {
      const d = a.state.expandedKeys.includes(l.data._id);
      d !== l.expanded && (d ? l.expand() : l.collapse());
    }), a.state.singleSelect ? t.value.setCurrentKey(((b = a.state.selectedData[0]) == null ? void 0 : b._id) || void 0) : p.setCheckedKeys(a.state.selectedData.map((l) => l._id));
  }, u = P(i, 500);
  return { getTreeInstance: c, updateUI: u, triggerNodeExpand: (p) => {
    const l = c().store.nodesMap[p];
    if (l)
      return l.expanded ? (l.collapse(), !1) : (l.expand(), !0);
  } };
}
function Te(t) {
  switch (t) {
    case "inner":
      return "inner";
    case "before":
      return "prev";
    case "after":
      return "next";
    default:
      throw new B("暂不支持dropType:".concat(t));
  }
}
function we(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !ye(t);
}
const D = /* @__PURE__ */ fe({
  name: "IBizListTreeControl",
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
      default: void 0
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
      default: void 0
    },
    navigational: {
      type: Boolean,
      default: void 0
    },
    defaultExpandedKeys: {
      type: Array
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const t = ce((...e) => new re(...e)), a = N(!1), c = pe({});
    t.evt.on("onCreated", () => {
      t.counter && t.counter.onChange((e) => {
        Object.assign(c, e);
      }, !0), t.controlParams.cascadeselect && (a.value = !0);
    });
    const i = de("control-".concat(t.model.controlType.toLowerCase())), u = N(null), y = N(null), p = N(""), b = N(null), l = N(null), d = N(null);
    O(() => b.value, (e) => {
      e && e.$el.getElementsByTagName("input")[0].focus();
    });
    const T = (e) => {
      var s;
      if (e._disableSelect)
        return !1;
      const n = t.getNodeModel(e._nodeId), o = (s = t.contextMenuInfos[e._nodeId]) == null ? void 0 : s.clickTBUIActionItem;
      return !!(n != null && n.navAppViewId || o || e != null && e._children);
    }, S = () => {
      var s;
      const e = (s = u.value) == null ? void 0 : s.getCurrentKey();
      if (!e || e === l.value)
        return;
      const n = x(e, t), o = t.getNodeModel(n._nodeId);
      o != null && o.allowEditText && (l.value = e);
    }, j = async () => {
      if (l.value)
        if (d.value) {
          const e = x(l.value, t);
          await t.modifyNodeText(e, d.value), l.value = null, d.value = null;
        } else
          l.value = null;
    }, {
      updateUI: M,
      triggerNodeExpand: V
    } = _e(u, t), A = (e) => e.map((n) => ({
      _id: n._id,
      _uuid: n._uuid,
      _leaf: n._leaf,
      _text: n._text,
      _disableSelect: n._disableSelect
    }));
    t.evt.on("onAfterRefreshParent", (e) => {
      if (u.value) {
        const {
          parentNode: n,
          children: o
        } = e, s = A(o);
        u.value.updateKeyChildren(n._id, s), M();
      }
    }), t.evt.on("onAfterNodeDrop", (e) => {
      e.isChangedParent && (p.value = U());
    });
    const w = he(() => t.state.isLoaded ? t.model.rootVisible ? t.state.rootNodes : t.state.rootNodes.reduce((e, n) => n._children ? e.concat(n._children) : e, []) : []);
    O(w, (e, n) => {
      e !== n && (p.value = U());
    });
    const q = async (e, n) => {
      let o;
      if (e.level === 0)
        o = w.value, ibiz.log.debug("初始加载");
      else {
        const s = x(e.data._uuid, t);
        s._children ? (ibiz.log.debug("节点展开加载-本地", s), o = s._children) : (ibiz.log.debug("节点展开加载-远程", s), o = await t.loadNodes(s));
      }
      ibiz.log.debug("给树返回值", o), n(A(o)), M();
    };
    let E = !1;
    t.evt.on("onLoadSuccess", () => {
      E = !0, setTimeout(() => {
        E = !1;
      }, 200);
    }), t.evt.on("onSelectionChange", async () => {
      var e;
      E && await me(), t.state.singleSelect ? u.value.setCurrentKey(((e = t.state.selectedData[0]) == null ? void 0 : e._id) || void 0) : u.value.setCheckedKeys(t.state.selectedData.map((n) => n._id));
    });
    const $ = (e, n) => {
      const {
        checkedNodes: o
      } = n;
      t.setSelection(o);
    };
    let k = !1;
    const H = (e, n) => {
      var o, s;
      if (n.stopPropagation(), !(k || !T(e))) {
        if (((o = u.value) == null ? void 0 : o.getCurrentKey()) === e._id && S(), t.state.singleSelect || (s = u.value) == null || s.setCurrentKey(e._id), t.state.navigational) {
          const h = t.getNodeModel(e._nodeId);
          if (!(h != null && h.navAppViewId)) {
            const r = V(e._id);
            t.onExpandChange(e, r);
          }
        }
        t.onTreeNodeClick(e, n), k = !0, setTimeout(() => {
          k = !1;
        }, 200);
      }
    }, W = (e, n) => {
      n.stopPropagation(), T(e) && t.onDbTreeNodeClick(e);
    };
    let v;
    t.evt.on("onMounted", () => {
      Object.values(t.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((n) => {
        v = n.default, v.default && !v.showContextMenu && (v = v.default);
      });
    });
    const K = (e, n) => {
      const o = [];
      return e == null || e.forEach((s) => {
        (n === "nodeItem" && s.actionLevel === 250 || n === "popper" && s.actionLevel < 200) && o.push(s);
      }), o;
    }, F = g("IBizRawItem"), Q = g("IBizIcon"), L = (e, n, o, s) => {
      const h = [];
      return e.forEach((r) => {
        var _;
        if (r.itemType === "SEPERATOR") {
          h.push({
            divided: "self"
          });
          return;
        }
        const I = s[r.id];
        if (I && !I.visible)
          return;
        const m = {};
        if (r.showCaption && r.caption && (m.label = r.caption), r.sysImage && r.showIcon && (m.icon = f(Q, {
          icon: r.sysImage
        }, null)), r.itemType === "DEUIACTION") {
          m.disabled = I.disabled, m.clickClose = !0;
          const {
            uiactionId: C
          } = r;
          C && (m.onClick = () => {
            t.doUIAction(C, n, o, r.appId);
          });
        } else if (r.itemType === "RAWITEM") {
          const {
            rawItem: C
          } = r;
          C && (m.label = f(F, {
            rawItem: r
          }, null));
        } else
          r.itemType === "ITEMS" && (_ = r.detoolbarItems) != null && _.length && (m.children = L(r.detoolbarItems, n, o, s));
        h.push(m);
      }), h;
    }, G = async (e, n) => {
      n.preventDefault(), n.stopPropagation();
      const o = t.getNodeModel(e._nodeId);
      if (!(o != null && o.decontextMenu))
        return;
      const s = t.contextMenus[o.decontextMenu.id];
      if (!s.model.detoolbarItems)
        return;
      await s.calcButtonState(e._deData || (e.srfkey ? e : void 0), o.appDataEntityId);
      const h = s.state.buttonsState, r = K(s.model.detoolbarItems, "popper"), I = L(r, e, n, h);
      I.length && v.showContextMenu({
        x: n.x,
        y: n.y,
        customClass: i.b("context-menu"),
        items: I
      });
    }, J = (e, n) => {
      var I, m, _;
      if (!((m = (I = e == null ? void 0 : e.decontextMenu) == null ? void 0 : I.detoolbarItems) != null && m.length))
        return;
      const o = t.contextMenuInfos[e.id];
      if (o.clickTBUIActionItem && o.onlyOneActionItem)
        return null;
      const h = {
        detoolbarItems: K((_ = e == null ? void 0 : e.decontextMenu) == null ? void 0 : _.detoolbarItems, "nodeItem")
      }, r = Ne(e);
      return Object.assign(r.decontextMenu, h), f(g("iBizContextMenuControl"), {
        modelData: h,
        groupLevelKeys: [50, 100],
        nodeModel: r,
        nodeData: n,
        context: t.context,
        onActionClick: (C, oe) => t.doUIAction(C.uiactionId, n, oe, C.appId)
      }, null);
    }, X = (e, n) => {
      const o = x(e._uuid, t);
      if (!o)
        throw new B("没有找到_uuid为".concat(e._uuid, "的节点"));
      t.onExpandChange(o, n);
    }, Y = P(() => {
      t.load();
    }, 500), Z = (e) => {
      t.state.query = e, Y();
    }, ee = (e, n, o) => {
      const s = x(e.data._uuid, t), h = x(n.data._uuid, t);
      return t.calcAllowDrop(s, h, o);
    }, te = (e) => {
      const n = x(e.data._uuid, t);
      return t.calcAllowDrag(n);
    }, ne = (e, n, o) => {
      const s = Te(o), h = x(e.data._uuid, t), r = x(n.data._uuid, t);
      t.onNodeDrop(h, r, s);
    }, R = (e) => {
      (e.code === "F2" || e.code === "Enter") && S();
    };
    return ge(() => {
      var e;
      (e = y.value) == null || e.$el.addEventListener("keydown", R);
    }), xe(() => {
      var e;
      (e = y.value) == null || e.$el.removeEventListener("keydown", R);
    }), {
      c: t,
      ns: i,
      treeRef: u,
      treeviewRef: y,
      treeNodeTextInputRef: b,
      treeData: w,
      treeRefreshKey: p,
      editingNodeKey: l,
      editingNodeText: d,
      cascadeSelect: a,
      findNodeData: x,
      onCheck: $,
      onNodeClick: H,
      onNodeDbClick: W,
      onNodeContextmenu: G,
      loadData: q,
      renderContextMenu: J,
      renderCounter: (e) => {
        if (e.counterId) {
          const n = c[e.counterId];
          return ve(n) || e.counterMode === 1 && n === 0 ? null : f("div", {
            class: i.b("counter")
          }, [f("span", {
            class: i.be("counter", "dot")
          }, [Ce("·")]), f(g("iBizBadge"), {
            value: n
          }, null)]);
        }
      },
      updateNodeExpand: X,
      onInput: Z,
      allowDrop: ee,
      allowDrag: te,
      handleDrop: ne,
      onNodeTextEditBlur: j,
      calcNodeAbility: T
    };
  },
  render() {
    const t = {
      searchbar: () => this.c.enableQuickSearch ? f(g("el-input"), {
        "model-value": this.c.state.query,
        class: [this.ns.b("quick-search"), this.ns.b("quick-search")],
        placeholder: this.c.state.placeHolder,
        onInput: this.onInput
      }, {
        prefix: () => f(g("ion-icon"), {
          class: this.ns.e("search-icon"),
          name: "search"
        }, null)
      }) : null
    }, a = this.c.controlPanel ? "tree" : "default";
    return t[a] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey)
        return f(g("el-tree"), {
          ref: "treeRef",
          class: [this.ns.b("tree"), this.ns.is("list", !0)],
          key: this.treeRefreshKey,
          "node-key": "_id",
          "highlight-current": !0,
          "expand-on-click-node": !1,
          "auto-expand-parent": !1,
          "show-checkbox": !this.c.state.singleSelect,
          "check-strictly": !this.cascadeSelect,
          "default-expanded-keys": this.c.state.expandedKeys,
          props: {
            label: "_text",
            children: "_children",
            isLeaf: "_leaf",
            disabled: "_disableSelect"
          },
          lazy: !0,
          load: this.loadData,
          onCheck: this.onCheck,
          onNodeExpand: (c) => {
            this.updateNodeExpand(c, !0);
          },
          onNodeCollapse: (c) => {
            this.updateNodeExpand(c, !1);
          },
          draggable: !0,
          "allow-drop": this.allowDrop,
          "allow-drag": this.allowDrag,
          onNodeDrop: this.handleDrop
        }, {
          default: ({
            data: c
          }) => {
            var b, l;
            const i = this.findNodeData(c._uuid, this.c);
            if (!i)
              return null;
            const u = this.c.getNodeModel(i._nodeId);
            if (this.editingNodeKey === i._id)
              return f("div", {
                class: [this.ns.b("node"), (b = u.sysCss) == null ? void 0 : b.cssName]
              }, [f(g("el-input"), {
                modelValue: this.editingNodeText,
                "onUpdate:modelValue": (d) => this.editingNodeText = d,
                ref: "treeNodeTextInputRef",
                class: this.ns.b("editing-node"),
                onBlur: () => {
                  this.onNodeTextEditBlur();
                },
                onKeydown: (d) => {
                  d.stopPropagation(), d.code === "Enter" && this.onNodeTextEditBlur();
                }
              }, null)]);
            const y = le(u);
            let p;
            return y ? p = f(g("iBizControlShell"), {
              data: i,
              modelData: y,
              context: this.c.context,
              params: this.c.params
            }, null) : p = [i._icon ? f(g("iBizIcon"), {
              class: this.ns.be("node", "icon"),
              icon: i._icon
            }, null) : null, i._textHtml ? f("span", {
              class: this.ns.be("node", "label"),
              innerHTML: i._textHtml
            }, null) : f("span", {
              class: this.ns.be("node", "label")
            }, [i._text])], f("div", {
              onDblclick: (d) => this.onNodeDbClick(i, d),
              onClick: (d) => this.onNodeClick(i, d),
              onContextmenu: (d) => this.onNodeContextmenu(i, d),
              class: [this.ns.b("node"), this.calcNodeAbility(i) ? "" : this.ns.bm("node", "disabled"), i._leaf ? this.ns.be("node", "item") : this.ns.be("node", "group"), (l = u.sysCss) == null ? void 0 : l.cssName]
            }, [p, this.renderCounter(u), this.renderContextMenu(u, i)]);
          }
        });
    }, be(f(g("iBizControlBase"), {
      ref: "treeviewRef",
      controller: this.c
    }, we(t) ? t : {
      default: () => [t]
    }), [[Ie("loading"), this.c.state.isLoading]]);
  }
});
class Ee {
  constructor() {
    z(this, "component", "IBizListTreeControl");
  }
}
const ke = ue(
  D,
  function(t) {
    t.component(D.name, D), ae(
      "TREE_RENDER_LIST_TREE",
      () => new Ee()
    );
  }
), Oe = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(ke);
  }
};
export {
  ke as IBizListTreeControl,
  Oe as default
};
