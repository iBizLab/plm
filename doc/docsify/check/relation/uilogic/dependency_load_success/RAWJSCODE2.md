<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
if(!total){
    view.layoutPanel.panelItems.list.state.visible = false;
}else{
    view.layoutPanel.panelItems.list.state.visible = true;
}
```
