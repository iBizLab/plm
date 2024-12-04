import { FrontUIActionProvider as h, OpenAppViewCommand as E, registerUIActionProvider as k } from "@ibiz-template/runtime";
import { ModelError as x, RuntimeModelError as T, StringUtil as b } from "@ibiz-template/core";
class D extends h {
  async execAction(e, r) {
    const { context: t, params: c, data: o, event: p, noWaitRoute: A, view: w } = r;
    let a = {};
    switch (e.frontProcessType) {
      case "OPENHTMLPAGE": {
        const i = b.fill(e.htmlPageUrl, t, o == null ? void 0 : o[0]);
        window.open(i, "_blank");
        break;
      }
      case "TOP":
      case "WIZARD": {
        const i = e.frontAppViewId;
        if (!i)
          throw new T(
            e,
            ibiz.i18n.t("runtime.uiAction.noConfiguredopenView")
          );
        const { resultContext: f, resultParams: d } = await this.handleParams(
          e,
          t,
          o,
          c
        ), l = this.handleSelectedData(w);
        l && l.length && (d.selecteddata = JSON.stringify(l));
        const P = this.handleViewOptionParams(d), s = await ibiz.commands.execute(
          E.TAG,
          i,
          f,
          d,
          { event: p, noWaitRoute: A, ...P }
        );
        s != null && s.ok || (a.cancel = !0), s != null && s.ok && s.data && (Array.isArray(s.data) ? a.data = s.data.map((n) => {
          var u;
          return typeof n == "object" && (((u = n.getOrigin) == null ? void 0 : u.call(n)) || n._deData) || n;
        }) : a.data = s.data, a.nextContext = f, a.nextParams = { ...c, ...d });
        break;
      }
      case "PRINT":
        await this.executePrint(e, r);
        break;
      case "DATAIMP":
        a = await this.executeDataImport(e, r);
        break;
      case "DATAEXP":
        await this.executeDataExport(e, r);
        break;
      case "OTHER":
        a = await this.doOther(e, r);
        break;
      case "EDITFORM":
        a = await this.openEditForm(e, r);
        break;
      case "QUICKEDIT":
        a = await this.openQuickEdit(e, r);
        break;
      default:
        throw new x(
          e,
          ibiz.i18n.t("runtime.uiAction.frontProcessingModes", {
            frontProcessType: e.frontProcessType
          })
        );
    }
    return a;
  }
  /**
   * 处理选中数据
   *
   * @memberof AssembleSelectedDataProvider
   */
  handleSelectedData(e) {
    let r = [];
    if (e) {
      const t = e.getController("mdctrl");
      t && (r = t.state.items || []);
    }
    return r.map((t) => ({
      srfkey: t.user_id || t[t.srfkeyfield],
      _id: t.user_id || t[t.srfkeyfield],
      // 传给树的时候需要这个字段
      srfmajortext: t[t.srfmajorfield]
    }));
  }
}
const O = {
  install() {
    k(
      "DEUIACTION_ASSEMBLE_SELECTED_DATA",
      () => new D()
    );
  }
};
export {
  O as default
};
