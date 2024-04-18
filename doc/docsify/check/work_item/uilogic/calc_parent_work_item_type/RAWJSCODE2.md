<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
if (!type) {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.parent_type = `waterfall_milestone,waterfall_stage`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.parent_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.parent_type = `waterfall_requirement,waterfall_task`;
} else if (type === 'bug') {
    // 缺陷
    uiLogic.parent_type = `waterfall_requirement`;
}
```
