<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var idea_versions = logic.getParam("idea_versions");
var idea_for_temp = logic.getParam("idea_for_temp");
if(idea_for_temp.get("cur_version_id")){
    var version_id_in = idea_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + idea_for_temp.get("cur_version_id");
    } else {
        version_id_in = idea_for_temp.get("cur_version_id");
    }
    idea_versions.set("version_id_in", version_id_in);
}
```
