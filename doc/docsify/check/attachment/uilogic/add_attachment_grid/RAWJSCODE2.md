<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    // 保存数据
    await ibiz.hub.getApp(context.srfappid).deService.exec(
        'plmweb.attachment',
        'create',
        context,
        uiLogic.attach[0],
    );
    // 刷新表格
    uiLogic.grid.refresh();
    } 
)();
```
