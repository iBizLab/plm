<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var version_pages_results = logic.getParam("version_pages_results");

if (version_pages_results) {
    var change_version = {};
    var for_obj = logic.getParam("for_obj");
    for (var i = 0; i < version_pages_results.length; i++) {
        //新增只有to
        if (i === 0) {
            change_version["to"] = version_pages_results.get(i);
        }
    }

    for_obj.set("change_version", change_version);
}
```
