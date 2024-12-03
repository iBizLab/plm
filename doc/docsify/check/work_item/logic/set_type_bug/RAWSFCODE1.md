<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var project = logic.getParam("project");
Default.set("work_item_type_id", project.get("type") + "_bug");
Default.set("work_item_type_name", "缺陷");

```
