<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
count(t1.id) as `dependency`
FROM `RELATION` t1 
WHERE 
( ( exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = ? and t2.is_deleted = 0)  
OR  exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= ? and t2.is_deleted = 0) )  
AND  t1.`PRINCIPAL_TYPE` = 'dependency' )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).ID(标识)`
2. `work_item(工作项).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
