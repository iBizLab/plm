import './style.css';
var z = Object.defineProperty;
var O = (s, r, e) => r in s ? z(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var b = (s, r, e) => (O(s, typeof r != "symbol" ? r + "" : r, e), e);
import { useNamespace as k, useClickOutside as P, useControlController as M, withInstall as B } from "@ibiz-template/vue3-util";
import { EditFormController as L, convertNavData as T, EditFormService as N, getEntitySchema as R, registerControlProvider as V } from "@ibiz-template/runtime";
import { ref as y, reactive as D, defineComponent as A, watch as C, onMounted as F, onUnmounted as H, createVNode as n, nextTick as _, resolveComponent as q, h as W } from "vue";
import { debounce as U } from "lodash-es";
import { clone as J } from "ramda";
class K {
  constructor() {
    b(this, "component", "IBizProjectAttributes");
  }
}
class X extends L {
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
    b(this, "calcFormDetail", (e) => {
      let o = "span";
      e.type === "string" ? o = "TEXTBOX" : e.type === "number" ? o = "NUMBER" : e.type === "picker" ? o = "MDROPDOWNLIST" : e.type === "date" && (o = "DATEPICKER");
      const t = {
        allowEmpty: !0,
        appDEFieldId: e.key,
        appId: ibiz.env.appId,
        capLanguageRes: { lanResTag: "DEF.LNAME.ID", appId: ibiz.env.appId },
        caption: e.description,
        codeName: e.key,
        dataType: 25,
        detailStyle: "DEFAULT",
        detailType: "FORMITEM",
        editor: {
          style: {},
          appId: ibiz.env.appId,
          editable: !0,
          editorType: o,
          halign: "LEFT",
          id: e.key,
          valign: "MIDDLE",
          valueType: "SIMPLE",
          wrapMode: "NOWRAP"
        },
        enableCond: 3,
        id: e.key,
        labelPos: "LEFT",
        labelWidth: 130,
        layoutPos: { colMD: 24, layout: "TABLE_24COL", appId: ibiz.env.appId },
        noPrivDisplayMode: 1,
        showCaption: !0
      };
      return e.type === "picker" && (Object.assign(t.editor, {
        appCodeListId: e.codelistId,
        valueItemName: e.key
      }), e.codelistId && Object.assign(t.editor, {
        appCodeListId: e.codelistId
      })), t;
    });
    // 扩展属性
    b(this, "addAttributes", y([]));
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
    const e = JSON.parse(
      this.controlParams.jsonschemaparams || "{}"
    );
    this.jsonSchemaParams = T(
      e,
      this.params,
      this.context
    ), await this.initByEntitySchema(), this.model.deformPages && this.model.deformPages[0] && this.addAttributesFormDetail.forEach((o) => {
      var t;
      (t = this.model.deformPages[0].deformDetails) == null || t.push(o);
    }), await super.onCreated(), this.service = new N(this.model), await this.service.init(this.context), this.autoSave = U(this.autoSave.bind(this), 500, {
      trailing: !0
    });
  }
  async onMounted() {
    await super.onMounted(), !this.state.isSimple && this.state.loadDefault && this.load();
  }
  async calcColumnModelBySchema(e, o) {
    var g;
    if (!e.properties)
      return;
    const { properties: t } = e;
    if (!(Object.keys(t).length > 0))
      return;
    const p = {};
    (g = (await ibiz.hub.getAppDataEntity(
      o.model.appDataEntityId,
      o.model.appId
    )).appDEFields) == null || g.forEach((d) => {
      p[d.codeName.toLowerCase()] = d.id;
    });
    const v = [];
    return Object.keys(t).forEach((d) => {
      if (!p[d]) {
        let h;
        switch (t[d].type) {
          case "string":
            h = "string", t[d].format === "date-time" && (h = "date");
            break;
          case "integer":
            h = "integer";
            break;
          case "number":
            h = "number";
            break;
          default:
            ibiz.log.error(
              ibiz.i18n.t("runtime.controller.control.grid.unsupported", {
                type: t[d].type
              })
            );
            return;
        }
        v.push({
          key: d,
          description: t[d].description || t[d].key,
          type: h,
          ref: D({ isFocus: !0 }),
          codelistId: t[d].enumSource ? t[d].enumSource : ""
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
    const e = J(this.jsonSchemaParams);
    Object.assign(e, this.params);
    const o = await R(
      this.model.appDataEntityId,
      this.context,
      e
    );
    if (!o)
      return;
    const t = await this.calcColumnModelBySchema(o, this);
    t.length && (this.addAttributes.value = t, this.addAttributes.value.forEach((p) => {
      this.addAttributesFormDetail.push(this.calcFormDetail(p));
    }));
  }
}
const Y = /* @__PURE__ */ A({
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
    const r = k("project-attributes-input"), e = s.controller, o = y(""), t = y(!1), p = y();
    C(() => e.state.data, (u) => {
      if (u)
        for (const i in u)
          e.addAttributes.find((c) => c.key === i) && (o.value = u[i]);
    }, {
      immediate: !0
    });
    const f = y(), v = (u) => {
      u.stopPropagation(), t.value = !0, _(() => {
        p.value && p.value.focus();
      });
    }, g = (u) => {
      u.stopPropagation(), t.value = !1;
    }, d = () => n("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [n("g", {
      id: "aizaction/edit",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [n("path", {
      d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
      id: "aiz编辑"
    }, null)])]), h = (u) => {
      o.value = u.target.value;
      const i = e.formItems.find((a) => a.name === s.item.key);
      i && (u.target.value ? i.setDataValue(u.target.value, s.item.key) : i.setDataValue(null, s.item.key));
    };
    let E;
    return F(() => {
      f.value && (E = P(f, async (u) => {
        f.value && (t.value = !1);
      }));
    }), H(() => {
      E && E.stop && E.stop();
    }), {
      ns: r,
      c: e,
      startEdit: v,
      stopEdit: g,
      text: o,
      isEditing: t,
      change: h,
      componentRef: f,
      editSvg: d,
      inputRef: p
    };
  },
  render() {
    return n("div", {
      ref: "componentRef",
      class: [this.ns.b(), this.isEditing ? "edit" : ""]
    }, [this.isEditing ? n("input", {
      ref: "inputRef",
      type: "text",
      value: this.text,
      autofocus: !0,
      tabindex: "0",
      onChange: this.change,
      onBlur: (s) => this.stopEdit(s)
    }, null) : n("div", {
      class: this.ns.e("text"),
      onClick: (s) => this.startEdit(s)
    }, [this.text]), n("div", {
      class: this.ns.e("item-edit-svg"),
      onClick: (s) => this.startEdit(s)
    }, [this.editSvg()])]);
  }
}), w = /* @__PURE__ */ A({
  name: "IBizProjectAttributes",
  component: [Y],
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
    emit: r
  }) {
    const e = k("project-attributes"), o = [], t = M((...i) => new X(...i), {
      excludePropsKeys: ["data"]
    });
    s.isSimple && (t.evt.on("onMounted", () => {
      t.setSimpleData(s.data || {});
    }), C(() => s.data, (i) => {
      const a = i || {};
      Object.keys(t.data).find((l) => a[l] !== t.data[l]) && t.setSimpleData(a);
    }, {
      deep: !0
    })), t.evt.on("onCreated", () => {
      Object.keys(t.details).forEach((a) => {
        const c = t.details[a];
        c.state = D(c.state);
      });
    });
    const p = (i, a, c) => {
      const l = c || a;
      t.setDataValue(l, i);
    }, f = (i) => t.formItems.find((a) => a.name === i.key), v = (i, a) => {
      let c = null;
      const l = {};
      if (i.type === "string" ? l.autofocus = !0 : i.type === "number" && (l.controlsPosition = "right", l.controls = !0), !a)
        return;
      const S = {
        value: a.value,
        data: a.data,
        controller: a.editor,
        disabled: a.state.disabled,
        readonly: i.ref.isFocus,
        onChange: (m, x) => p(m, i.key, x),
        controlParams: a.form.controlParams,
        onFocus: (m) => {
          a.onFocus(m);
        },
        onBlur: (m) => {
          a.onBlur(m);
        },
        onEnter: (m) => a.onEnter(m),
        ...l
      };
      let I = "";
      i.type === "string" ? I = "IBizInput" : i.type === "number" ? I = "IBizInputNumber" : i.type === "picker" ? I = "IBizDropdown" : i.type === "date" && (I = "IBizDatePicker");
      const j = q(I);
      return c = W(j, {
        ...S
      }), c;
    }, g = () => n("svg", {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      preserveAspectRatio: "xMidYMid meet",
      focusable: "false"
    }, [n("g", {
      id: "aizaction/edit",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, [n("path", {
      d: "M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",
      id: "aiz编辑"
    }, null)])]), d = y();
    return F(() => {
      P(d, async (i) => {
        if (i && i.target) {
          if (i.target.tagName.toLowerCase() === "input" || i.target.tagName.toLowerCase() === "svg" || i.target.className === "ibiz-dropdown-select-option-content" || i.target.className === "el-date-table-cell__text")
            return;
          let {
            id: a
          } = i.target.parentElement, c = t.addAttributes.value.find((l) => l.key === a);
          i.target.className === "ibiz-project-attributes__item-edit" && (a = i.target.id, c = t.addAttributes.value.find((l) => l.key === a)), c ? (t.addAttributes.value.forEach((l) => {
            l.ref.isFocus = !0;
          }), c.ref.isFocus = !1) : d.value.contains(i.target) || t.addAttributes.value.forEach((l) => {
            l.ref.isFocus = !0;
          });
        }
      });
    }), {
      c: t,
      ns: e,
      formItems: o,
      emit: r,
      renderEditor: v,
      editSvg: g,
      pxx: d,
      findController: f,
      startsWithHttpProtocol: (i) => /^(http:\/\/|https:\/\/)/.test(i),
      linkSvg: () => n("svg", {
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "4033",
        height: "1em",
        width: "1em"
      }, [n("path", {
        d: "M832 128H640v64h146.752L521.376 457.376l45.248 45.248L832 237.248V384h64V128z",
        fill: "#181818",
        "p-id": "4034"
      }, null), n("path", {
        d: "M768 832H192V256h352v-64H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z",
        fill: "#181818",
        "p-id": "4035"
      }, null)]),
      linkOpen: (i) => {
        window.open(i);
      }
    };
  },
  render() {
    return n("div", {
      class: this.ns.b()
    }, [this.c.addAttributes.value.length > 0 && this.c.addAttributes.value.map((s) => {
      const r = this.findController(s);
      let e = !1;
      return r && r.value && s.type === "string" && (e = this.startsWithHttpProtocol(r.value)), n("div", {
        class: [this.ns.e("item"), e ? "link" : ""]
      }, [n("div", {
        class: this.ns.e("item-text")
      }, [s.description]), n("div", {
        class: [this.ns.e("item-edit"), s.ref.isFocus ? "" : "edit"],
        id: s.key
      }, [this.renderEditor(s, r), n("div", {
        class: this.ns.e("item-edit-svg")
      }, [this.editSvg()])]), e && s.ref.isFocus ? n("div", {
        class: this.ns.e("item-link-svg"),
        onClick: () => this.linkOpen(r.value),
        title: "打开链接"
      }, [this.linkSvg()]) : null]);
    }), n("div", {
      ref: "pxx"
    }, null)]);
  }
}), G = B(
  w,
  // eslint-disable-next-line func-names
  function(s) {
    s.component(w.name, w), V(
      "EDITFORM_RENDER_PROJECT_ATTRIBUTES",
      () => new K()
    );
  }
), st = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(s) {
    s.use(G);
  }
};
export {
  G as IBizProjectAttributes,
  st as default
};
