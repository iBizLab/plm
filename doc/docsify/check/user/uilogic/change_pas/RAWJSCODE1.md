<p class="panel-title"><b>执行代码</b></p>

```javascript
(async function() { 
const bol = await uiLogic.form.validate();
if (bol) {
    ibiz.util.action.execAndResolved(
      'change_password',
      {
        context: uiLogic.form.context,
        params: uiLogic.form.params,
        data: [uiLogic.default],
        view: uiLogic.view,
      },
      uiLogic.form.model.appId,
    );
} else {
    ibiz.message.error('请检查表单填写！');
}
} )();
```
