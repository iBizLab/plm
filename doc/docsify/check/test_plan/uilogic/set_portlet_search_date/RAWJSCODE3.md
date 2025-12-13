<p class="panel-title"><b>执行代码</b></p>

```javascript
const { daily_test, daily_tendencies } = uiLogic;
if (daily_test) {
    Object.assign(daily_test.params, uiLogic.defaultDate);
}
if (daily_tendencies) {
    Object.assign(daily_tendencies.params, uiLogic.defaultDate);
}
```
