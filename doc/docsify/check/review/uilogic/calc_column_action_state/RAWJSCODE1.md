<p class="panel-title"><b>执行代码</b></p>

```javascript
	const rows = uiLogic.grid.state.rows;
    const ctx = uiLogic.ctx;
	if (rows && rows.length > 0) {
		rows.forEach(row => {
			const titleColumn = row.uiActionGroupStates.name;
			const cur_user = ctx.srfuserid;
			const state = row.data.state;
            const type = row.data.type;
			const create_man = row.data.create_man;
			if (titleColumn && Object.values(titleColumn).length > 0) {
				Object.values(titleColumn).forEach(action => {
                    action.visible = false;
                    if(action.uiActionId === 'delete@review'&& create_man == cur_user){
                        action.visible = true;
                    }else if (action.uiActionId === 'repeal_review@review'&& create_man == cur_user && state == '20' ) {
						action.visible = true;
					} else if (action.uiActionId === 'submit_review@review'&& create_man == cur_user && (state == '10'||state == '50') ) {
						action.visible = true;
					}else if (action.uiActionId === 'set_category@review'&& create_man == cur_user && type == 'TEST_CASE'){
                        action.visible = true;
                    }else if (action.uiActionId === 'set_idea_category@review'&& create_man == cur_user && type == 'IDEA'){
                        action.visible = true;
                    }else if (action.uiActionId === 'set_work_item_category@review'&& create_man == cur_user && type == 'WORK_ITEM'){
                        action.visible = true;
                    }else if (action.uiActionId === 'set_page_category@review'&& create_man == cur_user && type == 'PAGE'){
                        action.visible = true;
                    }
				})
			}
		})
	}

```
