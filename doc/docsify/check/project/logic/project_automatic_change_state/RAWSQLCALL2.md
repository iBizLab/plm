<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    SUM(CASE WHEN es.name = 'estimated_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS estimated_workload,
    SUM(CASE WHEN es.name = 'actual_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS actual_workload
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
JOIN
    extend_storage es ON wi.id = es.owner_id
WHERE
    p.id = ?
    AND es.owner_type = 'work_item'
    AND (es.name = 'estimated_workload' OR es.name = 'actual_workload')
    AND wi.pid is null;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
