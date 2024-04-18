<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var remainingObj = logic.getParam("remaining"); // 剩余工时对象
var estimatedObj = logic.getParam("estimated"); // 预估工时对象
var actualObj = logic.getParam("actual"); // 实际工时对象

var total_register = logic.getParam("total_register"); // 总登记时长
var actual_workload = total_register.get("duration") == null ? 0 : Number(total_register.get("duration"));
var estimated_workload = estimatedObj.get("decimal_value") == null ? 0 : Number(estimatedObj.get("decimal_value"));
var duration = defaultObj.get("duration") == null ? 0 : Number(defaultObj.get("duration"));
sys.info("查询预估工时=", estimated_workload);
sys.info("查询总登记工时=", actual_workload);
// 重新计算剩余工时
var remaining = estimated_workload - (actual_workload - duration);
if(remaining < 0){
    remaining = 0;
}
remainingObj.set("decimal_value", remaining);
// 计算实际工时
var actual = (actual_workload - duration) <= 0 ? 0 : actual_workload - duration;
actualObj.set("decimal_value", actual);

```
