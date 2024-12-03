<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var space_members = logic.getParam("space_members");
var shared_page_members = logic.getParam("shared_page_members");
var user_filter = logic.getParam("Default");
var user_ids = "";
for (var i = 0; i < space_members.length; i++) {
    if(i>0){
        user_ids = user_ids+",";
    }
    var space_member = space_members.get(i);
    user_ids = user_ids + space_member.get("user_id");
}
for (var i = 0; i < shared_page_members.length; i++) {
    if(user_ids != ""){
        user_ids = user_ids+",";
    }
    var shared_page_member = shared_page_members.get(i);
    user_ids = user_ids + shared_page_member.get("user_id");
}
if(user_ids != ""){
    user_filter.ni("id",user_ids);
}
```
