<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    console.log(rows);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const is_system = row.data.is_system;
					 if (is_system === 1) {
						// 禁用
                        row.uaColStates.uagridcolumn1.visible = false;
                        Object.values(row.uaColStates.uagridcolumn1).forEach(item => {
                            item.visible = false;
                            item.disabled = true;
                        })
					} 	
		})
	}

```
