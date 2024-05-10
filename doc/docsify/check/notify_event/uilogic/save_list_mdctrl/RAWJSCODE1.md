<p class="panel-title"><b>执行代码</b></p>

```javascript
const list = uiLogic.setting_model_list;
const items = list.getAllData() || [];
if (uiLogic.listservice) {
    uiLogic.listservice.updateBatch(list.context, items).then((res) => {
        if (res.data) {
            list.setData(res.data);
        }
        list.evt.emit('onSaveSuccess', undefined);
    })
}
```
