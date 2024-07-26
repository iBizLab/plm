import './style.css';
var he = Object.defineProperty;
var pe = (e, N, n) => N in e ? he(e, N, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[N] = n;
var O = (e, N, n) => (pe(e, typeof N != "symbol" ? N + "" : N, n), n);
import { TreeController as Ne, getChildNodeRSs as _e, calcDeCodeNameById as Z, handleAllSettled as me, Srfuf as ye, getControlPanel as De, registerControlProvider as ve } from "@ibiz-template/runtime";
import { useControlController as Ie, useNamespace as ee, withInstall as ge } from "@ibiz-template/vue3-util";
import { ref as z, defineComponent as xe, computed as te, reactive as we, watch as ne, nextTick as Ee, resolveComponent as g, onMounted as be, onUnmounted as Ce, withDirectives as Te, createVNode as h, resolveDirective as Me, isVNode as Re, createTextVNode as oe } from "vue";
import { createUUID as ie } from "qx-util";
import { debounce as ae } from "lodash-es";
import { RuntimeError as V, RuntimeModelError as se } from "@ibiz-template/core";
import { isNil as re } from "ramda";
function x(e, N) {
  const n = N.state.items.find((o) => o._id === e);
  return n || N.state.items.find((o) => o._uuid === e);
}
function ke(e, N) {
  const n = () => {
    const a = e.value;
    if (!a)
      throw new V("找不到el-tree实例对象");
    return a;
  }, o = () => {
    var f;
    const a = e.value;
    if (!a) {
      setTimeout(() => {
        o();
      }, 200);
      return;
    }
    Object.values(a.store.nodesMap).forEach((r) => {
      const y = N.state.expandedKeys.includes(r.data._id);
      y !== r.expanded && (y ? r.expand() : r.collapse());
    }), N.state.singleSelect ? e.value.setCurrentKey(((f = N.state.selectedData[0]) == null ? void 0 : f._id) || void 0) : a.setCheckedKeys(N.state.selectedData.map((r) => r._id));
  }, d = ae(o, 500);
  return { getTreeInstance: n, updateUI: d, triggerNodeExpand: (a) => {
    const f = n(), r = f == null ? void 0 : f.store.nodesMap[a];
    if (r)
      return r.expanded ? (r.collapse(), !1) : (r.expand(), !0);
  } };
}
function Se(e) {
  switch (e) {
    case "inner":
      return "inner";
    case "before":
      return "prev";
    case "after":
      return "next";
    default:
      throw new V("暂不支持dropType:".concat(e));
  }
}
class Ae extends Ne {
  constructor() {
    super(...arguments);
    /**
     * 底部工具栏
     *
     * @type {(IControl | undefined)}
     * @memberof GroupTreeController
     */
    O(this, "bottomToolbar");
    /**
     * 隐藏节点id
     *
     * @type {string}
     * @memberof GroupTreeController
     */
    O(this, "hiddenNodeId", "");
    /**
     * 绘制模式
     *
     * @type {('tree' | 'listTree')}
     * @memberof GroupTreeController
     */
    O(this, "renderMode", "tree");
    /**
     * 是否正在过滤
     *
     * @memberof GroupTreeController
     */
    O(this, "isFilter", z(!1));
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
    this.bottomToolbar = n.find((s) => s.name === "toolbar");
    const { ctrlParams: o = {} } = this.model.controlParam;
    o.HIDDENNODEID && (this.hiddenNodeId = o.HIDDENNODEID), o.RENDERMODE && (this.renderMode = o.RENDERMODE);
  }
  initState() {
    super.initState(), this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null, this.state.editingNodeKey = null, this.state.editingNodeText = null, this.state.editingNodeDefault = null;
  }
  /**
   * 临时取消监听
   *
   * @protected
   * @param {IData} msg
   * @memberof GroupTreeController
   */
  onDataChange(n) {
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
      _e(this.model, {
        parentId: o.id,
        hasQuery: !1
      }).forEach((a) => {
        var f;
        if ((f = a.parentDER1N) != null && f.pickupDEFName) {
          const r = this.getNodeModel(a.childDETreeNodeId);
          (r == null ? void 0 : r.treeNodeType) === "DE" && r.appDataEntityId && d.push({
            minorEntityId: r.appDataEntityId,
            pickupDEFName: a.parentDER1N.pickupDEFName.toLowerCase(),
            childDETreeNodeId: a.childDETreeNodeId,
            detreeNodeRSParams: a.detreeNodeRSParams
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
    const s = x(n, this), a = this.getNodeModel(s._nodeId);
    a != null && a.allowEditText && (this.state.editingNodeKey = s._id, this.state.editingNodeText = s._text, this.state.editingNodeDefault = o, this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null);
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
    const o = x(n, this), d = {
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
        const s = this.getNodeModel(d._nodeId), a = d._deData, f = this.context.clone(), r = await o.deService.exec(
          s.appDataEntityId,
          "create",
          f,
          a
        );
        this.emitDEDataChange("create", r.data), r.data && this.refresh();
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
    const { textAppDEFieldId: n, id: o } = this.state.newingNodeModel, d = this.state.newingNodeText, s = { _deData: {} };
    Object.assign(s, { _nodeId: o, _text: d }), Object.assign(s._deData, { [n]: d }), this.state.newingNodeDefault && Object.assign(s._deData, this.state.newingNodeDefault), Object.assign(s._deData, { [n]: d }), await this.createDeNodeData([s]), this.state.newingNodeModel = null, this.state.newingNodeText = null, this.state.newingNodeDefault = null;
  }
  /**
   * 修改节点文本
   * @param nodeData 节点数据
   * @param _text 节点文本
   */
  async onModifyTreeNode(n, o) {
    const d = this.getNodeModel(n._nodeId);
    if (!d.allowEditText)
      throw new se(d, "树节点没有配置编辑模式：名称");
    if (n._nodeType !== "DE")
      throw new V("不是实体树节点数据");
    if (n._text !== o) {
      if (n._text = o, this.state.editingNodeDefault) {
        const s = Object.keys(this.state.editingNodeDefault);
        s && s.length > 0 && s.forEach((a) => {
          re(n._deData[a]) && (n._deData[a] = this.state.editingNodeDefault[a]);
        });
      }
      await this.updateDeNodeData([n]), this.emitDEDataChange("update", n._deData);
    }
    this.state.editingNodeKey = null, this.state.editingNodeText = null, this.state.editingNodeDefault = null;
  }
  /**
   * 删除树节点
   * @param args 参数
   * @returns
   */
  async onRemoveTreeNode(n) {
    const { context: o, params: d, data: s } = this.handlerAbilityParams(n), a = this.getNodeModel(s[0]._nodeId);
    if ((n == null ? void 0 : n.silent) !== !0 && !await ibiz.confirm.error({
      title: "数据删除",
      desc: "确认删除数据？"
    }))
      return;
    await this._evt.emit("onBeforeRemove", void 0), await this.startLoading();
    let f = !1;
    try {
      const r = Z(
        a.appDataEntityId
      );
      await me(
        s.map(async (y) => {
          if (y.srfuf !== ye.CREATE) {
            const K = o.clone();
            K[r] = y.srfkey, await await ibiz.hub.getApp(a.appId).deService.exec(
              a.appDataEntityId,
              "remove",
              K,
              s,
              d
            ), f = !0;
          }
          this.afterRemove(y);
        })
      ), (n == null ? void 0 : n.silent) !== !0 && this.actionNotification("REMOVESUCCESS", {
        data: s,
        default: "数据[".concat(s.map((y) => y.srfmajortext).join("、"), "]删除成功!")
      }), f && !(n != null && n.notRefresh) && await this.refresh();
    } catch (r) {
      throw await this._evt.emit("onRemoveError", void 0), this.actionNotification("REMOVEERROR", {
        error: r,
        data: s
      }), r;
    } finally {
      await this.endLoading();
    }
    this.state.selectedData = [], await this._evt.emit("onRemoveSuccess", void 0);
  }
  /**
   * 计算是否允许拖入
   * @param draggingNode
   * @param dropNode
   * @param type
   * @returns
   */
  calcAllowDrop(n, o, d) {
    var a, f;
    const s = this.getNodeModel(n._nodeId);
    if (d === "inner")
      return !!this.findDropNodeRS(
        o._nodeId,
        s.appDataEntityId
      );
    if (((a = n._parent) == null ? void 0 : a._id) === ((f = o._parent) == null ? void 0 : f._id)) {
      const r = this.getNodeModel(o._nodeId);
      return (r == null ? void 0 : r.allowOrder) === !0;
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
    var P, k, L;
    d === "inner" && !o._leaf && o._children === void 0 && await this.expandNodeByKey([o._id]);
    const s = d !== "inner", a = [], f = this.getNodeModel(n._nodeId), r = d === "inner" ? o : o._parent;
    let y = !1;
    this.getNodeModel(r._nodeId).rootNode && (y = !0);
    const M = (r == null ? void 0 : r._id) !== ((P = n._parent) == null ? void 0 : P._id);
    let T = this.getNodeModel(o._nodeId);
    if (d === "inner" || ((k = o._parent) == null ? void 0 : k._id) !== ((L = n._parent) == null ? void 0 : L._id) || y) {
      const v = [];
      for (const _ of this.dropNodeRss.values())
        v.push(
          ..._.filter((D) => (
            // 修复子关系情况，根上也存在当前实体数据
            D.minorEntityId === f.appDataEntityId
          ))
        );
      if (y && M)
        v && (v.forEach((_) => {
          n._deData[_.pickupDEFName] = null;
        }), a.push(n), T = this.getNodeModel(f.id));
      else {
        const _ = this.findDropNodeRS(
          r._nodeId,
          f.appDataEntityId
        );
        _ && (v && v.forEach((D) => {
          n._deData[D.pickupDEFName] = null;
        }), n._deData[_.pickupDEFName] = r._value, _.detreeNodeRSParams && _.detreeNodeRSParams.forEach((D) => {
          var w, C;
          D.name && D.value && ((w = n._deData) != null && w.hasOwnProperty(
            D.name.toLowerCase()
          )) && ((C = r._deData) != null && C.hasOwnProperty(D.value.toLowerCase())) && (n._deData[D.name.toLowerCase()] = r._deData[D.value.toLowerCase()]);
        }), a.push(n), T = this.getNodeModel(_.childDETreeNodeId));
      }
    }
    const B = n._parent._children;
    if (B.splice(B.indexOf(n), 1), d === "inner")
      o._children || (o._children = [], o._leaf = !0, this.state.expandedKeys.push(o._id)), o._children.push(n);
    else {
      let v = r._children.indexOf(o);
      d === "next" && (v += 1), r._children.splice(v, 0, n);
    }
    (d === "inner" || M) && (n._parent = r, n._nodeId = T.id, this.state.expandedKeys = this.calcExpandedKeys([r]));
    const { sortAppDEFieldId: R, sortDir: j, allowOrder: F } = T;
    if (F === !0) {
      if (!R)
        throw new se(T, "缺少配置排序属性");
      const v = R.toLowerCase(), _ = j === "ASC", D = [...r._children].filter(
        (I) => I._nodeType === "DE"
      );
      _ || D.reverse();
      const w = (I) => I + (100 - I % 100), C = (I) => I[v] || 0;
      let E;
      D.forEach((I, S) => {
        const A = I._deData;
        E === void 0 ? I === n && (S === 0 ? E = 100 : E = w(C(D[S - 1]._deData)), A[v] = E, a.indexOf(I) === -1 && a.push(I)) : (E >= C(A) && (A[v] = w(E), a.push(I)), E = C(A));
      });
    }
    await this.updateDeNodeData(a), this._evt.emit("onAfterNodeDrop", { isChangedParent: M }), this.refreshNodeChildren(o, s), this.state.selectedData = [];
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
    var s;
    if (n.triggerKey === this.triggerKey)
      return;
    const o = n.data;
    if (n.subtype === "OBJECTCREATED") {
      ((s = this.model.detreeNodes) == null ? void 0 : s.find((f) => {
        if (f.appDataEntityId) {
          const r = Z(f.appDataEntityId);
          if (o.srfdecodename === r)
            return !0;
        }
        return !1;
      })) && this.refresh();
      return;
    }
    const d = this.state.items.find(
      (a) => a._nodeType === "DE" && a._deData && a._deData.srfdecodename === o.srfdecodename && a._deData.srfkey === o.srfkey
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
    var s;
    const d = (s = this.contextMenuInfos[n._nodeId]) == null ? void 0 : s.clickTBUIActionItem;
    if (d)
      return this.doUIAction(
        d.uiactionId,
        n,
        o,
        d.appId
      );
    if (this.state.navigational) {
      const a = this.getNodeModel(n._nodeId);
      if (!(a != null && a.navAppViewId))
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
function Oe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Re(e);
}
const G = /* @__PURE__ */ xe({
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
    const e = Ie((...t) => new Ae(...t)), N = te(() => e.context.srfreadonly === !0 || e.context.srfreadonly === "true"), n = we({});
    e.evt.on("onCreated", () => {
      e.counter && e.counter.onChange((t) => {
        Object.assign(n, t);
      }, !0);
    });
    const o = ee("control-group-tree"), d = ee("control-".concat(e.model.controlType.toLowerCase())), s = z(null), a = z(null), f = z(""), r = z(null);
    ne(() => r.value, (t) => {
      t && t.$el.getElementsByTagName("input")[0].focus();
    });
    const y = async () => {
      if (e.state.editingNodeKey)
        if (e.state.editingNodeText) {
          const t = x(e.state.editingNodeKey, e);
          await e.onModifyTreeNode(t, e.state.editingNodeText);
        } else
          e.state.editingNodeKey = null;
      e.state.newingNodeText ? e.onCreateTreeNode() : e.state.newingNodeModel = null;
    }, K = async () => {
      e.state.editingNodeKey && (e.state.editingNodeKey = null), e.state.newingNodeModel && (e.state.newingNodeModel = null, e.state.newingNodeText = "");
    }, {
      updateUI: M,
      triggerNodeExpand: T
    } = ke(s, e), B = (t) => t.map((i) => ({
      _id: i._id,
      _uuid: i._uuid,
      _leaf: i._leaf,
      _text: i._text
    }));
    e.evt.on("onAfterRefreshParent", (t) => {
      if (s.value) {
        const {
          parentNode: i,
          children: l
        } = t, u = B(l);
        s.value.updateKeyChildren(i._id, u), M();
      }
    }), e.evt.on("onAfterNodeDrop", (t) => {
      t.isChangedParent && (f.value = ie());
    });
    const R = te(() => e.state.isLoaded ? e.model.rootVisible ? e.state.rootNodes : e.state.rootNodes.reduce((t, i) => i._children ? t.concat(i._children) : t, []) : []);
    ne(R, (t, i) => {
      t !== i && (f.value = ie());
    });
    const j = async (t, i) => {
      let l;
      if (t.level === 0)
        l = R.value, ibiz.log.debug("初始加载");
      else {
        const u = x(t.data._uuid, e);
        u._children ? (ibiz.log.debug("节点展开加载-本地", u), l = u._children) : (ibiz.log.debug("节点展开加载-远程", u), l = await e.loadNodes(u));
      }
      ibiz.log.debug("给树返回值", l), i(B(l)), M();
    };
    let F = !1;
    e.evt.on("onLoadSuccess", () => {
      F = !0, setTimeout(() => {
        F = !1;
      }, 200);
    }), e.evt.on("onSelectionChange", async () => {
      var t;
      F && await Ee(), e.state.singleSelect ? s.value.setCurrentKey(((t = e.state.selectedData[0]) == null ? void 0 : t._id) || void 0) : s.value.setCheckedKeys(e.state.selectedData.map((i) => i._id));
    });
    const P = (t, i) => {
      const {
        checkedNodes: l
      } = i;
      e.setSelection(l);
    };
    let k = !1;
    const L = (t, i) => {
      var l, u, p;
      if (i.stopPropagation(), !t._disableSelect && !k) {
        if (((l = s.value) == null ? void 0 : l.getCurrentKey()) === t._id && !N.value) {
          const c = (u = s.value) == null ? void 0 : u.getCurrentKey();
          e.updateTreeNode({
            nodeKey: c,
            defaultValue: {}
          });
        }
        if (e.state.singleSelect || (p = s.value) == null || p.setCurrentKey(t._id), e.state.navigational) {
          const c = e.getNodeModel(t._nodeId);
          if (!(c != null && c.navAppViewId)) {
            const b = T(t._id);
            e.onExpandChange(t, b);
          }
        }
        e.onTreeNodeClick(t, i), k = !0, setTimeout(() => {
          k = !1;
        }, 200);
      }
    }, v = (t, i) => {
      i.stopPropagation(), !t._disableSelect && e.onDbTreeNodeClick(t);
    };
    let _;
    e.evt.on("onMounted", () => {
      Object.values(e.contextMenus).length > 0 && (() => import("@imengyu/vue3-context-menu"))().then((i) => {
        _ = i.default, _.default && !_.showContextMenu && (_ = _.default);
      });
    });
    const D = g("IBizRawItem"), w = g("IBizIcon"), C = (t, i, l, u) => {
      const p = [];
      return t.forEach((c) => {
        var Y;
        if (c.itemType === "SEPERATOR") {
          p.push({
            divided: "self"
          });
          return;
        }
        const b = u[c.id];
        if (b && !b.visible || c.actionLevel > 100)
          return;
        const m = {};
        if (c.showCaption && c.caption && (m.label = c.caption), c.sysImage && c.showIcon && (m.icon = h(w, {
          icon: c.sysImage
        }, null)), c.itemType === "DEUIACTION") {
          m.disabled = b.disabled, m.clickClose = !0;
          const {
            uiactionId: U
          } = c;
          U && (m.onClick = () => {
            e.doUIAction(U, i, l, c.appId);
          });
        } else if (c.itemType === "RAWITEM") {
          const {
            rawItem: U
          } = c;
          U && (m.label = h(D, {
            rawItem: c
          }, null));
        } else
          c.itemType === "ITEMS" && (Y = c.detoolbarItems) != null && Y.length && (m.children = C(c.detoolbarItems, i, l, u));
        p.push(m);
      }), p;
    }, E = async (t, i) => {
      i.preventDefault(), i.stopPropagation();
      const l = e.getNodeModel(t._nodeId);
      if (!(l != null && l.decontextMenu))
        return;
      const u = e.contextMenus[l.decontextMenu.id];
      if (!u.model.detoolbarItems)
        return;
      await u.calcButtonState(t._deData || (t.srfkey ? t : void 0), l.appDataEntityId);
      const p = u.state.buttonsState, c = C(u.model.detoolbarItems, t, i, p);
      c.length && _.showContextMenu({
        x: i.x,
        y: i.y,
        customClass: o.b("context-menu"),
        items: c
      });
    }, I = (t, i) => {
      var u, p;
      if (!((p = (u = t == null ? void 0 : t.decontextMenu) == null ? void 0 : u.detoolbarItems) != null && p.length))
        return;
      const l = e.contextMenuInfos[t.id];
      return l.clickTBUIActionItem && l.onlyOneActionItem ? null : h(g("iBizContextMenuControl"), {
        modelData: t.decontextMenu,
        groupLevelKeys: [50, 100],
        nodeModel: t,
        nodeData: i,
        context: e.context,
        onActionClick: (c, b) => e.doUIAction(c.uiactionId, i, b, c.appId)
      }, null);
    }, S = (t, i) => {
      const l = x(t._uuid, e);
      if (!l)
        throw new V("没有找到_uuid为".concat(t._uuid, "的节点"));
      e.onExpandChange(l, i);
    }, A = ae(() => {
      e.load();
    }, 500), de = (t) => {
      e.state.query = t, A();
    }, H = (t, i, l) => {
      const u = x(t.data._uuid, e), p = x(i.data._uuid, e);
      return e.calcAllowDrop(u, p, l);
    }, q = (t) => {
      const i = x(t.data._uuid, e);
      return e.calcAllowDrag(i);
    }, Q = (t, i, l) => {
      const u = Se(l), p = x(t.data._uuid, e), c = x(i.data._uuid, e);
      e.onNodeDrop(p, c, u);
    }, $ = (t) => {
      (t.key === "Enter" || t.keyCode === 13) && (t.stopPropagation(), y()), (t.key === "Escape" || t.keyCode === 27) && (t.stopPropagation(), K());
    }, W = (t) => {
      var i;
      if (t.code === "F2" || t.code === "Enter") {
        const l = (i = s.value) == null ? void 0 : i.getCurrentKey();
        e.updateTreeNode(l);
      }
    }, le = async () => {
      e.evt.emit("onBack", {}), e.isFilter.value = !1, s.value && s.value.filter("");
    };
    be(() => {
      var t;
      (t = a.value) == null || t.$el.addEventListener("keydown", W), e.evt.on("onFilterNode", async (i) => {
        const {
          nodeTag: l
        } = i;
        l && (e.isFilter.value = !0), s.value && s.value.filter("".concat(l, "@"));
      }), e.evt.on("onResetSate", async () => {
        e.evt.emit("onBack", {}), e.isFilter.value = !1, s.value && s.value.filter("");
      }), e.evt.on("onLoadSuccess", () => {
        e.isFilter.value ? e.evt.emit("onFilterNode", {
          nodeTag: "draft"
        }) : e.evt.emit("onResetSate", {});
      });
    }), Ce(() => {
      var t;
      (t = a.value) == null || t.$el.removeEventListener("keydown", W);
    });
    const ce = (t, i) => (i._id || "").includes(t), ue = (t) => t._id === "root:draft_parent" ? "draft_parent" : null, J = (t) => {
      if (t.counterId) {
        const i = n[t.counterId];
        return re(i) || t.counterMode === 1 && i === 0 ? null : h("div", {
          class: o.em("counter", "box")
        }, [h("span", {
          class: o.e("dot")
        }, [oe("·")]), h(g("iBizBadge"), {
          class: o.e("counter"),
          value: i
        }, null)]);
      }
    }, fe = () => e.isFilter.value ? h("div", {
      class: o.b("filter")
    }, [h("div", {
      class: o.be("filter", "header"),
      onClick: le
    }, [h(g("ion-icon"), {
      name: "arrow-back-outline"
    }, null), oe("返回")])]) : null, X = (t) => {
      var l, u;
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
      }, [(l = e.state.newingNodeModel) != null && l.sysImage ? h(w, {
        class: o.be("node", "icon"),
        icon: (u = e.state.newingNodeModel) == null ? void 0 : u.sysImage
      }, null) : null, h(g("el-input"), {
        modelValue: e.state.newingNodeText,
        "onUpdate:modelValue": (p) => e.state.newingNodeText = p,
        ref: "treeNodeTextInputRef",
        class: o.b("editing-node"),
        onBlur: y,
        onKeydown: (p) => {
          $(p);
        }
      }, null)]);
    };
    return {
      c: e,
      ns: o,
      treeRef: s,
      treeviewRef: a,
      treeNodeTextInputRef: r,
      treeData: R,
      treeRefreshKey: f,
      findNodeData: x,
      handleEditKeyDown: $,
      onCheck: P,
      onNodeClick: L,
      onNodeDbClick: v,
      onNodeContextmenu: E,
      loadData: j,
      renderContextMenu: I,
      renderCounter: J,
      updateNodeExpand: S,
      onInput: de,
      allowDrop: H,
      allowDrag: q,
      handleDrop: Q,
      onNodeTextEditBlur: y,
      renderTree: () => h("div", {
        class: [o.b("content"), o.is("filter", e.isFilter.value)]
      }, [fe(), h("div", {
        class: [o.b("tree-box"), o.is("filter", e.isFilter.value)]
      }, [h(g("el-tree"), {
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
        load: j,
        onCheck: P,
        onNodeExpand: (t) => {
          S(t, !0);
        },
        onNodeCollapse: (t) => {
          S(t, !1);
        },
        draggable: !N.value,
        "allow-drop": H,
        "allow-drag": q,
        onNodeDrop: Q,
        "filter-node-method": ce
      }, {
        default: ({
          data: t
        }) => {
          var c, b;
          const i = x(t._uuid, e);
          if (!i)
            return null;
          const l = e.getNodeModel(i._nodeId);
          if (e.state.editingNodeKey === i._id && !N.value)
            return h("div", {
              class: [o.b("node"), (c = l.sysCss) == null ? void 0 : c.cssName]
            }, [i._icon ? h(w, {
              class: o.be("node", "icon"),
              icon: i._icon
            }, null) : null, h(g("el-input"), {
              modelValue: e.state.editingNodeText,
              "onUpdate:modelValue": (m) => e.state.editingNodeText = m,
              ref: "treeNodeTextInputRef",
              class: o.b("editing-node"),
              onBlur: () => {
                y();
              },
              onKeydown: (m) => {
                $(m);
              }
            }, null)]);
          const u = De(l);
          let p;
          return u ? p = h(g("iBizControlShell"), {
            data: i,
            modelData: u,
            context: e.context,
            params: e.params
          }, null) : p = [i._icon ? h(w, {
            class: o.be("node", "icon"),
            icon: i._icon
          }, null) : null, i._textHtml ? h("span", {
            class: o.be("node", "label"),
            innerHTML: i._textHtml
          }, null) : h("span", {
            class: o.be("node", "label")
          }, [i._text])], [h("div", {
            onDblclick: (m) => v(i, m),
            onClick: (m) => L(i, m),
            onContextmenu: (m) => E(i, m),
            class: [o.b("node"), o.is("hidden", Object.is(e.hiddenNodeId, i._nodeId) && !e.isFilter.value), i._leaf ? o.be("node", "item") : o.be("node", "group"), (b = l.sysCss) == null ? void 0 : b.cssName]
          }, [p, J(l), I(l, i)]), X(i)];
        }
      }), X()])])
    };
  },
  render() {
    const e = {
      searchbar: () => this.c.enableQuickSearch ? h(g("el-input"), {
        "model-value": this.c.state.query,
        class: this.ns.b("quick-search"),
        placeholder: this.c.state.placeHolder,
        onInput: this.onInput
      }, {
        prefix: () => h(g("ion-icon"), {
          class: this.ns.e("search-icon"),
          name: "search"
        }, null)
      }) : null
    };
    this.c.bottomToolbar && (e.toolbar = () => h(g("iBizControlShell"), {
      modelData: this.c.bottomToolbar,
      context: this.c.context,
      params: this.c.params
    }, null));
    const N = this.c.controlPanel ? "tree" : "default";
    return e[N] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey)
        return this.renderTree();
    }, Te(h(g("iBizControlBase"), {
      ref: "treeviewRef",
      controller: this.c
    }, Oe(e) ? e : {
      default: () => [e]
    }), [[Me("loading"), this.c.state.isLoading]]);
  }
});
class Ke {
  constructor() {
    O(this, "component", "IBizGroupTreeControl");
  }
}
const Ge = ge(
  G,
  function(e) {
    e.component(G.name, G), ve(
      "TREE_RENDER_GROUP_TREE",
      () => new Ke()
    );
  }
);
export {
  Ge as IBizGroupTreeControl,
  Ge as default
};
