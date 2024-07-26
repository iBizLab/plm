<p class="panel-title"><b>执行代码</b></p>

```javascript
var details = uiLogic.default.details;
for (var i = 0; i < details.length; i++) {
    ibiz.hub.getApp(context.srfappid).deService.exec(
        'plmweb.work_item_wizard_detail',
        'Create',
        context,
        uiLogic.default.details[i],
    );
}




```
