<p class="panel-title"><b>执行代码</b></p>

```javascript

    const toolbar_state = uiLogic.toolbar.state.buttonsState;
    const srfreadonly = context.srfreadonly;
    if (srfreadonly === "true") {
        toolbar_state.visible = false;
        console.log("进入")
    }
    console.log(toolbar_state);


```
