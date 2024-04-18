<p class="panel-title"><b>执行代码</b></p>

```javascript
if(uiLogic.form.data){
    if(uiLogic.form.data.is_archived === 1) {
         view.layoutPanel.panelItems['container_attention'].panelItems.attentions.state.readonly = true;
    }
    if(uiLogic.form.data.is_deleted ===1){
        view.layoutPanel.panelItems['container_attention'].panelItems.attentions.state.readonly = true;
    }
}
```
