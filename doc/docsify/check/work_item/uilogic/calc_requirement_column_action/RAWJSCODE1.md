<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
    const rows = uiLogic.grid.state.rows;
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.title;
			const is_archived = row.data.is_archived;
            const type = row.data.work_item_type_id;
            const codelistItem = dataItems.find(x => x.id === type);
            const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
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
                        action.visible = !!codelistItem.data;
                        // 需求树表格上 用户故事不显示新建行
                        if(type == 'scrum_story'){
						    action.visible = false;
                        }
					} else if (action.uiActionId === 'change_parent@work_item') {
						// 变更父工作项
						action.visible = parentItems.length > 0;
					}
				})
			}
		})
	}
} )();
```
