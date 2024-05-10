<p class="panel-title"><b>执行代码</b></p>

```javascript
const app2 = ibiz.hub.getApp(context.srfappid);
app2.deService.exec('plmweb.attachment', 'fetchdefault', {...context, test_case: viewParam.id}).then((res) => {
    const attachments = res.data || [];
    attachments.forEach((attachment) => {
        app2.deService.exec('plmweb.attachment', 'remove', {...context, attachment: attachment.srfkey}, attachment);
    })
})
```
