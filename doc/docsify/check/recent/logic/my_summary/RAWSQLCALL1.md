<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(if(t4.`GROUP` <> 'task' and t4.`GROUP` <> 'bug', 1, 0)) other_item_num,
       sum(if(t4.`GROUP` = 'task', 1, 0))                          task_num,
       sum(if(t4.`GROUP` = 'bug', 1, 0))                           bug_num
from work_item t1
         inner join work_item_state t2 on t1.STATE = t2.ID and t2.TYPE = 'in_progress'
         inner join project t3 on t1.PROJECT_ID = t3.ID and t3.IS_DELETED = 0 and t3.IS_ARCHIVED = 0
         inner join work_item_type t4 on t4.ID = t1.WORK_ITEM_TYPE_ID
where (t1.IS_ARCHIVED = 0
    and t1.IS_DELETED = 0)
  and (t1.ASSIGNEE_ID = ?
    or exists (select 1
               from executor t5
               where t1.id = t5.owner_id
                 and t5.owner_type = 'WORK_ITEM'
                 and t5.owner_subtype = 'WORK_ITEM'
                 and t5.user_id = ?))
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
