<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	sum( result ) as case_number
FROM
	(
	SELECT
	CASE
			
		WHEN
			t1.RESULT_STATE = 1 THEN
				1 ELSE 0 
			END result 
FROM
	review_result t1
	LEFT JOIN relation t2 ON t2.PRINCIPAL_ID = ?
WHERE
	t1.CONTENT_ID = t2.ID 
	AND t1.STAGE_ID = ? 
	) t
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).review_id`
2. `Default(传入变量).stage_id`

重置参数`info(返回前端的信息)`，并将执行sql结果赋值给参数`info(返回前端的信息)`
