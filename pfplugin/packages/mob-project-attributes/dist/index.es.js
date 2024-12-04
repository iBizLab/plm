import './style.css';
var j = Object.defineProperty;
var B = (a, o, t) => o in a ? j(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t;
var m = (a, o, t) => (B(a, typeof o != "symbol" ? o + "" : o, t), t);
import { useNamespace as A, useControlController as F, withInstall as T } from "@ibiz-template/vue3-util";
import { EditFormController as L, convertNavData as z, EditFormService as N, getEntitySchema as V, registerControlProvider as x } from "@ibiz-template/runtime";
import { ref as y, reactive as S, defineComponent as R, watch as H, createVNode as d, resolveComponent as P, h as W } from "vue";
import { clone as _ } from "@ibiz-template/core";
import { debounce as q } from "lodash-es";
import { clone as U } from "ramda";
class J {
  constructor() {
    m(this, "component", "IBizMobProjectAttributes");
  }
}
class K extends L {
  constructor() {
    super(...arguments);
    /**
     * jsonschema参数
     *
     * @author zhanghengfeng
     * @date 2024-07-05 15:07:47
     * @type {IParams}
     */
    m(this, "jsonSchemaParams", {});
    // 计算表单模型
    m(this, "calcFormDetail", (t) => {
      let n = "span";
      t.type === "string" ? n = "MOBTEXT" : t.type === "number" ? n = "MOBNUMBER" : t.type === "picker" ? n = "MOBDROPDOWNLIST" : t.type === "date" && (n = "MOBDATE");
      const e = {
        allowEmpty: !0,
        appDEFieldId: t.key,
        appId: ibiz.env.appId,
        capLanguageRes: { lanResTag: "DEF.LNAME.ID", appId: ibiz.env.appId },
        caption: t.description,
        codeName: t.key,
        dataType: 25,
        detailStyle: "DEFAULT",
        detailType: "FORMITEM",
        editor: {
          style: {},
          appId: ibiz.env.appId,
          editable: !0,
          editorType: n,
          halign: "LEFT",
          id: t.key,
          valign: "MIDDLE",
          valueType: "SIMPLE",
          wrapMode: "NOWRAP"
        },
        enableCond: 3,
        id: t.key,
        labelPos: "LEFT",
        labelWidth: 130,
        layoutPos: { colMD: 24, layout: "TABLE_24COL", appId: ibiz.env.appId },
        noPrivDisplayMode: 1,
        showCaption: !0
      };
      return t.type === "picker" && (Object.assign(e.editor, {
        appCodeListId: t.codelistId,
        valueItemName: t.key
      }), t.codelistId && Object.assign(e.editor, {
        appCodeListId: t.codelistId
      })), e;
    });
    // 扩展属性
    m(this, "addAttributes", y([]));
    // 扩展属性模型
    m(this, "addAttributesFormDetail", []);
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
    const t = JSON.parse(
      this.controlParams.jsonschemaparams || "{}"
    );
    this.jsonSchemaParams = z(
      t,
      this.params,
      this.context
    ), await this.initByEntitySchema(), this.model.deformPages && this.model.deformPages[0] && this.addAttributesFormDetail.forEach((n) => {
      var e;
      (e = this.model.deformPages[0].deformDetails) == null || e.push(n);
    }), await super.onCreated(), this.service = new N(this.model), await this.service.init(this.context), this.autoSave = q(this.autoSave.bind(this), 500, {
      trailing: !0
    });
  }
  async onMounted() {
    await super.onMounted(), !this.state.isSimple && this.state.loadDefault && this.load();
  }
  async calcColumnModelBySchema(t, n) {
    var E;
    if (!t.properties)
      return;
    const { properties: e } = t;
    if (!(Object.keys(e).length > 0))
      return;
    const u = {};
    (E = (await ibiz.hub.getAppDataEntity(
      n.model.appDataEntityId,
      n.model.appId
    )).appDEFields) == null || E.forEach((r) => {
      u[r.codeName.toLowerCase()] = r.id;
    });
    const g = [];
    return Object.keys(e).forEach((r) => {
      if (!u[r]) {
        let p;
        switch (e[r].type) {
          case "string":
            p = "string", e[r].format === "date-time" && (p = "date");
            break;
          case "integer":
            p = "integer";
            break;
          case "number":
            p = "number";
            break;
          default:
            ibiz.log.error(
              ibiz.i18n.t("runtime.controller.control.grid.unsupported", {
                type: e[r].type
              })
            );
            return;
        }
        g.push({
          key: r,
          description: e[r].description || e[r].key,
          type: p,
          ref: S({ isFocus: !0 }),
          codelistId: e[r].enumSource ? e[r].enumSource : ""
        });
      }
    }), g;
  }
  /**
   * 根据jsonschema初始化自定义表格列
   * @author lxm
   * @date 2024-01-02 04:41:23
   * @return {*}  {Promise<void>}
   */
  async initByEntitySchema() {
    const t = U(this.jsonSchemaParams);
    Object.assign(t, this.params);
    const n = await V(
      this.model.appDataEntityId,
      this.context,
      t
    );
    if (!n)
      return;
    const e = await this.calcColumnModelBySchema(n, this);
    e.length && (this.addAttributes.value = e, this.addAttributes.value.forEach((u) => {
      this.addAttributesFormDetail.push(this.calcFormDetail(u));
    }));
  }
}
const w = /* @__PURE__ */ R({
  name: "IBizMobProjectAttributes",
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
  setup(a, {
    emit: o
  }) {
    const t = A("mob-project-attributes"), n = [], e = F((...i) => new K(...i), {
      excludePropsKeys: ["data"]
    });
    a.isSimple && (e.evt.on("onMounted", () => {
      e.setSimpleData(a.data || {});
    }), H(() => a.data, (i) => {
      const s = i || {};
      Object.keys(e.data).find((l) => s[l] !== e.data[l]) && e.setSimpleData(s);
    }, {
      deep: !0
    })), e.evt.on("onCreated", () => {
      Object.keys(e.details).forEach((s) => {
        const c = e.details[s];
        c.state = S(c.state);
      });
    });
    const u = (i, s, c) => {
      const l = c || s;
      e.setDataValue(l, i);
    }, M = (i) => e.formItems.find((s) => s.name === i.key), g = (i, s) => {
      let c = null;
      const l = {};
      if (i.type === "string" ? l.autofocus = !0 : i.type === "number" && (l.controlsPosition = "right", l.controls = !0), !s)
        return;
      const k = {
        value: s.value,
        data: s.data,
        controller: s.editor,
        disabled: s.state.disabled,
        readonly: i.ref.isFocus,
        onChange: (h, O) => u(h, i.key, O),
        controlParams: s.form.controlParams,
        onFocus: (h) => {
          s.onFocus(h);
        },
        onBlur: (h) => {
          s.onBlur(h);
        },
        onEnter: (h) => s.onEnter(h),
        ...l
      };
      let b = "";
      i.type === "string" ? b = "IBizInput" : i.type === "number" ? b = "IBizInputNumber" : i.type === "picker" ? b = "IBizDropdown" : i.type === "date" && (b = "IBizDatePicker");
      const C = P(b);
      return c = W(C, {
        ...k
      }), c;
    }, E = () => d("svg", {
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4033",
      height: "1em",
      width: "1em"
    }, [d("path", {
      d: "M832 128H640v64h146.752L521.376 457.376l45.248 45.248L832 237.248V384h64V128z",
      fill: "#181818",
      "p-id": "4034"
    }, null), d("path", {
      d: "M768 832H192V256h352v-64H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z",
      fill: "#181818",
      "p-id": "4035"
    }, null)]), r = (i) => /^(http:\/\/|https:\/\/)/.test(i), p = (i) => {
      window.location.href = i;
    }, I = y(!1), D = y(""), f = y(""), v = y("");
    return {
      c: e,
      ns: t,
      formItems: n,
      emit: o,
      renderEditor: g,
      findController: M,
      click: (i, s, c) => {
        i.stopPropagation(), D.value = s.description, v.value = s.key;
        const l = _(c.data[v.value]);
        f.value = l, I.value = !0;
      },
      dialogShow: I,
      confirm: () => {
        I.value = !1, u(f.value, v.value), D.value = "", f.value = "", v.value = "";
      },
      cancel: () => {
        I.value = !1, D.value = "", f.value = "", v.value = "";
      },
      dialogDescription: D,
      dialogValue: f,
      linkSvg: E,
      startsWithHttpProtocol: r,
      linkOpen: p
    };
  },
  render() {
    return this.c.state.isMounted ? d("div", {
      class: this.ns.b()
    }, [this.c.addAttributes.value.length > 0 && this.c.addAttributes.value.map((a) => {
      const o = this.findController(a);
      let t = !1;
      return o && o.value && a.type === "string" && (t = this.startsWithHttpProtocol(o.value)), o ? d("div", {
        class: [this.ns.e("item")]
      }, [d("div", {
        class: this.ns.e("item-text")
      }, [a.description]), d("div", {
        class: [this.ns.e("item-edit"), this.ns.is("isLink", t)],
        id: a.key,
        onClick: (n) => this.click(n, a, o)
      }, [this.renderEditor(a, o)]), t ? d("div", {
        class: this.ns.e("item-link-svg"),
        onClick: () => this.linkOpen(o.value),
        title: "打开链接"
      }, [this.linkSvg()]) : null]) : null;
    }), d(P("van-dialog"), {
      class: this.ns.e("dialog"),
      show: this.dialogShow,
      title: this.dialogDescription,
      onConfirm: this.confirm,
      onCancel: this.cancel,
      "show-cancel-button": !0,
      "close-on-click-overlay": !0
    }, {
      default: () => [d(P("van-field"), {
        modelValue: this.dialogValue,
        "onUpdate:modelValue": (a) => this.dialogValue = a
      }, null)]
    })]) : null;
  }
}), X = T(
  w,
  // eslint-disable-next-line func-names
  function(a) {
    a.component(w.name, w), x(
      "EDITFORM_RENDER_MOB_PROJECT_ATTRIBUTES",
      () => new J()
    );
  }
), ot = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(a) {
    a.use(X);
  }
};
export {
  X as IBizMobProjectAttributes,
  ot as default
};
