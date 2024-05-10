<p class="panel-title"><b>执行代码</b></p>

```javascript
const total = uiLogic.ctrl.state.total;
const rows = uiLogic.grid.state.rows;
uiLogic.view.layoutPanel.state.data.total = rows.length;

if (rows && rows.length > 0) {
    let total_already = 0;
    rows.forEach(row => {
        const state = row.data.review_result;
    if (state !== null && state !== undefined) {
        total_already++;
    }
    });
    uiLogic.view.layoutPanel.state.data.total_already = total_already;

    const floatTotal = parseFloat(rows.length);
    const floatTotalAlready = parseFloat(total_already);

    console.log("floatTotal:", floatTotal);
    console.log("floatTotalAlready:", floatTotalAlready);
    
    const ratio = Math.round((floatTotalAlready / floatTotal) * 100); 
    console.log(ratio);
    uiLogic.view.layoutPanel.state.data.schedule = ratio;
} else {
    console.log("Error: No rows found");
}

```
