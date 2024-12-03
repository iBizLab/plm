<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var addons = logic.getParam('addons');
var result = logic.getParam('result');
var cur_owner_addons = [];
var predefine_addons = [];
for (var i = 0; i < addons.getLength(); i++) {
  var addon = addons.get(i);
  if(addon.get("is_enabled") != 0){
      addon.set("is_enabled",1);
  }
  if (addon.get("owner_id") != null) {
    cur_owner_addons.push(addon);
  } else {
    predefine_addons.push(addon);
  }
}
//初始化预置组件
if (cur_owner_addons.length == 0) {
  for (var i = 0; i < predefine_addons.length; i++) {
    var predefine_addon = predefine_addons[i];
    predefine_addon.reset("id");
    predefine_addon.set("owner_id", _default.get("id"));
    predefine_addon.create();
    if (predefine_addon.get('is_enabled') == 0) {
      result.set(predefine_addon.get('addon_type'),-1);
    } else {
      result.set(predefine_addon.get('addon_type'),0);
    }
  }
} else {
  for (var i = 0; i < predefine_addons.length; i++) {
    var create_flag = true;
    var predefine_addon = predefine_addons[i];
    var predefine_addon_type = predefine_addon.get("addon_type");
    for (var j = 0; j < cur_owner_addons.length; j++) {
      var cur_owner_addon = cur_owner_addons[j];
      var cur_owner_addon_type = cur_owner_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        create_flag = false;
      }
    }
    if (create_flag) {
      predefine_addon.reset("id");
      predefine_addon.set("owner_id", _default.get("id"));
      predefine_addon.create();
      cur_owner_addons.push(predefine_addon);
    }
  }
  for (var i = 0; i < cur_owner_addons.length; i++) {
    var delete_flag = true;
    var cur_owner_addon = cur_owner_addons[i];
    var cur_owner_addon_type = cur_owner_addon.get("addon_type");
    for (var j = 0; j < predefine_addons.length; j++) {
      var predefine_addon = predefine_addons[j];
      var predefine_addon_type = predefine_addon.get("addon_type");
      if (predefine_addon_type == cur_owner_addon_type) {
        delete_flag = false;
      }
    }
    if (cur_owner_addon.get('is_enabled') == 0) {
      result.set(cur_owner_addon_type,-1);
    } else {
      result.set(cur_owner_addon_type,0);
    }
    if (delete_flag) {
      cur_owner_addon.remove();
      result.set(cur_owner_addon_type,-1);
    }
  }
}
```
