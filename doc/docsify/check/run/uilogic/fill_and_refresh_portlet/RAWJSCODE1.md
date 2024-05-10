<p class="panel-title"><b>执行代码</b></p>

```javascript
const dataUIMap = uiLogic.default.$dataUIMap;
uiLogic.config = {};
dataUIMap.forEach((value, key) => {
    if (!value.isOriginField) {
        uiLogic.config[key] = uiLogic.default[key];
    }
})

uiLogic.config = Object.fromEntries(
  Object.entries(uiLogic.config).filter(([key, value]) => !!value)
);
```
