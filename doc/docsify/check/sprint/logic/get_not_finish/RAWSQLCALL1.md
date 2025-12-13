<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as not_finish_num from work_item where `state` <> '40' and sprint_id = ? and project_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).project_id(项目标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
