<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
    rows.forEach(row => {
        const is_system = row.data.is_system;
        if (is_system === 1) {
            row.uaColStates.uagridcolumn1.u2cc9dd2.visible = false;
            row.uaColStates.uagridcolumn1.u8247bb2.visible = false;
        }
    })
}
```
