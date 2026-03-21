<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("构造消息提示");
const _message = uiLogic.message_obj;
const work_item_type_name=uiLogic.default.name;
//去重
const project_names = [...new Set(uiLogic.item_page?.map(p => p.project_name).filter(Boolean))].join(',') || '';
const message = `工作项类型 ${work_item_type_name} 已被项目使用,不能删除！
使用的项目包括: ${project_names} `;

_message.message = message;
_message.title = "提示";
```
