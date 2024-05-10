<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE release
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

