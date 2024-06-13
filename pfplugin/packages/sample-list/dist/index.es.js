var c = Object.defineProperty;
var p = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => (p(e, typeof t != "symbol" ? t + "" : t, o), o);
import { useControlController as d, useNamespace as m, withInstall as u } from "@ibiz-template/vue3-util";
import { ListController as f, registerControlProvider as C, ControlType as S } from "@ibiz-template/runtime";
import { defineComponent as b, createVNode as s, resolveComponent as l, isVNode as L } from "vue";
class y extends f {
  /**
   * 选择表格
   *
   * @readonly
   * @memberof SampleListController
   */
  get pickupGrid() {
    var t;
    return (t = this.view.getController("pickupviewpanel")) == null ? void 0 : t.embedView.getController("grid");
  }
  /**
   * 处理删除
   *
   * @param {IData} item
   * @memberof SampleListController
   */
  handleRemove(t) {
    const { items: o } = this.state, n = o.findIndex((a) => a.srfkey === t.srfkey);
    n !== -1 && o.splice(n, 1), this.pickupGrid.setSelection([...o]);
  }
  /**
   * 设置表格选中数据
   *
   * @param {IData[]} items
   * @memberof SampleListController
   */
  setData(t) {
    this.state.items = t, this.pickupGrid.setSelection([...t]);
  }
}
function h(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !L(e);
}
const r = /* @__PURE__ */ b({
  name: "SampleList",
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
      default: 2
    },
    singleSelect: {
      type: Boolean,
      default: !0
    },
    isSimple: {
      type: Boolean,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const e = d((...n) => new y(...n)), t = m("sample-list");
    return {
      c: e,
      ns: t,
      renderListContent: () => s("div", {
        class: t.b("content")
      }, [e.state.items.map((n) => s("div", {
        class: [t.b("item")]
      }, [s("span", {
        class: t.be("item", "caption")
      }, [n.srfmajortext]), s(l("ion-icon"), {
        name: "close-outline",
        class: t.be("item", "icon"),
        onClick: () => e.handleRemove(n)
      }, null)]))])
    };
  },
  render() {
    let e;
    return s(l("iBizControlBase"), {
      class: [this.ns.b()],
      controller: this.c
    }, h(e = this.renderListContent()) ? e : {
      default: () => [e]
    });
  }
});
class v {
  constructor() {
    i(this, "component", "SampleList");
  }
}
const j = u(r, function(e) {
  e.component(r.name, r), C(
    "".concat(S.LIST, "_RENDER_SAMPLE_LIST"),
    () => new v()
  );
}), B = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(j);
  }
};
export {
  j as IBizSampleList,
  B as default
};
