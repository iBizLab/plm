<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var case_versions = logic.getParam("case_versions");
var for_temp_obj = logic.getParam("for_temp_obj");
if(for_temp_obj.get("cur_version_id")){
    var version_id_in = case_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + for_temp_obj.get("cur_version_id");
    } else {
        version_id_in = for_temp_obj.get("cur_version_id");
    }
    case_versions.set("version_id_in", version_id_in);
}
```
