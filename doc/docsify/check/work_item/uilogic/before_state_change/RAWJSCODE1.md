<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectedData = uiLogic.selecteddata;
let needDisable = true;
console.log(selectedData);

if (selectedData && selectedData.length > 0) {
    const firstData = selectedData[0];

    for (let i = 0; i < selectedData.length; i++) {
        const curData = selectedData[i];
        const dataType = curData.work_item_type_id;
        if (firstData.work_item_type_id !== dataType) {
            needDisable = true;
            break; 
        } else {
            needDisable = false;
        }
    }
    console.log(needDisable);

}
```
