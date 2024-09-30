import './style.css';
var re = Object.defineProperty;
var ae = (a, n, t) => n in a ? re(a, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[n] = t;
var M = (a, n, t) => (ae(a, typeof n != "symbol" ? n + "" : n, t), t);
import { useControlController as le, useNamespace as se, withInstall as ce } from "@ibiz-template/vue3-util";
import { KanbanController as de, calcDeCodeNameById as ue, registerControlProvider as he } from "@ibiz-template/runtime";
import { defineComponent as Z, ref as F, computed as K, onMounted as ee, createVNode as o, resolveComponent as s, mergeProps as me, onBeforeUnmount as pe, createTextVNode as A } from "vue";
import U from "vuedraggable";
import { toNumberOrNil as Q, RuntimeModelError as X, clone as fe, listenJSEvent as ge, NOOP as Y } from "@ibiz-template/core";
class be extends de {
  constructor() {
    super(...arguments);
    /**
     *
     *
     * @memberof StepsKanbanController
     */
    M(this, "splitMap", /* @__PURE__ */ new Map());
    /**
     * 步骤分组标识
     *
     * @type {(string | number)}
     * @memberof StepsKanbanController
     */
    M(this, "splitGroupKey", "");
    /**
     * @description 可视化数据长度
     * @type {number}
     * @memberof StepsKanbanController
     */
    M(this, "visiableLength", 10);
    /**
     * @description 分组项高度（计算虚拟列表时使用）
     * @type {number}
     * @memberof StepsKanbanController
     */
    M(this, "groupItemSize", 160);
  }
  async onCreated() {
    await super.onCreated(), this.visiableLength = Q(this.controlParams.visiablecount) || this.visiableLength, this.groupItemSize = Q(this.controlParams.groupitemsize) || this.groupItemSize;
  }
  /**
   * 处理数据分组
   *
   * @memberof StepsKanbanController
   */
  async handleDataGroup() {
    if (await super.handleDataGroup(), this.state.groups.length > 0) {
      const t = this.state.groups.find((u) => {
        if (this.groupCodeListItems.find(
          (c) => c.value === u.key
        ).data === 1)
          return this.splitGroupKey = u.key, !0;
      });
      if (t) {
        const u = t.children.filter(
          (c) => !Object.is(c.entry_status, "2")
        ), m = t.children.filter(
          (c) => Object.is(c.entry_status, "2")
        );
        this.splitMap.set("".concat(t.key, "_runing"), { children: u }), this.splitMap.set("".concat(t.key, "_finish"), { children: m });
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
  async onDragChange(t, u) {
    var _;
    if (!this.enableEditGroup && t.from !== t.to) {
      ibiz.message.warning(
        ibiz.i18n.t("runtime.controller.control.kanban.adjustmentsGroup")
      );
      return;
    }
    const { from: m, to: c, fromIndex: b, toIndex: $ } = t, p = this.model.groupAppDEFieldId, f = this.model.minorSortAppDEFieldId;
    let D = this.state.groups.find((d) => d.key === m), w = this.state.groups.find((d) => d.key === c);
    if (D || (D = this.splitMap.get(m)), w || (w = this.splitMap.get(c)), !this.enableEditOrder) {
      if (t.from === t.to) {
        ibiz.message.warning(
          ibiz.i18n.t("runtime.controller.control.kanban.noAllowReorder")
        );
        return;
      }
      const d = D.children[b];
      return d[p] = t.to, this.filterGroupField([d], p), this.updateChangedItems([d]);
    }
    const O = [...w.children];
    if (!((_ = this.model.moveControlAction) == null ? void 0 : _.appDEMethodId))
      throw new X(
        this.model,
        ibiz.i18n.t("runtime.controller.common.md.noMoveDataCconfig")
      );
    this.state.updating = !0;
    const S = (d, C, k, g, I) => {
      let L = {};
      const T = g[C];
      if (T)
        L = {
          srftargetkey: T.srfkey,
          srfmovetype: C < g.length - 1 || I ? "MOVEBEFORE" : "MOVEAFTER"
        };
      else {
        let N = [];
        if (g.length > 0 && (N = g), N.length > 0) {
          const R = N.reduce((E, B) => {
            const x = E[f] > B[f];
            return x && E[this.dataEntity.keyAppDEFieldId] !== k.srfkey ? E : !x && B[this.dataEntity.keyAppDEFieldId] !== k.srfkey ? B : E;
          });
          R && R[this.dataEntity.keyAppDEFieldId] !== k.srfkey && (L = {
            srftargetkey: R.srfkey,
            srfmovetype: "MOVEAFTER"
          });
        }
      }
      return L;
    }, y = fe(D.children[b]);
    if (t.from !== t.to) {
      let d = t.to;
      u && (d = t.to.split("_")[0]), y[p] = d;
    }
    const P = D.children.splice(b, 1);
    if (w.children.splice($, 0, ...P), t.from !== t.to) {
      y[p] = t.to;
      const d = ibiz.hub.getApp(this.model.appId), C = ue(this.model.appDataEntityId), k = this.context.clone();
      k[C] = y.srfkey, this.filterGroupField([y], p);
      try {
        await d.deService.exec(
          this.model.appDataEntityId,
          "update",
          k,
          y
        );
        const g = this.state.items.findIndex(
          (I) => I.srfkey === y[this.dataEntity.keyAppDEFieldId]
        );
        g !== -1 && this.state.items.splice(g, 1, y);
      } catch (g) {
        throw this.state.updating = !1, new X(
          this.model,
          ibiz.i18n.t("runtime.controller.common.md.changeGroupError")
        );
      }
    }
    const V = S(
      b,
      $,
      y,
      O,
      t.from !== t.to
    );
    try {
      const { ok: d, result: C } = await this.moveOrderItem(
        y,
        V
      );
      d && (Array.isArray(C) && C.length > 0 ? C.forEach((k) => {
        const g = this.state.items.findIndex(
          (I) => I.srfkey === k[this.dataEntity.keyAppDEFieldId]
        );
        g !== -1 && (this.state.items[g][f] = k[f]);
      }) : await this.refresh());
    } catch (d) {
      this.state.updating = !1, this.actionNotification("MOVEERROR", {
        error: d
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
  filterGroupField(t, u) {
    t.forEach((m) => {
      const c = m[u];
      c.endsWith("_runing") ? m.entry_status = "1" : c.endsWith("_finish") && (m.entry_status = "2"), m[u] = c.replace("_runing", "").replace("_finish", "");
    });
  }
}
const ye = /* @__PURE__ */ Z({
  name: "VirtualDraggable",
  components: {
    draggable: U
  },
  props: {
    items: {
      type: Array,
      required: !0
    },
    count: {
      type: Number,
      default: 6
    },
    itemSize: {
      type: Number,
      default: 160
    }
  },
  emits: ["change"],
  setup(a, {
    emit: n
  }) {
    const t = F(a.count), u = F(), m = F(), c = K(() => a.items.slice(0, t.value)), b = (p) => {
      n("change", p);
    };
    return ee(() => {
      if (u.value) {
        const p = u.value.$el, f = a.items.length * a.itemSize + 16;
        p.style.height = "".concat(Math.max(f, p.offsetHeight), "px");
      }
    }), {
      draggableRef: u,
      scrollbarRef: m,
      virtualData: c,
      handleScroll: ({
        scrollTop: p
      }) => {
        const f = Math.floor(p / a.itemSize);
        t.value = f + a.count;
      },
      onChange: b
    };
  },
  render() {
    return o(s("el-scrollbar"), {
      ref: "scrollbarRef",
      noresize: !0,
      onScroll: this.handleScroll
    }, {
      default: () => [o(U, me({
        ref: "draggableRef",
        modelValue: this.virtualData,
        onChange: this.onChange
      }, this.$attrs), {
        ...this.$slots
      })]
    });
  }
});
const q = /* @__PURE__ */ Z({
  name: "IBizStepsKanbanControl",
  components: {
    draggable: U,
    "virtual-draggable": ye
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
  setup(a) {
    var W, H, J;
    const n = le((...e) => new be(...e)), t = se("control-".concat(n.model.controlType.toLowerCase())), u = F(), m = F(!1), c = K(() => !n.state.draggable || n.state.updating), b = K(() => n.context.srfreadonly === !0 || n.context.srfreadonly === "true"), $ = K(() => n.state.batching ? n.state.selectGroupKey : ""), p = (W = n.model.controls) == null ? void 0 : W.find((e) => e.name === "".concat(n.model.name, "_quicktoolbar") || e.name === "".concat(n.model.name, "_groupquicktoolbar")), f = (H = n.model.controls) == null ? void 0 : H.find((e) => e.name === "".concat(n.model.name, "_batchtoolbar")), D = ((J = n.model.groupSysCss) == null ? void 0 : J.cssName) || "", w = F({});
    let O = Y;
    const z = {};
    switch (n.model.groupLayout) {
      case "ROW":
        z.width = "".concat(n.model.groupWidth || 300, "px"), z.height = "100%";
        break;
      case "COLUMN":
        z.width = "100%", z.height = "".concat(n.model.groupHeight || 500, "px");
        break;
    }
    const S = (e) => {
      e.stopPropagation();
    }, y = (e, i) => {
      S(i);
      const r = String(e.key);
      w.value[r] = !w.value[r];
    }, P = (e, i) => (S(i), n.onRowClick(e)), V = (e, i) => (S(i), n.onDbRowClick(e)), _ = (e, i) => (S(e), n.onClickNew(e, i)), d = (e, i) => {
      const r = e.selectedData || [];
      i ? r.forEach((l) => {
        n.onRowClick(l);
      }) : e.children.filter((h) => !r.includes(h)).forEach((h) => {
        n.onRowClick(h);
      });
    }, C = (e) => n.groupCodeListItems.find((i) => i.value === e);
    ee(() => {
      O = ge(window, "resize", () => {
        m.value = n.getFullscreen();
      });
    }), pe(() => {
      O !== Y && O();
    });
    const k = (e, i) => {
      const {
        context: r,
        params: l
      } = n;
      return o(s("iBizControlShell"), {
        data: e,
        modelData: i,
        context: r,
        params: l
      }, null);
    }, g = (e, i) => {
      var r;
      return o(s("iBizActionToolbar"), {
        class: t.bem("item", "bottom", "actions"),
        "action-details": (r = n.getOptItemModel().deuiactionGroup) == null ? void 0 : r.uiactionGroupDetails,
        "actions-state": n.getOptItemAction(e),
        onActionClick: (l, h) => n.onGroupActionClick(l, e, h, i)
      }, null);
    }, I = (e) => {
      if (p)
        return o(s("iBizControlShell"), {
          class: t.e("quicktoolbar"),
          modelData: {
            ...p,
            name: "".concat(p.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null);
    }, L = (e) => {
      if (f)
        return o("div", {
          class: t.be("batch", "toolbar")
        }, [o(s("iBizControlShell"), {
          modelData: {
            ...f,
            name: "".concat(f.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null)]);
    }, T = (e) => {
      const i = e.selectedData || [], r = i.length === e.children.length, l = i.length > 0 && i.length < e.children.length;
      return o("div", {
        class: t.be("batch", "check")
      }, [o(s("el-checkbox"), {
        "model-value": r,
        indeterminate: l,
        onChange: () => d(e, r)
      }, {
        default: () => [A("全选")]
      }), o("span", {
        class: t.be("batch", "info")
      }, [A("已选择"), o("span", null, [i.length]), A("条数据")])]);
    }, N = (e) => {
      if ($.value === e.key)
        return o("div", {
          class: t.b("batch")
        }, [L(e), T(e)]);
    }, R = (e, i) => [o("div", {
      class: t.be("item", "top")
    }, [o("div", {
      class: t.bem("item", "top", "title")
    }, [e.srfmajortext]), o("div", {
      class: t.bem("item", "top", "description")
    }, [e.content])]), n.getOptItemModel() ? o("div", {
      class: t.be("item", "bottom")
    }, [g(e, i)]) : null], E = (e, i) => {
      const r = n.state.selectedData.findIndex((G) => G.srfkey === e.srfkey), l = [t.b("item"), t.is("selected", r !== -1), t.is("disabled", c.value)], h = {};
      n.model.cardWidth && (h.width = "".concat(n.model.cardWidth, "px")), n.model.cardHeight && (h.height = "".concat(n.model.cardHeight, "px"));
      const v = a.modelData.itemLayoutPanel;
      return o(s("el-card"), {
        shadow: "hover",
        class: l,
        "body-style": h,
        onClick: (G) => P(e, G),
        onDblclick: (G) => V(e, G)
      }, {
        default: () => [v ? k(e, v) : R(e, i)]
      });
    }, B = () => {
      if (n.state.isLoaded)
        return o(s("iBizNoData"), {
          text: n.model.emptyText,
          emptyTextLanguageRes: n.model.emptyTextLanguageRes
        }, null);
    };
    let x = null;
    const j = (e, i, r, l) => {
      const h = l || i.key;
      if (e.moved && n.onDragChange({
        from: h,
        to: h,
        fromIndex: e.moved.oldIndex,
        toIndex: e.moved.newIndex
      }), e.added && (x = {
        to: h,
        toIndex: e.added.newIndex
      }, r)) {
        const {
          id: v
        } = e.added.element, G = i.children.find((ie) => ie.id === v);
        G.entry_status = r;
      }
      e.removed && (x && (x.from = h, x.fromIndex = e.removed.oldIndex, n.onDragChange(x, r)), x = null);
    }, te = () => {
      const e = u.value.$el;
      m.value = n.onFullScreen(e);
    }, ne = (e) => {
      const i = n.model.groupUIActionGroup && e.groupActionGroupState || f;
      return $.value === e.key ? o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => S(r)
      }, [o(s("el-button"), {
        text: !0,
        onClick: () => n.closeBatch()
      }, {
        default: () => [A("完成")]
      })]) : o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => S(r)
      }, [n.enableNew && !b.value && o(s("el-button"), {
        class: t.be("group", "header-new"),
        text: !0,
        circle: !0,
        onClick: (r) => {
          _(r, e.key);
        }
      }, {
        default: () => [o(s("ion-icon"), {
          name: "add-outline",
          title: "新建"
        }, null)]
      }), i && !b.value && o(s("el-dropdown"), {
        class: t.be("group", "header-actions"),
        trigger: "click",
        teleported: !1
      }, {
        default: () => o("span", null, [A("···")]),
        dropdown: () => o("div", {
          class: t.be("group", "actions-dropdown")
        }, [n.model.groupUIActionGroup && e.groupActionGroupState && o(s("iBizActionToolbar"), {
          actionDetails: n.model.groupUIActionGroup.uiactionGroupDetails,
          actionsState: e.groupActionGroupState,
          onActionClick: (r, l) => {
            n.onGroupToolbarClick(r, l, e);
          }
        }, null), f && o(s("el-button"), {
          size: "small",
          onClick: () => {
            n.openBatch(e.key);
          }
        }, {
          default: () => [o(s("ion-icon"), {
            name: "checkmark-sharp"
          }, null), A("批量操作")]
        })])
      })]);
    }, oe = (e) => {
      if (n.splitGroupKey === e.key) {
        const i = n.splitMap.get("".concat(e.key, "_runing")), r = n.splitMap.get("".concat(e.key, "_finish"));
        return o("div", {
          class: t.b("split")
        }, [o("div", {
          class: t.be("split", "left")
        }, [o("div", {
          class: t.be("split", "header")
        }, [A("进行中")]), o(s("virtual-draggable"), {
          class: t.be("group", "draggable"),
          items: i.children,
          count: n.visiableLength,
          itemSize: n.groupItemSize,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: c.value || b.value,
          onChange: (l) => j(l, e, "1", "".concat(e.key, "_runing"))
        }, {
          item: ({
            element: l
          }) => E(l, e),
          header: () => i.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [B()])
        }), I(e)]), o("div", {
          class: t.be("split", "right")
        }, [o("div", {
          class: t.be("split", "header")
        }, [A("已完成")]), o(s("virtual-draggable"), {
          class: t.be("group", "draggable"),
          items: r.children,
          count: n.visiableLength,
          itemSize: n.groupItemSize,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: c.value || b.value,
          onChange: (l) => j(l, e, "2", "".concat(e.key, "_finish"))
        }, {
          item: ({
            element: l
          }) => E(l, e),
          header: () => r.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [B()])
        }), I(e)])]);
      }
      return [o(s("virtual-draggable"), {
        class: t.be("group", "draggable"),
        items: e.children,
        count: n.visiableLength,
        itemSize: n.groupItemSize,
        group: n.model.id,
        itemKey: "srfkey",
        disabled: c.value || b.value,
        onChange: (i) => j(i, e)
      }, {
        item: ({
          element: i
        }) => E(i, e),
        header: () => e.children.length ? null : o("div", {
          class: t.be("group", "list")
        }, [B()])
      }), I(e)];
    };
    return {
      c: n,
      ns: t,
      isFull: m,
      kanban: u,
      onFullScreen: te,
      renderGroup: (e) => {
        const i = C(e.key), r = w.value[String(e.key)], l = n.model.groupLayout === "COLUMN", h = {
          ...z
        };
        if (r && (h.height = "50px"), i.data === 1) {
          const v = z.width.slice(0, -2);
          h.width = "".concat(Number(v) * 2, "px");
        }
        return !r || l ? o("div", {
          class: [t.b("group"), t.is("collapse", r), D],
          style: h
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (v) => y(e, v)
        }, [o("div", {
          class: t.be("group", "header-left")
        }, [o(s("ion-icon"), {
          name: "caret-down-sharp"
        }, null), o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")])]), ne(e)]), N(e), o("div", {
          class: [t.be("group", "list"), t.is("empty", !e.children.length)]
        }, [oe(e)])]) : o("div", {
          class: [t.b("group"), t.is("collapse", r), D]
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (v) => y(e, v)
        }, [o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")]), o(s("ion-icon"), {
          name: "caret-forward-sharp"
        }, null)])]);
      }
    };
  },
  render() {
    var t;
    const {
      groups: a,
      isCreated: n
    } = this.c.state;
    return n ? o(s("iBizControlBase"), {
      ref: "kanban",
      controller: this.c,
      class: [this.ns.m((t = this.modelData.groupLayout) == null ? void 0 : t.toLowerCase()), this.ns.is("full", this.isFull), this.ns.is("plugin", !0)]
    }, {
      default: () => [o("div", {
        class: this.ns.b("group-container")
      }, [a.length > 0 && a.map((u) => this.renderGroup(u))]), a.length > 0 && o("div", {
        class: this.ns.e("full-btn"),
        onClick: this.onFullScreen
      }, [this.isFull ? o(s("ion-icon"), {
        name: "contract-outline"
      }, null) : o(s("ion-icon"), {
        name: "expand-outline"
      }, null)])]
    }) : null;
  }
});
class ke {
  constructor() {
    M(this, "component", "IBizStepsKanbanControl");
  }
}
const Ce = ce(
  q,
  function(a) {
    a.component(q.name, q), he(
      "CUSTOM_STEPS_KANBAN",
      () => new ke()
    );
  }
), Ae = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(a) {
    a.use(Ce);
  }
};
export {
  Ce as IBizStepsKanbanControl,
  Ae as default
};
