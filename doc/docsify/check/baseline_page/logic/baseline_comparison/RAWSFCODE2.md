<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var page_versions = logic.getParam("page_versions");
var page_for_temp = logic.getParam("page_for_temp");
if(page_for_temp.get("cur_version_id")){
    var version_id_in = page_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + page_for_temp.get("cur_version_id");
    } else {
        version_id_in = page_for_temp.get("cur_version_id");
    }
    page_versions.set("version_id_in", version_id_in);
}
```
