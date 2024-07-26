<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() {
    const app2 = ibiz.hub.getApp(context.srfappid);
    const dataItems = await app2.codeList.get("plmweb.projmgmt__work_item_type", context, params);
    const type = uiLogic.type || '';
    const codelistItem = dataItems.find(x => x.id === type);
    
    if (codelistItem && codelistItem.data) {
        uiLogic.children_type = codelistItem.data;
        params.n_work_item_type_id_in = codelistItem.data;
    }
})();
```
