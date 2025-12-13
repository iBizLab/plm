<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var bireport = logic.getParam("bireport");
var _default = logic.getParam("default");
_default.set("template_model",bireport.dump());
```
