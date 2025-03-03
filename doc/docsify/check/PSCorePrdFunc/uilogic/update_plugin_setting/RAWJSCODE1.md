<p class="panel-title"><b>执行代码</b></p>

```javascript
var rt_object_repo = uiLogic.default.rt_object_repo;
var data = uiLogic.form.state.data;
var setting_json = JSON.parse(data.settings);
setting_json.rTObjectRepo = rt_object_repo;
data.settings = JSON.stringify(setting_json, null, 4);
```
