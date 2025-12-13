<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox1.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox1 = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.clearReply();
view.layoutPanel.panelItems.send_comment_container.state.visible=false;
view.layoutPanel.panelItems.comment_container.state.visible=true;

```
