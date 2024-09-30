import { UIActionProviderBase as g, convertNavData as l, formatMultiData as u, registerUIActionProvider as h } from "@ibiz-template/runtime";
class m extends g {
  async execAction(e, s) {
    const { context: r, params: a, data: n } = s, { resultParams: t } = await this.handleParams(
      e,
      r,
      n,
      a
    );
    return this.validate(t) ? await this.changePass(t) ? {
      refresh: !0,
      refreshMode: e.refreshMode
    } : { refresh: !1 } : { refresh: !1 };
  }
  async changePass(e) {
    try {
      return await ibiz.net.post("/uaa/changepwd", {
        oldPwd: e.oldpassword,
        newPwd: e.newpassword
      }), ibiz.message.success("修改密码成功"), !0;
    } catch (s) {
      return ibiz.message.error("修改密码失败,".concat(s.message || "")), !1;
    }
  }
  validate(e) {
    const { newpassword: s, oldpassword: r, surepassword: a } = e;
    return s ? r ? a ? r === s ? (ibiz.message.error("新密码不能与旧密码一致"), !1) : s !== a ? (ibiz.message.error("两次密码不一致"), !1) : !0 : (ibiz.message.error("确认密码不能为空"), !1) : (ibiz.message.error("新密码不能为空"), !1) : (ibiz.message.error("原密码不能为空"), !1);
  }
  async handleParams(e, s, r, a) {
    const n = [], t = s.clone(), o = [...e.navigateContexts || []], i = ["MULTIKEY", "MULTIDATA"].includes(e.actionTarget) && r.length > 0, d = l(
      o,
      i ? u(o, r) : r[0] || {},
      a,
      s
    );
    Object.assign(t, d);
    const c = e.navigateParams, f = l(
      c,
      i ? u(c, r) : r[0] || {},
      a,
      t
    );
    return { resultContext: t, resultData: n, resultParams: f };
  }
}
function w() {
  h(
    "DEUIACTION_CHANGE_PASSWORD",
    () => new m()
  );
}
const b = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    w();
  }
};
export {
  b as default,
  w as registerChangePasswordProvider
};
