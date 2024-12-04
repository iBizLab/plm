import './style.css';
var Ge = Object.defineProperty;
var ze = (e, l, o) => l in e ? Ge(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[l] = o;
var V = (e, l, o) => (ze(e, typeof l != "symbol" ? l + "" : l, o), o);
import { useClickOutside as Y, useNamespace as _, withInstall as ne } from "@ibiz-template/vue3-util";
import { Srfuf as G, GridFieldEditColumnController as Fe, GridRowState as Oe, UIActionUtil as Be, SysUIActionTag as j, TreeGridExNodeColumnController as _e, TreeGridExRowState as le, TreeGridExFieldColumnController as re, registerGridColumnProvider as Ue, registerTreeGridExColumnProvider as $e } from "@ibiz-template/runtime";
import { computed as i, ref as b, reactive as x, defineComponent as J, onMounted as se, onUnmounted as He, createVNode as s, resolveComponent as h, h as W, isVNode as qe } from "vue";
import { isNotNil as ae, isNil as je } from "ramda";
import { RuntimeError as de } from "@ibiz-template/core";
function Ke(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.fieldName].disabled), n = i(() => e.row.editColStates[o.fieldName].readonly), c = i(() => !!e.row.errors[o.fieldName]), f = i(
    () => e.row.editColStates[o.fieldName].editable
  ), u = (L) => {
    e.row.editColStates[o.fieldName].editable = L;
  }, m = i(() => !r.value && !n.value && !c.value), w = i(() => c.value || m.value && f.value), C = i(() => !w.value), E = !1, I = !0, p = i(() => m.value && !f.value), T = i(() => f.value);
  let R;
  const v = () => {
    u(!0), R = Y(l, async (L) => {
      u(!1), R.stop();
    });
  }, y = () => {
    R && R.stop(), ibiz.log.debug("".concat(o.fieldName, "属性编辑器focus事件"));
  };
  let k = e.row.data[o.fieldName];
  const D = b(!1), z = () => {
    var L;
    ibiz.log.debug("".concat(o.fieldName, "属性编辑器blur事件")), !(D.value || o.hasDropdown) && (u(!1), ((L = o.model.userParam) == null ? void 0 : L.SAVEMODE) === "BLUR" ? o.grid.save(e.row.data) : e.row.data.srfuf === G.CREATE ? o.grid.remove({ data: [e.row.data], silent: !0 }) : o.setRowValue(e.row, k));
  }, N = async () => {
    o.setPickerValue(e.row), D.value = !0, ibiz.log.debug("".concat(o.fieldName, "属性编辑器enter事件")), await o.grid.save(e.row.data), k = e.row.data[o.fieldName], u(!1), D.value = !1;
  }, F = (L) => {
    L.keyCode === 27 && u(!1);
  }, P = x({
    showEditMask: p,
    stopPropagation: T
  }), M = x({
    autoFocus: I,
    disabled: E,
    readonly: C,
    cellEditable: m,
    onFocus: y,
    onBlur: z,
    onEnter: N,
    onKeydown: F
  });
  return {
    gridEditItemProps: P,
    editorProps: M,
    onMaskClick: v
  };
}
function Xe(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.fieldName].disabled), n = i(() => e.row.editColStates[o.fieldName].readonly), c = i(
    () => e.row.editColStates[o.fieldName].editable
  ), f = i(() => n.value || !c.value), u = i(() => c.value && r.value), m = i(() => c.value), w = x({
    stopPropagation: m
  }), C = x({
    disabled: u,
    readonly: f
  });
  return {
    gridEditItemProps: w,
    editorProps: C
  };
}
function Ye(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.fieldName].disabled), n = i(() => e.row.editColStates[o.fieldName].readonly), c = i(() => e.controller.grid.state.rowEditOpen), f = i(() => n.value || !c.value), u = i(() => c.value && r.value), m = i(() => c.value), w = () => {
    o.grid.save(e.row.data);
  }, C = x({
    stopPropagation: m
  }), E = x({
    disabled: u,
    readonly: f,
    onBlur: w
  });
  return {
    gridEditItemProps: C,
    editorProps: E
  };
}
class ce extends Fe {
  constructor() {
    super(...arguments);
    /**
     * 用户代码表
     *
     * @type {(IAppCodeList | undefined)}
     * @memberof GridEditColumnController
     */
    V(this, "userCodeList");
    /**
     * 是否拥有下拉
     *
     * @type {boolean}
     * @memberof GridEditColumnController
     */
    V(this, "hasDropdown", !1);
    /**
     * 当前选项id
     *
     * @type {string}
     * @memberof GridEditColumnController
     */
    V(this, "curPickerId", "");
  }
  /**
   * 加载用户代码表
   *
   * @param {IData} data
   * @return {*}  {Promise<readonly}
   * @memberof GridEditColumnController
   */
  async loadUserCodeList(o) {
    if (o.codelistTag) {
      const r = ibiz.hub.getApp(this.context.srfappid), n = await r.codeList.get(
        o.codelistTag,
        this.context,
        this.params
      );
      this.userCodeList = r.codeList.getCodeList(o.codelistTag);
      const c = (o.pickerData || "").split(",");
      return this.hasDropdown = !0, n.filter((f) => c.includes(f.id));
    }
    return [];
  }
  /**
   * 设置选中数据
   *
   * @param {IData} data
   * @return {*}  {Promise<readonly}
   * @memberof GridEditColumnController
   */
  setPickerValue(o) {
    const { srfuf: r } = o.data;
    if (r === G.CREATE) {
      const n = o.data.srfUserData;
      n && n.pickerField && (o.data[n.pickerField] = this.curPickerId);
    }
  }
}
function We(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !qe(e);
}
const K = /* @__PURE__ */ J({
  name: "GridEditColumn",
  props: {
    controller: {
      type: ce,
      required: !0
    },
    row: {
      type: Oe,
      required: !0
    }
  },
  setup(e) {
    var te;
    const l = _("grid-edit-column"), o = b(), r = b(), n = e.controller, c = (te = n.editItem) == null ? void 0 : te.codeName, f = b(!1), u = b(!1), m = b(), w = b(), C = b(), E = [50, 100], I = b(!1), {
      zIndex: p
    } = e.controller.grid.state, T = b([]), R = b("");
    let v = !1, y;
    const k = e.row.data.srfUserData;
    (async () => {
      const {
        srfuf: t
      } = e.row.data;
      t === G.CREATE && k && (T.value = await n.loadUserCodeList(k), R.value = k.defaultValue, n.curPickerId = k.defaultValue);
    })();
    const z = i(() => {
      const {
        deuiactionGroup: t
      } = n.model;
      return t != null && t.uiactionGroupDetails ? t.uiactionGroupDetails.filter((a) => E.findIndex((d) => d === a.actionLevel) === -1) : [];
    }), N = i(() => {
      const {
        deuiactionGroup: t
      } = n.model;
      return t != null && t.uiactionGroupDetails ? t.uiactionGroupDetails.filter((a) => E.findIndex((d) => d === a.actionLevel) !== -1) : [];
    }), F = i(() => !(n.grid.model.controlType === "TREEGRID" && !n.grid.state.showTreeGrid)), P = async (t, a) => {
      await n.setRowValue(e.row, t, a);
    }, M = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return Ke(e, o);
        case "row":
          return Xe(e);
        case "all":
          return Ye(e);
        default:
          throw new de("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: L,
      editorProps: U
    } = M(), Q = (t) => {
      e.row.editColStates[n.fieldName].editable = t;
    };
    se(() => {
      e.row.data.srfuf === G.CREATE && Q(!0), r.value && (y = Y(r, async () => {
        !v && !U.readonly && (n.hasDropdown = !1, U.onBlur());
      }));
    }), He(() => {
      y && y.stop && y.stop();
    });
    const ue = (t) => {
      e.controller.hasAction && (t.stopPropagation(), e.controller.triggerAction(e.row, t));
    }, fe = (t) => {
      e.controller.isLinkColumn && (t.stopPropagation(), e.controller.openLinkView(e.row, t));
    }, me = i(() => n.getCustomHtml(e.row)), O = i(() => e.row.uiActionGroupStates[n.model.codeName]), B = i(() => e.row.data[e.controller.model.codeName.toLowerCase()]), Z = i(() => n.formatValue(B.value)), $ = b(void 0), ve = (t) => {
      $.value = t;
    }, he = i(() => {
      if (e.controller.grid.overflowMode === "ellipsis" && ae(B.value) && B.value !== "")
        return $.value ? $.value : Z.value + (e.controller.model.unitName || "");
    }), we = (t, a) => {
      const d = {
        ...a
      };
      if (w.value) {
        const g = w.value.querySelector(".".concat(t.id));
        g && (d.target = g);
      }
      return d;
    }, H = async (t, a) => {
      var S, A;
      a.stopPropagation(), I.value = !0;
      const d = {
        context: n.context,
        params: n.params,
        data: [e.row.data],
        view: n.grid.view,
        event: we(t, a)
      }, g = await Be.exec(t.uiactionId, d, t.appId);
      if (g.cancel || (u.value = !1), I.value = !1, g.closeView)
        d.view.modal.ignoreDismissCheck = !0, d.view.closeView({
          ok: !0
        });
      else if (g.refresh)
        switch (g.refreshMode) {
          case 1:
            d.view.callUIAction(j.REFRESH);
            break;
          case 2:
            (S = d.view.parentView) == null || S.callUIAction(j.REFRESH);
            break;
          case 3:
            (A = d.view.getTopView()) == null || A.callUIAction(j.REFRESH);
            break;
        }
    }, Ce = async (t, a, d) => {
      const g = d || t.editItem.codeName;
      await n.setRowValue(e.row, a, g);
      const S = t.editor.model.editorType;
      ["TEXTBOX", "PASSWORD", "TEXTAREA", "TEXTAREA_10", "NUMBER", "SOLIDER", "STEPPER"].includes(S) || (q(), u.value = !1);
    }, ge = () => {
      q(), u.value = !1, n.grid.saveAll();
    }, be = (t) => {
      var A, oe;
      const a = t.editItem.codeName, d = e.row.data[a], g = (A = e.row.editColStates[a]) == null ? void 0 : A.readonly, S = (oe = e.row.editColStates[a]) == null ? void 0 : oe.disabled;
      return t.editorProvider && W(h(t.editorProvider.gridEditor), {
        class: l.e("editor"),
        value: g ? t.formatValue(d) : d,
        data: e.row.data,
        controller: t.editor,
        overflowMode: n.grid.overflowMode,
        // eslint-disable-next-line no-shadow
        onChange: (ie, Ve) => Ce(t, ie, Ve),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onEnter: (ie) => ge(),
        readonly: g,
        disabled: S
      });
    }, Ee = () => {
      f.value = !0;
    }, q = () => {
      f.value = !1;
    }, Ie = (t) => {
      t.stopPropagation(), t.preventDefault();
    }, ye = (t) => {
      t.stopPropagation(), Q(!0);
    }, Re = () => {
      const a = Object.values(n.grid.columns).filter((d) => d.enableRowEdit && d.model.id !== n.model.id).map((d) => {
        const {
          caption: g
        } = d.model, S = d.model.sysImage || {
          cssClass: "fa fa-bars"
        };
        return s(h("el-popover"), {
          placement: "right-start",
          width: "280",
          teleported: !1,
          offset: 16,
          trigger: "click"
        }, {
          reference: () => s("div", {
            class: l.bem("actions-popper", "action-group", "edit-column")
          }, [s(h("iBizIcon"), {
            icon: S
          }, null), g]),
          default: () => s("div", {
            onMouseenter: Ee,
            onMouseleave: q,
            ref: m,
            onClick: (A) => Ie(A)
          }, [be(d)])
        });
      });
      return a.length > 0 ? s("div", {
        class: l.be("actions-popper", "edit-group")
      }, [a]) : null;
    }, ke = (t) => s(h("el-button"), {
      text: !0,
      size: "small",
      onClick: (a) => H(t, a),
      title: t.tooltipLanguageRes ? ibiz.i18n.t(t.tooltipLanguageRes.lanResTag, t.tooltip) : t.tooltip,
      disabled: O.value[t.id].disabled,
      class: ee(t)
    }, {
      default: () => [t.showIcon && t.sysImage && s("div", {
        class: l.be("action", "icon")
      }, [s(h("iBizIcon"), {
        icon: t.sysImage
      }, null)]), t.showCaption ? t.capLanguageRes ? ibiz.i18n.t(t.capLanguageRes.lanResTag, t.caption) : t.caption : ""]
    }), xe = () => {
      let t = null;
      const a = [];
      return N.value.forEach((d) => {
        d.uiactionId && d.uiactionId.includes("get_editor_column") ? t = Re() : O.value[d.id].visible && a.push(ke(d));
      }), s("div", {
        class: l.be("actions-popper", "action-group"),
        ref: w
      }, [t, ...a]);
    }, Te = () => {
      const t = m.value, a = Y(w, async (d) => {
        I.value || (De(), u.value || a.stop());
      }, {
        ignore: [t]
      });
    }, Pe = (t) => {
      t.stopPropagation(), u.value = !u.value;
    }, pe = () => {
      n.grid.saveAll();
    }, ee = (t) => {
      const {
        actionLevel: a
      } = t;
      return [t.id, l.e("item"), l.is("disabled", !1), l.em("item", "level-".concat(a))];
    }, Le = () => s(h("el-popover"), {
      visible: u.value,
      popperClass: l.b("actions-popper"),
      placement: "right-start",
      width: "280",
      trigger: "click",
      onShow: () => {
        Te();
      },
      onHide: () => {
        pe();
      },
      "popper-style": {
        zIndex: p
      },
      ref: C
    }, {
      reference: () => s(h("el-button"), {
        text: !0,
        size: "small",
        class: "hover-action",
        onClick: (t) => Pe(t),
        title: "更多"
      }, {
        icon: () => s(h("ion-icon"), {
          name: "ellipsis-vertical-outline"
        }, null)
      }),
      default: () => xe()
    }), Se = () => z.value.map((t) => {
      if (O.value[t.id].visible && (t.actionLevel === 250 || F.value && t.actionLevel === 200))
        return s(h("el-button"), {
          text: !0,
          size: "small",
          onClick: (a) => H(t, a),
          title: t.tooltipLanguageRes ? ibiz.i18n.t(t.tooltipLanguageRes.lanResTag, t.tooltip) : t.tooltip,
          disabled: O.value[t.id].disabled,
          class: ee(t)
        }, {
          default: () => [t.showIcon && t.sysImage && s(h("iBizIcon"), {
            icon: t.sysImage
          }, null), t.showCaption ? t.capLanguageRes ? ibiz.i18n.t(t.capLanguageRes.lanResTag, t.caption) : t.caption : ""]
        });
    }), Ae = () => {
      const {
        enableRowEdit: t,
        deuiactionGroup: a
      } = n.model, d = [];
      return t && d.push(s(h("el-button"), {
        text: !0,
        size: "small",
        class: "hover-action",
        onClick: (g) => ye(g),
        title: "编辑"
      }, {
        default: () => [s("svg", {
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          height: "1em",
          width: "1em",
          preserveAspectRatio: "xMidYMid meet",
          focusable: "false"
        }, [s("g", {
          id: "aiuaction/edit",
          "stroke-width": "1",
          "fill-rule": "evenodd"
        }, [s("path", {
          d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
          id: "aiu编辑"
        }, null)])])]
      })), a && (d.push(Se()), N.value.length > 0 && d.push(Le())), d;
    }, De = () => {
      f.value || (u.value = !1);
    }, Ne = (t) => {
      R.value = t.id, n.curPickerId = t.id;
    }, Me = async (t) => {
      v = t;
    };
    return {
      ns: l,
      componentRef: o,
      containerRef: r,
      fieldName: c,
      gridEditItemProps: L,
      rowDataChange: P,
      editorProps: U,
      onCellClick: ue,
      onTextClick: fe,
      onInfoTextChange: ve,
      onActionClick: H,
      renderActions: Ae,
      CustomHtml: me,
      fieldValue: B,
      formatValue: Z,
      tooltip: he,
      renderPicker: () => {
        if (T.value.length > 0)
          return s(h("el-dropdown"), {
            onVisibleChange: Me,
            onCommand: (t) => Ne(t)
          }, {
            default: () => s(h("iBizCodeList"), {
              class: l.e("text"),
              codeListItems: T.value,
              codeList: n.userCodeList,
              value: R.value
            }, null),
            dropdown: () => {
              let t;
              return s(h("el-dropdown-menu"), null, We(t = T.value.map((a) => s(h("el-dropdown-item"), {
                title: a.tooltip,
                command: a
              }, {
                default: () => [s(h("iBizCodeList"), {
                  class: l.e("text"),
                  codeListItems: T.value,
                  codeList: n.userCodeList,
                  value: a.id
                }, null)]
              }))) ? t : {
                default: () => [t]
              });
            }
          });
      }
    };
  },
  render() {
    var r;
    const e = this.controller;
    let l = null;
    e.isCustomCode ? l = s("span", {
      class: this.ns.e("script"),
      innerHTML: this.CustomHtml
    }, null) : e.codeList ? l = s(h("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: e.codeListItems,
      codeList: e.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : l = s("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.formatValue, this.fieldValue != null && e.model.unitName]);
    const o = s(h("iBizGridEditItem"), {
      ref: "componentRef",
      required: !e.editItem.allowEmpty,
      error: this.row.errors[this.fieldName],
      overflowMode: this.controller.grid.overflowMode,
      class: this.ns.m("edit-item"),
      ...this.gridEditItemProps
    }, {
      default: () => [e.editorProvider && W(h(e.editorProvider.gridEditor), {
        class: this.ns.e("editor"),
        value: this.row.data[this.fieldName],
        data: this.row.data,
        controller: e.editor,
        overflowMode: e.grid.overflowMode,
        onChange: this.rowDataChange,
        onInfoTextChange: this.onInfoTextChange,
        title: this.tooltip,
        ...this.editorProps
      })]
    });
    return s("div", {
      ref: "containerRef",
      class: [this.ns.b(), e.clickable(this.row) && this.ns.m("clickable"), this.ns.m(this.controller.grid.overflowMode), (r = this.controller.model.cellSysCss) == null ? void 0 : r.cssName, this.ns.is("has-action", !!e.model.deuiactionGroup)],
      onClick: this.onCellClick
    }, [e.model.enableRowEdit ? s("div", {
      class: this.ns.b("edit-container")
    }, [o, this.renderPicker()]) : s("div", {
      class: this.ns.b("text-container")
    }, [l]), !(e.model.enableRowEdit && !this.editorProps.readonly) && this.editorProps.cellEditable ? s("div", {
      class: this.ns.b("toolbar-container")
    }, [this.renderActions()]) : null]);
  }
});
class Je {
  constructor() {
    V(this, "component", "GridEditColumn");
  }
  async createController(l, o) {
    const r = new ce(l, o);
    return await r.init(), r;
  }
}
function Qe(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.name].disabled), n = i(() => e.row.editColStates[o.name].readonly), c = i(() => !!e.row.errors[o.name]), f = i(() => e.row.editColStates[o.name].editable), u = (P) => {
    e.row.editColStates[o.name].editable = P;
  }, m = i(() => !r.value && !n.value && !c.value), w = i(() => c.value || m.value && f.value), C = i(() => !w.value), E = !1, I = !0, p = i(() => !1), T = i(() => f.value);
  let R = e.row.data[e.controller.name];
  const v = b(!1), y = () => {
    ibiz.log.debug("".concat(o.name, "属性编辑器focus事件"));
  }, k = () => {
    var P, M;
    ibiz.log.debug("".concat(o.name, "属性编辑器blur事件")), !v.value && (u(!1), ((P = o.nodeColumn.userParam) == null ? void 0 : P.SAVEMODE) === "BLUR" ? o.treeGrid.save(e.row.data) : ((M = e.row.data._deData) == null ? void 0 : M.srfuf) === G.CREATE ? o.treeGrid.remove({ data: [e.row.data], silent: !0 }) : o.setRowValue(e.row, R));
  }, D = async () => {
    v.value = !0, await o.treeGrid.save(e.row.data), R = e.row.data[e.controller.name], u(!1), v.value = !1;
  }, z = (P) => {
    P.keyCode === 27 && u(!1);
  }, N = x({
    showEditMask: p,
    stopPropagation: T
  }), F = x({
    autoFocus: I,
    disabled: E,
    readonly: C,
    onBlur: k,
    onFocus: y,
    onEnter: D,
    onKeydown: z
  });
  return {
    gridEditItemProps: N,
    editorProps: F
  };
}
function Ze(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.name].disabled), n = i(() => e.row.editColStates[o.name].readonly), c = i(() => e.row.editColStates[o.name].editable), f = i(() => n.value || !c.value), u = i(() => c.value && r.value), m = i(() => c.value), w = x({
    stopPropagation: m
  }), C = x({
    disabled: u,
    readonly: f
  });
  return {
    gridEditItemProps: w,
    editorProps: C
  };
}
function et(e, l) {
  const o = e.controller, r = i(() => e.row.editColStates[o.name].disabled), n = i(() => e.row.editColStates[o.name].readonly), c = i(() => e.controller.treeGrid.state.rowEditOpen), f = i(() => n.value || !c.value), u = i(() => c.value && r.value), m = i(() => c.value), w = () => {
    o.treeGrid.save(e.row.data);
  }, C = x({
    stopPropagation: m
  }), E = x({
    disabled: u,
    readonly: f,
    onBlur: w
  });
  return {
    gridEditItemProps: C,
    editorProps: E
  };
}
const tt = /* @__PURE__ */ J({
  name: "TreeGridExEditColumn",
  props: {
    controller: {
      type: _e,
      required: !0
    },
    row: {
      type: le,
      required: !0
    }
  },
  setup(e) {
    const l = i(() => e.row.data[e.controller.name]), o = _("tree-grid-ex-edit-column"), r = b(), n = e.controller, c = async (I, p) => {
      ibiz.log.debug("".concat(n.name, "值变更"), I), await n.setRowValue(e.row, I, p);
    }, f = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return Qe(e);
        case "row":
          return Ze(e);
        case "all":
          return et(e);
        default:
          throw new de("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: u,
      editorProps: m
    } = f(), w = b(void 0), C = (I) => {
      w.value = I;
    }, E = i(() => {
      if (m.readonly)
        return je(w.value) ? n.formatValue(l.value) : w.value;
    });
    return {
      ns: o,
      fieldValue: l,
      componentRef: r,
      tooltip: E,
      rowDataChange: c,
      onInfoTextChange: C,
      gridEditItemProps: u,
      editorProps: m
    };
  },
  render() {
    return s(h("iBizGridEditItem"), {
      ref: "componentRef",
      required: !this.controller.nodeEditItem.allowEmpty,
      overflowMode: this.controller.overflowMode,
      class: [this.ns, this.ns.m(this.controller.overflowMode)],
      ...this.gridEditItemProps
    }, {
      default: () => [this.controller.editorProvider && W(h(this.controller.editorProvider.gridEditor), {
        class: this.ns.e("editor"),
        value: this.fieldValue,
        data: this.row.data,
        controller: this.controller.editor,
        overflowMode: this.controller.overflowMode,
        onChange: this.rowDataChange,
        onInfoTextChange: this.onInfoTextChange,
        title: this.tooltip,
        ...this.editorProps
      })]
    });
  }
});
const X = /* @__PURE__ */ J({
  name: "TreeGridExFieldColumn",
  props: {
    controller: {
      type: re,
      required: !0
    },
    row: {
      type: le,
      required: !0
    }
  },
  setup(e) {
    const l = _("tree-grid-ex-field-column"), o = _("tree-grid-ex-field-edit-column"), r = i(() => e.controller.nodeColumnControllerMap.get(e.row.data._nodeId)), n = i(() => e.row.editColStates[r.value.name].editable), c = i(() => e.row.editColStates[r.value.name].readonly), f = (v) => {
      e.row.editColStates[r.value.name].editable = v;
    }, u = (v) => {
      v.stopPropagation(), f(!0);
    };
    se(() => {
      e.row.data.srfuf === G.CREATE && f(!0);
    });
    const m = i(() => e.row.data._nodeType !== "DE" && e.controller.isFirstShowColumn ? e.row.data._text : e.row.data[e.controller.name]), w = b(""), C = (v) => {
      w.value = v;
    }, E = i(() => {
      const v = r.value;
      return v ? v.nodeEditItem ? void 0 : v.codeList ? w.value : v.formatValue(m.value) + (v.unitName || "") : m.value;
    }), I = i(() => {
      if (e.controller.treeGrid.overflowMode === "ellipsis" && ae(m.value) && m.value !== "")
        return E.value;
    }), p = i(() => m.value && r.value && (r.value.isLinkColumn || r.value.hasClickAction));
    return {
      ns: l,
      ns2: o,
      nodeColumn: r,
      fieldValue: m,
      showText: E,
      clickable: p,
      tooltip: I,
      editable: n,
      readonly: c,
      onInfoTextChange: C,
      onTextClick: (v) => {
        var y;
        (y = r.value) == null || y.onTextClick(e.row, v);
      },
      onActionClick: async (v, y) => {
        var k;
        await ((k = r.value) == null ? void 0 : k.onActionClick(v, e.row, y));
      },
      onOpenEdit: u
    };
  },
  render() {
    var r, n, c, f;
    let e = null;
    (r = this.nodeColumn) != null && r.nodeEditItem ? e = s(tt, {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (n = this.nodeColumn) != null && n.codeList ? e = s(h("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: this.nodeColumn.codeListItems,
      codeList: this.nodeColumn.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : e = s("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.showText]);
    let l;
    this.$slots.actions ? l = this.$slots.actions() : this.row.columnActionsStates[this.controller.name] && (l = s(h("iBizActionToolbar"), {
      class: this.ns.e("toolbar"),
      "action-details": (c = this.nodeColumn) == null ? void 0 : c.nodeColumn.deuiactionGroup.uiactionGroupDetails,
      "actions-state": this.row.columnActionsStates[this.controller.name],
      groupLevelKeys: [50, 100],
      onActionClick: this.onActionClick
    }, null));
    const o = s(h("el-button"), {
      text: !0,
      size: "small",
      class: "hover-action",
      onClick: (u) => this.onOpenEdit(u),
      title: "编辑"
    }, {
      default: () => [s("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        height: "1em",
        width: "1em",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false"
      }, [s("g", {
        id: "aiuaction/edit",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [s("path", {
        d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
        id: "aiu编辑"
      }, null)])])]
    });
    return s("div", {
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (f = this.controller.model.cellSysCss) == null ? void 0 : f.cssName, this.ns2.is("editable", this.editable), this.ns.is("has-action", !!l)]
    }, [s("div", {
      class: this.ns.b("text-container")
    }, [e]), s("div", {
      class: this.ns.b("toolbar-container")
    }, [!this.editable && !this.readonly ? [o, l] : null])]);
  }
});
class ot {
  constructor() {
    V(this, "component", "TreeGridExFieldColumn");
  }
  async createController(l, o) {
    const r = new re(l, o);
    return await r.init(), r;
  }
}
const it = ne(
  K,
  function(e) {
    e.component(K.name, K), Ue(
      "GRID_COLRENDER_COLUMN_ACTION_EDIT",
      () => new Je()
    );
  }
), nt = ne(
  X,
  function(e) {
    e.component(X.name, X), $e(
      "GRID_COLRENDER_COLUMN_ACTION_EDIT",
      () => new ot()
    );
  }
), ft = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(it), e.use(nt);
  }
};
export {
  it as IBizGridEditColumn,
  nt as IBizTreeGridExFieldColumn,
  ft as default
};
