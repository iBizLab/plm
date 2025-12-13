<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var tag = logic.getParam("Default");
var num = tag.get("num");
tag.set("remind", "标签删除后不可恢复。共 " + num + " 个工单正在使用此标签，删除后会从对应事项中移除。");

```
