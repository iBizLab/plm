<p class="panel-title"><b>执行代码</b></p>

```javascript
var disabled = view.layoutPanel.panelItems.form.control.state.data.disabled;
if(disabled === 1){
    view.layoutPanel.panelItems.button_okaction.state.disabled = true;
}

```
