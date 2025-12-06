<p class="panel-title"><b>执行代码</b></p>

```javascript
const page_info = uiLogic.page_info;

console.info(page_info);

if(page_info.format_type === "MD"  &&  page_info.formitem !== undefined){
    page_info.content = page_info.formitem;
}
if(page_info.format_type === "EXCEL" &&  page_info.formitem1 !== undefined){
    page_info.content = page_info.formitem1;
}



```
