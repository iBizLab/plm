<p class="panel-title"><b>执行代码</b></p>

```javascript
view.parentView.state.isLoading = false;
view.parentView.closeView();
ibiz.mc.command.send({srfdecodename: 'article_page',srfkey:uiLogic.context.article_page}, 'OBJECTUPDATED',uiLogic.form.triggerKey);
```
