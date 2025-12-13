<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var project_temp = logic.getParam("project_temp");
var end_at = project_temp.get("END_AT");
var overdue_time = new Date();

if (project_temp && end_at) {
    var endTimeDate = new Date(end_at);
    var timeDiff = overdue_time - endTimeDate;
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    project_temp.set("daysDiff",daysDiff); 

}
```
