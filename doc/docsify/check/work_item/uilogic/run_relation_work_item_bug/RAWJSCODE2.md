<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
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
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;

// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    const srfactionparam = JSON.parse(choose);
    // 将 owner_id 替换为 target_id
    if (srfactionparam && Array.isArray(srfactionparam)) {
        srfactionparam.forEach(item => {
            item.target_id = item.owner_id
            delete item.owner_id
        })
    }
    uiLogic.test_case_dto.srfactionparam = srfactionparam;
    uiLogic.test_case_dto.principal_id = view.context.case_id;
    uiLogic.test_case_dto.principal_type = 'test_case';
    uiLogic.test_case_dto.target_type = 'work_item';
}
}
```
