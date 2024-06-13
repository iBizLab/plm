import './style.css';
var x = Object.defineProperty;
var P = (e, t, a) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var d = (e, t, a) => (P(e, typeof t != "symbol" ? t + "" : t, a), a);
import { TabExpPanelController as g, registerControlProvider as v } from "@ibiz-template/runtime";
import { useControlController as E, useNamespace as S, getNestedRoutePath as m, route2routePath as N, withInstall as w } from "@ibiz-template/vue3-util";
import { defineComponent as y, watch as B, createVNode as s, resolveComponent as i, createTextVNode as b } from "vue";
import { useRoute as D } from "vue-router";
class I {
  constructor() {
    d(this, "component", "TabExpSelect");
  }
}
class O extends g {
}
const l = /* @__PURE__ */ y({
  name: "TabExpSelect",
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
    defaultTabName: {
      type: String,
      required: !1
    }
  },
  setup() {
    var u;
    const e = E((...n) => new O(...n)), t = S("tab-exp-select"), a = (n) => {
      e.state.activeName = n[0], e.handleTabChange();
    }, r = ((u = e.view.model.tabLayout) == null ? void 0 : u.toLowerCase()) || "top", o = D(), f = {
      expandTrigger: "hover",
      label: "caption",
      value: "tabTag"
    };
    let p = "";
    return e.routeDepth && (p = m(o, e.routeDepth)), B(() => o.fullPath, (n, C) => {
      if (n !== C) {
        const h = e.routeDepth;
        if (h && m(o, e.routeDepth) === p) {
          const T = N(o), {
            srfnav: c
          } = T.pathNodes[h - 1];
          c && e.state.activeName && e.state.activeName !== c && (e.state.activeName = c, e.handleTabChange());
        }
      }
    }, {
      immediate: !0
    }), {
      c: e,
      ns: t,
      tabPosition: r,
      cascaderProps: f,
      handleTabChange: a
    };
  },
  render() {
    const {
      isCreated: e,
      tabPages: t
    } = this.c.state;
    let a = null;
    return e && (a = s(i("el-cascader"), {
      "model-value": [this.c.state.activeName],
      options: t,
      props: this.cascaderProps,
      "popper-class": this.ns.b("popper"),
      onChange: this.handleTabChange
    }, {
      default: (r) => {
        const {
          data: o
        } = r;
        return s("span", {
          class: [...o.class, this.ns.be("popper", "item")]
        }, [this.c.isShowIcon && s(i("iBizIcon"), {
          icon: o.sysImage
        }, null), this.c.isShowCaption && o.caption]);
      }
    })), s(i("iBizControlBase"), {
      class: this.ns.b(),
      controller: this.c
    }, {
      default: () => [a, s("span", {
        class: this.ns.b("caption")
      }, [s("span", {
        class: this.ns.be("caption", "hashtag")
      }, [b("#")]), s("span", null, [b("维度")])])]
    });
  }
}), R = w(
  l,
  function(e) {
    e.component(l.name, l), v(
      "CUSTOM_TAB_EXP_SELECT",
      () => new I()
    );
  }
), A = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(R);
  }
};
export {
  R as IBizTabExpSelectControl,
  A as default
};
