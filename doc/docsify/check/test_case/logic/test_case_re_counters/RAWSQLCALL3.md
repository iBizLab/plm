<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_bug 
FROM
	work_item t, work_item_type t1 
WHERE t.work_item_type_id = t1.id and t1.`group` = 'bug'
and	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'work_item' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case'
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND t.`IS_DELETED` = 0
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
