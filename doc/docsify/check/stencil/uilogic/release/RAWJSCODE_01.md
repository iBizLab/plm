<p class="panel-title"><b>执行代码</b></p>

```javascript
// uiLogic.stencil = view.layoutPanel.panelItems.form.control.getReal()[0];

const stencil = uiLogic.stencil;

console.info(stencil);

if(stencil.format_type === "HTML"  &&  stencil.html_description !== undefined){
    stencil.content = stencil.html_description;
}
if(stencil.format_type === "MD"  &&  stencil.md_description !== undefined){
    stencil.content = stencil.md_description;
}
if(stencil.format_type === "EXCEL" &&  stencil.excel_description !== undefined){
    stencil.content = stencil.excel_description;
}



```
