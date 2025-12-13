<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems; // 视图面板对象
// 回复框是否显示
panel.container_comment.state.visible = (panel.form.control.state.data.status == '1');
panel.form.control.state.data.discuss_num = uiLogic.default.discuss_num;
panel.form.control.state.data.reply_num = uiLogic.default.reply_num;
```
