<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 缺陷无子类型
if (!type || type === 'bug') {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.children_type = `waterfall_milestone,waterfall_stage`;
    // uiLogic.children_type = `waterfall_milestone`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.children_type = `waterfall_requirement,waterfall_task,waterfall_bug`;
    // uiLogic.children_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.children_type = `waterfall_task`;
}
```
