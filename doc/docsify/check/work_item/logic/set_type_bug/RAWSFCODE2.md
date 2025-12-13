<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var project = logic.getParam("project");

if(project.get("type")=="scrum"){
    Default.set("work_item_type_id", "scrum_epic");
    Default.set("work_item_type_name", "史诗");
}
if(project.get("type")=="kanban"){
    Default.set("work_item_type_id", "kanban_epic");
    Default.set("work_item_type_name", "史诗");
}
if(project.get("type")=="waterfall"){
    Default.set("work_item_type_id", "waterfall_stage");
    Default.set("work_item_type_name", "阶段");
}
if(project.get("type")=="hybrid"){
    Default.set("work_item_type_id", "hybrid_stage");
    Default.set("work_item_type_name", "阶段");
}


```
