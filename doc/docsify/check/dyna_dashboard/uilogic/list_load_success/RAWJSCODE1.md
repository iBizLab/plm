<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectData = uiLogic.ctrl.state.selectedData;
if(selectData != null &&  selectData.length > 0){
    const firstObject = selectData[0];
    if(firstObject.dyna_dashboard_name != null && firstObject.dyna_dashboard_name != undefined){
        view.layoutPanel.panelItems.board_title.setDataValue(firstObject.dyna_dashboard_name);
    }  
}
```
