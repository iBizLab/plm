<p class="panel-title"><b>执行代码</b></p>

```javascript
const report_id = uiLogic.ctrl.model.id;
const prefix = "uxbireport__";
const remainingId = report_id.replace(prefix, '');
const newRemainingId = remainingId.replace(/__(?!__)/, '.');

const result = await ibiz.util.biReport.openDesignPage(context, params, { mode: 'DATA', reportId: newRemainingId });
return result;

```
