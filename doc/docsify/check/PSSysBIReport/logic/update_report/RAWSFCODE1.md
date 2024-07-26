<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("Default");
var insight_report = logic.getParam("insight_report");
var str_uimodel = _default.get("bireportuimodel");
var uimodel = JSON.parse(str_uimodel);
var chart_type = uimodel.selectChartType;
insight_report.set("chart_type",chart_type);
insight_report.set("template_model",_default.dump());
```
