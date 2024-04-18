<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
const totalEditor=uiLogic.view.layoutPanel.panelItems.total;
if (totalEditor) {
    totalEditor.setDataValue(total);
}
if(!total){
    uiLogic.ctrl.state.visible = false
}else{
    uiLogic.ctrl.state.visible = true
}
```
