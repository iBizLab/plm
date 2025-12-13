<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as `not_completed_num`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
WHERE 
( t1.`ASSIGNEE_ID` = ?  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t31.`TYPE` <> 'completed' )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
