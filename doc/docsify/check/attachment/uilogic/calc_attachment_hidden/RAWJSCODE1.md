<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.mdController.state.rows;
const srfreadonly = context.srfreadonly;
if (rows && rows.length > 0) {
	rows.forEach(row => {
        // 删除附件行为禁用
		const uiActionId = row.uaColStates.uagridcolumn1.u44d00e2;
        if(srfreadonly == true){
            uiActionId.disabled = true;
        }    
	})
}	

```
