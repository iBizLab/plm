<p class="panel-title"><b>执行代码</b></p>

```javascript
const portletView = view.getController("studentGridView");
if (portletView) {
    uiLogic.data.n_create_time_gtandeq=portletView.params.n_create_time_gtandeq;
    uiLogic.data.n_create_time_ltandeq=portletView.params.n_create_time_ltandeq;
}
```
