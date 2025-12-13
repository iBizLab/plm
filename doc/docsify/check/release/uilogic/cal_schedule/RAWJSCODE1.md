<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
	rows.forEach(row => {
        row.data.schedule = 0;
		const completed_work_items = row.data.completed_work_items;
        const all_work_items = row.data.all_work_items;
        if(all_work_items !== 0 && completed_work_items !== 0){
            row.data.schedule = Math.round((completed_work_items / all_work_items) * 100);
        }
	})
}
```
