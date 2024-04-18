<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var test_plan = logic.getParam("test_plan");
if(test_plan.get("project_type") != null){
    Default.set("work_item_type_id", test_plan.get("project_type") + "_bug");
}
```
