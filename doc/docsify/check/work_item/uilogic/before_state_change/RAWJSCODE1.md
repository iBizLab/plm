<p class="panel-title"><b>执行代码</b></p>

```javascript
const selectedData = uiLogic.selecteddata;
let needDisable = true;
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
    if(needDisable === true){
        const cur_grid = uiLogic.cur_grid;
        let detoolbar = uiLogic.detoolbar;
        detoolbar = cur_grid.ctx.controllersMap.get("treegrid").batchToolbarController.state;
        const detoolbarbutton = detoolbar.buttonsState.children;
        for(let j = 0; j <detoolbarbutton.length;j++){
            const toolitem = detoolbarbutton[j];
            if (toolitem.uiActionId == "change_state@work_item"){
                toolitem.disabled = true;
            }
        }
    }
}
```
