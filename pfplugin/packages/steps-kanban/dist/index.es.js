import './style.css';
var ne = Object.defineProperty;
var oe = (d, n, t) => n in d ? ne(d, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[n] = t;
var T = (d, n, t) => (oe(d, typeof n != "symbol" ? n + "" : n, t), t);
import { useControlController as se, useNamespace as re, withInstall as ie } from "@ibiz-template/vue3-util";
import { KanbanController as le, calcDeCodeNameById as ae, registerControlProvider as ce } from "@ibiz-template/runtime";
import { defineComponent as de, ref as P, computed as U, onMounted as ue, onBeforeUnmount as he, createVNode as o, resolveComponent as a, createTextVNode as B } from "vue";
import K from "vuedraggable";
import { RuntimeModelError as Q, clone as pe, listenJSEvent as me, NOOP as X } from "@ibiz-template/core";
class fe extends le {
  constructor() {
    super(...arguments);
    /**
     *
     *
     * @memberof StepsKanbanController
     */
    T(this, "splitMap", /* @__PURE__ */ new Map());
    /**
     * 步骤分组标识
     *
     * @type {(string | number)}
     * @memberof StepsKanbanController
     */
    T(this, "splitGroupKey", "");
  }
  /**
   * 处理数据分组
   *
   * @memberof StepsKanbanController
   */
  async handleDataGroup() {
    if (await super.handleDataGroup(), this.state.groups.length > 0) {
      const t = this.state.groups.find((h) => {
        if (this.groupCodeListItems.find(
          (u) => u.value === h.key
        ).data === 1)
          return this.splitGroupKey = h.key, !0;
      });
      if (t) {
        const h = t.children.filter(
          (u) => !Object.is(u.entry_status, "2")
        ), p = t.children.filter(
          (u) => Object.is(u.entry_status, "2")
        );
        this.splitMap.set("".concat(t.key, "_runing"), { children: h }), this.splitMap.set("".concat(t.key, "_finish"), { children: p });
      }
    }
  }
  /**
   * 拖拽变更事件处理回调
   * @author lxm
   * @date 2023-09-11 04:12:58
   * @param {IDragChangeInfo} info
   * @return {*}  {Promise<void>}
   */
  async onDragChange(t, h) {
    var L;
    if (!this.enableEditGroup && t.from !== t.to) {
      ibiz.message.warning(
        ibiz.i18n.t("runtime.controller.control.kanban.adjustmentsGroup")
      );
      return;
    }
    const { from: p, to: u, fromIndex: y, toIndex: M } = t, v = this.model.groupAppDEFieldId, g = this.model.minorSortAppDEFieldId;
    let w = this.state.groups.find((l) => l.key === p), D = this.state.groups.find((l) => l.key === u);
    if (w || (w = this.splitMap.get(p)), D || (D = this.splitMap.get(u)), !this.enableEditOrder) {
      if (t.from === t.to) {
        ibiz.message.warning(
          ibiz.i18n.t("runtime.controller.control.kanban.noAllowReorder")
        );
        return;
      }
      const l = w.children[y];
      return l[v] = t.to, this.filterGroupField([l], v), this.updateChangedItems([l]);
    }
    const $ = [...D.children];
    if (!((L = this.model.moveControlAction) == null ? void 0 : L.appDEMethodId))
      throw new Q(
        this.model,
        ibiz.i18n.t("runtime.controller.common.md.noMoveDataCconfig")
      );
    this.state.updating = !0;
    const E = (l, k, b, m, I) => {
      let O = {};
      const N = m[k];
      if (N)
        O = {
          srftargetkey: N.srfkey,
          srfmovetype: k < m.length - 1 || I ? "MOVEBEFORE" : "MOVEAFTER"
        };
      else {
        let _ = [];
        if (m.length > 0 && (_ = m), _.length > 0) {
          const z = _.reduce((A, S) => {
            const x = A[g] > S[g];
            return x && A[this.dataEntity.keyAppDEFieldId] !== b.srfkey ? A : !x && S[this.dataEntity.keyAppDEFieldId] !== b.srfkey ? S : A;
          });
          z && z[this.dataEntity.keyAppDEFieldId] !== b.srfkey && (O = {
            srftargetkey: z.srfkey,
            srfmovetype: "MOVEAFTER"
          });
        }
      }
      return O;
    }, f = pe(w.children[y]);
    if (t.from !== t.to) {
      let l = t.to;
      h && (l = t.to.split("_")[0]), f[v] = l;
    }
    const R = w.children.splice(y, 1);
    if (D.children.splice(M, 0, ...R), t.from !== t.to) {
      f[v] = t.to;
      const l = ibiz.hub.getApp(this.model.appId), k = ae(this.model.appDataEntityId), b = this.context.clone();
      b[k] = f.srfkey, this.filterGroupField([f], v);
      try {
        await l.deService.exec(
          this.model.appDataEntityId,
          "update",
          b,
          f
        );
        const m = this.state.items.findIndex(
          (I) => I.srfkey === f[this.dataEntity.keyAppDEFieldId]
        );
        m !== -1 && this.state.items.splice(m, 1, f);
      } catch (m) {
        throw this.state.updating = !1, new Q(
          this.model,
          ibiz.i18n.t("runtime.controller.common.md.changeGroupError")
        );
      }
    }
    const V = E(
      y,
      M,
      f,
      $,
      t.from !== t.to
    );
    try {
      const { ok: l, result: k } = await this.moveOrderItem(
        f,
        V
      );
      l && (Array.isArray(k) && k.length > 0 ? k.forEach((b) => {
        const m = this.state.items.findIndex(
          (I) => I.srfkey === b[this.dataEntity.keyAppDEFieldId]
        );
        m !== -1 && (this.state.items[m][g] = b[g]);
      }) : await this.refresh());
    } catch (l) {
      this.state.updating = !1, this.actionNotification("MOVEERROR", {
        error: l
      });
    } finally {
      await this.afterLoad({}, this.state.items), this.state.updating = !1;
    }
  }
  /**
   * 过滤分组属性
   *
   * @param {IData[]} items
   * @param {string} groupField
   * @memberof StepsKanbanController
   */
  filterGroupField(t, h) {
    t.forEach((p) => {
      const u = p[h];
      u.endsWith("_runing") ? p.entry_status = "1" : u.endsWith("_finish") && (p.entry_status = "2"), p[h] = u.replace("_runing", "").replace("_finish", "");
    });
  }
}
const q = /* @__PURE__ */ de({
  name: "IBizStepsKanbanControl",
  components: {
    draggable: K
  },
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
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(d) {
    var W, H, J;
    const n = se((...e) => new fe(...e)), t = re("control-".concat(n.model.controlType.toLowerCase())), h = P(), p = P(!1), u = U(() => !n.state.draggable || n.state.updating), y = U(() => n.context.srfreadonly === !0 || n.context.srfreadonly === "true"), M = U(() => n.state.batching ? n.state.selectGroupKey : ""), v = (W = n.model.controls) == null ? void 0 : W.find((e) => e.name === "".concat(n.model.name, "_quicktoolbar") || e.name === "".concat(n.model.name, "_groupquicktoolbar")), g = (H = n.model.controls) == null ? void 0 : H.find((e) => e.name === "".concat(n.model.name, "_batchtoolbar")), w = ((J = n.model.groupSysCss) == null ? void 0 : J.cssName) || "", D = P({});
    let $ = X;
    const G = {};
    switch (n.model.groupLayout) {
      case "ROW":
        G.width = "".concat(n.model.groupWidth || 300, "px"), G.height = "100%";
        break;
      case "COLUMN":
        G.width = "100%", G.height = "".concat(n.model.groupHeight || 500, "px");
        break;
    }
    const E = (e) => {
      e.stopPropagation();
    }, f = (e, s) => {
      E(s);
      const r = String(e.key);
      D.value[r] = !D.value[r];
    }, R = (e, s) => (E(s), n.onRowClick(e)), V = (e, s) => (E(s), n.onDbRowClick(e)), L = (e, s) => (E(e), n.onClickNew(e, s)), l = (e, s) => {
      const r = e.selectedData || [];
      s ? r.forEach((i) => {
        n.onRowClick(i);
      }) : e.children.filter((c) => !r.includes(c)).forEach((c) => {
        n.onRowClick(c);
      });
    }, k = (e) => n.groupCodeListItems.find((s) => s.value === e);
    ue(() => {
      $ = me(window, "resize", () => {
        p.value = n.getFullscreen();
      });
    }), he(() => {
      $ !== X && $();
    });
    const b = (e, s) => {
      const {
        context: r,
        params: i
      } = n;
      return o(a("iBizControlShell"), {
        data: e,
        modelData: s,
        context: r,
        params: i
      }, null);
    }, m = (e, s) => {
      var r;
      return o(a("iBizActionToolbar"), {
        class: t.bem("item", "bottom", "actions"),
        "action-details": (r = n.getOptItemModel().deuiactionGroup) == null ? void 0 : r.uiactionGroupDetails,
        "actions-state": n.getOptItemAction(e),
        onActionClick: (i, c) => n.onGroupActionClick(i, e, c, s)
      }, null);
    }, I = (e) => {
      if (v)
        return o(a("iBizControlShell"), {
          class: t.e("quicktoolbar"),
          modelData: {
            ...v,
            name: "".concat(v.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null);
    }, O = (e) => {
      if (g)
        return o("div", {
          class: t.be("batch", "toolbar")
        }, [o(a("iBizControlShell"), {
          modelData: {
            ...g,
            name: "".concat(g.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null)]);
    }, N = (e) => {
      const s = e.selectedData || [], r = s.length === e.children.length, i = s.length > 0 && s.length < e.children.length;
      return o("div", {
        class: t.be("batch", "check")
      }, [o(a("el-checkbox"), {
        "model-value": r,
        indeterminate: i,
        onChange: () => l(e, r)
      }, {
        default: () => [B("全选")]
      }), o("span", {
        class: t.be("batch", "info")
      }, [B("已选择"), o("span", null, [s.length]), B("条数据")])]);
    }, _ = (e) => {
      if (M.value === e.key)
        return o("div", {
          class: t.b("batch")
        }, [O(e), N(e)]);
    }, z = (e, s) => [o("div", {
      class: t.be("item", "top")
    }, [o("div", {
      class: t.bem("item", "top", "title")
    }, [e.srfmajortext]), o("div", {
      class: t.bem("item", "top", "description")
    }, [e.content])]), n.getOptItemModel() ? o("div", {
      class: t.be("item", "bottom")
    }, [m(e, s)]) : null], A = (e, s) => {
      const r = n.state.selectedData.findIndex((F) => F.srfkey === e.srfkey), i = [t.b("item"), t.is("selected", r !== -1), t.is("disabled", u.value)], c = {};
      n.model.cardWidth && (c.width = "".concat(n.model.cardWidth, "px")), n.model.cardHeight && (c.height = "".concat(n.model.cardHeight, "px"));
      const C = d.modelData.itemLayoutPanel;
      return o(a("el-card"), {
        shadow: "hover",
        class: i,
        "body-style": c,
        onClick: (F) => R(e, F),
        onDblclick: (F) => V(e, F)
      }, {
        default: () => [C ? b(e, C) : z(e, s)]
      });
    }, S = () => {
      if (n.state.isLoaded)
        return o(a("iBizNoData"), {
          text: n.model.emptyText,
          emptyTextLanguageRes: n.model.emptyTextLanguageRes
        }, null);
    };
    let x = null;
    const j = (e, s, r, i) => {
      const c = i || s.key;
      if (e.moved && n.onDragChange({
        from: c,
        to: c,
        fromIndex: e.moved.oldIndex,
        toIndex: e.moved.newIndex
      }), e.added && (x = {
        to: c,
        toIndex: e.added.newIndex
      }, r)) {
        const {
          id: C
        } = e.added.element, F = s.children.find((te) => te.id === C);
        F.entry_status = r;
      }
      e.removed && (x && (x.from = c, x.fromIndex = e.removed.oldIndex, n.onDragChange(x, r)), x = null);
    }, Y = () => {
      const e = h.value.$el;
      p.value = n.onFullScreen(e);
    }, Z = (e) => {
      const s = n.model.groupUIActionGroup && e.groupActionGroupState || g;
      return M.value === e.key ? o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => E(r)
      }, [o(a("el-button"), {
        text: !0,
        onClick: () => n.closeBatch()
      }, {
        default: () => [B("完成")]
      })]) : o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => E(r)
      }, [n.enableNew && !y.value && o(a("el-button"), {
        class: t.be("group", "header-new"),
        text: !0,
        circle: !0,
        onClick: (r) => {
          L(r, e.key);
        }
      }, {
        default: () => [o(a("ion-icon"), {
          name: "add-outline",
          title: "新建"
        }, null)]
      }), s && !y.value && o(a("el-dropdown"), {
        class: t.be("group", "header-actions"),
        trigger: "click",
        teleported: !1
      }, {
        default: () => o("span", null, [B("···")]),
        dropdown: () => o("div", {
          class: t.be("group", "actions-dropdown")
        }, [n.model.groupUIActionGroup && e.groupActionGroupState && o(a("iBizActionToolbar"), {
          actionDetails: n.model.groupUIActionGroup.uiactionGroupDetails,
          actionsState: e.groupActionGroupState,
          onActionClick: (r, i) => {
            n.onGroupToolbarClick(r, i, e);
          }
        }, null), g && o(a("el-button"), {
          size: "small",
          onClick: () => {
            n.openBatch(e.key);
          }
        }, {
          default: () => [o(a("ion-icon"), {
            name: "checkmark-sharp"
          }, null), B("批量操作")]
        })])
      })]);
    }, ee = (e) => {
      if (n.splitGroupKey === e.key) {
        const s = n.splitMap.get("".concat(e.key, "_runing")), r = n.splitMap.get("".concat(e.key, "_finish"));
        return o("div", {
          class: t.b("split")
        }, [o("div", {
          class: t.be("split", "left")
        }, [o("div", {
          class: t.be("split", "header")
        }, [B("进行中")]), o(K, {
          class: t.be("group", "draggable"),
          modelValue: s.children,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: u.value || y.value,
          onChange: (i) => j(i, e, "1", "".concat(e.key, "_runing"))
        }, {
          item: ({
            element: i
          }) => A(i, e),
          header: () => s.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [S()])
        }), I(e)]), o("div", {
          class: t.be("split", "right")
        }, [o("div", {
          class: t.be("split", "header")
        }, [B("已完成")]), o(K, {
          class: t.be("group", "draggable"),
          modelValue: r.children,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: u.value || y.value,
          onChange: (i) => j(i, e, "2", "".concat(e.key, "_finish"))
        }, {
          item: ({
            element: i
          }) => A(i, e),
          header: () => r.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [S()])
        }), I(e)])]);
      }
      return [o(K, {
        class: t.be("group", "draggable"),
        modelValue: e.children,
        group: n.model.id,
        itemKey: "srfkey",
        disabled: u.value || y.value,
        onChange: (s) => j(s, e)
      }, {
        item: ({
          element: s
        }) => A(s, e),
        header: () => e.children.length ? null : o("div", {
          class: t.be("group", "list")
        }, [S()])
      }), I(e)];
    };
    return {
      c: n,
      ns: t,
      isFull: p,
      kanban: h,
      onFullScreen: Y,
      renderGroup: (e) => {
        const s = k(e.key), r = D.value[String(e.key)], i = n.model.groupLayout === "COLUMN", c = {
          ...G
        };
        if (r && (c.height = "50px"), s.data === 1) {
          const C = G.width.slice(0, -2);
          c.width = "".concat(Number(C) * 2, "px");
        }
        return !r || i ? o("div", {
          class: [t.b("group"), t.is("collapse", r), w],
          style: c
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (C) => f(e, C)
        }, [o("div", {
          class: t.be("group", "header-left")
        }, [o(a("ion-icon"), {
          name: "caret-down-sharp"
        }, null), o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")])]), Z(e)]), _(e), o("div", {
          class: [t.be("group", "list"), t.is("empty", !e.children.length)]
        }, [ee(e)])]) : o("div", {
          class: [t.b("group"), t.is("collapse", r), w]
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (C) => f(e, C)
        }, [o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")]), o(a("ion-icon"), {
          name: "caret-forward-sharp"
        }, null)])]);
      }
    };
  },
  render() {
    var t;
    const {
      groups: d,
      isCreated: n
    } = this.c.state;
    return n ? o(a("iBizControlBase"), {
      ref: "kanban",
      controller: this.c,
      class: [this.ns.m((t = this.modelData.groupLayout) == null ? void 0 : t.toLowerCase()), this.ns.is("full", this.isFull), this.ns.is("plugin", !0)]
    }, {
      default: () => [o("div", {
        class: this.ns.b("group-container")
      }, [d.length > 0 && d.map((h) => this.renderGroup(h))]), d.length > 0 && o("div", {
        class: this.ns.e("full-btn"),
        onClick: this.onFullScreen
      }, [this.isFull ? o(a("ion-icon"), {
        name: "contract-outline"
      }, null) : o(a("ion-icon"), {
        name: "expand-outline"
      }, null)])]
    }) : null;
  }
});
class be {
  constructor() {
    T(this, "component", "IBizStepsKanbanControl");
  }
}
const ye = ie(
  q,
  function(d) {
    d.component(q.name, q), ce(
      "CUSTOM_STEPS_KANBAN",
      () => new be()
    );
  }
), De = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(d) {
    d.use(ye);
  }
};
export {
  ye as IBizStepsKanbanControl,
  De as default
};
