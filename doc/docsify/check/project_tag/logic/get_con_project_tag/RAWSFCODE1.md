<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item = logic.getParam("Default");
var num = work_item.get("num");
work_item.set("remind", "标签删除后不可恢复。共 " + num + " 个工作项正在使用此标签，删除后会从对应工作项中移除。");

```
