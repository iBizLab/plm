import './style.css';
var j = Object.defineProperty;
var N = (n, s, r) => s in n ? j(n, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[s] = r;
var S = (n, s, r) => (N(n, typeof s != "symbol" ? s + "" : s, r), r);
import { useNamespace as P, useCtx as z, withInstall as M } from "@ibiz-template/vue3-util";
import { FormMDCtrlRepeaterController as q, getDefaultValue as U, EditFormController as L, FormDetailEventName as X, registerFormDetailProvider as H } from "@ibiz-template/runtime";
import { createUUID as x } from "qx-util";
import { defineComponent as G, createVNode as i, createTextVNode as E, resolveComponent as h, getCurrentInstance as J, computed as Q, reactive as W, watch as Y, toRaw as Z, h as ee, isVNode as te } from "vue";
import { recursiveIterate as ne } from "@ibiz-template/core";
import I from "vuedraggable";
import { clone as re } from "ramda";
class O extends q {
  constructor() {
    super(...arguments);
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    S(this, "groupField", "is_group");
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    S(this, "parentField", "group_id");
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    S(this, "entityKey", "id");
    /**
     * 预置添加行为组
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    S(this, "presetAddAction", [
      { text: "添加步骤", value: "addSteps", icon: "add-outline" },
      { text: "添加分组", value: "addGroup", icon: "menu-outline" }
    ]);
    /**
     * 预置分组行为
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    S(this, "presetGroupActions", [
      {
        text: "向上添加步骤",
        value: "addTopStep",
        icon: "arrow-up-outline",
        allow: ["children"]
      },
      {
        text: "向下添加步骤",
        value: "addBottomStep",
        icon: "arrow-down-outline",
        allow: ["children"]
      },
      {
        text: "添加子步骤",
        value: "addChildrenStep",
        icon: "copy-outline",
        allow: ["group"]
      },
      {
        text: "复制",
        value: "copy",
        icon: "copy-outline",
        allow: ["group", "children"]
      },
      {
        text: "转换为分组",
        value: "transform",
        icon: "shuffle-outline",
        allow: []
      }
    ]);
  }
  /**
   * 处理添加行为组
   *
   * @param {string} value
   * @memberof RepeaterGridCaseStepsController
   */
  handleAddAction(r) {
    switch (r) {
      case "addSteps":
        this.create();
        break;
      case "addGroup":
        const e = x();
        this.insertValue({
          [this.groupField]: 1,
          [this.entityKey]: e
        }), this.insertValue({
          [this.parentField]: e,
          [this.entityKey]: x()
        });
        break;
    }
  }
  /**
   * 新建分组数据
   *
   * @memberof RepeaterGridCaseStepsController
   */
  insertValue(r, e) {
    let t = this.value;
    t = t ? [...t] : [], e !== void 0 ? t.splice(e, 0, r) : t.push(r), this.setValue(t);
  }
  /**
   * 获取分组行为
   *
   * @param {boolean} isGroup
   * @param {boolean} isChildren
   * @return {*}
   * @memberof RepeaterGridCaseStepsController
   */
  getActionsByType(r, e) {
    return r ? this.presetGroupActions.filter((t) => t.allow.includes("group")) : e ? this.presetGroupActions.filter((t) => t.allow.includes("children")) : this.presetGroupActions;
  }
  handleGroupAction(r) {
    const { actionType: e, index: t, row: u } = r;
    switch (e) {
      case "addTopStep":
        this.insertValue(
          {
            [this.parentField]: u[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          t
        );
        break;
      case "addBottomStep":
        this.insertValue(
          {
            [this.parentField]: u[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          t + 1
        );
        break;
      case "addChildrenStep":
        this.insertValue(
          {
            [this.parentField]: u[this.entityKey],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          t + 1
        );
        break;
      case "copy":
        this.handleCopy(r);
        break;
      case "transform":
        const c = x(), l = [...this.value];
        l[t][this.groupField] = 1, l[t][this.entityKey] = c, l[t].name = l[t].description, delete l[t].description, l.splice(t + 1, 0, {
          [this.parentField]: l[t][this.entityKey],
          [this.groupField]: 0,
          [this.entityKey]: x()
        }), this.setValue(l);
        break;
    }
  }
  /**
   * 处理拷贝
   *
   * @param {IData} item
   * @memberof RepeaterGridCaseStepsController
   */
  handleCopy(r) {
    const { index: e, row: t } = r, u = x();
    if (t[this.groupField]) {
      const c = t[this.entityKey], l = [...this.value], f = l.filter((v) => Object.is(v[this.parentField], c)).map((v) => ({
        ...v,
        [this.parentField]: u,
        [this.entityKey]: x()
      }));
      l.splice(
        e + 1 + f.length,
        0,
        { ...t, [this.entityKey]: u },
        ...f
      ), this.setValue(l);
    } else
      this.insertValue({ ...t, [this.entityKey]: u }, e + 1);
  }
  /**
   * 新建行数据（重写）
   *
   * @param {number} [index]
   * @memberof RepeaterGridCaseStepsController
   */
  create(r) {
    const e = this.calcDefaultValue({});
    if (this.isSingleData)
      this.setValue(e);
    else {
      let t = this.value;
      t = t ? [...t] : [], r !== void 0 ? t.splice(r, 0, e) : t.push(e), this.setValue(t);
    }
  }
  /**
   * 自定义删除
   *
   * @param {number} [index]
   * @return {*}  {void}
   * @memberof RepeaterGridCaseStepsController
   */
  remove(r) {
    if (this.isSingleData) {
      this.setValue(null);
      return;
    }
    const e = [...this.value], t = e[r];
    if (t[this.groupField] == 1) {
      const u = e.filter(
        (c) => Object.is(c[this.parentField], t[this.entityKey])
      );
      e.splice(r, u.length + 1), this.setValue(e);
    } else {
      const u = this.value.filter((c, l) => r !== l);
      this.setValue(u);
    }
  }
  /**
   * 计算新建默认值
   *
   * @param {IData} data
   * @return {*}  {IData}
   * @memberof RepeaterGridCaseStepsController
   */
  calcDefaultValue(r) {
    const e = {}, t = this.model.deformDetails || [];
    return Object.values(t).forEach((u) => {
      const { createDV: c, createDVT: l } = u, f = U(
        {
          name: "",
          valueType: l,
          defaultValue: c,
          valueFormat: u.valueFormat
        },
        { data: r, context: this.context, params: this.params }
      );
      f !== void 0 && (e[u.codeName] = f);
    }), e;
  }
  /**
   * 批量操作列数据
   *
   * @param {string} name
   * @param {string} value
   * @memberof RepeaterGridCaseStepsController
   */
  batchSetColumnData(r, e) {
    const t = [...this.value];
    this.setValue(
      t.map((u) => Object.assign(u, { [r]: e }))
    );
  }
}
class ie {
  constructor() {
    S(this, "component", "IBizRepeaterGridCaseSteps");
  }
  async createController(s, r, e) {
    const t = new O(s, r, e);
    return await t.init(), t;
  }
}
const A = /* @__PURE__ */ G({
  name: "CaseStepsCell",
  props: {
    width: {
      type: Number
    },
    align: {
      validator: (n) => ["left", "center", "right"].includes(n)
    }
  },
  setup() {
    return {
      ns: P("case-steps-cell")
    };
  },
  render() {
    var n, s;
    return i("div", {
      class: [this.ns.b(), this.ns.is("center", this.align === "center"), this.ns.is("left", this.align === "left"), this.ns.is("right", this.align === "right")],
      style: {
        width: "".concat(this.width, "px")
      }
    }, [(s = (n = this.$slots).default) == null ? void 0 : s.call(n)]);
  }
});
const oe = /* @__PURE__ */ G({
  name: "CaseStepsTable",
  components: {
    draggable: I
  },
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
    },
    operationsProps: {
      type: Object
    }
  },
  emits: {
    dragChange: (n) => !0
  },
  setup(n, {
    emit: s,
    slots: r
  }) {
    const e = P("case-steps-table");
    return {
      ns: e,
      onChange: (c) => {
        const l = re(n.data);
        if (c.moved) {
          const {
            oldIndex: f,
            newIndex: v
          } = c.moved, F = l[v], b = l.splice(f, 1);
          F.group_id ? b[0].group_id = F.group_id : delete b[0].group_id, l.splice(v, 0, ...b), s("dragChange", l);
        }
      },
      renderRows: (c, l) => {
        var f, v, F, b;
        return i("div", {
          class: [e.e("row"), e.is("group", c.is_group)],
          key: c.id
        }, [r.index && i(A, {
          class: e.em("cell", "index"),
          width: (f = n.indexProps) == null ? void 0 : f.width,
          align: (v = n.indexProps) == null ? void 0 : v.align
        }, {
          default: () => {
            var w;
            return [i(h("ion-icon"), {
              class: e.em("cell", "icon"),
              name: "menu-sharp"
            }, null), (w = r.index) == null ? void 0 : w.call(r, {
              $index: l
            })];
          }
        }), n.columns && n.columns.map((w) => {
          if (!w.hidden)
            return i(A, {
              key: c.id
            }, {
              default: () => {
                var B;
                return [(B = r[w.id]) == null ? void 0 : B.call(r, {
                  $index: l,
                  row: c
                })];
              }
            });
        }), r.operations && i(A, {
          class: e.em("cell", "operations"),
          width: (F = n.operationsProps) == null ? void 0 : F.width,
          align: (b = n.operationsProps) == null ? void 0 : b.align
        }, {
          default: () => {
            var w;
            return [(w = r.operations) == null ? void 0 : w.call(r, {
              $index: l,
              row: c
            })];
          }
        })]);
      }
    };
  },
  render() {
    var n, s, r, e;
    return i("div", {
      class: this.ns.b()
    }, [i("div", {
      class: this.ns.e("header")
    }, [i("div", {
      class: this.ns.e("row")
    }, [this.$slots.index && i(A, {
      class: this.ns.em("cell", "index"),
      width: (n = this.indexProps) == null ? void 0 : n.width,
      align: (s = this.indexProps) == null ? void 0 : s.align
    }, {
      default: () => [E("#")]
    }), this.columns && this.columns.map((t) => {
      if (t.hidden || !t.caption)
        return;
      const {
        width: u
      } = t, c = {};
      return u && (c.width = "".concat(u, "px"), c.flex = "none"), i(A, {
        style: c,
        align: "center"
      }, {
        default: () => [i("span", null, [t.caption])]
      });
    }), this.$slots.operations && i(A, {
      class: this.ns.em("cell", "operations"),
      width: (r = this.operationsProps) == null ? void 0 : r.width,
      align: (e = this.operationsProps) == null ? void 0 : e.align
    }, {
      default: () => [E("操作")]
    })])]), i("div", {
      class: this.ns.e("body")
    }, [i(I, {
      modelValue: this.data,
      itemKey: "step_id",
      "ghost-class": this.ns.em("row", "ghost"),
      "drag-class": this.ns.em("row", "drag"),
      "chosen-class": this.ns.em("row", "chosen"),
      "force-fallback": !0,
      handle: ".".concat(this.ns.em("cell", "icon")),
      onChange: (t) => this.onChange(t)
    }, {
      item: ({
        element: t,
        index: u
      }) => this.renderRows(t, u)
    })])]);
  }
});
function K(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !te(n);
}
const T = /* @__PURE__ */ G({
  name: "IBizRepeaterGridCaseSteps",
  props: {
    controller: {
      type: O,
      required: !0
    }
  },
  emits: {
    change: (n) => !0
  },
  setup(n) {
    const s = P("repeater-grid"), r = [], e = n.controller, t = J().proxy, u = Q(() => {
      const o = [];
      let a = 0, d = 0;
      return e.value && e.value.forEach((m, y) => {
        m[e.groupField] || !y || !m[e.parentField] ? (a++, d = 0, o.push("".concat(a))) : (d++, o.push("".concat(a, ".").concat(d)));
      }), o;
    });
    ne(n.controller.repeatedForm, (o) => {
      o.detailType === "FORMITEM" && r.push(o);
    }, {
      childrenFields: ["deformPages", "deformTabPages", "deformDetails"]
    });
    const c = (o, a) => {
      [...n.controller.value], t.$forceUpdate();
    }, l = z(), f = W([]), v = async (o, a = {}) => {
      const d = new L(n.controller.repeatedForm, n.controller.context, n.controller.params, l);
      d.state.isSimple = !0, await d.created(), d.setSimpleData(a), f.splice(o, 0, d), d.evt.on("onFormDataChange", (m) => {
        ({
          ...m.data[0]
        }, b(d)), c();
      }), d.evt.on("onFormDetailEvent", (m) => {
        const {
          formDetailEventName: y
        } = m;
        if (y === X.BLUR) {
          const p = {
            ...m.data[0]
          }, g = b(d), C = [...n.controller.value];
          C[g] = p, e.setValue(C);
        }
      });
    }, F = (o) => {
      const a = o[e.entityKey];
      return f.find((d) => d.state.data[e.entityKey] === a);
    }, b = (o) => (n.controller.value || []).findIndex((d) => o.state.data[e.entityKey] === d[e.entityKey]);
    Y(() => n.controller.value, (o) => {
      o && o.length > 0 && o.forEach((a, d) => {
        const m = F(a);
        if (m) {
          const y = a || {};
          Object.keys(m.data).find((g) => y[g] !== m.data[g]) && m.setSimpleData(y);
        } else
          v(d, a);
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const w = (o) => n.controller.enableDelete ? ibiz.config.form.mdCtrlConfirmBeforeRemove ? i(h("el-popconfirm"), {
      title: "是否删除选中项",
      "confirm-button-text": "确认",
      "cancel-button-text": "取消",
      onConfirm: () => n.controller.remove(o)
    }, {
      reference: () => i(h("el-button"), {
        text: !0,
        class: [s.be("index", "remove")]
      }, {
        default: () => [i(h("ion-icon"), {
          name: "trash-outline"
        }, null)]
      })
    }) : i(h("el-button"), {
      text: !0,
      class: [s.be("index", "remove")],
      onClick: () => n.controller.remove(o)
    }, {
      default: () => [i(h("ion-icon"), {
        name: "trash-outline"
      }, null)]
    }) : null, B = () => e.enableCreate ? i("div", {
      class: s.e("add-row")
    }, [i(h("ion-icon"), {
      class: s.e("add-icon"),
      name: "add-outline"
    }, null), i(h("el-dropdown"), {
      "popper-class": s.e("add-dropdown"),
      trigger: "click",
      "split-button": !0,
      type: "text",
      onCommand: (o) => {
        e.handleAddAction(o);
      },
      onClick: () => {
        e.create();
      }
    }, {
      default: () => i(h("el-button"), {
        class: s.e("add-btn"),
        text: !0
      }, {
        default: () => [E("添加步骤")]
      }),
      dropdown: () => {
        let o;
        return i(h("el-dropdown-menu"), null, K(o = e.presetAddAction.map((a) => i(h("el-dropdown-item"), {
          command: a.value
        }, {
          default: () => [i(h("ion-icon"), {
            class: s.e("add-dropdown-icon"),
            name: a.icon
          }, null), a.text]
        }))) ? o : {
          default: () => [o]
        });
      }
    })]) : null, _ = (o) => {
      if (!e.enableCreate)
        return null;
      const {
        row: a,
        $index: d
      } = o, m = a[e.groupField] == 1, y = !!a[e.parentField], p = e.getActionsByType(m, y) || [];
      return i(h("el-dropdown"), {
        "popper-class": s.be("action", "group"),
        trigger: "click",
        type: "text",
        onCommand: (g) => {
          e.handleGroupAction(g);
        }
      }, {
        default: () => i(h("el-button"), {
          text: !0
        }, {
          default: () => [i(h("ion-icon"), {
            name: "ellipsis-vertical-sharp"
          }, null)]
        }),
        dropdown: () => {
          let g;
          return i(h("el-dropdown-menu"), null, K(g = p.map((C) => i(h("el-dropdown-item"), {
            command: {
              actionType: C.value,
              index: d,
              row: a
            }
          }, {
            default: () => [i(h("ion-icon"), {
              class: s.e("add-dropdown-icon"),
              name: C.icon
            }, null), C.text]
          }))) ? g : {
            default: () => [g]
          });
        }
      });
    }, k = (o) => {
      const {
        editor: a
      } = o;
      return i(h("el-input"), {
        clearable: !0,
        "model-value": o.value,
        placeholder: a == null ? void 0 : a.model.placeHolder,
        type: "textarea",
        resize: "none",
        autosize: !0,
        onInput: (d) => {
          o.setDataValue(d);
        },
        onBlur: (d) => {
          o.onBlur(d);
        },
        class: s.b("input"),
        disabled: o.state.disabled
      }, null);
    };
    return {
      c: e,
      ns: s,
      formItems: r,
      formControllers: f,
      indexMap: u,
      renderRemoveBtn: w,
      renderAddRow: B,
      renderActions: _,
      renderContent: () => {
        const o = {};
        return r.forEach((a) => {
          a.hidden || (o[a.id] = (d) => {
            const {
              row: m
            } = d, y = Z(F(m));
            if (!y || !y.state.isLoaded)
              return i("div", null, [E("不存在或加载中")]);
            const p = y.formItems.find((R) => R.name === a.id);
            if (!p.state.visible)
              return null;
            const {
              width: g
            } = p.model, C = {};
            g && (C.width = "".concat(g, "px"), C.flex = "none");
            let V = null;
            if (!p.editorProvider)
              V = i(h("not-supported-editor"), {
                modelData: a.editor
              }, null);
            else if (a.editor && a.editor.editorType === "TEXTBOX")
              V = k(p);
            else {
              const R = h(p.editorProvider.formEditor);
              V = ee(R, {
                value: p.value,
                data: p.data,
                controller: p.editor,
                disabled: p.state.disabled,
                readonly: p.model.editor.readOnly,
                onChange: (D, $) => {
                  p.setDataValue(D, $);
                },
                onBlur: (D) => p.onBlur(D),
                onFocus: (D) => p.onFocus(D),
                onEnter: (D) => p.onEnter(D)
              });
            }
            return i(h("iBizGridEditItem"), {
              style: C,
              class: [...p.containerClass],
              error: p.state.error,
              required: p.state.required
            }, K(V) ? V : {
              default: () => [V]
            });
          });
        }), o;
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b(), this.ns.is("case-steps", !0)]
    }, [i(oe, {
      class: [this.ns.e("table"), this.ns.is("disabled", !this.controller.enableCreate && !this.controller.enableDelete)],
      model: this.c.model,
      data: this.controller.value,
      columns: this.formItems,
      indexProps: {
        width: 66,
        align: "center"
      },
      operationsProps: {
        width: 120,
        align: "center"
      },
      onDragChange: (n) => this.c.setValue(n)
    }, {
      index: (n) => {
        const {
          $index: s
        } = n;
        return i("span", null, [this.indexMap[s]]);
      },
      operations: (n) => {
        if (!this.controller.enableCreate && !this.controller.enableDelete)
          return null;
        const {
          $index: s
        } = n;
        return [this.renderRemoveBtn(s), this.renderActions(n)];
      },
      ...this.renderContent()
    }), this.renderAddRow()]);
  }
}), se = M(
  T,
  function(n) {
    n.component(T.name, T), H(
      "FORM_USERCONTROL_CASE_STEPS",
      () => new ie()
    );
  }
), ge = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(n) {
    n.use(se);
  }
};
export {
  se as IBizRepeaterGridCaseSteps,
  ge as default
};
