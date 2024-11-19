<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_actual_end_time = work_item_data.get("actual_end_at");
var c_actual_end_time = work_item_temp.get("actual_end_at");

if (c_actual_end_time) {
    if (p_actual_end_time) {
        if (p_actual_end_time < c_actual_end_time) {
            work_item_data.set("actual_end_at", c_actual_end_time);
        }
    } else {
        work_item_data.set("actual_end_at", c_actual_end_time);
    }
}
```
