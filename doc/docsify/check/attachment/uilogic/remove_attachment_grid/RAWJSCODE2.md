<p class="panel-title"><b>执行代码</b></p>

```javascript
del = await ibiz.confirm.error({
    title: ibiz.i18n.t('runtime.controller.common.control.dataDeletion'),
    desc: ibiz.i18n.t(
    '确认删除文件？',
    ),
});

if (del) {
    uiLogic.default.is_delete = true;
}
```
