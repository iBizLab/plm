var f = Object.defineProperty;
var b = (t, l, e) => l in t ? f(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e;
var n = (t, l, e) => (b(t, typeof l != "symbol" ? l + "" : l, e), e);
import { FrontUIActionProvider as h, getPlatformType as F, PlatformType as U, registerUIActionProvider as p } from "@ibiz-template/runtime";
import { RuntimeError as a, downloadFileFromBlob as D } from "@ibiz-template/core";
class I extends h {
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
  async execAction(e, o) {
    const { context: r, params: d, data: s } = o, { resultContext: c, resultParams: i, resultData: m } = await this.handleParams(
      e,
      r,
      s,
      d
    );
    if (!i.fileid)
      return ibiz.log.error("未配置文件id"), {};
    const w = ibiz.util.file.calcFileUpDownUrl(
      c,
      i,
      m
    );
    this.downloadUrl = w.downloadUrl;
    const u = this.downloadUrl.replace("%fileId%", i.fileid);
    return this.fileDownload({ url: u, name: i.filename || "下载文件" }), {};
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
    if (F() === U.DINGTALK) {
      this.downloadFileFromBlob(e);
      return;
    }
    ibiz.net.request(e.url, {
      method: "get",
      responseType: "blob",
      baseURL: ""
      // 已经有baseURL了，这里无需再写
    }).then((o) => {
      if (o.status !== 200)
        throw new a("下载文件失败");
      if (o.data) {
        const r = e.name;
        D(o.data, r);
      } else
        throw new a("文件流数据不存在");
    });
  }
  /**
   * 适配钉钉文件下载，钉钉移动端下载需跳转到浏览器
   *
   * @param {string} url
   * @param {IData} file
   */
  downloadFileFromBlob(e) {
    const o = document.createElement("a");
    o.href = "".concat(e.url), o.target = "_blank", o.download = "download", o.style.display = "inline", document.body.appendChild(o), o.click(), document.body.removeChild(o);
  }
}
function y() {
  p(
    "DEUIACTION_FILE_DOWNLOAD",
    () => new I()
  );
}
const v = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    y();
  }
};
export {
  v as default,
  y as registerFileDownloadProvider
};
