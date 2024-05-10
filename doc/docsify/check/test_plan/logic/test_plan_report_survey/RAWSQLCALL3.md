<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    CASE
        WHEN COUNT(DISTINCT r.CASE_ID) > 0 THEN ROUND((COUNT(DISTINCT CASE WHEN r.STATUS = '10' THEN r.CASE_ID END) * 100.0 / COUNT(DISTINCT r.CASE_ID)), 1)
        ELSE 0
        END AS Pass_Percentage
FROM
    test_plan tp
        LEFT JOIN
    run r ON tp.ID = r.PLAN_ID
WHERE
        tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
