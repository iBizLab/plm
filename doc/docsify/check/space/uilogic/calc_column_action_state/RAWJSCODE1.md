<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'add_favorite@space') {
						action.disabled = is_favorite !== 0;
					} else if (action.uiActionId === 'cancel_favorite@space') {
						// 取消收藏
						action.disabled = is_favorite === 0;
					} 
				})
			}
		})
	}
}, 1000);
```
