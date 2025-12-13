<p class="panel-title"><b>执行sql语句</b></p>

```sql
select  t1.`id`
from `stage` t1, `stage` t2 
where  t1.`RELEASE_ID` = ?
and t1.`pid` = t2.`id` 
order by t2.`SEQUENCE` asc limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`first_stage(首发布阶段)`
