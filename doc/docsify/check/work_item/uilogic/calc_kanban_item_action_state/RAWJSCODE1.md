<p class="panel-title"><b>执行代码</b></p>

```javascript
setTimeout(() => {
	const items = uiLogic.kanban.state.items;
    const uaState = uiLogic.kanban.state.uaState;
	if (items && items.length > 0) {
		items.forEach(item => {
            const actions = uaState[item.srfkey];
            Object.values(actions).forEach(action=>{
               // 归档
					if (action.uiActionId === 'archive@work_item') {
						action.disabled = item.is_archived !== 0;
					} else if (action.uiActionId === 'activate@work_item') {
						// 激活
						action.disabled = item.is_archived === 0;
					} 
            })
        })
	}
}, 1000);
```
