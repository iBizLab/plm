<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var sprint = logic.getParam("Default");
var not_finish_num = sprint.get("not_finish_num");
sprint.set("remind", "该迭代仍有" + not_finish_num + "个工作项没有完成，将它们：");

```
