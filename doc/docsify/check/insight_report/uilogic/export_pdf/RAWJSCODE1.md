<p class="panel-title"><b>执行代码</b></p>

```javascript
const viewDom = document.getElementById(view.id);
if (viewDom) {
    const content = viewDom.querySelector('.ibiz-bi-report-panel-content>.el-collapse');
    const fileName = view.model.caption;
    ibiz.util.html2canvas.exportCanvas(content, { fileName });
}
```
