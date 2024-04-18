<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 史诗类型无父工作项
if (!type || type === 'epic') {
    return;
}
if (type === 'feature') {
    // 特性
    uiLogic.parent_type = `scrum_epic`;
} else if (type === 'story') {
    // 用户故事
    uiLogic.parent_type = `scrum_feature`;
} else if (type === 'task' || type === 'bug') {
    // 任务与缺陷
    uiLogic.parent_type = `scrum_story`;
}
```
