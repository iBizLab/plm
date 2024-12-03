<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的测试用例
SELECT count(t.id) as my_created_test_case FROM test_case t where t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
