import './style.css';
var N = Object.defineProperty;
var z = (r, o, t) => o in r ? N(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var V = (r, o, t) => (z(r, typeof o != "symbol" ? o + "" : o, t), t);
import { useNamespace as T, useCtx as M, withInstall as q } from "@ibiz-template/vue3-util";
import { FormMDCtrlRepeaterController as U, isValueChange as O, getDefaultValue as L, EditFormController as X, FormDetailEventName as H, registerFormDetailProvider as J } from "@ibiz-template/runtime";
import { debounce as Q } from "lodash-es";
import { createUUID as x } from "qx-util";
import { defineComponent as I, createVNode as i, createTextVNode as E, resolveComponent as p, getCurrentInstance as W, computed as Y, reactive as Z, watch as ee, toRaw as te, h as ne, isVNode as re } from "vue";
import { recursiveIterate as ie } from "@ibiz-template/core";
import G from "vuedraggable";
import { clone as se } from "ramda";
class _ extends U {
  constructor() {
    super(...arguments);
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    V(this, "groupField", "is_group");
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    V(this, "parentField", "group_id");
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    V(this, "entityKey", "id");
    /**
     * 预置添加行为组
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    V(this, "presetAddAction", [
      { text: "添加步骤", value: "addSteps", icon: "add-outline" },
      { text: "添加分组", value: "addGroup", icon: "menu-outline" }
    ]);
    /**
     * 预置分组行为
     *
     * @type {IData[]}
     * @memberof RepeaterGridCaseStepsController
     */
    V(this, "presetGroupActions", [
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
  async onInit() {
    await super.onInit(), this.form.evt.on("onSaveSuccess", async () => {
      if (this.data.updatedate) {
        const e = this.data.updatedate[this.name];
        O(e, this.value) && this.save();
      }
    }), this.save = Q(this.save.bind(this), 1e3, {
      trailing: !0
    });
  }
  async save() {
    if (!this.form.model.enableAutoSave)
      return;
    const t = {
      silent: !0,
      noFillBack: !0,
      silentVerify: !0
    };
    this.form.save(t);
  }
  /**
   * @description 重写setValue，防止抖动
   * @param {(IData[] | IData | null)} value
   * @memberof RepeaterGridCaseStepsController
   */
  async setValue(t) {
    if (Object.prototype.hasOwnProperty.call(this.form.state.data, this.name) && !O(this.form.state.data[this.name], t))
      return;
    const e = this.form.state.data[this.name];
    this.form.state.data[this.name] = t, this.form.state.modified = !0, await this.form.evt.emit("onFormDataChange", {
      name: this.name,
      value: t,
      oldValue: e
    }), this.save();
  }
  /**
   * 处理添加行为组
   *
   * @param {string} value
   * @memberof RepeaterGridCaseStepsController
   */
  handleAddAction(t) {
    switch (t) {
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
  insertValue(t, e) {
    let n = this.value;
    n = n ? [...n] : [], e !== void 0 ? n.splice(e, 0, t) : n.push(t), this.setValue(n);
  }
  /**
   * 获取分组行为
   *
   * @param {boolean} isGroup
   * @param {boolean} isChildren
   * @return {*}
   * @memberof RepeaterGridCaseStepsController
   */
  getActionsByType(t, e) {
    return t ? this.presetGroupActions.filter((n) => n.allow.includes("group")) : e ? this.presetGroupActions.filter((n) => n.allow.includes("children")) : this.presetGroupActions;
  }
  handleGroupAction(t) {
    const { actionType: e, index: n, row: u } = t;
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
        this.handleCopy(t);
        break;
      case "transform":
        const c = x(), l = [...this.value];
        l[n][this.groupField] = 1, l[n][this.entityKey] = c, l[n].name = l[n].description, delete l[n].description, l.splice(n + 1, 0, {
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
  handleCopy(t) {
    const { index: e, row: n } = t, u = x();
    if (n[this.groupField]) {
      const c = n[this.entityKey], l = [...this.value], f = l.filter((v) => Object.is(v[this.parentField], c)).map((v) => ({
        ...v,
        [this.parentField]: u,
        [this.entityKey]: x()
      }));
      l.splice(
        e + 1 + f.length,
        0,
        { ...n, [this.entityKey]: u },
        ...f
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
  create(t) {
    const e = this.calcDefaultValue({});
    if (this.isSingleData)
      this.setValue(e);
    else {
      let n = this.value;
      n = n ? [...n] : [], t !== void 0 ? n.splice(t, 0, e) : n.push(e), this.setValue(n);
    }
  }
  /**
   * 自定义删除
   *
   * @param {number} [index]
   * @return {*}  {void}
   * @memberof RepeaterGridCaseStepsController
   */
  remove(t) {
    if (this.isSingleData) {
      this.setValue(null);
      return;
    }
    const e = [...this.value], n = e[t];
    if (n[this.groupField] == 1) {
      const u = e.filter(
        (c) => Object.is(c[this.parentField], n[this.entityKey])
      );
      e.splice(t, u.length + 1), this.setValue(e);
    } else {
      const u = this.value.filter((c, l) => t !== l);
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
  calcDefaultValue(t) {
    const e = {}, n = this.model.deformDetails || [];
    return Object.values(n).forEach((u) => {
      const { createDV: c, createDVT: l } = u, f = L(
        {
          name: "",
          valueType: l,
          defaultValue: c,
          valueFormat: u.valueFormat
        },
        { data: t, context: this.context, params: this.params }
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
  batchSetColumnData(t, e) {
    const n = [...this.value];
    this.setValue(
      n.map((u) => Object.assign(u, { [t]: e }))
    );
  }
}
class oe {
  constructor() {
    V(this, "component", "IBizRepeaterGridCaseSteps");
  }
  async createController(o, t, e) {
    const n = new _(o, t, e);
    return await n.init(), n;
  }
}
const A = /* @__PURE__ */ I({
  name: "CaseStepsCell",
  props: {
    width: {
      type: Number
    },
    align: {
      validator: (r) => ["left", "center", "right"].includes(r)
    }
  },
  setup() {
    return {
      ns: T("case-steps-cell")
    };
  },
  render() {
    var r, o;
    return i("div", {
      class: [this.ns.b(), this.ns.is("center", this.align === "center"), this.ns.is("left", this.align === "left"), this.ns.is("right", this.align === "right")],
      style: {
        width: "".concat(this.width, "px")
      }
    }, [(o = (r = this.$slots).default) == null ? void 0 : o.call(r)]);
  }
});
const ae = /* @__PURE__ */ I({
  name: "CaseStepsTable",
  components: {
    draggable: G
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
    dragChange: (r) => !0
  },
  setup(r, {
    emit: o,
    slots: t
  }) {
    const e = T("case-steps-table");
    return {
      ns: e,
      onChange: (c) => {
        const l = se(r.data);
        if (c.moved) {
          const {
            oldIndex: f,
            newIndex: v
          } = c.moved, F = l[v], C = l.splice(f, 1);
          F.group_id ? C[0].group_id = F.group_id : delete C[0].group_id, l.splice(v, 0, ...C), o("dragChange", l);
        }
      },
      renderRows: (c, l) => {
        var f, v, F, C;
        return i("div", {
          class: [e.e("row"), e.is("group", c.is_group)],
          key: c.id
        }, [t.index && i(A, {
          class: e.em("cell", "index"),
          width: (f = r.indexProps) == null ? void 0 : f.width,
          align: (v = r.indexProps) == null ? void 0 : v.align
        }, {
          default: () => {
            var w;
            return [i(p("ion-icon"), {
              class: e.em("cell", "icon"),
              name: "menu-sharp"
            }, null), (w = t.index) == null ? void 0 : w.call(t, {
              $index: l
            })];
          }
        }), r.columns && r.columns.map((w) => {
          if (!w.hidden)
            return i(A, {
              key: c.id
            }, {
              default: () => {
                var B;
                return [(B = t[w.id]) == null ? void 0 : B.call(t, {
                  $index: l,
                  row: c
                })];
              }
            });
        }), t.operations && i(A, {
          class: e.em("cell", "operations"),
          width: (F = r.operationsProps) == null ? void 0 : F.width,
          align: (C = r.operationsProps) == null ? void 0 : C.align
        }, {
          default: () => {
            var w;
            return [(w = t.operations) == null ? void 0 : w.call(t, {
              $index: l,
              row: c
            })];
          }
        })]);
      }
    };
  },
  render() {
    var r, o, t, e;
    return i("div", {
      class: this.ns.b()
    }, [i("div", {
      class: this.ns.e("header")
    }, [i("div", {
      class: this.ns.e("row")
    }, [this.$slots.index && i(A, {
      class: this.ns.em("cell", "index"),
      width: (r = this.indexProps) == null ? void 0 : r.width,
      align: (o = this.indexProps) == null ? void 0 : o.align
    }, {
      default: () => [E("#")]
    }), this.columns && this.columns.map((n) => {
      if (n.hidden || !n.caption)
        return;
      const {
        width: u
      } = n, c = {};
      return u && (c.width = "".concat(u, "px"), c.flex = "none"), i(A, {
        style: c,
        align: "center"
      }, {
        default: () => [i("span", null, [n.caption])]
      });
    }), this.$slots.operations && i(A, {
      class: this.ns.em("cell", "operations"),
      width: (t = this.operationsProps) == null ? void 0 : t.width,
      align: (e = this.operationsProps) == null ? void 0 : e.align
    }, {
      default: () => [E("操作")]
    })])]), i("div", {
      class: this.ns.e("body")
    }, [i(G, {
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
function R(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !re(r);
}
const K = /* @__PURE__ */ I({
  name: "IBizRepeaterGridCaseSteps",
  props: {
    controller: {
      type: _,
      required: !0
    }
  },
  emits: {
    change: (r) => !0
  },
  setup(r) {
    const o = T("repeater-grid"), t = [], e = r.controller, n = W().proxy, u = Y(() => {
      const s = [];
      let a = 0, d = 0;
      return e.value && e.value.forEach((m, y) => {
        m[e.groupField] || !y || !m[e.parentField] ? (a++, d = 0, s.push("".concat(a))) : (d++, s.push("".concat(a, ".").concat(d)));
      }), s;
    });
    ie(r.controller.repeatedForm, (s) => {
      s.detailType === "FORMITEM" && t.push(s);
    }, {
      childrenFields: ["deformPages", "deformTabPages", "deformDetails"]
    });
    const c = (s, a) => {
      [...r.controller.value], n.$forceUpdate();
    }, l = M(), f = Z([]), v = async (s, a = {}) => {
      const d = new X(r.controller.repeatedForm, r.controller.context, r.controller.params, l);
      d.state.isSimple = !0, await d.created(), d.setSimpleData(a), f.splice(s, 0, d), d.evt.on("onFormDataChange", (m) => {
        ({
          ...m.data[0]
        }, C(d)), c();
      }), d.evt.on("onFormDetailEvent", (m) => {
        const {
          formDetailEventName: y
        } = m;
        if (y === H.BLUR) {
          const h = {
            ...m.data[0]
          }, g = C(d), b = [...r.controller.value];
          b[g] = h, e.setValue(b);
        }
      });
    }, F = (s) => {
      const a = s[e.entityKey];
      return f.find((d) => d.state.data[e.entityKey] === a);
    }, C = (s) => (r.controller.value || []).findIndex((d) => s.state.data[e.entityKey] === d[e.entityKey]);
    ee(() => r.controller.value, (s) => {
      s && s.length > 0 && s.forEach((a, d) => {
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
    const w = (s) => r.controller.enableDelete ? ibiz.config.form.mdCtrlConfirmBeforeRemove ? i(p("el-popconfirm"), {
      title: "是否删除选中项",
      "confirm-button-text": "确认",
      "cancel-button-text": "取消",
      onConfirm: () => r.controller.remove(s)
    }, {
      reference: () => i(p("el-button"), {
        text: !0,
        class: [o.be("index", "remove")]
      }, {
        default: () => [i(p("ion-icon"), {
          name: "trash-outline"
        }, null)]
      })
    }) : i(p("el-button"), {
      text: !0,
      class: [o.be("index", "remove")],
      onClick: () => r.controller.remove(s)
    }, {
      default: () => [i(p("ion-icon"), {
        name: "trash-outline"
      }, null)]
    }) : null, B = () => e.enableCreate ? i("div", {
      class: o.e("add-row")
    }, [i(p("ion-icon"), {
      class: o.e("add-icon"),
      name: "add-outline"
    }, null), i(p("el-dropdown"), {
      "popper-class": o.e("add-dropdown"),
      trigger: "click",
      "split-button": !0,
      type: "text",
      onCommand: (s) => {
        e.handleAddAction(s);
      },
      onClick: () => {
        e.create();
      }
    }, {
      default: () => i(p("el-button"), {
        class: o.e("add-btn"),
        text: !0
      }, {
        default: () => [E("添加步骤")]
      }),
      dropdown: () => {
        let s;
        return i(p("el-dropdown-menu"), null, R(s = e.presetAddAction.map((a) => i(p("el-dropdown-item"), {
          command: a.value
        }, {
          default: () => [i(p("ion-icon"), {
            class: o.e("add-dropdown-icon"),
            name: a.icon
          }, null), a.text]
        }))) ? s : {
          default: () => [s]
        });
      }
    })]) : null, k = (s) => {
      if (!e.enableCreate)
        return null;
      const {
        row: a,
        $index: d
      } = s, m = a[e.groupField] == 1, y = !!a[e.parentField], h = e.getActionsByType(m, y) || [];
      return i(p("el-dropdown"), {
        "popper-class": o.be("action", "group"),
        trigger: "click",
        type: "text",
        onCommand: (g) => {
          e.handleGroupAction(g);
        }
      }, {
        default: () => i(p("el-button"), {
          text: !0
        }, {
          default: () => [i(p("ion-icon"), {
            name: "ellipsis-vertical-sharp"
          }, null)]
        }),
        dropdown: () => {
          let g;
          return i(p("el-dropdown-menu"), null, R(g = h.map((b) => i(p("el-dropdown-item"), {
            command: {
              actionType: b.value,
              index: d,
              row: a
            }
          }, {
            default: () => [i(p("ion-icon"), {
              class: o.e("add-dropdown-icon"),
              name: b.icon
            }, null), b.text]
          }))) ? g : {
            default: () => [g]
          });
        }
      });
    }, j = (s) => {
      const {
        editor: a
      } = s;
      return i(p("el-input"), {
        clearable: !0,
        "model-value": s.value,
        placeholder: a == null ? void 0 : a.model.placeHolder,
        type: "textarea",
        resize: "none",
        autosize: !0,
        onInput: (d) => {
          s.setDataValue(d);
        },
        onBlur: (d) => {
          s.onBlur(d);
        },
        class: o.b("input"),
        disabled: s.state.disabled
      }, null);
    };
    return {
      c: e,
      ns: o,
      formItems: t,
      formControllers: f,
      indexMap: u,
      renderRemoveBtn: w,
      renderAddRow: B,
      renderActions: k,
      renderContent: () => {
        const s = {};
        return t.forEach((a) => {
          a.hidden || (s[a.id] = (d) => {
            const {
              row: m
            } = d, y = te(F(m));
            if (!y || !y.state.isLoaded)
              return i("div", null, [E("不存在或加载中")]);
            const h = y.formItems.find((P) => P.name === a.id);
            if (!h.state.visible)
              return null;
            const {
              width: g
            } = h.model, b = {};
            g && (b.width = "".concat(g, "px"), b.flex = "none");
            let S = null;
            if (!h.editorProvider)
              S = i(p("not-supported-editor"), {
                modelData: a.editor
              }, null);
            else if (a.editor && a.editor.editorType === "TEXTBOX")
              S = j(h);
            else {
              const P = p(h.editorProvider.formEditor);
              S = ne(P, {
                value: h.value,
                data: h.data,
                controller: h.editor,
                disabled: h.state.disabled,
                readonly: h.model.editor.readOnly,
                onChange: (D, $) => {
                  h.setDataValue(D, $);
                },
                onBlur: (D) => h.onBlur(D),
                onFocus: (D) => h.onFocus(D),
                onEnter: (D) => h.onEnter(D)
              });
            }
            return i(p("iBizGridEditItem"), {
              style: b,
              class: [...h.containerClass],
              error: h.state.error,
              required: h.state.required
            }, R(S) ? S : {
              default: () => [S]
            });
          });
        }), s;
      }
    };
  },
  render() {
    return i("div", {
      class: [this.ns.b(), this.ns.is("case-steps", !0)]
    }, [i(ae, {
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
      onDragChange: (r) => this.c.setValue(r)
    }, {
      index: (r) => {
        const {
          $index: o
        } = r;
        return i("span", null, [this.indexMap[o]]);
      },
      operations: (r) => {
        if (!this.controller.enableCreate && !this.controller.enableDelete)
          return null;
        const {
          $index: o
        } = r;
        return [this.renderRemoveBtn(o), this.renderActions(r)];
      },
      ...this.renderContent()
    }), this.renderAddRow()]);
  }
}), le = q(
  K,
  function(r) {
    r.component(K.name, K), J(
      "FORM_USERCONTROL_CASE_STEPS",
      () => new oe()
    );
  }
), we = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(r) {
    r.use(le);
  }
};
export {
  le as IBizRepeaterGridCaseSteps,
  we as default
};
