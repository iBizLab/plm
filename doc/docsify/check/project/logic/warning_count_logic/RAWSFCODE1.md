<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var result = logic.getParam("result");
var totalWorkItemCount = result.get("total_work_item_count");
var daily_warning_count = result.get("daily_warning_count");
var upcoming_warning_count = result.get("upcoming_warning_count");
var overdueCount = result.get("overdue_count");
var overdue_ratio = 0;
if (typeof overdueCount === "undefined" && daily_warning_count === "undefined" && upcoming_warning_count === "undefined" || overdueCount === null || daily_warning_count === null || upcoming_warning_count === null) {
    overdue_ratio = 0;
} else if (overdueCount === 0 && daily_warning_count === 0 && upcoming_warning_count === 0) {
    overdue_ratio = 0;
} else {
    overdue_ratio = ((overdueCount + daily_warning_count + upcoming_warning_count) / totalWorkItemCount) * 100;
    overdue_ratio = Math.round(overdue_ratio * 100) / 100;

}
if(overdue_ratio){
    result.set("overdue_ratio", Math.round(overdue_ratio) + "%");
}else{
    result.set("overdue_ratio", "0%");
}

```
