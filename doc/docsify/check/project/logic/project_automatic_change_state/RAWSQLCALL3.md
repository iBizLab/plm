<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    MIN(wi.ACTUAL_START_AT) AS ACTUAL_START_AT
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
WHERE
    p.id = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
