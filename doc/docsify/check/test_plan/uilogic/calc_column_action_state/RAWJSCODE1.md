<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const status = row.data.status;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 收藏
					if (action.uiActionId === 'start_test_plan@test_plan') {
						action.visible = status == 'pending';
					} else if (action.uiActionId === 'end_test_plan@test_plan') {
						// 取消收藏
						action.visible = status == 'in_progress';
					}
				})
			}
		})
	}

```
