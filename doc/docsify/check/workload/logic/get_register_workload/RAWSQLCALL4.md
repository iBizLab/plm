<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `ESTIMATED_WORKLOAD` from workload where  PRINCIPAL_TYPE = ? and PRINCIPAL_ID = ? and CATEGORY = 'ESTIMATED_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`
2. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`

