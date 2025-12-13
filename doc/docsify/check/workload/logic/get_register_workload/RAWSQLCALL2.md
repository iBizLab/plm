<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as `REMAINING_WORKLOAD` from `extend_storage` where  OWNER_ID = ? and OWNER_TYPE = ? and `NAME` = 'REMAINING_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`
2. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
