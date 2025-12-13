<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var update_obj = logic.getParam('update_obj');
update_obj.set('id', _default.get('id'));
update_obj.set('completed_at', new Date());
```
