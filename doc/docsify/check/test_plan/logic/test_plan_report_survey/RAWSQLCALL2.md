<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    ROUND((COUNT(DISTINCT r.CASE_ID) * 100.0 / COUNT(DISTINCT tc.ID)), 1) AS Coverage_Percentage
FROM
    test_plan tp
        LEFT JOIN
    test_case tc ON tp.LIBRARY_ID = tc.TEST_LIBRARY_ID and tc.IS_DELETED = 0
        LEFT JOIN
    run r ON tp.ID = r.PLAN_ID AND tc.ID = r.CASE_ID
WHERE
        tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
