<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var version_pages_results = logic.getParam("version_pages_results");
if (version_pages_results) {
    var change_version = {};
    var for_obj = logic.getParam("for_obj");
    for (var i = 0; i < version_pages_results.length; i++) {
        if (i === 0) {
            change_version["from"] = version_pages_results.get(i);
            change_version["to"] = version_pages_results.get(i);
            sys.info("进入1");
        } else if (i === 1) {
            change_version["from"] = version_pages_results.get(i);
            sys.info("进入2");
        }
    }
    for_obj.set("change_version", change_version);}
```
