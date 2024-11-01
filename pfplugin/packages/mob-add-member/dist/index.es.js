import { BackendUIActionProvider as I, OpenAppViewCommand as P, registerUIActionProvider as T } from "@ibiz-template/runtime";
import { RuntimeModelError as b } from "@ibiz-template/core";
import { isArray as O } from "qx-util";
class v extends I {
  async execAction(s, u) {
    const { context: n, params: g, data: w, event: D } = u, i = {}, m = s.appDataEntityId, f = s.appDEMethodId;
    if (!m || !f)
      throw new b(
        s,
        ibiz.i18n.t("runtime.uiAction.noEntityOrBehavior")
      );
    const { resultContext: c, resultParams: d, resultData: o } = await this.handleParams(
      s,
      n,
      w,
      g
    ), p = { ...d }, l = s.frontAppViewId;
    if (l) {
      const t = this.handleViewOptionParams(d), a = await ibiz.commands.execute(
        P.TAG,
        l,
        c,
        d,
        { event: D, ...t }
      );
      if (!(a != null && a.ok))
        return i.cancel = !0, i;
      if (a != null && a.ok && a.data) {
        o.length === 0 && o.push({});
        const x = a.data.map(
          (e) => {
            var h;
            return ((h = e.getOrigin) == null ? void 0 : h.call(e)) || e._deData || e || {};
          }
        );
        o.forEach((e) => {
          e.srfactionparam = x;
        });
      }
    }
    const E = ibiz.hub.getApp(n == null ? void 0 : n.srfappid), A = o.map((t) => {
      var a;
      return ((a = t.getOrigin) == null ? void 0 : a.call(t)) || t || {};
    }).map((t) => Object.assign(t, p)), M = ["MULTIKEY", "MULTIDATA"].includes(
      s.actionTarget
    ), r = await E.deService.exec(
      m,
      f,
      c,
      M ? A : A[0],
      p
    );
    if (r.ok) {
      const t = this.calcMessage("success", s, u);
      t && ibiz.message.success(t);
    }
    return Object.assign(i, {
      data: O(r.data) ? r.data : [r.data],
      nextContext: c,
      nextParams: p
    }), i;
  }
}
const z = {
  install() {
    T(
      "DEUIACTION_ADD_TEST_MEMBER",
      () => new v()
    );
  }
};
export {
  z as default
};
