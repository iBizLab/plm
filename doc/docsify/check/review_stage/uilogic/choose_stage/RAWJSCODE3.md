<p class="panel-title"><b>执行代码</b></p>

```javascript
const cur_reviewer_id = uiLogic.parent_form.control.details.cur_reviewer_id;
cur_reviewer_id.setDataValue(uiLogic.review_info.cur_reviewer_id);

const curstage_id = uiLogic.parent_form.control.details.curstage_id;
curstage_id.setDataValue(uiLogic.default.id);
```
