import './style.css';
var P = Object.defineProperty;
var N = (e, n, r) => n in e ? P(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var v = (e, n, r) => (N(e, typeof n != "symbol" ? n + "" : n, r), r);
import { GridFieldColumnController as h, GridRowState as U, registerGridColumnProvider as G } from "@ibiz-template/runtime";
import { defineComponent as R, computed as m, createVNode as s } from "vue";
import { useNamespace as C } from "@ibiz-template/vue3-util";
const g = /* @__PURE__ */ R({
  name: "IBizGridPersonalInfoColumn",
  props: {
    controller: {
      type: h,
      required: !0
    },
    row: {
      type: U,
      required: !0
    }
  },
  setup(e) {
    const n = C("grid-field-column"), r = C("grid-personal-info-column"), o = e.controller, c = {
      id: "assignee_id",
      name: "assignee_name"
    }, {
      userParam: u
    } = o.model;
    if (u && u.USERFILTERMAP)
      try {
        const t = JSON.parse(u.USERFILTERMAP);
        Object.assign(c, t);
      } catch (t) {
        ibiz.log.error(t);
      }
    const p = (t) => {
      e.controller.hasAction && (t.stopPropagation(), e.controller.triggerAction(e.row, t));
    }, d = m(() => e.row.data[e.controller.fieldName] || {}), l = m(() => d.value[c.name] || ""), f = m(() => d.value[c.id] || ""), b = () => {
      const t = o.codeListItems;
      if (!t || t.length === 0)
        return "";
      const a = t.find((i) => i.value && f.value && i.value === f.value || i.text && l.value && i.text === l.value) || {};
      if (a.data && a.data.iconurl) {
        const i = JSON.parse(a.data.iconurl);
        if (i.length > 0) {
          const {
            downloadUrl: w
          } = ibiz.util.file.calcFileUpDownUrl(o.context, o.params, e.row.data, {});
          return w.replace("%fileId%", i[0].id);
        }
      }
      return "";
    }, I = () => {
      var a;
      const t = b();
      return t ? s("img", {
        class: r.bem("content", "head-sculpture", "avatar-icon"),
        src: t,
        alt: ""
      }, null) : ((a = ibiz.util.text) == null ? void 0 : a.abbreviation(l.value)) || "";
    };
    return {
      ns: n,
      c: o,
      fieldValue: d,
      onCellClick: p,
      renderContent: () => {
        var t;
        return l.value ? s("div", {
          class: r.b("content")
        }, [s("div", {
          class: r.be("content", "head-sculpture"),
          style: "background-color:".concat((t = ibiz.util.text) == null ? void 0 : t.stringToHexColor(l.value))
        }, [I()]), l.value ? s("div", {
          class: r.be("content", "tip")
        }, [l.value]) : null]) : "---";
      }
    };
  },
  render() {
    var e;
    return s("div", {
      class: [this.ns.b(), this.c.clickable(this.row) && this.ns.m("clickable"), this.ns.m(this.controller.grid.overflowMode), (e = this.controller.model.cellSysCss) == null ? void 0 : e.cssName, this.ns.is("has-action", !!this.c.model.deuiactionGroup)],
      onClick: this.onCellClick
    }, [this.renderContent()]);
  }
});
class x {
  constructor() {
    v(this, "component", "IBizGridPersonalInfoColumn");
  }
  async createController(n, r) {
    const o = new h(n, r);
    return await o.init(), o;
  }
}
const y = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(e) {
    e.component(g.name, g), G(
      "GRID_COLRENDER_PERSONAL_INFO_COLUMN",
      () => new x()
    );
  }
};
export {
  y as default
};
