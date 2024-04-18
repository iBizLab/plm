<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 用户故事类型无父工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
if (type === 'epic') {
    // 史诗
    uiLogic.children_type = `scrum_feature`;
} else if (type === 'feature') {
    // 特性
    uiLogic.children_type = `scrum_story`;
} else if (type === 'story') {
    // 任务与缺陷
    uiLogic.children_type = `scrum_task,scrum_bug`;
    // uiLogic.children_type = `scrum_task`;
}
```
