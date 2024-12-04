import './style.css';
var E = Object.defineProperty;
var R = (e, s, t) => s in e ? E(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var x = (e, s, t) => (R(e, typeof s != "symbol" ? s + "" : s, t), t);
import { useNamespace as S, useCtx as T, withInstall as $ } from "@ibiz-template/vue3-util";
import { FormMDCtrlRepeaterController as O, EditFormController as B, registerFormDetailProvider as N } from "@ibiz-template/runtime";
import { defineComponent as I, createVNode as i, createTextVNode as D, resolveComponent as M, computed as z, reactive as A, watch as j, toRaw as q } from "vue";
import { recursiveIterate as K } from "@ibiz-template/core";
import { clone as k } from "ramda";
const w = /* @__PURE__ */ I({
  name: "CaseStepsCell",
  props: {
    width: {
      type: Number
    },
    align: {
      validator: (e) => ["left", "center", "right"].includes(e)
    }
  },
  setup() {
    return {
      ns: S("case-steps-cell")
    };
  },
  render() {
    var e, s;
    return i("div", {
      class: [this.ns.b(), this.ns.is("center", this.align === "center"), this.ns.is("left", this.align === "left"), this.ns.is("right", this.align === "right")],
      style: {
        width: "".concat(this.width, "px")
      }
    }, [(s = (e = this.$slots).default) == null ? void 0 : s.call(e)]);
  }
});
const L = /* @__PURE__ */ I({
  name: "CaseStepsTable",
  props: {
    data: {
      type: Array,
      required: !0
    },
    model: {
      type: Object,
      required: !0
    },
    columns: {
      type: Array
    },
    indexProps: {
      type: Object
    }
  },
  emits: {
    dragChange: (e) => !0
  },
  setup(e, {
    emit: s,
    slots: t
  }) {
    const r = S("case-steps-table");
    return {
      ns: r,
      onChange: (c) => {
        const d = k(e.data);
        if (c.moved) {
          const {
            oldIndex: f,
            newIndex: h
          } = c.moved, u = d[h], n = d.splice(f, 1);
          u.group_id ? n[0].group_id = u.group_id : delete n[0].group_id, d.splice(h, 0, ...n), s("dragChange", d);
        }
      },
      renderRows: (c, d) => {
        var f, h;
        return i("div", {
          class: [r.e("row"), r.is("group", c.is_group)],
          key: c.id
        }, [t.index && i(w, {
          class: r.em("cell", "index"),
          width: (f = e.indexProps) == null ? void 0 : f.width,
          align: (h = e.indexProps) == null ? void 0 : h.align
        }, {
          default: () => {
            var u;
            return [i(M("ion-icon"), {
              class: r.em("cell", "icon"),
              name: "menu-sharp"
            }, null), (u = t.index) == null ? void 0 : u.call(t, {
              $index: d
            })];
          }
        }), e.columns && e.columns.map((u) => {
          if (!u.hidden)
            return i(w, {
              key: c.id
            }, {
              default: () => {
                var n;
                return [(n = t[u.id]) == null ? void 0 : n.call(t, {
                  $index: d,
                  row: c
                })];
              }
            });
        })]);
      }
    };
  },
  render() {
    var e, s;
    return i("div", {
      class: this.ns.b()
    }, [i("div", {
      class: this.ns.e("header")
    }, [i("div", {
      class: this.ns.e("row")
    }, [this.$slots.index && i(w, {
      class: this.ns.em("cell", "index"),
      width: (e = this.indexProps) == null ? void 0 : e.width,
      align: (s = this.indexProps) == null ? void 0 : s.align
    }, {
      default: () => [D("#")]
    }), this.columns && this.columns.map((t) => {
      if (t.hidden || !t.caption)
        return;
      const {
        width: r
      } = t, l = {};
      return r && (l.width = "".concat(r, "px"), l.flex = "none"), i(w, {
        style: l,
        align: "center"
      }, {
        default: () => [i("span", null, [t.caption])]
      });
    })])]), i("div", {
      class: this.ns.e("body")
    }, [this.data.map((t, r) => this.renderRows(t, r))])]);
  }
});
class P extends O {
  constructor() {
    super(...arguments);
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    x(this, "groupField", "is_group");
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    x(this, "parentField", "group_id");
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    x(this, "entityKey", "id");
  }
  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobCaseStepsController
   */
  async onInit() {
    await super.onInit();
  }
}
const y = /* @__PURE__ */ I({
  name: "IBizMobCaseSteps",
  props: {
    controller: {
      type: P,
      required: !0
    }
  },
  emits: {
    change: (e) => !0
  },
  setup(e, {
    emit: s
  }) {
    const t = S("mob-case-steps"), r = e.controller, l = [], F = z(() => {
      const n = [];
      let o = 0, a = 0;
      return r.value && r.value.forEach((p, m) => {
        p[r.groupField] || !m || !p[r.parentField] ? (o++, a = 0, n.push("".concat(o))) : (a++, n.push("".concat(o, ".").concat(a)));
      }), n;
    });
    K(e.controller.repeatedForm, (n) => {
      n.detailType === "FORMITEM" && l.push(n);
    }, {
      childrenFields: ["deformPages", "deformTabPages", "deformDetails"]
    });
    const c = T(), d = A([]), f = async (n, o = {}) => {
      const a = new B(e.controller.repeatedForm, e.controller.context, e.controller.params, c);
      a.state.isSimple = !0, await a.created(), a.setSimpleData(o), d.splice(n, 0, a);
    }, h = (n) => {
      const o = n[r.entityKey];
      return d.find((a) => a.state.data[r.entityKey] === o);
    };
    return j(() => e.controller.value, (n) => {
      n && n.length > 0 && n.forEach((o, a) => {
        const p = h(o);
        if (p) {
          const m = o || {};
          Object.keys(p.data).find((g) => m[g] !== p.data[g]) && p.setSimpleData(m);
        } else
          f(a, o);
      });
    }, {
      immediate: !0,
      deep: !0
    }), {
      ns: t,
      c: r,
      formItems: l,
      indexMap: F,
      formControllers: d,
      renderContent: () => {
        const n = {};
        return l.forEach((o) => {
          o.hidden || (n[o.id] = (a) => {
            const {
              row: p
            } = a, m = q(h(p));
            if (!m || !m.state.isLoaded)
              return i("div", null, [D("不存在或加载中")]);
            const C = m.formItems.find((_) => _.name === o.id);
            if (!C.state.visible)
              return null;
            const {
              width: g
            } = C.model, b = {};
            g && (b.width = "".concat(g, "px"), b.flex = "none");
            let v = null;
            return C.editorProvider ? v = i("div", null, [C.value]) : v = i(M("not-supported-editor"), {
              modelData: o.editor
            }, null), i("div", {
              style: b,
              class: [t.e("grid-edit-item"), ...C.containerClass]
            }, [v]);
          });
        }), n;
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b()]
    }, [i(L, {
      class: [this.ns.e("table"), this.ns.is("disabled", !this.controller.enableCreate && !this.controller.enableDelete)],
      model: this.c.model,
      data: this.controller.value || [],
      columns: this.formItems,
      indexProps: {
        width: 66,
        align: "center"
      },
      onDragChange: (e) => this.c.setValue(e)
    }, {
      index: (e) => {
        const {
          $index: s
        } = e;
        return i("span", null, [this.indexMap[s]]);
      },
      ...this.renderContent()
    })]);
  }
});
class V {
  constructor() {
    x(this, "component", "IBizMobCaseSteps");
  }
  async createController(s, t, r) {
    const l = new P(s, t, r);
    return await l.init(), l;
  }
}
const U = $(y, function(e) {
  e.component(y.name, y), N(
    "FORM_USERCONTROL_MOB_CASE_STEPS",
    () => new V()
  );
}), Y = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.use(U);
  }
};
export {
  U as IBizMobCaseSteps,
  Y as default
};
