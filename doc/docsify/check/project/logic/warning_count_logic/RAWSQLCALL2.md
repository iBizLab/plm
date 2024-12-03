<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(1) AS total_work_item_count
FROM
    work_item w 
    LEFT JOIN project p on w.PROJECT_ID = p.ID
    LEFT JOIN work_item_state s on s.ID = w.state
WHERE
    W.IS_DELETED = 0
    AND W.IS_ARCHIVED = 0
    AND s.type <> 'completed'
    AND p.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
