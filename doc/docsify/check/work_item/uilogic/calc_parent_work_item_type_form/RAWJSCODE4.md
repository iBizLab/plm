<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() {
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const type = uiLogic.type || '';
    const parentItems = dataItems.filter(x => x.data && x.data.includes(type));
    if (parentItems.length > 0) {
        uiLogic.parent_type = parentItems.map(x => x.value).join(',');
        uiLogic.ctrl.state.data.n_work_item_type_id_in = uiLogic.parent_type;
    }
})();
```
