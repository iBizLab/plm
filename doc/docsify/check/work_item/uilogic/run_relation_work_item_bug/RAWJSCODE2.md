<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    uiLogic.run_dto.srfactionparam = JSON.parse(choose);
    uiLogic.run_dto.principal_id = view.context.curtest_case;
    uiLogic.run_dto.principal_type = 'bug';
    uiLogic.run_dto.target_type = 'test_case';
}
```
