<p class="panel-title"><b>执行代码</b></p>

```javascript
const { grid } = uiLogic;
if (grid) {
    grid.state.items.map((item) => {
        item.choose_version_id = item.cur_version_id;
        item.choose_version_name = item.cur_version_name;
    })
    grid.state.rows.forEach((row) => {
        row.data.choose_version_id = row.data.cur_version_id;
        row.data.choose_version_name = row.data.cur_version_name;
    })
}
```
