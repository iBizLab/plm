<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_data = uiLogic.parent_form.control.details.choosed_content;
choose_data.setDataValue(uiLogic.default.id);
uiLogic.parent_form.control.details.grouppanel6.state.keepAlive=true;
uiLogic.parent_form.control.details.grouppanel6.state.visible=false;
uiLogic.parent_form.control.details.review_results.state.visible=true;
```
