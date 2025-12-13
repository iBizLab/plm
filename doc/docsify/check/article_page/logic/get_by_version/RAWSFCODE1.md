<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
var versionObj = logic.getParam("version");
var id = defaultObj.get("id");
if(id != null && id != ''){
    if(id.contains("__SRFVERSION__")){
        var idArray = [];
        idArray = id.split("__SRFVERSION__");
        defaultObj.set("id",idArray[0]);
        versionObj.set("id",idArray[1]);
    }
}
```
