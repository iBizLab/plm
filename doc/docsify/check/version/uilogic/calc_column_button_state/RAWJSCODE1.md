<p class="panel-title"><b>执行代码</b></p>

```javascript
// 主表单中的当前版本标识
const cur_version_id = uiLogic.view.parentView.layoutPanel.panelItems.form.control.data.cur_version_id;
console.log("主表单中的当前版本标识", cur_version_id);
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
		const titleColumn = row.uiActionGroupStates.create_time;
		const version_id = row.data.id;
		if (titleColumn && Object.values(titleColumn).length > 0) {
			Object.values(titleColumn).forEach(action => {
				if (action.uiActionId === 'restore@version') {
                    // 版本标识为当前版本标识，禁用恢复版本
					action.disabled = uiLogic.ctx.srfreadonly || version_id == cur_version_id;
				}
			})
		}
	})
}

```
