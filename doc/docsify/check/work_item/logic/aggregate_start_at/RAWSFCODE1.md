<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_temp = logic.getParam("cur_work_item_temp");
var p_work_item = logic.getParam("p_work_item");
var work_item_data = logic.getParam("work_item_data");
var p_start_time = work_item_data.get("start_at");
var c_start_time = work_item_temp.get("start_at");

if (c_start_time) {
    if (p_start_time) {
        if (p_start_time > c_start_time) {
            work_item_data.set("start_at", c_start_time);
        }
    } else {
        work_item_data.set("start_at", c_start_time);
    }
}
```
