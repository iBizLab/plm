<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_type = uiLogic.ctrl.panelItems.choose_data.data.choose_type;
if (choose != null && choose != '') {
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
}
// 依赖类型
if (choose_type != null && choose_type != '') {
    uiLogic.dto.relation_type = choose_type;
}
```
