<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const is_favorite = row.data.is_favorite;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 星标
					if (action.uiActionId === 'add_favorite@product') {
						action.visible = is_favorite == 0;
					} else if (action.uiActionId === 'cancel_favorite@product') {
						// 取消星标
						action.visible = is_favorite != 0;
					}
				})
			}
		})
	}

```
