<p class="panel-title"><b>执行代码</b></p>

```javascript
const attention_counts = uiLogic.view.layoutPanel.panelItems.attention_count;
if (attention_counts && uiLogic.default.attention_count !== undefined) {
    attention_counts.setDataValue(uiLogic.default.attention_count);
}

const comment_counts = uiLogic.view.layoutPanel.panelItems.comment_count;
comment_counts.setDataValue(uiLogic.default.comment_count);


```
