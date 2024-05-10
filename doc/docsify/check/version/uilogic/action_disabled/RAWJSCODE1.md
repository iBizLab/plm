<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const actionColumn = row.uiActionGroupStates.create_time;
		if (actionColumn && Object.values(actionColumn).length > 0) {
			Object.values(actionColumn).forEach(action => {
                if(srfreadonly == true){
					// 恢复版本
					if (action.uiActionId === 'restore@version') {
                        action.disabled = true;
                    }
                    //编辑版本
					if (action.uiActionId === 'edit_version@version') {
                        action.disabled = true;
                    }
				}
			})
		}
	})
}	

```
