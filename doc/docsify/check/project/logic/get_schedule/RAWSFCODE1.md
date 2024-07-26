<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var project = logic.getParam("Default");
var dividend = parseInt(project.get("completed_work_items"));
var divisor = parseInt(project.get("all_work_items"));
if(dividend != 0 && divisor != 0){
    project.set("schedule",  Math.round((dividend / divisor) * 100));
} else {
    project.set("schedule",  0);
}
```
