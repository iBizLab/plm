<p class="panel-title"><b>执行代码</b></p>

```javascript
//uiLogic.page_info = view.layoutPanel.panelItems.form.control.getReal();

const page_info = uiLogic.page_info;

console.info(page_info);

if(page_info.format_type === "HTML"  &&  page_info.html_description !== undefined){
    page_info.content = page_info.html_description;
}
if(page_info.format_type === "MD"  &&  page_info.md_description !== undefined){
    page_info.content = page_info.md_description;
}
if(page_info.format_type === "EXCEL" &&  page_info.excel_description !== undefined){
    page_info.content = page_info.excel_description;
}




```
