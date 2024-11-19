<p class="panel-title"><b>执行sql语句</b></p>

```sql
select cast((sum(if(t2.TYPE = 'completed', 1, 0)) * 100) / count(1) as decimal(10, 2)) progress
from work_item t1
         inner join work_item_state t2 on t1.STATE = t2.ID
where t1.id in (select target_id
                from relation
                where PRINCIPAL_ID = ?
                  and PRINCIPAL_TYPE = 'idea'
                  and TARGET_TYPE = 'work_item')
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`idea(idea)`
