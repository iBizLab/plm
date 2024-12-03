<p class="panel-title"><b>执行代码</b></p>

```javascript
const { gantt } = uiLogic;
if (gantt) {
    const selecteddata = JSON.stringify(gantt.getNodeDataByNodeId('member_node'));
    if (selecteddata) {
        params.selecteddata = selecteddata;
    }
}
```
