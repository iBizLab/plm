<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var old_work_item_type_id = _default.get("work_item_type_id");

var first_value = old_work_item_type_id.split(';')[0];

_default.set("work_item_type_id", first_value);
```
