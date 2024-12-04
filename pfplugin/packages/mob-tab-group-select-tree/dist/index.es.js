import './style.css';
var P = Object.defineProperty;
var x = (l, n, s) => n in l ? P(l, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : l[n] = s;
var C = (l, n, s) => (x(l, typeof n != "symbol" ? n + "" : n, s), s);
import { TreeController as E, ScriptFactory as R, calcDeCodeNameById as k, registerControlProvider as A } from "@ibiz-template/runtime";
import { defineComponent as I, ref as g, watch as L, onActivated as M, nextTick as G, onBeforeUnmount as O, createVNode as h, resolveComponent as T } from "vue";
import { useControlController as j, useNamespace as D, route2routePath as w } from "@ibiz-template/vue3-util";
import { useRoute as B } from "vue-router";
import { isString as U } from "lodash-es";
const V = /\$\{[^}]*\}/;
class q extends E {
  /**
   * @description 深度计算searchConds
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof TabGroupSelectTreeController
   */
  deepCalcSearchConds(n) {
    return n.forEach((s) => {
      const { value: a, searchconds: t = [] } = s;
      t.length > 0 && (s.searchconds = this.deepCalcSearchConds(
        t
      )), U(a) && V.test(a) && (s.value = R.execSingleLine("`".concat(a, "`"), {
        ...this.getEventArgs()
      }));
    }), n;
  }
  /**
   * 获取分组节点的theme_model数据
   *
   * @param {ITreeNodeData} target
   * @return {*}  {(Promise<IData | undefined>)}
   * @memberof TabGroupSelectTreeController
   */
  async getNodeThemeModel(n) {
    var i, c, f;
    const s = ibiz.hub.getApp(this.model.appId), a = this.context.clone(), t = ((c = (i = n._deData) == null ? void 0 : i.srfdecodename) == null ? void 0 : c.toLowerCase()) || k(this.model.appDataEntityId);
    if (t && (a[t.toLowerCase()] = (f = n._deData) == null ? void 0 : f.srfkey, a[t.toLowerCase()])) {
      const u = await s.deService.exec(
        t,
        "GET",
        a,
        n._deData,
        this.params
      );
      if (u && u.ok && u.data && u.data.theme_model) {
        const _ = JSON.parse(u.data.theme_model), { searchconds: p = [] } = _;
        return p.length > 0 && (_.searchconds = this.deepCalcSearchConds(p)), _;
      }
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
      const a = this.getNodeModel(n._nodeId);
      if (!(a != null && a.navAppViewId))
        return;
    }
    if (this.state.singleSelect && !n._disableSelect) {
      const { selectedData: a } = this.state, t = a.filter((i) => i._id !== n._id);
      t.length === a.length ? this.setSelection(
        this.state.singleSelect ? [n] : a.concat([n])
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
    var a;
    const s = (a = this.model.detreeNodes) == null ? void 0 : a.find((t) => t.rootNode === !0);
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
const z = /* @__PURE__ */ I({
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
    const l = j((...e) => new q(...e), {
      excludePropsKeys: ["data"]
    }), n = D("tab-group-select-tree"), s = g([]), a = g(""), t = g(), i = g({}), c = g([]), f = B(), u = async () => {
      if (!s.value || s.value.length === 0) {
        const e = await l.loadNodes();
        e.forEach((o) => {
          c.value.push(o), o._children && c.value.push(...o._children);
        }), s.value = e;
      }
      if (s.value && s.value.length > 0 && s.value[0]._children && s.value[0]._children.length > 0)
        if (await Promise.all(s.value[0]._children.map(async (e) => {
          const o = await l.loadNodes(e);
          c.value.push(...o);
        })), a.value) {
          const e = s.value[0]._children.find((o) => o._id === a.value);
          if (e && e._children && e._children.length ? i.value[a.value] ? t.value = e._children.find((o) => o._id === i.value[a.value]) : t.value = e._children[0] : t.value = e, t.value) {
            const o = await l.getNodeThemeModel(t.value);
            l.onNodeClick({
              ...t.value,
              srfthememodel: o
            });
          }
        } else {
          const e = l.view.modal.routeDepth;
          if (e) {
            const d = w(f), {
              srfnav: v
            } = d.pathNodes[e - 1];
            if (v) {
              const r = c.value.find((m) => m._id === v);
              if (r) {
                if (r._children && r._children.length > 0 ? (t.value = r._children[0], a.value = r._id, i.value[a.value] = r._children[0]._id) : r._parent && (l.isRoot(r._parent._id) ? a.value = r._id : (a.value = r._parent._id, i.value[a.value] = r._id)), t.value) {
                  const m = await l.getNodeThemeModel(t.value);
                  l.onNodeClick({
                    ...t.value,
                    srfthememodel: m
                  });
                }
                return;
              }
            }
          }
          const o = s.value[0]._children[0];
          if (a.value = o._id, o._children && o._children.length > 0 ? (t.value = o._children[0], i.value[a.value] = t.value._id) : t.value = o, t.value) {
            const d = await l.getNodeThemeModel(t.value);
            l.onNodeClick({
              ...t.value,
              srfthememodel: d
            });
          }
        }
    }, _ = async () => {
      if (t.value) {
        const e = await l.getNodeThemeModel(t.value);
        l.onNodeClick({
          ...t.value,
          srfthememodel: e
        });
      }
    };
    l.evt.on("onMounted", async () => {
      await u();
    });
    let p = !1;
    if (l.view.layoutPanel && l.view.layoutPanel.panelItems && l.view.layoutPanel.panelItems.nav_pos) {
      const e = l.view.layoutPanel.panelItems.nav_pos;
      e.rawItemParams && (p = e.rawItemParams.expmode === "NO_ROUTE");
    }
    const N = L(() => f.fullPath, () => {
      if (p)
        return;
      const e = l.view.modal.routeDepth;
      if (e) {
        const o = w(f), {
          srfnav: d,
          viewName: v
        } = o.pathNodes[e - 1];
        if (l.view.model.codeName !== v)
          return;
        if (d && t.value && d !== t.value._id) {
          const r = c.value.find((m) => m._id === d);
          r && (t.value = r, r._children && r._children.length > 0 ? (t.value = r._children[0], a.value = r._id, i.value[a.value] = r._children[0]._id) : r._parent && (l.isRoot(r._parent._id) ? a.value = r._id : (a.value = r._parent._id, i.value[a.value] = r._id)), _());
        }
      }
    }, {
      immediate: !0
    });
    M(async () => {
      if (t.value)
        if (t.value._nodeType !== "STATIC") {
          const e = await l.getNodeThemeModel(t.value);
          l.onNodeClick({
            ...t.value,
            srfthememodel: e
          });
        } else
          G(() => {
            l.onNodeClick(t.value);
          });
      else
        u();
    }), O(() => {
      N == null || N();
    });
    const b = async (e, o) => {
      var v;
      const d = (v = o._children) == null ? void 0 : v.find((r) => r._id === e);
      if (d) {
        t.value = d;
        const r = await l.getNodeThemeModel(t.value);
        l.onNodeClick({
          ...d,
          srfthememodel: r
        });
      }
    }, S = async (e) => {
      if (a.value === e._id)
        return;
      a.value = e._id;
      let o = null;
      e._children && e._children.length > 0 ? (i.value[a.value] ? t.value = e._children.find((d) => d._id === i.value[a.value]) : (i.value[a.value] = e._children[0]._id, t.value = e._children[0]), o = await l.getNodeThemeModel(t.value)) : t.value = e, await l.onNodeClick({
        ...t.value,
        srfthememodel: o
      });
    }, y = (e) => {
      if (a.value === e._id && e._children && e._children.length > 0)
        return e._children.forEach((o) => {
          o._deData ? o.text = o._deData.caption || o._deData.srfmajortext : o.text = o._text || o.srfmajortext, o.value = o._id;
        }), h(T("van-dropdown-menu"), {
          class: n.b("select-list")
        }, {
          default: () => [h(T("van-dropdown-item"), {
            modelValue: i.value[e._id],
            "onUpdate:modelValue": (o) => i.value[e._id] = o,
            options: e._children,
            onChange: (o) => b(o, e)
          }, null)]
        });
    };
    return {
      ns: n,
      c: l,
      renderTabs: () => {
        if (s.value && s.value.length > 0 && s.value[0]._children)
          return h("div", {
            class: [n.b("tabs"), {
              [n.bm("tabs", "default")]: l.controlParams.tabmode !== "EQUALLY"
            }, {
              [n.bm("tabs", "equally")]: l.controlParams.tabmode === "EQUALLY"
            }]
          }, [s.value[0]._children.map((e) => {
            const o = e._text || e.srfmajortext;
            return h("div", {
              class: [n.be("tabs", "item"), n.is("selected", a.value === e._id)],
              onClick: () => S(e)
            }, [h("span", {
              class: n.bem("tabs", "item", "caption")
            }, [o]), y(e)]);
          })]);
      }
    };
  },
  render() {
    return h(T("iBizControlBase"), {
      controller: this.c
    }, {
      default: () => [this.c.state.isCreated && this.c.state.isLoaded && h("div", {
        class: this.ns.b()
      }, [this.renderTabs()])]
    });
  }
});
class Q {
  constructor() {
    C(this, "component", "TabGroupSelectTree");
  }
}
const Z = {
  install(l) {
    l.component("TabGroupSelectTree", z), A(
      "TREE_RENDER_TAB_GROUP_SELECT",
      () => new Q()
    );
  }
};
export {
  Z as default
};
