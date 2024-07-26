<p class="panel-title"><b>执行代码</b></p>

```javascript
  const rows = uiLogic.grid.state.rows;
//   console.log(rows);
  if (rows && rows.length === 1) {
    rows.forEach(row => {
        row.uaColStates.uagridcolumn1.u36f5de4.disabled = true
    })
  }
```
