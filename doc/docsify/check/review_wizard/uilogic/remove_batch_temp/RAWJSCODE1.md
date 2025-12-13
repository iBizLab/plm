<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('遍历临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmweb.review_content');
    const list = service.local.getList();
    // 遍历临时数据删除
    list.forEach(item => {
        service.local.delete(context, item.id);
    })
    const service2 = await serviceUtil.getService(context, 'plmweb.attention');
    const list2 = service2.local.getList();
    // 遍历临时数据删除
    list2.forEach(item => {
        service2.local.delete(context, item.id);
    })
    } 
)();

```
