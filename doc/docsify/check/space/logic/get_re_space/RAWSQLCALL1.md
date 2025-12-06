<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	t1.ID,
	t1.`NAME`,
	t2.RELATION_TYPE 
FROM
	space t1
	JOIN relation t2 ON t2.TARGET_ID = t1.ID 
WHERE
	t1.IS_DELETED = 0 
	AND t1.IS_ARCHIVED = 0 
	AND t2.PRINCIPAL_TYPE = ? 
	AND t2.TARGET_TYPE = ? 
	AND t2.PRINCIPAL_ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).principal_type`
2. `Default(传入变量).target_type`
3. `Default(传入变量).principal_id`

重置参数`page(page)`，并将执行sql结果赋值给参数`page(page)`
