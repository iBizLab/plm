<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = uiLogic.files.map(item =>{
	return {
	  name: item.name,
	  file_id: item.id,
	  id: item.uuid,
	}
})
```
