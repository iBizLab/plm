<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var test_case_versions = logic.getParam("test_case_versions");
var test_case_for_temp = logic.getParam("test_case_for_temp");
if(test_case_for_temp.get("cur_version_id")){
    var version_id_in = test_case_versions.get("version_id_in");
    if(version_id_in){
        version_id_in = version_id_in + "," + test_case_for_temp.get("cur_version_id");
    } else {
        version_id_in = test_case_for_temp.get("cur_version_id");
    }
    test_case_versions.set("version_id_in", version_id_in);
}
```
