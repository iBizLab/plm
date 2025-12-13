<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) my_todo_count
FROM `WORK_ITEM` t1
         LEFT JOIN `WORK_ITEM_STATE` t3 ON t1.`STATE` = t3.`ID`
WHERE ((t1.`ASSIGNEE_ID` = ? OR exists(select 1
                                       from executor t2
                                       where t1.id = t2.owner_id
                                         and t2.owner_type = 'WORK_ITEM'
                                         and t2.owner_subtype = 'WORK_ITEM'
                                         and t2.user_id = ?)) AND t1.`IS_ARCHIVED` = 0 AND t1.`IS_DELETED` = 0 AND
       t3.`TYPE` <> 'completed')
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
