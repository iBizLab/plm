<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var remaining_workload = defaultObj.get("remaining_workload") == null ? 0 : Number(defaultObj.get("remaining_workload"));
var actual_workload = defaultObj.get("actual_workload") == null ? 0 : Number(defaultObj.get("actual_workload"));
var estimated_workload = defaultObj.get("estimated_workload") == null ? 0 : Number(defaultObj.get("estimated_workload"));
var duration = defaultObj.get("duration") == null ? 0 : Number(defaultObj.get("duration"));
var actual = actual_workload - duration;
if(actual <= 0){
    defaultObj.set("actual_workload", null);
} else {
    defaultObj.set("actual_workload", actual);
}
// 计算工时进度
if((actual_workload + remaining_workload) != 0){
    var schedule = ((actual_workload / (actual_workload + remaining_workload)) * 100).toFixed(1);
    defaultObj.set("workload_schedule", schedule);
}
var principal_type = defaultObj.get("principal_type");
if(principal_type == 'WORK_ITEM'){
    defaultObj.set("workload_kind", "工作项");
}
if(principal_type == 'IDEA'){
    defaultObj.set("workload_kind", "产品需求");
}
if(principal_type == 'TEST_CASE'){
    defaultObj.set("workload_kind", "测试用例");
}

```
