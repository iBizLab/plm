<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var staticfics = logic.getParam("log_statistics");
var defvar = logic.getParam("default");
var success_per = 0;
var success_count = 0;
var failure_count = 0;
for (var i = 0; i < staticfics.size(); i++) {
    var staticfic = staticfics.get(i); 
    if (staticfic.get("state") == "SUCCESS"){
        success_count = staticfic.get("count");
    }
    if (staticfic.get("state") == "FAILURE"){
        failure_count = staticfic.get("count");
    }
}
var total = success_count + failure_count;
success_per = (success_count / total) *100 ;
defvar.set("success_count",success_count);
defvar.set("failure_count",failure_count);
defvar.set("success_per",success_per);
defvar.set("total",total);
```
