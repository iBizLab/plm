<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var _default = logic.getParam('Default');
var groupdata = logic.getParam('group_data');
if( _default.get("group")!=null){
    groupdata.set("groupname", _default.codeitem("group").text);
    groupdata.set("groupcodename", _default.get("group"));
}
if( _default.get("id")!=null){
    var appportletid = "plmweb.";
    if(_default.get("app_tag")){
        appportletid = _default.get("app_tag") + ".";
    }
    var appportletcodename = "uxbireport__"+_default.get("id").replace(".", "__");
    appportletid = appportletid + appportletcodename;
    groupdata.set("psappportletid",appportletid.toLowerCase());
    groupdata.set("codename",appportletcodename.toLowerCase());
    groupdata.set("psappportletname",_default.get("name"));
    _default.set("ctrl_id",appportletid.toLowerCase());
}

```
