import './style.css';
var P = Object.defineProperty;
var k = (e, o, r) => o in e ? P(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r;
var h = (e, o, r) => (k(e, typeof o != "symbol" ? o + "" : o, r), r);
import { GridFieldEditColumnController as B, GridRowState as L, registerGridColumnProvider as G } from "@ibiz-template/runtime";
import { useClickOutside as O, useNamespace as D, withInstall as V } from "@ibiz-template/vue3-util";
import { computed as n, reactive as b, defineComponent as j, ref as x, createVNode as i, resolveComponent as q, isVNode as A } from "vue";
import { RuntimeError as H } from "@ibiz-template/core";
import { isNil as T } from "ramda";
import { isArray as U, isUndefined as $ } from "lodash-es";
function W(e, o) {
  const r = e.controller, l = n(() => e.row.editColStates[r.fieldName].disabled), v = n(() => e.row.editColStates[r.fieldName].readonly), s = n(() => !!e.row.errors[r.fieldName]), d = n(
    () => e.row.editColStates[r.fieldName].editable
  ), c = (_) => {
    e.row.editColStates[r.fieldName].editable = _;
  }, u = n(() => !l.value && !v.value && !s.value), w = n(() => s.value || u.value && d.value), f = n(() => !w.value), m = !1, S = n(() => !s.value), y = n(() => u.value && !d.value), R = n(() => u.value || w.value);
  let g;
  const N = () => {
    c(!0), g = O(o, async (_) => {
      c(!1), g.stop();
    });
  }, C = () => {
    g && g.stop(), ibiz.log.debug("".concat(r.fieldName, "属性编辑器focus事件"));
  }, E = () => {
    ibiz.log.debug("".concat(r.fieldName, "属性编辑器blur事件")), c(!1), ibiz.config.grid.editSaveMode === "cell-blur" && r.grid.save(e.row.data);
  }, I = b({
    showEditMask: y,
    stopPropagation: R,
    onMaskClick: N
  }), z = b({
    autoFocus: S,
    disabled: m,
    readonly: f,
    onBlur: E,
    onFocus: C
  });
  return {
    gridEditItemProps: I,
    editorProps: z
  };
}
function J(e, o) {
  const r = e.controller, l = n(() => e.row.editColStates[r.fieldName].disabled), v = n(() => e.row.editColStates[r.fieldName].readonly), s = n(
    () => e.row.editColStates[r.fieldName].editable
  ), d = n(() => v.value || !s.value), c = n(() => s.value && l.value), u = n(() => s.value), w = b({
    stopPropagation: u
  }), f = b({
    disabled: c,
    readonly: d
  });
  return {
    gridEditItemProps: w,
    editorProps: f
  };
}
function K(e, o) {
  const r = e.controller, l = n(() => e.row.editColStates[r.fieldName].disabled), v = n(() => e.row.editColStates[r.fieldName].readonly), s = n(() => e.controller.grid.state.rowEditOpen), d = n(() => v.value || !s.value), c = n(() => s.value && l.value), u = n(() => s.value), w = () => {
    r.grid.save(e.row.data);
  }, f = b({
    stopPropagation: u
  }), m = b({
    disabled: c,
    readonly: d,
    onBlur: w
  });
  return {
    gridEditItemProps: f,
    editorProps: m
  };
}
class M extends B {
  constructor() {
    super(...arguments);
    /**
     * 是否可评审属性
     */
    h(this, "isReviewedField", "whether_review");
    /**
     * 评审最终结果属性
     */
    h(this, "finalResultsField", "final_stage_results");
    /**
     * 评审阶段参数属性
     */
    h(this, "reviewStageField", "stage_id");
    /**
     * 评审结果
     */
    h(this, "reviewResultField", "result_state");
  }
}
function Q(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !A(e);
}
const X = () => i("svg", {
  class: "icon",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("g", {
  transform: "translate(.9 .5)",
  "fill-rule": "nonzero"
}, [i("path", {
  d: "M13.6 13.9a.6.6 0 0 1 0 1.2H.6a.6.6 0 0 1 0-1.2h13zM7.065 0c2.232 0 4.043 1.8 4.043 4.017 0 1.468-.789 2.75-1.97 3.45a.934.934 0 0 0-.361.738c0 .48.364.878.836.932l.11.006c.017 0 .034.005.049.01h3.006c.415 0 .755.339.755.751v2.248c0 .412-.34.75-.755.75H1.355a.755.755 0 0 1-.755-.75V9.904c0-.412.34-.75.755-.75h3.223a.935.935 0 1 0 .418-1.684 4.012 4.012 0 0 1-1.973-3.45C3.023 1.8 4.832 0 7.065 0zm0 1.2a2.83 2.83 0 0 0-2.842 2.82c0 .933.463 1.788 1.22 2.311L5.7 6.5a2.134 2.134 0 0 1-.955 3.843l-.168.012-2.778-.001v1.349h10.533v-1.349H9.527l-.062-.026-.045-.005a2.142 2.142 0 0 1-1.838-1.964l-.005-.153c0-.665.307-1.279.82-1.681l.129-.089a2.804 2.804 0 0 0 1.382-2.418c0-1.553-1.272-2.817-2.843-2.817z"
}, null)])])]), Y = () => i("svg", {
  class: "icon",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("path", {
  d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z"
}, null)])]), Z = () => i("svg", {
  class: "icon",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("path", {
  d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm9.005.021l1.777-1.793-.994-.986-1.769 1.784L6.28 5.27l-.995.985 1.75 1.767-1.766 1.782.995.985 1.756-1.772 1.702 1.718.995-.985L9.005 8.02z"
}, null)])]), ee = () => i("svg", {
  class: "icon",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  height: "1em",
  width: "1em",
  focusable: "false"
}, [i("g", {
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, [i("path", {
  d: "M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z",
  transform: "rotate(-90 7.978 8.252)"
}, null)])]), p = /* @__PURE__ */ j({
  name: "IBizGridReviewResultsColumn",
  props: {
    controller: {
      type: M,
      required: !0
    },
    row: {
      type: L,
      required: !0
    },
    attrs: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const o = D("grid-review-results-column"), r = x(), l = e.controller, v = n(() => l.context.curstage_id), s = n(() => e.row.data[l.finalResultsField]), d = n(() => {
      const t = e.row.data[l.fieldName];
      return U(t) ? t : [];
    }), c = async (t, a) => {
      ibiz.log.debug("".concat(l.fieldName, "值变更"), t), await l.setRowValue(e.row, t, a);
    }, u = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return W(e, r);
        case "row":
          return J(e);
        case "all":
          return K(e);
        default:
          throw new H(ibiz.i18n.t("control.common.noSupportItem", {
            name: ibiz.config.grid.editShowMode
          }));
      }
    }, {
      gridEditItemProps: w,
      editorProps: f
    } = u(), m = x(void 0), S = (t) => {
      m.value = t;
    }, y = n(() => {
      if (f.readonly) {
        if (T(m.value)) {
          const t = e.row.data[l.fieldName];
          return l.formatValue(t);
        }
        return m.value;
      }
    }), R = (t) => t[l.isReviewedField] === "1" && l.context.cur_reviewer_id === l.context.srfuserid && l.context._parent.curstage_state === "20", g = (t) => {
      var a;
      return l.codeList ? ((a = l.codeList.codeItems) == null ? void 0 : a.find((F) => String(F.value) === String(t[l.reviewResultField]))) || {} : {};
    }, N = (t) => {
      t.stopPropagation(), e.controller.triggerAction(e.row, t);
    }, C = (t) => {
      const {
        color: a
      } = g(t);
      return i("div", {
        class: [o.b("block")],
        style: {
          background: a
        }
      }, null);
    }, E = () => {
      const t = String(s.value) === "1";
      return i("div", {
        class: [o.b("final-result"), o.is("fail", !t)]
      }, [t ? Y() : Z()]);
    }, I = (t = {}) => {
      const {
        text: a
      } = g(t);
      return i("div", {
        class: [o.b("single-stage-results")]
      }, [R(t) && Number(t[l.reviewResultField]) < 3 ? X() : C(t), i("span", {
        class: o.be("single-stage-results", "caption")
      }, [a])]);
    }, z = () => {
      var t;
      return i("div", {
        class: [o.b("stage-results")]
      }, [(t = d.value) == null ? void 0 : t.map((a) => C(a)), $(s.value) ? "" : E()]);
    };
    return {
      ns: o,
      c: l,
      componentRef: r,
      tooltip: y,
      rowDataChange: c,
      onInfoTextChange: S,
      gridEditItemProps: w,
      editorProps: f,
      renderContent: () => {
        if (d.value.length === 0)
          return "---";
        const t = d.value.find((a) => a[l.reviewStageField] === v.value);
        return t && !R(t) && Number(t[l.reviewResultField]) < 3 ? "---" : i("div", {
          class: [o.b("content")],
          onClick: N
        }, [t ? I(t) : z(), i("div", {
          class: o.be("content", "icon")
        }, [ee()])]);
      }
    };
  },
  render() {
    var o;
    let e;
    return i(q("iBizGridEditItem"), {
      ref: "componentRef",
      required: !this.c.editItem.allowEmpty,
      error: this.row.errors[this.c.fieldName],
      overflowMode: this.controller.grid.overflowMode,
      class: [this.ns, this.ns.m(this.c.grid.overflowMode), (o = this.controller.model.cellSysCss) == null ? void 0 : o.cssName],
      ...this.gridEditItemProps,
      showEditMask: !1
    }, Q(e = this.renderContent()) ? e : {
      default: () => [e]
    });
  }
});
class te {
  constructor() {
    h(this, "component", "IBizGridReviewResultsColumn");
  }
  async createController(o, r) {
    const l = new M(o, r);
    return await l.init(), l;
  }
}
const de = V(
  p,
  function(e) {
    e.component(p.name, p), G(
      "GRID_COLRENDER_COLUMN_REVIEW_RESULTS",
      () => new te()
    );
  }
);
export {
  de as IBizGridReviewResultsColumn,
  de as default
};
