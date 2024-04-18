<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const rows = uiLogic.grid.state.rows;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const newRowHiddenList = ['kanban_bug', 'kanban_issue', 'waterfall_bug', 'scrum_story'];
            const changeParentHiddenList = ['scrum_epic', 'kanban_epic', 'kanban_issue'];
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
					// 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = is_archived === 0;
					} else if (action.uiActionId === 'newrow_test@work_item') {
						// 新建行
						action.visible = !newRowHiddenList.includes(type);
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = !changeParentHiddenList.includes(type);
					}
				})
			}
		})
	}
}, 1000);
```
