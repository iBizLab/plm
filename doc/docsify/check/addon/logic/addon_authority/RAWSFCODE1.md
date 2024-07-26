<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var addons = logic.getParam('addons');
var result = logic.getParam('result');
for(var i=0 ;i<addons.size;i++){
    var addon = addons.get(i);
    result.set(addon.get('ddon_type'),addon.get('is_enabled'));
}
```
