import './style.css';
var p = Object.defineProperty;
var m = (e, t, o) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => (m(e, typeof t != "symbol" ? t + "" : t, o), o);
import { ListController as d, registerControlProvider as u } from "@ibiz-template/runtime";
import { defineComponent as f, createVNode as s, resolveComponent as l, isVNode as b } from "vue";
import { useControlController as y, useNamespace as C } from "@ibiz-template/vue3-util";
class S extends d {
  get pickupTree() {
    var t;
    return (t = this.view.getController("pickupviewpanel")) == null ? void 0 : t.embedView.getController("tree");
  }
  /**
   * 删除项
   *
   * @param {IData} item
   * @memberof MobSimpleListController
   */
  handleRemove(t) {
    const { items: o } = this.state, n = o.findIndex((r) => r.srfkey === t.srfkey);
    n !== -1 && o.splice(n, 1);
    const a = o.map((r) => ({
      ...r,
      _id: r._id || r.srfkey
    }));
    this.pickupTree.setSelection([...a]);
  }
  /**
   * 设置选中数据
   *
   * @param {IData[]} items
   * @memberof MobSimpleListController
   */
  setData(t) {
    this.state.items = t;
    const o = t.map((n) => ({
      ...n,
      _id: n._id || n.srfkey
    }));
    this.pickupTree.state.selectedData = o;
  }
}
function L(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !b(e);
}
const c = /* @__PURE__ */ f({
  name: "MobSimpleList",
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
    const e = y((...n) => new S(...n)), t = C("mob-simple-list");
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
    }, L(e = this.renderListContent()) ? e : {
      default: () => [e]
    });
  }
});
class v {
  constructor() {
    i(this, "component", "MobSimpleList");
  }
}
const x = {
  install(e) {
    e.component(c.name, c), u(
      "LIST_RENDER_MOB_SIMPLE_LIST",
      () => new v()
    );
  }
};
export {
  x as default
};
