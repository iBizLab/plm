<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.title;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 提交
					    if (action.uiActionId === 'submit_form@deliverable') {
                            action.disabled = true;
                        }
                        // 删除
					    if (action.uiActionId === 'del_form@deliverable') {
                            action.disabled = true;
                        }
                        // 提交
					    if (action.uiActionId === 'submit@deliverable') {
                            action.visible = false;
                        }
                        // 删除
					    if (action.uiActionId === 'del_grid@deliverable') {
                            action.visible = false;;
                        }
                        // 编辑
					    if (action.uiActionId === 'edit@deliverable') {
                            action.visible = false;;
                        }
					}
				})
			}
		})
	}
}, 1000);
```
