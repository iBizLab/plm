import './style.css';
var k = Object.defineProperty;
var j = (t, s, r) => s in t ? k(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[s] = r;
var F = (t, s, r) => (j(t, typeof s != "symbol" ? s + "" : s, r), r);
import { useNamespace as K, useCtx as $, withInstall as N } from "@ibiz-template/vue3-util";
import { FormMDCtrlRepeaterController as z, getDefaultValue as M, EditFormController as q, FormDetailEventName as U, registerFormDetailProvider as L } from "@ibiz-template/runtime";
import { createUUID as x } from "qx-util";
import { defineComponent as T, createVNode as i, createTextVNode as A, resolveComponent as c, getCurrentInstance as X, computed as H, reactive as J, watch as Q, toRaw as W, h as Y, isVNode as Z } from "vue";
import { recursiveIterate as ee } from "@ibiz-template/core";
import E from "vuedraggable";
import { clone as te } from "ramda";
class P extends z {
  constructor() {
    super(...arguments);
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    F(this, "groupField", "is_group");
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    F(this, "parentField", "group_id");
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    F(this, "entityKey", "id");
    /**
     * 预置添加行为组
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    F(this, "presetAddAction", [
      { text: "添加步骤", value: "addSteps", icon: "add-outline" },
      { text: "添加分组", value: "addGroup", icon: "menu-outline" }
    ]);
    /**
     * 预置分组行为
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    F(this, "presetGroupActions", [
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
    let n = this.value;
    n = n ? [...n] : [], e !== void 0 ? n.splice(e, 0, r) : n.push(r), this.setValue(n);
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
    return r ? this.presetGroupActions.filter((n) => n.allow.includes("group")) : e ? this.presetGroupActions.filter((n) => n.allow.includes("children")) : this.presetGroupActions;
  }
  handleGroupAction(r) {
    const { actionType: e, index: n, row: u } = r;
    switch (e) {
      case "addTopStep":
        this.insertValue(
          {
            [this.parentField]: u[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          n
        );
        break;
      case "addBottomStep":
        this.insertValue(
          {
            [this.parentField]: u[this.parentField],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          n + 1
        );
        break;
      case "addChildrenStep":
        this.insertValue(
          {
            [this.parentField]: u[this.entityKey],
            [this.groupField]: 0,
            [this.entityKey]: x()
          },
          n + 1
        );
        break;
      case "copy":
        this.handleCopy(r);
        break;
      case "transform":
        const p = x(), l = [...this.value];
        l[n][this.groupField] = 1, l[n][this.entityKey] = p, l[n].name = l[n].description, delete l[n].description, l.splice(n + 1, 0, {
          [this.parentField]: l[n][this.entityKey],
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
    const { index: e, row: n } = r, u = x();
    if (n[this.groupField]) {
      const p = n[this.entityKey], l = [...this.value], g = l.filter((v) => Object.is(v[this.parentField], p)).map((v) => ({
        ...v,
        [this.parentField]: u,
        [this.entityKey]: x()
      }));
      l.splice(
        e + 1 + g.length,
        0,
        { ...n, [this.entityKey]: u },
        ...g
      ), this.setValue(l);
    } else
      this.insertValue({ ...n, [this.entityKey]: u }, e + 1);
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
      let n = this.value;
      n = n ? [...n] : [], r !== void 0 ? n.splice(r, 0, e) : n.push(e), this.setValue(n);
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
    const e = [...this.value], n = e[r];
    if (n[this.groupField] == 1) {
      const u = e.filter(
        (p) => Object.is(p[this.parentField], n[this.entityKey])
      );
      e.splice(r, u.length + 1), this.setValue(e);
    } else {
      const u = this.value.filter((p, l) => r !== l);
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
    const e = {}, n = this.model.deformDetails || [];
    return Object.values(n).forEach((u) => {
      const { createDV: p, createDVT: l } = u, g = M(
        {
          name: "",
          valueType: l,
          defaultValue: p,
          valueFormat: u.valueFormat
        },
        { data: r, context: this.context, params: this.params }
      );
      g !== void 0 && (e[u.codeName] = g);
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
    const n = [...this.value];
    this.setValue(
      n.map((u) => Object.assign(u, { [r]: e }))
    );
  }
}
class ne {
  constructor() {
    F(this, "component", "IBizRepeaterGridCaseSteps");
  }
  async createController(s, r, e) {
    const n = new P(s, r, e);
    return await n.init(), n;
  }
}
const S = /* @__PURE__ */ T({
  name: "CaseStepsCell",
  props: {
    width: {
      type: Number
    },
    align: {
      validator: (t) => ["left", "center", "right"].includes(t)
    }
  },
  setup() {
    return {
      ns: K("case-steps-cell")
    };
  },
  render() {
    var t, s;
    return i("div", {
      class: [this.ns.b(), this.ns.is("center", this.align === "center"), this.ns.is("left", this.align === "left"), this.ns.is("right", this.align === "right")],
      style: {
        width: "".concat(this.width, "px")
      }
    }, [(s = (t = this.$slots).default) == null ? void 0 : s.call(t)]);
  }
});
const re = /* @__PURE__ */ T({
  name: "CaseStepsTable",
  components: {
    draggable: E
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
    dragChange: (t) => !0
  },
  setup(t, {
    emit: s,
    slots: r
  }) {
    const e = K("case-steps-table");
    return {
      ns: e,
      onChange: (p) => {
        const l = te(t.data);
        if (p.moved) {
          const {
            oldIndex: g,
            newIndex: v
          } = p.moved, D = l[v], b = l.splice(g, 1);
          D.group_id ? b[0].group_id = D.group_id : delete b[0].group_id, l.splice(v, 0, ...b), s("dragChange", l);
        }
      },
      renderRows: (p, l) => {
        var g, v, D, b;
        return i("div", {
          class: [e.e("row"), e.is("group", p.is_group)],
          key: p.id
        }, [r.index && i(S, {
          class: e.em("cell", "index"),
          width: (g = t.indexProps) == null ? void 0 : g.width,
          align: (v = t.indexProps) == null ? void 0 : v.align
        }, {
          default: () => {
            var w;
            return [i(c("ion-icon"), {
              class: e.em("cell", "icon"),
              name: "menu-sharp"
            }, null), (w = r.index) == null ? void 0 : w.call(r, {
              $index: l
            })];
          }
        }), t.columns && t.columns.map((w) => {
          if (!w.hidden)
            return i(S, {
              key: p.id
            }, {
              default: () => {
                var V;
                return [(V = r[w.id]) == null ? void 0 : V.call(r, {
                  $index: l,
                  row: p
                })];
              }
            });
        }), r.operations && i(S, {
          class: e.em("cell", "operations"),
          width: (D = t.operationsProps) == null ? void 0 : D.width,
          align: (b = t.operationsProps) == null ? void 0 : b.align
        }, {
          default: () => {
            var w;
            return [(w = r.operations) == null ? void 0 : w.call(r, {
              $index: l,
              row: p
            })];
          }
        })]);
      }
    };
  },
  render() {
    var t, s, r, e;
    return i("div", {
      class: this.ns.b()
    }, [i("div", {
      class: this.ns.e("header")
    }, [i("div", {
      class: this.ns.e("row")
    }, [this.$slots.index && i(S, {
      class: this.ns.em("cell", "index"),
      width: (t = this.indexProps) == null ? void 0 : t.width,
      align: (s = this.indexProps) == null ? void 0 : s.align
    }, {
      default: () => [A("#")]
    }), this.columns && this.columns.map((n) => {
      if (!(n.hidden || !n.caption))
        return i(S, {
          align: "center"
        }, {
          default: () => [i("span", null, [n.caption])]
        });
    }), this.$slots.operations && i(S, {
      class: this.ns.em("cell", "operations"),
      width: (r = this.operationsProps) == null ? void 0 : r.width,
      align: (e = this.operationsProps) == null ? void 0 : e.align
    }, {
      default: () => [A("操作")]
    })])]), i("div", {
      class: this.ns.e("body")
    }, [i(E, {
      modelValue: this.data,
      itemKey: "step_id",
      "ghost-class": this.ns.em("row", "ghost"),
      "drag-class": this.ns.em("row", "drag"),
      "chosen-class": this.ns.em("row", "chosen"),
      "force-fallback": !0,
      handle: ".".concat(this.ns.em("cell", "icon")),
      onChange: (n) => this.onChange(n)
    }, {
      item: ({
        element: n,
        index: u
      }) => this.renderRows(n, u)
    })])]);
  }
});
function R(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Z(t);
}
const B = /* @__PURE__ */ T({
  name: "IBizRepeaterGridCaseSteps",
  props: {
    controller: {
      type: P,
      required: !0
    }
  },
  emits: {
    change: (t) => !0
  },
  setup(t) {
    const s = K("repeater-grid"), r = [], e = t.controller, n = X().proxy, u = H(() => {
      const o = [];
      let a = 0, d = 0;
      return e.value && e.value.forEach((f, y) => {
        f[e.groupField] || !y || !f[e.parentField] ? (a++, d = 0, o.push("".concat(a))) : (d++, o.push("".concat(a, ".").concat(d)));
      }), o;
    });
    ee(t.controller.repeatedForm, (o) => {
      o.detailType === "FORMITEM" && r.push(o);
    }, {
      childrenFields: ["deformPages", "deformTabPages", "deformDetails"]
    });
    const p = (o, a) => {
      [...t.controller.value], n.$forceUpdate();
    }, l = $(), g = J([]), v = async (o, a = {}) => {
      const d = new q(t.controller.repeatedForm, t.controller.context, t.controller.params, l);
      d.state.isSimple = !0, await d.created(), d.setSimpleData(a), g.splice(o, 0, d), d.evt.on("onFormDataChange", (f) => {
        ({
          ...f.data[0]
        }, b(d)), p();
      }), d.evt.on("onFormDetailEvent", (f) => {
        const {
          formDetailEventName: y
        } = f;
        if (y === U.BLUR) {
          const h = {
            ...f.data[0]
          }, m = b(d), C = [...t.controller.value];
          C[m] = h, e.setValue(C);
        }
      });
    }, D = (o) => {
      const a = o[e.entityKey];
      return g.find((d) => d.state.data[e.entityKey] === a);
    }, b = (o) => (t.controller.value || []).findIndex((d) => o.state.data[e.entityKey] === d[e.entityKey]);
    Q(() => t.controller.value, (o) => {
      o && o.length > 0 && o.forEach((a, d) => {
        const f = D(a);
        if (f) {
          const y = a || {};
          Object.keys(f.data).find((m) => y[m] !== f.data[m]) && f.setSimpleData(y);
        } else
          v(d, a);
      });
    }, {
      immediate: !0,
      deep: !0
    });
    const w = (o) => t.controller.enableDelete ? ibiz.config.form.mdCtrlConfirmBeforeRemove ? i(c("el-popconfirm"), {
      title: "是否删除选中项",
      "confirm-button-text": "确认",
      "cancel-button-text": "取消",
      onConfirm: () => t.controller.remove(o)
    }, {
      reference: () => i(c("el-button"), {
        text: !0,
        class: [s.be("index", "remove")]
      }, {
        default: () => [i(c("ion-icon"), {
          name: "trash-outline"
        }, null)]
      })
    }) : i(c("el-button"), {
      text: !0,
      class: [s.be("index", "remove")],
      onClick: () => t.controller.remove(o)
    }, {
      default: () => [i(c("ion-icon"), {
        name: "trash-outline"
      }, null)]
    }) : null, V = () => e.enableCreate ? i("div", {
      class: s.e("add-row")
    }, [i(c("ion-icon"), {
      class: s.e("add-icon"),
      name: "add-outline"
    }, null), i(c("el-dropdown"), {
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
      default: () => i(c("el-button"), {
        class: s.e("add-btn"),
        text: !0
      }, {
        default: () => [A("添加步骤")]
      }),
      dropdown: () => {
        let o;
        return i(c("el-dropdown-menu"), null, R(o = e.presetAddAction.map((a) => i(c("el-dropdown-item"), {
          command: a.value
        }, {
          default: () => [i(c("ion-icon"), {
            class: s.e("add-dropdown-icon"),
            name: a.icon
          }, null), a.text]
        }))) ? o : {
          default: () => [o]
        });
      }
    })]) : null, G = (o) => {
      if (!e.enableCreate)
        return null;
      const {
        row: a,
        $index: d
      } = o, f = a[e.groupField] == 1, y = !!a[e.parentField], h = e.getActionsByType(f, y) || [];
      return i(c("el-dropdown"), {
        "popper-class": s.be("action", "group"),
        trigger: "click",
        type: "text",
        onCommand: (m) => {
          e.handleGroupAction(m);
        }
      }, {
        default: () => i(c("el-button"), {
          text: !0
        }, {
          default: () => [i(c("ion-icon"), {
            name: "ellipsis-vertical-sharp"
          }, null)]
        }),
        dropdown: () => {
          let m;
          return i(c("el-dropdown-menu"), null, R(m = h.map((C) => i(c("el-dropdown-item"), {
            command: {
              actionType: C.value,
              index: d,
              row: a
            }
          }, {
            default: () => [i(c("ion-icon"), {
              class: s.e("add-dropdown-icon"),
              name: C.icon
            }, null), C.text]
          }))) ? m : {
            default: () => [m]
          });
        }
      });
    }, I = (o) => {
      const {
        editor: a
      } = o;
      return i(c("el-input"), {
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
      formControllers: g,
      indexMap: u,
      renderRemoveBtn: w,
      renderAddRow: V,
      renderActions: G,
      renderContent: () => {
        const o = {};
        return r.forEach((a) => {
          a.hidden || (o[a.id] = (d) => {
            const {
              row: f
            } = d, y = W(D(f));
            if (!y || !y.state.isLoaded)
              return i("div", null, [A("不存在或加载中")]);
            const h = y.formItems.find((C) => C.name === a.id);
            if (!h.state.visible)
              return null;
            let m = null;
            if (!h.editorProvider)
              m = i(c("not-supported-editor"), {
                modelData: a.editor
              }, null);
            else if (a.editor && a.editor.editorType === "TEXTBOX")
              m = I(h);
            else {
              const C = c(h.editorProvider.formEditor);
              m = Y(C, {
                value: h.value,
                data: h.data,
                controller: h.editor,
                disabled: h.state.disabled,
                readonly: h.model.editor.readOnly,
                onChange: (O, _) => {
                  h.setDataValue(O, _);
                }
              });
            }
            return i(c("iBizGridEditItem"), {
              class: [...h.containerClass],
              error: h.state.error,
              required: h.state.required
            }, R(m) ? m : {
              default: () => [m]
            });
          });
        }), o;
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b(), this.ns.is("case-steps", !0)]
    }, [i(re, {
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
      onDragChange: (t) => this.c.setValue(t)
    }, {
      index: (t) => {
        const {
          $index: s
        } = t;
        return i("span", null, [this.indexMap[s]]);
      },
      operations: (t) => {
        if (!this.controller.enableCreate && !this.controller.enableDelete)
          return null;
        const {
          $index: s
        } = t;
        return [this.renderRemoveBtn(s), this.renderActions(t)];
      },
      ...this.renderContent()
    }), this.renderAddRow()]);
  }
}), ie = N(
  B,
  function(t) {
    t.component(B.name, B), L(
      "FORM_USERCONTROL_CASE_STEPS",
      () => new ne()
    );
  }
), me = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(t) {
    t.use(ie);
  }
};
export {
  ie as IBizRepeaterGridCaseSteps,
  me as default
};
