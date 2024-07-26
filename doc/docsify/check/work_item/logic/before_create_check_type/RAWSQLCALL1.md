<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sub_type as work_item_sub_type from work_item_type t1
where exists(select 1 from work_item t2 where t1.id = t2.work_item_type_id and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PID(父标识)`

将执行sql结果赋值给参数`parent_work_item(父工作项)`
