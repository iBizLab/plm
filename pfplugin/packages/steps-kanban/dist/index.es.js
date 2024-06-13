import './style.css';
var te = Object.defineProperty;
var ne = (d, n, t) => n in d ? te(d, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[n] = t;
var M = (d, n, t) => (ne(d, typeof n != "symbol" ? n + "" : n, t), t);
import { useControlController as oe, useNamespace as le, withInstall as re } from "@ibiz-template/vue3-util";
import { KanbanController as se, registerControlProvider as ae } from "@ibiz-template/runtime";
import { defineComponent as ie, ref as R, computed as P, onMounted as ce, onBeforeUnmount as de, createVNode as o, resolveComponent as i, createTextVNode as S } from "vue";
import N from "vuedraggable";
import { listenJSEvent as ue, NOOP as V } from "@ibiz-template/core";
class he extends se {
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
  async onDragChange(t, h) {
    if (!this.enableEditGroup && t.from !== t.to) {
      ibiz.message.warning("当前看板不允许调整分组！");
      return;
    }
    const p = this.model.minorSortDir === "ASC", { from: u, to: x, fromIndex: w, toIndex: B } = t, k = this.model.groupAppDEFieldId, f = this.model.minorSortAppDEFieldId, v = [];
    let I = this.state.groups.find((a) => a.key === u), m = this.state.groups.find((a) => a.key === x);
    if (I || (I = this.splitMap.get(u)), m || (m = this.splitMap.get(x)), !this.enableEditOrder) {
      if (t.from === t.to) {
        ibiz.message.warning("当前看板不允许调整次序");
        return;
      }
      const a = I.children[w];
      return a[k] = t.to, this.updateChangedItems([a]);
    }
    const g = (a) => a + (100 - a % 100), D = [...m.children], G = [...m.children], F = I.children[w];
    if (t.from !== t.to) {
      let a = t.to;
      h && (a = t.to.split("_")[0]), F[k] = a, G.splice(B, 0, F);
    } else
      G.splice(w, 1), G.splice(B, 0, F);
    const T = I.children.splice(w, 1);
    m.children.splice(B, 0, ...T), p || (D.reverse(), G.reverse());
    let b, A = [], $;
    G.forEach((a, y) => {
      b === void 0 ? (a !== D[y] || h && y === w) && (D[y] ? b = D[y][f] || 100 : b = y === 0 ? 100 : g(D[y - 1][f]), a[f] = b, v.push(a)) : (b >= a[f] ? (A.length > 0 && (A.forEach((K) => {
        K[f] = g($), v.push(K), $ = K[f];
      }), b = $, $ = 0, A = []), a[f] = g(b), v.push(a)) : (A.length === 0 && ($ = b), A.push(a)), b = a[f]);
    }), this.filterGroupField(v, k), this.updateChangedItems(v);
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
const j = /* @__PURE__ */ ie({
  name: "IBizStepsKanbanControl",
  components: {
    draggable: N
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
    var U, q, W;
    const n = oe((...e) => new he(...e)), t = le("control-".concat(n.model.controlType.toLowerCase())), h = R(), p = R(!1), u = P(() => !n.state.draggable || n.state.updating), x = P(() => n.context.srfreadonly === !0 || n.context.srfreadonly === "true"), w = P(() => n.state.batching ? n.state.selectGroupKey : ""), B = (U = n.model.controls) == null ? void 0 : U.find((e) => e.name === "".concat(n.model.name, "_quicktoolbar") || e.name === "".concat(n.model.name, "_groupquicktoolbar")), k = (q = n.model.controls) == null ? void 0 : q.find((e) => e.name === "".concat(n.model.name, "_batchtoolbar")), f = ((W = n.model.groupSysCss) == null ? void 0 : W.cssName) || "", v = R({});
    let I = V;
    const m = {};
    switch (n.model.groupLayout) {
      case "ROW":
        m.width = "".concat(n.model.groupWidth || 300, "px"), m.height = "100%";
        break;
      case "COLUMN":
        m.width = "100%", m.height = "".concat(n.model.groupHeight || 500, "px");
        break;
    }
    const g = (e) => {
      e.stopPropagation();
    }, D = (e, l) => {
      g(l);
      const r = String(e.key);
      v.value[r] = !v.value[r];
    }, G = (e, l) => (g(l), n.onRowClick(e)), F = (e, l) => (g(l), n.onDbRowClick(e)), T = (e, l) => (g(e), n.onClickNew(e, l)), b = (e, l) => {
      const r = e.selectedData || [];
      l ? r.forEach((s) => {
        n.onRowClick(s);
      }) : e.children.filter((c) => !r.includes(c)).forEach((c) => {
        n.onRowClick(c);
      });
    }, A = (e) => n.groupCodeListItems.find((l) => l.value === e);
    ce(() => {
      I = ue(window, "resize", () => {
        p.value = n.getFullscreen();
      });
    }), de(() => {
      I !== V && I();
    });
    const $ = (e, l) => {
      const {
        context: r,
        params: s
      } = n;
      return o(i("iBizControlShell"), {
        data: e,
        modelData: l,
        context: r,
        params: s
      }, null);
    }, a = (e, l) => {
      var r;
      return o(i("iBizActionToolbar"), {
        class: t.bem("item", "bottom", "actions"),
        "action-details": (r = n.getOptItemModel().deuiactionGroup) == null ? void 0 : r.uiactionGroupDetails,
        "actions-state": n.getOptItemAction(e),
        onActionClick: (s, c) => n.onGroupActionClick(s, e, c, l)
      }, null);
    }, y = (e) => {
      if (B)
        return o(i("iBizControlShell"), {
          class: t.e("quicktoolbar"),
          modelData: {
            ...B,
            name: "".concat(B.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null);
    }, K = (e) => {
      if (k)
        return o("div", {
          class: t.be("batch", "toolbar")
        }, [o(i("iBizControlShell"), {
          modelData: {
            ...k,
            name: "".concat(k.name, "_").concat(e.key)
          },
          context: n.context,
          params: n.params
        }, null)]);
    }, H = (e) => {
      const l = e.selectedData || [], r = l.length === e.children.length, s = l.length > 0 && l.length < e.children.length;
      return o("div", {
        class: t.be("batch", "check")
      }, [o(i("el-checkbox"), {
        "model-value": r,
        indeterminate: s,
        onChange: () => b(e, r)
      }, {
        default: () => [S("全选")]
      }), o("span", {
        class: t.be("batch", "info")
      }, [S("已选择"), o("span", null, [l.length]), S("条数据")])]);
    }, J = (e) => {
      if (w.value === e.key)
        return o("div", {
          class: t.b("batch")
        }, [K(e), H(e)]);
    }, Q = (e, l) => [o("div", {
      class: t.be("item", "top")
    }, [o("div", {
      class: t.bem("item", "top", "title")
    }, [e.srfmajortext]), o("div", {
      class: t.bem("item", "top", "description")
    }, [e.content])]), n.getOptItemModel() ? o("div", {
      class: t.be("item", "bottom")
    }, [a(e, l)]) : null], O = (e, l) => {
      const r = n.state.selectedData.findIndex((_) => _.srfkey === e.srfkey), s = [t.b("item"), t.is("selected", r !== -1), t.is("disabled", u.value)], c = {};
      n.model.cardWidth && (c.width = "".concat(n.model.cardWidth, "px")), n.model.cardHeight && (c.height = "".concat(n.model.cardHeight, "px"));
      const C = d.modelData.itemLayoutPanel;
      return o(i("el-card"), {
        shadow: "hover",
        class: s,
        "body-style": c,
        onClick: (_) => G(e, _),
        onDblclick: (_) => F(e, _)
      }, {
        default: () => [C ? $(e, C) : Q(e, l)]
      });
    }, E = () => {
      if (n.state.isLoaded)
        return o(i("iBizNoData"), {
          text: n.model.emptyText,
          emptyTextLanguageRes: n.model.emptyTextLanguageRes
        }, null);
    };
    let L = null;
    const z = (e, l, r, s) => {
      const c = s || l.key;
      if (e.moved && n.onDragChange({
        from: c,
        to: c,
        fromIndex: e.moved.oldIndex,
        toIndex: e.moved.newIndex
      }), e.added && (L = {
        to: c,
        toIndex: e.added.newIndex
      }, r)) {
        const {
          id: C
        } = e.added.element, _ = l.children.find((ee) => ee.id === C);
        _.entry_status = r;
      }
      e.removed && (L && (L.from = c, L.fromIndex = e.removed.oldIndex, n.onDragChange(L, r)), L = null);
    }, X = () => {
      const e = h.value.$el;
      p.value = n.onFullScreen(e);
    }, Y = (e) => {
      const l = n.model.groupUIActionGroup && e.groupActionGroupState || k;
      return w.value === e.key ? o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => g(r)
      }, [o(i("el-button"), {
        text: !0,
        onClick: () => n.closeBatch()
      }, {
        default: () => [S("完成")]
      })]) : o("span", {
        class: t.be("group", "header-right"),
        onClick: (r) => g(r)
      }, [n.enableNew && !x.value && o(i("el-button"), {
        class: t.be("group", "header-new"),
        text: !0,
        circle: !0,
        onClick: (r) => {
          T(r, e.key);
        }
      }, {
        default: () => [o(i("ion-icon"), {
          name: "add-outline",
          title: "新建"
        }, null)]
      }), l && !x.value && o(i("el-dropdown"), {
        class: t.be("group", "header-actions"),
        trigger: "click",
        teleported: !1
      }, {
        default: () => o("span", null, [S("···")]),
        dropdown: () => o("div", {
          class: t.be("group", "actions-dropdown")
        }, [n.model.groupUIActionGroup && e.groupActionGroupState && o(i("iBizActionToolbar"), {
          actionDetails: n.model.groupUIActionGroup.uiactionGroupDetails,
          actionsState: e.groupActionGroupState,
          onActionClick: (r, s) => {
            n.onGroupToolbarClick(r, s, e);
          }
        }, null), k && o(i("el-button"), {
          size: "small",
          onClick: () => {
            n.openBatch(e.key);
          }
        }, {
          default: () => [o(i("ion-icon"), {
            name: "checkmark-sharp"
          }, null), S("批量操作")]
        })])
      })]);
    }, Z = (e) => {
      if (n.splitGroupKey === e.key) {
        const l = n.splitMap.get("".concat(e.key, "_runing")), r = n.splitMap.get("".concat(e.key, "_finish"));
        return o("div", {
          class: t.b("split")
        }, [o("div", {
          class: t.be("split", "left")
        }, [o("div", {
          class: t.be("split", "header")
        }, [S("进行中")]), o(N, {
          class: t.be("group", "draggable"),
          modelValue: l.children,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: u.value || x.value,
          onChange: (s) => z(s, e, "1", "".concat(e.key, "_runing"))
        }, {
          item: ({
            element: s
          }) => O(s, e),
          header: () => l.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [E()])
        }), y(e)]), o("div", {
          class: t.be("split", "right")
        }, [o("div", {
          class: t.be("split", "header")
        }, [S("已完成")]), o(N, {
          class: t.be("group", "draggable"),
          modelValue: r.children,
          group: n.model.id,
          itemKey: "srfkey",
          disabled: u.value || x.value,
          onChange: (s) => z(s, e, "2", "".concat(e.key, "_finish"))
        }, {
          item: ({
            element: s
          }) => O(s, e),
          header: () => r.children.length ? null : o("div", {
            class: [t.be("group", "list"), t.is("empty", !0)]
          }, [E()])
        }), y(e)])]);
      }
      return [o(N, {
        class: t.be("group", "draggable"),
        modelValue: e.children,
        group: n.model.id,
        itemKey: "srfkey",
        disabled: u.value || x.value,
        onChange: (l) => z(l, e)
      }, {
        item: ({
          element: l
        }) => O(l, e),
        header: () => e.children.length ? null : o("div", {
          class: t.be("group", "list")
        }, [E()])
      }), y(e)];
    };
    return {
      c: n,
      ns: t,
      isFull: p,
      kanban: h,
      onFullScreen: X,
      renderGroup: (e) => {
        const l = A(e.key), r = v.value[String(e.key)], s = n.model.groupLayout === "COLUMN", c = {
          ...m
        };
        if (r && (c.height = "50px"), l.data === 1) {
          const C = m.width.slice(0, -2);
          c.width = "".concat(Number(C) * 2, "px");
        }
        return !r || s ? o("div", {
          class: [t.b("group"), t.is("collapse", r), f],
          style: c
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (C) => D(e, C)
        }, [o("div", {
          class: t.be("group", "header-left")
        }, [o(i("ion-icon"), {
          name: "caret-down-sharp"
        }, null), o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")])]), Y(e)]), J(e), o("div", {
          class: [t.be("group", "list"), t.is("empty", !e.children.length)]
        }, [Z(e)])]) : o("div", {
          class: [t.b("group"), t.is("collapse", r), f]
        }, [o("div", {
          class: t.be("group", "header"),
          style: {
            borderTopColor: e.color || "transparent"
          },
          onClick: (C) => D(e, C)
        }, [o("span", {
          class: [t.be("group", "header-caption"), t.is("badge", !!e.color)],
          style: {
            backgroundColor: e.color
          }
        }, ["".concat(e.caption).concat(e.children.length ? " · ".concat(e.children.length) : "")]), o(i("ion-icon"), {
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
    return n ? o(i("iBizControlBase"), {
      ref: "kanban",
      controller: this.c,
      class: [this.ns.m((t = this.modelData.groupLayout) == null ? void 0 : t.toLowerCase()), this.ns.is("full", this.isFull), this.ns.is("plugin", !0)]
    }, {
      default: () => [o("div", {
        class: this.ns.b("group-container")
      }, [d.length > 0 && d.map((h) => this.renderGroup(h))]), d.length > 0 && o("div", {
        class: this.ns.e("full-btn"),
        onClick: this.onFullScreen
      }, [this.isFull ? o(i("ion-icon"), {
        name: "contract-outline"
      }, null) : o(i("ion-icon"), {
        name: "expand-outline"
      }, null)])]
    }) : null;
  }
});
class pe {
  constructor() {
    M(this, "component", "IBizStepsKanbanControl");
  }
}
const me = re(
  j,
  function(d) {
    d.component(j.name, j), ae(
      "CUSTOM_STEPS_KANBAN",
      () => new pe()
    );
  }
), Ie = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(d) {
    d.use(me);
  }
};
export {
  me as IBizStepsKanbanControl,
  Ie as default
};
