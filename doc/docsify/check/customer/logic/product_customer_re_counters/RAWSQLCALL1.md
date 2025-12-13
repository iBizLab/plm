<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	COUNT( t2.id ) as customer_re_ticket
FROM
	customer t,
	ticket t2 
WHERE
	t.id = ? 
	AND t.id = t2.CUSTOMER_ID 
	AND t2.IS_DELETED = 0 
	
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
