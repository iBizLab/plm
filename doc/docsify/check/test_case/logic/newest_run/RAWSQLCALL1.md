<p class="panel-title"><b>执行sql语句</b></p>

```sql
select t2.name as test_plan_name,t.EXECUTOR_NAME,t.EXECUTED_AT,t.`STATUS` as run_status from run t,test_plan t2 where  t.CASE_ID=? and t.`STATUS` is not null and t.PLAN_ID=t2.id  order by EXECUTED_AT desc LIMIT 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
