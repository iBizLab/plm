<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单关联工单
SELECT
	count( t.id ) AS ticket_re_ticket 
FROM
	ticket t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? 
        AND t11.`TARGET_TYPE` = 'ticket'
        AND t11.`PRINCIPAL_TYPE` = 'ticket' ) 
	) 
    AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
