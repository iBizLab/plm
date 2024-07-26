<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam("default");
var strModel = _default.get("model");
var modeljO = JSON.parse(strModel);
var modeljArray = modeljO.model;
var biPortletIds = [];
var replaceIds ={};
var biPortletDigest ={};
for(var i=0; i<modeljArray.length; i++){
  var reportModel = modeljArray[i];
  var dynamodelFlag =  reportModel.dynamodelFlag;
  if(dynamodelFlag && dynamodelFlag == 1){
    var portletId =  reportModel.portletId;
    var portletDigest = reportModel.controlmodeldigest?reportModel.controlmodeldigest:"__needRefresh__";
    biPortletIds.push(portletId);
    biPortletDigest[portletId] = portletDigest;
  }
}
var portletSearchContext = sys.filter("psappportlet");
var viewPortlets = portletSearchContext.in("psappportletid",biPortletIds.join(",")).eq("pssysappid","plmweb").ne("dynamodelflag",0).pageable(0,200).select();
for(var i=0; i<viewPortlets.length; i++){
    var biPortlet = viewPortlets.get(i);
    var biPortletId = biPortlet.get("psappportletid");
    var curPortletDigest = biPortlet.get("controlmodeldigest");
    if(biPortletDigest[biPortletId] && biPortletDigest[biPortletId] != curPortletDigest){
        var  lastBIPortlet = biPortlet.last();
        replaceIds[biPortletId] = lastBIPortlet;
    }
}
for(var j=0; j<modeljArray.length; j++){
  var dynamodelFlag =  reportModel.dynamodelFlag;    
  if(dynamodelFlag != 1){
      continue;
  }
  var reportModel2 = modeljArray[j];
  var portletId2 = reportModel2.portletId;
  reportModel2["orignModel"] = false;

  if(replaceIds[portletId2] != null){
        reportModel2.portletModel = JSON.parse(replaceIds[portletId2].get("controlmodel"))
        reportModel2["orignModel"] = true;
        reportModel2["controlmodeldigest"] = replaceIds[portletId2].get("controlmodeldigest");
  }
  if(reportModel2.portletModel.controlmodeldigest){
        reportModel2["orignModel"] = true;
  }
}
_default.set("model",JSON.stringify(modeljO));
```
