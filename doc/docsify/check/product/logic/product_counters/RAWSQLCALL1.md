<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 产品关联需求
SELECT
	count( t.id ) AS idea_total 
FROM
	idea t 
WHERE
	t.product_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
