<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 任务类型与缺陷类型无子工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 0) {
    uiLogic.children_type = `kanban_${list[1]}`;
} else if (index === 1) {
    uiLogic.children_type = `kanban_${list[2]}`;
} else if (index === 2) {
    uiLogic.children_type = `kanban_task,kanban_bug`;
    // uiLogic.children_type = `kanban_task`;
}
```
