<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) case_num
from test_case t1
         inner join library t2 on t1.TEST_LIBRARY_ID = t2.ID and t2.IS_DELETED = 0 and t2.IS_ARCHIVED = 0
where t1.MAINTENANCE_ID = ?
  and t1.IS_DELETED = 0
  and t1.IS_ARCHIVED = 0
  and t1.STATE = '10'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
