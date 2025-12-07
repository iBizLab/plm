<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE relation
SET RELATION_TYPE = 'main_space'
WHERE PRINCIPAL_ID = ? AND TARGET_ID = ? AND (PRINCIPAL_TYPE = 'project' OR PRINCIPAL_TYPE = 'product') AND TARGET_TYPE = 'space';
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).principal_id`
2. `Default(传入变量).ID(标识)`

