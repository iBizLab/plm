## 从其他数据库克隆 <!-- {docsify-ignore-all} -->

   

### 逻辑处理脚本

```
console.log('克隆已有数据库:', data);
const app = await ibiz.hub.getApp(context.srfappid);
if (data && data.use_copy === 1 && data.copy_target !== null && data.copy_target !== data.cur_temp) {
    context.ai_knowledge_base = data.id;
    const res = await app.deService.exec('plmweb.ai_knowledge_base', 'fill_temp', context, {
        "ai_knowledge_base": data.id,
        "copy_target": data.copy_target
    });
    if (res && res.ok) {
        var targetData = res.data;
        const {id: _id, name: _name, use_copy: _useCopy, copy_target: _copyTarget, description: _description, source_id: _sourceId, ...rest} = targetData || {};
        Object.assign(data, rest);
        data.cur_temp = targetData.id
    }
}
await app.deService.exec('plmweb.ai_knowledge_base','UpdateTemp', context, data);
```
