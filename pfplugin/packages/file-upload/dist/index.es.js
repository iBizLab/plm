var m = Object.defineProperty;
var A = (i, t, e) => t in i ? m(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (A(i, typeof t != "symbol" ? t + "" : t, e), e);
import { FrontUIActionProvider as I, registerUIActionProvider as P } from "@ibiz-template/runtime";
import { createUUID as f } from "qx-util";
class x extends I {
  constructor() {
    super(...arguments);
    /**
     * 文件上传路径
     *
     * @type {string}
     * @memberof FileUploadUIActionProvider
     */
    o(this, "uploadUrl", ibiz.env.uploadFileUrl);
  }
  async execAction(e, n) {
    const { context: s, params: l, data: a } = n, { resultContext: c, resultParams: d, resultData: u } = await this.handleParams(
      e,
      s,
      a,
      l
    ), r = await ibiz.util.file.chooseFileAndUpload(
      c,
      d,
      u
    );
    if (r) {
      const U = r.map((p) => ({
        uuid: f(),
        ...p
      }));
      Object.assign(a, U);
    }
    return { data: r };
  }
}
function F() {
  P(
    "DEUIACTION_FILE_UPLOAD",
    () => new x()
  );
}
const g = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    F();
  }
};
export {
  g as default,
  F as registerFileUploadProvider
};
