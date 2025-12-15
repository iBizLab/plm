<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('获取表格总条数');
const total = uiLogic.ctrl.state.total;
uiLogic.view.layoutPanel.state.data.total = total;
if(!total){
    view.layoutPanel.panelItems.grid.state.visible = false;
}else{
    view.layoutPanel.panelItems.grid.state.visible = true;
}
```
