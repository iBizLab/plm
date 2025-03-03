<p class="panel-title"><b>执行代码</b></p>

```javascript

var comment_count = uiLogic.ctrl.formItems.comment_count;
if (comment_count.value == 1) {
    uiLogic.ctrl.formItems.comments.state.visible = false;
    comment_count.value = 0;
    comment_count.state.visible = false;
} else {
    comment_count.value = comment_count.value - 1;
}
```
