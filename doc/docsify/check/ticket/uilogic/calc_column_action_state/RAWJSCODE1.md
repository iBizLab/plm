<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 归档
					if (action.uiActionId === 'archive@ticket') {
						action.disabled = is_archived !== 0;
					} else if (action.uiActionId === 'activate@ticket') {
						// 激活
						action.disabled = is_archived === 0;
					} 
				})
			}
		})
	}
}, 1000);
```
