<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_version
FROM
	`version` t 
WHERE
    t.owner_id = ? and t.owner_type = 'TEST_CASE'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
