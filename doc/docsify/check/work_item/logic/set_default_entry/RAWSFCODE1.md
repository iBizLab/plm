<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("Default");
var entry_page = logic.getParam("entry_page");
if(entry_page.getReal().numberOfElements > 0){
    defaultObj.set("entry_id", entry_page.get(0).get("id"));
}
```
