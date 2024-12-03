<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.send = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_send.state;
uiLogic.reset = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_cancel.state;
uiLogic.icon = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.comment_icon.state;
uiLogic.icon.visible = false;
uiLogic.send.visible = uiLogic.context.srfreadonly !== true;
uiLogic.reset.visible = uiLogic.context.srfreadonly !== true;
```
