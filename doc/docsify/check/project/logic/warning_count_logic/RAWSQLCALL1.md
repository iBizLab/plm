<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) BETWEEN -3 AND -1
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS upcoming_warning_count,
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) = 0
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS daily_warning_count,
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) > 0
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS overdue_count
FROM
    `WORK_ITEM` t1
JOIN
    `work_item_state` w ON t1.state = w.id;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`
3. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
