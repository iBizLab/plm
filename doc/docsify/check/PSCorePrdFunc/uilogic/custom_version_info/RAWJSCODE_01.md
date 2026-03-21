<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log("custom version execed");
// ibiz.mc.command.create.send({ srfdecodename: 'PSCorePrdFunc'}, { triggerKey: 'specinstallbtn' });
if(view && view.parentView ){
    await view.parentView.callUIAction('Refresh');
}
```
