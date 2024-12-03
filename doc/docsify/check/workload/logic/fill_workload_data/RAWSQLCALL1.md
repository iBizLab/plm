<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT t1.PRINCIPAL_ID,
       t1.PRINCIPAL_TYPE,
       t1.DURATION,
       t2.WORK_ITEM_TYPE_ID,
       t1.`ID`,
       t1.`NAME`,
       t1.`PRINCIPAL_TYPE`,
       concat(t1.`RECENT_PARENT_IDENTIFIER`, '-', t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`
FROM workload t1
         LEFT JOIN `work_item` t2 ON t1.PRINCIPAL_ID = t2.ID
where t1.PRINCIPAL_ID = ? limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `obj(工时).principal_id`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
