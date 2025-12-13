<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.send = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_send.state;
uiLogic.reset = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_cancel.state;
uiLogic.icon = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_icon.state;
const text_box = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox;


uiLogic.send.visible = uiLogic.context.srfreadonly !== true && text_box.value ? true : false;
uiLogic.reset.visible = uiLogic.context.srfreadonly !== true && text_box.value ? true : false;
uiLogic.icon.visible = text_box.value ? false : true;
```
