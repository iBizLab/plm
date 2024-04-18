<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var activity_infos = logic.getParam("activity_info");
var get_infos = logic.getParam("get_infos") || {}; 

var create_time = activity_infos.get("create_time");
var create_man = activity_infos.get("oppersonname");

var print_info = create_man + '于' + create_time + '归档了工作项';

get_infos.set("archived_info",print_info);


```
