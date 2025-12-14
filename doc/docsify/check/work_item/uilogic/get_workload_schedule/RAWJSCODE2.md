<p class="panel-title"><b>执行代码</b></p>

```javascript
const form = uiLogic.form.details;
const srfreadonly = context.srfreadonly;
if(srfreadonly === true || srfreadonly === 'true'){
    // 工时按钮
    form.grouppanel1.state.visible=false; 
    // 基线按钮
    form.grouppanel12.state.visible=false;
    // 附件按钮
    form.grouppanel11.state.actionGroupState.uaa6fcf7.visible=false;
}
const _type = uiLogic.form.state.data.work_item_sub_type;
form.tabpanel1_child.state.visible = !!_type;

```
