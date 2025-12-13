<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var group_page = logic.getParam("group_page");
var user_filter = logic.getParam("user_filter");
var user_ids = "";
for (var i = 0; i < group_page.length; i++) {
    if(i>0){
        user_ids = user_ids+",";
    }
    var _group_member = group_page.get(i);
    user_ids = user_ids + _group_member.get("user_id");
}
if(user_ids != ""){
    user_filter.in("id",user_ids);
}
```
