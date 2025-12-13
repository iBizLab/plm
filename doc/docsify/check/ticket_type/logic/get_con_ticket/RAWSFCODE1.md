<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var ticket = logic.getParam("Default");
var ticket_num = ticket.get("ticket_num");
ticket.set("remind", "该工单类型关联了" + ticket_num + "个工单，请先将对应的工单变更为其他工单类型再删除。");
ticket.set("disabled",1)
```
