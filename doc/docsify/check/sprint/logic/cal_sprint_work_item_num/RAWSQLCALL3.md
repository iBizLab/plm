<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `completed` from work_item where IS_DELETED = '0' and `STATE` = '40' and SPRINT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
