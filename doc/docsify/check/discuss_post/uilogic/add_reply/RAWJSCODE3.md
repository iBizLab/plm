<p class="panel-title"><b>执行代码</b></p>

```javascript
debugger;
var comments_control = uiLogic.view.layoutPanel.panelItems.form.control.formItems.find(item => item.name == "comments").editor;
var comment = uiLogic.comment;
if (view.operation_type == "send_post_comment") {
    comments_control.addItem(comment);
} else if (view.operation_type == "edit_post_comment") {
    comments_control.deleteItem(comment.comment_id);
    comments_control.addItem(comment);
}
```
