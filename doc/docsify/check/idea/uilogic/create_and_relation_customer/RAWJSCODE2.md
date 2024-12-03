<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.customer;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = choose.split(',').map(id => ({ id }));
    uiLogic.dto.principal_id = uiLogic.idea.id;
    uiLogic.dto.id = uiLogic.idea.id;
    uiLogic.dto.principal_type = "idea";
    uiLogic.dto.target_type = "customer";
}
```
