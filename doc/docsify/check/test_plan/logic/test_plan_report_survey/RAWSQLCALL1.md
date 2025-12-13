<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as case_count from test_plan tp left join run r on tp.ID = r.PLAN_ID where tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
