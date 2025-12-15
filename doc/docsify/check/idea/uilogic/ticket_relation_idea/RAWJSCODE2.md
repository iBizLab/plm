<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_level = view.layoutPanel.panelItems.choose_level.value;
if(choose != null && choose != ''){
    const srfactionparam = JSON.parse(choose);
    // 将 owner_id 替换为 target_id
    if (srfactionparam && Array.isArray(srfactionparam)) {
        srfactionparam.forEach(item => {
            item.target_id = item.owner_id
            delete item.owner_id
        })
    }
    uiLogic.dto.srfactionparam = srfactionparam;
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
// 重要程度
if (choose_level != null && choose_level != '') {
    uiLogic.dto.level = choose_level;
}
```
