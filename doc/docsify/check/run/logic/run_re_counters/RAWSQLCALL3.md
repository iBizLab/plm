<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count( t.id ) AS run_re_bug from work_item t, work_item_type t1
where  t.`IS_DELETED` = 0 and t.work_item_type_id = t1.id 
and t1.`group` = 'bug'
and EXISTS ( select 1 from `RELATION` t2 
where t.`ID` = t2.`TARGET_ID` 
and  t2.`TARGET_TYPE` = 'work_item' and t2.`PRINCIPAL_TYPE` = 'run'
and t2.`PRINCIPAL_ID` = ?) 
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
