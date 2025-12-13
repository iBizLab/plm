<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var work_item_versions = logic.getParam("work_item_versions");
var work_item_for_temp = logic.getParam("work_item_for_temp");
if(work_item_for_temp.get("cur_version_id")){
    var version_id_in = work_item_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + work_item_for_temp.get("cur_version_id");
    } else {
        version_id_in = work_item_for_temp.get("cur_version_id");
    }
    work_item_versions.set("version_id_in", version_id_in);
}
```
