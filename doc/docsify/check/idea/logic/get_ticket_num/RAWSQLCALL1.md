<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(num) count_num, sum(num) sum_num 
from (select CASE
                 WHEN t2.TYPE = 'completed' THEN 1
                 ELSE 0
                 END num
      from ticket t1
               left join dictionary t2 on t1.STATE = t2.VAL and t2.CATALOG = 'ticket_state'
      where t1.id in (select TARGET_ID ticket_id
                      from relation
                      where PRINCIPAL_ID = ?
                        and PRINCIPAL_TYPE = 'idea'
                        and TARGET_TYPE = 'ticket')
      and t1.IS_DELETED = 0) as t1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
