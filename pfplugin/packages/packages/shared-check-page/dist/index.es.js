import './style.css';
var b = Object.defineProperty;
var E = (a, e, n) => e in a ? b(a, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[e] = n;
var y = (a, e, n) => (E(a, typeof e != "symbol" ? e + "" : e, n), n);
import { PluginStaticResource as S, convertNavData as V, registerViewProvider as $ } from "@ibiz-template/runtime";
import { useNamespace as B, withInstall as D } from "@ibiz-template/vue3-util";
import { defineComponent as I, ref as l, onBeforeMount as x, h as F, resolveComponent as h, withDirectives as N, createVNode as t, resolveDirective as O, createTextVNode as o } from "vue";
import { notNilEmpty as j } from "qx-util";
const m = new S(import.meta.url);
const v = /* @__PURE__ */ I({
  name: "SharedCheckPage",
  props: {
    context: {
      type: Object,
      default: () => {
      }
    },
    params: {
      type: Object,
      default: () => ({})
    },
    modelData: {
      type: Object,
      required: !0
    },
    modal: {
      type: Object
    },
    state: {
      type: Object
    }
  },
  setup(a) {
    const e = B("shared-check-page"), n = l(""), d = l(!1), u = l(""), p = l(!1), c = l(""), f = () => {
      let s = {};
      const r = a.modelData.appViewNavParams;
      return j(r) && (s = V(r, a.params, a.context)), s;
    }, k = async () => {
      if (!u.value.length) {
        c.value = "密码不能为空";
        return;
      }
      p.value = !0;
      const s = f(), r = "".concat(s.check_entity, "/").concat(s.check_key, "/check_access_password");
      try {
        const i = await ibiz.net.post(r, {
          id: s.check_key,
          access_password: u.value
        });
        p.value = !1, i && i.ok && i.data && (i.data.check_access_password === "1" ? n.value = "pass" : c.value = "密码错误");
      } catch (i) {
        p.value = !1;
      }
    }, P = async () => {
      d.value = !0;
      const s = f(), r = "".concat(s.check_entity, "/").concat(s.check_key, "/check_shared");
      try {
        const i = await ibiz.net.get(r);
        if (d.value = !1, i && i.ok && i.data) {
          const {
            effective: g,
            check_access_pwd: w
          } = i.data;
          g === 0 ? n.value = "invalid" : g === 1 && (w === 0 ? n.value = "pass" : w === 1 && (n.value = "checkPwd"));
        }
      } catch (i) {
        d.value = !1;
      }
    }, C = () => {
      c.value = "";
    }, _ = (s) => {
      s && s.code === "Enter" && k();
    };
    return x(async () => {
      P();
    }), {
      ns: e,
      uiState: n,
      loading: d,
      renderInvalid: () => t("div", {
        class: e.e("link-invalid")
      }, [t("div", {
        class: e.e("link-container")
      }, [t("div", {
        class: e.em("link-container", "header")
      }, [t("img", {
        class: e.em("pwd-container", "header-logo"),
        src: "".concat(m.dir("assets/images/share.png"))
      }, null), t("span", null, [o("Wiki")])]), t("div", {
        class: e.em("link-container", "content")
      }, [t("img", {
        class: e.em("link-container", "unlink"),
        src: "".concat(m.dir("assets/images/unlink.png"))
      }, null), t("span", {
        class: e.em("link-container", "tip")
      }, [o("页面共享链接已过期")])])])]),
      renderVerifyPwd: () => t("div", {
        class: e.e("verify-pwd")
      }, [t("div", {
        class: e.e("pwd-container")
      }, [t("div", {
        class: e.em("pwd-container", "header")
      }, [t("img", {
        src: "".concat(m.dir("assets/images/share.png")),
        class: e.em("pwd-container", "header-logo")
      }, null), t("span", null, [o("Wiki")])]), t("div", {
        class: e.em("pwd-container", "content")
      }, [t("p", null, [o("访问密码")]), t(h("el-input"), {
        class: [e.em("pwd-container", "input"), e.is("error", !!c.value.length)],
        placeholder: "请输入密码",
        modelValue: u.value,
        "onUpdate:modelValue": (s) => u.value = s,
        onInput: C,
        onkeydown: _
      }, null), t(h("el-button"), {
        loading: p.value,
        class: e.em("pwd-container", "submit"),
        onClick: k
      }, {
        default: () => [o("确定")]
      }), t("p", {
        class: [e.e("error-msg"), e.is("visible", !!c.value.length)]
      }, [c.value])])])])
    };
  },
  render() {
    let a;
    return this.uiState === "invalid" && (a = this.renderInvalid()), this.uiState === "checkPwd" && (a = this.renderVerifyPwd()), this.uiState === "pass" && (a = F(h("IBizView"), {
      context: this.$props.context,
      params: this.$props.params,
      modelData: this.modelData,
      ...this.$attrs
    }, this.$slots)), N(t("div", {
      class: this.ns.b()
    }, [a]), [[O("loading"), this.loading]]);
  }
});
class A {
  constructor() {
    y(this, "component", "SharedCheckPage");
  }
}
const z = D(
  v,
  function(a) {
    a.component(v.name, v), $(
      "VIEW_CUSTOM_SHARED_CHECK_PAGE",
      () => new A()
    );
  }
), U = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(a) {
    a.use(z);
  }
};
export {
  z as IBizSharedCheckPage,
  U as default
};
