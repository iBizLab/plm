<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var relation = logic.getParam("relation");
if(relation.get("principal_id") != null && relation.get("target_id") != null){
    relation.set("id", relation.get("principal_id") + "_" + relation.get("target_id"));
}
```
