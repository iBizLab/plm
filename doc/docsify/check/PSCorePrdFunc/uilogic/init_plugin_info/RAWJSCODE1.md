<p class="panel-title"><b>执行代码</b></p>

```javascript
var data = uiLogic.form.state.data;
var setting_json = JSON.parse(data.settings, null, 4);
data.rt_object_repo = setting_json.rTObjectRepo || "";
data.plugin_code = setting_json.pluginCode || "";
```
