import './style.css';
var he = Object.defineProperty;
var pe = (e, N, n) => N in e ? he(e, N, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[N] = n;
var T = (e, N, n) => (pe(e, typeof N != "symbol" ? N + "" : N, n), n);
import { TreeController as Ne, getChildNodeRSs as me, calcDeCodeNameById as L, handleAllSettled as ye, Srfuf as _e, getControlPanel as De, registerControlProvider as ge } from "@ibiz-template/runtime";
import { useControlController as ve, useNamespace as Y, withInstall as Ie } from "@ibiz-template/vue3-util";
import { ref as k, defineComponent as Ee, computed as Z, reactive as we, watch as ee, nextTick as xe, resolveComponent as v, onMounted as be, onUnmounted as Ce, withDirectives as Te, createVNode as h, resolveDirective as Me, isVNode as Re, createTextVNode as te } from "vue";
import { createUUID as ne } from "qx-util";
import { debounce as ie } from "lodash-es";
import { RuntimeError as K, RuntimeModelError as oe, recursiveIterate as ke } from "@ibiz-template/core";
import { isNil as ae } from "ramda";
function E(e, N) {
  const n = N.state.items.find((o) => o._id === e);
  return n || N.state.items.find((o) => o._uuid === e);
}
function Se(e, N) {
  const n = () => {
    const s = e.value;
    if (!s)
      throw new K("找不到el-tree实例对象");
    return s;
  }, o = () => {
    var f;
    const s = e.value;
    if (!s) {
      setTimeout(() => {
        o();
      }, 200);
      return;
    }
    Object.values(s.store.nodesMap).forEach((l) => {
      const m = N.state.expandedKeys.includes(l.data._id);
      m !== l.expanded && (m ? l.expand() : l.collapse());
    }), N.state.singleSelect ? e.value.setCurrentKey(((f = N.state.selectedData[0]) == null ? void 0 : f._id) || void 0) : s.setCheckedKeys(N.state.selectedData.map((l) => l._id));
  }, d = ie(o, 500);
  return { getTreeInstance: n, updateUI: d, triggerNodeExpand: (s) => {
    const f = n(), l = f == null ? void 0 : f.store.nodesMap[s];
    if (l)
      return l.expanded ? (l.collapse(), !1) : (l.expand(), !0);
  } };
}
function Ae(e) {
  switch (e) {
    case "inner":
      return "inner";
    case "before":
      return "prev";
    case "after":
      return "next";
    default:
      throw new K("暂不支持dropType:".concat(e));
  }
}
class Oe extends Ne {
  constructor() {
    super(...arguments);
    /**
     * 底部工具栏
     *
     * @type {(IControl | undefined)}
     * @memberof GroupTreeController
     */
    T(this, "bottomToolbar");
    /**
     * 隐藏节点id
     *
     * @type {string}
     * @memberof GroupTreeController
     */
    T(this, "hiddenNodeId", "");
    /**
     * 绘制模式
     *
     * @type {('tree' | 'listTree')}
     * @memberof GroupTreeController
     */
    T(this, "renderMode", "tree");
    /**
     * 是否正在过滤
     *
     * @memberof GroupTreeController
     */
    T(this, "isFilter", k(!1));
  }
  /**
   * 重新初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GroupTreeController
   */
  async onCreated() {
    var d;
    await super.onCreated();
    const n = ((d = this.view.model.viewLayoutPanel) == null ? void 0 : d.controls) || [];
    this.bottomToolbar = n.find((a) => a.name === "toolbar");
    const { ctrlParams: o = {} } = this.model.controlParam;
    o.HIDDENNODEID && (this.hiddenNodeId = o.HIDDENNODEID), o.RENDERMODE && (this.renderMode = o.RENDERMODE);
  }
  initState() {
    super.initState(), this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null, this.state.editingNodeKey = null, this.state.editingNodeText = null, this.state.editingNodeDefault = null;
  }
  /**
   *  初始化节点拖入关系处理
   */
  initDropNodeRss() {
    var n;
    (n = this.model.detreeNodes) == null || n.forEach((o) => {
      if (!o.allowDrop)
        return;
      const d = [];
      me(this.model, {
        parentId: o.id,
        hasQuery: !1
      }).forEach((s) => {
        var f;
        if ((f = s.parentDER1N) != null && f.pickupDEFName) {
          const l = this.getNodeModel(s.childDETreeNodeId);
          (l == null ? void 0 : l.treeNodeType) === "DE" && l.appDataEntityId && d.push({
            minorEntityId: l.appDataEntityId,
            pickupDEFName: s.parentDER1N.pickupDEFName.toLowerCase(),
            childDETreeNodeId: s.childDETreeNodeId,
            detreeNodeRSParams: s.detreeNodeRSParams
          });
        }
      }), d.length > 0 && this.dropNodeRss.set(o.id, d);
    });
  }
  /**
   * 编辑指定节点的文本
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  updateTreeNode({
    nodeKey: n,
    defaultValue: o
  }) {
    const d = this.context.srfreadonly === !0 || this.context.srfreadonly === "true";
    if (!n || n === this.state.editingNodeKey || d)
      return;
    const a = E(n, this), s = this.getNodeModel(a._nodeId);
    s != null && s.allowEditText && (this.state.editingNodeKey = a._id, this.state.editingNodeText = a._text, this.state.editingNodeDefault = o, this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null);
  }
  /**
   * 删除指定节点
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  removeTreeNode(n) {
    if (!n || n === this.state.editingNodeKey)
      return;
    const o = E(n, this), d = {
      context: this.context || {},
      params: this.params || {},
      data: [o]
    };
    this.onRemoveTreeNode(d);
  }
  /**
   * 新建树节点
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  newTreeNode({
    nodeType: n,
    defaultValue: o = {}
  }) {
    const d = this.getNodeModel(n);
    this.state.newingNodeModel = d, this.state.newingNodeDefault = o, this.state.editingNodeKey = null, this.state.editingNodeText = null, this.state.editingNodeDefault = null;
  }
  /**
   * 创建实体节点数据
   * @author ljx
   * @date 2023-12-27 04:19:36
   * @protected
   * @param {ITreeNodeData[]} nodeDatas 节点数据集合
   * @return {*}  {Promise<void>}
   */
  async createDeNodeData(n) {
    const o = ibiz.hub.getApp(this.context.srfappid);
    await Promise.all(
      n.map(async (d) => {
        const a = this.getNodeModel(d._nodeId), s = d._deData, f = this.context.clone(), l = await o.deService.exec(
          a.appDataEntityId,
          "create",
          f,
          s
        );
        this.emitDEDataChange("create", l.data), l.data && this.refresh();
      })
    );
  }
  /**
   * 创建树节点
   * @author ljx
   * @date 2023-12-27 04:32:52
   * @return {*}  {Promise<void>}
   */
  async onCreateTreeNode() {
    const { textAppDEFieldId: n, id: o } = this.state.newingNodeModel, d = this.state.newingNodeText, a = { _deData: {} };
    Object.assign(a, { _nodeId: o, _text: d }), Object.assign(a._deData, { [n]: d }), this.state.newingNodeDefault && Object.assign(a._deData, this.state.newingNodeDefault), Object.assign(a._deData, { [n]: d }), await this.createDeNodeData([a]), this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null;
  }
  /**
   * 修改节点文本
   * @param nodeData 节点数据
   * @param _text 节点文本
   */
  async onModifyTreeNode(n, o) {
    const d = this.getNodeModel(n._nodeId);
    if (!d.allowEditText)
      throw new oe(d, "树节点没有配置编辑模式：名称");
    if (n._nodeType !== "DE")
      throw new K("不是实体树节点数据");
    if (n._text !== o) {
      if (n._text = o, this.state.editingNodeDefault) {
        const a = Object.keys(this.state.editingNodeDefault);
        a && a.length > 0 && a.forEach((s) => {
          ae(n._deData[s]) && (n._deData[s] = this.state.editingNodeDefault[s]);
        });
      }
      await this.updateDeNodeData([n]);
    }
    this.state.editingNodeKey = null, this.state.editingNodeText = null, this.state.editingNodeDefault = null;
  }
  /**
   * 删除树节点
   * @param args 参数
   * @returns
   */
  async onRemoveTreeNode(n) {
    const { context: o, params: d, data: a } = this.handlerAbilityParams(n), s = this.getNodeModel(a[0]._nodeId);
    if ((n == null ? void 0 : n.silent) !== !0 && !await ibiz.confirm.error({
      title: "数据删除",
      desc: "确认删除数据？"
    }))
      return;
    await this._evt.emit("onBeforeRemove", void 0), await this.startLoading();
    let f = !1;
    try {
      const l = L(
        s.appDataEntityId
      );
      await ye(
        a.map(async (m) => {
          if (m.srfuf !== _e.CREATE) {
            const D = o.clone();
            D[l] = m.srfkey, await ibiz.hub.getApp(s.appId).deService.exec(
              s.appDataEntityId,
              "remove",
              D,
              d
            ), f = !0;
          }
          this.afterRemove(m);
        })
      ), (n == null ? void 0 : n.silent) !== !0 && this.actionNotification("REMOVESUCCESS", {
        data: a,
        default: "数据[".concat(a.map((m) => m.srfmajortext).join("、"), "]删除成功!")
      }), f && !(n != null && n.notRefresh) && await this.refresh();
    } catch (l) {
      throw await this._evt.emit("onRemoveError", void 0), this.actionNotification("REMOVEERROR", {
        error: l,
        data: a
      }), l;
    } finally {
      await this.endLoading();
    }
    this.state.selectedData = [], await this._evt.emit("onRemoveSuccess", void 0), a.forEach((l) => {
      this.emitDEDataChange("remove", l._deData);
    });
  }
  /**
   * 计算是否允许拖入
   * @param draggingNode
   * @param dropNode
   * @param type
   * @returns
   */
  calcAllowDrop(n, o, d) {
    var l, m;
    let a = !0;
    if (ke(
      { _children: [n] },
      (D) => {
        if (D._id === o._id)
          return a = !1, !0;
      },
      { childrenFields: ["_children"] }
    ), !a)
      return !1;
    const s = this.getNodeModel(n._nodeId), f = this.getNodeModel(o._nodeId);
    if (d === "inner")
      return !!this.findDropNodeRS(
        o._nodeId,
        s.appDataEntityId
      );
    if (s.appDataEntityId !== f.appDataEntityId)
      return !1;
    if (((l = n._parent) == null ? void 0 : l._id) === ((m = o._parent) == null ? void 0 : m._id)) {
      const D = this.getNodeModel(o._nodeId);
      return (D == null ? void 0 : D.allowOrder) === !0;
    }
    return o._parent ? o._parent && o._parent._id && this.getNodeModel(o._parent._nodeId).rootNode ? !0 : !!this.findDropNodeRS(
      o._parent._nodeId,
      s.appDataEntityId
    ) : !1;
  }
  /**
   * 处理节点拖入事件
   * @param draggingNode
   * @param dropNode
   * @param dropType
   */
  async onNodeDrop(n, o, d) {
    var S, M;
    d === "inner" && !o._leaf && o._children === void 0 && await this.expandNodeByKey([o._id]);
    const a = this.getNodeModel(n._nodeId), s = d === "inner" ? o : o._parent, f = d === "inner" || ((S = o._parent) == null ? void 0 : S._id) !== ((M = n._parent) == null ? void 0 : M._id);
    let l = this.getNodeModel(o._nodeId);
    const m = a.appDataEntityId !== l.appDataEntityId;
    let D = !1;
    if (this.getNodeModel(s._nodeId).rootNode && (D = !0), f || D) {
      const I = [];
      for (const g of this.dropNodeRss.values())
        I.push(
          ...g.filter((_) => (
            // 修复子关系情况，根上也存在当前实体数据
            _.minorEntityId === a.appDataEntityId
          ))
        );
      if (D && f)
        I && (I.forEach((g) => {
          n._deData[g.pickupDEFName] = null;
        }), l = this.getNodeModel(a.id));
      else {
        const g = this.findDropNodeRS(
          s._nodeId,
          a.appDataEntityId
        );
        g && (I && I.forEach((_) => {
          n._deData[_.pickupDEFName] = null;
        }), n._deData[g.pickupDEFName] = s._value, g.detreeNodeRSParams && g.detreeNodeRSParams.forEach((_) => {
          var b, x;
          _.name && _.value && ((b = n._deData) != null && b.hasOwnProperty(
            _.name.toLowerCase()
          )) && ((x = s._deData) != null && x.hasOwnProperty(_.value.toLowerCase())) && (n._deData[_.name.toLowerCase()] = s._deData[_.value.toLowerCase()]);
        }), l = this.getNodeModel(g.childDETreeNodeId));
      }
      this.state.expandedKeys = this.calcExpandedKeys([s]), await this.updateDeNodeData([n]);
    }
    if (d === "inner" || m)
      f && await this.refreshNodeChildren(n, !0), await this.refreshNodeChildren(s, !0);
    else {
      const { moveAppDEActionId: I, appDataEntityId: g, allowOrder: _ } = l;
      if (_) {
        if (!I)
          throw new oe(
            this.model,
            ibiz.i18n.t("runtime.controller.common.md.noMoveDataCconfig")
          );
        const b = {
          srftargetkey: o.srfkey,
          srfmovetype: d === "prev" ? "MOVEBEFORE" : "MOVEAFTER"
        }, x = ibiz.hub.getApp(this.context.srfappid), A = L(g), R = this.context.clone();
        R[A] = n.srfkey, (await x.deService.exec(
          g,
          I,
          R,
          b
        )).ok && (this.emitDEDataChange("update", n._deData), f && await this.refreshNodeChildren(n, !0), await this.refreshNodeChildren(s));
      }
    }
    this.state.selectedData = [];
  }
  /**
   * 检测实体数据变更
   *
   * @author tony001
   * @date 2024-03-29 11:03:30
   * @protected
   * @param {IPortalMessage} msg
   * @return {*}  {void}
   */
  onDEDataChange(n) {
    var a;
    if (n.triggerKey === this.triggerKey)
      return;
    const o = n.data;
    if (n.subtype === "OBJECTCREATED") {
      ((a = this.model.detreeNodes) == null ? void 0 : a.find((f) => {
        if (f.appDataEntityId) {
          const l = L(f.appDataEntityId);
          if (o.srfdecodename === l)
            return !0;
        }
        return !1;
      })) && this.refresh();
      return;
    }
    const d = this.state.items.find(
      (s) => s._nodeType === "DE" && s._deData && s._deData.srfdecodename === o.srfdecodename && s._deData.srfkey === o.srfkey
    );
    d && this.doNextActive(() => this.refreshNodeChildren(d, !0), {
      key: "refresh".concat(d._id)
    });
  }
  async afterLoad(n, o) {
    return super.afterLoad(n, o);
  }
  /**
   * 重写节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof GroupTreeController
   */
  async onTreeNodeClick(n, o) {
    var a;
    const d = (a = this.contextMenuInfos[n._nodeId]) == null ? void 0 : a.clickTBUIActionItem;
    if (d)
      return this.doUIAction(
        d.uiactionId,
        n,
        o,
        d.appId
      );
    if (this.state.navigational) {
      const s = this.getNodeModel(n._nodeId);
      if (!(s != null && s.navAppViewId))
        return;
    }
    this.state.singleSelect && !n._disableSelect && this.setSelection([n]), this.state.mdctrlActiveMode === 1 && await this.setActive(n);
  }
  /**
   * 过滤节点
   *
   * @param {string} nodeTag
   * @memberof GroupTreeController
   */
  async changeTreeState(n) {
    n && n === "draft" ? (this.isFilter.value = !0, this.evt.emit("onFilterNode", { nodeTag: n })) : this.resetTreeState();
  }
  /**
   *  重置过滤状态
   *
   * @author tony001
   * @date 2024-04-12 15:04:44
   * @param {boolean} state
   */
  resetTreeState() {
    this.isFilter.value && (this.evt.emit("onResetSate", {}), this.isFilter.value = !1);
  }
  /**
   * 重写刷新
   *
   * @author tony001
   * @date 2024-04-12 15:04:53
   * @return {*}  {Promise<void>}
   */
  async refresh() {
    super.refresh(), this.resetTreeState();
  }
}
function Be(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Re(e);
}
const j = /* @__PURE__ */ Ee({
  name: "IBizGroupTreeControl",
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
    mdctrlActiveMode: {
      type: Number,
      default: void 0
    },
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
    const e = ve((...t) => new Oe(...t)), N = Z(() => e.context.srfreadonly === !0 || e.context.srfreadonly === "true"), n = we({});
    e.evt.on("onCreated", () => {
      e.counter && e.counter.onChange((t) => {
        Object.assign(n, t);
      }, !0);
    });
    const o = Y("control-group-tree"), d = Y("control-".concat(e.model.controlType.toLowerCase())), a = k(null), s = k(null), f = k(""), l = k(null);
    ee(() => l.value, (t) => {
      t && t.$el.getElementsByTagName("input")[0].focus();
    });
    const m = async () => {
      if (e.state.editingNodeKey)
        if (e.state.editingNodeText) {
          const t = E(e.state.editingNodeKey, e);
          await e.onModifyTreeNode(t, e.state.editingNodeText);
        } else
          e.state.editingNodeKey = null;
      e.state.newingNodeText ? e.onCreateTreeNode() : e.state.newingNodeModel = null;
    }, D = async () => {
      e.state.editingNodeKey && (e.state.editingNodeKey = null), e.state.newingNodeModel && (e.state.newingNodeModel = null, e.state.newingNodeText = "");
    }, {
      updateUI: F,
      triggerNodeExpand: S
    } = Se(a, e), M = (t) => t.map((i) => ({
      _id: i._id,
      _uuid: i._uuid,
      _leaf: i._leaf,
      _text: i._text
    }));
    e.evt.on("onAfterRefreshParent", (t) => {
      if (a.value) {
        const {
          parentNode: i,
          children: r
        } = t, u = M(r);
        a.value.updateKeyChildren(i._id, u), F();
      }
    }), e.evt.on("onAfterNodeDrop", (t) => {
      t.isChangedParent && (f.value = ne());
    });
    const I = Z(() => e.state.isLoaded ? e.model.rootVisible ? e.state.rootNodes : e.state.rootNodes.reduce((t, i) => i._children ? t.concat(i._children) : t, []) : []);
    ee(I, (t, i) => {
      t !== i && (f.value = ne());
    });
    const g = async (t, i) => {
      let r;
      if (t.level === 0)
        r = I.value, ibiz.log.debug("初始加载");
      else {
        const u = E(t.data._uuid, e);
        u._children ? (ibiz.log.debug("节点展开加载-本地", u), r = u._children) : (ibiz.log.debug("节点展开加载-远程", u), r = await e.loadNodes(u));
      }
      ibiz.log.debug("给树返回值", r), i(M(r)), F();
    };
    let _ = !1;
    e.evt.on("onLoadSuccess", () => {
      _ = !0, setTimeout(() => {
        _ = !1;
      }, 200);
    }), e.evt.on("onSelectionChange", async () => {
      var t;
      _ && await xe(), e.state.singleSelect ? a.value.setCurrentKey(((t = e.state.selectedData[0]) == null ? void 0 : t._id) || void 0) : a.value.setCheckedKeys(e.state.selectedData.map((i) => i._id));
    });
    const b = (t, i) => {
      const {
        checkedNodes: r
      } = i;
      e.setSelection(r);
    };
    let x = !1;
    const A = (t, i) => {
      var r, u, p;
      if (i.stopPropagation(), !t._disableSelect && !x) {
        if (((r = a.value) == null ? void 0 : r.getCurrentKey()) === t._id && !N.value) {
          const c = (u = a.value) == null ? void 0 : u.getCurrentKey();
          e.updateTreeNode({
            nodeKey: c,
            defaultValue: {}
          });
        }
        if (e.state.singleSelect || (p = a.value) == null || p.setCurrentKey(t._id), e.state.navigational) {
          const c = e.getNodeModel(t._nodeId);
          if (!(c != null && c.navAppViewId)) {
            const w = S(t._id);
            e.onExpandChange(t, w);
          }
        }
        e.onTreeNodeClick(t, i), x = !0, setTimeout(() => {
          x = !1;
        }, 200);
      }
    }, R = (t, i) => {
      i.stopPropagation(), !t._disableSelect && e.onDbTreeNodeClick(t);
    };
    let C;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((i) => {
        C = i.default, C.default && !C.showContextMenu && (C = C.default);
      });
    });
    const se = v("IBizRawItem"), O = v("IBizIcon"), U = (t, i, r, u) => {
      const p = [];
      return t.forEach((c) => {
        var X;
        if (c.itemType === "SEPERATOR") {
          p.push({
            divided: "self"
          });
          return;
        }
        const w = u[c.id];
        if (w && !w.visible || c.actionLevel > 100)
          return;
        const y = {};
        if (c.showCaption && c.caption && (y.label = c.caption), c.sysImage && c.showIcon && (y.icon = h(O, {
          icon: c.sysImage
        }, null)), c.itemType === "DEUIACTION") {
          y.disabled = w.disabled, y.clickClose = !0;
          const {
            uiactionId: B
          } = c;
          B && (y.onClick = () => {
            e.doUIAction(B, i, r, c.appId);
          });
        } else if (c.itemType === "RAWITEM") {
          const {
            rawItem: B
          } = c;
          B && (y.label = h(se, {
            rawItem: c
          }, null));
        } else
          c.itemType === "ITEMS" && (X = c.detoolbarItems) != null && X.length && (y.children = U(c.detoolbarItems, i, r, u));
        p.push(y);
      }), p;
    }, V = async (t, i) => {
      i.preventDefault(), i.stopPropagation();
      const r = e.getNodeModel(t._nodeId);
      if (!(r != null && r.decontextMenu))
        return;
      const u = e.contextMenus[r.decontextMenu.id];
      if (!u.model.detoolbarItems)
        return;
      await u.calcButtonState(t._deData || (t.srfkey ? t : void 0), r.appDataEntityId);
      const p = u.state.buttonsState, c = U(u.model.detoolbarItems, t, i, p);
      c.length && C.showContextMenu({
        x: i.x,
        y: i.y,
        customClass: o.b("context-menu"),
        items: c
      });
    }, $ = (t, i) => {
      var u, p;
      if (!((p = (u = t == null ? void 0 : t.decontextMenu) == null ? void 0 : u.detoolbarItems) != null && p.length))
        return;
      const r = e.contextMenuInfos[t.id];
      return r.clickTBUIActionItem && r.onlyOneActionItem ? null : h(v("iBizContextMenuControl"), {
        modelData: t.decontextMenu,
        groupLevelKeys: [50, 100],
        nodeModel: t,
        nodeData: i,
        context: e.context,
        onActionClick: (c, w) => e.doUIAction(c.uiactionId, i, w, c.appId)
      }, null);
    }, P = (t, i) => {
      const r = E(t._uuid, e);
      if (!r)
        throw new K("没有找到_uuid为".concat(t._uuid, "的节点"));
      e.onExpandChange(r, i);
    }, re = ie(() => {
      e.load();
    }, 500), de = (t) => {
      e.state.query = t, re();
    }, G = (t, i, r) => {
      const u = E(t.data._uuid, e), p = E(i.data._uuid, e);
      return e.calcAllowDrop(u, p, r);
    }, H = (t) => {
      const i = E(t.data._uuid, e);
      return e.calcAllowDrag(i);
    }, q = (t, i, r) => {
      const u = Ae(r), p = E(t.data._uuid, e), c = E(i.data._uuid, e);
      e.onNodeDrop(p, c, u);
    }, z = (t) => {
      (t.key === "Enter" || t.keyCode === 13) && (t.stopPropagation(), m()), (t.key === "Escape" || t.keyCode === 27) && (t.stopPropagation(), D());
    }, Q = (t) => {
      var i;
      if (t.code === "F2" || t.code === "Enter") {
        const r = (i = a.value) == null ? void 0 : i.getCurrentKey();
        e.updateTreeNode(r);
      }
    }, le = async () => {
      e.evt.emit("onBack", {}), e.isFilter.value = !1, a.value && a.value.filter("");
    };
    be(() => {
      var t;
      (t = s.value) == null || t.$el.addEventListener("keydown", Q), e.evt.on("onFilterNode", async (i) => {
        const {
          nodeTag: r
        } = i;
        r && (e.isFilter.value = !0), a.value && a.value.filter("".concat(r, "@"));
      }), e.evt.on("onResetSate", async () => {
        e.evt.emit("onBack", {}), e.isFilter.value = !1, a.value && a.value.filter("");
      }), e.evt.on("onLoadSuccess", () => {
        e.isFilter.value ? e.evt.emit("onFilterNode", {
          nodeTag: "draft"
        }) : e.evt.emit("onResetSate", {});
      });
    }), Ce(() => {
      var t;
      (t = s.value) == null || t.$el.removeEventListener("keydown", Q);
    });
    const ce = (t, i) => (i._id || "").includes(t), ue = (t) => t._id === "root:draft_parent" ? "draft_parent" : null, W = (t) => {
      if (t.counterId) {
        const i = n[t.counterId];
        return ae(i) || t.counterMode === 1 && i === 0 ? null : h("div", {
          class: o.em("counter", "box")
        }, [h("span", {
          class: o.e("dot")
        }, [te("·")]), h(v("iBizBadge"), {
          class: o.e("counter"),
          value: i
        }, null)]);
      }
    }, fe = () => e.isFilter.value ? h("div", {
      class: o.b("filter")
    }, [h("div", {
      class: o.be("filter", "header"),
      onClick: le
    }, [h(v("ion-icon"), {
      name: "arrow-back-outline"
    }, null), te("返回")])]) : null, J = (t) => {
      var r, u;
      if (!e.state.newingNodeModel)
        return null;
      const {
        parent_id: i
      } = e.state.newingNodeDefault || {};
      if (i) {
        if (!t)
          return null;
        const {
          _value: p
        } = t || {};
        if (p !== i)
          return null;
      }
      return !i && t ? null : h("div", {
        class: [o.be("node", "newing")]
      }, [(r = e.state.newingNodeModel) != null && r.sysImage ? h(O, {
        class: o.be("node", "icon"),
        icon: (u = e.state.newingNodeModel) == null ? void 0 : u.sysImage
      }, null) : null, h(v("el-input"), {
        modelValue: e.state.newingNodeText,
        "onUpdate:modelValue": (p) => e.state.newingNodeText = p,
        ref: "treeNodeTextInputRef",
        class: o.b("editing-node"),
        onBlur: m,
        onKeydown: (p) => {
          z(p);
        }
      }, null)]);
    };
    return {
      c: e,
      ns: o,
      treeRef: a,
      treeviewRef: s,
      treeNodeTextInputRef: l,
      treeData: I,
      treeRefreshKey: f,
      findNodeData: E,
      handleEditKeyDown: z,
      onCheck: b,
      onNodeClick: A,
      onNodeDbClick: R,
      onNodeContextmenu: V,
      loadData: g,
      renderContextMenu: $,
      renderCounter: W,
      updateNodeExpand: P,
      onInput: de,
      allowDrop: G,
      allowDrag: H,
      handleDrop: q,
      onNodeTextEditBlur: m,
      renderTree: () => h("div", {
        class: [o.b("content"), o.is("filter", e.isFilter.value)]
      }, [fe(), h("div", {
        class: [o.b("tree-box"), o.is("filter", e.isFilter.value)]
      }, [h(v("el-tree"), {
        ref: "treeRef",
        key: f.value,
        class: [d.b("tree"), o.is("list-tree", e.renderMode === "listTree")],
        "node-key": "_id",
        "highlight-current": !0,
        "expand-on-click-node": !1,
        "auto-expand-parent": !1,
        "show-checkbox": !e.state.singleSelect,
        "check-strictly": !0,
        "default-expanded-keys": e.state.expandedKeys,
        props: {
          label: "_text",
          children: "_children",
          isLeaf: "_leaf",
          class: ue
        },
        lazy: !0,
        load: g,
        onCheck: b,
        onNodeExpand: (t) => {
          P(t, !0);
        },
        onNodeCollapse: (t) => {
          P(t, !1);
        },
        draggable: !N.value,
        "allow-drop": G,
        "allow-drag": H,
        onNodeDrop: q,
        "filter-node-method": ce
      }, {
        default: ({
          data: t
        }) => {
          var c, w;
          const i = E(t._uuid, e);
          if (!i)
            return null;
          const r = e.getNodeModel(i._nodeId);
          if (e.state.editingNodeKey === i._id && !N.value)
            return h("div", {
              class: [o.b("node"), (c = r.sysCss) == null ? void 0 : c.cssName]
            }, [i._icon ? h(O, {
              class: o.be("node", "icon"),
              icon: i._icon
            }, null) : null, h(v("el-input"), {
              modelValue: e.state.editingNodeText,
              "onUpdate:modelValue": (y) => e.state.editingNodeText = y,
              ref: "treeNodeTextInputRef",
              class: o.b("editing-node"),
              onBlur: () => {
                m();
              },
              onKeydown: (y) => {
                z(y);
              }
            }, null)]);
          const u = De(r);
          let p;
          return u ? p = h(v("iBizControlShell"), {
            data: i,
            modelData: u,
            context: e.context,
            params: e.params
          }, null) : p = [i._icon ? h(O, {
            class: o.be("node", "icon"),
            icon: i._icon
          }, null) : null, i._textHtml ? h("span", {
            class: o.be("node", "label"),
            innerHTML: i._textHtml
          }, null) : h("span", {
            class: o.be("node", "label")
          }, [i._text])], [h("div", {
            onDblclick: (y) => R(i, y),
            onClick: (y) => A(i, y),
            onContextmenu: (y) => V(i, y),
            class: [o.b("node"), o.is("hidden", Object.is(e.hiddenNodeId, i._nodeId) && !e.isFilter.value), i._leaf ? o.be("node", "item") : o.be("node", "group"), (w = r.sysCss) == null ? void 0 : w.cssName]
          }, [p, W(r), $(r, i)]), J(i)];
        }
      }), J()])])
    };
  },
  render() {
    const e = {
      searchbar: () => this.c.enableQuickSearch ? h(v("el-input"), {
        "model-value": this.c.state.query,
        class: this.ns.b("quick-search"),
        placeholder: this.c.state.placeHolder,
        onInput: this.onInput
      }, {
        prefix: () => h(v("ion-icon"), {
          class: this.ns.e("search-icon"),
          name: "search"
        }, null)
      }) : null
    };
    this.c.bottomToolbar && (e.toolbar = () => h(v("iBizControlShell"), {
      modelData: this.c.bottomToolbar,
      context: this.c.context,
      params: this.c.params
    }, null));
    const N = this.c.controlPanel ? "tree" : "default";
    return e[N] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey)
        return this.renderTree();
    }, Te(h(v("iBizControlBase"), {
      ref: "treeviewRef",
      controller: this.c
    }, Be(e) ? e : {
      default: () => [e]
    }), [[Me("loading"), this.c.state.isLoading]]);
  }
});
class Ke {
  constructor() {
    T(this, "component", "IBizGroupTreeControl");
  }
}
const He = Ie(
  j,
  function(e) {
    e.component(j.name, j), ge(
      "TREE_RENDER_GROUP_TREE",
      () => new Ke()
    );
  }
);
export {
  He as IBizGroupTreeControl,
  He as default
};
