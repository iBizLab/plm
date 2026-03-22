<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("构造消息提示2");
const _message = uiLogic.message_obj;
const work_item_type_name=uiLogic.default.name;

const message = `确认删除 工作项类型  ${work_item_type_name}  吗？`;

_message.message = message;
_message.title = "确认删除";
```
