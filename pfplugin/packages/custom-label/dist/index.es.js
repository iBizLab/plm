var p = Object.defineProperty;
var x = (s, t, e) => t in s ? p(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var d = (s, t, e) => (x(s, typeof t != "symbol" ? t + "" : t, e), e);
import { ChartController as m, registerControlProvider as f } from "@ibiz-template/runtime";
class u extends m {
  /**
   * 根据数据计算最终的options
   * 并刷新echarts
   * @author lxm
   * @date 2023-06-07 09:58:00
   * @param {IData[]} [data=this.state.items]
   */
  async calcOptions(t = this.state.items) {
    this.options = await this.generator.calcOptionsByData(
      t,
      this.context,
      this.params
    );
    const e = this.handleTotalData(this.options);
    this.customLabel(this.options, e), this.updateChart();
  }
  /**
   * 自定义label
   * @param options 图表数据
   * @param totalMap 分组数据
   */
  customLabel(t, e) {
    t && Array.isArray(t.xAxis) && t.xAxis.length > 0 && (t.xAxis[0].axisLabel || (t.xAxis[0].axisLabel = {}), Object.assign(t.xAxis[0].axisLabel, {
      formatter: function(a, i) {
        const n = e[a] || 0;
        return "".concat(a, "(").concat(n, ")");
      }
    }));
  }
  /**
   * 计算分组后的数据
   * @param options
   * @returns
   */
  handleTotalData(t) {
    const e = {};
    return t && t.series && t.series.forEach((a) => {
      const i = a.name;
      a.data && a.type === "bar" && a.data.forEach((n) => {
        var h;
        const r = n[0], o = (h = this.chart) == null ? void 0 : h.getOption();
        let c = {};
        if (o && o.legend && Array.isArray(o.legend) && o.legend.length > 0 && (c = o.legend[0].selected), Object.prototype.hasOwnProperty.call(c, i) && c[i] === !1)
          return;
        let l = n[1];
        isNaN(l) && (l = 0), e[r] || e[r] === 0 ? e[r] += l : e[r] = l;
      });
    }), e;
  }
  /**
   * 重写初始化方法，增加监听点击图例的方法
   * @date 2023-06-07 09:37:05
   * @param {HTMLElement} dom
   */
  initChart(t) {
    var a;
    super.initChart(t);
    const e = this;
    (a = this.chart) == null || a.on("legendselectchanged", function(i) {
      var r;
      const n = e.handleTotalData(e.options || {});
      e.customLabel(e.options || {}, n), (r = e.chart) == null || r.setOption(e.options || {});
    });
  }
}
class C {
  constructor() {
    d(this, "component", "IBizChartControl");
  }
  createController(t, e, a, i) {
    return new u(t, e, a, i);
  }
}
const A = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(s) {
    f(
      "CHART_RENDER_CUSTOM_LABEL",
      () => new C()
    );
  }
};
export {
  A as default
};
