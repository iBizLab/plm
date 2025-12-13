<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var workload_data = logic.getParam("workload_data");
var cur_estimated_workload = parseFloat(work_item_temp && work_item_temp.get("estimated_workload")) || 0;
var cur_actual_workload = parseFloat(work_item_temp && work_item_temp.get("actual_workload")) || 0;

workload_data.set("estimated_workload", cur_estimated_workload + workload_data.get("estimated_workload"));
sys.info("当前工作项实际工时"+cur_actual_workload);
workload_data.set("actual_workload",cur_actual_workload + workload_data.get("actual_workload")) ;

```
