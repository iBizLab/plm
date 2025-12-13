<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `DURATION` from workload where  PRINCIPAL_TYPE = ? and PRINCIPAL_ID = ? and CATEGORY = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`
2. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`
3. `Default(传入变量).CATEGORY(工时类别)`

重置参数`total_register(已登记总工时)`，并将执行sql结果赋值给参数`total_register(已登记总工时)`
