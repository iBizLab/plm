<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE ticket
SET tags = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', tags, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, tags) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

