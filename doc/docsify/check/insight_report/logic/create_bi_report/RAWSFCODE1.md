<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var bireport = logic.getParam("bireport");
var templateModel = _default.get("template_model");
if(templateModel != null){
    bireport.from(templateModel);
    bireport.reset("pssysbireportid");
    bireport.reset("codename");
}
```
