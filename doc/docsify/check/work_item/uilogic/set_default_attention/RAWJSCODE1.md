<p class="panel-title"><b>执行代码</b></p>

```javascript
const attentions = uiLogic.form.state.data.attentions;
if (attentions && attentions[0]) {
  uiLogic.form.state.data.attentions = [{ ...attentions[0], ...uiLogic.attention }]
  return;
}
uiLogic.form.state.data.attentions = [uiLogic.attention];
```
