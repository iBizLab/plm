<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var workload_data = logic.getParam("workload_data");
var actual_workload = workload_data.get("actual_workload");
var estimated_workload =workload_data.get("estimated_workload");
var remaining_workload = null;
if(estimated_workload){
    if(actual_workload){
        remaining_workload = estimated_workload-actual_workload;
        if(remaining_workload>0){
            workload_data.set("remaining_workload",remaining_workload);
        }
    }else{
        workload_data.set("remaining_workload",estimated_workload);
    }
}


```
