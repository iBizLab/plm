<p class="panel-title"><b>执行代码</b></p>

```javascript
const currentDate = new Date();
const lastDate = new Date(currentDate.getTime() - 604800000);

const curYear = currentDate.getFullYear();
const curMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const curDay = currentDate.getDate().toString().padStart(2, '0');
const lastYear = lastDate.getFullYear();
const lastMonth = (lastDate.getMonth() + 1).toString().padStart(2, '0');
const lastDay = lastDate.getDate().toString().padStart(2, '0');

uiLogic.defaultDate = {
    n_create_time_gtandeq: `${lastYear}-${lastMonth}-${lastDay}`,
    n_create_time_ltandeq: `${curYear}-${curMonth}-${curDay}`
}
```
