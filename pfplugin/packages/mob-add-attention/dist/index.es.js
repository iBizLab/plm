import { BackendUIActionProvider as E, OpenAppViewCommand as M, registerUIActionProvider as O } from "@ibiz-template/runtime";
import { RuntimeModelError as U } from "@ibiz-template/core";
import { isArray as b } from "qx-util";
class T extends E {
  async execAction(e, n) {
    const { context: o, params: m, data: i, event: u } = n, c = {}, x = e.appDataEntityId, g = e.appDEMethodId;
    if (!x || !g)
      throw new U(
        e,
        ibiz.i18n.t("runtime.uiAction.noEntityOrBehavior")
      );
    const { resultContext: f, resultParams: h, resultData: d } = await this.handleParams(
      e,
      o,
      i,
      m
    ), { ctx: A } = n.view, D = [];
    if (A && A.controllersMap) {
      const t = A.controllersMap.get("mdctrl").state.items || [];
      t == null || t.forEach((r) => {
        const s = r.user_id || r._value, l = r.name || r._text;
        D.push({ srfkey: s, srfmajortext: l });
      });
    }
    const w = {
      ...h
    }, I = e.frontAppViewId;
    if (I) {
      const a = this.handleViewOptionParams(h), t = await ibiz.commands.execute(
        M.TAG,
        I,
        f,
        // selectedData用于回显关注人集合
        { ...h, selecteddata: JSON.stringify(D) },
        { event: u, ...a }
      );
      if (!(t != null && t.ok))
        return c.cancel = !0, c;
      if (t != null && t.ok && t.data) {
        d.length === 0 && d.push({});
        const r = t.data.map(
          (s) => {
            var l;
            return ((l = s.getOrigin) == null ? void 0 : l.call(s)) || s._deData || s || {};
          }
        );
        d.forEach((s) => {
          s.srfactionparam = r;
        }), await this.UpdateLocalData(n, t.data);
      }
    }
    const v = ibiz.hub.getApp(o == null ? void 0 : o.srfappid), P = d.map((a) => {
      var t;
      return ((t = a.getOrigin) == null ? void 0 : t.call(a)) || a || {};
    }).map((a) => Object.assign(a, w)), y = ["MULTIKEY", "MULTIDATA"].includes(
      e.actionTarget
    ), p = await v.deService.exec(
      x,
      g,
      f,
      y ? P : P[0],
      w
    );
    if (p.ok) {
      const a = this.calcMessage("success", e, n);
      a && ibiz.message.success(a);
    }
    return Object.assign(c, {
      data: b(p.data) ? p.data : [p.data],
      nextContext: f,
      nextParams: w
    }), c;
  }
  /**
   * 更新缓存数据
   *
   * @memberof AddAttentionProvider
   */
  async UpdateLocalData(e, n) {
    const { context: o, view: m } = e, { service: i } = m.layoutPanel.panelItems.mdctrl.control;
    i && Promise.all(
      n.map(async (u) => {
        const c = i.toUIData(u);
        await i.create(o, c);
      })
    );
  }
}
const S = {
  install() {
    O(
      "DEUIACTION_REFRESH_LIST",
      () => new T()
    );
  }
};
export {
  S as default
};
