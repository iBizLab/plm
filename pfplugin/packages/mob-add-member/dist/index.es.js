import { BackendUIActionProvider as O, OpenAppViewCommand as P, registerUIActionProvider as T } from "@ibiz-template/runtime";
import { RuntimeModelError as b } from "@ibiz-template/core";
import { isArray as _ } from "qx-util";
class k extends O {
  async execAction(e, o) {
    const { context: t, params: D, data: x, event: w, view: E } = o, i = {}, u = e.appDataEntityId, h = e.appDEMethodId;
    if (!u || !h)
      throw new b(
        e,
        ibiz.i18n.t("runtime.uiAction.noEntityOrBehavior")
      );
    const { resultContext: p, resultParams: c, resultData: d } = await this.handleParams(
      e,
      t,
      x,
      D
    ), f = { ...c }, g = e.frontAppViewId;
    if (g) {
      const a = this.handleViewOptionParams(c), n = this.handleSelectedData(E);
      n && n.length && (c.selecteddata = JSON.stringify(n));
      const s = await ibiz.commands.execute(
        P.TAG,
        g,
        p,
        c,
        { event: w, ...a }
      );
      if (!(s != null && s.ok))
        return i.cancel = !0, i;
      if (s != null && s.ok && s.data) {
        d.length === 0 && d.push({});
        const I = s.data.map(
          (r) => {
            var m;
            return ((m = r.getOrigin) == null ? void 0 : m.call(r)) || r._deData || r || {};
          }
        );
        d.forEach((r) => {
          r.srfactionparam = I;
        });
      }
    }
    const M = ibiz.hub.getApp(t == null ? void 0 : t.srfappid), A = d.map((a) => {
      var n;
      return ((n = a.getOrigin) == null ? void 0 : n.call(a)) || a || {};
    }).map((a) => Object.assign(a, f)), y = ["MULTIKEY", "MULTIDATA"].includes(
      e.actionTarget
    ), l = await M.deService.exec(
      u,
      h,
      p,
      y ? A : A[0],
      f
    );
    if (l.ok) {
      const a = this.calcMessage("success", e, o);
      a && ibiz.message.success(a);
    }
    return Object.assign(i, {
      data: _(l.data) ? l.data : [l.data],
      nextContext: p,
      nextParams: f
    }), i;
  }
  /**
   * 组装选中数据
   *
   * @param {IViewController} [view]
   * @return {*}  {IData[]}
   * @memberof AddTestMemberProvider
   */
  handleSelectedData(e) {
    let o = [];
    if (e) {
      const t = e.getController("mdctrl");
      t && (o = t.state.items || []);
    }
    return o.map((t) => ({
      ...t,
      _id: t.user_id || t[t.srfkeyfield],
      srfkey: t.user_id || t[t.srfkeyfield],
      srfmajortext: t.srfmajortext || t[t.srfmajorfield]
    }));
  }
}
const U = {
  install() {
    T(
      "DEUIACTION_ADD_TEST_MEMBER",
      () => new k()
    );
  }
};
export {
  U as default
};
