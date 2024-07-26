import './style.css';
var F = Object.defineProperty;
var S = (s, l, i) => l in s ? F(s, l, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[l] = i;
var b = (s, l, i) => (S(s, typeof l != "symbol" ? l + "" : l, i), i);
import { useNamespace as I, useClickOutside as D, useControlController as x, withInstall as k } from "@ibiz-template/vue3-util";
import { EditFormController as z, convertNavData as M, EditFormService as O, getEntitySchema as B, registerControlProvider as T } from "@ibiz-template/runtime";
import { ref as g, reactive as w, defineComponent as P, watch as A, onMounted as j, onUnmounted as N, createVNode as d, nextTick as L, resolveComponent as R, h as V } from "vue";
import { debounce as _ } from "lodash-es";
import { clone as q } from "ramda";
class H {
  constructor() {
    b(this, "component", "IBizProjectAttributes");
  }
}
class U extends z {
  constructor() {
    super(...arguments);
    /**
     * jsonschema参数
     *
     * @author zhanghengfeng
     * @date 2024-07-05 15:07:47
     * @type {IParams}
     */
    b(this, "jsonSchemaParams", {});
    // 计算表单模型
    b(this, "calcFormDetail", (i) => {
      let r = "span";
      i.type === "string" ? r = "TEXTBOX" : i.type === "number" ? r = "NUMBER" : i.type === "picker" ? r = "MDROPDOWNLIST" : i.type === "date" && (r = "DATEPICKER");
      const e = {
        allowEmpty: !0,
        appDEFieldId: i.key,
        appId: ibiz.env.appId,
        capLanguageRes: { lanResTag: "DEF.LNAME.ID", appId: ibiz.env.appId },
        caption: i.description,
        codeName: i.key,
        dataType: 25,
        detailStyle: "DEFAULT",
        detailType: "FORMITEM",
        editor: {
          style: {},
          appId: ibiz.env.appId,
          editable: !0,
          editorType: r,
          halign: "LEFT",
          id: i.key,
          valign: "MIDDLE",
          valueType: "SIMPLE",
          wrapMode: "NOWRAP"
        },
        enableCond: 3,
        id: i.key,
        labelPos: "LEFT",
        labelWidth: 130,
        layoutPos: { colMD: 24, layout: "TABLE_24COL", appId: ibiz.env.appId },
        noPrivDisplayMode: 1,
        showCaption: !0
      };
      return i.type === "picker" && (Object.assign(e.editor, {
        appCodeListId: i.codelistId,
        valueItemName: i.key
      }), i.codelistId && Object.assign(e.editor, {
        appCodeListId: i.codelistId
      })), e;
    });
    // 扩展属性
    b(this, "addAttributes", g([]));
    // 扩展属性模型
    b(this, "addAttributesFormDetail", []);
  }
  /**
   * 初始化方法
   *
   * @author lxm
   * @date 2022-08-22 22:08:16
   * @protected
   * @returns {*}  {Promise<void>}
   */
  async onCreated() {
    const i = JSON.parse(
      this.controlParams.jsonschemaparams || "{}"
    );
    this.jsonSchemaParams = M(
      i,
      this.params,
      this.context
    ), await this.initByEntitySchema(), this.model.deformPages && this.model.deformPages[0] && this.addAttributesFormDetail.forEach((r) => {
      var e;
      (e = this.model.deformPages[0].deformDetails) == null || e.push(r);
    }), await super.onCreated(), this.service = new O(this.model), await this.service.init(this.context), this.autoSave = _(this.autoSave.bind(this), 500, {
      trailing: !0
    });
  }
  async onMounted() {
    await super.onMounted(), !this.state.isSimple && this.state.loadDefault && this.load();
  }
  async calcColumnModelBySchema(i, r) {
    var p;
    if (!i.properties)
      return;
    const { properties: e } = i;
    if (!(Object.keys(e).length > 0))
      return;
    const c = {};
    (p = (await ibiz.hub.getAppDataEntity(
      r.model.appDataEntityId,
      r.model.appId
    )).appDEFields) == null || p.forEach((t) => {
      c[t.codeName.toLowerCase()] = t.id;
    });
    const v = [];
    return Object.keys(e).forEach((t) => {
      if (!c[t]) {
        let o;
        switch (e[t].type) {
          case "string":
            o = "string", e[t].format === "date-time" && (o = "date");
            break;
          case "integer":
            o = "integer";
            break;
          case "number":
            o = "number";
            break;
          default:
            ibiz.log.error(
              ibiz.i18n.t("runtime.controller.control.grid.unsupported", {
                type: e[t].type
              })
            );
            return;
        }
        v.push({
          key: t,
          description: e[t].description || e[t].key,
          type: o,
          ref: w({ isFocus: !0 }),
          codelistId: e[t].enumSource ? e[t].enumSource : ""
        });
      }
    }), v;
  }
  /**
   * 根据jsonschema初始化自定义表格列
   * @author lxm
   * @date 2024-01-02 04:41:23
   * @return {*}  {Promise<void>}
   */
  async initByEntitySchema() {
    const i = q(this.jsonSchemaParams);
    Object.assign(i, this.params);
    const r = await B(
      this.model.appDataEntityId,
      this.context,
      i
    );
    if (!r)
      return;
    const e = await this.calcColumnModelBySchema(r, this);
    e.length && (this.addAttributes.value = e, this.addAttributes.value.forEach((c) => {
      this.addAttributesFormDetail.push(this.calcFormDetail(c));
    }));
  }
}
const W = /* @__PURE__ */ P({
  name: "AutoInput",
  props: {
    controller: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    },
    emit: {
      // eslint-disable-next-line @typescript-eslint/ban-types
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const l = I("project-attributes-input"), i = s.controller, r = g(""), e = g(!1), c = g();
    A(() => i.state.data, (a) => {
      if (a)
        for (const m in a)
          i.addAttributes.find((y) => y.key === m) && (r.value = a[m]);
    }, {
      immediate: !0
    });
    const h = g(), v = (a) => {
      a.stopPropagation(), e.value = !0, L(() => {
        c.value && c.value.focus();
      });
    }, p = (a) => {
      a.stopPropagation(), e.value = !1;
    }, t = () => d("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [d("g", {
      id: "aizaction/edit",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [d("path", {
      d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
      id: "aiz编辑"
    }, null)])]), o = (a) => {
      r.value = a.target.value;
      const m = i.formItems.find((f) => f.name === s.item.key);
      m && (a.target.value ? m.setDataValue(a.target.value, s.item.key) : m.setDataValue(null, s.item.key));
    };
    let n;
    return j(() => {
      h.value && (n = D(h, async (a) => {
        h.value && (e.value = !1);
      }));
    }), N(() => {
      n && n.stop && n.stop();
    }), {
      ns: l,
      c: i,
      startEdit: v,
      stopEdit: p,
      text: r,
      isEditing: e,
      change: o,
      componentRef: h,
      editSvg: t,
      inputRef: c
    };
  },
  render() {
    return d("div", {
      ref: "componentRef",
      class: [this.ns.b(), this.isEditing ? "edit" : ""]
    }, [this.isEditing ? d("input", {
      ref: "inputRef",
      type: "text",
      value: this.text,
      autofocus: !0,
      tabindex: "0",
      onChange: this.change,
      onBlur: (s) => this.stopEdit(s)
    }, null) : d("div", {
      class: this.ns.e("text"),
      onClick: (s) => this.startEdit(s)
    }, [this.text]), d("div", {
      class: this.ns.e("item-edit-svg"),
      onClick: (s) => this.startEdit(s)
    }, [this.editSvg()])]);
  }
}), E = /* @__PURE__ */ P({
  name: "IBizProjectAttributes",
  component: [W],
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
    isSimple: {
      type: Boolean,
      required: !1
    },
    data: {
      type: Object,
      required: !1
    },
    loadDefault: {
      type: Boolean,
      default: !0
    }
  },
  setup(s, {
    emit: l
  }) {
    const i = I("project-attributes"), r = [], e = x((...t) => new U(...t), {
      excludePropsKeys: ["data"]
    });
    s.isSimple && (e.evt.on("onMounted", () => {
      e.setSimpleData(s.data || {});
    }), A(() => s.data, (t) => {
      const o = t || {};
      Object.keys(e.data).find((a) => o[a] !== e.data[a]) && e.setSimpleData(o);
    }, {
      deep: !0
    })), e.evt.on("onCreated", () => {
      Object.keys(e.details).forEach((o) => {
        const n = e.details[o];
        n.state = w(n.state);
      });
    });
    const c = (t, o, n) => {
      const a = n || o;
      e.setDataValue(a, t);
    }, h = (t) => {
      let o = null;
      const n = {};
      t.type === "string" ? n.autofocus = !0 : t.type === "number" && (n.controlsPosition = "right", n.controls = !0);
      const a = e.formItems.find((u) => u.name === t.key);
      if (!a)
        return;
      const m = {
        value: a.value,
        data: a.data,
        controller: a.editor,
        disabled: a.state.disabled,
        readonly: t.ref.isFocus,
        onChange: (u, C) => c(u, t.key, C),
        controlParams: a.form.controlParams,
        onFocus: (u) => {
          a.onFocus(u);
        },
        onBlur: (u) => {
          a.onBlur(u);
        },
        onEnter: (u) => a.onEnter(u),
        ...n
      };
      let f = "";
      t.type === "string" ? f = "IBizInput" : t.type === "number" ? f = "IBizInputNumber" : t.type === "picker" ? f = "IBizDropdown" : t.type === "date" && (f = "IBizDatePicker");
      const y = R(f);
      return o = V(y, {
        ...m
      }), o;
    }, v = () => d("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [d("g", {
      id: "aizaction/edit",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [d("path", {
      d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
      id: "aiz编辑"
    }, null)])]), p = g();
    return j(() => {
      D(p, async (t) => {
        if (t && t.target) {
          if (t.target.tagName.toLowerCase() === "input" || t.target.tagName.toLowerCase() === "svg" || t.target.className === "ibiz-dropdown-select-option-content" || t.target.className === "el-date-table-cell__text")
            return;
          let {
            id: o
          } = t.target.parentElement, n = e.addAttributes.value.find((a) => a.key === o);
          t.target.className === "ibiz-project-attributes__item-edit" && (o = t.target.id, n = e.addAttributes.value.find((a) => a.key === o)), n ? (e.addAttributes.value.forEach((a) => {
            a.ref.isFocus = !0;
          }), n.ref.isFocus = !1) : p.value.contains(t.target) || e.addAttributes.value.forEach((a) => {
            a.ref.isFocus = !0;
          });
        }
      });
    }), {
      c: e,
      ns: i,
      formItems: r,
      emit: l,
      renderEditor: h,
      editSvg: v,
      pxx: p
    };
  },
  render() {
    return d("div", {
      class: this.ns.b()
    }, [this.c.addAttributes.value.length > 0 && this.c.addAttributes.value.map((s) => d("div", {
      class: this.ns.e("item")
    }, [d("div", {
      class: this.ns.e("item-text")
    }, [s.description]), d("div", {
      class: [this.ns.e("item-edit"), s.ref.isFocus ? "" : "edit"],
      id: s.key
    }, [this.renderEditor(s), d("div", {
      class: this.ns.e("item-edit-svg")
    }, [this.editSvg()])])])), d("div", {
      ref: "pxx"
    }, null)]);
  }
}), J = k(
  E,
  // eslint-disable-next-line func-names
  function(s) {
    s.component(E.name, E), T(
      "EDITFORM_RENDER_PROJECT_ATTRIBUTES",
      () => new H()
    );
  }
), $ = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(J);
  }
};
export {
  J as IBizProjectAttributes,
  $ as default
};
