<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_relation_data = view.layoutPanel.panelItems.choose_relation_data;
const panel = view.layoutPanel.panelItems.choose_data;
if (choose_relation_data) {
    panel.state.visible = false;
}
uiLogic.default.choose_relation_data = null;
```
