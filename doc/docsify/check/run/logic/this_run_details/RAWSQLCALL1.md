<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 最近执行	
SELECT
	t2.NAME AS RECENT_TEST_PLAN,
	t.EXECUTOR_NAME AS RECENT_EXECUTOR_NAME,
	t.EXECUTED_AT AS RECENT_EXECUTED_AT,
	t.`STATUS` AS RECENT_RUN_HISTORY
FROM
	run t,
	test_plan t2
WHERE
	t.CASE_ID = ?
	AND t.`STATUS` IS NOT NULL 
	AND t.PLAN_ID = t2.id 
ORDER BY
	EXECUTED_AT DESC 
	LIMIT 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
