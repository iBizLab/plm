<p class="panel-title"><b>执行代码</b></p>

```javascript
const grid = uiLogic.content_grid;
await grid.load({ isInitialLoad: false, triggerSource: 'REFRESH' });
if (uiLogic.next_content) {
    const item = grid.state.items.find(x => x.id === uiLogic.next_content.id);
    if (item) {
        grid.setSelection([item], false);
    }
}
```
