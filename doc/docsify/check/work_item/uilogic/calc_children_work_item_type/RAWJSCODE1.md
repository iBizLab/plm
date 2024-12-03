<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type || '';
const codelistItem = uiLogic.codelistitems.find(x => x.id === type);

if (codelistItem && codelistItem.data) {
    uiLogic.children_type = codelistItem.data;
    uiLogic.default.srfUserData = {
        pickerData: uiLogic.children_type,
        codelistTag: 'plmweb.projmgmt__work_item_type',
        pickerField: 'work_item_type_id',
        defaultValue: uiLogic.children_type.split(',')[0]
    };
}

```
