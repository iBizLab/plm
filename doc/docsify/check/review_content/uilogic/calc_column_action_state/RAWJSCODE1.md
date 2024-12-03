<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.target_title;
		const review_state = row.data.review_data.state;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				if (action.uiActionId === 'remove_case@review_content') {
					action.visible = review_state == '10';
				}
                if(action.uiActionId === 'remove_case@review_content' && context.srfreadonly ==true){
                    action.visible = false;
                }
			})
		}
	})
}

```
