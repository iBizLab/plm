import './style.css';
var be = Object.defineProperty;
var Ee = (e, c, t) => c in e ? be(e, c, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[c] = t;
var F = (e, c, t) => (Ee(e, typeof c != "symbol" ? c + "" : c, t), t);
import { useClickOutside as Z, useNamespace as B, useUIStore as pe, withInstall as ee } from "@ibiz-template/vue3-util";
import { Srfuf as _, GridFieldEditColumnController as ye, GridRowState as Ie, UIActionUtil as Te, SysUIActionTag as j, TreeGridExNodeColumnController as Re, TreeGridExRowState as te, TreeGridExFieldColumnController as oe, registerGridColumnProvider as Se, registerTreeGridExColumnProvider as Le } from "@ibiz-template/runtime";
import { computed as i, ref as p, reactive as D, defineComponent as q, watch as Pe, createVNode as s, resolveComponent as g, isVNode as ie, onMounted as ne, h as H } from "vue";
import { isNotNil as le, isNil as xe } from "ramda";
import { RuntimeError as se } from "@ibiz-template/core";
function ke(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.fieldName].disabled), n = i(() => e.row.editColStates[t.fieldName].readonly), u = i(() => !!e.row.errors[t.fieldName]), d = i(
    () => e.row.editColStates[t.fieldName].editable
  ), o = (E) => {
    e.row.editColStates[t.fieldName].editable = E;
  }, r = i(() => !v.value && !n.value && !u.value), a = i(() => u.value || r.value && d.value), m = i(() => !a.value), h = !1, y = !0, P = i(() => r.value && !d.value), R = i(() => d.value);
  let T;
  const L = () => {
    o(!0), T = Z(c, async (E) => {
      o(!1), T.stop();
    });
  }, x = () => {
    T && T.stop(), ibiz.log.debug("".concat(t.fieldName, "属性编辑器focus事件"));
  };
  let k = e.row.data[t.fieldName];
  const A = p(!1), M = () => {
    var E;
    ibiz.log.debug("".concat(t.fieldName, "属性编辑器blur事件")), !(A.value || t.hasDropdown) && (o(!1), ((E = t.model.userParam) == null ? void 0 : E.SAVEMODE) === "BLUR" ? t.grid.save(e.row.data) : e.row.data.srfuf === _.CREATE ? t.grid.remove({ data: [e.row.data], silent: !0 }) : t.setRowValue(e.row, k));
  }, N = async () => {
    t.setPickerValue(e.row), A.value = !0, ibiz.log.debug("".concat(t.fieldName, "属性编辑器enter事件")), await t.grid.save(e.row.data), k = e.row.data[t.fieldName], o(!1), A.value = !1;
  }, z = (E) => {
    E.keyCode === 27 && o(!1);
  }, f = D({
    showEditMask: P,
    stopPropagation: R
  }), b = D({
    autoFocus: y,
    disabled: h,
    readonly: m,
    cellEditable: r,
    onFocus: x,
    onBlur: M,
    onEnter: N,
    onKeydown: z
  });
  return {
    gridEditItemProps: f,
    editorProps: b,
    onMaskClick: L
  };
}
function Ae(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.fieldName].disabled), n = i(() => e.row.editColStates[t.fieldName].readonly), u = i(
    () => e.row.editColStates[t.fieldName].editable
  ), d = i(() => n.value || !u.value), o = i(() => u.value && v.value), r = i(() => u.value), a = D({
    stopPropagation: r
  }), m = D({
    disabled: o,
    readonly: d
  });
  return {
    gridEditItemProps: a,
    editorProps: m
  };
}
function De(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.fieldName].disabled), n = i(() => e.row.editColStates[t.fieldName].readonly), u = i(() => e.controller.grid.state.rowEditOpen), d = i(() => n.value || !u.value), o = i(() => u.value && v.value), r = i(() => u.value), a = () => {
    t.grid.save(e.row.data);
  }, m = D({
    stopPropagation: r
  }), h = D({
    disabled: o,
    readonly: d,
    onBlur: a
  });
  return {
    gridEditItemProps: m,
    editorProps: h
  };
}
class re extends ye {
  constructor() {
    super(...arguments);
    /**
     * 用户代码表
     *
     * @type {(IAppCodeList | undefined)}
     * @memberof GridEditColumnController
     */
    F(this, "userCodeList");
    /**
     * 是否拥有下拉
     *
     * @type {boolean}
     * @memberof GridEditColumnController
     */
    F(this, "hasDropdown", !1);
    /**
     * 当前选项id
     *
     * @type {string}
     * @memberof GridEditColumnController
     */
    F(this, "curPickerId", "");
  }
  /**
   * 加载用户代码表
   *
   * @param {IData} data
   * @return {*}  {Promise<readonly}
   * @memberof GridEditColumnController
   */
  async loadUserCodeList(t) {
    if (t.codelistTag) {
      const v = ibiz.hub.getApp(this.context.srfappid), n = await v.codeList.get(
        t.codelistTag,
        this.context,
        this.params
      );
      this.userCodeList = v.codeList.getCodeList(t.codelistTag);
      const u = (t.pickerData || "").split(",");
      return this.hasDropdown = !0, n.filter((d) => u.includes(d.id));
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
  setPickerValue(t) {
    const { srfuf: v } = t.data;
    if (v === _.CREATE) {
      const n = t.data.srfUserData;
      n && n.pickerField && (t.data[n.pickerField] = this.curPickerId);
    }
  }
}
function Ve(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ie(e);
}
const ae = /* @__PURE__ */ q({
  name: "IBizEditColumnActionToolbar",
  props: {
    actionDetails: {
      type: Array,
      required: !0
    },
    actionsState: {
      type: Object,
      required: !0
    },
    caption: String,
    mode: {
      type: String,
      default: "buttons"
    },
    // 分组的行为级别
    groupLevelKeys: {
      type: Object,
      default: [50]
    },
    editColums: {
      type: Object,
      required: !0
    },
    showCommonAction: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    popperClass: String
  },
  emits: ["saveAll", "actionClick"],
  setup(e, {
    emit: c
  }) {
    var $;
    const t = B("edit-column-action-toolbar"), v = B("edit-column-action-toolbar"), n = p(!1), u = p(!1), d = p(!1), o = p(), r = p(), a = p(!1);
    ($ = e.actionDetails) == null || $.forEach((w) => {
      w.capLanguageRes && w.capLanguageRes.lanResTag && (w.caption = ibiz.i18n.t(w.capLanguageRes.lanResTag, w.caption)), w.tooltipLanguageRes && w.tooltipLanguageRes.lanResTag && (w.tooltip = ibiz.i18n.t(w.tooltipLanguageRes.lanResTag, w.tooltip));
    });
    const m = p([]), h = p([]), y = () => {
      h.value = [], m.value = [], e.actionDetails && e.actionDetails.forEach((w) => {
        !e.showCommonAction && w.actionLevel === 200 || (e.groupLevelKeys.findIndex((V) => V === w.actionLevel) !== -1 ? h.value.push(w) : m.value.push(w));
      });
    };
    Pe(() => e.showCommonAction, () => {
      y();
    }, {
      immediate: !0
    });
    const P = p(), R = () => {
      u.value = !0;
    }, T = () => {
      u.value = !1;
    }, L = () => {
      d.value = !0;
    }, x = () => {
      d.value = !1;
    }, k = () => {
      a.value = !0;
    }, A = () => {
      a.value = !1;
    }, M = () => {
      x(), u.value = !1;
    }, N = async (w, V) => {
      V.stopPropagation(), c("actionClick", w, V);
    }, z = (w) => {
      const {
        actionLevel: V
      } = w;
      return [t.e("item"), t.is("disabled", !1), t.em("item", "level-".concat(V)), t.is("level-".concat(V), !0)];
    }, f = () => {
      d.value || (u.value = !1);
    };
    return {
      ns: t,
      ns2: v,
      actionRef: r,
      childLevelRef: o,
      expandDetails: m,
      groupDetails: h,
      groupButtonRef: P,
      popoverVisible: n,
      topLevelVisible: u,
      handleClick: N,
      openTopLevel: R,
      closeTopLevel: T,
      openChildLevel: L,
      closeChildLevel: x,
      closeAllPopover: M,
      openProcessing: k,
      closeProcessing: A,
      onChildLevelClick: (w) => {
        w.stopPropagation(), w.preventDefault();
      },
      onTopLevelPopHide: () => {
        c("saveAll");
      },
      onTopLevelPopShow: () => {
        const w = o.value, V = Z(r.value, async () => {
          a.value || (f(), u.value || V.stop());
        }, {
          ignore: [w]
        });
      },
      calcActionItemClass: z
    };
  },
  render() {
    var d;
    const {
      $slots: e
    } = this, c = () => {
      const o = this.editColums.map((r) => {
        const {
          caption: a
        } = r.model, m = r.model.sysImage || {
          cssClass: "fa fa-bars"
        };
        return s(g("el-popover"), {
          placement: "right-start",
          width: "280",
          teleported: !1,
          offset: 16,
          trigger: "click"
        }, {
          reference: () => s("div", {
            class: this.ns.bem("popper", "action-group", "edit-column")
          }, [s("div", {
            class: this.ns.bem("popper", "action-group", "icon")
          }, [s(g("iBizIcon"), {
            icon: m
          }, null)]), s("span", null, [a])]),
          default: () => s("div", {
            onMouseenter: this.openChildLevel,
            onMouseleave: this.closeChildLevel,
            ref: "childLevelRef",
            onClick: (h) => this.onChildLevelClick(h)
          }, [e.editor && (e == null ? void 0 : e.editor(r))])
        });
      });
      return o.length > 0 ? s("div", {
        class: this.ns.be("popper", "edit-group")
      }, [o]) : null;
    }, t = (o) => s(g("el-divider"), {
      class: this.ns.e("separator"),
      "border-style": "double",
      direction: o ? "vertical" : "horizontal"
    }, null), v = (o, r = !0) => [o.addSeparator && t(r), s(g("el-button"), {
      text: !0,
      size: "small",
      onClick: (a) => this.handleClick(o, a),
      title: o.tooltip,
      disabled: this.actionsState[o.id].disabled,
      class: this.calcActionItemClass(o)
    }, {
      default: () => [s("div", {
        class: [this.ns.em("item", "icon"), this.ns.is("has-caption", o.showCaption && !!o.caption), this.ns.is("has-icon", o.showIcon && !!o.sysImage)]
      }, [o.showIcon && o.sysImage && s(g("iBizIcon"), {
        icon: o.sysImage
      }, null)]), s("div", {
        class: [this.ns.em("item", "label"), this.ns.is("has-caption", o.showCaption && !!o.caption), this.ns.is("has-icon", o.showIcon && !!o.sysImage)]
      }, [o.showCaption ? o.caption : ""])]
    })], n = (o, r = !0) => {
      if (r)
        return o.map((h) => {
          var y;
          return (y = this.actionsState[h.id]) != null && y.visible ? v(h, r) : null;
        });
      let a = null;
      const m = [];
      return o.forEach((h) => {
        h.uiactionId && h.uiactionId.includes("get_editor_column") ? a = c() : this.actionsState[h.id].visible && m.push(v(h, r));
      }), s("div", {
        class: this.ns.be("popper", "action-group"),
        ref: "actionRef"
      }, [a, ...m]);
    }, u = () => {
      let o;
      if (this.groupDetails.length === 0 || !(this.groupDetails.findIndex((m) => this.actionsState[m.id].visible === !0) !== -1))
        return null;
      const a = this.groupDetails.findIndex((m) => this.actionsState[m.id].disabled === !1) === -1;
      return [s(g("el-button"), {
        size: "small",
        text: !0,
        disabled: a,
        ref: "groupButtonRef",
        class: [this.ns.e("item"), this.ns.is("group-button", !0), this.ns.is("expand", this.topLevelVisible)]
      }, {
        icon: () => s(g("ion-icon"), {
          class: this.ns.e("icon"),
          name: "ellipsis-vertical",
          title: ibiz.i18n.t("component.actionToolbar.more")
        }, null)
      }), s(g("el-popover"), {
        placement: "right-start",
        width: "280",
        "virtual-ref": this.groupButtonRef,
        trigger: "click",
        visible: this.topLevelVisible,
        "onUpdate:visible": (m) => this.topLevelVisible = m,
        "popper-class": this.ns.b("popper"),
        "virtual-triggering": !0,
        "popper-style": {
          zIndex: this.zIndex
        },
        onShow: () => {
          this.onTopLevelPopShow();
        },
        onHide: () => {
          this.onTopLevelPopHide();
        }
      }, Ve(o = n(this.groupDetails, !1)) ? o : {
        default: () => [o]
      })];
    };
    if ((d = this.actionsState) != null && d.visible)
      return s("div", {
        class: [this.ns.b(), this.ns.m("buttons")],
        onClick: (o) => o.stopPropagation()
      }, [n(this.expandDetails), u()]);
  }
}), de = [
  "TEXTBOX",
  "PASSWORD",
  "TEXTAREA",
  "TEXTAREA_10",
  "NUMBER",
  "SOLIDER",
  "STEPPER"
];
function Me(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ie(e);
}
const K = /* @__PURE__ */ q({
  name: "GridEditColumn",
  props: {
    controller: {
      type: re,
      required: !0
    },
    row: {
      type: Ie,
      required: !0
    }
  },
  setup(e) {
    var W;
    const c = B("grid-edit-column"), t = p(), v = p(), n = e.controller, u = (W = n.editItem) == null ? void 0 : W.codeName, d = p(), {
      zIndex: o
    } = e.controller.grid.state, r = p([]), a = p("");
    let m = !1;
    const h = e.row.data.srfUserData;
    (async () => {
      const {
        srfuf: l
      } = e.row.data;
      l === _.CREATE && h && (r.value = await n.loadUserCodeList(h), a.value = h.defaultValue, n.curPickerId = h.defaultValue);
    })();
    const P = i(() => !(n.grid.model.controlType === "TREEGRID" && !n.grid.state.showTreeGrid)), R = () => {
      var l;
      (l = t.value) == null || l.closeAllPopover();
    }, T = async (l, C) => {
      await n.setRowValue(e.row, l, C);
    }, L = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return ke(e, v);
        case "row":
          return Ae(e);
        case "all":
          return De(e);
        default:
          throw new se("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: x,
      editorProps: k
    } = L(), A = (l) => {
      e.row.editColStates[n.fieldName].editable = l;
    };
    ne(() => {
      e.row.data.srfuf === _.CREATE && A(!0);
    });
    const M = (l) => {
      e.controller.hasAction && (l.stopPropagation(), e.controller.triggerAction(e.row, l));
    }, N = (l) => {
      e.controller.isLinkColumn && (l.stopPropagation(), e.controller.openLinkView(e.row, l));
    }, z = i(() => n.getCustomHtml(e.row)), f = Object.values(n.grid.columns).filter((l) => l.enableRowEdit && l.model.id !== n.model.id), b = i(() => e.row.data[e.controller.model.codeName.toLowerCase()]), E = i(() => n.formatValue(b.value)), G = p(void 0), $ = (l) => {
      G.value = l;
    }, w = i(() => {
      if (e.controller.grid.overflowMode === "ellipsis" && le(b.value) && b.value !== "")
        return G.value ? G.value : E.value + (e.controller.model.unitName || "");
    }), V = (l, C) => {
      const I = {
        ...C
      };
      if (d.value) {
        const S = d.value.querySelector(".".concat(l.id));
        S && (I.target = S);
      }
      return I;
    }, Y = async (l, C) => {
      var O, U;
      C.stopPropagation(), R();
      const I = {
        context: n.context,
        params: n.params,
        data: [e.row.data],
        view: n.grid.view,
        event: V(l, C)
      }, S = await Te.exec(l.uiactionId, I, l.appId);
      if (S.closeView)
        I.view.modal.ignoreDismissCheck = !0, I.view.closeView({
          ok: !0
        });
      else if (S.refresh)
        switch (S.refreshMode) {
          case 1:
            I.view.callUIAction(j.REFRESH);
            break;
          case 2:
            (O = I.view.parentView) == null || O.callUIAction(j.REFRESH);
            break;
          case 3:
            (U = I.view.getTopView()) == null || U.callUIAction(j.REFRESH);
            break;
        }
    }, ce = async (l, C, I) => {
      const S = I || l.editItem.codeName;
      await n.setRowValue(e.row, C, S);
      const O = l.editor.model.editorType;
      de.includes(O) || R();
    }, ue = () => {
      R(), n.grid.saveAll();
    }, me = (l) => {
      var U, J;
      const C = l.editItem.codeName, I = e.row.data[C], S = (U = e.row.editColStates[C]) == null ? void 0 : U.readonly, O = (J = e.row.editColStates[C]) == null ? void 0 : J.disabled;
      return l.editorProvider && H(g(l.editorProvider.gridEditor), {
        class: c.e("editor"),
        value: S ? l.formatValue(I) : I,
        data: e.row.data,
        controller: l.editor,
        overflowMode: n.grid.overflowMode,
        // eslint-disable-next-line no-shadow
        onChange: (Q, ge) => ce(l, Q, ge),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onEnter: (Q) => ue(),
        readonly: S,
        disabled: O
      });
    }, he = (l) => {
      l.stopPropagation(), A(!0);
    }, fe = () => {
      n.grid.saveAll();
    }, ve = () => {
      const {
        enableRowEdit: l,
        deuiactionGroup: C
      } = n.model, I = [];
      return l && I.push(s(g("el-button"), {
        text: !0,
        size: "small",
        class: "hover-action",
        onClick: (S) => he(S),
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
      })), C != null && C.uiactionGroupDetails && I.push(s(ae, {
        ref: "actionToolbarRef",
        class: c.e("toolbar"),
        actionDetails: C == null ? void 0 : C.uiactionGroupDetails,
        actionsState: e.row.uiActionGroupStates[n.model.codeName],
        groupLevelKeys: [50, 100],
        zIndex: o,
        editColums: f,
        showCommonAction: P.value,
        onActionClick: Y,
        onSaveAll: fe
      }, {
        editor: (S) => me(S)
      })), I;
    }, we = (l) => {
      a.value = l.id, n.curPickerId = l.id;
    }, Ce = async (l) => {
      m = l;
    };
    return {
      ns: c,
      picking: m,
      componentRef: v,
      actionToolbarRef: t,
      fieldName: u,
      gridEditItemProps: x,
      rowDataChange: T,
      editorProps: k,
      onCellClick: M,
      onTextClick: N,
      onInfoTextChange: $,
      onActionClick: Y,
      renderActions: ve,
      CustomHtml: z,
      fieldValue: b,
      formatValue: E,
      tooltip: w,
      renderPicker: () => {
        if (r.value.length > 0)
          return s(g("el-dropdown"), {
            onVisibleChange: Ce,
            onCommand: (l) => we(l)
          }, {
            default: () => s(g("iBizCodeList"), {
              class: c.e("text"),
              codeListItems: r.value,
              codeList: n.userCodeList,
              value: a.value
            }, null),
            dropdown: () => {
              let l;
              return s(g("el-dropdown-menu"), null, Me(l = r.value.map((C) => s(g("el-dropdown-item"), {
                title: C.tooltip,
                command: C
              }, {
                default: () => [s(g("iBizCodeList"), {
                  class: c.e("text"),
                  codeListItems: r.value,
                  codeList: n.userCodeList,
                  value: C.id
                }, null)]
              }))) ? l : {
                default: () => [l]
              });
            }
          });
      }
    };
  },
  render() {
    var v;
    const e = this.controller;
    let c = null;
    e.isCustomCode ? c = s("span", {
      class: this.ns.e("script"),
      innerHTML: this.CustomHtml
    }, null) : e.codeList ? c = s(g("iBizCodeList"), {
      class: this.ns.e("text"),
      codeListItems: e.codeListItems,
      codeList: e.codeList,
      value: this.fieldValue,
      onClick: this.onTextClick,
      onInfoTextChange: this.onInfoTextChange,
      title: this.tooltip
    }, null) : c = s("span", {
      class: this.ns.e("text"),
      title: this.tooltip,
      onClick: this.onTextClick
    }, [this.formatValue, this.fieldValue != null && e.model.unitName]);
    const t = s(g("iBizGridEditItem"), {
      ref: "componentRef",
      required: !e.editItem.allowEmpty,
      error: this.row.errors[this.fieldName],
      overflowMode: this.controller.grid.overflowMode,
      class: this.ns.m("edit-item"),
      ...this.gridEditItemProps
    }, {
      default: () => [e.editorProvider && H(g(e.editorProvider.gridEditor), {
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
      class: [this.ns.b(), e.clickable(this.row) && this.ns.m("clickable"), this.ns.m(this.controller.grid.overflowMode), (v = this.controller.model.cellSysCss) == null ? void 0 : v.cssName, this.ns.is("has-action", !!e.model.deuiactionGroup)],
      onClick: this.onCellClick
    }, [e.model.enableRowEdit ? s("div", {
      class: this.ns.b("edit-container")
    }, [t, this.renderPicker()]) : s("div", {
      class: this.ns.b("text-container")
    }, [c]), !(e.model.enableRowEdit && !this.editorProps.readonly) && this.editorProps.cellEditable ? s("div", {
      class: this.ns.b("toolbar-container")
    }, [this.renderActions()]) : null]);
  }
});
class Ne {
  constructor() {
    F(this, "component", "GridEditColumn");
  }
  async createController(c, t) {
    const v = new re(c, t);
    return await v.init(), v;
  }
}
function ze(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.name].disabled), n = i(() => e.row.editColStates[t.name].readonly), u = i(() => !!e.row.errors[t.name]), d = i(() => e.row.editColStates[t.name].editable), o = (f) => {
    e.row.editColStates[t.name].editable = f;
  }, r = i(() => !v.value && !n.value && !u.value), a = i(() => u.value || r.value && d.value), m = i(() => !a.value), h = !1, y = !0, P = i(() => !1), R = i(() => d.value);
  let T = e.row.data[e.controller.name];
  const L = p(!1), x = () => {
    ibiz.log.debug("".concat(t.name, "属性编辑器focus事件"));
  }, k = () => {
    var f, b;
    ibiz.log.debug("".concat(t.name, "属性编辑器blur事件")), !L.value && (o(!1), ((f = t.nodeColumn.userParam) == null ? void 0 : f.SAVEMODE) === "BLUR" ? t.treeGrid.save(e.row.data) : ((b = e.row.data._deData) == null ? void 0 : b.srfuf) === _.CREATE ? t.treeGrid.remove({ data: [e.row.data], silent: !0 }) : t.setRowValue(e.row, T));
  }, A = async () => {
    L.value = !0, await t.treeGrid.save(e.row.data), T = e.row.data[e.controller.name], o(!1), L.value = !1;
  }, M = (f) => {
    f.keyCode === 27 && o(!1);
  }, N = D({
    showEditMask: P,
    stopPropagation: R
  }), z = D({
    autoFocus: y,
    disabled: h,
    readonly: m,
    onBlur: k,
    onFocus: x,
    onEnter: A,
    onKeydown: M
  });
  return {
    gridEditItemProps: N,
    editorProps: z
  };
}
function Ge(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.name].disabled), n = i(() => e.row.editColStates[t.name].readonly), u = i(() => e.row.editColStates[t.name].editable), d = i(() => n.value || !u.value), o = i(() => u.value && v.value), r = i(() => u.value), a = D({
    stopPropagation: r
  }), m = D({
    disabled: o,
    readonly: d
  });
  return {
    gridEditItemProps: a,
    editorProps: m
  };
}
function Oe(e, c) {
  const t = e.controller, v = i(() => e.row.editColStates[t.name].disabled), n = i(() => e.row.editColStates[t.name].readonly), u = i(() => e.controller.treeGrid.state.rowEditOpen), d = i(() => n.value || !u.value), o = i(() => u.value && v.value), r = i(() => u.value), a = () => {
    t.treeGrid.save(e.row.data);
  }, m = D({
    stopPropagation: r
  }), h = D({
    disabled: o,
    readonly: d,
    onBlur: a
  });
  return {
    gridEditItemProps: m,
    editorProps: h
  };
}
const Fe = /* @__PURE__ */ q({
  name: "TreeGridExEditColumn",
  props: {
    controller: {
      type: Re,
      required: !0
    },
    row: {
      type: te,
      required: !0
    }
  },
  setup(e) {
    const c = i(() => e.row.data[e.controller.name]), t = B("tree-grid-ex-edit-column"), v = p(), n = e.controller, u = async (y, P) => {
      ibiz.log.debug("".concat(n.name, "值变更"), y), await n.setRowValue(e.row, y, P);
    }, d = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return ze(e);
        case "row":
          return Ge(e);
        case "all":
          return Oe(e);
        default:
          throw new se("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: o,
      editorProps: r
    } = d(), a = p(void 0), m = (y) => {
      a.value = y;
    }, h = i(() => {
      if (r.readonly)
        return xe(a.value) ? n.formatValue(c.value) : a.value;
    });
    return {
      ns: t,
      fieldValue: c,
      componentRef: v,
      tooltip: h,
      rowDataChange: u,
      onInfoTextChange: m,
      gridEditItemProps: o,
      editorProps: r
    };
  },
  render() {
    return s(g("iBizGridEditItem"), {
      ref: "componentRef",
      required: !this.controller.nodeEditItem.allowEmpty,
      overflowMode: this.controller.overflowMode,
      class: [this.ns, this.ns.m(this.controller.overflowMode)],
      ...this.gridEditItemProps
    }, {
      default: () => [this.controller.editorProvider && H(g(this.controller.editorProvider.gridEditor), {
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
const X = /* @__PURE__ */ q({
  name: "TreeGridExFieldColumn",
  props: {
    controller: {
      type: oe,
      required: !0
    },
    row: {
      type: te,
      required: !0
    }
  },
  setup(e) {
    const c = B("tree-grid-ex-field-column"), t = B("tree-grid-ex-field-edit-column"), n = pe().zIndex.increment(), u = p(), d = i(() => e.controller.nodeColumnControllerMap.get(e.row.data._nodeId)), o = i(() => e.row.editColStates[d.value.name].editable), r = i(() => e.row.editColStates[d.value.name].readonly), a = (f) => {
      e.row.editColStates[d.value.name].editable = f;
    }, m = (f) => {
      f.stopPropagation(), a(!0);
    };
    ne(() => {
      e.row.data.srfuf === _.CREATE && a(!0);
    });
    const h = i(() => e.row.data._nodeType !== "DE" && e.controller.isFirstShowColumn ? e.row.data._text : e.row.data[e.controller.name]), y = p(""), P = (f) => {
      y.value = f;
    }, R = i(() => {
      const f = d.value;
      return f ? f.nodeEditItem ? void 0 : f.codeList ? y.value : f.formatValue(h.value) + (f.unitName || "") : h.value;
    }), T = i(() => {
      if (e.controller.treeGrid.overflowMode === "ellipsis" && le(h.value) && h.value !== "")
        return R.value;
    }), L = i(() => h.value && d.value && (d.value.isLinkColumn || d.value.hasClickAction)), x = (f) => {
      var b;
      (b = d.value) == null || b.onTextClick(e.row, f);
    }, k = () => {
      var f;
      (f = u.value) == null || f.closeAllPopover();
    }, A = async (f, b) => {
      var E;
      k(), await ((E = d.value) == null ? void 0 : E.onActionClick(f, e.row, b));
    }, M = i(() => Object.values(e.controller.treeGrid.columns).filter((f) => {
      var E;
      const b = f.nodeColumnControllerMap.get(e.row.data._nodeId);
      return b.nodeColumn.enableRowEdit && b.nodeColumn.id !== ((E = d.value) == null ? void 0 : E.nodeColumn.id);
    }));
    return {
      ns: c,
      ns2: t,
      zIndex: n,
      nodeColumn: d,
      fieldValue: h,
      showText: R,
      clickable: L,
      tooltip: T,
      editable: o,
      readonly: r,
      editColums: M,
      actionToolbarRef: u,
      onInfoTextChange: P,
      onDataChange: async (f, b, E) => {
        await f.setRowValue(e.row, b, E);
        const G = f.editor.model.editorType;
        de.includes(G) || k();
      },
      editorEnter: async (f, b, E) => {
        await f.setRowValue(e.row, b, E), k();
      },
      onTextClick: x,
      onActionClick: A,
      onOpenEdit: m
    };
  },
  render() {
    var n, u, d, o;
    let e = null;
    const c = (r) => {
      var R, T;
      const a = r.nodeColumnControllerMap.get(this.row.data._nodeId), m = a.name, h = this.row.data[m], y = (R = this.row.editColStates[m]) == null ? void 0 : R.readonly, P = (T = this.row.editColStates[m]) == null ? void 0 : T.disabled;
      return a.editorProvider && H(g(a.editorProvider.gridEditor), {
        class: this.ns.e("editor"),
        value: y ? a.formatValue(h) : h,
        data: this.row.data,
        controller: a.editor,
        overflowMode: a.overflowMode,
        // eslint-disable-next-line no-shadow
        onChange: (L, x) => this.onDataChange(a, L, x || m),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onEnter: (L) => this.editorEnter(a, h, m),
        // 待测试
        readonly: y,
        disabled: P
      });
    };
    (n = this.nodeColumn) != null && n.nodeEditItem ? e = s(Fe, {
      controller: this.nodeColumn,
      row: this.row
    }, null) : (u = this.nodeColumn) != null && u.codeList ? e = s(g("iBizCodeList"), {
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
    let t;
    this.$slots.actions ? t = this.$slots.actions() : this.row.columnActionsStates[this.controller.name] && (t = s(ae, {
      ref: "actionToolbarRef",
      class: this.ns.e("toolbar"),
      actionDetails: (d = this.nodeColumn) == null ? void 0 : d.nodeColumn.deuiactionGroup.uiactionGroupDetails,
      actionsState: this.row.columnActionsStates[this.controller.name],
      groupLevelKeys: [50, 100],
      zIndex: this.zIndex,
      editColums: this.editColums,
      onActionClick: this.onActionClick
    }, {
      editor: (r) => c(r)
    }));
    const v = s(g("el-button"), {
      text: !0,
      size: "small",
      class: "hover-action",
      onClick: (r) => this.onOpenEdit(r),
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
      class: [this.ns.b(), this.ns2.b(), this.clickable && this.ns.m("clickable"), this.ns.m(this.controller.treeGrid.overflowMode), (o = this.controller.model.cellSysCss) == null ? void 0 : o.cssName, this.ns2.is("editable", this.editable), this.ns.is("has-action", !!t)]
    }, [s("div", {
      class: this.ns.b("text-container")
    }, [e]), s("div", {
      class: this.ns.b("toolbar-container")
    }, [!this.editable && !this.readonly ? [v, t] : null])]);
  }
});
class Be {
  constructor() {
    F(this, "component", "TreeGridExFieldColumn");
  }
  async createController(c, t) {
    const v = new oe(c, t);
    return await v.init(), v;
  }
}
const _e = ee(
  K,
  function(e) {
    e.component(K.name, K), Se(
      "GRID_COLRENDER_COLUMN_ACTION_EDIT",
      () => new Ne()
    );
  }
), Ue = ee(
  X,
  function(e) {
    e.component(X.name, X), Le(
      "GRID_COLRENDER_COLUMN_ACTION_EDIT",
      () => new Be()
    );
  }
), We = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(_e), e.use(Ue);
  }
};
export {
  _e as IBizGridEditColumn,
  Ue as IBizTreeGridExFieldColumn,
  We as default
};
