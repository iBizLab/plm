<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `DECIMAL_VALUE` from `workload` where PRINCIPAL_ID = ? and PRINCIPAL_TYPE = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `actual(实际工时).OWNER_ID(所属数据标识)`
2. `actual(实际工时).OWNER_TYPE(所属数据对象)`

重置参数`actual(实际工时)`，并将执行sql结果赋值给参数`actual(实际工时)`
