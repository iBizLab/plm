<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_ids = logic.getParam("idea_ids");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("target_id")){
    var ids = idea_ids.get("ids");
    if(ids){
        ids = ids + "," + for_temp_obj.get("target_id");
    } else {
        ids = for_temp_obj.get("target_id");
    }
    idea_ids.set("ids", ids);
}
```
