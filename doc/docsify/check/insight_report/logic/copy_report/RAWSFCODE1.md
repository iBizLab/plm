<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var target_board = logic.getParam("target_board");
var new_report = logic.getParam("new_report");
var strModel = target_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds = {};
//获取新建报表ID数据，同步生成仪表盘的模型数据
var portletId = ("plmweb.uxbireport__") + (new_report.get("id").toLowerCase());
var portletCodeName = ("uxbireport__") + (new_report.get("id").toLowerCase());
var new_board_report = {};
new_board_report.i = portletCodeName;
new_board_report.portletId = portletId;
new_board_report.portletCodeName = portletCodeName;



```
