<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.name;
		const status = row.data.status;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				// 设立完成
				if (action.uiActionId === 'set_complete_library@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_project@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_product@baseline') {
					action.visible = status == '1';
				}
                if (action.uiActionId === 'set_complete_space@baseline') {
					action.visible = status == '1';
				}
			})
		}
	})
}	

```
