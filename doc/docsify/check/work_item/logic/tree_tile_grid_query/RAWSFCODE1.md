<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var temp = logic.getParam("for_temp");
var work_item = logic.getParam("work_item");
var top_ids = work_item.get("top_ids");
if(top_ids == null){
    top_ids = temp.get("id");
} else {
    top_ids = top_ids + ";" + temp.get("id");
}
work_item.set("top_ids", top_ids);
```
