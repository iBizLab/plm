<p class="panel-title"><b>执行代码</b></p>

```javascript
const controllersMap = view.ctx.controllersMap;
const card_view = controllersMap.get("insight_reportcustom_card_view");
const selectdata = card_view.layoutPanel.panelItems.dataview.control.state.selectedData;
uiLogic.selecteddata = selectdata;
console.log(selectdata);

```
