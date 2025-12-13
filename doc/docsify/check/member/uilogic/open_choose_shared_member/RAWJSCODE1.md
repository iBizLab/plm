<p class="panel-title"><b>执行代码</b></p>

```javascript
const check_type = view.layoutPanel.panelItems.check_type.value;
uiLogic.default.check_type = 'reader';
if(check_type) {
    uiLogic.default.check_type = check_type;
}
```
