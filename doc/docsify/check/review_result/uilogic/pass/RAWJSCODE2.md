<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.content_grid.state.rows;
const ctx = uiLogic.ctx;

if (rows && rows.length > 0) {
    const cur_content_id = ctx.review_content;
    let next_content = null;
    let foundMatch = false;

    rows.forEach((row, index) => {
        const for_id = row.data.id;
        if (foundMatch) {
            next_content = row.data;
            foundMatch = false;
        }
        if (!foundMatch && for_id == cur_content_id) {
            foundMatch = true;
        }
    });

    const review_results_state = uiLogic.parent_form.control.details.review_results.state;
    review_results_state.keepAlive = true;
    review_results_state.visible = false;
    const grouppanel6_state = uiLogic.parent_form.control.details.grouppanel6.state;

    if (next_content) {
        ctx.review_content = next_content.id;
        grouppanel6_state.visible = false;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(next_content.id);
        uiLogic.next_content = next_content;
    } else {
        grouppanel6_state.visible = true;
        const choose_data = uiLogic.parent_form.control.details.choosed_content;
        choose_data.setDataValue(null);
    }
}
```
