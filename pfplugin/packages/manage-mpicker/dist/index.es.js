import './style.css';
var _ = Object.defineProperty;
var W = (l, u, o) => u in l ? _(l, u, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[u] = o;
var d = (l, u, o) => (W(l, typeof u != "symbol" ? u + "" : u, o), o);
import { EditorController as X, ButtonContainerState as $, ControllerEvent as H, getDeACMode as Q, UIActionButtonState as Y, OpenAppViewCommand as V, UIActionUtil as Z, registerEditorProvider as q } from "@ibiz-template/runtime";
import { getDataPickerProps as ee, getEditorEmits as te, useNamespace as ie, withInstall as ae } from "@ibiz-template/vue3-util";
import { RuntimeModelError as P } from "@ibiz-template/core";
import { mergeDeepLeft as oe, clone as D } from "ramda";
import { defineComponent as se, ref as g, watch as S, computed as ne, onMounted as le, createVNode as h, resolveComponent as N, createTextVNode as M } from "vue";
class re extends X {
  constructor() {
    super(...arguments);
    /**
     * 是否多选
     */
    d(this, "multiple", !1);
    /**
     *选择视图相关参数
     */
    d(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    d(this, "linkView", null);
    /**
     *值项
     */
    d(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    d(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    d(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    d(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    d(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    d(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    d(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    d(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    d(this, "dataItems", []);
    // 对象标识属性
    d(this, "objectIdField", "");
    // 对象名称属性
    d(this, "objectNameField", "");
    // 对象值属性
    d(this, "objectValueField", "");
    // 项布局面板
    d(this, "itemLayoutPanel");
    /**
     * 分组行为状态
     */
    d(this, "groupActionState", new $());
    d(this, "evt", new H(
      this.getEventArgs.bind(this)
    ));
  }
  getEventArgs() {
    return {
      context: this.context,
      params: this.params,
      data: [],
      eventArg: "",
      targetName: this.model.name,
      view: this.getView()
    };
  }
  async onInit() {
    var r, m, n, c;
    if (super.onInit(), this.initParams(), this.valueItem = ((r = this.model.valueItemName) == null ? void 0 : r.toLowerCase()) || "", this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await Q(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: v, minorSortDir: f } = this.deACMode;
      v && f && (this.sort = "".concat(v.toLowerCase(), ",").concat(f.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (b) => {
          b.id !== "value" && b.id !== "text" && this.dataItems.push(b);
        }
      )), this.deACMode.itemLayoutPanel && (this.itemLayoutPanel = this.deACMode.itemLayoutPanel);
    }
    const o = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    if (this.model.editorType && o.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (m = this.model.objectIdField) == null ? void 0 : m.toLowerCase(), this.objectNameField = (n = this.model.objectNameField) == null ? void 0 : n.toLowerCase(), this.objectValueField = (c = this.model.objectValueField) == null ? void 0 : c.toLowerCase(), this.model.uiactionGroup) {
      const v = this.model.uiactionGroup.uiactionGroupDetails || [];
      v.length > 0 && (v.forEach((f) => {
        const b = f.uiactionId;
        if (b) {
          const k = new Y(
            f.id,
            this.context.srfappid,
            b
          );
          this.groupActionState.addState(f.id, k);
        }
      }), await this.groupActionState.init());
    }
    const e = this.getView();
    e && e.evt.on("onDataChange", (v) => {
      v.eventName === "onLoadSuccess" && this.context.srfshowchoose && this.toggleMenu(!0);
    });
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    switch (this.model.editorType) {
      case "PICKEREX_NOAC":
      case "PICKEREX_NOAC_LINK":
        this.noAC = !0;
        break;
      case "PICKEREX_NOBUTTON":
        this.noButton = !0;
        break;
      default:
        this.noButton = !1, this.noAC = !1;
    }
  }
  /**
   * 初始化选择视图相关参数
   */
  async initPickupViewParams() {
    this.model.pickupAppViewId && (this.pickupView = await ibiz.hub.config.view.get(
      this.model.pickupAppViewId
    ));
  }
  /**
   * 初始化链接视图相关参数
   */
  async initLinkViewParams() {
    this.model.linkAppViewId && (this.linkView = await ibiz.hub.config.view.get(this.model.linkAppViewId));
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PickerEditorController
   */
  async getServiceData(o, e) {
    const { context: r, params: m } = this.handlePublicParams(e, this.context, {
      ...this.params
    }), n = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(n, { sort: this.sort }), o && Object.assign(n, { query: o }), Object.assign(n, { size: 1e3 });
    const c = oe(m, n);
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        this.interfaceName,
        r,
        c
      );
    throw new P(this.model, "请配置实体和实体数据集");
  }
  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PickerEditorController
   */
  async openPickUpView(o, e) {
    await this.initPickupViewParams();
    const { context: r, params: m } = this.handlePublicParams(o, this.context, {
      ...this.params
    });
    if (e && (m.selectedData = e), !this.pickupView)
      throw new P(this.model, "请配置数据选择视图");
    const n = await ibiz.commands.execute(
      V.TAG,
      this.pickupView.id,
      r,
      m,
      { openMode: "POPUPMODAL" }
    );
    if (n && n.ok && n.data)
      return n.data;
    ibiz.log.debug("模态取消或关闭异常", n);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(o) {
    const e = this.context.clone();
    o[this.valueItem] && (e.srfkey = o[this.valueItem]);
    const { context: r, params: m } = this.handlePublicParams(o, e, {
      ...this.params
    }), { linkAppViewId: n } = this.model;
    if (!n)
      throw new P(this.model, "请配置数据链接视图");
    return ibiz.commands.execute(
      V.TAG,
      n,
      r,
      m
    );
  }
  /**
   * 计算回填数据
   *
   * @author lxm
   * @date 2022-10-24 16:10:24
   * @param {IData} data 选中数据
   * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
   */
  async calcFillDataItems(o) {
    return this.deACMode ? this.dataItems.length === 0 ? [] : await Promise.all(
      this.dataItems.map((r) => {
        const m = o[r.appDEFieldId];
        return r.format || r.convertToCodeItemText && r.codeListId || r.customCode, { id: r.id, value: m };
      })
    ) : [];
  }
  /**
   * 处理对象数据类型抛值
   * @param {IData} select
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-08-22 15:58:56
   */
  handleObjectParams(o) {
    const e = {};
    return this.objectIdField && Object.assign(e, {
      [this.objectIdField]: o[this.keyName]
    }), this.objectNameField && Object.assign(e, {
      [this.objectNameField]: o[this.textName]
    }), this.objectValueField && Object.assign(e, {
      [this.objectValueField]: D(o)
    }), e;
  }
  /**
   * 分组行为项点击
   *
   * @param {IUIActionGroupDetail} detail
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof RoutePickerController
   */
  async onActionClick(o, e) {
    const r = o.uiactionId;
    await Z.execAndResolved(
      r,
      {
        context: this.context,
        params: this.params,
        data: [],
        view: this.getView(),
        event: e
      },
      o.appId
    );
  }
  /**
   * 获取当前视图
   *
   * @return {*}
   * @memberof ManageMPickerController
   */
  getView() {
    if (this.parent.view)
      return this.parent.view;
    if (this.parent.panel.view)
      return this.parent.panel.view;
  }
  /**
   * 收缩菜单
   *
   * @param {boolean} visible
   * @memberof ManageMPickerController
   */
  toggleMenu(o) {
    this.evt.emit("toggleMenu", { visible: o });
  }
}
class de {
  constructor() {
    d(this, "formEditor");
    d(this, "gridEditor");
    this.formEditor = "ManageMPicker", this.gridEditor = "ManageMPicker";
  }
  async createController(u, o) {
    const e = new re(u, o);
    return await e.init(), e;
  }
}
const E = /* @__PURE__ */ se({
  name: "ManageMPicker",
  props: ee(),
  emits: te(),
  setup(l, {
    emit: u
  }) {
    const o = ie("mpicker"), e = l.controller, r = e.model, m = g([]), n = g([]), c = g([]), v = g(!1), f = g(), b = g(!1), k = g(!1);
    let y = null;
    const A = g("最近浏览"), j = g("更多");
    r.editorParams && (r.editorParams.toplabel && (A.value = r.editorParams.toplabel), r.editorParams.lastlabel && (j.value = r.editorParams.lastlabel));
    const C = (i) => {
      if (m.value = [], c.value = [], i) {
        if (e.model.valueType === "OBJECTS")
          i.forEach((t) => {
            const a = D(t);
            Object.assign(a, {
              [e.keyName]: t[e.objectIdField],
              [e.textName]: t[e.objectNameField]
            }), e.objectValueField && (Object.assign(a, {
              ...t[e.objectValueField]
            }), delete a[e.objectValueField]), a[e.keyName] && c.value.push(a);
          });
        else if (e.objectIdField && e.model.valueSeparator)
          i.split(e.model.valueSeparator).forEach((a) => {
            c.value.push({
              [e.keyName]: a
            });
          });
        else
          try {
            c.value = JSON.parse(i);
          } catch (t) {
            ibiz.log.error("SIMPLE类型地址栏值格式".concat(i, "不符合JSON字符串要求"));
          }
        c.value.forEach((t) => {
          m.value.push(t[e.keyName]), n.value.findIndex((s) => Object.is(s[e.keyName], t[e.keyName])) < 0 && n.value.push({
            [e.keyName]: t[e.keyName],
            [e.textName]: t[e.textName]
          });
        });
      }
    };
    S(() => l.value, (i) => {
      C(i);
    }, {
      immediate: !0,
      deep: !0
    });
    const F = (i) => {
      const t = [];
      i && Array.isArray(i) && i.forEach((s) => {
        Object.assign(s, {
          [e.keyName]: s[e.keyName] ? s[e.keyName] : s.srfkey,
          [e.textName]: s[e.textName] ? s[e.textName] : s.srfmajortext
        }), e.model.valueType === "OBJECTS" ? t.push(e.handleObjectParams(s)) : e.objectIdField ? t.push(s[e.keyName]) : t.push({
          [e.keyName]: s[e.keyName],
          [e.textName]: s[e.textName]
        }), n.value.findIndex((I) => Object.is(I[e.keyName], s[e.keyName])) < 0 && n.value.push(s);
      });
      let a = null;
      t.length > 0 && (e.model.valueType === "OBJECTS" ? a = t : a = e.objectIdField ? t.join(e.model.valueSeparator) : JSON.stringify(t)), y = a, C(y);
    }, T = async () => {
      let i;
      if (f.value.blur(), c.value.length) {
        const a = JSON.parse(JSON.stringify(c.value));
        a.forEach((s, p) => {
          a[p].srfkey = s[e.keyName], a[p].srfmajortext = s[e.textName];
        }), i = JSON.stringify(a);
      }
      b.value = !0;
      const t = await e.openPickUpView(l.data, i);
      t && F(t), b.value = !1;
    }, L = (i) => {
      const t = [];
      let a = null;
      i.length > 0 && (i.forEach((s) => {
        if (s !== "more" && s !== "recent") {
          let p = n.value.findIndex((x) => Object.is(x[e.keyName], s)), I = {};
          p >= 0 ? I = n.value[p] : (p = c.value.findIndex((x) => Object.is(x[e.keyName], s)), p >= 0 && (I = c.value[p])), e.model.valueType === "OBJECTS" ? t.push(e.handleObjectParams(I)) : e.objectIdField ? t.push(I[e.keyName]) : t.push({
            [e.keyName]: I[e.keyName],
            [e.textName]: I[e.textName]
          });
        }
      }), t.length > 0 && (e.model.valueType === "OBJECTS" ? a = t : a = e.objectIdField ? t.join(e.model.valueSeparator) : JSON.stringify(t)), y = a, C(y));
    }, B = (i) => {
      const t = c.value.findIndex((a) => Object.is(a[e.keyName], i));
      if (t >= 0) {
        c.value.splice(t, 1);
        const a = [];
        let s = null;
        c.value.forEach((p) => {
          e.model.valueType === "OBJECTS" ? a.push(e.handleObjectParams(p)) : e.objectIdField ? a.push(p[e.keyName]) : a.push({
            [e.keyName]: p[e.keyName],
            [e.textName]: p[e.textName]
          });
        }), a.length > 0 && (e.model.valueType === "OBJECTS" ? s = a : s = e.objectIdField ? a.join(e.model.valueSeparator) : JSON.stringify(a)), y = s, C(y);
      }
    }, w = async (i) => {
      if (e.model.appDataEntityId) {
        k.value = !0;
        try {
          const t = i.trim(), a = await e.getServiceData(t, l.data);
          k.value = !1, a && (n.value = a.data);
        } catch (t) {
          k.value = !1;
        }
      }
    }, J = (i) => {
      v.value = i, v.value && (n.value = [], w(""));
    }, R = () => {
      e.model.valueType === "OBJECTS" ? y = [] : y = "", u("change", y);
    }, U = () => {
      u("change", y);
    }, O = ne(() => c.value.map((i) => i[e.textName]).join(","));
    S(O, (i, t) => {
      i !== t && u("infoTextChange", i);
    }, {
      immediate: !0
    });
    const G = (i) => {
      u("focus", i);
    }, K = (i) => {
      u("blur", i);
    }, z = (i) => {
      i && i.code === "Enter" && u("enter", i);
    };
    return le(() => {
      e.objectNameField && w(""), e.evt.on("toggleMenu", () => {
        f.value && f.value.selectOption();
      });
    }), {
      ns: o,
      c: e,
      selectRef: f,
      curValue: m,
      loading: k,
      items: n,
      valueText: O,
      isOpenView: b,
      topLabel: A,
      lastLabel: j,
      onSearch: w,
      onOpenChange: J,
      onSelect: L,
      onRemove: B,
      openPickUpView: T,
      onFocus: G,
      onBlur: K,
      handleKeyUp: z,
      handleCancel: R,
      onConfirm: U,
      renderGroupAction: () => {
        const {
          uiactionGroup: i
        } = e.model;
        if (i)
          return h("div", {
            class: o.e("group-action")
          }, [h(N("iBizActionToolbar"), {
            class: o.be("group", "header-actions"),
            actionDetails: i.uiactionGroupDetails,
            "actions-state": e.groupActionState,
            onActionClick: (t, a) => {
              e.onActionClick(t, a);
            }
          }, null)]);
      },
      renderPanelItemLayout: (i, t) => {
        const {
          context: a,
          params: s
        } = e;
        return h(N("iBizControlShell"), {
          data: i,
          modelData: t,
          context: a,
          params: s
        }, null);
      }
    };
  },
  render() {
    return this.readonly ? h("div", {
      class: (this.ns.b(), this.ns.m("readonly"))
    }, [this.valueText]) : h("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.ns.is("work-item", !0)],
      ref: "editorRef"
    }, [h(N("el-select"), {
      ref: "selectRef",
      modelValue: this.curValue,
      "onUpdate:modelValue": (l) => this.curValue = l,
      filterable: !0,
      remote: !0,
      multiple: !0,
      loading: this.loading,
      "popper-class": [this.ns.be("work-item", "popper"), this.ns.is("hidden", this.isOpenView)],
      placeholder: this.c.placeHolder ? this.c.placeHolder : " ",
      "remote-method": this.onSearch,
      onVisibleChange: this.onOpenChange,
      onChange: this.onSelect,
      onRemoveTag: this.onRemove,
      disabled: this.disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyup: this.handleKeyUp
    }, {
      default: () => [h(N("el-option"), {
        value: "recent",
        label: "recent",
        class: this.ns.e("recent")
      }, {
        default: () => [this.topLabel]
      }), this.items.map((l) => h(N("el-option"), {
        key: l[this.c.keyName],
        value: l[this.c.keyName],
        label: l[this.c.textName]
      }, {
        default: () => [this.c.itemLayoutPanel && this.renderPanelItemLayout(l, this.c.itemLayoutPanel)]
      })), this.c.model.pickupAppViewId && h(N("el-option"), {
        value: "more",
        label: "more",
        class: this.ns.e("more")
      }, {
        default: () => [h(N("el-button"), {
          text: !0,
          onClick: this.openPickUpView
        }, {
          default: () => [h(N("ion-icon"), {
            name: "list-outline"
          }, null), this.lastLabel]
        })]
      })]
    }), h("div", {
      class: this.ns.e("actions")
    }, [this.renderGroupAction()]), h("div", {
      class: this.ns.e("bottom")
    }, [h(N("el-button"), {
      text: !0,
      onClick: this.handleCancel
    }, {
      default: () => [M("取消")]
    }), h(N("el-button"), {
      onClick: this.onConfirm
    }, {
      default: () => [M("确认")]
    })])]);
  }
}), ce = ae(E, function(l) {
  l.component(E.name, E), q("PICKER_MANAGE", () => new de());
}), Ne = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(l) {
    l.use(ce);
  }
};
export {
  ce as IBizManageMPicker,
  Ne as default
};
