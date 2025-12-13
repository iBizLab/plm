<p class="panel-title"><b>执行代码</b></p>

```javascript
var attentions = uiLogic.commit_object.attentions;
for (var i = 0; i < attentions.length; i++) {
    ibiz.hub.getApp(context.srfappid).deService.exec(
        'plmmob.attention',
        'Create',
        context,
        uiLogic.commit_object.attentions[i],
    );
}

```
