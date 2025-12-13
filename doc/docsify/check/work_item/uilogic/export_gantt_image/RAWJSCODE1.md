<p class="panel-title"><b>执行代码</b></p>

```javascript
const viewDom = document.getElementById(view.id);
const gantt = viewDom.querySelector('.ibiz-control-gantt');
if (gantt) {
    gantt.classList.add('is-exporting');
    await ibiz.util.html2canvas.exportCanvas(gantt, { fileName: view.model.caption });
    gantt.classList.remove('is-exporting');
}
```
