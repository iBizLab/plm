import './style.css';
var U = Object.defineProperty;
var Y = (e, i, r) => i in e ? U(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r;
var f = (e, i, r) => (Y(e, typeof i != "symbol" ? i + "" : i, r), r);
import { GridFieldEditColumnController as J, getDeACMode as K, GridRowState as Q, registerGridColumnProvider as W } from "@ibiz-template/runtime";
import { useClickOutside as X, useNamespace as Z, withInstall as ee } from "@ibiz-template/vue3-util";
import { computed as n, reactive as C, defineComponent as te, ref as g, createVNode as s, resolveComponent as E, isVNode as oe } from "vue";
import { RuntimeModelError as ie, RuntimeError as re } from "@ibiz-template/core";
import { mergeDeepLeft as ne, isNil as ae } from "ramda";
function de(e, i) {
  const r = e.controller, t = n(() => e.row.editColStates[r.fieldName].disabled), l = n(() => e.row.editColStates[r.fieldName].readonly), a = n(() => !!e.row.errors[r.fieldName]), c = n(
    () => e.row.editColStates[r.fieldName].editable
  ), u = (I) => {
    e.row.editColStates[r.fieldName].editable = I;
  }, m = n(() => !t.value && !l.value && !a.value), h = n(() => a.value || m.value && c.value), p = n(() => !h.value), b = !1, N = n(() => !a.value), x = n(() => m.value && !c.value), D = n(() => m.value || h.value);
  let w;
  const M = () => {
    u(!0), w = X(i, async (I) => {
      u(!1), w.stop();
    });
  }, S = () => {
    w && w.stop(), ibiz.log.debug("".concat(r.fieldName, "属性编辑器focus事件"));
  }, A = () => {
    ibiz.log.debug("".concat(r.fieldName, "属性编辑器blur事件")), u(!1), ibiz.config.grid.editSaveMode === "cell-blur" && r.grid.save(e.row.data);
  }, P = C({
    showEditMask: x,
    stopPropagation: D,
    onMaskClick: M
  }), R = C({
    autoFocus: N,
    disabled: b,
    readonly: p,
    onBlur: A,
    onFocus: S
  });
  return {
    gridEditItemProps: P,
    editorProps: R
  };
}
function se(e, i) {
  const r = e.controller, t = n(() => e.row.editColStates[r.fieldName].disabled), l = n(() => e.row.editColStates[r.fieldName].readonly), a = n(
    () => e.row.editColStates[r.fieldName].editable
  ), c = n(() => l.value || !a.value), u = n(() => a.value && t.value), m = n(() => a.value), h = C({
    stopPropagation: m
  }), p = C({
    disabled: u,
    readonly: c
  });
  return {
    gridEditItemProps: h,
    editorProps: p
  };
}
function le(e, i) {
  const r = e.controller, t = n(() => e.row.editColStates[r.fieldName].disabled), l = n(() => e.row.editColStates[r.fieldName].readonly), a = n(() => e.controller.grid.state.rowEditOpen), c = n(() => l.value || !a.value), u = n(() => a.value && t.value), m = n(() => a.value), h = () => {
    r.grid.save(e.row.data);
  }, p = C({
    stopPropagation: m
  }), b = C({
    disabled: u,
    readonly: c,
    onBlur: h
  });
  return {
    gridEditItemProps: p,
    editorProps: b
  };
}
class G extends J {
  constructor() {
    super(...arguments);
    /**
     * 左侧绘制映射属性
     */
    f(this, "leftMapField", "from");
    /**
     * 右侧绘制映射属性
     */
    f(this, "rightMapField", "to");
    /**
     * listMap属性
     */
    f(this, "listMapField", "srflistmapfield");
    /**
     * 主键属性名称
     */
    f(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    f(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    f(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    f(this, "sort", "");
    /**
     * 实体自填模式模型
     */
    f(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    f(this, "dataItems", []);
    /**
     * 编辑器模型
     */
    f(this, "editorModel", {});
    /**
     * 编辑器只读
     */
    f(this, "editorReadonly", !1);
  }
  /**
   * 初始化方法，生成表格编辑项控制器
   *
   * @protected
   * @returns {*}  {Promise<void>}
   */
  async onInit() {
    await super.onInit();
    const { enableRowEdit: r } = this.model;
    if (r && (this.editorModel = this.editItem.editor || {}, this.initParams(), this.editorModel.appDataEntityId && (this.editorModel.appDEDataSetId && (this.interfaceName = this.editorModel.appDEDataSetId), this.editorModel.appDEACModeId && (this.deACMode = await K(
      this.editorModel.appDEACModeId,
      this.editorModel.appDataEntityId,
      this.context.srfappid
    ), this.deACMode)))) {
      const { minorSortAppDEFieldId: t, minorSortDir: l } = this.deACMode;
      t && l && (this.sort = "".concat(t.toLowerCase(), ",").concat(l.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (a) => {
          a.id !== "value" && a.id !== "text" && this.dataItems.push(a);
        }
      ));
    }
  }
  /**
   * 初始化编辑器参数
   *
   * @protected
   * @returns {*}  {void}
   */
  initParams() {
    this.editorModel.editorParams && this.editorModel.editorParams.readonly && (this.editorReadonly = Object.is(
      "true",
      this.editorModel.editorParams.readonly
    ));
  }
  /**
   * 加载实体数据集数据
   *
   * @param {IData} data 表单数据
   * @param {IParams} tempParam 临时视图参数
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   */
  async getServiceData(r, t) {
    const { context: l, params: a } = this.handlePublicParams(
      r,
      this.context,
      this.params
    ), c = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(c, { sort: this.sort }), t && Object.assign(c, t), Object.assign(c, {
      size: 1e3
    });
    const u = ne(a, c);
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.editorModel.appDataEntityId,
        this.interfaceName,
        l,
        u
      );
    throw new ie(this.model, "请配置实体和实体数据集");
  }
}
function V(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !oe(e);
}
const k = /* @__PURE__ */ te({
  name: "IBizGridChangeVersionColumn",
  props: {
    controller: {
      type: G,
      required: !0
    },
    row: {
      type: Q,
      required: !0
    },
    attrs: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const i = Z("grid-change-version-column"), r = g(), t = e.controller, l = g([]), a = g(!1), c = g(!1), u = g(!1), m = n(() => e.row.data[t.fieldName] || []), h = (o, d) => (o || []).findIndex((y) => y[t.listMapField] === d), p = n(() => h(e.row.data[t.fieldName], t.leftMapField)), b = n(() => h(e.row.data[t.fieldName], t.rightMapField)), N = async (o, d) => {
      ibiz.log.debug("".concat(t.fieldName, "值变更"), o), await t.setRowValue(e.row, o, d);
    }, x = () => {
      switch (ibiz.config.grid.editShowMode) {
        case "cell":
          return de(e, r);
        case "row":
          return se(e);
        case "all":
          return le(e);
        default:
          throw new re("".concat(ibiz.config.grid.editShowMode, "暂未支持"));
      }
    }, {
      gridEditItemProps: D,
      editorProps: w
    } = x(), M = g(void 0), S = (o) => {
      M.value = o;
    }, A = n(() => {
      if (w.readonly) {
        if (ae(M.value)) {
          const o = e.row.data[t.fieldName];
          return t.formatValue(o);
        }
        return M.value;
      }
    }), P = () => s(E("iBizNoData"), {
      text: "暂无数据"
    }, null), R = (o) => {
      t.editorReadonly || o.stopPropagation();
    }, I = async (o, d) => {
      const v = [...m.value];
      v[p.value] = o, Object.assign(v[p.value], {
        ...o,
        [t.listMapField]: t.leftMapField
      }), await N(v, t.fieldName), e.controller.triggerAction(e.row, d);
    }, j = async () => {
      if (u.value = !0, t.editorModel.appDataEntityId) {
        const o = m.value[p.value], d = await t.getServiceData(o, {});
        d && (l.value = d.data, c.value = !0), u.value = !1;
      }
    }, L = (o) => {
      a.value = o, !c.value && o && j();
    }, F = (o, d) => s("div", {
      title: d ? o : "",
      class: [i.b("span-item")]
    }, [o]), B = (o) => {
      const d = o ? o[t.textName] : "", v = d.length > 3;
      return s(E("el-dropdown"), {
        trigger: "click",
        placement: "bottom-start",
        loading: u.value,
        "popper-class": [i.b("dropdown-popper")],
        onVisibleChange: L
      }, {
        default: () => s("div", {
          class: [i.b("dropdown"), i.is("dropdown-expand", a.value)]
        }, [F(d, v), s("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024",
          width: "1em",
          height: "1em",
          class: [i.be("dropdown", "icon"), i.is("dropdown-icon-expand", a.value)],
          "data-v-2b52e528": ""
        }, [s("path", {
          d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
        }, null)])]),
        dropdown: () => s(E("el-dropdown-menu"), null, {
          default: () => l.value.length > 0 ? l.value.map((y) => {
            let O;
            const z = y[t.textName] || "", T = z.length > 16;
            return s(E("el-dropdown-item"), {
              class: [y[t.keyName] === o[t.keyName] ? i.be("dropdown-popper", "active") : ""],
              onClick: (H) => I(y, H)
            }, V(O = F(z, T)) ? O : {
              default: () => [O]
            });
          }) : P()
        })
      });
    }, _ = (o) => s("div", {
      class: i.be("content", "left")
    }, [B(o)]), $ = () => s("div", {
      class: i.be("content", "center")
    }, [s("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [s("g", {
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [s("path", {
      d: "M7.3 4.403l-2.789 2.98a.7.7 0 0 1-1.022-.956L7.45 2.194a.698.698 0 0 1 1.085-.067l3.97 4.323a.7.7 0 1 1-1.031.947L8.7 4.375v8.892c0 .456-.309.833-.7.833-.392 0-.7-.377-.7-.833V4.403z",
      transform: "rotate(90 7.995 8)"
    }, null)])])]), q = (o) => {
      const d = o ? o[t.textName] : "", v = d.length > 9;
      return s("div", {
        class: i.be("content", "right")
      }, [F(d, v)]);
    };
    return {
      ns: i,
      c: t,
      componentRef: r,
      tooltip: A,
      rowDataChange: N,
      onInfoTextChange: S,
      gridEditItemProps: D,
      renderContent: () => {
        const o = m.value[p.value], d = m.value[b.value];
        return s("div", {
          class: [i.b("content"), t.editorReadonly ? i.bm("content", "editor-readonly") : ""],
          onClick: R
        }, [o && _(o), o && d && $(), d && q(d)]);
      }
    };
  },
  render() {
    var i;
    let e;
    return s(E("iBizGridEditItem"), {
      ref: "componentRef",
      required: !this.c.editItem.allowEmpty,
      error: this.row.errors[this.c.fieldName],
      overflowMode: this.controller.grid.overflowMode,
      class: [this.ns, this.ns.m(this.c.grid.overflowMode), (i = this.controller.model.cellSysCss) == null ? void 0 : i.cssName],
      ...this.gridEditItemProps,
      showEditMask: !1
    }, V(e = this.renderContent()) ? e : {
      default: () => [e]
    });
  }
});
class ce {
  constructor() {
    f(this, "component", "IBizGridChangeVersionColumn");
  }
  async createController(i, r) {
    const t = new G(i, r);
    return await t.init(), t;
  }
}
const ge = ee(
  k,
  function(e) {
    e.component(k.name, k), W(
      "GRID_COLRENDER_COLUMN_CHANGE_VERSION",
      () => new ce()
    );
  }
);
export {
  ge as IBizGridChangeVersionColumn,
  ge as default
};
