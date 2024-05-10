<p class="panel-title"><b>执行代码</b></p>

```javascript
const { activetab, details } = uiLogic;
if (activetab) {
    const druipart = details[`${activetab}_druipart`]
    if (druipart && druipart.embedView) {
        uiLogic.curview = druipart.embedView;
    }
}
```
