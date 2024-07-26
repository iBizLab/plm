<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_guideline = logic.getParam("new_guideline");
var for_obj_guideline = logic.getParam("for_obj_guideline");
new_guideline.set("id",new_guideline.get("scope_id")+"_"+for_obj_guideline.get("id"));
```
