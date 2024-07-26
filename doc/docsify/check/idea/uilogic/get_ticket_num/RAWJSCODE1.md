<p class="panel-title"><b>执行代码</b></p>

```javascript
let count_num = uiLogic.result.count_num
let sum_num = uiLogic.result.sum_num
if (count_num == '' || count_num == 0) {
    view.layoutPanel.panelItems.form.control.data.ticket_num = '0/0'
    view.layoutPanel.panelItems.form.control.data.ticket_num_percent = 0
} else {
    view.layoutPanel.panelItems.form.control.data.ticket_num = sum_num + '/' + count_num
    view.layoutPanel.panelItems.form.control.data.ticket_num_percent = sum_num / count_num
}
```
