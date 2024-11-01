import './style.css';
var S = Object.defineProperty;
var x = (a, n, s) => n in a ? S(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[n] = s;
var g = (a, n, s) => (x(a, typeof n != "symbol" ? n + "" : n, s), s);
import { TreeController as R, calcDeCodeNameById as k, registerControlProvider as E } from "@ibiz-template/runtime";
import { defineComponent as A, ref as f, watch as I, onActivated as M, nextTick as L, onBeforeUnmount as G, createVNode as _, resolveComponent as N } from "vue";
import { useControlController as O, useNamespace as j, route2routePath as w } from "@ibiz-template/vue3-util";
import { useRoute as D } from "vue-router";
class B extends R {
  /**
   * 获取分组节点的theme_model数据
   *
   * @param {ITreeNodeData} target
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof TabGroupSelectTreeController
   */
  async getNodeThemeModel(n) {
    var i, u, h;
    const s = ibiz.hub.getApp(this.model.appId), o = this.context.clone(), t = ((u = (i = n._deData) == null ? void 0 : i.srfdecodename) == null ? void 0 : u.toLowerCase()) || k(this.model.appDataEntityId);
    if (t && (o[t.toLowerCase()] = (h = n._deData) == null ? void 0 : h.srfkey, o[t.toLowerCase()])) {
      const c = await s.deService.exec(
        t,
        "GET",
        o,
        n._deData,
        this.params
      );
      if (c && c.ok && c.data && c.data.theme_model)
        return JSON.parse(c.data.theme_model);
    }
  }
  /**
   * 节点点击
   *
   * @param {ITreeNodeData} nodeData
   * @return {*}  {Promise<void>}
   * @memberof TabGroupSelectTreeController
   */
  async onNodeClick(n) {
    if (this.setNavData(n), this.state.navigational) {
      const o = this.getNodeModel(n._nodeId);
      if (!(o != null && o.navAppViewId))
        return;
    }
    if (this.state.singleSelect && !n._disableSelect) {
      const { selectedData: o } = this.state, t = o.filter((i) => i._id !== n._id);
      t.length === o.length ? this.setSelection(
        this.state.singleSelect ? [n] : o.concat([n])
      ) : this.setSelection(t);
    }
    const s = this.parseTreeNodeData(n);
    n.srfthememodel && Object.assign(s.params, {
      srfthememodel: n.srfthememodel
    }), this._evt.emit("onActive", {
      ...s,
      nodeData: n
    });
  }
  /**
   * 判断当前节点是否为根节点
   *
   * @memberof TabGroupSelectTreeController
   */
  isRoot(n) {
    var o;
    const s = (o = this.model.detreeNodes) == null ? void 0 : o.find((t) => t.rootNode === !0);
    return !!(s && s.id === n);
  }
  /**
   * 设置激活 -- 重写方法，避免导航栏调用该方法
   *
   * @param {ITreeNodeData} _item
   * @return {*}  {Promise<void>}
   * @memberof TabGroupSelectTreeController
  //  */
  setActive(n) {
    return Promise.resolve();
  }
  /**
   *  设置选择--重写方法，避免导航栏调用该方法
   *
   * @param {{ _id: string }[]} _selection
   * @memberof TabGroupSelectTreeController
   */
  setSelection(n) {
  }
}
const U = /* @__PURE__ */ A({
  name: "TabGroupSelectTree",
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
    const a = O((...e) => new B(...e), {
      excludePropsKeys: ["data"]
    }), n = j("tab-group-select-tree"), s = f([]), o = f(""), t = f(), i = f({}), u = f([]), h = D(), c = async () => {
      if (!s.value || s.value.length === 0) {
        const e = await a.loadNodes();
        e.forEach((l) => {
          u.value.push(l), l._children && u.value.push(...l._children);
        }), s.value = e;
      }
      if (s.value && s.value.length > 0 && s.value[0]._children && s.value[0]._children.length > 0)
        if (await Promise.all(s.value[0]._children.map(async (e) => {
          const l = await a.loadNodes(e);
          u.value.push(...l);
        })), o.value) {
          const e = s.value[0]._children.find((l) => l._id === o.value);
          if (e && e._children && e._children.length ? i.value[o.value] ? t.value = e._children.find((l) => l._id === i.value[o.value]) : t.value = e._children[0] : t.value = e, t.value) {
            const l = await a.getNodeThemeModel(t.value);
            a.onNodeClick({
              ...t.value,
              srfthememodel: l
            });
          }
        } else {
          const e = a.view.modal.routeDepth;
          if (e) {
            const d = w(h), {
              srfnav: v
            } = d.pathNodes[e - 1];
            if (v) {
              const r = u.value.find((m) => m._id === v);
              if (r) {
                if (r._children && r._children.length > 0 ? (t.value = r._children[0], o.value = r._id, i.value[o.value] = r._children[0]._id) : r._parent && (a.isRoot(r._parent._id) ? o.value = r._id : (o.value = r._parent._id, i.value[o.value] = r._id)), t.value) {
                  const m = await a.getNodeThemeModel(t.value);
                  a.onNodeClick({
                    ...t.value,
                    srfthememodel: m
                  });
                }
                return;
              }
            }
          }
          const l = s.value[0]._children[0];
          if (o.value = l._id, l._children && l._children.length > 0 ? (t.value = l._children[0], i.value[o.value] = t.value._id) : t.value = l, t.value) {
            const d = await a.getNodeThemeModel(t.value);
            a.onNodeClick({
              ...t.value,
              srfthememodel: d
            });
          }
        }
    }, b = async () => {
      if (t.value) {
        const e = await a.getNodeThemeModel(t.value);
        a.onNodeClick({
          ...t.value,
          srfthememodel: e
        });
      }
    };
    a.evt.on("onMounted", async () => {
      await c();
    });
    let T = !1;
    if (a.view.layoutPanel && a.view.layoutPanel.panelItems && a.view.layoutPanel.panelItems.nav_pos) {
      const e = a.view.layoutPanel.panelItems.nav_pos;
      e.rawItemParams && (T = e.rawItemParams.expmode === "NO_ROUTE");
    }
    const p = I(() => h.fullPath, () => {
      if (T)
        return;
      const e = a.view.modal.routeDepth;
      if (e) {
        const l = w(h), {
          srfnav: d,
          viewName: v
        } = l.pathNodes[e - 1];
        if (a.view.model.codeName !== v)
          return;
        if (d && t.value && d !== t.value._id) {
          const r = u.value.find((m) => m._id === d);
          r && (t.value = r, r._children && r._children.length > 0 ? (t.value = r._children[0], o.value = r._id, i.value[o.value] = r._children[0]._id) : r._parent && (a.isRoot(r._parent._id) ? o.value = r._id : (o.value = r._parent._id, i.value[o.value] = r._id)), b());
        }
      }
    }, {
      immediate: !0
    });
    M(async () => {
      if (t.value)
        if (t.value._nodeType !== "STATIC") {
          const e = await a.getNodeThemeModel(t.value);
          a.onNodeClick({
            ...t.value,
            srfthememodel: e
          });
        } else
          L(() => {
            a.onNodeClick(t.value);
          });
      else
        c();
    }), G(() => {
      p == null || p();
    });
    const C = async (e, l) => {
      var v;
      const d = (v = l._children) == null ? void 0 : v.find((r) => r._id === e);
      if (d) {
        t.value = d;
        const r = await a.getNodeThemeModel(t.value);
        a.onNodeClick({
          ...d,
          srfthememodel: r
        });
      }
    }, y = async (e) => {
      if (o.value === e._id)
        return;
      o.value = e._id;
      let l = null;
      e._children && e._children.length > 0 ? (i.value[o.value] ? t.value = e._children.find((d) => d._id === i.value[o.value]) : (i.value[o.value] = e._children[0]._id, t.value = e._children[0]), l = await a.getNodeThemeModel(t.value)) : t.value = e, await a.onNodeClick({
        ...t.value,
        srfthememodel: l
      });
    }, P = (e) => {
      if (o.value === e._id && e._children && e._children.length > 0)
        return e._children.forEach((l) => {
          l._deData ? l.text = l._deData.caption || l._deData.srfmajortext : l.text = l._text || l.srfmajortext, l.value = l._id;
        }), _(N("van-dropdown-menu"), {
          class: n.b("select-list")
        }, {
          default: () => [_(N("van-dropdown-item"), {
            modelValue: i.value[e._id],
            "onUpdate:modelValue": (l) => i.value[e._id] = l,
            options: e._children,
            onChange: (l) => C(l, e)
          }, null)]
        });
    };
    return {
      ns: n,
      c: a,
      renderTabs: () => {
        if (s.value && s.value.length > 0 && s.value[0]._children)
          return _("div", {
            class: [n.b("tabs"), {
              [n.bm("tabs", "default")]: a.controlParams.tabmode !== "EQUALLY"
            }, {
              [n.bm("tabs", "equally")]: a.controlParams.tabmode === "EQUALLY"
            }]
          }, [s.value[0]._children.map((e) => {
            const l = e._text || e.srfmajortext;
            return _("div", {
              class: [n.be("tabs", "item"), n.is("selected", o.value === e._id)],
              onClick: () => y(e)
            }, [_("span", {
              class: n.bem("tabs", "item", "caption")
            }, [l]), P(e)]);
          })]);
      }
    };
  },
  render() {
    return _(N("iBizControlBase"), {
      controller: this.c
    }, {
      default: () => [this.c.state.isCreated && this.c.state.isLoaded && _("div", {
        class: this.ns.b()
      }, [this.renderTabs()])]
    });
  }
});
class V {
  constructor() {
    g(this, "component", "TabGroupSelectTree");
  }
}
const F = {
  install(a) {
    a.component("TabGroupSelectTree", U), E(
      "TREE_RENDER_TAB_GROUP_SELECT",
      () => new V()
    );
  }
};
export {
  F as default
};
