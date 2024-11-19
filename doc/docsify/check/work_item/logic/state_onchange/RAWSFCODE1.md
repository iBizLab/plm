<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var updated_data = logic.getParam("default");
if (updated_data.get('state_type') == 'in_progress' && updated_data.get('actual_start_at') == null) {
    updated_data.set("actual_start_at", new Date());
}
if (updated_data.get('state_type') == 'completed') {
    updated_data.set('actual_end_at', new Date());
}
```
