<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) idea_num
from idea t1
         inner join dictionary t2 on t1.STATE = t2.VAL and t2.CATALOG = 'idea_state' and t2.type = 'in_progress'
         inner join product t3 on t1.PRODUCT_ID = t3.ID and t3.IS_ARCHIVED = 0 and t3.IS_DELETED = 0
where t1.ASSIGNEE_ID = ?
  and t1.IS_DELETED = 0
  and t1.IS_ARCHIVED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
