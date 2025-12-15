<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log('测试');
console.log(view);
let myMap = view.ctx.controllersMap;
const lastKey = [...myMap.keys()].pop();
const lastValue = myMap.get(lastKey);
uiLogic.grid = lastValue.layoutPanel.panelItems.grid.control;
console.log(uiLogic.grid);
```
