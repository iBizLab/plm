<p class="panel-title"><b>执行sql语句</b></p>

```sql
select 
IFNULL(sum(case when name='ACTUAL_WORKLOAD' then DECIMAL_VALUE else 0 end),0) as 'actual_workload',
IFNULL(sum(case when name='ESTIMATED_WORKLOAD' then DECIMAL_VALUE else 0 end),0) as 'estimated_workload'
 from extend_storage t where   exists (select 1 from work_item a where PID=? and t.owner_id=a.id)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`

将执行sql结果赋值给参数`workload_data(工时数据)`
