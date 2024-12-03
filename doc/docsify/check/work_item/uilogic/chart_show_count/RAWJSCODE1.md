<p class="panel-title"><b>执行代码</b></p>

```javascript
const { chart } = uiLogic;
if (chart) {
  const { options } = chart;
  const count = chart.state.items.length || 0;
  const text = '总数：' + count;
  Object.assign(options.title, { text, show: true });
  chart.updateChart();
}
```
