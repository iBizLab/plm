<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as REMAINING_WORKLOAD  from extend_storage where owner_id = ? and owner_type = 'TEST_CASE' and `name` = 'REMAINING_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
