<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_relation_data;
let choose_type = view.layoutPanel.panelItems.choose_type.value;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
    uiLogic.viewctx.project = view.context.curproject;
}
// 关联类型
if (choose_type != null && choose_type != '') {
    uiLogic.dto.relation_type = choose_type;
}
```
