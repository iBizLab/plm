<p class="panel-title"><b>执行代码</b></p>

```javascript

var comments_count = uiLogic.ctrl.panelItems.comment_count;
if (comments_count.value == 1) {
    uiLogic.ctrl.panelItems.comments.state.visible = false;
    comments_count.value = 0;
    comments_count.state.visible = false;
} else {
    comments_count.value = comments_count.value - 1;
}
```
