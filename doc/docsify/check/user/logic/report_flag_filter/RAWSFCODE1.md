<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var storage_page = logic.getParam("storage_page");
var user_filter = logic.getParam("Default");
var user_ids = "";
 for (var i = 0; i < storage_page.length; i++) {
     if(i>0){
         user_ids = user_ids+",";
     }
     var _storage = storage_page.get(i);
     user_ids = user_ids + _storage.get("owner_id");
 }
if(user_ids != ""){
    user_filter.ni("id",user_ids);
}
```
