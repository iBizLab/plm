<p class="panel-title"><b>执行代码</b></p>

```javascript

	const rows = uiLogic.grid.state.rows;
	const srfreadonly = context.srfreadonly;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const actionColumn = row.uiActionGroupStates.target_priority;
			if (actionColumn && Object.values(actionColumn).length > 0) {
				Object.values(actionColumn).forEach(action => {
                    if(srfreadonly == true){
					    // 取消关联
					    if (action.uiActionId === 'del_relation@relation') {
                            action.disabled = true;
                        }
					    if (action.uiActionId === 'work_item_del_relation_test_case@relation') {
                            action.disabled = true;
                        }
                        if (action.uiActionId === 'test_case_del_relation_bug@relation') {
                            action.disabled = true;
                        }
                        if (action.uiActionId === 'run_del_relation_bug@relation') {
                            action.disabled = true;
                        }
					}
				})
			}
		})
	}

```
