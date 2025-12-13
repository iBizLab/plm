<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _settingList = logic.param('settingList').getReal()
def _outSettingList = logic.param('outSettingList').getReal()
def existMap = [:]
for(def i=0;i<_settingList.content.size();i++){
     def _setting = _settingList.content.getAt(i)
     def appViewTag = _setting.get("app_view_tag")
     def _name = _setting.get("name")
     def ownertype = _setting.get("owner_type")
     def tag = String.format("%s|%s",appViewTag,_name)
     if(existMap.containsKey(tag) && ownertype != "PERSONAL"){
         continue
     }
     existMap[tag] = _setting
     _outSettingList.add(_setting)
}
```
