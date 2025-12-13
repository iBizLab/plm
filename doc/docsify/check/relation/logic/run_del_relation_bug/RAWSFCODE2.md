<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var for_temp_obj = logic.getParam("for_temp_obj");
var test_case_relation_bug = logic.getParam("test_case_relation_bug");
var bug_relation_test_case = logic.getParam("bug_relation_test_case");
if(for_temp_obj.get("principal_id") != null && for_temp_obj.get("target_id") != null){
    // 获取测试用例关联缺陷对象的主键
    test_case_relation_bug.set("id", for_temp_obj.get("principal_id") + "_" + for_temp_obj.get("target_id"));
    // 获取缺陷关联测试用例对象的主键
    bug_relation_test_case.set("id", for_temp_obj.get("target_id") + "_" + for_temp_obj.get("principal_id"));
}
```
