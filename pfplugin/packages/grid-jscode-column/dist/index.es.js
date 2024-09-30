var x = Object.defineProperty;
var D = (t, r, e) => r in t ? x(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var m = (t, r, e) => (D(t, typeof r != "symbol" ? r + "" : r, e), e);
import { useClickOutside as A, useNamespace as M, withInstall as F } from "@ibiz-template/vue3-util";
import { GridFieldEditColumnController as T, ScriptFactory as S, GridRowState as z, registerGridColumnProvider as B } from "@ibiz-template/runtime";
import { computed as o, reactive as C, defineComponent as V, ref as b, createVNode as J, resolveComponent as E, h as _ } from "vue";
import { RuntimeError as L } from "@ibiz-template/core";
import { isNil as k } from "ramda";
function q(t, r) {
  const e = t.controller, i = o(() => t.row.editColStates[e.fieldName].disabled), n = o(() => t.row.editColStates[e.fieldName].readonly), a = o(() => !!t.row.errors[e.fieldName]), c = o(
    () => t.row.editColStates[e.fieldName].editable
  ), s = (g) => {
    t.row.editColStates[e.fieldName].editable = g;
  }, d = o(() => !i.value && !n.value && !a.value), u = o(() => a.value || d.value && c.value), f = o(() => !u.value), l = !1, w = o(() => !a.value), y = o(() => d.value && !c.value), I = o(() => d.value || u.value);
  let h;
  const R = () => {
    s(!0), h = A(r, async (g) => {
      s(!1), h.stop();
    });
  }, p = () => {
    h && h.stop(), ibiz.log.debug("".concat(e.fieldName, "属性编辑器focus事件"));
  }, P = () => {
    ibiz.log.debug("".concat(e.fieldName, "属性编辑器blur事件")), s(!1), ibiz.config.grid.editSaveMode === "cell-blur" && e.enableSave && e.grid.save(t.row.data);
  }, O = C({
    showEditMask: y,
    stopPropagation: I,
    onMaskClick: R
  }), G = C({
    autoFocus: w,
    disabled: l,
    readonly: f,
    onBlur: P,
    onFocus: p
  });
  return {
    gridEditItemProps: O,
    editorProps: G
  };
}
function $(t, r) {
  const e = t.controller, i = o(() => t.row.editColStates[e.fieldName].disabled), n = o(() => t.row.editColStates[e.fieldName].readonly), a = o(
    () => t.row.editColStates[e.fieldName].editable
  ), c = o(() => n.value || !a.value), s = o(() => a.value && i.value), d = o(() => a.value), u = C({
    stopPropagation: d
  }), f = C({
    disabled: s,
    readonly: c
  });
  return {
    gridEditItemProps: u,
    editorProps: f
  };
}
function j(t, r) {
  const e = t.controller, i = o(() => t.row.editColStates[e.fieldName].disabled), n = o(() => t.row.editColStates[e.fieldName].readonly), a = o(() => t.controller.grid.state.rowEditOpen), c = o(() => n.value || !a.value), s = o(() => a.value && i.value), d = o(() => a.value), u = () => {
    e.enableSave && e.grid.save(t.row.data);
  }, f = C({
    stopPropagation: d
  }), l = C({
    disabled: s,
    readonly: c,
    onBlur: u
  });
  return {
    gridEditItemProps: f,
    editorProps: l
  };
}
class N extends T {
  constructor() {
    super(...arguments);
    /**
     * 初始化脚本代码
     *
     * @type {string}
     * @memberof GridJsCodeColumnController
     */
    m(this, "initScriptCode", "");
    /**
     * 值改变脚本代码
     *
     * @type {string}
     * @memberof GridJsCodeColumnController
     */
    m(this, "changeScriptCode", "");
    /**
     * 是否允许保存
     *
     * @type {boolean}
     * @memberof GridJsCodeColumnController
     */
    m(this, "enableSave", !0);
  }
  /**
   * 初始化方法，生成表格编辑项控制器
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  async onInit() {
    await super.onInit();
    const { editorParams: e } = this.editor;
    e.INITSCRIPTCODE && (this.initScriptCode = e.INITSCRIPTCODE), e.CHANGESCRIPTCODE && (this.changeScriptCode = e.CHANGESCRIPTCODE), e.ENABLESAVE && (this.enableSave = Object.is(e.ENABLESAVE, "true") || Object.is(e.ENABLESAVE, "TRUE"));
  }
  /**
   * 执行初始化脚本
   *
   * @public
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  async execInitScriptFn(e) {
    this.initScriptCode && S.execScriptFn({ data: e.data }, this.initScriptCode, {
      singleRowReturn: !1,
      isAsync: !1
    });
  }
  /**
   * 执行数据改变脚本
   *
   * @param {GridRowState} row
   * @param {string} name
   * @param {unknown} value
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  async execChangeScriptFn(e, i, n) {
    S.execScriptFn(
      { data: e.data, name: i, value: n },
      this.initScriptCode,
      { singleRowReturn: !0, isAsync: !0 }
    );
  }
  /**
   * 重写setRowValue
   *
   * @param {GridRowState} row
   * @param {unknown} value
   * @param {string} [name]
   * @return {*}  {Promise<void>}
   * @memberof GridJsCodeColumnController
   */
  async setRowValue(e, i, n) {
    n = n || this.fieldName, this.changeScriptCode && await this.execChangeScriptFn(e, n, i), await this.grid.setRowValue(e, n, i);
  }
}
const v = /* @__PURE__ */ V({
  name: "IBizGridJsCodeColumn",
  props: {
    controller: {
      type: N,
      required: !0
    },
    row: {
      type: z,
      required: !0
    },
    attrs: {
      type: Object,
      required: !1
    }
  },
  setup(t) {
    const r = M("grid-field-edit-column"), e = b(), i = t.controller;
    i.execInitScriptFn(t.row);
    const n = async (l, w) => {
      ibiz.log.debug("".concat(i.fieldName, "值变更"), l), await i.setRowValue(t.row, l, w);
    }, a = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return q(t, e);
        case "row":
          return $(t);
        case "all":
          return j(t);
        default:
          throw new L("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: c,
      editorProps: s
    } = a(), d = b(void 0), u = (l) => {
      d.value = l;
    }, f = o(() => {
      if (s.readonly) {
        if (k(d.value)) {
          const l = t.row.data[i.fieldName];
          return i.formatValue(l);
        }
        return d.value;
      }
    });
    return {
      ns: r,
      c: i,
      componentRef: e,
      tooltip: f,
      rowDataChange: n,
      onInfoTextChange: u,
      gridEditItemProps: c,
      editorProps: s
    };
  },
  render() {
    var r;
    const t = this.row.data[this.c.fieldName];
    return J(E("iBizGridEditItem"), {
      ref: "componentRef",
      required: !this.c.editItem.allowEmpty,
      error: this.row.errors[this.c.fieldName],
      overflowMode: this.controller.grid.overflowMode,
      class: [this.ns, this.ns.m(this.c.grid.overflowMode), (r = this.controller.model.cellSysCss) == null ? void 0 : r.cssName],
      ...this.gridEditItemProps
    }, {
      default: () => [this.c.editorProvider && _(E(this.c.editorProvider.gridEditor), {
        class: this.ns.e("editor"),
        value: t,
        data: this.row.data,
        controller: this.c.editor,
        overflowMode: this.c.grid.overflowMode,
        onChange: this.rowDataChange,
        onInfoTextChange: this.onInfoTextChange,
        title: this.tooltip,
        ...this.editorProps,
        ...this.attrs
      })]
    });
  }
});
class H {
  constructor() {
    m(this, "component", "IBizGridJsCodeColumn");
  }
  async createController(r, e) {
    const i = new N(r, e);
    return await i.init(), i;
  }
}
const U = F(
  v,
  function(t) {
    t.component(v.name, v), B(
      "GRID_COLRENDER_JSCODE_GRID_COLUMN",
      () => new H()
    );
  }
), ee = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(U);
  }
};
export {
  U as IBizGridJsCodeColumn,
  ee as default
};
