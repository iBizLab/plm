var u = Object.defineProperty;
var U = (i, o, e) => o in i ? u(i, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[o] = e;
var n = (i, o, e) => (U(i, typeof o != "symbol" ? o + "" : o, e), e);
import { FrontUIActionProvider as h, registerUIActionProvider as D } from "@ibiz-template/runtime";
import { RuntimeError as a, downloadFileFromBlob as b } from "@ibiz-template/core";
class F extends h {
  constructor() {
    super(...arguments);
    /**
     * 文件下载路径
     *
     * @type {string}
     * @memberof FileDownloadUIActionProvider
     */
    n(this, "downloadUrl", "".concat(ibiz.env.downloadFileUrl, "/%fileId%"));
  }
  async execAction(e, t) {
    const { context: r, params: d, data: s } = t, { resultContext: c, resultParams: l, resultData: w } = await this.handleParams(
      e,
      r,
      s,
      d
    );
    if (!l.fileid)
      return ibiz.log.error("未配置文件id"), {};
    const f = ibiz.util.file.calcFileUpDownUrl(
      c,
      l,
      w
    );
    this.downloadUrl = f.downloadUrl;
    const m = this.downloadUrl.replace("%fileId%", l.fileid);
    return this.fileDownload({ url: m, name: l.filename || "下载文件" }), {};
  }
  /**
   * 请求url获取文件流，并用JS触发文件下载
   *
   * @author lxm
   * @date 2022-11-17 14:11:09
   * @param {string} url
   * @param {IData} file
   */
  fileDownload(e) {
    ibiz.net.request(e.url, {
      method: "get",
      responseType: "blob",
      baseURL: ""
      // 已经有baseURL了，这里无需再写
    }).then((t) => {
      if (t.status !== 200)
        throw new a("下载文件失败");
      if (t.data) {
        const r = e.name;
        b(t.data, r);
      } else
        throw new a("文件流数据不存在");
    });
  }
}
function I() {
  D(
    "DEUIACTION_FILE_DOWNLOAD",
    () => new F()
  );
}
const P = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    I();
  }
};
export {
  P as default,
  I as registerFileDownloadProvider
};
