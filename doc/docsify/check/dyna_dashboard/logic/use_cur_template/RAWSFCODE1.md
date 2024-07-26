<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var new_board = logic.getParam("new_board");
var strModel = new_board.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var bireportids = [];
var replaceIds ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var portletid = reportModel.i;
  var bireportid = portletid.substring(12).replace("__",".");
  bireportids.push(bireportid);
}
var reportSearchContext = sys.filter("insight_report");
var templReports = reportSearchContext.in("id",bireportids.join(",")).pageable(0,1000).select("is_system");
for(var i=0; i<templReports.length; i++){
    var bireport = templReports.get(i);
    var orginId = bireport.get("id");
    bireport.reset("id");
    bireport.set("view_id",new_board.get("owner_id"));
    bireport.set("is_system",0);
    var newbireport = bireport.create();
    replaceIds[orginId.replace(".","__").toLowerCase()] = newbireport.get("id").replace(".","__").toLowerCase();
}
for(var key in replaceIds){
    var keyreg = new RegExp(key, "g");
    strModel = strModel.replace(keyreg,replaceIds[key]);
}
new_board.set("model",strModel);
```
