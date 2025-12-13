<p class="panel-title"><b>执行sql语句</b></p>

```sql
DELETE c FROM ai_kb_chunk  c WHERE  exists (select 1 from ai_kb_document doc where doc.id=c.document_id and doc.SYNC_ID= ? )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

