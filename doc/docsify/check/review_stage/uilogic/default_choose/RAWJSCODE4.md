<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.default = null;
uiLogic.list.state.selectedData=[];
let items = uiLogic.list.state.items;
let srfpersonid = uiLogic.ctx.srfpersonid;
for (let i = 0; i < items.length; i++) {
    if (items[i].reviewer === srfpersonid && items[i].stage_state === '20') {
        uiLogic.default = items[i];
        uiLogic.list.state.selectedData.push(items[i]);
        break;
    }
}
```
